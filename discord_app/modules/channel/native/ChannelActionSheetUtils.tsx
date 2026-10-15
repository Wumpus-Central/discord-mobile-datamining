// === Module 10568: ChannelActionSheetUtils ===

// Module 10568 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4864 */;
import ChannelUtils from "ChannelUtils" /* 5474 */;
import ClipboardUtils from "ClipboardUtils" /* 7105 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};