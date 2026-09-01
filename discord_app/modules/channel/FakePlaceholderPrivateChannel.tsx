// discord_app/modules/channel/FakePlaceholderPrivateChannel.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";

const channelRecord = createChannelRecord.createChannelRecord({
  id: "131",
  type: ME.ChannelTypes.DM,
  name: "Placeholder Channel",
});
const obj = { id: "131", type: ME.ChannelTypes.DM, name: "Placeholder Channel" };
const result = set.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
