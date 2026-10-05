// discord_app/modules/read_states/ReadStateUtils.tsx
import ReadStateConstants from "ReadStateConstants.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const UnreadSetting = ReadStateConstants.UnreadSetting;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let id;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore, UserGuildSettingsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          const hasUnreadResult =
            ReadStateStore.hasUnread(id.id) &&
            UserGuildSettingsStore.resolveUnreadSetting(id) === UnreadSetting.ALL_MESSAGES;
          return hasUnreadResult;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7);
    }
  : (arg0) => {
      let id;
      _require = arg0;
      const items = [ReadStateStore, UserGuildSettingsStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        const hasUnreadResult =
          ReadStateStore.hasUnread(id.id) &&
          UserGuildSettingsStore.resolveUnreadSetting(id) === UnreadSetting.ALL_MESSAGES;
        return hasUnreadResult;
      });
    };
const result = size.fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export const getHasImportantUnread = function getHasImportantUnread(channel) {
  const hasUnreadResult =
    ReadStateStore.hasUnread(channel.id) &&
    UserGuildSettingsStore.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  return hasUnreadResult;
};
export const useHasImportantUnread = tmp2;
