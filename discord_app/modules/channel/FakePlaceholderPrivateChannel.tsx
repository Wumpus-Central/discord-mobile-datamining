// === Module 5389: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ===

// Module 5389 (FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;

const channelRecord = createChannelRecord.createChannelRecord({ id: "131", type: ME.ChannelTypes.DM, name: "Placeholder Channel" });
const result = obj132.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;