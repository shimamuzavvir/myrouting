import './Style/card.css'

const Card = ({item}) => {

return (
<div className="col-lg-3">
    <div className="card h-100">
        <div className="h-25">
            <img src={item.image} className="card-img-top" alt="..."></img>
        </div>
        <div className="card-body ">
            <h5 className="card-title"  style={{ margin: "3.2em 0em 0.5em 0em" }}>{item.course}</h5>
            <p className="card-text">{item.content}</p>
        </div>
        <div class="card-footer">
            <small class="text-body-secondary">{item.date} {item.month}</small>
        </div>
    </div>
</div>
);
};

export default Card;