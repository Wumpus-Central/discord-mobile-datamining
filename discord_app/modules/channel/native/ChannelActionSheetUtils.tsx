// === Module 11207: ChannelActionSheetUtils ===

// Module 11207 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4419 */;
import ChannelUtils from "ChannelUtils" /* 4867 */;
import ClipboardUtils from "ClipboardUtils" /* 7385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};