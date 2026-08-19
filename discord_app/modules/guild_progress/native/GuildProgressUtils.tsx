// === Module 11643: useIOSCompletionStates ===

// Module 11643 (useIOSCompletionStates)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import dispatcherDefault from "dispatcher" /* 11646 */;
import comparator from "comparator" /* 1980 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import completeStep from "completeStep" /* 11644 */;
import { Steps } from "Steps" /* 11637 */;
import ME from "ME" /* 676 */;

require = fn;
function useIOSCompletionStates(guild) {
  const _require = guild;
  let obj = _require(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.can(closure_1_9.ADMINISTRATOR, closure_0));
  const guildPersonalized = _require(11641).useGuildPersonalized(guild);
  const obj2 = _require(11641);
  const guildPopulated = _require(11641).useGuildPopulated(guild);
  const obj3 = _require(11641);
  const items1 = [closure_3];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => closure_1_3.getDefaultChannel(guild.id));
  const obj4 = _require(589);
  if (null != stateFromStores1) {
    const items2 = [stateFromStores1];
    let items3 = items2;
  } else {
    items3 = [];
  }
  const channelsMessaged = _require(11641).useChannelsMessaged(items3);
  let tmpResult = tmp(589);
  const items4 = [closure_6];
  let stateFromStores2 = channelsMessaged;
  if (!channelsMessaged) {
    stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
      const progress = closure_1_6.getProgress(guild.id);
      let flag;
      if (progress != null) {
        flag = progress.has(Steps.MESSAGE);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    });
  }
  tmpResult = tmp(589);
  const items5 = [closure_4];
  const stateFromStores3 = tmpResult.useStateFromStores(items5, () => {
    guild = closure_1_4.getGuild(guild.id);
    let num;
    if (guild != null) {
      num = guild.premiumSubscriberCount;
    }
    if (num == null) {
      num = 0;
    }
    return num > 0;
  });
  const obj5 = _require(11641);
  const items6 = [closure_6];
  const stateFromStores4 = _require(589).useStateFromStores(items6, () => closure_1_6.getProgress(guild.id));
  if (stateFromStores) {
    const ServerSetupBoostCtaExperiment = tmp(11757).ServerSetupBoostCtaExperiment;
    const enabled = ServerSetupBoostCtaExperiment.getConfig({ location: "GuildProgress" }).enabled;
    const items7 = [guildPopulated, guildPersonalized, stateFromStores2];
    if (enabled) {
      items7.push(stateFromStores3);
    }
    let length = items7.filter((item, index) => item).length;
    let hasItem;
    if (stateFromStores4 != null) {
      hasItem = stateFromStores4.has(Steps.COMPLETED);
    }
    if (!hasItem) {
      hasItem = length === length2;
    }
    obj = { guildPopulated: null, guildPersonalized: null, guildMessaged: null, guildBoosted: null, showBoostStep: null, completed: null, dismissed: null, numFinished: null, totalSteps: null };
    obj[0] = guildPopulated;
    obj[1] = guildPersonalized;
    obj[2] = stateFromStores2;
    obj[3] = stateFromStores3;
    obj[4] = enabled;
    obj[5] = hasItem;
    let hasItem1 = null == stateFromStores4;
    if (!hasItem1) {
      hasItem1 = stateFromStores4.has(Steps.DISMISSED);
    }
    obj[6] = hasItem1;
    if (hasItem) {
      length = length2;
    }
    obj[7] = length;
    obj[8] = items7.length;
    return obj;
  } else {
    return { guildPopulated: false, guildPersonalized: false, guildMessaged: false, guildChannelCreated: false, guildBoosted: false, showBoostStep: false, completed: true, dismissed: true, numFinished: 0, totalSteps: 0 };
  }
  const tmpResult1 = _require(589);
}
({ WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_8, Permissions: c9 } = ME);
const result = require("obj132").fileFinishedImporting("modules/guild_progress/native/GuildProgressUtils.tsx");

export const MIN_PROGRESS_PERCENT = 3;
export const PROGRESS_BACKGROUND_COLOR = "rgba(78, 93, 148, 0.3)";
export const openActionSheet = function openActionSheet(guild) {
  const obj = { guild };
  obj.openLazy(asyncRequireImpl(11645, dependencyMap.paths), "guild-progress-" + guild.id, obj);
};
export const hideActionSheet = function hideActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet("guild-progress-" + arg0);
};
export const createGuildProgress = function createGuildProgress(closure_0) {
  if (null != guild.getGuild(closure_0)) {
    const progress = dispatcherDefault.createProgress(closure_0);
  }
};
export { useIOSCompletionStates };
export const useGuildProgressStep = function useGuildProgressStep(guild) {
  const tmp = useIOSCompletionStates(guild);
  const totalSteps = tmp.totalSteps;
  let stringResult = null;
  ({ guildPersonalized, guildMessaged, guildBoosted, showBoostStep, completed } = tmp);
  if (!tmp.guildPopulated) {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.q9n0Ta);
  }
  const items = [stringResult, , ];
  let stringResult1 = null;
  if (!guildPersonalized) {
    const intl2 = getSystemLocale.intl;
    stringResult1 = intl2.string(getSystemLocale.t.DWB2YZ);
  }
  items[1] = stringResult1;
  let stringResult2 = null;
  if (!guildMessaged) {
    const intl3 = getSystemLocale.intl;
    stringResult2 = intl3.string(getSystemLocale.t.dNktpr);
  }
  items[2] = stringResult2;
  if (showBoostStep) {
    let stringResult3 = null;
    if (!guildBoosted) {
      const intl4 = getSystemLocale.intl;
      stringResult3 = intl4.string(getSystemLocale.t["6Qbqxw"]);
    }
    items.push(stringResult3);
  }
  const length = items.filter((item, index) => null == item).length;
  let found = items.find((item, index) => null != item);
  if (found == null) {
    const intl5 = getSystemLocale.intl;
    found = intl5.string(getSystemLocale.t["+Gyklt"]);
  }
  let obj = { percentComplete: Math.max(3, 100 * length / totalSteps), subtitle: null, completed: null };
  if (length < totalSteps) {
    const intl7 = getSystemLocale.intl;
    obj = { currStep: null, total: null, step: null };
    obj[0] = length + 1;
    obj[1] = totalSteps;
    obj[2] = found;
    let formatToPlainStringResult = intl7.formatToPlainString(getSystemLocale.t.zhHW5c, obj);
  } else {
    const intl6 = getSystemLocale.intl;
    formatToPlainStringResult = intl6.string(getSystemLocale.t["+Gyklt"]);
  }
  obj[1] = formatToPlainStringResult;
  obj[2] = completed;
  return obj;
};
export const useIsEligibleForGuildProgress = function useIsEligibleForGuildProgress(guild) {
  const _require = guild;
  const items = [closure_5];
  let stateFromStores = _require(589).useStateFromStores(items, () => closure_1_5.can(closure_1_9.ADMINISTRATOR, closure_0));
  const obj = _require(589);
  if (stateFromStores) {
    stateFromStores = extractTimestampResult >= Date.now() - closure_8;
  }
  return stateFromStores;
};