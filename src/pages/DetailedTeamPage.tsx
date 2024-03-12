import React, { ChangeEvent, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Modal, Box, TextField, Button } from '@mui/material'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { useProgramContext } from '../components/provider/programContextProvider'
import { creatingTeam } from '@/contractFunctions/creatingTeam'
import { TeamAccount } from '@/pages/IndexPage'
import DetailedTeamModal from '@/components/DetailedTeamModal'

export default function DetailedTeamPage() {
  const [teamAccounts, setTeamAccounts] = useState<TeamAccount[]>([])
  const [teamAccount, setTeamAccount] = useState<TeamAccount>()
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const [teamName, setTeamName] = useState<string>('')
  const { teamId } = useParams()
  console.log("teamId => ", teamId)
  const signer = useAnchorWallet()
  const program = useProgramContext()
  const navigate = useNavigate()
  function handleCloseModal() {
    setModalOpen(false)
    navigate('/')
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Program :', program)
        const accounts = await program?.account.teamAccount.all()
        setTeamAccounts(accounts)
        console.log("accounts, teamAccounts => ", accounts, teamAccounts)
      } catch (error) {
        console.error('Error fetching team accounts:', error)
      }
    }
    fetchData()
  }, [program])
  useEffect(() => {
    console.log('teamId :::', teamId)
    const tempTeam: TeamAccount = teamAccounts.find(
      (team: TeamAccount) => team.account.id === teamId
    )
    setTeamAccount(tempTeam)
  }, [teamAccounts])
  function handleSubmit() {
    console.log('Submit Data : ', program, signer, teamName)
    creatingTeam(teamName, program, signer)
    setModalOpen(false)
    navigate('/')
  }

  if (!!teamAccount) {
    return <DetailedTeamModal teamAccount={teamAccount} />
  } else {return null}
}
