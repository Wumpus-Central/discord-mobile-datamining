// discord_app/modules/message_request/hooks/useMutualGuilds.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "createUserWidgetFromServer" /* 5365 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

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
      mapped = mutualGuilds.map((guild) => guild.guild);
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
      stateFromStores(stateFromStoresArray[4]).wait(() => closure_1_1(closure_1_2[5])(closure_0, undefined, { withMutualGuilds: true }));
      const obj = stateFromStores(stateFromStoresArray[4]);
    }
  }, items2);
  return stateFromStoresArray;
};