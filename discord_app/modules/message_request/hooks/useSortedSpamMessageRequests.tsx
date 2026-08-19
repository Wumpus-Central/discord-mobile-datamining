// discord_app/modules/message_request/hooks/useSortedSpamMessageRequests.tsx
import noop from "../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import processChannel from "../SpamMessageRequestStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/message_request/hooks/useSortedSpamMessageRequests.tsx");

export default function useSortedSpamMessageRequests() {
  const items = [closure_3];
  const stateFromStores = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStores(items, () => store.getPrivateChannelsVersion());
  let obj = stateFromStoresArray(stateFromStoresObject[4]);
  const items1 = [closure_3, closure_5];
  const items2 = [stateFromStores];
  stateFromStoresArray = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStoresArray(items1, () => {
    stateFromStoresArray = store.getMutablePrivateChannels();
    const mapped = Array.from(spamChannelIds.getSpamChannelIds()).map((item, index) => table[item]);
    const found = mapped.filter((item, index) => null != item);
    const arr = Array.from(spamChannelIds.getSpamChannelIds());
    return stateFromStoresArray(stateFromStoresObject[5]).sortChannelIds(found);
  }, items2);
  const obj2 = stateFromStoresArray(stateFromStoresObject[4]);
  const items3 = [closure_4];
  const items4 = [stateFromStoresArray];
  stateFromStoresObject = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStoresObject(items3, () => {
    const obj = {};
    const item = obj.forEach((item, index) => {
      const user = closure_1_4.getUser(item.recipients[0]);
      if (null != user) {
        obj[item.id] = user;
      }
    });
    return obj;
  }, items4);
  const items5 = [stateFromStoresArray, stateFromStoresObject];
  return React.useMemo(() => stateFromStoresArray.map((item, index) => ({ channel: item, user: table[item.id] })), items5);
};