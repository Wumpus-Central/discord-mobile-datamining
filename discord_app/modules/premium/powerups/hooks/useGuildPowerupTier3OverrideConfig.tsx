// === Module 12344: useGuildPowerupTier3OverrideConfig ===

// Module 12344 (useGuildPowerupTier3OverrideConfig)
import messagesProxyDefault from "messagesProxy" /* 2400 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import { GuildFeatures } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  const _require = arg0;
  let obj = _require(586);
  const items = [closure_3];
  if (obj.useStateFromStores(items, () => {
    const guild = closure_1_3.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_4.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    obj = { shouldShow: true, text: null };
    const intl = _require(1233).intl;
    obj[1] = intl.string(messagesProxyDefault.l9n4QZ);
  } else {
    obj = { shouldShow: false, text: "" };
  }
  return obj;
};