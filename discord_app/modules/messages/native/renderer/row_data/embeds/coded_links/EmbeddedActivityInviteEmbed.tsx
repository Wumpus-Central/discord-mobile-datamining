// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx
import DispatcherDefault from "../../../../../../../Dispatcher.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import useChannelName from "../../../../../../channel/useChannelName.tsx";
import InviteTargetTypes from "../../../../../../../../discord_common/js/shared/shared-constants/InviteTargetTypes.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import utils_ChannelUtils from "../../../../../../../utils/native/ChannelUtils.tsx";
import ApplicationAssetUtils from "../../../../../../../utils/ApplicationAssetUtils.tsx";
import useEmbeddedActivityParticipantAvatarUris from "useEmbeddedActivityParticipantAvatarUris.tsx";
import _slicedToArray from "../../../../../../../../_runtime/metro/00032__.js";
import EmbeddedActivitiesStore from "../../../../../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationAssetsStore from "../../../../../../applications/ApplicationAssetsStore.tsx";
import ApplicationStore from "../../../../../../applications/ApplicationStore.tsx";
import AuthenticationStore from "../../../../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../../../../stores/ChannelStore.tsx";
import InviteStore from "../../../../../../../stores/InviteStore.tsx";
import RelationshipStore from "../../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";

require = fn;
const Image = fn(17).Image;
const FetchState = fn(8722).FetchState;
const CodedLinkExtendedType = fn(10117).CodedLinkExtendedType;
let closure_15 = ["embedded_cover"];
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx",
);

export function createEmbeddedActivityInviteEmbed(inviteCode) {
  let id;
  const invite = InviteStore.getInvite(inviteCode.inviteCode);
  if (null == invite) {
    return null;
  } else {
    const target_application = invite.target_application;
    if (invite.target_type === InviteTargetTypes.InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != target_application) {
        if (null == ApplicationStore.getApplication(target_application.id)) {
          const obj2 = { type: "APPLICATION_UPDATE", application: target_application };
          DispatcherDefault.dispatch(obj2);
        }
        id = target_application.id;
        if (ApplicationAssetsStore.getApplicationAssetFetchState(id) === FetchState.NOT_FETCHED) {
          const assetIds = ApplicationAssetUtils.fetchAssetIds(id, closure_15);
          const tmp39Result = ApplicationAssetUtils;
        }
        const tmp9 = getEmbedThemeColorsDefault(inviteCode.theme);
        const baseColors = tmp9.baseColors;
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
          const tmp39Result6 = utils_ChannelUtils;
        }
        if (null != simpleChannelIcon) {
          const assetSource = Image.resolveAssetSource(simpleChannelIcon);
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          const tmp15 = uri;
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
            const obj3 = {
              channelName: useChannelName.computeChannelName(channel1, UserStore, RelationshipStore),
              guildName: name,
            };
            let formatToPartsResult = intl2.formatToParts(util.t.omZR7L, obj3);
            const tmp39Result7 = useChannelName;
          }
          let tmp24 = null != id1;
          if (tmp24) {
            const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id1);
            const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === id);
            let hasItem;
            if (found != null) {
              const userIds = found.userIds;
              if (userIds != null) {
                hasItem = userIds.has(AuthenticationStore.getId());
              }
            }
            tmp24 = hasItem;
          }
          if (null != id1) {
            if (null != id2) {
              const obj4 = { channelId: id1, guildId: id2, applicationId: id };
              let embeddedActivityParticipantAvatarUris =
                useEmbeddedActivityParticipantAvatarUris.getEmbeddedActivityParticipantAvatarUris(obj4);
              const tmp39Result8 = useEmbeddedActivityParticipantAvatarUris;
            }
            const string2 = util.intl.string;
            if (0 === embeddedActivityParticipantAvatarUris.length) {
              const intl4 = util.intl;
              let stringResult = intl4.string(util.t.I0v0Qv);
            } else {
              stringResult = tmp29;
              if (tmp24) {
                const intl3 = util.intl;
                stringResult = intl3.string(util.t.KC26NR);
              }
            }
            let assetIds1 = ApplicationAssetUtils.getAssetIds(id, closure_15);
            if (assetIds1 == null) {
              assetIds1 = [];
            }
            const first = _slicedToArray(assetIds1, 1)[0];
            let assetImage;
            if (null != first) {
              assetImage = ApplicationAssetUtils.getAssetImage(id, first, 1024);
              const tmp39Result10 = ApplicationAssetUtils;
            }
            const obj5 = {};
            const merged = Object.assign(baseColors);
            obj5.channelIcon = tmp15;
            obj5.headerText = name1;
            obj5.acceptLabelBackgroundColor = tmp9.colors.acceptLabelGreenBackgroundColor;
            obj5.titleText = tmp20;
            obj5.structurableSubtitleText = formatToPartsResult;
            obj5.type = null;
            obj5.extendedType = CodedLinkExtendedType.EMBEDDED_ACTIVITY_INVITE;
            obj5.participantAvatarUris = embeddedActivityParticipantAvatarUris;
            obj5.acceptLabelText = stringResult;
            obj5.splashUrl = assetImage;
            const intl5 = util.intl;
            obj5.noParticipantsText = intl5.string(util.t.PZLnuD);
            obj5.ctaEnabled = !tmp24;
            return obj5;
          }
          embeddedActivityParticipantAvatarUris = [];
        }
        formatToPartsResult = null;
        if (null != name) {
          const intl = util.intl;
          const obj6 = { guildName: name };
          formatToPartsResult = intl.formatToParts(util.t.u0vaDE, obj6);
        }
      }
    }
    return null;
  }
}
