// === Module 10699: NativeGiftContext ===

// Module 10699 (NativeGiftContext)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import BillingUtils from "BillingUtils" /* 4233 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import ContextUtilsDefault from "ContextUtils" /* 7428 */;
import BadgeId from "BadgeId" /* 8184 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8197 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10663 */;
import PremiumGiftingIntentActionCreators from "PremiumGiftingIntentActionCreators" /* 10744 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8192 */;
import PromotionsStore from "PromotionsStore" /* 10665 */;
import GiftCodeRecord from "GiftCodeRecord" /* 10700 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
fn(7238).GPlayBillingResult;
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_12, SubscriptionIntervalTypes: map1, SubscriptionPlanInfo: closure_14 } = PremiumConstants);
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
let closure_17 = new LoggerDefault("NativeGiftContext");
const tmp4 = new LoggerDefault("NativeGiftContext");
[closure_18, tmp6, tmp7] = _slicedToArray(ContextUtilsDefault(), 3);
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/NativeGiftContext.tsx");

export const NativeGiftContextProvider = function NativeGiftContextProvider(basePurchaseAnalytics) {
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
  closure_9 = undefined;
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
  let memo1;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let obj = noop;
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
  let tmp2Result = tmp2(obj.useState(planInterval), 2);
  first1 = tmp2Result[0];
  setPlanInterval = tmp9;
  let obj1 = require("useGiftStyles");
  tmp2Result = tmp2(obj.useState(obj1.useGiftStyles()[0]), 2);
  first2 = tmp2Result[0];
  closure_9 = tmp2Result[1];
  let intl = require("util").intl;
  const tmp2Result1 = premiumType(obj.useState(intl.string(require("util").t.ZkOo1U)), 2);
  first3 = tmp2Result1[0];
  setCustomGiftMessage = tmp2Result1[1];
  const tmp2Result2 = premiumType(obj.useState(undefined), 2);
  first4 = tmp2Result2[0];
  constants = tmp2Result2[1];
  const tmp2Result3 = premiumType(obj.useState(undefined), 2);
  first5 = tmp2Result3[0];
  setEmojiConfetti = tmp2Result3[1];
  const tmp2Result4 = premiumType(obj.useState(undefined), 2);
  first6 = tmp2Result4[0];
  closure_17 = tmp2Result4[1];
  const tmp2Result5 = premiumType(obj.useState(false), 2);
  first7 = tmp2Result5[0];
  closure_19 = tmp2Result5[1];
  const tmp2Result6 = premiumType(obj.useState(null), 2);
  first8 = tmp2Result6[0];
  closure_21 = tmp26;
  const tmp2Result7 = premiumType(obj.useState(), 2);
  first9 = tmp2Result7[0];
  setSelectedGiftingPromotionReward = tmp29;
  const tmp2Result8 = premiumType(obj.useState(null), 2);
  first10 = tmp2Result8[0];
  closure_25 = tmp2Result8[1];
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
    const order2 = orderContext.order;
    payment_gateway = undefined;
    if (order2 != null) {
      const billing_facet = order2.billing_facet;
      if (billing_facet != null) {
        payment_gateway = billing_facet.payment_gateway;
      }
    }
    let items = [payment_gateway, productIdForGift];
    const memo = obj.useMemo(() => {
      let tmp;
      if (payment_gateway === PaymentGateways.GOOGLE) {
        let obj = { line_items: null };
        obj = { external_product_id: productIdForGift };
        const items = [obj];
        obj.line_items = items;
        tmp = obj;
      }
      return tmp;
    }, items);
    let tmp10Result = tmp10(tmp11[21]);
    handlePremiumPurchase = tmp10Result.useHandlePremiumPurchase();
    tmp10Result = tmp10(tmp11[22]);
    const items1 = [setPlanInterval];
    stateFromStoresArray = tmp10Result.useStateFromStoresArray(items1, () => setPlanInterval.getGiftPromotionRewardSkuIds());
    fetchClaimableGiftingPromotionRewardSkuIds = tmp10(tmp11[23]).useFetchClaimableGiftingPromotionRewardSkuIds();
    let tmp41 = null != fetchClaimableGiftingPromotionRewardSkuIds;
    if (tmp41) {
      tmp41 = fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
    }
    closure_34 = tmp41;
    const tmp10Result1 = tmp10(tmp11[23]);
    enabled = recipientUserId(tmp11[24]).useConfig({ location: "NativeGiftContext" }).enabled;
    const items2 = [enabled];
    const effect = obj.useEffect(() => {
      if (enabled) {
        const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
      }
    }, items2);
    let obj9 = recipientUserId(tmp11[24]);
    const items3 = [closure_9];
    stateFromStores = tmp10(tmp11[22]).useStateFromStores(items3, () => {
      let user;
      if (null != recipientUserId) {
        user = UserStore.getUser(tmp);
      }
      return user;
    });
    closure_129_0 = first2;
    closure_129_1 = recipientUserId;
    closure_129_2 = first3;
    closure_129_3 = first5;
    closure_129_4 = first4;
    closure_129_5 = first9;
    closure_129_6 = premiumType;
    const items4 = [first2, recipientUserId, first3, , , , , ];
    let id;
    if (first5 != null) {
      id = first5.id;
    }
    items4[3] = id;
    let surrogates;
    if (first5 != null) {
      surrogates = first5.surrogates;
    }
    items4[4] = surrogates;
    let soundId;
    if (first4 != null) {
      soundId = first4.soundId;
    }
    items4[5] = soundId;
    items4[6] = first9;
    items4[7] = premiumType;
    memo1 = obj.useMemo(() => {
      const obj = { gift_style, recipient_id: recipientUserId, custom_message: onClose, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null };
      let id;
      if (setCurrentAnalyticsStep != null) {
        id = tmp.id;
      }
      obj.emoji_id = id;
      let surrogates;
      if (setCurrentAnalyticsStep != null) {
        surrogates = tmp.surrogates;
      }
      obj.emoji_name = surrogates;
      let soundId;
      if (first != null) {
        soundId = first.soundId;
      }
      obj.sound_id = soundId;
      if (null != closure_5) {
        if (first1 === TIER_2.TIER_2) {
          const items = [tmp5];
        }
        obj.reward_sku_ids = [];
        return obj;
      }
    }, items4);
    const items5 = [first8];
    const effect1 = obj.useEffect(() => {
      if (null != first8) {
        const obj = { title: null, body: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.R0RpRX);
        const intl2 = util.intl;
        obj.body = intl2.string(util.t.CKsXk3);
        obj.show(obj);
        closure_21(null);
      }
    }, items5);
    const items6 = [first9, tmp41];
    const effect2 = obj.useEffect(() => {
      if (closure_34) {
        const currentUser = UserStore.getCurrentUser();
        let obj = AnalyticsUtilsDefault;
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        obj = { user_id: id, reward_sku_id: first9 };
        obj.track(AnalyticEvents.GIFT_PROMOTION_REWARD_SELECTED, obj);
      }
    }, items6);
    ({ order, revision, setRevision, setOrder } = orderContext);
    closure_130_0 = order;
    closure_130_1 = revision;
    closure_130_2 = setRevision;
    closure_130_3 = setOrder;
    closure_130_4 = planIdForPremiumType;
    closure_130_5 = memo;
    closure_130_6 = memo1;
    closure_130_7 = first7;
    closure_130_8 = premiumType;
    closure_130_9 = first1;
    closure_130_10 = tmp5;
    closure_130_11 = tmp9;
    closure_130_12 = tmp26;
    obj = { orderId: "a", planId: 150, planSelection: "center", giftInfo: "center" };
    obj = { premiumType, planInterval: first1 };
    obj.planSelection = obj;
    closure_130_13 = obj.useRef(obj);
    closure_130_14 = obj.useRef(false);
    const tmp2Result9 = tmp2(obj.useState(0), 2);
    closure_130_15 = tmp2Result9[1];
    const items7 = [order, revision, planIdForPremiumType, memo, memo1, first7, premiumType, first1, tmp5, tmp9, setRevision, setOrder, tmp26, tmp2Result9[0]];
    const effect3 = obj.useEffect(() => {
      let id;
      if (id != null) {
        id = tmp.id;
      }
      let planId;
      if (id != null) {
        const order_line_items = tmp.order_line_items;
        if (order_line_items != null) {
          planId = order_line_items[0];
        }
      }
      let id1;
      if (planId != null) {
        id1 = planId.id;
      }
      if (planId != null) {
        const sku_id = planId.sku_id;
      }
      let subscription_plan_id;
      if (planId != null) {
        subscription_plan_id = planId.subscription_plan_id;
      }
      if (subscription_plan_id == null) {
        subscription_plan_id = null;
      }
      let tmp6 = null != tmp;
      if (tmp6) {
        tmp6 = setSoundEffect.current.orderId !== tmp.id;
      }
      if (tmp6) {
        setSoundEffect.current.orderId = tmp.id;
        setSoundEffect.current.planId = subscription_plan_id;
        let obj = { premiumType: first2, planInterval };
        setSoundEffect.current.planSelection = obj;
      }
      if (null != id) {
        if (null != planId) {
          if (null != id1) {
            if (null != planId) {
              if (!closure_7) {
                if (!first5.current) {
                  let tmp14 = setSoundEffect.current.planId !== needsGiftSync;
                  if (tmp14) {
                    let tmp15 = null == sku_id;
                    if (!tmp15) {
                      skuId = undefined;
                      if (first5[tmp13] != null) {
                        skuId = tmp17.skuId;
                      }
                      tmp15 = skuId === sku_id;
                    }
                    tmp14 = tmp15;
                  }
                  const needsPlanSync = tmp14;
                  needsGiftSync = tmp20;
                  c5 = false;
                  let id2;
                  if (tmp != null) {
                    id2 = tmp.id;
                  }
                  tmp11.current = true;
                  closure_7 = tmp24;
                  const promise = setCurrentAnalyticsStep(function*(arg0, value) {
                    if (c5 === 2) {
                      c5 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp6 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        let obj = { value, done: true };
                        return obj;
                      } else {
                        return { value: "HermesInternal", done: null };
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
                            obj = { value, done: true };
                            return obj;
                          } else {
                            closure_1 = tmp3;
                            closure_0 = tmp7;
                            closure_128_0 = undefined;
                            if (closure_3) {
                              let v0 = 1;
                              if (null != c5) {
                                let obj11 = id(id1[14]);
                                const obj1 = { orderId: id, expectedRevision, orderLineItems: null, externalGatewayFacet: null };
                                const obj2 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: null };
                                ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                                obj2.subscription_plan_id = planId;
                                const items = [obj2];
                                obj1.orderLineItems = items;
                                obj1.externalGatewayFacet = tmp55;
                                planId = 2;
                                c5 = 1;
                                const obj3 = { value: obj11.patchOrder(obj1), done: false };
                                return obj3;
                              } else {
                                let obj8 = id(id1[14]);
                                let obj4 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                                planId = 3;
                                c5 = 1;
                                const obj5 = { value: obj8.patchOrderLineItem(obj4), done: false };
                                return obj5;
                              }
                            } else if (closure_129_4) {
                              obj4 = id(id1[14]);
                              const obj6 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                              const obj7 = { recipient_id: giftInfo.recipient_id, gift_style: giftInfo.gift_style, emoji_id: giftInfo.emoji_id, emoji_name: giftInfo.emoji_name, sound_id: giftInfo.sound_id, reward_sku_ids: giftInfo.reward_sku_ids, custom_message_contents: giftInfo.custom_message };
                              obj6.giftInfo = obj7;
                              obj6.expectedRevision = revision;
                              planId = 4;
                              c5 = 1;
                              obj8 = { value: obj4.updateOrder(obj6), done: false };
                              return obj8;
                            } else {
                              c5 = 3;
                            }
                          }
                        } else if (1 === tmp7) {
                          v0 = 0;
                          closure_128_1 = tmp68;
                          if (!closure_129_5) {
                            first3(ref.current.planSelection.premiumType);
                            setCustomGiftMessage(ref.current.planSelection.planInterval);
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
                              const obj9 = { value, done: true };
                              return obj9;
                            } else {
                              closure_128_0 = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "HermesInternal", done: null };
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
                              const obj10 = { value, done: true };
                              return obj10;
                            } else {
                              revision = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "HermesInternal", done: null };
                              }
                            }
                          } else if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            obj = { value, done: true };
                            return obj;
                          } else {
                            revision = value;
                            if (ref.current.orderId === closure_129_6) {
                              ref.current.giftInfo = giftInfo;
                              tmp68(revision);
                            }
                          }
                          ref.current.planId = planId;
                          obj11 = { premiumType, planInterval };
                          ref.current.planSelection = obj11;
                          tmp68(revision);
                          v0 = 0;
                        }
                        c5 = 3;
                        return { value: "HermesInternal", done: null };
                      } catch (tmp68) {
                        if (tmp4 === v0) {
                          c5 = tmp2;
                          throw tmp68;
                        } else {
                          planId = tmp;
                        }
                      }
                    }
                  })();
                  setCurrentAnalyticsStep(function*(arg0, value) {
                    if (c5 === 2) {
                      c5 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp6 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        let obj = { value, done: true };
                        return obj;
                      } else {
                        return { value: "HermesInternal", done: null };
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
                            obj = { value, done: true };
                            return obj;
                          } else {
                            closure_1 = tmp3;
                            closure_0 = tmp7;
                            closure_128_0 = undefined;
                            if (closure_3) {
                              let v0 = 1;
                              if (null != c5) {
                                let obj11 = id(id1[14]);
                                const obj1 = { orderId: id, expectedRevision, orderLineItems: null, externalGatewayFacet: null };
                                const obj2 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: null };
                                ({ sku_id: obj14.sku_id, quantity: obj14.quantity, purchase_type: obj14.purchase_type } = first);
                                obj2.subscription_plan_id = planId;
                                const items = [obj2];
                                obj1.orderLineItems = items;
                                obj1.externalGatewayFacet = tmp55;
                                planId = 2;
                                c5 = 1;
                                const obj3 = { value: obj11.patchOrder(obj1), done: false };
                                return obj3;
                              } else {
                                let obj8 = id(id1[14]);
                                let obj4 = { orderId: id, orderLineItemId: id1, subscriptionPlanId: planId, expectedRevision };
                                planId = 3;
                                c5 = 1;
                                const obj5 = { value: obj8.patchOrderLineItem(obj4), done: false };
                                return obj5;
                              }
                            } else if (closure_129_4) {
                              obj4 = id(id1[14]);
                              const obj6 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                              const obj7 = { recipient_id: giftInfo.recipient_id, gift_style: giftInfo.gift_style, emoji_id: giftInfo.emoji_id, emoji_name: giftInfo.emoji_name, sound_id: giftInfo.sound_id, reward_sku_ids: giftInfo.reward_sku_ids, custom_message_contents: giftInfo.custom_message };
                              obj6.giftInfo = obj7;
                              obj6.expectedRevision = revision;
                              planId = 4;
                              c5 = 1;
                              obj8 = { value: obj4.updateOrder(obj6), done: false };
                              return obj8;
                            } else {
                              c5 = 3;
                            }
                          }
                        } else if (1 === tmp7) {
                          v0 = 0;
                          closure_128_1 = tmp68;
                          if (!closure_129_5) {
                            first3(ref.current.planSelection.premiumType);
                            setCustomGiftMessage(ref.current.planSelection.planInterval);
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
                              const obj9 = { value, done: true };
                              return obj9;
                            } else {
                              closure_128_0 = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "HermesInternal", done: null };
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
                              const obj10 = { value, done: true };
                              return obj10;
                            } else {
                              revision = value;
                              if (ref.current.orderId !== closure_129_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "HermesInternal", done: null };
                              }
                            }
                          } else if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            obj = { value, done: true };
                            return obj;
                          } else {
                            revision = value;
                            if (ref.current.orderId === closure_129_6) {
                              ref.current.giftInfo = giftInfo;
                              tmp68(revision);
                            }
                          }
                          ref.current.planId = planId;
                          obj11 = { premiumType, planInterval };
                          ref.current.planSelection = obj11;
                          tmp68(revision);
                          v0 = 0;
                        }
                        c5 = 3;
                        return { value: "HermesInternal", done: null };
                      } catch (tmp68) {
                        if (tmp4 === v0) {
                          c5 = tmp2;
                          throw tmp68;
                        } else {
                          planId = tmp;
                        }
                      }
                    }
                  })().catch((error) => {
                    let obj = { tags: { source: "NativeGiftContext_syncOrder" }, extra: null };
                    obj = { orderId: id, planId, needsPlanSync, needsGiftSync };
                    obj.extra = obj;
                    const result = obj.captureBillingException(error, obj);
                    logger.error("Failed to sync order", { error, orderId: id });
                    if (!c5) {
                      first4(error);
                    }
                  }).finally(() => {
                    first5.current = false;
                    if (ref.current.orderId !== id2) {
                      closure_15((arg0) => arg0 + 1);
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
    }, items7);
    const items8 = [planIdForPremiumType, recipientUserId, basePurchaseAnalytics];
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
            const result = PremiumGiftingIntentActionCreators.logGiftIntentFlowPurchasedGift(tmp18);
          }
          if (closure_0 != null) {
            closure_0();
          }
          DispatcherDefault.unsubscribe("GIFT_CODE_CREATE", handleGiftCodeCreate);
          tmp18 = recipientUserId;
        }
        closure_19(false);
      }
      return handleGiftCodeCreate;
    }, items8);
    _require = setCurrentAnalyticsStep(function*(arg0, value) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              const subscription = recipientUserId(onClose[31]).subscribe("GIFT_CODE_CREATE", closure_0);
              const obj11 = recipientUserId(onClose[31]);
              if (!obj12.isAndroid()) {
                if (null != orderContext.orderId) {
                  c4 = 1;
                  let obj1 = { orderId: orderContext.orderId, skuId };
                  logger.info("Starting order signing with pre-created order", obj1);
                  c5 = 2;
                  c6 = 1;
                  const obj2 = { value: closure_0(onClose[14]).markOrderAsSigningInProgress(orderContext.orderId), done: false };
                  return obj2;
                }
              }
              obj12 = closure_0(onClose[32]);
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              closure_129_0 = closure_3;
              obj1 = closure_0(onClose[15]);
              const obj3 = { tags: { source: "NativeGiftContext_handlePurchaseComplete_sign" }, extra: null };
              const obj4 = { skuId, orderId: orderContext.orderId };
              obj3.extra = obj4;
              const result = obj1.captureBillingException(closure_129_0, obj3);
              const obj5 = { error: closure_129_0, skuId, orderId: orderContext.orderId };
              logger.error("Failed to sign order in purchase completion", obj5);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
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
    const items9 = [skuId, orderContext.orderId];
    callback1 = obj.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items9);
    const items10 = [setCurrentAnalyticsStep];
    callback2 = obj.useCallback((arg0) => {
      DispatcherDefault.unsubscribe("GIFT_CODE_CREATE", arg0);
      setCurrentAnalyticsStep(PremiumAnalyticsUtils.PaymentFlowStep.PLAN_SELECT);
      closure_19(false);
    }, items10);
    const items11 = [callback, setCurrentAnalyticsStep, memo1, handlePremiumPurchase, productIdForGift, basePurchaseAnalytics, callback1, callback2, orderContext.orderId, first3];
    callback3 = obj.useCallback((arg0) => {
      let obj = first1;
      if (null != first1.getNextTier(closure_0(onClose[26]).BadgeId.GIFTING)) {
        const singleRequirementProgress = obj.getSingleRequirementProgress(tmp(tmp2[26]).BadgeId.GIFTING);
        let current;
        if (singleRequirementProgress != null) {
          current = singleRequirementProgress.current;
        }
        if (current == null) {
          current = null;
        }
        closure_25(current);
      } else {
        closure_25(null);
      }
      closure_19(true);
      closure_1 = callback(arg0);
      if (tmpResult.isAndroid()) {
        function handleGPlayUpdatePurchaseAction(isActivePurchase) {
          if (isActivePurchase.isActivePurchase) {
            DispatcherDefault.unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
            if (isActivePurchase.billingResult !== GPlayBillingResult.OK) {
              callback2(closure_1);
            }
          }
        }
        const subscription = recipientUserId(tmp2[31]).subscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
        const obj3 = recipientUserId(tmp2[31]);
      }
      setCurrentAnalyticsStep(closure_0(onClose[33]).PaymentFlowStep.REVIEW);
      obj = { productId: productIdForGift, isGift: true, analyticsLoadId: closure_0.load_id, analyticsLocation: closure_0.location, analyticsLocations: closure_0.location_stack, allowPlanChange: false, giftInfoOptions: memo1, onPurchaseComplete: null, onPurchaseError: null, orderId: null, analyticsData: null };
      closure_0 = setCurrentAnalyticsStep(function*() {
        yield closure_1_39(closure_1);
        return arg1;
      });
      obj.onPurchaseComplete = function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj.onPurchaseError = function onPurchaseError() {
        return callback2(closure_1);
      };
      obj.orderId = orderContext.orderId;
      obj = { load_id: closure_0.load_id, succeededOnlyFields: null };
      const obj1 = { is_custom_message_edited: null, is_custom_emoji_sound_available: false };
      const intl = tmp(tmp2[17]).intl;
      obj1.is_custom_message_edited = first3 !== intl.string(closure_0(onClose[17]).t.ZkOo1U);
      obj.succeededOnlyFields = obj1;
      obj.analyticsData = obj;
      handlePremiumPurchase(obj);
    }, items11);
    const items12 = [orderContext, recipientUserId, stateFromStores, first2, premiumType, first1, productIdForGift, first3, first4, first5, first6, first7, first10, basePurchaseAnalytics, setCurrentAnalyticsStep, tmp5, tmp9, onClose, callback3, stateFromStoresArray, fetchClaimableGiftingPromotionRewardSkuIds, first9, tmp29];
    obj1 = {
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
        }, items12),
      children
    };
    return first6(first7.Provider, obj1);
  }
  let obj5 = require("ProductIds");
};
export const useNativeGiftContext = tmp6;
export const useForwardedNativeGiftContext = tmp7;