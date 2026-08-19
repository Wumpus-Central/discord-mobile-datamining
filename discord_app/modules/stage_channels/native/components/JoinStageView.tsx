// discord_app/modules/stage_channels/native/components/JoinStageView.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import sortKey from "../../StageChannelParticipants.tsx";
import useStageParticipants from "../../StageChannelParticipantStoreHooks.tsx";
import fillChunk from "../../StageChannelUtils.tsx";
import stylesDefault from "StageViewWithPrompts.tsx";
import AgeVerificationSpeakerActionSheet from "StageActionBarButtons.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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