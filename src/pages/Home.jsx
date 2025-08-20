/** @format */

import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <div className="skills">
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Frontend</h2>
                <div className="content-list__tags">
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>Redux</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>Github (git)</p>
                  <p>SCSS</p>
                </div>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Backend</h2>
                <div className="content-list__tags">
                  <p>Express</p>
                  <p>PostgreSQL</p>
                  <p>Firebase</p>
                  <p>JWT</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <h2 className="title-2">Контакты</h2>
            <ul className="content-list">
              <li className="content-list__item">
                <p>
                  WhatsApp \ Phone - <a href="tel:+79773890531">8 9936124559</a>
                </p>
              </li>
              <li className="content-list__item">
                <p>
                  Email -{" "}
                  <a href="mailto:nike95125@gmail.com">nike95125@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
