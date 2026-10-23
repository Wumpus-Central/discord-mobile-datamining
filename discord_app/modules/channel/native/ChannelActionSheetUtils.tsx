// === Module 10836: ChannelActionSheetUtils ===

// Module 10836 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5648 */;
import ChannelUtils from "ChannelUtils" /* 5980 */;
import ClipboardUtils from "ClipboardUtils" /* 7270 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};