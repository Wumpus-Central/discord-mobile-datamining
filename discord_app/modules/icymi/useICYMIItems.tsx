// === Module 15742: createItem ===

// Module 15742 (createItem)
import MessageEmbedTypes from "MessageEmbedTypes" /* 7589 */;
import _modDef9057 from "module_9057" /* 9057 */;
import noop from "noop" /* 19 */;
import filterStaffGuild from "filterStaffGuild" /* 9044 */;

require = fn;
function createItem(id, type, arg2) {
  type = type.type;
  if (MessageEmbedTypes.ICYMIItemTypes.MESSAGE === type) {
    if (type.message.id === type.message.channel_id) {
      if (null != type.threadChannel) {
        let obj = { id: null, timestamp: null, channelType: null, data: null, score: null, debugScore: null, unread: null };
        obj[0] = id.id;
        const _Date5 = Date;
        obj[1] = Date.now();
        obj[2] = id.data.channel_type;
        obj = { kind: "forumThread", message: null, threadChannel: null };
        ({ message: obj9[1], threadChannel: obj9[2] } = type);
        obj[3] = obj;
        obj[4] = id.score;
        const _JSON5 = JSON;
        obj[5] = JSON.stringify(id.score_components);
        obj[6] = arg2;
        obj1 = obj;
      }
      return obj1;
    }
    obj1 = { id: null, timestamp: null, channelType: null, data: null, score: null, debugScore: null, unread: null };
    obj1[0] = id.id;
    const _Date4 = Date;
    obj1[1] = Date.now();
    obj1[2] = id.data.channel_type;
    const obj2 = { kind: "message", message: null, mentioned: null, messageContext: null };
    obj2[1] = type.message;
    obj2[2] = id.data.has_mention;
    obj2[3] = id.data.message_context;
    obj1[3] = obj2;
    obj1[4] = id.score;
    const _JSON4 = JSON;
    obj1[5] = JSON.stringify(id.score_components);
    obj1[6] = arg2;
  } else {
    if (MessageEmbedTypes.ICYMIItemTypes.ACTIVITY !== type) {
      if (MessageEmbedTypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
        if (MessageEmbedTypes.ICYMIItemTypes.GUILD_EVENT === type) {
          const obj3 = { id: null, timestamp: null, data: null, score: null, debugScore: null, unread: null };
          obj3[0] = id.id;
          const _Date2 = Date;
          obj3[1] = Date.now();
          const obj4 = { kind: "guildEvent", eventId: null };
          obj4[1] = type.event_id;
          obj3[2] = obj4;
          obj3[3] = id.score;
          const _JSON2 = JSON;
          obj3[4] = JSON.stringify(id.score_components);
          obj3[5] = arg2;
          return obj3;
        } else if (MessageEmbedTypes.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
          obj = { id: null, timestamp: null, data: null, score: null, debugScore: null, unread: null };
          obj[0] = id.id;
          const _Date = Date;
          obj[1] = Date.now();
          obj[2] = { kind: "recommendedGuilds" };
          obj[3] = id.score;
          const _JSON = JSON;
          obj[4] = JSON.stringify(id.score_components);
          obj[5] = arg2;
          return obj;
        } else {
          return null;
        }
      }
    }
    const obj5 = { id: null, timestamp: null, data: null, score: null, debugScore: null, unread: null };
    obj5[0] = id.id;
    const _Date3 = Date;
    obj5[1] = Date.now();
    const obj6 = { kind: "contentInventory", content: null };
    obj6[1] = type.activity;
    obj5[2] = obj6;
    obj5[3] = id.score;
    const _JSON3 = JSON;
    obj5[4] = JSON.stringify(id.score_components);
    obj5[5] = arg2;
    return obj5;
  }
}
const result = require("obj132").fileFinishedImporting("modules/icymi/useICYMIItems.tsx");

export default function useICYMIItems() {
  let obj = stateFromStores1(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => store.getUnreadDisplayItems());
  const items1 = [closure_4];
  stateFromStores1 = stateFromStores1(589).useStateFromStores(items1, () => store.getReadDisplayItems());
  const obj2 = stateFromStores1(589);
  const items2 = [closure_4];
  const stateFromStores2 = stateFromStores1(589).useStateFromStores(items2, () => store.getNextIndexToHydrate());
  const obj3 = stateFromStores1(589);
  const items3 = [closure_4];
  const stateFromStoresObject = stateFromStores1(589).useStateFromStoresObject(items3, () => store.getHydratedItems());
  const obj4 = stateFromStores1(589);
  const items4 = [closure_4];
  const stateFromStores3 = stateFromStores1(589).useStateFromStores(items4, () => store.getMissingItems());
  const items5 = [stateFromStores1];
  const effect = React.useEffect(() => {
    stateFromStores1 = Date.now() + stateFromStores1.length;
    _modDef9057.ackGravityItems(stateFromStores1.map((item, index) => {
      closure_0 = tmp - 1;
      return { id: item.id, timestamp: +closure_0 };
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
            tmp10 = tmp6.type === stateFromStores1(7589).ICYMIItemTypes.MESSAGE;
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
            tmp23 = tmp19.type === stateFromStores1(7589).ICYMIItemTypes.MESSAGE;
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