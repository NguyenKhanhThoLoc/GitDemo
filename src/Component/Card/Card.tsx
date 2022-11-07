import { ICard } from "../../Interfaces/Kanban";
import "./Card.css";
import CardInfor from "./CardInfor/CardInfor";


interface CardProps {
    card: ICard;
    boardId: number;
    removeCard: (boardId: number, cardId: number) => void;
    onDragEnd: (boardId: number, cardId: number) => void;
    onDragEnter: (boardId: number, cardId: number) => void;
    updateCard: (boardId: number, cardId: number, card: ICard) => void;
}

function Card(props: CardProps){
    const { card, boardId, removeCard, onDragEnd, onDragEnter, updateCard} = props;
    const { id, title, desc, level} = card;

    return (
        <div className="card"
        key={card.id}
        draggable
        onDragEnd={() => onDragEnd(boardId, id)}
        onDragEnter={() => onDragEnter(boardId, id)}
        >
            <div className="card-top">
            <div className="card-top-labels">
                Hi
            </div>

            <div className="card-top-more">
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                ...
                </button>
                <ul className="dropdown-menu">
                <li><p className="dropdown" onClick={() => removeCard(boardId, id)}>Delete Card</p></li>
                <li><p className="dropdown">Edit card</p></li>
                </ul>
            </div>
            </div>
            </div>
            <div className="card-title">{title}</div>
            <div>
          <p title={desc}>
            Task Discription.
          </p>
          <div className="card-footer">
            {level}
          </div>
        </div>
        </div>
    );
}

export default Card;