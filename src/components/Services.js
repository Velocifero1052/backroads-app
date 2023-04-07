import Title from "./Title";
import {services} from "../data";
import Service from "./Service";

function Services(){
    return (
        <section className="section services" id="services">
            <Title title={'Our'} subTitle={'services'} />


            <div className="section-center services-center">
                {
                    services.map((item) => (
                        <Service key={item.id} icon={item.icon} title={item.title} text={item.text} />))
                }
            </div>
        </section>
    );
}

export default Services;