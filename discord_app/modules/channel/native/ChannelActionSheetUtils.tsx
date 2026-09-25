// === Module 10407: ChannelActionSheetUtils ===

// Module 10407 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4524 */;
import ChannelUtils from "ChannelUtils" /* 4974 */;
import ClipboardUtils from "ClipboardUtils" /* 6605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};