import styled from 'styled-components';
import variables from '../../styles/variables';

/* ----------- PRIMEIRA SECTION ----------- */

export const FirstSection = styled.section`
    background: url("/images/fundo_section_1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 115px;
    justify-content: center;

    & > :nth-child(1) {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > :nth-child(1) {
            
            img {
                width: 722px;
                height: auto;
            }
        }

        & > :nth-child(2) {
            h1 {
                font-family: ${variables.fonts.bruno};
                font-weight: 400;
                font-size: 48px;

                & > :nth-child(1) {
                    color: ${variables.colors.red}; 
                }

                & > :nth-child(2) {
                    color: ${variables.colors.purple};
                    margin-left: 15px;  
                }
            }
        }
    }

    & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 60%;

        h2 {
            font-family: ${variables.fonts.bruno};
            font-weight: 400;
            font-size: 30px;   
        }
    }
`

/* ----------- SEGUNDA SECTION ----------- */

export const SecondSection = styled.section`
    background: url("/images/fundo_section_2.png");
    height: 65vh;
    padding: 30px 86px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > :nth-child(1) {
        h1 {
            font-family: ${variables.fonts.bruno};
            font-size: 45px;
            font-weight: 400;
        }
    }

    & > :nth-child(2) {
        display: flex;
        align-items: center;
        width: 90%;
        justify-content: space-around;
        cursor: pointer;
    
        & > :nth-child(1), & > :nth-child(2) {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            p {
                font-size: 45px;
                font-family: ${variables.fonts.jura};
                font-weight: 700;
                transition: transform 0.3s ease-in-out;
                border-radius: 50%; 
            }

            img {
                width: 300px;
                height: auto;
                transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                border-radius: 50%; 
            }

            &:hover {
                p {
                    transform: scale(1.1);
                }

                img {
                    transform: scale(1.1);
                    box-shadow: 0px 0px 50px 20px rgba(0, 0, 0, 0.7); 
                }
            }
        }
    }
`
