// === Module 12991: ? ===

// Module 12991
import _mod12976 from "module_12976" /* 12976 */;


export default function SyntaxError(rawMessage, input, offset) {
  const tmp = _mod12976("SyntaxError", rawMessage);
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