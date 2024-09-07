import FileDrop from "./FileDrop"
// import Request from "./APIRequest"
import Video from "./Video";
import Grade from "./Grade"
import { useEffect, useState } from "react";

function DropBox (props) {

    const [File, setFile] = useState(); 

    function getFile(getFile) {
        setFile(getFile);

    }

 
    return (
        <>
            {File ?  <Video videoId={File} videoFile={File}/> : <FileDrop getFile={getFile}/>}
        </>
    )
}

export default DropBox;