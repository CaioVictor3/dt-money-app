import NavigationRoutes from '@/routes'
import'./src/styles/global.css'

import {SnackBar }from'@/components/SnackBar'
import {AuthContextProvider }from'@/context/auth.context'
import {SnackbarContextProvider }from'@/context/snackbar.context'


export default function App() {
return (
<SnackbarContextProvider>
<AuthContextProvider>
<NavigationRoutes/>

<SnackBar/>
</AuthContextProvider>
</SnackbarContextProvider>
  )
}
