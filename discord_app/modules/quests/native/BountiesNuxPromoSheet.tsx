// === Module 15320: BountiesNuxPromoSheet ===

// Module 15320 (BountiesNuxPromoSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import PromoSheet from "PromoSheet" /* 10323 */;
import openBountiesNuxPromoSheet from "openBountiesNuxPromoSheet" /* 15319 */;
import BountiesPosterSpotIllustration from "BountiesPosterSpotIllustration" /* 15321 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { illustrationContainer: { paddingTop: nativeDefault.space.PX_12 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesNuxPromoSheet() {
  const cResult = c.c(9);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      ActionSheetActionCreatorsDefault.hideActionSheet(openBountiesNuxPromoSheet.PROMO_SHEET_KEY);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.DDpHZG);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.aC3Dwj);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    let tmp7 = stringResult1;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 });
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.illustrationContainer) {
    const obj2 = { style: tmp4.illustrationContainer, children: tmp10 };
    const tmp16 = <View style={tmp4.illustrationContainer}>{tmp10}</View>;
    cResult[4] = tmp4.illustrationContainer;
    cResult[5] = tmp16;
    let tmp13 = tmp16;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
    const intl3 = util.intl;
    obj3.text = intl3.string(util.t.cpT0Cq);
    obj3.onPress = first;
    const tmp19 = jsx(components_Button_Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
    cResult[6] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] !== tmp13) {
    const obj4 = { gradientColor: "purple", title: tmp6, description: tmp7, illustration: tmp13, actions: tmp17 };
    const tmp22 = jsx(PromoSheet.PromoSheet, { gradientColor: "purple", title: tmp6, description: tmp7, illustration: tmp13, actions: tmp17 });
    cResult[7] = tmp13;
    cResult[8] = tmp22;
    let tmp20 = tmp22;
  } else {
    tmp20 = cResult[8];
  }
  return tmp20;
}) : (function BountiesNuxPromoSheet() {
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(openBountiesNuxPromoSheet.PROMO_SHEET_KEY);
  }, []);
  const obj = { gradientColor: "purple", title: null, description: null, illustration: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.DDpHZG);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.aC3Dwj);
  const tmp = closure_6();
  obj.illustration = <View style={closure_6().illustrationContainer}>{jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 })}</View>;
  const obj3 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.cpT0Cq);
  obj3.onPress = callback;
  obj.actions = jsx(components_Button_Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { gradientColor: "purple", title: null, description: null, illustration: null, actions: null });
});