// Importe le module de styles pour utiliser les classes CSS définies dans le fichier .scss
import style from "./style.module.scss";

// Composant fonctionnel NoteNumber qui affiche le nombre total de notes et le nombre total de caractères dans ces notes.
export const NoteNumber = ({ listNote }) => {
    // Utilise la méthode reduce pour calculer le nombre total de caractères dans toutes les notes
    const totalChar = listNote.reduce((prevValue, note) => {
        // Utilisez la propriété 'length'  pour obtenir la longueur de chaque titre et message de la note
        return prevValue + note.title.length + note.message.length;
    }, 0);

    // Rendu du composant avec les résultats calculés
    return (
        <div className={style.numberBox}>
            <p className="paragraph">
                Note : <span className="paragraph bold">{listNote.length}</span> {""} 
                Caractères : <span className="paragraph bold">{totalChar}</span>
            </p>
        </div>
    );
};
