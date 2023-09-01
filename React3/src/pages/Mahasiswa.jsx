import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Mahasiswa = () => {

    
  const [data, setData] = useState(null);
    
  const fetchData = async () => {
      const res = await axios.get("https://strapi-rygs.onrender.com/api/prodis");
  console.log(res.data.data[0].attributes.prodi[0]);
  setData(res.data.data[0].attributes.prodi[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const generateNPM = (tahun_masuk, kode_prodi, kode_unik) => {
    const tahunMasuk = tahun_masuk.slice(-2);
    const tahunLulus = parseInt(tahunMasuk) + 4;
    const kodeUnik = ("000" + kode_unik).slice(-4);
    return tahunMasuk + tahunLulus + kode_prodi + kodeUnik;
};

const NPM = useParams();
console.log(NPM);     //{id: '2226250129'}

  return (
    <div>
      <div>
        <h1>Data Mahasiswa</h1>

        <div>
            {data?.map((prodi, index) => (
                <div>
                    {angkatan.data[kelas].map((mahasiswa, index) => (
                    <div key={index}>
                        <div>NPM : {generateNPM.includes(generateNPM)} </div>
                        <div>Nama : {mahasiswa.nama} </div>
                        <div>
                            Jenis Kelamin : {mahasiswa.jenis_kelamin === "L"
                            ? "Laki-Laki"
                            : mahasiswa.jenis_kelamin === "P"
                            ? "Perempuan"
                            : "Tidak Diketahui"} 
                        </div>
                        <div>Alamat : {mahasiswa.alamat} </div>
                        <div>Hobi : {mahasiswa.hobi.join(", ")} </div>
                    </div>
                  ))}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Mahasiswa;
