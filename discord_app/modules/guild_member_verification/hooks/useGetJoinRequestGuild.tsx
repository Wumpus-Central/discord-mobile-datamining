// === Module 9104: useGetJoinRequestGuild ===

// Module 9104 (useGetJoinRequestGuild)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6121 */;
import noop from "module_19" /* 19 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4900 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGetGuildJoinRequest(arg0) {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildJoinRequestStore];
    cResult[0] = items;
    let first = items;
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
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildJoinRequestStore];
    const fn2 = function f() {
      return UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds;
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
  if (cResult[5] !== stateFromStores1) {
    class G {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[5]);
          requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
        }
        return;
      }
    }
    const items2 = [stateFromStores1];
    cResult[5] = stateFromStores1;
    cResult[6] = G;
    cResult[7] = items2;
    let tmp13 = items2;
  } else {
    class G {
      constructor() {
        if (!closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[5]);
          requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
        }
        return;
      }
    }
    tmp13 = cResult[7];
  }
  const effect = noop.useEffect(G, tmp13);
  return stateFromStores;
}) : (function useGetGuildJoinRequest(arg0) {
  _require = arg0;
  const items = [UserGuildJoinRequestStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = UserGuildJoinRequestStore.getRequest(tmp);
    }
    return request;
  });
  let obj = require("initialize");
  const items1 = [UserGuildJoinRequestStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => UserGuildJoinRequestStore.hasFetchedRequestToJoinGuilds);
  const items2 = [stateFromStores1];
  const effect = noop.useEffect(() => {
    if (!stateFromStores1) {
      const requestToJoinGuilds = GuildJoinRequestActionCreatorsDefault.fetchRequestToJoinGuilds();
    }
  }, items2);
  return stateFromStores;
});