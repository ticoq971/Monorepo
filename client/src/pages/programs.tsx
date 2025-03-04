import { useEffect, useState } from "react";
import "../assets/styles/programs.css";
interface Program {
  title: string;
  id: number;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}
export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://192.168.0.55:3310/api/programs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des programmes");
        }
        return response.json();
      })
      .then((data) => {
        setPrograms(data.results || data);
      });
  }, []);

  return (
    <div className="series">
      <h1>Liste des Séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <h3>
              {program.country} {program.year}
            </h3>

            <img src={program.poster} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
