import React, { useEffect, useState } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import "./App.css"

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {

    Aos.init({duration:2000})

    async function getData() {
      const api = `https://randomuser.me/api/`;
      const result = await fetch(api);
      const getResult = await result.json();
      setData(getResult);
    }
    getData();
  }, []);
  console.log(data?.results[0]);

  async function getData2() {
    const api = `https://randomuser.me/api/`;
    const result = await fetch(api);
    const getResult = await result.json();
    setData(getResult);
  }

  return (
  <>
  <h1 className="text-center">Generate Random User</h1>
  <div className="row mt-5">
  <div className="col-lg-1 col-sm-2"></div>
    <div className="col-lg-3 col-sm-5">
    <div className="card">
    <img data-aos="fade-right" className="card-img-top m-sm-5 userImage" src={data?.results[0].picture.large} alt=""/>
      <div className="card-body">
      <h4 className="card-title text-center text-dark">{data?.results[0].name.title}. {data?.results[0].name.first} {data?.results[0].name.last}</h4>
      </div>
    </div>
    </div>
    <div className="col-lg-1"></div>
    <div className="col-lg-6 col-sm-10 text-dark">
    <h5 data-aos="fade-down">Age: {data?.results[0].dob.age}</h5>
    <h5 data-aos="fade-down" data-aos-delay="500">Gender: {data?.results[0].gender}</h5>
    <h5 data-aos="fade-left">Email: {data?.results[0].email}</h5>
    <h5 data-aos="fade-left">Cell: {data?.results[0].cell} &nbsp; Phone: {data?.results[0].phone}</h5>
    <h5 data-aos="fade-left">Address: City {data?.results[0].location.city}, State {data?.results[0].location.state}<br/><span style={{color:"#CAD5E2"}}>Address: </span> Country {data?.results[0].location.country} ({data?.results[0].location.postcode})</h5>
    <h5 data-aos="fade-left">Username: {data?.results[0].login.username}</h5>
    <h5 data-aos="fade-left">Id: {data?.results[0].login.uuid}</h5>
    <h5 data-aos="fade-up" data-aos-delay="500">Password: {data?.results[0].login.password}</h5>
    <h5 data-aos="fade-up">Join at: {data?.results[0].registered.date}</h5>
    <div class="d-grid gap-2 col-6 mt-5">
    <button className="btn btn-outline-dark" onClick={getData2}>Next</button>
    </div>
    </div>
    <div className="col-1"></div>
  </div>
  <h6 className="text-center text-white bg-dark fixed-bottom mb-0">This Application is developed by Praveen with <img src="logo192.png" alt="" className="developerIcon"/></h6>
  </>
  )
};

export default App;
