// === Module 11262: ActivityShelfBadge ===

// Module 11262 (ActivityShelfBadge)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";
import Button from "Button" /* 1297 */;

require = fn;
noopAll;
const createCacheKey = { position: "absolute", top: 4, right: 4, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.STATUS_POSITIVE_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: 4, paddingRight: 6, borderRadius: ThemesDefault.radii.sm, height: 16, backgroundColor: ThemesDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
createCacheKey[2] = { paddingLeft: 4, paddingRight: 6, borderRadius: ThemesDefault.radii.sm, height: 16, backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND };
createCacheKey[3] = Button.generateBoxShadowStyle(require("Button").FOUR_DP_ELEVATION_SHADOW_PARAMS);
createCacheKey[4] = { textTransform: "uppercase", marginLeft: 2, fontFamily: require("ME").Fonts.DISPLAY_EXTRABOLD, lineHeight: 16, fontSize: 12 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/activities/native/ActivityShelfBadge.tsx");

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
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t.y2b7CA);
    obj[1] = jsx(Text.Text, { variant: "text-xs/semibold", style: null, color: "text-overlay-light", children: null });
    let tmp6 = <View variant="text-xs/semibold" style={null} color="text-overlay-light">{null}</View>;
  } else {
    tmp6 = null;
    if (labelType === PermissionOverwriteType.EmbeddedActivityLabelTypes.UPDATED) {
      obj = { style: null, children: null };
      const items1 = [replacementStyles, , ];
      ({ updatedBadge: arr2[1], elevationShadow: arr2[2] } = tmp);
      obj[0] = items1;
      obj1 = { variant: "text-xs/semibold", style: null, color: "text-overlay-light", children: null };
      obj1[1] = tmp.badgeText;
      const intl2 = getSystemLocale.intl;
      obj1[3] = intl2.string(getSystemLocale.t["/qdhkk"]);
      obj[1] = jsx(Text.Text, { variant: "text-xs/semibold", style: null, color: "text-overlay-light", children: null });
      tmp6 = <View style={null}>{null}</View>;
    }
  }
  return tmp6;
};