// === Module 13749: ? ===

// Module 13749
import _mod13734 from "module_13734" /* 13734 */;


export default function SyntaxError(rawMessage, input, offset) {
  const tmp = _mod13734("SyntaxError", rawMessage);
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