// === Module 14513: CheckpointGuildStats ===

// Module 14513 (CheckpointGuildStats)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import ChatIcon from "ChatIcon" /* 8069 */;
import MicrophoneIcon from "MicrophoneIcon" /* 13048 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14506 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = { stats: { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16 }, stat: null, text: null };
let obj2 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16 };
obj.stat = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.text = { fontSize: 16, lineHeight: 20 };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGuildStats.tsx");

export default function CheckpointGuildStats(arg0) {
  ({ numVoiceMinutes, numMessagesSent } = arg0);
  const tmp = closure_7();
  const rounded = Math.round(numVoiceMinutes);
  const rounded1 = Math.round(numMessagesSent);
  const result = CheckpointNumberUtils.formatCheckpointStatNumber(rounded);
  const obj3 = { style: tmp.stats, children: null };
  const obj4 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  const result1 = CheckpointNumberUtils.formatCheckpointStatNumber(rounded1);
  obj4.accessibilityLabel = CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel("voice", rounded);
  obj4.style = tmp.stat;
  items = [hasOwnProperty(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), hasOwnProperty(CheckpointTextDefault, { variant: "mono-md/bold", style: tmp.text, children: result })];
  obj4.children = items;
  const items1 = [timestampProducer(View, obj4), ];
  const obj8 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  const obj6 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const obj7 = { variant: "mono-md/bold", style: tmp.text, children: result };
  obj8.accessibilityLabel = CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel("messages", rounded1);
  obj8.style = tmp.stat;
  const items2 = [hasOwnProperty(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), hasOwnProperty(CheckpointTextDefault, { variant: "mono-md/bold", style: tmp.text, children: result1 })];
  obj8.children = items2;
  items1[1] = timestampProducer(View, obj8);
  obj3.children = items1;
  return timestampProducer(View, obj3);
};