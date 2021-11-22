import styled from 'styled-components'


export const Button = styled.button`
    border: 1px solid #616A94;
    border-radius: 50px;
    padding: 15px 60px;
    text-decoration: none;
    color: #616A94;
    background-color: #F6BE00;
    transition: 0.3s;
    font-size: 1.3em;
    cursor: pointer;
    outline: none;
    

    &:hover {
        color: white;
        background-color: #616A94;
    }
`;

export default Button