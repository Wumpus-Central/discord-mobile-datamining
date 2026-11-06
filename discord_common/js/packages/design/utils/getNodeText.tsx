// discord_common/js/packages/design/utils/getNodeText.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

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
