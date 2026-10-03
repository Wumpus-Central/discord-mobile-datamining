// === Module 12301: PortalAccessibilityWorkaroundView ===

// Module 12301 (PortalAccessibilityWorkaroundView)
import c from "c" /* 576 */;
import PlatformUtils2 from "PlatformUtils" /* 1369 */;
import noop from "module_19" /* 19 */;

require = fn;
let _default = fn(17).View;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1369);
if (PlatformUtils.isIOS()) {
  _default = fn(12302).default;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = null;
    if (tmpResult.isIOS()) {
      obj2 = { accessibilityLabel: " ", accessible: false };
    }
    cResult[0] = obj2;
    let first = obj2;
    tmpResult = PlatformUtils2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const obj3 = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(first);
    obj3.collapsable = false;
    const tmp14 = <_default />;
    cResult[1] = arg0;
    cResult[2] = tmp14;
    let tmp5 = tmp14;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : ((arg0) => {
  let obj2 = null;
  if (obj.isIOS()) {
    obj2 = { accessibilityLabel: " ", accessible: false };
  }
  const obj3 = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj2);
  obj3.collapsable = false;
  return <_default />;
});