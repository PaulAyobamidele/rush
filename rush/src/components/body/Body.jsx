import {useState} from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';
import CircleIcon from '@mui/icons-material/Circle';



import "./body.css"

const Body = () => {
    const [word, setWord] = useState('');
    const [definitions, setDefinitions] = useState([]);
    const [transcription, setTranscription] = useState('');


    const API_KEY = '01ceee64-1471-41ac-8dc8-73c918aaac1c';
    const API_URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`

    const fetchDefinition = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                const definitions = data.map(item => item.shortdef[0]);
                setDefinitions(definitions);
            
                const transcription = data[0]?.hwi?.prs?.[0]?.mw ?? '';
                setTranscription(transcription);



            } else {
                setDefinitions('No definition found.');
            }

        } catch (error) {
            console.error('Error fetching definition:', error);
            setDefinitions('Error fetching definition.');
        }
    };


  return (
    <div>
        <div className="search__area">
            <input type="text"
            placeholder='Enter a word'
            value = {word}
            onChange={(e) => setWord(e.target.value)}
            className='body__search-input'
            />
            <SearchIcon onClick={fetchDefinition} className='search__button'/>
        </div>
        
        

        <div className="body__word-display">
            <div className="body__word-transcription">
                <div className="body__word-highlight">
                    <h1>{word}</h1>
                    <p>{transcription}</p>
                </div>
                <div className="body__word-transcription">
                    
                </div>
            </div>

            <div className="body__audio">
                <PlayArrowIcon className='play__icon'/>
            </div>
        </div>

        <div className='body__containter-meanings'>
            <h2>Meaning:</h2>

            <div className="body__meanings">
                {definitions.map((definition, index) => (
                    <p key={index}>
                    <span
                        className="CircleIcon"
                        style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 'smaller', 
                        }}
                    >
                        <CircleIcon className="CircleIcon" />
                    </span>
                    {definition}
                    </p>
                ))}
                </div>

            
        </div>
      
    </div>
  )
}

export default Body
