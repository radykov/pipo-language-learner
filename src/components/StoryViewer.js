import React, { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';
import ContentContainer from './ContentContainer';
import useFetchData from '../utils/useFetchData';
import useLoadURLParams from '../utils/useLoadURLParams';
import useUpdateQueryParams from '../utils/useUpdateQueryParams';
import TitleContainer from './TitleContainer';

const StoryViewer = () => {
    const [selectedSentence, setSelectedSentence] = useState(null);
    const [selectedWord, setSelectedWord] = useState(null);

    const { selectedLanguage, setSelectedLanguage, storyPath, setStoryPath } = useLoadURLParams();
    useUpdateQueryParams(selectedLanguage, storyPath);

    const { data, stories, currentStoryTitle, isLoading } = useFetchData(storyPath, selectedLanguage);

    useEffect(() => {
        setSelectedSentence(null);
        setSelectedWord(null);
    }, [selectedLanguage]);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="story-viewer-container">
            <header className="story-viewer-header">

                <TitleContainer
                    currentStoryTitle={currentStoryTitle}
                    data={data}
                    stories={stories}
                    setStoryPath={setStoryPath}
                />
                {isLoading && <div>Loading...</div>}
                <div className="language-selector-container">
                    <LanguageSelector
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                    />
                </div>
            </header>

            <ContentContainer
                data={data}
                setSelectedSentence={setSelectedSentence}
                setSelectedWord={setSelectedWord}
                selectedSentence={selectedSentence}
                selectedWord={selectedWord}
            />
        </div>
    );
};

export default StoryViewer;