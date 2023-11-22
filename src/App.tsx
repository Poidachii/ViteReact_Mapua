import { render } from 'react-dom';
import { BsBackpack2 } from "react-icons/bs";
import { FcConferenceCall } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
function App() {

  return (
    <div >
      <div className=" text-center" >
        <img src="./Resources/MITL-Logo.png" alt="niggers" />
      </div>
      <br /><br /><br /><br />
      <div className=" row ">
        <div className="col infoBox text-center">
          <br />
          <br />
          <h5 className="text-white pb-1 pt-5">Welcome to</h5>
          <img src="./Resources/mapua-mcl-online-access-logo.png" alt="" className="thumbnail" />
          <p className="text-white">powered by yanussyEngine</p>
          <button className="redBigButton mt-5 text-white" onClick={lipat}>View Course Catalog</button>
          <br />
          <br />
          <br />
        </div>
        <div className="col infoBox text-center">
          <br />

          <h2 className="pt-5 text-white">Login to Mapua MCL Blackboard</h2>
          <div className="flex mt-5 text-start">
            <div className="row">
              <div className="col-1"><FcConferenceCall /></div>
              <div className="col">
                <h4 className="text-white ">Username</h4>
                <input type="email" className="textbar mb-3" />
              </div>

            </div>
            <div className="row">
              <div className="col-1"><FcLock /></div>
              <div className="col-8">
                <h4 className="text-white">Password</h4>
                <input type="password" className="textbar" />
              </div>

            </div>
            <button className="redBigButton mt-3 text-white" onClick={lipat}>Login</button>

          </div>
        </div>
        <div className="col infoBox text-center">
          <br />

          <h2 className="pt-5 text-white">Links</h2>

          <button className="redBigButton mt-5 text-white" onClick={lipat}>OneMCL</button>
          <p className="text-white">ballsballsballsballsballsballsballsballsballsballsballsballsballsballsballsballs</p>
          <button className="redBigButton mt-1 text-white" onClick={lipat}>BlackBoard App</button>
          <p className="text-white">ballsballsballsballsballsballsballsballsballsballsballsballsballsballsballsballs</p>
        </div>
      </div>

    </div>


  )

}

function lipat() {
  window.location = "https://x.com/Zeamilky/status/1726968167283806383?s=20"
}

export default App;
