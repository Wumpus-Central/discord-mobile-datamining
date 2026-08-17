// discord_app/modules/message_request/hooks/useSortedMessageRequests.tsx
import closure_2 from "noop" /* 19 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import closure_5 from "processChannel" /* 4799 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSortedMessageRequests.tsx");

export default function useSortedMessageRequests() {
  const items = [closure_3];
  const stateFromStores = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStores(items, () => store.getPrivateChannelsVersion());
  let obj = stateFromStoresArray(stateFromStoresObject[4]);
  const items1 = [closure_3, closure_5];
  const items2 = [stateFromStores];
  stateFromStoresArray = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStoresArray(items1, () => {
    stateFromStoresArray = store.getMutablePrivateChannels();
    const mapped = Array.from(messageRequestChannelIds.getMessageRequestChannelIds()).map((arg0) => table[arg0]);
    const found = mapped.filter((arg0) => null != arg0);
    const arr = Array.from(messageRequestChannelIds.getMessageRequestChannelIds());
    return stateFromStoresArray(stateFromStoresObject[5]).sortChannelIds(found);
  }, items2);
  const obj2 = stateFromStoresArray(stateFromStoresObject[4]);
  const items3 = [closure_4];
  const items4 = [stateFromStoresArray];
  stateFromStoresObject = stateFromStoresArray(stateFromStoresObject[4]).useStateFromStoresObject(items3, () => {
    const obj = {};
    const item = obj.forEach((id) => {
      const user = closure_1_4.getUser(id.recipients[0]);
      if (null != user) {
        obj[id.id] = user;
      }
    });
    return obj;
  }, items4);
  const items5 = [stateFromStoresArray, stateFromStoresObject];
  return React.useMemo(() => stateFromStoresArray.map((channel) => ({ channel, user: table[channel.id] })), items5);
};