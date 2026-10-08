// discord_app/modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx
import UserGuildJoinRequestStore from "../UserGuildJoinRequestStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx");

export const useCurrentUserGuildJoinRequest = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCurrentUserGuildJoinRequest(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserGuildJoinRequestStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          let request = null;
          if (null != closure_0) {
            request = UserGuildJoinRequestStore.getRequest(tmp);
          }
          return request;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6, tmp7);
    }
  : function useCurrentUserGuildJoinRequest(arg0) {
      _require = arg0;
      const items = [UserGuildJoinRequestStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => {
          let request = null;
          if (null != closure_0) {
            request = UserGuildJoinRequestStore.getRequest(tmp);
          }
          return request;
        },
        items1,
      );
    };
