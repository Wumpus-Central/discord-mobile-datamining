// discord_app/modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../GuildPowerups.messages.js";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  const _require = arg0;
  let obj = _initialize;
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
    const intl = _getSystemLocale.intl;
    obj[1] = intl.string(messagesProxy.l9n4QZ);
  } else {
    obj = { shouldShow: false, text: "" };
  }
  return obj;
};