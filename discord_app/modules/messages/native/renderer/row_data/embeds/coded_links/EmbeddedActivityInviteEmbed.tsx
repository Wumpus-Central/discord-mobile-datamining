// === Module 13461: EmbeddedActivityInviteEmbed ===

// Module 13461 (EmbeddedActivityInviteEmbed)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import useChannelName from "useChannelName" /* 4875 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5197 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8164 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8369 */;
import useEmbeddedActivityParticipantAvatarUris from "useEmbeddedActivityParticipantAvatarUris" /* 13462 */;
import _slicedToArray from "module_32" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8370 */;
import ApplicationStore from "ApplicationStore" /* 4950 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import InviteStore from "InviteStore" /* 4706 */;
import RelationshipStore from "RelationshipStore" /* 4371 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Image = fn(17).Image;
const FetchState = fn(8370).FetchState;
const CodedLinkExtendedType = fn(11561).CodedLinkExtendedType;
const InviteTargetTypes = fn(7938).InviteTargetTypes;
let closure_16 = ["embedded_cover"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx");

export const createEmbeddedActivityInviteEmbed = function createEmbeddedActivityInviteEmbed(inviteCode) {
  let id;
  const invite = InviteStore.getInvite(inviteCode.inviteCode);
  if (null == invite) {
    return null;
  } else {
    const target_application = invite.target_application;
    if (invite.target_type === InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != target_application) {
        if (null == ApplicationStore.getApplication(target_application.id)) {
          const obj2 = { type: "APPLICATION_UPDATE", application: target_application };
          DispatcherDefault.dispatch(obj2);
        }
        id = target_application.id;
        if (ApplicationAssetsStore.getApplicationAssetFetchState(id) === FetchState.NOT_FETCHED) {
          const assetIds = ApplicationAssetUtils.fetchAssetIds(id, closure_16);
        }
        const tmp13 = getEmbedThemeColorsDefault(inviteCode.theme);
        const baseColors = tmp13.baseColors;
        const guild = invite.guild;
        let name;
        if (guild != null) {
          name = guild.name;
        }
        const channel = invite.channel;
        let id1;
        if (channel != null) {
          id1 = channel.id;
        }
        const guild2 = invite.guild;
        if (guild2 != null) {
          const id2 = guild2.id;
        }
        let channel1 = null;
        if (null != id1) {
          channel1 = ChannelStore.getChannel(id1);
        }
        let simpleChannelIcon = null;
        if (null != channel1) {
          simpleChannelIcon = utils_ChannelUtils.getSimpleChannelIcon(channel1);
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
        const string = util.intl.string;
        if (null != channel1) {
          if (null != name) {
            const intl2 = util.intl;
            const obj5 = { channelName: useChannelName.computeChannelName(channel1, UserStore, RelationshipStore), guildName: name };
            let formatToPartsResult = intl2.formatToParts(util.t.omZR7L, obj5);
            const tmp25Result = useChannelName;
          }
          let tmp30 = null != id1;
          if (tmp30) {
            const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id1);
            const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === id);
            let hasItem;
            if (found != null) {
              const userIds = found.userIds;
              if (userIds != null) {
                hasItem = userIds.has(AuthenticationStore.getId());
              }
            }
            tmp30 = hasItem;
          }
          if (null != id1) {
            if (null != id2) {
              const obj6 = { channelId: id1, guildId: id2, applicationId: id };
              let embeddedActivityParticipantAvatarUris = useEmbeddedActivityParticipantAvatarUris.getEmbeddedActivityParticipantAvatarUris(obj6);
              const tmp25Result4 = useEmbeddedActivityParticipantAvatarUris;
            }
            const string2 = util.intl.string;
            if (0 === embeddedActivityParticipantAvatarUris.length) {
              const intl4 = util.intl;
              let stringResult = intl4.string(util.t.I0v0Qv);
            } else {
              stringResult = tmp35;
              if (tmp30) {
                const intl3 = util.intl;
                stringResult = intl3.string(util.t.KC26NR);
              }
            }
            let assetIds1 = ApplicationAssetUtils.getAssetIds(id, closure_16);
            if (assetIds1 == null) {
              assetIds1 = [];
            }
            const first = _slicedToArray(assetIds1, 1)[0];
            let assetImage;
            if (null != first) {
              assetImage = ApplicationAssetUtils.getAssetImage(id, first, 1024);
              const tmp25Result6 = ApplicationAssetUtils;
            }
            const obj7 = {};
            const merged = Object.assign(baseColors);
            obj7.channelIcon = tmp20;
            obj7.headerText = name1;
            obj7.acceptLabelBackgroundColor = tmp13.colors.acceptLabelGreenBackgroundColor;
            obj7.titleText = tmp26;
            obj7.structurableSubtitleText = formatToPartsResult;
            obj7.type = null;
            obj7.extendedType = CodedLinkExtendedType.EMBEDDED_ACTIVITY_INVITE;
            obj7.participantAvatarUris = embeddedActivityParticipantAvatarUris;
            obj7.acceptLabelText = stringResult;
            obj7.splashUrl = assetImage;
            const intl5 = util.intl;
            obj7.noParticipantsText = intl5.string(util.t.PZLnuD);
            obj7.ctaEnabled = !tmp30;
            return obj7;
          }
          embeddedActivityParticipantAvatarUris = [];
        }
        formatToPartsResult = null;
        if (null != name) {
          const intl = util.intl;
          const obj8 = { guildName: name };
          formatToPartsResult = intl.formatToParts(util.t.u0vaDE, obj8);
        }
      }
    }
    return null;
  }
};