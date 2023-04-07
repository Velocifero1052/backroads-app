import Title from "./Title";
import {tours} from "../data";

function Tours(){
    return (
        <section className="section" id="tours">
            <Title title="our" subTitle="tours"/>
            <div className="section-center featured-center">
                {tours.map((tour) => {
                    return (
                        <article key={tour.id} className="tour-card">
                            <div className="tour-img-container">
                                <img src={tour.image} className="tour-img" alt=""/>
                                <p className="tour-date">{tour.date}</p>
                            </div>
                            <div className='tour-info'>
                                <div className="tour-title">
                                    <h4>{tour.name}</h4>
                                </div>

                                <p>
                                    {tour.text}
                                </p>
                                <div className="tour-footer">
                                    <p>
                                        <span><i className="fas fa-map"></i></span> china
                                    </p>
                                    <p>{tour.duration}</p>
                                    <p>from ${tour.price}</p>
                                </div>
                            </div>
                        </article>
                    )})
                }
            </div>
        </section>
    )
}

export default Tours;