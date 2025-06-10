import { useState } from "react";
import Button from "../../atoms/Button";
import { ModalButton, Wrapper } from "./styled";

const Modal = ({ title, setIsModalOpen, children, ...args }) => {

    const handleConfirm = () => {
        setIsModalOpen(false);
        console.log("확인되었습니다.");
    }
    const handleCancel = () => {
        setIsModalOpen(false);
        console.log("취소되었습니다.");
    }

    return (
        <Wrapper {...args}>
            <h2>{title}</h2>
            <SectionText>
                {children}
            </SectionText>
            <ModalButton>
                <Button onClick={handleConfirm}>확인</Button>
                <Button onClick={handleCancel}>취소</Button>
            </ModalButton>
        </Wrapper>
    );
};

export default Modal;
