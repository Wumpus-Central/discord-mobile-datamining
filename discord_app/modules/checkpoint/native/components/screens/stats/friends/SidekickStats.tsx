// === Module 12919: SidekickStats ===

// Module 12919 (SidekickStats)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef3495 from "module_3495" /* 3495 */;
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import ChatIcon from "ChatIcon" /* 7137 */;
import MicrophoneIcon from "MicrophoneIcon" /* 10505 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 12859 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 12890 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = { stats: { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_40, rowGap: nativeDefault.space.PX_8 }, stat: null };
let obj2 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_40, rowGap: nativeDefault.space.PX_8 };
obj.stat = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/friends/SidekickStats.tsx");

export default function SidekickStats(sidekick) {
  sidekick = sidekick.sidekick;
  const tmp = closure_7();
  const rounded = Math.round(sidekick.numMessagesSent);
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const result = CheckpointNumberUtils.formatCheckpointStatNumber(rounded);
  const result1 = CheckpointNumberUtils.formatCheckpointStatNumber(rounded1);
  const intl = util.intl;
  const obj3 = { duration: null };
  const intl2 = util.intl;
  obj3.duration = intl2.formatToPlainString(_modDef3495.x7PkHm, { minutes: rounded1 });
  const obj4 = { style: tmp.stats, children: null };
  const obj5 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3495.lw35aH, obj3);
  obj5.accessibilityLabel = CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel("messages", rounded);
  obj5.style = tmp.stat;
  items = [hasOwnProperty(ChatIcon.ChatIcon, { size: "md", color: CHECKPOINT_PRIMARY }), hasOwnProperty(CheckpointStatNumberDefault, { value: result })];
  obj5.children = items;
  const items1 = [timestampProducer(View, obj5), ];
  const obj8 = { accessible: true, accessibilityLabel: formatToPlainStringResult, style: tmp.stat, children: null };
  const items2 = [hasOwnProperty(MicrophoneIcon.MicrophoneIcon, { size: "md", color: CHECKPOINT_PRIMARY }), hasOwnProperty(CheckpointStatNumberDefault, { value: result1 })];
  obj8.children = items2;
  items1[1] = timestampProducer(View, obj8);
  obj4.children = items1;
  return timestampProducer(View, obj4);
};