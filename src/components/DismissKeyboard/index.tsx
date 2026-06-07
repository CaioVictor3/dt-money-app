import { FC, PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export const DismissKeyboardView: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      {children}
    </SafeAreaView>
  )
}