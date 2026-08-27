/*import './App.css';*/
import Navbar from './component/Navbar';
import Footer from './component/Footer';
/*import ProfileCard from './component/ProfileCard';*/
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>

      </main>
      
      <Footer />
    </div>
    
  );
}
  
export default App;






/*
const movies = [
  { id: 1, title: 'Interstellar', genre: 'Sci-Fi',    year: 2014 },
  { id: 2, title: 'Your Name',    genre: 'Animation', year: 2016 },
  { id: 3, title: 'Parasite',     genre: 'Thriller',  year: 2019 },
];
*/

/* 
  <div className="flex min-h-screen flex-col bg-slate-50"> 
      <Navbar />  เรียกใช้งาน Navbar 

       Hero — ส่วนต้อนรับ
      <header className="bg-slate-900 px-6 pb-16 pt-12 text-center">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          ดูหนังดี ๆ ไปด้วยกัน
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          รวมหนังคุณภาพที่คัดมาแล้ว อัปเดตใหม่ทุกสัปดาห์
        </p>
      </header>

      เนื้อหาหลัก — การ์ดหนัง responsive
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <h2 className="mb-6 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {movies.map((m) => (
            <div key={m.id}
                 className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                            transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
              <p className="mt-1 text-sm text-slate-500">ปี {m.year}</p>
              <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1
                               text-xs font-medium text-cyan-700">{m.genre}</span>
            </div>
          ))}
        </div>
      </main>

      <Footer /> เรียกใช้งาน Footer
    </div>
*/





/*
function App() {
  return (

    <div className="min-h-screen">
      <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
        <span className="text-xl font-bold text-white">🎬 MovieHub</span>
        <div className="flex gap-6 text-slate-300">
          <a href="#">หน้าแรก</a>
          <a href="#">หนังใหม่</a>
          <a href="#">รายการโปรด</a>
        </div>
      </nav>

      <div>
        <main className="space-y-1">

          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-4 shadow">การ์ด 1</div>
            <div className="rounded-xl bg-white p-4 shadow">การ์ด 2</div>
            <div className="rounded-xl bg-white p-4 shadow">การ์ด 3</div>
            <div className="rounded-xl bg-white p-4 shadow">การ์ด 4</div>
          </div>

          <div className="flex w-fit flex-col items-center bg-slate-300 p-7">
            <h1 className="text-5xl font-bold italic uppercase text-cyan-600 underline line-through">
              Hello Tailwind! 🎨
            </h1>
          </div>

          <div className="mx-auto max-w-sm rounded-2xl border bg-slate-100 text-center p-6 items-center">
            <h1 className="text-4xl font-bold text-slate-800">MovieHub</h1>
            <p className="text-lg text-slate-500">รวมหนังดีที่คุณห้ามพลาด</p>
            <p className="text-sm font-semibold uppercase text-cyan-600">since 2026</p>
          </div>

          <div className="mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-slate-800">Interstellar</h2>
            <p className="mt-2 text-slate-500">การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ</p>
            <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">Sci-Fi</span>
          </div>

          <div className="flex gap-3 p-6">
            <Button>บันทึก</Button>
            <Button variant="danger">ลบ</Button>
            <Button variant="ghost">ยกเลิก</Button>
          </div>

        </main>
      </div>

    </div>
  );
}*/







/*
const members = [
  { id: 1, name: 'ภานุกร พิมพ์พา', nickname: 'กาฟิว', major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'แกงกระหรี่'] },
  { id: 2, name: 'ภูรีพัชญ์ บุษบงค์', nickname: 'ต้าหมิง', major: 'เทคโนโลยีสารสนเทศ', favorites: ['นม', 'ข้าวกะเพรา'] },
  { id: 3, name: 'peter parker', nickname: 'ปีเตอร์', major: 'เทคโนโลยีสารสนเทศ', favorites: ['พิซซ่า', 'โคล่า'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];*/



/*function App() {
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
} */








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


