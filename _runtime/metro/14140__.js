// _runtime/metro/14140__.js
const obj = {
  isASCIIDigit(decodeResult) {
    return decodeResult >= 48 && decodeResult <= 57;
  },
  isASCIIAlpha(input) {
    let tmp = input >= 65 && input <= 90;
    if (!tmp) {
      tmp = input >= 97 && input <= 122;
      const tmp2 = input >= 97 && input <= 122;
    }
    return tmp;
  },
  isASCIIAlphanumeric(arg0) {
    let tmp = arg0 >= 65 && arg0 <= 90;
    if (!tmp) {
      tmp = arg0 >= 97 && arg0 <= 122;
      const tmp2 = arg0 >= 97 && arg0 <= 122;
    }
    if (!tmp) {
      tmp = arg0 >= 48 && arg0 <= 57;
      const tmp3 = arg0 >= 48 && arg0 <= 57;
    }
    return tmp;
  },
  isASCIIHex(decodeResult) {
    let tmp = decodeResult >= 48 && decodeResult <= 57;
    if (!tmp) {
      tmp = decodeResult >= 65 && decodeResult <= 70;
      const tmp2 = decodeResult >= 65 && decodeResult <= 70;
    }
    if (!tmp) {
      tmp = decodeResult >= 97 && decodeResult <= 102;
      const tmp3 = decodeResult >= 97 && decodeResult <= 102;
    }
    return tmp;
  },
};

export default obj;
