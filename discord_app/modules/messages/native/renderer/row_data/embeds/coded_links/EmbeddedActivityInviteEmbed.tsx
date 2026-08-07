// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx
import _slicedToArray from "_slicedToArray";
import { Image } from "computeChannelName";
import participantFromServer from "participantFromServer";
import handleFetchEmbeddedActivityShelfSuccess from "handleFetchEmbeddedActivityShelfSuccess";
import { FetchState } from "handleFetchEmbeddedActivityShelfSuccess";
import addApplication from "addApplication";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateInvite from "updateInvite";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { CodedLinkExtendedType } from "CodedLinkExtendedType";
import { InviteTargetTypes } from "InviteSendStates";
import { dispatcher } from "../../../../../../../Dispatcher.tsx";
import { getEmbedThemeColors } from "../getEmbedThemeColors.tsx";

const require = arg1;
let closure_16 = ["embedded_cover"];
const result = require("participantFromServer").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx");

export const createEmbeddedActivityInviteEmbed = function createEmbeddedActivityInviteEmbed(inviteCode) {
  let id;
  invite = invite.getInvite(inviteCode.inviteCode);
  if (null == invite) {
    return null;
  } else {
    const target_application = invite.target_application;
    if (invite.target_type === InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != target_application) {
        if (null == application.getApplication(target_application.id)) {
          let obj = dispatcher;
          obj = { type: "APPLICATION_UPDATE", application: null };
          obj[1] = target_application;
          obj.dispatch(obj);
        }
        id = target_application.id;
        if (applicationAssetFetchState.getApplicationAssetFetchState(id) === FetchState.NOT_FETCHED) {
          let obj2 = id(8181);
          const assetIds = obj2.fetchAssetIds(id, closure_16);
        }
        const tmp13 = getEmbedThemeColors(inviteCode.theme);
        const baseColors = tmp13.baseColors;
        const guild = invite.guild;
        let name;
        if (guild != null) {
          name = guild.name;
        }
        let channel = invite.channel;
        id = undefined;
        if (channel != null) {
          id = channel.id;
        }
        const guild2 = invite.guild;
        if (guild2 != null) {
          const id2 = guild2.id;
        }
        channel = null;
        if (null != id) {
          channel = channel.getChannel(id);
        }
        let simpleChannelIcon = null;
        if (null != channel) {
          let obj3 = id(4762);
          simpleChannelIcon = obj3.getSimpleChannelIcon(channel);
        }
        if (null != simpleChannelIcon) {
          const assetSource = Image.resolveAssetSource(simpleChannelIcon);
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          const tmp20 = uri;
        }
        let name1;
        if (target_application != null) {
          name1 = target_application.name;
        }
        if (name1 == null) {
          name1 = null;
        }
        const string = id(1236).intl.string;
        if (null != channel) {
          if (null != name) {
            const intl2 = tmp25(1236).intl;
            obj = { channelName: null, guildName: null };
            let tmp25Result = tmp25(4492);
            obj[0] = tmp25Result.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
            obj[1] = name;
            let formatToPartsResult = intl2.formatToParts(tmp25(1236).t.omZR7L, obj);
          }
          let tmp30 = null != id;
          if (tmp30) {
            embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(id);
            const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === id);
            let hasItem;
            if (found != null) {
              const userIds = found.userIds;
              if (userIds != null) {
                hasItem = userIds.has(id.getId());
              }
            }
            tmp30 = hasItem;
          }
          if (null != id) {
            if (null != id2) {
              tmp25Result = tmp25(12535);
              const obj1 = { channelId: null, guildId: null, applicationId: null };
              obj1[0] = id;
              obj1[1] = id2;
              obj1[2] = id;
              let embeddedActivityParticipantAvatarUris = tmp25Result.getEmbeddedActivityParticipantAvatarUris(obj1);
            }
            const string2 = tmp25(1236).intl.string;
            if (0 === embeddedActivityParticipantAvatarUris.length) {
              const intl4 = tmp25(1236).intl;
              let stringResult = intl4.string(tmp25(1236).t.I0v0Qv);
            } else {
              stringResult = tmp35;
              if (tmp30) {
                const intl3 = tmp25(1236).intl;
                stringResult = intl3.string(tmp25(1236).t.KC26NR);
              }
            }
            let assetIds1 = tmp25(8181).getAssetIds(id, closure_16);
            if (assetIds1 == null) {
              assetIds1 = [];
            }
            const first = callback(assetIds1, 1)[0];
            let assetImage;
            if (null != first) {
              assetImage = tmp25(8181).getAssetImage(id, first, 1024);
              const tmp25Result2 = tmp25(8181);
            }
            obj2 = {};
            const merged = Object.assign(baseColors);
            obj2.channelIcon = tmp20;
            obj2.headerText = name1;
            obj2.acceptLabelBackgroundColor = tmp13.colors.acceptLabelGreenBackgroundColor;
            obj2.titleText = tmp26;
            obj2.structurableSubtitleText = formatToPartsResult;
            obj2.type = null;
            obj2.extendedType = CodedLinkExtendedType.EMBEDDED_ACTIVITY_INVITE;
            obj2.participantAvatarUris = embeddedActivityParticipantAvatarUris;
            obj2.acceptLabelText = stringResult;
            obj2.splashUrl = assetImage;
            const intl5 = tmp25(1236).intl;
            obj2.noParticipantsText = intl5.string(tmp25(1236).t.PZLnuD);
            obj2.ctaEnabled = !tmp30;
            return obj2;
          }
          embeddedActivityParticipantAvatarUris = [];
        }
        formatToPartsResult = null;
        if (null != name) {
          const intl = tmp25(1236).intl;
          obj3 = { guildName: null };
          obj3[0] = name;
          formatToPartsResult = intl.formatToParts(tmp25(1236).t.u0vaDE, obj3);
        }
      }
    }
    return null;
  }
};