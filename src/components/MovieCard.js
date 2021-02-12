import styled from "styled-components";

const convertAverage = (num) => {
  return Math.floor(num * 10);
};

const MovieCard = ({ id, image, average, title, description }) => {
  return (
    <Movie id={id} href={`http://localhost:3000/movie/${id}`}>
      <ImageWrapper>
        <Image src={image} />
        <Average>{convertAverage(average)}</Average>
      </ImageWrapper>
      <Information>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Information>
    </Movie>
  );
};

const Movie = styled.a`
  overflow: hidden;
  background-color: white;
  border-radius: 10px;
  position: relative;
  margin: 20px 20px 20px 0px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  width: 300px;
  height: 450px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Information = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 20px 0px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5em;
  color: #666666;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

const Average = styled.div`
  background-color: #505df6;
  border: 5px solid white;
  border-radius: 50%;
  padding: 15px;
  position: absolute;
  bottom: -45px;
  right: 15px;
  margin: 20px 0px;
  color: white;
`;

export default MovieCard;
