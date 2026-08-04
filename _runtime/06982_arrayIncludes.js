
export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = require(6983) /* baseIndexOf */(arg0, arg1, 0) > -1;
  }
  return tmp;
};