// === Module 13182: VoiceChannelBadge ===

// Module 13182 (VoiceChannelBadge)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1074 */;
import AgeGateUtils from "AgeGateUtils" /* 4771 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 13183 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import size from "module_2" /* 2 */;

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
          let tmpResult = utils_ChannelUtils;
          const assetSource = Image.resolveAssetSource(tmpResult.getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            tmpResult = AgeGateUtils;
            let result = tmpResult.shouldAgeVerifyForAgeGate();
            if (result) {
              result = AgeGateUtils.shouldShowAgeGateForChannelId(channel.id);
              const tmpResult1 = AgeGateUtils;
            }
            let isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel) && PermissionStore.can(Permissions.CONNECT, channel);
              const tmp9 = PermissionStore.can(Permissions.VIEW_CHANNEL, channel) && PermissionStore.can(Permissions.CONNECT, channel);
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