import styled from "styled-components";
import BoardList from "./board/BoardList";
import BoardMenu from "./board/BoardMenu";

const Wrapper = styled.div`
    width: 100%
`;

const ContentContainer = styled.div`
    display: flex;
    oeverflow: scroll;
`;

const BoardCotainer = styled.div`
    flex: 1;
    border-right: 1px solid black;
`;

function App() {
    return (
        <Wrapper>
            <ContentContainer>
                <BoardCotainer>
                    <BoardList />
                    <BoardMenu />
                </BoardCotainer>
            </ContentContainer>
        </Wrapper>
    );
}

export default App;