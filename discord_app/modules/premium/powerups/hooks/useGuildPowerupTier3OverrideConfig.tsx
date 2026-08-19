// discord_app/modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx
import messagesProxyDefault from "../GuildPowerups.messages.js";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import { GuildFeatures } from "../../../../Constants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  const _require = arg0;
  let obj = initialize;
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
    const intl = require("../../../../intl/index.native.tsx").intl;
    obj[1] = intl.string(messagesProxyDefault.l9n4QZ);
  } else {
    obj = { shouldShow: false, text: "" };
  }
  return obj;
};