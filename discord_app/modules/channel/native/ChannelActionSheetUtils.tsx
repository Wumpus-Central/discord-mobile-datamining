// === Module 9876: copyGuildChannelOrThreadLink ===

// Module 9876 (copyGuildChannelOrThreadLink)
import set from "set" /* 2 */;
import presentAddedFriendToast from "presentAddedFriendToast" /* 4097 */;
import allowChannelAccess from "allowChannelAccess" /* 4566 */;
import _copy from "_copy" /* 5862 */;

const result = set.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = allowChannelAccess.getChannelPermalink(guild_id, id);
  const obj = allowChannelAccess;
  _copy.copy(channelPermalink);
  const obj2 = _copy;
  presentAddedFriendToast.presentLinkCopied();
};