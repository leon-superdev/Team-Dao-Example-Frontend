import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppLoading from '@/components/loading/AppLoading'

const fallback = {
  from: '*',
  to: '/',
}

const pages = [
  {
    component: lazy(() => import('@/pages/IndexPage')),
    path: '/',
  },
  {
    component: lazy(() => import('@/components/CreatingTeamModal')),
    path: '/create-team',
  },
  {
    component: lazy(() => import('@/pages/DetailedTeamPage')),
    path: '/team/:teamId',
  },
]

export default function DefaultRoute() {
  return (
    <Routes>
      {pages.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={
            <Suspense fallback={<AppLoading />}>
              <page.component />
            </Suspense>
          }
        />
      ))}
      <Route
        path={fallback.from}
        element={<Navigate to={{ pathname: fallback.to }} replace />}
      />
      
    </Routes>
  )
}
