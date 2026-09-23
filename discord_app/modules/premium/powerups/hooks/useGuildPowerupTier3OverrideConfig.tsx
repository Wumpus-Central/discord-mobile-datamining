// === Module 12896: useGuildPowerupTier3OverrideConfig ===

// Module 12896 (useGuildPowerupTier3OverrideConfig)
import _modDef2516 from "module_2516" /* 2516 */;
import GuildStore from "GuildStore" /* 2064 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  _require = arg0;
  const items = [GuildStore];
  if (obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    const obj2 = { shouldShow: true, text: null };
    const intl = require("util").intl;
    obj2.text = intl.string(_modDef2516.l9n4QZ);
    let obj3 = obj2;
  } else {
    obj3 = { shouldShow: false, text: "" };
  }
  return obj3;
};