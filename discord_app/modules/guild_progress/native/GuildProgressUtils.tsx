// discord_app/modules/guild_progress/native/GuildProgressUtils.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildProgressActionCreatorsDefault from "../GuildProgressActionCreators.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import GuildProgressStore from "../GuildProgressStore.tsx";

require = fn;
function useIOSCompletionStates(guild) {
  _require = guild;
  let obj = require("initialize");
  const items = [PermissionStore];
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.ADMINISTRATOR, closure_0));
  const guildPersonalized = require("GuildProgressHooks").useGuildPersonalized(guild);
  const obj2 = require("GuildProgressHooks");
  const guildPopulated = require("GuildProgressHooks").useGuildPopulated(guild);
  const obj3 = require("GuildProgressHooks");
  const items1 = [GuildChannelStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
    GuildChannelStore.getDefaultChannel(guild.id),
  );
  const obj4 = require("initialize");
  if (null != stateFromStores1) {
    const items2 = [stateFromStores1];
    let items3 = items2;
  } else {
    items3 = [];
  }
  const channelsMessaged = require("GuildProgressHooks").useChannelsMessaged(items3);
  let tmpResult = tmp(504);
  const items4 = [GuildProgressStore];
  let stateFromStores2 = channelsMessaged;
  if (!channelsMessaged) {
    stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
      const progress = GuildProgressStore.getProgress(guild.id);
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
  tmpResult = tmp(504);
  const items5 = [GuildStore];
  const stateFromStores3 = tmpResult.useStateFromStores(items5, () => {
    guild = GuildStore.getGuild(guild.id);
    let num;
    if (guild != null) {
      num = guild.premiumSubscriberCount;
    }
    if (num == null) {
      num = 0;
    }
    return num > 0;
  });
  const obj5 = require("GuildProgressHooks");
  const tmp8 = GuildProgressStore;
  const items6 = [tmp8];
  const stateFromStores4 = require("initialize").useStateFromStores(items6, () =>
    GuildProgressStore.getProgress(guild.id),
  );
  if (stateFromStores) {
    const ServerSetupBoostCtaExperiment = tmp(12588).ServerSetupBoostCtaExperiment;
    const enabled = ServerSetupBoostCtaExperiment.getConfig({ location: "GuildProgress" }).enabled;
    const items7 = [guildPopulated, guildPersonalized, stateFromStores2];
    if (enabled) {
      items7.push(stateFromStores3);
    }
    let length = items7.filter((item) => item).length;
    let hasItem;
    if (stateFromStores4 != null) {
      hasItem = stateFromStores4.has(Steps.COMPLETED);
    }
    if (!hasItem) {
      hasItem = length === length2;
    }
    obj = {
      guildPopulated,
      guildPersonalized,
      guildMessaged: stateFromStores2,
      guildBoosted: stateFromStores3,
      showBoostStep: enabled,
      completed: hasItem,
      dismissed: null,
      numFinished: null,
      totalSteps: null,
    };
    let hasItem1 = null == stateFromStores4;
    if (!hasItem1) {
      hasItem1 = stateFromStores4.has(Steps.DISMISSED);
    }
    obj.dismissed = hasItem1;
    if (hasItem) {
      length = length2;
    }
    obj.numFinished = length;
    obj.totalSteps = items7.length;
    return obj;
  } else {
    return {
      guildPopulated: false,
      guildPersonalized: false,
      guildMessaged: false,
      guildChannelCreated: false,
      guildBoosted: false,
      showBoostStep: false,
      completed: true,
      dismissed: true,
      numFinished: 0,
      totalSteps: 0,
    };
  }
  const tmpResult1 = require("initialize");
}
const Steps = fn(12469).Steps;
const Constants = fn(1074);
({ WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_8, Permissions: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/native/GuildProgressUtils.tsx");

export const MIN_PROGRESS_PERCENT = 3;
export const PROGRESS_BACKGROUND_COLOR = "rgba(78, 93, 148, 0.3)";
export const openActionSheet = function openActionSheet(guild) {
  const obj = { guild };
  obj.openLazy(asyncRequireImpl(12476, dependencyMap.paths), "guild-progress-" + guild.id, obj);
};
export const hideActionSheet = function hideActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet("guild-progress-" + arg0);
};
export const createGuildProgress = function createGuildProgress(id) {
  if (null != GuildStore.getGuild(id)) {
    const progress = GuildProgressActionCreatorsDefault.createProgress(id);
  }
};
export { useIOSCompletionStates };
export const useGuildProgressStep = function useGuildProgressStep(guild) {
  const tmp = useIOSCompletionStates(guild);
  const totalSteps = tmp.totalSteps;
  let stringResult = null;
  ({ guildPersonalized, guildMessaged, guildBoosted, showBoostStep, completed } = tmp);
  if (!tmp.guildPopulated) {
    const intl = util.intl;
    stringResult = intl.string(util.t.q9n0Ta);
  }
  const items = [stringResult, ,];
  let stringResult1 = null;
  if (!guildPersonalized) {
    const intl2 = util.intl;
    stringResult1 = intl2.string(util.t.DWB2YZ);
  }
  items[1] = stringResult1;
  let stringResult2 = null;
  if (!guildMessaged) {
    const intl3 = util.intl;
    stringResult2 = intl3.string(util.t.dNktpr);
  }
  items[2] = stringResult2;
  if (showBoostStep) {
    let stringResult3 = null;
    if (!guildBoosted) {
      const intl4 = util.intl;
      stringResult3 = intl4.string(util.t["6Qbqxw"]);
    }
    items.push(stringResult3);
  }
  const length = items.filter((item) => null == item).length;
  let found = items.find((item) => null != item);
  if (found == null) {
    const intl5 = util.intl;
    found = intl5.string(util.t["+Gyklt"]);
  }
  let obj = { percentComplete: Math.max(3, (100 * length) / totalSteps), subtitle: null, completed: null };
  if (length < totalSteps) {
    const intl7 = util.intl;
    obj = { currStep: length + 1, total: totalSteps, step: found };
    let formatToPlainStringResult = intl7.formatToPlainString(util.t.zhHW5c, obj);
  } else {
    const intl6 = util.intl;
    formatToPlainStringResult = intl6.string(util.t["+Gyklt"]);
  }
  obj.subtitle = formatToPlainStringResult;
  obj.completed = completed;
  return obj;
};
export const useIsEligibleForGuildProgress = function useIsEligibleForGuildProgress(guild) {
  _require = guild;
  const items = [PermissionStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () =>
    PermissionStore.can(constants.ADMINISTRATOR, closure_0),
  );
  const obj = require("initialize");
  if (stateFromStores) {
    stateFromStores = extractTimestampResult >= Date.now() - closure_8;
  }
  return stateFromStores;
};
