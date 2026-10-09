// === Module 4536: lightFormat ===

// Module 4536 (lightFormat)
import _typeof_mod from "module_4158" /* 4158 */;
import M from "M" /* 4402 */;
import module_4321_mod from "module_4321" /* 4321 */;
import module_4340_mod from "module_4340" /* 4340 */;
import subMilliseconds_mod from "subMilliseconds" /* 4391 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!M) {
  const obj2 = { default: M };
  let tmp5 = obj2;
} else {
  tmp5 = M;
}
let closure_1 = tmp5;
let module_4321 = module_4321_mod;
if (!module_4321) {
  const obj3 = { default: module_4321 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4321;
}
module_4321 = tmp7;
let module_4340 = module_4340_mod;
if (!module_4340) {
  const obj4 = { default: module_4340 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4340;
}
module_4340 = tmp9;
let subMilliseconds = subMilliseconds_mod;
if (!subMilliseconds) {
  const obj5 = { default: subMilliseconds };
  let tmp11 = obj5;
} else {
  tmp11 = subMilliseconds;
}
subMilliseconds = tmp11;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj6 = { default: requiredArgs };
  let tmp13 = obj6;
} else {
  tmp13 = requiredArgs;
}
requiredArgs = tmp13;
const re6 = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re7 = /^'([^]*?)'?$/;
const re8 = /''/g;
const re9 = /[a-zA-Z]/;

export default function lightFormat(arg0, str) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if (module_4340.default(defaultResult1)) {
    _typeof = subMilliseconds.default(defaultResult1, module_4321.default(defaultResult1));
    let match = str.match(closure_6);
    let str3 = "";
    if (match) {
      const mapped = match.map((item) => {
        let str = item;
        if ("''" === item) {
          return "'";
        } else if ("'" === str[0]) {
          const match = str.match(re7);
          if (match) {
            str = match[1].replace(re8, "'");
          }
          return str;
        } else if (closure_1.default[str6]) {
          return tmp2(closure_0, str);
        } else if (str6.match(re9)) {
          const _RangeError = RangeError;
          const rangeError = new RangeError("Format string contains an unescaped latin alphabet character `" + str6 + "`");
          throw rangeError;
        } else {
          return str;
        }
      });
      str3 = mapped.join("");
    }
    return str3;
  } else {
    let _RangeError = RangeError;
    let rangeError = new RangeError("Invalid time value");
    throw rangeError;
  }
};
export default exports.default;