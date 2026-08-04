// discord_app/design/void/Form/native/FormIcon.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ icon: { opacity: 0.6 } });
const result = require("createCacheKey").fileFinishedImporting("design/void/Form/native/FormIcon.tsx");

export default function FormIcon(color) {
  let style;
  let themedColor;
  ({ style, themedColor } = color);
  const merged = Object.assign(color, Object.create(null));
  const tmp2 = callback();
  if (null != themedColor) {
    let obj = { style: null, themedColor: null };
    const items = [tmp2.icon, style];
    obj[0] = items;
    obj[1] = themedColor;
    const merged1 = Object.assign(merged);
    let tmp9 = jsx(require(1297) /* Button */.ThemedIcon, { style: null, themedColor: null });
  } else {
    obj = { style: null, color: null };
    const items1 = [tmp2.icon, style];
    obj[0] = items1;
    obj[1] = color.color;
    const merged2 = Object.assign(merged);
    tmp9 = jsx(require(1297) /* Button */.Icon, { style: null, color: null });
  }
  return tmp9;
};