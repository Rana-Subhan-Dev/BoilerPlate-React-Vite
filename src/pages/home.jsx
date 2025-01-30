import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  & p > span {
    font-weight: 700;
  }
`;

export const Home = () => {
  return (
    <div className="text-center">
      <StyledDiv>
        <p>Welcome home</p>
      </StyledDiv>
    </div>
  );
};
