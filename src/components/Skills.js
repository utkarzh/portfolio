import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import sqllogo from '../assets/img/sqllogo.svg';
import mongo from '../assets/img/mongo.png';
import tailwind from '../assets/img/tailwind.svg';
import aws from '../assets/img/aws.svg';
import redux from '../assets/img/redux.svg';
import java from '../assets/img/java.svg';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I specialize in building dynamic and responsive web applications using modern technologies.
              </p>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src={meter1} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="skill-item">
                  <img src={meter2} alt="ReactJs" />
                  <h5>React Js</h5>
                </div>
                <div className="skill-item">
                  <img src={meter3} alt="ExpressJS" />
                  <h5>Express Js</h5>
                </div>
                <div className="skill-item">
                  <img src={sqllogo} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
                <div className="skill-item">
                  <img src={mongo} alt="MongoDB" />
                  <h5>MongoDB</h5>
                </div>
                <div className="skill-item">
                  <img src={tailwind} alt="Tailwind CSS" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="skill-item">
                  <img src={redux} alt="Redux Toolkit" />
                  <h5>Redux Toolkit</h5>
                </div>
                <div className="skill-item">
                  <img src={java} alt="Core Java" />
                  <h5>Core Java</h5>
                </div>
                <div className="skill-item">
                  <img src={aws} alt="AWS" />
                  <h5>AWS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
