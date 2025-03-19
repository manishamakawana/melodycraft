import { useState } from "react";
import "./styles.css";

const DownloadMultipleAudio = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const audioFiles = [
        { name: "Song 1", url: "/audio/song1.mp3" },
        { name: "Song 2", url: "/audio/song2.wav" },
        { name: "Song 3", url: "/audio/song3.aiff" }
    ];

    const toggleSelection = (url) => {
        setSelectedFiles(prev => prev.includes(url) ? prev.filter(f => f !== url) : [...prev, url]);
    };

    const downloadSelected = () => {
        if (selectedFiles.length === 0) {
            alert("Please select at least one file to download.");
            return;
        }
        selectedFiles.forEach(fileUrl => {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = fileUrl.split("/").pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };


    return (
        <div>
            <ul>
                {audioFiles.map(file => (
                    <li key={file.url}>
                        <input
                            type="checkbox"
                            checked={selectedFiles.includes(file.url)}
                            onChange={() => toggleSelection(file.url)}
                        />
                        {file.name} ({file.url.split('.').pop().toUpperCase()})
                    </li>
                ))}
            </ul>
            <div>
            <button onClick={downloadSelected}className="db">🡇</button>
            </div>
        </div>
    );
};

// **Export the component**
export { DownloadMultipleAudio };
