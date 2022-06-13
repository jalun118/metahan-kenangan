import "../css/document.css"
import { motion } from "framer-motion";
import { TapTitle } from "../Utils/TapTitle";
import { Link } from "react-router-dom";

export default function Document() {
  TapTitle('Document');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <section id="" className="document">
        <div className="container document-isi">
          <div className="row">
            <div className="isi-document mb-4">
              <h1 className="judul-document">Getting Started</h1>
            </div>
            <div className="container">
              <p className="docs-isi">Halaman ini adalah dokumentasi atau tutorial yang simpel :-)</p>
              <p className="docs-isi-1">Selamat mencoba ^_^.</p>
              <hr />
              <ul className="list-docs">
                <li className="con-list-docs"><a href="#add-image">Menambahkan Gambar Pada Halaman Memory</a></li>
                <li className="con-list-docs"><a href="#">Menambahkan Gambar</a></li>
              </ul>
              <h2 id="add-image" className="tutor-img">Menambahkan Gambar</h2>
              <h3 className="judul-tutor">Step 1: Buka Api</h3>
              <p className="des-tutor">Buka link berikut ini <a href="https://github.com/jalun118/api-temen-temen" className="attr-link" target='_blank'>Linknya Coy</a> </p>
              <h3 className="judul-tutor">Step 2: Cari File</h3>
              <p className="des-tutor">Cari file bernama <code>item.json</code>, lalu click tanda titik tiga dan pilih edit</p>
              <div className="tutor-img-isi">
                <pre className="pre-si">
                  <code className="pre-si">
                    <span className="cod-highlight">
                      <code>261 lines (261 sloc) | ...kb                    </code>
                      <span className="material-symbols-outlined so-simp">
                        more_horiz
                      </span>
                    </span>
                  </code>
                </pre>
              </div>
              <h3 className="judul-tutor">Step 3: Tambahkan Atribut</h3>
              <p className="des-tutor">Tambahkan code seperti dibawah ini pada <code>item.json</code> yang ada .... jangan di salin itu hanya contoh</p>
              <div className="tutor-img-isi">
                <pre className="pre-si">
                  <code className="pre-si">
                    <span className="cod-highlight">
                      <span className="token white"><code>            <code className="token key">"......"</code> : <code className="token value">"........"</code>,</code></span>
                    </span>
                    <span className="cod-highlight">
                      <span className="token white"><code>        <code className="kurung-akhir">, <code className="token comment">//tambahakan koma</code></code></code></span>
                    </span>
                    <span className="cod-highlight">
                      <span className="token white"><code>        <code className="kurung-awal"></code><code className="token comment">  //awal salin</code></code></span>
                    </span>
                    <span className="cod-highlight">
                      <span className="token white"><code>            <code className="token key">"id"</code> : <code className="token value">"id link gambar"</code>,</code></span>
                    </span>
                    <span className="cod-highlight">
                      <span className="token white"><code>            <code className="token key">"foto"</code> : <code className="token value">"link foto gambar"</code>,</code></span>
                    </span>
                    <span className="cod-highlight">
                      <span className="token white"><code>            <code className="token key">"title"</code> : <code className="token value">"judul gambar"</code>,</code></span>
                    </span>
                    <span className="cod-highlight">
                      <span className="token white"><code>            <code className="token key">"deskripsi"</code> : <code className="token value">"deskripsi gambar"</code>,</code></span>
                    </span>
                    <span className="cod-highlight">
                      <span className="token white"><code>            <code className="token key">"download"</code> : <code className="token value">"link download gambar"</code>,</code></span>
                    </span>
                    <span className="cod-highlight">
                      <span className="token white"><code>        <code className="kurung-akhir"><code className="token comment"> //batas salin</code></code></code></span>
                    </span>
                    <span className="cod-highlight">
                      <span className="token white"><code>    <code className="array-akhir"><code className="token comment"></code></code></code></span>
                    </span>
                  </code>
                </pre>
              </div>
              <h3 className="judul-tutor">Step 4: Save perubahan</h3>
              <p className="des-tutor">Beri Keterangan Yang jelas</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}