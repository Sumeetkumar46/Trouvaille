import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/*  =============Hero section start============== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Until you step into the unknown,{""}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  This is what holidays, travels, vacations are about. It is not
                  really rest or even leisure we chase. We strain to renew our
                  capacity to wonder, to shock ourselves into astonishment once
                  again.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/*  =============Hero section end============== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">Our Odessy</h5>
              <h2 className="services__title">We offer Concierge services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*  =============Featured tour section start============== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/*  =============Featured tour section end============== */}

      {/*  =============Experience section start============== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br />
                  we will serve you{" "}
                </h2>
                <p>
                  dssgjsgjjsg oiuoiuewoitunncm,vnxnvnoisjdfoi.
                  <br />
                  qpoeqwprklvjfgpog wpiwpiqorwogjk wejwejt.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>14k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>5k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>05+</span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*  =============Experience section end============== */}

      {/*  =============Gallery Section Start============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit Our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*  =============Gallery Section End============== */}

      {/*  =============testimonial section Start============== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Cherish'} />
              <h2 className="testimonial__title"> Our Esteem Customer say about us</h2> 
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/*  =============testimonial section end============== */}
      <Newsletter />
    </>
  );
};

export default Home;
