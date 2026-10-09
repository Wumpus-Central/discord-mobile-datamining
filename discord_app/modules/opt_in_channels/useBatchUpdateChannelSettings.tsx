// discord_app/modules/opt_in_channels/useBatchUpdateChannelSettings.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import OptInChannelsActionCreators from "OptInChannelsActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import CategoryCollapseStore from "../../stores/CategoryCollapseStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const AnalyticsSections = fn(1085).AnalyticsSections;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/useBatchUpdateChannelSettings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useBatchUpdateChannelSettings(guildId) {
      _require = guildId;
      const cResult = require("c").c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserGuildSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function u() {
          return UserGuildSettingsStore.getPendingChannelUpdates(closure_0);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (cResult[3] !== guildId) {
        const fn2 = function h() {
          DispatcherDefault.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
          return () => {
            stateFromStores(584).dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
          };
        };
        let items1 = [guildId];
        cResult[3] = guildId;
        cResult[4] = fn2;
        cResult[5] = items1;
        let tmp9 = items1;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === guildId) {
          let tmp11 = cResult[8];
          let tmp12 = cResult[9];
        }
        const effect1 = noop.useEffect(tmp11, tmp12);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function _(guildId, channelId, id) {
            const isChannelOptedInResult = channelOptedIn.isChannelOptedIn(guildId, channelId);
            let isCollapsedResult = !isChannelOptedInResult;
            if (!isChannelOptedInResult) {
              isCollapsedResult = collapsed.isCollapsed(id);
            }
            if (isCollapsedResult) {
              isCollapsedResult = null != id;
            }
            if (isCollapsedResult) {
              guildId(10673).categoryExpand(id);
              const obj = guildId(10673);
            }
            if (obj2.hasNotSetUpChannelOptIn(guildId)) {
              if (channelId === id) {
                const obj3 = { include: null };
                const _Set2 = Set;
                const items = [channelId];
                const set = new Set(items);
                obj3.include = set;
                const result = guildId(10670).optIntoAllChannelsForExistingMember(guildId, obj3);
                const tmp8Result = guildId(10670);
              } else {
                const obj4 = { exclude: null };
                const _Set = Set;
                const items1 = [channelId];
                const set1 = new Set(items1);
                obj4.exclude = set1;
                const result1 = guildId(10670).optIntoAllChannelsForExistingMember(guildId, obj4);
                const tmp8Result3 = guildId(10670);
              }
            } else {
              const tmp8Result4 = guildId(6799);
              const obj5 = { section: constants.CHANNEL_BROWSER };
              const result2 = tmp8Result4.updateOptInChannelsImmediate(
                guildId,
                channelId,
                !isChannelOptedInResult,
                obj5,
              );
            }
            obj2 = guildId(10670);
          };
          cResult[10] = fn3;
          let tmp14 = fn3;
        } else {
          tmp14 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { onChannelClick: tmp14 };
          cResult[11] = obj2;
          let tmp15 = obj2;
        } else {
          tmp15 = cResult[11];
        }
        return tmp15;
      }
      class C {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[8]);
            tmp4 = closure_0;
            result = obj.updateOptInChannelsBatched(closure_0, tmp);
          }
          return;
        }
      }
      const items2 = [guildId, stateFromStores];
      cResult[6] = stateFromStores;
      cResult[7] = guildId;
      cResult[8] = C;
      cResult[9] = items2;
      tmp12 = items2;
      tmp11 = C;
      const tmpResult = require("initialize");
    }
  : function useBatchUpdateChannelSettings(guildId) {
      _require = guildId;
      let items = [UserGuildSettingsStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        UserGuildSettingsStore.getPendingChannelUpdates(closure_0),
      );
      let items1 = [guildId];
      const effect = noop.useEffect(() => {
        DispatcherDefault.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
        return () => {
          stateFromStores(584).dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
        };
      }, items1);
      const items2 = [guildId, stateFromStores];
      const effect1 = noop.useEffect(() => {
        if (null != stateFromStores) {
          const result = OptInChannelsActionCreators.updateOptInChannelsBatched(closure_0, tmp);
        }
      }, items2);
      let obj = require("initialize");
      return {
        onChannelClick: noop.useCallback((guildId, channelId, id) => {
          const isChannelOptedInResult = channelOptedIn.isChannelOptedIn(guildId, channelId);
          let isCollapsedResult = !isChannelOptedInResult;
          if (!isChannelOptedInResult) {
            isCollapsedResult = collapsed.isCollapsed(id);
          }
          if (isCollapsedResult) {
            isCollapsedResult = null != id;
          }
          if (isCollapsedResult) {
            guildId(10673).categoryExpand(id);
            const obj = guildId(10673);
          }
          if (obj2.hasNotSetUpChannelOptIn(guildId)) {
            if (channelId === id) {
              const obj3 = { include: null };
              const _Set2 = Set;
              const items = [channelId];
              const set = new Set(items);
              obj3.include = set;
              const result = guildId(10670).optIntoAllChannelsForExistingMember(guildId, obj3);
              const tmp8Result = guildId(10670);
            } else {
              const obj4 = { exclude: null };
              const _Set = Set;
              const items1 = [channelId];
              const set1 = new Set(items1);
              obj4.exclude = set1;
              const result1 = guildId(10670).optIntoAllChannelsForExistingMember(guildId, obj4);
              const tmp8Result3 = guildId(10670);
            }
          } else {
            const tmp8Result4 = guildId(6799);
            const obj5 = { section: constants.CHANNEL_BROWSER };
            const result2 = tmp8Result4.updateOptInChannelsImmediate(guildId, channelId, !isChannelOptedInResult, obj5);
          }
          obj2 = guildId(10670);
        }, []),
      };
    };
