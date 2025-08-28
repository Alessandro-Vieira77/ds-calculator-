import { useState } from 'react'

import Button from './components/Button'
function App() {
  // armazenamento temporário
  const [number, setNUmber] = useState([])
  // exibir as somas na tela
  const [operantions, setOperantions] = useState([])
  // os némros que serão somados
  const [numberBox, setNamberBox] = useState([])
  // resultado das somas
  const [resul, setResul] = useState([])
  const [indetifierOperantion, setIndetifierOperantion] = useState('')

  function calculte(value) {
    if (value === '+') {
      setIndetifierOperantion('adição')
      setOperantions([...operantions, ' + '])
      // guarda o primeiro valor a ser somado
      setNamberBox([...numberBox, Number(number.join(''))])
      setNUmber([])
    }
    if (typeof value === 'number') {
      setNUmber([...number, value])
    }
    setOperantions([...operantions, value])
  }

  function calculateSum() {}

  // console.log(`box: ${numberBox}`)
  // console.log('number ' + number)
  // console.log('operantions ' + indetifierOperantion)

  return (
    <div className="items-centerbg-lightGray my-5 flex min-h-screen w-full items-center justify-center">
      <div className="w-ConteinerW bg-coalBlack min-h-ConteinerDadH flex flex-col justify-between">
        <div className="h-ConteinerDyplayH flex w-full flex-col justify-end p-8">
          <div className="flex w-full flex-col items-end gap-2">
            <input
              className="text-mediumBlue w-full text-right text-4xl"
              type="text"
              defaultValue={operantions.join('')}
            />
            <p className="text-lightGray text-6xl">1260</p>
          </div>
        </div>

        <div className="min-h-ConteinerButtonsH bg-coldWhite flex w-full flex-col items-center justify-between rounded-t-xl px-8 py-7">
          <div className="border-brandWhite shadow- h-2 w-[129px] rounded-full border-3 shadow-md"></div>

          <div className="flex w-full flex-wrap gap-5">
            <Button color={'secundary'}>C</Button>
            <Button color={'secundary'}>*/-</Button>
            <Button color={'secundary'}>%</Button>
            <Button color={'third'}>/</Button>
            <Button calculte={calculte} value={7}>
              7
            </Button>
            <Button calculte={calculte} value={8}>
              8
            </Button>
            <Button calculte={calculte} value={9}>
              9
            </Button>
            <Button color={'third'}>x</Button>
            <Button calculte={calculte} value={4}>
              4
            </Button>
            <Button calculte={calculte} value={5}>
              5
            </Button>
            <Button calculte={calculte} value={6}>
              6
            </Button>
            <Button color={'third'}>-</Button>
            <Button calculte={calculte} value={1}>
              1
            </Button>
            <Button calculte={calculte} value={2}>
              2
            </Button>
            <Button calculte={calculte} value={3}>
              3
            </Button>
            <Button color={'third'} calculte={calculte} value={'+'}>
              +
            </Button>
            <Button width={'secundary'} calculte={calculte} value={0}>
              0
            </Button>
            <Button>.</Button>
            {/* <Button bg={'secundary'} color={'first'}>
              =
            </Button> */}
            <button
              onClick={() => {
                console.log('ok')
              }}
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
