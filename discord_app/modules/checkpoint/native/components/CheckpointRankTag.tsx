// discord_app/modules/checkpoint/native/components/CheckpointRankTag.tsx
import CheckpointTagDefault from "CheckpointTag.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const jsxs = fn(21).jsxs;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRankTag.tsx");

export default function CheckpointRankTag(arg0) {
  ({ rank, chamferCorner, style } = arg0);
  const obj = { chamferCorner, style, children: null };
  items = ["#", rank];
  obj.children = items;
  return jsxs(CheckpointTagDefault, { chamferCorner, style, children: null });
}
