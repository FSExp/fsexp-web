import {FooterContainer,SocialMediaDiv,InfosDiv} from '../HeaderFooter.styles';


function Footer() {

    const footerItems = [
        { helpCenter: 'HELP CENTER' },
        { socialMedia: 'INSTAGRAM' },
        { socialMedia: 'FACEBOOK' },
        { socialMedia: 'TWITTER' },
        { license: '2024 Freestyle Entertaiment License to Freestyle Entertaiment' },
        { warning: 'Warning: All Rights Reserved Unauthorized duplication is a violation of applicable laws' }
    ];

    return (
        <FooterContainer>

            <SocialMediaDiv>
                {footerItems.map(item => (
                <div>
                    <a href="#">{item.helpCenter}</a>
                    <a href="#">{item.socialMedia}</a>
                </div>
                ))}
            </SocialMediaDiv>

            <InfosDiv>
                <div>
                    {footerItems.map(item => (
                        <p>{item.license}</p>
                    ))}
                </div>

                <div>
                    {footerItems.map(item => (
                        <p>{item.warning}</p>
                    ))}
                </div>
            </InfosDiv>

        </FooterContainer>
    );
}

export default Footer;