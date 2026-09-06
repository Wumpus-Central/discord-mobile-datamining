// discord_common/js/packages/design/utils/getNodeText.tsx
import closure_0 from "../../../../../_runtime/00019_noop.js";

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
