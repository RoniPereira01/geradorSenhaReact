import { useState } from "react"

function App() {
  // eslint-disable-next-line no-unused-vars
  const[password,  setpassword] = useState("")
  const [copyText, setcopyText] = useState("copiar")


function generate(){
  const characters = "0123456798abcdefghijklmnopqrstuvwyz";
  const lenght = 8
  let newPassword = "";
  for(let i =0;i< lenght;i++){
    const position = Math.floor(Math.random() * characters.length)
    newPassword += characters[position]
  }
  setpassword(newPassword)
  setcopyText("Copiar")
}

function copyToClipboard(){
  window.navigator.clipboard.writeText(password)
  setcopyText("Copiado!")
}
  return (
    <>
    <div className="app">
      <h1>
        Gerador de senhas
      </h1>
     <button onClick={generate}>Gerar!</button>
     <button onClick={copyToClipboard} >{copyText}</button>
      <div>{password}</div>
    </div>
    </>
  )
}

export default App
