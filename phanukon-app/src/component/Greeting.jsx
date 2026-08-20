/*
function Greeting(props) {
  return <h2>สวัสดี {props.name}! คุณเรียนอยู่ชั้นปี {props.year}</h2>;
}
*/

function Greeting({ name = "สุดหล่อ", year = 1 }) {
  return (
    <h2>
      สวัสดี {name}!
      ชั้นปี {year}
    </h2>
  );
}

export default Greeting;