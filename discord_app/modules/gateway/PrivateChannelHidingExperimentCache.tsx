// === Module 13226: PRIVATE_CHANNEL_OBFUSCATION_KEY ===

// Module 13226 (PRIVATE_CHANNEL_OBFUSCATION_KEY)
import obj132 from "obj132" /* 2 */;
import Storage2 from "Storage" /* 595 */;

const private_channel_obfuscation = "private_channel_obfuscation";
const result = obj132.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = Storage2.Storage;
  return null != Storage.get(private_channel_obfuscation);
};