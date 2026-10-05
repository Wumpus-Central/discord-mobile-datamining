// === Module 13322: BoostingCountDownPill ===

// Module 13322 (BoostingCountDownPill)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function handlePress() {
  let intl;
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  const obj = { aboutText: intl.string(intl2.t["07lzz7"]) };
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(13323, dependencyMap.paths);
  intl = intl2.intl;
  openLazy(tmp2, "NitroCreditEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { fractionalPremiumBanner: obj2, fpDurationPill: obj3, fpDurationText: { textAlign: "center", color: "#FFEAA0" }, fpUnavailable: { flex: 1, justifyContent: "center" }, fpUnavailableTextNoCountdown: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingVertical: 12, paddingHorizontal: 27, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.xxl, justifyContent: "center" };
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Text;
  let fpDurationText;
  let isInReverseTrial;
  let items;
  let obj7;
  let style;
  const obj = react;
  const cResult = obj.c(21);
  ({ fpDurationText, isInReverseTrial, style } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === style) {
    let tmp6;
    if (cResult[1] === tmp4.fractionalPremiumBanner) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === fpDurationText) {
      if (cResult[4] === isInReverseTrial) {
        if (cResult[5] === tmp4.fpDurationPill) {
          let tmp7;
          let tmp13;
          let tmp15;
          if (cResult[6] === tmp4.fpDurationText) {
            tmp7 = cResult[7];
          }
          let prop;
          const fpUnavailable = tmp4.fpUnavailable;
          if (isInReverseTrial) {
            prop = tmp4.fpUnavailableTextNoCountdown;
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl2.intl;
            const stringResult = intl.string(intl2.t["5nrJDO"]);
            cResult[8] = stringResult;
            tmp13 = stringResult;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] !== prop) {
            const obj2 = { variant: "text-md/normal", color: "interactive-text-active", style: prop, children: tmp13 };
            const tmp17 = hasOwnProperty(Text_Text.Text, obj2);
            cResult[9] = prop;
            cResult[10] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[10];
          }
          if (cResult[11] === tmp4.fpUnavailable) {
            let tmp18;
            if (cResult[12] === tmp15) {
              tmp18 = cResult[13];
            }
            if (cResult[14] === tmp6) {
              if (cResult[15] === tmp7) {
                let tmp22;
                if (cResult[16] === tmp18) {
                  tmp22 = cResult[17];
                }
                if (cResult[18] === handlePress) {
                  let tmp26;
                  if (cResult[19] === tmp22) {
                    tmp26 = cResult[20];
                  }
                  return tmp26;
                }
                const obj3 = { activeOpacity: 0.7, onPress: handlePress, children: tmp22 };
                const tmp29 = hasOwnProperty(_false, obj3);
                cResult[18] = handlePress;
                cResult[19] = tmp22;
                cResult[20] = tmp29;
                tmp26 = tmp29;
              }
            }
            const obj4 = { style: tmp6, children: items };
            items = [tmp7, tmp18];
            const tmp25 = metroRequire(React3, obj4);
            cResult[14] = tmp6;
            cResult[15] = tmp7;
            cResult[16] = tmp18;
            cResult[17] = tmp25;
            tmp22 = tmp25;
          }
          const obj5 = { style: fpUnavailable, children: tmp15 };
          const tmp21 = hasOwnProperty(React3, obj5);
          cResult[11] = tmp4.fpUnavailable;
          cResult[12] = tmp15;
          cResult[13] = tmp21;
          tmp18 = tmp21;
        }
      }
    }
    let tmp8 = !isInReverseTrial;
    if (tmp8) {
      const obj6 = { style: tmp4.fpDurationPill, children: hasOwnProperty(Text, obj7) };
      obj7 = { variant: "text-sm/bold", style: tmp4.fpDurationText, children: fpDurationText.toUpperCase() };
      Text = Text_Text.Text;
      tmp8 = hasOwnProperty(React3, obj6);
    }
    cResult[3] = fpDurationText;
    cResult[4] = isInReverseTrial;
    cResult[5] = tmp4.fpDurationPill;
    cResult[6] = tmp4.fpDurationText;
    cResult[7] = tmp8;
    tmp7 = tmp8;
  }
  const items1 = [tmp4.fractionalPremiumBanner, style];
  cResult[0] = style;
  cResult[1] = tmp4.fractionalPremiumBanner;
  cResult[2] = items1;
  tmp6 = items1;
}) : ((style) => {
  let Text;
  let Text2;
  let fpDurationText;
  let intl;
  let isInReverseTrial;
  let items;
  let items1;
  let obj2;
  let obj4;
  let obj6;
  ({ fpDurationText, isInReverseTrial } = style);
  style = style.style;
  const tmp = closure_7();
  let tmp4;
  if (!isInReverseTrial) {
    tmp4 = handlePress;
  }
  const obj = { activeOpacity: 0.7, onPress: tmp4, children: metroRequire(React3, obj2) };
  obj2 = { style: items, children: items1 };
  items = [tmp.fractionalPremiumBanner, style];
  let tmp2Result = !isInReverseTrial;
  if (tmp2Result) {
    const obj3 = { style: tmp.fpDurationPill, children: hasOwnProperty(Text, obj4) };
    obj4 = { variant: "text-sm/bold", style: tmp.fpDurationText, children: fpDurationText.toUpperCase() };
    Text = Text_Text.Text;
    tmp2Result = hasOwnProperty(React3, obj3);
  }
  items1 = [tmp2Result, ];
  let prop;
  const obj5 = { style: tmp.fpUnavailable, children: hasOwnProperty(Text2, obj6) };
  Text2 = Text_Text.Text;
  if (isInReverseTrial) {
    prop = tmp.fpUnavailableTextNoCountdown;
  }
  obj6 = { variant: "text-md/normal", color: "interactive-text-active", style: prop, children: intl.string(intl2.t["5nrJDO"]) };
  intl = intl2.intl;
  items1[1] = hasOwnProperty(React3, obj5);
  return hasOwnProperty(_false, obj);
});
const result = size.fileFinishedImporting("modules/premium/fractional/native/BoostingCountDownPill.tsx");

export default tmp5;