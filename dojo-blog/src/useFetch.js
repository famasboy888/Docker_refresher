import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Could not fetch data');
                    }
                    return res.json();
                })
                .then((rec) => {
                    setData(rec);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if( err.name === "AbortError"){
                        console.log("fetch aborted");
                    }else{
                        setError(err.message);
                        setIsPending(false);
                    }
                });
        }, 1000)

        return () => { abortController.abort() }
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;