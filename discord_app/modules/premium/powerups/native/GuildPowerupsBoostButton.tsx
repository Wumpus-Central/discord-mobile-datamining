// === Module 12387: GuildPowerupsBoostButton ===

// Module 12387 (GuildPowerupsBoostButton)
import closure_3 from "noop" /* 19 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;
import closure_5 from "mergeGuildAvatar" /* 1921 */;
import closure_6 from "handleGuildBoostsUpdate" /* 4370 */;
import { AnalyticsSections } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = function GuildPowerupsBoostButton(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  let obj = guildId(586);
  let items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(guildId));
  const items1 = [closure_6];
  stateFromStores1 = guildId(586).useStateFromStores(items1, () => boostSlots.boostSlots);
  const obj2 = guildId(586);
  const tmp = guildId;
  const tmp5 = stateFromStores1;
  const tmp6 = stateFromStores1(7151)({ forceFetch: true });
  const items2 = [closure_5];
  const stateFromStores2 = guildId(586).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores2) {
    let UNSPECIFIED = stateFromStores2.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp(1929).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items3 = [stateFromStores1];
  const memo = React.useMemo(() => {
    const values = Object.values(stateFromStores1);
    return values.find((isAvailable) => isAvailable.isAvailable());
  }, items3);
  let tmp10 = null;
  if (null != stateFromStores) {
    obj = { guild: null, previousGuildSubscriptionSlot: null, analyticsSection: null, fractionalPremiumState: null, onAvailableSlotPress: null, premiumGroupRole: null };
    obj[0] = stateFromStores;
    obj[1] = memo;
    obj[2] = AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR;
    obj[3] = tmp6.fractionalState;
    obj[4] = tmp9;
    obj[5] = UNSPECIFIED;
    tmp10 = jsx(tmp5(7155), { guild: null, previousGuildSubscriptionSlot: null, analyticsSection: null, fractionalPremiumState: null, onAvailableSlotPress: null, premiumGroupRole: null });
  }
  return tmp10;
};