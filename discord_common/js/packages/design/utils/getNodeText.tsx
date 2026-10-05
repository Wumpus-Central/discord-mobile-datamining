// discord_common/js/packages/design/utils/getNodeText.tsx
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/getNodeText.tsx");
function getNodeText(label) {
  if (typeof label !== "string") {
    let joined;
    if (typeof label !== "number") {
      const _Array = Array;
      if (label instanceof Array) {
        const mapped = label.map(getNodeText);
        joined = mapped.join("");
      } else if (react.isValidElement(label)) {
        joined = getNodeText(label.props.children);
      }
    }
    return joined;
  }
  joined = label.toString();
}

export { getNodeText };
