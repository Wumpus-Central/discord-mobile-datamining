// === Module 13290: PremiumGroupFeaturesTableCard ===

// Module 13290 (PremiumGroupFeaturesTableCard)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import Text_Text from "Text/Text" /* 4886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import ColorConstants from "ColorConstants" /* 6938 */;
import PremiumGroupWordmarkDefault from "PremiumGroupWordmark" /* 8886 */;
import usePremiumGroupFeaturesTableCardTextDefault from "usePremiumGroupFeaturesTableCardText" /* 13291 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
const Gradients = ColorConstants.Gradients;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { premiumGroupCard: obj2, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 4 }, betaPill: obj3, betaText: obj4, title: obj5, description: obj6 };
obj2 = { padding: 16, borderRadius: nativeDefault.radii.sm - 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "flex-start" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingBottom: 2 };
obj4 = { color: nativeDefault.colors.BLACK, textAlign: "center", textTransform: "uppercase" };
obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, marginBottom: 16 };
obj6 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let betaPill;
  let betaText;
  let first;
  let tmp7;
  const obj = react;
  const cResult = obj.c(6);
  const tmp4 = closure_7();
  ({ betaPill, betaText } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.oW0eUd);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.betaText) {
    const obj2 = { variant: "text-xs/bold", style: betaText, children: first };
    const tmp9 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[1] = tmp4.betaText;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.betaPill) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = hasOwnProperty(View, { style: betaPill, children: tmp7 });
  cResult[3] = tmp4.betaPill;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_7();
  const obj = { style: tmp.betaPill, children: hasOwnProperty(Text, obj2) };
  obj2 = { variant: "text-xs/bold", style: tmp.betaText, children: intl.string(intl2.t.oW0eUd) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return hasOwnProperty(View, obj);
});
let closure_8 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let bodyString;
  let items2;
  let items3;
  let subheaderString;
  let tmp10;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(22);
  style = style.style;
  const premiumGroupRole = style.premiumGroupRole;
  const tmp4 = closure_7();
  const tmp6 = usePremiumGroupFeaturesTableCardTextDefault(premiumGroupRole, false);
  if (null == tmp6) {
    return null;
  } else {
    let tmp12;
    let tmp11;
    let tmp17;
    ({ subheaderString, bodyString } = tmp6);
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0 };
      const point1 = { x: 1, y: 0 };
      const items = [, , ];
      const tmpResult = ColorUtils;
      items[0] = tmpResult.hexWithOpacity("#8547C6", 0.15);
      const tmpResult3 = ColorUtils;
      items[1] = tmpResult3.hexWithOpacity("#B845C1", 0.15);
      const tmpResult4 = ColorUtils;
      items[2] = tmpResult4.hexWithOpacity("#AB5D8A", 0.15);
      const items1 = [0, 0.4996, 0.9593];
      cResult[0] = point;
      cResult[1] = point1;
      cResult[2] = items;
      cResult[3] = items1;
      tmp10 = items1;
      tmp7 = point;
      tmp8 = point1;
      tmp9 = items;
    } else {
      [tmp7, tmp8, tmp9, tmp10] = cResult;
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp14 = hasOwnProperty(PremiumGroupWordmarkDefault, { width: 181, height: 16 });
      const tmp16 = hasOwnProperty(closure_8, {});
      cResult[4] = tmp14;
      cResult[5] = tmp16;
      tmp12 = tmp16;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[4];
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp4.headerContainer) {
      const obj2 = { style: tmp4.headerContainer, children: items2 };
      items2 = [tmp11, tmp12];
      const tmp20 = metroRequire(View, obj2);
      cResult[6] = tmp4.headerContainer;
      cResult[7] = tmp20;
      tmp17 = tmp20;
    } else {
      tmp17 = cResult[7];
    }
    if (cResult[8] === tmp4.title) {
      let tmp21;
      if (cResult[9] === subheaderString) {
        tmp21 = cResult[10];
      }
      if (cResult[11] === bodyString) {
        let tmp24;
        if (cResult[12] === tmp4.description) {
          tmp24 = cResult[13];
        }
        if (cResult[14] === tmp4.premiumGroupCard) {
          if (cResult[15] === tmp17) {
            if (cResult[16] === tmp21) {
              let tmp27;
              if (cResult[17] === tmp24) {
                tmp27 = cResult[18];
              }
              if (cResult[19] === style) {
                let tmp30;
                if (cResult[20] === tmp27) {
                  tmp30 = cResult[21];
                }
                return tmp30;
              }
              const obj3 = { borderWidth: 2, direction: native.GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: nativeDefault.radii.sm, style, children: tmp27 };
              const GradientBorder = native.GradientBorder;
              const tmp33 = hasOwnProperty(GradientBorder, obj3);
              cResult[19] = style;
              cResult[20] = tmp27;
              cResult[21] = tmp33;
              tmp30 = tmp33;
            }
          }
        }
        const obj4 = { start: tmp7, end: tmp8, colors: tmp9, locations: tmp10, style: tmp4.premiumGroupCard, children: items3 };
        items3 = [tmp17, tmp21, tmp24];
        const tmp29 = metroRequire(LinearGradientDefault, obj4);
        cResult[14] = tmp4.premiumGroupCard;
        cResult[15] = tmp17;
        cResult[16] = tmp21;
        cResult[17] = tmp24;
        cResult[18] = tmp29;
        tmp27 = tmp29;
      }
      const obj5 = { variant: "text-sm/normal", style: tmp4.description, children: bodyString };
      const tmp26 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[11] = bodyString;
      cResult[12] = tmp4.description;
      cResult[13] = tmp26;
      tmp24 = tmp26;
    }
    const obj6 = { variant: "text-sm/normal", style: tmp4.title, children: subheaderString };
    const tmp23 = hasOwnProperty(Text_Text.Text, obj6);
    cResult[8] = tmp4.title;
    cResult[9] = subheaderString;
    cResult[10] = tmp23;
    tmp21 = tmp23;
  }
}) : ((arg0) => {
  let bodyString;
  let items;
  let items1;
  let items2;
  let obj2;
  let premiumGroupRole;
  let style;
  let subheaderString;
  let tmp2Result;
  ({ style, premiumGroupRole } = arg0);
  const tmp = closure_7();
  const tmp4 = usePremiumGroupFeaturesTableCardTextDefault(premiumGroupRole, false);
  if (null == tmp4) {
    return null;
  } else {
    ({ subheaderString, bodyString } = tmp4);
    const obj = { borderWidth: 2, direction: native.GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: nativeDefault.radii.sm, style, children: metroRequire(tmp2Result, obj2) };
    const GradientBorder = native.GradientBorder;
    obj2 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: items, locations: [0, 0.4996, 0.9593], style: tmp.premiumGroupCard, children: items2 };
    items = [, , ];
    tmp2Result = LinearGradientDefault;
    const obj3 = ColorUtils;
    items[0] = obj3.hexWithOpacity("#8547C6", 0.15);
    const obj4 = ColorUtils;
    items[1] = obj4.hexWithOpacity("#B845C1", 0.15);
    const obj5 = ColorUtils;
    items[2] = obj5.hexWithOpacity("#AB5D8A", 0.15);
    const obj6 = { style: tmp.headerContainer, children: items1 };
    items1 = [hasOwnProperty(PremiumGroupWordmarkDefault, { width: 181, height: 16 }), hasOwnProperty(closure_8, {})];
    items2 = [metroRequire(View, obj6), , ];
    const obj7 = { variant: "text-sm/normal", style: tmp.title, children: subheaderString };
    items2[1] = hasOwnProperty(Text_Text.Text, obj7);
    const obj8 = { variant: "text-sm/normal", style: tmp.description, children: bodyString };
    items2[2] = hasOwnProperty(Text_Text.Text, obj8);
    return hasOwnProperty(GradientBorder, obj);
  }
});
const result = size.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupFeaturesTableCard.tsx");

export default tmp5;
export const BetaPill = tmp4;