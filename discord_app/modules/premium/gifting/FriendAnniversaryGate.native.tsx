// discord_app/modules/premium/gifting/FriendAnniversaryGate.native.tsx
const result = require("set").fileFinishedImporting("modules/premium/gifting/FriendAnniversaryGate.native.tsx");

export const getFriendAnniversaryGateConfig = function getFriendAnniversaryGateConfig(arg0) {
  const obj = { enabled: null };
  obj[0] = require("native/MobileFriendAnniversaryExperiment.tsx").getConfig(arg0).enabled;
  return obj;
};