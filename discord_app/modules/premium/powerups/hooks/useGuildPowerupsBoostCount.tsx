// === Module 4469: useGuildPowerupsBoostCount ===

// Module 4469 (useGuildPowerupsBoostCount)
import GameServerExperiment from "GameServerExperiment" /* 4473 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4470 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx");

export default function useGuildAppliedBoostCount(guildId) {
  _require = guildId;
  const items = [stateFromStores1];
  num = require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  if (num == null) {
    num = 0;
  }
  let tmpResult = tmp(tmp2[4]);
  const gameServerEnabled = tmpResult.useGameServerEnabled(guildId, "GuildPowerupsBoostCount");
  tmpResult = tmp(tmp2[5]);
  const items1 = [GuildPowerupsStore];
  const stateFromStores = tmpResult.useStateFromStores(items1, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(closure_0);
    let appliedBoosts;
    if (stateForGuild != null) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  let obj = require("initialize");
  const items2 = [stateFromStores];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    const stateForGuild = GameServerStore.getStateForGuild(closure_0);
    let appliedBoosts;
    if (stateForGuild != null) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  const items3 = [num, stateFromStores, stateFromStores1, gameServerEnabled];
  return gameServerEnabled.useMemo(() => {
    if (null != stateFromStores) {
      num = stateFromStores1;
      if (stateFromStores1 == null) {
        num = 0;
      }
      const sum = tmp + num;
      let obj = { available: null, spent: null, total: null, isLoading: false };
      const _Math = Math;
      obj.available = Math.max(0, num - sum);
      obj.spent = sum;
      obj.total = num;
      return obj;
    }
    obj = { available: 0, spent: 0, total: num, isLoading: true };
    return obj;
  }, items3);
};
export const getGuildPowerupsBoostCount = function getGuildPowerupsBoostCount(id) {
  const guild = GuildStore.getGuild(id);
  let total;
  if (guild != null) {
    total = guild.premiumSubscriberCount;
  }
  if (total == null) {
    total = 0;
  }
  let obj = GameServerExperiment;
  const gameServerEnabled = obj.getGameServerEnabled(id, "GuildPowerupsBoostCount");
  const stateForGuild = GuildPowerupsStore.getStateForGuild(id);
  let appliedBoosts;
  if (stateForGuild != null) {
    appliedBoosts = stateForGuild.appliedBoosts;
  }
  const stateForGuild1 = GameServerStore.getStateForGuild(id);
  if (stateForGuild1 != null) {
    let num2 = stateForGuild1.appliedBoosts;
  }
  if (null != appliedBoosts) {
    if (num2 == null) {
      num2 = 0;
    }
    const sum = appliedBoosts + num2;
    obj = { available: null, spent: null, total: null };
    const _Math = Math;
    obj.available = Math.max(0, total - sum);
    obj.spent = sum;
    obj.total = total;
    return obj;
  }
  return { available: 0, spent: 0, total };
};