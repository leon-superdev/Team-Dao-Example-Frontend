import * as anchor from '@coral-xyz/anchor'
import { AnchorWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { ProgramId } from '../constant'
import { VoteType } from '@/components/DetailedTeamModal'
import { BN } from 'bn.js'
export const voteForTournament = async (
  teamName: string,
  teamId: string,
  program: any,
  signer?: AnchorWallet,
  voteType?: VoteType
) => {
  const [team_account] = await PublicKey.findProgramAddressSync(
    [Buffer.from(teamId)],
    ProgramId
  )
  // const keypair = Keypair.generate();
  // const tournamentPubKey = keypair.publicKey;
  const voteValue = voteType == 0 ? 1 : voteType == 1 ? 2 : 3
  try {
    const tx = await program.methods
      .voteForTournament(teamName, teamId, new BN(voteValue))
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
