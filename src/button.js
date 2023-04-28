import "./button.css";
export default function CustomButton(props) {
  return (
    <div className="btn-container" onClick={props.onClick}>
      <span className="">{props.name}</span>
    </div>
  );
}
