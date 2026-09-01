// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import ClydeIcon from "../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../utils/PlatformUtils.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { exclusiveBadge: null, exclusiveBadgeText: null };
createCacheKey = {
  flexDirection: "row",
  alignItems: "center",
  textAlignVertical: "center",
  alignSelf: "flex-start",
  gap: ThemesDefault.space.PX_4,
  borderRadius: ThemesDefault.radii.round,
  paddingHorizontal: ThemesDefault.space.PX_8,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND,
};
createCacheKey[0] = createCacheKey;
const obj1 = { textTransform: "uppercase", fontSize: ThemesDefault.space.PX_12, lineHeight: null };
set = set.isAndroid();
const space = ThemesDefault.space;
obj1[2] = set ? space.PX_12 : space.PX_16;
createCacheKey[1] = obj1;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export const ExclusiveBadge = function ExclusiveBadge() {
  const tmp = callback3();
  let obj = { style: tmp.exclusiveBadge, children: null };
  obj = { size: "xs", color: ThemesDefault.colors.WHITE };
  const items = [callback(ClydeIcon.ClydeIcon, obj)];
  obj = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.exclusiveBadgeText, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.RiDMFz);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};
