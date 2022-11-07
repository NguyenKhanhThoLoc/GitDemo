import { useState } from "react";
import { ICard } from "../../../Interfaces/Kanban";
import CustomInput from "../../CustomInput/CustomInput";
import "./CardInfor.css";

interface CardInfoProps {
  onClose: () => void;
  card: ICard;
  boardId: number;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}

function CardInfo(props: CardInfoProps) {
  const { onClose, card, boardId, updateCard } = props;
  const [cardValues, setCardValues] = useState<ICard>({
    ...card,
  });

  const updateTitle = (value: string) => {
    setCardValues({ ...cardValues, title: value });
  };

  const updateDesc = (value: string) => {
    setCardValues({ ...cardValues, desc: value });
  };

  /*useEffect(() => {
    if (updateCard) updateCard(boardId, cardValues.id, cardValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardValues]);
  */
}

function CardInfor() {


    return (

      <div className="cardinfo">
        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <p>Title</p>
          </div>

        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">

            <p>Description</p>
          </div>

        </div>
        </div>

      );
}

export default CardInfor;