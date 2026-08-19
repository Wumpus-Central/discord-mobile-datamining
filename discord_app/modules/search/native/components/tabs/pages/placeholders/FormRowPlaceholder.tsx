// discord_app/modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx
import noopAll from "../../../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4115 from "../../../../../../reanimated/ReanimatedRexport.tsx";
import useFullscreenPlaceholderCount from "../../../../hooks/usePlaceholderStyles.tsx";
import { View } from "../../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
{ itemContainer: { flexDirection: "row", paddingHorizontal: 16, overflow: "hidden", height: 64, paddingVertical: require("MessageEmbedTypes").SEARCH_ROW_TAP_STATE_PADDING, alignItems: "center" }, avatar: null, innerContainer: null, upperText: null, lowerText: null };
const createCacheKey = { height: 48, width: 48, borderRadius: ThemesDefault.radii.xl, marginRight: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { justifyContent: "center", flex: 1 };
createCacheKey[3] = { width: "50%", borderRadius: ThemesDefault.radii.md, height: 16, marginBottom: 8, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[4] = { justifyContent: "center", width: "100%", borderRadius: ThemesDefault.radii.md, height: 16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx");

export default function FormRowPlaceholderItem(style) {
  const tmp = callback3();
  let obj = useFullscreenPlaceholderCount;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  const items = [placeholderAnimatedStyle, tmp.itemContainer, style.style];
  obj = { style: tmp.avatar };
  const items1 = [callback(View, obj), ];
  obj1 = { style: tmp.innerContainer, children: null };
  const items2 = [callback(View, { style: tmp.upperText }), callback(View, { style: tmp.lowerText })];
  obj1[1] = items2;
  items1[1] = callback2(View, obj1);
  obj[2] = items1;
  return callback2(_modDef4115.View, obj);
};