// === Module 16437: ICYMIStoreUtils ===

// Module 16437 (ICYMIStoreUtils)
import Constants from "Constants" /* 1085 */;
import ICYMIItemTypes from "ICYMIItemTypes" /* 16438 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MessageStore from "MessageStore" /* 5116 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import ICYMIStore from "ICYMIStore" /* 8021 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c3, c4, constants;

let obj = function _hydrateNextPage() {
  obj = _asyncToGenerator(async () => {
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
        return { value: "IconComponent", done: null };
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
            const tmp15 = require("ICYMIUtils");
            const items = [];
            const hydrateItems = tmp15.hydrateItems;
            HermesBuiltin.arraySpread(items, readDisplayItems, HermesBuiltin.arraySpread(items, unreadDisplayItems, 0));
            const sum = nextIndexToHydrate + require("ICYMITypes").ICYMI_PAGE_SIZE;
            c1 = 1;
            c0 = 1;
            const obj4 = { value: hydrateItems(items, nextIndexToHydrate, sum, ICYMIStore.getHydratedItems()), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp5) {
        c0 = 3;
        throw tmp5;
      }
    }
  });
  return obj(...arguments);
};
obj = function _regenerateFeedAndClearReadStates() {
  let paths;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0;
    let closure_2;
    let obj12;
    let obj6;
    let obj9;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            constants = tmp;
            let closure_1 = tmp4;
            let ack;
            let AnalyticsObjectTypes;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: require("asyncRequire")(paths[8], paths.paths), done: false };
            return obj5;
          }
        } else if (1 === c3) {
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
        } else if (2 === c3) {
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
              let tmp2 = type.type === object(constants[7]).ICYMIItemTypes.MESSAGE && type.data.channel_type === constants.GUILD_ANNOUNCEMENT;
              if (tmp2) {
                obj = closure_1(constants[11]);
                tmp2 = obj.compare(closure_2_5.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
              }
              if (tmp2) {
                const channel_id = type.data.channel_id;
                const obj2 = { object, objectType: constants.ACK_SEMI_AUTOMATIC };
                const obj3 = closure_1(constants[11]);
                closure_1_1(channel_id, obj2, true, true, obj3.atPreviousMillisecond(type.data.message_id));
              }
            });
            c3 = 3;
            c4 = 1;
            const obj11 = { value: obj12.clearReadStates(), done: false };
            obj12 = closure_130_1(closure_130_2[12]);
            return obj11;
          }
        } else if (3 === c3) {
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
            const obj14 = { value: obj9.fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
            obj9 = closure_130_1(closure_130_2[12]);
            return obj14;
          }
        } else if (4 === c3) {
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
            const obj16 = { value: obj6.reloadICYMITab(), done: false };
            obj6 = closure_130_1(closure_130_2[12]);
            return obj16;
          }
        } else if (5 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            let obj3 = closure_130_1(closure_130_2[12]);
            c3 = 6;
            c4 = 1;
            const obj18 = { value: obj3.getGuildChannelScores(), done: false };
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
          obj = closure_130_1(closure_130_2[12]);
          const recommendedGuilds = obj.getRecommendedGuilds();
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp35) {
        c4 = 3;
        throw tmp35;
      }
    }
  });
  return obj(...arguments);
};
const ChannelTypes = Constants.ChannelTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore, ICYMIStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let message = MessageStore.getMessage(channelId.getChannelId(), channelId.id);
      if (message == null) {
        const hydratedItem = ICYMIStore.getHydratedItem(channelId.id);
        let message1;
        if (hydratedItem != null) {
          message1 = hydratedItem.message;
        }
        message = message1;
      }
      if (message == null) {
        message = channelId;
      }
      return message;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  let channelId;
  _require = arg0;
  const items = [MessageStore, ICYMIStore];
  const items1 = [arg0];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let message = MessageStore.getMessage(channelId.getChannelId(), channelId.id);
    if (message == null) {
      const hydratedItem = ICYMIStore.getHydratedItem(channelId.id);
      let message1;
      if (hydratedItem != null) {
        message1 = hydratedItem.message;
      }
      message = message1;
    }
    if (message == null) {
      message = channelId;
    }
    return message;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let first;
  let tmp6;
  let tmp7;
  _require = id;
  obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ICYMIStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function s() {
      return ICYMIStore.getHydratedItem(id.id);
    };
    const items1 = [id.id];
    cResult[1] = id.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((id) => {
  _require = id;
  const items = [ICYMIStore];
  const items1 = [id.id];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => ICYMIStore.getHydratedItem(id.id), items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore, ICYMIStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    let tmp8;
    if (cResult[2] === arg1) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp7, tmp8);
  }
  const fn = function o() {
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
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const items = [MessageStore, ICYMIStore];
  const items1 = [arg0, arg1];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
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
});
const result = size.fileFinishedImporting("modules/icymi/ICYMIStoreUtils.tsx");

export const getViewableFeedItemsArray = function getViewableFeedItemsArray(viewableItems) {
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
    let items1;
    const findIndexResult = items.findIndex((id) => id.id === id);
    if (findIndexResult < 0) {
      items1 = [];
    } else {
      items1 = items.slice(0, findIndexResult + 1);
    }
    return items1;
  }
};
export const hydrateNextPage = function hydrateNextPage() {
  return obj(...arguments);
};
export const regenerateFeedAndClearReadStates = function regenerateFeedAndClearReadStates() {
  return obj(...arguments);
};
export const useGravityMessage = tmp2;
export const useGravityMessageItem = tmp3;
export const useICYMIMessage = tmp4;