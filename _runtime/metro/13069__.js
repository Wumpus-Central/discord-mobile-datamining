// === Module 13069: ? ===

// Module 13069
import _mod13054 from "module_13054" /* 13054 */;


export default function SyntaxError(rawMessage, input, offset) {
  const tmp = _mod13054("SyntaxError", rawMessage);
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