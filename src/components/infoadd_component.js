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
}

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
      <div className="auth-inner-prop">
        <form onSubmit={handleSubmit}>
          <h3>Property Details</h3>
          <div className="row">
          <div className="col">  
          <div className="mb-3">
            <label>Property Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter property name"
              onChange={(e) => setPropertyName(e.target.value)}
            />
          </div>
          </div>
          <div className="col"> 
          <div className="mb-3">
            <label>Area</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter area"
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          </div>
          </div>

          <div className="row">
          <div className="col"> 
          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          </div>
          
          <div className="col"> 
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
          </div>
          </div>

          <div className="row">
          <div className="col"> 
          <div className="mb-3">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          </div>
          
          <div className="col"> 
          <div className="mb-3">
            <label>Google Maps Location Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Google Maps location link"
              onChange={(e) => setMapLocation(e.target.value)}
            />
          </div>
          </div>
          </div>
          
          <div className="mb-4">
            <label>Property Images</label>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={handleImageChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary w-[300px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}*/

import React, { useState } from "react";
import { firebase, storage } from "./firebaseConfig.js";


export default function Infoadd() {
  const [propertyName, setPropertyName] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [mapLocation, setMapLocation] = useState("");
  const [propertyImages, setPropertyImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const propertyData = {
      propertyName,
      area,
      location,
      propertyType,
      price,
      mapLocation,
      propertyImages: imageUrls,
    };

    // Create a new property entry in the Realtime Database
    firebase
      .database()
      .ref("PropertyRecord")
      .push(propertyData)
      .then(() => {
        alert("Information Successfully Added");
        // Reset the form fields
        setPropertyName("");
        setArea("");
        setLocation("");
        setPropertyType("");
        setPrice("");
        setMapLocation("");
        setPropertyImages([]);
        setImageUrls([]);
      })
      .catch((error) => {
        console.log("Error creating property entry:", error);
        alert("Something went wrong");
      });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Upload images to Firebase Storage
    const uploadPromises = files.map((file) => {
      const storageRef = storage.ref(`propertyImages/${file.name}`);
      return storageRef.put(file);
    });

    Promise.all(uploadPromises)
      .then((snapshots) => {
        // Get download URLs of the uploaded images
        const downloadPromises = snapshots.map((snapshot) =>
          snapshot.ref.getDownloadURL()
        );
        return Promise.all(downloadPromises);
      })
      .then((urls) => {
        setPropertyImages(files);
        setImageUrls(urls);
      })
      .catch((error) => {
        console.log("Error uploading images:", error);
        alert("Something went wrong");
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner-prop">
        <form onSubmit={handleSubmit}>
          <h3>Property Details</h3>

          <div className="mb-3">
            <label>Property Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter property name"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Area</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Property Type</label>
            <select
              className="form-control"
              value={propertyType}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Google Maps Location Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Google Maps location link"
              value={mapLocation}
              onChange={(e) => setMapLocation(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label>Property Images</label>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={handleImageChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary w-[300px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
