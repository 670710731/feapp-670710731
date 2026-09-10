import { useParams, Link } from 'react-router-dom';
import { movies } from '../data.js';

function MovieDetail() {
  const { id } = useParams();                       // อ่านค่าจาก URL (ได้เป็น string!)
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return <p className="p-8 text-center text-slate-500">ไม่พบหนังเรื่องนี้ 😢</p>;
  }

  const thaiTitle = movie.titleTh || movie.titleth;

  return (
    <div className="mx-auto grid max-w-4xl gap-8 p-8 md:grid-cols-[240px_1fr]">
      {movie.poster && (
        <img
          src={movie.poster}
          alt={`โปสเตอร์ ${thaiTitle || movie.title}`}
          className="w-full rounded-2xl object-cover shadow-lg"
        />
      )}

      <div>
        <h1 className="text-3xl font-bold text-slate-800">{thaiTitle || movie.title}</h1>
        {thaiTitle && <p className="mt-1 text-slate-500">{movie.title}</p>}
        <p className="mt-4 text-slate-500">
          {movie.year && `ปี ${movie.year}`}
          {movie.year && movie.genre && ' · '}
          {movie.genre}
        </p>
        {movie.rating != null && (
          <p className="mt-2 font-semibold text-amber-600">คะแนน {movie.rating}/10</p>
        )}
      <p className="mt-4 leading-relaxed text-slate-700">{movie.detail}</p>
      <Link to="/movies"
            className="mt-6 inline-block rounded-lg bg-cyan-600 px-4 py-2
                       font-semibold text-white hover:bg-cyan-700 transition">
        ← กลับไปหน้าหนังทั้งหมด
      </Link>
      </div>
    </div>
  );
}

export default MovieDetail;