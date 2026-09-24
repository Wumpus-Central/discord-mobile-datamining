// === Module 13646: createMediaPostPreviewEmbedContent ===

// Module 13646 (createMediaPostPreviewEmbedContent)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 4977 */;
import MediaPostThumbnailUtils from "MediaPostThumbnailUtils" /* 4978 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4979 */;
import LinkUtils from "LinkUtils" /* 4983 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5041 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7930 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8308 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8310 */;
import MediaPostEmbedStore2 from "MediaPostEmbedStore" /* 11775 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 4828 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildStore from "GuildStore" /* 2066 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4650 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const MediaPostEmbedStore = MediaPostEmbedStore2;

({ Image: c3, processColor: closure_4 } = get_ActivityIndicator);
const FetchState = MediaPostEmbedStore2.FetchState;
let result = size.fileFinishedImporting("modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx");

export default function createMediaPostPreviewEmbedContent(message, roleStyle, url) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const mediaPostEmbedChannelId = MediaPostEmbedUtils.getMediaPostEmbedChannelId(url);
  if (null == mediaPostEmbedChannelId) {
    return null;
  } else if (MediaPostEmbedStore.getEmbedFetchState(mediaPostEmbedChannelId) !== FetchState.FETCHED) {
    return null;
  } else {
    const mediaPostEmbed = MediaPostEmbedStore.getMediaPostEmbed(mediaPostEmbedChannelId);
    let media;
    if (mediaPostEmbed != null) {
      media = mediaPostEmbed.media;
    }
    if (null == media) {
      return null;
    } else {
      const guild = GuildStore.getGuild(media.guild_id);
      const user = UserStore.getUser(media.author_id);
      const channel = ChannelStore.getChannel(media.parent_channel_id);
      const channel1 = ChannelStore.getChannel(media.channel_id);
      let canViewChannelResult = null != channel;
      const guildId = SelectedGuildStore.getGuildId();
      if (canViewChannelResult) {
        canViewChannelResult = LinkUtils.canViewChannel(channel);
        const tmpResult = LinkUtils;
      }
      const obj2 = { mediaPostEmbedData: media, guild, parentChannel: channel, postThread: channel1, user, selectedGuildId: guildId, canAccess: canViewChannelResult };
      const mediaPostEmbedCommonData = MediaPostEmbedUtils.getMediaPostEmbedCommonData(obj2);
      if (null == mediaPostEmbedCommonData) {
        return null;
      } else {
        if (null != mediaPostEmbedCommonData.authorName) {
          if (null != mediaPostEmbedCommonData.channelName) {
            if (null != user) {
              const userAuthorWithProcessedColor = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, mediaPostEmbedCommonData.postThread);
              const intl6 = util.intl;
              const obj3 = { username: mediaPostEmbedCommonData.authorName, usernameOnClick: null, channelName: null };
              const obj4 = { userId: user.id, message, author: userAuthorWithProcessedColor, roleStyle, messageChannelId: mediaPostEmbedCommonData.threadId };
              obj3.usernameOnClick = formatUsernameOnClickDefault(obj4);
              obj3.channelName = mediaPostEmbedCommonData.channelName;
              let formatToPartsResult = intl6.formatToParts(util.t.mCytFr, obj3);
              const tmpResult9 = useAuthorWithProcessedColor;
            }
            if (false === mediaPostEmbedCommonData.canAccess) {
              let tmp11 = React4(nativeDefault.unsafe_rawColors.TEAL_430);
              let tmp10 = importDefault;
            } else {
              tmp10 = importDefault;
              tmp11 = React4(nativeDefault.unsafe_rawColors.BRAND_500);
            }
            let isAnimatedImageUrlResult = null != mediaPostEmbedCommonData.coverImage;
            if (isAnimatedImageUrlResult) {
              isAnimatedImageUrlResult = MediaFormatTesters.isAnimatedImageUrl(mediaPostEmbedCommonData.coverImage);
              const tmpResult10 = MediaFormatTesters;
            }
            if (tmp15) {
              const _HermesInternal = HermesInternal;
              mediaPostEmbedCommonData.coverImage = "" + mediaPostEmbedCommonData.coverImage + "?format=webp";
            }
            if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
              const obj5 = {};
              const merged = Object.assign(mediaPostEmbedCommonData);
              obj5.blurredCoverImage = React3.resolveAssetSource(tmp10(13647)).uri;
              obj5.footer = formatToPartsResult;
              obj5.ctaButtonColor = tmp11;
              return obj5;
            } else {
              value = DevSettingsStore.get("obscure_blur_effect_explicit_content_enabled");
              if (!value) {
                value = DevSettingsStore.get("obscure_blur_effect_gore_content_enabled");
              }
              if (!value) {
                value = DevSettingsStore.get("obscure_blur_effect_self_harm_content_enabled");
              }
              const isPendingScanVersionResult = ExplicitMediaRedactionUtils.isPendingScanVersion(mediaPostEmbedCommonData.contentScanVersion);
              let result = value;
              if (value) {
                result = ExplicitMediaRedactionUtils.shouldAgeVerifyForExplicitMedia();
                const tmpResult12 = ExplicitMediaRedactionUtils;
              }
              let isVerifiedTeenResult = value;
              if (value) {
                isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
                const tmpResult13 = AgeVerificationUtils;
              }
              if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                if (null != mediaPostEmbedCommonData.coverImage) {
                  const obj6 = {};
                  const merged1 = Object.assign(mediaPostEmbedCommonData);
                  obj6.footer = formatToPartsResult;
                  let str9 = "";
                  let str10 = "";
                  if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                    const intl4 = util.intl;
                    str10 = intl4.string(util.t["F+x38C"]).toUpperCase();
                    const str11 = intl4.string(util.t["F+x38C"]);
                  }
                  obj6.spoiler = str10;
                  if (value) {
                    const intl5 = util.intl;
                    str9 = intl5.string(util.t.SpxcUR);
                  }
                  obj6.obscure = str9;
                  obj6.obscureAwaitingScan = isPendingScanVersionResult;
                  obj6.verifyAge = result;
                  obj6.obscureHideControls = isVerifiedTeenResult;
                  obj6.obscureIsOpaque = value;
                  obj6.ctaButtonColor = tmp11;
                  obj6.backgroundImage = MediaPostThumbnailUtils.getBackgroundImageUrl(mediaPostEmbedCommonData.coverImage);
                  let obj8 = obj6;
                  const tmpResult14 = MediaPostThumbnailUtils;
                }
                return obj8;
              }
              obj8 = {};
              const merged2 = Object.assign(mediaPostEmbedCommonData);
              obj8.footer = formatToPartsResult;
              let str6 = "";
              let str7 = "";
              if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                const intl2 = util.intl;
                str7 = intl2.string(util.t["F+x38C"]).toUpperCase();
                const str8 = intl2.string(util.t["F+x38C"]);
              }
              obj8.spoiler = str7;
              if (value) {
                const intl3 = util.intl;
                str6 = intl3.string(util.t.SpxcUR);
              }
              obj8.obscure = str6;
              obj8.obscureAwaitingScan = isPendingScanVersionResult;
              obj8.verifyAge = result;
              obj8.obscureHideControls = isVerifiedTeenResult;
              obj8.obscureIsOpaque = value;
              obj8.ctaButtonColor = tmp11;
              const tmpResult11 = ExplicitMediaRedactionUtils;
            }
            tmp15 = null != mediaPostEmbedCommonData.coverImage && !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage && isAnimatedImageUrlResult && flag;
          }
        }
        const intl = util.intl;
        const obj9 = { guildName: mediaPostEmbedCommonData.guildName };
        formatToPartsResult = intl.formatToParts(util.t.p4VdWJ, obj9);
      }
      const tmpResult8 = MediaPostEmbedUtils;
    }
  }
};