// discord_app/modules/media_channel/MediaPostEmbedUtils.tsx
import util from "../../intl/index.native.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import findCodedLinks from "../coded_links/findCodedLinks.tsx";
import MediaPostThumbnailUtils from "MediaPostThumbnailUtils.tsx";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import LinkUtils from "../links/LinkUtils.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({ GuildFeatures: metroRequire, MessageAttachmentFlags: closure_7 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_channel/MediaPostEmbedUtils.tsx");

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
    const thumbnailImage = MediaPostThumbnailUtils.getThumbnailImage(mediaPostEmbedData.thumbnail);
    if (!canAccess) {
      has_media_attachment = mediaPostEmbedData.has_media_attachment;
    }
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (canAccess) {
      let stringResult = string(t.UsZEBI);
    } else {
      stringResult = string(t.ReFzYZ);
    }
    let name;
    if (null != user) {
      let obj = NicknameUtilsDefault;
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
      ({ guild_id: obj3.id, guild_icon: obj3.icon } = mediaPostEmbedData);
      avatarURL = AvatarUtilsDefault.getGuildIconURL(obj);
    }
    const thumbnail = mediaPostEmbedData.thumbnail;
    let flag = false;
    if (null != thumbnail) {
      ({ height, width } = thumbnail);
      flag = null != height && null != width && height >= width;
      const tmp8 = null != height && null != width && height >= width;
    }
    if (flag) {
      flag = !has_media_attachment;
    }
    let tmp17Result = FlagUtils;
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
    obj = {
      title: str,
      subtitle: mediaPostEmbedData.description,
      ctaText: stringResult,
      coverImage: thumbnailImage,
      coverImageOverlayText: null,
      parentChannelId: null,
      threadId: null,
      postThread: null,
      messageId: null,
      canAccess: null,
      guildId: null,
      guildName: null,
      authorId: null,
      authorName: null,
      channelName: null,
      avatarUrl: null,
      shouldShowBlurredThumbnailImage: null,
      shouldContainMediaWithBackground: null,
      shouldSpoiler: null,
      obscureAwaitingScan: false,
      flags: null,
      contentScanVersion: null,
    };
    let stringResult1;
    if (has_media_attachment) {
      const intl2 = util.intl;
      stringResult1 = intl2.string(util.t.Yonlia);
    }
    obj.coverImageOverlayText = stringResult1;
    ({ parent_channel_id: obj5.parentChannelId, channel_id: obj5.threadId } = mediaPostEmbedData);
    obj.postThread = postThread;
    obj.messageId = mediaPostEmbedData.message_id;
    obj.canAccess = canAccess;
    obj.guildId = mediaPostEmbedData.guild_id;
    let name1;
    if (guild != null) {
      name1 = guild.name;
    }
    if (name1 == null) {
      name1 = mediaPostEmbedData.guild_name;
    }
    obj.guildName = name1;
    let author_id;
    if (mediaPostEmbedData != null) {
      author_id = mediaPostEmbedData.author_id;
    }
    obj.authorId = author_id;
    obj.authorName = name;
    let channelName;
    if (null != parentChannel) {
      tmp17Result = useChannelName;
      channelName = tmp17Result.computeChannelName(parentChannel, UserStore, RelationshipStore);
    }
    obj.channelName = channelName;
    obj.avatarUrl = avatarURL;
    obj.shouldShowBlurredThumbnailImage = has_media_attachment;
    obj.shouldContainMediaWithBackground = flag;
    obj.shouldSpoiler = tmp17Result.hasFlag(num2, constants2.IS_SPOILER);
    ({ flags: obj5.flags, content_scan_version: obj5.contentScanVersion } = mediaPostEmbedData);
    return obj;
  }
};
export const getMediaPostEmbedChannelId = function getMediaPostEmbedChannelId(url) {
  let tryParseChannelPathResult;
  if (null != url) {
    const parseURLSafelyResult = findCodedLinks.parseURLSafely(url);
    if (null != parseURLSafelyResult) {
      let tmp2Result = findCodedLinks;
      const result = tmp2Result.remainingPathFromDiscordHostMatch(parseURLSafelyResult);
      if (null != result) {
        tmp2Result = LinkUtils;
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
    const parseURLSafelyResult = findCodedLinks.parseURLSafely(url);
    if (null != parseURLSafelyResult) {
      let tmpResult = findCodedLinks;
      const result = tmpResult.remainingPathFromDiscordHostMatch(parseURLSafelyResult);
      if (null != result) {
        tmpResult = LinkUtils;
        return tmpResult.tryParseChannelPath(result);
      }
    }
  }
};
export const canUseMediaPostEmbed = function canUseMediaPostEmbed(guildId, isMediaChannel) {
  const guild = GuildStore.getGuild(guildId);
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
