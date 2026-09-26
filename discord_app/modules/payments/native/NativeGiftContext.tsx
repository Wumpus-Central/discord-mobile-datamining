// discord_app/modules/payments/native/NativeGiftContext.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import BillingUtils from "../../../utils/BillingUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import ContextUtilsDefault from "../../../utils/ContextUtils.tsx";
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import PremiumAnalyticsUtils from "../../premium/native/PremiumAnalyticsUtils.tsx";
import PremiumGiftingIntentActionCreators from "../../premium/gifting/PremiumGiftingIntentActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import PromotionsStore from "../../premium/promotions/PromotionsStore.tsx";
import GiftCodeRecord from "../../../records/GiftCodeRecord.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
fn(6659).GPlayBillingResult;
const PremiumConstants = fn(1374);
({ PremiumTypes: closure_12, SubscriptionIntervalTypes: map1, SubscriptionPlanInfo: closure_14 } = PremiumConstants);
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
let closure_17 = new LoggerDefault("NativeGiftContext");
const tmp4 = new LoggerDefault("NativeGiftContext");
[closure_18, tmp6, tmp7] = ContextUtilsDefault();
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
  let callback4;
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
  const tmp2Result11 = premiumType(noop.useState(require("useGiftStyles").useGiftStyles()[0]), 2);
  first2 = tmp2Result11[0];
  closure_9 = tmp2Result11[1];
  let intl = require("util").intl;
  const tmp2Result12 = premiumType(noop.useState(intl.string(require("util").t.ZkOo1U)), 2);
  first3 = tmp2Result12[0];
  setCustomGiftMessage = tmp2Result12[1];
  const tmp2Result13 = premiumType(noop.useState(undefined), 2);
  first4 = tmp2Result13[0];
  constants = tmp2Result13[1];
  const tmp2Result14 = premiumType(noop.useState(undefined), 2);
  first5 = tmp2Result14[0];
  setEmojiConfetti = tmp2Result14[1];
  const tmp2Result15 = premiumType(noop.useState(undefined), 2);
  first6 = tmp2Result15[0];
  closure_17 = tmp2Result15[1];
  const tmp2Result16 = premiumType(noop.useState(false), 2);
  first7 = tmp2Result16[0];
  closure_19 = tmp2Result16[1];
  const tmp2Result17 = premiumType(noop.useState(null), 2);
  first8 = tmp2Result17[0];
  closure_21 = tmp26;
  const tmp2Result18 = premiumType(noop.useState(), 2);
  first9 = tmp2Result18[0];
  setSelectedGiftingPromotionReward = tmp29;
  const tmp2Result19 = premiumType(noop.useState(null), 2);
  first10 = tmp2Result19[0];
  closure_25 = tmp2Result19[1];
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
        const obj = { line_items: null };
        const obj2 = { external_product_id: productIdForGift };
        const items = [obj2];
        obj.line_items = items;
        tmp = obj;
      }
      return tmp;
    }, items);
    handlePremiumPurchase = tmp10(tmp11[22]).useHandlePremiumPurchase();
    const tmp10Result = tmp10(tmp11[22]);
    const items1 = [setPlanInterval];
    stateFromStoresArray = tmp10(tmp11[23]).useStateFromStoresArray(items1, () =>
      setPlanInterval.getGiftPromotionRewardSkuIds(),
    );
    const tmp10Result4 = tmp10(tmp11[23]);
    fetchClaimableGiftingPromotionRewardSkuIds = tmp10(tmp11[24]).useFetchClaimableGiftingPromotionRewardSkuIds();
    let tmp41 = null != fetchClaimableGiftingPromotionRewardSkuIds;
    if (tmp41) {
      tmp41 = fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
    }
    closure_34 = tmp41;
    const tmp10Result5 = tmp10(tmp11[24]);
    const tmp42 = recipientUserId;
    enabled = recipientUserId(tmp11[25]).useConfig({ location: "NativeGiftContext" }).enabled;
    const items2 = [enabled];
    const effect = obj.useEffect(() => {
      if (enabled) {
        const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
      }
    }, items2);
    let obj9 = recipientUserId(tmp11[25]);
    const items3 = [closure_9];
    stateFromStores = tmp10(tmp11[23]).useStateFromStores(items3, () => {
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
    const items4 = [first2, recipientUserId, first3, , , , ,];
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
      const obj = {
        gift_style,
        recipient_id: recipientUserId,
        custom_message: onClose,
        emoji_id: null,
        emoji_name: null,
        sound_id: null,
        reward_sku_ids: null,
      };
      let id;
      if (setCurrentAnalyticsStep != null) {
        id = setCurrentAnalyticsStep.id;
      }
      obj.emoji_id = id;
      let surrogates;
      if (setCurrentAnalyticsStep != null) {
        surrogates = setCurrentAnalyticsStep.surrogates;
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
        const obj2 = { title: null, body: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.R0RpRX);
        const intl2 = util.intl;
        obj2.body = intl2.string(util.t.CKsXk3);
        actions_AlertActionCreatorsDefault.show(obj2);
        closure_21(null);
      }
    }, items5);
    const items6 = [first9, tmp41];
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
    let obj6 = { orderId: "a", planId: null, planSelection: null, giftInfo: null };
    let obj7 = { premiumType, planInterval: first1 };
    obj6.planSelection = obj7;
    closure_130_13 = obj.useRef(obj6);
    closure_130_14 = obj.useRef(false);
    closure_130_15 = obj.useRef(null);
    const tmp2Result20 = tmp2(obj.useState(0), 2);
    closure_130_16 = tmp53;
    const tmp54 = tmp42(tmp11[14])(tmp2Result20[1]);
    const waitForPause = tmp54.waitForPause;
    closure_130_17 = waitForPause;
    const flush = tmp54.flush;
    closure_130_18 = flush;
    const waitForSync = tmp54.waitForSync;
    closure_130_19 = waitForSync;
    const resolveSyncs = tmp54.resolveSyncs;
    closure_130_20 = resolveSyncs;
    const isAwaitingSync = tmp54.isAwaitingSync;
    closure_130_21 = isAwaitingSync;
    const items7 = [
      order,
      revision,
      planIdForPremiumType,
      memo,
      memo1,
      first7,
      premiumType,
      first1,
      tmp5,
      tmp9,
      setRevision,
      setOrder,
      tmp26,
      tmp2Result20[0],
      resolveSyncs,
      waitForPause,
      isAwaitingSync,
    ];
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
        setEmojiConfetti.current = null;
      }
      if (null != id) {
        if (null != planId) {
          if (null != id1) {
            if (null != planId) {
              let tmp16 = setSoundEffect.current.planId !== needsGiftSync;
              if (tmp16) {
                let tmp17 = null == sku_id;
                if (!tmp17) {
                  skuId = undefined;
                  if (first5[tmp15] != null) {
                    skuId = tmp19.skuId;
                  }
                  tmp17 = skuId === sku_id;
                }
                tmp16 = tmp17;
              }
              const needsPlanSync = tmp16;
              needsGiftSync = tmp22;
              if (!first5.current) {
                if (!tmp16) {
                  if (!tmp22) {
                    first8(true);
                  }
                }
                if (!closure_7) {
                  c5 = false;
                  let id2;
                  if (tmp != null) {
                    id2 = tmp.id;
                  }
                  tmp23.current = true;
                  closure_7 = tmp12;
                  const promise = setCurrentAnalyticsStep(function* () {
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
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            closure_1 = tmp3;
                            closure_0 = tmp7;
                            closure_128_0 = undefined;
                            if (closure_3) {
                              let v0 = 1;
                              if (null != c5) {
                                const obj4 = {
                                  orderId: id,
                                  expectedRevision,
                                  orderLineItems: null,
                                  externalGatewayFacet: null,
                                };
                                const obj6 = {
                                  sku_id: null,
                                  quantity: null,
                                  purchase_type: null,
                                  subscription_plan_id: null,
                                };
                                ({
                                  sku_id: obj14.sku_id,
                                  quantity: obj14.quantity,
                                  purchase_type: obj14.purchase_type,
                                } = first);
                                obj6.subscription_plan_id = planId;
                                const items = [obj6];
                                obj4.orderLineItems = items;
                                obj4.externalGatewayFacet = tmp57;
                                planId = 2;
                                c5 = 1;
                                const obj7 = { value: id(id1[15]).patchOrder(obj4), done: false };
                                return obj7;
                              } else {
                                const obj8 = {
                                  orderId: id,
                                  orderLineItemId: id1,
                                  subscriptionPlanId: planId,
                                  expectedRevision,
                                };
                                planId = 3;
                                c5 = 1;
                                const obj10 = { value: id(id1[15]).patchOrderLineItem(obj8), done: false };
                                return obj10;
                              }
                            } else if (closure_129_4) {
                              setEmojiConfetti.current = giftInfo;
                              const obj11 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                              const obj13 = {
                                recipient_id: giftInfo.recipient_id,
                                gift_style: giftInfo.gift_style,
                                emoji_id: giftInfo.emoji_id,
                                emoji_name: giftInfo.emoji_name,
                                sound_id: giftInfo.sound_id,
                                reward_sku_ids: giftInfo.reward_sku_ids,
                                custom_message_contents: giftInfo.custom_message,
                              };
                              obj11.giftInfo = obj13;
                              obj11.expectedRevision = revision;
                              planId = 4;
                              c5 = 1;
                              const obj15 = { value: id(id1[15]).updateOrder(obj11), done: false };
                              return obj15;
                            } else {
                              c5 = 3;
                            }
                          }
                        } else if (1 === tmp7) {
                          v0 = 0;
                          closure_128_1 = tmp70;
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
                              const obj16 = { value, done: true };
                              return obj16;
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
                              const obj17 = { value, done: true };
                              return obj17;
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
                        return { value: "HermesInternal", done: null };
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
                  const nextPromise = setCurrentAnalyticsStep(function* () {
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
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            closure_1 = tmp3;
                            closure_0 = tmp7;
                            closure_128_0 = undefined;
                            if (closure_3) {
                              let v0 = 1;
                              if (null != c5) {
                                const obj4 = {
                                  orderId: id,
                                  expectedRevision,
                                  orderLineItems: null,
                                  externalGatewayFacet: null,
                                };
                                const obj6 = {
                                  sku_id: null,
                                  quantity: null,
                                  purchase_type: null,
                                  subscription_plan_id: null,
                                };
                                ({
                                  sku_id: obj14.sku_id,
                                  quantity: obj14.quantity,
                                  purchase_type: obj14.purchase_type,
                                } = first);
                                obj6.subscription_plan_id = planId;
                                const items = [obj6];
                                obj4.orderLineItems = items;
                                obj4.externalGatewayFacet = tmp57;
                                planId = 2;
                                c5 = 1;
                                const obj7 = { value: id(id1[15]).patchOrder(obj4), done: false };
                                return obj7;
                              } else {
                                const obj8 = {
                                  orderId: id,
                                  orderLineItemId: id1,
                                  subscriptionPlanId: planId,
                                  expectedRevision,
                                };
                                planId = 3;
                                c5 = 1;
                                const obj10 = { value: id(id1[15]).patchOrderLineItem(obj8), done: false };
                                return obj10;
                              }
                            } else if (closure_129_4) {
                              setEmojiConfetti.current = giftInfo;
                              const obj11 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                              const obj13 = {
                                recipient_id: giftInfo.recipient_id,
                                gift_style: giftInfo.gift_style,
                                emoji_id: giftInfo.emoji_id,
                                emoji_name: giftInfo.emoji_name,
                                sound_id: giftInfo.sound_id,
                                reward_sku_ids: giftInfo.reward_sku_ids,
                                custom_message_contents: giftInfo.custom_message,
                              };
                              obj11.giftInfo = obj13;
                              obj11.expectedRevision = revision;
                              planId = 4;
                              c5 = 1;
                              const obj15 = { value: id(id1[15]).updateOrder(obj11), done: false };
                              return obj15;
                            } else {
                              c5 = 3;
                            }
                          }
                        } else if (1 === tmp7) {
                          v0 = 0;
                          closure_128_1 = tmp70;
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
                              const obj16 = { value, done: true };
                              return obj16;
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
                              const obj17 = { value, done: true };
                              return obj17;
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
                        return { value: "HermesInternal", done: null };
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
                    first6((arg0) => arg0 + 1);
                  });
                  setCurrentAnalyticsStep(function* () {
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
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            closure_1 = tmp3;
                            closure_0 = tmp7;
                            closure_128_0 = undefined;
                            if (closure_3) {
                              let v0 = 1;
                              if (null != c5) {
                                const obj4 = {
                                  orderId: id,
                                  expectedRevision,
                                  orderLineItems: null,
                                  externalGatewayFacet: null,
                                };
                                const obj6 = {
                                  sku_id: null,
                                  quantity: null,
                                  purchase_type: null,
                                  subscription_plan_id: null,
                                };
                                ({
                                  sku_id: obj14.sku_id,
                                  quantity: obj14.quantity,
                                  purchase_type: obj14.purchase_type,
                                } = first);
                                obj6.subscription_plan_id = planId;
                                const items = [obj6];
                                obj4.orderLineItems = items;
                                obj4.externalGatewayFacet = tmp57;
                                planId = 2;
                                c5 = 1;
                                const obj7 = { value: id(id1[15]).patchOrder(obj4), done: false };
                                return obj7;
                              } else {
                                const obj8 = {
                                  orderId: id,
                                  orderLineItemId: id1,
                                  subscriptionPlanId: planId,
                                  expectedRevision,
                                };
                                planId = 3;
                                c5 = 1;
                                const obj10 = { value: id(id1[15]).patchOrderLineItem(obj8), done: false };
                                return obj10;
                              }
                            } else if (closure_129_4) {
                              setEmojiConfetti.current = giftInfo;
                              const obj11 = { orderId: closure_129_0, giftInfo: null, expectedRevision: null };
                              const obj13 = {
                                recipient_id: giftInfo.recipient_id,
                                gift_style: giftInfo.gift_style,
                                emoji_id: giftInfo.emoji_id,
                                emoji_name: giftInfo.emoji_name,
                                sound_id: giftInfo.sound_id,
                                reward_sku_ids: giftInfo.reward_sku_ids,
                                custom_message_contents: giftInfo.custom_message,
                              };
                              obj11.giftInfo = obj13;
                              obj11.expectedRevision = revision;
                              planId = 4;
                              c5 = 1;
                              const obj15 = { value: id(id1[15]).updateOrder(obj11), done: false };
                              return obj15;
                            } else {
                              c5 = 3;
                            }
                          }
                        } else if (1 === tmp7) {
                          v0 = 0;
                          closure_128_1 = tmp70;
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
                              const obj16 = { value, done: true };
                              return obj16;
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
                              const obj17 = { value, done: true };
                              return obj17;
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
                        return { value: "HermesInternal", done: null };
                      } catch (tmp70) {
                        if (tmp4 === v0) {
                          c5 = tmp2;
                          throw tmp70;
                        } else {
                          planId = tmp;
                        }
                      }
                    }
                  })()
                    .then(() => {
                      first6((arg0) => arg0 + 1);
                    })
                    .catch((error) => {
                      const obj2 = {
                        tags: { source: "NativeGiftContext_syncOrder" },
                        extra: { orderId: id, planId, needsPlanSync, needsGiftSync },
                      };
                      const result = BillingUtils.captureBillingException(error, obj2);
                      logger.error("Failed to sync order", { error, orderId: id });
                      if (ref.current.orderId === id2) {
                        first4(error);
                      }
                      first8(false);
                      const obj3 = { orderId: id, planId, needsPlanSync, needsGiftSync };
                      const obj4 = { error, orderId: id };
                    })
                    .finally(() => {
                      first5.current = false;
                      if (ref.current.orderId !== id2) {
                        first6((arg0) => arg0 + 1);
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
      first8(true);
    }, items7);
    const items8 = [memo1, flush, waitForSync];
    callback = obj.useCallback(() => {
      first7(first1);
      first6((arg0) => arg0 + 1);
      return closure_19();
    }, items8);
    const items9 = [planIdForPremiumType, recipientUserId, basePurchaseAnalytics];
    callback1 = obj.useCallback((arg0) => {
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
    }, items9);
    setCurrentAnalyticsStep(function* (arg0) {
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              const subscription = recipientUserId(onClose[32]).subscribe("GIFT_CODE_CREATE", closure_0);
              const obj11 = recipientUserId(onClose[32]);
              if (!obj12.isAndroid()) {
                if (null != orderContext.orderId) {
                  c4 = 1;
                  const obj5 = { orderId: orderContext.orderId, skuId };
                  logger.info("Starting order signing with pre-created order", obj5);
                  c5 = 2;
                  c6 = 1;
                  const obj6 = {
                    value: closure_0(onClose[15]).markOrderAsSigningInProgress(orderContext.orderId),
                    done: false,
                  };
                  return obj6;
                }
              }
              obj12 = closure_0(onClose[33]);
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              closure_129_0 = closure_3;
              const obj8 = { tags: { source: "NativeGiftContext_handlePurchaseComplete_sign" }, extra: null };
              const obj9 = { skuId, orderId: orderContext.orderId };
              obj8.extra = obj9;
              const result = closure_0(onClose[16]).captureBillingException(closure_129_0, obj8);
              const obj10 = { error: closure_129_0, skuId, orderId: orderContext.orderId };
              logger.error("Failed to sign order in purchase completion", obj10);
              const obj2 = closure_0(onClose[16]);
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
    const items10 = [skuId, orderContext.orderId];
    callback2 = obj.useCallback(function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items10);
    const items11 = [setCurrentAnalyticsStep];
    callback3 = obj.useCallback((arg0) => {
      DispatcherDefault.unsubscribe("GIFT_CODE_CREATE", arg0);
      setCurrentAnalyticsStep(PremiumAnalyticsUtils.PaymentFlowStep.PLAN_SELECT);
      closure_19(false);
    }, items11);
    _require = setCurrentAnalyticsStep(function* (arg0) {
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
          return { value: "HermesInternal", done: null };
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
              closure_130_0 = closure_0;
              closure_130_1 = undefined;
              closure_130_2 = undefined;
              let obj7 = first1;
              let tmp50 = null;
              if (null != first1.getNextTier(closure_0(onClose[27]).BadgeId.GIFTING)) {
                const singleRequirementProgress = obj7.getSingleRequirementProgress(
                  closure_0(onClose[27]).BadgeId.GIFTING,
                );
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
              callback();
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
              closure_130_2 = callback1(closure_130_0);
              if (obj.isAndroid()) {
                closure_130_3 = function handleGPlayUpdatePurchaseAction(isActivePurchase) {
                  if (isActivePurchase.isActivePurchase) {
                    recipientUserId(onClose[32]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", closure_1_3);
                    if (isActivePurchase.billingResult !== constants.OK) {
                      callback3(closure_1_2);
                    }
                    const obj = recipientUserId(onClose[32]);
                  }
                };
                const subscription = recipientUserId(onClose[32]).subscribe(
                  "GPLAY_UPDATE_PURCHASE_STATE",
                  closure_130_3,
                );
                const obj2 = recipientUserId(onClose[32]);
              }
              tmp2(closure_0(onClose[34]).PaymentFlowStep.REVIEW);
              const obj8 = {
                productId,
                isGift: true,
                analyticsLoadId: null,
                analyticsLocation: null,
                analyticsLocations: null,
                allowPlanChange: false,
                giftInfoOptions: null,
                onPurchaseComplete: null,
                onPurchaseError: null,
                orderId: null,
                analyticsData: null,
              };
              ({
                load_id: obj3.analyticsLoadId,
                location: obj3.analyticsLocation,
                location_stack: obj3.analyticsLocations,
              } = closure_0);
              obj8.giftInfoOptions = giftInfoOptions;
              closure_130_1 = setCurrentAnalyticsStep(function* () {
                yield closure_1_40(closure_2_2);
                return value;
              });
              obj8.onPurchaseComplete = function () {
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
                return callback3(closure_1_2);
              };
              obj8.orderId = orderId.orderId;
              const obj9 = { load_id: closure_0.load_id, succeededOnlyFields: null };
              const obj15 = { is_custom_message_edited: null, is_custom_emoji_sound_available: false };
              const intl = closure_0(onClose[18]).intl;
              obj15.is_custom_message_edited = first3 !== intl.string(closure_0(onClose[18]).t.ZkOo1U);
              obj9.succeededOnlyFields = obj15;
              obj8.analyticsData = obj9;
              handlePremiumPurchase(obj8);
              obj = closure_0(onClose[33]);
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
    const items12 = [
      callback,
      callback1,
      setCurrentAnalyticsStep,
      memo1,
      handlePremiumPurchase,
      productIdForGift,
      basePurchaseAnalytics,
      callback2,
      callback3,
      orderContext.orderId,
      first3,
    ];
    callback4 = obj.useCallback(function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items12);
    const items13 = [
      orderContext,
      recipientUserId,
      stateFromStores,
      first2,
      premiumType,
      first1,
      productIdForGift,
      first3,
      first4,
      first5,
      first6,
      first7,
      first10,
      basePurchaseAnalytics,
      setCurrentAnalyticsStep,
      tmp5,
      tmp9,
      onClose,
      callback4,
      stateFromStoresArray,
      fetchClaimableGiftingPromotionRewardSkuIds,
      first9,
      tmp29,
    ];
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
        obj.onPurchase = callback4;
        obj.allRewards = stateFromStoresArray;
        obj.claimableRewards = fetchClaimableGiftingPromotionRewardSkuIds;
        obj.selectedGiftingPromotionReward = first9;
        obj.setSelectedGiftingPromotionReward = setSelectedGiftingPromotionReward;
        return obj;
      }, items13),
      children,
    };
    return first6(first7.Provider, obj8);
  }
  let obj5 = require("ProductIds");
};
export const useNativeGiftContext = tmp6;
export const useForwardedNativeGiftContext = tmp7;
