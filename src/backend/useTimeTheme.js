import { useState, useEffect } from "react";

function useTimeTheme() {
    const [isNight, setIsNight] = useState(false);

    useEffect(() => {
        const applyTheme = () => {
            const hour = new Date().getHours();
            const night = hour >= 18 || hour < 6;
            setIsNight(night); 
            document.documentElement.classList.toggle("theme-night", night);
        };

        applyTheme();
        const interval = setInterval(applyTheme, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return isNight;
}

export default useTimeTheme;