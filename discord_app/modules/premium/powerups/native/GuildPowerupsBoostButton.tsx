// === Module 12587: GuildPowerupsBoostButton ===

// Module 12587 (GuildPowerupsBoostButton)
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4455 */;

const require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = function GuildPowerupsBoostButton(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const items1 = [GuildBoostSlotStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () => boostSlots.boostSlots);
  const obj2 = guildId(504);
  const tmp = guildId;
  const tmp5 = stateFromStores1;
  const tmp6 = stateFromStores1(7393)({ forceFetch: true });
  const items2 = [UserStore];
  const stateFromStores2 = guildId(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores2) {
    let UNSPECIFIED = stateFromStores2.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp(1379).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items3 = [stateFromStores1];
  const memo = noop.useMemo(() => {
    const values = Object.values(stateFromStores1);
    return values.find((isAvailable) => isAvailable.isAvailable());
  }, items3);
  let tmp10 = null;
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, previousGuildSubscriptionSlot: memo, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp6.fractionalState, onAvailableSlotPress: tmp9, premiumGroupRole: UNSPECIFIED };
    tmp10 = jsx(tmp5(7402), { guild: stateFromStores, previousGuildSubscriptionSlot: memo, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp6.fractionalState, onAvailableSlotPress: tmp9, premiumGroupRole: UNSPECIFIED });
  }
  return tmp10;
};