// === Module 14856: BountiesScrollRecapFooter ===

// Module 14856 (BountiesScrollRecapFooter)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import BountiesScrollGradientRive2 from "BountiesScrollGradientRive" /* 4662 */;
import Text_Text from "Text/Text" /* 4886 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6469 */;
import OrbsIcon from "OrbsIcon" /* 8491 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let orbAmount;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => {
  let num;
  const obj = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 }, headerLabel: { textTransform: "uppercase" }, orbRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, rive: { flex: 1, width: "100%" }, orbAmount: { marginTop: num } };
  ({ flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  num = 0;
  const obj4 = PlatformUtils;
  if (obj4.isIOS()) {
    num = 6;
  }
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((orbAmount) => {
  let first;
  let items;
  let items1;
  const obj = react2;
  const cResult = obj.c(19);
  orbAmount = orbAmount.orbAmount;
  const tmp4 = closure_7();
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("BountiesScrollRecapFooter", "text-xs/bold");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.d6Rrn6);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  const combined = "" + first + ", +" + orbAmount;
  if (cResult[1] === typeConsolidationEyebrow.style) {
    let tmp9;
    if (cResult[2] === tmp4.headerLabel) {
      tmp9 = cResult[3];
    }
    if (cResult[4] === typeConsolidationEyebrow.variant) {
      let tmp10;
      let tmp13;
      if (cResult[5] === tmp9) {
        tmp10 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false });
        cResult[7] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      const _HermesInternal = HermesInternal;
      const combined1 = "+" + orbAmount;
      if (cResult[8] === tmp4.orbAmount) {
        let tmp17;
        if (cResult[9] === combined1) {
          tmp17 = cResult[10];
        }
        if (cResult[11] === tmp4.orbRow) {
          let tmp20;
          if (cResult[12] === tmp17) {
            tmp20 = cResult[13];
          }
          if (cResult[14] === tmp4.container) {
            if (cResult[15] === combined) {
              if (cResult[16] === tmp10) {
                let tmp24;
                if (cResult[17] === tmp20) {
                  tmp24 = cResult[18];
                }
                return tmp24;
              }
            }
          }
          const obj3 = { style: tmp4.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: combined, children: items };
          items = [tmp10, tmp20];
          const tmp27 = metroRequire(View, obj3);
          cResult[14] = tmp4.container;
          cResult[15] = combined;
          cResult[16] = tmp10;
          cResult[17] = tmp20;
          cResult[18] = tmp27;
          tmp24 = tmp27;
        }
        const obj4 = { style: tmp4.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: items1 };
        items1 = [tmp13, tmp17];
        const tmp23 = metroRequire(View, obj4);
        cResult[11] = tmp4.orbRow;
        cResult[12] = tmp17;
        cResult[13] = tmp23;
        tmp20 = tmp23;
      }
      const obj5 = { variant: "display-sm", color: "text-strong", accessible: false, style: tmp4.orbAmount, children: combined1 };
      const tmp19 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[8] = tmp4.orbAmount;
      cResult[9] = combined1;
      cResult[10] = tmp19;
      tmp17 = tmp19;
    }
    const obj6 = { variant: typeConsolidationEyebrow.variant, color: "text-brand", style: tmp9, accessible: false, children: first };
    const tmp12 = hasOwnProperty(Text_Text.Text, obj6);
    cResult[4] = typeConsolidationEyebrow.variant;
    cResult[5] = tmp9;
    cResult[6] = tmp12;
    tmp10 = tmp12;
  }
  const items2 = [tmp4.headerLabel, typeConsolidationEyebrow.style];
  cResult[1] = typeConsolidationEyebrow.style;
  cResult[2] = tmp4.headerLabel;
  cResult[3] = items2;
  tmp9 = items2;
}) : ((orbAmount) => {
  let items;
  let items1;
  let items2;
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_7();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("BountiesScrollRecapFooter", "text-xs/bold");
  const intl = intl2.intl;
  const stringResult = intl.string(intl2.t.d6Rrn6);
  const obj3 = { variant: typeConsolidationEyebrow.variant, color: "text-brand", style: items, accessible: false, children: stringResult };
  items = [tmp.headerLabel, typeConsolidationEyebrow.style];
  const obj2 = { style: tmp.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: "" + stringResult + ", +" + orbAmount, children: items1 };
  items1 = [hasOwnProperty(Text_Text.Text, obj3), ];
  const obj4 = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: items2 };
  items2 = [hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }), ];
  const obj5 = { variant: "display-sm", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  const Text = Text_Text.Text;
  items2[1] = hasOwnProperty(Text, obj5);
  items1[1] = metroRequire(View, obj4);
  return metroRequire(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  let tmp6;
  let tmp8;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let str = "play";
  const tmpResult = get_initialized;
  if (tmpResult.useStateFromStores(tmp5, tmp6)) {
    str = "halt";
  }
  if (cResult[2] !== str) {
    const obj2 = { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str };
    const tmp10 = hasOwnProperty(BountiesScrollGradientRive2.BountiesScrollGradientRive, obj2);
    cResult[2] = str;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp4.rive) {
    let tmp11;
    if (cResult[5] === tmp8) {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const obj3 = { style: tmp4.rive, children: tmp8 };
  const tmp12 = hasOwnProperty(View, obj3);
  cResult[4] = tmp4.rive;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : (() => {
  let BountiesScrollGradientRive;
  let str;
  let useReducedMotion;
  const items = [AccessibilityStore];
  const tmp = closure_7();
  const obj2 = { style: tmp.rive, children: hasOwnProperty(BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str }) };
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  str = "play";
  BountiesScrollGradientRive = BountiesScrollGradientRive2.BountiesScrollGradientRive;
  if (stateFromStores) {
    str = "halt";
  }
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx");

export const BountiesScrollRecapFooter = tmp4;
export const BountiesScrollRecapFooterGradient = tmp5;