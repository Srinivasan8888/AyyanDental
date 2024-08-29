import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Safety = () => {
    return (
        <section className='safty-section pt-100 section-bg section-common pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Safety"
                    title="We put the safety first"
                    description="We prioritize your safety with rigorous protocols and top-quality standards in both dental and cosmetology treatments."                />

                <div className="safety-video ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/ntx1Nn5C4nI?si=xasGN6Oi2vVGI_4L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Safety;