import { ReviewHighlighter } from "./ReviewHighlighter";

export const ReviewList = ({ arrToFetch }) => {
    return (
        <div>
            {arrToFetch.map((review) => (
                <div key={review.review_id} className="flex gap-4 my-10 w-full shadow">
                    <div>
                        <svg viewBox="0 0 480 512" width="30" title="dice-d20">
                            <path d="M106.75 215.06L1.2 370.95c-3.08 5 .1 11.5 5.93 12.14l208.26 22.07-108.64-190.1zM7.41 315.43L82.7 193.08 6.06 147.1c-2.67-1.6-6.06.32-6.06 3.43v162.81c0 4.03 5.29 5.53 7.41 2.09zM18.25 423.6l194.4 87.66c5.3 2.45 11.35-1.43 11.35-7.26v-65.67l-203.55-22.3c-4.45-.5-6.23 5.59-2.2 7.57zm81.22-257.78L179.4 22.88c4.34-7.06-3.59-15.25-10.78-11.14L17.81 110.35c-2.47 1.62-2.39 5.26.13 6.78l81.53 48.69zM240 176h109.21L253.63 7.62C250.5 2.54 245.25 0 240 0s-10.5 2.54-13.63 7.62L130.79 176H240zm233.94-28.9l-76.64 45.99 75.29 122.35c2.11 3.44 7.41 1.94 7.41-2.1V150.53c0-3.11-3.39-5.03-6.06-3.43zm-93.41 18.72l81.53-48.7c2.53-1.52 2.6-5.16.13-6.78l-150.81-98.6c-7.19-4.11-15.12 4.08-10.78 11.14l79.93 142.94zm79.02 250.21L256 438.32v65.67c0 5.84 6.05 9.71 11.35 7.26l194.4-87.66c4.03-1.97 2.25-8.06-2.2-7.56zm-86.3-200.97l-108.63 190.1 208.26-22.07c5.83-.65 9.01-7.14 5.93-12.14L373.25 215.06zM240 208H139.57L240 383.75 340.43 208H240z" />
                        </svg>
                    </div>
                    <div className="w-full ">
                        <div className="flex justify-between">
                            <div>
                                <div className="mb-3">
                                    <span className="font-bold ">
                                        {review.reviewer_name}
                                    </span>{" "}
                                    <span className="text-gray-600">wrote a review on </span>
                                    <span className="font-bold">
                                        booking.com
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <span className="font-semibold">Review score : {review.rating_review_score}
                                    /10{'  '}</span>
                                    <span className="text-xs">
                                        {review.date}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-3 my-4">
                                <svg
                                    viewBox="0 0 448 512"
                                    width="20"
                                    title="share-alt-square"
                                >
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zM304 296c-14.562 0-27.823 5.561-37.783 14.671l-67.958-40.775a56.339 56.339 0 0 0 0-27.793l67.958-40.775C276.177 210.439 289.438 216 304 216c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56c0 4.797.605 9.453 1.74 13.897l-67.958 40.775C171.823 205.561 158.562 200 144 200c-30.928 0-56 25.072-56 56s25.072 56 56 56c14.562 0 27.823-5.561 37.783-14.671l67.958 40.775a56.088 56.088 0 0 0-1.74 13.897c0 30.928 25.072 56 56 56s56-25.072 56-56C360 321.072 334.928 296 304 296z" />
                                </svg>
                                <svg
                                    viewBox="0 0 384 512"
                                    width="15"
                                    title="bookmark"
                                >
                                    <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
                                </svg>
                                <svg
                                    viewBox="0 0 512 512"
                                    width="20"
                                    title="ellipsis-h"
                                >
                                    <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-justify">
                            <ReviewHighlighter review={review} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
