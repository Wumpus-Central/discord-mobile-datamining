// === Module 12770: PortalAccessibilityWorkaroundView ===

// Module 12770 (PortalAccessibilityWorkaroundView)
import noop from "module_19" /* 19 */;

const require = fn;
let _default = fn(17).View;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1364);
if (PlatformUtils.isIOS()) {
  _default = fn(12771).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj2 = null;
  if (obj.isIOS()) {
    obj2 = { accessibilityLabel: " ", accessible: false };
  }
  const obj3 = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj2);
  obj3.collapsable = false;
  return <_default />;
};