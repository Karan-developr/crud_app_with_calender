import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { deleteEmployee } from '../slices/employeeSlice';
import { useRouter } from 'next/router';
import { FaEdit ,FaTrash } from "react-icons/fa";

export const EmployeeGrid: React.FC = () => {
  const employees = useSelector((state: RootState) => state.employees.employees);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDelete = (id: number) => {
    dispatch(deleteEmployee(id));
  };

  const handleEdit = (id: number) => {
    router.push(`/employees/${id}`);
  };

  const handleAdd = () => {
    router.push('/employees/add');
  };

  return (
    <div>
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>
      
      
      {employees.length  ? <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Position</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="py-2 px-4 border">{employee.id}</td>
              <td className="py-2 px-4 border">{employee.name}</td>
              <td className="py-2 px-4 border">{employee.position}</td>
              <td className="py-2 px-4 border">{employee.email}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => handleEdit(employee.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-4"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> : <div className='text-center b'>No Data Found</div>}
    </div>
  );
};