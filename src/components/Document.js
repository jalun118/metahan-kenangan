import "../css/document.css"
import { motion } from "framer-motion";

export default function Document() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <section id="" className="document">
        <div className="container document-isi">
          <div className="row">
            <div className="isi-document mb-4 text-align-center">
              <h2>Recomended</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src="https://drive.google.com/uc?id=14OYNa6HLbvqgZMacgGZQRCBQucjKzX7M" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h2>Kosong</h2>
                    <p className="card-text">ks</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src="https://drive.google.com/uc?id=14OYNa6HLbvqgZMacgGZQRCBQucjKzX7M" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h2>Kosong</h2>
                    <p className="card-text">ks</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src="https://drive.google.com/uc?id=14OYNa6HLbvqgZMacgGZQRCBQucjKzX7M" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h2>Kosong</h2>
                    <p className="card-text">ks</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src="https://drive.google.com/uc?id=14OYNa6HLbvqgZMacgGZQRCBQucjKzX7M" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h2>Kosong</h2>
                    <p className="card-text">ks</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src="https://drive.google.com/uc?id=14OYNa6HLbvqgZMacgGZQRCBQucjKzX7M" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h2>Kosong</h2>
                    <p className="card-text">ks</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img src="https://drive.google.com/uc?id=14OYNa6HLbvqgZMacgGZQRCBQucjKzX7M" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h2>Kosong</h2>
                    <p className="card-text">ks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}