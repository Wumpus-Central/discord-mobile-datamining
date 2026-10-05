// === Module 14870: BountiesNuxPromoSheet ===

// Module 14870 (BountiesNuxPromoSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import PromoSheet2 from "PromoSheet" /* 10045 */;
import openBountiesNuxPromoSheet from "openBountiesNuxPromoSheet" /* 14869 */;
import BountiesPosterSpotIllustration from "BountiesPosterSpotIllustration" /* 14871 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { illustrationContainer: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp10;
  let tmp13;
  let tmp17;
  let tmp20;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(openBountiesNuxPromoSheet.PROMO_SHEET_KEY);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.DDpHZG);
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.aC3Dwj);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    tmp7 = stringResult1;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 });
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.illustrationContainer) {
    const tmp16 = <View style={tmp4.illustrationContainer}>{tmp10}</View>;
    cResult[4] = tmp4.illustrationContainer;
    cResult[5] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const Button = components_Button_Button.Button;
    const intl3 = intl4.intl;
    const tmp19 = <Button grow size="lg" variant="primary" text={intl3.string(intl4.t.cpT0Cq)} onPress={first} />;
    cResult[6] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] !== tmp13) {
    const tmp22 = jsx(PromoSheet2.PromoSheet, { gradientColor: "purple", title: tmp6, description: tmp7, illustration: tmp13, actions: tmp17 });
    cResult[7] = tmp13;
    cResult[8] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[8];
  }
  return tmp20;
}) : (() => {
  let intl3;
  const tmp = closure_6();
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openBountiesNuxPromoSheet.PROMO_SHEET_KEY);
  }, []);
  const PromoSheet = PromoSheet2.PromoSheet;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  ({ style: tmp.illustrationContainer, children: jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 }) });
  ({ grow: true, size: "lg", variant: "primary", text: intl3.string(intl4.t.cpT0Cq), onPress: callback });
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  return <PromoSheet gradientColor="purple" title={intl.string(intl4.t.DDpHZG)} description={intl2.string(intl4.t.aC3Dwj)} illustration={null} actions={null} />;
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default tmp2;