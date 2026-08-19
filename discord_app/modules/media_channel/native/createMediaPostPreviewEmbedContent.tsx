// discord_app/modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import ME from "../../links/LinkUtils.tsx";
import urlMatchesFileExtension from "../../messages/MediaFormatTesters.tsx";
import getMediaPostEmbedCommonData from "../MediaPostEmbedUtils.tsx";
import MAX_THUMBNAIL_COUNT from "../MediaPostThumbnailUtils.tsx";
import useAgeVerificationRunner from "../../age_assurance/AgeVerificationUtils.tsx";
import redactionSettingToRenderedString from "../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import getMessageAuthorWithProcessedColor from "../../messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "../../messages/native/renderer/system_messages/formatUsernameOnClick.tsx";
import getMediaPostEmbed from "../MediaPostEmbedStore.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import getUserAgnosticState from "../../devtools/dev_settings/DevSettingsStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import handleConnectionOpen from "../../../stores/SelectedGuildStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import getMediaPostEmbed2 from "../MediaPostEmbedStore.tsx";

({ Image: c3, processColor: c4 } = get_ActivityIndicator);
const FetchState = getMediaPostEmbed.FetchState;
let result = obj132.fileFinishedImporting("modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx");

export default function createMediaPostPreviewEmbedContent(arg0, arg1, url) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let obj = getMediaPostEmbedCommonData;
  const mediaPostEmbedChannelId = obj.getMediaPostEmbedChannelId(url);
  if (null == mediaPostEmbedChannelId) {
    return null;
  } else if (embedFetchState.getEmbedFetchState(mediaPostEmbedChannelId) !== FetchState.FETCHED) {
    return null;
  } else {
    const mediaPostEmbed = embedFetchState.getMediaPostEmbed(mediaPostEmbedChannelId);
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
        let tmpResult = ME;
        canViewChannelResult = tmpResult.canViewChannel(channel);
      }
      tmpResult = getMediaPostEmbedCommonData;
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
              const userAuthorWithProcessedColor = getMessageAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, mediaPostEmbedCommonData.postThread);
              const intl6 = getSystemLocale.intl;
              obj = { username: null, usernameOnClick: null, channelName: null };
              obj[0] = mediaPostEmbedCommonData.authorName;
              obj1 = { userId: null, message: null, author: null, roleStyle: null, messageChannelId: null };
              obj1[0] = user.id;
              obj1[1] = arg0;
              obj1[2] = userAuthorWithProcessedColor;
              obj1[3] = arg1;
              obj1[4] = mediaPostEmbedCommonData.threadId;
              obj[1] = formatUsernameOnClickDefault(obj1);
              obj[2] = mediaPostEmbedCommonData.channelName;
              let formatToPartsResult = intl6.formatToParts(getSystemLocale.t.mCytFr, obj);
              const tmpResult1 = getMessageAuthorWithProcessedColor;
            }
            if (false === mediaPostEmbedCommonData.canAccess) {
              let tmp11 = callback(ThemesDefault.unsafe_rawColors.TEAL_430);
              let tmp10 = importDefault;
            } else {
              tmp10 = importDefault;
              tmp11 = callback(ThemesDefault.unsafe_rawColors.BRAND_500);
            }
            let isAnimatedImageUrlResult = null != mediaPostEmbedCommonData.coverImage;
            if (isAnimatedImageUrlResult) {
              isAnimatedImageUrlResult = urlMatchesFileExtension.isAnimatedImageUrl(mediaPostEmbedCommonData.coverImage);
              const tmpResult2 = urlMatchesFileExtension;
            }
            if (tmp15) {
              const _HermesInternal = HermesInternal;
              mediaPostEmbedCommonData.coverImage = "" + mediaPostEmbedCommonData.coverImage + "?format=webp";
            }
            if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
              const obj2 = {};
              const merged = Object.assign(mediaPostEmbedCommonData);
              obj2.blurredCoverImage = closure_3.resolveAssetSource(tmp10(12795)).uri;
              obj2.footer = formatToPartsResult;
              obj2.ctaButtonColor = tmp11;
              return obj2;
            } else {
              let value = store.get("obscure_blur_effect_explicit_content_enabled");
              if (!value) {
                value = store.get("obscure_blur_effect_gore_content_enabled");
              }
              if (!value) {
                value = store.get("obscure_blur_effect_self_harm_content_enabled");
              }
              const isPendingScanVersionResult = redactionSettingToRenderedString.isPendingScanVersion(mediaPostEmbedCommonData.contentScanVersion);
              let result = value;
              if (value) {
                result = redactionSettingToRenderedString.shouldAgeVerifyForExplicitMedia();
                const tmpResult4 = redactionSettingToRenderedString;
              }
              let isVerifiedTeenResult = value;
              if (value) {
                isVerifiedTeenResult = useAgeVerificationRunner.isVerifiedTeen();
                const tmpResult5 = useAgeVerificationRunner;
              }
              if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                if (null != mediaPostEmbedCommonData.coverImage) {
                  const obj3 = {};
                  const merged1 = Object.assign(mediaPostEmbedCommonData);
                  obj3.footer = formatToPartsResult;
                  let str9 = "";
                  let str10 = "";
                  if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                    const intl4 = getSystemLocale.intl;
                    str10 = intl4.string(getSystemLocale.t["F+x38C"]).toUpperCase();
                    const str11 = intl4.string(getSystemLocale.t["F+x38C"]);
                  }
                  obj3.spoiler = str10;
                  if (value) {
                    const intl5 = getSystemLocale.intl;
                    str9 = intl5.string(getSystemLocale.t.SpxcUR);
                  }
                  obj3.obscure = str9;
                  obj3.obscureAwaitingScan = isPendingScanVersionResult;
                  obj3.verifyAge = result;
                  obj3.obscureHideControls = isVerifiedTeenResult;
                  obj3.obscureIsOpaque = value;
                  obj3.ctaButtonColor = tmp11;
                  obj3.backgroundImage = MAX_THUMBNAIL_COUNT.getBackgroundImageUrl(mediaPostEmbedCommonData.coverImage);
                  let obj4 = obj3;
                  const tmpResult6 = MAX_THUMBNAIL_COUNT;
                }
                return obj4;
              }
              obj4 = {};
              const merged2 = Object.assign(mediaPostEmbedCommonData);
              obj4.footer = formatToPartsResult;
              let str6 = "";
              let str7 = "";
              if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                const intl2 = getSystemLocale.intl;
                str7 = intl2.string(getSystemLocale.t["F+x38C"]).toUpperCase();
                const str8 = intl2.string(getSystemLocale.t["F+x38C"]);
              }
              obj4.spoiler = str7;
              if (value) {
                const intl3 = getSystemLocale.intl;
                str6 = intl3.string(getSystemLocale.t.SpxcUR);
              }
              obj4.obscure = str6;
              obj4.obscureAwaitingScan = isPendingScanVersionResult;
              obj4.verifyAge = result;
              obj4.obscureHideControls = isVerifiedTeenResult;
              obj4.obscureIsOpaque = value;
              obj4.ctaButtonColor = tmp11;
              const tmpResult3 = redactionSettingToRenderedString;
            }
            tmp15 = null != mediaPostEmbedCommonData.coverImage && !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage && isAnimatedImageUrlResult && flag;
          }
        }
        const intl = getSystemLocale.intl;
        const obj5 = { guildName: null };
        obj5[0] = mediaPostEmbedCommonData.guildName;
        formatToPartsResult = intl.formatToParts(getSystemLocale.t.p4VdWJ, obj5);
      }
    }
  }
};