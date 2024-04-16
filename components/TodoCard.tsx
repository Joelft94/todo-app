import {Todo} from '@/types'

interface Props {
  todo: Todo
}

export const TodoCard = ({todo}: Props) => {
  return (
    <li className="rounded-sm bg-gray-100 p-2 shadow-sm">{todo.content}</li>
  )
}
