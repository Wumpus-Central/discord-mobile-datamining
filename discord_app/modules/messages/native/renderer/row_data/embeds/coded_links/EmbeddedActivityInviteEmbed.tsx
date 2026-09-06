// === Module 13215: EmbeddedActivityInviteEmbed ===

// Module 13215 (EmbeddedActivityInviteEmbed)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7945 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8139 */;
import _slicedToArray from "module_32" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ApplicationAssetsStore from "ApplicationAssetsStore" /* 8140 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import InviteStore from "InviteStore" /* 4544 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Image = fn(17).Image;
const FetchState = fn(8140).FetchState;
const CodedLinkExtendedType = fn(11309).CodedLinkExtendedType;
const InviteTargetTypes = fn(7736).InviteTargetTypes;
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
          let obj = { type: "APPLICATION_UPDATE", application: target_application };
          obj.dispatch(obj);
        }
        id = target_application.id;
        if (ApplicationAssetsStore.getApplicationAssetFetchState(id) === FetchState.NOT_FETCHED) {
          let obj2 = ApplicationAssetUtils;
          const assetIds = obj2.fetchAssetIds(id, closure_16);
        }
        const tmp13 = getEmbedThemeColorsDefault(inviteCode.theme);
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
          channel = ChannelStore.getChannel(id);
        }
        let simpleChannelIcon = null;
        if (null != channel) {
          let obj3 = utils_ChannelUtils;
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
        const string = util.intl.string;
        if (null != channel) {
          if (null != name) {
            const intl2 = tmp25(1114).intl;
            obj = { channelName: null, guildName: null };
            let tmp25Result = tmp25(4713);
            obj.channelName = tmp25Result.computeChannelName(channel, UserStore, RelationshipStore);
            obj.guildName = name;
            let formatToPartsResult = intl2.formatToParts(tmp25(1114).t.omZR7L, obj);
          }
          let tmp30 = null != id;
          if (tmp30) {
            const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id);
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
          if (null != id) {
            if (null != id2) {
              tmp25Result = tmp25(13216);
              const obj1 = { channelId: id, guildId: id2, applicationId: id };
              let embeddedActivityParticipantAvatarUris = tmp25Result.getEmbeddedActivityParticipantAvatarUris(obj1);
            }
            const string2 = tmp25(1114).intl.string;
            if (0 === embeddedActivityParticipantAvatarUris.length) {
              const intl4 = tmp25(1114).intl;
              let stringResult = intl4.string(tmp25(1114).t.I0v0Qv);
            } else {
              stringResult = tmp35;
              if (tmp30) {
                const intl3 = tmp25(1114).intl;
                stringResult = intl3.string(tmp25(1114).t.KC26NR);
              }
            }
            let assetIds1 = tmp25(8139).getAssetIds(id, closure_16);
            if (assetIds1 == null) {
              assetIds1 = [];
            }
            const first = _slicedToArray(assetIds1, 1)[0];
            let assetImage;
            if (null != first) {
              assetImage = tmp25(8139).getAssetImage(id, first, 1024);
              const tmp25Result2 = tmp25(8139);
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
            const intl5 = tmp25(1114).intl;
            obj2.noParticipantsText = intl5.string(tmp25(1114).t.PZLnuD);
            obj2.ctaEnabled = !tmp30;
            return obj2;
          }
          embeddedActivityParticipantAvatarUris = [];
        }
        formatToPartsResult = null;
        if (null != name) {
          const intl = tmp25(1114).intl;
          obj3 = { guildName: name };
          formatToPartsResult = intl.formatToParts(tmp25(1114).t.u0vaDE, obj3);
        }
      }
    }
    return null;
  }
};