import "./App.css"

import React from "react"
import { createTheme, LayerHost, ThemeProvider } from "@fluentui/react"
import Theme from "./Theme"
import NavBar from "./components/NavBar"

import { initializeIcons } from "@fluentui/react/lib/Icons"
// https://github.com/microsoft/fluentui/wiki/Using-icons
initializeIcons()

export const App: React.FunctionComponent = () => {
    const [ theme, setTheme ] = React.useState({})

    // /*
    // Auto theme
    React.useEffect(() => {
        const systemTheme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
            ? Theme.dark
            : Theme.light
        setTheme(createTheme(systemTheme))

        const onThemeChangeCallback = (event: MediaQueryListEvent) => setTheme(createTheme(event.matches ? Theme.dark : Theme.light))
        const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)")
        systemThemeQuery.addEventListener("change", onThemeChangeCallback)

        return () => systemThemeQuery.removeEventListener("change", onThemeChangeCallback)
    }, [])
    // */

    return (
        <div className="App">
            <ThemeProvider applyTo='body' theme={theme}>
                <LayerHost id="layerHost" />
                <NavBar layerHostId="layerHost" />
            </ThemeProvider>
        </div>
    )
}
