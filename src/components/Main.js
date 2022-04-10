import "./../components/Main.css"
function Main(props){
    return(
            <div className="quote-box">
                <div className="quote-text">{props.text}</div>
                <div className="quote-author"><cite>- {props.author}</cite></div>
            </div>
    );
}
export default Main;