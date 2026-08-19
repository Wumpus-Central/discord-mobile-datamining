// discord_app/modules/user_profile/native/UserProfilePrivateBanner.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import int2hslRaw from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingTop: 18, paddingBottom: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, position: "relative", zIndex: require("ARBITRARY_LARGE_OFFSET").PROFILE_TOP_LAYER_Z_INDEX };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfilePrivateBanner.tsx");

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
  items[1] = tmp3;
  obj = { size: "xs", color: ThemesDefault.colors.TEXT_DEFAULT };
  const items1 = [callback(LockIcon.LockIcon, obj), ];
  obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj1[2] = intl.string(getSystemLocale.t.KPnd2O);
  items1[1] = callback(Text.Text, obj1);
  obj[1] = items1;
  return callback(View, obj);
};