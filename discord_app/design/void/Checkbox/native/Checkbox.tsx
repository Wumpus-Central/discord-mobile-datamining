// discord_app/design/void/Checkbox/native/Checkbox.tsx
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef15380 from "../../../../../_runtime/metro/15380__.js";
import _modDef15381 from "../../../../../_runtime/metro/15381__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef15380;
    let tmp5 = obj;
  } else {
    obj.source = _modDef15381;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
}
