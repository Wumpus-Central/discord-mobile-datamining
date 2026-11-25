// === Module 11444: ChannelActionSheetUtils ===

// Module 11444 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5693 */;
import ChannelUtils from "ChannelUtils" /* 6770 */;
import ClipboardUtils from "ClipboardUtils" /* 7507 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}