import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';

import './body.css';

const Body = () => {
    const [word, setWord] = useState('');
    const [definitions, setDefinitions] = useState([]);
    const [transcription, setTranscription] = useState('');
    const [pronunciation, setPronunciation] = useState('');
    const [audioUrl, setAudioUrl] = useState('');



    // Dictionary
    const API_KEY = '01ceee64-1471-41ac-8dc8-73c918aaac1c';
    const API_URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`;


    // Thesaurus
    const THESAURUS_URL = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key${API_KEY}`;


    const fetchDefinition = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                const definitions = data.map(item => item.shortdef[0]);
                setDefinitions(definitions);

                const transcription = data[0]?.hwi?.prs?.[0]?.mw ?? '';
                setTranscription(transcription);

                const pronunciation = data[0]?.hwi?.prs?.[0]?.ipa ?? '';
                setPronunciation(pronunciation);

                const audioUrl = data[0]?.hwi?.prs?.[0]?.sound?.audio ?? '';
                setAudioUrl(audioUrl);
            } else {
                setDefinitions(['No definition found.']);
                setTranscription('');
                setPronunciation('');
                setAudioUrl('');
            }
        } catch (error) {
            console.error('Error fetching definition:', error);
            setDefinitions(['Word not found!']);
            setTranscription('');
            setPronunciation('');
            setAudioUrl('');
        }
    };

    const playPronunciation = () => {
        const audio = new Audio(`https://media.merriam-webster.com/soundc11/${audioUrl[0]}/${audioUrl}.wav`);
        audio.play();
    };

    return (
        <div>
            <div className="search__area">
                <input
                    type="text"
                    placeholder=""
                    value={word}
                    onChange={e => setWord(e.target.value)}
                    className="body__search-input"
                />
                <SearchIcon onClick={fetchDefinition} className="search__button" />
            </div>

            {word && (
                <div className="body__word-display">
                    <div className="body__word-transcription">
                        <div className="body__word-highlight">
                            <h1>{word}</h1>
                            <p>{transcription}</p>
                            <p>{pronunciation}</p>
                        </div>
                        <div className="body__word-transcription"></div>
                    </div>

                    {audioUrl && (
                        <div className="body__audio" onClick={playPronunciation}>
                            <PlayArrowIcon className="play__icon" />
                        </div>
                    )}
                </div>
            )}

            {word && (
                <div className="body__containter-meanings">
                    <h2>Definitions:</h2>

                    <div className="body__meanings">
                        {definitions.map((definition, index) => (
                            <p key={index}>
                                <span className="CircleIcon"></span>
                                {definition}
                            </p>
                        ))}
                    </div>
                </div>
            )}


        </div>
    );
};

export default Body;
