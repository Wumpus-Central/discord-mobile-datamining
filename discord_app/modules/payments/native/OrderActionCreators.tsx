// === Module 7037: payments/OrderActionCreators ===

// Module 7037 (payments/OrderActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function getOrders() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _getOrders(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = _require;
          c4 = 1;
          let status;
          if (_require != null) {
            status = _require.status;
          }
          const obj5 = {};
          if (null != status) {
            const items = [_require.status];
            obj5.statuses = items;
          }
          let skuId;
          if (_require != null) {
            skuId = _require.skuId;
          }
          if (null != skuId) {
            obj5.sku_id = _require.skuId;
          }
          let createdAfter;
          if (_require != null) {
            createdAfter = _require.createdAfter;
          }
          if (null != createdAfter) {
            obj5.created_after = _require.createdAfter;
          }
          let isGift;
          if (_require != null) {
            isGift = _require.isGift;
          }
          if (null != isGift) {
            obj5.is_gift = _require.isGift;
          }
          let recipientUserId;
          if (_require != null) {
            recipientUserId = _require.recipientUserId;
          }
          if (null != recipientUserId) {
            obj5.recipient_id = _require.recipientUserId;
          }
          let paymentGateway;
          if (_require != null) {
            paymentGateway = _require.paymentGateway;
          }
          if (null != paymentGateway) {
            obj5.payment_gateway = _require.paymentGateway;
          }
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.ORDER_LIST, query: obj5, rejectWithError: true };
          c5 = 2;
          c6 = 1;
          const obj6 = { value: HTTP.get(request), done: false };
          return obj6;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        closure_129_1 = closure_3;
        const obj7 = { error: closure_129_1, options: closure_129_0 };
        closure_130_6.error("failed to fetch orders", obj7);
        const obj8 = { tags: { source: "OrderActionCreators_getOrders" }, extra: null };
        const obj9 = { options: closure_129_0 };
        obj8.extra = obj9;
        const result = closure_130_0(closure_130_2[5]).captureBillingException(closure_129_1, obj8);
        throw closure_129_1;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        let body = value.body;
        if (!body) {
          body = [];
        }
        c4 = 0;
        c6 = 3;
        const obj = { value: body, done: true };
        return obj;
      }
    } catch (tmp32) {
      closure_3 = tmp32;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp32;
      } else {
        c5 = tmp;
      }
    }
  }
};
function createOrder() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _createOrder() {
  closure_3 = tmp3;
  ({ orderLineItems: closure_130_0, paymentGateway: closure_130_1, recipientUserId: closure_130_2, isGift: closure_130_3, giftInfo: closure_130_4, subscriptionFacet: closure_130_5, externalGatewayFacet: closure_130_6, countryCode: closure_130_7 } = closure_0);
  await "flex";
  closure_131_1(closure_131_2[6]).dispatch({ type: "ORDER_CREATE_START" });
  if (closure_130_3) {
    closure_130_8 = { recipient_id: closure_130_2 };
    let gift_style;
    if (closure_130_4 != null) {
      gift_style = closure_130_4.gift_style;
    }
    if (null != gift_style) {
      closure_130_8.gift_style = closure_130_4.gift_style;
    }
    let emoji_id;
    if (closure_130_4 != null) {
      emoji_id = closure_130_4.emoji_id;
    }
    if (null != emoji_id) {
      closure_130_8.emoji_id = closure_130_4.emoji_id;
    }
    let emoji_name;
    if (closure_130_4 != null) {
      emoji_name = closure_130_4.emoji_name;
    }
    if (null != emoji_name) {
      closure_130_8.emoji_name = closure_130_4.emoji_name;
    }
    let sound_id;
    if (closure_130_4 != null) {
      sound_id = closure_130_4.sound_id;
    }
    if (null != sound_id) {
      closure_130_8.sound_id = closure_130_4.sound_id;
    }
    let reward_sku_ids;
    if (closure_130_4 != null) {
      reward_sku_ids = closure_130_4.reward_sku_ids;
    }
    if (null != reward_sku_ids) {
      closure_130_8.reward_sku_ids = closure_130_4.reward_sku_ids;
    }
    let prop;
    if (closure_130_4 != null) {
      prop = closure_130_4.custom_message_contents;
    }
    if (null != prop) {
      closure_130_8.custom_message_contents = closure_130_4.custom_message_contents;
    }
  }
  closure_130_9 = { order_line_items: closure_130_0, billing_facet: { payment_gateway: closure_130_1 }, subscription_facet: closure_130_5 };
  if (null != closure_130_7) {
    closure_130_9.location_facet = { request_gateway_country_code: closure_130_7 };
  }
  if (closure_130_3) {
    closure_130_9.gifting_facet = { is_gift: closure_130_3, gift_customization: closure_130_8 };
  }
  if (null != closure_130_6) {
    closure_130_9.external_gateway_facet = closure_130_6;
  }
  const HTTP = closure_131_0(closure_131_2[4]).HTTP;
  const request = { url: closure_131_5.ORDER_CREATE, body: closure_130_9, rejectWithError: true, retries: 3 };
  await HTTP.post(request);
  closure_130_14 = closure_4;
  closure_1 = closure_130_14;
  if (closure_130_14 == null) {
    closure_1 = {};
  }
  closure_130_11 = closure_1;
  const status = closure_130_11.status;
  const body = closure_130_11.body;
  const obj13 = { tags: { source: "OrderActionCreators_createOrder" }, extra: null };
  const obj14 = { paymentGateway: closure_130_1, isGift: closure_130_3, status, code: null };
  if (body != null) {
    const code = body.code;
  }
  obj14.code = code;
  obj13.extra = obj14;
  const result = closure_131_0(closure_131_2[5]).captureBillingException(closure_130_14, obj13);
  const obj15 = { error: closure_130_14, status, code: null, paymentGateway: null, isGift: null };
  if (body != null) {
    const code1 = body.code;
  }
  obj15.code = code1;
  obj15.paymentGateway = closure_130_1;
  obj15.isGift = closure_130_3;
  closure_131_6.error("failed to create order", obj15);
  closure_131_0(closure_131_2[5]);
  await closure_131_1(closure_131_2[6]).dispatch({ type: "ORDER_CREATE_FAIL" });
  const body2 = value.body;
  closure_131_6.info("created order", { orderId: body2.id, paymentGateway: closure_130_1, body: closure_130_9 });
  await closure_131_1(closure_131_2[6]).dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: body2.id, order: body2 });
  return body2;
};
let closure_12 = async function _getOrCreateOrder() {
  ({ skuId: closure_129_0, paymentGateway: closure_129_1, recipientUserId: closure_129_2, purchaseType: closure_129_3, isGift: closure_129_4, giftInfo: closure_129_5, createdAfter: closure_129_6, subscriptionPlanId: closure_129_7, externalGatewayFacet: closure_129_8 } = closure_0);
  await "flex";
  await closure_130_7({ isGift: closure_129_4, status: closure_130_4.DRAFT, skuId: closure_129_0, createdAfter: closure_129_6, recipientUserId: closure_129_2 });
  closure_129_9 = value;
  if (closure_129_9.length > 0) {
    closure_129_10 = closure_129_9[0];
    closure_130_6.info("reusing existing draft order", { orderId: closure_129_10.id, skuId: closure_129_0, isGift: closure_129_4 });
    return closure_129_10;
  }
  const obj10 = { paymentGateway: closure_129_1, recipientUserId: closure_129_2, isGift: closure_129_4, giftInfo: closure_129_5, orderLineItems: null, externalGatewayFacet: closure_129_8 };
  const items = [{ sku_id: closure_129_0, quantity: 1, purchase_type: closure_129_3, subscription_plan_id: closure_129_7 }];
  obj10.orderLineItems = items;
  await closure_130_9(obj10);
  return value;
};
let closure_13 = async function _patchOrderLineItem() {
  closure_2 = tmp3;
  ({ orderId: closure_129_0, orderLineItemId: closure_129_1, subscriptionPlanId: closure_129_2, expectedRevision: closure_129_3 } = closure_0);
  await "flex";
  closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_START" });
  closure_129_4 = { expected_revision: closure_129_3, subscription_plan_id: closure_129_2 };
  const HTTP = closure_130_0(closure_130_2[4]).HTTP;
  const request = { url: closure_130_5.ORDER_PATCH_LINE_ITEM(closure_129_0, closure_129_1), body: closure_129_4, rejectWithError: true };
  await HTTP.patch(request);
  closure_129_6 = closure_3;
  const result = closure_130_0(closure_130_2[5]).captureBillingException(closure_129_6, { tags: { source: "OrderActionCreators_patchOrderLineItem" }, extra: { orderId: closure_129_0, orderLineItemId: closure_129_1, subscriptionPlanId: closure_129_2 } });
  closure_130_6.error("failed to update order line item id", { error: closure_129_6, orderId: closure_129_0, orderLineItemId: closure_129_1 });
  closure_130_0(closure_130_2[5]);
  await closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_FAIL" });
  closure_129_5 = value;
  closure_130_6.info("updated order line item", { orderId: closure_129_0, orderLineItemId: closure_129_1, body: closure_129_4 });
  await closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId: closure_129_0 });
  return closure_129_5.body.revision;
};
let closure_14 = async function _patchOrder() {
  closure_2 = tmp3;
  ({ orderId: closure_129_0, expectedRevision: closure_129_1, orderLineItems: closure_129_2, subscriptionFacet: closure_129_3, externalGatewayFacet: closure_129_4 } = closure_0);
  await "flex";
  closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_START" });
  closure_129_5 = { expected_revision: closure_129_1 };
  if (null != closure_129_2) {
    closure_129_5.order_line_items = closure_129_2;
  }
  if (null != closure_129_3) {
    closure_129_5.subscription_facet = closure_129_3;
  }
  if (null != closure_129_4) {
    closure_129_5.external_gateway_facet = closure_129_4;
  }
  const HTTP = closure_130_0(closure_130_2[4]).HTTP;
  const request = { url: closure_130_5.ORDER_UPDATE(closure_129_0), body: closure_129_5, rejectWithError: true };
  await HTTP.patch(request);
  closure_129_7 = closure_3;
  const result = closure_130_0(closure_130_2[5]).captureBillingException(closure_129_7, { tags: { source: "OrderActionCreators_patchOrder" }, extra: { orderId: closure_129_0, orderLineItems: closure_129_2 } });
  closure_130_6.error("failed to patch order", { error: closure_129_7, orderId: closure_129_0 });
  closure_130_0(closure_130_2[5]);
  await closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_FAIL" });
  const body = value.body;
  closure_130_6.info("patched order", { orderId: closure_129_0, body: closure_129_5 });
  await closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId: closure_129_0 });
  return body;
};
let closure_15 = async function _updateOrder() {
  closure_2 = tmp3;
  ({ orderId: closure_129_0, giftInfo: closure_129_1, expectedRevision: closure_129_2 } = closure_0);
  await "flex";
  closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_START" });
  closure_129_3 = { expected_revision: closure_129_2 };
  if (null != closure_129_1) {
    closure_129_4 = {};
    if (null != closure_129_1.recipient_id) {
      closure_129_4.recipient_id = closure_129_1.recipient_id;
    }
    if (null != closure_129_1.gift_style) {
      closure_129_4.gift_style = closure_129_1.gift_style;
    }
    if (null != closure_129_1.emoji_id) {
      closure_129_4.emoji_id = closure_129_1.emoji_id;
    }
    if (null != closure_129_1.emoji_name) {
      closure_129_4.emoji_name = closure_129_1.emoji_name;
    }
    if (null != closure_129_1.sound_id) {
      closure_129_4.sound_id = closure_129_1.sound_id;
    }
    if (null != closure_129_1.reward_sku_ids) {
      closure_129_4.reward_sku_ids = closure_129_1.reward_sku_ids;
    }
    if (null != closure_129_1.custom_message_contents) {
      closure_129_4.custom_message_contents = closure_129_1.custom_message_contents;
    }
    closure_129_3.gifting_facet = { is_gift: true, gift_customization: closure_129_4 };
  }
  const HTTP = closure_130_0(closure_130_2[4]).HTTP;
  const request = { url: closure_130_5.ORDER_UPDATE(closure_129_0), body: closure_129_3, rejectWithError: true };
  await HTTP.patch(request);
  closure_129_6 = closure_3;
  const result = closure_130_0(closure_130_2[5]).captureBillingException(closure_129_6, { tags: { source: "OrderActionCreators_updateOrder" }, extra: { orderId: closure_129_0, giftInfo: closure_129_1 } });
  closure_130_6.error("failed to update order", { error: closure_129_6, orderId: closure_129_0 });
  closure_130_0(closure_130_2[5]);
  await closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_FAIL" });
  closure_129_5 = value;
  closure_130_6.info("updated order with gift customization", { orderId: closure_129_0, body: closure_129_3 });
  await closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId: closure_129_0 });
  return closure_129_5.body.revision;
};
let closure_16 = async function _discardOrder() {
  closure_1 = tmp4;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: Endpoints.ORDER_DISCARD(closure_0), rejectWithError: false });
  closure_129_0 = value;
  if (null == closure_129_0.body) {
    const _Error = Error;
    const error = new Error("Invalid discard order response");
    throw error;
  }
  return closure_129_0.body;
};
let closure_17 = async function _markOrderAsSigningInProgress(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else if (null != value) {
          let obj4 = { orderId: tmp14 };
          logger.info("signing already in progress, awaiting existing promise", obj4);
          c2 = 1;
          c1 = 1;
          let obj5 = { value, done: false };
          return obj5;
        } else {
          const tmp6 = asyncGeneratorStep(async () => {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp7 === 3) {
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
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const orderId = tmp8;
                    closure_128_0 = undefined;
                    const obj4 = { type: "ORDER_MARK_SIGNING_START", orderId };
                    tmp4(tmp45[6]).dispatch(obj4);
                    c3 = 2;
                    const obj22 = tmp4(tmp45[6]);
                    c4 = 4;
                    c5 = 1;
                    const obj5 = { value: orderId(tmp45[7]).getOrder(orderId), done: false };
                    return obj5;
                  }
                } else if (1 === tmp8) {
                  c3 = 0;
                  c11 = null;
                  throw tmp45;
                } else if (2 === tmp8) {
                  c3 = 1;
                  closure_128_1 = tmp45;
                  const _Error2 = Error;
                  const error = new Error("failed to mark order as signing in progress");
                  const obj6 = { tags: { source: "OrderActionCreators_markOrderAsSigningInProgress" }, extra: null };
                  const obj8 = { orderId: closure_129_0, response: closure_128_1 };
                  obj6.extra = obj8;
                  const result = orderId(tmp45[5]).captureBillingException(error, obj6);
                  const obj9 = { response: closure_128_1, orderId: closure_129_0 };
                  logger.error("failed to mark order as signing in progress", obj9);
                  const obj7 = orderId(tmp45[5]);
                  const obj10 = { type: "ORDER_MARK_SIGNING_FAIL", orderId: closure_129_0 };
                  c4 = 3;
                  c5 = 1;
                  const obj12 = { value: tmp4(tmp45[6]).dispatch(obj10), done: false };
                  return obj12;
                } else if (3 === tmp8) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c11 = null;
                    c5 = 3;
                    const obj13 = { value, done: true };
                    return obj13;
                  } else {
                    throw closure_128_1;
                  }
                } else if (4 === tmp8) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c11 = null;
                    c5 = 3;
                    const obj14 = { value, done: true };
                    return obj14;
                  } else {
                    closure_128_0 = value;
                    if (null == closure_128_0) {
                      const _Error = Error;
                      const _HermesInternal = HermesInternal;
                      const error1 = new Error("Order " + closure_129_0 + " not found");
                      throw error1;
                    } else {
                      const HTTP = orderId(tmp45[4]).HTTP;
                      const request = { url: c5.ORDER_SIGN(closure_129_0), body: null, rejectWithError: true };
                      const obj15 = { expected_revision: closure_128_0.revision };
                      request.body = obj15;
                      c4 = 5;
                      c5 = 1;
                      const obj16 = { value: HTTP.post(request), done: false };
                      return obj16;
                    }
                  }
                } else if (5 === tmp8) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c11 = null;
                    c5 = 3;
                    const obj17 = { value, done: true };
                    return obj17;
                  } else {
                    const obj19 = { orderId: closure_129_0, revision: closure_128_0.revision };
                    logger.info("marked order as signing in progress", obj19);
                    const obj20 = { type: "ORDER_MARK_SIGNING_SUCCESS", orderId: closure_129_0 };
                    c4 = 6;
                    c5 = 1;
                    const obj21 = { value: tmp4(tmp45[6]).dispatch(obj20), done: false };
                    return obj21;
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c11 = null;
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c3 = 0;
                  c11 = null;
                  c5 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp45) {
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
          value = tmp6;
          c2 = 2;
          c1 = 1;
          let obj6 = { value: tmp6, done: false };
          return obj6;
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          let obj7 = { value, done: true };
          return obj7;
        } else {
          c1 = 3;
          let obj8 = { value: undefined, done: true };
          return obj8;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
let closure_19 = async function _cancelOrderSigning() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            value = map.get(orderId);
            if (null != value) {
              const obj4 = { orderId };
              logger.info("cancel signing already in progress for order, awaiting existing promise", obj4);
              c2 = 1;
              c1 = 1;
              let obj5 = { value, done: false };
              return obj5;
            } else {
              const tmp6 = asyncGeneratorStep(async () => {
                if (c5 === 2) {
                  c5 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp7 === 3) {
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
                    if (0 === c4) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        orderId = tmp8;
                        closure_128_0 = undefined;
                        const obj5 = { type: "ORDER_CANCEL_SIGNING_START", orderId };
                        tmp4(tmp66[6]).dispatch(obj5);
                        c3 = 2;
                        const HTTP = orderId(tmp66[4]).HTTP;
                        const obj6 = { url: c5.ORDER_CANCEL_SIGNING(orderId), rejectWithError: true };
                        c4 = 4;
                        c5 = 1;
                        const obj7 = { value: HTTP.post(obj6), done: false };
                        return obj7;
                      }
                    } else if (1 === tmp8) {
                      c3 = 0;
                      set.delete(closure_129_0);
                      throw tmp66;
                    } else if (2 === tmp8) {
                      c3 = 1;
                      closure_128_1 = tmp66;
                      const _Error2 = Error;
                      const error = new Error("failed to cancel order signing");
                      const obj8 = { tags: { source: "OrderActionCreators_cancelOrderSigning" }, extra: null };
                      const obj10 = { orderId: closure_129_0, response: closure_128_1 };
                      obj8.extra = obj10;
                      const result = orderId(tmp66[5]).captureBillingException(error, obj8);
                      const obj11 = { response: closure_128_1, orderId: closure_129_0 };
                      logger.error("failed to cancel order signing", obj11);
                      const obj9 = orderId(tmp66[5]);
                      const obj12 = { type: "ORDER_CANCEL_SIGNING_FAIL", orderId: closure_129_0 };
                      c4 = 3;
                      c5 = 1;
                      const obj14 = { value: tmp4(tmp66[6]).dispatch(obj12), done: false };
                      return obj14;
                    } else if (3 === tmp8) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        set.delete(closure_129_0);
                        c5 = 3;
                        const obj15 = { value, done: true };
                        return obj15;
                      } else {
                        throw closure_128_1;
                      }
                    } else if (4 === tmp8) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        set.delete(closure_129_0);
                        c5 = 3;
                        const obj16 = { value, done: true };
                        return obj16;
                      } else {
                        closure_128_0 = value;
                        if (null == closure_128_0.body) {
                          const _Error = Error;
                          const error1 = new Error("Invalid cancel signing response");
                          throw error1;
                        } else {
                          const obj17 = { orderId: closure_129_0 };
                          logger.info("cancel order signing, transitioned back to DRAFT", obj17);
                          const obj18 = { type: "ORDER_CANCEL_SIGNING_SUCCESS", orderId: closure_129_0 };
                          c4 = 5;
                          c5 = 1;
                          const obj20 = { value: tmp4(tmp66[6]).dispatch(obj18), done: false };
                          return obj20;
                        }
                      }
                    } else if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      set.delete(closure_129_0);
                      c5 = 3;
                      const obj21 = { value, done: true };
                      return obj21;
                    } else {
                      c3 = 0;
                      set.delete(closure_129_0);
                      c5 = 3;
                      const obj = { value: closure_128_0.body, done: true };
                      return obj;
                    }
                  } catch (tmp66) {
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
              let result = map.set(orderId, tmp6);
              c2 = 2;
              c1 = 1;
              let obj6 = { value: tmp6, done: false };
              return obj6;
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            let obj7 = { value, done: true };
            return obj7;
          } else {
            c1 = 3;
            let obj8 = { value, done: true };
            return obj8;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          let obj9 = { value, done: true };
          return obj9;
        } else {
          c1 = 3;
          let obj = { value, done: true };
          return obj;
        }
      } catch (tmp10) {
        c1 = tmp;
        throw tmp10;
      }
    }
  })();
};
const OrderStatus = fn(4824).OrderStatus;
const Endpoints = fn(1074).Endpoints;
const tmp2 = new LoggerDefault("OrderActionCreators");
let closure_6 = tmp2;
let c11 = null;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/native/OrderActionCreators.tsx");

export const logger = tmp2;
export const DRAFT_ORDER_LOOKBACK_DAYS = 3;
export { getOrders };
export { createOrder };
export const getOrCreateOrder = function getOrCreateOrder() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const patchOrderLineItem = function patchOrderLineItem() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const patchOrder = function patchOrder() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateOrder = function updateOrder() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const discardOrder = function discardOrder() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const markOrderAsSigningInProgress = function markOrderAsSigningInProgress() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const cancelOrderSigning = function cancelOrderSigning() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};