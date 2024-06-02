import { useEffect, useState } from "react";

function TypeWritter({
    text,
    typingSpeed = 100,
    deletingSpeed = 50,
    duration = 1000
}) {
    const [displayedText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
          if (!isDeleting) {
            if (displayedText.length < text[index].length) {
              setDisplayText((prev) => prev + text[index].charAt(displayedText.length));
            } else {
              setTimeout(() => setIsDeleting(true), duration)
            } 
          } else {
            if (displayedText.length > 0) {
               setDisplayText((prev) => prev.slice(0,-1))
            } else {
              setIsDeleting(false);
              setIndex((prev) => (prev + 1) % text.length)
             }
          }
        };
    
        const timeout = setTimeout(
          handleTyping,
          isDeleting ? deletingSpeed : typingSpeed
        );
    
        return () => clearTimeout(timeout); 
      },[displayedText, isDeleting, index, text, typingSpeed, deletingSpeed, duration] )
  return(
    <div className="typing-effect">
        {displayedText}
        <span className="caret">|</span>
    </div>
  );
}

export default TypeWritter;
