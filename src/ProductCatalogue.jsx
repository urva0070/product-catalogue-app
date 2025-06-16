import { useState } from "react";

const productData = [
  {
    name: "Objective ECM",
    description:
      "EDRMS (Electronic Document Records Management System) used by multiple agencies",
    sme: "Ben, Linda",
    vendor: "OCL (Objective Corporation Limited)",
    version: "11.2.2",
    deployment: "On-premise",
    users: "2618 Licensed users",
    department: "DCS",
    expiry: "2026-06-30",
  },
  {
    name: "Objective Connect",
    description:
      "Secure External Sharing and Collaboration of Objective ECM documents",
    sme: "Ben, Linda",
    vendor: "OCL (Objective Corporation Limited)",
    version: "Evergreen",
    deployment: "Cloud",
    users: "N/A",
    department: "OCG",
    expiry: "2025-10-01",
  },
  {
    name: "TRIM - Core",
    description:
      "Primary Records Management system used to secure recordkeeping across DCS",
    sme: "Heather, Urva",
    vendor: "OpenText",
    version: "9.2",
    deployment: "On-premise",
    users: "3138",
    department: "DCS",
    expiry: "2025-07-01",
  }
];

export default function ProductCatalogue() {
  const [search, setSearch] = useState("");

  const filtered = productData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">IM Product Catalogue</h1>
      <input
        className="border rounded p-2 w-full max-w-md"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((product, i) => (
          <div key={i} className="border p-4 rounded shadow bg-white space-y-1">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
            <p><strong>SME:</strong> {product.sme}</p>
            <p><strong>Vendor:</strong> {product.vendor}</p>
            <p><strong>Version:</strong> {product.version}</p>
            <p><strong>Deployment:</strong> {product.deployment}</p>
            <p><strong>Users:</strong> {product.users}</p>
            <p><strong>Department:</strong> {product.department}</p>
            <p><strong>Contract Expiry:</strong> {product.expiry}</p>
          </div>
        ))}
      </div>
    </div>
  );
}