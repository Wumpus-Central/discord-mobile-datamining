// discord_app/modules/collectibles/native/OrbBadgePreview.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { filterLayer } from "../../user_profile/native/UserProfilePreview.tsx";
import { useCurrentUser } from "../hooks/useCurrentUser.tsx";
import { hasAtLeastOneGPlaySynced } from "CollectiblesUtils.tsx";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = function OrbBadgePreview() {
  let obj = useCurrentUser;
  obj = { style: callback().container, children: null };
  const currentUser = obj.useCurrentUser();
  obj = { compact: true, user: currentUser, additionalBadges: null, accessibilityLabel: null };
  const tmp = callback();
  const tmp3 = filterLayer;
  const items = [hasAtLeastOneGPlaySynced.createOrbProfileBadge()];
  obj[2] = items;
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.bxcI6Y);
  obj[1] = <tmp3 compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
  return <View compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
};