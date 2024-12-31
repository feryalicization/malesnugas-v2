import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faThumbtack } from '@fortawesome/free-solid-svg-icons';

export const NavPageProducts = () => {
  return (
    <div
      style={{
        backgroundColor: '#f8f2e6',
        padding: '20px',
        width: '100%',
        height: '400px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: 'black',
          opacity: 0.09,
        }}
      ></div>
      <br />
      <Row>
        <Col
          style={{
            textAlign: 'center',
          }}
          xs={6}
        >
          <h5>
            Accounting &nbsp;&nbsp;
            <FontAwesomeIcon icon={faArrowRightLong} />
          </h5>

          <br />

          <Row>
            <Col
              style={{
                textAlign: 'justify', 
              }}
              xs={6}
            >
              <h6>
                <FontAwesomeIcon icon={faThumbtack} /> Bimbingan Skripsi
              </h6>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quisquam natus magni dolore quos libero, quasi cumque
                voluptas necessitatibus illo?
              </p>
            </Col>

            <Col
              style={{
                textAlign: 'justify', 
              }}
              xs={6}
            >
              <h6>
                <FontAwesomeIcon icon={faThumbtack} /> Bantuan Skripsi
              </h6>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quisquam natus magni dolore quos libero, quasi cumque
                voluptas necessitatibus illo?
              </p>
            </Col>
          </Row>
        </Col>
        
        {/* Right Border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,  
            width: '640px', 
            height: '100%', 
            backgroundColor: 'black',
            opacity: 0.09,
          }}
        ></div>

        <Col
          style={{
            textAlign: 'center',
          }}
          xs={6}
        >
          <h5>
            IT Solution &nbsp;&nbsp;
            <FontAwesomeIcon icon={faArrowRightLong} />
          </h5>

          <br />

          <Row>
            <Col
              style={{
                textAlign: 'justify', 
              }}
              xs={6}
            >
              <h6>
                <FontAwesomeIcon icon={faThumbtack} /> Bimbingan Skripsi
              </h6>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quisquam natus magni dolore quos libero, quasi cumque
                voluptas necessitatibus illo?
              </p>
            </Col>

            <Col
              style={{
                textAlign: 'justify', 
              }}
              xs={6}
            >
              <h6>
                <FontAwesomeIcon icon={faThumbtack} /> Bantuan Skripsi
              </h6>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quisquam natus magni dolore quos libero, quasi cumque
                voluptas necessitatibus illo?
              </p>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </div>
  );
};
