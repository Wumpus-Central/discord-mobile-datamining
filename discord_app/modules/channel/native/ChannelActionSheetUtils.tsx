// === Module 11120: ChannelActionSheetUtils ===

// Module 11120 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5838 */;
import ChannelUtils from "ChannelUtils" /* 6180 */;
import ClipboardUtils from "ClipboardUtils" /* 7421 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}