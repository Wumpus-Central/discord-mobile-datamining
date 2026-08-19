// === Module 11756: GuildPowerupsBoostButton ===

// Module 11756 (GuildPowerupsBoostButton)
import noop from "noop" /* 19 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handleGuildBoostsUpdate from "handleGuildBoostsUpdate" /* 4267 */;
import { AnalyticsSections } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = function GuildPowerupsBoostButton(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(589);
  let items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(guildId));
  const items1 = [closure_6];
  const stateFromStores1 = guildId(589).useStateFromStores(items1, () => boostSlots.boostSlots);
  const obj2 = guildId(589);
  const tmp = guildId;
  const tmp5 = stateFromStores1;
  const tmp6 = stateFromStores1(5356)({ forceFetch: true });
  const items2 = [closure_5];
  const stateFromStores2 = guildId(589).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores2) {
    let UNSPECIFIED = stateFromStores2.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp(1940).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items3 = [stateFromStores1];
  const memo = React.useMemo(() => {
    const values = Object.values(stateFromStores1);
    return values.find((item, index) => item.isAvailable());
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
    tmp10 = jsx(tmp5(7372), { guild: null, previousGuildSubscriptionSlot: null, analyticsSection: null, fractionalPremiumState: null, onAvailableSlotPress: null, premiumGroupRole: null });
  }
  return tmp10;
};