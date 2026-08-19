// === Module 9577: OrbBadgePreview ===

// Module 9577 (OrbBadgePreview)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useCurrentUser from "useCurrentUser" /* 9176 */;
import hasAtLeastOneGPlaySynced from "hasAtLeastOneGPlaySynced" /* 9249 */;
import filterLayerDefault from "filterLayer" /* 9284 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_5 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = function OrbBadgePreview() {
  let obj = { style: callback().container, children: null };
  const currentUser = obj.useCurrentUser();
  obj = { compact: true, user: currentUser, additionalBadges: null, accessibilityLabel: null };
  const tmp = callback();
  const items = [hasAtLeastOneGPlaySynced.createOrbProfileBadge()];
  obj[2] = items;
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.bxcI6Y);
  obj[1] = <tmp3 compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
  return <View compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
};