// discord_app/modules/guild_progress/native/GuildProgressUtils.tsx
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import completeStep from "completeStep";
import { Steps } from "Steps";
import ME from "ME";
import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { DISCORD_EPOCH } from "../../../utils/SnowflakeUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { dispatcher } from "../GuildProgressActionCreators.tsx";
import { usePermissions } from "../GuildProgressHooks.tsx";

let c9;
let metroImportAll;
const require = arg1;
function useIOSCompletionStates(guild) {
  const _require = guild;
  let obj = _initialize;
  const items = [getUncachedChannelPermissions];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.can(outer1_9.ADMINISTRATOR, closure_0));
  const guildPersonalized = _usePermissions.useGuildPersonalized(guild);
  const obj2 = _usePermissions;
  const guildPopulated = _usePermissions.useGuildPopulated(guild);
  const obj3 = _usePermissions;
  const items1 = [comparator];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => outer1_3.getDefaultChannel(guild.id));
  const obj4 = _initialize;
  if (null != stateFromStores1) {
    const items2 = [stateFromStores1];
    let items3 = items2;
  } else {
    items3 = [];
  }
  const channelsMessaged = _usePermissions.useChannelsMessaged(items3);
  let tmpResult = tmp(589);
  const items4 = [completeStep];
  let stateFromStores2 = channelsMessaged;
  if (!channelsMessaged) {
    stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
      const progress = outer1_6.getProgress(guild.id);
      let flag;
      if (progress != null) {
        flag = progress.has(outer1_7.MESSAGE);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    });
  }
  tmpResult = tmp(589);
  const items5 = [createGuildRecordFromRust];
  const stateFromStores3 = tmpResult.useStateFromStores(items5, () => {
    guild = outer1_4.getGuild(guild.id);
    let num;
    if (guild != null) {
      num = guild.premiumSubscriberCount;
    }
    if (num == null) {
      num = 0;
    }
    return num > 0;
  });
  const obj5 = _usePermissions;
  const tmp8 = completeStep;
  const items6 = [tmp8];
  const stateFromStores4 = _initialize.useStateFromStores(items6, () => outer1_6.getProgress(guild.id));
  if (stateFromStores) {
    const ServerSetupBoostCtaExperiment = tmp(11859).ServerSetupBoostCtaExperiment;
    const enabled = ServerSetupBoostCtaExperiment.getConfig({ location: "GuildProgress" }).enabled;
    const items7 = [guildPopulated, guildPersonalized, stateFromStores2];
    if (enabled) {
      items7.push(stateFromStores3);
    }
    let length = items7.filter((arg0) => arg0).length;
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
  const tmpResult1 = _initialize;
}
({ WELCOME_OLD_GUILD_AGE_THRESHOLD: metroImportAll, Permissions: c9 } = ME);
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/guild_progress/native/GuildProgressUtils.tsx");

export const MIN_PROGRESS_PERCENT = 3;
export const PROGRESS_BACKGROUND_COLOR = "rgba(78, 93, 148, 0.3)";
export const openActionSheet = function openActionSheet(guild) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { guild };
  obj.openLazy(asyncRequireImpl /* asyncRequireImpl */(11749, dependencyMap.paths), "guild-progress-" + guild.id, obj);
};
export const hideActionSheet = function hideActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet("guild-progress-" + arg0);
};
export const createGuildProgress = function createGuildProgress(closure_0) {
  if (null != guild.getGuild(closure_0)) {
    const progress = dispatcher.createProgress(closure_0);
    const obj = dispatcher;
  }
};
export { useIOSCompletionStates };
export const useGuildProgressStep = function useGuildProgressStep(guild) {
  let completed;
  let guildBoosted;
  let guildMessaged;
  let guildPersonalized;
  let showBoostStep;
  const tmp = useIOSCompletionStates(guild);
  const totalSteps = tmp.totalSteps;
  let stringResult = null;
  ({ guildPersonalized, guildMessaged, guildBoosted, showBoostStep, completed } = tmp);
  if (!tmp.guildPopulated) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    stringResult = intl.string(getSystemLocale /* getSystemLocale */.t.q9n0Ta);
  }
  const items = [stringResult, , ];
  let stringResult1 = null;
  if (!guildPersonalized) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    stringResult1 = intl2.string(getSystemLocale /* getSystemLocale */.t.DWB2YZ);
  }
  items[1] = stringResult1;
  let stringResult2 = null;
  if (!guildMessaged) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    stringResult2 = intl3.string(getSystemLocale /* getSystemLocale */.t.dNktpr);
  }
  items[2] = stringResult2;
  if (showBoostStep) {
    let stringResult3 = null;
    if (!guildBoosted) {
      const intl4 = getSystemLocale /* getSystemLocale */.intl;
      stringResult3 = intl4.string(getSystemLocale /* getSystemLocale */.t["6Qbqxw"]);
    }
    items.push(stringResult3);
  }
  const length = items.filter((arg0) => null == arg0).length;
  let found = items.find((arg0) => null != arg0);
  if (found == null) {
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    found = intl5.string(getSystemLocale /* getSystemLocale */.t["+Gyklt"]);
  }
  let obj = { percentComplete: Math.max(3, 100 * length / totalSteps), subtitle: null, completed: null };
  if (length < totalSteps) {
    const intl7 = getSystemLocale /* getSystemLocale */.intl;
    obj = { currStep: null, total: null, step: null };
    obj[0] = length + 1;
    obj[1] = totalSteps;
    obj[2] = found;
    let formatToPlainStringResult = intl7.formatToPlainString(getSystemLocale /* getSystemLocale */.t.zhHW5c, obj);
  } else {
    const intl6 = getSystemLocale /* getSystemLocale */.intl;
    formatToPlainStringResult = intl6.string(getSystemLocale /* getSystemLocale */.t["+Gyklt"]);
  }
  obj[1] = formatToPlainStringResult;
  obj[2] = completed;
  return obj;
};
export const useIsEligibleForGuildProgress = function useIsEligibleForGuildProgress(guild) {
  const _require = guild;
  const items = [getUncachedChannelPermissions];
  let stateFromStores = _initialize.useStateFromStores(items, () => outer1_5.can(outer1_9.ADMINISTRATOR, closure_0));
  const obj = _initialize;
  const obj2 = DISCORD_EPOCH;
  if (stateFromStores) {
    stateFromStores = extractTimestampResult >= Date.now() - closure_8;
  }
  return stateFromStores;
};