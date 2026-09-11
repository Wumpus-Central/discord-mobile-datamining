// === Module 11048: ChannelActionSheetUtils ===

// Module 11048 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4304 */;
import ChannelUtils from "ChannelUtils" /* 4751 */;
import ClipboardUtils from "ClipboardUtils" /* 7262 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};