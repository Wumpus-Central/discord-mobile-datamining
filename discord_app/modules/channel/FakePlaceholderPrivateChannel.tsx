// === Module 7390: FakePlaceholderPrivateChannel ===

// Module 7390 (FakePlaceholderPrivateChannel)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import size from "module_2" /* 2 */;

const channelRecord = ChannelRecord.createChannelRecord({ id: "131", type: Constants.ChannelTypes.DM, name: "Placeholder Channel" });
const result = size.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;