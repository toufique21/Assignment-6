import React from 'react';

const BookCard = () => {
    return (
        <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={200}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Difficulty */}
                <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {workout.difficulty}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900 backdrop-blur">
                    <span className="text-yellow-500">★</span>
                    {workout.rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Title */}
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    {workout.name}
                </h2>

                {/* Muscle Groups */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
                    {workout.description}
                </p>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-gray-50 p-3">
                    <div className="text-center">
                        <p className="text-lg font-bold text-gray-900">
                            {workout.duration}
                        </p>
                        <p className="text-xs text-gray-500">Minutes</p>
                    </div>

                    <div className="border-x border-gray-200 text-center">
                        <p className="text-lg font-bold text-gray-900">
                            {workout.caloriesBurned}
                        </p>
                        <p className="text-xs text-gray-500">Calories</p>
                    </div>

                    <div className="text-center">
                        <p className="text-lg font-bold text-gray-900">
                            {workout.sets} × {workout.reps}
                        </p>
                        <p className="text-xs text-gray-500">Sets / Reps</p>
                    </div>
                </div>

                {/* Equipment */}
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-lg">🏋️</span>
                    <span>{workout.equipment}</span>
                </div>

                {/* Instructions */}
                <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                        View instructions
                    </summary>

                    <ol className="mt-3 space-y-2">
                        {workout.instructions.map((instruction, index) => (
                            <li
                                key={index}
                                className="flex gap-3 text-sm leading-5 text-gray-500"
                            >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-600">
                                    {index + 1}
                                </span>

                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ol>
                </details>

                {/* Button */}
                <button className="mt-5 w-full rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
                    Start Workout
                </button>
            </div>
        </div>
    );
};

export default BookCard;