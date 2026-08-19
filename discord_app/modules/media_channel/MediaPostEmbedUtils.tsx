// === Module 4982: getMediaPostEmbedCommonData ===

// Module 4982 (getMediaPostEmbedCommonData)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import hasFlag from "hasFlag" /* 1403 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import trimTrailingPunctuation from "trimTrailingPunctuation" /* 4358 */;
import ME2 from "ME" /* 4488 */;
import getNicknameDefault from "getNickname" /* 4796 */;
import MAX_THUMBNAIL_COUNT from "MAX_THUMBNAIL_COUNT" /* 4983 */;
import computeChannelName from "computeChannelName" /* 4984 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = fn;
({ GuildFeatures: closure_6, MessageAttachmentFlags: error } = ME);
let result = require("obj132").fileFinishedImporting("modules/media_channel/MediaPostEmbedUtils.tsx");

export const getMediaPostEmbedCommonData = function getMediaPostEmbedCommonData(arg0) {
  ({ mediaPostEmbedData, guild, parentChannel, user, canAccess } = arg0);
  ({ postThread, selectedGuildId } = arg0);
  if (canAccess === undefined) {
    canAccess = false;
  }
  if (null == mediaPostEmbedData) {
    return null;
  } else {
    let has_media_attachment = !canAccess;
    const thumbnailImage = MAX_THUMBNAIL_COUNT.getThumbnailImage(mediaPostEmbedData.thumbnail);
    if (!canAccess) {
      has_media_attachment = mediaPostEmbedData.has_media_attachment;
    }
    const intl = getSystemLocale.intl;
    const string = intl.string;
    const t = getSystemLocale.t;
    if (canAccess) {
      let stringResult = string(t.UsZEBI);
    } else {
      stringResult = string(t.ReFzYZ);
    }
    let name;
    if (null != user) {
      let obj = getNicknameDefault;
      name = obj.getName(mediaPostEmbedData.guild_id, mediaPostEmbedData.channel_id, user);
    }
    let avatarURL;
    if (user != null) {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      avatarURL = user.getAvatarURL(id, 40);
    }
    if (!tmp6) {
      obj = { id: null, icon: null, size: 40, canAnimate: false };
      ({ guild_id: obj3[0], guild_icon: obj3[1] } = mediaPostEmbedData);
      avatarURL = getAvatarURLDefault.getGuildIconURL(obj);
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
    let tmp17Result = hasFlag;
    const thumbnail2 = mediaPostEmbedData.thumbnail;
    let num2;
    if (thumbnail2 != null) {
      num2 = thumbnail2.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let str = mediaPostEmbedData.title;
    tmp6 = null != avatarURL && selectedGuildId === mediaPostEmbedData.guild_id;
    if (str == null) {
      str = "";
    }
    obj = { title: null, subtitle: null, ctaText: null, coverImage: null, coverImageOverlayText: null, parentChannelId: null, threadId: null, postThread: null, messageId: null, canAccess: null, guildId: null, guildName: null, authorId: null, authorName: null, channelName: null, avatarUrl: null, shouldShowBlurredThumbnailImage: null, shouldContainMediaWithBackground: null, shouldSpoiler: null, obscureAwaitingScan: false, flags: null, contentScanVersion: null };
    obj[0] = str;
    obj[1] = mediaPostEmbedData.description;
    obj[2] = stringResult;
    obj[3] = thumbnailImage;
    let stringResult1;
    if (has_media_attachment) {
      const intl2 = getSystemLocale.intl;
      stringResult1 = intl2.string(getSystemLocale.t.Yonlia);
    }
    obj[4] = stringResult1;
    ({ parent_channel_id: obj5[5], channel_id: obj5[6] } = mediaPostEmbedData);
    obj[7] = postThread;
    obj[8] = mediaPostEmbedData.message_id;
    obj[9] = canAccess;
    obj[10] = mediaPostEmbedData.guild_id;
    let name1;
    if (guild != null) {
      name1 = guild.name;
    }
    if (name1 == null) {
      name1 = mediaPostEmbedData.guild_name;
    }
    obj[11] = name1;
    let author_id;
    if (mediaPostEmbedData != null) {
      author_id = mediaPostEmbedData.author_id;
    }
    obj[12] = author_id;
    obj[13] = name;
    let channelName;
    if (null != parentChannel) {
      tmp17Result = computeChannelName;
      channelName = tmp17Result.computeChannelName(parentChannel, closure_5, closure_4);
    }
    obj[14] = channelName;
    obj[15] = avatarURL;
    obj[16] = has_media_attachment;
    obj[17] = flag;
    obj[18] = tmp17Result.hasFlag(num2, constants2.IS_SPOILER);
    ({ flags: obj5[20], content_scan_version: obj5[21] } = mediaPostEmbedData);
    return obj;
  }
};
export const getMediaPostEmbedChannelId = function getMediaPostEmbedChannelId(url) {
  let tryParseChannelPathResult;
  if (null != url) {
    const parseURLSafelyResult = trimTrailingPunctuation.parseURLSafely(url);
    if (null != parseURLSafelyResult) {
      let tmp2Result = trimTrailingPunctuation;
      const result = tmp2Result.remainingPathFromDiscordHostMatch(parseURLSafelyResult);
      if (null != result) {
        tmp2Result = ME2;
        tryParseChannelPathResult = tmp2Result.tryParseChannelPath(result);
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
    const parseURLSafelyResult = trimTrailingPunctuation.parseURLSafely(url);
    if (null != parseURLSafelyResult) {
      let tmpResult = trimTrailingPunctuation;
      const result = tmpResult.remainingPathFromDiscordHostMatch(parseURLSafelyResult);
      if (null != result) {
        tmpResult = ME2;
        return tmpResult.tryParseChannelPath(result);
      }
    }
  }
};
export const canUseMediaPostEmbed = function canUseMediaPostEmbed(guildId, isMediaChannel) {
  guild = guild.getGuild(guildId);
  if (null != guild) {
    if (null != isMediaChannel) {
      const features = guild.features;
      let hasItem = features.has(constants.CREATOR_MONETIZABLE);
      if (!hasItem) {
        const features2 = guild.features;
        hasItem = features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      return true === isMediaChannel.isMediaChannel() && hasItem;
    }
  }
  return false;
};