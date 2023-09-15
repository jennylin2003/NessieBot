import { process } from '/env'
import { openai } from 'openai'

const openai = require('openai')
const apiKey = process.env.OPENAI_API_KEY
const openaiClient = new openai({ key: apiKey })
const setupTextarea = document.getElementById('setup-textarea') 
const setupInputContainer = document.getElementById('setup-input-container')
const nellieBotText = document.getElementById('nellie-bot-text')


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
} catch (error) {
  console.error('Error fetching bot reply:', error);
  // Handle errors here
}
}