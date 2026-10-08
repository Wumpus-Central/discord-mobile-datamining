// _runtime/01236_containsMessageType.js
import MESSAGE_TYPE from "01221_MESSAGE_TYPE.js";

require = arg1;
const dependencyMap = arg6;

export const containsMessageType = function containsMessageType(arg0) {
  return null != arg0[MESSAGE_TYPE.MESSAGE_TYPE];
};
