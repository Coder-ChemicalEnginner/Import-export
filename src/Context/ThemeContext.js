import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  addSavedVideos: () => {},
  onChangeTheme: () => {},
  })

export default ThemeContext