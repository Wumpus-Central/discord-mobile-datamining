// === Module 10369: RoleLabel ===

// Module 10369 (RoleLabel)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import Form from "Form" /* 8372 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { display: "flex", flexDirection: "row" }, roleDot: { marginRight: 4 } });
const result = require("set").fileFinishedImporting("design/void/RoleLabel/native/RoleLabel.tsx");

export const RoleLabel = function RoleLabel(color) {
  color = color.color;
  ({ name, colors } = color);
  const tmp = callback2();
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  let tmp5 = "username" === stateFromStores;
  if (tmp5) {
    tmp5 = null != color;
  }
  if (tmp5) {
    obj = { color: null };
    obj[0] = color;
  }
  obj = { style: tmp.container, children: null };
  let tmp10 = "dot" === stateFromStores;
  if (tmp10) {
    tmp10 = null != color;
  }
  if (tmp10) {
    obj1 = { color: null, colors: null, containerStyles: null };
    obj1[0] = color;
    obj1[1] = colors;
    obj1[2] = tmp.roleDot;
    tmp10 = callback(tmp2(1296).RoleDot, obj1);
  }
  const items1 = [tmp10, callback(Form.FormLabel, { style: {}, text: name })];
  obj[1] = items1;
  return closure_5(View, obj);
};