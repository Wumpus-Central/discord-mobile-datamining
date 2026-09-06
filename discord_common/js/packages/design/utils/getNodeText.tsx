// === Module 4266: utils/getNodeText ===

// Module 4266 (utils/getNodeText)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/getNodeText.tsx");
function getNodeText(label) {
  if (typeof label !== "string") {
    if (typeof label !== "number") {
      const _Array = Array;
      if (label instanceof Array) {
        const mapped = label.map(getNodeText);
        let joined = mapped.join("");
      } else if (noop.isValidElement(label)) {
        joined = getNodeText(label.props.children);
      }
    }
    return joined;
  }
  joined = label.toString();
}

export { getNodeText };