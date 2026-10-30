// === Module 12817: ? ===

// Module 12817
import _mod12802 from "module_12802" /* 12802 */;


export default function SyntaxError(rawMessage, input, offset) {
  const tmp = _mod12802("SyntaxError", rawMessage);
  tmp.input = input;
  tmp.offset = offset;
  tmp.rawMessage = rawMessage;
  let length = tmp.offset;
  const text = `${tmp.rawMessage}
    ${tmp.input}`;
  if (!length) {
    length = tmp.input.length;
  }
  const array = new Array(length + 1);
  tmp.message = `${`${tmp2}
  --`}${obj.join("-")}^`;
  return tmp;
};