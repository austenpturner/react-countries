import { useParams } from "react-router";

export default function DetailsPage() {
  const params = useParams();
  const { id } = params;

  console.log(id);

  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
}
