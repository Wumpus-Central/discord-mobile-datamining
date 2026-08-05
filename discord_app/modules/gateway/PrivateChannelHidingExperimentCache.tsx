import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";
// discord_app/modules/gateway/PrivateChannelHidingExperimentCache.tsx
const private_channel_obfuscation = "private_channel_obfuscation";
const result = require("set").fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = Storage /* Storage */.Storage;
  return null != Storage.get(private_channel_obfuscation);
};