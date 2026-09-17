// === Module 16646: useICYMIItems ===

// Module 16646 (useICYMIItems)
import ICYMITypes from "ICYMITypes" /* 8497 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8500 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 8484 */;

require = fn;
function createItem(id, type, unread) {
  type = type.type;
  if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
    if (type.message.id === type.message.channel_id) {
      if (null != type.threadChannel) {
        const obj2 = { id: id.id, timestamp: null, channelType: null, data: null, score: null, debugScore: null, unread: null };
        const _Date5 = Date;
        obj2.timestamp = Date.now();
        obj2.channelType = id.data.channel_type;
        ({ message: obj9.message, threadChannel: obj9.threadChannel } = type);
        obj2.data = { kind: "forumThread", message: null, threadChannel: null };
        obj2.score = id.score;
        const _JSON5 = JSON;
        obj2.debugScore = JSON.stringify(id.score_components);
        obj2.unread = unread;
        let obj4 = obj2;
        const obj3 = { kind: "forumThread", message: null, threadChannel: null };
      }
      return obj4;
    }
    obj4 = { id: id.id, timestamp: null, channelType: null, data: null, score: null, debugScore: null, unread: null };
    const _Date4 = Date;
    obj4.timestamp = Date.now();
    obj4.channelType = id.data.channel_type;
    const obj5 = { kind: "message", message: type.message, mentioned: id.data.has_mention, messageContext: id.data.message_context };
    obj4.data = obj5;
    obj4.score = id.score;
    const _JSON4 = JSON;
    obj4.debugScore = JSON.stringify(id.score_components);
    obj4.unread = unread;
  } else {
    if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
      if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
        if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT === type) {
          const obj6 = { id: id.id, timestamp: null, data: null, score: null, debugScore: null, unread: null };
          const _Date2 = Date;
          obj6.timestamp = Date.now();
          const obj7 = { kind: "guildEvent", eventId: type.event_id };
          obj6.data = obj7;
          obj6.score = id.score;
          const _JSON2 = JSON;
          obj6.debugScore = JSON.stringify(id.score_components);
          obj6.unread = unread;
          return obj6;
        } else if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
          const obj = { id: id.id, timestamp: null, data: null, score: null, debugScore: null, unread: null };
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
    const obj8 = { id: id.id, timestamp: null, data: null, score: null, debugScore: null, unread: null };
    const _Date3 = Date;
    obj8.timestamp = Date.now();
    const obj17 = { kind: "contentInventory", content: type.activity };
    obj8.data = obj17;
    obj8.score = id.score;
    const _JSON3 = JSON;
    obj8.debugScore = JSON.stringify(id.score_components);
    obj8.unread = unread;
    return obj8;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/useICYMIItems.tsx");

export default function useICYMIItems() {
  const items = [ICYMIStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => ICYMIStore.getUnreadDisplayItems());
  let obj = stateFromStores1(504);
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
            tmp10 = tmp6.type === stateFromStores1(8497).ICYMIItemTypes.MESSAGE;
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
            tmp23 = tmp19.type === stateFromStores1(8497).ICYMIItemTypes.MESSAGE;
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
              let arr2 = items7.push(tmp28);
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
  return { unreadItems: items6, readItems: items7, allUnreadItemsHydrated: stateFromStores2 >= stateFromStores.length };
};