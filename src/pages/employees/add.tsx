import BaseLayout from '@/components/BaseLayout';
import { EmployeeForm } from '@/components/EmployeeForm';
import { useRouter } from 'next/router';

export default function AddEmployee() {
  const router = useRouter();

  const handleSave = () => {
    router.push('/');
  };

  return (
    <BaseLayout>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <EmployeeForm onSave={handleSave} />
    </div>
    </BaseLayout>
  );
}