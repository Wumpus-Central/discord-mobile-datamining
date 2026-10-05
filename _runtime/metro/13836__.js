// _runtime/metro/13836__.js
const re0 = /^[0-9]+$/;
const obj = {
  compareIdentifiers(major, major2) {
    const isMatch = re0.test(major);
    const isMatch1 = re0.test(major2);
    let tmp4 = major2;
    let tmp5 = major;
    const tmp3 = isMatch && isMatch1;
    if (tmp3) {
      tmp5 = +major;
      tmp4 = +major2;
    }
    let num = 0;
    if (tmp5 !== tmp4) {
      let num2;
      if (!isMatch) {
        let num3;
        if (!isMatch1) {
          let num4 = 1;
          if (tmp5 < tmp4) {
            num4 = -1;
          }
          num3 = num4;
        } else {
          num3 = 1;
        }
        num2 = num3;
      } else {
        num2 = -1;
      }
      num = num2;
    }
    return num;
  },
  rcompareIdentifiers(arg0, arg1) {
    const isMatch = re0.test(arg1);
    const isMatch1 = re0.test(arg0);
    let tmp4 = arg0;
    let tmp5 = arg1;
    const tmp3 = isMatch && isMatch1;
    if (tmp3) {
      tmp5 = +arg1;
      tmp4 = +arg0;
    }
    let num = 0;
    if (tmp5 !== tmp4) {
      let num2;
      if (!isMatch) {
        let num3;
        if (!isMatch1) {
          let num4 = 1;
          if (tmp5 < tmp4) {
            num4 = -1;
          }
          num3 = num4;
        } else {
          num3 = 1;
        }
        num2 = num3;
      } else {
        num2 = -1;
      }
      num = num2;
    }
    return num;
  },
};

export default obj;
