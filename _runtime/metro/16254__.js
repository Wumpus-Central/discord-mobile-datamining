// === Module 16254: ? ===

// Module 16254
import _mod16239 from "module_16239" /* 16239 */;


export default function SyntaxError(rawMessage, input, offset) {
  const tmp = _mod16239("SyntaxError", rawMessage);
  tmp.input = input;
  tmp.offset = offset;
  tmp.rawMessage = rawMessage;
  length = tmp.offset;
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