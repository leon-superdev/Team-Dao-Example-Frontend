import * as anchor from '@coral-xyz/anchor'
import { AnchorWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { ProgramId } from '../constant'

export const creatingTeam = async (
  teamName: string,
  program: any,
  signer: AnchorWallet | undefined
) => {

  const teamId: string = Math.floor(Math.random() * Math.pow(2, 32)).toString()

  const [team_account, ] = await PublicKey.findProgramAddressSync(
    [Buffer.from(teamId)],
    ProgramId
  )

  try {
    const tx = await program.methods
      .createTeam(teamName, teamId)
      .accounts({
        signer: signer?.publicKey,
        teamAccount: team_account,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([])
      .rpc()
    console.log('tx : ', tx)

    return tx ? true : false
  } catch (error) {
    console.log(error)
    return false
  }
}
