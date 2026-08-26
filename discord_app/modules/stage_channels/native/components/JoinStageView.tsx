// === Module 10977: JoinStageView ===

// Module 10977 (JoinStageView)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import sortKey from "sortKey" /* 5315 */;
import useStageParticipants from "useStageParticipants" /* 5321 */;
import fillChunk from "fillChunk" /* 7992 */;
import stylesDefault from "styles" /* 10921 */;
import AgeVerificationSpeakerActionSheet from "AgeVerificationSpeakerActionSheet" /* 10940 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = useStageParticipants;
  const stageParticipants = obj.useStageParticipants(channel.id, sortKey.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === callback(table[3]).StageChannelParticipantTypes.VOICE);
  obj = { title: null, body: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.WZOeQv);
  const tmp2 = stylesDefault;
  obj[1] = fillChunk.getParticipantNamesText(channel, found);
  obj[2] = jsx(AgeVerificationSpeakerActionSheet.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};