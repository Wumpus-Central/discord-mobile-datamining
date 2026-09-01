// discord_app/modules/stage_channels/native/components/JoinStageView.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import sortKey from "../../StageChannelParticipants.tsx";
import useStageParticipants from "../../StageChannelParticipantStoreHooks.tsx";
import fillChunk from "../../StageChannelUtils.tsx";
import stylesDefault from "StageViewWithPrompts.tsx";
import AgeVerificationSpeakerActionSheet from "StageActionBarButtons.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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
  return (
    <tmp2 title={null} body={null}>
      {null}
    </tmp2>
  );
}
