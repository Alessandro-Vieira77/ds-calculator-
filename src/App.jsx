function App() {
  return (
    <div className="items-centerbg-lightGray my-5 flex min-h-screen w-full items-center justify-center">
      <div className="w-ConteinerW bg-coalBlack h-ConteinerDadH flex flex-col justify-between">
        <div className="h-ConteinerDyplayH w-full"></div>

        <div className="h-ConteinerButtonsH bg-lightGray w-full rounded-t-xl px-7 py-7">
          <button className="w-buttonSize h-buttonSize bg-coldWhite text-sizeButton text-mediumBlue cursor-pointer rounded-2xl shadow-lg">
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
