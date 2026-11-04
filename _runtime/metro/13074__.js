// === Module 13074: ? ===

// Module 13074
import _mod13059 from "module_13059" /* 13059 */;


export default function SyntaxError(rawMessage, input, offset) {
  const tmp = _mod13059("SyntaxError", rawMessage);
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