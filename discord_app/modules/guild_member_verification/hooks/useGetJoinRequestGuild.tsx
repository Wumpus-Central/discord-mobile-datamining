// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx
import GuildJoinRequestActionCreatorsDefault from "../GuildJoinRequestActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserGuildJoinRequestStore from "../UserGuildJoinRequestStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp13;
      let tmp6;
      let tmp8;
      let tmp9;
      _require = arg0;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserGuildJoinRequestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          let request = null;
          if (null != closure_0) {
            request = UserGuildJoinRequestStore.getRequest(tmp);
          }
          return request;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserGuildJoinRequestStore];
        const fn2 = function f() {
          return UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds;
        };
        cResult[3] = items1;
        cResult[4] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const tmpResult2 = tmp(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
      if (cResult[5] !== stateFromStores1) {
        class S {
          constructor() {
            if (!stateFromStores1) {
              const obj = GuildJoinRequestActionCreatorsDefault;
              const requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
            }
          }
        }
        const items2 = [stateFromStores1];
        cResult[5] = stateFromStores1;
        cResult[6] = S;
        cResult[7] = items2;
        tmp13 = items2;
      } else {
        class S {
          constructor() {
            if (!stateFromStores1) {
              const obj = GuildJoinRequestActionCreatorsDefault;
              const requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
            }
          }
        }
        tmp13 = cResult[7];
      }
      const effect = react.useEffect(S, tmp13);
      return stateFromStores;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [UserGuildJoinRequestStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let request = null;
        if (null != closure_0) {
          request = UserGuildJoinRequestStore.getRequest(tmp);
        }
        return request;
      });
      const items1 = [UserGuildJoinRequestStore];
      const obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(
        items1,
        () => UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds,
      );
      const items2 = [stateFromStores1];
      const effect = react.useEffect(() => {
        if (!stateFromStores1) {
          const obj = GuildJoinRequestActionCreatorsDefault;
          const requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
        }
      }, items2);
      return stateFromStores;
    };
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default tmp2;
