// === Module 11111: ChannelActionSheetUtils ===

// Module 11111 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5836 */;
import ChannelUtils from "ChannelUtils" /* 6178 */;
import ClipboardUtils from "ClipboardUtils" /* 7418 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}