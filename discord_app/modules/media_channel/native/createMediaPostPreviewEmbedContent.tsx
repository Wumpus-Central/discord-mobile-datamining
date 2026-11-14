// discord_app/modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import LinkUtils from "../../links/LinkUtils.tsx";
import MediaPostEmbedUtils from "../MediaPostEmbedUtils.tsx";
import MediaPostThumbnailUtils from "../MediaPostThumbnailUtils.tsx";
import MediaFormatTesters from "../../messages/MediaFormatTesters.tsx";
import MediaFormatParamUtils from "../../media/MediaFormatParamUtils.tsx";
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
      guild = GuildStore.getGuild(media.guild_id);
      const user = UserStore.getUser(media.author_id);
      const channel = ChannelStore.getChannel(media.parent_channel_id);
      const channel1 = ChannelStore.getChannel(media.channel_id);
      let canViewChannelResult = null != channel;
      const guildId = SelectedGuildStore.getGuildId();
      if (canViewChannelResult) {
        canViewChannelResult = LinkUtils.canViewChannel(channel);
        const tmpResult = LinkUtils;
      }
      const obj2 = {
        mediaPostEmbedData: media,
        guild,
        parentChannel: channel,
        postThread: channel1,
        user,
        selectedGuildId: guildId,
        canAccess: canViewChannelResult,
      };
      const mediaPostEmbedCommonData = MediaPostEmbedUtils.getMediaPostEmbedCommonData(obj2);
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
              const obj3 = { username: mediaPostEmbedCommonData.authorName, usernameOnClick: null, channelName: null };
              const obj4 = {
                userId: user.id,
                message,
                author: userAuthorWithProcessedColor,
                roleStyle,
                messageChannelId: mediaPostEmbedCommonData.threadId,
              };
              obj3.usernameOnClick = formatUsernameOnClickDefault(obj4);
              obj3.channelName = mediaPostEmbedCommonData.channelName;
              let formatToPartsResult = intl6.formatToParts(util.t.mCytFr, obj3);
              const tmpResult10 = useAuthorWithProcessedColor;
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
              const tmpResult11 = MediaFormatTesters;
            }
            if (tmp15) {
              mediaPostEmbedCommonData.coverImage = MediaFormatParamUtils.withMediaFormat(
                mediaPostEmbedCommonData.coverImage,
                "webp",
              );
              const tmpResult12 = MediaFormatParamUtils;
            }
            if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
              const obj5 = {};
              const merged = Object.assign(mediaPostEmbedCommonData);
              obj5.blurredCoverImage = React3.resolveAssetSource(tmp10(15607)).uri;
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
              const isPendingScanVersionResult = ExplicitMediaRedactionUtils.isPendingScanVersion(
                mediaPostEmbedCommonData.contentScanVersion,
              );
              let result = value;
              if (value) {
                result = ExplicitMediaRedactionUtils.shouldAgeVerifyForExplicitMedia();
                const tmpResult14 = ExplicitMediaRedactionUtils;
              }
              let isVerifiedTeenResult = value;
              if (value) {
                isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
                const tmpResult15 = AgeVerificationUtils;
              }
              if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                if (null != mediaPostEmbedCommonData.coverImage) {
                  const obj6 = {};
                  const merged1 = Object.assign(mediaPostEmbedCommonData);
                  obj6.footer = formatToPartsResult;
                  let str8 = "";
                  let str9 = "";
                  if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                    const intl4 = util.intl;
                    str9 = intl4.string(util.t["F+x38C"]).toUpperCase();
                    const str10 = intl4.string(util.t["F+x38C"]);
                  }
                  obj6.spoiler = str9;
                  if (value) {
                    const intl5 = util.intl;
                    str8 = intl5.string(util.t.SpxcUR);
                  }
                  obj6.obscure = str8;
                  obj6.obscureAwaitingScan = isPendingScanVersionResult;
                  obj6.verifyAge = result;
                  obj6.obscureHideControls = isVerifiedTeenResult;
                  obj6.obscureIsOpaque = value;
                  obj6.ctaButtonColor = tmp11;
                  obj6.backgroundImage = MediaPostThumbnailUtils.getBackgroundImageUrl(
                    mediaPostEmbedCommonData.coverImage,
                  );
                  let obj7 = obj6;
                  const tmpResult16 = MediaPostThumbnailUtils;
                }
                return obj7;
              }
              obj7 = {};
              const merged2 = Object.assign(mediaPostEmbedCommonData);
              obj7.footer = formatToPartsResult;
              let str5 = "";
              let str6 = "";
              if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                const intl2 = util.intl;
                str6 = intl2.string(util.t["F+x38C"]).toUpperCase();
                const str7 = intl2.string(util.t["F+x38C"]);
              }
              obj7.spoiler = str6;
              if (value) {
                const intl3 = util.intl;
                str5 = intl3.string(util.t.SpxcUR);
              }
              obj7.obscure = str5;
              obj7.obscureAwaitingScan = isPendingScanVersionResult;
              obj7.verifyAge = result;
              obj7.obscureHideControls = isVerifiedTeenResult;
              obj7.obscureIsOpaque = value;
              obj7.ctaButtonColor = tmp11;
              const tmpResult13 = ExplicitMediaRedactionUtils;
            }
            tmp15 =
              null != mediaPostEmbedCommonData.coverImage &&
              !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage &&
              isAnimatedImageUrlResult &&
              flag;
          }
        }
        const intl = util.intl;
        const obj9 = { guildName: mediaPostEmbedCommonData.guildName };
        formatToPartsResult = intl.formatToParts(util.t.p4VdWJ, obj9);
      }
      const tmpResult9 = MediaPostEmbedUtils;
    }
  }
}
