import '../css/sculpture.css'
import PageHeader from './page-header.js';
import { Link } from 'react-router-dom';
import { imageList } from '../constants/imageList';

function Sculpture() {
  const halfway = Math.ceil(imageList.length / 2);
  const column1list = imageList.slice(0, halfway);
  const column2list = imageList.slice(halfway);

  return (
    <>
      <PageHeader title={"Sculpture"}/>
      <div className="Sculpture">
        <div className="sColumn">
          {column1list.map((image, index) =>
            <div key={index}>
              <p className="description">{image.title} <br/> l = {image.length}" <br/> w = {image.width}" <br/> d = {image.depth}"</p>
            </div>
          )}
        </div>
        <div className="sColumn">
          {column2list.map((image, index) =>
            <div key={(index + column1list.length)}>
              <p className="description">{image.title} <br/> l = {image.length}" <br/> w = {image.width}" <br/> d = {image.depth}"</p>
            </div>
          )}
          
        </div>
      
      </div>
    </>
  )
}

export default Sculpture;
