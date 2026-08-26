// === Module 16107: FormRowPlaceholderItem ===

// Module 16107 (FormRowPlaceholderItem)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import _modDef4184 from "module_4184" /* 4184 */;
import useFullscreenPlaceholderCount from "useFullscreenPlaceholderCount" /* 16080 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { itemContainer: { flexDirection: "row", paddingHorizontal: 16, overflow: "hidden", height: 64, paddingVertical: require("MessageEmbedTypes").SEARCH_ROW_TAP_STATE_PADDING, alignItems: "center" }, avatar: null, innerContainer: null, upperText: null, lowerText: null };
createCacheKey = { height: 48, width: 48, borderRadius: ThemesDefault.radii.xl, marginRight: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { justifyContent: "center", flex: 1 };
createCacheKey[3] = { width: "50%", borderRadius: ThemesDefault.radii.md, height: 16, marginBottom: 8, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj1 = { width: "50%", borderRadius: ThemesDefault.radii.md, height: 16, marginBottom: 8, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[4] = { justifyContent: "center", width: "100%", borderRadius: ThemesDefault.radii.md, height: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj2 = { justifyContent: "center", width: "100%", borderRadius: ThemesDefault.radii.md, height: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx");

export default function FormRowPlaceholderItem(style) {
  const tmp = callback3();
  let obj = useFullscreenPlaceholderCount;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  obj = { style: items, pointerEvents: "none", children: null };
  items = [placeholderAnimatedStyle, tmp.itemContainer, style.style];
  obj = { style: tmp.avatar };
  const items1 = [callback(View, obj), ];
  obj1 = { style: tmp.innerContainer, children: null };
  const items2 = [callback(View, { style: tmp.upperText }), callback(View, { style: tmp.lowerText })];
  obj1[1] = items2;
  items1[1] = callback2(View, obj1);
  obj[2] = items1;
  return callback2(_modDef4184.View, obj);
};