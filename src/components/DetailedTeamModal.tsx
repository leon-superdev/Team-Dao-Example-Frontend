import React, { ChangeEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Box, TextField, Button } from '@mui/material'
import { AnchorWallet, useAnchorWallet } from '@solana/wallet-adapter-react'
import { useProgramContext } from './provider/programContextProvider'
import { TeamAccount } from '@/pages/IndexPage'
import { leaveTeam } from '@/contractFunctions/leaveTeam'
import { addingMember } from '@/contractFunctions/addingMember'
import { PublicKey, Keypair } from '@solana/web3.js'
import { openTournament } from '@/contractFunctions/openTournament'
import { voteForTournament } from '@/contractFunctions/voteForTournament'
import { voteToLeaveTheTournament } from '@/contractFunctions/voteToLeaveTheTournament'
import { BN } from 'bn.js'

interface DetailedTeamModalProps {
  teamAccount: TeamAccount | undefined
}

export enum VoteType {
  Yes,
  No,
}
const DetailedTeamModal: React.FC<DetailedTeamModalProps> = ({
  teamAccount,
}) => {
  // export default function DetailedTeamModal({teamAccount<TeamAccount>: teamAccount}) {
  // const [teamAccounts, setTeamAccounts] = useState<TeamAccount[]>([])
  const [account, setAccount] = useState<TeamAccount>()
  const [modalOpen, setModalOpen] = useState<boolean>(true)

  const signer = useAnchorWallet()
  const program = useProgramContext()
  const navigate = useNavigate()
  function handleCloseModal() {
    setModalOpen(false)
    navigate('/')
  }
  useEffect(() => {
    setAccount(teamAccount)
  }, [program, teamAccount])
  console.log(account?.account.distributionPercentages)
  console.log('account => ', account)
  async function handleLeaveTeam(teamName: string, teamId: string) {
    const result = await leaveTeam(teamName, teamId, program, signer)
    if (result && account && signer) {
      if (account.account.captain.equals(signer.publicKey)) {
        const updatedMembers = account.account.members.filter(
          (member) => !member.equals(signer?.publicKey)
        )
        const updatedAccount = {
          ...account,
          account: {
            ...account.account,
            members: updatedMembers,
          },
        }
        setAccount(updatedAccount)
      } else {
        const updatedMembers = account.account.members.filter(
          (member) => !member.equals(signer?.publicKey)
        )
        const updatedAccount = {
          ...account,
          account: {
            ...account.account,
            members: updatedMembers,
          },
        }
        setAccount(updatedAccount)
      }
    }
  }
  async function handleAddMember(
    teamName: string,
    teamId: string,
    teamPublicKey: PublicKey
  ) {
    const result = await addingMember(
      teamName,
      teamId,
      program,
      signer,
      teamPublicKey
    )
    if (result && account && signer) {
      const updatedMembers = [...account.account.members, signer.publicKey]
      const updatedAccount = {
        ...account,
        account: {
          ...account.account,
          members: updatedMembers,
        },
      }
      setAccount(updatedAccount)
    }
  }
  async function handleOpenTournamentClick(teamName: string, teamId: string) {
    const keypair = Keypair.generate()
    const tournamentPubKey = keypair.publicKey
    const result = await openTournament(
      teamName,
      teamId,
      program,
      signer,
      tournamentPubKey
    )
    if (result && account) {
      const updatedAccount = {
        ...account,
        account: {
          ...account.account,
          activeTournament: tournamentPubKey,
        },
      }
      setAccount(updatedAccount)
    }
  }
  async function handleLeaveVoteButtonClick(
    teamName: string,
    teamId: string,
    signer: AnchorWallet
  ) {
    const result = await voteToLeaveTheTournament(
      teamName,
      teamId,
      program,
      signer
    )
    if (result && account) {
      if (account.account.leaveVotes < 2) {
        const updatedLeaveVoteMembers = [
          ...account.account.leaveVotedPlayers,
          signer.publicKey,
        ]
        const updatedAccount = {
          ...account,
          account: {
            ...account.account,
            leaveVotedPlayers: updatedLeaveVoteMembers,
            leaveVotes: account.account.leaveVotes + 1,
          },
        }
        setAccount(updatedAccount)
      } else {
        const updatedAccount = {
          ...account,
          account: {
            ...account.account,
            canJoinTournament: false,
            leaveVotedPlayers: [],
            leaveVotes: 0,
            prize: 0,
            votedPlayers: [],
            votingResult: false,
            yesVotes: 0,
            activeTournament: new PublicKey('11111111111111111111111111111111'),
          },
        }
        setAccount(updatedAccount)
      }
    }
  }
  async function handleVoteButtonClick(
    teamName: string,
    teamId: string,
    voteType: VoteType,
    signer: AnchorWallet
  ) {
    const result = await voteForTournament(
      teamName,
      teamId,
      program,
      signer,
      voteType
    )
    if (result && account && signer) {
      const updatedVoteMembers = [
        ...account.account.votedPlayers,
        signer.publicKey,
      ]
      const updatedAccount = {
        ...account,
        account: {
          ...account.account,
          votedPlayers: updatedVoteMembers,
          yesVotes:
            voteType == 0
              ? account.account.yesVotes + 1
              : account.account.yesVotes,
        },
      }
      setAccount(updatedAccount)
    }
  }
  if (account && signer) {
    return (
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '5%',
            left: '5%',
            width: '90%',
            height: '90%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflowY: 'auto',
          }}
        >
          <Box
            sx={{
              width: 1,
              borderBottom: '1px solid #E0E0E0',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                fontSize: '32px',
              }}
            >
              {account?.account.name}
            </Box>
            <Box>
              {account?.account.activeTournament.toString() ===
                '11111111111111111111111111111111' &&
              account?.account.captain.equals(signer.publicKey) ? (
                <Button
                  onClick={() => {
                    handleOpenTournamentClick(
                      account?.account.name,
                      account?.account.id
                    )
                  }}
                >
                  Open Tournament
                </Button>
              ) : null}
              {account?.account.members.some((member) =>
                member.equals(signer.publicKey)
              ) ? (
                <Button
                  onClick={() =>
                    handleLeaveTeam(account.account.name, account.account.id)
                  }
                >
                  Leave Team
                </Button>
              ) : (
                <Button
                  onClick={() =>
                    handleAddMember(
                      account.account.name,
                      account.account.id,
                      account.publicKey
                    )
                  }
                >
                  Join Team
                </Button>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              fontSize: '16px',
              width: 1,
              display: 'flex',
              borderBottom: '1px solid #e0e0e0',
              margin: '4px',
              padding: '4px',
            }}
          >
            <Box sx={{ width: '40%' }}>Captain :</Box>
            <Box sx={{ flex: 1 }}>{account?.account.captain.toString()}</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: 1,
              borderBottom: '1px solid #e0e0e0',
              margin: '4px',
              padding: '4px',
            }}
          >
            <Box sx={{ width: '40%' }}>Members : </Box>
            <Box sx={{ flex: 1 }}>
              {account?.account.members.map((member) => (
                <Box>{member.toString()}</Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: 1,
              borderBottom: '1px solid #e0e0e0',
              margin: '4px',
              padding: '4px',
            }}
          >
            <Box sx={{ width: '40%' }}>Active Tournament : </Box>
            <Box sx={{ flex: 1 }}>
              {account?.account.activeTournament.toString() ===
              '11111111111111111111111111111111'
                ? 'No Active Tournament'
                : account?.account.activeTournament.toString()}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: 1,
              borderBottom: '1px solid #e0e0e0',
              margin: '4px',
              padding: '4px',
            }}
          >
            <Box sx={{ width: '40%' }}>Voted Members : </Box>
            <Box sx={{ flex: 1 }}>
              {account?.account.votedPlayers.length > 0
                ? account?.account.votedPlayers.map((member) => (
                    <Box>{member.toString()}</Box>
                  ))
                : 'No Voted Member'}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: 1,
              borderBottom: '1px solid #e0e0e0',
              margin: '4px',
              padding: '4px',
            }}
          >
            <Box sx={{ width: '40%' }}>Upvote Number : </Box>
            <Box sx={{ flex: 1 }}>{account?.account.yesVotes}</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: 1,
              borderBottom: '1px solid #e0e0e0',
              margin: '4px',
              padding: '4px',
            }}
          >
            <Box sx={{ width: '40%' }}>Members that request leave: </Box>
            <Box sx={{ flex: 1 }}>
              {account?.account.leaveVotedPlayers.length > 0
                ? account?.account.leaveVotedPlayers.map((member) => (
                    <Box>{member.toString()}</Box>
                  ))
                : 'No Voted Member'}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: 1,
              borderBottom: '1px solid #e0e0e0',
              margin: '4px',
              padding: '4px',
            }}
          >
            <Box sx={{ width: '40%' }}>Leave Request Number : </Box>
            <Box sx={{ flex: 1 }}>{account?.account.leaveVotes}</Box>
          </Box>

          {account?.account.activeTournament.toString() !==
          '11111111111111111111111111111111' ? (
            <Box>
              <Button
                onClick={() =>
                  handleVoteButtonClick(
                    account.account.name,
                    account.account.id,
                    VoteType.Yes,
                    signer
                  )
                }
              >
                Upvote To Tournament
              </Button>
              <Button
                onClick={() =>
                  handleVoteButtonClick(
                    account.account.name,
                    account.account.id,
                    VoteType.No,
                    signer
                  )
                }
              >
                Downvote To Tournament
              </Button>
              <Button
                onClick={() =>
                  handleLeaveVoteButtonClick(
                    account.account.name,
                    account.account.id,
                    signer
                  )
                }
              >
                Leave the Tournament
              </Button>
            </Box>
          ) : null}
        </Box>
      </Modal>
    )
  } else {
    return null
  }
}

export default DetailedTeamModal
