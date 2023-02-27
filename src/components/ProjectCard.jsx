import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-img-bx">
        <img src={imgUrl} />
        <div className="proj-tx-tx">
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  )
}
