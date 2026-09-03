// === Module 8148: createVoiceChannelBadge ===

// Module 8148 (createVoiceChannelBadge)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 673 */;
import experiment from "experiment" /* 8149 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "getUncachedChannelPermissions" /* 4120 */;
import closure_5 from "updateVoiceState" /* 4497 */;

const Image = get_ActivityIndicator.Image;
const Permissions = ME.Permissions;
let result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

export const createVoiceChannelBadge = function createVoiceChannelBadge(id, guildId) {
  let obj = experiment;
  if (obj.getVoiceChannelBadgeExperiment({ guildId, location: "VoiceChannelBadgeNative" }).enabled) {
    if (null != guildId) {
      discoverableVoiceState = discoverableVoiceState.getDiscoverableVoiceState(guildId, id);
      if (null != discoverableVoiceState) {
        let channelId;
        if (discoverableVoiceState != null) {
          channelId = discoverableVoiceState.channelId;
        }
        channel = channel.getChannel(channelId);
        if (null != channel) {
          let tmpResult = tmp(4982);
          const assetSource = Image.resolveAssetSource(tmpResult.getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            tmpResult = tmp(4732);
            let result = tmpResult.shouldAgeVerifyForAgeGate();
            if (result) {
              result = tmp(4732).shouldShowAgeGateForChannelId(channel.id);
              const tmpResult1 = tmp(4732);
            }
            let isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              isPrivateResult = closure_4.can(Permissions.VIEW_CHANNEL, channel) && closure_4.can(Permissions.CONNECT, channel);
              const obj4 = closure_4;
              const tmp8 = Permissions;
              const tmp9 = closure_4.can(Permissions.VIEW_CHANNEL, channel) && closure_4.can(Permissions.CONNECT, channel);
            }
            if (!result) {
              if (isPrivateResult) {
                obj = { channelId: null, channelIconUrl: null };
                obj[0] = channel.id;
                obj[1] = uri;
                return obj;
              }
            }
          }
        }
      }
    }
  }
};