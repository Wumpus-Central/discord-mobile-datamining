import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleGuildBoostsUpdate from "handleGuildBoostsUpdate";
import { AnalyticsSections } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = function GuildPowerupsBoostButton(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  let obj = guildId(589);
  let items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(guildId));
  const items1 = [handleGuildBoostsUpdate];
  stateFromStores1 = guildId(589).useStateFromStores(items1, () => boostSlots.boostSlots);
  const obj2 = guildId(589);
  const tmp = guildId;
  const tmp5 = stateFromStores1;
  const tmp6 = stateFromStores1(6769)({ forceFetch: true });
  const items2 = [mergeGuildAvatar];
  const stateFromStores2 = guildId(589).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores2) {
    let UNSPECIFIED = stateFromStores2.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp(1892).PremiumSubscriptionGroupRole.UNSPECIFIED;
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
    tmp10 = jsx(tmp5(6773), { guild: null, previousGuildSubscriptionSlot: null, analyticsSection: null, fractionalPremiumState: null, onAvailableSlotPress: null, premiumGroupRole: null });
  }
  return tmp10;
};