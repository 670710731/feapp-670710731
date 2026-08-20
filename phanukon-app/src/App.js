import './App.css';
import ProfileCard from './component/ProfileCard';

const members = [
  { id: 1, name: 'ภานุกร พิมพ์พา', nickname: 'กาฟิว', major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'แกงกระหรี่'] },
  { id: 2, name: 'ภูรีพัชญ์ บุษบงค์', nickname: 'ต้าหมิง', major: 'เทคโนโลยีสารสนเทศ', favorites: ['นม', 'ข้าวกะเพรา'] },
  { id: 3, name: 'peter parker', nickname: 'ปีเตอร์', major: 'เทคโนโลยีสารสนเทศ', favorites: ['พิซซ่า', 'โคล่า'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];


function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}





































/*
import Header from './component/Header';
import MovieList from './component/MovieList';
import Footer from './component/Footer';
import Hello from './component/Hello';
import Greeting from './component/Greeting';
import Card from './component/Card';

const students = [
  { id: 1, name: 'ฝน',   year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
  { id: 4, name: 'น้ำ', year: 3},
];

function App() {
  return (
    <div>
      <Header />
      <MovieList />
      <Greeting name="ฝน" year={3} />
      <Greeting name="เต้ย" year={2} />
      <Greeting name="มายด์" year={4} />
      <Greeting name="มายด์" />
      <Greeting year={4} />
      <Hello />

      <Card title="ประกาศ">
        <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
        <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
      </Card>

      <h1>รายชื่อนักศึกษา</h1>
      {students.map((st) => (
        <Greeting key={st.id} name={st.name} year={st.year} />
      ))}


      <Footer />
    </div>
  );
}
*/
export default App;

