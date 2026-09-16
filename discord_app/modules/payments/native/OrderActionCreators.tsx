// === Module 7539: payments/OrderActionCreators ===

// Module 7539 (payments/OrderActionCreators)
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
let closure_10 = async function _createOrder(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          ({ orderLineItems: closure_129_0, paymentGateway: closure_129_1, recipientUserId: closure_129_2, isGift: closure_129_3, giftInfo: closure_129_4, subscriptionFacet: closure_129_5, externalGatewayFacet: closure_129_6, countryCode: closure_129_7 } = closure_0);
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          let body;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_CREATE_START" });
          c4 = 1;
          if (closure_129_3) {
            const obj5 = { recipient_id: closure_129_2 };
            closure_129_8 = obj5;
            let gift_style;
            if (closure_129_4 != null) {
              gift_style = closure_129_4.gift_style;
            }
            if (null != gift_style) {
              closure_129_8.gift_style = closure_129_4.gift_style;
            }
            let emoji_id;
            if (closure_129_4 != null) {
              emoji_id = closure_129_4.emoji_id;
            }
            if (null != emoji_id) {
              closure_129_8.emoji_id = closure_129_4.emoji_id;
            }
            let emoji_name;
            if (closure_129_4 != null) {
              emoji_name = closure_129_4.emoji_name;
            }
            if (null != emoji_name) {
              closure_129_8.emoji_name = closure_129_4.emoji_name;
            }
            let sound_id;
            if (closure_129_4 != null) {
              sound_id = closure_129_4.sound_id;
            }
            if (null != sound_id) {
              closure_129_8.sound_id = closure_129_4.sound_id;
            }
            let reward_sku_ids;
            if (closure_129_4 != null) {
              reward_sku_ids = closure_129_4.reward_sku_ids;
            }
            if (null != reward_sku_ids) {
              closure_129_8.reward_sku_ids = closure_129_4.reward_sku_ids;
            }
            let prop;
            if (closure_129_4 != null) {
              prop = closure_129_4.custom_message_contents;
            }
            if (null != prop) {
              closure_129_8.custom_message_contents = closure_129_4.custom_message_contents;
            }
          }
          const obj6 = { order_line_items: closure_129_0, billing_facet: null, subscription_facet: null };
          const obj8 = { payment_gateway: closure_129_1 };
          obj6.billing_facet = obj8;
          obj6.subscription_facet = closure_129_5;
          closure_129_9 = obj6;
          if (null != closure_129_7) {
            const obj9 = { request_gateway_country_code: closure_129_7 };
            closure_129_9.location_facet = obj9;
          }
          if (closure_129_3) {
            const obj10 = { is_gift: closure_129_3, gift_customization: closure_129_8 };
            closure_129_9.gifting_facet = obj10;
          }
          if (null != closure_129_6) {
            closure_129_9.external_gateway_facet = closure_129_6;
          }
          const HTTP = closure_130_0(closure_130_2[4]).HTTP;
          const request = { url: closure_130_5.ORDER_CREATE, body: closure_129_9, rejectWithError: true, retries: 3 };
          c5 = 4;
          c6 = 1;
          const obj11 = { value: HTTP.post(request), done: false };
          return obj11;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_11 = closure_3;
        const obj12 = { response: closure_129_11 };
        closure_130_6.error("failed to create order", obj12);
        c5 = 3;
        c6 = 1;
        const obj13 = { value: closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_CREATE_FAIL" }), done: false };
        return obj13;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Failed to create order: " + closure_129_11);
          throw error;
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          body = value.body;
          const obj16 = { orderId: body.id, paymentGateway: closure_129_1, body: closure_129_9 };
          closure_130_6.info("created order", obj16);
          const obj17 = { type: "ORDER_CREATE_SUCCESS", orderId: body.id, order: body };
          c5 = 5;
          c6 = 1;
          const obj18 = { value: closure_130_1(closure_130_2[6]).dispatch(obj17), done: false };
          return obj18;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj19 = { value, done: true };
        return obj19;
      } else {
        c4 = 0;
        c6 = 3;
        const obj = { value: body, done: true };
        return obj;
      }
    } catch (tmp78) {
      closure_3 = tmp78;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp78;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_12 = async function _getOrCreateOrder(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp4;
          c1 = 0;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          ({ skuId: closure_129_0, paymentGateway: closure_129_1, recipientUserId: closure_129_2, purchaseType: closure_129_3, isGift: closure_129_4, giftInfo: closure_129_5, createdAfter: closure_129_6, subscriptionPlanId: closure_129_7, externalGatewayFacet: closure_129_8 } = closure_0);
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj5 = { isGift: closure_129_4, status: closure_130_4.DRAFT, skuId: closure_129_0, createdAfter: closure_129_6, recipientUserId: closure_129_2 };
          c3 = 2;
          c4 = 1;
          const obj6 = { value: closure_130_7(obj5), done: false };
          return obj6;
        }
      } else if (2 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_129_9 = value;
          if (closure_129_9.length > 0) {
            closure_129_10 = closure_129_9[0];
            const obj8 = { orderId: closure_129_10.id, skuId: closure_129_0, isGift: closure_129_4 };
            closure_130_6.info("reusing existing draft order", obj8);
            c4 = 3;
            const obj9 = { value: closure_129_10, done: true };
            return obj9;
          } else {
            const obj10 = { paymentGateway: closure_129_1, recipientUserId: closure_129_2, isGift: closure_129_4, giftInfo: closure_129_5, orderLineItems: null, externalGatewayFacet: null };
            const obj11 = { sku_id: closure_129_0, quantity: 1, purchase_type: closure_129_3, subscription_plan_id: closure_129_7 };
            const items = [obj11];
            obj10.orderLineItems = items;
            obj10.externalGatewayFacet = closure_129_8;
            c3 = 3;
            c4 = 1;
            const obj12 = { value: closure_130_9(obj10), done: false };
            return obj12;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } else {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp21) {
      c4 = tmp;
      throw tmp21;
    }
  }
};
let closure_13 = async function _patchOrderLineItem(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ orderId: closure_129_0, orderLineItemId: closure_129_1, subscriptionPlanId: closure_129_2, expectedRevision: closure_129_3 } = closure_0);
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_START" });
          c4 = 1;
          const obj5 = { expected_revision: closure_129_3, subscription_plan_id: closure_129_2 };
          closure_129_4 = obj5;
          const HTTP = closure_130_0(closure_130_2[4]).HTTP;
          const request = { url: closure_130_5.ORDER_PATCH_LINE_ITEM(closure_129_0, closure_129_1), body: closure_129_4, rejectWithError: true };
          c5 = 4;
          c6 = 1;
          const obj7 = { value: HTTP.patch(request), done: false };
          return obj7;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_6 = closure_3;
        const obj8 = { tags: { source: "OrderActionCreators_patchOrderLineItem" }, extra: null };
        const obj9 = { orderId: closure_129_0, orderLineItemId: closure_129_1, subscriptionPlanId: closure_129_2 };
        obj8.extra = obj9;
        const result = closure_130_0(closure_130_2[5]).captureBillingException(closure_129_6, obj8);
        const obj11 = { error: closure_129_6, orderId: closure_129_0, orderLineItemId: closure_129_1 };
        closure_130_6.error("failed to update order line item id", obj11);
        const obj6 = closure_130_0(closure_130_2[5]);
        c5 = 3;
        c6 = 1;
        const obj12 = { value: closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_FAIL" }), done: false };
        return obj12;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          throw closure_129_6;
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_129_5 = value;
          const obj15 = { orderId: closure_129_0, orderLineItemId: closure_129_1, body: closure_129_4 };
          closure_130_6.info("updated order line item", obj15);
          const obj16 = { type: "ORDER_UPDATE_SUCCESS", orderId: closure_129_0 };
          c5 = 5;
          c6 = 1;
          const obj18 = { value: closure_130_1(closure_130_2[6]).dispatch(obj16), done: false };
          return obj18;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj20 = { value, done: true };
        return obj20;
      } else {
        c4 = 0;
        c6 = 3;
        const obj = { value: closure_129_5.body.revision, done: true };
        return obj;
      }
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
};
let closure_14 = async function _patchOrder(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({ orderId: closure_129_0, expectedRevision: closure_129_1, orderLineItems: closure_129_2, subscriptionFacet: closure_129_3, externalGatewayFacet: closure_129_4 } = closure_0);
          closure_129_5 = undefined;
          let body;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_START" });
          c4 = 1;
          const obj5 = { expected_revision: closure_129_1 };
          closure_129_5 = obj5;
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
          c5 = 4;
          c6 = 1;
          const obj7 = { value: HTTP.patch(request), done: false };
          return obj7;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_7 = closure_3;
        const obj8 = { tags: { source: "OrderActionCreators_patchOrder" }, extra: null };
        const obj9 = { orderId: closure_129_0, orderLineItems: closure_129_2 };
        obj8.extra = obj9;
        const result = closure_130_0(closure_130_2[5]).captureBillingException(closure_129_7, obj8);
        const obj11 = { error: closure_129_7, orderId: closure_129_0 };
        closure_130_6.error("failed to patch order", obj11);
        const obj6 = closure_130_0(closure_130_2[5]);
        c5 = 3;
        c6 = 1;
        const obj12 = { value: closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_FAIL" }), done: false };
        return obj12;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          throw closure_129_7;
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          body = value.body;
          const obj15 = { orderId: closure_129_0, body: closure_129_5 };
          closure_130_6.info("patched order", obj15);
          const obj16 = { type: "ORDER_UPDATE_SUCCESS", orderId: closure_129_0 };
          c5 = 5;
          c6 = 1;
          const obj17 = { value: closure_130_1(closure_130_2[6]).dispatch(obj16), done: false };
          return obj17;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj19 = { value, done: true };
        return obj19;
      } else {
        c4 = 0;
        c6 = 3;
        const obj = { value: body, done: true };
        return obj;
      }
    } catch (tmp48) {
      closure_3 = tmp48;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp48;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_15 = async function _updateOrder(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ orderId: closure_129_0, giftInfo: closure_129_1, expectedRevision: closure_129_2 } = closure_0);
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_START" });
          c4 = 1;
          const obj5 = { expected_revision: closure_129_2 };
          closure_129_3 = obj5;
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
            const obj7 = { is_gift: true, gift_customization: closure_129_4 };
            closure_129_3.gifting_facet = obj7;
          }
          const HTTP = closure_130_0(closure_130_2[4]).HTTP;
          const request = { url: closure_130_5.ORDER_UPDATE(closure_129_0), body: closure_129_3, rejectWithError: true };
          c5 = 4;
          c6 = 1;
          const obj8 = { value: HTTP.patch(request), done: false };
          return obj8;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_6 = closure_3;
        const obj9 = { tags: { source: "OrderActionCreators_updateOrder" }, extra: null };
        const obj11 = { orderId: closure_129_0, giftInfo: closure_129_1 };
        obj9.extra = obj11;
        const result = closure_130_0(closure_130_2[5]).captureBillingException(closure_129_6, obj9);
        const obj12 = { error: closure_129_6, orderId: closure_129_0 };
        closure_130_6.error("failed to update order", obj12);
        const obj6 = closure_130_0(closure_130_2[5]);
        c5 = 3;
        c6 = 1;
        const obj13 = { value: closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_FAIL" }), done: false };
        return obj13;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          throw closure_129_6;
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          closure_129_5 = value;
          const obj16 = { orderId: closure_129_0, body: closure_129_3 };
          closure_130_6.info("updated order with gift customization", obj16);
          const obj17 = { type: "ORDER_UPDATE_SUCCESS", orderId: closure_129_0 };
          c5 = 5;
          c6 = 1;
          const obj18 = { value: closure_130_1(closure_130_2[6]).dispatch(obj17), done: false };
          return obj18;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj20 = { value, done: true };
        return obj20;
      } else {
        c4 = 0;
        c6 = 3;
        const obj = { value: closure_129_5.body.revision, done: true };
        return obj;
      }
    } catch (tmp72) {
      closure_3 = tmp72;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp72;
      } else {
        c5 = tmp;
      }
    }
  }
};
function discardOrder() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _discardOrder() {
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
let closure_18 = async function _cancelSigningAndDiscardOrder(arg0) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  await cancelOrderSigning(closure_0);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_1 = closure_3;
    const obj6 = { tags: { source: "OrderActionCreators_cancelSigningAndDiscardOrder" }, extra: null };
    obj6.extra = { orderId: closure_129_0 };
    const result = closure_130_0(closure_130_2[5]).captureBillingException(closure_129_1, obj6);
    c6 = 3;
    closure_130_0(closure_130_2[5]);
  } else if (2 === tmp7) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    } else {
      c5 = 3;
      c6 = 1;
      return { value: closure_130_16(closure_129_0), done: false };
    }
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return value;
};
let closure_19 = async function _markOrderAsSigningInProgress(arg0) {
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
function cancelOrderSigning() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _cancelOrderSigning() {
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
const OrderStatus = fn(4620).OrderStatus;
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
export { discardOrder };
export const cancelSigningAndDiscardOrder = function cancelSigningAndDiscardOrder() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const markOrderAsSigningInProgress = function markOrderAsSigningInProgress() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { cancelOrderSigning };