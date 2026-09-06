// === Module 10955: ChannelActionSheetUtils ===

// Module 10955 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4258 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};