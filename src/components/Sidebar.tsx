import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import mapMarkerImg from '../assepts/Local.svg';
import { useHistory } from "react-router-dom";
import '../styles/components/sidebar.css';


export default function Sidebar() {
    const { goBack } = useHistory();
    return (
        <aside className="app-side">
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    );
};