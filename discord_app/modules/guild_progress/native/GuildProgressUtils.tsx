// discord_app/modules/guild_progress/native/GuildProgressUtils.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import c from "../../../../_runtime/00576_c.js";
import asyncRequireImpl from "../../../../_runtime/01999_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildProgressActionCreatorsDefault from "../GuildProgressActionCreators.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import GuildProgressStore from "../GuildProgressStore.tsx";

const require = globalThis.__r;

const util = zhHW5c(1126);
require = fn;
const Steps = fn(12219).Steps;
const Constants = fn(1085);
({ WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_8, Permissions: closure_9 } = Constants);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIOSCompletionStates(id) {
      const _require = id;
      const cResult = require("c").c(40);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function p() {
          return PermissionStore.can(constants.ADMINISTRATOR, closure_0);
        };
        cResult[1] = id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      const tmpResult = require("initialize");
      const guildPersonalized = require("GuildProgressHooks").useGuildPersonalized(id);
      const tmpResult8 = require("GuildProgressHooks");
      const guildPopulated = require("GuildProgressHooks").useGuildPopulated(id);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildChannelStore];
        cResult[3] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== id.id) {
        const fn2 = function f() {
          return GuildChannelStore.getDefaultChannel(user.id);
        };
        cResult[4] = id.id;
        cResult[5] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      const tmpResult9 = require("GuildProgressHooks");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp12);
      if (cResult[6] !== stateFromStores1) {
        if (null != stateFromStores1) {
          const items2 = [stateFromStores1];
          let items3 = items2;
        } else {
          items3 = [];
        }
        cResult[6] = stateFromStores1;
        cResult[7] = items3;
      } else {
        const channelsMessaged = tmp(12222).useChannelsMessaged(cResult[7]);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items4 = [GuildProgressStore];
          cResult[8] = items4;
        }
        if (cResult[9] !== id.id) {
          class M {
            constructor() {
              progress = closure_6.getProgress(closure_0.id);
              flag = undefined;
              if (progress != null) {
                tmp = Steps;
                flag = progress.has(Steps.MESSAGE);
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
          cResult[9] = id.id;
          cResult[10] = M;
        } else {
          class M {
            constructor() {
              progress = closure_6.getProgress(closure_0.id);
              flag = undefined;
              if (progress != null) {
                tmp = Steps;
                flag = progress.has(Steps.MESSAGE);
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
        }
        tmp(504);
        if (!channelsMessaged) {
          class M {
            constructor() {
              progress = closure_6.getProgress(closure_0.id);
              flag = undefined;
              if (progress != null) {
                tmp = Steps;
                flag = progress.has(Steps.MESSAGE);
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor() {
              progress = closure_6.getProgress(closure_0.id);
              flag = undefined;
              if (progress != null) {
                tmp = Steps;
                flag = progress.has(Steps.MESSAGE);
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
          const items5 = [GuildStore];
          cResult[11] = items5;
          const tmp21 = items5;
        } else {
          class M {
            constructor() {
              progress = closure_6.getProgress(closure_0.id);
              flag = undefined;
              if (progress != null) {
                tmp = Steps;
                flag = progress.has(Steps.MESSAGE);
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
        }
        if (cResult[12] !== id.id) {
          class F {
            constructor() {
              guild = closure_4.getGuild(closure_0.id);
              num = undefined;
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
              guild = closure_4.getGuild(closure_0.id);
              num = undefined;
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
        const tmpResult11 = tmp(12222);
        const stateFromStores2 = tmp(504).useStateFromStores(tmp21, F);
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              guild = closure_4.getGuild(closure_0.id);
              num = undefined;
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
          const tmp24 = items6;
        } else {
          class F {
            constructor() {
              guild = closure_4.getGuild(closure_0.id);
              num = undefined;
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
          class A {
            constructor() {
              return closure_6.getProgress(closure_0.id);
            }
          }
          cResult[15] = id.id;
          cResult[16] = A;
        } else {
          class A {
            constructor() {
              return closure_6.getProgress(closure_0.id);
            }
          }
        }
        const tmpResult13 = tmp(504);
        const stateFromStores3 = tmp(504).useStateFromStores(tmp24, A);
        if (stateFromStores) {
          class A {
            constructor() {
              return closure_6.getProgress(closure_0.id);
            }
          }
          const items7 = [guildPopulated, guildPersonalized, channelsMessaged, stateFromStores2];
          cResult[18] = stateFromStores2;
          cResult[19] = channelsMessaged;
          cResult[20] = guildPersonalized;
          cResult[21] = guildPopulated;
          cResult[22] = items7;
        } else {
          class A {
            constructor() {
              return closure_6.getProgress(closure_0.id);
            }
          }
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                return closure_6.getProgress(closure_0.id);
              }
            }
            cResult[17] = tmp28;
          } else {
            class A {
              constructor() {
                return closure_6.getProgress(closure_0.id);
              }
            }
          }
          return tmp28;
        }
        const tmpResult14 = tmp(504);
      }
      const tmpResult10 = require("initialize");
    }
  : function useIOSCompletionStates(arg0) {
      const _require = arg0;
      const items = [PermissionStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        PermissionStore.can(constants.ADMINISTRATOR, closure_0),
      );
      const obj = require("initialize");
      const guildPersonalized = require("GuildProgressHooks").useGuildPersonalized(arg0);
      const obj2 = require("GuildProgressHooks");
      const guildPopulated = require("GuildProgressHooks").useGuildPopulated(arg0);
      const obj3 = require("GuildProgressHooks");
      const items1 = [GuildChannelStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
        GuildChannelStore.getDefaultChannel(user.id),
      );
      const obj4 = require("initialize");
      if (null != stateFromStores1) {
        const items2 = [stateFromStores1];
        let items3 = items2;
      } else {
        items3 = [];
      }
      let channelsMessaged = require("GuildProgressHooks").useChannelsMessaged(items3);
      const obj5 = require("GuildProgressHooks");
      const items4 = [GuildProgressStore];
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
      tmpResult = require("initialize");
      const items5 = [GuildStore];
      const stateFromStores2 = require("initialize").useStateFromStores(items5, () => {
        guild = GuildStore.getGuild(user.id);
        let num;
        if (guild != null) {
          num = guild.premiumSubscriberCount;
        }
        if (num == null) {
          num = 0;
        }
        return num > 0;
      });
      const tmpResult3 = require("initialize");
      const items6 = [GuildProgressStore];
      const stateFromStores3 = require("initialize").useStateFromStores(items6, () =>
        GuildProgressStore.getProgress(user.id),
      );
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
        const obj6 = {
          guildPopulated,
          guildPersonalized,
          guildMessaged: channelsMessaged,
          guildBoosted: stateFromStores2,
          completed: hasItem,
          dismissed: null,
          numFinished: null,
          totalSteps: null,
        };
        let hasItem1 = null == stateFromStores3;
        if (!hasItem1) {
          hasItem1 = stateFromStores3.has(Steps.DISMISSED);
        }
        obj6.dismissed = hasItem1;
        if (hasItem) {
          length = length2;
        }
        obj6.numFinished = length;
        obj6.totalSteps = items7.length;
        return obj6;
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
      const tmpResult4 = require("initialize");
    };
let closure_10 = tmp3;
fn(558);
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildProgressStep(arg0) {
      let zhHW5c = require;
      let obj = dependencyMap;
      const cResult = c.c(11);
      ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted, completed, totalSteps } = closure_10(arg0));
      if (cResult[0] === guildBoosted) {
        if (cResult[1] === guildMessaged) {
          if (cResult[2] === guildPersonalized) {
            if (cResult[3] === guildPopulated) {
              if (cResult[4] === totalSteps) {
                if (cResult[7] === completed) {
                  if (cResult[8] === tmp3) {
                    if (cResult[9] === tmp4) {
                      let tmp12 = cResult[10];
                    }
                    return tmp12;
                  }
                }
                const obj3 = { percentComplete: cResult[5], subtitle: cResult[6], completed };
                cResult[7] = completed;
                cResult[8] = cResult[5];
                cResult[9] = cResult[6];
                cResult[10] = obj3;
                tmp12 = obj3;
              }
            }
          }
        }
      }
      let stringResult = null;
      if (!guildPopulated) {
        const intl = util.intl;
        stringResult = intl.string(util.t.q9n0Ta);
      }
      const items = [stringResult, , ,];
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
      let stringResult3 = null;
      if (!guildBoosted) {
        const intl4 = util.intl;
        stringResult3 = intl4.string(util.t["6Qbqxw"]);
      }
      items[3] = stringResult3;
      let length = items.filter((item) => null == item).length;
      let found = items.find((item) => null != item);
      if (found == null) {
        const intl5 = util.intl;
        found = intl5.string(util.t["+Gyklt"]);
      }
      let num = 3;
      const bound = Math.max(3, (100 * length) / totalSteps);
      if (length < totalSteps) {
        const intl7 = util.intl;
        zhHW5c = util.t.zhHW5c;
        obj = { currStep: null, total: null, step: null };
        length = length + 1;
        obj.currStep = length;
        obj.total = totalSteps;
        obj.step = found;
        let formatToPlainStringResult = intl7.formatToPlainString(zhHW5c, obj);
      } else {
        const intl6 = util.intl;
        formatToPlainStringResult = intl6.string(util.t["+Gyklt"]);
      }
      cResult[0] = guildBoosted;
      cResult[1] = guildMessaged;
      cResult[2] = guildPersonalized;
      cResult[num] = guildPopulated;
      cResult[4] = totalSteps;
      cResult[5] = bound;
      num = 6;
      cResult[6] = formatToPlainStringResult;
    }
  : function useGuildProgressStep(arg0) {
      const tmp = closure_10(arg0);
      const totalSteps = tmp.totalSteps;
      let stringResult = null;
      ({ guildPersonalized, guildMessaged, guildBoosted, completed } = tmp);
      if (!tmp.guildPopulated) {
        const intl = util.intl;
        stringResult = intl.string(util.t.q9n0Ta);
      }
      const items = [stringResult, , ,];
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
      let stringResult3 = null;
      if (!guildBoosted) {
        const intl4 = util.intl;
        stringResult3 = intl4.string(util.t["6Qbqxw"]);
      }
      items[3] = stringResult3;
      const length = items.filter((item) => null == item).length;
      let found = items.find((item) => null != item);
      if (found == null) {
        const intl5 = util.intl;
        found = intl5.string(util.t["+Gyklt"]);
      }
      const obj = { percentComplete: Math.max(3, (100 * length) / totalSteps), subtitle: null, completed: null };
      if (length < totalSteps) {
        const intl7 = util.intl;
        const obj2 = { currStep: length + 1, total: totalSteps, step: found };
        let formatToPlainStringResult = intl7.formatToPlainString(util.t.zhHW5c, obj2);
      } else {
        const intl6 = util.intl;
        formatToPlainStringResult = intl6.string(util.t["+Gyklt"]);
      }
      obj.subtitle = formatToPlainStringResult;
      obj.completed = completed;
      return obj;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/native/GuildProgressUtils.tsx");

export const MIN_PROGRESS_PERCENT = 3;
export const PROGRESS_BACKGROUND_COLOR = "rgba(78, 93, 148, 0.3)";
export const openActionSheet = function openActionSheet(guild) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(12226, dependencyMap.paths), "guild-progress-" + guild.id, { guild });
};
export const hideActionSheet = function hideActionSheet(id) {
  ActionSheetActionCreatorsDefault.hideActionSheet("guild-progress-" + id);
};
export const createGuildProgress = function createGuildProgress(id) {
  if (null != GuildStore.getGuild(id)) {
    const progress = GuildProgressActionCreatorsDefault.createProgress(id);
  }
};
export const useIOSCompletionStates = tmp3;
export const useGuildProgressStep = tmp4;
export const useIsEligibleForGuildProgress = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsEligibleForGuildProgress(id) {
      const _require = id;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function n() {
          return PermissionStore.can(constants.ADMINISTRATOR, closure_0);
        };
        cResult[1] = id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      let stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      const tmpResult = require("initialize");
      if (stateFromStores) {
        stateFromStores = extractTimestampResult >= Date.now() - closure_8;
      }
      return stateFromStores;
    }
  : function useIsEligibleForGuildProgress(id) {
      const _require = id;
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
