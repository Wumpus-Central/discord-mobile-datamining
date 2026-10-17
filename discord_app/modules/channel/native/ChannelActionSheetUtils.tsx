// === Module 10643: ChannelActionSheetUtils ===

// Module 10643 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4903 */;
import ChannelUtils from "ChannelUtils" /* 5514 */;
import ClipboardUtils from "ClipboardUtils" /* 7162 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};