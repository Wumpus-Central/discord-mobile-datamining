// _runtime/03760_parseJSON.js
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;

export default function parseJSON(str) {
  tmp5.default(1, arguments);
  if (typeof str === "string") {
    const match = str.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
    let _Date = Date;
    if (match) {
      const _Date2 = Date;
      let num2 = +match[9];
      if (!num2) {
        num2 = 0;
      }
      let num3 = 1;
      if ("-" == match[8]) {
        num3 = -1;
      }
      let num4 = +match[10];
      if (!num4) {
        num4 = 0;
      }
      let num5 = 1;
      if ("-" == match[8]) {
        num5 = -1;
      }
      const diff = +match[2] - 1;
      const text = `${tmp13}00`;
      const diff1 = +match[4] - num2 * num3;
      const diff2 = +match[5] - num4 * num5;
      _Date = new _Date(Date.UTC(tmp7, diff, tmp9, diff1, diff2, tmp12, +`${tmp13}00`.substring(0, 3)));
      const tmp10 = +match[4];
      const tmp11 = +match[5];
      const tmp8 = +match[2];
    } else {
      _Date = new _Date(NaN);
      tmp5 = new.target;
    }
    return _Date;
  } else {
    return tmp3.default(str);
  }
};
export default exports.default;