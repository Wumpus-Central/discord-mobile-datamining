// === Module 13795: ChannelActionSheetUtils ===

// Module 13795 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5504 */;
import ChannelUtils from "ChannelUtils" /* 5856 */;
import ClipboardUtils from "ClipboardUtils" /* 7456 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
}