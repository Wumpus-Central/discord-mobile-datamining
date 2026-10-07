// discord_app/utils/native/StyleSheetUtils.tsx
import size from "../../../_runtime/metro/00002__.js";

const obj = { getStyleProp: null };
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
obj.getStyleProp = getStyleProp;
const result = size.fileFinishedImporting("utils/native/StyleSheetUtils.tsx");

export default obj;
