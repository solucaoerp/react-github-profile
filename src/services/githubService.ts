import axios from 'axios';
import { BASE_URL } from '../utils/System';
import { ErrorData, ProfileData } from '../models/profileGithub';

export function fetchUserProfile(username: string) {
    return axios.get<ProfileData>(`${BASE_URL}/${username}`)
        .then(response => response.data)
        .catch(error => {
            if (axios.isAxiosError(error) && error.response) {
                throw error.response.data as ErrorData;
            }
            throw new Error("Erro desconhecido ao buscar perfil do usuário.");
        });
}