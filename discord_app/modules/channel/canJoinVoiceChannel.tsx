// discord_app/modules/channel/canJoinVoiceChannel.tsx
import Constants from "../../Constants.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

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
