const sliceMessage = (message: string, strLeng: number) => {
  if (message.length > strLeng) {
    return message.substring(0, strLeng) + 'ยทยทยท';
  } else {
    return message;
  }
};

export default sliceMessage;
