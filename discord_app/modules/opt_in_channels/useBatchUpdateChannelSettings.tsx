// discord_app/modules/opt_in_channels/useBatchUpdateChannelSettings.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import OptInChannelsActionCreators from "OptInChannelsActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import CategoryCollapseStore from "../../stores/CategoryCollapseStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, set;

const AnalyticsSections = Constants.AnalyticsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let channelOptedIn;
      let collapsed;
      let first;
      let tmp6;
      let tmp8;
      let tmp9;
      _require = guildId;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserGuildSettingsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function u() {
          return UserGuildSettingsStore.getPendingChannelUpdates(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== guildId) {
        const fn2 = function h() {
          let obj = DispatcherDefault;
          let obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
          obj.dispatch(obj2);
          return () => {
            const obj = stateFromStores(dependencyMap[4]);
            const obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
            obj.dispatch(obj2);
          };
        };
        let items1 = [guildId];
        cResult[3] = guildId;
        cResult[4] = fn2;
        cResult[5] = items1;
        tmp9 = items1;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      const effect = react.useEffect(tmp8, tmp9);
      if (cResult[6] === stateFromStores) {
        let tmp11;
        let tmp12;
        let tmp14;
        let tmp15;
        if (cResult[7] === guildId) {
          tmp11 = cResult[8];
          tmp12 = cResult[9];
        }
        const effect1 = react.useEffect(tmp11, tmp12);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function _(guildId, channelId, id) {
            let set1;
            const isChannelOptedInResult = channelOptedIn.isChannelOptedIn(guildId, channelId);
            const isCollapsedResult = !isChannelOptedInResult && collapsed.isCollapsed(id) && null != id;
            if (isCollapsedResult) {
              const obj = guildId(dependencyMap[9]);
              obj.categoryExpand(id);
            }
            const obj2 = guildId(dependencyMap[10]);
            if (obj2.hasNotSetUpChannelOptIn(guildId)) {
              if (channelId === id) {
                const _Set2 = Set;
                const items = [channelId];
                const self3 = this;
                const self4 = this;
                const obj3 = { include: set };
                const optIntoAllChannelsForExistingMember2 = guildId(
                  dependencyMap[10],
                ).optIntoAllChannelsForExistingMember;
                guildId(dependencyMap[10]);
                set = new Set(items);
                const result = optIntoAllChannelsForExistingMember2(guildId, obj3);
              } else {
                const _Set = Set;
                const items1 = [channelId];
                const self = this;
                const self2 = this;
                const obj4 = { exclude: set1 };
                const optIntoAllChannelsForExistingMember = guildId(
                  dependencyMap[10],
                ).optIntoAllChannelsForExistingMember;
                guildId(dependencyMap[10]);
                set1 = new Set(items1);
                const result1 = optIntoAllChannelsForExistingMember(guildId, obj4);
              }
            } else {
              const obj5 = { section: constants.CHANNEL_BROWSER };
              const tmp8Result4 = guildId(dependencyMap[8]);
              const result2 = tmp8Result4.updateOptInChannelsImmediate(
                guildId,
                channelId,
                !isChannelOptedInResult,
                obj5,
              );
            }
          };
          cResult[10] = fn3;
          tmp14 = fn3;
        } else {
          tmp14 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { onChannelClick: tmp14 };
          cResult[11] = obj2;
          tmp15 = obj2;
        } else {
          tmp15 = cResult[11];
        }
        return tmp15;
      }
      class C {
        constructor() {
          if (null != stateFromStores) {
            const obj = OptInChannelsActionCreators;
            const result = obj.updateOptInChannelsBatched(guildId, tmp);
          }
        }
      }
      const items2 = [guildId, stateFromStores];
      cResult[6] = stateFromStores;
      cResult[7] = guildId;
      cResult[8] = C;
      cResult[9] = items2;
      tmp12 = items2;
      tmp11 = C;
    }
  : (guildId) => {
      let channelOptedIn;
      let collapsed;
      _require = guildId;
      let obj = require("get initialized");
      let items = [UserGuildSettingsStore];
      const stateFromStores = obj.useStateFromStores(items, () =>
        UserGuildSettingsStore.getPendingChannelUpdates(guildId),
      );
      let items1 = [guildId];
      const effect = react.useEffect(() => {
        let obj = DispatcherDefault;
        let obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
        obj.dispatch(obj2);
        return () => {
          const obj = stateFromStores(dependencyMap[4]);
          const obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
          obj.dispatch(obj2);
        };
      }, items1);
      const items2 = [guildId, stateFromStores];
      const effect1 = react.useEffect(() => {
        if (null != stateFromStores) {
          const obj = OptInChannelsActionCreators;
          const result = obj.updateOptInChannelsBatched(guildId, tmp);
        }
      }, items2);
      let obj2 = {
        onChannelClick: react.useCallback(function (guildId, channelId, id) {
          let set1;
          const isChannelOptedInResult = channelOptedIn.isChannelOptedIn(guildId, channelId);
          const isCollapsedResult = !isChannelOptedInResult && collapsed.isCollapsed(id) && null != id;
          if (isCollapsedResult) {
            const obj = guildId(dependencyMap[9]);
            obj.categoryExpand(id);
          }
          const obj2 = guildId(dependencyMap[10]);
          if (obj2.hasNotSetUpChannelOptIn(guildId)) {
            if (channelId === id) {
              const _Set2 = Set;
              const items = [channelId];
              const self3 = this;
              const self4 = this;
              const obj3 = { include: set };
              const optIntoAllChannelsForExistingMember2 = guildId(
                dependencyMap[10],
              ).optIntoAllChannelsForExistingMember;
              guildId(dependencyMap[10]);
              set = new Set(items);
              const result = optIntoAllChannelsForExistingMember2(guildId, obj3);
            } else {
              const _Set = Set;
              const items1 = [channelId];
              const self = this;
              const self2 = this;
              const obj4 = { exclude: set1 };
              const optIntoAllChannelsForExistingMember = guildId(
                dependencyMap[10],
              ).optIntoAllChannelsForExistingMember;
              guildId(dependencyMap[10]);
              set1 = new Set(items1);
              const result1 = optIntoAllChannelsForExistingMember(guildId, obj4);
            }
          } else {
            const obj5 = { section: constants.CHANNEL_BROWSER };
            const tmp8Result4 = guildId(dependencyMap[8]);
            const result2 = tmp8Result4.updateOptInChannelsImmediate(guildId, channelId, !isChannelOptedInResult, obj5);
          }
        }, []),
      };
      return obj2;
    };
let result = size.fileFinishedImporting("modules/opt_in_channels/useBatchUpdateChannelSettings.tsx");

export default tmp2;
