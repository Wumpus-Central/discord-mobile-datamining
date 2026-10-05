// discord_app/modules/guild_progress/native/GuildProgressUtils.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import react from "../../../../_runtime/00576_react.js";
import intl8 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildProgressConstants from "../GuildProgressConstants.tsx";
import GuildProgressActionCreatorsDefault from "../GuildProgressActionCreators.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import GuildProgressStore from "../GuildProgressStore.tsx";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let c9;
let metroImportAll;
const Steps = GuildProgressConstants.Steps;
({ WELCOME_OLD_GUILD_AGE_THRESHOLD: metroImportAll, Permissions: c9 } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let first;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp17;
      let tmp19;
      let tmp20;
      let tmp24;
      let tmp6;
      const _require = id;
      const obj = require("react");
      const cResult = obj.c(40);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function p() {
          return PermissionStore.can(constants.ADMINISTRATOR, user);
        };
        cResult[1] = id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmpResult8 = require("GuildProgressHooks");
      const guildPersonalized = tmpResult8.useGuildPersonalized(id);
      const tmpResult9 = require("GuildProgressHooks");
      const guildPopulated = tmpResult9.useGuildPopulated(id);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildChannelStore];
        cResult[3] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== id.id) {
        const fn2 = function f() {
          return GuildChannelStore.getDefaultChannel(user.id);
        };
        cResult[4] = id.id;
        cResult[5] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      const tmpResult10 = require("get initialized");
      const stateFromStores1 = tmpResult10.useStateFromStores(tmp10, tmp12);
      if (cResult[6] !== stateFromStores1) {
        let items3;
        if (null != stateFromStores1) {
          const items2 = [stateFromStores1];
          items3 = items2;
        } else {
          items3 = [];
        }
        cResult[6] = stateFromStores1;
        cResult[7] = items3;
        tmp14 = items3;
      } else {
        tmp14 = cResult[7];
      }
      const tmpResult11 = require("GuildProgressHooks");
      let channelsMessaged = tmpResult11.useChannelsMessaged(tmp14);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [GuildProgressStore];
        cResult[8] = items4;
        tmp17 = items4;
      } else {
        tmp17 = cResult[8];
      }
      if (cResult[9] !== id.id) {
        const fn3 = function b() {
          const progress = GuildProgressStore.getProgress(user.id);
          let flag;
          if (progress != null) {
            flag = progress.has(Steps.MESSAGE);
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        };
        cResult[9] = id.id;
        cResult[10] = fn3;
        tmp19 = fn3;
      } else {
        tmp19 = cResult[10];
      }
      const tmpResult12 = require("get initialized");
      if (!channelsMessaged) {
        channelsMessaged = tmpResult12.useStateFromStores(tmp17, tmp19);
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const items5 = [GuildStore];
        cResult[11] = items5;
        tmp20 = items5;
      } else {
        tmp20 = cResult[11];
      }
      if (cResult[12] !== id.id) {
        class F {
          constructor() {
            const guild = GuildStore.getGuild(user.id);
            let num;
            if (guild != null) {
              num = guild.premiumSubscriberCount;
            }
            if (num == null) {
              num = 0;
            }
            return num > 0;
          }
        }
        cResult[12] = id.id;
        cResult[13] = F;
      } else {
        class F {
          constructor() {
            const guild = GuildStore.getGuild(user.id);
            let num;
            if (guild != null) {
              num = guild.premiumSubscriberCount;
            }
            if (num == null) {
              num = 0;
            }
            return num > 0;
          }
        }
      }
      const tmpResult13 = require("get initialized");
      const stateFromStores2 = tmpResult13.useStateFromStores(tmp20, F);
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            const guild = GuildStore.getGuild(user.id);
            let num;
            if (guild != null) {
              num = guild.premiumSubscriberCount;
            }
            if (num == null) {
              num = 0;
            }
            return num > 0;
          }
        }
        const items6 = [GuildProgressStore];
        cResult[14] = items6;
        tmp24 = items6;
      } else {
        class F {
          constructor() {
            const guild = GuildStore.getGuild(user.id);
            let num;
            if (guild != null) {
              num = guild.premiumSubscriberCount;
            }
            if (num == null) {
              num = 0;
            }
            return num > 0;
          }
        }
      }
      if (cResult[15] !== id.id) {
        class O {
          constructor() {
            return GuildProgressStore.getProgress(user.id);
          }
        }
        cResult[15] = id.id;
        cResult[16] = O;
      } else {
        class O {
          constructor() {
            return GuildProgressStore.getProgress(user.id);
          }
        }
      }
      const tmpResult14 = require("get initialized");
      const stateFromStores3 = tmpResult14.useStateFromStores(tmp24, O);
      if (stateFromStores) {
        class O {
          constructor() {
            return GuildProgressStore.getProgress(user.id);
          }
        }
        const items7 = [guildPopulated, guildPersonalized, channelsMessaged, stateFromStores2];
        cResult[18] = stateFromStores2;
        cResult[19] = channelsMessaged;
        cResult[20] = guildPersonalized;
        cResult[21] = guildPopulated;
        cResult[22] = items7;
      } else {
        class O {
          constructor() {
            return GuildProgressStore.getProgress(user.id);
          }
        }
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              return GuildProgressStore.getProgress(user.id);
            }
          }
          cResult[17] = tmp28;
        } else {
          class O {
            constructor() {
              return GuildProgressStore.getProgress(user.id);
            }
          }
        }
        return tmp28;
      }
    }
  : (arg0) => {
      let hasItem1;
      let items3;
      const _require = arg0;
      const items = [PermissionStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.ADMINISTRATOR, user));
      const obj2 = require("GuildProgressHooks");
      const guildPersonalized = obj2.useGuildPersonalized(arg0);
      const obj3 = require("GuildProgressHooks");
      const guildPopulated = obj3.useGuildPopulated(arg0);
      const items1 = [GuildChannelStore];
      const obj4 = require("get initialized");
      const stateFromStores1 = obj4.useStateFromStores(items1, () => GuildChannelStore.getDefaultChannel(user.id));
      const useChannelsMessaged = require("GuildProgressHooks").useChannelsMessaged;
      require("GuildProgressHooks");
      if (null != stateFromStores1) {
        const items2 = [stateFromStores1];
        items3 = items2;
      } else {
        items3 = [];
      }
      let channelsMessaged = useChannelsMessaged(items3);
      const items4 = [GuildProgressStore];
      const tmpResult = require("get initialized");
      if (!channelsMessaged) {
        channelsMessaged = tmpResult.useStateFromStores(items4, () => {
          const progress = GuildProgressStore.getProgress(user.id);
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
      const items5 = [GuildStore];
      const tmpResult3 = require("get initialized");
      const stateFromStores2 = tmpResult3.useStateFromStores(items5, () => {
        const guild = GuildStore.getGuild(user.id);
        let num;
        if (guild != null) {
          num = guild.premiumSubscriberCount;
        }
        if (num == null) {
          num = 0;
        }
        return num > 0;
      });
      const items6 = [GuildProgressStore];
      const tmpResult4 = require("get initialized");
      const stateFromStores3 = tmpResult4.useStateFromStores(items6, () => GuildProgressStore.getProgress(user.id));
      if (stateFromStores) {
        const items7 = [guildPopulated, guildPersonalized, channelsMessaged, stateFromStores2];
        let length = items7.filter((item) => item).length;
        let hasItem;
        if (stateFromStores3 != null) {
          hasItem = stateFromStores3.has(Steps.COMPLETED);
        }
        if (!hasItem) {
          hasItem = length === length2;
        }
        const obj5 = {
          guildPopulated,
          guildPersonalized,
          guildMessaged: channelsMessaged,
          guildBoosted: stateFromStores2,
          completed: hasItem,
          dismissed: hasItem1,
          numFinished: length,
          totalSteps: items7.length,
        };
        hasItem1 = null == stateFromStores3 || stateFromStores3.has(Steps.DISMISSED);
        if (hasItem) {
          length = length2;
        }
        return obj5;
      } else {
        return {
          guildPopulated: false,
          guildPersonalized: false,
          guildMessaged: false,
          guildChannelCreated: false,
          guildBoosted: false,
          completed: true,
          dismissed: true,
          numFinished: 0,
          totalSteps: 0,
        };
      }
    };
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let completed;
      let formatToPlainStringResult;
      let guildBoosted;
      let guildMessaged;
      let guildPersonalized;
      let guildPopulated;
      let totalSteps;
      const obj = react;
      const cResult = obj.c(11);
      ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted, completed, totalSteps } = closure_10(arg0));
      closure_10(arg0);
      if (cResult[0] === guildBoosted) {
        if (cResult[1] === guildMessaged) {
          if (cResult[2] === guildPersonalized) {
            if (cResult[3] === guildPopulated) {
              let tmp5;
              let tmp6;
              if (cResult[4] === totalSteps) {
                tmp5 = cResult[5];
                tmp6 = cResult[6];
              }
              if (cResult[7] === completed) {
                if (cResult[8] === tmp5) {
                  let tmp14;
                  if (cResult[9] === tmp6) {
                    tmp14 = cResult[10];
                  }
                  return tmp14;
                }
              }
              const obj2 = { percentComplete: tmp5, subtitle: tmp6, completed };
              cResult[7] = completed;
              cResult[8] = tmp5;
              cResult[9] = tmp6;
              cResult[10] = obj2;
              tmp14 = obj2;
            }
          }
        }
      }
      let stringResult = null;
      if (!guildPopulated) {
        const intl = intl8.intl;
        stringResult = intl.string(intl8.t.q9n0Ta);
      }
      const items = [stringResult, , ,];
      let stringResult1 = null;
      if (!guildPersonalized) {
        const intl2 = intl8.intl;
        stringResult1 = intl2.string(intl8.t.DWB2YZ);
      }
      items[1] = stringResult1;
      let stringResult2 = null;
      if (!guildMessaged) {
        const intl3 = intl8.intl;
        stringResult2 = intl3.string(intl8.t.dNktpr);
      }
      items[2] = stringResult2;
      let stringResult3 = null;
      if (!guildBoosted) {
        const intl4 = intl8.intl;
        stringResult3 = intl4.string(intl8.t["6Qbqxw"]);
      }
      items[3] = stringResult3;
      const length = items.filter((item) => null == item).length;
      let found = items.find((item) => null != item);
      if (found == null) {
        const intl5 = intl8.intl;
        found = intl5.string(intl8.t["+Gyklt"]);
      }
      const bound = Math.max(3, (100 * length) / totalSteps);
      if (length < totalSteps) {
        const intl7 = intl8.intl;
        const obj3 = { currStep: length + 1, total: totalSteps, step: found };
        formatToPlainStringResult = intl7.formatToPlainString(intl8.t.zhHW5c, obj3);
      } else {
        const intl6 = intl8.intl;
        formatToPlainStringResult = intl6.string(intl8.t["+Gyklt"]);
      }
      cResult[0] = guildBoosted;
      cResult[1] = guildMessaged;
      cResult[2] = guildPersonalized;
      cResult[3] = guildPopulated;
      cResult[4] = totalSteps;
      cResult[5] = bound;
      cResult[6] = formatToPlainStringResult;
      tmp6 = formatToPlainStringResult;
      tmp5 = bound;
    }
  : (arg0) => {
      let completed;
      let formatToPlainStringResult;
      let guildBoosted;
      let guildMessaged;
      let guildPersonalized;
      const tmp = closure_10(arg0);
      const totalSteps = tmp.totalSteps;
      let stringResult = null;
      ({ guildPersonalized, guildMessaged, guildBoosted, completed } = tmp);
      if (!tmp.guildPopulated) {
        const intl = intl8.intl;
        stringResult = intl.string(intl8.t.q9n0Ta);
      }
      const items = [stringResult, , ,];
      let stringResult1 = null;
      if (!guildPersonalized) {
        const intl2 = intl8.intl;
        stringResult1 = intl2.string(intl8.t.DWB2YZ);
      }
      items[1] = stringResult1;
      let stringResult2 = null;
      if (!guildMessaged) {
        const intl3 = intl8.intl;
        stringResult2 = intl3.string(intl8.t.dNktpr);
      }
      items[2] = stringResult2;
      let stringResult3 = null;
      if (!guildBoosted) {
        const intl4 = intl8.intl;
        stringResult3 = intl4.string(intl8.t["6Qbqxw"]);
      }
      items[3] = stringResult3;
      const length = items.filter((item) => null == item).length;
      let found = items.find((item) => null != item);
      if (found == null) {
        const intl5 = intl8.intl;
        found = intl5.string(intl8.t["+Gyklt"]);
      }
      const obj = {
        percentComplete: Math.max(3, (100 * length) / totalSteps),
        subtitle: formatToPlainStringResult,
        completed,
      };
      if (length < totalSteps) {
        const intl7 = intl8.intl;
        const obj2 = { currStep: length + 1, total: totalSteps, step: found };
        formatToPlainStringResult = intl7.formatToPlainString(intl8.t.zhHW5c, obj2);
      } else {
        const intl6 = intl8.intl;
        formatToPlainStringResult = intl6.string(intl8.t["+Gyklt"]);
      }
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let first;
      let tmp6;
      const _require = id;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function n() {
          return PermissionStore.can(constants.ADMINISTRATOR, id);
        };
        cResult[1] = id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      let stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const obj3 = SnowflakeUtilsDefault;
      const extractTimestampResult = obj3.extractTimestamp(id.id);
      if (stateFromStores) {
        stateFromStores = extractTimestampResult >= Date.now() - closure_8;
      }
      return stateFromStores;
    }
  : (id) => {
      const _require = id;
      const items = [PermissionStore];
      const obj = require("get initialized");
      let stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.ADMINISTRATOR, id));
      const obj2 = SnowflakeUtilsDefault;
      const extractTimestampResult = obj2.extractTimestamp(id.id);
      if (stateFromStores) {
        stateFromStores = extractTimestampResult >= Date.now() - closure_8;
      }
      return stateFromStores;
    };
const result = size.fileFinishedImporting("modules/guild_progress/native/GuildProgressUtils.tsx");

export const MIN_PROGRESS_PERCENT = 3;
export const PROGRESS_BACKGROUND_COLOR = "rgba(78, 93, 148, 0.3)";
export const openActionSheet = function openActionSheet(guild) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { guild };
  const tmp2 = asyncRequire(12132, dependencyMap.paths);
  openLazy(tmp2, "guild-progress-" + guild.id, obj);
};
export const hideActionSheet = function hideActionSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet("guild-progress-" + id);
};
export const createGuildProgress = function createGuildProgress(id) {
  if (null != GuildStore.getGuild(id)) {
    const obj = GuildProgressActionCreatorsDefault;
    const progress = obj.createProgress(id);
  }
};
export const useIOSCompletionStates = tmp3;
export const useGuildProgressStep = tmp4;
export const useIsEligibleForGuildProgress = tmp5;
