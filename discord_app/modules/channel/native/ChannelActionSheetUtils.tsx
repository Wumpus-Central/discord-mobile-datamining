// === Module 13746: ChannelActionSheetUtils ===

// Module 13746 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5475 */;
import ChannelUtils from "ChannelUtils" /* 5829 */;
import ClipboardUtils from "ClipboardUtils" /* 7425 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}