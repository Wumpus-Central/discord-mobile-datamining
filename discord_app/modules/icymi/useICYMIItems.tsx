// === Module 16486: useICYMIItems ===

// Module 16486 (useICYMIItems)
import ICYMITypes from "ICYMITypes" /* 8348 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;

require = fn;
function createItem(id, type, unread) {
  type = type.type;
  if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
    if (type.message.id === type.message.channel_id) {
      if (null != type.threadChannel) {
        let obj = { id: id.id, timestamp: null, channelType: null, data: null, score: null, debugScore: null, unread: null };
        const _Date5 = Date;
        obj.timestamp = Date.now();
        obj.channelType = id.data.channel_type;
        obj = { kind: "forumThread", message: null, threadChannel: null };
        ({ message: obj9.message, threadChannel: obj9.threadChannel } = type);
        obj.data = obj;
        obj.score = id.score;
        const _JSON5 = JSON;
        obj.debugScore = JSON.stringify(id.score_components);
        obj.unread = unread;
        let obj1 = obj;
      }
      return obj1;
    }
    obj1 = { id: id.id, timestamp: null, channelType: null, data: null, score: null, debugScore: null, unread: null };
    const _Date4 = Date;
    obj1.timestamp = Date.now();
    obj1.channelType = id.data.channel_type;
    const obj2 = { kind: "message", message: type.message, mentioned: id.data.has_mention, messageContext: id.data.message_context };
    obj1.data = obj2;
    obj1.score = id.score;
    const _JSON4 = JSON;
    obj1.debugScore = JSON.stringify(id.score_components);
    obj1.unread = unread;
  } else {
    if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
      if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
        if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT === type) {
          const obj3 = { id: id.id, timestamp: null, data: null, score: null, debugScore: null, unread: null };
          const _Date2 = Date;
          obj3.timestamp = Date.now();
          const obj4 = { kind: "guildEvent", eventId: type.event_id };
          obj3.data = obj4;
          obj3.score = id.score;
          const _JSON2 = JSON;
          obj3.debugScore = JSON.stringify(id.score_components);
          obj3.unread = unread;
          return obj3;
        } else if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
          obj = { id: id.id, timestamp: null, data: null, score: null, debugScore: null, unread: null };
          const _Date = Date;
          obj.timestamp = Date.now();
          obj.data = { kind: "recommendedGuilds" };
          obj.score = id.score;
          const _JSON = JSON;
          obj.debugScore = JSON.stringify(id.score_components);
          obj.unread = unread;
          return obj;
        } else {
          return null;
        }
      }
    }
    const obj5 = { id: id.id, timestamp: null, data: null, score: null, debugScore: null, unread: null };
    const _Date3 = Date;
    obj5.timestamp = Date.now();
    const obj6 = { kind: "contentInventory", content: type.activity };
    obj5.data = obj6;
    obj5.score = id.score;
    const _JSON3 = JSON;
    obj5.debugScore = JSON.stringify(id.score_components);
    obj5.unread = unread;
    return obj5;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/useICYMIItems.tsx");

export default function useICYMIItems() {
  let obj = stateFromStores1(504);
  const items = [ICYMIStore];
  const stateFromStores = obj.useStateFromStores(items, () => ICYMIStore.getUnreadDisplayItems());
  const items1 = [ICYMIStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => ICYMIStore.getReadDisplayItems());
  const obj2 = stateFromStores1(504);
  const items2 = [ICYMIStore];
  const stateFromStores2 = stateFromStores1(504).useStateFromStores(items2, () => ICYMIStore.getNextIndexToHydrate());
  const obj3 = stateFromStores1(504);
  const items3 = [ICYMIStore];
  const stateFromStoresObject = stateFromStores1(504).useStateFromStoresObject(items3, () => ICYMIStore.getHydratedItems());
  const obj4 = stateFromStores1(504);
  const items4 = [ICYMIStore];
  const stateFromStores3 = stateFromStores1(504).useStateFromStores(items4, () => ICYMIStore.getMissingItems());
  const items5 = [stateFromStores1];
  const effect = noop.useEffect(() => {
    closure_0 = Date.now() + stateFromStores1.length;
    ICYMIActionCreatorsDefault.ackGravityItems(stateFromStores1.map((id) => {
      const obj = { id: id.id, timestamp: null };
      closure_0 = tmp - 1;
      obj.timestamp = +closure_0;
      return obj;
    }, true));
  }, items5);
  const items6 = [];
  let num = 0;
  if (0 < stateFromStores.length) {
    let num3 = 0;
    let num4 = 0;
    num = 0;
    if (0 < stateFromStores2) {
      while (true) {
        let tmp6 = stateFromStores[num3];
        if (!stateFromStores3[tmp6.id]) {
          let tmp9 = stateFromStoresObject[tmp6.id];
          let tmp10 = null == tmp9;
          if (tmp10) {
            tmp10 = tmp6.type === stateFromStores1(8348).ICYMIItemTypes.MESSAGE;
          }
          if (tmp10) {
            let message_context = tmp6.data.message_context;
            let reference_message_id;
            if (message_context != null) {
              reference_message_id = message_context.reference_message_id;
            }
            tmp10 = null != reference_message_id;
          }
          if (tmp10) {
            tmp9 = stateFromStoresObject[tmp6.data.message_id];
          }
          if (null != tmp9) {
            let tmp15 = createItem(tmp6, tmp9, true);
            if (null != tmp15) {
              let arr = items6.push(tmp15);
            }
          }
        }
        let sum = num4 + 1;
        let sum1 = num3 + 1;
        num = sum;
        if (sum1 >= stateFromStores.length) {
          break;
        } else {
          num3 = sum1;
          num4 = sum;
          num = sum;
          if (sum >= stateFromStores2) {
            break;
          }
        }
      }
    }
  }
  const items7 = [];
  if (0 < stateFromStores1.length) {
    let num5 = 0;
    if (num < stateFromStores2) {
      while (true) {
        let tmp19 = stateFromStores1[num5];
        if (!stateFromStores3[tmp19.id]) {
          let tmp22 = stateFromStoresObject[tmp19.id];
          let tmp23 = null == tmp22;
          if (tmp23) {
            tmp23 = tmp19.type === stateFromStores1(8348).ICYMIItemTypes.MESSAGE;
          }
          if (tmp23) {
            let message_context2 = tmp19.data.message_context;
            let reference_message_id1;
            if (message_context2 != null) {
              reference_message_id1 = message_context2.reference_message_id;
            }
            tmp23 = null != reference_message_id1;
          }
          if (tmp23) {
            tmp22 = stateFromStoresObject[tmp19.data.message_id];
          }
          if (null != tmp22) {
            let tmp28 = createItem(tmp19, tmp22, false);
            if (null != tmp28) {
              arr = items7.push(tmp28);
            }
          }
        }
        let sum2 = num5 + 1;
        if (sum2 >= stateFromStores1.length) {
          break;
        } else {
          num = num + 1;
          num5 = sum2;
          if (num >= stateFromStores2) {
            break;
          }
        }
      }
    }
  }
  obj = { unreadItems: items6, readItems: items7, allUnreadItemsHydrated: stateFromStores2 >= stateFromStores.length };
  return obj;
};