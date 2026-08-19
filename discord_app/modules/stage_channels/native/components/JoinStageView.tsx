// === Module 12537: JoinStageView ===

// Module 12537 (JoinStageView)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import sortKey from "sortKey" /* 6703 */;
import useStageParticipants from "useStageParticipants" /* 6708 */;
import fillChunk from "fillChunk" /* 8063 */;
import stylesDefault from "styles" /* 12491 */;
import AgeVerificationSpeakerActionSheet from "AgeVerificationSpeakerActionSheet" /* 12505 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = useStageParticipants;
  const stageParticipants = obj.useStageParticipants(channel.id, sortKey.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((item, index) => item.type === callback(table[3]).StageChannelParticipantTypes.VOICE);
  obj = { title: null, body: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.WZOeQv);
  obj[1] = fillChunk.getParticipantNamesText(channel, found);
  obj[2] = jsx(AgeVerificationSpeakerActionSheet.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};