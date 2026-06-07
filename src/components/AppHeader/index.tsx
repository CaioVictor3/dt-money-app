import {NewTransaction }from'@/components/NewTransaction'
import { useAuthContext } from '@/context/auth.context'
import {useBottomSheetContext }from'@/context/bottom-sheet.context'
import { colors } from '@/shared/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export const AppHeader = () => {
  const { handleLogout } = useAuthContext()
  const { openBottomSheet }=useBottomSheetContext()

  return (
    <View className="w-full flex-row px-6 pt-5 pb-7 justify-between items-center bg-background-primary">
      <View className="flex-1 flex-row items-center pr-4">
        <View className="w-[58px] h-[58px] rounded-6 bg-background-secondary items-center justify-center border border-gray-800">
          <Image
            source={require('@/assets/logo.png')}
            className="w-[48px] h-[48px]"
            resizeMode="contain"
          />
        </View>

        <View className="ml-3">
          <Text className="text-white text-lg font-bold">
            DT Money
          </Text>

          <TouchableOpacity
            className="flex-row items-center gap-1 mt-1"
            onPress={handleLogout}
          >
            <MaterialIcons
              name="logout"
              color={colors.gray[600]}
              size={16}
            />
            <Text className="text-gray-600 text-sm font-bold">
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        className="bg-accent-brand w-[132px] items-center justify-center rounded-xl h-[48px]"
        onPress={() =>
          openBottomSheet(
            <NewTransaction/>,
            0
          )
        }
      >
        <Text className="text-white font-bold text-sm">
          Nova transação
        </Text>
      </TouchableOpacity>
    </View>
  )
}
