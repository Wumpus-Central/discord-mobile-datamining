// === Module 11724: ActivityShelfBadge ===

// Module 11724 (ActivityShelfBadge)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Server from "Server" /* 1985 */;
import Text_Text from "Text/Text" /* 4892 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { badge: null, newBadge: null, updatedBadge: null, elevationShadow: null, badgeText: null };
const rect = { position: "absolute", top: 4, right: 4, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
obj2.badge = rect;
obj2.newBadge = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
let obj3 = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
obj2.updatedBadge = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
const native = fn(1188);
obj2.elevationShadow = native.generateBoxShadowStyle(fn(1188).FOUR_DP_ELEVATION_SHADOW_PARAMS);
obj2.badgeText = { textTransform: "uppercase", marginLeft: 2, fontFamily: fn(1085).Fonts.DISPLAY_EXTRABOLD, lineHeight: 16, fontSize: 12 };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivityShelfBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ labelType, replacementStyles } = arg0);
  const tmp4 = closure_4();
  if (replacementStyles == null) {
    replacementStyles = tmp4.badge;
  }
  if (labelType === Server.EmbeddedActivityLabelTypes.NEW) {
    if (cResult[0] === replacementStyles) {
      if (cResult[1] === tmp4.elevationShadow) {
        if (cResult[2] === tmp4.newBadge) {
          let tmp16 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult = intl2.string(util.t.y2b7CA);
          cResult[4] = stringResult;
          let tmp18 = stringResult;
        } else {
          tmp18 = cResult[4];
        }
        if (cResult[5] !== tmp4.badgeText) {
          const obj2 = { variant: "text-xs/semibold", style: tmp4.badgeText, color: "text-overlay-light", children: tmp18 };
          const tmp22 = jsx(Text_Text.Text, { variant: "text-xs/semibold", style: tmp4.badgeText, color: "text-overlay-light", children: tmp18 });
          cResult[5] = tmp4.badgeText;
          cResult[6] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[6];
        }
        if (cResult[7] === tmp16) {
          if (cResult[8] === tmp20) {
            let tmp23 = cResult[9];
          }
          return tmp23;
        }
        const obj3 = { style: tmp16, children: tmp20 };
        const tmp26 = <View style={tmp16}>{tmp20}</View>;
        cResult[7] = tmp16;
        cResult[8] = tmp20;
        cResult[9] = tmp26;
        tmp23 = tmp26;
      }
    }
    const items = [replacementStyles, , ];
    ({ newBadge: arr2[1], elevationShadow: arr2[2] } = tmp4);
    cResult[0] = replacementStyles;
    cResult[1] = tmp4.elevationShadow;
    cResult[2] = tmp4.newBadge;
    cResult[3] = items;
    tmp16 = items;
  } else if (labelType === Server.EmbeddedActivityLabelTypes.UPDATED) {
    if (cResult[10] === replacementStyles) {
      if (cResult[11] === tmp4.elevationShadow) {
        if (cResult[12] === tmp4.updatedBadge) {
          let tmp5 = cResult[13];
        }
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult1 = intl.string(util.t["/qdhkk"]);
          cResult[14] = stringResult1;
          let tmp7 = stringResult1;
        } else {
          tmp7 = cResult[14];
        }
        if (cResult[15] !== tmp4.badgeText) {
          const obj4 = { variant: "text-xs/semibold", style: tmp4.badgeText, color: "text-overlay-light", children: tmp7 };
          const tmp11 = jsx(Text_Text.Text, { variant: "text-xs/semibold", style: tmp4.badgeText, color: "text-overlay-light", children: tmp7 });
          cResult[15] = tmp4.badgeText;
          cResult[16] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[16];
        }
        if (cResult[17] === tmp5) {
          if (cResult[18] === tmp9) {
            let tmp12 = cResult[19];
          }
          return tmp12;
        }
        const obj5 = { style: tmp5, children: tmp9 };
        const tmp15 = <View style={tmp5}>{tmp9}</View>;
        cResult[17] = tmp5;
        cResult[18] = tmp9;
        cResult[19] = tmp15;
        tmp12 = tmp15;
      }
    }
    const items1 = [replacementStyles, , ];
    ({ updatedBadge: arr[1], elevationShadow: arr[2] } = tmp4);
    cResult[10] = replacementStyles;
    cResult[11] = tmp4.elevationShadow;
    cResult[12] = tmp4.updatedBadge;
    cResult[13] = items1;
    tmp5 = items1;
  } else {
    return null;
  }
}) : ((arg0) => {
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
});