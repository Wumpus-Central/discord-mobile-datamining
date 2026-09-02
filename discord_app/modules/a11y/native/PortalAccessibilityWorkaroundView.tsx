// === Module 12397: PortalAccessibilityWorkaroundView ===

// Module 12397 (PortalAccessibilityWorkaroundView)
import noopAll from "noop" /* 19 */;
import set2 from "set" /* 1234 */;
import { View as _default } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 1234 */;

require = arg1;
noopAll;
if (set.isIOS()) {
  _default = require("__INTERNAL_VIEW_CONFIG").default;
}
const result = set.fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj = set2;
  obj = null;
  if (obj.isIOS()) {
    obj = { accessibilityLabel: " ", accessible: false };
  }
  obj = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj);
  obj.collapsable = false;
  return <_default />;
};