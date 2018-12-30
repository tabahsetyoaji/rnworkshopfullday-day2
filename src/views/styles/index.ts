// --------------------------------------------------------- //
// Please do not edit this file. This file is autogenerated. //
// --------------------------------------------------------- //

import { ThemeContext, ThemeContextProps } from 'anoa-react-native-theme'
import { BaseTheme, BlueTheme } from './themes'

const themes = {
  blue: BlueTheme
}

export const AppStyle = new ThemeContext(BaseTheme, themes)
export type AppThemes = typeof themes
export type AppStyleProps = ThemeContextProps<typeof BaseTheme, AppThemes>
