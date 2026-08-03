// === Module 8128: createVoiceChannelBadge ===

// Module 8128 (createVoiceChannelBadge)
import { Image } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateVoiceState from "updateVoiceState";
import { Permissions } from "ME";

let result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/messages/native/renderer/row_data/VoiceChannelBadge.tsx");

export const createVoiceChannelBadge = function createVoiceChannelBadge(id, guildId) {
  let obj = require(8129) /* experiment */;
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
          let tmpResult = tmp(4716);
          const assetSource = Image.resolveAssetSource(tmpResult.getChannelIcon(channel));
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          if (null != uri) {
            tmpResult = tmp(4469);
            let result = tmpResult.shouldAgeVerifyForAgeGate();
            if (result) {
              result = tmp(4469).shouldShowAgeGateForChannelId(channel.id);
              const tmpResult1 = tmp(4469);
            }
            let isPrivateResult = channel.isPrivate();
            if (!isPrivateResult) {
              isPrivateResult = getUncachedChannelPermissions.can(Permissions.VIEW_CHANNEL, channel) && getUncachedChannelPermissions.can(Permissions.CONNECT, channel);
              const obj4 = getUncachedChannelPermissions;
              const tmp8 = Permissions;
              const tmp9 = getUncachedChannelPermissions.can(Permissions.VIEW_CHANNEL, channel) && getUncachedChannelPermissions.can(Permissions.CONNECT, channel);
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