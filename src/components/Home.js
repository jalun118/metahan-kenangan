import "../css/home.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className="home">
                <div className="pembuka">
                    <div className="info">
                        <h2>Memory <span> Landing Page</span></h2>
                        <p>Spring, also known as springtime, is one of the four temperate seasons, succeeding
                            winter and preceding summer.</p>
                    </div>
                    <Link to="/memory" className="btn-to-memory">Read Memory</Link>
                </div>
            </section>
        </motion.div>
    )
}