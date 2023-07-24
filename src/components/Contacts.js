import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig.js';

export default function ContactTable() {
  const [contactData, setContactData] = useState([]);
  const [readCounter, setReadCounter] = useState(0); // Read counter state variable

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const snapshot = await db.collection('ContactUsRecord').get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setContactData(data);

      // Increment the read counter each time data is fetched from Firestore
      setReadCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.log('Error fetching contact data:', error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await db.collection('ContactUsRecord').doc(id).delete();
      fetchData(); // Fetch data again after deleting a contact
    } catch (error) {
      console.log('Error deleting contact:', error);
    }
  };

  // Log the number of reads to the console
  console.log('Number of Reads:', readCounter);

  return (
    <div className="property-table-container">
      <h3 className="table-heading">People who contacted us</h3>
      <table className="property-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.message}</td>
              <td>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
