// discord_app/modules/gateway/PrivateChannelHidingExperimentCache.tsx
import set from "../../../_runtime/00002_set.js";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";

const private_channel_obfuscation = "private_channel_obfuscation";
const result = set.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = Storage2.Storage;
  return null != Storage.get(private_channel_obfuscation);
};