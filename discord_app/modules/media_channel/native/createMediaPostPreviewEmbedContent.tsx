// discord_app/modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx
import get_ActivityIndicator from "MAX_THUMBNAIL_COUNT";
import getUserAgnosticState from "getUserAgnosticState";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import getMediaPostEmbed from "getMediaPostEmbed";
import { FetchState } from "getMediaPostEmbed";

let c3;
let c4;
({ Image: c3, processColor: c4 } = get_ActivityIndicator);
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx");

export default function createMediaPostPreviewEmbedContent(arg0, arg1, url) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let obj = require(4470) /* getMediaPostEmbedCommonData */;
  const mediaPostEmbedChannelId = obj.getMediaPostEmbedChannelId(url);
  if (null == mediaPostEmbedChannelId) {
    return null;
  } else {
    if (embedFetchState.getEmbedFetchState(mediaPostEmbedChannelId) !== FetchState.FETCHED) {
      return null;
    } else {
      const mediaPostEmbed = obj15.getMediaPostEmbed(mediaPostEmbedChannelId);
      let media;
      if (mediaPostEmbed != null) {
        media = mediaPostEmbed.media;
      }
      if (null == media) {
        return null;
      } else {
        guild = guild.getGuild(media.guild_id);
        user = user.getUser(media.author_id);
        const channel = store.getChannel(media.parent_channel_id);
        const channel1 = store.getChannel(media.channel_id);
        let canViewChannelResult = null != channel;
        guildId = guildId.getGuildId();
        if (canViewChannelResult) {
          let tmpResult = tmp(4476);
          canViewChannelResult = tmpResult.canViewChannel(channel);
        }
        tmpResult = tmp(4470);
        obj = { mediaPostEmbedData: null, guild: null, parentChannel: null, postThread: null, user: null, selectedGuildId: null, canAccess: null };
        obj[0] = media;
        obj[1] = guild;
        obj[2] = channel;
        obj[3] = channel1;
        obj[4] = user;
        obj[5] = guildId;
        obj[6] = canViewChannelResult;
        const mediaPostEmbedCommonData = tmpResult.getMediaPostEmbedCommonData(obj);
        if (null == mediaPostEmbedCommonData) {
          return null;
        } else {
          if (null != mediaPostEmbedCommonData.authorName) {
            if (null != mediaPostEmbedCommonData.channelName) {
              if (null != user) {
                const userAuthorWithProcessedColor = tmp(7879).getUserAuthorWithProcessedColor(user, mediaPostEmbedCommonData.postThread);
                const intl6 = tmp(1236).intl;
                obj = { username: null, usernameOnClick: null, channelName: null };
                obj[0] = mediaPostEmbedCommonData.authorName;
                const obj1 = { userId: null, message: null, author: null, roleStyle: null, messageChannelId: null };
                obj1[0] = user.id;
                obj1[1] = arg0;
                obj1[2] = userAuthorWithProcessedColor;
                obj1[3] = arg1;
                obj1[4] = mediaPostEmbedCommonData.threadId;
                obj[1] = importDefault(7881)(obj1);
                obj[2] = mediaPostEmbedCommonData.channelName;
                let formatToPartsResult = intl6.formatToParts(tmp(1236).t.mCytFr, obj);
                const tmpResult1 = tmp(7879);
              }
              if (false === mediaPostEmbedCommonData.canAccess) {
                let tmp11 = callback(importDefault(712).unsafe_rawColors.TEAL_430);
                let tmp10 = importDefault;
              } else {
                tmp10 = importDefault;
                tmp11 = callback(importDefault(712).unsafe_rawColors.BRAND_500);
              }
              let isAnimatedImageUrlResult = null != mediaPostEmbedCommonData.coverImage;
              if (isAnimatedImageUrlResult) {
                isAnimatedImageUrlResult = tmp(4472).isAnimatedImageUrl(mediaPostEmbedCommonData.coverImage);
                const tmpResult2 = tmp(4472);
              }
              if (tmp15) {
                const _HermesInternal = HermesInternal;
                mediaPostEmbedCommonData.coverImage = "" + mediaPostEmbedCommonData.coverImage + "?format=webp";
              }
              if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
                const obj2 = {};
                const merged = Object.assign(mediaPostEmbedCommonData);
                obj2.blurredCoverImage = closure_3.resolveAssetSource(tmp10(12539)).uri;
                obj2.footer = formatToPartsResult;
                obj2.ctaButtonColor = tmp11;
                return obj2;
              } else {
                let value = getUserAgnosticState.get("obscure_blur_effect_explicit_content_enabled");
                if (!value) {
                  value = obj7.get("obscure_blur_effect_gore_content_enabled");
                }
                if (!value) {
                  value = obj7.get("obscure_blur_effect_self_harm_content_enabled");
                }
                const isPendingScanVersionResult = tmp(6968).isPendingScanVersion(mediaPostEmbedCommonData.contentScanVersion);
                let result = value;
                if (value) {
                  result = tmp(6968).shouldAgeVerifyForExplicitMedia();
                  const tmpResult4 = tmp(6968);
                }
                let isVerifiedTeenResult = value;
                if (value) {
                  isVerifiedTeenResult = tmp(4500).isVerifiedTeen();
                  const tmpResult5 = tmp(4500);
                }
                if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                  if (null != mediaPostEmbedCommonData.coverImage) {
                    const obj3 = {};
                    const merged1 = Object.assign(mediaPostEmbedCommonData);
                    obj3.footer = formatToPartsResult;
                    let str9 = "";
                    let str10 = "";
                    if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                      const intl4 = tmp(1236).intl;
                      str10 = intl4.string(tmp(1236).t["F+x38C"]).toUpperCase();
                      const str11 = intl4.string(tmp(1236).t["F+x38C"]);
                    }
                    obj3.spoiler = str10;
                    if (value) {
                      const intl5 = tmp(1236).intl;
                      str9 = intl5.string(tmp(1236).t.SpxcUR);
                    }
                    obj3.obscure = str9;
                    obj3.obscureAwaitingScan = isPendingScanVersionResult;
                    obj3.verifyAge = result;
                    obj3.obscureHideControls = isVerifiedTeenResult;
                    obj3.obscureIsOpaque = value;
                    obj3.ctaButtonColor = tmp11;
                    obj3.backgroundImage = tmp(4471).getBackgroundImageUrl(mediaPostEmbedCommonData.coverImage);
                    let obj4 = obj3;
                    const tmpResult6 = tmp(4471);
                  }
                  return obj4;
                }
                obj4 = {};
                const merged2 = Object.assign(mediaPostEmbedCommonData);
                obj4.footer = formatToPartsResult;
                let str6 = "";
                let str7 = "";
                if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                  const intl2 = tmp(1236).intl;
                  str7 = intl2.string(tmp(1236).t["F+x38C"]).toUpperCase();
                  const str8 = intl2.string(tmp(1236).t["F+x38C"]);
                }
                obj4.spoiler = str7;
                if (value) {
                  const intl3 = tmp(1236).intl;
                  str6 = intl3.string(tmp(1236).t.SpxcUR);
                }
                obj4.obscure = str6;
                obj4.obscureAwaitingScan = isPendingScanVersionResult;
                obj4.verifyAge = result;
                obj4.obscureHideControls = isVerifiedTeenResult;
                obj4.obscureIsOpaque = value;
                obj4.ctaButtonColor = tmp11;
                const tmpResult3 = tmp(6968);
              }
              tmp15 = null != mediaPostEmbedCommonData.coverImage && !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage && isAnimatedImageUrlResult && flag;
            }
          }
          const intl = tmp(1236).intl;
          const obj5 = { guildName: null };
          obj5[0] = mediaPostEmbedCommonData.guildName;
          formatToPartsResult = intl.formatToParts(tmp(1236).t.p4VdWJ, obj5);
        }
      }
    }
    obj15 = embedFetchState;
  }
};