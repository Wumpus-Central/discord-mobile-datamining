// discord_app/design/void/RoleLabel/native/RoleLabel.tsx
import "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Form } from "../../Form/native/index.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { display: "flex", flexDirection: "row" }, roleDot: { marginRight: 4 } });
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("design/void/RoleLabel/native/RoleLabel.tsx");

export const RoleLabel = function RoleLabel(color) {
  let colors;
  let name;
  color = color.color;
  ({ name, colors } = color);
  const tmp = callback2();
  let obj = initialize /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
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
    const obj1 = { color: null, colors: null, containerStyles: null };
    obj1[0] = color;
    obj1[1] = colors;
    obj1[2] = tmp.roleDot;
    tmp10 = callback(tmp2(1297).RoleDot, obj1);
  }
  const items1 = [tmp10, callback(Form /* Form */.FormLabel, { style: {}, text: name })];
  obj[1] = items1;
  return closure_5(View, obj);
};