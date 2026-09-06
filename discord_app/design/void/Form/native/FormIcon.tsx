// discord_app/design/void/Form/native/FormIcon.tsx
import native from "../../native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_3 = createStyles.createStyles({ icon: { opacity: 0.6 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormIcon.tsx");

export default function FormIcon(color) {
  ({ style, themedColor } = color);
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0, themedColor: 0 }));
  const tmp2 = closure_3();
  if (null != themedColor) {
    let obj = { style: null, themedColor: null };
    const items = [tmp2.icon, style];
    obj.style = items;
    obj.themedColor = themedColor;
    const merged1 = Object.assign(merged);
    let tmp9 = jsx(native.ThemedIcon, { style: null, themedColor: null });
  } else {
    obj = { style: null, color: null };
    const items1 = [tmp2.icon, style];
    obj.style = items1;
    obj.color = color.color;
    const merged2 = Object.assign(merged);
    tmp9 = jsx(native.Icon, { style: null, color: null });
  }
  return tmp9;
}
