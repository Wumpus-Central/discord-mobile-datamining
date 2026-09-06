// === Module 16881: useSortedMessageRequests ===

// Module 16881 (useSortedMessageRequests)
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;
import MessageRequestStore from "MessageRequestStore" /* 7219 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useSortedMessageRequests.tsx");

export default function useSortedMessageRequests() {
  const items = [ChannelStore];
  const stateFromStores = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStores(items, () => ChannelStore.getPrivateChannelsVersion());
  let obj = stateFromStoresArray(stateFromStoresObject[4]);
  const items1 = [ChannelStore, MessageRequestStore];
  const items2 = [stateFromStores];
  stateFromStoresArray = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStoresArray(items1, () => {
    const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
    const mapped = Array.from(messageRequestChannelIds.getMessageRequestChannelIds()).map((item) => closure_0[item]);
    const found = mapped.filter((item) => null != item);
    const arr = Array.from(messageRequestChannelIds.getMessageRequestChannelIds());
    return stateFromStoresArray(stateFromStoresObject[5]).sortChannelIds(found);
  }, items2);
  const obj2 = stateFromStoresArray(stateFromStoresObject[4]);
  const items3 = [UserStore];
  const items4 = [stateFromStoresArray];
  stateFromStoresObject = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStoresObject(items3, () => {
    const obj = {};
    const item = stateFromStoresArray.forEach((id) => {
      user = user.getUser(id.recipients[0]);
      if (null != user) {
        obj[id.id] = user;
      }
    });
    return obj;
  }, items4);
  const items5 = [stateFromStoresArray, stateFromStoresObject];
  return noop.useMemo(() => stateFromStoresArray.map((channel) => ({ channel, user: stateFromStoresObject[channel.id] })), items5);
};