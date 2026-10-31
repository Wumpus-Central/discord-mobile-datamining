// === Module 13643: CheckpointDisplayText ===

// Module 13643 (CheckpointDisplayText)
import CheckpointTextDefault from "CheckpointText" /* 13624 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
let closure_3 = { fontSize: 56, lineHeight: 72, letterSpacing: -2.24, marginTop: -15, marginBottom: -16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointDisplayText.tsx");

export default function CheckpointDisplayText(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.variant = "display-lg";
  const items = [closure_3, style.style];
  obj.style = items;
  return jsx(CheckpointTextDefault, {});
};