import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';

import { Heading, Img, ImgWrapper, InfoColumn, InfoRow, InfoSec, Subtitle, TextWrapper, TopLine } from './InfoSection.elements';

type Props = {
  lightBg?: boolean;
  imgStart?: string;
  lightTopLine?: boolean;
  topLine?: string;
  lightText?: boolean;
  headLine?: string;
  lightTextDesc?: boolean;
  description?: string;
  buttonLabel?: string;
  primary?: boolean;
  start?: boolean;
  img?: string;
  alt?: string
}

const InfoSection: React.FC<Props> = ({ lightBg, imgStart, lightTopLine, topLine, lightText, headLine, lightTextDesc, description, buttonLabel, primary, start, img, alt }: Props) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection
