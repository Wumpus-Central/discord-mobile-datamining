// === Module 9614: OrbBadgePreview ===

// Module 9614 (OrbBadgePreview)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useCurrentUser from "useCurrentUser" /* 9213 */;
import hasAtLeastOneGPlaySynced from "hasAtLeastOneGPlaySynced" /* 9286 */;
import filterLayerDefault from "filterLayer" /* 9321 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

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