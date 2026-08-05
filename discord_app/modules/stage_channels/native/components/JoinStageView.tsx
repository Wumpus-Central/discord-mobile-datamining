import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { sortKey } from "../../StageChannelParticipants.tsx";
import { useStageParticipants } from "../../StageChannelParticipantStoreHooks.tsx";
import { fillChunk } from "../../StageChannelUtils.tsx";
import { AgeVerificationSpeakerActionSheet } from "StageActionBarButtons.tsx";
import { styles } from "StageViewWithPrompts.tsx";
// discord_app/modules/stage_channels/native/components/JoinStageView.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useStageParticipants").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = useStageParticipants /* useStageParticipants */;
  const stageParticipants = obj.useStageParticipants(channel.id, sortKey /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === callback(table[3]).StageChannelParticipantTypes.VOICE);
  obj = { title: null, body: null, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.WZOeQv);
  const tmp2 = styles;
  obj[1] = fillChunk /* fillChunk */.getParticipantNamesText(channel, found);
  obj[2] = jsx(AgeVerificationSpeakerActionSheet /* AgeVerificationSpeakerActionSheet */.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};