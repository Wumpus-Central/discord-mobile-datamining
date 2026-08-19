// === Module 9995: copyGuildChannelOrThreadLink ===

// Module 9995 (copyGuildChannelOrThreadLink)
import obj132 from "obj132" /* 2 */;
import presentAddedFriendToast from "presentAddedFriendToast" /* 4093 */;
import allowChannelAccess from "allowChannelAccess" /* 4979 */;
import _copy from "_copy" /* 7167 */;

const result = obj132.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = allowChannelAccess.getChannelPermalink(guild_id, id);
  _copy.copy(channelPermalink);
  presentAddedFriendToast.presentLinkCopied();
};