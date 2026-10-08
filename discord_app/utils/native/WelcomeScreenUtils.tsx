// discord_app/utils/native/WelcomeScreenUtils.tsx
import asyncRequireImpl from "../../../_runtime/01999_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import WelcomeScreenActionCreators from "../../modules/welcome_screen/WelcomeScreenActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import WelcomeScreenStore from "../../modules/welcome_screen/WelcomeScreenStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const NO_WELCOME_SCREEN = fn(12560).NO_WELCOME_SCREEN;
let closure_8 = { welcomeScreenModalVisible: false, shouldFetchGuildId: "a" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/WelcomeScreenUtils.tsx");

export const useShowWelcomeModal = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShowWelcomeModal(arg0, arg1) {
      _require = arg0;
      importDefault = arg1;
      const cResult = require("c").c(9);
      let obj = require("c");
      const tmp = _require;
      const tmp2 = welcomeModalChannelId;
      welcomeModalChannelId = require("../../../_runtime/metro/04910__.js").useLocation().welcomeModalChannelId;
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
              const fn2 = function v() {
                if (null != shouldFetchGuildId) {
                  const welcomeScreen = WelcomeScreenActionCreators.fetchWelcomeScreen(tmp);
                }
              };
              const items1 = [shouldFetchGuildId];
              cResult[6] = shouldFetchGuildId;
              cResult[7] = fn2;
              cResult[8] = items1;
              let tmp12 = items1;
              let tmp11 = fn2;
            } else {
              tmp11 = cResult[7];
              tmp12 = cResult[8];
            }
            const effect = noop.useEffect(tmp11, tmp12);
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
      let obj2 = require("../../../_runtime/metro/04910__.js");
    }
  : function useShowWelcomeModal(arg0, arg1) {
      _require = arg0;
      importDefault = arg1;
      welcomeModalChannelId = require("../../../_runtime/metro/04910__.js").useLocation().welcomeModalChannelId;
      noop = require("useWelcomeScreenEnabled")(arg1, arg0);
      let obj = require("../../../_runtime/metro/04910__.js");
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
    };
export const openWelcomeActionSheet = function openWelcomeActionSheet(onHide) {
  const guildId = onHide.guildId;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(12563, dependencyMap.paths), "GuildWelcomeActionSheet" + guildId, {
    guildId,
    onHide: onHide.onHide,
  });
};
