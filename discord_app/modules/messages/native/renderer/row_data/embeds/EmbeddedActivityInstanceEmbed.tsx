// === Module 13527: EmbeddedActivityInstanceEmbed ===

// Module 13527 (EmbeddedActivityInstanceEmbed)
import util from "util" /* 1115 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7403 */;
import ContentClassificationVisibility from "ContentClassificationVisibility" /* 12192 */;
import CodedLinksTypes from "CodedLinksTypes" /* 12193 */;
import getPlayInContext from "getPlayInContext" /* 12194 */;
import nativeAppMessageEmbedUtil from "nativeAppMessageEmbedUtil" /* 12195 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 12383 */;
import useEmbeddedActivityParticipantAvatarUris from "useEmbeddedActivityParticipantAvatarUris" /* 13518 */;
import EmbeddedApplicationInstanceUtils from "EmbeddedApplicationInstanceUtils" /* 13528 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import ApplicationStore from "ApplicationStore" /* 4983 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import PresenceStore from "PresenceStore" /* 4796 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const CodedLinkExtendedType = fn(11570).CodedLinkExtendedType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx");

export const createActivityInstanceEmbed = function createActivityInstanceEmbed(message) {
  ({ application, activityInstance } = message);
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null != application) {
    let id1;
    if (activityInstance != null) {
      id1 = activityInstance.id;
    }
    if (null != id1) {
      if (null != channel) {
        const currentUser = UserStore.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        const contentClassificationVisibility = ContentClassificationVisibility.getContentClassificationVisibility(application.content_classification, channel, nsfwAllowed);
        if (ContentClassificationVisibility.ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          let id = application;
          const channel_id = message.channel_id;
          let str = channel_id;
          if (channel.isThread()) {
            str = channel.parent_id;
          }
          if (str == null) {
            str = "";
          }
          const embeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(str);
          const found = embeddedActivitiesForChannelIncludingHidden.find((applicationId) => applicationId.applicationId === id.id);
          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
          const obj = { activity: found, applicationId: application.id, guildId: channel.guild_id, channelId: channel_id };
          const embeddedActivityParticipantAvatarUris = useEmbeddedActivityParticipantAvatarUris.getEmbeddedActivityParticipantAvatarUris(obj);
          id = application.id;
          value = undefined;
          if (found != null) {
            const userIds = found.userIds;
            value = userIds.values().next().value;
            const iter = userIds.values();
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
          const obj3 = { embeddedActivity: found, currentEmbeddedActivity, channel };
          if (null != found) {
            if (stringResult == null) {
              const intl5 = util.intl;
              stringResult = intl5.string(util.t.oQn0h4);
            }
            const intl6 = util.intl;
            const _HermesInternal = HermesInternal;
            let combined = "" + embeddedActivityParticipantAvatarUris.length + " " + intl6.string(util.t.BMTj28);
            let str2 = stringResult;
          } else {
            const intl4 = util.intl;
            const string = intl4.string;
            const t = util.t;
            if (tmp17.disabled) {
              let stringResult1 = string(t.JBnc7N);
            } else {
              stringResult1 = string(t.cX9uLZ);
            }
            str2 = stringResult;
            if (stringResult == null) {
              str2 = stringResult1;
            }
            combined = null;
          }
          const tmp5Result = useEmbeddedActivityParticipantAvatarUris;
          const playInContext = getPlayInContext.getPlayInContext(application.id, channel_id);
          let isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
          let appIconSrc = null;
          ({ instanceId, canLaunchInChannel } = playInContext);
          if (null != application.icon) {
            appIconSrc = nativeAppMessageEmbedUtil.getAppIconSrc(application.id, application.icon, application.bot);
            const tmp5Result9 = nativeAppMessageEmbedUtil;
          }
          if (null == instanceId) {
            const intl8 = util.intl;
            let stringResult2 = intl8.string(util.t.RscU7I);
          } else {
            const intl7 = util.intl;
            stringResult2 = intl7.string(util.t.VJlc0S);
          }
          const obj4 = { id: "play_in_channel", label: stringResult2, disabled: null };
          if (!isCurrentlyInInstance) {
            isCurrentlyInInstance = false === canLaunchInChannel;
          }
          obj4.disabled = isCurrentlyInInstance;
          const items = [obj4];
          let tmp24 = null == ApplicationStore.getApplication(application.id);
          if (tmp24) {
            tmp24 = false === ApplicationStore.isFetchingApplication(application.id);
          }
          if (tmp24) {
            const application1 = ApplicationActionCreators.fetchApplication(application.id);
            const tmp5Result10 = ApplicationActionCreators;
          }
          const obj6 = { displayType: CodedLinksTypes.AppMessageEmbedDisplayType.DISPLAY, appId: application.id, messageId: message.id, title: null, header: null, info: null, tagline: null, staticBannerSrc: null, iconSrc: null, embedUrl: null, bannerRatio: "bot", actions: null, extendedType: null, gradientColors: null, backgroundColor: 0, borderColor: 0, headerColor: 0, headerText: null, type: null };
          const intl9 = util.intl;
          obj6.title = intl9.string(util.t.pkq6Vq);
          if (str2 == null) {
            str2 = "";
          }
          obj6.header = str2;
          obj6.iconSrc = appIconSrc;
          const tmp5Result8 = getPlayInContext;
          const obj7 = { applicationId: application.id, referrerId: AuthenticationStore.getId() };
          obj6.embedUrl = getApplicationInstallURL.getActivityLaunchURL(obj7);
          obj6.actions = items;
          obj6.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
          const tmp5Result11 = getApplicationInstallURL;
          obj6.gradientColors = nativeAppMessageEmbedUtil.getAppGradientColors(appIconSrc);
          const obj9 = { applicationId: application.id, instanceId: activityInstance.id, appMessageEmbedModel: obj6, participantAvatarUris: embeddedActivityParticipantAvatarUris, participantsDescription: combined };
          return obj9;
        } else {
          id = application.id;
          if (contentClassificationVisibility === ContentClassificationVisibility.ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl2 = util.intl;
            let stringResult3 = intl2.string(util.t.LPOzxB);
          } else {
            const intl = util.intl;
            stringResult3 = intl.string(util.t.NIZyKq);
          }
          const obj10 = { applicationId: id, instanceId: activityInstance.id, participantAvatarUris: [], participantsDescription: null, appMessageEmbedModel: null };
          const obj11 = { displayType: CodedLinksTypes.AppMessageEmbedDisplayType.BLOCKED, appId: id, messageId: message.id, title: null, header: null, info: null, tagline: null, iconSrc: null, staticBannerSrc: null, bannerRatio: "bot", actions: null, embedUrl: null, extendedType: null, gradientColors: null, backgroundColor: 0, borderColor: 0, headerColor: 0, headerText: null, type: null };
          const intl3 = util.intl;
          obj11.header = intl3.string(util.t.bZBN64);
          obj11.info = stringResult3;
          obj11.actions = [];
          obj11.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
          obj11.gradientColors = [];
          obj10.appMessageEmbedModel = obj11;
          return obj10;
        }
      }
    }
  }
};