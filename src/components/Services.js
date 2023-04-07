import Title from "./Title";
import {services} from "../data";

function Services(){
    return (
        <section className="section services" id="services">
            <Title title={'Our'} subTitle={'services'} />


            <div className="section-center services-center">
                {
                    services.map((item) => (
                        <article key={item.id} className="service">
                            <span className="service-icon"><i className={item.icon}></i></span>
                            <div className="service-info">
                                <h4 className="service-title">{item.title}</h4>
                                <p className="service-text">{item.text}</p>
                            </div>
                        </article>))
                }
            </div>
        </section>
    );
}

export default Services;