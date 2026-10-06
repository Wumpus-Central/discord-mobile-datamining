// === Module 11724: ActivityShelfBadge ===

// Module 11724 (ActivityShelfBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import Server from "Server" /* 1985 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import native_mod from "native" /* 1188 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let native;
let obj2;
let obj3;
let rect;
const View = react_native.View;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { badge: rect, newBadge: obj2, updatedBadge: obj3, elevationShadow: native.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS), badgeText: { textTransform: "uppercase", marginLeft: 2, fontFamily: Fonts.DISPLAY_EXTRABOLD, lineHeight: 16, fontSize: 12 } };
rect = { position: "absolute", top: 4, right: 4, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
createStyles = createStyles.createStyles;
obj2 = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
obj3 = { paddingLeft: 4, paddingRight: 6, borderRadius: nativeDefault.radii.sm, height: 16, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
native = native_mod;
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let labelType;
  let replacementStyles;
  const obj = react2;
  const cResult = obj.c(20);
  ({ labelType, replacementStyles } = arg0);
  const tmp4 = closure_4();
  if (replacementStyles == null) {
    replacementStyles = tmp4.badge;
  }
  if (labelType === Server.EmbeddedActivityLabelTypes.NEW) {
    if (cResult[0] === replacementStyles) {
      if (cResult[1] === tmp4.elevationShadow) {
        let tmp16;
        let tmp18;
        let tmp20;
        if (cResult[2] === tmp4.newBadge) {
          tmp16 = cResult[3];
        }
        const _Symbol2 = Symbol;
        const badgeText2 = tmp4.badgeText;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl3.intl;
          const stringResult = intl2.string(intl3.t.y2b7CA);
          cResult[4] = stringResult;
          tmp18 = stringResult;
        } else {
          tmp18 = cResult[4];
        }
        if (cResult[5] !== tmp4.badgeText) {
          const tmp22 = jsx(Text_Text.Text, { variant: "text-xs/semibold", style: badgeText2, color: "text-overlay-light", children: tmp18 });
          cResult[5] = tmp4.badgeText;
          cResult[6] = tmp22;
          tmp20 = tmp22;
        } else {
          tmp20 = cResult[6];
        }
        if (cResult[7] === tmp16) {
          let tmp23;
          if (cResult[8] === tmp20) {
            tmp23 = cResult[9];
          }
          return tmp23;
        }
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
        let tmp5;
        let tmp7;
        let tmp9;
        if (cResult[12] === tmp4.updatedBadge) {
          tmp5 = cResult[13];
        }
        const _Symbol = Symbol;
        const badgeText = tmp4.badgeText;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult1 = intl.string(intl3.t["/qdhkk"]);
          cResult[14] = stringResult1;
          tmp7 = stringResult1;
        } else {
          tmp7 = cResult[14];
        }
        if (cResult[15] !== tmp4.badgeText) {
          const tmp11 = jsx(Text_Text.Text, { variant: "text-xs/semibold", style: badgeText, color: "text-overlay-light", children: tmp7 });
          cResult[15] = tmp4.badgeText;
          cResult[16] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[16];
        }
        if (cResult[17] === tmp5) {
          let tmp12;
          if (cResult[18] === tmp9) {
            tmp12 = cResult[19];
          }
          return tmp12;
        }
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
  let intl;
  let intl2;
  let labelType;
  let replacementStyles;
  let tmp6;
  ({ labelType, replacementStyles } = arg0);
  const tmp = closure_4();
  if (replacementStyles == null) {
    replacementStyles = tmp.badge;
  }
  if (labelType === Server.EmbeddedActivityLabelTypes.NEW) {
    const items = [replacementStyles, , ];
    ({ newBadge: arr[1], elevationShadow: arr[2] } = tmp);
    ({ variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: intl.string(intl3.t.y2b7CA) });
    const Text = Text_Text.Text;
    intl = intl3.intl;
    tmp6 = <View style={items}>{null}</View>;
  } else {
    tmp6 = null;
    if (labelType === Server.EmbeddedActivityLabelTypes.UPDATED) {
      const items1 = [replacementStyles, , ];
      ({ updatedBadge: arr2[1], elevationShadow: arr2[2] } = tmp);
      ({ variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light", children: intl2.string(intl3.t["/qdhkk"]) });
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      tmp6 = <View style={items1}>{null}</View>;
    }
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/activities/native/ActivityShelfBadge.tsx");

export default tmp4;