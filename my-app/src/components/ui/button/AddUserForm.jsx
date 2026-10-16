
import { useState } from "react";

const empty = {
  firstName: "",
  email: "",
};

function AddUserForm({ onAdd }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = {};

    if (!form.firstName.trim()) {
      found.firstName = "Required";
    }

    if (!form.email.includes("@")) {
      found.email = "Invalid email";
    }

    setErrors(found);

    if (Object.keys(found).length > 0) return;

    const newUser = {
      id: Date.now(),
      name: form.firstName,
      email: form.email,
    };

    onAdd(newUser);
    setForm(empty);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New User</h3>

      <input
        name="firstName"
        placeholder="Enter name"
        value={form.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <small>{errors.firstName}</small>}

      <br /><br />

      <input
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <small>{errors.email}</small>}

      <br /><br />

      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
