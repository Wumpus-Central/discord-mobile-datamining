// === Module 13486: VoiceChannelBadge ===

// Module 13486 (VoiceChannelBadge)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1074 */;
import AgeGateUtils from "AgeGateUtils" /* 4966 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5239 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 13487 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import VoiceStateStore from "VoiceStateStore" /* 4775 */;
import size from "module_2" /* 2 */;

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
              isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel) && PermissionStore.can(Permissions.CONNECT, channel);
              const tmp9 = PermissionStore.can(Permissions.VIEW_CHANNEL, channel) && PermissionStore.can(Permissions.CONNECT, channel);
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