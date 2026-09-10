import React from "react";
import { movies } from "../data.js";
import MovieCard from "../component/MovieCard";
import MovieGallery from "../component/MovieGallery";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ Homepage</p>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">หนังยอดนิยม</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies.slice(0, 3).map(m => (
          <MovieCard key={m.id} movie={m} title={m.title} year={m.year}/>
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">หนังที่น่าแนะนำ</h2>
      <div className="mx-auto mt-8 max-w-md">
          <MovieGallery />
      </div>
      
    </div>
  );
}

export default Home;