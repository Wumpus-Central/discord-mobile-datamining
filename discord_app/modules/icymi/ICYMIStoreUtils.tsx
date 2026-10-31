// discord_app/modules/icymi/ICYMIStoreUtils.tsx
import ICYMIItemTypes from "ICYMIItemTypes.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import MessageStore from "../../stores/MessageStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import ICYMIStore from "ICYMIStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_8 = async function _hydrateNextPage() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const unreadDisplayItems = ICYMIStore.getUnreadDisplayItems();
          const readDisplayItems = ICYMIStore.getReadDisplayItems();
          const nextIndexToHydrate = ICYMIStore.getNextIndexToHydrate();
          const obj5 = require("ICYMIUtils");
          const items = [];
          HermesBuiltin.arraySpread(readDisplayItems, HermesBuiltin.arraySpread(unreadDisplayItems, 0));
          const sum = nextIndexToHydrate + require("ICYMITypes").ICYMI_PAGE_SIZE;
          c1 = 1;
          c0 = 1;
          const obj4 = {
            value: obj5.hydrateItems(items, nextIndexToHydrate, sum, ICYMIStore.getHydratedItems()),
            done: false,
          };
          return obj4;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp5) {
      c0 = tmp;
      throw tmp5;
    }
  }
};
let closure_9 = async function _regenerateFeedAndClearReadStates(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          constants = tmp2;
          closure_1 = tmp5;
          closure_129_0 = object;
          let ack;
          let AnalyticsObjectTypes;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: require("asyncRequireImpl")(paths[8], paths.paths), done: false };
          return obj5;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          ack = value.ack;
          c3 = 2;
          c4 = 1;
          const obj8 = { value: closure_130_0(closure_130_2[9])(closure_130_2[10], closure_130_2.paths), done: false };
          return obj8;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          AnalyticsObjectTypes = value.AnalyticsObjectTypes;
          const dehydratedItems = closure_130_6.getDehydratedItems();
          const item = dehydratedItems.forEach((type) => {
            let tmp2 = type.type === object(constants[7]).ICYMIItemTypes.MESSAGE;
            if (tmp2) {
              tmp2 = type.data.channel_type === constants.GUILD_ANNOUNCEMENT;
            }
            if (tmp2) {
              tmp2 =
                closure_1(constants[11]).compare(
                  closure_2_5.ackMessageId(type.data.channel_id),
                  type.data.message_id,
                ) >= 0;
              const obj = closure_1(constants[11]);
            }
            if (tmp2) {
              const channel_id = type.data.channel_id;
              const obj2 = { object, objectType: constants.ACK_SEMI_AUTOMATIC };
              closure_1_1(
                channel_id,
                obj2,
                true,
                true,
                closure_1(constants[11]).atPreviousMillisecond(type.data.message_id),
              );
              const obj3 = closure_1(constants[11]);
            }
          });
          c3 = 3;
          c4 = 1;
          const obj11 = { value: closure_130_1(closure_130_2[12]).clearReadStates(), done: false };
          return obj11;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          c3 = 4;
          c4 = 1;
          const obj14 = {
            value: closure_130_1(closure_130_2[12]).fetchDehydrated({ isReloading: true, forceRefresh: true }),
            done: false,
          };
          return obj14;
        }
      } else if (4 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          c3 = 5;
          c4 = 1;
          const obj16 = { value: closure_130_1(closure_130_2[12]).reloadICYMITab(), done: false };
          return obj16;
        }
      } else if (5 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj17 = { value, done: true };
          return obj17;
        } else {
          c3 = 6;
          c4 = 1;
          const obj18 = { value: closure_130_1(closure_130_2[12]).getGuildChannelScores(), done: false };
          return obj18;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj19 = { value, done: true };
        return obj19;
      } else {
        const recommendedGuilds = closure_130_1(closure_130_2[12]).getRecommendedGuilds();
        c4 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp36) {
      c4 = tmp;
      throw tmp36;
    }
  }
};
const ChannelTypes = fn(1072).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIStoreUtils.tsx");

export function getViewableFeedItemsArray(viewableItems) {
  let tmp3;
  const items = [...ICYMIStore.getUnreadDisplayItems(), ...ICYMIStore.getReadDisplayItems()];
  let id = null;
  let diff = viewableItems.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    while (true) {
      tmp3 = viewableItems[diff];
      if (null != tmp3) {
        let NON_ELIGIBLE_SCROLL_ITEMS = ICYMIItemTypes.NON_ELIGIBLE_SCROLL_ITEMS;
        if (!NON_ELIGIBLE_SCROLL_ITEMS.has(tmp3.item.data.kind)) {
          break;
        }
      }
      diff = diff - 1;
      tmp2 = null;
    }
    id = tmp3.item.id;
    tmp2 = id;
  }
  if (null == tmp2) {
    return [];
  } else {
    const findIndexResult = items.findIndex((id) => id.id === id);
    if (findIndexResult < 0) {
      let items1 = [];
    } else {
      items1 = items.slice(0, findIndexResult + 1);
    }
    return items1;
  }
}
export function hydrateNextPage() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function regenerateFeedAndClearReadStates() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function useGravityMessage(message) {
  _require = message;
  const items = [MessageStore, ICYMIStore];
  const items1 = [message];
  return require("initialize").useStateFromStores(
    items,
    () => {
      message = MessageStore.getMessage(message.getChannelId(), message.id);
      if (message == null) {
        const hydratedItem = ICYMIStore.getHydratedItem(tmp.id);
        let message1;
        if (hydratedItem != null) {
          message1 = hydratedItem.message;
        }
        message = message1;
      }
      if (message == null) {
        message = tmp;
      }
      return message;
    },
    items1,
  );
}
export function useGravityMessageItem(id) {
  _require = id;
  const items = [ICYMIStore];
  const items1 = [id.id];
  return require("initialize").useStateFromStores(items, () => ICYMIStore.getHydratedItem(id.id), items1);
}
export function useICYMIMessage(id, before_message_id) {
  _require = id;
  closure_1 = before_message_id;
  const items = [MessageStore, ICYMIStore];
  const items1 = [id, before_message_id];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let tmp2 = null;
      if (null != closure_1) {
        let message = MessageStore.getMessage(closure_0, closure_1);
        if (message == null) {
          const hydratedItem = ICYMIStore.getHydratedItem(closure_1);
          let message1;
          if (hydratedItem != null) {
            message1 = hydratedItem.message;
          }
          message = message1;
        }
        tmp2 = message;
      }
      return tmp2;
    },
    items1,
  );
}
