// discord_app/design/void/Checkbox/native/Checkbox.tsx
import _modDef13798 from "../../../../../_runtime/metro/13798__.js";
import _modDef13799 from "../../../../../_runtime/metro/13799__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef13798;
    let tmp5 = obj;
  } else {
    obj.source = _modDef13799;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
}
