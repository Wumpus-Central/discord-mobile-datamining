// === Module 16430: useICYMIItems ===

// Module 16430 (useICYMIItems)
import ICYMITypes from "ICYMITypes" /* 8024 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8029 */;
import react from "react" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 8011 */;
import size from "module_2" /* 2 */;

function createItem(id, type, unread) {
  let obj3;
  let obj5;
  type = type.type;
  if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
    if (type.message.id === type.message.channel_id) {
      let obj4;
      if (null != type.threadChannel) {
        const _Date5 = Date;
        const obj2 = { id: id.id, timestamp: Date.now(), channelType: id.data.channel_type, data: obj3, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
        obj3 = { kind: "forumThread", message: null, threadChannel: null };
        ({ message: obj9.message, threadChannel: obj9.threadChannel } = type);
        const _JSON5 = JSON;
        obj4 = obj2;
      }
      return obj4;
    }
    obj4 = { id: id.id, timestamp: Date.now(), channelType: id.data.channel_type, data: obj5, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
    const _Date4 = Date;
    const _JSON4 = JSON;
    obj5 = { kind: "message", message: type.message, mentioned: id.data.has_mention, messageContext: id.data.message_context };
  } else {
    if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
      if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
        if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT === type) {
          const _Date2 = Date;
          const obj6 = { id: id.id, timestamp: Date.now(), data: obj7, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
          const _JSON2 = JSON;
          return obj6;
        } else if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
          const _Date = Date;
          const _JSON = JSON;
          const obj = { id: id.id, timestamp: Date.now(), data: { kind: "recommendedGuilds" }, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
          return obj;
        } else {
          return null;
        }
      }
    }
    const _Date3 = Date;
    const obj8 = { id: id.id, timestamp: Date.now(), data: obj17, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
    const _JSON3 = JSON;
    return obj8;
  }
}
const result = size.fileFinishedImporting("modules/icymi/useICYMIItems.tsx");

export default function useICYMIItems() {
  let stateFromStores1;
  let obj = stateFromStores1(504);
  const items = [ICYMIStore];
  const stateFromStores = obj.useStateFromStores(items, () => ICYMIStore.getUnreadDisplayItems());
  const items1 = [ICYMIStore];
  const obj2 = stateFromStores1(504);
  stateFromStores1 = obj2.useStateFromStores(items1, () => ICYMIStore.getReadDisplayItems());
  const items2 = [ICYMIStore];
  const obj3 = stateFromStores1(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => ICYMIStore.getNextIndexToHydrate());
  const items3 = [ICYMIStore];
  const obj4 = stateFromStores1(504);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items3, () => ICYMIStore.getHydratedItems());
  const items4 = [ICYMIStore];
  const obj5 = stateFromStores1(504);
  const stateFromStores3 = obj5.useStateFromStores(items4, () => ICYMIStore.getMissingItems());
  const items5 = [stateFromStores1];
  const effect = react.useEffect(() => {
    let closure_0 = Date.now() + stateFromStores1.length;
    let obj = ICYMIActionCreatorsDefault;
    obj.ackGravityItems(stateFromStores1.map((id) => {
      const obj = { id: id.id, timestamp: +closure_0 };
      closure_0 = tmp - 1;
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
            tmp10 = tmp6.type === stateFromStores1(8024).ICYMIItemTypes.MESSAGE;
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
            tmp23 = tmp19.type === stateFromStores1(8024).ICYMIItemTypes.MESSAGE;
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