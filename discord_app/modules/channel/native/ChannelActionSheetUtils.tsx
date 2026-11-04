// === Module 11162: ChannelActionSheetUtils ===

// Module 11162 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5845 */;
import ChannelUtils from "ChannelUtils" /* 6181 */;
import ClipboardUtils from "ClipboardUtils" /* 7494 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}