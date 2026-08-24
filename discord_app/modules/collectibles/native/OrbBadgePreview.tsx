// discord_app/modules/collectibles/native/OrbBadgePreview.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import hasAtLeastOneGPlaySynced from "CollectiblesUtils.tsx";
import filterLayerDefault from "../../user_profile/native/UserProfilePreview.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = function OrbBadgePreview() {
  let obj = useCurrentUser;
  obj = { style: callback().container, children: null };
  const currentUser = obj.useCurrentUser();
  obj = { compact: true, user: currentUser, additionalBadges: null, accessibilityLabel: null };
  const tmp = callback();
  const tmp3 = filterLayerDefault;
  const items = [hasAtLeastOneGPlaySynced.createOrbProfileBadge()];
  obj[2] = items;
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.bxcI6Y);
  obj[1] = <tmp3 compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
  return <View compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
};