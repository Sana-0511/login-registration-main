/*import React, { useState } from "react";

export default function Infoadd() {
  const [propertyName, setPropertyName] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [mapLocation, setMapLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      propertyName,
      area,
      location,
      propertyType,
      price,
      mapLocation
    );
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        propertyName,
        area,
        location,
        propertyType,
        price,
        mapLocation,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "propertyRegister");
        if (data.status === "ok") {
          alert("Information Successfully Added");
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Property Details</h3>

          <div className="mb-3">
            <label>Property Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter property name"
              onChange={(e) => setPropertyName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Area</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter area"
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Property Type</label>
            <select
              className="form-control"
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Select property type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Google Maps Location Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Google Maps location link"
              onChange={(e) => setMapLocation(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}*/

/*import React, { useState } from "react";

export default function Infoadd() {
  const [propertyName, setPropertyName] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [mapLocation, setMapLocation] = useState("");
  const [propertyImages, setPropertyImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      propertyName,
      area,
      location,
      propertyType,
      price,
      mapLocation,
      propertyImages
    );
    fetch("http://localhost:5000/property-details", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        propertyName,
        area,
        location,
        propertyType,
        price,
        mapLocation,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "propertyRegister");
        if (data.status === "ok") {
          alert("Information Successfully Added");
        } else {
          alert("Something went wrong");
        }
      });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPropertyImages(files);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Property Details</h3>

          <div className="mb-3">
            <label>Property Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter property name"
              onChange={(e) => setPropertyName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Area</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter area"
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Property Type</label>
            <select
              className="form-control"
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Select property type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Google Maps Location Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Google Maps location link"
              onChange={(e) => setMapLocation(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <label>Property Images</label>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={handleImageChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}*/

import React, { useState } from "react";

export default function Infoadd() {
  const [propertyName, setPropertyName] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [mapLocation, setMapLocation] = useState("");
  const [propertyImages, setPropertyImages] = useState([]);
  const [image, setImage] = useState("");
    const [allImage, setAllImage] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("propertyName", propertyName);
    formData.append("area", area);
    formData.append("location", location);
    formData.append("propertyType", propertyType);
    formData.append("price", price);
    formData.append("mapLocation", mapLocation);
    propertyImages.forEach((file, index) => {
      formData.append(`propertyImages[${index}]`, file);
    });

    console.log(
      propertyName,
      area,
      location,
      propertyType,
      price,
      mapLocation,
      propertyImages
    );
    fetch("http://localhost:5000/property-details", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "propertyRegister");
        if (data.status === "ok") {
          alert("Information Successfully Added");
        } else {
          alert("Something went wrong");
        }
      });
  };

  const handleImageChange = (e) => {
    console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result); //base64encoded string  
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };
    const files = Array.from(e.target.files);
    setPropertyImages(files);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Property Details</h3>

          <div className="mb-3">
            <label>Property Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter property name"
              onChange={(e) => setPropertyName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Area</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter area"
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Property Type</label>
            <select
              className="form-control"
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Select property type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Google Maps Location Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Google Maps location link"
              onChange={(e) => setMapLocation(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <label>Property Images</label>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={handleImageChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
