// === Module 12556: useGuildPowerupTier3OverrideConfig ===

// Module 12556 (useGuildPowerupTier3OverrideConfig)
import _modDef2428 from "module_2428" /* 2428 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  _require = arg0;
  let obj = require("initialize");
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
    obj = { shouldShow: true, text: null };
    const intl = require("util").intl;
    obj.text = intl.string(_modDef2428.l9n4QZ);
  } else {
    obj = { shouldShow: false, text: "" };
  }
  return obj;
};