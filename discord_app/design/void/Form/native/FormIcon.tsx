// discord_app/design/void/Form/native/FormIcon.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Button from "../../native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
let closure_3 = createCacheKey.createStyles({ icon: { opacity: 0.6 } });
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FormIcon.tsx");

export default function FormIcon(color) {
  ({ style, themedColor } = color);
  const merged = Object.assign(color, Object.create(null));
  const tmp2 = callback();
  if (null != themedColor) {
    let obj = { style: null, themedColor: null };
    const items = [tmp2.icon, style];
    obj[0] = items;
    obj[1] = themedColor;
    const merged1 = Object.assign(merged);
    let tmp9 = jsx(Button.ThemedIcon, { style: null, themedColor: null });
  } else {
    obj = { style: null, color: null };
    const items1 = [tmp2.icon, style];
    obj[0] = items1;
    obj[1] = color.color;
    const merged2 = Object.assign(merged);
    tmp9 = jsx(Button.Icon, { style: null, color: null });
  }
  return tmp9;
};