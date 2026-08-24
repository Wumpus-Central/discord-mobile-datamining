// === Module 4103: getNodeText ===

// Module 4103 (getNodeText)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("design/utils/shared/getNodeText.tsx");
function getNodeText(children) {
  let mapped = children;
  let tmp = children;
  if (typeof children !== "string") {
    tmp = mapped;
    if (typeof mapped !== "number") {
      const _Array = Array;
      if (mapped instanceof Array) {
        mapped = mapped.map(getNodeText);
        let joined = mapped.join("");
      } else if (validElement.isValidElement(mapped)) {
        joined = getNodeText(mapped.props.children);
      }
    }
  }
  return tmp;
}

export { getNodeText };