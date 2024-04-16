import {Todo} from '@/types'
import {TrashIcon} from './Icons'
import {deleteTodo} from '@/lib/deleteTodo'

interface Props {
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>
}

export const TodoCard = ({todo, setTodos}: Props) => {
  return (
    <li className="group flex items-center justify-between rounded-sm bg-gray-100 shadow-sm">
      <p className="py-2 pl-2">{todo.content}</p>
      <button
        className="hidden min-h-full bg-red-500 p-2 group-hover:block"
        onClick={() => deleteTodo({id: todo.id, setTodos})}
      >
        <TrashIcon />
      </button>
    </li>
  )
}
