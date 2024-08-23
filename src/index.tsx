import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import '@mantine/core/styles.css'
// eslint-disable-next-line import/no-unresolved
import '@mantine/dates/styles.css'
// eslint-disable-next-line import/no-unresolved
import '@mantine/notifications/styles.css'

import 'src/index.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { Home } from 'src/routes/Home'

// More route information can be found at https://reactrouter.com/docs/en/v6/getting-started/tutorial
const theme = createTheme({
  /** Put your mantine theme override here */
})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <MantineProvider theme={theme}>
    <Notifications />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  </MantineProvider>
)
