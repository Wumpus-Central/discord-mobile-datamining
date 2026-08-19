// discord_app/modules/gateway/PrivateChannelHidingExperimentCache.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";

const private_channel_obfuscation = "private_channel_obfuscation";
const result = obj132.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = Storage2.Storage;
  return null != Storage.get(private_channel_obfuscation);
};