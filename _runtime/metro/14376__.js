// _runtime/metro/14376__.js

export default {
  isASCIIDigit(decodeResult) {
    let tmp = decodeResult >= 48;
    if (tmp) {
      tmp = decodeResult <= 57;
    }
    return tmp;
  },
  isASCIIAlpha(input) {
    let tmp = input >= 65;
    if (tmp) {
      tmp = input <= 90;
    }
    if (!tmp) {
      let tmp2 = input >= 97;
      if (tmp2) {
        tmp2 = input <= 122;
      }
      tmp = tmp2;
    }
    return tmp;
  },
  isASCIIAlphanumeric(arg0) {
    let tmp = arg0 >= 65;
    if (tmp) {
      tmp = arg0 <= 90;
    }
    if (!tmp) {
      let tmp2 = arg0 >= 97;
      if (tmp2) {
        tmp2 = arg0 <= 122;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      let tmp3 = arg0 >= 48;
      if (tmp3) {
        tmp3 = arg0 <= 57;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  isASCIIHex(decodeResult) {
    let tmp = decodeResult >= 48;
    if (tmp) {
      tmp = decodeResult <= 57;
    }
    if (!tmp) {
      let tmp2 = decodeResult >= 65;
      if (tmp2) {
        tmp2 = decodeResult <= 70;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      let tmp3 = decodeResult >= 97;
      if (tmp3) {
        tmp3 = decodeResult <= 102;
      }
      tmp = tmp3;
    }
    return tmp;
  },
};
