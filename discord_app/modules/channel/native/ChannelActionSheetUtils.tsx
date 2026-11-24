// === Module 11345: ChannelActionSheetUtils ===

// Module 11345 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5598 */;
import ChannelUtils from "ChannelUtils" /* 6675 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}