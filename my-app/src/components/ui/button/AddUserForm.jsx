
import { useState } from "react";

const empty = {
  name: "",
  email: "",
  city: "",
  phone: "",
  website: "",
  company: "",
  catchPhrase: "",
  lat: "",
  lng: "",
};

function AddUserForm({ onAdd }) {
  const [form, setForm] = useState(empty);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      address: {
        city: form.city,
        geo: {
          lat: form.lat,
          lng: form.lng,
        },
      },
      phone: form.phone,
      website: form.website,
      company: {
        name: form.company,
        catchPhrase: form.catchPhrase,
      },
    };

    onAdd(newUser);
    setForm(empty);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New User</h3>

      <input name="name" placeholder="Name" value={form.name}
        onChange={handleChange} required /><br /><br />

      <input name="email" type="email" placeholder="Email"
        value={form.email} onChange={handleChange} required /><br /><br />

      <input name="city" placeholder="City" value={form.city}
        onChange={handleChange} required /><br /><br />

      <input name="phone" placeholder="Phone" value={form.phone}
        onChange={handleChange} required /><br /><br />

      <input name="website" placeholder="Website" value={form.website}
        onChange={handleChange} required /><br /><br />

      <input name="company" placeholder="Company Name"
        value={form.company} onChange={handleChange} required /><br /><br />

      <input name="catchPhrase" placeholder="Company Catchphrase"
        value={form.catchPhrase} onChange={handleChange} required /><br /><br />

      <input name="lat" placeholder="Latitude" value={form.lat}
        onChange={handleChange} required /><br /><br />

      <input name="lng" placeholder="Longitude" value={form.lng}
        onChange={handleChange} required /><br /><br />

      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
