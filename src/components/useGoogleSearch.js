import React from "react";
import { useState, useEffect } from "react";

// GOOGLE SEARCH API KEY GOES HERE
const API_KEY = "your google search api key here";
const CONTEXT_KEY = "1d74578f6191d4559";

const useGoogleSearch = (term) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
			)
				.then((response) => response.json())
				.then((result) => {
					setData(result);
				});
		};

		fetchData();
	}, [term]);
	return { data };
};

export default useGoogleSearch;
