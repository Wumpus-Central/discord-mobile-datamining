// === Module 5232: getNodeText ===

// Module 5232 (getNodeText)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/getNodeText.tsx");
function getNodeText(children) {
  if (typeof children !== "string") {
    if (typeof children !== "number") {
      const _Array = Array;
      if (children instanceof Array) {
        const mapped = children.map(getNodeText);
        let joined = mapped.join("");
      } else if (noop.isValidElement(children)) {
        joined = getNodeText(children.props.children);
      }
    }
    return joined;
  }
  joined = children.toString();
}

export { getNodeText };