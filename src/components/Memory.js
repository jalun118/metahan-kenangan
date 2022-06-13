import { useState } from 'react';
import '../css/memory.css';
import axios from 'axios';
import Loading from './Loading'
import { motion } from "framer-motion";
import { TapTitle } from '../Utils/TapTitle';
import { Link } from 'react-router-dom';

export default function Memory() {
	TapTitle('Memory');
	const [value, setvalue] = useState([]);
	const [loading, setloadig] = useState(true);

	const fetchData = () => {
		axios.get('https://jalun118.github.io/api-temen-temen/item.json')
			.then((res) => {
				setvalue(res.data);
				setloadig(false)
			})
	}

	fetchData();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{loading && (<Loading />)}
			{!loading && (
				<section id="memory" className="memory">
					<div className="container memory-isi">
						<div className='row'>
							<div className="isi-memory mb-4 text-align-center">
								<h2>Memory</h2>
							</div>
							<div className="row justify-content-center">
								{value.map((val) => {
									return (
										<div className="col-md-4 mb-4" key={val.id}>
											<div className="card" id={val.id}>
												<img src={val.foto} className="card-img-top" alt="" />
												<div className="card-body">
													<h2>{val.title}</h2>
													<p className="card-text">{val.deskripsi}</p>
													<div className='p-btn'>
														<a href={val.download} target="_blank" className="btn btn-primary">Download <i className="fa-solid fa-download"></i></a>
													</div>
												</div>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</section>
			)}
		</motion.div>
	)
}