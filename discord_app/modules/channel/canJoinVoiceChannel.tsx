// discord_app/modules/channel/canJoinVoiceChannel.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";

const isPrivate = createChannelRecord.isPrivate;
const BasicPermissions = ME.BasicPermissions;
const result = set.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  let canBasicChannelResult = isPrivate(type.type);
  if (!canBasicChannelResult) {
    canBasicChannelResult = canBasicChannel.canBasicChannel(
      BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL,
      type,
    );
  }
  return canBasicChannelResult;
}
