import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #101522;
  padding: 4rem 0 2rem 0;
`; 

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 24px;

  margin-bottom: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;


export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  margin-right: 10px;
  outline: none;
  font-size: 16px;
  border: none;
  border-radius: 2px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0; 
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1000px;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  margin: 16px;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  max-width: 1000px;

  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: start;

  margin-bottom: 16px;
  
  text-decoration: none;
  font-size: 2rem;
  color: #fff;

  cursor: pointer;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;