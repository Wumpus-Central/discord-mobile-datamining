// === Module 11170: ChannelActionSheetUtils ===

// Module 11170 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5848 */;
import ChannelUtils from "ChannelUtils" /* 6184 */;
import ClipboardUtils from "ClipboardUtils" /* 7496 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}