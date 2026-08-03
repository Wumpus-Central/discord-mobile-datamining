
export default function copyObject(arg0, arg1, arg2, arg3) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = num;
    let tmp3;
    if (arg3) {
      let tmp4 = tmp;
      let tmp5 = obj;
      let tmp6 = arg0;
      tmp3 = arg3(obj[tmp], arg0[tmp], tmp, obj, arg0);
    }
    if (undefined === tmp3) {
      tmp3 = arg0[tmp];
    }
    let tmp7 = require;
    let tmp8 = dependencyMap;
    if (arg2) {
      let tmp10 = tmp7(4316)(obj, tmp, tmp3);
    } else {
      let tmp9 = tmp7(804)(obj, tmp, tmp3);
    }
  }
  return obj;
};