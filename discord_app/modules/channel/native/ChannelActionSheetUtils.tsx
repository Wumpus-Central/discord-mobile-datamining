// === Module 10962: ChannelActionSheetUtils ===

// Module 10962 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5706 */;
import ChannelUtils from "ChannelUtils" /* 6041 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}