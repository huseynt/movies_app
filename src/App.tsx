import s from './style.module.css';
import logo from './assets/images/logo.png'
import {Logo} from "./components/Logo/Logo.tsx";
import axios from 'axios';
import {API_KEY_PARAM, BACKDROP_BASE_URL, BASE_URL} from "./config.ts";
import {useEffect, useState} from "react";
import {ITvShowItem} from "./models/tvShowItem.ts";
import {TVShowDetail} from "./components/TVShowDetail/TVShowDetail.tsx";
import {TVShowList} from "./components/TVShowList/TVShowList.tsx";

import SearchBar from './components/SearchBar/SearchBar.tsx'

// https://api.themoviedb.org/3/tv/popular

export function App() {
    const [currentTVShow, setCurrentTVShow] = useState<ITvShowItem>({
        adult: false,
        backdrop_path: '',
        first_air_date: '',
        genre_ids: [],
        id: 0,
        name: '',
        origin_country: [],
        original_language: '',
        original_name: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        vote_average: 0,
        vote_count: 0
    });
    const [tvShowRecommendations, setTVShowRecommendations] = useState<ITvShowItem[]>([]);

    //! fetchData function to fetch popular TV shows
    async function fetchData() {
        try {
            const response = await axios.get(`${BASE_URL}tv/popular?api_key=${API_KEY_PARAM}`);
            setCurrentTVShow(response.data.results[0]);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (currentTVShow.id !== 0 && currentTVShow.id) {
            fetchRecommendations(currentTVShow.id);
        }
    }, [currentTVShow]);

    //! fetchRecommendations function to fetch recommendations for a TV show
    async function fetchRecommendations(id: number) {
        try {
            const response = await axios.get(`${BASE_URL}tv/${id}/recommendations?api_key=${API_KEY_PARAM}`);
            setTVShowRecommendations(response.data.results.slice(0, 10));
        } catch (error) {
            console.error(error);
        }
    }

    //! fetchByTitle function to search for a TV show by title
    function onSubmit(a: string) {
        async function searchData() {
            try {
                const response = await axios.get(`${BASE_URL}tv/popular?api_key=${API_KEY_PARAM}`);
                for(let i=0; i<=response.data.results.length;i++) {
                    // console.log("yes",response.data.results[i].original_name.toLowerCase().split(" "))
                    if(response.data.results[i].original_name.toLowerCase().split(" ").includes(a)) {
                        console.log("yes",response.data.results[i])
                        setCurrentTVShow(response.data.results[i])
                        return
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }
        searchData()
    }

    //! updateCurrentTVShow for the TVShowDetail component
    function updateCurrentTVShow(tvShow: ITvShowItem) {
        setCurrentTVShow(tvShow);
    }

    return (
        <div
            className={s.main_container}
            style={{
                background: currentTVShow ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
                         url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` : '#000'
            }}
        >
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo
                            img={logo}
                            title="WatchNext"
                            subtitle="Your next TV show is just a click away!"
                        />
                    </div>
                    <div className="col-md-12 col-lg-4">
                        {/*SearchBar*/}
                        <SearchBar onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
            <div className={s.tv_show_details}>
                {
                    currentTVShow.id && (
                        <TVShowDetail tvShow={currentTVShow} />
                    )
                }
            </div>
            <div className={s.recommended_shows}>
                {
                    tvShowRecommendations.length > 0 && (
                        <TVShowList tvShowList={tvShowRecommendations} onClickItem={updateCurrentTVShow} />
                    )
                }
            </div>
        </div>
    );
}
