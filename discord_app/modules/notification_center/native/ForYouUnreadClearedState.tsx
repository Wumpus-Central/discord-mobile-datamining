// discord_app/modules/notification_center/native/ForYouUnreadClearedState.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../_runtime/10243_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { marginBottom: 4, marginHorizontal: 24, alignItems: "center", flexDirection: "row" }, imageContainer: null, icon: null, headerText: null };
createCacheKey = { width: 48, height: 48, backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_400, opacity: 0.16, borderRadius: ThemesDefault.radii.xl, marginRight: 16, justifyContent: "center", alignItems: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { margin: 12, position: "absolute", color: ThemesDefault.unsafe_rawColors.GREEN_400 };
createCacheKey[3] = { marginBottom: 2 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { margin: 12, position: "absolute", color: ThemesDefault.unsafe_rawColors.GREEN_400 };
const result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouUnreadClearedState.tsx");

export const ForYouUnreadClearedState = function ForYouUnreadClearedState() {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.imageContainer };
  const items = [callback(View, obj), , ];
  obj = { source: registerAssetDefault, style: tmp.icon, color: tmp.icon.color };
  items[1] = callback(Button.Icon, obj);
  obj1 = { children: null };
  const obj2 = { color: "mobile-text-heading-primary", variant: "text-md/semibold", style: tmp.headerText, children: null };
  const intl = getSystemLocale.intl;
  obj2[3] = intl.string(getSystemLocale.t.DonStq);
  const items1 = [callback(Text.Text, obj2), ];
  const obj3 = { color: "text-default", variant: "text-md/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj3[2] = intl2.string(getSystemLocale.t.jXFsai);
  items1[1] = callback(Text.Text, obj3);
  obj1[0] = items1;
  items[2] = callback2(View, obj1);
  obj[1] = items;
  return callback2(View, obj);
};