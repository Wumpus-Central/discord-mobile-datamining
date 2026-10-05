// discord_app/modules/hub/HubUnreadUtils.tsx
import GuildDirectoryUtils from "../directory_channels/GuildDirectoryUtils.tsx";
import GuildDirectoryStore from "../directory_channels/GuildDirectoryStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp7;
      let tmp8;
      let user;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildDirectoryStore, ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          if (null == user) {
            return 0;
          } else {
            const ackMessageIdResult = ReadStateStore.ackMessageId(user.id);
            if (null == ackMessageIdResult) {
              return 0;
            } else {
              const _Object = Object;
              let directoryEntries = GuildDirectoryStore.getDirectoryEntries(user.id);
              if (directoryEntries == null) {
                directoryEntries = {};
              }
              const values2 = values(directoryEntries);
              const _Math = Math;
              const found = values2.filter((createdAt) => {
                const date = new Date(createdAt.createdAt);
                const time = date.getTime();
                const obj2 = closure_2_1(closure_2_2[4]);
                return time > obj2.extractTimestamp(ackMessageIdResult);
              });
              return Math.min(GuildDirectoryUtils.MAX_CATEGORY_SERVERS, found.length);
            }
          }
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
  : (arg0) => {
      let user;
      _require = arg0;
      const items = [GuildDirectoryStore, ReadStateStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          if (null == user) {
            return 0;
          } else {
            const ackMessageIdResult = ReadStateStore.ackMessageId(user.id);
            if (null == ackMessageIdResult) {
              return 0;
            } else {
              const _Object = Object;
              let directoryEntries = GuildDirectoryStore.getDirectoryEntries(user.id);
              if (directoryEntries == null) {
                directoryEntries = {};
              }
              const values2 = values(directoryEntries);
              const _Math = Math;
              const found = values2.filter((createdAt) => {
                const date = new Date(createdAt.createdAt);
                const time = date.getTime();
                const obj2 = closure_2_1(closure_2_2[4]);
                return time > obj2.extractTimestamp(ackMessageIdResult);
              });
              return Math.min(GuildDirectoryUtils.MAX_CATEGORY_SERVERS, found.length);
            }
          }
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/hub/HubUnreadUtils.tsx");

export const useHubUnreadCount = tmp2;
