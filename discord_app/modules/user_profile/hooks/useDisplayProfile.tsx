// discord_app/modules/user_profile/hooks/useDisplayProfile.tsx
import premiumSinceDefault from "premiumSince" /* 8420 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import closure_5 from "createUserWidgetFromServer" /* 5365 */;
import areArraysShallowlyEqual from "areArraysShallowlyEqual" /* 1989 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
let closure_6 = areArraysShallowlyEqual.cachedFunction((arg0, arg1) => new premiumSinceDefault(arg0, arg1));
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useDisplayProfile.tsx");

export default function useDisplayProfile(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const items = [closure_4, closure_5];
  return _initialize.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const items = [closure_1_4, closure_1_5];
      [obj, obj2] = items;
      let tmp6 = null;
      if (null !== tmp) {
        const user = obj.getUser(tmp);
        const userProfile = obj2.getUserProfile(tmp);
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
  let _require = arg0;
  closure_1 = arg1;
  let items = [arg1, arg0];
  const effect = React.useEffect(() => {
    callback(closure_1_2[4])(closure_0, undefined, { guildId: callback });
  }, items);
  _require = arg0;
  closure_1 = arg1;
  const items1 = [closure_4, closure_5];
  return _initialize.useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const items = [closure_1_4, closure_1_5];
      [obj, obj2] = items;
      let tmp6 = null;
      if (null !== tmp) {
        const user = obj.getUser(tmp);
        const userProfile = obj2.getUserProfile(tmp);
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
export const getDisplayProfile = function getDisplayProfile(id, arg1) {
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