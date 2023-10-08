import { ProfileData } from "../../../models/profileGithub";

interface ProfileDetailsProps {
    data: ProfileData;
}

export default function ProfileDetails({ data }: ProfileDetailsProps) {
    return (
        <div className="container">
            <div>
                <img src={data.avatar_url} alt={data.login} />
            </div>
            <div>
                <h3>Informações</h3>
                <div>Perfil: {data.html_url}</div>
                <div>Seguidores: {data.followers}</div>
                <div>Localidade: {data.location}</div>
                <div>Nome: {data.name}</div>
            </div>
        </div>
    );
}
