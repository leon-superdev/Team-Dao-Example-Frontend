import React, { ChangeEvent, useState, useEffect, useCallback } from 'react'
import { Routes, Router, Route, Link } from 'react-router-dom'
import {
  Container,
  Box,
  Paper,
  Typography,
  useMediaQuery,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import { RefreshRounded } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import DataLoading from '@/components/loading/DataLoading'
import BlockLoading from '@/components/loading/BlockLoading'
import { useProgramContext } from '../components/provider/programContextProvider'
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// import { walletState } from '@/store/wallet'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { teamAccountType } from '../types'
import { PublicKey } from '@solana/web3.js'
import { addingMember } from '@/contractFunctions/addingMember'
import { leaveTeam } from '@/contractFunctions/leaveTeam'

export type CreateTeamData = {
  _team_name: string
  _team_id: number
}

export type TeamAccount = {
  account: teamAccountType
  publicKey: PublicKey
}

export default function IndexPage() {
  const [teamAccounts, setTeamAccounts] = useState<TeamAccount[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const { t } = useTranslation(['translation'])
  const { publicKey, signTransaction } = useWallet()
  const navigate = useNavigate()

  const wallet = useAnchorWallet()
  const theme = useTheme()
  const xsDisplay = useMediaQuery(theme.breakpoints.down('sm'))
  // const { enqueueSnackbar } = useSnackbar()
  const program = useProgramContext()

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Program :', program)
        const accounts = await program?.account.teamAccount.all()
        setTeamAccounts(accounts)
      } catch (error) {
        // Handle errors if necessary
        console.error('Error fetching team accounts:', error)
      }
    }

    fetchData() // Call the async function
  }, [program, loading])
  function handleClickCreateTeamButton() {
    navigate(`/create-team`)
  }

  async function handleLeaveTeam(teamName: string, teamId: string) {
    setLoading(true)
    const result = await leaveTeam(teamName, teamId, program, wallet)
    setLoading(false)
  }

  async function handleAddMember(
    teamName: string,
    teamId: string,
    teamPublicKey: PublicKey
  ) {
    setLoading(true)
    await addingMember(teamName, teamId, program, wallet, teamPublicKey)
    setLoading(false)
  }
  if (!publicKey) {
    return (
      <>
        <Container maxWidth="sm">
          <Box py={8}>
            <Paper>
              <Box px={xsDisplay ? 4 : 6} py={6}>
                <Typography variant="h3">{t('pleaseConnect')}</Typography>
                <Box pt={6}>
                  <WalletMultiButton />
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </>
    )
  }

  return (
    <>
      <Container maxWidth="lg">
        <Box py={8}>
          <Paper>
            <Box px={xsDisplay ? 4 : 6} py={1} my={2}>
              <Button variant="contained" onClick={handleClickCreateTeamButton}>
                Create Team
              </Button>
              <Table></Table>
            </Box>
          </Paper>
          {!!teamAccounts && teamAccounts.length > 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Team Name</TableCell>
                    <TableCell align="center">Captain</TableCell>
                    <TableCell align="center">Number of members</TableCell>
                    <TableCell align="center">Active Proposal</TableCell>
                    <TableCell align="center">Join/Leave</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teamAccounts.map((teamAccount: TeamAccount) =>
                    teamAccount.account.members.length == 0 ? null : (
                      <TableRow
                        key={teamAccount.account.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          border: '1px solid #e0e0e0',
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          align="center"
                          // onClick={() =>
                          //   handleTeamNameClick(
                          //     teamAccount.account.id,
                          //     teamAccount
                          //   )
                          // }
                        >
                          <Link to={`/team/${teamAccount.account.id}`}>
                            {teamAccount.account.name}
                          </Link>
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {teamAccount.account.captain.toString()}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {teamAccount.account.members.length}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {teamAccount?.account.activeTournament.toString() !==
                          '11111111111111111111111111111111'
                            ? 'Yes'
                            : 'No'}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {teamAccount.account.members.some(
                            (member: PublicKey) =>
                              wallet ? wallet.publicKey.equals(member) : false
                          ) ? (
                            <Button
                              variant="contained"
                              onClick={() =>
                                handleLeaveTeam(
                                  teamAccount.account.name,
                                  teamAccount.account.id
                                )
                              }
                            >
                              Leave Team
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              onClick={() =>
                                handleAddMember(
                                  teamAccount.account.name,
                                  teamAccount.account.id,
                                  teamAccount.publicKey
                                )
                              }
                            >
                              Join Team
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
        </Box>
      </Container>
    </>
  )
}
