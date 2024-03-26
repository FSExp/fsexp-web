import styled from 'styled-components';
import variables from '../../styles/variables';

/* ----------- HEADER STYLES ----------- */

export const HeaderContainer = styled.div`
    background-color: ${variables.colors.gray};
    height: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 42px;
    border-bottom: 3px solid ${variables.colors.red};

`

export const LogoDiv = styled.div`
    img {
        width: 150px;
        height: auto;
    }
`

export const NavDiv = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    column-gap: 36px;

    img {
        width: 25px;
        height: auto;
    }

    a {
        color: ${variables.colors.white};
        font-family: ${variables.fonts.jura};
        text-decoration: none;
        cursor: pointer;
        font-size: 36px;
        font-weight: 700;
    }
`

export const UserDiv = styled.div`
    img {
        width: 80px;
        height: auto;
    }
`

/* -----------  FOOTER STYLES ----------- */
export const FooterContainer = styled(HeaderContainer)`
    border-top: 3px solid ${variables.colors.purple};
    border-bottom: none;
    flex-direction: column;
    align-items: center;
    display: flex;
    padding: 20px 0;
`
export const SocialMediaDiv = styled.div`
    text-align: center;
    display: flex;
    gap: 28px;
    //justify-content: space-between;
    //width: 60%;
    align-items: center;
    justify-content: center;

    a {
        color: ${variables.colors.white};
        text-decoration: none;
        font-family: ${variables.fonts.bruno};
        font-size: 16px;
    }
`

export const InfosDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    p {
        font-size: 16px;
    }

`