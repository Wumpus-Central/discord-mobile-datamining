// discord_app/modules/message_request/hooks/useMutualGuilds.tsx
import noop from "../../../../_runtime/00019_noop.js";
import createUserWidgetFromServer from "../../user_profile/UserProfileStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export const useMutualGuildsForMessageRequests = function useMutualGuildsForMessageRequests(userId) {
  const _require = userId;
  const items = [closure_5];
  const stateFromStores = _require(stateFromStoresArray[3]).useStateFromStores(items, () => closure_1_5.getUser(closure_0));
  let obj = _require(stateFromStoresArray[3]);
  const items1 = [closure_4];
  stateFromStoresArray = _require(stateFromStoresArray[3]).useStateFromStoresArray(items1, () => {
    const mutualGuilds = closure_1_4.getMutualGuilds(closure_0);
    let mapped;
    if (mutualGuilds != null) {
      mapped = mutualGuilds.map((item, index) => item.guild);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  });
  const items2 = [stateFromStoresArray, stateFromStores, userId];
  const effect = React.useEffect(() => {
    let tmp = 0 === stateFromStoresArray.length;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null == closure_1_4.getMutualGuilds(closure_0);
    }
    if (tmp) {
      stateFromStores(stateFromStoresArray[4]).wait(() => stateFromStores(stateFromStoresArray[5])(closure_0, undefined, { withMutualGuilds: true }));
      const obj = stateFromStores(stateFromStoresArray[4]);
    }
  }, items2);
  return stateFromStoresArray;
};