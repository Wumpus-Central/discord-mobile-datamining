// === Module 15795: useSortedMessageRequests ===

// Module 15795 (useSortedMessageRequests)
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import processChannel from "processChannel";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/message_request/hooks/useSortedMessageRequests.tsx");

export default function useSortedMessageRequests() {
  const items = [ensureGuildLoaded];
  const stateFromStores = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStores(items, () => store.getPrivateChannelsVersion());
  let obj = stateFromStoresArray(stateFromStoresObject[4]);
  const items1 = [ensureGuildLoaded, processChannel];
  const items2 = [stateFromStores];
  stateFromStoresArray = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStoresArray(items1, () => {
    const stateFromStoresArray = store.getMutablePrivateChannels();
    const mapped = Array.from(messageRequestChannelIds.getMessageRequestChannelIds()).map((arg0) => table[arg0]);
    const found = mapped.filter((arg0) => null != arg0);
    const arr = Array.from(messageRequestChannelIds.getMessageRequestChannelIds());
    return stateFromStoresArray(stateFromStoresObject[5]).sortChannelIds(found);
  }, items2);
  const obj2 = stateFromStoresArray(stateFromStoresObject[4]);
  const items3 = [mergeGuildAvatar];
  const items4 = [stateFromStoresArray];
  stateFromStoresObject = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStoresObject(items3, () => {
    const obj = {};
    const item = obj.forEach((id) => {
      const user = outer1_4.getUser(id.recipients[0]);
      if (null != user) {
        obj[id.id] = user;
      }
    });
    return obj;
  }, items4);
  const items5 = [stateFromStoresArray, stateFromStoresObject];
  return React.useMemo(() => stateFromStoresArray.map((channel) => ({ channel, user: table[channel.id] })), items5);
};