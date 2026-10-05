// === Module 10694: ChannelActionSheetUtils ===

// Module 10694 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4567 */;
import ChannelUtils from "ChannelUtils" /* 5035 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const obj = ChannelUtils;
  const channelPermalink = obj.getChannelPermalink(guild_id, id);
  const obj2 = ClipboardUtils;
  obj2.copy(channelPermalink);
  const obj3 = ToastUtils;
  obj3.presentLinkCopied();
};