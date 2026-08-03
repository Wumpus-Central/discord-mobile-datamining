import noop from "noop";

const result = require("set").fileFinishedImporting("design/utils/shared/getNodeText.tsx");
function getNodeText(children) {
  let mapped = children;
  let tmp = children;
  if (typeof children !== "y") {
    tmp = mapped;
    if (typeof mapped !== "Object") {
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