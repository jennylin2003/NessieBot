import { process } from '/env'
  
const setupTextarea = document.getElementById('setup-textarea') 
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('nellie-bot-text')

const apiKey = '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'
const url = 'https://api.openai.com/v1/completions'

document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
    nellieBotText.innerText = `Ok, just wait a second while my digital brain digests that...`
  }
  fetchBotReply();
})

async function fetchBotReply(){
  try {
    const response = await openaiClient.createCompletion({
    'model': 'text-davinci-003',
    'prompt': 'Say something emotional in 4 words.'
  })
  console.log(response)
