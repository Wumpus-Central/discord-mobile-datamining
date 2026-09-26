// === Module 10418: ChannelActionSheetUtils ===

// Module 10418 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4527 */;
import ChannelUtils from "ChannelUtils" /* 4981 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};