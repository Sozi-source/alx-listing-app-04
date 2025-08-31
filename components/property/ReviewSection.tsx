import { ReviewsProps } from "@/interfaces";
import axios from "axios";
import { useState, useEffect } from "react";

interface reviewSectionProps{
  propertyId: string|number
}

const ReviewSection = ({ propertyId }: reviewSectionProps) => {
  const [reviews, setReviews] = useState<ReviewsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;