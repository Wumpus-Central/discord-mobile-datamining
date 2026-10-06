// discord_app/modules/payments/native/OrderActionCreators.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import Constants from "../../../Constants.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PaymentConstants from "../PaymentConstants.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4, order_line_items;

function getOrders() {
  return obj(...arguments);
}
let obj = function _getOrders() {
  obj = _asyncToGenerator(async (options) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
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
          let status;
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
              c4 = 1;
              status = undefined;
              if (options != null) {
                status = options.status;
              }
              const obj5 = {};
              if (null != status) {
                status = [options.status];
                obj5.statuses = status;
              }
              status = undefined;
              if (options != null) {
                status = options.skuId;
              }
              if (null != status) {
                obj5.sku_id = options.skuId;
              }
              status = undefined;
              if (options != null) {
                status = options.createdAfter;
              }
              if (null != status) {
                obj5.created_after = options.createdAfter;
              }
              status = undefined;
              if (options != null) {
                status = options.isGift;
              }
              if (null != status) {
                obj5.is_gift = options.isGift;
              }
              status = undefined;
              if (options != null) {
                status = options.recipientUserId;
              }
              if (null != status) {
                obj5.recipient_id = options.recipientUserId;
              }
              status = undefined;
              if (options != null) {
                status = options.paymentGateway;
              }
              if (null != status) {
                obj5.payment_gateway = options.paymentGateway;
              }
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.ORDER_LIST, query: obj5, rejectWithError: true };
              status = HTTP.get(request);
              c5 = 2;
              c6 = 1;
              return { value: status, done: false };
            }
          } else if (1 === tmp4) {
            c4 = 0;
            error = closure_3;
            const obj7 = { error, options };
            closure_130_6.error("failed to fetch orders", obj7);
            const obj8 = { tags: { source: "OrderActionCreators_getOrders" }, extra: obj9 };
            obj9 = { options };
            const obj4 = closure_130_0(closure_130_2[5]);
            status = obj4.captureBillingException(error, obj8);
            throw error;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            status = value.body || [];
            c4 = 0;
            c6 = 3;
            return { value: status, done: true };
          }
        } catch (tmp21) {
          closure_3 = tmp21;
          if (0 === c4) {
            c6 = 3;
            throw tmp21;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function createOrder() {
  return obj(...arguments);
}
obj = function _createOrder() {
  obj = _asyncToGenerator(async (order_line_items) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let code;
    let code1;
    let external_gateway_facet;
    let obj13;
    let obj22;
    let obj7;
    let obj9;
    let request_gateway_country_code;
    if (request_gateway_country_code === 2) {
      request_gateway_country_code = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (order_line_items === 1) {
        throw value;
      } else if (order_line_items === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let subscription_facet;
      try {
        let paymentGateway;
        let recipient_id;
        let obj5;
        let obj6;
        let closure_11;
        let status;
        let body;
        request_gateway_country_code = 2;
        if (0 === external_gateway_facet) {
          if (order_line_items === 1) {
            request_gateway_country_code = 3;
            throw value;
          } else if (order_line_items === 2) {
            request_gateway_country_code = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            order_line_items = undefined;
            paymentGateway = undefined;
            recipient_id = undefined;
            subscription_facet = undefined;
            ({
              orderLineItems: c0,
              paymentGateway: c1,
              recipientUserId: c2,
              isGift: c3,
              giftInfo: c4,
              subscriptionFacet: c5,
              externalGatewayFacet: c6,
              countryCode: c7,
            } = closure_0);
            obj5 = undefined;
            obj6 = undefined;
            closure_11 = undefined;
            status = undefined;
            body = undefined;
            external_gateway_facet = 1;
            request_gateway_country_code = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === external_gateway_facet) {
          if (order_line_items === 1) {
            request_gateway_country_code = 3;
            throw value;
          } else if (order_line_items === 2) {
            request_gateway_country_code = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj24 = closure_131_1(closure_131_2[6]);
            obj24.dispatch({ type: "ORDER_CREATE_START" });
            subscription_facet = 1;
            const tmp116 = tmp;
            if (tmp116) {
              obj5 = { recipient_id };
              let gift_style;
              if (tmp93 != null) {
                gift_style = tmp93.gift_style;
              }
              if (null != gift_style) {
                obj5.gift_style = tmp93.gift_style;
              }
              let emoji_id;
              if (tmp93 != null) {
                emoji_id = tmp93.emoji_id;
              }
              if (null != emoji_id) {
                obj5.emoji_id = tmp93.emoji_id;
              }
              let emoji_name;
              if (tmp93 != null) {
                emoji_name = tmp93.emoji_name;
              }
              if (null != emoji_name) {
                obj5.emoji_name = tmp93.emoji_name;
              }
              let sound_id;
              if (tmp93 != null) {
                sound_id = tmp93.sound_id;
              }
              if (null != sound_id) {
                obj5.sound_id = tmp93.sound_id;
              }
              let reward_sku_ids;
              if (tmp93 != null) {
                reward_sku_ids = tmp93.reward_sku_ids;
              }
              if (null != reward_sku_ids) {
                obj5.reward_sku_ids = tmp93.reward_sku_ids;
              }
              let prop;
              if (tmp93 != null) {
                prop = tmp93.custom_message_contents;
              }
              if (null != prop) {
                obj5.custom_message_contents = tmp93.custom_message_contents;
              }
            }
            obj6 = { order_line_items, billing_facet: obj7, subscription_facet };
            obj7 = { payment_gateway: paymentGateway };
            if (null != request_gateway_country_code) {
              const obj8 = { request_gateway_country_code };
              obj6.location_facet = obj8;
            }
            const tmp78 = tmp;
            if (tmp78) {
              const obj10 = { is_gift: tmp, gift_customization: obj5 };
              obj6.gifting_facet = obj10;
            }
            if (null != external_gateway_facet) {
              obj6.external_gateway_facet = external_gateway_facet;
            }
            const HTTP = closure_131_0(closure_131_2[4]).HTTP;
            const request = { url: closure_131_5.ORDER_CREATE, body: obj6, rejectWithError: true, retries: 3 };
            external_gateway_facet = 3;
            request_gateway_country_code = 1;
            const obj11 = { value: HTTP.post(request), done: false };
            return obj11;
          }
        } else {
          let error;
          if (2 === external_gateway_facet) {
            subscription_facet = 0;
            error = closure_4;
            let closure_1 = error;
            if (error == null) {
              closure_1 = {};
            }
            closure_11 = closure_1;
            status = closure_11.status;
            body = closure_11.body;
            const obj12 = { tags: { source: "OrderActionCreators_createOrder" }, extra: obj13 };
            obj13 = { paymentGateway, isGift: tmp, status, code };
            code = undefined;
            const captureBillingException = closure_131_0(closure_131_2[5]).captureBillingException;
            const tmp19 = closure_131_0(closure_131_2[5]);
            const tmp20 = error;
            if (body != null) {
              code = body.code;
            }
            const result = captureBillingException(tmp20, obj12);
            const obj14 = { error, status, code: code1, paymentGateway, isGift: tmp };
            code1 = undefined;
            error = closure_131_6.error;
            if (body != null) {
              code1 = body.code;
            }
            error("failed to create order", obj14);
            external_gateway_facet = 5;
            request_gateway_country_code = 1;
            const obj15 = { value: obj9.dispatch({ type: "ORDER_CREATE_FAIL" }), done: false };
            obj9 = closure_131_1(closure_131_2[6]);
            return obj15;
          } else if (3 === external_gateway_facet) {
            if (order_line_items === 1) {
              request_gateway_country_code = 3;
              throw value;
            } else if (order_line_items === 2) {
              subscription_facet = 0;
              request_gateway_country_code = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              body = value.body;
              const obj17 = { orderId: body.id, paymentGateway, body: obj6 };
              closure_131_6.info("created order", obj17);
              const obj18 = { type: "ORDER_CREATE_SUCCESS", orderId: body.id, order: body };
              external_gateway_facet = 4;
              request_gateway_country_code = 1;
              const obj19 = { value: obj22.dispatch(obj18), done: false };
              obj22 = closure_131_1(closure_131_2[6]);
              return obj19;
            }
          } else if (4 === external_gateway_facet) {
            if (order_line_items === 1) {
              request_gateway_country_code = 3;
              throw value;
            } else if (order_line_items === 2) {
              subscription_facet = 0;
              request_gateway_country_code = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else {
              subscription_facet = 0;
              request_gateway_country_code = 3;
              const obj21 = { value: body, done: true };
              return obj21;
            }
          } else if (order_line_items === 1) {
            request_gateway_country_code = 3;
            throw value;
          } else if (order_line_items === 2) {
            request_gateway_country_code = 3;
            obj = { value, done: true };
            return obj;
          } else {
            throw error;
          }
        }
      } catch (tmp93) {
        closure_4 = tmp93;
        if (0 === subscription_facet) {
          request_gateway_country_code = 3;
          throw tmp93;
        } else {
          external_gateway_facet = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getOrCreateOrder() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let isGift;
    let items;
    let purchase_type;
    let value;
    let closure_0 = arg0;
    if (isGift === 2) {
      isGift = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let sku_id;
        let paymentGateway;
        let recipientUserId;
        let giftInfo;
        let createdAfter;
        let subscription_plan_id;
        let externalGatewayFacet;
        let length;
        isGift = 2;
        if (0 === purchase_type) {
          if (arg0 === 1) {
            isGift = 3;
            throw value;
          } else if (arg0 === 2) {
            isGift = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp3;
            sku_id = undefined;
            paymentGateway = undefined;
            recipientUserId = undefined;
            giftInfo = undefined;
            createdAfter = undefined;
            subscription_plan_id = undefined;
            externalGatewayFacet = undefined;
            ({
              skuId: c0,
              paymentGateway: c1,
              recipientUserId: c2,
              purchaseType: c3,
              isGift: c4,
              giftInfo: c5,
              createdAfter: c6,
              subscriptionPlanId: c7,
              externalGatewayFacet: c8,
            } = closure_0);
            length = undefined;
            value = undefined;
            purchase_type = 1;
            isGift = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === purchase_type) {
          if (arg0 === 1) {
            isGift = 3;
            throw value;
          } else if (arg0 === 2) {
            isGift = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj5 = { isGift, status: closure_130_4.DRAFT, skuId: sku_id, createdAfter, recipientUserId };
            purchase_type = 2;
            isGift = 1;
            const obj6 = { value: closure_130_7(obj5), done: false };
            return obj6;
          }
        } else if (2 === purchase_type) {
          if (arg0 === 1) {
            isGift = 3;
            throw value;
          } else if (arg0 === 2) {
            isGift = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            length = value;
            if (length.length > 0) {
              value = length[0];
              const obj8 = { orderId: value.id, skuId: sku_id, isGift };
              closure_130_6.info("reusing existing draft order", obj8);
              isGift = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              const obj10 = {
                paymentGateway,
                recipientUserId,
                isGift,
                giftInfo,
                orderLineItems: items,
                externalGatewayFacet,
              };
              const obj11 = { sku_id, quantity: 1, purchase_type, subscription_plan_id };
              items = [obj11];
              purchase_type = 3;
              isGift = 1;
              const obj12 = { value: closure_130_9(obj10), done: false };
              return obj12;
            }
          }
        } else if (arg0 === 1) {
          isGift = 3;
          throw value;
        } else if (arg0 === 2) {
          isGift = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          isGift = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp20) {
        isGift = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
obj = function _patchOrderLineItem() {
  obj = _asyncToGenerator(async (orderId) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let obj10;
    let obj17;
    let obj9;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (orderId === 1) {
        throw value;
      } else if (orderId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let orderLineItemId;
        let expected_revision;
        let obj5;
        let body;
        c6 = 2;
        if (0 === c5) {
          if (orderId === 1) {
            c6 = 3;
            throw value;
          } else if (orderId === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            orderId = undefined;
            orderLineItemId = undefined;
            expected_revision = undefined;
            ({ orderId: c0, orderLineItemId: c1, subscriptionPlanId: c2, expectedRevision: c3 } = closure_0);
            obj5 = undefined;
            body = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (orderId === 1) {
            c6 = 3;
            throw value;
          } else if (orderId === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj19 = closure_130_1(closure_130_2[6]);
            obj19.dispatch({ type: "ORDER_UPDATE_START" });
            c4 = 1;
            obj5 = { expected_revision, subscription_plan_id: tmp };
            const HTTP = closure_130_0(closure_130_2[4]).HTTP;
            const request = {
              url: closure_130_5.ORDER_PATCH_LINE_ITEM(orderId, orderLineItemId),
              body: obj5,
              rejectWithError: true,
            };
            const patch = HTTP.patch;
            c5 = 4;
            c6 = 1;
            const obj7 = { value: patch(request), done: false };
            return obj7;
          }
        } else {
          let error;
          if (2 === c5) {
            c4 = 0;
            error = closure_3;
            const obj8 = { tags: { source: "OrderActionCreators_patchOrderLineItem" }, extra: obj9 };
            obj9 = { orderId, orderLineItemId, subscriptionPlanId: tmp };
            const obj6 = closure_130_0(closure_130_2[5]);
            const result = obj6.captureBillingException(error, obj8);
            const obj11 = { error, orderId, orderLineItemId };
            closure_130_6.error("failed to update order line item id", obj11);
            c5 = 3;
            c6 = 1;
            const obj12 = { value: obj10.dispatch({ type: "ORDER_UPDATE_FAIL" }), done: false };
            obj10 = closure_130_1(closure_130_2[6]);
            return obj12;
          } else if (3 === c5) {
            if (orderId === 1) {
              c6 = 3;
              throw value;
            } else if (orderId === 2) {
              c6 = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              throw error;
            }
          } else if (4 === c5) {
            if (orderId === 1) {
              c6 = 3;
              throw value;
            } else if (orderId === 2) {
              c4 = 0;
              c6 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              body = value;
              const obj15 = { orderId, orderLineItemId, body: obj5 };
              closure_130_6.info("updated order line item", obj15);
              const obj16 = { type: "ORDER_UPDATE_SUCCESS", orderId };
              c5 = 5;
              c6 = 1;
              const obj18 = { value: obj17.dispatch(obj16), done: false };
              obj17 = closure_130_1(closure_130_2[6]);
              return obj18;
            }
          } else if (orderId === 1) {
            c6 = 3;
            throw value;
          } else if (orderId === 2) {
            c4 = 0;
            c6 = 3;
            const obj20 = { value, done: true };
            return obj20;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: body.body.revision, done: true };
            return obj;
          }
        }
      } catch (tmp28) {
        closure_3 = tmp28;
        if (0 === c4) {
          c6 = 3;
          throw tmp28;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _patchOrder() {
  obj = _asyncToGenerator(async (orderId) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let obj10;
    let obj18;
    let obj9;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (orderId === 1) {
        throw value;
      } else if (orderId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let external_gateway_facet;
      try {
        let expected_revision;
        let subscription_facet;
        let obj5;
        let body;
        c6 = 2;
        if (0 === c5) {
          if (orderId === 1) {
            c6 = 3;
            throw value;
          } else if (orderId === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            orderId = undefined;
            expected_revision = undefined;
            subscription_facet = undefined;
            external_gateway_facet = undefined;
            ({
              orderId: c0,
              expectedRevision: c1,
              orderLineItems: c2,
              subscriptionFacet: c3,
              externalGatewayFacet: c4,
            } = closure_0);
            obj5 = undefined;
            body = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (orderId === 1) {
            c6 = 3;
            throw value;
          } else if (orderId === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj20 = closure_130_1(closure_130_2[6]);
            obj20.dispatch({ type: "ORDER_UPDATE_START" });
            external_gateway_facet = 1;
            obj5 = { expected_revision };
            if (null != tmp) {
              obj5.order_line_items = tmp;
            }
            if (null != subscription_facet) {
              obj5.subscription_facet = subscription_facet;
            }
            if (null != external_gateway_facet) {
              obj5.external_gateway_facet = external_gateway_facet;
            }
            const HTTP = closure_130_0(closure_130_2[4]).HTTP;
            const request = { url: closure_130_5.ORDER_UPDATE(orderId), body: obj5, rejectWithError: true };
            const patch = HTTP.patch;
            c5 = 4;
            c6 = 1;
            const obj7 = { value: patch(request), done: false };
            return obj7;
          }
        } else {
          let error;
          if (2 === c5) {
            external_gateway_facet = 0;
            error = closure_3;
            const obj8 = { tags: { source: "OrderActionCreators_patchOrder" }, extra: obj9 };
            obj9 = { orderId, orderLineItems: tmp };
            const obj6 = closure_130_0(closure_130_2[5]);
            const result = obj6.captureBillingException(error, obj8);
            const obj11 = { error, orderId };
            closure_130_6.error("failed to patch order", obj11);
            c5 = 3;
            c6 = 1;
            const obj12 = { value: obj10.dispatch({ type: "ORDER_UPDATE_FAIL" }), done: false };
            obj10 = closure_130_1(closure_130_2[6]);
            return obj12;
          } else if (3 === c5) {
            if (orderId === 1) {
              c6 = 3;
              throw value;
            } else if (orderId === 2) {
              c6 = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              throw error;
            }
          } else if (4 === c5) {
            if (orderId === 1) {
              c6 = 3;
              throw value;
            } else if (orderId === 2) {
              external_gateway_facet = 0;
              c6 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              body = value.body;
              const obj15 = { orderId, body: obj5 };
              closure_130_6.info("patched order", obj15);
              const obj16 = { type: "ORDER_UPDATE_SUCCESS", orderId };
              c5 = 5;
              c6 = 1;
              const obj17 = { value: obj18.dispatch(obj16), done: false };
              obj18 = closure_130_1(closure_130_2[6]);
              return obj17;
            }
          } else if (orderId === 1) {
            c6 = 3;
            throw value;
          } else if (orderId === 2) {
            external_gateway_facet = 0;
            c6 = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else {
            external_gateway_facet = 0;
            c6 = 3;
            obj = { value: body, done: true };
            return obj;
          }
        }
      } catch (tmp45) {
        closure_3 = tmp45;
        if (0 === external_gateway_facet) {
          c6 = 3;
          throw tmp45;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _updateOrder() {
  obj = _asyncToGenerator(async (orderId) => {
    let c0;
    let c1;
    let c2;
    let obj10;
    let obj11;
    let obj19;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (orderId === 1) {
        throw value;
      } else if (orderId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let giftInfo;
        let expected_revision;
        let obj5;
        let gift_customization;
        let body;
        c6 = 2;
        if (0 === c5) {
          if (orderId === 1) {
            c6 = 3;
            throw value;
          } else if (orderId === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            orderId = undefined;
            giftInfo = undefined;
            expected_revision = undefined;
            ({ orderId: c0, giftInfo: c1, expectedRevision: c2 } = closure_0);
            obj5 = undefined;
            gift_customization = undefined;
            body = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (orderId === 1) {
            c6 = 3;
            throw value;
          } else if (orderId === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj21 = closure_130_1(closure_130_2[6]);
            obj21.dispatch({ type: "ORDER_UPDATE_START" });
            c4 = 1;
            obj5 = { expected_revision };
            if (null != giftInfo) {
              gift_customization = {};
              if (null != giftInfo.recipient_id) {
                gift_customization.recipient_id = giftInfo.recipient_id;
              }
              if (null != giftInfo.gift_style) {
                gift_customization.gift_style = giftInfo.gift_style;
              }
              if (null != giftInfo.emoji_id) {
                gift_customization.emoji_id = giftInfo.emoji_id;
              }
              if (null != giftInfo.emoji_name) {
                gift_customization.emoji_name = giftInfo.emoji_name;
              }
              if (null != giftInfo.sound_id) {
                gift_customization.sound_id = giftInfo.sound_id;
              }
              if (null != giftInfo.reward_sku_ids) {
                gift_customization.reward_sku_ids = giftInfo.reward_sku_ids;
              }
              if (null != giftInfo.custom_message_contents) {
                gift_customization.custom_message_contents = giftInfo.custom_message_contents;
              }
              const obj7 = { is_gift: true, gift_customization };
              obj5.gifting_facet = obj7;
            }
            const HTTP = closure_130_0(closure_130_2[4]).HTTP;
            const request = { url: closure_130_5.ORDER_UPDATE(orderId), body: obj5, rejectWithError: true };
            const patch = HTTP.patch;
            c5 = 4;
            c6 = 1;
            const obj8 = { value: patch(request), done: false };
            return obj8;
          }
        } else {
          let error;
          if (2 === c5) {
            c4 = 0;
            error = closure_3;
            const obj9 = { tags: { source: "OrderActionCreators_updateOrder" }, extra: obj11 };
            obj11 = { orderId, giftInfo };
            const obj6 = closure_130_0(closure_130_2[5]);
            const result = obj6.captureBillingException(error, obj9);
            const obj12 = { error, orderId };
            closure_130_6.error("failed to update order", obj12);
            c5 = 3;
            c6 = 1;
            const obj13 = { value: obj10.dispatch({ type: "ORDER_UPDATE_FAIL" }), done: false };
            obj10 = closure_130_1(closure_130_2[6]);
            return obj13;
          } else if (3 === c5) {
            if (orderId === 1) {
              c6 = 3;
              throw value;
            } else if (orderId === 2) {
              c6 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              throw error;
            }
          } else if (4 === c5) {
            if (orderId === 1) {
              c6 = 3;
              throw value;
            } else if (orderId === 2) {
              c4 = 0;
              c6 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              body = value;
              const obj16 = { orderId, body: obj5 };
              closure_130_6.info("updated order with gift customization", obj16);
              const obj17 = { type: "ORDER_UPDATE_SUCCESS", orderId };
              c5 = 5;
              c6 = 1;
              const obj18 = { value: obj19.dispatch(obj17), done: false };
              obj19 = closure_130_1(closure_130_2[6]);
              return obj18;
            }
          } else if (orderId === 1) {
            c6 = 3;
            throw value;
          } else if (orderId === 2) {
            c4 = 0;
            c6 = 3;
            const obj20 = { value, done: true };
            return obj20;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: body.body.revision, done: true };
            return obj;
          }
        }
      } catch (tmp69) {
        closure_3 = tmp69;
        if (0 === c4) {
          c6 = 3;
          throw tmp69;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _discardOrder() {
  obj = _asyncToGenerator(async function (arg0) {
    let c2;
    let c3;
    let closure_1;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: Endpoints.ORDER_DISCARD(closure_0), rejectWithError: false };
    const post = HTTP.post;
    await post(obj4);
    closure_0 = value;
    if (null == closure_0.body) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Invalid discard order response");
      throw error;
    }
    return closure_0.body;
  });
  return obj(...arguments);
};
obj = function _markOrderAsSigningInProgress() {
  let closure_11;
  let logger;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0;
    let value;
    if (c1 === 2) {
      c1 = 3;
      const str2 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            let obj4 = { orderId: tmp12 };
            const str = "signing already in progress, awaiting existing promise";
            const infoResult = logger.info("signing already in progress, awaiting existing promise", obj4);
            c2 = 1;
            c1 = 1;
            let obj5 = { value, done: false };
            return obj5;
          } else {
            const tmp5 = _asyncToGenerator(async function () {
              let obj10;
              let obj14;
              let obj17;
              let obj23;
              let obj7;
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
                let c3;
                try {
                  let response;
                  let orderId;
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
                      response = tmp;
                      orderId = undefined;
                      const obj4 = { type: "ORDER_MARK_SIGNING_START", orderId };
                      const obj21 = response(closure_2[6]);
                      obj21.dispatch(obj4);
                      c3 = 2;
                      c4 = 4;
                      c5 = 1;
                      const obj5 = { value: obj23.getOrder(orderId), done: false };
                      obj23 = orderId(closure_2[7]);
                      return obj5;
                    }
                  } else if (1 === c4) {
                    c3 = 0;
                    c11 = null;
                    throw closure_2;
                  } else if (2 === c4) {
                    c3 = 1;
                    response = closure_2;
                    const _Error2 = Error;
                    const self3 = this;
                    const self4 = this;
                    const captureBillingException = orderId(closure_2[5]).captureBillingException;
                    const tmp22 = orderId(closure_2[5]);
                    const error = new Error("failed to mark order as signing in progress");
                    const obj6 = { tags: { source: "OrderActionCreators_markOrderAsSigningInProgress" }, extra: obj7 };
                    obj7 = { orderId: closure_129_0, response };
                    const result = captureBillingException(error, obj6);
                    const obj8 = { response, orderId: closure_129_0 };
                    logger.error("failed to mark order as signing in progress", obj8);
                    const obj9 = { type: "ORDER_MARK_SIGNING_FAIL", orderId: closure_129_0 };
                    c4 = 3;
                    c5 = 1;
                    const obj11 = { value: obj10.dispatch(obj9), done: false };
                    obj10 = response(closure_2[6]);
                    return obj11;
                  } else if (3 === c4) {
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
                      throw response;
                    }
                  } else if (4 === c4) {
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
                      orderId = value;
                      if (null == orderId) {
                        const _Error = Error;
                        const _HermesInternal = HermesInternal;
                        const self = this;
                        const self2 = this;
                        const error1 = new Error("Order " + closure_129_0 + " not found");
                        throw error1;
                      } else {
                        const HTTP = orderId(closure_2[4]).HTTP;
                        const request = { url: c5.ORDER_SIGN(closure_129_0), body: obj14, rejectWithError: true };
                        const post = HTTP.post;
                        obj14 = { expected_revision: orderId.revision };
                        c4 = 5;
                        c5 = 1;
                        const obj15 = { value: post(request), done: false };
                        return obj15;
                      }
                    }
                  } else if (5 === c4) {
                    if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      c11 = null;
                      c5 = 3;
                      const obj16 = { value, done: true };
                      return obj16;
                    } else {
                      const obj18 = { orderId: closure_129_0, revision: orderId.revision };
                      logger.info("marked order as signing in progress", obj18);
                      const obj19 = { type: "ORDER_MARK_SIGNING_SUCCESS", orderId: closure_129_0 };
                      c4 = 6;
                      c5 = 1;
                      const obj20 = { value: obj17.dispatch(obj19), done: false };
                      obj17 = response(closure_2[6]);
                      return obj20;
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
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp38) {
                  closure_2 = tmp38;
                  if (0 === c3) {
                    c5 = 3;
                    throw tmp38;
                  } else if (1 === tmp40) {
                    c4 = 1;
                  } else {
                    c4 = 2;
                  }
                }
              }
            })();
            value = tmp5;
            c2 = 2;
            c1 = 1;
            let obj6 = { value: tmp5, done: false };
            return obj6;
          }
        } else if (1 === tmp3) {
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
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        c1 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = function _cancelOrderSigning() {
  let logger;
  obj = _asyncToGenerator(async (orderId) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let value;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
                let obj4 = { orderId };
                logger.info("cancel signing already in progress for order, awaiting existing promise", obj4);
                c2 = 1;
                c1 = 1;
                let obj5 = { value, done: false };
                return obj5;
              } else {
                const tmp5 = _asyncToGenerator(async function () {
                  let obj12;
                  let obj4;
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
                    let c3;
                    try {
                      let response;
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
                          response = tmp;
                          orderId = undefined;
                          const obj5 = { type: "ORDER_CANCEL_SIGNING_START", orderId };
                          const obj18 = response(closure_2[6]);
                          obj18.dispatch(obj5);
                          c3 = 2;
                          const HTTP = orderId(closure_2[4]).HTTP;
                          const obj6 = { url: c5.ORDER_CANCEL_SIGNING(orderId), rejectWithError: true };
                          const post = HTTP.post;
                          c4 = 4;
                          c5 = 1;
                          const obj7 = { value: post(obj6), done: false };
                          return obj7;
                        }
                      } else if (1 === c4) {
                        c3 = 0;
                        set.delete(closure_129_0);
                        throw closure_2;
                      } else if (2 === c4) {
                        c3 = 1;
                        response = closure_2;
                        const _Error2 = Error;
                        const self3 = this;
                        const self4 = this;
                        const captureBillingException = orderId(closure_2[5]).captureBillingException;
                        const tmp40 = orderId(closure_2[5]);
                        const error = new Error("failed to cancel order signing");
                        const obj8 = { tags: { source: "OrderActionCreators_cancelOrderSigning" }, extra: obj9 };
                        obj9 = { orderId: closure_129_0, response };
                        const result = captureBillingException(error, obj8);
                        const obj10 = { response, orderId: closure_129_0 };
                        logger.error("failed to cancel order signing", obj10);
                        const obj11 = { type: "ORDER_CANCEL_SIGNING_FAIL", orderId: closure_129_0 };
                        c4 = 3;
                        c5 = 1;
                        const obj13 = { value: obj12.dispatch(obj11), done: false };
                        obj12 = response(closure_2[6]);
                        return obj13;
                      } else if (3 === c4) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 0;
                          set.delete(closure_129_0);
                          c5 = 3;
                          const obj14 = { value, done: true };
                          return obj14;
                        } else {
                          throw response;
                        }
                      } else if (4 === c4) {
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
                          orderId = value;
                          if (null == orderId.body) {
                            const _Error = Error;
                            const self = this;
                            const self2 = this;
                            const error1 = new Error("Invalid cancel signing response");
                            throw error1;
                          } else {
                            const obj16 = { orderId: closure_129_0 };
                            logger.info("cancel order signing, transitioned back to DRAFT", obj16);
                            const obj17 = { type: "ORDER_CANCEL_SIGNING_SUCCESS", orderId: closure_129_0 };
                            c4 = 5;
                            c5 = 1;
                            const obj19 = { value: obj4.dispatch(obj17), done: false };
                            obj4 = response(closure_2[6]);
                            return obj19;
                          }
                        }
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        set.delete(closure_129_0);
                        c5 = 3;
                        const obj20 = { value, done: true };
                        return obj20;
                      } else {
                        c3 = 0;
                        const body = orderId.body;
                        set.delete(closure_129_0);
                        c5 = 3;
                        obj = { value: body, done: true };
                        return obj;
                      }
                    } catch (tmp59) {
                      closure_2 = tmp59;
                      if (0 === c3) {
                        c5 = 3;
                        throw tmp59;
                      } else if (1 === tmp61) {
                        c4 = 1;
                      } else {
                        c4 = 2;
                      }
                    }
                  }
                })();
                let result = map.set(orderId, tmp5);
                c2 = 2;
                c1 = 1;
                let obj6 = { value: tmp5, done: false };
                return obj6;
              }
            }
          } else if (1 === tmp3) {
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
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp9) {
          c1 = 3;
          throw tmp9;
        }
      }
    })();
  });
  return obj(...arguments);
};
const OrderStatus = PaymentConstants.OrderStatus;
const Endpoints = Constants.Endpoints;
const tmp2 = new LoggerDefault("OrderActionCreators");
let closure_6 = tmp2;
let c11 = null;
const map = new Map();
let result = size.fileFinishedImporting("modules/payments/native/OrderActionCreators.tsx");
const logger_export = tmp2;

export { logger_export as logger };
export const DRAFT_ORDER_LOOKBACK_DAYS = 3;
export { getOrders };
export { createOrder };
export const getOrCreateOrder = function getOrCreateOrder() {
  return obj(...arguments);
};
export const patchOrderLineItem = function patchOrderLineItem() {
  return obj(...arguments);
};
export const patchOrder = function patchOrder() {
  return obj(...arguments);
};
export const updateOrder = function updateOrder() {
  return obj(...arguments);
};
export const discardOrder = function discardOrder() {
  return obj(...arguments);
};
export const markOrderAsSigningInProgress = function markOrderAsSigningInProgress() {
  return obj(...arguments);
};
export const cancelOrderSigning = function cancelOrderSigning() {
  return obj(...arguments);
};
