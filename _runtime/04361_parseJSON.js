// _runtime/04361_parseJSON.js
import toDate_mod from "03964_toDate.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function parseJSON(str) {
  requiredArgs.default(1, arguments);
  if (typeof str === "string") {
    let _Date1;
    const match = str.match(
      /(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/,
    );
    const _Date = Date;
    if (match) {
      const _Date2 = Date;
      let num2 = +match[9];
      const tmp6 = +match[2];
      const tmp8 = +match[4];
      if (!num2) {
        num2 = 0;
      }
      let num3 = 1;
      if ("-" == match[8]) {
        num3 = -1;
      }
      let num4 = +match[10];
      const tmp9 = +match[5];
      if (!num4) {
        num4 = 0;
      }
      let num5 = 1;
      if ("-" == match[8]) {
        num5 = -1;
      }
      const diff = tmp6 - 1;
      const text = `${tmp11}00`;
      const diff1 = tmp8 - num2 * num3;
      const diff2 = tmp9 - num4 * num5;
      const self3 = this;
      const self4 = this;
      _Date1 = new _Date(UTC(tmp5, diff, tmp7, diff1, diff2, tmp10, +`${tmp11}00`.substring(0, 3)));
    } else {
      const self = this;
      const self2 = this;
      _Date1 = new _Date(NaN);
    }
    return _Date1;
  } else {
    return toDate.default(str);
  }
}
