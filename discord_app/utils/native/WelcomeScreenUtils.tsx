// === Module 12463: WelcomeScreenUtils ===

// Module 12463 (WelcomeScreenUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 12466 */;
import noop from "module_19" /* 19 */;
import WelcomeScreenStore from "WelcomeScreenStore" /* 12464 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import GuildStore from "GuildStore" /* 2074 */;

const require = globalThis.__r;

require = fn;
const NO_WELCOME_SCREEN = fn(12464).NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "a" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(9);
  let obj = require("c");
  const tmp = _require;
  const tmp2 = welcomeModalChannelId;
  welcomeModalChannelId = require("module_4716").useLocation().welcomeModalChannelId;
  const tmp4 = require("useWelcomeScreenEnabled")(arg1, arg0);
  noop = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, shouldFetchGuildId, GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      if (cResult[3] === welcomeModalChannelId) {
        if (cResult[4] === tmp4) {
          let tmp9 = cResult[5];
        }
        const stateFromStoresObject = tmp(tmp2[8]).useStateFromStoresObject(first, tmp9);
        shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
        if (cResult[6] !== shouldFetchGuildId) {
          class F {
            constructor() {
              if (null != shouldFetchGuildId) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[9]);
                welcomeScreen = obj.fetchWelcomeScreen(tmp);
              }
              return;
            }
          }
          const items1 = [shouldFetchGuildId];
          cResult[6] = shouldFetchGuildId;
          cResult[7] = F;
          cResult[8] = items1;
          let tmp12 = items1;
        } else {
          class F {
            constructor() {
              if (null != shouldFetchGuildId) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[9]);
                welcomeScreen = obj.fetchWelcomeScreen(tmp);
              }
              return;
            }
          }
          tmp12 = cResult[8];
        }
        const effect = noop.useEffect(F, tmp12);
        return stateFromStoresObject.welcomeScreenModalVisible;
      }
    }
  }
  const fn = function f() {
    if (closure_3) {
      if (!WelcomeScreenStore.hasSeen(closure_0)) {
        if (welcomeModalChannelId === closure_1) {
          guild = GuildStore.getGuild(closure_0);
          value = WelcomeScreenStore.get(closure_0);
          let tmp5 = null != value;
          const hasErrorResult = WelcomeScreenStore.hasError();
          if (tmp5) {
            tmp5 = value !== NO_WELCOME_SCREEN;
          }
          if (tmp5) {
            tmp5 = !isFetchingResult;
          }
          if (tmp5) {
            tmp5 = !hasErrorResult;
          }
          if (tmp5) {
            tmp5 = GuildChannelStore.getSelectableChannelIds(closure_0).length > 0;
          }
          const obj2 = { welcomeScreenModalVisible: tmp5, shouldFetchGuildId: null };
          let id;
          if (null == value) {
            if (null != guild) {
              id = guild.id;
            }
          }
          obj2.shouldFetchGuildId = id;
          return obj2;
        }
      }
    }
    return closure_8;
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = welcomeModalChannelId;
  cResult[4] = tmp4;
  cResult[5] = fn;
  tmp9 = fn;
  let obj2 = require("module_4716");
}) : ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  welcomeModalChannelId = require("module_4716").useLocation().welcomeModalChannelId;
  noop = require("useWelcomeScreenEnabled")(arg1, arg0);
  let obj = require("module_4716");
  const items = [GuildStore, shouldFetchGuildId, GuildChannelStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    if (closure_3) {
      if (!WelcomeScreenStore.hasSeen(closure_0)) {
        if (welcomeModalChannelId === closure_1) {
          guild = GuildStore.getGuild(closure_0);
          value = WelcomeScreenStore.get(closure_0);
          let tmp5 = null != value;
          const hasErrorResult = WelcomeScreenStore.hasError();
          if (tmp5) {
            tmp5 = value !== NO_WELCOME_SCREEN;
          }
          if (tmp5) {
            tmp5 = !isFetchingResult;
          }
          if (tmp5) {
            tmp5 = !hasErrorResult;
          }
          if (tmp5) {
            tmp5 = GuildChannelStore.getSelectableChannelIds(closure_0).length > 0;
          }
          const obj2 = { welcomeScreenModalVisible: tmp5, shouldFetchGuildId: null };
          let id;
          if (null == value) {
            if (null != guild) {
              id = guild.id;
            }
          }
          obj2.shouldFetchGuildId = id;
          return obj2;
        }
      }
    }
    return closure_8;
  });
  shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
  const items1 = [shouldFetchGuildId];
  const effect = noop.useEffect(() => {
    if (null != shouldFetchGuildId) {
      const welcomeScreen = WelcomeScreenActionCreators.fetchWelcomeScreen(tmp);
    }
  }, items1);
  return stateFromStoresObject.welcomeScreenModalVisible;
});
export const openWelcomeActionSheet = function openWelcomeActionSheet(onHide) {
  const guildId = onHide.guildId;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(12467, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, { guildId, onHide: onHide.onHide });
};