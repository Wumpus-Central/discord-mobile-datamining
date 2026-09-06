// discord_app/modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import MediaPostEmbedUtils from "../MediaPostEmbedUtils.tsx";
import MediaPostThumbnailUtils from "../MediaPostThumbnailUtils.tsx";
import MediaFormatTesters from "../../messages/MediaFormatTesters.tsx";
import LinkUtils from "../../links/LinkUtils.tsx";
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import ExplicitMediaRedactionUtils from "../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import useAuthorWithProcessedColor from "../../messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "../../messages/native/renderer/system_messages/formatUsernameOnClick.tsx";
import MediaPostEmbedStore2 from "../MediaPostEmbedStore.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const MediaPostEmbedStore = MediaPostEmbedStore2;

({ Image: c3, processColor: closure_4 } = get_ActivityIndicator);
const FetchState = MediaPostEmbedStore2.FetchState;
let result = size.fileFinishedImporting("modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx");

export default function createMediaPostPreviewEmbedContent(message, roleStyle, url) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let obj = MediaPostEmbedUtils;
  const mediaPostEmbedChannelId = obj.getMediaPostEmbedChannelId(url);
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
        let tmpResult = LinkUtils;
        canViewChannelResult = tmpResult.canViewChannel(channel);
      }
      tmpResult = MediaPostEmbedUtils;
      obj = {
        mediaPostEmbedData: media,
        guild,
        parentChannel: channel,
        postThread: channel1,
        user,
        selectedGuildId: guildId,
        canAccess: canViewChannelResult,
      };
      const mediaPostEmbedCommonData = tmpResult.getMediaPostEmbedCommonData(obj);
      if (null == mediaPostEmbedCommonData) {
        return null;
      } else {
        if (null != mediaPostEmbedCommonData.authorName) {
          if (null != mediaPostEmbedCommonData.channelName) {
            if (null != user) {
              const userAuthorWithProcessedColor = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(
                user,
                mediaPostEmbedCommonData.postThread,
              );
              const intl6 = util.intl;
              obj = { username: mediaPostEmbedCommonData.authorName, usernameOnClick: null, channelName: null };
              const obj1 = {
                userId: user.id,
                message,
                author: userAuthorWithProcessedColor,
                roleStyle,
                messageChannelId: mediaPostEmbedCommonData.threadId,
              };
              obj.usernameOnClick = formatUsernameOnClickDefault(obj1);
              obj.channelName = mediaPostEmbedCommonData.channelName;
              let formatToPartsResult = intl6.formatToParts(util.t.mCytFr, obj);
              const tmpResult1 = useAuthorWithProcessedColor;
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
              const tmpResult2 = MediaFormatTesters;
            }
            if (tmp15) {
              const _HermesInternal = HermesInternal;
              mediaPostEmbedCommonData.coverImage = "" + mediaPostEmbedCommonData.coverImage + "?format=webp";
            }
            if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
              const obj2 = {};
              const merged = Object.assign(mediaPostEmbedCommonData);
              obj2.blurredCoverImage = React3.resolveAssetSource(tmp10(13244)).uri;
              obj2.footer = formatToPartsResult;
              obj2.ctaButtonColor = tmp11;
              return obj2;
            } else {
              value = DevSettingsStore.get("obscure_blur_effect_explicit_content_enabled");
              if (!value) {
                value = DevSettingsStore.get("obscure_blur_effect_gore_content_enabled");
              }
              if (!value) {
                value = DevSettingsStore.get("obscure_blur_effect_self_harm_content_enabled");
              }
              const isPendingScanVersionResult = ExplicitMediaRedactionUtils.isPendingScanVersion(
                mediaPostEmbedCommonData.contentScanVersion,
              );
              let result = value;
              if (value) {
                result = ExplicitMediaRedactionUtils.shouldAgeVerifyForExplicitMedia();
                const tmpResult4 = ExplicitMediaRedactionUtils;
              }
              let isVerifiedTeenResult = value;
              if (value) {
                isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
                const tmpResult5 = AgeVerificationUtils;
              }
              if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                if (null != mediaPostEmbedCommonData.coverImage) {
                  const obj3 = {};
                  const merged1 = Object.assign(mediaPostEmbedCommonData);
                  obj3.footer = formatToPartsResult;
                  let str9 = "";
                  let str10 = "";
                  if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                    const intl4 = util.intl;
                    str10 = intl4.string(util.t["F+x38C"]).toUpperCase();
                    const str11 = intl4.string(util.t["F+x38C"]);
                  }
                  obj3.spoiler = str10;
                  if (value) {
                    const intl5 = util.intl;
                    str9 = intl5.string(util.t.SpxcUR);
                  }
                  obj3.obscure = str9;
                  obj3.obscureAwaitingScan = isPendingScanVersionResult;
                  obj3.verifyAge = result;
                  obj3.obscureHideControls = isVerifiedTeenResult;
                  obj3.obscureIsOpaque = value;
                  obj3.ctaButtonColor = tmp11;
                  obj3.backgroundImage = MediaPostThumbnailUtils.getBackgroundImageUrl(
                    mediaPostEmbedCommonData.coverImage,
                  );
                  let obj4 = obj3;
                  const tmpResult6 = MediaPostThumbnailUtils;
                }
                return obj4;
              }
              obj4 = {};
              const merged2 = Object.assign(mediaPostEmbedCommonData);
              obj4.footer = formatToPartsResult;
              let str6 = "";
              let str7 = "";
              if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                const intl2 = util.intl;
                str7 = intl2.string(util.t["F+x38C"]).toUpperCase();
                const str8 = intl2.string(util.t["F+x38C"]);
              }
              obj4.spoiler = str7;
              if (value) {
                const intl3 = util.intl;
                str6 = intl3.string(util.t.SpxcUR);
              }
              obj4.obscure = str6;
              obj4.obscureAwaitingScan = isPendingScanVersionResult;
              obj4.verifyAge = result;
              obj4.obscureHideControls = isVerifiedTeenResult;
              obj4.obscureIsOpaque = value;
              obj4.ctaButtonColor = tmp11;
              const tmpResult3 = ExplicitMediaRedactionUtils;
            }
            tmp15 =
              null != mediaPostEmbedCommonData.coverImage &&
              !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage &&
              isAnimatedImageUrlResult &&
              flag;
          }
        }
        const intl = util.intl;
        const obj5 = { guildName: mediaPostEmbedCommonData.guildName };
        formatToPartsResult = intl.formatToParts(util.t.p4VdWJ, obj5);
      }
    }
  }
}
