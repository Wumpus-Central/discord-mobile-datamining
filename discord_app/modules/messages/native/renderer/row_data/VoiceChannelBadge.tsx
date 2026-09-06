// discord_app/modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import Constants from "../../../../../Constants.tsx";
import VoiceChannelBadgeExperiment from "../../../../channel/VoiceChannelBadgeExperiment.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

export const createVoiceChannelBadge = function createVoiceChannelBadge(id, guildId) {
  let obj = VoiceChannelBadgeExperiment;
  if (obj.getVoiceChannelBadgeExperiment({ guildId, location: "VoiceChannelBadgeNative" }).enabled) {
    if (null != guildId) {
      const discoverableVoiceState = VoiceStateStore.getDiscoverableVoiceState(guildId, id);
      if (null != discoverableVoiceState) {
        let channelId;
        if (discoverableVoiceState != null) {
          channelId = discoverableVoiceState.channelId;
        }
        const channel = ChannelStore.getChannel(channelId);
        if (null != channel) {
          let tmpResult = tmp(5028);
          const assetSource = Image.resolveAssetSource(tmpResult.getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            tmpResult = tmp(4771);
            let result = tmpResult.shouldAgeVerifyForAgeGate();
            if (result) {
              result = tmp(4771).shouldShowAgeGateForChannelId(channel.id);
              const tmpResult1 = tmp(4771);
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
                obj = { channelId: channel.id, channelIconUrl: uri };
                return obj;
              }
            }
          }
        }
      }
    }
  }
};
