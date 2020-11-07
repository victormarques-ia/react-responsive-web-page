import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface InfoSecProps extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLDivElement>> {
  lightBg?: boolean;
}

interface InfoRowProps extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLDivElement>> {
  imgStart?: string;
}

interface TopLineProps extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLDivElement>> {
  lightTopLine?: boolean;
}

interface HeadingProps extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLHeadingElement>> {
  lightText?: boolean;
}

interface SubtitleProps extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLParagraphElement>> {
  lightTextDesc?: boolean;
}

interface ImgWrapperProps extends React.DetailsHTMLAttributes<HTMLAttributes<HTMLDivElement>> {
  start?: boolean;
}


export const InfoSec = styled.div<InfoSecProps>`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div<InfoRowProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
  margin: 0 -15px -15px -15px;
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    max-width: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div<TopLineProps>`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1<HeadingProps>`
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};

  margin-bottom: 24px;
`;

export const Subtitle = styled.p<SubtitleProps>`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};

  margin-bottom: 35px;
`;

export const ImgWrapper = styled.div<ImgWrapperProps>`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

  max-width: 555px;
`;

export const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
  padding-right: 0;
  border: 0;
  max-height: 500px;
  max-width: 100%;
`;