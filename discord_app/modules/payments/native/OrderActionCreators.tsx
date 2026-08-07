// discord_app/modules/payments/native/OrderActionCreators.tsx
import _createGatewayCheckoutContext from "_createGatewayCheckoutContext";
import { OrderStatus } from "CustomCheckoutFlow";
import { Endpoints } from "ME";

const require = arg1;
function getOrders(arg0) {
  const self = this;
  const apply = _getOrders.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getOrders() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (logger === 2) {
        logger = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          logger = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              logger = 3;
              throw body;
            } else if (arg0 === 2) {
              logger = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const table = tmp3;
              let closure_1 = tmp5;
              let c4 = 1;
              let status;
              if (callback != null) {
                status = tmp40.status;
              }
              const obj1 = {};
              if (null != status) {
                const items = [tmp40.status];
                obj1.statuses = items;
              }
              let skuId;
              if (callback != null) {
                skuId = tmp40.skuId;
              }
              if (null != skuId) {
                obj1.sku_id = tmp40.skuId;
              }
              let createdAfter;
              if (callback != null) {
                createdAfter = tmp40.createdAfter;
              }
              if (null != createdAfter) {
                obj1.created_after = tmp40.createdAfter;
              }
              let isGift;
              if (callback != null) {
                isGift = tmp40.isGift;
              }
              if (null != isGift) {
                obj1.is_gift = tmp40.isGift;
              }
              let paymentGateway;
              if (callback != null) {
                paymentGateway = tmp40.paymentGateway;
              }
              if (null != paymentGateway) {
                obj1.payment_gateway = tmp40.paymentGateway;
              }
              const HTTP = callback(outer1_2[4]).HTTP;
              const obj2 = { url: null, query: null, rejectWithError: true };
              obj2[0] = constants.ORDER_LIST;
              obj2[1] = obj1;
              constants = 2;
              logger = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            closure_1 = _createGatewayCheckoutContext;
            const obj4 = { error: null, options: null };
            obj4[0] = closure_1;
            obj4[1] = callback;
            logger.error("failed to fetch orders", obj4);
            obj3 = callback(table[5]);
            const obj5 = { tags: null, extra: null };
            obj5[0] = { source: "OrderActionCreators_getOrders" };
            const obj6 = { options: null };
            obj6[0] = callback;
            obj5[1] = obj6;
            const result = obj3.captureBillingException(closure_1, obj5);
            throw closure_1;
          } else if (arg0 === 1) {
            logger = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            logger = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = body;
            return obj7;
          } else {
            body = body.body;
            if (!body) {
              body = [];
            }
            c4 = 0;
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          }
        } catch (tmp31) {
          _createGatewayCheckoutContext = tmp31;
          if (tmp4 === c4) {
            logger = tmp2;
            throw tmp31;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  });
  const _getOrders = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function createOrder(arg0) {
  const self = this;
  const apply = _createOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createOrder() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      if (logger === 2) {
        logger = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          logger = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              logger = 3;
              throw body;
            } else if (arg0 === 2) {
              logger = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              constants = undefined;
              logger = undefined;
              c7 = undefined;
              let dispatchResult = callback;
              ({ orderLineItems: c0, paymentGateway: c1, recipientUserId: c2, isGift: c3, giftInfo: c4, subscriptionFacet: c5, externalGatewayFacet: c6, countryCode: c7 } = callback);
              let obj2;
              let obj3;
              body = undefined;
              constants = 1;
              logger = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw body;
            } else if (arg0 === 2) {
              logger = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              dispatchResult = callback2;
              dispatchResult = dependencyMap;
              dispatchResult = callback2(709).dispatch({ type: "ORDER_CREATE_START" });
              dispatchResult = callback2;
              c4 = 1;
              dispatchResult = c3;
              if (c3) {
                obj2 = { recipient_id: null };
                obj2[0] = dependencyMap;
                let gift_style;
                if (c4 != null) {
                  gift_style = c4.gift_style;
                }
                if (null != gift_style) {
                  obj2.gift_style = c4.gift_style;
                }
                let emoji_id;
                if (c4 != null) {
                  emoji_id = c4.emoji_id;
                }
                if (null != emoji_id) {
                  obj2.emoji_id = c4.emoji_id;
                }
                let emoji_name;
                if (c4 != null) {
                  emoji_name = c4.emoji_name;
                }
                if (null != emoji_name) {
                  obj2.emoji_name = c4.emoji_name;
                }
                let sound_id;
                if (c4 != null) {
                  sound_id = c4.sound_id;
                }
                if (null != sound_id) {
                  obj2.sound_id = c4.sound_id;
                }
                let reward_sku_ids;
                if (c4 != null) {
                  reward_sku_ids = c4.reward_sku_ids;
                }
                if (null != reward_sku_ids) {
                  obj2.reward_sku_ids = c4.reward_sku_ids;
                }
                let prop;
                if (c4 != null) {
                  prop = c4.custom_message_contents;
                }
                if (null != prop) {
                  obj2.custom_message_contents = c4.custom_message_contents;
                }
              }
              obj3 = { order_line_items: null, billing_facet: null, subscription_facet: null };
              obj3[0] = callback;
              const obj4 = { payment_gateway: null };
              obj4[0] = callback2;
              obj3[1] = obj4;
              obj3[2] = constants;
              if (null != c7) {
                const obj5 = { request_gateway_country_code: null };
                obj5[0] = c7;
                obj3.location_facet = obj5;
              }
              if (c3) {
                let obj6 = { is_gift: null, gift_customization: null };
                obj6[0] = c3;
                obj6[1] = obj2;
                obj3.gifting_facet = obj6;
              }
              if (null != logger) {
                obj3.external_gateway_facet = logger;
              }
              const HTTP = callback(530).HTTP;
              const obj7 = { url: null, body: null, rejectWithError: true, retries: 3 };
              obj7[0] = constants.ORDER_CREATE;
              obj7[1] = obj3;
              constants = 4;
              logger = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = HTTP.post(obj7);
              return obj8;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            let closure_11 = c3;
            const obj9 = { response: null };
            obj9[0] = closure_11;
            logger.error("failed to create order", obj9);
            obj6 = callback2(709);
            constants = 3;
            logger = 1;
            const obj10 = { value: null, done: false };
            obj10[0] = obj6.dispatch({ type: "ORDER_CREATE_FAIL" });
            return obj10;
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw body;
            } else if (arg0 === 2) {
              logger = 3;
              const obj11 = { value: null, done: true };
              obj11[0] = body;
              return obj11;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("Failed to create order: " + closure_11);
              throw error;
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 0;
              logger = 3;
              const obj12 = { value: null, done: true };
              obj12[0] = body;
              return obj12;
            } else {
              body = body.body;
              const obj13 = { orderId: null, paymentGateway: null, body: null };
              obj13[0] = body.id;
              obj13[1] = callback2;
              obj13[2] = obj3;
              logger.info("created order", obj13);
              const obj14 = { type: "ORDER_CREATE_SUCCESS", orderId: null, order: null };
              obj14[1] = body.id;
              obj14[2] = body;
              constants = 5;
              logger = 1;
              const obj15 = { value: null, done: false };
              obj15[0] = callback2(709).dispatch(obj14);
              return obj15;
            }
          } else if (arg0 === 1) {
            logger = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            logger = 3;
            const obj16 = { value: null, done: true };
            obj16[0] = body;
            return obj16;
          } else {
            c4 = 0;
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          }
        } catch (tmp78) {
          c3 = tmp78;
          if (tmp4 === c4) {
            logger = tmp2;
            throw tmp78;
          } else {
            constants = dispatchResult;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _createOrder = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getOrCreateOrder() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      c1 = 0;
      ({ skuId: c0, paymentGateway: c1, recipientUserId: c2, purchaseType: c3, isGift: c4, giftInfo: c5, createdAfter: c6, subscriptionPlanId: c7, externalGatewayFacet: c8 } = c0);
      yield "PX_8";
      const obj2 = { isGift: null, status: null, skuId: null, createdAfter: null };
      obj2[0] = constants;
      obj2[1] = constants.DRAFT;
      obj2[2] = c0;
      obj2[3] = logger;
      const lib = yield callback(obj2);
      if (lib.length > 0) {
        const id = lib[0];
        const obj5 = { orderId: null, skuId: null, isGift: null };
        obj5[0] = id.id;
        obj5[1] = c0;
        obj5[2] = constants;
        logger.info("reusing existing draft order", obj5);
        return id;
      }
      const obj7 = { paymentGateway: null, recipientUserId: null, isGift: null, giftInfo: null, orderLineItems: null, externalGatewayFacet: null };
      obj7[0] = c1;
      obj7[1] = c2;
      obj7[2] = constants;
      obj7[3] = c5;
      const obj8 = { sku_id: null, quantity: 1, purchase_type: null, subscription_plan_id: null };
      obj8[0] = c0;
      obj8[2] = c3;
      obj8[3] = callback;
      const items = [obj8];
      obj7[4] = items;
      obj7[5] = c8;
      yield lib(obj7);
      return arg1;
    })();
    iter.next();
    return iter;
  });
  const _getOrCreateOrder = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _patchOrderLineItem() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      if (logger === 2) {
        logger = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          logger = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              ({ orderId: c0, orderLineItemId: c1, subscriptionPlanId: c2, expectedRevision: c3 } = callback);
              let c4;
              c5 = undefined;
              c5 = 1;
              logger = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              callback2(709).dispatch({ type: "ORDER_UPDATE_START" });
              c4 = 1;
              const obj2 = { expected_revision: null, subscription_plan_id: null };
              obj2[0] = c3;
              obj2[1] = dependencyMap;
              c4 = obj2;
              const HTTP = callback(530).HTTP;
              const obj3 = { url: null, body: null, rejectWithError: true };
              obj3[0] = c5.ORDER_PATCH_LINE_ITEM(callback, callback2);
              obj3[1] = c4;
              c5 = 4;
              logger = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj3);
              return obj4;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            logger = c3;
            let obj5 = callback(3962);
            obj5 = { tags: null, extra: null };
            obj5[0] = { source: "OrderActionCreators_patchOrderLineItem" };
            const obj6 = { orderId: null, orderLineItemId: null, subscriptionPlanId: null };
            obj6[0] = callback;
            obj6[1] = callback2;
            obj6[2] = dependencyMap;
            obj5[1] = obj6;
            const result = obj5.captureBillingException(logger, obj5);
            const obj7 = { error: null, orderId: null, orderLineItemId: null };
            obj7[0] = logger;
            obj7[1] = callback;
            obj7[2] = callback2;
            logger.error("failed to update order line item id", obj7);
            let obj9 = callback2(709);
            c5 = 3;
            logger = 1;
            const obj8 = { value: null, done: false };
            obj8[0] = obj9.dispatch({ type: "ORDER_UPDATE_FAIL" });
            return obj8;
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              obj9 = { value: null, done: true };
              obj9[0] = arg1;
              return obj9;
            } else {
              throw logger;
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              logger = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = arg1;
              return obj10;
            } else {
              c5 = arg1;
              const obj11 = { orderId: null, orderLineItemId: null, body: null };
              obj11[0] = callback;
              obj11[1] = callback2;
              obj11[2] = c4;
              logger.info("updated order line item", obj11);
              const obj12 = { type: "ORDER_UPDATE_SUCCESS", orderId: null };
              obj12[1] = callback;
              c5 = 5;
              logger = 1;
              const obj13 = { value: null, done: false };
              obj13[0] = callback2(709).dispatch(obj12);
              return obj13;
            }
          } else if (arg0 === 1) {
            logger = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            logger = 3;
            const obj14 = { value: null, done: true };
            obj14[0] = arg1;
            return obj14;
          } else {
            c4 = 0;
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = c5.body.revision;
            return obj;
          }
        } catch (tmp31) {
          c3 = tmp31;
          if (tmp4 === c4) {
            logger = tmp2;
            throw tmp31;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _patchOrderLineItem = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _patchOrder() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      if (logger === 2) {
        logger = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          logger = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              logger = 3;
              throw body;
            } else if (arg0 === 2) {
              logger = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              ({ orderId: c0, expectedRevision: c1, orderLineItems: c2, subscriptionFacet: c3, externalGatewayFacet: c4 } = callback);
              c5 = undefined;
              logger = undefined;
              c5 = 1;
              logger = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw body;
            } else if (arg0 === 2) {
              logger = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              callback2(709).dispatch({ type: "ORDER_UPDATE_START" });
              c4 = 1;
              const obj2 = { expected_revision: null };
              obj2[0] = callback2;
              c5 = obj2;
              if (null != dependencyMap) {
                c5.order_line_items = dependencyMap;
              }
              if (null != c3) {
                c5.subscription_facet = c3;
              }
              if (null != c4) {
                c5.external_gateway_facet = c4;
              }
              const HTTP = callback(530).HTTP;
              const obj3 = { url: null, body: null, rejectWithError: true };
              obj3[0] = c5.ORDER_UPDATE(callback);
              obj3[1] = c5;
              c5 = 4;
              logger = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj3);
              return obj4;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            let closure_7 = c3;
            let obj5 = callback(3962);
            obj5 = { tags: null, extra: null };
            obj5[0] = { source: "OrderActionCreators_patchOrder" };
            const obj6 = { orderId: null, orderLineItems: null };
            obj6[0] = callback;
            obj6[1] = dependencyMap;
            obj5[1] = obj6;
            const result = obj5.captureBillingException(closure_7, obj5);
            const obj7 = { error: null, orderId: null };
            obj7[0] = closure_7;
            obj7[1] = callback;
            logger.error("failed to patch order", obj7);
            let obj9 = callback2(709);
            c5 = 3;
            logger = 1;
            const obj8 = { value: null, done: false };
            obj8[0] = obj9.dispatch({ type: "ORDER_UPDATE_FAIL" });
            return obj8;
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw body;
            } else if (arg0 === 2) {
              logger = 3;
              obj9 = { value: null, done: true };
              obj9[0] = body;
              return obj9;
            } else {
              throw closure_7;
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 0;
              logger = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = body;
              return obj10;
            } else {
              logger = body.body;
              const obj11 = { orderId: null, body: null };
              obj11[0] = callback;
              obj11[1] = c5;
              logger.info("patched order", obj11);
              const obj12 = { type: "ORDER_UPDATE_SUCCESS", orderId: null };
              obj12[1] = callback;
              c5 = 5;
              logger = 1;
              const obj13 = { value: null, done: false };
              obj13[0] = callback2(709).dispatch(obj12);
              return obj13;
            }
          } else if (arg0 === 1) {
            logger = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            logger = 3;
            const obj14 = { value: null, done: true };
            obj14[0] = body;
            return obj14;
          } else {
            c4 = 0;
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = logger;
            return obj;
          }
        } catch (tmp48) {
          c3 = tmp48;
          if (tmp4 === c4) {
            logger = tmp2;
            throw tmp48;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _patchOrder = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateOrder() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      if (logger === 2) {
        logger = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          logger = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp3;
              let lib = tmp7;
              let callback;
              lib = undefined;
              dependencyMap = undefined;
              ({ orderId: c0, giftInfo: c1, expectedRevision: c2 } = callback);
              let obj2;
              let c4;
              c5 = undefined;
              c5 = 1;
              logger = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              lib(709).dispatch({ type: "ORDER_UPDATE_START" });
              c4 = 1;
              obj2 = { expected_revision: null };
              obj2[0] = dependencyMap;
              if (null != lib) {
                c4 = {};
                if (null != lib.recipient_id) {
                  c4.recipient_id = lib.recipient_id;
                }
                if (null != lib.gift_style) {
                  c4.gift_style = lib.gift_style;
                }
                if (null != lib.emoji_id) {
                  c4.emoji_id = lib.emoji_id;
                }
                if (null != lib.emoji_name) {
                  c4.emoji_name = lib.emoji_name;
                }
                if (null != lib.sound_id) {
                  c4.sound_id = lib.sound_id;
                }
                if (null != lib.reward_sku_ids) {
                  c4.reward_sku_ids = lib.reward_sku_ids;
                }
                if (null != lib.custom_message_contents) {
                  c4.custom_message_contents = lib.custom_message_contents;
                }
                const obj3 = { is_gift: true, gift_customization: null };
                obj3[1] = c4;
                obj2.gifting_facet = obj3;
              }
              const HTTP = callback(530).HTTP;
              const obj4 = { url: null, body: null, rejectWithError: true };
              obj4[0] = c5.ORDER_UPDATE(callback);
              obj4[1] = obj2;
              c5 = 4;
              logger = 1;
              let obj5 = { value: null, done: false };
              obj5[0] = HTTP.patch(obj4);
              return obj5;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            logger = obj2;
            obj5 = callback(3962);
            const obj6 = { tags: null, extra: null };
            obj6[0] = { source: "OrderActionCreators_updateOrder" };
            const obj7 = { orderId: null, giftInfo: null };
            obj7[0] = callback;
            obj7[1] = lib;
            obj6[1] = obj7;
            const result = obj5.captureBillingException(logger, obj6);
            const obj8 = { error: null, orderId: null };
            obj8[0] = logger;
            obj8[1] = callback;
            logger.error("failed to update order", obj8);
            let obj9 = lib(709);
            c5 = 3;
            logger = 1;
            obj9 = { value: null, done: false };
            obj9[0] = obj9.dispatch({ type: "ORDER_UPDATE_FAIL" });
            return obj9;
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = arg1;
              return obj10;
            } else {
              throw logger;
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              logger = 3;
              const obj11 = { value: null, done: true };
              obj11[0] = arg1;
              return obj11;
            } else {
              c5 = arg1;
              const obj12 = { orderId: null, body: null };
              obj12[0] = callback;
              obj12[1] = obj2;
              logger.info("updated order with gift customization", obj12);
              const obj13 = { type: "ORDER_UPDATE_SUCCESS", orderId: null };
              obj13[1] = callback;
              c5 = 5;
              logger = 1;
              const obj14 = { value: null, done: false };
              obj14[0] = lib(709).dispatch(obj13);
              return obj14;
            }
          } else if (arg0 === 1) {
            logger = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            logger = 3;
            const obj15 = { value: null, done: true };
            obj15[0] = arg1;
            return obj15;
          } else {
            c4 = 0;
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = c5.body.revision;
            return obj;
          }
        } catch (tmp72) {
          obj2 = tmp72;
          if (tmp4 === c4) {
            logger = tmp2;
            throw tmp72;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _updateOrder = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function discardOrder(id) {
  const self = this;
  const apply = _discardOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _discardOrder() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      let closure_1 = tmp4;
      const HTTP = lib(table[4]).HTTP;
      const obj1 = { url: null, rejectWithError: false };
      obj1[0] = outer1_5.ORDER_DISCARD(lib);
      lib = yield HTTP.post(obj1);
      if (null == lib.body) {
        const _Error = Error;
        const error = new Error("Invalid discard order response");
        throw error;
      }
      return lib.body;
    })();
  });
  const _discardOrder = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _cancelSigningAndDiscardOrder() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const table = tmp3;
      let c4 = 1;
      yield outer1_21(callback);
      if (1 === tmp7) {
        c4 = 0;
        let closure_1 = _createGatewayCheckoutContext;
        let obj3 = callback(table[5]);
        const obj2 = { tags: null, extra: null };
        obj2[0] = { source: "OrderActionCreators_cancelSigningAndDiscardOrder" };
        obj3 = { orderId: null };
        obj3[0] = callback;
        obj2[1] = obj3;
        const result = obj3.captureBillingException(closure_1, obj2);
        let c6 = 3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          let c5 = 3;
          c6 = 1;
          const obj5 = { value: null, done: false };
          obj5[0] = callback2(callback);
          return obj5;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  const _cancelSigningAndDiscardOrder = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _markOrderAsSigningInProgress() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (null != outer1_11) {
              let obj1 = { orderId: null };
              obj1[0] = tmp15;
              outer1_6.info("signing already in progress, awaiting existing promise", obj1);
              c2 = 1;
              c1 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = outer1_11;
              return obj2;
            } else {
              const tmp6 = outer1_3(function*() {
                if (c5 === 2) {
                  c5 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp7 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    return { value: "T", done: null };
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
                        let closure_1 = tmp4;
                        let c0 = tmp8;
                        c0 = undefined;
                        const obj1 = { type: "ORDER_MARK_SIGNING_START", orderId: null };
                        obj1[1] = outer1_0;
                        outer1_1(outer1_2[6]).dispatch(obj1);
                        let c3 = 2;
                        const obj22 = outer1_1(outer1_2[6]);
                        c4 = 4;
                        c5 = 1;
                        const obj2 = { value: null, done: false };
                        obj2[0] = outer1_0(outer1_2[7]).getOrder(outer1_0);
                        return obj2;
                      }
                    } else if (1 === tmp8) {
                      c3 = 0;
                      let outer1_11 = null;
                      throw closure_2;
                    } else if (2 === tmp8) {
                      c3 = 1;
                      outer1_1 = closure_2;
                      let obj6 = outer1_0(outer1_2[5]);
                      const _Error2 = Error;
                      const error = new Error("failed to mark order as signing in progress");
                      const obj3 = { tags: null, extra: null };
                      obj3[0] = { source: "OrderActionCreators_markOrderAsSigningInProgress" };
                      const obj4 = { orderId: null, response: null };
                      obj4[0] = c0;
                      obj4[1] = outer1_1;
                      obj3[1] = obj4;
                      const result = obj6.captureBillingException(error, obj3);
                      const obj5 = { response: null, orderId: null };
                      obj5[0] = outer1_1;
                      obj5[1] = c0;
                      outer1_6.error("failed to mark order as signing in progress", obj5);
                      let obj10 = outer1_1(outer1_2[6]);
                      obj6 = { type: "ORDER_MARK_SIGNING_FAIL", orderId: null };
                      obj6[1] = c0;
                      c4 = 3;
                      c5 = 1;
                      const obj7 = { value: null, done: false };
                      obj7[0] = obj10.dispatch(obj6);
                      return obj7;
                    } else if (3 === tmp8) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        outer1_11 = null;
                        c5 = 3;
                        const obj8 = { value: null, done: true };
                        obj8[0] = arg1;
                        return obj8;
                      } else {
                        throw outer1_1;
                      }
                    } else if (4 === tmp8) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        outer1_11 = null;
                        c5 = 3;
                        const obj9 = { value: null, done: true };
                        obj9[0] = arg1;
                        return obj9;
                      } else {
                        outer1_0 = arg1;
                        if (null == outer1_0) {
                          const _Error = Error;
                          const _HermesInternal = HermesInternal;
                          const error1 = new Error("Order " + outer1_0 + " not found");
                          throw error1;
                        } else {
                          const HTTP = outer1_0(outer1_2[4]).HTTP;
                          obj10 = { url: null, body: null, rejectWithError: true };
                          obj10[0] = c5.ORDER_SIGN(c0);
                          const obj11 = { expected_revision: null };
                          obj11[0] = c0.revision;
                          obj10[1] = obj11;
                          c4 = 5;
                          c5 = 1;
                          const obj12 = { value: null, done: false };
                          obj12[0] = HTTP.post(obj10);
                          return obj12;
                        }
                      }
                    } else if (5 === tmp8) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        outer1_11 = null;
                        c5 = 3;
                        const obj13 = { value: null, done: true };
                        obj13[0] = arg1;
                        return obj13;
                      } else {
                        const obj14 = { orderId: null, revision: null };
                        obj14[0] = c0;
                        obj14[1] = c0.revision;
                        outer1_6.info("marked order as signing in progress", obj14);
                        const obj15 = { type: "ORDER_MARK_SIGNING_SUCCESS", orderId: null };
                        obj15[1] = c0;
                        c4 = 6;
                        c5 = 1;
                        const obj16 = { value: null, done: false };
                        obj16[0] = outer1_1(outer1_2[6]).dispatch(obj15);
                        return obj16;
                      }
                    } else if (arg0 === 1) {
                      c5 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      outer1_11 = null;
                      c5 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      c3 = 0;
                      outer1_11 = null;
                      c5 = 3;
                      return { value: "T", done: null };
                    }
                  } catch (tmp45) {
                    closure_2 = tmp45;
                    if (tmp5 === c3) {
                      c5 = tmp3;
                      throw tmp45;
                    } else if (tmp2 === tmp47) {
                      c4 = tmp2;
                    } else {
                      c4 = tmp;
                    }
                  }
                }
              })();
              outer1_11 = tmp6;
              c2 = 2;
              c1 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = tmp6;
              return obj3;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              let obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              c1 = 3;
              let obj5 = { value: null, done: true };
              obj5[0] = undefined;
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp9) {
          c1 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const _markOrderAsSigningInProgress = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function cancelOrderSigning(outer1_11) {
  const self = this;
  const apply = _cancelOrderSigning.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _cancelOrderSigning() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const value = outer1_20.get(closure_0);
              if (null != value) {
                let obj1 = { orderId: null };
                obj1[0] = tmp16;
                outer1_6.info("cancel signing already in progress for order, awaiting existing promise", obj1);
                c2 = 1;
                c1 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = value;
                return obj2;
              } else {
                const tmp6 = outer1_3(function*() {
                  if (c5 === 2) {
                    c5 = 3;
                    HermesBuiltin.throwTypeError();
                  } else if (tmp7 === 3) {
                    if (arg0 === 1) {
                      throw arg1;
                    } else if (arg0 === 2) {
                      let obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      return { value: "T", done: null };
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
                          let closure_1 = tmp4;
                          let closure_0 = tmp8;
                          closure_0 = undefined;
                          const obj1 = { type: "ORDER_CANCEL_SIGNING_START", orderId: null };
                          obj1[1] = outer1_0;
                          outer1_1(outer1_2[6]).dispatch(obj1);
                          let c3 = 2;
                          const HTTP = outer1_0(outer1_2[4]).HTTP;
                          const obj2 = { url: null, rejectWithError: true };
                          obj2[0] = c5.ORDER_CANCEL_SIGNING(outer1_0);
                          c4 = 4;
                          c5 = 1;
                          let obj3 = { value: null, done: false };
                          obj3[0] = HTTP.post(obj2);
                          return obj3;
                        }
                      } else if (1 === tmp8) {
                        c3 = 0;
                        outer1_20.delete(outer1_0);
                        throw closure_2;
                      } else if (2 === tmp8) {
                        c3 = 1;
                        closure_1 = closure_2;
                        let obj8 = outer1_0(outer1_2[5]);
                        const _Error2 = Error;
                        const error = new Error("failed to cancel order signing");
                        const obj4 = { tags: null, extra: null };
                        obj4[0] = { source: "OrderActionCreators_cancelOrderSigning" };
                        const obj5 = { orderId: null, response: null };
                        obj5[0] = closure_0;
                        obj5[1] = closure_1;
                        obj4[1] = obj5;
                        const result = obj8.captureBillingException(error, obj4);
                        const obj6 = { response: null, orderId: null };
                        obj6[0] = closure_1;
                        obj6[1] = closure_0;
                        outer1_6.error("failed to cancel order signing", obj6);
                        let obj12 = outer1_1(outer1_2[6]);
                        const obj7 = { type: "ORDER_CANCEL_SIGNING_FAIL", orderId: null };
                        obj7[1] = closure_0;
                        c4 = 3;
                        c5 = 1;
                        obj8 = { value: null, done: false };
                        obj8[0] = obj12.dispatch(obj7);
                        return obj8;
                      } else if (3 === tmp8) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c3 = 0;
                          outer1_20.delete(outer1_0);
                          c5 = 3;
                          const obj9 = { value: null, done: true };
                          obj9[0] = arg1;
                          return obj9;
                        } else {
                          throw outer1_1;
                        }
                      } else if (4 === tmp8) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c3 = 0;
                          outer1_20.delete(outer1_0);
                          c5 = 3;
                          const obj10 = { value: null, done: true };
                          obj10[0] = arg1;
                          return obj10;
                        } else {
                          closure_0 = arg1;
                          if (null == closure_0.body) {
                            const _Error = Error;
                            const error1 = new Error("Invalid cancel signing response");
                            throw error1;
                          } else {
                            const obj11 = { orderId: null };
                            obj11[0] = closure_0;
                            outer1_6.info("cancel order signing, transitioned back to DRAFT", obj11);
                            obj3 = outer1_1(outer1_2[6]);
                            obj12 = { type: "ORDER_CANCEL_SIGNING_SUCCESS", orderId: null };
                            obj12[1] = closure_0;
                            c4 = 5;
                            c5 = 1;
                            const obj13 = { value: null, done: false };
                            obj13[0] = obj3.dispatch(obj12);
                            return obj13;
                          }
                        }
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        outer1_20.delete(closure_0);
                        c5 = 3;
                        const obj14 = { value: null, done: true };
                        obj14[0] = arg1;
                        return obj14;
                      } else {
                        c3 = 0;
                        outer1_20.delete(closure_0);
                        c5 = 3;
                        obj = { value: null, done: true };
                        obj[0] = closure_0.body;
                        return obj;
                      }
                    } catch (tmp66) {
                      closure_2 = tmp66;
                      if (tmp5 === c3) {
                        c5 = tmp3;
                        throw tmp66;
                      } else if (tmp2 === tmp68) {
                        c4 = tmp2;
                      } else {
                        c4 = tmp;
                      }
                    }
                  }
                })();
                let result = obj10.set(tmp16, tmp6);
                c2 = 2;
                c1 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = tmp6;
                return obj3;
              }
              obj10 = outer1_20;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              let obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              c1 = 3;
              let obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            let obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp10) {
          c1 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const _cancelOrderSigning = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const tmp2 = new require("timestamp")("OrderActionCreators");
let closure_6 = tmp2;
let c11 = null;
const map = new Map();
let result = require("ME").fileFinishedImporting("modules/payments/native/OrderActionCreators.tsx");

export const logger = tmp2;
export const DRAFT_ORDER_LOOKBACK_DAYS = 3;
export { getOrders };
export { createOrder };
export const getOrCreateOrder = function getOrCreateOrder(arg0) {
  const self = this;
  const apply = _getOrCreateOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const patchOrderLineItem = function patchOrderLineItem(arg0) {
  const self = this;
  const apply = _patchOrderLineItem.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const patchOrder = function patchOrder(arg0) {
  const self = this;
  const apply = _patchOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateOrder = function updateOrder(arg0) {
  const self = this;
  const apply = _updateOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { discardOrder };
export const cancelSigningAndDiscardOrder = function cancelSigningAndDiscardOrder() {
  const self = this;
  const apply = _cancelSigningAndDiscardOrder.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const markOrderAsSigningInProgress = function markOrderAsSigningInProgress(closure_8) {
  const self = this;
  const apply = _markOrderAsSigningInProgress.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { cancelOrderSigning };