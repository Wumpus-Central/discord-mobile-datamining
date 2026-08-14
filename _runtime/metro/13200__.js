// _runtime/metro/13200__.js
const re0 = /^[0-9]+$/;

export default {
  compareIdentifiers(major, major2) {
    const isMatch = regex.test(major);
    const isMatch1 = regex.test(major2);
    let tmp3 = isMatch;
    if (isMatch) {
      tmp3 = isMatch1;
    }
    let tmp4 = major2;
    let tmp5 = major;
    if (tmp3) {
      tmp5 = +major;
      tmp4 = +major2;
    }
    let num = 0;
    if (tmp5 !== tmp4) {
      if (!isMatch) {
        if (!isMatch1) {
          let num4 = 1;
          if (tmp5 < tmp4) {
            num4 = -1;
          }
          let num3 = num4;
        } else {
          num3 = 1;
        }
        let num2 = num3;
      } else {
        num2 = -1;
      }
      num = num2;
    }
    return num;
  },
  rcompareIdentifiers(arg0, arg1) {
    const isMatch = regex.test(arg1);
    const isMatch1 = regex.test(arg0);
    let tmp3 = isMatch;
    if (isMatch) {
      tmp3 = isMatch1;
    }
    let tmp4 = arg0;
    let tmp5 = arg1;
    if (tmp3) {
      tmp5 = +arg1;
      tmp4 = +arg0;
    }
    let num = 0;
    if (tmp5 !== tmp4) {
      if (!isMatch) {
        if (!isMatch1) {
          let num4 = 1;
          if (tmp5 < tmp4) {
            num4 = -1;
          }
          let num3 = num4;
        } else {
          num3 = 1;
        }
        let num2 = num3;
      } else {
        num2 = -1;
      }
      num = num2;
    }
    return num;
  }
};