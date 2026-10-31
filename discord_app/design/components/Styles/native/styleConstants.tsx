// === Module 5644: styleConstants ===

// Module 5644 (styleConstants)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const Platform = _mod17.Platform;
let str = "pointer";
if ("isPad" in Platform) {
  str = "pointer";
  if (Platform.isPad) {
    str = "auto";
  }
}
const result = size.fileFinishedImporting("design/components/Styles/native/styleConstants.tsx");

export const IOS_POINTER_STYLE = { cursor: str };