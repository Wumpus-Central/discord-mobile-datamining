// === Module 8294: useDisplayProfile ===

// Module 8294 (useDisplayProfile)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8295 */;
import DisplayProfileDefault from "DisplayProfile" /* 8297 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import UserProfileStore from "UserProfileStore" /* 7314 */;

const require = globalThis.__r;

const require = fn;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayProfile(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore, UserProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp7 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp7);
  }
  const fn = function s() {
    let tmp2 = null;
    if (null != closure_0) {
      const items = [UserStore, UserProfileStore];
      [obj, obj2] = items;
      let tmp6 = null;
      if (null !== closure_0) {
        const user = obj.getUser(closure_0);
        const userProfile = obj2.getUserProfile(closure_0);
        let tmp10 = null;
        if (null != user) {
          tmp10 = null;
          if (null != userProfile) {
            tmp10 = closure_7(userProfile, tmp9);
          }
        }
        tmp6 = tmp10;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp7 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useDisplayProfile(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [UserStore, UserProfileStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const items = [UserStore, UserProfileStore];
      [obj, obj2] = items;
      let tmp6 = null;
      if (null !== closure_0) {
        const user = obj.getUser(closure_0);
        const userProfile = obj2.getUserProfile(closure_0);
        let tmp10 = null;
        if (null != user) {
          tmp10 = null;
          if (null != userProfile) {
            tmp10 = closure_7(userProfile, tmp9);
          }
        }
        tmp6 = tmp10;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  });
});
let closure_6 = tmp2;
ReactCompilerGating = fn(558);
function getDisplayProfile(id1, guildId) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [UserStore, UserProfileStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null === id1) {
    return null;
  } else {
    const user = obj.getUser(id1);
    const userProfile = obj2.getUserProfile(id1);
    let tmp8 = null;
    if (null != user) {
      tmp8 = null;
      if (null != userProfile) {
        tmp8 = closure_7(userProfile, tmp7);
      }
    }
    return tmp8;
  }
}
const FunctionUtils = fn(2039);
let closure_7 = FunctionUtils.cachedFunction((arg0, arg1) => new DisplayProfileDefault(arg0, arg1));
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayProfile.tsx");

export default tmp2;
export const useDisplayProfileWithFetchEffect = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayProfileWithFetchEffect(arg0, guildId) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === guildId) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const effect = noop.useEffect(tmp2, tmp3);
    return closure_6(arg0, guildId);
  }
  const fn = function n() {
    maybeFetchUserProfileDefault(closure_0, undefined, { guildId });
  };
  const items = [guildId, arg0];
  cResult[0] = guildId;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
  const obj = require("c");
}) : (function useDisplayProfileWithFetchEffect(arg0, guildId) {
  closure_0 = arg0;
  const items = [guildId, arg0];
  const effect = noop.useEffect(() => {
    maybeFetchUserProfileDefault(closure_0, undefined, { guildId });
  }, items);
  return closure_6(arg0, guildId);
});
export { getDisplayProfile };