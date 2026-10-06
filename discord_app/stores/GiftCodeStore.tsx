// === Module 11101: GiftCodeStore ===

// Module 11101 (GiftCodeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _modDef4467 from "module_4467" /* 4467 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5317 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11102 */;
import GiftCodeRecord from "GiftCodeRecord" /* 10444 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_10, closure_9, first_message;

let closure_4;
let hasOwnProperty;
let metroRequire;
function updateGiftCode(giftCode) {
  const f106509 = () => {
    let closure_0 = code;
    const value = map.get(code);
    if (null != value) {
      if (null != value.expiresAt) {
        const expiresAt = value.expiresAt;
        const valueOfResult = expiresAt.valueOf();
        const obj3 = _modDef4467();
        const diff = valueOfResult - obj3.valueOf();
        if (diff <= 0) {
          map.delete(code);
          delete closure_7[code];
          giftCodeStore.emitChange();
        } else if (null != closure_7[code]) {
          const _Math = Math;
          closure_7[code].start(Math.min(hasOwnProperty, diff), f106509);
        }
      }
    }
  };
  const fromServer = GiftCodeRecord.createFromServer(giftCode);
  const code = fromServer.code;
  if (map.has(code)) {
    let value = map.get(code);
    const result = set(code, value.merge(fromServer));
  } else {
    const result1 = set(code, fromServer);
    if (null != fromServer.expiresAt) {
      const self = this;
      const self2 = this;
      const timeout = new code(2046).Timeout();
      closure_7[code] = timeout;
      const value2 = map.get(code);
      if (null != value2) {
        if (null != value2.expiresAt) {
          let expiresAt = value2.expiresAt;
          let valueOfResult = expiresAt.valueOf();
          const obj4 = _modDef4467();
          let diff = valueOfResult - obj4.valueOf();
          if (diff <= 0) {
            map.delete(code);
            delete closure_7[code];
            giftCodeStore.emitChange();
          } else if (null != closure_7[code]) {
            let _Math = Math;
            closure_7[code].start(Math.min(closure_5, diff), f106509);
          }
        }
      }
    }
  }
}
function resolveMessageGiftCodes(message, arg1) {
  let findGiftCodesResult;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    if (!set1.has(message.channel_id)) {
      return false;
    }
  }
  let obj = GiftCodeUtils;
  const isGiftCodeEmbedResult = obj.isGiftCodeEmbed(message);
  const findGiftCodes = GiftCodeUtils.findGiftCodes;
  GiftCodeUtils;
  if (isGiftCodeEmbedResult) {
    let embeds;
    if (message != null) {
      embeds = message.embeds;
    }
    let tmp6;
    if (null != embeds) {
      let url;
      if (message != null) {
        url = message.embeds[0].url;
      }
      tmp6 = url;
    }
    findGiftCodesResult = findGiftCodes(tmp6);
  } else {
    findGiftCodesResult = findGiftCodes(message.content);
  }
  if (0 !== findGiftCodesResult.length) {
    const item = findGiftCodesResult.forEach((item) => {
      let closure_0 = item;
      const hasItem = items.includes(item) || closure_11.includes(item);
      if (!hasItem) {
        if (!items.includes(item)) {
          items = [];
          items[HermesBuiltin.arraySpread(items, items, 0)] = item;
        }
        let obj = closure_1(closure_2[5]);
        obj.wait(() => {
          const obj = GiftCodeActionCreatorsDefault;
          const giftCode = obj.resolveGiftCode(item, false, true);
          return giftCode.catch(closure_2_6);
        });
      }
    });
  }
  return false;
}
function handleMessage(message) {
  resolveMessageGiftCodes(message.message, true);
  return false;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  set1.add(messages.channelId);
  const item = messages.forEach((item) => {
    resolveMessageGiftCodes(item, true);
    return false;
  });
}
function handleLoadThreadsSuccess(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  if (null == firstMessages) {
    return false;
  } else if (firstMessages != null) {
    const item = firstMessages.forEach((item) => {
      resolveMessageGiftCodes(item);
      return false;
    });
  }
}
({ AbortCodes: closure_4, MAX_TIMEOUT_MS: hasOwnProperty, NOOP_NULL: metroRequire } = Constants);
let closure_7 = {};
const map = new Map();
const React4 = [];
const authStore = [];
let items = [];
const set = new Set();
const authStore2 = {};
const set1 = new Set();
const Store = get_initializedDefault.Store;
class GiftCodeStore extends Store {
  get(arg0) {
    const value = map.get(arg0);
    let tmp = null;
    if (null != value) {
      tmp = null;
      if (!value.isExpired()) {
        tmp = value;
      }
    }
    return tmp;
  }
  getError(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = closure_14[arg0];
    }
    return tmp;
  }
  getForGifterSKUAndPlan(id, skuId, subscriptionPlanId) {
    let closure_0 = id;
    let closure_1 = skuId;
    let closure_2 = subscriptionPlanId;
    const arr = Array.from(map.values());
    return arr.filter((userId) => {
      let tmp = userId.userId === closure_0 && userId.skuId === closure_1;
      if (tmp) {
        tmp = null == closure_2 || userId.subscriptionPlanId === tmp3;
      }
      if (tmp) {
        tmp = !userId.isExpired();
      }
      return tmp;
    });
  }
  getIsResolving(arg0) {
    return closure_9.includes(arg0);
  }
  getIsResolved(giftCode) {
    return items.includes(giftCode);
  }
  getIsAccepting(code) {
    return closure_10.includes(code);
  }
  getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId) {
    const has = set.has;
    const obj = GiftCodeUtils;
    return has(obj.makeComboId(skuId, subscriptionPlanId));
  }
  getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId) {
    const obj = GiftCodeUtils;
    return closure_13[obj.makeComboId(obj, skuId, subscriptionPlanId)];
  }
  getResolvingCodes() {
    return closure_9;
  }
  getResolvedCodes() {
    return items;
  }
  getAcceptingCodes() {
    return closure_10;
  }
}
const prototype = GiftCodeStore.prototype;
GiftCodeStore.displayName = "GiftCodeStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set1.clear();
    return false;
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      set1.add(channelId);
    }
    return false;
  },
  GIFT_CODE_RESOLVE: function handleGiftCodeResolve(code) {
    code = code.code;
    if (!closure_9.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, closure_9, 0)] = code;
      closure_9 = items;
    }
  },
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    closure_9 = closure_9.filter((item) => item !== giftCode.code);
    if (!items.includes(giftCode.code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, items, 0)] = giftCode.code;
    }
    updateGiftCode(giftCode);
  },
  GIFT_CODE_RESOLVE_FAILURE: function handleGiftCodeResolveFailure(code) {
    code = code.code;
    const error = code.error;
    closure_9 = closure_9.filter((item) => item !== code);
    if (!items.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, items, 0)] = code;
    }
    if (null != error) {
      closure_14[code] = error;
    }
  },
  GIFT_CODE_REDEEM: function handleGiftCodeAccept(code) {
    code = code.code;
    if (!closure_10.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, closure_10, 0)] = code;
      closure_10 = items;
    }
  },
  GIFT_CODE_REDEEM_SUCCESS: function handleGiftCodeAcceptSuccess(code) {
    code = code.code;
    closure_10 = closure_10.filter((item) => item !== code);
    const value = map.get(code);
    if (null != value) {
      const obj2 = { redeemed: true, uses: value.uses + 1 };
      const result = map.set(code, value.merge(obj2));
    }
  },
  GIFT_CODE_REDEEM_FAILURE: function handleGiftCodeAcceptFailure(code) {
    code = code.code;
    const error = code.error;
    closure_10 = closure_10.filter((item) => item !== code);
    const value = map.get(code);
    closure_14[code] = error;
    if (null != value) {
      const code2 = error.code;
      if (constants.UNKNOWN_GIFT_CODE === code2) {
        const result = map.set(code, value.set("revoked", true));
      } else if (tmp.INVALID_GIFT_REDEMPTION_EXHAUSTED === code2) {
        const result1 = map.set(code, value.set("uses", value.maxUses));
      }
    }
  },
  GIFT_CODE_REVOKE_SUCCESS: function handleGiftCodeRevoke(code) {
    code = code.code;
    map.delete(code);
    if (null != closure_7[code]) {
      closure_7[code].stop();
      delete tmp3[code];
    }
    if (!items.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, items, 0)] = code;
    }
  },
  GIFT_CODE_CREATE_SUCCESS: function handleGiftCodeCreate(giftCode) {
    updateGiftCode(giftCode.giftCode);
  },
  GIFT_CODES_FETCH: function handleGiftCodesFetch(arg0) {
    let skuId;
    let subscriptionPlanId;
    ({ skuId, subscriptionPlanId } = arg0);
    const add = set.add;
    const obj = GiftCodeUtils;
    add(obj.makeComboId(skuId, subscriptionPlanId));
  },
  GIFT_CODES_FETCH_SUCCESS: function handleGiftCodesFetchSuccess(giftCodes) {
    let skuId;
    let subscriptionPlanId;
    giftCodes = giftCodes.giftCodes;
    ({ skuId, subscriptionPlanId } = giftCodes);
    const item = giftCodes.forEach(updateGiftCode);
    const obj = GiftCodeUtils;
    const comboId = obj.makeComboId(skuId, subscriptionPlanId);
    closure_13[comboId] = Date.now();
    set.delete(comboId);
  },
  GIFT_CODES_FETCH_FAILURE: function handleGiftCodesFetchFail(arg0) {
    let skuId;
    let subscriptionPlanId;
    ({ skuId, subscriptionPlanId } = arg0);
    const _delete = set.delete;
    const obj = GiftCodeUtils;
    _delete(obj.makeComboId(skuId, subscriptionPlanId));
  },
  MESSAGE_CREATE: handleMessage,
  MESSAGE_UPDATE: handleMessage,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: function handleLoadRecentMentions(messages) {
    messages = messages.messages;
    const item = messages.forEach((item) => {
      resolveMessageGiftCodes(item);
      return false;
    });
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const item = pins.forEach((message) => {
      resolveMessageGiftCodes(message.message);
      return false;
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((item) => {
          closure_1_17(item);
          return false;
        });
      });
    });
  },
  GIFT_CODE_UPDATE: function handleGiftCodeUpdate(code) {
    code = code.code;
    const uses = code.uses;
    const value = map.get(code);
    if (null != value) {
      const _Math = Math;
      const result = map.set(code, value.set("uses", Math.max(value.uses, uses)));
    }
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    const values = Object.values(threads.threads);
    const mapped = values.map((first_message) => {
      first_message = first_message.first_message;
      let flag = null != first_message;
      if (flag) {
        resolveMessageGiftCodes(first_message);
        flag = false;
      }
      return flag;
    });
  }
};
const giftCodeStore = new GiftCodeStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/GiftCodeStore.tsx");

export default giftCodeStore;