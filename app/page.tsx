'use client'

import {TodoCard} from '@/components/TodoCard'
import {PlusIcon} from '@/components/Icons'
import mocktodos from '@/mockdata/todos.json'
import {PrimaryButton} from '@/components/buttons/PrimaryButton'
import {useState} from 'react'
import {Todo} from '@/types'
import {createTodo} from '@/lib/createTodo'
import {deleteAllTodo} from '@/lib/deleteTodos'

export default function Home() {
  const [todos, setTodos] = useState<Todo[] | null>(mocktodos)
  const [newTodo, setNewTodo] = useState<null | string>(null)
  const [todoError, setTodoError] = useState<string | null>(null)

  return (
    <main className="flex h-full w-full items-center justify-center">
      <section className="flex w-full max-w-80 flex-col gap-5 rounded bg-white p-5 shadow-md">
        <header>
          <h1 className="text-2xl font-bold">Todo App</h1>
        </header>

        <form
          className="flex w-full flex-col gap-2"
          onSubmit={(e) =>
            createTodo({e, setTodoError, setTodos, newTodo, setNewTodo})
          }
        >
          <div className="flex w-full gap-1">
            <input
              type="text"
              placeholder="Add your new todo"
              value={newTodo ?? ''}
              onChange={(e) => setNewTodo(e.currentTarget.value)}
              className="min-h-full w-full border-2 pl-3"
            />
            <PrimaryButton content={<PlusIcon />} />
          </div>
          {todoError && (
            <p className="text-center text-sm font-bold text-red-500">
              {todoError}
            </p>
          )}
        </form>

        <ul className="flex flex-col gap-2">
          {todos?.map((todo) => {
            return <TodoCard key={todo.id} todo={todo} setTodos={setTodos} />
          }) ?? <li className="text-center">There are not pendings tasks</li>}
        </ul>

        <div className="flex items-center justify-between pt-3">
          <p>
            You have {todos?.length} pending{' '}
            {todos && todos?.length > 1 ? 'tasks' : 'task'}
          </p>
          <PrimaryButton
            content={'Clear All'}
            handleOnClick={() => deleteAllTodo({setTodos})}
          />
        </div>
      </section>
    </main>
  )
}
