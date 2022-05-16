// import _ from 'lodash'
import './style.css'
let content = ['哦吼！！！', '让你点了么！！！', '介里似吧特嗯！！！', '憋点了。', '咋费事儿？']

const e = function(selector) {
  let element = document.querySelector(selector)
  if (element === null) {
      let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
      alert(s)
      return null
  } else {
      return element
  }
}

const randomText = () => {
  let random = parseInt(Math.random() * content.length)
  let c = content[random];
 return c
}

const bindEventUpdate = (element, callback) => {
  let btn = e(element)
  btn.classList.add('b');
  
  btn.addEventListener('click', () => {
    btn.innerText = callback()
  })
}

const bindEvents = () => {
  bindEventUpdate('.b', randomText)
}

const __main = () => {
  bindEvents()

}

__main()