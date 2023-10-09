import './styles.css';

import { ErrorData } from '../../models/profileGithub';

interface RequestErrorAlertProps {
    errorData: ErrorData;
}

export default function RequestErrorAlert({ errorData }: RequestErrorAlertProps) {
    const { message, documentation_url } = errorData;

    return (
        <div className="request-error-container">
            <div className="request-error-general-title">Erro ao buscar usuário</div>
            <div className="request-error-context">Mensagem do servidor:</div>
            <div className="request-error-title">{message}</div>
            <div>Documentação: <a href={documentation_url} target="_blank" rel="noopener noreferrer">{documentation_url}</a></div>
        </div>
    );
}
