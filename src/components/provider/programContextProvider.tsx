'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import * as anchor from '@coral-xyz/anchor'
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react'
import { ProgramId } from '../../constant'
import idl from '../../payload/solana_dao.json'
import { SolanaDao } from '../../payload/solana_dao'

export const ProgramContext = createContext<
  anchor.Program<SolanaDao> | undefined
>(undefined)

export default ({ children }: { children: React.ReactNode }) => {
  const [program, setProgram] = useState<anchor.Program<SolanaDao>>()
  const { connection } = useConnection()
  let wallet = useAnchorWallet()

  useEffect(() => {
    let call = async () => {
      let provider: anchor.Provider
      if (wallet && connection) {
        try {
          provider = anchor.getProvider()
        } catch {
          provider = new anchor.AnchorProvider(
            connection,
            wallet as anchor.Wallet,
            {
              preflightCommitment: 'recent',
              commitment: 'processed',
            }
          )
          anchor.setProvider(provider)
          const program = await new anchor.Program<SolanaDao>(
            idl as any,
            ProgramId
          )
          setProgram(program)
        }
      } else {
        console.log('no wallet')
      }
    }
    call()
  }, [wallet, connection])

  return (
    <ProgramContext.Provider value={program}>
      {children}
    </ProgramContext.Provider>
  )
}

export function useProgramContext() {
  return useContext(ProgramContext)
}
