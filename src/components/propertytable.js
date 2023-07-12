import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig.js";

export default function PropertyTable() {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const snapshot = await db.collection("PropertyRecord").get();
      const data = snapshot.docs.map((doc) => doc.data());
      setPropertyData(data);
    } catch (error) {
      console.log("Error fetching property data:", error);
    }
  };

  return (
    <div>
      <h3>Property Data</h3>
      <table>
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Property Type</th>
            <th>Address</th>
            <th>Area</th>
            <th>MapLocation</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {propertyData.map((property) => (
            <tr key={property.propertyName}>
              <td>{property.propertyName}</td>
              <td>{property.propertyType}</td>
              <td>{property.area}</td>
              <td>{property.mapLocation}</td>
              <td>{property.State}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
