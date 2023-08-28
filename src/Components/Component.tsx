import { useNavigate } from "react-router-dom";

function Component() {
    const navigate = useNavigate();

    // Ao clicar no btn, a página será direcionada para a página '/home'
    function handleClick() {
        navigate('/home')
    }

    return (
        <button
          onClick={ handleClick }
        >
           To enter 
        </button>
    )

}

export default Component;