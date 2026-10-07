// discord_app/modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import Constants from "../../../../../Constants.tsx";
import AgeGateUtils from "../../../../age_gate/AgeGateUtils.tsx";
import utils_ChannelUtils from "../../../../../utils/native/ChannelUtils.tsx";
import VoiceChannelBadgeExperiment from "../../../../channel/VoiceChannelBadgeExperiment.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

export const createVoiceChannelBadge = function createVoiceChannelBadge(id, guildId1) {
  const guildId = guildId1;
  if (obj.getVoiceChannelBadgeExperiment({ guildId, location: "VoiceChannelBadgeNative" }).enabled) {
    if (null != guildId1) {
      const discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceState(guildId1, id);
      if (null != discoverableVoiceState) {
        let channelId;
        if (discoverableVoiceState != null) {
          channelId = discoverableVoiceState.channelId;
        }
        const channel = ChannelStore.getChannel(channelId);
        if (null != channel) {
          const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            let result = AgeGateUtils.shouldAgeVerifyForAgeGate();
            if (result) {
              result = AgeGateUtils.shouldShowAgeGateForChannelId(channel.id);
              const tmpResult4 = AgeGateUtils;
            }
            let isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              isPrivateResult =
                PermissionStore.can(Permissions.VIEW_CHANNEL, channel) &&
                PermissionStore.can(Permissions.CONNECT, channel);
              const tmp9 =
                PermissionStore.can(Permissions.VIEW_CHANNEL, channel) &&
                PermissionStore.can(Permissions.CONNECT, channel);
            }
            if (!result) {
              if (isPrivateResult) {
                const obj2 = { channelId: channel.id, channelIconUrl: uri };
                return obj2;
              }
            }
            const tmpResult3 = AgeGateUtils;
          }
          const tmpResult = utils_ChannelUtils;
        }
      }
    }
  }
  obj = VoiceChannelBadgeExperiment;
};
