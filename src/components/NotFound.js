import '../css/notfound.css'
import { TapTitle } from '../Utils/TapTitle'

export default function NotFound() {
    TapTitle('Not Found');

    return(
        <h1 className='not'>Halaman tidak ditemukan <b className='emot'> :-(</b> </h1>
    )
}