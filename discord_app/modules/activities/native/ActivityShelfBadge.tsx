// discord_app/modules/activities/native/ActivityShelfBadge.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import Button from "Button" /* 1297 */;

require = arg1;
noopAll;
createCacheKey = { badge: null, newBadge: null, updatedBadge: null, elevationShadow: null, badgeText: null };
createCacheKey = { position: "absolute", top: 4, right: 4, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.STATUS_POSITIVE_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: 4, paddingRight: 6, borderRadius: ThemesDefault.radii.sm, height: 16, backgroundColor: ThemesDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
let obj1 = { paddingLeft: 4, paddingRight: 6, borderRadius: ThemesDefault.radii.sm, height: 16, backgroundColor: ThemesDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
createCacheKey[2] = { paddingLeft: 4, paddingRight: 6, borderRadius: ThemesDefault.radii.sm, height: 16, backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND };
createCacheKey[3] = Button.generateBoxShadowStyle(require("Button").FOUR_DP_ELEVATION_SHADOW_PARAMS);
createCacheKey[4] = { textTransform: "uppercase", marginLeft: 2, fontFamily: require("ME").Fonts.DISPLAY_EXTRABOLD, lineHeight: 16, fontSize: 12 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj2 = { paddingLeft: 4, paddingRight: 6, borderRadius: ThemesDefault.radii.sm, height: 16, backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND };
const result = require("set").fileFinishedImporting("modules/activities/native/ActivityShelfBadge.tsx");

export default function ActivityShelfBadge(arg0) {
  ({ labelType, replacementStyles } = arg0);
  const tmp = callback();
  if (replacementStyles == null) {
    replacementStyles = tmp.badge;
  }
  if (labelType === PermissionOverwriteType.EmbeddedActivityLabelTypes.NEW) {
    let obj = { style: null, children: null };
    const items = [replacementStyles, , ];
    ({ newBadge: arr[1], elevationShadow: arr[2] } = tmp);
    obj[0] = items;
    obj = { variant: "text-xs/semibold", style: null, color: "text-overlay-light", children: null };
    obj[1] = tmp.badgeText;
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t.y2b7CA);
    obj[1] = jsx(tmp2(4734).Text, { variant: "text-xs/semibold", style: null, color: "text-overlay-light", children: null });
    let tmp6 = <View variant="text-xs/semibold" style={null} color="text-overlay-light">{null}</View>;
  } else {
    tmp6 = null;
    if (labelType === tmp2(1954).EmbeddedActivityLabelTypes.UPDATED) {
      obj = { style: null, children: null };
      const items1 = [replacementStyles, , ];
      ({ updatedBadge: arr2[1], elevationShadow: arr2[2] } = tmp);
      obj[0] = items1;
      obj1 = { variant: "text-xs/semibold", style: null, color: "text-overlay-light", children: null };
      obj1[1] = tmp.badgeText;
      const intl2 = tmp2(1236).intl;
      obj1[3] = intl2.string(tmp2(1236).t["/qdhkk"]);
      obj[1] = jsx(tmp2(4734).Text, { variant: "text-xs/semibold", style: null, color: "text-overlay-light", children: null });
      tmp6 = <View style={null}>{null}</View>;
    }
  }
  return tmp6;
};