// === Module 11766: useGuildPowerupTier3OverrideConfig ===

// Module 11766 (useGuildPowerupTier3OverrideConfig)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  const _require = arg0;
  let obj = _require(589);
  const items = [createGuildRecordFromRust];
  if (obj.useStateFromStores(items, () => {
    const guild = outer1_3.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(outer1_4.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    obj = { shouldShow: true, text: null };
    const intl = _require(1236).intl;
    obj[1] = intl.string(importDefault(2287).l9n4QZ);
  } else {
    obj = { shouldShow: false, text: "" };
  }
  return obj;
};