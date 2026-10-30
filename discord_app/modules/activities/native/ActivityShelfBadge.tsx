// === Module 12236: ActivityShelfBadge ===

// Module 12236 (ActivityShelfBadge)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import Server from "Server" /* 1993 */;
import Text_Text from "Text/Text" /* 5619 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { badge: null, newBadge: null, updatedBadge: null, elevationShadow: null, badgeText: null };
const rect = { position: "absolute", top: 4, right: 4, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
obj2.badge = rect;
obj2.newBadge = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
let obj3 = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
obj2.updatedBadge = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND };
const native = fn(1188);
obj2.elevationShadow = native.generateBoxShadowStyle(fn(1188).FOUR_DP_ELEVATION_SHADOW_PARAMS);
obj2.badgeText = { textTransform: "uppercase", marginLeft: 2, fontFamily: fn(1072).Fonts.DISPLAY_EXTRABOLD, lineHeight: 16, fontSize: 12 };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivityShelfBadge.tsx");

export default function ActivityShelfBadge(arg0) {
  ({ labelType, replacementStyles } = arg0);
  const tmp = closure_4();
  if (replacementStyles == null) {
    replacementStyles = tmp.badge;
  }
  if (labelType === Server.EmbeddedActivityLabelTypes.NEW) {
    const obj = { style: null, children: null };
    const items = [replacementStyles, , ];
    ({ newBadge: arr[1], elevationShadow: arr[2] } = tmp);
    obj.style = items;
    const obj2 = { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.y2b7CA);
    obj.children = jsx(Text_Text.Text, { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null });
    let tmp6 = <View style={null}>{null}</View>;
  } else {
    tmp6 = null;
    if (labelType === Server.EmbeddedActivityLabelTypes.UPDATED) {
      const obj3 = { style: null, children: null };
      const items1 = [replacementStyles, , ];
      ({ updatedBadge: arr2[1], elevationShadow: arr2[2] } = tmp);
      obj3.style = items1;
      const obj4 = { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(util.t["/qdhkk"]);
      obj3.children = jsx(Text_Text.Text, { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: null });
      tmp6 = <View style={null}>{null}</View>;
    }
  }
  return tmp6;
};