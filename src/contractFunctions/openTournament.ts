import * as anchor from '@coral-xyz/anchor'
import { AnchorWallet } from '@solana/wallet-adapter-react'
import { PublicKey,  } from '@solana/web3.js'
import { ProgramId } from '../constant'

export const openTournament = async (
  teamName: string,
  teamId: string,
  program: any,
  signer?: AnchorWallet,
  tournamentPubKey?: PublicKey
) => {
  const [team_account] = await PublicKey.findProgramAddressSync(
    [Buffer.from(teamId)],
    ProgramId
  )
  // const keypair = Keypair.generate();
  // const tournamentPubKey = keypair.publicKey;
  try {
    const tx = await program.methods
      .initTournament(teamName, teamId, tournamentPubKey, new anchor.BN(10))
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
