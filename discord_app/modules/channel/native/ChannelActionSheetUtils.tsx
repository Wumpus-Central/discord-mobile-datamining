// === Module 10377: copyGuildChannelOrThreadLink ===

// Module 10377 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4438) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4438) /* allowChannelAccess */;
  require(5609) /* _copy */.copy(channelPermalink);
  const obj2 = require(5609) /* _copy */;
  require(3955) /* presentAddedFriendToast */.presentLinkCopied();
};