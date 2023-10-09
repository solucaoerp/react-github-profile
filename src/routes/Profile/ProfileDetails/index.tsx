import './styles.css';

import { ProfileData } from "../../../models/profileGithub";

interface ProfileDetailsProps {
    data: ProfileData;
}

export default function ProfileDetails({ data }: ProfileDetailsProps) {
    return (
        <div className="profile-details-container">
            <img src={data.avatar_url} alt={data.login} />
            <div className="profile-info-container">
                <h3 className="info-title">Informações</h3>
                <div className="info-item"><span className="label-bold">Perfil:</span> <span className="label-url">{data.html_url}</span></div>
                <div className="info-item"><span className="label-bold">Seguidores:</span> {data.followers}</div>
                <div className="info-item"><span className="label-bold">Localidade:</span> {data.location}</div>
                <div className="info-item"><span className="label-bold">Nome:</span> {data.name}</div>
            </div>
        </div>
    );
}