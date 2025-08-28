import { tv } from 'tailwind-variants'

const Button = ({ children, color, bg, width, calculte, value }) => {
  const button = tv({
    base: 'cursor-pointer rounded-2xl px-5 py-4 text-4xl shadow-lg',
    variants: {
      bg: {
        primary: 'bg-coldWhite',
        secundary: 'bg-waterGreen',
      },
      color: {
        primary: 'text-mediumBlue',
        secundary: 'text-neutralGray',
        third: 'text-bluishPurple',
        first: 'text-brandWhite',
      },
      width: {
        primary: 'w-buttonSize text-center',
        secundary: 'w-[159.76px] text-left',
      },
    },
    defaultVariants: {
      color: 'primary',
      bg: 'primary',
      width: 'primary',
    },
  })

  return (
    <button
      onClick={() => {
        calculte(value)
      }}
      className={button({ bg, color, width: width })}
    >
      {children}
    </button>
  )
}

export default Button
