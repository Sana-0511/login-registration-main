import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig.js';

export default function PropertyTable() {
  const [propertyData, setPropertyData] = useState([]);
  const [editPropertyId, setEditPropertyId] = useState('');
  const [editPropertyName, setEditPropertyName] = useState('');
  const [editPropertyType, setEditPropertyType] = useState('');
  const [editPropertyAddress, setEditPropertyAddress] = useState('');
  const [editPropertyArea, setEditPropertyArea] = useState('');
  const [editPropertyMapLocation, setEditPropertyMapLocation] = useState('');
  const [editPropertyState, setEditPropertyState] = useState('');
  const [readCounter, setReadCounter] = useState(0); // Read counter state variable

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const snapshot = await db.collection('PropertyRecord').get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReadCounter((prevCounter) => prevCounter + 1); // Increment read counter
      setPropertyData(data);
    } catch (error) {
      console.log('Error fetching property data:', error);
    }
  };

  const deleteProperty = async (id) => {
    try {
      await db.collection("PropertyRecord").doc(id).delete();
      fetchData();
    } catch (error) {
      console.log("Error deleting property:", error);
    }
  };

  const handleEdit = (property) => {
    setEditPropertyId(property.id);
    setEditPropertyName(property.propertyName);
    setEditPropertyType(property.propertyType);
    setEditPropertyAddress(property.address);
    setEditPropertyArea(property.area);
    setEditPropertyMapLocation(property.mapLocation);
    setEditPropertyState(property.state);
  };

  const handleCancelEdit = () => {
    setEditPropertyId("");
    setEditPropertyName("");
    setEditPropertyType("");
    setEditPropertyAddress("");
    setEditPropertyArea("");
    setEditPropertyMapLocation("");
    setEditPropertyState("");
  };

  const handleUpdateProperty = async () => {
    try {
      await db.collection("PropertyRecord").doc(editPropertyId).update({
        propertyName: editPropertyName,
        propertyType: editPropertyType,
        address: editPropertyAddress,
        area: editPropertyArea,
        mapLocation: editPropertyMapLocation,
        state: editPropertyState,
      });
      fetchData();
      handleCancelEdit();
    } catch (error) {
      console.log("Error updating property:", error);
    }
  };

  return (
    <div className="property-table-container">
      <h3 className="table-heading">Property Data</h3>
      <table className="property-table">
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Property Type</th>
            <th>Address</th>
            <th>Area</th>
            <th>Map Location</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {propertyData.map((property) => (
            <tr key={property.id}>
              {property.id === editPropertyId ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editPropertyName}
                      onChange={(e) => setEditPropertyName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editPropertyType}
                      onChange={(e) => setEditPropertyType(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editPropertyAddress}
                      onChange={(e) => setEditPropertyAddress(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editPropertyArea}
                      onChange={(e) => setEditPropertyArea(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editPropertyMapLocation}
                      onChange={(e) =>
                        setEditPropertyMapLocation(e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editPropertyState}
                      onChange={(e) => setEditPropertyState(e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={handleUpdateProperty}
                      className="save-button"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="cancel-button"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{property.propertyName}</td>
                  <td>{property.propertyType}</td>
                  <td>{property.address}</td>
                  <td>{property.area}</td>
                  <td>{property.mapLocation}</td>
                  <td>{property.state}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(property)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProperty(property.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
