import React, { ChangeEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Box, TextField, Button } from '@mui/material'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { useProgramContext } from './provider/programContextProvider'
import { creatingTeam } from '@/contractFunctions/creatingTeam'

export default function CreatingTeamModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const [teamName, setTeamName] = useState<string>('')
  
  const signer = useAnchorWallet()
  const program = useProgramContext()
  const navigate = useNavigate()
  function handleCloseModal() {
    setModalOpen(false)
    navigate('/')
  }
  
  function handleSubmit() {
    creatingTeam(teamName, program, signer)
    setModalOpen(false)
    navigate('/')
  }
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
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextField
          id="outlined-controlled"
          label="Team Name"
          fullWidth
          required
          margin="normal"
          value={teamName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value
            setTeamName(newValue)
          }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Modal>
  )
}
