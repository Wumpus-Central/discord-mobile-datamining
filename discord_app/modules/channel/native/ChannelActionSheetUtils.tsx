// === Module 10314: ChannelActionSheetUtils ===

// Module 10314 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4765 */;
import ChannelUtils from "ChannelUtils" /* 5410 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};