import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${props => props.theme.colors.chatWhite};
`;
export const Inner = styled.div`
  position: relative;
  padding: 10px;
  width: 100%;
  height: auto;
  background: ${props => props.theme.colors.chatWhite};
  border-top: 1px solid ${props => props.theme.colors.chatLGray};
  border: 1px solid ${props => props.theme.borderRadius.normal};
  border-bottom-right-radius: ${props => props.theme.borderRadius.normal};
  border-bottom-left-radius: ${props => props.theme.borderRadius.normal};
`;

export const SendForm = styled.form`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

export const TextBox = styled.textarea`
  width: 100%;
  max-height: 100px;
  border: none;
  outline: none;
  resize: none;
  padding: 10px 5px;
  overflow: auto;
  z-index: 2;
  font-size: ${props => props.theme.fontSize.m};
`;

export const SendBtn = styled.button`
  width: 50px;
  height: 25px;
  border-radius: ${props => props.theme.borderRadius.normal};
  background: ${props => props.theme.colors.chatPink};
  color: ${props => props.theme.colors.chatTomato};
  font-weight: ${props => props.theme.fontWeight.strong};
`;
