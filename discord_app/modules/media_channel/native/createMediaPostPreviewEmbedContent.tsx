// discord_app/modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../intl/index.native.tsx";
import MediaPostEmbedUtils from "../MediaPostEmbedUtils.tsx";
import MediaPostThumbnailUtils from "../MediaPostThumbnailUtils.tsx";
import MediaFormatTesters from "../../messages/MediaFormatTesters.tsx";
import LinkUtils from "../../links/LinkUtils.tsx";
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import ExplicitMediaRedactionUtils from "../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import useAuthorWithProcessedColor from "../../messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "../../messages/native/renderer/system_messages/formatUsernameOnClick.tsx";
import MediaPostEmbedStore2 from "../MediaPostEmbedStore.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const MediaPostEmbedStore = MediaPostEmbedStore2;

let c3;
let closure_4;
({ Image: c3, processColor: closure_4 } = react_native);
const FetchState = MediaPostEmbedStore2.FetchState;
let result = size.fileFinishedImporting("modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx");

export default function createMediaPostPreviewEmbedContent(message, roleStyle, url) {
  let obj4;
  let str10;
  let str6;
  let str7;
  let str9;
  let tmpResult14;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const obj = MediaPostEmbedUtils;
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
        const tmpResult = LinkUtils;
        canViewChannelResult = tmpResult.canViewChannel(channel);
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
      const tmpResult8 = MediaPostEmbedUtils;
      const mediaPostEmbedCommonData = tmpResult8.getMediaPostEmbedCommonData(obj2);
      if (null == mediaPostEmbedCommonData) {
        return null;
      } else {
        if (null != mediaPostEmbedCommonData.authorName) {
          if (null != mediaPostEmbedCommonData.channelName) {
            let formatToPartsResult;
            let tmp11;
            let tmp10;
            if (null != user) {
              const tmpResult9 = useAuthorWithProcessedColor;
              const userAuthorWithProcessedColor = tmpResult9.getUserAuthorWithProcessedColor(
                user,
                mediaPostEmbedCommonData.postThread,
              );
              const intl6 = intl7.intl;
              const formatToParts = intl6.formatToParts;
              const obj3 = {
                username: mediaPostEmbedCommonData.authorName,
                usernameOnClick: formatUsernameOnClickDefault(obj4),
                channelName: mediaPostEmbedCommonData.channelName,
              };
              const mCytFr = intl7.t.mCytFr;
              obj4 = {
                userId: user.id,
                message,
                author: userAuthorWithProcessedColor,
                roleStyle,
                messageChannelId: mediaPostEmbedCommonData.threadId,
              };
              formatToPartsResult = formatToParts(mCytFr, obj3);
            }
            if (false === mediaPostEmbedCommonData.canAccess) {
              tmp11 = React3(nativeDefault.unsafe_rawColors.TEAL_430);
              tmp10 = importDefault;
            } else {
              tmp10 = importDefault;
              tmp11 = React3(nativeDefault.unsafe_rawColors.BRAND_500);
            }
            let isAnimatedImageUrlResult = null != mediaPostEmbedCommonData.coverImage;
            if (isAnimatedImageUrlResult) {
              const tmpResult10 = MediaFormatTesters;
              isAnimatedImageUrlResult = tmpResult10.isAnimatedImageUrl(mediaPostEmbedCommonData.coverImage);
            }
            const tmp15 =
              null != mediaPostEmbedCommonData.coverImage &&
              !mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage &&
              isAnimatedImageUrlResult &&
              flag;
            if (tmp15) {
              const _HermesInternal = HermesInternal;
              mediaPostEmbedCommonData.coverImage = "" + mediaPostEmbedCommonData.coverImage + "?format=webp";
            }
            if (mediaPostEmbedCommonData.shouldShowBlurredThumbnailImage) {
              const obj5 = {
                blurredCoverImage: _false.resolveAssetSource(tmp10(13104)).uri,
                footer: formatToPartsResult,
                ctaButtonColor: tmp11,
              };
              const merged = Object.assign(mediaPostEmbedCommonData);
              return obj5;
            } else {
              const value =
                DevSettingsStore.get("obscure_blur_effect_explicit_content_enabled") ||
                DevSettingsStore.get("obscure_blur_effect_gore_content_enabled") ||
                DevSettingsStore.get("obscure_blur_effect_self_harm_content_enabled");
              const tmpResult11 = ExplicitMediaRedactionUtils;
              const isPendingScanVersionResult = tmpResult11.isPendingScanVersion(
                mediaPostEmbedCommonData.contentScanVersion,
              );
              let result = value;
              if (result) {
                const tmpResult12 = ExplicitMediaRedactionUtils;
                result = tmpResult12.shouldAgeVerifyForExplicitMedia();
              }
              let isVerifiedTeenResult = value;
              if (isVerifiedTeenResult) {
                const tmpResult13 = AgeVerificationUtils;
                isVerifiedTeenResult = tmpResult13.isVerifiedTeen();
              }
              if (mediaPostEmbedCommonData.shouldContainMediaWithBackground) {
                let obj8;
                if (null != mediaPostEmbedCommonData.coverImage) {
                  const obj6 = {
                    footer: formatToPartsResult,
                    spoiler: str10,
                    obscure: str9,
                    obscureAwaitingScan: isPendingScanVersionResult,
                    verifyAge: result,
                    obscureHideControls: isVerifiedTeenResult,
                    obscureIsOpaque: value,
                    ctaButtonColor: tmp11,
                    backgroundImage: tmpResult14.getBackgroundImageUrl(mediaPostEmbedCommonData.coverImage),
                  };
                  const merged1 = Object.assign(mediaPostEmbedCommonData);
                  str9 = "";
                  str10 = "";
                  if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                    const intl4 = intl7.intl;
                    const str11 = intl4.string(intl7.t["F+x38C"]);
                    str10 = str11.toUpperCase();
                  }
                  if (value) {
                    const intl5 = intl7.intl;
                    str9 = intl5.string(intl7.t.SpxcUR);
                  }
                  obj8 = obj6;
                  tmpResult14 = MediaPostThumbnailUtils;
                }
                return obj8;
              }
              obj8 = {
                footer: formatToPartsResult,
                spoiler: str7,
                obscure: str6,
                obscureAwaitingScan: isPendingScanVersionResult,
                verifyAge: result,
                obscureHideControls: isVerifiedTeenResult,
                obscureIsOpaque: value,
                ctaButtonColor: tmp11,
              };
              const merged2 = Object.assign(mediaPostEmbedCommonData);
              str6 = "";
              str7 = "";
              if (true === mediaPostEmbedCommonData.shouldSpoiler) {
                const intl2 = intl7.intl;
                const str8 = intl2.string(intl7.t["F+x38C"]);
                str7 = str8.toUpperCase();
              }
              if (value) {
                const intl3 = intl7.intl;
                str6 = intl3.string(intl7.t.SpxcUR);
              }
            }
          }
        }
        const intl = intl7.intl;
        const obj9 = { guildName: mediaPostEmbedCommonData.guildName };
        formatToPartsResult = intl.formatToParts(intl7.t.p4VdWJ, obj9);
      }
    }
  }
}
