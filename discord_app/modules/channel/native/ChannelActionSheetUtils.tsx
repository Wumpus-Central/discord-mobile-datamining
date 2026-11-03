// === Module 11114: ChannelActionSheetUtils ===

// Module 11114 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5831 */;
import ChannelUtils from "ChannelUtils" /* 6166 */;
import ClipboardUtils from "ClipboardUtils" /* 7478 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}