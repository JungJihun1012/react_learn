import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import { useState } from "react";
import Modal from "../../organisions/Modal";

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div>
                <div>MainPage</div>
                <button onClick={() => setIsModalOpen(true)}>보기</button>
                <Link to='/sub'>SubPage</Link>
                {isModalOpen && (
                    <div>
                        <Modal 
                            title={"텍스트"}
                            setIsModalOpen={setIsModalOpen}
                        >
                            아아아아아아
                        </Modal>
                    </div>
                )}

            </div>
        </>
    );
};

export default Main;
