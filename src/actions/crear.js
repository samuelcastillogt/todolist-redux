const crear = content =>{
    let id = Math.floor(Math.random() * 999999 +1)
    return {
        type: "SAVE",
        payload:{
          content: content,
          important: false,
          terminada: false,
          id 
        }
      }
}
export {crear}