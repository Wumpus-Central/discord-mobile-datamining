// discord_app/modules/checkpoint/native/components/screens/stats/friends/SidekickStats.tsx
import _mod17 from "../../../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import _modDef3341 from "../../../../../Checkpoint2026.messages.js";
import CheckpointConstants from "../../../../../CheckpointConstants.tsx";
import ChatIcon from "../../../../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import MicrophoneIcon from "../../../../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import CheckpointStatNumberDefault from "../../../CheckpointStatNumber.tsx";
import CheckpointNumberUtils from "../../../../CheckpointNumberUtils.tsx";
import jsxProd from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = {
  stats: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: nativeDefault.space.PX_40,
    rowGap: nativeDefault.space.PX_8,
  },
  stat: null,
};
let obj2 = {
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: nativeDefault.space.PX_40,
  rowGap: nativeDefault.space.PX_8,
};
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
  obj3.duration = intl2.formatToPlainString(_modDef3341.x7PkHm, { minutes: rounded1 });
  const obj4 = { style: tmp.stats, children: null };
  const obj5 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3341.lw35aH, obj3);
  obj5.accessibilityLabel = CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel("messages", rounded);
  obj5.style = tmp.stat;
  items = [
    hasOwnProperty(ChatIcon.ChatIcon, { size: "md", color: CHECKPOINT_PRIMARY }),
    hasOwnProperty(CheckpointStatNumberDefault, { value: result }),
  ];
  obj5.children = items;
  const items1 = [timestampProducer(View, obj5)];
  const obj8 = { accessible: true, accessibilityLabel: formatToPlainStringResult, style: tmp.stat, children: null };
  const items2 = [
    hasOwnProperty(MicrophoneIcon.MicrophoneIcon, { size: "md", color: CHECKPOINT_PRIMARY }),
    hasOwnProperty(CheckpointStatNumberDefault, { value: result1 }),
  ];
  obj8.children = items2;
  items1[1] = timestampProducer(View, obj8);
  obj4.children = items1;
  return timestampProducer(View, obj4);
}
