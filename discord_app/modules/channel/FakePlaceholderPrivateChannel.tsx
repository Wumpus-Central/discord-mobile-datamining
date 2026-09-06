// discord_app/modules/channel/FakePlaceholderPrivateChannel.tsx
import Constants from "../../Constants.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

const channelRecord = ChannelRecord.createChannelRecord({
  id: "131",
  type: Constants.ChannelTypes.DM,
  name: "Placeholder Channel",
});
const result = size.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
