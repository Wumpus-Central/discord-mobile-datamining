// === Module 13083: ? ===

// Module 13083
import _mod13068 from "module_13068" /* 13068 */;


export default function SyntaxError(rawMessage, input, offset) {
  const tmp = _mod13068("SyntaxError", rawMessage);
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