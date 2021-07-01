import React from 'react'
import { LocalizedLink } from 'gatsby-theme-i18n'

interface NextButtonProps {
  text: string
  link: string
}
export function NextButton({ text, link }: NextButtonProps) {
  return (
    <>
      <LocalizedLink className="inline-block" to={link}>
        <div className="flex items-center justify-center w-80 h-16 rounded-lg bg-substrateGreen hover:no-underline">
          <button className="text-lg text-black font-bold pr-4 focus:outline-none hover:no-underline">
            Next - {text}
          </button>
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2242 9.16977C9.98129 9.4291 9.8469 9.77643 9.84994 10.1369C9.85297 10.4975 9.9932 10.8423 10.2404 11.0973C10.4876 11.3522 10.8221 11.4968 11.1717 11.4999C11.5213 11.5031 11.8581 11.3645 12.1095 11.114L16.1096 6.98902C16.3596 6.73117 16.5 6.3815 16.5 6.0169C16.5 5.65229 16.3596 5.30262 16.1096 5.04477L12.1095 0.91977C11.9865 0.788443 11.8394 0.683692 11.6767 0.61163C11.5141 0.539568 11.3391 0.501636 11.1621 0.50005C10.985 0.498464 10.8094 0.533253 10.6456 0.602389C10.4817 0.671526 10.3328 0.773624 10.2076 0.902726C10.0825 1.03183 9.98345 1.18535 9.9164 1.35433C9.84936 1.52332 9.81563 1.70438 9.81716 1.88695C9.8187 2.06952 9.85549 2.24995 9.92537 2.4177C9.99525 2.58546 10.0968 2.73718 10.2242 2.86402L11.9482 4.6419L1.83336 4.6419C1.47973 4.6419 1.14059 4.78676 0.890532 5.04463C0.64048 5.30249 0.500001 5.65223 0.500001 6.0169C0.500001 6.38157 0.64048 6.73131 0.890533 6.98917C1.14059 7.24703 1.47973 7.3919 1.83336 7.3919L11.9482 7.3919L10.2242 9.16977Z"
              fill="black"
            />
          </svg>
        </div>
      </LocalizedLink>
    </>
  )
}