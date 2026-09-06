// discord_app/modules/channel/native/ChannelActionSheetUtils.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ChannelUtils from "../../../utils/ChannelUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};
