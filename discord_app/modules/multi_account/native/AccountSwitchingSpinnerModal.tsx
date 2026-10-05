// === Module 17563: AccountSwitchingSpinnerModal ===

// Module 17563 (AccountSwitchingSpinnerModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl2 from "intl" /* 1126 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp10;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_4();
  const switchingSpinnerContainer = tmp4.switchingSpinnerContainer;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.n8qMH0);
    const tmp9 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = stringResult;
    cResult[1] = tmp9;
    tmp5 = stringResult;
    tmp6 = tmp9;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.switchingSpinnerContainer) {
    const tmp13 = <View style={switchingSpinnerContainer} accessible accessibilityLabel={tmp5}>{tmp6}</View>;
    cResult[2] = tmp4.switchingSpinnerContainer;
    cResult[3] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  return tmp10;
}) : (() => {
  const intl = intl2.intl;
  return <View style={closure_4().switchingSpinnerContainer} accessible accessibilityLabel={intl.string(intl2.t.n8qMH0)}>{null}</View>;
});
let obj = { animation: ConstantsIOS.ModalAnimation.FADE, closable: false };
tmp3.modalConfig = obj;
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default tmp3;