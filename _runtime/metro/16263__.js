// === Module 16263: ? ===

// Module 16263
import _mod16248 from "module_16248" /* 16248 */;


export default function SyntaxError(rawMessage, input, offset) {
  const tmp = _mod16248("SyntaxError", rawMessage);
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