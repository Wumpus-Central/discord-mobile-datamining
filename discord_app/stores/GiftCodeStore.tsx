// discord_app/stores/GiftCodeStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import tDefault from "../../_runtime/03975_t.js";
import _resolveGiftCode from "../utils/GiftCodeUtils.tsx";
import frozen from "../records/GiftCodeRecord.tsx";
import ME from "../Constants.tsx";

require = fn;
function updateGiftCode(giftCode) {
  const fromServer = closure_3.createFromServer(giftCode);
  const code = fromServer.code;
  if (map.has(code)) {
    let value = map.get(code);
    const result = set(code, value.merge(fromServer));
  } else {
    const result1 = set(code, fromServer);
    if (null != fromServer.expiresAt) {
      const timeout = new code(4259).Timeout();
      table[code] = timeout;
      value = map.get(code);
      if (null != value) {
        if (null != value.expiresAt) {
          const expiresAt = value.expiresAt;
          const valueOfResult = expiresAt.valueOf();
          const diff = valueOfResult - tDefault().valueOf();
          if (diff <= 0) {
            map.delete(code);
            delete tmp2[tmp];
            giftCodeStore.emitChange();
          } else if (null != table[code]) {
            const _Math = Math;
            obj2.start(Math.min(closure_5, diff), () => {
              let value = closure_1_8.get(closure_0);
              if (null != value) {
                if (null != value.expiresAt) {
                  let expiresAt = value.expiresAt;
                  let valueOfResult = expiresAt.valueOf();
                  let diff = valueOfResult - closure_1_1(closure_1_2[3])().valueOf();
                  if (diff <= 0) {
                    closure_1_8.delete(closure_0);
                    delete tmp[tmp2];
                    closure_1_18.emitChange();
                  } else if (null != closure_1_7[closure_0]) {
                    let _Math = Math;
                    obj2.start(Math.min(closure_1_5, diff), () => {
                      let value = closure_1_8.get(closure_0);
                      if (null != value) {
                        if (null != value.expiresAt) {
                          let expiresAt = value.expiresAt;
                          let valueOfResult = expiresAt.valueOf();
                          let diff = valueOfResult - closure_1_1(closure_1_2[3])().valueOf();
                          if (diff <= 0) {
                            closure_1_8.delete(closure_0);
                            delete tmp[tmp2];
                            closure_1_18.emitChange();
                          } else if (null != closure_1_7[closure_0]) {
                            let _Math = Math;
                            obj2.start(Math.min(closure_1_5, diff), () => {
                              let value = closure_1_8.get(closure_0);
                              if (null != value) {
                                if (null != value.expiresAt) {
                                  let expiresAt = value.expiresAt;
                                  let valueOfResult = expiresAt.valueOf();
                                  let diff = valueOfResult - closure_1_1(closure_1_2[3])().valueOf();
                                  if (diff <= 0) {
                                    closure_1_8.delete(closure_0);
                                    delete tmp[tmp2];
                                    closure_1_18.emitChange();
                                  } else if (null != closure_1_7[closure_0]) {
                                    let _Math = Math;
                                    obj2.start(Math.min(closure_1_5, diff), () => {
                                      let value = closure_1_8.get(closure_0);
                                      if (null != value) {
                                        if (null != value.expiresAt) {
                                          let expiresAt = value.expiresAt;
                                          let valueOfResult = expiresAt.valueOf();
                                          let diff = valueOfResult - closure_1_1(closure_1_2[3])().valueOf();
                                          if (diff <= 0) {
                                            closure_1_8.delete(closure_0);
                                            delete tmp[tmp2];
                                            closure_1_18.emitChange();
                                          } else if (null != closure_1_7[closure_0]) {
                                            let _Math = Math;
                                            obj2.start(Math.min(closure_1_5, diff), () => { ... });
                                          }
                                          let obj3 = closure_1_1(closure_1_2[3])();
                                        }
                                      }
                                    });
                                  }
                                  let obj3 = closure_1_1(closure_1_2[3])();
                                }
                              }
                            });
                          }
                          let obj3 = closure_1_1(closure_1_2[3])();
                        }
                      }
                    });
                  }
                  let obj3 = closure_1_1(closure_1_2[3])();
                }
              }
            });
          }
          const obj4 = tDefault();
        }
      }
    }
  }
}
function resolveMessageGiftCodes(message, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    if (!set1.has(message.channel_id)) {
      return false;
    }
  }
  const isGiftCodeEmbedResult = _resolveGiftCode.isGiftCodeEmbed(message);
  const findGiftCodes = _resolveGiftCode.findGiftCodes;
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
    let findGiftCodesResult = findGiftCodes(tmp6);
  } else {
    findGiftCodesResult = findGiftCodes(message.content);
  }
  if (0 !== findGiftCodesResult.length) {
    const item = findGiftCodesResult.forEach((item, index) => {
      closure_0 = item;
      let hasItem = items.includes(item);
      if (!hasItem) {
        hasItem = closure_11.includes(item);
      }
      if (!hasItem) {
        if (!items.includes(item)) {
          items = [];
          items[HermesBuiltin.arraySpread(items, 0)] = item;
        }
        callback(table[5]).wait(() => {
          const giftCode = closure_1_1(closure_1_2[6]).resolveGiftCode(closure_0, false, true);
          return giftCode.catch(closure_1_6);
        });
        const obj = callback(table[5]);
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
  const item = messages.forEach((item, index) => {
    callback(item, true);
    return false;
  });
}
function handleLoadThreadsSuccess(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  if (null == firstMessages) {
    return false;
  } else if (firstMessages != null) {
    const item = firstMessages.forEach((item, index) => {
      callback(item);
      return false;
    });
  }
}
({ AbortCodes: c4, MAX_TIMEOUT_MS: c5, NOOP_NULL: closure_6 } = ME);
let closure_7 = {};
const map = new Map();
let closure_9 = [];
let closure_10 = [];
let closure_11 = [];
const set = new Set();
let closure_13 = {};
let closure_14 = {};
const set1 = new Set();
const Store = initializeDefault.Store;
class GiftCodeStore extends Store {
}
const prototype = GiftCodeStore.prototype;
prototype["get"] = function get(arg0) {
  const value = map.get(arg0);
  let tmp = null;
  if (null != value) {
    tmp = null;
    if (!value.isExpired()) {
      tmp = value;
    }
  }
  return tmp;
};
prototype["getError"] = function getError(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = table3[arg0];
  }
  return tmp;
};
prototype["getForGifterSKUAndPlan"] = function getForGifterSKUAndPlan(id, skuId, subscriptionPlanId) {
  closure_0 = id;
  closure_1 = skuId;
  closure_2 = subscriptionPlanId;
  return Array.from(map.values()).filter((item, index) => {
    let tmp = item.userId === closure_0;
    if (tmp) {
      tmp = item.skuId === closure_1;
    }
    if (tmp) {
      tmp = null == closure_2 || item.subscriptionPlanId === tmp3;
    }
    if (tmp) {
      tmp = !item.isExpired();
    }
    return tmp;
  });
};
prototype["getIsResolving"] = function getIsResolving(arg0) {
  return closure_9.includes(arg0);
};
prototype["getIsResolved"] = function getIsResolved(item) {
  return closure_11.includes(item);
};
prototype["getIsAccepting"] = function getIsAccepting(code) {
  return closure_10.includes(code);
};
prototype["getUserGiftCodesFetchingForSKUAndPlan"] = function getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId) {
  return set.has(_resolveGiftCode.makeComboId(skuId, subscriptionPlanId));
};
prototype["getUserGiftCodesLoadedAtForSKUAndPlan"] = function getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId) {
  const obj = _resolveGiftCode;
  return table2[obj.makeComboId(obj, skuId, subscriptionPlanId)];
};
prototype["getResolvingCodes"] = function getResolvingCodes() {
  return closure_9;
};
prototype["getResolvedCodes"] = function getResolvedCodes() {
  return closure_11;
};
prototype["getAcceptingCodes"] = function getAcceptingCodes() {
  return closure_10;
};
GiftCodeStore.displayName = "GiftCodeStore";
const giftCodeStore = new GiftCodeStore(dispatcherDefault, {
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
    if (!items.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, 0)] = code;
    }
  },
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    closure_9 = closure_9.filter((item, index) => item !== giftCode.code);
    if (!items.includes(giftCode.code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, 0)] = giftCode.code;
    }
    updateGiftCode(giftCode);
  },
  GIFT_CODE_RESOLVE_FAILURE: function handleGiftCodeResolveFailure(code) {
    code = code.code;
    error = code.error;
    closure_9 = closure_9.filter((item, index) => item !== code);
    if (!items.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, 0)] = code;
    }
    if (null != error) {
      closure_14[code] = error;
    }
  },
  GIFT_CODE_REDEEM: function handleGiftCodeAccept(code) {
    code = code.code;
    if (!items.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, 0)] = code;
    }
  },
  GIFT_CODE_REDEEM_SUCCESS: function handleGiftCodeAcceptSuccess(code) {
    code = code.code;
    closure_10 = closure_10.filter((item, index) => item !== code);
    let obj = map;
    const value = map.get(code);
    if (null != value) {
      obj = { redeemed: true, uses: null };
      obj[1] = value.uses + 1;
      const result = obj.set(code, value.merge(obj));
    }
  },
  GIFT_CODE_REDEEM_FAILURE: function handleGiftCodeAcceptFailure(code) {
    code = code.code;
    error = code.error;
    closure_10 = closure_10.filter((item, index) => item !== code);
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
    if (null != table[code]) {
      obj.stop();
      delete tmp[tmp2];
    }
    if (!items.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, 0)] = code;
    }
  },
  GIFT_CODE_CREATE_SUCCESS: function handleGiftCodeCreate(giftCode) {
    updateGiftCode(giftCode.giftCode);
  },
  GIFT_CODES_FETCH: function handleGiftCodesFetch(arg0) {
    ({ skuId, subscriptionPlanId } = arg0);
    set.add(_resolveGiftCode.makeComboId(skuId, subscriptionPlanId));
  },
  GIFT_CODES_FETCH_SUCCESS: function handleGiftCodesFetchSuccess(giftCodes) {
    giftCodes = giftCodes.giftCodes;
    ({ skuId, subscriptionPlanId } = giftCodes);
    const item = giftCodes.forEach(updateGiftCode);
    const comboId = _resolveGiftCode.makeComboId(skuId, subscriptionPlanId);
    closure_13[comboId] = Date.now();
    set.delete(comboId);
  },
  GIFT_CODES_FETCH_FAILURE: function handleGiftCodesFetchFail(arg0) {
    ({ skuId, subscriptionPlanId } = arg0);
    set.delete(_resolveGiftCode.makeComboId(skuId, subscriptionPlanId));
  },
  MESSAGE_CREATE: handleMessage,
  MESSAGE_UPDATE: handleMessage,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: function handleLoadRecentMentions(messages) {
    messages = messages.messages;
    const item = messages.forEach((item, index) => {
      callback(item);
      return false;
    });
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const item = pins.forEach((item, index) => {
      callback(item.message);
      return false;
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    let item = data.forEach((item, index) => {
      const messages = item.messages;
      item = messages.forEach((item, index) => {
        item = item.forEach((item, index) => {
          callback(item);
          return false;
        });
      });
    });
  },
  GIFT_CODE_UPDATE: function handleGiftCodeUpdate(code) {
    code = code.code;
    const value = map.get(code);
    if (null != value) {
      const _Math = Math;
      const result = map.set(code, value.set("uses", Math.max(value.uses, code.uses)));
    }
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    const values = Object.values(threads.threads);
    const mapped = values.map((item, index) => {
      const first_message = item.first_message;
      let flag = null != first_message;
      if (flag) {
        callback(first_message);
        flag = false;
      }
      return flag;
    });
  }
});
let result = require("obj132").fileFinishedImporting("stores/GiftCodeStore.tsx");

export default giftCodeStore;