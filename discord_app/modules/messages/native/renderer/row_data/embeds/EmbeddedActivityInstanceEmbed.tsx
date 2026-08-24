// discord_app/modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx
import closure_2 from "../../../../../activities/EmbeddedActivitiesStore.tsx";
import closure_3 from "../../../../../applications/ApplicationStore.tsx";
import closure_4 from "../../../../../../stores/AuthenticationStore.tsx";
import closure_5 from "../../../../../../stores/ChannelStore.tsx";
import closure_6 from "../../../../../../stores/PresenceStore.tsx";
import closure_7 from "../../../../../../stores/UserStore.tsx";
import { CodedLinkExtendedType } from "coded_links/CodedLinksConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx");

export const createActivityInstanceEmbed = function createActivityInstanceEmbed(message) {
  ({ application, activityInstance } = message);
  channel = channel.getChannel(message.channel_id);
  if (null != application) {
    let id;
    if (activityInstance != null) {
      id = activityInstance.id;
    }
    if (null != id) {
      if (null != channel) {
        currentUser = currentUser.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        obj1 = id(11127);
        const contentClassificationVisibility = obj1.getContentClassificationVisibility(application.content_classification, channel, nsfwAllowed);
        if (id(11127).ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          id = application;
          const channel_id = message.channel_id;
          let str = channel_id;
          if (channel.isThread()) {
            str = channel.parent_id;
          }
          let obj4 = embeddedActivitiesForChannelIncludingHidden;
          if (str == null) {
            str = "";
          }
          embeddedActivitiesForChannelIncludingHidden = embeddedActivitiesForChannelIncludingHidden.getEmbeddedActivitiesForChannelIncludingHidden(str);
          const found = embeddedActivitiesForChannelIncludingHidden.find((applicationId) => applicationId.applicationId === id.id);
          const currentEmbeddedActivity = obj4.getCurrentEmbeddedActivity();
          let tmp5Result = tmp5(12767);
          let obj = { activity: null, applicationId: null, guildId: null, channelId: null };
          obj[0] = found;
          obj[1] = application.id;
          obj[2] = channel.guild_id;
          obj[3] = channel_id;
          const embeddedActivityParticipantAvatarUris = tmp5Result.getEmbeddedActivityParticipantAvatarUris(obj);
          id = application.id;
          let value;
          if (found != null) {
            const userIds = found.userIds;
            value = userIds.values().next().value;
            const iter = userIds.values();
          }
          let stringResult = null;
          if (null != value) {
            const findActivityResult = obj8.findActivity(value, (application_id) => application_id.application_id === id);
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            stringResult = details;
          }
          tmp5Result = tmp5(12777);
          obj = { embeddedActivity: null, currentEmbeddedActivity: null, channel: null };
          obj[0] = found;
          obj[1] = currentEmbeddedActivity;
          obj[2] = channel;
          if (null != found) {
            if (stringResult == null) {
              const intl5 = tmp5(1236).intl;
              stringResult = intl5.string(tmp5(1236).t.oQn0h4);
            }
            const intl6 = tmp5(1236).intl;
            const _HermesInternal = HermesInternal;
            let combined = "" + embeddedActivityParticipantAvatarUris.length + " " + intl6.string(tmp5(1236).t.BMTj28);
            let str2 = stringResult;
          } else {
            const intl4 = tmp5(1236).intl;
            const string = intl4.string;
            const t = tmp5(1236).t;
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
          const playInContext = tmp5(11129).getPlayInContext(application.id, channel_id);
          let isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
          let appIconSrc = null;
          ({ instanceId, canLaunchInChannel } = playInContext);
          if (null != application.icon) {
            appIconSrc = tmp5(11131).getAppIconSrc(application.id, application.icon, application.bot);
            const tmp5Result2 = tmp5(11131);
          }
          if (null == instanceId) {
            const intl8 = tmp5(1236).intl;
            let stringResult2 = intl8.string(tmp5(1236).t.RscU7I);
          } else {
            const intl7 = tmp5(1236).intl;
            stringResult2 = intl7.string(tmp5(1236).t.VJlc0S);
          }
          obj1 = { id: "play_in_channel", label: null, disabled: null };
          obj1[1] = stringResult2;
          if (!isCurrentlyInInstance) {
            isCurrentlyInInstance = false === canLaunchInChannel;
          }
          obj1[2] = isCurrentlyInInstance;
          const items = [obj1];
          let tmp24 = null == application.getApplication(application.id);
          if (tmp24) {
            tmp24 = false === obj13.isFetchingApplication(application.id);
          }
          if (tmp24) {
            application = tmp5(7140).fetchApplication(application.id);
            const tmp5Result3 = tmp5(7140);
          }
          const obj2 = { displayType: null, appId: null, messageId: null, title: null, header: null, info: null, tagline: null, staticBannerSrc: null, iconSrc: null, embedUrl: null, bannerRatio: "bot", actions: null, extendedType: null, gradientColors: null, backgroundColor: 0, borderColor: 0, headerColor: 0, headerText: null, type: null };
          obj2[0] = tmp5(11128).AppMessageEmbedDisplayType.DISPLAY;
          obj2[1] = application.id;
          obj2[2] = message.id;
          const intl9 = tmp5(1236).intl;
          obj2[3] = intl9.string(tmp5(1236).t.pkq6Vq);
          if (str2 == null) {
            str2 = "";
          }
          obj2[4] = str2;
          obj2[8] = appIconSrc;
          obj13 = application;
          obj8 = closure_6;
          const tmp5Result1 = tmp5(11129);
          const obj3 = { applicationId: null, referrerId: null };
          obj3[0] = application.id;
          obj3[1] = id.getId();
          obj2[9] = tmp5(11310).getActivityLaunchURL(obj3);
          obj2[11] = items;
          obj2[12] = CodedLinkExtendedType.APP_MESSAGE_EMBED;
          const tmp5Result4 = tmp5(11310);
          obj2[13] = tmp5(11131).getAppGradientColors(appIconSrc);
          obj4 = { applicationId: null, instanceId: null, appMessageEmbedModel: null, participantAvatarUris: null, participantsDescription: null };
          obj4[0] = application.id;
          obj4[1] = activityInstance.id;
          obj4[2] = obj2;
          obj4[3] = embeddedActivityParticipantAvatarUris;
          obj4[4] = combined;
          return obj4;
        } else {
          id = application.id;
          if (contentClassificationVisibility === tmp5(11127).ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl2 = tmp5(1236).intl;
            let stringResult3 = intl2.string(tmp5(1236).t.LPOzxB);
          } else {
            const intl = tmp5(1236).intl;
            stringResult3 = intl.string(tmp5(1236).t.NIZyKq);
          }
          const obj5 = { applicationId: null, instanceId: null, participantAvatarUris: null, participantsDescription: null, appMessageEmbedModel: null };
          obj5[0] = id;
          obj5[1] = activityInstance.id;
          obj5[2] = [];
          const obj6 = { displayType: null, appId: null, messageId: null, title: null, header: null, info: null, tagline: null, iconSrc: null, staticBannerSrc: null, bannerRatio: "bot", actions: null, embedUrl: null, extendedType: null, gradientColors: null, backgroundColor: 0, borderColor: 0, headerColor: 0, headerText: null, type: null };
          obj6[0] = tmp5(11128).AppMessageEmbedDisplayType.BLOCKED;
          obj6[1] = id;
          obj6[2] = message.id;
          const intl3 = tmp5(1236).intl;
          obj6[4] = intl3.string(tmp5(1236).t.bZBN64);
          obj6[5] = stringResult3;
          obj6[10] = [];
          obj6[12] = CodedLinkExtendedType.APP_MESSAGE_EMBED;
          obj6[13] = [];
          obj5[4] = obj6;
          return obj5;
        }
      }
    }
  }
};