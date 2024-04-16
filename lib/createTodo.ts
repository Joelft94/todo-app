import {Errors} from '@/constants/Errors'
import {Todo} from '@/types'

interface Props {
  e: React.FormEvent<HTMLFormElement>
  newTodo: string | null
  setTodoError: React.Dispatch<React.SetStateAction<string | null>>
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>
  setNewTodo: React.Dispatch<React.SetStateAction<string | null>>
}

export function createTodo({
  e,
  setTodoError,
  newTodo,
  setNewTodo,
  setTodos,
}: Props) {
  e.preventDefault()
  const id = crypto.randomUUID()

  if (!newTodo) {
    setTodoError(Errors.REQUIRED_TODO)
    return
  } else if (newTodo.length < 3) {
    setTodoError(Errors.MIN_LENGTH_TODO)
    return
  } else if (newTodo.length > 50) {
    setTodoError(Errors.MAX_LENGTH_TODO)
    return
  }

  setTodoError(null)
  setTodos((prevTodos) => {
    if (!prevTodos) {
      return [{id, content: newTodo}]
    }
    return [...prevTodos, {id, content: newTodo}]
  })
  setNewTodo(null)
}
