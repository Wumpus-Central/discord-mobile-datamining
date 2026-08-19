// _runtime/01509_nanoid.js
arg5.nanoid = () => {
  let tmp3;
  let num = arg0;
  if (arg0 === undefined) {
    num = 21;
  }
  let diff = tmp - 1;
  let str = "";
  let str2 = "";
  if (num | 0) {
    do {
      let _Math = Math;
      str = `${"useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random(Math) | 0]}`;
      tmp3 = diff;
      diff = diff - 1;
      str2 = str;
    } while (tmp3);
  }
  return str2;
};
arg5.customAlphabet = (arg0) => {
  closure_0 = arg0;
  return () => {
    let tmp5;
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = num;
    }
    let diff = tmp2 - 1;
    let str = "";
    let str2 = "";
    if (tmp | 0) {
      do {
        let _Math = Math;
        str = `${closure_0[Math.random(Math) * closure_0.length | 0]}`;
        tmp5 = diff;
        diff = diff - 1;
        str2 = str;
      } while (tmp5);
    }
    return str2;
  };
};