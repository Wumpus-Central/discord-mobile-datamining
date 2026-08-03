// === Module 10238: copyGuildChannelOrThreadLink ===

// Module 10238 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4376) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4376) /* allowChannelAccess */;
  require(5547) /* _copy */.copy(channelPermalink);
  const obj2 = require(5547) /* _copy */;
  require(3893) /* presentAddedFriendToast */.presentLinkCopied();
};