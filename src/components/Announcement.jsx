import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

const Announcement = () => {
  return <Container>
    Super Deal! Free Shipping on Order over 500Rs
  </Container>
};

export default Announcement;
