import React from "react";
import styled from 'styled-components';

const StyledName = styled.div`
width: 60%;
display: flex;
justify-content: space-around;
padding: 8px;
border: 2px solid white;
text-align: center;
padding-left:2%
`
const StyledBD = styled.div`
color: blue;
`

const Character = props =>
{
    return (
            
            <div>
            <StyledName>{props.info.name}
            <StyledBD>{props.info.birth_year}</StyledBD></StyledName>
            </div>
    );
};

export default Character;