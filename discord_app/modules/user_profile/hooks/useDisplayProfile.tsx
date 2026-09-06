// === Module 8186: useDisplayProfile ===

// Module 8186 (useDisplayProfile)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8187 */;
import DisplayProfileDefault from "DisplayProfile" /* 8189 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;

const require = fn;
const FunctionUtils = fn(1933);
let closure_6 = FunctionUtils.cachedFunction((arg0, arg1) => new DisplayProfileDefault(arg0, arg1));
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayProfile.tsx");

export default function useDisplayProfile(id, arg1) {
  _require = id;
  closure_1 = arg1;
  const items = [UserStore, UserProfileStore];
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
            tmp10 = closure_6(userProfile, tmp9);
          }
        }
        tmp6 = tmp10;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  });
};
export const useDisplayProfileWithFetchEffect = function useDisplayProfileWithFetchEffect(arg0, guildId) {
  _require = arg0;
  let items = [guildId, arg0];
  const effect = noop.useEffect(() => {
    maybeFetchUserProfileDefault(closure_0, undefined, { guildId });
  }, items);
  closure_129_0 = arg0;
  closure_129_1 = guildId;
  const items1 = [UserStore, UserProfileStore];
  return require("initialize").useStateFromStores(items1, () => {
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
            tmp10 = closure_6(userProfile, tmp9);
          }
        }
        tmp6 = tmp10;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  });
};
export const getDisplayProfile = function getDisplayProfile(id, guildId) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [UserStore, UserProfileStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null === id) {
    return null;
  } else {
    const user = obj.getUser(id);
    const userProfile = obj2.getUserProfile(id);
    let tmp8 = null;
    if (null != user) {
      tmp8 = null;
      if (null != userProfile) {
        tmp8 = closure_6(userProfile, tmp7);
      }
    }
    return tmp8;
  }
};