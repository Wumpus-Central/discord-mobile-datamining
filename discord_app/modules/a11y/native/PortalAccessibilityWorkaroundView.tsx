// discord_app/modules/a11y/native/PortalAccessibilityWorkaroundView.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import set2 from "../../../utils/PlatformUtils.tsx";
import { View as _default } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import set from "../../../utils/PlatformUtils.tsx";

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
}
