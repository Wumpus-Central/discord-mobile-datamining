// discord_app/modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx",
);

export default function ScrollHandlingActionSheet(children) {
  const merged = Object.assign(children, Object.create(null));
  const obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(Background.BottomSheet, { startExpanded: true });
}
