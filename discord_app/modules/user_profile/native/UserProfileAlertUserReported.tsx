// === Module 12291: UserProfileAlertUserReported ===

// Module 12291 (UserProfileAlertUserReported)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5713 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl3;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.IwHU3R);
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.qxyRaq);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const AlertModal = AlertModal2.AlertModal;
    const AlertActions = AlertModal2.AlertActions;
    ({ text: intl3.string(intl4.t.BddRzS) });
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl3 = intl4.intl;
    const tmp10 = <AlertModal title={tmp4} content={tmp5} actions={null} />;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => {
  let intl3;
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t.BddRzS) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={intl.string(intl4.t.IwHU3R)} content={intl2.string(intl4.t.qxyRaq)} actions={null} />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAlertUserReported.tsx");

export default tmp3;