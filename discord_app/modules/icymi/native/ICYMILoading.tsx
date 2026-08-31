// === Module 16066: ICYMILoadingItem ===

// Module 16066 (ICYMILoadingItem)
import ThemesDefault from "Themes" /* 712 */;
import _modDef4187 from "module_4187" /* 4187 */;
import useChatPlaceholderAnimatedStylesDefault from "useChatPlaceholderAnimatedStyles" /* 12144 */;
import Separator from "Separator" /* 16044 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16005 */;

require = arg1;
function ICYMILoadingItem() {
  const tmp = callback3();
  const tmp2 = useChatPlaceholderAnimatedStylesDefault({ visible: true, animated: true });
  const memo = React.useMemo(() => ({ avatarTitle: Math.floor(10 * Math.random()), title: Math.floor(10 * Math.random()), subtitle: Math.floor(10 * Math.random()) }), []);
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.avatarRow, children: null };
  ({ avatarTitle, title, subtitle } = memo);
  const items = [, , ];
  ({ backgroundColor: arr[0], avatar: arr[1] } = tmp);
  items[2] = tmp2;
  const items1 = [callback(_modDef4187.View, { style: items }), ];
  obj1 = { style: null };
  const items2 = [, , , ];
  ({ backgroundColor: arr3[0], avatarTitle: arr3[1] } = tmp);
  items2[2] = tmp2;
  const obj2 = { width: null };
  const result = 100 * Math.sin(avatarTitle);
  obj2[0] = "" + (result - Math.floor(result)) * 30 + 30 + "%";
  items2[3] = obj2;
  obj1[0] = items2;
  items1[1] = callback(_modDef4187.View, obj1);
  obj[1] = items1;
  const items3 = [callback2(View, obj), , , ];
  const obj3 = { style: null };
  const items4 = [, , , ];
  ({ backgroundColor: arr5[0], title: arr5[1] } = tmp);
  items4[2] = tmp2;
  const obj4 = { width: null };
  const result1 = 100 * Math.sin(title);
  obj4[0] = "" + (result1 - Math.floor(result1)) * 25 + 75 + "%";
  items4[3] = obj4;
  obj3[0] = items4;
  items3[1] = callback(_modDef4187.View, obj3);
  const obj5 = { style: null };
  const items5 = [, , , ];
  ({ backgroundColor: arr6[0], subtitle: arr6[1] } = tmp);
  items5[2] = tmp2;
  const obj6 = { width: null };
  const result2 = 100 * Math.sin(subtitle);
  obj6[0] = "" + (result2 - Math.floor(result2)) * 25 + 75 + "%";
  items5[3] = obj6;
  obj5[0] = items5;
  items3[2] = callback(_modDef4187.View, obj5);
  const items6 = [, , ];
  ({ backgroundColor: arr7[0], image: arr7[1] } = tmp);
  items6[2] = tmp2;
  items3[3] = callback(_modDef4187.View, { style: items6 });
  obj[1] = items3;
  const items7 = [callback2(View, obj), callback(Separator.Separator, {})];
  obj[0] = items7;
  return callback2(closure_7, obj);
}
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
let closure_8 = createICYMIStyles.createICYMIStyles((marginBottom) => {
  let obj = { backgroundColor: null, container: null, avatarRow: null, avatar: null, avatarTitle: null, title: null, subtitle: null, image: null, separator: null };
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj[0] = obj;
  obj[1] = { padding: marginBottom.margin };
  obj[2] = { flexDirection: "row", alignItems: "center", marginBottom: marginBottom.margin };
  obj = { width: 40, height: 40, borderRadius: ThemesDefault.radii.md, marginRight: ThemesDefault.space.PX_12 };
  obj[3] = obj;
  obj[4] = { height: 18, borderRadius: 10, flexShrink: 1 };
  obj[5] = { height: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_12, borderRadius: 10, flexShrink: 1 };
  obj1 = { height: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_12, borderRadius: 10, flexShrink: 1 };
  obj[6] = { height: ThemesDefault.space.PX_16, marginBottom: marginBottom.margin, borderRadius: 10, flexShrink: 1 };
  const obj2 = { height: ThemesDefault.space.PX_16, marginBottom: marginBottom.margin, borderRadius: 10, flexShrink: 1 };
  obj[7] = { width: "100%", height: 240, borderRadius: ThemesDefault.radii.lg };
  obj[8] = {};
  return obj;
});
let result = require("set").fileFinishedImporting("modules/icymi/native/ICYMILoading.tsx");

export const ICYMILoading = function ICYMILoading() {
  const obj = { children: null };
  const items = [callback(ICYMILoadingItem, {}), callback(ICYMILoadingItem, {})];
  obj[0] = items;
  return callback2(closure_7, obj);
};