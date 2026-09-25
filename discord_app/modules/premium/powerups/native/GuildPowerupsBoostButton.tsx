// discord_app/modules/premium/powerups/native/GuildPowerupsBoostButton.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildBoostSlotStore from "../../../../stores/billing/GuildBoostSlotStore.tsx";

const require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = function GuildPowerupsBoostButton(guildId) {
  guildId = guildId.guildId;
  let items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(504);
  const tmp = guildId;
  const items1 = [GuildBoostSlotStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () => boostSlots.boostSlots);
  let obj2 = guildId(504);
  const tmp5 = stateFromStores1;
  const tmp6 = stateFromStores1(6808)({ forceFetch: true });
  const items2 = [UserStore];
  const stateFromStores2 = guildId(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores2) {
    let UNSPECIFIED = stateFromStores2.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp(1380).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items3 = [stateFromStores1];
  const memo = noop.useMemo(() => {
    const values = Object.values(stateFromStores1);
    return values.find((isAvailable) => isAvailable.isAvailable());
  }, items3);
  let tmp10 = null;
  if (null != stateFromStores) {
    const obj4 = {
      guild: stateFromStores,
      previousGuildSubscriptionSlot: memo,
      analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
      fractionalPremiumState: tmp6.fractionalState,
      onAvailableSlotPress: tmp9,
      premiumGroupRole: UNSPECIFIED,
    };
    tmp10 = jsx(tmp5(6817), {
      guild: stateFromStores,
      previousGuildSubscriptionSlot: memo,
      analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
      fractionalPremiumState: tmp6.fractionalState,
      onAvailableSlotPress: tmp9,
      premiumGroupRole: UNSPECIFIED,
    });
  }
  return tmp10;
};
