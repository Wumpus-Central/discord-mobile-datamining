// === Module 12448: WelcomeScreenUtils ===

// Module 12448 (WelcomeScreenUtils)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import WelcomeScreenStore2 from "WelcomeScreenStore" /* 12449 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 12451 */;
import react_mod from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const WelcomeScreenStore = WelcomeScreenStore2;
let _require, importDefault;

let react = react_mod;
const NO_WELCOME_SCREEN = WelcomeScreenStore2.NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "a" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let closure_3;
  let first;
  let shouldFetchGuildId;
  let welcomeModalChannelId;
  _require = arg0;
  importDefault = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(9);
  let obj2 = require("MemoryRouter");
  const tmp2 = welcomeModalChannelId;
  welcomeModalChannelId = obj2.useLocation().welcomeModalChannelId;
  const tmp4 = require("useWelcomeScreenEnabled")(arg1, arg0);
  react = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, shouldFetchGuildId, GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      if (cResult[3] === welcomeModalChannelId) {
        let tmp9;
        let tmp12;
        if (cResult[4] === tmp4) {
          tmp9 = cResult[5];
        }
        const tmpResult = tmp(tmp2[8]);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp9);
        shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
        const welcomeScreenModalVisible = stateFromStoresObject.welcomeScreenModalVisible;
        if (cResult[6] !== shouldFetchGuildId) {
          class F {
            constructor() {
              if (null != shouldFetchGuildId) {
                const obj = WelcomeScreenActionCreators;
                const welcomeScreen = obj.fetchWelcomeScreen(tmp);
              }
            }
          }
          const items1 = [shouldFetchGuildId];
          cResult[6] = shouldFetchGuildId;
          cResult[7] = F;
          cResult[8] = items1;
          tmp12 = items1;
        } else {
          class F {
            constructor() {
              if (null != shouldFetchGuildId) {
                const obj = WelcomeScreenActionCreators;
                const welcomeScreen = obj.fetchWelcomeScreen(tmp);
              }
            }
          }
          tmp12 = cResult[8];
        }
        const effect = react.useEffect(F, tmp12);
        return welcomeScreenModalVisible;
      }
    }
  }
  const fn = function f() {
    let id;
    if (closure_3) {
      if (!WelcomeScreenStore.hasSeen(closure_0)) {
        if (welcomeModalChannelId === closure_1) {
          const guild = GuildStore.getGuild(closure_0);
          const value = WelcomeScreenStore.get(closure_0);
          let tmp6 = null != value;
          const hasErrorResult = WelcomeScreenStore.hasError();
          const isFetchingResult = WelcomeScreenStore.isFetching();
          if (tmp6) {
            tmp6 = value !== NO_WELCOME_SCREEN;
          }
          if (tmp6) {
            tmp6 = !isFetchingResult;
          }
          if (tmp6) {
            tmp6 = !hasErrorResult;
          }
          if (tmp6) {
            tmp6 = GuildChannelStore.getSelectableChannelIds(closure_0).length > 0;
          }
          const obj2 = { welcomeScreenModalVisible: tmp6, shouldFetchGuildId: id };
          id = undefined;
          if (null == value) {
            if (null != guild) {
              id = guild.id;
            }
          }
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
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let closure_3;
  let shouldFetchGuildId;
  let welcomeModalChannelId;
  _require = arg0;
  importDefault = arg1;
  let obj = require("MemoryRouter");
  welcomeModalChannelId = obj.useLocation().welcomeModalChannelId;
  react = require("useWelcomeScreenEnabled")(arg1, arg0);
  let obj2 = require("get initialized");
  const items = [GuildStore, shouldFetchGuildId, GuildChannelStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let id;
    if (closure_3) {
      if (!WelcomeScreenStore.hasSeen(closure_0)) {
        if (welcomeModalChannelId === closure_1) {
          const guild = GuildStore.getGuild(closure_0);
          const value = WelcomeScreenStore.get(closure_0);
          let tmp6 = null != value;
          const hasErrorResult = WelcomeScreenStore.hasError();
          const isFetchingResult = WelcomeScreenStore.isFetching();
          if (tmp6) {
            tmp6 = value !== NO_WELCOME_SCREEN;
          }
          if (tmp6) {
            tmp6 = !isFetchingResult;
          }
          if (tmp6) {
            tmp6 = !hasErrorResult;
          }
          if (tmp6) {
            tmp6 = GuildChannelStore.getSelectableChannelIds(closure_0).length > 0;
          }
          const obj2 = { welcomeScreenModalVisible: tmp6, shouldFetchGuildId: id };
          id = undefined;
          if (null == value) {
            if (null != guild) {
              id = guild.id;
            }
          }
          return obj2;
        }
      }
    }
    return closure_8;
  });
  shouldFetchGuildId = stateFromStoresObject.shouldFetchGuildId;
  const items1 = [shouldFetchGuildId];
  const welcomeScreenModalVisible = stateFromStoresObject.welcomeScreenModalVisible;
  const effect = react.useEffect(() => {
    if (null != shouldFetchGuildId) {
      const obj = WelcomeScreenActionCreators;
      const welcomeScreen = obj.fetchWelcomeScreen(tmp);
    }
  }, items1);
  return welcomeScreenModalVisible;
});
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = tmp2;
export const openWelcomeActionSheet = function openWelcomeActionSheet(guildId) {
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(12452, dependencyMap.paths);
  openLazy(tmp2, "GuildWelcomeActionSheet" + guildId, { guildId, onHide });
};