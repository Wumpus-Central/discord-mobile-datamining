// discord_app/modules/channel/native/ChannelActionSheetUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import presentAddedFriendToast from "../../toast/native/ToastUtils.tsx";
import allowChannelAccess from "../../../utils/ChannelUtils.tsx";
import _copy from "../../../utils/ClipboardUtils.native.tsx";

const result = obj132.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = allowChannelAccess.getChannelPermalink(guild_id, id);
  _copy.copy(channelPermalink);
  presentAddedFriendToast.presentLinkCopied();
};