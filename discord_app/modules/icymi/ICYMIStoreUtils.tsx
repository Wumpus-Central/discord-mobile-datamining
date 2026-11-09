// === Module 18909: ICYMIStoreUtils ===

// Module 18909 (ICYMIStoreUtils)
import ICYMIItemTypes from "ICYMIItemTypes" /* 18910 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import MessageStore from "MessageStore" /* 6194 */;
import ICYMIStore from "ICYMIStore" /* 8980 */;

const require = globalThis.__r;

require = fn;
let closure_5 = async function _hydrateNextPage() {
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
      return { value: "HermesInternal", done: null };
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
          items = [];
          HermesBuiltin.arraySpread(readDisplayItems, HermesBuiltin.arraySpread(unreadDisplayItems, 0));
          const sum = nextIndexToHydrate + require("ICYMITypes").ICYMI_PAGE_SIZE;
          c1 = 1;
          c0 = 1;
          const obj4 = { value: obj5.hydrateItems(items, nextIndexToHydrate, sum, ICYMIStore.getHydratedItems()), done: false };
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c0 = tmp;
      throw tmp5;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIStoreUtils.tsx");

export function getViewableFeedItemsArray(viewableItems) {
  let tmp3;
  items = [...ICYMIStore.getUnreadDisplayItems(), ...ICYMIStore.getReadDisplayItems()];
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
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function useGravityMessage(message) {
  _require = message;
  items = [MessageStore, ICYMIStore];
  const items1 = [message];
  return require("initialize").useStateFromStores(items, () => {
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
  }, items1);
}
export function useGravityMessageItem(id) {
  _require = id;
  items = [ICYMIStore];
  const items1 = [id.id];
  return require("initialize").useStateFromStores(items, () => ICYMIStore.getHydratedItem(id.id), items1);
}
export function useICYMIMessage(id, before_message_id) {
  _require = id;
  dependencyMap = before_message_id;
  items = [MessageStore, ICYMIStore];
  const items1 = [id, before_message_id];
  return require("initialize").useStateFromStores(items, () => {
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
  }, items1);
}