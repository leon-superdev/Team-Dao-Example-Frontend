export type SolanaDao = {
  "version": "0.1.0",
  "name": "solana_dao",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [],
      "args": []
    },
    {
      "name": "addMember",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "member",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createTeam",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        }
      ]
    },
    {
      "name": "removeMember",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "member",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "leaveTeam",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        }
      ]
    },
    {
      "name": "transferCaptain",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "member",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "initTournament",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "tournamentAddress",
          "type": "publicKey"
        },
        {
          "name": "tournamentPrize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteForTournament",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "voteType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "canJoinTournament",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        }
      ]
    },
    {
      "name": "leaveTournament",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "voteType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initPercentageProposal",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "percentages",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "distributionProposalHandler",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "voteType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "claimReward",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "reward",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "teamAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "captain",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "members",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "name": "yesVotes",
            "type": "u8"
          },
          {
            "name": "votedPlayers",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "activeTournament",
            "type": "publicKey"
          },
          {
            "name": "prize",
            "type": "u64"
          },
          {
            "name": "votingResult",
            "type": "bool"
          },
          {
            "name": "leaveVotes",
            "type": "u8"
          },
          {
            "name": "leaveVotedPlayers",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "distributionPercentages",
            "type": "bytes"
          },
          {
            "name": "distributionYesVotes",
            "type": "u8"
          },
          {
            "name": "distributionVotedPlayers",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "distributionVotingResult",
            "type": "bool"
          },
          {
            "name": "canJoinTournament",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TeamCapacityFullError",
      "msg": "A team can contain maximum 5 members"
    },
    {
      "code": 6001,
      "name": "InvalidBumpSeeds",
      "msg": "Invalid bump seeds"
    },
    {
      "code": 6002,
      "name": "TeamCapacityLowError",
      "msg": "A team must contain at least 2 members to be able to remove a member"
    },
    {
      "code": 6003,
      "name": "NotCaptainError",
      "msg": "Only captain can call this function"
    },
    {
      "code": 6004,
      "name": "MemberNotInTeamError",
      "msg": "Member is not in the team"
    },
    {
      "code": 6005,
      "name": "MemberAlreadyInTeamError",
      "msg": "Member is already in the team"
    },
    {
      "code": 6006,
      "name": "CaptainCannotLeaveTeamError",
      "msg": "Captain cannot leave the team unless he transfers the captain role to another member"
    },
    {
      "code": 6007,
      "name": "AlreadyVotedError",
      "msg": "Member is already voted for the tournament"
    },
    {
      "code": 6008,
      "name": "AlreadyActiveTournamentError",
      "msg": "The team has an active tournament and cannot vote for another tournament, leave the current one first"
    },
    {
      "code": 6009,
      "name": "NoActiveTournamentError",
      "msg": "The team has no active tournament"
    },
    {
      "code": 6010,
      "name": "NotEnoughPlayersError",
      "msg": "A team must contain 5 players to join a tournament"
    },
    {
      "code": 6011,
      "name": "InvalidPercentageError",
      "msg": "The sum of percentages must be equal to 100"
    },
    {
      "code": 6012,
      "name": "InvalidRewardError",
      "msg": "Invalid member for that reward"
    }
  ]
};

export const IDL: SolanaDao = {
  "version": "0.1.0",
  "name": "solana_dao",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [],
      "args": []
    },
    {
      "name": "addMember",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "member",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createTeam",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        }
      ]
    },
    {
      "name": "removeMember",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "member",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "leaveTeam",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        }
      ]
    },
    {
      "name": "transferCaptain",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "member",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "initTournament",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "tournamentAddress",
          "type": "publicKey"
        },
        {
          "name": "tournamentPrize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteForTournament",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "voteType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "canJoinTournament",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        }
      ]
    },
    {
      "name": "leaveTournament",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "voteType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initPercentageProposal",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "percentages",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "distributionProposalHandler",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "voteType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "claimReward",
      "accounts": [
        {
          "name": "teamAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "teamName",
          "type": "string"
        },
        {
          "name": "teamId",
          "type": "string"
        },
        {
          "name": "reward",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "teamAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "captain",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "members",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "name": "yesVotes",
            "type": "u8"
          },
          {
            "name": "votedPlayers",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "activeTournament",
            "type": "publicKey"
          },
          {
            "name": "prize",
            "type": "u64"
          },
          {
            "name": "votingResult",
            "type": "bool"
          },
          {
            "name": "leaveVotes",
            "type": "u8"
          },
          {
            "name": "leaveVotedPlayers",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "distributionPercentages",
            "type": "bytes"
          },
          {
            "name": "distributionYesVotes",
            "type": "u8"
          },
          {
            "name": "distributionVotedPlayers",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "distributionVotingResult",
            "type": "bool"
          },
          {
            "name": "canJoinTournament",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TeamCapacityFullError",
      "msg": "A team can contain maximum 5 members"
    },
    {
      "code": 6001,
      "name": "InvalidBumpSeeds",
      "msg": "Invalid bump seeds"
    },
    {
      "code": 6002,
      "name": "TeamCapacityLowError",
      "msg": "A team must contain at least 2 members to be able to remove a member"
    },
    {
      "code": 6003,
      "name": "NotCaptainError",
      "msg": "Only captain can call this function"
    },
    {
      "code": 6004,
      "name": "MemberNotInTeamError",
      "msg": "Member is not in the team"
    },
    {
      "code": 6005,
      "name": "MemberAlreadyInTeamError",
      "msg": "Member is already in the team"
    },
    {
      "code": 6006,
      "name": "CaptainCannotLeaveTeamError",
      "msg": "Captain cannot leave the team unless he transfers the captain role to another member"
    },
    {
      "code": 6007,
      "name": "AlreadyVotedError",
      "msg": "Member is already voted for the tournament"
    },
    {
      "code": 6008,
      "name": "AlreadyActiveTournamentError",
      "msg": "The team has an active tournament and cannot vote for another tournament, leave the current one first"
    },
    {
      "code": 6009,
      "name": "NoActiveTournamentError",
      "msg": "The team has no active tournament"
    },
    {
      "code": 6010,
      "name": "NotEnoughPlayersError",
      "msg": "A team must contain 5 players to join a tournament"
    },
    {
      "code": 6011,
      "name": "InvalidPercentageError",
      "msg": "The sum of percentages must be equal to 100"
    },
    {
      "code": 6012,
      "name": "InvalidRewardError",
      "msg": "Invalid member for that reward"
    }
  ]
};
