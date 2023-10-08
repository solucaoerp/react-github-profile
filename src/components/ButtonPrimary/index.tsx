import './styles.css';

interface ButtonPrimaryProps {
    buttonDescription: string;
    onClick?: () => void;
}

export default function ButtonPrimary({ buttonDescription, onClick }: ButtonPrimaryProps) {
    return (
        <div className="btn" onClick={onClick}>
            {buttonDescription}
        </div>
    );
}