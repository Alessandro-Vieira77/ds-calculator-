import Button from './components/Button'

function App() {
  return (
    <div className="items-centerbg-lightGray my-5 flex min-h-screen w-full items-center justify-center">
      <div className="w-ConteinerW bg-coalBlack min-h-ConteinerDadH flex flex-col justify-between">
        <div className="h-ConteinerDyplayH w-full"></div>

        <div className="min-h-ConteinerButtonsH bg-coldWhite flex w-full flex-col items-center justify-between rounded-t-xl px-8 py-7">
          <div className="border-brandWhite shadow- h-2 w-[129px] rounded-full border-3 shadow-md"></div>
          <div className="flex w-full flex-wrap gap-5">
            <Button color={'secundary'}>C</Button>
            <Button color={'secundary'}>*/-</Button>
            <Button color={'secundary'}>%</Button>
            <Button color={'third'}>/</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button color={'third'}>x</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button color={'third'}>-</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button color={'third'}>+</Button>
            <Button width={'secundary'}>0</Button>
            <Button>.</Button>
            <Button bg={'secundary'} color={'first'}>
              =
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
