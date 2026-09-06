// === Module 11429: GiftCodeStore ===

// Module 11429 (GiftCodeStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _modDef4153 from "module_4153" /* 4153 */;
import GiftCodeUtils from "GiftCodeUtils" /* 4799 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11430 */;
import GiftCodeRecord from "GiftCodeRecord" /* 10700 */;

require = fn;
function updateGiftCode(giftCode) {
  const fromServer = GiftCodeRecord.createFromServer(giftCode);
  const code = fromServer.code;
  if (map.has(code)) {
    value = map.get(code);
    const result = set(code, value.merge(fromServer));
  } else {
    const result1 = set(code, fromServer);
    if (null != fromServer.expiresAt) {
      const timeout = new code(4447).Timeout();
      dependencyMap[code] = timeout;
      value = map.get(code);
      if (null != value) {
        if (null != value.expiresAt) {
          const expiresAt = value.expiresAt;
          const valueOfResult = expiresAt.valueOf();
          const diff = valueOfResult - _modDef4153().valueOf();
          if (diff <= 0) {
            map.delete(code);
            delete tmp2[tmp];
            giftCodeStore.emitChange();
          } else if (null != dependencyMap[code]) {
            const _Math = Math;
            obj2.start(Math.min(closure_5, diff), () => {
              closure_0 = closure_1_0;
              let value = closure_2_8.get(closure_1_0);
              if (null != value) {
                if (null != value.expiresAt) {
                  let expiresAt = value.expiresAt;
                  let valueOfResult = expiresAt.valueOf();
                  let diff = valueOfResult - closure_2_1(closure_2_2[3])().valueOf();
                  if (diff <= 0) {
                    closure_2_8.delete(closure_1_0);
                    delete tmp[tmp2];
                    closure_2_18.emitChange();
                  } else if (null != closure_2_7[closure_1_0]) {
                    let _Math = Math;
                    obj2.start(Math.min(closure_2_5, diff), () => {
                      closure_0 = closure_1_0;
                      let value = closure_2_8.get(closure_1_0);
                      if (null != value) {
                        if (null != value.expiresAt) {
                          let expiresAt = value.expiresAt;
                          let valueOfResult = expiresAt.valueOf();
                          let diff = valueOfResult - closure_2_1(closure_2_2[3])().valueOf();
                          if (diff <= 0) {
                            closure_2_8.delete(closure_1_0);
                            delete tmp[tmp2];
                            closure_2_18.emitChange();
                          } else if (null != closure_2_7[closure_1_0]) {
                            let _Math = Math;
                            obj2.start(Math.min(closure_2_5, diff), () => {
                              closure_0 = closure_1_0;
                              let value = closure_2_8.get(closure_1_0);
                              if (null != value) {
                                if (null != value.expiresAt) {
                                  let expiresAt = value.expiresAt;
                                  let valueOfResult = expiresAt.valueOf();
                                  let diff = valueOfResult - closure_2_1(closure_2_2[3])().valueOf();
                                  if (diff <= 0) {
                                    closure_2_8.delete(closure_1_0);
                                    delete tmp[tmp2];
                                    closure_2_18.emitChange();
                                  } else if (null != closure_2_7[closure_1_0]) {
                                    let _Math = Math;
                                    obj2.start(Math.min(closure_2_5, diff), () => {
                                      closure_0 = closure_1_0;
                                      let value = closure_2_8.get(closure_1_0);
                                      if (null != value) {
                                        if (null != value.expiresAt) {
                                          let expiresAt = value.expiresAt;
                                          let valueOfResult = expiresAt.valueOf();
                                          let diff = valueOfResult - closure_2_1(closure_2_2[3])().valueOf();
                                          if (diff <= 0) {
                                            closure_2_8.delete(closure_1_0);
                                            delete tmp[tmp2];
                                            closure_2_18.emitChange();
                                          } else if (null != closure_2_7[closure_1_0]) {
                                            let _Math = Math;
                                            obj2.start(Math.min(closure_2_5, diff), () => { ... });
                                          }
                                          let obj3 = closure_2_1(closure_2_2[3])();
                                        }
                                      }
                                    });
                                  }
                                  let obj3 = closure_2_1(closure_2_2[3])();
                                }
                              }
                            });
                          }
                          let obj3 = closure_2_1(closure_2_2[3])();
                        }
                      }
                    });
                  }
                  let obj3 = closure_2_1(closure_2_2[3])();
                }
              }
            });
          }
          const obj4 = _modDef4153();
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
  const isGiftCodeEmbedResult = GiftCodeUtils.isGiftCodeEmbed(message);
  const findGiftCodes = GiftCodeUtils.findGiftCodes;
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
    const item = findGiftCodesResult.forEach((item) => {
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
        closure_1(573).wait(() => {
          const giftCode = GiftCodeActionCreatorsDefault.resolveGiftCode(closure_0, false, true);
          return giftCode.catch(closure_2_6);
        });
        const obj = closure_1(573);
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
const Constants = fn(1074);
({ AbortCodes: closure_4, MAX_TIMEOUT_MS: hasOwnProperty, NOOP_NULL: metroRequire } = Constants);
const dependencyMap = {};
const map = new Map();
let closure_9 = [];
let closure_10 = [];
let items = [];
const set = new Set();
let closure_13 = {};
let closure_14 = {};
const set1 = new Set();
const Store = initializeDefault.Store;
class GiftCodeStore extends Store {
}
const prototype = GiftCodeStore.prototype;
prototype["get"] = function get(arg0) {
  value = map.get(arg0);
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
    tmp = closure_14[arg0];
  }
  return tmp;
};
prototype["getForGifterSKUAndPlan"] = function getForGifterSKUAndPlan(id, skuId, subscriptionPlanId) {
  closure_0 = id;
  closure_1 = skuId;
  closure_2 = subscriptionPlanId;
  return Array.from(map.values()).filter((userId) => {
    let tmp = userId.userId === closure_0;
    if (tmp) {
      tmp = userId.skuId === closure_1;
    }
    if (tmp) {
      tmp = null == closure_2 || userId.subscriptionPlanId === tmp3;
      const tmp5 = null == closure_2 || userId.subscriptionPlanId === tmp3;
    }
    if (tmp) {
      tmp = !userId.isExpired();
    }
    return tmp;
  });
};
prototype["getIsResolving"] = function getIsResolving(arg0) {
  return closure_9.includes(arg0);
};
prototype["getIsResolved"] = function getIsResolved(giftCode) {
  return items.includes(giftCode);
};
prototype["getIsAccepting"] = function getIsAccepting(code) {
  return closure_10.includes(code);
};
prototype["getUserGiftCodesFetchingForSKUAndPlan"] = function getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId) {
  return set.has(GiftCodeUtils.makeComboId(skuId, subscriptionPlanId));
};
prototype["getUserGiftCodesLoadedAtForSKUAndPlan"] = function getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId) {
  const obj = GiftCodeUtils;
  return closure_13[obj.makeComboId(obj, skuId, subscriptionPlanId)];
};
prototype["getResolvingCodes"] = function getResolvingCodes() {
  return closure_9;
};
prototype["getResolvedCodes"] = function getResolvedCodes() {
  return items;
};
prototype["getAcceptingCodes"] = function getAcceptingCodes() {
  return closure_10;
};
GiftCodeStore.displayName = "GiftCodeStore";
const giftCodeStore = new GiftCodeStore(DispatcherDefault, {
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
      items[HermesBuiltin.arraySpread(closure_9, 0)] = code;
      closure_9 = items;
    }
  },
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    closure_9 = closure_9.filter((item) => item !== giftCode.code);
    if (!items.includes(giftCode.code)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, 0)] = giftCode.code;
    }
    updateGiftCode(giftCode);
  },
  GIFT_CODE_RESOLVE_FAILURE: function handleGiftCodeResolveFailure(code) {
    code = code.code;
    const error = code.error;
    closure_9 = closure_9.filter((item) => item !== code);
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
    if (!closure_10.includes(code)) {
      items = [];
      items[HermesBuiltin.arraySpread(closure_10, 0)] = code;
      closure_10 = items;
    }
  },
  GIFT_CODE_REDEEM_SUCCESS: function handleGiftCodeAcceptSuccess(code) {
    code = code.code;
    closure_10 = closure_10.filter((item) => item !== code);
    let obj = map;
    value = map.get(code);
    if (null != value) {
      obj = { redeemed: true, uses: value.uses + 1 };
      const result = obj.set(code, value.merge(obj));
    }
  },
  GIFT_CODE_REDEEM_FAILURE: function handleGiftCodeAcceptFailure(code) {
    code = code.code;
    const error = code.error;
    closure_10 = closure_10.filter((item) => item !== code);
    value = map.get(code);
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
    if (null != dependencyMap[code]) {
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
    set.add(GiftCodeUtils.makeComboId(skuId, subscriptionPlanId));
  },
  GIFT_CODES_FETCH_SUCCESS: function handleGiftCodesFetchSuccess(giftCodes) {
    giftCodes = giftCodes.giftCodes;
    ({ skuId, subscriptionPlanId } = giftCodes);
    const item = giftCodes.forEach(updateGiftCode);
    const comboId = GiftCodeUtils.makeComboId(skuId, subscriptionPlanId);
    closure_13[comboId] = Date.now();
    set.delete(comboId);
  },
  GIFT_CODES_FETCH_FAILURE: function handleGiftCodesFetchFail(arg0) {
    ({ skuId, subscriptionPlanId } = arg0);
    set.delete(GiftCodeUtils.makeComboId(skuId, subscriptionPlanId));
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
    value = map.get(code);
    if (null != value) {
      const _Math = Math;
      const result = map.set(code, value.set("uses", Math.max(value.uses, code.uses)));
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
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/GiftCodeStore.tsx");

export default giftCodeStore;