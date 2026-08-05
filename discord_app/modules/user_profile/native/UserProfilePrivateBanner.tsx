// discord_app/modules/user_profile/native/UserProfilePrivateBanner.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { banner: null };
createCacheKey = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingTop: 18, paddingBottom: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, position: "relative", zIndex: require("ARBITRARY_LARGE_OFFSET").PROFILE_TOP_LAYER_Z_INDEX };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/user_profile/native/UserProfilePrivateBanner.tsx");

export default function UserProfilePrivateBanner(primaryColor) {
  primaryColor = primaryColor.primaryColor;
  const items = [createCacheKey().banner, ];
  let tmp3 = null != primaryColor;
  if (tmp3) {
    let obj = { backgroundColor: null };
    let obj1 = require("../../../../discord_common/js/shared/utils/ColorUtils.tsx") /* int2hslRaw */;
    obj[0] = obj1.int2hex(primaryColor);
    tmp3 = obj;
  }
  obj = { style: items, children: null };
  items[1] = tmp3;
  obj = { size: "xs", color: null };
  obj[1] = require("../../../../discord_common/js/packages/tokens/native.tsx").colors.TEXT_DEFAULT;
  const items1 = [callback(require("../../../design/components/Icon/native/redesign/generated/LockIcon.tsx") /* LockIcon */.LockIcon, obj), ];
  obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[2] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.KPnd2O);
  items1[1] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  obj[1] = items1;
  return closure_5(View, obj);
};