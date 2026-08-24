// discord_app/modules/channel/native/ChannelActionSheetUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import presentAddedFriendToast from "../../toast/native/ToastUtils.tsx";
import allowChannelAccess from "../../../utils/ChannelUtils.tsx";
import _copy from "../../../utils/ClipboardUtils.native.tsx";

const result = set.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = allowChannelAccess.getChannelPermalink(guild_id, id);
  const obj = allowChannelAccess;
  _copy.copy(channelPermalink);
  const obj2 = _copy;
  presentAddedFriendToast.presentLinkCopied();
};