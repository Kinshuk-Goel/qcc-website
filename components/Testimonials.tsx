import { feedback } from "@/constants";
import styles from "@/styles/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials: React.FC = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Our Officer Board <br className="sm:block hidden" /> 
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Thanks to our wonderful officers, we can introduce 
          such a highly-level of education to our school!
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {/* First 3 existing cards */}
      {feedback.slice(0, 3).map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
      {/* Additional 3 new cards */}
      {feedback.slice(3, 6).map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
