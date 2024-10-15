import images from "../assets/images";
import Category from "../components/Category";
import './../App.css';

let a = {
  "Category1" : {
    img : images["category1-image"],
    services : ["English", "Math", "Chemistry", "German"]
  },
"Category2": {
      img : images["category2-image"],    "services": [
      "Plumbing",
      "Electrical Work",
      "House Cleaning",
      "Gardening"
    ]
  },
  "Category3": {
    img : images["category3-image"],    "services": [
      "Hairdressing",
      "Massage Therapy",
      "Personal Fitness Training",
      "Makeup Artist"
    ]
  },
  "Category4": {
    img : images["category4-image"],    "services": [
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
      <div className="container">
        <Category props={a.Category1} />
        <Category props={a.Category2} />
        <Category props={a.Category3} />
        <Category props={a.Category4} />
      </div>
    </div>
    );
  }

export default Home