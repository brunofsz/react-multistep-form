import "./Review.css"
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs"

const ReviewForm = ({ data, updateFieldHandler }) => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input type="radio" value="unsatisfied" name="review" checked={data.review === "unsatisfied"} onChange={(e) => { updateFieldHandler("review", e.target.value) }} required />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="neutral" name="review" checked={data.review === "neutral"} onChange={(e) => { updateFieldHandler("review", e.target.value) }} required />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="satisfied" name="review" checked={data.review === "satisfied"} onChange={(e) => { updateFieldHandler("review", e.target.value) }} required />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="very_satisfied" name="review" checked={data.review === "very_satisfied"} onChange={(e) => { updateFieldHandler("review", e.target.value) }} required />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="coment">Comentário: </label>
                <textarea name="coment" id="coment" placeholder="Conte como foi sua experiência com o produto..." value={data.coment || ""} onChange={(e) => { updateFieldHandler("coment", e.target.value) }} required></textarea>
            </div>
        </div>
    )
}

export default ReviewForm