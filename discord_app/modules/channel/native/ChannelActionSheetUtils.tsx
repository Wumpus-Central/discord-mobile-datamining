// === Module 15167: ChannelActionSheetUtils ===

// Module 15167 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 6008 */;
import ChannelUtils from "ChannelUtils" /* 6354 */;
import ClipboardUtils from "ClipboardUtils" /* 7953 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}