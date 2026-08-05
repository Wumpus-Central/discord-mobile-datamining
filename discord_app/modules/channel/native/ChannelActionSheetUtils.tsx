// discord_app/modules/channel/native/ChannelActionSheetUtils.tsx
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require("../../../utils/ChannelUtils.tsx") /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require("../../../utils/ChannelUtils.tsx") /* allowChannelAccess */;
  require("../../../utils/ClipboardUtils.native.tsx") /* _copy */.copy(channelPermalink);
  const obj2 = require("../../../utils/ClipboardUtils.native.tsx") /* _copy */;
  require("../../toast/native/ToastUtils.tsx") /* presentAddedFriendToast */.presentLinkCopied();
};