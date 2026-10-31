// === Module 10981: ChannelActionSheetUtils ===

// Module 10981 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5711 */;
import ChannelUtils from "ChannelUtils" /* 6046 */;
import ClipboardUtils from "ClipboardUtils" /* 7358 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}