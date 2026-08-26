// === Module 12772: UserProfilePrivateBanner ===

// Module 12772 (UserProfilePrivateBanner)
import noopAll from "noop" /* 19 */;
import int2hslRaw from "int2hslRaw" /* 688 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import LockIcon from "LockIcon" /* 4991 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { banner: null };
createCacheKey = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingTop: 18, paddingBottom: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, position: "relative", zIndex: require("ARBITRARY_LARGE_OFFSET").PROFILE_TOP_LAYER_Z_INDEX };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfilePrivateBanner.tsx");

export default function UserProfilePrivateBanner(primaryColor) {
  primaryColor = primaryColor.primaryColor;
  const items = [callback2().banner, ];
  let tmp3 = null != primaryColor;
  if (tmp3) {
    let obj = { backgroundColor: null };
    obj1 = int2hslRaw;
    obj[0] = obj1.int2hex(primaryColor);
    tmp3 = obj;
  }
  obj = { style: items, children: null };
  items[1] = tmp3;
  obj = { size: "xs", color: ThemesDefault.colors.TEXT_DEFAULT };
  const items1 = [callback(LockIcon.LockIcon, obj), ];
  obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj1[2] = intl.string(getSystemLocale.t.KPnd2O);
  items1[1] = callback(Text.Text, obj1);
  obj[1] = items1;
  return closure_5(View, obj);
};