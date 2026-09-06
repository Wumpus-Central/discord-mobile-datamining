// discord_app/modules/payments/native/NativeGiftContext.tsx
import timestampDefault from "../../debug/Logger.tsx";
import createDefinedContextDefault from "../../../utils/ContextUtils.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import importDefaultResult from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import closure_6 from "../../badges/BadgeDirectoryStore.tsx";
import closure_7 from "../../premium/promotions/PromotionsStore.tsx";
import closure_8 from "../../../records/GiftCodeRecord.tsx";
import closure_9 from "../../../stores/UserStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { GPlayBillingResult as unpackModuleId } from "../../gplay/native/Constants.tsx";
import GuildFeatures from "../../premium/PremiumConstants.tsx";
import { PaymentGateways } from "../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c4 = importDefaultResult;
({ PremiumTypes: closure_12, SubscriptionIntervalTypes: map1, SubscriptionPlanInfo: closure_14 } = GuildFeatures);
let closure_17 = new timestampDefault("NativeGiftContext");
const tmp4 = new timestampDefault("NativeGiftContext");
[closure_18, tmp6, tmp7] = importDefaultResult(createDefinedContextDefault(), 3);
const importDefaultResultResult = importDefaultResult(createDefinedContextDefault(), 3);
let result = require("set").fileFinishedImporting("modules/payments/native/NativeGiftContext.tsx");

export const NativeGiftContextProvider = function NativeGiftContextProvider(basePurchaseAnalytics) {
  basePurchaseAnalytics = basePurchaseAnalytics.basePurchaseAnalytics;
  let _require = basePurchaseAnalytics;
  const recipientUserId = basePurchaseAnalytics.recipientUserId;
  revision = recipientUserId;
  ({ premiumType, planInterval, onClose } = basePurchaseAnalytics);
  setRevision = onClose;
  const setCurrentAnalyticsStep = basePurchaseAnalytics.setCurrentAnalyticsStep;
  setOrder = setCurrentAnalyticsStep;
  let planIdForPremiumType;
  let memo;
  let memo1;
  let first7;
  let first;
  let first1;
  closure_10 = undefined;
  closure_11 = undefined;
  let TIER_2;
  let constants;
  let table;
  closure_15 = undefined;
  let first6;
  closure_17 = undefined;
  first7 = undefined;
  closure_19 = undefined;
  let first8;
  closure_21 = undefined;
  let first9;
  closure_23 = undefined;
  let first10;
  closure_25 = undefined;
  let orderContext;
  planIdForPremiumType = undefined;
  let productIdForGift;
  let skuId;
  let payment_gateway;
  let handlePremiumPurchase;
  let stateFromStoresArray;
  let fetchClaimableGiftingPromotionRewardSkuIds;
  closure_34 = undefined;
  let enabled;
  let stateFromStores;
  memo1 = undefined;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let obj = memo;
  ({ initialOrder, children } = basePurchaseAnalytics);
  if (premiumType == null) {
    premiumType = TIER_2.TIER_2;
  }
  const tmp3 = planIdForPremiumType(memo.useState(premiumType), 2);
  first = tmp3[0];
  planIdForPremiumType = first;
  memo = tmp5;
  if (planInterval == null) {
    planInterval = constants.YEAR;
  }
  let tmp2Result = tmp2(obj.useState(planInterval), 2);
  first1 = tmp2Result[0];
  memo1 = first1;
  first7 = tmp9;
  obj1 = _require(setRevision[16]);
  tmp2Result = tmp2(obj.useState(obj1.useGiftStyles()[0]), 2);
  const first2 = tmp2Result[0];
  first = first2;
  first1 = tmp2Result[1];
  let intl = _require(setRevision[17]).intl;
  const tmp2Result1 = planIdForPremiumType(obj.useState(intl.string(_require(setRevision[17]).t.ZkOo1U)), 2);
  const first3 = tmp2Result1[0];
  closure_10 = first3;
  closure_11 = tmp2Result1[1];
  const tmp2Result2 = planIdForPremiumType(obj.useState(undefined), 2);
  const first4 = tmp2Result2[0];
  TIER_2 = first4;
  constants = tmp2Result2[1];
  const tmp2Result3 = planIdForPremiumType(obj.useState(undefined), 2);
  const first5 = tmp2Result3[0];
  table = first5;
  closure_15 = tmp2Result3[1];
  const tmp2Result4 = planIdForPremiumType(obj.useState(undefined), 2);
  first6 = tmp2Result4[0];
  closure_17 = tmp2Result4[1];
  const tmp2Result5 = planIdForPremiumType(obj.useState(false), 2);
  first7 = tmp2Result5[0];
  closure_19 = tmp2Result5[1];
  const tmp2Result6 = planIdForPremiumType(obj.useState(null), 2);
  first8 = tmp2Result6[0];
  closure_21 = tmp26;
  const tmp2Result7 = planIdForPremiumType(obj.useState(), 2);
  first9 = tmp2Result7[0];
  closure_23 = tmp29;
  const tmp2Result8 = planIdForPremiumType(obj.useState(null), 2);
  first10 = tmp2Result8[0];
  closure_25 = tmp2Result8[1];
  orderContext = _require(setRevision[18]).useOrderContext(initialOrder, "NativeGiftContext");
  let obj3 = _require(setRevision[18]);
  planIdForPremiumType = _require(setRevision[19]).getPlanIdForPremiumType(first, first1);
  let obj4 = _require(setRevision[19]);
  productIdForGift = _require(setRevision[20]).getProductIdForGift(planIdForPremiumType);
  if (null == table[planIdForPremiumType]) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Invalid subscription plan for gift purchase: " + planIdForPremiumType);
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
    memo = obj.useMemo(() => {
      let tmp;
      if (payment_gateway === constants2.GOOGLE) {
        let obj = { line_items: null };
        obj = { external_product_id: null };
        obj[0] = productIdForGift;
        const items = [obj];
        obj[0] = items;
        tmp = obj;
      }
      return tmp;
    }, items);
    let tmp10Result = tmp10(tmp11[21]);
    handlePremiumPurchase = tmp10Result.useHandlePremiumPurchase();
    tmp10Result = tmp10(tmp11[22]);
    const items1 = [first7];
    stateFromStoresArray = tmp10Result.useStateFromStoresArray(items1, () => first7.getGiftPromotionRewardSkuIds());
    fetchClaimableGiftingPromotionRewardSkuIds = tmp10(tmp11[23]).useFetchClaimableGiftingPromotionRewardSkuIds();
    let tmp41 = null != fetchClaimableGiftingPromotionRewardSkuIds;
    if (tmp41) {
      tmp41 = fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
    }
    closure_34 = tmp41;
    const tmp10Result1 = tmp10(tmp11[23]);
    enabled = revision(tmp11[24]).useConfig({ location: "NativeGiftContext" }).enabled;
    const items2 = [enabled];
    const effect = obj.useEffect(() => {
      if (enabled) {
        const badge = lib(setRevision[25]).fetchBadge(lib(setRevision[26]).BadgeId.GIFTING);
        const obj = lib(setRevision[25]);
      }
    }, items2);
    let obj9 = revision(tmp11[24]);
    const items3 = [first1];
    stateFromStores = tmp10(tmp11[22]).useStateFromStores(items3, () => {
      let user;
      if (null != revision) {
        user = first1.getUser(tmp);
      }
      return user;
    });
    _require = first2;
    revision = recipientUserId;
    setRevision = first3;
    setOrder = first5;
    planIdForPremiumType = first4;
    memo = first9;
    memo1 = first;
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
    items4[7] = first;
    memo1 = obj.useMemo(() => {
      const obj = {
        gift_style: closure_0,
        recipient_id: revision,
        custom_message: setRevision,
        emoji_id: null,
        emoji_name: null,
        sound_id: null,
        reward_sku_ids: null,
      };
      let id;
      if (setOrder != null) {
        id = tmp.id;
      }
      obj[3] = id;
      let surrogates;
      if (setOrder != null) {
        surrogates = tmp.surrogates;
      }
      obj[4] = surrogates;
      let soundId;
      if (planIdForPremiumType != null) {
        soundId = planIdForPremiumType.soundId;
      }
      obj[5] = soundId;
      if (null != memo) {
        if (memo1 === TIER_2.TIER_2) {
          const items = [tmp5];
        }
        obj[6] = [];
        return obj;
      }
    }, items4);
    const items5 = [first8];
    const effect1 = obj.useEffect(() => {
      if (null != first8) {
        let obj = revision(setRevision[27]);
        obj = { title: null, body: null };
        const intl = lib(setRevision[17]).intl;
        obj[0] = intl.string(lib(setRevision[17]).t.R0RpRX);
        const intl2 = lib(setRevision[17]).intl;
        obj[1] = intl2.string(lib(setRevision[17]).t.CKsXk3);
        obj.show(obj);
        callback2(null);
      }
    }, items5);
    const items6 = [first9, tmp41];
    const effect2 = obj.useEffect(() => {
      if (closure_34) {
        const currentUser = first1.getCurrentUser();
        let obj = revision(setRevision[28]);
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        obj = { user_id: null, reward_sku_id: null };
        obj[0] = id;
        obj[1] = first9;
        obj.track(constants.GIFT_PROMOTION_REWARD_SELECTED, obj);
      }
    }, items6);
    ({ order, revision, setRevision, setOrder } = orderContext);
    _require = order;
    closure_10 = tmp5;
    closure_11 = tmp9;
    TIER_2 = tmp26;
    constants = undefined;
    table = undefined;
    closure_15 = undefined;
    obj = { orderId: "a", planId: 150, planSelection: "center", giftInfo: "center" };
    obj = { premiumType: null, planInterval: null };
    obj[0] = first;
    obj[1] = first1;
    obj[2] = obj;
    constants = obj.useRef(obj);
    table = obj.useRef(false);
    const tmp2Result9 = tmp2(obj.useState(0), 2);
    closure_15 = tmp2Result9[1];
    const items7 = [
      order,
      revision,
      planIdForPremiumType,
      memo,
      memo1,
      first7,
      first,
      first1,
      tmp5,
      tmp9,
      setRevision,
      setOrder,
      tmp26,
      tmp2Result9[0],
    ];
    const effect3 = obj.useEffect(() => {
      let id;
      if (id != null) {
        id = tmp.id;
      }
      first = undefined;
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
        tmp6 = closure_13.current.orderId !== tmp.id;
      }
      if (tmp6) {
        closure_13.current.orderId = tmp.id;
        closure_13.current.planId = subscription_plan_id;
        let obj = { premiumType: null, planInterval: null };
        obj[0] = first;
        obj[1] = first1;
        closure_13.current.planSelection = obj;
      }
      if (null != id) {
        if (null != first) {
          if (null != id1) {
            if (null != first) {
              if (!first7) {
                if (!ref.current) {
                  let tmp14 = closure_13.current.planId !== closure_4;
                  if (tmp14) {
                    let tmp15 = null == sku_id;
                    if (!tmp15) {
                      skuId = undefined;
                      if (ref[tmp13] != null) {
                        skuId = tmp17.skuId;
                      }
                      tmp15 = skuId === sku_id;
                    }
                    tmp14 = tmp15;
                  }
                  closure_3 = tmp14;
                  closure_4 = tmp20;
                  c5 = false;
                  let id2;
                  if (tmp != null) {
                    id2 = tmp.id;
                  }
                  tmp11.current = true;
                  first7 = tmp24;
                  const promise = setOrder(function* () {
                    if (c5 === 2) {
                      c5 = 3;
                      HermesBuiltin.throwTypeError();
                    } else if (tmp6 === 3) {
                      if (arg0 === 1) {
                        throw arg1;
                      } else if (arg0 === 2) {
                        let obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c5 = 2;
                        if (0 === c4) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            closure_1 = tmp3;
                            revision = tmp7;
                            revision = undefined;
                            if (v0) {
                              v0 = 1;
                              if (null != c5) {
                                let obj11 = id(id1[14]);
                                obj1 = {
                                  orderId: null,
                                  expectedRevision: null,
                                  orderLineItems: null,
                                  externalGatewayFacet: null,
                                };
                                obj1[0] = closure_0;
                                obj1[1] = revision;
                                const obj2 = {
                                  sku_id: null,
                                  quantity: null,
                                  purchase_type: null,
                                  subscription_plan_id: null,
                                };
                                ({ sku_id: obj14[0], quantity: obj14[1], purchase_type: obj14[2] } = closure_1_1);
                                obj2[3] = c4;
                                const items = [obj2];
                                obj1[2] = items;
                                obj1[3] = tmp55;
                                c4 = 2;
                                c5 = 1;
                                const obj3 = { value: null, done: false };
                                obj3[0] = obj11.patchOrder(obj1);
                                return obj3;
                              } else {
                                let obj8 = id(id1[14]);
                                let obj4 = {
                                  orderId: null,
                                  orderLineItemId: null,
                                  subscriptionPlanId: null,
                                  expectedRevision: null,
                                };
                                obj4[0] = closure_0;
                                obj4[1] = closure_1_2;
                                obj4[2] = c4;
                                obj4[3] = revision;
                                c4 = 3;
                                c5 = 1;
                                const obj5 = { value: null, done: false };
                                obj5[0] = obj8.patchOrderLineItem(obj4);
                                return obj5;
                              }
                            } else if (c4) {
                              obj4 = id(id1[14]);
                              const obj6 = { orderId: null, giftInfo: null, expectedRevision: null };
                              obj6[0] = revision;
                              const obj7 = {
                                recipient_id: null,
                                gift_style: null,
                                emoji_id: null,
                                emoji_name: null,
                                sound_id: null,
                                reward_sku_ids: null,
                                custom_message_contents: null,
                              };
                              obj7[0] = closure_1_6.recipient_id;
                              obj7[1] = closure_1_6.gift_style;
                              obj7[2] = closure_1_6.emoji_id;
                              obj7[3] = closure_1_6.emoji_name;
                              obj7[4] = closure_1_6.sound_id;
                              obj7[5] = closure_1_6.reward_sku_ids;
                              obj7[6] = closure_1_6.custom_message;
                              obj6[1] = obj7;
                              obj6[2] = closure_7;
                              c4 = 4;
                              c5 = 1;
                              obj8 = { value: null, done: false };
                              obj8[0] = obj4.updateOrder(obj6);
                              return obj8;
                            } else {
                              c5 = 3;
                            }
                          }
                        } else if (1 === tmp7) {
                          v0 = 0;
                          closure_1 = closure_2;
                          if (!c5) {
                            closure_1_10(closure_1_13.current.planSelection.premiumType);
                            closure_1_11(closure_1_13.current.planSelection.planInterval);
                          }
                          throw closure_1_1;
                        } else {
                          if (2 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw arg1;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj9 = { value: null, done: true };
                              obj9[0] = arg1;
                              return obj9;
                            } else {
                              closure_0 = arg1;
                              if (closure_1_13.current.orderId !== closure_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "HermesInternal", done: null };
                              } else {
                                revision = revision.revision;
                                v0(revision);
                              }
                            }
                          } else if (3 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw arg1;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj10 = { value: null, done: true };
                              obj10[0] = arg1;
                              return obj10;
                            } else {
                              closure_7 = arg1;
                              if (closure_1_13.current.orderId !== closure_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "HermesInternal", done: null };
                              }
                            }
                          } else if (arg0 === 1) {
                            c5 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            closure_7 = arg1;
                            if (closure_1_13.current.orderId === closure_6) {
                              closure_1_13.current.giftInfo = closure_1_6;
                              closure_1_2(closure_7);
                            }
                          }
                          closure_1_13.current.planId = c4;
                          obj11 = { premiumType: null, planInterval: null };
                          obj11[0] = closure_1_8;
                          obj11[1] = closure_1_9;
                          closure_1_13.current.planSelection = obj11;
                          closure_1_2(closure_7);
                          v0 = 0;
                        }
                        c5 = 3;
                        return { value: "HermesInternal", done: null };
                      } catch (tmp68) {
                        closure_2 = tmp68;
                        if (tmp4 === v0) {
                          c5 = tmp2;
                          throw tmp68;
                        } else {
                          c4 = tmp;
                        }
                      }
                    }
                  })();
                  const tmp12 = closure_13;
                  setOrder(function* () {
                    if (c5 === 2) {
                      c5 = 3;
                      HermesBuiltin.throwTypeError();
                    } else if (tmp6 === 3) {
                      if (arg0 === 1) {
                        throw arg1;
                      } else if (arg0 === 2) {
                        let obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c5 = 2;
                        if (0 === c4) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            closure_1 = tmp3;
                            revision = tmp7;
                            revision = undefined;
                            if (v0) {
                              v0 = 1;
                              if (null != c5) {
                                let obj11 = id(id1[14]);
                                obj1 = {
                                  orderId: null,
                                  expectedRevision: null,
                                  orderLineItems: null,
                                  externalGatewayFacet: null,
                                };
                                obj1[0] = closure_0;
                                obj1[1] = revision;
                                const obj2 = {
                                  sku_id: null,
                                  quantity: null,
                                  purchase_type: null,
                                  subscription_plan_id: null,
                                };
                                ({ sku_id: obj14[0], quantity: obj14[1], purchase_type: obj14[2] } = closure_1_1);
                                obj2[3] = c4;
                                const items = [obj2];
                                obj1[2] = items;
                                obj1[3] = tmp55;
                                c4 = 2;
                                c5 = 1;
                                const obj3 = { value: null, done: false };
                                obj3[0] = obj11.patchOrder(obj1);
                                return obj3;
                              } else {
                                let obj8 = id(id1[14]);
                                let obj4 = {
                                  orderId: null,
                                  orderLineItemId: null,
                                  subscriptionPlanId: null,
                                  expectedRevision: null,
                                };
                                obj4[0] = closure_0;
                                obj4[1] = closure_1_2;
                                obj4[2] = c4;
                                obj4[3] = revision;
                                c4 = 3;
                                c5 = 1;
                                const obj5 = { value: null, done: false };
                                obj5[0] = obj8.patchOrderLineItem(obj4);
                                return obj5;
                              }
                            } else if (c4) {
                              obj4 = id(id1[14]);
                              const obj6 = { orderId: null, giftInfo: null, expectedRevision: null };
                              obj6[0] = revision;
                              const obj7 = {
                                recipient_id: null,
                                gift_style: null,
                                emoji_id: null,
                                emoji_name: null,
                                sound_id: null,
                                reward_sku_ids: null,
                                custom_message_contents: null,
                              };
                              obj7[0] = closure_1_6.recipient_id;
                              obj7[1] = closure_1_6.gift_style;
                              obj7[2] = closure_1_6.emoji_id;
                              obj7[3] = closure_1_6.emoji_name;
                              obj7[4] = closure_1_6.sound_id;
                              obj7[5] = closure_1_6.reward_sku_ids;
                              obj7[6] = closure_1_6.custom_message;
                              obj6[1] = obj7;
                              obj6[2] = closure_7;
                              c4 = 4;
                              c5 = 1;
                              obj8 = { value: null, done: false };
                              obj8[0] = obj4.updateOrder(obj6);
                              return obj8;
                            } else {
                              c5 = 3;
                            }
                          }
                        } else if (1 === tmp7) {
                          v0 = 0;
                          closure_1 = closure_2;
                          if (!c5) {
                            closure_1_10(closure_1_13.current.planSelection.premiumType);
                            closure_1_11(closure_1_13.current.planSelection.planInterval);
                          }
                          throw closure_1_1;
                        } else {
                          if (2 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw arg1;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj9 = { value: null, done: true };
                              obj9[0] = arg1;
                              return obj9;
                            } else {
                              closure_0 = arg1;
                              if (closure_1_13.current.orderId !== closure_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "HermesInternal", done: null };
                              } else {
                                revision = revision.revision;
                                v0(revision);
                              }
                            }
                          } else if (3 === tmp7) {
                            if (arg0 === 1) {
                              c5 = 3;
                              throw arg1;
                            } else if (arg0 === 2) {
                              v0 = 0;
                              c5 = 3;
                              const obj10 = { value: null, done: true };
                              obj10[0] = arg1;
                              return obj10;
                            } else {
                              closure_7 = arg1;
                              if (closure_1_13.current.orderId !== closure_6) {
                                v0 = 0;
                                c5 = 3;
                                return { value: "HermesInternal", done: null };
                              }
                            }
                          } else if (arg0 === 1) {
                            c5 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            closure_7 = arg1;
                            if (closure_1_13.current.orderId === closure_6) {
                              closure_1_13.current.giftInfo = closure_1_6;
                              closure_1_2(closure_7);
                            }
                          }
                          closure_1_13.current.planId = c4;
                          obj11 = { premiumType: null, planInterval: null };
                          obj11[0] = closure_1_8;
                          obj11[1] = closure_1_9;
                          closure_1_13.current.planSelection = obj11;
                          closure_1_2(closure_7);
                          v0 = 0;
                        }
                        c5 = 3;
                        return { value: "HermesInternal", done: null };
                      } catch (tmp68) {
                        closure_2 = tmp68;
                        if (tmp4 === v0) {
                          c5 = tmp2;
                          throw tmp68;
                        } else {
                          c4 = tmp;
                        }
                      }
                    }
                  })()
                    .catch((error) => {
                      let obj = id(setRevision[15]);
                      obj = { orderId: id, planId: closure_4, needsPlanSync: closure_3, needsGiftSync: closure_4 };
                      const result = obj.captureBillingException(error, {
                        tags: { source: "NativeGiftContext_syncOrder" },
                        extra: obj,
                      });
                      obj = { error, orderId: id };
                      logger.error("Failed to sync order", obj);
                      if (!c5) {
                        closure_1_12(error);
                      }
                    })
                    .finally(() => {
                      closure_1_14.current = false;
                      if (closure_1_13.current.orderId !== id2) {
                        closure_1_15((arg0) => arg0 + 1);
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
        const fromServer = first.createFromServer(giftCode.giftCode);
        if (fromServer.subscriptionPlanId === closure_1_27) {
          closure_1_17(fromServer);
          let tmp6 = null != handleGiftCodeCreate;
          if (tmp6) {
            const location_stack = lib.location_stack;
            let hasItem;
            if (location_stack != null) {
              hasItem = location_stack.includes(revision(setRevision[29]).PREMIUM_GIFT_INTENT_CARD);
            }
            tmp6 = hasItem;
          }
          if (tmp6) {
            const result = lib(setRevision[30]).logGiftIntentFlowPurchasedGift(tmp18);
            const obj = lib(setRevision[30]);
          }
          if (lib != null) {
            lib();
          }
          revision(setRevision[31]).unsubscribe("GIFT_CODE_CREATE", handleGiftCodeCreate);
          const obj2 = revision(setRevision[31]);
          tmp18 = handleGiftCodeCreate;
        }
        closure_1_19(false);
      }
      return handleGiftCodeCreate;
    }, items8);
    _require = undefined;
    _require = setOrder((arg0) => {
      closure_0 = arg0;
      c5 = 0;
      c6 = 0;
      c4 = 0;
      return (function* (arg0) {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp3;
                closure_1 = tmp7;
                const subscription = revision(setRevision[31]).subscribe("GIFT_CODE_CREATE", callback);
                const obj11 = revision(setRevision[31]);
                if (!obj12.isAndroid()) {
                  if (null != closure_1_26.orderId) {
                    c4 = 1;
                    obj1 = { orderId: null, skuId: null };
                    obj1[0] = closure_1_26.orderId;
                    obj1[1] = closure_1_29;
                    logger.info("Starting order signing with pre-created order", obj1);
                    c5 = 2;
                    c6 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = callback(setRevision[14]).markOrderAsSigningInProgress(closure_1_26.orderId);
                    return obj2;
                  }
                }
                obj12 = callback(setRevision[32]);
              }
            } else {
              if (1 === tmp7) {
                c4 = 0;
                callback = closure_3;
                obj1 = callback(setRevision[15]);
                const obj3 = { tags: null, extra: null };
                obj3[0] = { source: "NativeGiftContext_handlePurchaseComplete_sign" };
                const obj4 = { skuId: null, orderId: null };
                obj4[0] = closure_1_29;
                obj4[1] = closure_1_26.orderId;
                obj3[1] = obj4;
                const result = obj1.captureBillingException(callback, obj3);
                const obj5 = { error: null, skuId: null, orderId: null };
                obj5[0] = callback;
                obj5[1] = closure_1_29;
                obj5[2] = closure_1_26.orderId;
                logger.error("Failed to sign order in purchase completion", obj5);
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                c4 = 0;
              }
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
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
      })();
    });
    const items9 = [skuId, orderContext.orderId];
    callback1 = obj.useCallback(function () {
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
      revision(setRevision[31]).unsubscribe("GIFT_CODE_CREATE", arg0);
      setOrder(lib(setRevision[33]).PaymentFlowStep.PLAN_SELECT);
      callback(false);
    }, items10);
    const items11 = [
      callback,
      setCurrentAnalyticsStep,
      memo1,
      handlePremiumPurchase,
      productIdForGift,
      basePurchaseAnalytics,
      callback1,
      callback2,
      orderContext.orderId,
      first3,
    ];
    callback3 = obj.useCallback((arg0) => {
      let obj = memo1;
      if (null != memo1.getNextTier(lib(setRevision[26]).BadgeId.GIFTING)) {
        const singleRequirementProgress = obj.getSingleRequirementProgress(tmp(tmp2[26]).BadgeId.GIFTING);
        let current;
        if (singleRequirementProgress != null) {
          current = singleRequirementProgress.current;
        }
        if (current == null) {
          current = null;
        }
        callback3(current);
      } else {
        callback3(null);
      }
      callback(true);
      closure_1 = callback(arg0);
      if (tmpResult.isAndroid()) {
        function handleGPlayUpdatePurchaseAction(isActivePurchase) {
          if (isActivePurchase.isActivePurchase) {
            revision(setRevision[31]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
            if (isActivePurchase.billingResult !== constants.OK) {
              closure_1_40(closure_1);
            }
            const obj = revision(setRevision[31]);
          }
        }
        const subscription = revision(tmp2[31]).subscribe(
          "GPLAY_UPDATE_PURCHASE_STATE",
          handleGPlayUpdatePurchaseAction,
        );
        const obj3 = revision(tmp2[31]);
      }
      setOrder(lib(setRevision[33]).PaymentFlowStep.REVIEW);
      obj = {
        productId: productIdForGift,
        isGift: true,
        analyticsLoadId: lib.load_id,
        analyticsLocation: lib.location,
        analyticsLocations: lib.location_stack,
        allowPlanChange: false,
        giftInfoOptions: memo1,
        onPurchaseComplete: null,
        onPurchaseError: null,
        orderId: null,
        analyticsData: null,
      };
      lib = setOrder(function* () {
        yield closure_1_39(c1);
        return arg1;
      });
      obj[7] = function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj[8] = function onPurchaseError() {
        return closure_1_40(closure_1);
      };
      obj[9] = orderContext.orderId;
      obj = { load_id: lib.load_id, succeededOnlyFields: null };
      obj1 = { is_custom_message_edited: null, is_custom_emoji_sound_available: false };
      const intl = tmp(tmp2[17]).intl;
      obj1[0] = closure_10 !== intl.string(lib(setRevision[17]).t.ZkOo1U);
      obj[1] = obj1;
      obj[10] = obj;
      handlePremiumPurchase(obj);
    }, items11);
    const items12 = [
      orderContext,
      recipientUserId,
      stateFromStores,
      first2,
      first,
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
      callback3,
      stateFromStoresArray,
      fetchClaimableGiftingPromotionRewardSkuIds,
      first9,
      tmp29,
    ];
    obj1 = { value: null, children: null };
    obj1[0] = obj.useMemo(() => {
      const obj = {};
      const merged = Object.assign(orderContext);
      obj.recipientUserId = revision;
      obj.recipientUser = stateFromStores;
      obj.giftStyle = first;
      obj.premiumType = planIdForPremiumType;
      obj.planInterval = memo1;
      obj.productId = productIdForGift;
      obj.customGiftMessage = closure_10;
      obj.soundEffect = closure_12;
      obj.emojiConfetti = closure_14;
      obj.giftCodeRecord = first6;
      obj.isPurchasing = first7;
      obj.prePurchaseGiftingBadgeProgress = first10;
      obj.basePurchaseAnalytics = closure_0;
      obj.setCurrentAnalyticsStep = setOrder;
      obj.setPremiumType = memo;
      obj.setPlanInterval = first7;
      obj.setGiftStyle = first1;
      obj.setCustomGiftMessage = closure_11;
      obj.setSoundEffect = closure_13;
      obj.setEmojiConfetti = closure_15;
      obj.onClose = setRevision;
      obj.onPurchase = callback3;
      obj.allRewards = stateFromStoresArray;
      obj.claimableRewards = fetchClaimableGiftingPromotionRewardSkuIds;
      obj.selectedGiftingPromotionReward = first9;
      obj.setSelectedGiftingPromotionReward = closure_23;
      return obj;
    }, items12);
    obj1[1] = children;
    return first6(first7.Provider, obj1);
  }
  let obj5 = _require(setRevision[20]);
};
export const useNativeGiftContext = tmp6;
export const useForwardedNativeGiftContext = tmp7;
