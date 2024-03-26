import freestyleLogo from '/images/mini_logo_freestyle_experiences.png';
import starIcon from '/images/star.svg';
import userProfile from '/images/user_profile_icon.png';
import {} from '../HeaderFooter.styles';

import {HeaderContainer, LogoDiv, UserDiv, NavDiv} from '../HeaderFooter.styles';

function Header() {

    const navItems = [
        { text: 'CALENDÁRIO'},
        { text: 'AVISOS'},
        { text: 'AWARDS'},
        { text: 'PRODUTOS'}
    ];

    return (
        <HeaderContainer>
            <LogoDiv>
                <img src={freestyleLogo} alt='Logo da Freestyle'/>
            </LogoDiv>

            <NavDiv>
                {navItems.map((item) => (
                    <>
                        <img src={starIcon} alt='Star Icon'/>
                        <a href='#'>{item.text}</a>
                    </>
                ))}
            </NavDiv>

            <UserDiv>
                <img src={userProfile}/>    
            </UserDiv>
        </HeaderContainer>
    );
}

export default Header;