import { useState } from 'react'
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition, browserSupportsSpeechRecognition } from 'react-speech-recognition';
import './SpeechRecognition.css'
import send from '../../assets/send.jpg'
import mic from '../../assets/mic.jpg'
import notMic from '../../assets/not-mic.jpg'
import 'regenerator-runtime/runtime'
import { getContext } from '../../Services/Services';
//import server from '../../Services/Server.js'

const SpeechRecognitionComponent = () => {
    const [text, setText] = useState('')
    const [show, setShow] = useState([])
    const [transcription, setTranscription] = useState(""); // Variable para almacenar el texto transcrito
    const { listening } = useSpeechRecognition();

    //if (!browserSupportsSpeechRecognition) return <span>Sin reconocimiento de vz</span>;

    const fetchGeminiResponse = async (userInput) => {
      try {
          const response = await fetch('https://api.gemini.com/chat', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer AIzaSyAlhEyDvzOaHRhlP7qMiJJAzQBv82-O6kg`
              },
              body: JSON.stringify({ message: userInput })
          });
          const data = await response.json();
          console.log(data);
          
          return data.reply; // Ajusta según la respuesta de la API
      } catch (error) {
          console.error("Error al obtener respuesta de Gemini", error);
          return "Lo siento, hubo un error al procesar tu solicitud.";
      }
    };


  const handleTranscription = () => {
    const { transcript } = useSpeechRecognition();
    setTranscription(transcript); // Guarda el texto transcrito en la variable
    setText(transcript);
    console.log(text);
  };

  return (
    <div className='speech-recognition'>
      <div className='message message-item'>Hola, mi nombre es AntonIA, ¿en que te puedo ayudar?</div>
        {show.map((item, index) => (
          index % 2 !== 0 ? (
              <div key={index} className='message message-item'>
                {item}
              </div>
              ):(
                <div key={index} className='message right message-item'>
                  {item}
                </div>
              )
          ))}
        <div className='interactive'>
          <input className='input-message' value={text} onChange={() => setText(event.target.value)}/>
          <div className='buttons'>
            <button className='send-button' onClick={ async () => {
                if (text.trim()) { // Validar que el texto no esté vacío
                  show.push(text)
                  setShow(show); // Añadir el nuevo texto al array (sin mutar el estado actual)
                  setText(''); // Limpiar el input después de enviar
                  const geminiResponse = await fetchGeminiResponse(getContext(text));
                  console.log("Gemini-resp: ", geminiResponse);
                  
                  show.push(geminiResponse)
                  setShow(show);
                }
                }}><img className='send' src={send}/></button>
            <button className='mic-button' onClick={() => { console.log("listening");
                                                            SpeechRecognition.startListening({ continuous: true });
                                                            handleTranscription()
                                                          }}><img className='mic' src={mic}/></button>
            <button className='mic-button' onClick={() => { console.log("NOT listening");
                                                            SpeechRecognition.stopListening();
                                                          }}><img className='mic' src={notMic}/></button>
          </div>
        </div>
    </div>
  )
}

export default SpeechRecognitionComponent