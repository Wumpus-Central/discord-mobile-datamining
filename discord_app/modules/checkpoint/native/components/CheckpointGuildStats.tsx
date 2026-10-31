// === Module 13644: CheckpointGuildStats ===

// Module 13644 (CheckpointGuildStats)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3060 from "module_3060" /* 3060 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import ChatIcon from "ChatIcon" /* 8643 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11971 */;
import CheckpointTextDefault from "CheckpointText" /* 13624 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { stats: { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16 }, stat: null, text: null };
let obj2 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16 };
obj.stat = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.text = { fontSize: 16, lineHeight: 20 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGuildStats.tsx");

export default function CheckpointGuildStats(arg0) {
  ({ numVoiceMinutes, numMessagesSent } = arg0);
  const tmp = closure_7();
  const rounded = Math.round(numVoiceMinutes);
  const rounded1 = Math.round(numMessagesSent);
  const intl = util.intl;
  const intl2 = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3060.UZbUtl, { numMinutes: rounded });
  const obj = { style: tmp.stats, children: null };
  const obj2 = { accessible: true, accessibilityLabel: "" + rounded + " " + formatToPlainStringResult.toLocaleLowerCase(), style: tmp.stat, children: null };
  const items = [hasOwnProperty(MicrophoneIcon.MicrophoneIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), hasOwnProperty(CheckpointTextDefault, { variant: "experimental/mono-md/bold", style: tmp.text, children: rounded })];
  obj2.children = items;
  const items1 = [timestampProducer(View, obj2), ];
  const obj5 = { accessible: true, accessibilityLabel: "" + rounded1 + " " + intl2.string(_modDef3060.wWKySP).toLocaleLowerCase(), style: tmp.stat, children: null };
  const items2 = [hasOwnProperty(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), hasOwnProperty(CheckpointTextDefault, { variant: "experimental/mono-md/bold", style: tmp.text, children: rounded1 })];
  obj5.children = items2;
  items1[1] = timestampProducer(View, obj5);
  obj.children = items1;
  return timestampProducer(View, obj);
};