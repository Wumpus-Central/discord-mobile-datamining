// === Module 8438: createVoiceChannelBadge ===

// Module 8438 (createVoiceChannelBadge)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import shouldShowAgeGateForVoiceChannel from "shouldShowAgeGateForVoiceChannel" /* 5252 */;
import getChannelIcon from "getChannelIcon" /* 6832 */;
import experiment from "experiment" /* 8439 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;

const Image = get_ActivityIndicator.Image;
const Permissions = ME.Permissions;
let result = obj132.fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

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
          let tmpResult = getChannelIcon;
          const assetSource = Image.resolveAssetSource(tmpResult.getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            tmpResult = shouldShowAgeGateForVoiceChannel;
            let result = tmpResult.shouldAgeVerifyForAgeGate();
            if (result) {
              result = shouldShowAgeGateForVoiceChannel.shouldShowAgeGateForChannelId(channel.id);
              const tmpResult1 = shouldShowAgeGateForVoiceChannel;
            }
            let isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              isPrivateResult = closure_4.can(Permissions.VIEW_CHANNEL, channel) && closure_4.can(Permissions.CONNECT, channel);
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