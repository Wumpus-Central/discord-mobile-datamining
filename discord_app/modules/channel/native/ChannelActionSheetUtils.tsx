// === Module 10937: ChannelActionSheetUtils ===

// Module 10937 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5700 */;
import ChannelUtils from "ChannelUtils" /* 6034 */;
import ClipboardUtils from "ClipboardUtils" /* 7345 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}