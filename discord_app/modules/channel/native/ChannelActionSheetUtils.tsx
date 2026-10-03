// === Module 10694: ChannelActionSheetUtils ===

// Module 10694 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4567 */;
import ChannelUtils from "ChannelUtils" /* 5035 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};