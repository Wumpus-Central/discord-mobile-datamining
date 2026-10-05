// discord_app/modules/user_profile/hooks/useDisplayProfile.tsx
import maybeFetchUserProfileDefault from "../maybeFetchUserProfile.tsx";
import DisplayProfileDefault from "../DisplayProfile.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import FunctionUtils from "../../../utils/FunctionUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      _require = arg0;
      let closure_1 = arg1;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore, UserProfileStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp7;
        if (cResult[2] === arg0) {
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp7);
      }
      const fn = function s() {
        let obj;
        let obj2;
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
    }
  : (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      let closure_1 = arg1;
      const obj = require("get initialized");
      let items = [UserStore, UserProfileStore];
      return obj.useStateFromStores(items, () => {
        let obj;
        let obj2;
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
    };
let closure_6 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, guildId) => {
      let closure_0;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === guildId) {
        let tmp2;
        let tmp3;
        if (cResult[1] === arg0) {
          tmp2 = cResult[2];
          tmp3 = cResult[3];
        }
        const effect = react.useEffect(tmp2, tmp3);
        return closure_6(arg0, guildId);
      }
      const fn = function o() {
        const tmp = maybeFetchUserProfileDefault;
        tmp(closure_0, undefined, { guildId });
      };
      const items = [guildId, arg0];
      cResult[0] = guildId;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items;
      tmp3 = items;
      tmp2 = fn;
    }
  : (arg0, guildId) => {
      let closure_0 = arg0;
      const items = [guildId, arg0];
      const effect = react.useEffect(() => {
        const tmp = maybeFetchUserProfileDefault;
        tmp(closure_0, undefined, { guildId });
      }, items);
      return closure_6(arg0, guildId);
    };
function getDisplayProfile(id1, guildId) {
  let obj;
  let obj2;
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
let closure_7 = FunctionUtils.cachedFunction((arg0, arg1) => {
  const tmp = new DisplayProfileDefault(arg0, arg1);
  return tmp;
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayProfile.tsx");

export default tmp2;
export const useDisplayProfileWithFetchEffect = tmp3;
export { getDisplayProfile };
