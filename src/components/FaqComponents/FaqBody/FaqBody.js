import { findAllByDisplayValue } from '@testing-library/react'
import React, {useContext} from 'react'
import './FaqBody.scss'
import { Button, Card, Accordion } from 'react-bootstrap';

export const FaqBody = () => {


  return (
    <>
<div className="Title">
    <h3>ACCOUNTING &amp; BOOKKEEPING</h3>
</div>
    <Accordion /*defaultActiveKey="0"*/>
  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="0" >
        What is the Difference Between Vat And Tax?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>

<div className="Title">
    <h3>TAXATION</h3>
</div>

<Accordion /*defaultActiveKey="0"*/>
  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        What is the Difference Between Vat And Tax?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>  
  
</Accordion>


<div className="Title">
    <h3>PAYROLL &amp; HR</h3>
</div>

<Accordion /*defaultActiveKey="0"*/>
  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        What is the Difference Between Vat And Tax?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>







<div className="Title">
    <h3>FINANCIAL &amp; BUSINESS MANAGEMENT</h3>
</div>


<Accordion /*defaultActiveKey="0"*/>
  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        What is the Difference Between Vat And Tax?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>






<div className="Title">
    <h3>STATUTORY &amp; SECRETARIAL</h3>
</div>


<Accordion /*defaultActiveKey="0"*/>
  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        What is the Difference Between Vat And Tax?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>



<div className="Title">
    <h3>OTHER SUPPORT SERVICES</h3>
</div>


<Accordion /*defaultActiveKey="0"*/>
  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        What is the Difference Between Vat And Tax?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header className="question">
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet pharetra tellus, vulputate molestie justo. Ut eget suscipit tortor.
Duis at rutrum odio, id dictum metus. Aenean consectetur sollicitudin neque. Suspendisse semper ac ex eget condimentum. Praesent non blandit massa, commodo ullamcorper lacus. Quisque id tincidunt arcu. Sed et lorem tincidunt arcu pulvinar rhoncus.
Sed iaculis dignissim laoreet. In porta turpis et massa dapibus tempus. Quisque eu convallis diam. Maecenas sagittis enim erat, at lobortis nunc volutpat in.
</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
</>
  )
}

