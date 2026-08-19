// discord_app/utils/native/StyleSheetUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

function getStyleProp(style, borderRadius) {
  if (null != borderRadius) {
    if ("" !== borderRadius) {
      const _Array = Array;
      if (Array.isArray(style)) {
        let diff = style.length - 1;
        if (0 <= diff) {
          const tmp5 = getStyleProp(style[diff], borderRadius);
          while (null == tmp5) {
            diff = diff - 1;
          }
          return tmp5;
        }
      } else if (null != style) {
        if (typeof style === "object") {
          return style[borderRadius];
        }
      }
    }
  }
}
const result = obj132.fileFinishedImporting("utils/native/StyleSheetUtils.tsx");

export default { getStyleProp };