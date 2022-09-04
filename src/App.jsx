import { useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const deletePatient = (id) => {
    // console.log('Deleting patient ', id);
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
