// discord_app/design/void/RoleLabel/native/RoleLabel.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import Form from "../../Form/native/index.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_3 from "../../../../modules/a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({
  container: { display: "flex", flexDirection: "row" },
  roleDot: { marginRight: 4 },
});
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
    tmp10 = callback(tmp2(1178).RoleDot, obj1);
  }
  const items1 = [tmp10, callback(Form.FormLabel, { style: {}, text: name })];
  obj[1] = items1;
  return closure_5(View, obj);
};
