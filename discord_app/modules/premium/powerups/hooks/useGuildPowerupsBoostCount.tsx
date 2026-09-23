// === Module 4735: useGuildPowerupsBoostCount ===

// Module 4735 (useGuildPowerupsBoostCount)
import GameServerExperiment from "GameServerExperiment" /* 4739 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4736 */;
import GuildStore from "GuildStore" /* 2064 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4715 */;

const require = globalThis.__r;

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
  let obj = require("initialize");
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(guildId, "GuildPowerupsBoostCount");
  const tmpResult = require("GameServerExperiment");
  const items1 = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(closure_0);
    let appliedBoosts;
    if (stateForGuild != null) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  const tmpResult3 = require("initialize");
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
      const obj = { available: null, spent: null, total: null, isLoading: false };
      const _Math = Math;
      obj.available = Math.max(0, num - sum);
      obj.spent = sum;
      obj.total = num;
      return obj;
    }
    return { available: 0, spent: 0, total: num, isLoading: true };
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
  const gameServerEnabled = GameServerExperiment.getGameServerEnabled(id, "GuildPowerupsBoostCount");
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
    const obj2 = { available: null, spent: null, total: null };
    const _Math = Math;
    obj2.available = Math.max(0, total - sum);
    obj2.spent = sum;
    obj2.total = total;
    return obj2;
  }
  return { available: 0, spent: 0, total };
};