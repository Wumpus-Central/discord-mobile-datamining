// === Module 12316: PortalAccessibilityWorkaroundView ===

// Module 12316 (PortalAccessibilityWorkaroundView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import NonRecycledViewNativeComponent from "NonRecycledViewNativeComponent" /* 12317 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

react_native.View;
const jsx = Fragment.jsx;
if (PlatformUtils.isIOS()) {
  NonRecycledViewNativeComponent.default;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = null;
    const tmpResult = PlatformUtils;
    if (tmpResult.isIOS()) {
      obj2 = { accessibilityLabel: " ", accessible: false };
    }
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(first);
    const tmp14 = <_default collapsable={false} />;
    cResult[1] = arg0;
    cResult[2] = tmp14;
    tmp5 = tmp14;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : ((arg0) => {
  let obj2 = null;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    obj2 = { accessibilityLabel: " ", accessible: false };
  }
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj2);
  return <_default collapsable={false} />;
});
const result = size.fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default tmp3;