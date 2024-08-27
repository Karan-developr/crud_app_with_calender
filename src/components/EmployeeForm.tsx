import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee, updateEmployee } from '../slices/employeeSlice';

interface EmployeeFormProps {
  employee?: {
    id: number;
    name: string;
    position: string;
    email: string;
  };
  onSave?: () => void;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee, onSave }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(employee?.name || '');
  const [position, setPosition] = useState(employee?.position || '');
  const [email, setEmail] = useState(employee?.email || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (employee) {
      dispatch(updateEmployee({ id: employee.id, name, position, email }));
    } else {
      dispatch(addEmployee({ id: Date.now(), name, position, email }));
    }

    if (onSave) {
      onSave();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border rounded w-full py-2 px-3"
        required
      />
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
        className="border rounded w-full py-2 px-3"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border rounded w-full py-2 px-3"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        {employee ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};