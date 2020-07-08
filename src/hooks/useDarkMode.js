import {useEffect} from 'react'
import { useLocalStorage} from './useLocalStorage'


export const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key)

    useEffect(() => {
        document.querySelector('body').classList.add("dark-mode")
    })


    return [value, setValue]
}