import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { mergeStyles } from "@fluentui/react"

// Inject some global styles
mergeStyles({
    ":global(body,html,#root)": {
        margin: 0,
        padding: 0,
        height: "100vh",
    },
})

const root = document.getElementById("root")
createRoot(root!).render(<App />)