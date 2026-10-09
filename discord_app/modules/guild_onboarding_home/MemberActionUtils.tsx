// discord_app/modules/guild_onboarding_home/MemberActionUtils.tsx
import useIsNewMemberDefault from "useIsNewMember.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore.tsx";
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore.tsx";

const require = globalThis.__r;

const require = fn;
const GuildMemberFlags = fn(4695).GuildMemberFlags;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMemberActionsForChannel(arg0, arg1) {
      _require = arg0;
      importDefault = arg1;
      const cResult = require("c").c(11);
      const obj = require("c");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildOnboardingHomeSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return GuildOnboardingHomeSettingsStore.getNewMemberActions(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmp4 = useIsNewMemberDefault(arg0);
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildOnboardingMemberActionStore];
        cResult[4] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== arg0) {
        class A {
          constructor() {
            return closure_5.getCompletedActions(closure_0);
          }
        }
        cResult[5] = arg0;
        cResult[6] = A;
      } else {
        class A {
          constructor() {
            return closure_5.getCompletedActions(closure_0);
          }
        }
      }
      const tmpResult = require("useStateFromStores");
      const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp10, A);
      if (tmp4) {
        class A {
          constructor() {
            return closure_5.getCompletedActions(closure_0);
          }
        }
        if (stateFromStores != null) {
          class A {
            constructor() {
              return closure_5.getCompletedActions(closure_0);
            }
          }
        }
        if (undefined == null) {
          class A {
            constructor() {
              return closure_5.getCompletedActions(closure_0);
            }
          }
        }
        if (undefined >= 0) {
          class A {
            constructor() {
              return closure_5.getCompletedActions(closure_0);
            }
          }
          if (null != stateFromStores) {
            class A {
              constructor() {
                return closure_5.getCompletedActions(closure_0);
              }
            }
          }
        }
        let tmp18 = null != tmp17;
        if (tmp18) {
          class A {
            constructor() {
              return closure_5.getCompletedActions(closure_0);
            }
          }
          if (stateFromStores1 != null) {
            class A {
              constructor() {
                return closure_5.getCompletedActions(closure_0);
              }
            }
          }
          tmp18 = true === tmp19;
        }
        if (cResult[8] === null) {
          class A {
            constructor() {
              return closure_5.getCompletedActions(closure_0);
            }
          }
          return tmp20;
        }
        const obj2 = { channelAction: null, completed: tmp18 };
        cResult[8] = null;
        cResult[9] = tmp18;
        cResult[10] = obj2;
        tmp20 = obj2;
      } else {
        class A {
          constructor() {
            return closure_5.getCompletedActions(closure_0);
          }
        }
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return closure_5.getCompletedActions(closure_0);
            }
          }
          cResult[7] = tmp15;
        } else {
          class A {
            constructor() {
              return closure_5.getCompletedActions(closure_0);
            }
          }
        }
        return tmp15;
      }
      const tmpResult2 = require("useStateFromStores");
    }
  : function useMemberActionsForChannel(arg0, arg1) {
      _require = arg0;
      importDefault = arg1;
      const tmp = useIsNewMemberDefault(arg0);
      const items = [GuildOnboardingHomeSettingsStore];
      const items1 = [arg0];
      const stateFromStores = require("useStateFromStores").useStateFromStores(
        items,
        () => GuildOnboardingHomeSettingsStore.getNewMemberActions(closure_0),
        items1,
      );
      const obj = require("useStateFromStores");
      const items2 = [GuildOnboardingMemberActionStore];
      const stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () =>
        GuildOnboardingMemberActionStore.getCompletedActions(closure_0),
      );
      if (tmp) {
        let num;
        if (stateFromStores != null) {
          num = stateFromStores.findIndex((channelId) => channelId.channelId === id.id);
        }
        if (num == null) {
          num = 0;
        }
        let tmp4 = null;
        if (num >= 0) {
          tmp4 = null;
          if (null != stateFromStores) {
            tmp4 = stateFromStores[num];
          }
        }
        const obj2 = { channelAction: tmp4, completed: null };
        let tmp5 = null != tmp4;
        if (tmp5) {
          let tmp6;
          if (stateFromStores1 != null) {
            tmp6 = stateFromStores1[tmp4.channelId];
          }
          tmp5 = true === tmp6;
        }
        obj2.completed = tmp5;
        return obj2;
      } else {
        return {};
      }
      const obj3 = require("useStateFromStores");
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNextMemberAction(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildOnboardingHomeSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return GuildOnboardingHomeSettingsStore.getNewMemberActions(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildOnboardingMemberActionStore];
        cResult[3] = items1;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function b() {
          return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
        };
        cResult[4] = arg0;
        cResult[5] = fn2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[5];
      }
      const tmpResult = require("useStateFromStores");
      stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp7, tmp9);
      if (cResult[6] === stateFromStores1) {
        if (cResult[7] === arg1) {
          if (cResult[8] === stateFromStores) {
            let tmp11 = cResult[9];
          }
          return tmp11;
        }
      }
      let found;
      if (stateFromStores != null) {
        found = stateFromStores.find((channelId) => {
          let tmp2;
          if (stateFromStores1 != null) {
            tmp2 = tmp[channelId.channelId];
          }
          let tmp3 = true !== tmp2;
          if (tmp3) {
            tmp3 = channelId.channelId !== closure_1;
          }
          return tmp3;
        });
      }
      cResult[6] = stateFromStores1;
      cResult[7] = arg1;
      cResult[8] = stateFromStores;
      cResult[9] = found;
      tmp11 = found;
      const tmpResult2 = require("useStateFromStores");
    }
  : function useNextMemberAction(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const items = [GuildOnboardingHomeSettingsStore];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
        GuildOnboardingHomeSettingsStore.getNewMemberActions(closure_0),
      );
      const obj = require("useStateFromStores");
      const items1 = [GuildOnboardingMemberActionStore];
      dependencyMap = require("useStateFromStores").useStateFromStores(items1, () =>
        GuildOnboardingMemberActionStore.getCompletedActions(closure_0),
      );
      let found;
      if (stateFromStores != null) {
        found = stateFromStores.find((channelId) => {
          let tmp2;
          if (closure_2 != null) {
            tmp2 = tmp[channelId.channelId];
          }
          let tmp3 = true !== tmp2;
          if (tmp3) {
            tmp3 = channelId.channelId !== closure_1;
          }
          return tmp3;
        });
      }
      return found;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/MemberActionUtils.tsx");

export const useMemberActionsForChannel = tmp2;
export const useNextMemberAction = tmp3;
export const useAllActionsCompleted = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAllActionsCompleted(arg0) {
      _require = arg0;
      const cResult = require("c").c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          return GuildMemberStore.getSelfMember(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
      let num4;
      if (stateFromStores != null) {
        num4 = stateFromStores.flags;
      }
      if (num4 == null) {
        num4 = 0;
      }
      if (cResult[3] !== num4) {
        const hasFlagResult = tmp(1403).hasFlag(num4, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
        cResult[3] = num4;
        cResult[4] = hasFlagResult;
        let tmp8 = hasFlagResult;
        const tmpResult2 = tmp(1403);
      } else {
        tmp8 = cResult[4];
      }
      return tmp8;
    }
  : function useAllActionsCompleted(arg0) {
      _require = arg0;
      const items = [GuildMemberStore];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
        GuildMemberStore.getSelfMember(closure_0),
      );
      const obj = require("useStateFromStores");
      let num;
      if (stateFromStores != null) {
        num = stateFromStores.flags;
      }
      if (num == null) {
        num = 0;
      }
      return require("FlagUtils").hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
    };
