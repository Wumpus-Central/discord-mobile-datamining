// === Module 4266: getNodeText ===

// Module 4266 (getNodeText)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/utils/getNodeText.tsx");
function getNodeText(label) {
  if (typeof label !== "string") {
    if (typeof label !== "number") {
      const _Array = Array;
      if (label instanceof Array) {
        const mapped = label.map(getNodeText);
        let joined = mapped.join("");
      } else if (validElement.isValidElement(label)) {
        joined = getNodeText(label.props.children);
      }
    }
    return joined;
  }
  joined = label.toString();
}

export { getNodeText };