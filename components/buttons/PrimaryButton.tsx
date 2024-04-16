interface Props {
  content: JSX.Element | string
}

export const PrimaryButton = ({content}: Props) => {
  return (
    <button className="rounded bg-purple-600 p-1 text-white hover:brightness-125">
      {content}
    </button>
  )
}
