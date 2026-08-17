// discord_app/modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx
import noopAll from "noop" /* 19 */;
import Background from "Background" /* 6950 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  const merged = Object.assign(children, Object.create(null));
  const obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(Background.BottomSheet, { startExpanded: true });
};