import frozen from "frozen";
import importDefaultResult from "dispatcher";
import getPremiumPlanItem from "getPremiumPlanItem";
import map from "map";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import closure_8 from "frozen";
import mergeGuildAvatar from "mergeGuildAvatar";
import { AnalyticEvents } from "ME";
import { GPlayBillingResult as unpackModuleId } from "GPlayConnectionState";
import GuildFeatures from "GuildFeatures";
import { jsx } from "apexExperiment";

let closure_12;
let closure_14;
let closure_17;
let map1;
let tmp6;
let tmp7;
const require = arg1;
let c4 = importDefaultResult;
({ PremiumTypes: closure_12, SubscriptionIntervalTypes: map1, SubscriptionPlanInfo: closure_14 } = GuildFeatures);
let closure_16 = new require("map")("NativeGiftContext");
const tmp4 = new require("map")("NativeGiftContext");
[closure_17, tmp6, tmp7] = importDefaultResult(require("createDefinedContext")(), 3);
const importDefaultResultResult = importDefaultResult(require("createDefinedContext")(), 3);
let result = require("noop").fileFinishedImporting("modules/payments/native/NativeGiftContext.tsx");

export const NativeGiftContextProvider = function NativeGiftContextProvider(basePurchaseAnalytics) {
  let children;
  let initialOrder;
  let onClose;
  let order;
  let planInterval;
  let premiumType;
  let revision;
  let setOrder;
  let setRevision;
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
  let first3;
  let closure_11;
  let first4;
  let closure_13;
  let table;
  let jsx;
  let first6;
  let redux;
  first7 = undefined;
  let closure_19;
  let first8;
  let c21;
  let first9;
  let c23;
  let first10;
  let closure_25;
  let orderContext;
  planIdForPremiumType = undefined;
  let productIdForGift;
  let skuId;
  let androidShopOrdersEnabled;
  let handlePremiumPurchase;
  let stateFromStoresArray;
  let fetchClaimableGiftingPromotionRewardSkuIds;
  let c34;
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
    premiumType = first4.TIER_2;
  }
  const tmp3 = planIdForPremiumType(memo.useState(premiumType), 2);
  first = tmp3[0];
  planIdForPremiumType = first;
  memo = tmp5;
  revision(setRevision[15]);
  if (planInterval != null) {
    let tmp2Result = tmp2(obj.useState(planInterval), 2);
    first1 = tmp2Result[0];
    memo1 = first1;
    first7 = tmp14;
    let obj1 = _require(tmp7[16]);
    tmp2Result = tmp2(obj.useState(obj1.useGiftStyles()[0]), 2);
    const first2 = tmp2Result[0];
    first = first2;
    first1 = tmp2Result[1];
    let intl = _require(tmp7[17]).intl;
    const tmp2Result1 = tmp2(obj.useState(intl.string(_require(tmp7[17]).t.ZkOo1U)), 2);
    first3 = tmp2Result1[0];
    closure_11 = tmp2Result1[1];
    const tmp2Result2 = tmp2(obj.useState(undefined), 2);
    first4 = tmp2Result2[0];
    closure_13 = tmp2Result2[1];
    const tmp2Result3 = tmp2(obj.useState(undefined), 2);
    const first5 = tmp2Result3[0];
    table = first5;
    jsx = tmp2Result3[1];
    const tmp2Result4 = tmp2(obj.useState(undefined), 2);
    first6 = tmp2Result4[0];
    redux = tmp2Result4[1];
    const tmp2Result5 = tmp2(obj.useState(false), 2);
    first7 = tmp2Result5[0];
    closure_19 = tmp2Result5[1];
    const tmp2Result6 = tmp2(obj.useState(null), 2);
    first8 = tmp2Result6[0];
    c21 = tmp30;
    const tmp2Result7 = tmp2(obj.useState(), 2);
    first9 = tmp2Result7[0];
    c23 = tmp33;
    const tmp2Result8 = tmp2(obj.useState(null), 2);
    first10 = tmp2Result8[0];
    closure_25 = tmp2Result8[1];
    orderContext = _require(tmp7[18]).useOrderContext(initialOrder, "NativeGiftContext");
    let obj3 = _require(tmp7[18]);
    planIdForPremiumType = _require(tmp7[19]).getPlanIdForPremiumType(first, first1);
    let obj4 = _require(tmp7[19]);
    productIdForGift = _require(tmp7[20]).getProductIdForGift(planIdForPremiumType);
    if (null == table[planIdForPremiumType]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Invalid subscription plan for gift purchase: " + planIdForPremiumType);
      throw error;
    } else {
      skuId = tmp40.skuId;
      let tmp15Result = tmp15(tmp7[21]);
      androidShopOrdersEnabled = tmp15Result.useAndroidShopOrdersEnabled({ location: "NativeGiftContext" });
      let items = [androidShopOrdersEnabled, productIdForGift];
      memo = obj.useMemo(() => {
        let tmp;
        if (androidShopOrdersEnabled) {
          let obj = { line_items: null };
          obj = { external_product_id: null };
          obj[0] = productIdForGift;
          const items = [obj];
          obj[0] = items;
          tmp = obj;
        }
        return tmp;
      }, items);
      tmp15Result = tmp15(tmp7[22]);
      handlePremiumPurchase = tmp15Result.useHandlePremiumPurchase();
      const items1 = [first7];
      stateFromStoresArray = tmp15(tmp7[23]).useStateFromStoresArray(items1, () => first7.getGiftPromotionRewardSkuIds());
      const tmp15Result1 = tmp15(tmp7[23]);
      fetchClaimableGiftingPromotionRewardSkuIds = tmp15(tmp7[24]).useFetchClaimableGiftingPromotionRewardSkuIds();
      let tmp41 = null != fetchClaimableGiftingPromotionRewardSkuIds;
      if (tmp41) {
        tmp41 = fetchClaimableGiftingPromotionRewardSkuIds.length > 0;
      }
      c34 = tmp41;
      const tmp15Result2 = tmp15(tmp7[24]);
      enabled = revision(tmp7[25]).useConfig({ location: "NativeGiftContext" }).enabled;
      const items2 = [enabled];
      const effect = obj.useEffect(() => {
        if (enabled) {
          const badge = lib(setRevision[26]).fetchBadge(lib(setRevision[27]).BadgeId.GIFTING);
          const obj = lib(setRevision[26]);
        }
      }, items2);
      const tmp6Result = revision(tmp7[25]);
      const items3 = [first1];
      stateFromStores = tmp15(tmp7[23]).useStateFromStores(items3, () => {
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
      items4[7] = first;
      memo1 = obj.useMemo(() => {
        const obj = { gift_style: closure_0, recipient_id: revision, custom_message: setRevision, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null };
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
          if (memo1 === first4.TIER_2) {
            const items = [tmp5];
          }
          obj[6] = [];
          return obj;
        }
      }, items4);
      const items5 = [first8];
      const effect1 = obj.useEffect(() => {
        if (null != first8) {
          let obj = revision(setRevision[28]);
          obj = { title: null, body: null };
          const intl = lib(setRevision[17]).intl;
          obj[0] = intl.string(lib(setRevision[17]).t.R0RpRX);
          const intl2 = lib(setRevision[17]).intl;
          obj[1] = intl2.string(lib(setRevision[17]).t.CKsXk3);
          obj.show(obj);
          _undefined(null);
        }
      }, items5);
      const items6 = [first9, tmp41];
      const effect2 = obj.useEffect(() => {
        if (c34) {
          const currentUser = first1.getCurrentUser();
          let obj = revision(setRevision[29]);
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          obj = { user_id: null, reward_sku_id: null };
          obj[0] = id;
          obj[1] = first9;
          obj.track(first3.GIFT_PROMOTION_REWARD_SELECTED, obj);
        }
      }, items6);
      ({ order, revision, setRevision, setOrder } = orderContext);
      _require = order;
      first3 = tmp5;
      closure_11 = tmp14;
      first4 = tmp30;
      closure_13 = undefined;
      table = undefined;
      jsx = undefined;
      obj = { orderId: "a", planId: "a", planSelection: "isArray", giftInfo: "slice" };
      obj = { premiumType: null, planInterval: null };
      obj[0] = first;
      obj[1] = first1;
      obj[2] = obj;
      closure_13 = obj.useRef(obj);
      table = obj.useRef(false);
      const tmp2Result9 = tmp2(obj.useState(0), 2);
      jsx = tmp2Result9[1];
      const items7 = [order, revision, planIdForPremiumType, memo, memo1, first7, first, first1, tmp5, tmp14, setRevision, setOrder, tmp30, tmp2Result9[0]];
      const effect3 = obj.useEffect(() => {
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
                    let tmp14 = closure_13.current.planId !== planIdForPremiumType;
                    if (tmp14) {
                      let tmp15 = null == sku_id;
                      if (!tmp15) {
                        let skuId;
                        if (ref[tmp13] != null) {
                          skuId = tmp17.skuId;
                        }
                        tmp15 = skuId === sku_id;
                      }
                      tmp14 = tmp15;
                    }
                    const setOrder = tmp14;
                    planIdForPremiumType = tmp20;
                    let c5 = false;
                    let id2;
                    if (tmp != null) {
                      id2 = tmp.id;
                    }
                    tmp11.current = true;
                    first7 = tmp24;
                    const promise = setOrder(function*() {
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
                              let closure_1 = tmp3;
                              let revision = tmp7;
                              revision = undefined;
                              if (v0) {
                                v0 = 1;
                                if (null != c5) {
                                  let obj11 = id(id1[13]);
                                  const obj1 = { orderId: null, expectedRevision: null, orderLineItems: null, externalGatewayFacet: null };
                                  obj1[0] = outer1_0;
                                  obj1[1] = outer1_7;
                                  const obj2 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: null };
                                  ({ sku_id: obj14[0], quantity: obj14[1], purchase_type: obj14[2] } = outer1_1);
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
                                  let obj8 = id(id1[13]);
                                  let obj4 = { orderId: null, orderLineItemId: null, subscriptionPlanId: null, expectedRevision: null };
                                  obj4[0] = outer1_0;
                                  obj4[1] = outer1_2;
                                  obj4[2] = c4;
                                  obj4[3] = outer1_7;
                                  c4 = 3;
                                  c5 = 1;
                                  const obj5 = { value: null, done: false };
                                  obj5[0] = obj8.patchOrderLineItem(obj4);
                                  return obj5;
                                }
                              } else if (c4) {
                                obj4 = id(id1[13]);
                                const obj6 = { orderId: null, giftInfo: null, expectedRevision: null };
                                obj6[0] = revision;
                                const obj7 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
                                obj7[0] = outer1_6.recipient_id;
                                obj7[1] = outer1_6.gift_style;
                                obj7[2] = outer1_6.emoji_id;
                                obj7[3] = outer1_6.emoji_name;
                                obj7[4] = outer1_6.sound_id;
                                obj7[5] = outer1_6.reward_sku_ids;
                                obj7[6] = outer1_6.custom_message;
                                obj6[1] = obj7;
                                obj6[2] = createEmptyPromotionsByType;
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
                              outer1_10(outer1_13.current.planSelection.premiumType);
                              outer1_11(outer1_13.current.planSelection.planInterval);
                            }
                            throw outer1_1;
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
                                outer1_0 = arg1;
                                if (outer1_13.current.orderId !== map) {
                                  v0 = 0;
                                  c5 = 3;
                                  return { value: "HermesInternal", done: null };
                                } else {
                                  outer1_7 = revision.revision;
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
                                createEmptyPromotionsByType = arg1;
                                if (outer1_13.current.orderId !== map) {
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
                              createEmptyPromotionsByType = arg1;
                              if (outer1_13.current.orderId === map) {
                                outer1_13.current.giftInfo = outer1_6;
                                outer1_2(createEmptyPromotionsByType);
                              }
                            }
                            outer1_13.current.planId = c4;
                            obj11 = { premiumType: null, planInterval: null };
                            obj11[0] = outer1_8;
                            obj11[1] = outer1_9;
                            outer1_13.current.planSelection = obj11;
                            outer1_2(createEmptyPromotionsByType);
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
                    setOrder(function*() {
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
                              let closure_1 = tmp3;
                              let revision = tmp7;
                              revision = undefined;
                              if (v0) {
                                v0 = 1;
                                if (null != c5) {
                                  let obj11 = id(id1[13]);
                                  const obj1 = { orderId: null, expectedRevision: null, orderLineItems: null, externalGatewayFacet: null };
                                  obj1[0] = outer1_0;
                                  obj1[1] = outer1_7;
                                  const obj2 = { sku_id: null, quantity: null, purchase_type: null, subscription_plan_id: null };
                                  ({ sku_id: obj14[0], quantity: obj14[1], purchase_type: obj14[2] } = outer1_1);
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
                                  let obj8 = id(id1[13]);
                                  let obj4 = { orderId: null, orderLineItemId: null, subscriptionPlanId: null, expectedRevision: null };
                                  obj4[0] = outer1_0;
                                  obj4[1] = outer1_2;
                                  obj4[2] = c4;
                                  obj4[3] = outer1_7;
                                  c4 = 3;
                                  c5 = 1;
                                  const obj5 = { value: null, done: false };
                                  obj5[0] = obj8.patchOrderLineItem(obj4);
                                  return obj5;
                                }
                              } else if (c4) {
                                obj4 = id(id1[13]);
                                const obj6 = { orderId: null, giftInfo: null, expectedRevision: null };
                                obj6[0] = revision;
                                const obj7 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
                                obj7[0] = outer1_6.recipient_id;
                                obj7[1] = outer1_6.gift_style;
                                obj7[2] = outer1_6.emoji_id;
                                obj7[3] = outer1_6.emoji_name;
                                obj7[4] = outer1_6.sound_id;
                                obj7[5] = outer1_6.reward_sku_ids;
                                obj7[6] = outer1_6.custom_message;
                                obj6[1] = obj7;
                                obj6[2] = createEmptyPromotionsByType;
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
                              outer1_10(outer1_13.current.planSelection.premiumType);
                              outer1_11(outer1_13.current.planSelection.planInterval);
                            }
                            throw outer1_1;
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
                                outer1_0 = arg1;
                                if (outer1_13.current.orderId !== map) {
                                  v0 = 0;
                                  c5 = 3;
                                  return { value: "HermesInternal", done: null };
                                } else {
                                  outer1_7 = revision.revision;
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
                                createEmptyPromotionsByType = arg1;
                                if (outer1_13.current.orderId !== map) {
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
                              createEmptyPromotionsByType = arg1;
                              if (outer1_13.current.orderId === map) {
                                outer1_13.current.giftInfo = outer1_6;
                                outer1_2(createEmptyPromotionsByType);
                              }
                            }
                            outer1_13.current.planId = c4;
                            obj11 = { premiumType: null, planInterval: null };
                            obj11[0] = outer1_8;
                            obj11[1] = outer1_9;
                            outer1_13.current.planSelection = obj11;
                            outer1_2(createEmptyPromotionsByType);
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
                    })().catch((error) => {
                      let obj = id(setRevision[14]);
                      obj = { orderId: id, planId: closure_4, needsPlanSync: frozen, needsGiftSync: closure_4 };
                      const result = obj.captureBillingException(error, { tags: { source: "NativeGiftContext_syncOrder" }, extra: obj });
                      obj = { error, orderId: id };
                      first6.error("Failed to sync order", obj);
                      if (!c5) {
                        outer1_12(error);
                      }
                    }).finally(() => {
                      outer1_14.current = false;
                      if (outer1_13.current.orderId !== id2) {
                        outer1_15((arg0) => arg0 + 1);
                      }
                    });
                    return () => {
                      let c5 = true;
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
        let closure_0 = arg0;
        function handleGiftCodeCreate(giftCode) {
          const fromServer = first.createFromServer(giftCode.giftCode);
          if (fromServer.subscriptionPlanId === outer1_27) {
            outer1_17(fromServer);
            let tmp6 = null != handleGiftCodeCreate;
            if (tmp6) {
              const location_stack = lib.location_stack;
              let hasItem;
              if (location_stack != null) {
                hasItem = location_stack.includes(revision(setRevision[30]).PREMIUM_GIFT_INTENT_CARD);
              }
              tmp6 = hasItem;
            }
            if (tmp6) {
              const result = lib(setRevision[31]).logGiftIntentFlowPurchasedGift(tmp18);
              const obj = lib(setRevision[31]);
            }
            if (lib != null) {
              lib();
            }
            revision(setRevision[32]).unsubscribe("GIFT_CODE_CREATE", handleGiftCodeCreate);
            const obj2 = revision(setRevision[32]);
            tmp18 = handleGiftCodeCreate;
          }
          outer1_19(false);
        }
        return handleGiftCodeCreate;
      }, items8);
      _require = undefined;
      _require = setOrder((arg0) => {
        let closure_0 = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        return (function*(arg0) {
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
                  let closure_2 = tmp3;
                  let closure_1 = tmp7;
                  const subscription = revision(setRevision[32]).subscribe("GIFT_CODE_CREATE", callback);
                  const obj11 = revision(setRevision[32]);
                  if (!obj12.isAndroid()) {
                    if (null != outer1_26.orderId) {
                      let c4 = 1;
                      let obj1 = { orderId: null, skuId: null };
                      obj1[0] = outer1_26.orderId;
                      obj1[1] = outer1_29;
                      first6.info("Starting order signing with pre-created order", obj1);
                      c5 = 2;
                      c6 = 1;
                      const obj2 = { value: null, done: false };
                      obj2[0] = callback(setRevision[13]).markOrderAsSigningInProgress(outer1_26.orderId);
                      return obj2;
                    }
                  }
                  obj12 = callback(setRevision[33]);
                }
              } else {
                if (1 === tmp7) {
                  c4 = 0;
                  callback = frozen;
                  obj1 = callback(setRevision[14]);
                  const obj3 = { tags: null, extra: null };
                  obj3[0] = { source: "NativeGiftContext_handlePurchaseComplete_sign" };
                  const obj4 = { skuId: null, orderId: null };
                  obj4[0] = outer1_29;
                  obj4[1] = outer1_26.orderId;
                  obj3[1] = obj4;
                  const result = obj1.captureBillingException(callback, obj3);
                  const obj5 = { error: null, skuId: null, orderId: null };
                  obj5[0] = callback;
                  obj5[1] = outer1_29;
                  obj5[2] = outer1_26.orderId;
                  first6.error("Failed to sign order in purchase completion", obj5);
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
              frozen = tmp31;
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
        revision(setRevision[32]).unsubscribe("GIFT_CODE_CREATE", arg0);
        setOrder(lib(setRevision[34]).PaymentFlowStep.PLAN_SELECT);
        callback(false);
      }, items10);
      const items11 = [callback, setCurrentAnalyticsStep, memo1, handlePremiumPurchase, productIdForGift, basePurchaseAnalytics, callback1, callback2, orderContext.orderId, first3];
      callback3 = obj.useCallback((arg0) => {
        let obj = memo1;
        if (null != memo1.getNextTier(lib(setRevision[27]).BadgeId.GIFTING)) {
          const singleRequirementProgress = obj.getSingleRequirementProgress(tmp(tmp2[27]).BadgeId.GIFTING);
          let current;
          if (singleRequirementProgress != null) {
            current = singleRequirementProgress.current;
          }
          if (current == null) {
            current = null;
          }
          callback2(current);
        } else {
          callback2(null);
        }
        callback(true);
        let closure_1 = callback(arg0);
        if (tmpResult.isAndroid()) {
          function handleGPlayUpdatePurchaseAction(isActivePurchase) {
            if (isActivePurchase.isActivePurchase) {
              revision(setRevision[32]).unsubscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
              if (isActivePurchase.billingResult !== constants.OK) {
                outer1_40(closure_1);
              }
              const obj = revision(setRevision[32]);
            }
          }
          const subscription = revision(tmp2[32]).subscribe("GPLAY_UPDATE_PURCHASE_STATE", handleGPlayUpdatePurchaseAction);
          const obj3 = revision(tmp2[32]);
        }
        setOrder(lib(setRevision[34]).PaymentFlowStep.REVIEW);
        obj = { productId: productIdForGift, isGift: true, analyticsLoadId: lib.load_id, analyticsLocation: lib.location, analyticsLocations: lib.location_stack, allowPlanChange: false, giftInfoOptions: memo1, onPurchaseComplete: null, onPurchaseError: null, orderId: null, analyticsData: null };
        lib = setOrder(function*() {
          if (c0 === 2) {
            c0 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
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
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  c1 = 1;
                  c0 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = outer1_39(c1);
                  return obj1;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                c0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
            } catch (tmp7) {
              c0 = tmp;
              throw tmp7;
            }
          }
        });
        obj[7] = function() {
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
          return outer1_40(closure_1);
        };
        obj[9] = orderContext.orderId;
        obj = { load_id: lib.load_id, succeededOnlyFields: null };
        let obj1 = { is_custom_message_edited: null, is_custom_emoji_sound_available: false };
        const intl = tmp(tmp2[17]).intl;
        obj1[0] = first3 !== intl.string(lib(setRevision[17]).t.ZkOo1U);
        obj[1] = obj1;
        obj[10] = obj;
        handlePremiumPurchase(obj);
      }, items11);
      const items12 = [orderContext, recipientUserId, stateFromStores, first2, first, first1, productIdForGift, first3, first4, first5, first6, first7, first10, basePurchaseAnalytics, setCurrentAnalyticsStep, tmp5, tmp14, onClose, callback3, stateFromStoresArray, fetchClaimableGiftingPromotionRewardSkuIds, first9, tmp33];
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
        obj.customGiftMessage = first3;
        obj.soundEffect = first4;
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
        obj.setSelectedGiftingPromotionReward = c23;
        return obj;
      }, items12);
      obj1[1] = children;
      return <redux.Provider value={null}>{null}</redux.Provider>;
    }
    let obj5 = _require(tmp7[20]);
  }
};
export const useNativeGiftContext = tmp6;
export const useForwardedNativeGiftContext = tmp7;