// === Module 14856: BountiesScrollRecapFooter ===

// Module 14856 (BountiesScrollRecapFooter)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import BountiesScrollGradientRive from "BountiesScrollGradientRive" /* 4662 */;
import Text_Text from "Text/Text" /* 4886 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6469 */;
import OrbsIcon from "OrbsIcon" /* 8491 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles(() => {
  const obj = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 }, headerLabel: { textTransform: "uppercase" }, orbRow: null, rive: null, orbAmount: null };
  const obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 };
  obj.orbRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.rive = { flex: 1, width: "100%" };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  let num = 0;
  if (obj4.isIOS()) {
    num = 6;
  }
  obj.orbAmount = { marginTop: num };
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((orbAmount) => {
  const cResult = c.c(19);
  orbAmount = orbAmount.orbAmount;
  const tmp4 = closure_7();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("BountiesScrollRecapFooter", "text-xs/bold");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.d6Rrn6);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  const combined = "" + first + ", +" + orbAmount;
  if (cResult[1] === typeConsolidationEyebrow.style) {
    if (cResult[2] === tmp4.headerLabel) {
      let tmp9 = cResult[3];
    }
    if (cResult[4] === typeConsolidationEyebrow.variant) {
      if (cResult[5] === tmp9) {
        let tmp10 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false });
        cResult[7] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      const _HermesInternal = HermesInternal;
      const combined1 = "+" + orbAmount;
      if (cResult[8] === tmp4.orbAmount) {
        if (cResult[9] === combined1) {
          let tmp17 = cResult[10];
        }
        if (cResult[11] === tmp4.orbRow) {
          if (cResult[12] === tmp17) {
            let tmp20 = cResult[13];
          }
          if (cResult[14] === tmp4.container) {
            if (cResult[15] === combined) {
              if (cResult[16] === tmp10) {
                if (cResult[17] === tmp20) {
                  let tmp24 = cResult[18];
                }
                return tmp24;
              }
            }
          }
          const obj3 = { style: tmp4.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: combined, children: null };
          const items = [tmp10, tmp20];
          obj3.children = items;
          const tmp27 = timestampProducer(View, obj3);
          cResult[14] = tmp4.container;
          cResult[15] = combined;
          cResult[16] = tmp10;
          cResult[17] = tmp20;
          cResult[18] = tmp27;
          tmp24 = tmp27;
        }
        const obj4 = { style: tmp4.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
        const items1 = [tmp13, tmp17];
        obj4.children = items1;
        const tmp23 = timestampProducer(View, obj4);
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
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_7();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("BountiesScrollRecapFooter", "text-xs/bold");
  const intl = util.intl;
  const stringResult = intl.string(util.t.d6Rrn6);
  const obj2 = { style: tmp.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: "" + stringResult + ", +" + orbAmount, children: null };
  const obj3 = { variant: typeConsolidationEyebrow.variant, color: "text-brand", style: null, accessible: false, children: stringResult };
  const items = [tmp.headerLabel, typeConsolidationEyebrow.style];
  obj3.style = items;
  const items1 = [hasOwnProperty(Text_Text.Text, obj3), ];
  const obj4 = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items2 = [hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }), ];
  items2[1] = hasOwnProperty(Text_Text.Text, { variant: "display-sm", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount });
  obj4.children = items2;
  items1[1] = timestampProducer(View, obj4);
  obj2.children = items1;
  return timestampProducer(View, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx");

export const BountiesScrollRecapFooter = tmp4;
export const BountiesScrollRecapFooterGradient = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
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
  if (tmpResult.useStateFromStores(tmp5, tmp6)) {
    str = "halt";
  }
  if (cResult[2] !== str) {
    const obj2 = { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str };
    const tmp10 = hasOwnProperty(BountiesScrollGradientRive.BountiesScrollGradientRive, obj2);
    cResult[2] = str;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp4.rive) {
    if (cResult[5] === tmp8) {
      let tmp11 = cResult[6];
    }
    return tmp11;
  }
  const tmp12 = hasOwnProperty(View, { style: tmp4.rive, children: tmp8 });
  cResult[4] = tmp4.rive;
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  const obj3 = { style: tmp4.rive, children: tmp8 };
  tmpResult = initialize;
}) : (() => {
  const tmp = closure_7();
  const items = [AccessibilityStore];
  const obj2 = { style: tmp.rive, children: null };
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj2.children = hasOwnProperty(BountiesScrollGradientRive.BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str });
  return hasOwnProperty(View, obj2);
});