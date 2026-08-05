// discord_app/modules/stage_channels/native/components/JoinStageView.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useStageParticipants").fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = require("../../StageChannelParticipantStoreHooks.tsx") /* useStageParticipants */;
  const stageParticipants = obj.useStageParticipants(channel.id, require("../../StageChannelParticipants.tsx") /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === callback(table[3]).StageChannelParticipantTypes.VOICE);
  obj = { title: null, body: null, children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.WZOeQv);
  const tmp2 = require("StageViewWithPrompts.tsx");
  obj[1] = require("../../StageChannelUtils.tsx") /* fillChunk */.getParticipantNamesText(channel, found);
  obj[2] = jsx(require("StageActionBarButtons.tsx") /* AgeVerificationSpeakerActionSheet */.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};