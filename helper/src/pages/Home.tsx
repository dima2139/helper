import Category from "../components/Category";
import Search from "../components/Search";

let a = {
  "Category1" : {
    img : "https://as1.ftcdn.net/v2/jpg/01/99/12/48/1000_F_199124856_6icxPHkdnP5AI8neggAaU7eW1mv5D8F9.jpg",
    services : ["English", "Math", "Chemistry", "German"]
  },
"Category2": {
    "img": "https://media.istockphoto.com/id/1457385092/photo/an-asian-young-technician-service-man-wearing-blue-uniform-checking-cleaning-air-conditioner.jpg?s=612x612&w=0&k=20&c=Tqu5jMzD1TKFO1Fvow6d0JMDsEGU8T3kToP706bQFQI=",
    "services": [
      "Plumbing",
      "Electrical Work",
      "House Cleaning",
      "Gardening"
    ]
  },
  "Category3": {
    "img": "https://media.istockphoto.com/id/1401532985/photo/step-by-step.jpg?s=612x612&w=0&k=20&c=O2OFhnvkZCV7FLmp-EqUt7R4b5ppqDDaNsD-Gbk-i_E=",
    "services": [
      "Hairdressing",
      "Massage Therapy",
      "Personal Fitness Training",
      "Makeup Artist"
    ]
  },
  "Category4": {
    "img": "https://www.shutterstock.com/image-photo/mechanic-using-wrench-while-working-600nw-2184125681.jpg",
    "services": [
      "Car Repair",
      "Car Detailing",
      "Tire Services",
      "Mobile Mechanic"
    ]
  }
}

function Home() {
    return (
    <div>
      <b>Categories</b>
      <Category props={a.Category1} />
      <Category props={a.Category2} />
      <Category props={a.Category3} />
      <Category props={a.Category4} />
    </div>
    );
  }

export default Home