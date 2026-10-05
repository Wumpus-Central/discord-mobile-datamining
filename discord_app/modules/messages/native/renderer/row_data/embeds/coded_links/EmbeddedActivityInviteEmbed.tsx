// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx
import react_native from "../../../../../../../../_runtime/00017_react-native.js";
import DispatcherDefault from "../../../../../../../Dispatcher.tsx";
import intl6 from "../../../../../../../intl/index.native.tsx";
import useChannelName from "../../../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../../../utils/native/ChannelUtils.tsx";
import Constants from "../../../../../../instant_invite/Constants.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import ApplicationAssetUtils from "../../../../../../../utils/ApplicationAssetUtils.tsx";
import ApplicationAssetsStore2 from "../../../../../../applications/ApplicationAssetsStore.tsx";
import CodedLinksConstants from "CodedLinksConstants.tsx";
import useEmbeddedActivityParticipantAvatarUris from "useEmbeddedActivityParticipantAvatarUris.tsx";
import _slicedToArray from "../../../../../../../../_runtime/metro/00032__slicedToArray.js";
import EmbeddedActivitiesStore from "../../../../../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStore from "../../../../../../applications/ApplicationStore.tsx";
import AuthenticationStore from "../../../../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../../../../stores/ChannelStore.tsx";
import InviteStore from "../../../../../../../stores/InviteStore.tsx";
import RelationshipStore from "../../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const ApplicationAssetsStore = ApplicationAssetsStore2;

const Image = react_native.Image;
const FetchState = ApplicationAssetsStore2.FetchState;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const InviteTargetTypes = Constants.InviteTargetTypes;
let closure_16 = ["embedded_cover"];
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx",
);

export const createEmbeddedActivityInviteEmbed = function createEmbeddedActivityInviteEmbed(theme) {
  let intl5;
  let tmp25Result;
  let id;
  theme = theme.theme;
  const invite = InviteStore.getInvite(theme.inviteCode);
  if (null == invite) {
    return null;
  } else {
    const target_application = invite.target_application;
    if (invite.target_type === InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != target_application) {
        let id2;
        let tmp20;
        let formatToPartsResult;
        if (null == ApplicationStore.getApplication(target_application.id)) {
          const obj2 = { type: "APPLICATION_UPDATE", application: target_application };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
        }
        id = target_application.id;
        if (ApplicationAssetsStore.getApplicationAssetFetchState(id) === FetchState.NOT_FETCHED) {
          const obj3 = ApplicationAssetUtils;
          const assetIds = obj3.fetchAssetIds(id, closure_16);
        }
        const tmp13 = getEmbedThemeColorsDefault(theme);
        const baseColors = tmp13.baseColors;
        const guild = invite.guild;
        let name;
        const acceptLabelGreenBackgroundColor = tmp13.colors.acceptLabelGreenBackgroundColor;
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
          id2 = guild2.id;
        }
        let channel1 = null;
        if (null != id1) {
          channel1 = ChannelStore.getChannel(id1);
        }
        let simpleChannelIcon = null;
        if (null != channel1) {
          const obj4 = utils_ChannelUtils;
          simpleChannelIcon = obj4.getSimpleChannelIcon(channel1);
        }
        if (null != simpleChannelIcon) {
          const assetSource = Image.resolveAssetSource(simpleChannelIcon);
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          tmp20 = uri;
        }
        let name1;
        if (target_application != null) {
          name1 = target_application.name;
        }
        if (name1 == null) {
          name1 = null;
        }
        const string = intl6.intl.string;
        if (null != channel1) {
          if (null != name) {
            const intl2 = intl6.intl;
            const formatToParts = intl2.formatToParts;
            const obj5 = {
              channelName: tmp25Result.computeChannelName(channel1, UserStore, RelationshipStore),
              guildName: name,
            };
            const omZR7L = intl6.t.omZR7L;
            tmp25Result = useChannelName;
            formatToPartsResult = formatToParts(omZR7L, obj5);
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
            let embeddedActivityParticipantAvatarUris;
            let stringResult;
            if (null != id2) {
              const obj6 = { channelId: id1, guildId: id2, applicationId: id };
              const tmp25Result4 = useEmbeddedActivityParticipantAvatarUris;
              embeddedActivityParticipantAvatarUris = tmp25Result4.getEmbeddedActivityParticipantAvatarUris(obj6);
            }
            const string2 = intl6.intl.string;
            if (0 === embeddedActivityParticipantAvatarUris.length) {
              const intl4 = intl6.intl;
              stringResult = intl4.string(intl6.t.I0v0Qv);
            } else {
              stringResult = tmp35;
              if (tmp30) {
                const intl3 = intl6.intl;
                stringResult = intl3.string(intl6.t.KC26NR);
              }
            }
            const tmp25Result5 = ApplicationAssetUtils;
            let assetIds1 = tmp25Result5.getAssetIds(id, closure_16);
            if (assetIds1 == null) {
              assetIds1 = [];
            }
            const first = _slicedToArray(assetIds1, 1)[0];
            let assetImage;
            if (null != first) {
              const tmp25Result6 = ApplicationAssetUtils;
              assetImage = tmp25Result6.getAssetImage(id, first, 1024);
            }
            const obj7 = {
              channelIcon: tmp20,
              headerText: name1,
              acceptLabelBackgroundColor: acceptLabelGreenBackgroundColor,
              titleText: tmp26,
              structurableSubtitleText: formatToPartsResult,
              type: null,
              extendedType: CodedLinkExtendedType.EMBEDDED_ACTIVITY_INVITE,
              participantAvatarUris: embeddedActivityParticipantAvatarUris,
              acceptLabelText: stringResult,
              splashUrl: assetImage,
              noParticipantsText: intl5.string(intl6.t.PZLnuD),
              ctaEnabled: !tmp30,
            };
            const merged = Object.assign(baseColors);
            intl5 = intl6.intl;
            return obj7;
          }
          embeddedActivityParticipantAvatarUris = [];
        }
        formatToPartsResult = null;
        if (null != name) {
          const intl = intl6.intl;
          const obj8 = { guildName: name };
          formatToPartsResult = intl.formatToParts(intl6.t.u0vaDE, obj8);
        }
      }
    }
    return null;
  }
};
