// discord_app/design/void/Checkbox/native/Checkbox.tsx
import _modDef14200 from "../../../../../_runtime/metro/14200__.js";
import _modDef14201 from "../../../../../_runtime/metro/14201__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = _modDef14200;
    let tmp5 = obj;
  } else {
    obj.source = _modDef14201;
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
}
