import {Todo} from '@/types'

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>
}

export function deleteAllTodo({setTodos}: Props) {
  setTodos(null)
}
