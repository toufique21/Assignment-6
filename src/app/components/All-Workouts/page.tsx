import React from 'react';
import Workout from '../Shared/Workout';
import Link from 'next/link';

    const AllWorkouts = async () => {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
        const data = await response.json();
        return data;
    }

const AllWorkoutsPage = async() => {

    const WorkoutData = await AllWorkouts();

    return (
        <div className='grid grid-cols-3 gap-2 mt-5'>
            
        
        {WorkoutData.map((workout, idx) => {

            return <div key={idx}>
                <Link href={`components/All-Workouts/${workout.id}`}><Workout workout={workout} /></Link>
            </div>
        })}
        

        </div>
    );
};

export default AllWorkoutsPage;