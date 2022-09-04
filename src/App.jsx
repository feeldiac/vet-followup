import { useState, useEffect } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsFromLocalStorage = JSON.parse(localStorage.getItem('patients')) ?? [];
      patientsFromLocalStorage?.length > 0 && setPatients(patientsFromLocalStorage)
    }
    getLocalStorage();
  }, []) //It's executed just one time

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = (id) => {
    const patientsUpdated = patients.filter(patient => patient.id !== id);
    setPatients(patientsUpdated);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
