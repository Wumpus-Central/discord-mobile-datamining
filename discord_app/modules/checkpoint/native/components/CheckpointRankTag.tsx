// === Module 12667: CheckpointRankTag ===

// Module 12667 (CheckpointRankTag)
import CheckpointTagDefault from "CheckpointTag" /* 12668 */;
import noop from "module_19" /* 19 */;

const jsxs = fn(21).jsxs;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRankTag.tsx");

export default function CheckpointRankTag(arg0) {
  ({ rank, chamferCorner, style } = arg0);
  const obj = { chamferCorner, style, children: null };
  items = ["#", rank];
  obj.children = items;
  return jsxs(CheckpointTagDefault, { chamferCorner, style, children: null });
};