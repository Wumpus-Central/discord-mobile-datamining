// === Module 12635: PortalAccessibilityWorkaroundView ===

// Module 12635 (PortalAccessibilityWorkaroundView)
import PlatformUtils2 from "PlatformUtils" /* 1115 */;
import noop from "module_19" /* 19 */;

require = fn;
let _default = fn(17).View;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
if (PlatformUtils.isIOS()) {
  _default = fn(12636).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

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