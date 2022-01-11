import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
import { calcDay } from './calcDay'
import codes from './todays-code.json'
import './style.css'

const carbonUrl = (code) =>
  `https://carbon.now.sh/?bg=rgba(171,%20184,%20195,%201)&t=material&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=10px&ph=9px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&code=${encodeURIComponent(
    code
  )}&es=2x&wm=false&ts=false`

const dayOffset = Number(location.pathname.replace('/', '')) || 0
const dayIndex = calcDay() - 11 + dayOffset

const dayCount = dayIndex + 1
const todayCode = codes[dayIndex] || ''
const codeHtml = Prism.highlight(todayCode, Prism.languages.javascript, 'js')
const codeUrl = carbonUrl(todayCode)

const template = `
  <h1>30초 JS 함수 ${dayCount}일차</h1>
  <h2>1초 뒤에 이동합니다.</h2>
  <a href="${codeUrl}" target="_blank"> 
    <pre>
      <code class="language-javascript">${codeHtml}</code>
    </pre>
  </a>
`

document.querySelector('#app').innerHTML = template

setTimeout(() => {
  window.location.href = codeUrl
}, 1000)
