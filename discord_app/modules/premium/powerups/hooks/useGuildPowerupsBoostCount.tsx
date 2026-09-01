// === Module 4384: useGuildAppliedBoostCount ===

// Module 4384 (useGuildAppliedBoostCount)
import experiment from "experiment" /* 4388 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleGameServerInstanceCreated" /* 4385 */;
import closure_4 from "createGuildRecordFromRust" /* 1909 */;
import closure_5 from "calculateAppliedBoosts" /* 4364 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx");

export default function useGuildAppliedBoostCount(guildId) {
  const _require = guildId;
  const items = [stateFromStores1];
  num = _require(num[5]).useStateFromStores(items, () => {
    const guild = stateFromStores1.getGuild(closure_0);
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
  const items1 = [closure_5];
  const stateFromStores = tmpResult.useStateFromStores(items1, () => {
    const stateForGuild = closure_1_5.getStateForGuild(closure_0);
    let appliedBoosts;
    if (stateForGuild != null) {
      appliedBoosts = stateForGuild.appliedBoosts;
    }
    return appliedBoosts;
  });
  let obj = _require(num[5]);
  const items2 = [stateFromStores];
  stateFromStores1 = _require(num[5]).useStateFromStores(items2, () => {
    const stateForGuild = stateFromStores.getStateForGuild(closure_0);
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
      obj[0] = Math.max(0, num - sum);
      obj[1] = sum;
      obj[2] = num;
      return obj;
    }
    obj = { available: 0, spent: 0, total: num, isLoading: true };
    return obj;
  }, items3);
};
export const getGuildPowerupsBoostCount = function getGuildPowerupsBoostCount(id) {
  guild = guild.getGuild(id);
  let total;
  if (guild != null) {
    total = guild.premiumSubscriberCount;
  }
  if (total == null) {
    total = 0;
  }
  let obj = experiment;
  const gameServerEnabled = obj.getGameServerEnabled(id, "GuildPowerupsBoostCount");
  const stateForGuild = stateForGuild2.getStateForGuild(id);
  let appliedBoosts;
  if (stateForGuild != null) {
    appliedBoosts = stateForGuild.appliedBoosts;
  }
  const stateForGuild1 = stateForGuild.getStateForGuild(id);
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
    obj[0] = Math.max(0, total - sum);
    obj[1] = sum;
    obj[2] = total;
    return obj;
  }
  return { available: 0, spent: 0, total };
};