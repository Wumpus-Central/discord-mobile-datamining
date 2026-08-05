// _runtime/metro/13556__.js

export default {
  isASCIIDigit(arg0) {
    let tmp = arg0 >= 48;
    if (tmp) {
      tmp = arg0 <= 57;
    }
    return tmp;
  },
  isASCIIAlpha(buffer) {
    let tmp = buffer >= 65;
    if (tmp) {
      tmp = buffer <= 90;
    }
    if (!tmp) {
      let tmp2 = buffer >= 97;
      if (tmp2) {
        tmp2 = buffer <= 122;
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
  isASCIIHex(arg0) {
    let tmp = arg0 >= 48;
    if (tmp) {
      tmp = arg0 <= 57;
    }
    if (!tmp) {
      let tmp2 = arg0 >= 65;
      if (tmp2) {
        tmp2 = arg0 <= 70;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      let tmp3 = arg0 >= 97;
      if (tmp3) {
        tmp3 = arg0 <= 102;
      }
      tmp = tmp3;
    }
    return tmp;
  }
};