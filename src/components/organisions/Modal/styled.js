import styled from "styled-components";

export const Wrapper = styled.div`
    width: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px black solid;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
`;
export const SectionText = styled.div`
    min-height: 100px;
    margin-bottom: 20px;
`;

export const ModalButton = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;