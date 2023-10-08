import { useState, useEffect } from 'react';

import ButtonPrimary from "../../../components/ButtonPrimary";
import ProfileDetails from '../ProfileDetails';
import RequestErrorAlert from '../../../utils/RequestErrorAlert';
import { ErrorData, ProfileData } from '../../../models/profileGithub';
import { fetchUserProfile } from '../../../services/githubService';

export default function ProfileSearch() {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [errorData, setErrorData] = useState<ErrorData | null>(null);
    const [username, setUsername] = useState<string>("");
    const [shouldFetch, setShouldFetch] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    useEffect(() => {
        if (shouldFetch) {
            fetchUserProfile(username)
                .then(data => {
                    setProfileData(data);
                    setErrorData(null);
                })
                .catch(error => {
                    if (error && typeof error === 'object' && 'message' in error) {
                        setErrorData(error as ErrorData);
                    } else {
                        setErrorData({ message: 'Erro desconhecido ao buscar perfil.', documentation_url: '' });
                    }
                    setProfileData(null);
                });
            setShouldFetch(false);
        }
    }, [shouldFetch, username]);

    return (
        <>
            <div className="container">
                <h1>Encontre um perfil Github</h1>
                <input
                    type="text"
                    placeholder="Usuário Github"
                    value={username}
                    onChange={handleInputChange}
                />
                <ButtonPrimary buttonDescription="Encontrar" onClick={() => setShouldFetch(true)} />
            </div>

            {profileData && <ProfileDetails data={profileData} />}
            {errorData && <RequestErrorAlert errorData={errorData} />}
        </>
    );
}