// discord_app/modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../../Constants.tsx";
import shouldShowAgeGateForVoiceChannel from "../../../../age_gate/AgeGateUtils.tsx";
import getChannelIcon from "../../../../../utils/native/ChannelUtils.tsx";
import experiment from "../../../../channel/VoiceChannelBadgeExperiment.tsx";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import getUncachedChannelPermissions from "../../../../../stores/PermissionStore.tsx";
import updateVoiceState from "../../../../../stores/VoiceStateStore.tsx";

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