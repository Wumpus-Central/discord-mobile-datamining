// === Module 13309: PremiumGroupFeaturesTableCard ===

// Module 13309 (PremiumGroupFeaturesTableCard)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import Text_Text from "Text/Text" /* 4892 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import ColorConstants from "ColorConstants" /* 6951 */;
import PremiumGroupWordmarkDefault from "PremiumGroupWordmark" /* 8915 */;
import usePremiumGroupFeaturesTableCardTextDefault from "usePremiumGroupFeaturesTableCardText" /* 13310 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const Gradients = ColorConstants.Gradients;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { premiumGroupCard: { padding: 16, borderRadius: nativeDefault.radii.sm - 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "flex-start" }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 4 }, betaPill: null, betaText: null, title: null, description: null };
let obj2 = { padding: 16, borderRadius: nativeDefault.radii.sm - 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "flex-start" };
obj.betaPill = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingBottom: 2 };
let obj3 = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingBottom: 2 };
obj.betaText = { color: nativeDefault.colors.BLACK, textAlign: "center", textTransform: "uppercase" };
let obj4 = { color: nativeDefault.colors.BLACK, textAlign: "center", textTransform: "uppercase" };
obj.title = { color: nativeDefault.colors.TEXT_DEFAULT, marginBottom: 16 };
let obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, marginBottom: 16 };
obj.description = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const tmp4 = closure_7();
  ({ betaPill, betaText } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.oW0eUd);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.betaText) {
    const obj2 = { variant: "text-xs/bold", style: betaText, children: first };
    const tmp9 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[1] = tmp4.betaText;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.betaPill) {
    if (cResult[4] === tmp7) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = hasOwnProperty(View, { style: betaPill, children: tmp7 });
  cResult[3] = tmp4.betaPill;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  const tmp = closure_7();
  const obj = { style: tmp.betaPill, children: null };
  const obj2 = { variant: "text-xs/bold", style: tmp.betaText, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.oW0eUd);
  obj.children = hasOwnProperty(Text_Text.Text, obj2);
  return hasOwnProperty(View, obj);
});
let closure_8 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
let obj6 = { color: nativeDefault.colors.TEXT_DEFAULT };
const result = size.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupFeaturesTableCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(22);
  style = style.style;
  const tmp4 = closure_7();
  const tmp6 = usePremiumGroupFeaturesTableCardTextDefault(style.premiumGroupRole, false);
  if (null == tmp6) {
    return null;
  } else {
    ({ subheaderString, bodyString } = tmp6);
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0 };
      const point1 = { x: 1, y: 0 };
      const items = [ColorUtils.hexWithOpacity("#8547C6", 0.15), , ];
      const tmpResult = ColorUtils;
      items[1] = ColorUtils.hexWithOpacity("#B845C1", 0.15);
      const tmpResult3 = ColorUtils;
      items[2] = ColorUtils.hexWithOpacity("#AB5D8A", 0.15);
      const items1 = [0, 0.4996, 0.9593];
      cResult[0] = point;
      cResult[1] = point1;
      cResult[2] = items;
      cResult[3] = items1;
      tmp10 = items1;
      tmp7 = point;
      tmp8 = point1;
      tmp9 = items;
      const tmpResult4 = ColorUtils;
    } else {
      [tmp7, tmp8, tmp9, tmp10] = cResult;
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp14 = hasOwnProperty(PremiumGroupWordmarkDefault, { width: 181, height: 16 });
      const tmp16 = hasOwnProperty(closure_8, {});
      cResult[4] = tmp14;
      cResult[5] = tmp16;
      let tmp12 = tmp16;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[4];
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp4.headerContainer) {
      const obj2 = { style: tmp4.headerContainer, children: null };
      const items2 = [tmp11, tmp12];
      obj2.children = items2;
      const tmp20 = timestampProducer(View, obj2);
      cResult[6] = tmp4.headerContainer;
      cResult[7] = tmp20;
      let tmp17 = tmp20;
    } else {
      tmp17 = cResult[7];
    }
    if (cResult[8] === tmp4.title) {
      if (cResult[9] === subheaderString) {
        let tmp21 = cResult[10];
      }
      if (cResult[11] === bodyString) {
        if (cResult[12] === tmp4.description) {
          let tmp24 = cResult[13];
        }
        if (cResult[14] === tmp4.premiumGroupCard) {
          if (cResult[15] === tmp17) {
            if (cResult[16] === tmp21) {
              if (cResult[17] === tmp24) {
                let tmp27 = cResult[18];
              }
              if (cResult[19] === style) {
                if (cResult[20] === tmp27) {
                  let tmp30 = cResult[21];
                }
                return tmp30;
              }
              const obj3 = { borderWidth: 2, direction: native.GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: nativeDefault.radii.sm, style, children: tmp27 };
              const tmp33 = hasOwnProperty(native.GradientBorder, obj3);
              cResult[19] = style;
              cResult[20] = tmp27;
              cResult[21] = tmp33;
              tmp30 = tmp33;
            }
          }
        }
        const obj4 = { start: tmp7, end: tmp8, colors: tmp9, locations: tmp10, style: tmp4.premiumGroupCard, children: null };
        const items3 = [tmp17, tmp21, tmp24];
        obj4.children = items3;
        const tmp29 = timestampProducer(LinearGradientDefault, obj4);
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
  ({ style, premiumGroupRole } = arg0);
  const tmp = closure_7();
  const tmp4 = usePremiumGroupFeaturesTableCardTextDefault(premiumGroupRole, false);
  if (null == tmp4) {
    return null;
  } else {
    ({ subheaderString, bodyString } = tmp4);
    const obj = { borderWidth: 2, direction: native.GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: nativeDefault.radii.sm, style, children: null };
    const obj2 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: null, locations: null, style: null, children: null };
    const tmp2Result = LinearGradientDefault;
    const items = [ColorUtils.hexWithOpacity("#8547C6", 0.15), , ];
    items[1] = ColorUtils.hexWithOpacity("#B845C1", 0.15);
    items[2] = ColorUtils.hexWithOpacity("#AB5D8A", 0.15);
    obj2.colors = items;
    obj2.locations = [0, 0.4996, 0.9593];
    obj2.style = tmp.premiumGroupCard;
    const obj6 = { style: tmp.headerContainer, children: null };
    const items1 = [hasOwnProperty(PremiumGroupWordmarkDefault, { width: 181, height: 16 }), hasOwnProperty(closure_8, {})];
    obj6.children = items1;
    const items2 = [timestampProducer(View, obj6), , ];
    const obj7 = { variant: "text-sm/normal", style: tmp.title, children: subheaderString };
    items2[1] = hasOwnProperty(Text_Text.Text, obj7);
    const obj8 = { variant: "text-sm/normal", style: tmp.description, children: bodyString };
    items2[2] = hasOwnProperty(Text_Text.Text, obj8);
    obj2.children = items2;
    obj.children = timestampProducer(tmp2Result, obj2);
    return hasOwnProperty(native.GradientBorder, obj);
  }
});
export const BetaPill = tmp3;