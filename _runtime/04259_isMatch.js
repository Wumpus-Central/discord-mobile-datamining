// _runtime/04259_isMatch.js
import parse_mod from "04260_parse.js";
import isValid_mod from "04140_isValid.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let parse = parse_mod;
if (!parse) {
  tmp3 = { default: parse };
  const obj = { default: parse };
} else {
  tmp3 = parse;
}
parse = tmp3;
let isValid = isValid_mod;
if (!isValid) {
  tmp5 = { default: isValid };
  const obj2 = { default: isValid };
} else {
  tmp5 = isValid;
}
isValid = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isMatch(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const _default = isValid.default;
  const _default2 = parse.default;
  const date = new Date();
  return _default(_default2(arg0, arg1, date, arg2));
}
