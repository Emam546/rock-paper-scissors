import { useEffect, useState } from "react";

export function useLocalStorage<T>(defaultData: T, key: string) {
    const resData = localStorage.getItem(key);
    if (resData) defaultData = JSON.parse(resData);
    const state = useState<T>(defaultData);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state[0]));
    }, [state[0]]);
    return state;
}
