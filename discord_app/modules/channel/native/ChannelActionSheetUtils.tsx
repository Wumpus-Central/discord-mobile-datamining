const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4467) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4467) /* allowChannelAccess */;
  require(5638) /* _copy */.copy(channelPermalink);
  const obj2 = require(5638) /* _copy */;
  require(3985) /* presentAddedFriendToast */.presentLinkCopied();
};