const deleteTask = id =>{
    return {
        type: "DELETE",
        payload: id
      }
}
export {deleteTask}