// === Module 8332: InAppReportsShieldElement ===

// Module 8332 (InAppReportsShieldElement)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ShieldSpotIllustration from "ShieldSpotIllustration" /* 8130 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let element;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((element) => {
  const obj = react2;
  const cResult = obj.c(3);
  element = element.element;
  const tmp4 = closure_4();
  let tmp5 = null;
  if (null != element) {
    tmp5 = null;
    if ("success" === element.type) {
      let first;
      let tmp9;
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = jsx(ShieldSpotIllustration.ShieldSpotIllustration, { width: 100, height: 100 });
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.container) {
        const tmp12 = <View style={tmp4.container}>{first}</View>;
        cResult[1] = tmp4.container;
        cResult[2] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[2];
      }
      tmp5 = tmp9;
    }
  }
  return tmp5;
}) : ((element) => {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      tmp2 = <View style={tmp.container}>{jsx(ShieldSpotIllustration.ShieldSpotIllustration, { width: 100, height: 100 })}</View>;
    }
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default tmp3;