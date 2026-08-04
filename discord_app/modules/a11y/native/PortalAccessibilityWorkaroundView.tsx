import "noop";
import { View as _default } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import isFabric from "isFabric";

const require = arg1;
if (isFabric.isIosFabric()) {
  _default = require("__INTERNAL_VIEW_CONFIG").default;
}
const result = require("jsxProd").fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj = require(4149) /* isFabric */;
  obj = null;
  if (obj.isIosFabric()) {
    obj = { accessibilityLabel: " ", accessible: false };
  }
  obj = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj);
  obj.collapsable = false;
  return <_default />;
};