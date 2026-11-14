// discord_app/design/void/Checkbox/native/Checkbox.tsx
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef16591 from "../../../../../_runtime/metro/16591__.js";
import _modDef16592 from "../../../../../_runtime/metro/16592__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  if (selected) {
    obj.source = _modDef16591;
    let tmp5 = obj;
  } else {
    obj.source = _modDef16592;
    tmp5 = obj;
  }
  return jsx(FastImageDefault, tmp5);
}
