// === Module 10430: NativeGiftContext ===

// Module 10430 (NativeGiftContext)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import intl3 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import BillingUtils from "BillingUtils" /* 4543 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import Constants3 from "Constants" /* 6740 */;
import ContextUtilsDefault from "ContextUtils" /* 6934 */;
import BadgeId from "BadgeId" /* 7855 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7868 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10394 */;
import PremiumGiftingIntentActionCreators from "PremiumGiftingIntentActionCreators" /* 10472 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;
import PromotionsStore_mod from "PromotionsStore" /* 10396 */;
import GiftCodeRecord from "GiftCodeRecord" /* 10431 */;
import UserStore from "UserStore" /* 1377 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let constants;

let closure_12;
let closure_14;
let closure_18;
let map1;
let tmp6;
let tmp7;
let react = react_mod;
let PromotionsStore = PromotionsStore_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const unpackModuleId = Constants3.GPlayBillingResult;
({ PremiumTypes: closure_12, SubscriptionIntervalTypes: map1, SubscriptionPlanInfo: closure_14 } = PremiumConstants);
let PaymentGateways = Constants2.PaymentGateways;
let jsx = Fragment.jsx;
let tmp4 = new LoggerDefault("NativeGiftContext");
let closure_17 = tmp4;
[closure_18, tmp6, tmp7] = ContextUtilsDefault();
_slicedToArray(ContextUtilsDefault(), 3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let customGiftMessage;
  let emojiConfetti;
  let giftStyle;
  let id;
  let premiumType;
  let recipientUserId;
  let selectedGiftingPromotionReward;
  let soundEffect;
  let soundId;
  let surrogates;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(11);
  ({ giftStyle, recipientUserId, customGiftMessage, emojiConfetti, soundEffect, selectedGiftingPromotionReward, premiumType } = arg0);
  if (emojiConfetti != null) {
    id = emojiConfetti.id;
  }
  if (emojiConfetti != null) {
    surrogates = emojiConfetti.surrogates;
  }
  if (soundEffect != null) {
    soundId = soundEffect.soundId;
  }
  if (cResult[0] === premiumType) {
    if (cResult[1] === selectedGiftingPromotionReward) {
      tmp2 = cResult[2];
    }
    if (cResult[3] === customGiftMessage) {
      if (cResult[4] === giftStyle) {
        if (cResult[5] === recipientUserId) {
          if (cResult[6] === id) {
            if (cResult[7] === surrogates) {
              if (cResult[8] === soundId) {
                let tmp4;
                if (cResult[9] === tmp2) {
                  tmp4 = cResult[10];
                }
                return tmp4;
              }
            }
          }
        }
      }
    }
    const obj2 = { gift_style: giftStyle, recipient_id: recipientUserId, custom_message: customGiftMessage, emoji_id: id, emoji_name: surrogates, sound_id: soundId, reward_sku_ids: tmp2 };
    cResult[3] = customGiftMessage;
    cResult[4] = giftStyle;
    cResult[5] = recipientUserId;
    cResult[6] = id;
    cResult[7] = surrogates;
    cResult[8] = soundId;
    cResult[9] = tmp2;
    cResult[10] = obj2;
    tmp4 = obj2;
  }
  if (null != selectedGiftingPromotionReward) {
    let items1;
    if (premiumType === closure_12.TIER_2) {
      const items = [selectedGiftingPromotionReward];
      items1 = items;
    }
    cResult[0] = premiumType;
    cResult[1] = selectedGiftingPromotionReward;
    cResult[2] = items1;
    tmp2 = items1;
  }
  items1 = [];
}) : ((giftStyle) => {
  let TIER_2;
  giftStyle = giftStyle.giftStyle;
  const recipientUserId = giftStyle.recipientUserId;
  const customGiftMessage = giftStyle.customGiftMessage;
  const emojiConfetti = giftStyle.emojiConfetti;
  const soundEffect = giftStyle.soundEffect;
  const selectedGiftingPromotionReward = giftStyle.selectedGiftingPromotionReward;
  const premiumType = giftStyle.premiumType;
  let items = [giftStyle, recipientUserId, customGiftMessage, , , , , ];
  let id;
  const useMemo = selectedGiftingPromotionReward.useMemo;
  if (emojiConfetti != null) {
    id = emojiConfetti.id;
  }
  items[3] = id;
  let surrogates;
  if (emojiConfetti != null) {
    surrogates = emojiConfetti.surrogates;
  }
  items[4] = surrogates;
  let soundId;
  if (soundEffect != null) {
    soundId = soundEffect.soundId;
  }
  items[5] = soundId;
  items[6] = selectedGiftingPromotionReward;
  items[7] = premiumType;
  return useMemo(() => {
    let id;
    let soundId;
    let surrogates;
    const obj = { gift_style: giftStyle, recipient_id: recipientUserId, custom_message: customGiftMessage, emoji_id: id, emoji_name: surrogates, sound_id: soundId, reward_sku_ids: null };
    id = undefined;
    if (emojiConfetti != null) {
      id = emojiConfetti.id;
    }
    surrogates = undefined;
    if (emojiConfetti != null) {
      surrogates = emojiConfetti.surrogates;
    }
    soundId = undefined;
    if (soundEffect != null) {
      soundId = soundEffect.soundId;
    }
    if (null != selectedGiftingPromotionReward) {
      if (premiumType === TIER_2.TIER_2) {
        const items = [tmp5];
      }
      obj.reward_sku_ids = [];
      return obj;
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((order) => {
  let closure_16;
  let setRevision;
  let tmp7;
  let tmp8;
  let tmp = setRevision;
  let obj = order(setRevision[15]);
  const cResult = obj.c(44);
  order = order.order;
  let revision = order.revision;
  setRevision = order.setRevision;
  const setOrder = order.setOrder;
  let planId = order.planId;
  const externalGatewayFacet = order.externalGatewayFacet;
  const giftInfoOptions = order.giftInfoOptions;
  let isPurchasing = order.isPurchasing;
  const premiumType = order.premiumType;
  const planInterval = order.planInterval;
  const setPremiumType = order.setPremiumType;
  const setPlanInterval = order.setPlanInterval;
  const setError = order.setError;
  if (cResult[0] === planInterval) {
    let tmp3;
    if (cResult[1] === premiumType) {
      tmp3 = cResult[2];
    }
    let obj3 = externalGatewayFacet;
    let closure_13 = externalGatewayFacet.useRef(tmp3);
    const ref = externalGatewayFacet.useRef(false);
    const tmp4 = null;
    const ref2 = externalGatewayFacet.useRef(null);
    let tmp6 = planId(externalGatewayFacet.useState(0), 2);
    [tmp7, tmp8] = tmp6;
    jsx = tmp8;
    const tmp10 = revision(tmp[16])(tmp8);
    const waitForPause = tmp10.waitForPause;
    const flush = tmp10.flush;
    const waitForSync = tmp10.waitForSync;
    const resolveSyncs = tmp10.resolveSyncs;
    const isAwaitingSync = tmp10.isAwaitingSync;
    if (cResult[3] === externalGatewayFacet) {
      if (cResult[4] === giftInfoOptions) {
        if (cResult[5] === isAwaitingSync) {
          if (cResult[6] === isPurchasing) {
            if (cResult[7] === order) {
              if (cResult[8] === planId) {
                if (cResult[9] === planInterval) {
                  if (cResult[10] === premiumType) {
                    if (cResult[11] === resolveSyncs) {
                      if (cResult[12] === revision) {
                        if (cResult[13] === setError) {
                          if (cResult[14] === setOrder) {
                            if (cResult[15] === setPlanInterval) {
                              if (cResult[16] === setPremiumType) {
                                if (cResult[17] === setRevision) {
                                  let tmp11;
                                  if (cResult[18] === waitForPause) {
                                    tmp11 = cResult[19];
                                  }
                                  if (cResult[20] === externalGatewayFacet) {
                                    if (cResult[21] === giftInfoOptions) {
                                      if (cResult[22] === isAwaitingSync) {
                                        if (cResult[23] === isPurchasing) {
                                          if (cResult[24] === order) {
                                            if (cResult[25] === planId) {
                                              if (cResult[26] === planInterval) {
                                                if (cResult[27] === premiumType) {
                                                  if (cResult[28] === resolveSyncs) {
                                                    if (cResult[29] === revision) {
                                                      if (cResult[30] === setError) {
                                                        if (cResult[31] === setOrder) {
                                                          if (cResult[32] === setPlanInterval) {
                                                            if (cResult[33] === setPremiumType) {
                                                              if (cResult[34] === setRevision) {
                                                                if (cResult[35] === tmp7) {
                                                                  let tmp12;
                                                                  if (cResult[36] === waitForPause) {
                                                                    tmp12 = cResult[37];
                                                                  }
                                                                  const effect = obj3.useEffect(tmp11, tmp12);
                                                                  if (cResult[38] === flush) {
                                                                    if (cResult[39] === giftInfoOptions) {
                                                                      let tmp14;
                                                                      let tmp15;
                                                                      if (cResult[40] === waitForSync) {
                                                                        tmp14 = cResult[41];
                                                                      }
                                                                      if (cResult[42] !== tmp14) {
                                                                        let obj2 = { awaitSyncOrder: tmp14 };
                                                                        class A {
                                                                          constructor() {
                                                                            flush(giftInfoOptions);
                                                                            const tmp2 = waitForSync();
                                                                            tmp8((arg0) => arg0 + 1);
                                                                            return tmp2;
                                                                          }
                                                                        }
                                                                        cResult[43] = obj2;
                                                                        tmp15 = obj2;
                                                                      } else {
                                                                        tmp15 = cResult[43];
                                                                      }
                                                                      return tmp15;
                                                                    }
                                                                  }
                                                                  class A {
                                                                    constructor() {
                                                                      flush(giftInfoOptions);
                                                                      const tmp2 = waitForSync();
                                                                      tmp8((arg0) => arg0 + 1);
                                                                      return tmp2;
                                                                    }
                                                                  }
                                                                  cResult[38] = flush;
                                                                  cResult[39] = giftInfoOptions;
                                                                  cResult[40] = waitForSync;
                                                                  cResult[41] = A;
                                                                  tmp14 = A;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  let items = [, revision, planId, externalGatewayFacet, giftInfoOptions, isPurchasing, premiumType, planInterval, setPremiumType, setPlanInterval, setRevision, setOrder, setError, tmp7, resolveSyncs, waitForPause, isAwaitingSync];
                                  cResult[20] = externalGatewayFacet;
                                  cResult[21] = giftInfoOptions;
                                  cResult[22] = isAwaitingSync;
                                  cResult[23] = isPurchasing;
                                  cResult[24] = order;
                                  cResult[25] = planId;
                                  cResult[26] = planInterval;
                                  cResult[27] = premiumType;
                                  cResult[28] = resolveSyncs;
                                  cResult[29] = revision;
                                  cResult[30] = setError;
                                  cResult[31] = setOrder;
                                  cResult[32] = setPlanInterval;
                                  cResult[33] = setPremiumType;
                                  cResult[34] = setRevision;
                                  cResult[35] = tmp7;
                                  cResult[36] = waitForPause;
                                  cResult[37] = items;
                                  tmp12 = items;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const fn = function b() {
      let closure_7;
      let id;
      let id2;
      let logger;
      let needsGiftSync;
      let sku_id;
      const tmp = id;
      id = undefined;
      if (id != null) {
        id = tmp.id;
      }
      let first;
      if (tmp != null) {
        const order_line_items = tmp.order_line_items;
        if (order_line_items != null) {
          first = order_line_items[0];
        }
      }
      let id1;
      if (first != null) {
        id1 = first.id;
      }
      if (first != null) {
        sku_id = first.sku_id;
      }
      let subscription_plan_id;
      if (first != null) {
        subscription_plan_id = first.subscription_plan_id;
      }
      if (subscription_plan_id == null) {
        subscription_plan_id = null;
      }
      const tmp6 = null != tmp && ref.current.orderId !== tmp.id;
      if (tmp6) {
        ref.current.orderId = tmp.id;
        ref.current.planId = subscription_plan_id;
        let obj = { premiumType, planInterval };
        ref.current.planSelection = obj;
        ref2.current = null;
      }
      if (null != id) {
        if (null != first) {
          if (null != id1) {
            if (null != first) {
              let tmp16 = ref.current.planId !== needsGiftSync;
              if (tmp16) {
                let tmp17 = null == sku_id;
                if (!tmp17) {
                  let skuId;
                  if (ref[tmp15] != null) {
                    skuId = tmp19.skuId;
                  }
                  tmp17 = skuId === sku_id;
                }
                tmp16 = tmp17;
              }
              const needsPlanSync = tmp16;
              needsGiftSync = tmp22;
              if (!ref.current) {
                if (!tmp16) {
                  if (ref.current.giftInfo === id2) {
                    resolveSyncs(true);
                  }
                }
                const tmp26 = isPurchasing;
                if (!tmp26) {
                  let c5 = false;
                  id2 = undefined;
                  if (tmp != null) {
                    id2 = tmp.id;
                  }
                  tmp23.current = true;
                  isPurchasing = tmp12;
                  const promise = setOrder(function*() {
                    let c4;
                    let closure_2;
                    let expectedRevision;
                    let items;
                    let obj12;
                    let obj17;
                    let obj5;
                    let obj9;
                    if (c5 === 2) {
                      c5 = 3;
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
                      let v0;
                      try {
                        let closure_1;
                        c5 = 2;
                        if (0 === planId) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            revision = undefined;
                            closure_1 = undefined;
                            if (needsPlanSync) {
                              v0 = 1;
                              if (null != c5) {
                                const obj4 = { orderId: id, expectedRevision, orderLineItems: items, externalGatewayFacet: tmp54 };
                                const obj6 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: planId };
                                ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                                items = [obj6];
                                planId = 2;
                                c5 = 1;
                                const obj7 = { value: obj12.patchOrder(obj4), done: false };
                                obj12 = id(id1[17]);
                                return obj7;
                              } else {
                                const obj8 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                                planId = 3;
                                c5 = 1;
                                const obj10 = { value: obj9.patchOrderLineItem(obj8), done: false };
                                obj9 = id(id1[17]);
                                return obj10;
                              }
                            }
                          }
                        } else if (1 === planId) {
                          v0 = 0;
                          closure_1 = tmp67;
                          if (!closure_129_5) {
                            setPremiumType(ref.current.planSelection.premiumType);
                            setPlanInterval(ref.current.planSelection.planInterval);
                          }
                          throw closure_1;
                        } else {
                          if (2 === planId) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj11 = { value, done: true };
                              return obj11;
                            } else {
                              revision = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "IconComponent", done: null };
                              } else {
                                expectedRevision = revision.revision;
                                v0(revision);
                              }
                            }
                          } else {
                            if (3 === planId) {
                              if (arg0 === 1) {
                                c5 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                v0 = 0;
                                c5 = 3;
                                const obj13 = { value, done: true };
                                return obj13;
                              } else {
                                expectedRevision = value;
                                if (ref.current.orderId !== closure_129_6) {
                                  v0 = 0;
                                  c5 = 3;
                                  return { value: "IconComponent", done: null };
                                }
                              }
                            } else if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c5 = 3;
                              const obj = { value, done: true };
                              return obj;
                            } else {
                              expectedRevision = value;
                              if (ref.current.orderId !== closure_129_6) {
                                c5 = 3;
                                return { value: "IconComponent", done: null };
                              } else {
                                ref.current.giftInfo = current;
                                tmp67(expectedRevision);
                              }
                            }
                            c5 = 3;
                            return { value: "IconComponent", done: null };
                          }
                          ref.current.planId = planId;
                          const obj15 = { premiumType, planInterval };
                          ref.current.planSelection = obj15;
                          tmp67(expectedRevision);
                          v0 = 0;
                        }
                        if (closure_129_4) {
                          ref2.current = current;
                          const obj16 = { orderId, giftInfo: obj17, expectedRevision };
                          obj17 = { recipient_id: current.recipient_id, gift_style: current.gift_style, emoji_id: current.emoji_id, emoji_name: current.emoji_name, sound_id: current.sound_id, reward_sku_ids: current.reward_sku_ids, custom_message_contents: current.custom_message };
                          planId = 4;
                          c5 = 1;
                          const obj30 = { value: obj5.updateOrder(obj16), done: false };
                          obj5 = id(id1[17]);
                          return obj30;
                        }
                      } catch (tmp67) {
                        if (0 === v0) {
                          c5 = 3;
                          throw tmp67;
                        } else {
                          planId = 1;
                        }
                      }
                    }
                  })();
                  const nextPromise = promise.then(() => {
                    closure_1_16((arg0) => arg0 + 1);
                  });
                  const catchPromise = nextPromise.catch((error) => {
                    let obj3;
                    const obj2 = { tags: { source: "NativeGiftContext_syncOrder" }, extra: obj3 };
                    obj3 = { orderId: id, planId, needsPlanSync, needsGiftSync };
                    const obj = BillingUtils;
                    const result = obj.captureBillingException(error, obj2);
                    const obj4 = { error, orderId: id };
                    logger.error("Failed to sync order", obj4);
                    if (ref.current.orderId === id2) {
                      setError(error);
                    }
                    resolveSyncs(false);
                  });
                  catchPromise.finally(() => {
                    closure_14.current = false;
                    if (ref.current.orderId !== id2) {
                      jsx((arg0) => arg0 + 1);
                    }
                  });
                  return () => {
                    c5 = true;
                  };
                }
              }
            }
          }
        }
      }
      resolveSyncs(true);
    };
    cResult[3] = externalGatewayFacet;
    cResult[4] = giftInfoOptions;
    cResult[5] = isAwaitingSync;
    cResult[6] = isPurchasing;
    cResult[7] = order;
    cResult[8] = planId;
    cResult[9] = planInterval;
    cResult[10] = premiumType;
    cResult[11] = resolveSyncs;
    cResult[12] = revision;
    cResult[13] = setError;
    cResult[14] = setOrder;
    cResult[15] = setPlanInterval;
    cResult[16] = setPremiumType;
    cResult[17] = setRevision;
    cResult[18] = waitForPause;
    cResult[19] = fn;
    tmp11 = fn;
  }
  let obj4 = { orderId: "a", planId: 600, planSelection: { premiumType, planInterval }, giftInfo: 0 };
  cResult[0] = planInterval;
  cResult[1] = premiumType;
  cResult[2] = obj4;
  tmp3 = obj4;
}) : ((order) => {
  let items1;
  order = order.order;
  let revision = order.revision;
  const setRevision = order.setRevision;
  const setOrder = order.setOrder;
  let planId = order.planId;
  const externalGatewayFacet = order.externalGatewayFacet;
  const giftInfoOptions = order.giftInfoOptions;
  let isPurchasing = order.isPurchasing;
  const premiumType = order.premiumType;
  const planInterval = order.planInterval;
  const setPremiumType = order.setPremiumType;
  const setPlanInterval = order.setPlanInterval;
  const setError = order.setError;
  let obj = { orderId: "a", planId: 600, planSelection: { premiumType, planInterval }, giftInfo: 0 };
  let closure_13 = externalGatewayFacet.useRef(obj);
  const ref = externalGatewayFacet.useRef(false);
  const ref2 = externalGatewayFacet.useRef(null);
  let tmp = planId(externalGatewayFacet.useState(0), 2);
  const tmp3 = tmp[1];
  let closure_16 = tmp3;
  let first = tmp[0];
  const tmp4 = revision(setRevision[16])(tmp3);
  const waitForPause = tmp4.waitForPause;
  const flush = tmp4.flush;
  const waitForSync = tmp4.waitForSync;
  const resolveSyncs = tmp4.resolveSyncs;
  const isAwaitingSync = tmp4.isAwaitingSync;
  let items = [order, revision, planId, externalGatewayFacet, giftInfoOptions, isPurchasing, premiumType, planInterval, setPremiumType, setPlanInterval, setRevision, setOrder, setError, first, resolveSyncs, waitForPause, isAwaitingSync];
  const effect = externalGatewayFacet.useEffect(() => {
    let closure_7;
    let id;
    let id2;
    let logger;
    let needsGiftSync;
    let sku_id;
    const tmp = id;
    id = undefined;
    if (id != null) {
      id = tmp.id;
    }
    let first;
    if (tmp != null) {
      const order_line_items = tmp.order_line_items;
      if (order_line_items != null) {
        first = order_line_items[0];
      }
    }
    let id1;
    if (first != null) {
      id1 = first.id;
    }
    if (first != null) {
      sku_id = first.sku_id;
    }
    let subscription_plan_id;
    if (first != null) {
      subscription_plan_id = first.subscription_plan_id;
    }
    if (subscription_plan_id == null) {
      subscription_plan_id = null;
    }
    const tmp6 = null != tmp && ref.current.orderId !== tmp.id;
    if (tmp6) {
      ref.current.orderId = tmp.id;
      ref.current.planId = subscription_plan_id;
      let obj = { premiumType, planInterval };
      ref.current.planSelection = obj;
      ref2.current = null;
    }
    if (null != id) {
      if (null != first) {
        if (null != id1) {
          if (null != first) {
            let tmp16 = ref.current.planId !== needsGiftSync;
            if (tmp16) {
              let tmp17 = null == sku_id;
              if (!tmp17) {
                let skuId;
                if (ref[tmp15] != null) {
                  skuId = tmp19.skuId;
                }
                tmp17 = skuId === sku_id;
              }
              tmp16 = tmp17;
            }
            const needsPlanSync = tmp16;
            needsGiftSync = tmp22;
            if (!ref.current) {
              if (!tmp16) {
                if (ref.current.giftInfo === id2) {
                  resolveSyncs(true);
                }
              }
              const tmp26 = isPurchasing;
              if (!tmp26) {
                let c5 = false;
                id2 = undefined;
                if (tmp != null) {
                  id2 = tmp.id;
                }
                tmp23.current = true;
                isPurchasing = tmp12;
                const promise = setOrder(function*() {
                  let c4;
                  let closure_2;
                  let expectedRevision;
                  let items;
                  let obj12;
                  let obj17;
                  let obj5;
                  let obj9;
                  if (c5 === 2) {
                    c5 = 3;
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
                    let v0;
                    try {
                      let closure_1;
                      c5 = 2;
                      if (0 === planId) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c5 = 3;
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          closure_1 = tmp;
                          revision = undefined;
                          if (needsPlanSync) {
                            v0 = 1;
                            if (null != c5) {
                              const obj4 = { orderId: id, expectedRevision, orderLineItems: items, externalGatewayFacet: tmp54 };
                              const obj6 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: planId };
                              ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                              items = [obj6];
                              planId = 2;
                              c5 = 1;
                              const obj7 = { value: obj12.patchOrder(obj4), done: false };
                              obj12 = id(id1[17]);
                              return obj7;
                            } else {
                              const obj8 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                              planId = 3;
                              c5 = 1;
                              const obj10 = { value: obj9.patchOrderLineItem(obj8), done: false };
                              obj9 = id(id1[17]);
                              return obj10;
                            }
                          }
                        }
                      } else if (1 === planId) {
                        v0 = 0;
                        closure_1 = tmp67;
                        if (!closure_129_5) {
                          setPremiumType(ref.current.planSelection.premiumType);
                          setPlanInterval(ref.current.planSelection.planInterval);
                        }
                        throw closure_1;
                      } else {
                        if (2 === planId) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v0 = 0;
                            c5 = 3;
                            const obj11 = { value, done: true };
                            return obj11;
                          } else {
                            revision = value;
                            if (ref.current.orderId !== closure_129_6) {
                              v0 = 0;
                              c5 = 3;
                              return { value: "IconComponent", done: null };
                            } else {
                              expectedRevision = revision.revision;
                              v0(revision);
                            }
                          }
                        } else {
                          if (3 === planId) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj13 = { value, done: true };
                              return obj13;
                            } else {
                              expectedRevision = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "IconComponent", done: null };
                              }
                            }
                          } else if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            const obj = { value, done: true };
                            return obj;
                          } else {
                            expectedRevision = value;
                            if (ref.current.orderId !== closure_129_6) {
                              c5 = 3;
                              return { value: "IconComponent", done: null };
                            } else {
                              ref.current.giftInfo = current;
                              tmp67(expectedRevision);
                            }
                          }
                          c5 = 3;
                          return { value: "IconComponent", done: null };
                        }
                        ref.current.planId = planId;
                        const obj15 = { premiumType, planInterval };
                        ref.current.planSelection = obj15;
                        tmp67(expectedRevision);
                        v0 = 0;
                      }
                      if (closure_129_4) {
                        ref2.current = current;
                        const obj16 = { orderId, giftInfo: obj17, expectedRevision };
                        obj17 = { recipient_id: current.recipient_id, gift_style: current.gift_style, emoji_id: current.emoji_id, emoji_name: current.emoji_name, sound_id: current.sound_id, reward_sku_ids: current.reward_sku_ids, custom_message_contents: current.custom_message };
                        planId = 4;
                        c5 = 1;
                        const obj30 = { value: obj5.updateOrder(obj16), done: false };
                        obj5 = id(id1[17]);
                        return obj30;
                      }
                    } catch (tmp67) {
                      if (0 === v0) {
                        c5 = 3;
                        throw tmp67;
                      } else {
                        planId = 1;
                      }
                    }
                  }
                })();
                const nextPromise = promise.then(() => {
                  closure_1_16((arg0) => arg0 + 1);
                });
                const catchPromise = nextPromise.catch((error) => {
                  let obj3;
                  const obj2 = { tags: { source: "NativeGiftContext_syncOrder" }, extra: obj3 };
                  obj3 = { orderId: id, planId, needsPlanSync, needsGiftSync };
                  const obj = BillingUtils;
                  const result = obj.captureBillingException(error, obj2);
                  const obj4 = { error, orderId: id };
                  logger.error("Failed to sync order", obj4);
                  if (ref.current.orderId === id2) {
                    setError(error);
                  }
                  resolveSyncs(false);
                });
                catchPromise.finally(() => {
                  closure_14.current = false;
                  if (ref.current.orderId !== id2) {
                    closure_16((arg0) => arg0 + 1);
                  }
                });
                return () => {
                  c5 = true;
                };
              }
            }
          }
        }
      }
    }
    resolveSyncs(true);
  }, items);
  let obj2 = {
    awaitSyncOrder: externalGatewayFacet.useCallback(() => {
      flush(giftInfoOptions);
      const tmp2 = waitForSync();
      closure_16((arg0) => arg0 + 1);
      return tmp2;
    }, items1)
  };
  items1 = [giftInfoOptions, flush, waitForSync];
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function(basePurchaseAnalytics) {
  let closure_15;
  let first1;
  let first2;
  let giftPromotionRewardSkuIds;
  let handlePremiumPurchase;
  let onClose;
  let planIdForPremiumType;
  let planInterval;
  let premiumType;
  let setCurrentAnalyticsStep;
  let skuId;
  let tmp10;
  let tmp18;
  let tmp20;
  let tmp7;
  const tmp = basePurchaseAnalytics;
  let obj = basePurchaseAnalytics(setCurrentAnalyticsStep[15]);
  const cResult = obj.c(88);
  basePurchaseAnalytics = basePurchaseAnalytics.basePurchaseAnalytics;
  const recipientUserId = basePurchaseAnalytics.recipientUserId;
  ({ premiumType, planInterval, onClose, setCurrentAnalyticsStep } = basePurchaseAnalytics);
  const initialOrder = basePurchaseAnalytics.initialOrder;
  const useState = react.useState;
  if (premiumType == null) {
    premiumType = closure_12.TIER_2;
  }
  let tmp6 = first2(useState(premiumType), 2);
  [tmp7, r10026] = tmp6;
  const useState2 = react.useState;
  if (planInterval == null) {
    planInterval = skuId.YEAR;
  }
  [tmp10, r10032] = first2(useState2(planInterval), 2);
  first2(useState2(planInterval), 2);
  const tmpResult = tmp(setCurrentAnalyticsStep[19]);
  const first = first2(react.useState(tmpResult.useGiftStyles()[0]), 2)[0];
  first2(react.useState(tmpResult.useGiftStyles()[0]), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(setCurrentAnalyticsStep[20]).intl;
    const stringResult = intl.string(tmp(setCurrentAnalyticsStep[20]).t.ZkOo1U);
    cResult[0] = stringResult;
    first1 = stringResult;
  } else {
    first1 = cResult[0];
  }
  const tmp5Result11 = first2(react.useState(first1), 2);
  first2 = tmp5Result11[0];
  [tmp18, r10069] = first2(react.useState(undefined), 2);
  first2(react.useState(undefined), 2);
  [tmp20, r10074] = first2(react.useState(undefined), 2);
  first2(react.useState(undefined), 2);
  const tmp5Result14 = first2(react.useState(undefined), 2);
  [r10078, react] = tmp5Result14;
  [r10084, BadgeDirectoryStore] = first2(react.useState(false), 2);
  first2(react.useState(false), 2);
  const tmp5Result16 = first2(react.useState(null), 2);
  PromotionsStore = tmp5Result16[0];
  let closure_8 = tmp5Result16[1];
  const first3 = first2(react.useState(), 2)[0];
  first2(react.useState(), 2);
  [r10099, AnalyticEvents] = first2(react.useState(null), 2);
  first2(react.useState(null), 2);
  const tmpResult8 = tmp(setCurrentAnalyticsStep[21]);
  const orderContext = tmpResult8.useOrderContext(initialOrder, "NativeGiftContext");
  if (cResult[1] === tmp10) {
    let tmp29;
    if (cResult[2] === tmp7) {
      planIdForPremiumType = cResult[3];
      tmp29 = cResult[4];
    }
    closure_12 = tmp29;
    if (null == handlePremiumPurchase[tmp28]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Invalid subscription plan for gift purchase: " + tmp28);
      throw error;
    } else {
      skuId = tmp33.skuId;
      const order = orderContext.order;
      let payment_gateway;
      if (order != null) {
        const billing_facet = order.billing_facet;
        if (billing_facet != null) {
          payment_gateway = billing_facet.payment_gateway;
        }
      }
      if (cResult[5] === payment_gateway) {
        let tmp42;
        let tmp41;
        let tmp46;
        let tmp49;
        let tmp51;
        const tmpResult9 = tmp(setCurrentAnalyticsStep[24]);
        handlePremiumPurchase = tmpResult9.useHandlePremiumPurchase();
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [PromotionsStore];
          class Ne {
            constructor() {
              return closure_7.getGiftPromotionRewardSkuIds();
            }
          }
          cResult[8] = items;
          cResult[9] = Ne;
          tmp42 = Ne;
          tmp41 = items;
        } else {
          tmp41 = cResult[8];
          tmp42 = cResult[9];
        }
        const tmpResult10 = tmp(setCurrentAnalyticsStep[25]);
        const stateFromStoresArray = tmpResult10.useStateFromStoresArray(tmp41, tmp42);
        const tmpResult11 = tmp(setCurrentAnalyticsStep[26]);
        const fetchClaimableGiftingPromotionRewardSkuIds = tmpResult11.useFetchClaimableGiftingPromotionRewardSkuIds();
        PaymentGateways = null != fetchClaimableGiftingPromotionRewardSkuIds && fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
        const _Symbol2 = Symbol;
        const tmp45 = null != fetchClaimableGiftingPromotionRewardSkuIds && fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { location: "NativeGiftContext" };
          cResult[10] = obj3;
          class Ne {
            constructor() {
              return closure_7.getGiftPromotionRewardSkuIds();
            }
          }
        } else {
          tmp46 = cResult[10];
        }
        const obj12 = recipientUserId(setCurrentAnalyticsStep[27]);
        const enabled = obj12.useConfig(tmp46).enabled;
        if (cResult[11] !== enabled) {
          class He {
            constructor() {
              tmp = enabled;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[28]);
                badge = obj.fetchBadge(closure_0(closure_2[29]).BadgeId.GIFTING);
              }
              return;
            }
          }
          const items1 = [enabled];
          class Ne {
            constructor() {
              return closure_7.getGiftPromotionRewardSkuIds();
            }
          }
          cResult[11] = enabled;
          cResult[12] = He;
          cResult[13] = items1;
          tmp49 = items1;
        } else {
          class He {
            constructor() {
              tmp = enabled;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[28]);
                badge = obj.fetchBadge(closure_0(closure_2[29]).BadgeId.GIFTING);
              }
              return;
            }
          }
          tmp49 = cResult[13];
        }
        const effect = react.useEffect(He, tmp49);
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class He {
            constructor() {
              tmp = enabled;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[28]);
                badge = obj.fetchBadge(closure_0(closure_2[29]).BadgeId.GIFTING);
              }
              return;
            }
          }
          const items2 = [first3];
          class Ne {
            constructor() {
              return closure_7.getGiftPromotionRewardSkuIds();
            }
          }
          cResult[14] = items2;
          tmp51 = items2;
        } else {
          class He {
            constructor() {
              tmp = enabled;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[28]);
                badge = obj.fetchBadge(closure_0(closure_2[29]).BadgeId.GIFTING);
              }
              return;
            }
          }
        }
        if (cResult[15] !== recipientUserId) {
          class We {
            constructor() {
              user = undefined;
              if (null != recipientUserId) {
                tmp3 = closure_9;
                user = closure_9.getUser(tmp);
              }
              return user;
            }
          }
          cResult[15] = recipientUserId;
          class Ne {
            constructor() {
              return closure_7.getGiftPromotionRewardSkuIds();
            }
          }
          cResult[16] = We;
        } else {
          class We {
            constructor() {
              user = undefined;
              if (null != recipientUserId) {
                tmp3 = closure_9;
                user = closure_9.getUser(tmp);
              }
              return user;
            }
          }
        }
        const tmpResult12 = tmp(setCurrentAnalyticsStep[25]);
        const stateFromStores = tmpResult12.useStateFromStores(tmp51, We);
        if (cResult[17] === first2) {
          class We {
            constructor() {
              user = undefined;
              if (null != recipientUserId) {
                tmp3 = closure_9;
                user = closure_9.getUser(tmp);
              }
              return user;
            }
          }
        }
        const obj4 = { giftStyle: first, recipientUserId, customGiftMessage: first2, emojiConfetti: tmp20, soundEffect: tmp18, selectedGiftingPromotionReward: first3, premiumType: tmp7 };
        cResult[17] = first2;
        cResult[18] = tmp20;
        cResult[19] = first;
        cResult[20] = tmp7;
        cResult[21] = recipientUserId;
        cResult[22] = first3;
        cResult[23] = tmp18;
        cResult[24] = obj4;
      }
      let tmp37;
      if (payment_gateway === PaymentGateways.GOOGLE) {
        class We {
          constructor() {
            user = undefined;
            if (null != recipientUserId) {
              tmp3 = closure_9;
              user = closure_9.getUser(tmp);
            }
            return user;
          }
        }
        const obj5 = { external_product_id: tmp29 };
        class Ne {
          constructor() {
            return closure_7.getGiftPromotionRewardSkuIds();
          }
        }
        tmp39[0] = obj5;
        tmp38[0] = tmp39;
        tmp37 = tmp38;
      }
      cResult[5] = payment_gateway;
      cResult[6] = tmp29;
      cResult[7] = tmp37;
    }
  }
  const tmpResult13 = tmp(setCurrentAnalyticsStep[22]);
  planIdForPremiumType = tmpResult13.getPlanIdForPremiumType(tmp7, tmp10);
  const tmpResult14 = tmp(setCurrentAnalyticsStep[23]);
  const productIdForGift = tmpResult14.getProductIdForGift(planIdForPremiumType);
  cResult[1] = tmp10;
  cResult[2] = tmp7;
  cResult[3] = planIdForPremiumType;
  cResult[4] = productIdForGift;
  tmp29 = productIdForGift;
}) : (function(basePurchaseAnalytics) {
  let children;
  let initialOrder;
  let onClose;
  let planInterval;
  let premiumType;
  let setPremiumType;
  let setSoundEffect;
  basePurchaseAnalytics = basePurchaseAnalytics.basePurchaseAnalytics;
  const recipientUserId = basePurchaseAnalytics.recipientUserId;
  ({ premiumType, planInterval, onClose } = basePurchaseAnalytics);
  const setCurrentAnalyticsStep = basePurchaseAnalytics.setCurrentAnalyticsStep;
  premiumType = undefined;
  react = undefined;
  let first1;
  let setPlanInterval;
  let first2;
  let setGiftStyle;
  let first3;
  let setCustomGiftMessage;
  let first4;
  constants = undefined;
  let first5;
  let setEmojiConfetti;
  let first6;
  closure_17 = undefined;
  let first7;
  closure_19 = undefined;
  let first8;
  let closure_21;
  let first9;
  let setSelectedGiftingPromotionReward;
  let first10;
  let closure_25;
  let orderContext;
  let planIdForPremiumType;
  let productIdForGift;
  let skuId;
  let payment_gateway;
  let handlePremiumPurchase;
  let stateFromStoresArray;
  let fetchClaimableGiftingPromotionRewardSkuIds;
  let closure_34;
  let enabled;
  let stateFromStores;
  let closure_37;
  let awaitSyncOrder;
  let callback;
  let callback1;
  let callback2;
  let callback21;
  let obj = react;
  ({ initialOrder, children } = basePurchaseAnalytics);
  const useState = react.useState;
  if (premiumType == null) {
    let tmp = first4;
    premiumType = first4.TIER_2;
  }
  const tmp2 = premiumType;
  const tmp3 = premiumType(useState(premiumType), 2);
  premiumType = tmp3[0];
  react = tmp5;
  const useState2 = obj.useState;
  if (planInterval == null) {
    let tmp6 = constants;
    planInterval = constants.YEAR;
  }
  const tmp2Result = tmp2(useState2(planInterval), 2);
  first1 = tmp2Result[0];
  setPlanInterval = tmp9;
  let obj2 = basePurchaseAnalytics(onClose[19]);
  const tmp2Result10 = tmp2(obj.useState(obj2.useGiftStyles()[0]), 2);
  first2 = tmp2Result10[0];
  setGiftStyle = tmp2Result10[1];
  const useState3 = obj.useState;
  let intl = basePurchaseAnalytics(onClose[20]).intl;
  const tmp2Result11 = tmp2(useState3(intl.string(basePurchaseAnalytics(onClose[20]).t.ZkOo1U)), 2);
  first3 = tmp2Result11[0];
  setCustomGiftMessage = tmp2Result11[1];
  const tmp2Result12 = tmp2(obj.useState(undefined), 2);
  first4 = tmp2Result12[0];
  constants = tmp2Result12[1];
  const tmp2Result13 = tmp2(obj.useState(undefined), 2);
  first5 = tmp2Result13[0];
  setEmojiConfetti = tmp2Result13[1];
  const tmp2Result14 = tmp2(obj.useState(undefined), 2);
  first6 = tmp2Result14[0];
  closure_17 = tmp2Result14[1];
  const tmp2Result15 = tmp2(obj.useState(false), 2);
  first7 = tmp2Result15[0];
  closure_19 = tmp2Result15[1];
  const tmp2Result16 = tmp2(obj.useState(null), 2);
  first8 = tmp2Result16[0];
  closure_21 = tmp26;
  const tmp2Result17 = tmp2(obj.useState(), 2);
  first9 = tmp2Result17[0];
  setSelectedGiftingPromotionReward = tmp29;
  const tmp2Result18 = tmp2(obj.useState(null), 2);
  first10 = tmp2Result18[0];
  closure_25 = tmp2Result18[1];
  const obj3 = basePurchaseAnalytics(onClose[21]);
  orderContext = obj3.useOrderContext(initialOrder, "NativeGiftContext");
  let obj4 = basePurchaseAnalytics(onClose[22]);
  planIdForPremiumType = obj4.getPlanIdForPremiumType(premiumType, first1);
  let obj5 = basePurchaseAnalytics(onClose[23]);
  productIdForGift = obj5.getProductIdForGift(planIdForPremiumType);
  if (null == first5[planIdForPremiumType]) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    let str = "Invalid subscription plan for gift purchase: ";
    const self = this;
    const self2 = this;
    let error = new Error("Invalid subscription plan for gift purchase: " + planIdForPremiumType);
    throw error;
  } else {
    skuId = tmp35.skuId;
    const order = orderContext.order;
    payment_gateway = undefined;
    if (order != null) {
      const billing_facet = order.billing_facet;
      if (billing_facet != null) {
        payment_gateway = billing_facet.payment_gateway;
      }
    }
    let items = [payment_gateway, productIdForGift];
    const memo = obj.useMemo(() => {
      let items;
      let tmp;
      if (payment_gateway === PaymentGateways.GOOGLE) {
        const obj = { line_items: items };
        items = [{ external_product_id: productIdForGift }];
        tmp = obj;
        const obj2 = { external_product_id: productIdForGift };
      }
      return tmp;
    }, items);
    const tmp10Result = basePurchaseAnalytics(onClose[24]);
    handlePremiumPurchase = tmp10Result.useHandlePremiumPurchase();
    const items1 = [setPlanInterval];
    const tmp10Result4 = basePurchaseAnalytics(onClose[25]);
    stateFromStoresArray = tmp10Result4.useStateFromStoresArray(items1, () => setPlanInterval.getGiftPromotionRewardSkuIds());
    const tmp10Result5 = basePurchaseAnalytics(onClose[26]);
    fetchClaimableGiftingPromotionRewardSkuIds = tmp10Result5.useFetchClaimableGiftingPromotionRewardSkuIds();
    let tmp41 = null != fetchClaimableGiftingPromotionRewardSkuIds;
    if (tmp41) {
      let num = 0;
      tmp41 = fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
    }
    closure_34 = tmp41;
    let obj9 = recipientUserId(tmp11[27]);
    enabled = obj9.useConfig({ location: "NativeGiftContext" }).enabled;
    const items2 = [enabled];
    const effect = obj.useEffect(() => {
      if (enabled) {
        const obj = BadgeDirectoryActionCreators;
        const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
      }
    }, items2);
    const items3 = [setGiftStyle];
    const tmp10Result6 = basePurchaseAnalytics(onClose[25]);
    stateFromStores = tmp10Result6.useStateFromStores(items3, () => {
      let user;
      if (null != recipientUserId) {
        user = UserStore.getUser(tmp);
      }
      return user;
    });
    let obj6 = { giftStyle: first2, recipientUserId, customGiftMessage: first3, emojiConfetti: first5, soundEffect: first4, selectedGiftingPromotionReward: first9, premiumType };
    const tmp47 = closure_19(obj6);
    closure_37 = tmp47;
    const items4 = [first8];
    const effect1 = obj.useEffect(() => {
      let intl;
      let intl2;
      if (null != first8) {
        const obj = { title: intl.string(intl3.t.R0RpRX), body: intl2.string(intl3.t.CKsXk3) };
        const show = actions_AlertActionCreatorsDefault.show;
        actions_AlertActionCreatorsDefault;
        intl = intl3.intl;
        intl2 = intl3.intl;
        show(obj);
        closure_21(null);
      }
    }, items4);
    const items5 = [first9, tmp41];
    const effect2 = obj.useEffect(() => {
      if (closure_34) {
        const currentUser = UserStore.getCurrentUser();
        let id;
        const track = AnalyticsUtilsDefault.track;
        const GIFT_PROMOTION_REWARD_SELECTED = AnalyticEvents.GIFT_PROMOTION_REWARD_SELECTED;
        AnalyticsUtilsDefault;
        if (currentUser != null) {
          id = currentUser.id;
        }
        const obj = { user_id: id, reward_sku_id: first9 };
        track(GIFT_PROMOTION_REWARD_SELECTED, obj);
      }
    }, items5);
    let obj7 = { order: null, revision: null, setRevision: null, setOrder: null, planId: planIdForPremiumType, externalGatewayFacet: memo, giftInfoOptions: tmp47, isPurchasing: first7, premiumType, planInterval: first1, setPremiumType: tmp5, setPlanInterval: tmp9, setError: tmp26 };
    ({ order: obj12.order, revision: obj12.revision, setRevision: obj12.setRevision, setOrder: obj12.setOrder } = orderContext);
    awaitSyncOrder = first8(obj7).awaitSyncOrder;
    const items6 = [planIdForPremiumType, recipientUserId, basePurchaseAnalytics];
    callback = obj.useCallback((arg0) => {
      let closure_0 = arg0;
      function handleGiftCodeCreate(giftCode) {
        const fromServer = GiftCodeRecord.createFromServer(giftCode.giftCode);
        if (fromServer.subscriptionPlanId === planIdForPremiumType) {
          closure_17(fromServer);
          let tmp6 = null != recipientUserId;
          if (tmp6) {
            const location_stack = basePurchaseAnalytics.location_stack;
            let hasItem;
            if (location_stack != null) {
              hasItem = location_stack.includes(AnalyticsLocationDefault.PREMIUM_GIFT_INTENT_CARD);
            }
            tmp6 = hasItem;
          }
          if (tmp6) {
            const obj = PremiumGiftingIntentActionCreators;
            const result = obj.logGiftIntentFlowPurchasedGift(recipientUserId);
          }
          if (closure_0 != null) {
            closure_0();
          }
          const obj2 = DispatcherDefault;
          obj2.unsubscribe("GIFT_CODE_CREATE", handleGiftCodeCreate);
        }
        closure_19(false);
      }
      return handleGiftCodeCreate;
    }, items6);
    const useCallback = obj.useCallback;
    setCurrentAnalyticsStep((error) => {
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*(arg0) {
        let obj7;
        let obj9;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                const obj11 = recipientUserId(onClose[34]);
                const subscription = obj11.subscribe("GIFT_CODE_CREATE", error);
                const obj12 = error(onClose[35]);
                if (!obj12.isAndroid()) {
                  if (null != closure_1_26.orderId) {
                    c4 = 1;
                    const obj5 = { orderId: closure_1_26.orderId, skuId };
                    logger.info("Starting order signing with pre-created order", obj5);
                    c5 = 2;
                    c6 = 1;
                    const obj6 = { value: obj7.markOrderAsSigningInProgress(closure_1_26.orderId), done: false };
                    obj7 = error(onClose[17]);
                    return obj6;
                  }
                }
              }
            } else if (1 === c5) {
              c4 = 0;
              error = closure_3;
              const obj8 = { tags: { source: "NativeGiftContext_handlePurchaseComplete_sign" }, extra: obj9 };
              obj9 = { skuId, orderId: closure_1_26.orderId };
              const obj2 = error(onClose[18]);
              const result = obj2.captureBillingException(error, obj8);
              const obj10 = { error, skuId, orderId: closure_1_26.orderId };
              logger.error("Failed to sign order in purchase completion", obj10);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp28) {
            closure_3 = tmp28;
            if (0 === c4) {
              c6 = 3;
              throw tmp28;
            } else {
              c5 = 1;
            }
          }
        }
      })();
    });
    const items7 = [skuId, orderContext.orderId];
    callback1 = useCallback(function() {
      return closure_0(...arguments);
    }, items7);
    const items8 = [setCurrentAnalyticsStep];
    callback2 = obj.useCallback((arg0) => {
      const obj = DispatcherDefault;
      obj.unsubscribe("GIFT_CODE_CREATE", arg0);
      setCurrentAnalyticsStep(PremiumAnalyticsUtils.PaymentFlowStep.PLAN_SELECT);
      closure_19(false);
    }, items8);
    const useCallback2 = obj.useCallback;
    let closure_0 = setCurrentAnalyticsStep(function*(arg0) {
      let closure_3;
      let intl;
      let obj17;
      let obj9;
      closure_0 = arg0;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_1;
              let closure_2;
              if (null != nextTier.getNextTier(closure_0(onClose[29]).BadgeId.GIFTING)) {
                const singleRequirementProgress = nextTier.getSingleRequirementProgress(closure_0(onClose[29]).BadgeId.GIFTING);
                let current;
                if (singleRequirementProgress != null) {
                  current = singleRequirementProgress.current;
                }
                let c1 = current;
                if (current == null) {
                  c1 = null;
                }
                closure_1_25(c1);
              } else {
                closure_1_25(null);
              }
              closure_1_19(true);
              c4 = 1;
              c5 = 1;
              const obj6 = { value: awaitSyncOrder(), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (value) {
              closure_2 = callback(closure_0);
              let obj = closure_0(onClose[35]);
              if (obj.isAndroid()) {
                function handleGPlayUpdatePurchaseAction(isActivePurchase) {
                  if (isActivePurchase.isActivePurchase) {
                    const obj = c1(closure_2[34]);
                    obj.unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
                    if (isActivePurchase.billingResult !== constants.OK) {
                      closure_2_41(closure_2);
                    }
                  }
                }
                const obj2 = recipientUserId(onClose[34]);
                const str = "GPLAY_UPDATE_PURCHASE_STATE";
                const subscription = obj2.subscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
              }
              tmp(closure_0(onClose[36]).PaymentFlowStep.REVIEW);
              const obj8 = {
                productId,
                isGift: true,
                analyticsLoadId: null,
                analyticsLocation: null,
                analyticsLocations: null,
                allowPlanChange: false,
                giftInfoOptions,
                onPurchaseComplete: function() {
                          return closure_1_1(...arguments);
                        },
                onPurchaseError() {
                          return closure_2_41(closure_1_2);
                        },
                orderId: orderId.orderId,
                analyticsData: obj9
              };
              ({ load_id: obj3.analyticsLoadId, location: obj3.analyticsLocation, location_stack: obj3.analyticsLocations } = closure_0);
              closure_1 = setCurrentAnalyticsStep(function*() {
                let c0;
                yield closure_1_40(closure_2_2);
                return value;
              });
              obj9 = { load_id: closure_0.load_id, succeededOnlyFields: obj17 };
              obj17 = { is_custom_message_edited: first3 !== intl.string(closure_0(onClose[20]).t.ZkOo1U), is_custom_emoji_sound_available: false };
              intl = closure_0(onClose[20]).intl;
              handlePremiumPurchase(obj8);
            } else {
              const tmp8 = closure_1_19(false);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp51) {
          c5 = 3;
          throw tmp51;
        }
      }
    });
    const items9 = [awaitSyncOrder, callback, setCurrentAnalyticsStep, tmp47, handlePremiumPurchase, productIdForGift, basePurchaseAnalytics, callback1, callback2, orderContext.orderId, first3];
    callback21 = useCallback2(function() {
      return closure_0(...arguments);
    }, items9);
    const items10 = [orderContext, recipientUserId, stateFromStores, first2, premiumType, first1, productIdForGift, first3, first4, first5, first6, first7, first10, basePurchaseAnalytics, setCurrentAnalyticsStep, tmp5, tmp9, onClose, callback21, stateFromStoresArray, fetchClaimableGiftingPromotionRewardSkuIds, first9, tmp2Result17[1]];
    let obj8 = {
      value: obj.useMemo(() => {
          const obj = { recipientUserId, recipientUser: stateFromStores, giftStyle: first2, premiumType, planInterval: first1, productId: productIdForGift, customGiftMessage: first3, soundEffect: first4, emojiConfetti: first5, giftCodeRecord: first6, isPurchasing: first7, prePurchaseGiftingBadgeProgress: first10, basePurchaseAnalytics, setCurrentAnalyticsStep, setPremiumType, setPlanInterval, setGiftStyle, setCustomGiftMessage, setSoundEffect, setEmojiConfetti, onClose, onPurchase: callback21, allRewards: stateFromStoresArray, claimableRewards: fetchClaimableGiftingPromotionRewardSkuIds, selectedGiftingPromotionReward: first9, setSelectedGiftingPromotionReward };
          const merged = Object.assign(orderContext);
          return obj;
        }, items10),
      children
    };
    return first6(first7.Provider, obj8);
  }
});
let result = size.fileFinishedImporting("modules/payments/native/NativeGiftContext.tsx");

export const NativeGiftContextProvider = tmp8;
export const useNativeGiftContext = tmp6;
export const useForwardedNativeGiftContext = tmp7;