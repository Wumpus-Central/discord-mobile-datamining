// === Module 8105: useDisplayProfile ===

// Module 8105 (useDisplayProfile)
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import areArraysShallowlyEqual from "areArraysShallowlyEqual";

const require = arg1;
let closure_6 = areArraysShallowlyEqual.cachedFunction((arg0, arg1) => new importDefault(8109)(arg0, arg1));
const result = require("createUserWidgetFromServer").fileFinishedImporting("modules/user_profile/hooks/useDisplayProfile.tsx");

export default function useDisplayProfile(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [mergeGuildAvatar, createUserWidgetFromServer];
  return _require(589).useStateFromStores(items, () => {
    let obj;
    let obj2;
    let tmp2 = null;
    if (null != closure_0) {
      const items = [outer1_4, outer1_5];
      [obj, obj2] = items;
      let tmp6 = null;
      if (null !== tmp) {
        const user = obj.getUser(tmp);
        const userProfile = obj2.getUserProfile(tmp);
        let tmp10 = null;
        if (null != user) {
          tmp10 = null;
          if (null != userProfile) {
            tmp10 = outer1_6(userProfile, tmp9);
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
  let closure_1 = arg1;
  let items = [arg1, arg0];
  const effect = React.useEffect(() => {
    callback(outer1_2[4])(closure_0, undefined, { guildId: callback });
  }, items);
  _require = arg0;
  closure_1 = arg1;
  const items1 = [mergeGuildAvatar, createUserWidgetFromServer];
  return _require(589).useStateFromStores(items1, () => {
    let obj;
    let obj2;
    let tmp2 = null;
    if (null != closure_0) {
      const items = [outer1_4, outer1_5];
      [obj, obj2] = items;
      let tmp6 = null;
      if (null !== tmp) {
        const user = obj.getUser(tmp);
        const userProfile = obj2.getUserProfile(tmp);
        let tmp10 = null;
        if (null != user) {
          tmp10 = null;
          if (null != userProfile) {
            tmp10 = outer1_6(userProfile, tmp9);
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
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [mergeGuildAvatar, createUserWidgetFromServer];
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