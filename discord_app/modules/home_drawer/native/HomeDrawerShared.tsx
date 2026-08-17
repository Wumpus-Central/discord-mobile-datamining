// discord_app/modules/home_drawer/native/HomeDrawerShared.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

noopAll;
({ jsxs: closure_1, jsx: obj1 } = jsxProd);
let closure_3 = createCacheKey.createStyles({ container: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }, titleContainer: { flex: 1, flexDirection: "column", justifyContent: "center", gap: 2 }, rightContainer: { overflow: "hidden" } });
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerShared.tsx");

export const HomeDrawerSharedItem = function HomeDrawerSharedItem(right) {
  right = right.right;
  ({ title, subtitle } = right);
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.titleContainer, children: items };
  items = [title, subtitle];
  const items1 = [callback(View, obj), ];
  let tmp4 = null;
  if (null != right) {
    obj = { style: null, children: null };
    obj[0] = tmp.rightContainer;
    obj[1] = right;
    tmp4 = callback2(tmp3, obj);
  }
  items1[1] = tmp4;
  obj[1] = items1;
  return callback(View, obj);
};