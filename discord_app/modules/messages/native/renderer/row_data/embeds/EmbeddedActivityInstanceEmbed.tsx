// === Module 13066: EmbeddedActivityInstanceEmbed ===

// Module 13066 (EmbeddedActivityInstanceEmbed)
import intl10 from "intl" /* 1126 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6658 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10024 */;
import ContentClassificationVisibility from "ContentClassificationVisibility" /* 11552 */;
import CodedLinksTypes from "CodedLinksTypes" /* 11553 */;
import getPlayInContext from "getPlayInContext" /* 11554 */;
import nativeAppMessageEmbedUtil from "nativeAppMessageEmbedUtil" /* 11555 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 11756 */;
import useEmbeddedActivityParticipantAvatarUris from "useEmbeddedActivityParticipantAvatarUris" /* 13055 */;
import EmbeddedApplicationInstanceUtils from "EmbeddedApplicationInstanceUtils" /* 13067 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx");

export const createActivityInstanceEmbed = function createActivityInstanceEmbed(message) {
  let activityInstance;
  let application;
  let canLaunchInChannel;
  let getActivityLaunchURL;
  let getAppGradientColors;
  let instanceId;
  let intl3;
  let intl9;
  let obj11;
  let obj7;
  ({ application, activityInstance } = message);
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null != application) {
    let id1;
    if (activityInstance != null) {
      id1 = activityInstance.id;
    }
    if (null != id1) {
      if (null != channel) {
        let id;
        const currentUser = UserStore.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        const obj2 = ContentClassificationVisibility;
        const contentClassificationVisibility = obj2.getContentClassificationVisibility(application.content_classification, channel, nsfwAllowed);
        if (ContentClassificationVisibility.ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          let combined;
          let str2;
          let stringResult2;
          const channel_id = message.channel_id;
          const id4 = activityInstance.id;
          const guild_id = channel.guild_id;
          let str = channel_id;
          if (channel.isThread()) {
            str = channel.parent_id;
          }
          const getEmbeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden;
          if (str == null) {
            str = "";
          }
          const embeddedActivitiesForChannelIncludingHidden = getEmbeddedActivitiesForChannelIncludingHidden(str);
          const found = embeddedActivitiesForChannelIncludingHidden.find((applicationId) => applicationId.applicationId === application.id);
          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
          const obj = { activity: found, applicationId: application.id, guildId: guild_id, channelId: channel_id };
          const tmp5Result = useEmbeddedActivityParticipantAvatarUris;
          const embeddedActivityParticipantAvatarUris = tmp5Result.getEmbeddedActivityParticipantAvatarUris(obj);
          id = application.id;
          let value;
          if (found != null) {
            const userIds = found.userIds;
            const iter = userIds.values();
            value = iter.next().value;
          }
          let stringResult = null;
          if (null != value) {
            const findActivityResult = PresenceStore.findActivity(value, (application_id) => application_id.application_id === id);
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            stringResult = details;
          }
          EmbeddedApplicationInstanceUtils;
          if (null != found) {
            if (stringResult == null) {
              const intl5 = intl10.intl;
              stringResult = intl5.string(intl10.t.oQn0h4);
            }
            const length = embeddedActivityParticipantAvatarUris.length;
            const intl6 = intl10.intl;
            const _HermesInternal = HermesInternal;
            combined = "" + length + " " + intl6.string(intl10.t.BMTj28);
            str2 = stringResult;
          } else {
            let stringResult1;
            const disabled = tmp17.disabled;
            const intl4 = intl10.intl;
            const string = intl4.string;
            const t = intl10.t;
            if (disabled) {
              stringResult1 = string(t.JBnc7N);
            } else {
              stringResult1 = string(t.cX9uLZ);
            }
            str2 = stringResult;
            if (stringResult == null) {
              str2 = stringResult1;
            }
            combined = null;
          }
          const tmp5Result8 = getPlayInContext;
          const playInContext = tmp5Result8.getPlayInContext(application.id, channel_id);
          let isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
          let appIconSrc = null;
          ({ instanceId, canLaunchInChannel } = playInContext);
          if (null != application.icon) {
            const tmp5Result9 = nativeAppMessageEmbedUtil;
            appIconSrc = tmp5Result9.getAppIconSrc(application.id, application.icon, application.bot);
          }
          if (null == instanceId) {
            const intl8 = intl10.intl;
            stringResult2 = intl8.string(intl10.t.RscU7I);
          } else {
            const intl7 = intl10.intl;
            stringResult2 = intl7.string(intl10.t.VJlc0S);
          }
          const obj4 = { id: "play_in_channel", label: stringResult2, disabled: isCurrentlyInInstance };
          if (!isCurrentlyInInstance) {
            isCurrentlyInInstance = false === canLaunchInChannel;
          }
          const items = [obj4];
          const tmp24 = null == ApplicationStore.getApplication(application.id) && false === ApplicationStore.isFetchingApplication(application.id);
          if (tmp24) {
            const tmp5Result10 = ApplicationActionCreators;
            const application1 = tmp5Result10.fetchApplication(application.id);
          }
          const obj6 = { displayType: CodedLinksTypes.AppMessageEmbedDisplayType.DISPLAY, appId: application.id, messageId: message.id, title: intl9.string(intl10.t.pkq6Vq), header: str2, info: null, tagline: null, staticBannerSrc: null, iconSrc: appIconSrc, embedUrl: getActivityLaunchURL(obj7), bannerRatio: "bot", actions: items, extendedType: CodedLinkExtendedType.APP_MESSAGE_EMBED, gradientColors: getAppGradientColors(appIconSrc), backgroundColor: 0, borderColor: 0, headerColor: 0, headerText: null, type: null };
          intl9 = intl10.intl;
          if (str2 == null) {
            str2 = "";
          }
          obj7 = { applicationId: application.id, referrerId: AuthenticationStore.getId() };
          getActivityLaunchURL = getApplicationInstallURL.getActivityLaunchURL;
          getApplicationInstallURL;
          getAppGradientColors = nativeAppMessageEmbedUtil.getAppGradientColors;
          nativeAppMessageEmbedUtil;
          return { applicationId: application.id, instanceId: id4, appMessageEmbedModel: obj6, participantAvatarUris: embeddedActivityParticipantAvatarUris, participantsDescription: combined };
        } else {
          let stringResult3;
          id = application.id;
          const id2 = activityInstance.id;
          const id3 = message.id;
          if (contentClassificationVisibility === ContentClassificationVisibility.ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl2 = intl10.intl;
            stringResult3 = intl2.string(intl10.t.LPOzxB);
          } else {
            const intl = intl10.intl;
            stringResult3 = intl.string(intl10.t.NIZyKq);
          }
          const obj10 = { applicationId: id, instanceId: id2, participantAvatarUris: [], participantsDescription: null, appMessageEmbedModel: obj11 };
          obj11 = { displayType: CodedLinksTypes.AppMessageEmbedDisplayType.BLOCKED, appId: id, messageId: id3, title: null, header: intl3.string(intl10.t.bZBN64), info: stringResult3, tagline: null, iconSrc: null, staticBannerSrc: null, bannerRatio: "bot", actions: [], embedUrl: null, extendedType: CodedLinkExtendedType.APP_MESSAGE_EMBED, gradientColors: [], backgroundColor: 0, borderColor: 0, headerColor: 0, headerText: null, type: null };
          intl3 = intl10.intl;
          return obj10;
        }
      }
    }
  }
};