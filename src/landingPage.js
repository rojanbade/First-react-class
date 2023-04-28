function LandingPage(props) {
  console.log(props);
  return (
    <div>
      <h2>Hi {props.name}</h2>
      <h2>My address is {props.address}</h2>
      <h2>I study at {props.colz}</h2>
    </div>
  );
}
export default LandingPage;
