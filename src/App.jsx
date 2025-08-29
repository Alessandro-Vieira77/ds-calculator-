import { useState } from 'react'

import Button from './components/Button'
function App() {
  // armazenamento temporário
  const [number, setNUmber] = useState([])
  // exibir as somas na tela
  const [operations, setOperations] = useState([])
  // os númros que serão somados
  const [operationFirst, setOperantionFirst] = useState(0)
  // resultado das somas
  const [resul, setResul] = useState(0)
  const [indetifierOperation, setIndetifierOperation] = useState('')

  function addSumValues(value) {
    // adição
    if (value === '+') {
      setIndetifierOperation('adição')
      setOperations([...operations, ' + '])
      // guarda o primeiro valor a ser somado
      setOperantionFirst(Number(number.join('')))
      setNUmber([])
    }
    // subtração
    if (value === '-') {
      setIndetifierOperation('subtração')
      setOperations([...operations, ' - '])
      setOperantionFirst(Number(number.join('')))
      setNUmber([])
    }
    // multiplicação
    if (value === 'x') {
      setIndetifierOperation('multiplicação')
      setOperations([...operations, ' x '])
      setOperantionFirst(Number(number.join('')))
      setNUmber([])
    }
    // divisão
    if (value === '/') {
      setIndetifierOperation('divisão')
      setOperations([...operations, ' / '])
      setOperantionFirst(Number(number.join('')))
      setNUmber([])
    }

    if (typeof value === 'number') {
      setNUmber([...number, value])
    }
    setOperations([...operations, value])
  }

  let operantionSecond = 0

  function calculateSum() {
    operantionSecond = Number(number.join(''))
    // adição

    if (resul === 0 && indetifierOperation === 'adição') {
      let sum = operationFirst + operantionSecond
      setResul(sum)
      setIndetifierOperation('')
    }
    if (resul > 0) {
      let add = resul + operantionSecond
      setResul(add)
      setIndetifierOperation('')
    }

    // sunbtração
    if (indetifierOperation === 'subtração') {
      if (resul === 0 && indetifierOperation === 'subtração') {
        let sub = operantionSecond - resul
        setResul(sub)
        setIndetifierOperation('')
      }
      if (resul > 0 && indetifierOperation === 'subtração') {
        let sub = resul - operantionSecond
        setResul(sub)
        setIndetifierOperation('')
      }
    }
    // multiplicação
    if (indetifierOperation === 'multiplicação') {
      if (resul === 0 && indetifierOperation === 'multiplicação') {
        let mul = operationFirst * operantionSecond
        setResul(mul)
        setIndetifierOperation('')
      }
      if (resul > 0 && indetifierOperation === 'multiplicação') {
        let mul = operationFirst * operantionSecond
        setResul(mul)
        setIndetifierOperation('')
      }
    }
    // divisão
    if (resul === 0 && indetifierOperation === 'divisão') {
      let div = operationFirst / operantionSecond

      if (operationFirst === 0 || operantionSecond === 0) {
        return setResul('zero não é um número divisivel')
      }

      if (div % 2 !== 0) {
        const number = Number(div.toFixed(2))
        return setResul(number)
      }

      setResul(div)

      setIndetifierOperation('')
    }
    if (resul > 0 && indetifierOperation === 'divisão') {
      let div = resul / operantionSecond

      if (operationFirst === 0 || operantionSecond === 0) {
        return setResul('zero não é um número divisivel')
      }

      if (div % 2 !== 0) {
        const number = Number(div.toFixed(2))
        return setResul(number)
      }

      setResul(div)
      setIndetifierOperation('')
    }
  }

  return (
    <div className="items-centerbg-lightGray my-5 flex min-h-screen w-full items-center justify-center">
      <div className="w-ConteinerW bg-coalBlack min-h-ConteinerDadH flex flex-col justify-between">
        <div className="h-ConteinerDyplayH flex w-full flex-col justify-end p-8">
          <div className="flex w-full flex-col items-end gap-2">
            <input
              className="text-mediumBlue w-full text-right text-4xl"
              type="text"
              defaultValue={operations.join('')}
            />
            <p
              className={
                typeof resul === 'number'
                  ? 'text-lightGray w-full text-right text-6xl'
                  : 'text-3xl text-red-500'
              }
            >
              {resul}
            </p>
          </div>
        </div>

        <div className="min-h-ConteinerButtonsH bg-coldWhite flex w-full flex-col items-center justify-between rounded-t-xl px-8 py-7">
          <div className="border-brandWhite shadow- h-2 w-[129px] rounded-full border-3 shadow-md"></div>

          <div className="flex w-full flex-wrap gap-5">
            <Button color={'secundary'}>C</Button>
            <Button color={'secundary'}>*/-</Button>
            <Button color={'secundary'}>%</Button>
            <Button color={'third'} addSumValues={addSumValues} value={'/'}>
              /
            </Button>
            <Button addSumValues={addSumValues} value={7}>
              7
            </Button>
            <Button addSumValues={addSumValues} value={8}>
              8
            </Button>
            <Button addSumValues={addSumValues} value={9}>
              9
            </Button>
            <Button color={'third'} addSumValues={addSumValues} value={'x'}>
              x
            </Button>
            <Button addSumValues={addSumValues} value={4}>
              4
            </Button>
            <Button addSumValues={addSumValues} value={5}>
              5
            </Button>
            <Button addSumValues={addSumValues} value={6}>
              6
            </Button>
            <Button color={'third'} addSumValues={addSumValues} value={'-'}>
              -
            </Button>
            <Button addSumValues={addSumValues} value={1}>
              1
            </Button>
            <Button addSumValues={addSumValues} value={2}>
              2
            </Button>
            <Button addSumValues={addSumValues} value={3}>
              3
            </Button>
            <Button color={'third'} addSumValues={addSumValues} value={'+'}>
              +
            </Button>
            <Button width={'secundary'} addSumValues={addSumValues} value={0}>
              0
            </Button>
            <Button>.</Button>
            <button
              onClick={calculateSum}
              className="bg-waterGreen w-buttonSize text-brandWhite cursor-pointer rounded-2xl px-5 py-4 text-center text-4xl shadow-lg"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
