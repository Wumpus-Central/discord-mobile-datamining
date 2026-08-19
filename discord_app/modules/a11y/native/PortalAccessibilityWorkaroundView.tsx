// === Module 11806: PortalAccessibilityWorkaroundView ===

// Module 11806 (PortalAccessibilityWorkaroundView)
import noopAll from "noop" /* 19 */;
import obj1322 from "obj132" /* 500 */;
import { View as _default } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import obj132 from "obj132" /* 500 */;

require = fn;
noopAll;
if (obj132.isIOS()) {
  _default = require("__INTERNAL_VIEW_CONFIG").default;
}
const result = obj132.fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj = null;
  if (obj.isIOS()) {
    obj = { accessibilityLabel: " ", accessible: false };
  }
  obj = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj);
  obj.collapsable = false;
  return <_default />;
};