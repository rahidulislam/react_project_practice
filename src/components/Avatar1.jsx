import { getImageUrl } from "./getImageUrl"

export default function Avatar1({ person, size }) {
    return (
        <img src={getImageUrl(person)} alt={person.name} height={size} width={size} />
    );
}