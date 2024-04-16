interface Props {
  content: JSX.Element | string
  handleOnClick?: () => void
}

export const PrimaryButton = ({content, handleOnClick}: Props) => {
  return (
    <button
      className="rounded bg-purple-600 p-1 text-white hover:brightness-125"
      onClick={handleOnClick}
    >
      {content}
    </button>
  )
}
