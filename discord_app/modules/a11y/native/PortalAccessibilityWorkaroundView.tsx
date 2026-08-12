// discord_app/modules/a11y/native/PortalAccessibilityWorkaroundView.tsx
import "noop";
import { View as _default } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import set from "jsxProd";
import { set } from "../../../utils/PlatformUtils.tsx";

const require = arg1;
if (set.isIOS()) {
  _default = require("__INTERNAL_VIEW_CONFIG").default;
}
const result = set.fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj = set;
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