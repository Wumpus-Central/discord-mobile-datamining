// === Module 12086: ActivityShelfBadge ===

// Module 12086 (ActivityShelfBadge)
import nativeDefault from "native" /* 576 */;
import Server from "Server" /* 1894 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { badge: null, newBadge: null, updatedBadge: null, elevationShadow: null, badgeText: null };
const rect = { position: "absolute", top: 4, right: 4, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
createStyles.badge = rect;
createStyles = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
createStyles.newBadge = createStyles;
createStyles.updatedBadge = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
const native = fn(1178);
createStyles.elevationShadow = native.generateBoxShadowStyle(fn(1178).FOUR_DP_ELEVATION_SHADOW_PARAMS);
createStyles.badgeText = { textTransform: "uppercase", marginLeft: 2, fontFamily: fn(1074).Fonts.DISPLAY_EXTRABOLD, lineHeight: 16, fontSize: 12 };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivityShelfBadge.tsx");

export default function ActivityShelfBadge(arg0) {
  ({ labelType, replacementStyles } = arg0);
  const tmp = closure_4();
  if (replacementStyles == null) {
    replacementStyles = tmp.badge;
  }
  if (labelType === Server.EmbeddedActivityLabelTypes.NEW) {
    let obj = { style: null, children: null };
    const items = [replacementStyles, , ];
    ({ newBadge: arr[1], elevationShadow: arr[2] } = tmp);
    obj.style = items;
    obj = { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null };
    const intl = tmp2(1114).intl;
    obj.children = intl.string(tmp2(1114).t.y2b7CA);
    obj.children = jsx(tmp2(4556).Text, { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null });
    let tmp6 = <View variant="text-xs/semibold" style={tmp.badgeText} color="text-overlay-light">{null}</View>;
  } else {
    tmp6 = null;
    if (labelType === tmp2(1894).EmbeddedActivityLabelTypes.UPDATED) {
      obj = { style: null, children: null };
      const items1 = [replacementStyles, , ];
      ({ updatedBadge: arr2[1], elevationShadow: arr2[2] } = tmp);
      obj.style = items1;
      const obj1 = { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null };
      const intl2 = tmp2(1114).intl;
      obj1.children = intl2.string(tmp2(1114).t["/qdhkk"]);
      obj.children = jsx(tmp2(4556).Text, { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null });
      tmp6 = <View style={null}>{null}</View>;
    }
  }
  return tmp6;
};