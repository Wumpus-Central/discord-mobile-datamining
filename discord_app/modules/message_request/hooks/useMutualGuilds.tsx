// discord_app/modules/message_request/hooks/useMutualGuilds.tsx
import noop from "noop";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export const useMutualGuildsForMessageRequests = function useMutualGuildsForMessageRequests(userId) {
  const _require = userId;
  const items = [mergeGuildAvatar];
  const stateFromStores = _require(stateFromStoresArray[3]).useStateFromStores(items, () => outer1_5.getUser(closure_0));
  let obj = _require(stateFromStoresArray[3]);
  const items1 = [createUserWidgetFromServer];
  stateFromStoresArray = _require(stateFromStoresArray[3]).useStateFromStoresArray(items1, () => {
    const mutualGuilds = outer1_4.getMutualGuilds(closure_0);
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
      tmp = null == outer1_4.getMutualGuilds(closure_0);
    }
    if (tmp) {
      stateFromStores(stateFromStoresArray[4]).wait(() => outer1_1(outer1_2[5])(closure_0, undefined, { withMutualGuilds: true }));
      const obj = stateFromStores(stateFromStoresArray[4]);
    }
  }, items2);
  return stateFromStoresArray;
};