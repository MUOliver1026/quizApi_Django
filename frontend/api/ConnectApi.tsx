'use client'

import axios from "axios";
import {useEffect, useState} from "react";

const collectData = (url: string) => {
    const [fetch, setFetch] = useState({
        isFetching: false,
    });
    const [dataState, setDataState] = useState({
        data: []
    });
    const [apiurl, setApiurl] = useState(url);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try{
                setFetch({
                    isFetching: true
                });
                const response = await axios.get(apiurl);
                setDataState({
                    ...dataState,
                    data: response.data
                })
            }
            catch (error) {
                setFetch({
                    ...fetch,
                    isFetching: true,
                });
            }
        }
        fetchDataFromApi();
    }, []);

    return [dataState];
}

export default collectData;