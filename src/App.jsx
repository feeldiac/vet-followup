import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <Form/>
      <PatientsList/>
    </div>
  )
}

export default App
