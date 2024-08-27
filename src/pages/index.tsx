import BaseLayout from "@/components/BaseLayout"
import { EmployeeGrid } from '../components/EmployeeGrid';

export default function employeeTable() {
  return (
    <BaseLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">All Users</h1>
        <EmployeeGrid />
      </div>
    </BaseLayout>)
}
