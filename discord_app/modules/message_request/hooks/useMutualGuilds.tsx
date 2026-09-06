// discord_app/modules/message_request/hooks/useMutualGuilds.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export const useMutualGuildsForMessageRequests = function useMutualGuildsForMessageRequests(userId) {
  _require = userId;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_0));
  let obj = require("initialize");
  const items1 = [UserProfileStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const mutualGuilds = UserProfileStore.getMutualGuilds(closure_0);
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
  const effect = noop.useEffect(() => {
    let tmp = 0 === stateFromStoresArray.length;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null == UserProfileStore.getMutualGuilds(closure_0);
    }
    if (tmp) {
      DispatcherDefault.wait(() =>
        stateFromStores(stateFromStoresArray[5])(userId, undefined, { withMutualGuilds: true }),
      );
    }
  }, items2);
  return stateFromStoresArray;
};
