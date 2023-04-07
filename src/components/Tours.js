import Title from "./Title";
import {tours} from "../data";
import Tour from "./Tour";

function Tours(){
    return (
        <section className="section" id="tours">
            <Title title="our" subTitle="tours"/>
            <div className="section-center featured-center">
                {tours.map((tour) => {
                    return (
                        <Tour key={tour.id} image={tour.image} date={tour.date} name={tour.name} text={tour.text}
                            duration={tour.duration} price={tour.price}
                        />
                    )})
                }
            </div>
        </section>
    )
}

export default Tours;