import { EmployeeForm } from '@/components/EmployeeForm';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import BaseLayout from '@/components/BaseLayout';

export default function EditEmployee() {
  
  const router = useRouter();
  const { id } = router.query;
  const employee = useSelector((state: RootState) =>
    state.employees.employees.find((emp) => emp.id === Number(id))
  );
  
  useEffect(() => {
    if (!employee) {
      router.push('/'); // Redirect if employee not found
    }
  }, [employee, router]);

  const handleSave = () => {
    router.push('/');
  };

  return (
    <BaseLayout>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
      {employee ? (
        <EmployeeForm employee={employee} onSave={handleSave} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </BaseLayout>
  );

}