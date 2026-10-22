// === Module 10828: ChannelActionSheetUtils ===

// Module 10828 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5648 */;
import ChannelUtils from "ChannelUtils" /* 5981 */;
import ClipboardUtils from "ClipboardUtils" /* 7269 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};