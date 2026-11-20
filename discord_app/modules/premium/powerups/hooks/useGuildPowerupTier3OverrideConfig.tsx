// === Module 13326: useGuildPowerupTier3OverrideConfig ===

// Module 13326 (useGuildPowerupTier3OverrideConfig)
import _modDef2757 from "module_2757" /* 2757 */;
import GuildStore from "GuildStore" /* 4665 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1071).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  _require = arg0;
  items = [GuildStore];
  if (obj.useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    const obj2 = { shouldShow: true, text: null };
    const intl = require("util").intl;
    obj2.text = intl.string(_modDef2757.l9n4QZ);
    let obj3 = obj2;
  } else {
    obj3 = { shouldShow: false, text: "" };
  }
  return obj3;
};