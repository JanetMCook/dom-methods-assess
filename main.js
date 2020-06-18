let newMain = document.createElement('main')
// newMain.className = 'braincell'
let bodyElement = document.querySelector('body')
bodyElement.append(newMain)
// newMain.id = 3
newMain.append('Brainstorm')


let anchorElement = document.createElement('a')
anchorElement.href='https://youtu.be/f_R9_xdhuNw'
newMain.append(anchorElement)

let imgElement = document.createElement('img')
imgElement.src = 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/brainstorm-2008-a67ad204a0c45dd666dc15f8d8e62230@2x.jpg'
newMain.append(imgElement)

let newButton = document.createElement('button')
newButton.append('Button')
bodyElement.append(newButton)
newButton.addEventListener("click", function () {
    let newMain = document.querySelector('main')
    newMain.remove()
})

let newScript = document.createElement('Script')
bodyElement.append(newScript)
