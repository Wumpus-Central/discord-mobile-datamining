// === Module 7429: payments/OrderActionCreators ===

// Module 7429 (payments/OrderActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
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
          closure_1 = tmp5;
          closure_129_0 = _require;
          c4 = 1;
          let status;
          if (_require != null) {
            status = _require.status;
          }
          const obj1 = {};
          if (null != status) {
            const items = [_require.status];
            obj1.statuses = items;
          }
          let skuId;
          if (_require != null) {
            skuId = _require.skuId;
          }
          if (null != skuId) {
            obj1.sku_id = _require.skuId;
          }
          let createdAfter;
          if (_require != null) {
            createdAfter = _require.createdAfter;
          }
          if (null != createdAfter) {
            obj1.created_after = _require.createdAfter;
          }
          let isGift;
          if (_require != null) {
            isGift = _require.isGift;
          }
          if (null != isGift) {
            obj1.is_gift = _require.isGift;
          }
          let paymentGateway;
          if (_require != null) {
            paymentGateway = _require.paymentGateway;
          }
          if (null != paymentGateway) {
            obj1.payment_gateway = _require.paymentGateway;
          }
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.ORDER_LIST, query: obj1, rejectWithError: true };
          c5 = 2;
          c6 = 1;
          const obj2 = { value: HTTP.get(request), done: false };
          return obj2;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        closure_129_1 = closure_3;
        let obj3 = { error: closure_129_1, options: closure_129_0 };
        closure_130_6.error("failed to fetch orders", obj3);
        obj3 = closure_130_0(closure_130_2[5]);
        const obj4 = { tags: { source: "OrderActionCreators_getOrders" }, extra: null };
        const obj5 = { options: closure_129_0 };
        obj4.extra = obj5;
        const result = obj3.captureBillingException(closure_129_1, obj4);
        throw closure_129_1;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        let body = value.body;
        if (!body) {
          body = [];
        }
        c4 = 0;
        c6 = 3;
        obj = { value: body, done: true };
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
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_CREATE_START" });
          c4 = 1;
          if (closure_129_3) {
            const obj2 = { recipient_id: closure_129_2 };
            closure_129_8 = obj2;
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
          const obj3 = { order_line_items: closure_129_0, billing_facet: null, subscription_facet: null };
          const obj4 = { payment_gateway: closure_129_1 };
          obj3.billing_facet = obj4;
          obj3.subscription_facet = closure_129_5;
          closure_129_9 = obj3;
          if (null != closure_129_7) {
            const obj5 = { request_gateway_country_code: closure_129_7 };
            closure_129_9.location_facet = obj5;
          }
          if (closure_129_3) {
            let obj6 = { is_gift: closure_129_3, gift_customization: closure_129_8 };
            closure_129_9.gifting_facet = obj6;
          }
          if (null != closure_129_6) {
            closure_129_9.external_gateway_facet = closure_129_6;
          }
          const HTTP = closure_130_0(closure_130_2[4]).HTTP;
          const request = { url: closure_130_5.ORDER_CREATE, body: closure_129_9, rejectWithError: true, retries: 3 };
          c5 = 4;
          c6 = 1;
          const obj7 = { value: HTTP.post(request), done: false };
          return obj7;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_11 = closure_3;
        const obj8 = { response: closure_129_11 };
        closure_130_6.error("failed to create order", obj8);
        obj6 = closure_130_1(closure_130_2[6]);
        c5 = 3;
        c6 = 1;
        const obj9 = { value: obj6.dispatch({ type: "ORDER_CREATE_FAIL" }), done: false };
        return obj9;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj10 = { value, done: true };
          return obj10;
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
          const obj11 = { value, done: true };
          return obj11;
        } else {
          body = value.body;
          const obj12 = { orderId: body.id, paymentGateway: closure_129_1, body: closure_129_9 };
          closure_130_6.info("created order", obj12);
          const obj13 = { type: "ORDER_CREATE_SUCCESS", orderId: body.id, order: body };
          c5 = 5;
          c6 = 1;
          const obj14 = { value: closure_130_1(closure_130_2[6]).dispatch(obj13), done: false };
          return obj14;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj15 = { value, done: true };
        return obj15;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value: body, done: true };
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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
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
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const obj2 = { isGift: closure_129_4, status: closure_130_4.DRAFT, skuId: closure_129_0, createdAfter: closure_129_6 };
          c3 = 2;
          c4 = 1;
          const obj3 = { value: closure_130_7(obj2), done: false };
          return obj3;
        }
      } else if (2 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_9 = value;
          if (closure_129_9.length > 0) {
            closure_129_10 = closure_129_9[0];
            const obj5 = { orderId: closure_129_10.id, skuId: closure_129_0, isGift: closure_129_4 };
            closure_130_6.info("reusing existing draft order", obj5);
            c4 = 3;
            const obj6 = { value: closure_129_10, done: true };
            return obj6;
          } else {
            const obj7 = { paymentGateway: closure_129_1, recipientUserId: closure_129_2, isGift: closure_129_4, giftInfo: closure_129_5, orderLineItems: null, externalGatewayFacet: null };
            const obj8 = { sku_id: closure_129_0, quantity: 1, purchase_type: closure_129_3, subscription_plan_id: closure_129_7 };
            const items = [obj8];
            obj7.orderLineItems = items;
            obj7.externalGatewayFacet = closure_129_8;
            c3 = 3;
            c4 = 1;
            const obj9 = { value: closure_130_9(obj7), done: false };
            return obj9;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp20) {
      c4 = tmp;
      throw tmp20;
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
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_START" });
          c4 = 1;
          const obj2 = { expected_revision: closure_129_3, subscription_plan_id: closure_129_2 };
          closure_129_4 = obj2;
          const HTTP = closure_130_0(closure_130_2[4]).HTTP;
          const request = { url: closure_130_5.ORDER_PATCH_LINE_ITEM(closure_129_0, closure_129_1), body: closure_129_4, rejectWithError: true };
          c5 = 4;
          c6 = 1;
          const obj3 = { value: HTTP.patch(request), done: false };
          return obj3;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_6 = closure_3;
        let obj5 = closure_130_0(closure_130_2[5]);
        const obj4 = { tags: { source: "OrderActionCreators_patchOrderLineItem" }, extra: null };
        obj5 = { orderId: closure_129_0, orderLineItemId: closure_129_1, subscriptionPlanId: closure_129_2 };
        obj4.extra = obj5;
        const result = obj5.captureBillingException(closure_129_6, obj4);
        const obj6 = { error: closure_129_6, orderId: closure_129_0, orderLineItemId: closure_129_1 };
        closure_130_6.error("failed to update order line item id", obj6);
        let obj9 = closure_130_1(closure_130_2[6]);
        c5 = 3;
        c6 = 1;
        const obj7 = { value: obj9.dispatch({ type: "ORDER_UPDATE_FAIL" }), done: false };
        return obj7;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
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
          obj9 = { value, done: true };
          return obj9;
        } else {
          closure_129_5 = value;
          const obj10 = { orderId: closure_129_0, orderLineItemId: closure_129_1, body: closure_129_4 };
          closure_130_6.info("updated order line item", obj10);
          const obj11 = { type: "ORDER_UPDATE_SUCCESS", orderId: closure_129_0 };
          c5 = 5;
          c6 = 1;
          const obj12 = { value: closure_130_1(closure_130_2[6]).dispatch(obj11), done: false };
          return obj12;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value: closure_129_5.body.revision, done: true };
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
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_START" });
          c4 = 1;
          const obj2 = { expected_revision: closure_129_1 };
          closure_129_5 = obj2;
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
          const obj3 = { value: HTTP.patch(request), done: false };
          return obj3;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_7 = closure_3;
        let obj5 = closure_130_0(closure_130_2[5]);
        const obj4 = { tags: { source: "OrderActionCreators_patchOrder" }, extra: null };
        obj5 = { orderId: closure_129_0, orderLineItems: closure_129_2 };
        obj4.extra = obj5;
        const result = obj5.captureBillingException(closure_129_7, obj4);
        const obj6 = { error: closure_129_7, orderId: closure_129_0 };
        closure_130_6.error("failed to patch order", obj6);
        let obj9 = closure_130_1(closure_130_2[6]);
        c5 = 3;
        c6 = 1;
        const obj7 = { value: obj9.dispatch({ type: "ORDER_UPDATE_FAIL" }), done: false };
        return obj7;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
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
          obj9 = { value, done: true };
          return obj9;
        } else {
          body = value.body;
          const obj10 = { orderId: closure_129_0, body: closure_129_5 };
          closure_130_6.info("patched order", obj10);
          const obj11 = { type: "ORDER_UPDATE_SUCCESS", orderId: closure_129_0 };
          c5 = 5;
          c6 = 1;
          const obj12 = { value: closure_130_1(closure_130_2[6]).dispatch(obj11), done: false };
          return obj12;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value: body, done: true };
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
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_130_1(closure_130_2[6]).dispatch({ type: "ORDER_UPDATE_START" });
          c4 = 1;
          const obj2 = { expected_revision: closure_129_2 };
          closure_129_3 = obj2;
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
            const obj3 = { is_gift: true, gift_customization: closure_129_4 };
            closure_129_3.gifting_facet = obj3;
          }
          const HTTP = closure_130_0(closure_130_2[4]).HTTP;
          const request = { url: closure_130_5.ORDER_UPDATE(closure_129_0), body: closure_129_3, rejectWithError: true };
          c5 = 4;
          c6 = 1;
          const obj4 = { value: HTTP.patch(request), done: false };
          return obj4;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_6 = closure_3;
        let obj5 = closure_130_0(closure_130_2[5]);
        obj5 = { tags: { source: "OrderActionCreators_updateOrder" }, extra: null };
        const obj6 = { orderId: closure_129_0, giftInfo: closure_129_1 };
        obj5.extra = obj6;
        const result = obj5.captureBillingException(closure_129_6, obj5);
        const obj7 = { error: closure_129_6, orderId: closure_129_0 };
        closure_130_6.error("failed to update order", obj7);
        let obj9 = closure_130_1(closure_130_2[6]);
        c5 = 3;
        c6 = 1;
        const obj8 = { value: obj9.dispatch({ type: "ORDER_UPDATE_FAIL" }), done: false };
        return obj8;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj9 = { value, done: true };
          return obj9;
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
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_129_5 = value;
          const obj11 = { orderId: closure_129_0, body: closure_129_3 };
          closure_130_6.info("updated order with gift customization", obj11);
          const obj12 = { type: "ORDER_UPDATE_SUCCESS", orderId: closure_129_0 };
          c5 = 5;
          c6 = 1;
          const obj13 = { value: closure_130_1(closure_130_2[6]).dispatch(obj12), done: false };
          return obj13;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj14 = { value, done: true };
        return obj14;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value: closure_129_5.body.revision, done: true };
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
    closure_130_0(closure_130_2[5]);
    const obj2 = { tags: { source: "OrderActionCreators_cancelSigningAndDiscardOrder" }, extra: null };
    const obj3 = { orderId: closure_129_0 };
    obj2.extra = obj3;
    const result = obj3.captureBillingException(closure_129_1, obj2);
    c6 = 3;
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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else if (null != value) {
          let obj1 = { orderId: tmp14 };
          logger.info("signing already in progress, awaiting existing promise", obj1);
          c2 = 1;
          c1 = 1;
          let obj2 = { value, done: false };
          return obj2;
        } else {
          const tmp6 = asyncGeneratorStep(async () => {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp7 === 3) {
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
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    const orderId = tmp8;
                    closure_128_0 = undefined;
                    const obj1 = { type: "ORDER_MARK_SIGNING_START", orderId };
                    tmp4(tmp45[6]).dispatch(obj1);
                    c3 = 2;
                    const obj22 = tmp4(tmp45[6]);
                    c4 = 4;
                    c5 = 1;
                    const obj2 = { value: orderId(tmp45[7]).getOrder(orderId), done: false };
                    return obj2;
                  }
                } else if (1 === tmp8) {
                  c3 = 0;
                  c11 = null;
                  throw tmp45;
                } else if (2 === tmp8) {
                  c3 = 1;
                  closure_128_1 = tmp45;
                  let obj6 = orderId(tmp45[5]);
                  const _Error2 = Error;
                  const error = new Error("failed to mark order as signing in progress");
                  const obj3 = { tags: { source: "OrderActionCreators_markOrderAsSigningInProgress" }, extra: null };
                  const obj4 = { orderId: closure_129_0, response: closure_128_1 };
                  obj3.extra = obj4;
                  const result = obj6.captureBillingException(error, obj3);
                  const obj5 = { response: closure_128_1, orderId: closure_129_0 };
                  logger.error("failed to mark order as signing in progress", obj5);
                  let obj10 = tmp4(tmp45[6]);
                  obj6 = { type: "ORDER_MARK_SIGNING_FAIL", orderId: closure_129_0 };
                  c4 = 3;
                  c5 = 1;
                  const obj7 = { value: obj10.dispatch(obj6), done: false };
                  return obj7;
                } else if (3 === tmp8) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c11 = null;
                    c5 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
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
                    const obj9 = { value, done: true };
                    return obj9;
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
                      obj10 = { expected_revision: closure_128_0.revision };
                      request.body = obj10;
                      c4 = 5;
                      c5 = 1;
                      const obj11 = { value: HTTP.post(request), done: false };
                      return obj11;
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
                    const obj12 = { value, done: true };
                    return obj12;
                  } else {
                    const obj13 = { orderId: closure_129_0, revision: closure_128_0.revision };
                    logger.info("marked order as signing in progress", obj13);
                    const obj14 = { type: "ORDER_MARK_SIGNING_SUCCESS", orderId: closure_129_0 };
                    c4 = 6;
                    c5 = 1;
                    const obj15 = { value: tmp4(tmp45[6]).dispatch(obj14), done: false };
                    return obj15;
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c11 = null;
                  c5 = 3;
                  obj = { value, done: true };
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
          let obj3 = { value: tmp6, done: false };
          return obj3;
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          c1 = 3;
          let obj5 = { value: undefined, done: true };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            value = map.get(orderId);
            if (null != value) {
              let obj1 = { orderId };
              logger.info("cancel signing already in progress for order, awaiting existing promise", obj1);
              c2 = 1;
              c1 = 1;
              let obj2 = { value, done: false };
              return obj2;
            } else {
              const tmp6 = asyncGeneratorStep(async () => {
                if (c5 === 2) {
                  c5 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp7 === 3) {
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
                    if (0 === c4) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        orderId = tmp8;
                        closure_128_0 = undefined;
                        const obj1 = { type: "ORDER_CANCEL_SIGNING_START", orderId };
                        tmp4(tmp66[6]).dispatch(obj1);
                        c3 = 2;
                        const HTTP = orderId(tmp66[4]).HTTP;
                        const obj2 = { url: c5.ORDER_CANCEL_SIGNING(orderId), rejectWithError: true };
                        c4 = 4;
                        c5 = 1;
                        let obj3 = { value: HTTP.post(obj2), done: false };
                        return obj3;
                      }
                    } else if (1 === tmp8) {
                      c3 = 0;
                      set.delete(closure_129_0);
                      throw tmp66;
                    } else if (2 === tmp8) {
                      c3 = 1;
                      closure_128_1 = tmp66;
                      let obj8 = orderId(tmp66[5]);
                      const _Error2 = Error;
                      const error = new Error("failed to cancel order signing");
                      const obj4 = { tags: { source: "OrderActionCreators_cancelOrderSigning" }, extra: null };
                      const obj5 = { orderId: closure_129_0, response: closure_128_1 };
                      obj4.extra = obj5;
                      const result = obj8.captureBillingException(error, obj4);
                      const obj6 = { response: closure_128_1, orderId: closure_129_0 };
                      logger.error("failed to cancel order signing", obj6);
                      let obj12 = tmp4(tmp66[6]);
                      const obj7 = { type: "ORDER_CANCEL_SIGNING_FAIL", orderId: closure_129_0 };
                      c4 = 3;
                      c5 = 1;
                      obj8 = { value: obj12.dispatch(obj7), done: false };
                      return obj8;
                    } else if (3 === tmp8) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        set.delete(closure_129_0);
                        c5 = 3;
                        const obj9 = { value, done: true };
                        return obj9;
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
                        const obj10 = { value, done: true };
                        return obj10;
                      } else {
                        closure_128_0 = value;
                        if (null == closure_128_0.body) {
                          const _Error = Error;
                          const error1 = new Error("Invalid cancel signing response");
                          throw error1;
                        } else {
                          const obj11 = { orderId: closure_129_0 };
                          logger.info("cancel order signing, transitioned back to DRAFT", obj11);
                          obj3 = tmp4(tmp66[6]);
                          obj12 = { type: "ORDER_CANCEL_SIGNING_SUCCESS", orderId: closure_129_0 };
                          c4 = 5;
                          c5 = 1;
                          const obj13 = { value: obj3.dispatch(obj12), done: false };
                          return obj13;
                        }
                      }
                    } else if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      set.delete(closure_129_0);
                      c5 = 3;
                      const obj14 = { value, done: true };
                      return obj14;
                    } else {
                      c3 = 0;
                      set.delete(closure_129_0);
                      c5 = 3;
                      obj = { value: closure_128_0.body, done: true };
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
              let obj3 = { value: tmp6, done: false };
              return obj3;
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            c1 = 3;
            let obj5 = { value, done: true };
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          let obj6 = { value, done: true };
          return obj6;
        } else {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp10) {
        c1 = tmp;
        throw tmp10;
      }
    }
  })();
};
const OrderStatus = fn(4542).OrderStatus;
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