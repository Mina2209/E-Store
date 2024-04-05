import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Mina~Shop Admin",
  description: "Mina~Shop Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
