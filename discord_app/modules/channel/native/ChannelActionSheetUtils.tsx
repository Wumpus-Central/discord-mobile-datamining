// === Module 11499: ChannelActionSheetUtils ===

// Module 11499 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5724 */;
import ChannelUtils from "ChannelUtils" /* 6801 */;
import ClipboardUtils from "ClipboardUtils" /* 7538 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}