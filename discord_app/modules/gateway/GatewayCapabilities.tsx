// === Module 13561: getClientCapabilities ===

// Module 13561 (getClientCapabilities)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/gateway/GatewayCapabilities.tsx");

export const getClientCapabilities = function getClientCapabilities(useChannelObfuscation) {
  let num = 1734655;
  if (useChannelObfuscation.useChannelObfuscation) {
    num = 1767423;
  }
  return num;
};