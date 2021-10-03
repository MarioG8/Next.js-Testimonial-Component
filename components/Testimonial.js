import styles from "../styles/Testimonial.module.css";
import Image from "next/image";

function Testimonial() {
  return (
    <div className={styles.testimonial}>
      <p className={styles.testimonial__text}>
        At first, it may be intimidating to see all of the available courses.
        Pick a track that interests you and work through it at your own pace.
      </p>

      <div className={styles.testimonial__details}>
        <div className={styles.testimonial__img}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Timmy Dicki"
          />
        </div>
        <div className={styles.testimonial__info}>
          <h4 className={styles.testimonial__name}>Timmy Dicki</h4>
          <h5 className={styles.testimonial__job}>Railroad Engineer</h5>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
