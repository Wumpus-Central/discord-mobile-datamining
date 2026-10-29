// discord_app/design/components/Styles/native/styleConstants.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import size from "../../../../../_runtime/metro/00002__.js";

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
