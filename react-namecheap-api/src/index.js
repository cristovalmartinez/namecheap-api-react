import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { MantineProvider } from "@mantine/core"

const app = ReactDOM.createRoot(document.getElementById("app"))
app.render(
  <React.StrictMode>
    <MantineProvider theme={{ fontFamily: "verdana, sans-serif" }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
