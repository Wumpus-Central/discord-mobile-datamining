// _runtime/03515_addLeadingZeros.js

export default function addLeadingZeros(arg0, arg1) {
  let length;
  let str = "";
  if (arg0 < 0) {
    str = "-";
  }
  str = Math.abs(arg0).toString();
  let tmp = str;
  let tmp2 = str;
  if (str.length < arg1) {
    do {
      let text = `0${tmp}`;
      tmp = text;
      tmp2 = text;
      length = `0${tmp}`.length;
    } while (length < arg1);
  }
  return str + tmp2;
};
export default exports.default;