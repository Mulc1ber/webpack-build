import '../index.css'
import IMAGE from '../assets/js.png'


const javaScript = () => {

    const container = document.createElement('div')
    container.className = 'container'
    document.body.append(container)

    const jsHeader = document.createElement('h1')
    jsHeader.textContent = 'I Love JavaScript'
    container.append(jsHeader)

    const jsImageHTML = document.createElement('img')
    jsImageHTML.src = IMAGE
    container.append(jsImageHTML)
}
javaScript()
