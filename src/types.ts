import { PublicKey } from "@solana/web3.js"

export type teamAccountType = {
    activeTournament: PublicKey,
    bump: number,
    canJoinTournament: boolean,
    captain: PublicKey,
    distributionPercentages: number[],
    distributionVotedPlayers: PublicKey[],
    distributionVotingResult: boolean,
    distributionYesVotes: number,
    id: string,
    isInitialized: boolean,
    leaveVotedPlayers: PublicKey[],
    leaveVotes: number,
    members: PublicKey[],
    name: NamedCurve,
    prize: number,
    votedPlayers: PublicKey[],
    votingResult: boolean,
    yesVotes: number
}