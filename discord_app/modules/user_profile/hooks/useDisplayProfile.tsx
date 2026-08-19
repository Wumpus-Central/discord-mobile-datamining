// discord_app/modules/user_profile/hooks/useDisplayProfile.tsx
import premiumSinceDefault from "../DisplayProfile.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import createUserWidgetFromServer from "../UserProfileStore.tsx";
import areArraysShallowlyEqual from "../../../utils/FunctionUtils.tsx";

const require = fn;
let closure_6 = areArraysShallowlyEqual.cachedFunction((arg0, arg1) => new premiumSinceDefault(arg0, arg1));
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/useDisplayProfile.tsx");

export default function useDisplayProfile(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const items = [closure_4, closure_5];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const items = [closure_1_4, closure_1_5];
      [obj, obj2] = items;
      let tmp6 = null;
      if (null !== closure_0) {
        const user = obj.getUser(closure_0);
        const userProfile = obj2.getUserProfile(closure_0);
        let tmp10 = null;
        if (null != user) {
          tmp10 = null;
          if (null != userProfile) {
            tmp10 = closure_1_6(userProfile, tmp9);
          }
        }
        tmp6 = tmp10;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  });
};
export const useDisplayProfileWithFetchEffect = function useDisplayProfileWithFetchEffect(arg0, arg1) {
  let items = [arg1, arg0];
  const effect = React.useEffect(() => {
    callback(dependencyMap[4])(closure_0, undefined, { guildId: callback });
    const tmp = callback(dependencyMap[4]);
  }, items);
  const _require = arg0;
  closure_1 = arg1;
  const items1 = [closure_4, closure_5];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const items = [closure_1_4, closure_1_5];
      [obj, obj2] = items;
      let tmp6 = null;
      if (null !== closure_0) {
        const user = obj.getUser(closure_0);
        const userProfile = obj2.getUserProfile(closure_0);
        let tmp10 = null;
        if (null != user) {
          tmp10 = null;
          if (null != userProfile) {
            tmp10 = closure_1_6(userProfile, tmp9);
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
    const items = [closure_4, closure_5];
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
        tmp8 = callback(userProfile, tmp7);
      }
    }
    return tmp8;
  }
};