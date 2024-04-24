const container=document.querySelector('.container')
const text=document.querySelector('#text')
const totaltime=7500
const breathtime=(totaltime / 5) *2
const holdtime=totaltime / 5
breathAnimation
function breathAnimation ()
{
    text.innerHTML='Breath In'
    container.className='container grow'

    setTimeout(() => {
        text.innerText='Hold'
        setTimeout(() => {
            text.innerHTML='Breath out'
            container.className='container shrink'
        },holdtime)
    },breathtime)

}
setInterval(breathAnimation,totaltime)
