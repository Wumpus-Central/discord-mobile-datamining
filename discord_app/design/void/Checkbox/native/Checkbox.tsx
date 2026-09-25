// discord_app/design/void/Checkbox/native/Checkbox.tsx
import _modDef13612 from "../../../../../_runtime/metro/13612__.js";
import _modDef13613 from "../../../../../_runtime/metro/13613__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef13612;
    let tmp5 = obj;
  } else {
    obj.source = _modDef13613;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
}
