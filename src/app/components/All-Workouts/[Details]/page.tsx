import Image from "next/image";

interface Details {
  params: Promise<{
    id: string;
  }>;
}

const AllWorkouts = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await response.json();
  return data;
};

const DetailsPage = async ({ params }: Details) => {
  const { id } = await params;

  const WorkoutData = await AllWorkouts();

  const workout = WorkoutData.find(
    (workout : type) => String(workout.id) === String(id)
  ) as type;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;