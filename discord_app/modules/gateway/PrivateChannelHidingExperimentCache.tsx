// discord_app/modules/gateway/PrivateChannelHidingExperimentCache.tsx
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import size from "../../../_runtime/metro/00002__.js";

const private_channel_obfuscation = "private_channel_obfuscation";
const result = size.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = Storage2.Storage;
  return null != Storage.get(private_channel_obfuscation);
};
