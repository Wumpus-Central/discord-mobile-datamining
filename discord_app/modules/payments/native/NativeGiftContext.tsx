// === Module 10430: NativeGiftContext ===

// Module 10430 (NativeGiftContext)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import BillingUtils from "BillingUtils" /* 4543 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import ContextUtilsDefault from "ContextUtils" /* 6934 */;
import BadgeId from "BadgeId" /* 7855 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7868 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10394 */;
import PremiumGiftingIntentActionCreators from "PremiumGiftingIntentActionCreators" /* 10472 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;
import PromotionsStore from "PromotionsStore" /* 10396 */;
import GiftCodeRecord from "GiftCodeRecord" /* 10431 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
fn(6740).GPlayBillingResult;
const PremiumConstants = fn(1379);
({ PremiumTypes: closure_12, SubscriptionIntervalTypes: map1, SubscriptionPlanInfo: closure_14 } = PremiumConstants);
let PaymentGateways = fn(1096).PaymentGateways;
let jsx = fn(21).jsx;
let closure_17 = new LoggerDefault("NativeGiftContext");
const tmp4 = new LoggerDefault("NativeGiftContext");
[closure_18, tmp6, tmp7] = ContextUtilsDefault();
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ giftStyle, recipientUserId, customGiftMessage, emojiConfetti, soundEffect, selectedGiftingPromotionReward, premiumType } = arg0);
  if (emojiConfetti != null) {
    const id = emojiConfetti.id;
  }
  if (emojiConfetti != null) {
    const surrogates = emojiConfetti.surrogates;
  }
  if (soundEffect != null) {
    const soundId = soundEffect.soundId;
  }
  if (cResult[0] === premiumType) {
    if (cResult[1] === selectedGiftingPromotionReward) {
      if (cResult[3] === customGiftMessage) {
        if (cResult[4] === giftStyle) {
          if (cResult[5] === recipientUserId) {
            if (cResult[6] === id) {
              if (cResult[7] === surrogates) {
                if (cResult[8] === soundId) {
                  if (cResult[9] === tmp2) {
                    let tmp5 = cResult[10];
                  }
                  return tmp5;
                }
              }
            }
          }
        }
      }
      const obj2 = { gift_style: giftStyle, recipient_id: recipientUserId, custom_message: customGiftMessage, emoji_id: id, emoji_name: surrogates, sound_id: soundId, reward_sku_ids: cResult[2] };
      cResult[3] = customGiftMessage;
      cResult[4] = giftStyle;
      cResult[5] = recipientUserId;
      cResult[6] = id;
      cResult[7] = surrogates;
      cResult[8] = soundId;
      cResult[9] = cResult[2];
      cResult[10] = obj2;
      tmp5 = obj2;
    }
  }
  if (null == selectedGiftingPromotionReward) {
    let items = [];
    cResult[0] = premiumType;
    cResult[1] = selectedGiftingPromotionReward;
    cResult[2] = items;
  }
  const items1 = [selectedGiftingPromotionReward];
  items = items1;
}) : ((giftStyle) => {
  giftStyle = giftStyle.giftStyle;
  const recipientUserId = giftStyle.recipientUserId;
  const customGiftMessage = giftStyle.customGiftMessage;
  const emojiConfetti = giftStyle.emojiConfetti;
  const soundEffect = giftStyle.soundEffect;
  const selectedGiftingPromotionReward = giftStyle.selectedGiftingPromotionReward;
  const premiumType = giftStyle.premiumType;
  let items = [giftStyle, recipientUserId, customGiftMessage, , , , , ];
  let id;
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
  return selectedGiftingPromotionReward.useMemo(() => {
    const obj = { gift_style: giftStyle, recipient_id: recipientUserId, custom_message: customGiftMessage, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null };
    let id;
    if (emojiConfetti != null) {
      id = emojiConfetti.id;
    }
    obj.emoji_id = id;
    let surrogates;
    if (emojiConfetti != null) {
      surrogates = emojiConfetti.surrogates;
    }
    obj.emoji_name = surrogates;
    let soundId;
    if (soundEffect != null) {
      soundId = soundEffect.soundId;
    }
    obj.sound_id = soundId;
    if (null != selectedGiftingPromotionReward) {
      if (premiumType === __initData.TIER_2) {
        const items = [tmp5];
      }
      obj.reward_sku_ids = [];
      return obj;
    }
  }, items);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((order) => {
  const cResult = order(setRevision[15]).c(44);
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
    if (cResult[1] === premiumType) {
      let tmp3 = cResult[2];
    }
    closure_13 = externalGatewayFacet.useRef(tmp3);
    externalGatewayFacet.useRef(false);
    externalGatewayFacet.useRef(null);
    [tmp7, tmp8] = planId(externalGatewayFacet.useState(0), 2);
    jsx = tmp8;
    const tmp10 = revision(setRevision[16])(tmp8);
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
                                  if (cResult[18] === waitForPause) {
                                    let tmp11 = cResult[19];
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
                                                                  if (cResult[36] === waitForPause) {
                                                                    let tmp12 = cResult[37];
                                                                  }
                                                                  const effect = obj3.useEffect(tmp11, tmp12);
                                                                  if (cResult[38] === flush) {
                                                                    if (cResult[39] === giftInfoOptions) {
                                                                      if (cResult[40] === waitForSync) {
                                                                        let tmp14 = cResult[41];
                                                                      }
                                                                      if (cResult[42] !== tmp14) {
                                                                        let obj2 = { awaitSyncOrder: tmp14 };
                                                                        class A {
                                                                          constructor() {
                                                                            tmp = flush(giftInfoOptions);
                                                                            tmp2 = waitForSync();
                                                                            tmp3 = closure_16((arg0) => arg0 + 1);
                                                                            return tmp2;
                                                                          }
                                                                        }
                                                                        cResult[43] = obj2;
                                                                        let tmp15 = obj2;
                                                                      } else {
                                                                        tmp15 = cResult[43];
                                                                      }
                                                                      return tmp15;
                                                                    }
                                                                  }
                                                                  class A {
                                                                    constructor() {
                                                                      tmp = flush(giftInfoOptions);
                                                                      tmp2 = waitForSync();
                                                                      tmp3 = closure_16((arg0) => arg0 + 1);
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
      let id;
      if (id != null) {
        id = tmp.id;
      }
      let first;
      if (id != null) {
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
        const sku_id = first.sku_id;
      }
      let subscription_plan_id;
      if (first != null) {
        subscription_plan_id = first.subscription_plan_id;
      }
      if (subscription_plan_id == null) {
        subscription_plan_id = null;
      }
      let tmp6 = null != tmp;
      if (tmp6) {
        tmp6 = ref.current.orderId !== tmp.id;
      }
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
                  if (!tmp22) {
                    resolveSyncs(true);
                  }
                }
                if (!isPurchasing) {
                  c5 = false;
                  let id2;
                  if (tmp != null) {
                    id2 = tmp.id;
                  }
                  tmp23.current = true;
                  isPurchasing = tmp12;
                  const promise = setOrder(function*() {
                    if (c5 === 2) {
                      c5 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp6 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "IconComponent", done: "IconComponent" };
                      }
                    } else {
                      try {
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
                            closure_1 = tmp3;
                            closure_0 = tmp7;
                            closure_128_0 = undefined;
                            closure_128_1 = undefined;
                            if (closure_3) {
                              let v0 = 1;
                              if (null != c5) {
                                const obj4 = { orderId: id, expectedRevision, orderLineItems: null, externalGatewayFacet: null };
                                const obj6 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: null };
                                ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                                obj6.subscription_plan_id = planId;
                                const items = [obj6];
                                obj4.orderLineItems = items;
                                obj4.externalGatewayFacet = tmp57;
                                planId = 2;
                                c5 = 1;
                                const obj7 = { value: id(id1[17]).patchOrder(obj4), done: false };
                                return obj7;
                              } else {
                                const obj8 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                                planId = 3;
                                c5 = 1;
                                const obj10 = { value: id(id1[17]).patchOrderLineItem(obj8), done: false };
                                return obj10;
                              }
                            } else if (closure_129_4) {
                              ref2.current = giftInfo;
                              const obj11 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                              const obj13 = { recipient_id: giftInfo.recipient_id, gift_style: giftInfo.gift_style, emoji_id: giftInfo.emoji_id, emoji_name: giftInfo.emoji_name, sound_id: giftInfo.sound_id, reward_sku_ids: giftInfo.reward_sku_ids, custom_message_contents: giftInfo.custom_message };
                              obj11.giftInfo = obj13;
                              obj11.expectedRevision = revision;
                              planId = 4;
                              c5 = 1;
                              const obj15 = { value: id(id1[17]).updateOrder(obj11), done: false };
                              return obj15;
                            } else {
                              c5 = 3;
                            }
                          }
                        } else if (1 === tmp7) {
                          v0 = 0;
                          closure_128_1 = tmp70;
                          if (!closure_129_5) {
                            setPremiumType(ref.current.planSelection.premiumType);
                            setPlanInterval(ref.current.planSelection.planInterval);
                          }
                          throw closure_128_1;
                        } else {
                          if (2 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj16 = { value, done: true };
                              return obj16;
                            } else {
                              closure_128_0 = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "IconComponent", done: "IconComponent" };
                              } else {
                                revision = closure_128_0.revision;
                                v0(closure_128_0);
                              }
                            }
                          } else if (3 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj17 = { value, done: true };
                              return obj17;
                            } else {
                              revision = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "IconComponent", done: "IconComponent" };
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
                            revision = value;
                            if (ref.current.orderId === closure_129_6) {
                              ref.current.giftInfo = giftInfo;
                              tmp70(revision);
                            }
                          }
                          ref.current.planId = planId;
                          const obj30 = { premiumType, planInterval };
                          ref.current.planSelection = obj30;
                          tmp70(revision);
                          v0 = 0;
                        }
                        c5 = 3;
                        return { value: "IconComponent", done: "IconComponent" };
                      } catch (tmp70) {
                        if (tmp4 === v0) {
                          c5 = tmp2;
                          throw tmp70;
                        } else {
                          planId = tmp;
                        }
                      }
                    }
                  })();
                  const nextPromise = setOrder(function*() {
                    if (c5 === 2) {
                      c5 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp6 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "IconComponent", done: "IconComponent" };
                      }
                    } else {
                      try {
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
                            closure_1 = tmp3;
                            closure_0 = tmp7;
                            closure_128_0 = undefined;
                            closure_128_1 = undefined;
                            if (closure_3) {
                              let v0 = 1;
                              if (null != c5) {
                                const obj4 = { orderId: id, expectedRevision, orderLineItems: null, externalGatewayFacet: null };
                                const obj6 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: null };
                                ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                                obj6.subscription_plan_id = planId;
                                const items = [obj6];
                                obj4.orderLineItems = items;
                                obj4.externalGatewayFacet = tmp57;
                                planId = 2;
                                c5 = 1;
                                const obj7 = { value: id(id1[17]).patchOrder(obj4), done: false };
                                return obj7;
                              } else {
                                const obj8 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                                planId = 3;
                                c5 = 1;
                                const obj10 = { value: id(id1[17]).patchOrderLineItem(obj8), done: false };
                                return obj10;
                              }
                            } else if (closure_129_4) {
                              ref2.current = giftInfo;
                              const obj11 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                              const obj13 = { recipient_id: giftInfo.recipient_id, gift_style: giftInfo.gift_style, emoji_id: giftInfo.emoji_id, emoji_name: giftInfo.emoji_name, sound_id: giftInfo.sound_id, reward_sku_ids: giftInfo.reward_sku_ids, custom_message_contents: giftInfo.custom_message };
                              obj11.giftInfo = obj13;
                              obj11.expectedRevision = revision;
                              planId = 4;
                              c5 = 1;
                              const obj15 = { value: id(id1[17]).updateOrder(obj11), done: false };
                              return obj15;
                            } else {
                              c5 = 3;
                            }
                          }
                        } else if (1 === tmp7) {
                          v0 = 0;
                          closure_128_1 = tmp70;
                          if (!closure_129_5) {
                            setPremiumType(ref.current.planSelection.premiumType);
                            setPlanInterval(ref.current.planSelection.planInterval);
                          }
                          throw closure_128_1;
                        } else {
                          if (2 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj16 = { value, done: true };
                              return obj16;
                            } else {
                              closure_128_0 = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "IconComponent", done: "IconComponent" };
                              } else {
                                revision = closure_128_0.revision;
                                v0(closure_128_0);
                              }
                            }
                          } else if (3 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj17 = { value, done: true };
                              return obj17;
                            } else {
                              revision = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "IconComponent", done: "IconComponent" };
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
                            revision = value;
                            if (ref.current.orderId === closure_129_6) {
                              ref.current.giftInfo = giftInfo;
                              tmp70(revision);
                            }
                          }
                          ref.current.planId = planId;
                          const obj30 = { premiumType, planInterval };
                          ref.current.planSelection = obj30;
                          tmp70(revision);
                          v0 = 0;
                        }
                        c5 = 3;
                        return { value: "IconComponent", done: "IconComponent" };
                      } catch (tmp70) {
                        if (tmp4 === v0) {
                          c5 = tmp2;
                          throw tmp70;
                        } else {
                          planId = tmp;
                        }
                      }
                    }
                  })().then(() => {
                    closure_1_16((arg0) => arg0 + 1);
                  });
                  setOrder(function*() {
                    if (c5 === 2) {
                      c5 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp6 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "IconComponent", done: "IconComponent" };
                      }
                    } else {
                      try {
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
                            closure_1 = tmp3;
                            closure_0 = tmp7;
                            closure_128_0 = undefined;
                            closure_128_1 = undefined;
                            if (closure_3) {
                              let v0 = 1;
                              if (null != c5) {
                                const obj4 = { orderId: id, expectedRevision, orderLineItems: null, externalGatewayFacet: null };
                                const obj6 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: null };
                                ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                                obj6.subscription_plan_id = planId;
                                const items = [obj6];
                                obj4.orderLineItems = items;
                                obj4.externalGatewayFacet = tmp57;
                                planId = 2;
                                c5 = 1;
                                const obj7 = { value: id(id1[17]).patchOrder(obj4), done: false };
                                return obj7;
                              } else {
                                const obj8 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                                planId = 3;
                                c5 = 1;
                                const obj10 = { value: id(id1[17]).patchOrderLineItem(obj8), done: false };
                                return obj10;
                              }
                            } else if (closure_129_4) {
                              ref2.current = giftInfo;
                              const obj11 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                              const obj13 = { recipient_id: giftInfo.recipient_id, gift_style: giftInfo.gift_style, emoji_id: giftInfo.emoji_id, emoji_name: giftInfo.emoji_name, sound_id: giftInfo.sound_id, reward_sku_ids: giftInfo.reward_sku_ids, custom_message_contents: giftInfo.custom_message };
                              obj11.giftInfo = obj13;
                              obj11.expectedRevision = revision;
                              planId = 4;
                              c5 = 1;
                              const obj15 = { value: id(id1[17]).updateOrder(obj11), done: false };
                              return obj15;
                            } else {
                              c5 = 3;
                            }
                          }
                        } else if (1 === tmp7) {
                          v0 = 0;
                          closure_128_1 = tmp70;
                          if (!closure_129_5) {
                            setPremiumType(ref.current.planSelection.premiumType);
                            setPlanInterval(ref.current.planSelection.planInterval);
                          }
                          throw closure_128_1;
                        } else {
                          if (2 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj16 = { value, done: true };
                              return obj16;
                            } else {
                              closure_128_0 = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "IconComponent", done: "IconComponent" };
                              } else {
                                revision = closure_128_0.revision;
                                v0(closure_128_0);
                              }
                            }
                          } else if (3 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj17 = { value, done: true };
                              return obj17;
                            } else {
                              revision = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "IconComponent", done: "IconComponent" };
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
                            revision = value;
                            if (ref.current.orderId === closure_129_6) {
                              ref.current.giftInfo = giftInfo;
                              tmp70(revision);
                            }
                          }
                          ref.current.planId = planId;
                          const obj30 = { premiumType, planInterval };
                          ref.current.planSelection = obj30;
                          tmp70(revision);
                          v0 = 0;
                        }
                        c5 = 3;
                        return { value: "IconComponent", done: "IconComponent" };
                      } catch (tmp70) {
                        if (tmp4 === v0) {
                          c5 = tmp2;
                          throw tmp70;
                        } else {
                          planId = tmp;
                        }
                      }
                    }
                  })().then(() => {
                    closure_1_16((arg0) => arg0 + 1);
                  }).catch((error) => {
                    const obj2 = { tags: { source: "NativeGiftContext_syncOrder" }, extra: { orderId: id, planId, needsPlanSync, needsGiftSync } };
                    const result = BillingUtils.captureBillingException(error, obj2);
                    logger.error("Failed to sync order", { error, orderId: id });
                    if (ref.current.orderId === id2) {
                      setError(error);
                    }
                    resolveSyncs(false);
                    const obj3 = { orderId: id, planId, needsPlanSync, needsGiftSync };
                    const obj4 = { error, orderId: id };
                  }).finally(() => {
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
    obj3 = externalGatewayFacet;
    let tmp6 = planId(externalGatewayFacet.useState(0), 2);
  }
  let obj4 = { orderId: "a", planId: "trackedActionData", planSelection: { premiumType, planInterval }, giftInfo: 10 };
  cResult[0] = planInterval;
  cResult[1] = premiumType;
  cResult[2] = obj4;
  tmp3 = obj4;
}) : ((order) => {
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
  let obj = { orderId: "a", planId: "trackedActionData", planSelection: { premiumType, planInterval }, giftInfo: 10 };
  closure_13 = externalGatewayFacet.useRef(obj);
  externalGatewayFacet.useRef(false);
  externalGatewayFacet.useRef(null);
  const tmp = planId(externalGatewayFacet.useState(0), 2);
  closure_16 = tmp2;
  const tmp3 = revision(setRevision[16])(tmp[1]);
  const waitForPause = tmp3.waitForPause;
  const flush = tmp3.flush;
  const waitForSync = tmp3.waitForSync;
  const resolveSyncs = tmp3.resolveSyncs;
  const isAwaitingSync = tmp3.isAwaitingSync;
  let items = [order, revision, planId, externalGatewayFacet, giftInfoOptions, isPurchasing, premiumType, planInterval, setPremiumType, setPlanInterval, setRevision, setOrder, setError, tmp[0], resolveSyncs, waitForPause, isAwaitingSync];
  const effect = externalGatewayFacet.useEffect(() => {
    let id;
    if (id != null) {
      id = tmp.id;
    }
    let first;
    if (id != null) {
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
      const sku_id = first.sku_id;
    }
    let subscription_plan_id;
    if (first != null) {
      subscription_plan_id = first.subscription_plan_id;
    }
    if (subscription_plan_id == null) {
      subscription_plan_id = null;
    }
    let tmp6 = null != tmp;
    if (tmp6) {
      tmp6 = ref.current.orderId !== tmp.id;
    }
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
                if (!tmp22) {
                  resolveSyncs(true);
                }
              }
              if (!isPurchasing) {
                c5 = false;
                let id2;
                if (tmp != null) {
                  id2 = tmp.id;
                }
                tmp23.current = true;
                isPurchasing = tmp12;
                const promise = setOrder(function*() {
                  if (c5 === 2) {
                    c5 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp6 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: "IconComponent" };
                    }
                  } else {
                    try {
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
                          closure_1 = tmp3;
                          closure_0 = tmp7;
                          closure_128_0 = undefined;
                          if (closure_3) {
                            let v0 = 1;
                            if (null != c5) {
                              const obj4 = { orderId: id, expectedRevision, orderLineItems: null, externalGatewayFacet: null };
                              const obj6 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: null };
                              ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                              obj6.subscription_plan_id = planId;
                              const items = [obj6];
                              obj4.orderLineItems = items;
                              obj4.externalGatewayFacet = tmp57;
                              planId = 2;
                              c5 = 1;
                              const obj7 = { value: id(id1[17]).patchOrder(obj4), done: false };
                              return obj7;
                            } else {
                              const obj8 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                              planId = 3;
                              c5 = 1;
                              const obj10 = { value: id(id1[17]).patchOrderLineItem(obj8), done: false };
                              return obj10;
                            }
                          } else if (closure_129_4) {
                            ref2.current = giftInfo;
                            const obj11 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                            const obj13 = { recipient_id: giftInfo.recipient_id, gift_style: giftInfo.gift_style, emoji_id: giftInfo.emoji_id, emoji_name: giftInfo.emoji_name, sound_id: giftInfo.sound_id, reward_sku_ids: giftInfo.reward_sku_ids, custom_message_contents: giftInfo.custom_message };
                            obj11.giftInfo = obj13;
                            obj11.expectedRevision = revision;
                            planId = 4;
                            c5 = 1;
                            const obj15 = { value: id(id1[17]).updateOrder(obj11), done: false };
                            return obj15;
                          } else {
                            c5 = 3;
                          }
                        }
                      } else if (1 === tmp7) {
                        v0 = 0;
                        closure_128_1 = tmp70;
                        if (!closure_129_5) {
                          setPremiumType(ref.current.planSelection.premiumType);
                          setPlanInterval(ref.current.planSelection.planInterval);
                        }
                        throw closure_128_1;
                      } else {
                        if (2 === tmp7) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v0 = 0;
                            c5 = 3;
                            const obj16 = { value, done: true };
                            return obj16;
                          } else {
                            closure_128_0 = value;
                            if (ref.current.orderId !== closure_129_6) {
                              v0 = 0;
                              c5 = 3;
                              return { value: "IconComponent", done: "IconComponent" };
                            } else {
                              revision = closure_128_0.revision;
                              v0(closure_128_0);
                            }
                          }
                        } else if (3 === tmp7) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v0 = 0;
                            c5 = 3;
                            const obj17 = { value, done: true };
                            return obj17;
                          } else {
                            revision = value;
                            if (ref.current.orderId !== closure_129_6) {
                              v0 = 0;
                              c5 = 3;
                              return { value: "IconComponent", done: "IconComponent" };
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
                          revision = value;
                          if (ref.current.orderId === closure_129_6) {
                            ref.current.giftInfo = giftInfo;
                            tmp70(revision);
                          }
                        }
                        ref.current.planId = planId;
                        const obj30 = { premiumType, planInterval };
                        ref.current.planSelection = obj30;
                        tmp70(revision);
                        v0 = 0;
                      }
                      c5 = 3;
                      return { value: "IconComponent", done: "IconComponent" };
                    } catch (tmp70) {
                      if (tmp4 === v0) {
                        c5 = tmp2;
                        throw tmp70;
                      } else {
                        planId = tmp;
                      }
                    }
                  }
                })();
                const nextPromise = setOrder(function*() {
                  if (c5 === 2) {
                    c5 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp6 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: "IconComponent" };
                    }
                  } else {
                    try {
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
                          closure_1 = tmp3;
                          closure_0 = tmp7;
                          closure_128_0 = undefined;
                          if (closure_3) {
                            let v0 = 1;
                            if (null != c5) {
                              const obj4 = { orderId: id, expectedRevision, orderLineItems: null, externalGatewayFacet: null };
                              const obj6 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: null };
                              ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                              obj6.subscription_plan_id = planId;
                              const items = [obj6];
                              obj4.orderLineItems = items;
                              obj4.externalGatewayFacet = tmp57;
                              planId = 2;
                              c5 = 1;
                              const obj7 = { value: id(id1[17]).patchOrder(obj4), done: false };
                              return obj7;
                            } else {
                              const obj8 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                              planId = 3;
                              c5 = 1;
                              const obj10 = { value: id(id1[17]).patchOrderLineItem(obj8), done: false };
                              return obj10;
                            }
                          } else if (closure_129_4) {
                            ref2.current = giftInfo;
                            const obj11 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                            const obj13 = { recipient_id: giftInfo.recipient_id, gift_style: giftInfo.gift_style, emoji_id: giftInfo.emoji_id, emoji_name: giftInfo.emoji_name, sound_id: giftInfo.sound_id, reward_sku_ids: giftInfo.reward_sku_ids, custom_message_contents: giftInfo.custom_message };
                            obj11.giftInfo = obj13;
                            obj11.expectedRevision = revision;
                            planId = 4;
                            c5 = 1;
                            const obj15 = { value: id(id1[17]).updateOrder(obj11), done: false };
                            return obj15;
                          } else {
                            c5 = 3;
                          }
                        }
                      } else if (1 === tmp7) {
                        v0 = 0;
                        closure_128_1 = tmp70;
                        if (!closure_129_5) {
                          setPremiumType(ref.current.planSelection.premiumType);
                          setPlanInterval(ref.current.planSelection.planInterval);
                        }
                        throw closure_128_1;
                      } else {
                        if (2 === tmp7) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v0 = 0;
                            c5 = 3;
                            const obj16 = { value, done: true };
                            return obj16;
                          } else {
                            closure_128_0 = value;
                            if (ref.current.orderId !== closure_129_6) {
                              v0 = 0;
                              c5 = 3;
                              return { value: "IconComponent", done: "IconComponent" };
                            } else {
                              revision = closure_128_0.revision;
                              v0(closure_128_0);
                            }
                          }
                        } else if (3 === tmp7) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v0 = 0;
                            c5 = 3;
                            const obj17 = { value, done: true };
                            return obj17;
                          } else {
                            revision = value;
                            if (ref.current.orderId !== closure_129_6) {
                              v0 = 0;
                              c5 = 3;
                              return { value: "IconComponent", done: "IconComponent" };
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
                          revision = value;
                          if (ref.current.orderId === closure_129_6) {
                            ref.current.giftInfo = giftInfo;
                            tmp70(revision);
                          }
                        }
                        ref.current.planId = planId;
                        const obj30 = { premiumType, planInterval };
                        ref.current.planSelection = obj30;
                        tmp70(revision);
                        v0 = 0;
                      }
                      c5 = 3;
                      return { value: "IconComponent", done: "IconComponent" };
                    } catch (tmp70) {
                      if (tmp4 === v0) {
                        c5 = tmp2;
                        throw tmp70;
                      } else {
                        planId = tmp;
                      }
                    }
                  }
                })().then(() => {
                  closure_1_16((arg0) => arg0 + 1);
                });
                setOrder(function*() {
                  if (c5 === 2) {
                    c5 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp6 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: "IconComponent" };
                    }
                  } else {
                    try {
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
                          closure_1 = tmp3;
                          closure_0 = tmp7;
                          closure_128_0 = undefined;
                          if (closure_3) {
                            let v0 = 1;
                            if (null != c5) {
                              const obj4 = { orderId: id, expectedRevision, orderLineItems: null, externalGatewayFacet: null };
                              const obj6 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: null };
                              ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                              obj6.subscription_plan_id = planId;
                              const items = [obj6];
                              obj4.orderLineItems = items;
                              obj4.externalGatewayFacet = tmp57;
                              planId = 2;
                              c5 = 1;
                              const obj7 = { value: id(id1[17]).patchOrder(obj4), done: false };
                              return obj7;
                            } else {
                              const obj8 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                              planId = 3;
                              c5 = 1;
                              const obj10 = { value: id(id1[17]).patchOrderLineItem(obj8), done: false };
                              return obj10;
                            }
                          } else if (closure_129_4) {
                            ref2.current = giftInfo;
                            const obj11 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                            const obj13 = { recipient_id: giftInfo.recipient_id, gift_style: giftInfo.gift_style, emoji_id: giftInfo.emoji_id, emoji_name: giftInfo.emoji_name, sound_id: giftInfo.sound_id, reward_sku_ids: giftInfo.reward_sku_ids, custom_message_contents: giftInfo.custom_message };
                            obj11.giftInfo = obj13;
                            obj11.expectedRevision = revision;
                            planId = 4;
                            c5 = 1;
                            const obj15 = { value: id(id1[17]).updateOrder(obj11), done: false };
                            return obj15;
                          } else {
                            c5 = 3;
                          }
                        }
                      } else if (1 === tmp7) {
                        v0 = 0;
                        closure_128_1 = tmp70;
                        if (!closure_129_5) {
                          setPremiumType(ref.current.planSelection.premiumType);
                          setPlanInterval(ref.current.planSelection.planInterval);
                        }
                        throw closure_128_1;
                      } else {
                        if (2 === tmp7) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v0 = 0;
                            c5 = 3;
                            const obj16 = { value, done: true };
                            return obj16;
                          } else {
                            closure_128_0 = value;
                            if (ref.current.orderId !== closure_129_6) {
                              v0 = 0;
                              c5 = 3;
                              return { value: "IconComponent", done: "IconComponent" };
                            } else {
                              revision = closure_128_0.revision;
                              v0(closure_128_0);
                            }
                          }
                        } else if (3 === tmp7) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v0 = 0;
                            c5 = 3;
                            const obj17 = { value, done: true };
                            return obj17;
                          } else {
                            revision = value;
                            if (ref.current.orderId !== closure_129_6) {
                              v0 = 0;
                              c5 = 3;
                              return { value: "IconComponent", done: "IconComponent" };
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
                          revision = value;
                          if (ref.current.orderId === closure_129_6) {
                            ref.current.giftInfo = giftInfo;
                            tmp70(revision);
                          }
                        }
                        ref.current.planId = planId;
                        const obj30 = { premiumType, planInterval };
                        ref.current.planSelection = obj30;
                        tmp70(revision);
                        v0 = 0;
                      }
                      c5 = 3;
                      return { value: "IconComponent", done: "IconComponent" };
                    } catch (tmp70) {
                      if (tmp4 === v0) {
                        c5 = tmp2;
                        throw tmp70;
                      } else {
                        planId = tmp;
                      }
                    }
                  }
                })().then(() => {
                  closure_1_16((arg0) => arg0 + 1);
                }).catch((error) => {
                  const obj2 = { tags: { source: "NativeGiftContext_syncOrder" }, extra: { orderId: id, planId, needsPlanSync, needsGiftSync } };
                  const result = BillingUtils.captureBillingException(error, obj2);
                  logger.error("Failed to sync order", { error, orderId: id });
                  if (ref.current.orderId === id2) {
                    setError(error);
                  }
                  resolveSyncs(false);
                  const obj3 = { orderId: id, planId, needsPlanSync, needsGiftSync };
                  const obj4 = { error, orderId: id };
                }).finally(() => {
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
  let obj2 = { awaitSyncOrder: null };
  const items1 = [giftInfoOptions, flush, waitForSync];
  obj2.awaitSyncOrder = externalGatewayFacet.useCallback(() => {
    flush(giftInfoOptions);
    closure_16((arg0) => arg0 + 1);
    return waitForSync();
  }, items1);
  return obj2;
});
ReactCompilerGating = fn(558);
const importDefaultResultResult = _slicedToArray(ContextUtilsDefault(), 3);
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/NativeGiftContext.tsx");

export const NativeGiftContextProvider = ReactCompilerGating.isReactCompilerEnabled() ? ((basePurchaseAnalytics) => {
  const cResult = basePurchaseAnalytics(setCurrentAnalyticsStep[15]).c(88);
  basePurchaseAnalytics = basePurchaseAnalytics.basePurchaseAnalytics;
  const recipientUserId = basePurchaseAnalytics.recipientUserId;
  ({ premiumType, planInterval, onClose, setCurrentAnalyticsStep } = basePurchaseAnalytics);
  if (premiumType == null) {
    premiumType = TIER_2.TIER_2;
  }
  let obj = basePurchaseAnalytics(setCurrentAnalyticsStep[15]);
  [tmp7, r10026] = first2(noop.useState(premiumType), 2);
  if (planInterval == null) {
    planInterval = skuId.YEAR;
  }
  let tmp6 = first2(noop.useState(premiumType), 2);
  [tmp10, r10032] = first2(noop.useState(planInterval), 2);
  const tmp5Result = first2(noop.useState(planInterval), 2);
  const tmpResult = basePurchaseAnalytics(setCurrentAnalyticsStep[19]);
  const first = first2(noop.useState(basePurchaseAnalytics(setCurrentAnalyticsStep[19]).useGiftStyles()[0]), 2)[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(setCurrentAnalyticsStep[20]).intl;
    const stringResult = intl.string(tmp(setCurrentAnalyticsStep[20]).t.ZkOo1U);
    cResult[0] = stringResult;
    let first1 = stringResult;
  } else {
    first1 = cResult[0];
  }
  const tmp5Result10 = first2(noop.useState(basePurchaseAnalytics(setCurrentAnalyticsStep[19]).useGiftStyles()[0]), 2);
  first2 = first2(noop.useState(first1), 2)[0];
  const tmp5Result11 = first2(noop.useState(first1), 2);
  [tmp18, r10069] = first2(noop.useState(undefined), 2);
  const tmp5Result12 = first2(noop.useState(undefined), 2);
  [tmp20, r10074] = first2(noop.useState(undefined), 2);
  const tmp5Result13 = first2(noop.useState(undefined), 2);
  [r10078, noop] = first2(noop.useState(undefined), 2);
  const tmp5Result14 = first2(noop.useState(undefined), 2);
  [r10084, BadgeDirectoryStore] = first2(noop.useState(false), 2);
  const tmp5Result16 = first2(noop.useState(null), 2);
  PromotionsStore = tmp5Result16[0];
  closure_8 = tmp5Result16[1];
  const tmp5Result15 = first2(noop.useState(false), 2);
  const first3 = first2(noop.useState(), 2)[0];
  const tmp5Result17 = first2(noop.useState(), 2);
  [r10099, AnalyticEvents] = first2(noop.useState(null), 2);
  const tmp5Result18 = first2(noop.useState(null), 2);
  const orderContext = basePurchaseAnalytics(setCurrentAnalyticsStep[21]).useOrderContext(basePurchaseAnalytics.initialOrder, "NativeGiftContext");
  if (cResult[1] === tmp10) {
    if (cResult[2] === tmp7) {
      let planIdForPremiumType = cResult[3];
      let tmp29 = cResult[4];
    }
    TIER_2 = tmp29;
    if (null == handlePremiumPurchase[tmp28]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
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
        handlePremiumPurchase = tmp(setCurrentAnalyticsStep[24]).useHandlePremiumPurchase();
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
          let tmp42 = Ne;
          let tmp41 = items;
        } else {
          tmp41 = cResult[8];
          tmp42 = cResult[9];
        }
        const tmpResult9 = tmp(setCurrentAnalyticsStep[24]);
        const stateFromStoresArray = tmp(setCurrentAnalyticsStep[25]).useStateFromStoresArray(tmp41, tmp42);
        const tmpResult10 = tmp(setCurrentAnalyticsStep[25]);
        const fetchClaimableGiftingPromotionRewardSkuIds = tmp(setCurrentAnalyticsStep[26]).useFetchClaimableGiftingPromotionRewardSkuIds();
        let tmp45 = null != fetchClaimableGiftingPromotionRewardSkuIds;
        if (tmp45) {
          tmp45 = fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
        }
        PaymentGateways = tmp45;
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          cResult[10] = { location: "NativeGiftContext" };
          class Ne {
            constructor() {
              return closure_7.getGiftPromotionRewardSkuIds();
            }
          }
          let obj3 = { location: "NativeGiftContext" };
        } else {
          const tmp46 = cResult[10];
        }
        const tmpResult11 = tmp(setCurrentAnalyticsStep[26]);
        const enabled = recipientUserId(setCurrentAnalyticsStep[27]).useConfig(tmp46).enabled;
        if (cResult[11] !== enabled) {
          class He {
            constructor() {
              if (enabled) {
                tmp = closure_0;
                tmp2 = closure_2;
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
          let tmp49 = items1;
        } else {
          class He {
            constructor() {
              if (enabled) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[28]);
                badge = obj.fetchBadge(closure_0(closure_2[29]).BadgeId.GIFTING);
              }
              return;
            }
          }
          tmp49 = cResult[13];
        }
        const effect = noop.useEffect(He, tmp49);
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class He {
            constructor() {
              if (enabled) {
                tmp = closure_0;
                tmp2 = closure_2;
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
          const tmp51 = items2;
        } else {
          class He {
            constructor() {
              if (enabled) {
                tmp = closure_0;
                tmp2 = closure_2;
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
        let obj12 = recipientUserId(setCurrentAnalyticsStep[27]);
        const stateFromStores = tmp(setCurrentAnalyticsStep[25]).useStateFromStores(tmp51, We);
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
        let obj4 = { giftStyle: first, recipientUserId, customGiftMessage: first2, emojiConfetti: tmp20, soundEffect: tmp18, selectedGiftingPromotionReward: first3, premiumType: tmp7 };
        cResult[17] = first2;
        cResult[18] = tmp20;
        cResult[19] = first;
        cResult[20] = tmp7;
        cResult[21] = recipientUserId;
        cResult[22] = first3;
        cResult[23] = tmp18;
        cResult[24] = obj4;
        const tmpResult12 = tmp(setCurrentAnalyticsStep[25]);
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
        let obj5 = { external_product_id: tmp29 };
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
  const tmpResult8 = basePurchaseAnalytics(setCurrentAnalyticsStep[21]);
  planIdForPremiumType = basePurchaseAnalytics(setCurrentAnalyticsStep[22]).getPlanIdForPremiumType(tmp7, tmp10);
  const tmpResult13 = basePurchaseAnalytics(setCurrentAnalyticsStep[22]);
  const productIdForGift = basePurchaseAnalytics(setCurrentAnalyticsStep[23]).getProductIdForGift(planIdForPremiumType);
  cResult[1] = tmp10;
  cResult[2] = tmp7;
  cResult[3] = planIdForPremiumType;
  cResult[4] = productIdForGift;
  tmp29 = productIdForGift;
  const tmpResult14 = basePurchaseAnalytics(setCurrentAnalyticsStep[23]);
}) : ((basePurchaseAnalytics) => {
  basePurchaseAnalytics = basePurchaseAnalytics.basePurchaseAnalytics;
  _require = basePurchaseAnalytics;
  const recipientUserId = basePurchaseAnalytics.recipientUserId;
  ({ premiumType, planInterval, onClose } = basePurchaseAnalytics);
  const setCurrentAnalyticsStep = basePurchaseAnalytics.setCurrentAnalyticsStep;
  premiumType = undefined;
  noop = undefined;
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
  closure_21 = undefined;
  let first9;
  let setSelectedGiftingPromotionReward;
  let first10;
  closure_25 = undefined;
  let orderContext;
  let planIdForPremiumType;
  let productIdForGift;
  let skuId;
  let payment_gateway;
  let handlePremiumPurchase;
  let stateFromStoresArray;
  let fetchClaimableGiftingPromotionRewardSkuIds;
  closure_34 = undefined;
  let enabled;
  let stateFromStores;
  closure_37 = undefined;
  let awaitSyncOrder;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  ({ initialOrder, children } = basePurchaseAnalytics);
  if (premiumType == null) {
    premiumType = first4.TIER_2;
  }
  const tmp3 = premiumType(noop.useState(premiumType), 2);
  premiumType = tmp3[0];
  noop = tmp5;
  if (planInterval == null) {
    planInterval = constants.YEAR;
  }
  const tmp2Result = premiumType(noop.useState(planInterval), 2);
  first1 = tmp2Result[0];
  setPlanInterval = tmp9;
  const tmp2Result10 = premiumType(noop.useState(require("useGiftStyles").useGiftStyles()[0]), 2);
  first2 = tmp2Result10[0];
  setGiftStyle = tmp2Result10[1];
  let intl = require("util").intl;
  const tmp2Result11 = premiumType(noop.useState(intl.string(require("util").t.ZkOo1U)), 2);
  first3 = tmp2Result11[0];
  setCustomGiftMessage = tmp2Result11[1];
  const tmp2Result12 = premiumType(noop.useState(undefined), 2);
  first4 = tmp2Result12[0];
  constants = tmp2Result12[1];
  const tmp2Result13 = premiumType(noop.useState(undefined), 2);
  first5 = tmp2Result13[0];
  setEmojiConfetti = tmp2Result13[1];
  const tmp2Result14 = premiumType(noop.useState(undefined), 2);
  first6 = tmp2Result14[0];
  closure_17 = tmp2Result14[1];
  const tmp2Result15 = premiumType(noop.useState(false), 2);
  first7 = tmp2Result15[0];
  closure_19 = tmp2Result15[1];
  const tmp2Result16 = premiumType(noop.useState(null), 2);
  first8 = tmp2Result16[0];
  closure_21 = tmp26;
  const tmp2Result17 = premiumType(noop.useState(), 2);
  first9 = tmp2Result17[0];
  setSelectedGiftingPromotionReward = tmp29;
  const tmp2Result18 = premiumType(noop.useState(null), 2);
  first10 = tmp2Result18[0];
  closure_25 = tmp2Result18[1];
  let obj2 = require("useGiftStyles");
  orderContext = require("useOrderContext").useOrderContext(initialOrder, "NativeGiftContext");
  let obj3 = require("useOrderContext");
  planIdForPremiumType = require("PremiumUtils").getPlanIdForPremiumType(premiumType, first1);
  let obj4 = require("PremiumUtils");
  productIdForGift = require("ProductIds").getProductIdForGift(planIdForPremiumType);
  if (null == first5[planIdForPremiumType]) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid subscription plan for gift purchase: " + planIdForPremiumType);
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
      let tmp;
      if (payment_gateway === PaymentGateways.GOOGLE) {
        const obj = { line_items: null };
        const obj2 = { external_product_id: productIdForGift };
        const items = [obj2];
        obj.line_items = items;
        tmp = obj;
      }
      return tmp;
    }, items);
    handlePremiumPurchase = tmp10(tmp11[24]).useHandlePremiumPurchase();
    const tmp10Result = tmp10(tmp11[24]);
    const items1 = [setPlanInterval];
    stateFromStoresArray = tmp10(tmp11[25]).useStateFromStoresArray(items1, () => setPlanInterval.getGiftPromotionRewardSkuIds());
    const tmp10Result4 = tmp10(tmp11[25]);
    fetchClaimableGiftingPromotionRewardSkuIds = tmp10(tmp11[26]).useFetchClaimableGiftingPromotionRewardSkuIds();
    let tmp41 = null != fetchClaimableGiftingPromotionRewardSkuIds;
    if (tmp41) {
      tmp41 = fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
    }
    closure_34 = tmp41;
    const tmp10Result5 = tmp10(tmp11[26]);
    enabled = recipientUserId(tmp11[27]).useConfig({ location: "NativeGiftContext" }).enabled;
    const items2 = [enabled];
    const effect = obj.useEffect(() => {
      if (enabled) {
        const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
      }
    }, items2);
    let obj9 = recipientUserId(tmp11[27]);
    const items3 = [setGiftStyle];
    stateFromStores = tmp10(tmp11[25]).useStateFromStores(items3, () => {
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
      if (null != first8) {
        const obj2 = { title: null, body: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.R0RpRX);
        const intl2 = util.intl;
        obj2.body = intl2.string(util.t.CKsXk3);
        actions_AlertActionCreatorsDefault.show(obj2);
        closure_21(null);
      }
    }, items4);
    const items5 = [first9, tmp41];
    const effect2 = obj.useEffect(() => {
      if (closure_34) {
        const currentUser = UserStore.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        const obj2 = { user_id: id, reward_sku_id: first9 };
        AnalyticsUtilsDefault.track(AnalyticEvents.GIFT_PROMOTION_REWARD_SELECTED, obj2);
      }
    }, items5);
    let obj7 = { order: null, revision: null, setRevision: null, setOrder: null, planId: null, externalGatewayFacet: null, giftInfoOptions: null, isPurchasing: null, premiumType: null, planInterval: null, setPremiumType: null, setPlanInterval: null, setError: null };
    ({ order: obj12.order, revision: obj12.revision, setRevision: obj12.setRevision, setOrder: obj12.setOrder } = orderContext);
    obj7.planId = planIdForPremiumType;
    obj7.externalGatewayFacet = memo;
    obj7.giftInfoOptions = tmp47;
    obj7.isPurchasing = first7;
    obj7.premiumType = premiumType;
    obj7.planInterval = first1;
    obj7.setPremiumType = tmp5;
    obj7.setPlanInterval = tmp9;
    obj7.setError = tmp26;
    awaitSyncOrder = first8(obj7).awaitSyncOrder;
    const items6 = [planIdForPremiumType, recipientUserId, basePurchaseAnalytics];
    callback = obj.useCallback((arg0) => {
      closure_0 = arg0;
      function handleGiftCodeCreate(giftCode) {
        const fromServer = GiftCodeRecord.createFromServer(giftCode.giftCode);
        if (fromServer.subscriptionPlanId === planIdForPremiumType) {
          closure_17(fromServer);
          let tmp6 = null != recipientUserId;
          if (tmp6) {
            const location_stack = closure_0.location_stack;
            let hasItem;
            if (location_stack != null) {
              hasItem = location_stack.includes(AnalyticsLocationDefault.PREMIUM_GIFT_INTENT_CARD);
            }
            tmp6 = hasItem;
          }
          if (tmp6) {
            const result = PremiumGiftingIntentActionCreators.logGiftIntentFlowPurchasedGift(recipientUserId);
          }
          if (closure_0 != null) {
            closure_0();
          }
          DispatcherDefault.unsubscribe("GIFT_CODE_CREATE", handleGiftCodeCreate);
        }
        closure_19(false);
      }
      return handleGiftCodeCreate;
    }, items6);
    setCurrentAnalyticsStep(function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              const subscription = recipientUserId(onClose[34]).subscribe("GIFT_CODE_CREATE", basePurchaseAnalytics);
              const obj11 = recipientUserId(onClose[34]);
              if (!obj12.isAndroid()) {
                if (null != orderContext.orderId) {
                  c4 = 1;
                  const obj5 = { orderId: orderContext.orderId, skuId };
                  logger.info("Starting order signing with pre-created order", obj5);
                  c5 = 2;
                  c6 = 1;
                  const obj6 = { value: basePurchaseAnalytics(onClose[17]).markOrderAsSigningInProgress(orderContext.orderId), done: false };
                  return obj6;
                }
              }
              obj12 = basePurchaseAnalytics(onClose[35]);
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              closure_129_0 = closure_3;
              const obj8 = { tags: { source: "NativeGiftContext_handlePurchaseComplete_sign" }, extra: null };
              const obj9 = { skuId, orderId: orderContext.orderId };
              obj8.extra = obj9;
              const result = basePurchaseAnalytics(onClose[18]).captureBillingException(closure_129_0, obj8);
              const obj10 = { error: closure_129_0, skuId, orderId: orderContext.orderId };
              logger.error("Failed to sign order in purchase completion", obj10);
              const obj2 = basePurchaseAnalytics(onClose[18]);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c6 = 3;
        } catch (tmp31) {
          closure_3 = tmp31;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp31;
          } else {
            c5 = tmp;
          }
        }
      }
    });
    const items7 = [skuId, orderContext.orderId];
    callback1 = obj.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items7);
    const items8 = [setCurrentAnalyticsStep];
    callback2 = obj.useCallback((arg0) => {
      DispatcherDefault.unsubscribe("GIFT_CODE_CREATE", arg0);
      setCurrentAnalyticsStep(PremiumAnalyticsUtils.PaymentFlowStep.PLAN_SELECT);
      closure_19(false);
    }, items8);
    _require = setCurrentAnalyticsStep(function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
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
              closure_2 = tmp3;
              closure_130_0 = basePurchaseAnalytics;
              closure_130_1 = undefined;
              closure_130_2 = undefined;
              let obj7 = first1;
              let tmp50 = null;
              if (null != first1.getNextTier(basePurchaseAnalytics(onClose[29]).BadgeId.GIFTING)) {
                const singleRequirementProgress = obj7.getSingleRequirementProgress(basePurchaseAnalytics(onClose[29]).BadgeId.GIFTING);
                obj7 = singleRequirementProgress == tmp50;
                let current;
                if (!obj7) {
                  current = singleRequirementProgress.current;
                }
                c1 = current;
                if (current == tmp50) {
                  c1 = tmp50;
                }
                closure_1_25(c1);
              } else {
                closure_1_25(tmp50);
              }
              tmp50 = closure_1_19(true);
              awaitSyncOrder();
              c4 = 1;
              c5 = 1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            if (value) {
              closure_130_2 = callback(closure_130_0);
              if (obj.isAndroid()) {
                closure_130_3 = function handleGPlayUpdatePurchaseAction(isActivePurchase) {
                  if (isActivePurchase.isActivePurchase) {
                    recipientUserId(onClose[34]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", closure_1_3);
                    if (isActivePurchase.billingResult !== constants.OK) {
                      callback2(closure_1_2);
                    }
                    const obj = recipientUserId(onClose[34]);
                  }
                };
                const subscription = recipientUserId(onClose[34]).subscribe("GPLAY_UPDATE_PURCHASE_STATE", closure_130_3);
                const obj2 = recipientUserId(onClose[34]);
              }
              tmp2(basePurchaseAnalytics(onClose[36]).PaymentFlowStep.REVIEW);
              const obj8 = { productId, isGift: true, analyticsLoadId: null, analyticsLocation: null, analyticsLocations: null, allowPlanChange: false, giftInfoOptions: null, onPurchaseComplete: null, onPurchaseError: null, orderId: null, analyticsData: null };
              ({ load_id: obj3.analyticsLoadId, location: obj3.analyticsLocation, location_stack: obj3.analyticsLocations } = basePurchaseAnalytics);
              obj8.giftInfoOptions = giftInfoOptions;
              closure_130_1 = setCurrentAnalyticsStep(function*() {
                yield closure_1_40(closure_2_2);
                return value;
              });
              obj8.onPurchaseComplete = function() {
                const self = this;
                const apply = closure_1_1.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              obj8.onPurchaseError = function onPurchaseError() {
                return callback2(closure_1_2);
              };
              obj8.orderId = orderId.orderId;
              const obj9 = { load_id: basePurchaseAnalytics.load_id, succeededOnlyFields: null };
              const obj15 = { is_custom_message_edited: null, is_custom_emoji_sound_available: false };
              const intl = basePurchaseAnalytics(onClose[20]).intl;
              obj15.is_custom_message_edited = first3 !== intl.string(basePurchaseAnalytics(onClose[20]).t.ZkOo1U);
              obj9.succeededOnlyFields = obj15;
              obj8.analyticsData = obj9;
              handlePremiumPurchase(obj8);
              obj = basePurchaseAnalytics(onClose[35]);
            } else {
              closure_1_19(false);
            }
            c5 = 3;
          }
        } catch (tmp53) {
          c5 = tmp;
          throw tmp53;
        }
      }
    });
    const items9 = [awaitSyncOrder, callback, setCurrentAnalyticsStep, tmp47, handlePremiumPurchase, productIdForGift, basePurchaseAnalytics, callback1, callback2, orderContext.orderId, first3];
    callback3 = obj.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items9);
    const items10 = [orderContext, recipientUserId, stateFromStores, first2, premiumType, first1, productIdForGift, first3, first4, first5, first6, first7, first10, basePurchaseAnalytics, setCurrentAnalyticsStep, tmp5, tmp9, onClose, callback3, stateFromStoresArray, fetchClaimableGiftingPromotionRewardSkuIds, first9, tmp29];
    let obj8 = {
      value: obj.useMemo(() => {
          const obj = {};
          const merged = Object.assign(orderContext);
          obj.recipientUserId = recipientUserId;
          obj.recipientUser = stateFromStores;
          obj.giftStyle = first2;
          obj.premiumType = premiumType;
          obj.planInterval = first1;
          obj.productId = productIdForGift;
          obj.customGiftMessage = first3;
          obj.soundEffect = first4;
          obj.emojiConfetti = first5;
          obj.giftCodeRecord = first6;
          obj.isPurchasing = first7;
          obj.prePurchaseGiftingBadgeProgress = first10;
          obj.basePurchaseAnalytics = basePurchaseAnalytics;
          obj.setCurrentAnalyticsStep = setCurrentAnalyticsStep;
          obj.setPremiumType = setPremiumType;
          obj.setPlanInterval = setPlanInterval;
          obj.setGiftStyle = setGiftStyle;
          obj.setCustomGiftMessage = setCustomGiftMessage;
          obj.setSoundEffect = setSoundEffect;
          obj.setEmojiConfetti = setEmojiConfetti;
          obj.onClose = onClose;
          obj.onPurchase = callback3;
          obj.allRewards = stateFromStoresArray;
          obj.claimableRewards = fetchClaimableGiftingPromotionRewardSkuIds;
          obj.selectedGiftingPromotionReward = first9;
          obj.setSelectedGiftingPromotionReward = setSelectedGiftingPromotionReward;
          return obj;
        }, items10),
      children
    };
    return first6(first7.Provider, obj8);
  }
  let obj5 = require("ProductIds");
});
export const useNativeGiftContext = tmp6;
export const useForwardedNativeGiftContext = tmp7;