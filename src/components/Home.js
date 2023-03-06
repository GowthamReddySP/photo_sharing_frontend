import '../App.css';
import Fileupload from './Fileupload';
import VeiwPhoto from './VeiwPhoto';

function Home() {
  return (
    <div className="App">
     <Fileupload />
     <VeiwPhoto />
    </div>
  );
}

export default Home;