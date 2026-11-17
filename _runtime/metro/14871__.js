// === Module 14871: ? ===

// Module 14871
import _mod14856 from "module_14856" /* 14856 */;


export default function SyntaxError(rawMessage, input, offset) {
  const tmp = _mod14856("SyntaxError", rawMessage);
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