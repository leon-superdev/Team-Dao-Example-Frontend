import * as anchor from '@coral-xyz/anchor'
import { AnchorWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { ProgramId } from '../constant'
import { sign } from 'crypto'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { useProgramContext } from '@/components/provider/programContextProvider'
import { TeamAccount } from '@/pages/IndexPage'

export const addingMember = async (
  teamName: String,
  teamId: String,
  program: any,
  signer: AnchorWallet | undefined,
  teamAccount: PublicKey
) => {
  if (program && signer) {
    // const [teamAddress, ] = PublicKey.findProgramAddressSync(
    //   [Buffer.from(teamId)],
    //   ProgramId
    // )
    try {
      const tx = await program.methods
        .addMember(teamName, teamId, signer.publicKey)
        .accounts({
          signer: signer?.publicKey,
          teamAccount: teamAccount,
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
}
