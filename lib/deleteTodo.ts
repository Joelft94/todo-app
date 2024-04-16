import {Todo} from '@/types'

interface deleteProp {
  id: string
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>
}
export function deleteTodo({id, setTodos}: deleteProp) {
  setTodos((prev) => {
    if (prev && prev.length > 1) {
      return prev?.filter((todo) => todo.id !== id)
    } else {
      return null
    }
  })
}
