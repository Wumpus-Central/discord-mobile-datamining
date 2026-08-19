// === Module 11725: useGuildPowerupTier3OverrideConfig ===

// Module 11725 (useGuildPowerupTier3OverrideConfig)
import messagesProxyDefault from "messagesProxy" /* 2367 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  const _require = arg0;
  let obj = _require(589);
  const items = [closure_3];
  if (obj.useStateFromStores(items, () => {
    const guild = closure_1_3.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    obj = { shouldShow: true, text: null };
    const intl = _require(1236).intl;
    obj[1] = intl.string(messagesProxyDefault.l9n4QZ);
  } else {
    obj = { shouldShow: false, text: "" };
  }
  return obj;
};