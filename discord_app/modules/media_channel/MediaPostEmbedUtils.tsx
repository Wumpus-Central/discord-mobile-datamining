// === Module 5044: MediaPostEmbedUtils ===

// Module 5044 (MediaPostEmbedUtils)
import intl3 from "intl" /* 1126 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import findCodedLinks from "findCodedLinks" /* 4876 */;
import MediaPostThumbnailUtils from "MediaPostThumbnailUtils" /* 5045 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import useChannelName from "useChannelName" /* 5049 */;
import LinkUtils from "LinkUtils" /* 5050 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
({ GuildFeatures: metroRequire, MessageAttachmentFlags: metroImportDefault } = Constants);
let result = size.fileFinishedImporting("modules/media_channel/MediaPostEmbedUtils.tsx");

export const getMediaPostEmbedCommonData = function getMediaPostEmbedCommonData(arg0) {
  let author_id;
  let canAccess;
  let channelName;
  let guild;
  let height;
  let mediaPostEmbedData;
  let name1;
  let parentChannel;
  let postThread;
  let selectedGuildId;
  let stringResult1;
  let user;
  let width;
  ({ mediaPostEmbedData, guild, parentChannel, user, canAccess } = arg0);
  ({ postThread, selectedGuildId } = arg0);
  if (canAccess === undefined) {
    canAccess = false;
  }
  if (null == mediaPostEmbedData) {
    return null;
  } else {
    let stringResult;
    let has_media_attachment = !canAccess;
    const obj6 = MediaPostThumbnailUtils;
    const thumbnailImage = obj6.getThumbnailImage(mediaPostEmbedData.thumbnail);
    if (!canAccess) {
      has_media_attachment = mediaPostEmbedData.has_media_attachment;
    }
    const intl = intl3.intl;
    const string = intl.string;
    const t = intl3.t;
    if (canAccess) {
      stringResult = string(t.UsZEBI);
    } else {
      stringResult = string(t.ReFzYZ);
    }
    let name;
    if (null != user) {
      const obj = NicknameUtilsDefault;
      name = obj.getName(mediaPostEmbedData.guild_id, mediaPostEmbedData.channel_id, user);
    }
    let avatarURL;
    if (user != null) {
      let id;
      const getAvatarURL = user.getAvatarURL;
      if (guild != null) {
        id = guild.id;
      }
      avatarURL = getAvatarURL(id, 40);
    }
    const tmp6 = null != avatarURL && selectedGuildId === mediaPostEmbedData.guild_id;
    if (!tmp6) {
      const obj5 = { id: null, icon: null, size: 40, canAnimate: false };
      ({ guild_id: obj3.id, guild_icon: obj3.icon } = mediaPostEmbedData);
      const obj2 = AvatarUtilsDefault;
      avatarURL = obj2.getGuildIconURL(obj5);
    }
    const thumbnail = mediaPostEmbedData.thumbnail;
    let flag = false;
    if (null != thumbnail) {
      ({ height, width } = thumbnail);
      flag = null != height && null != width && height >= width;
    }
    if (flag) {
      flag = !has_media_attachment;
    }
    const thumbnail2 = mediaPostEmbedData.thumbnail;
    let num2;
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    if (thumbnail2 != null) {
      num2 = thumbnail2.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let str = mediaPostEmbedData.title;
    const hasFlagResult = hasFlag(num2, metroImportDefault.IS_SPOILER);
    if (str == null) {
      str = "";
    }
    const obj8 = { title: str, subtitle: mediaPostEmbedData.description, ctaText: stringResult, coverImage: thumbnailImage, coverImageOverlayText: stringResult1, parentChannelId: null, threadId: null, postThread, messageId: mediaPostEmbedData.message_id, canAccess, guildId: mediaPostEmbedData.guild_id, guildName: name1, authorId: author_id, authorName: name, channelName, avatarUrl: avatarURL, shouldShowBlurredThumbnailImage: has_media_attachment, shouldContainMediaWithBackground: flag, shouldSpoiler: hasFlagResult, obscureAwaitingScan: false, flags: null, contentScanVersion: null };
    stringResult1 = undefined;
    if (has_media_attachment) {
      const intl2 = intl3.intl;
      stringResult1 = intl2.string(intl3.t.Yonlia);
    }
    ({ parent_channel_id: obj4.parentChannelId, channel_id: obj4.threadId } = mediaPostEmbedData);
    name1 = undefined;
    if (guild != null) {
      name1 = guild.name;
    }
    if (name1 == null) {
      name1 = mediaPostEmbedData.guild_name;
    }
    author_id = undefined;
    if (mediaPostEmbedData != null) {
      author_id = mediaPostEmbedData.author_id;
    }
    channelName = undefined;
    if (null != parentChannel) {
      const tmp18Result2 = useChannelName;
      channelName = tmp18Result2.computeChannelName(parentChannel, UserStore, RelationshipStore);
    }
    ({ flags: obj4.flags, content_scan_version: obj4.contentScanVersion } = mediaPostEmbedData);
    return obj8;
  }
};
export const getMediaPostEmbedChannelId = function getMediaPostEmbedChannelId(url) {
  let tryParseChannelPathResult;
  if (null != url) {
    const obj = findCodedLinks;
    const parseURLSafelyResult = obj.parseURLSafely(url);
    if (null != parseURLSafelyResult) {
      const tmp2Result = findCodedLinks;
      const result = tmp2Result.remainingPathFromDiscordHostMatch(parseURLSafelyResult);
      if (null != result) {
        const tmp2Result2 = LinkUtils;
        tryParseChannelPathResult = tmp2Result2.tryParseChannelPath(result);
      }
    }
  }
  if (null != tryParseChannelPathResult) {
    let channelId = tryParseChannelPathResult.threadId;
    if (channelId == null) {
      channelId = tryParseChannelPathResult.channelId;
    }
    if (channelId === tryParseChannelPathResult.messageId) {
      return channelId;
    }
  }
};
export const getMediaPostEmbedChannelPath = function getMediaPostEmbedChannelPath(url) {
  if (null != url) {
    const obj = findCodedLinks;
    const parseURLSafelyResult = obj.parseURLSafely(url);
    if (null != parseURLSafelyResult) {
      const tmpResult = findCodedLinks;
      const result = tmpResult.remainingPathFromDiscordHostMatch(parseURLSafelyResult);
      if (null != result) {
        const tmpResult2 = LinkUtils;
        return tmpResult2.tryParseChannelPath(result);
      }
    }
  }
};
export const canUseMediaPostEmbed = function canUseMediaPostEmbed(guildId, isMediaChannel) {
  const guild = GuildStore.getGuild(guildId);
  if (null != guild) {
    if (null != isMediaChannel) {
      const features = guild.features;
      let hasItem = features.has(metroRequire.CREATOR_MONETIZABLE);
      if (!hasItem) {
        const features2 = guild.features;
        hasItem = features2.has(metroRequire.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      const tmp5 = true === isMediaChannel.isMediaChannel() && hasItem;
      return tmp5;
    }
  }
  return false;
};