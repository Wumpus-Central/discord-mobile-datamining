// === Module 19126: useICYMIItems ===

// Module 19126 (useICYMIItems)
import ICYMITypes from "ICYMITypes" /* 10141 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 10148 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 10136 */;

require = fn;
function createItem(id, type, unread, arg3, fn) {
  type = type.type;
  if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
    if (type.message.id === type.message.channel_id) {
      if (null != type.threadChannel) {
        const obj3 = { id: id.id, timestamp: null, channelType: null, data: null, score: null, debugScore: null, unread: null };
        const _Date6 = Date;
        obj3.timestamp = Date.now();
        obj3.channelType = id.data.channel_type;
        ({ message: obj11.message, threadChannel: obj11.threadChannel } = type);
        obj3.data = { kind: "forumThread", message: null, threadChannel: null };
        obj3.score = id.score;
        const _JSON6 = JSON;
        obj3.debugScore = JSON.stringify(id.score_components);
        obj3.unread = unread;
        let obj5 = obj3;
        const obj4 = { kind: "forumThread", message: null, threadChannel: null };
      }
      return obj5;
    }
    obj5 = { id: id.id, timestamp: null, channelType: null, data: null, score: null, debugScore: null, unread: null };
    const _Date5 = Date;
    obj5.timestamp = Date.now();
    obj5.channelType = id.data.channel_type;
    const obj6 = { kind: "message", message: type.message, mentioned: id.data.has_mention, messageContext: id.data.message_context };
    obj5.data = obj6;
    obj5.score = id.score;
    const _JSON5 = JSON;
    obj5.debugScore = JSON.stringify(id.score_components);
    obj5.unread = unread;
  } else {
    if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
      if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
        if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT === type) {
          const obj7 = { id: id.id, timestamp: null, data: null, score: null, debugScore: null, unread: null };
          const _Date3 = Date;
          obj7.timestamp = Date.now();
          const obj8 = { kind: "guildEvent", eventId: type.event_id };
          obj7.data = obj8;
          obj7.score = id.score;
          const _JSON3 = JSON;
          obj7.debugScore = JSON.stringify(id.score_components);
          obj7.unread = unread;
          return obj7;
        } else if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
          const obj9 = { id: id.id, timestamp: null, data: null, score: null, debugScore: null, unread: null };
          const _Date2 = Date;
          obj9.timestamp = Date.now();
          obj9.data = { kind: "recommendedGuilds" };
          obj9.score = id.score;
          const _JSON2 = JSON;
          obj9.debugScore = JSON.stringify(id.score_components);
          obj9.unread = unread;
          return obj9;
        } else if (ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM === type) {
          let tmp6 = null;
          if (arg3) {
            let tmp8;
            if (fn != null) {
              tmp8 = fn(type.card);
            }
            tmp6 = null;
            if (false !== tmp8) {
              const obj = { id: id.id, timestamp: null, data: null, score: null, debugScore: null, unread: null };
              const _Date = Date;
              obj.timestamp = Date.now();
              ({ card: obj2.card, brokerPosition: obj2.brokerPosition } = type);
              obj.data = { kind: "waterwheelsItem", card: null, brokerPosition: null };
              obj.score = id.score;
              const _JSON = JSON;
              obj.debugScore = JSON.stringify(id.score_components);
              obj.unread = unread;
              tmp6 = obj;
              const obj10 = { kind: "waterwheelsItem", card: null, brokerPosition: null };
            }
          }
          return tmp6;
        } else {
          return null;
        }
      }
    }
    const obj21 = { id: id.id, timestamp: null, data: null, score: null, debugScore: null, unread: null };
    const _Date4 = Date;
    obj21.timestamp = Date.now();
    const obj22 = { kind: "contentInventory", content: type.activity };
    obj21.data = obj22;
    obj21.score = id.score;
    const _JSON4 = JSON;
    obj21.debugScore = JSON.stringify(id.score_components);
    obj21.unread = unread;
    return obj21;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/useICYMIItems.tsx");

export default function useICYMIItems() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const isWaterwheelsCardEligible = obj.isWaterwheelsCardEligible;
  let stateFromStores1;
  const waterwheelsDiscoverEnabled = stateFromStores1(10146).useWaterwheelsDiscoverEnabled("icymi_items");
  const obj2 = stateFromStores1(10146);
  items = [ICYMIStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => ICYMIStore.getUnreadDisplayItems());
  const obj3 = stateFromStores1(504);
  const items1 = [ICYMIStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => ICYMIStore.getReadDisplayItems());
  const obj4 = stateFromStores1(504);
  const items2 = [ICYMIStore];
  const stateFromStores2 = stateFromStores1(504).useStateFromStores(items2, () => ICYMIStore.getNextIndexToHydrate());
  const obj5 = stateFromStores1(504);
  const items3 = [ICYMIStore];
  const stateFromStoresObject = stateFromStores1(504).useStateFromStoresObject(items3, () => ICYMIStore.getHydratedItems());
  const obj6 = stateFromStores1(504);
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
        let tmp7 = stateFromStores[num3];
        if (!stateFromStores3[tmp7.id]) {
          let tmp10 = stateFromStoresObject[tmp7.id];
          let tmp11 = null == tmp10;
          if (tmp11) {
            tmp11 = tmp7.type === stateFromStores1(10141).ICYMIItemTypes.MESSAGE;
          }
          if (tmp11) {
            let message_context = tmp7.data.message_context;
            let reference_message_id;
            if (message_context != null) {
              reference_message_id = message_context.reference_message_id;
            }
            tmp11 = null != reference_message_id;
          }
          if (tmp11) {
            tmp10 = stateFromStoresObject[tmp7.data.message_id];
          }
          if (null != tmp10) {
            let flag = true;
            let tmp20 = createItem(tmp7, tmp10, true, waterwheelsDiscoverEnabled, isWaterwheelsCardEligible);
            if (null != tmp20) {
              let arr = items6.push(tmp20);
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
    let num7 = 0;
    if (num < stateFromStores2) {
      while (true) {
        let tmp24 = stateFromStores1[num7];
        if (!stateFromStores3[tmp24.id]) {
          let tmp27 = stateFromStoresObject[tmp24.id];
          let tmp28 = null == tmp27;
          if (tmp28) {
            tmp28 = tmp24.type === stateFromStores1(10141).ICYMIItemTypes.MESSAGE;
          }
          if (tmp28) {
            let message_context2 = tmp24.data.message_context;
            let reference_message_id1;
            if (message_context2 != null) {
              reference_message_id1 = message_context2.reference_message_id;
            }
            tmp28 = null != reference_message_id1;
          }
          if (tmp28) {
            tmp27 = stateFromStoresObject[tmp24.data.message_id];
          }
          if (null != tmp27) {
            let flag2 = false;
            let tmp37 = createItem(tmp24, tmp27, false, waterwheelsDiscoverEnabled, isWaterwheelsCardEligible);
            if (null != tmp37) {
              let arr2 = items7.push(tmp37);
            }
          }
        }
        let sum2 = num7 + 1;
        if (sum2 >= stateFromStores1.length) {
          break;
        } else {
          num = num + 1;
          num7 = sum2;
          if (num >= stateFromStores2) {
            break;
          }
        }
      }
    }
  }
  return { unreadItems: items6, readItems: items7, allUnreadItemsHydrated: stateFromStores2 >= stateFromStores.length, allItemsHydrated: stateFromStores2 >= stateFromStores.length + stateFromStores1.length, discoverEnabled: waterwheelsDiscoverEnabled };
};