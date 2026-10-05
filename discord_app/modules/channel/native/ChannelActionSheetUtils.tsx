// discord_app/modules/channel/native/ChannelActionSheetUtils.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ChannelUtils from "../../../utils/ChannelUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const obj = ChannelUtils;
  const channelPermalink = obj.getChannelPermalink(guild_id, id);
  const obj2 = ClipboardUtils;
  obj2.copy(channelPermalink);
  const obj3 = ToastUtils;
  obj3.presentLinkCopied();
};
