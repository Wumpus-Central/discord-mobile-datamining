// discord_app/actions/SKUActionCreators.tsx
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery";
import getPromotionIdOverride from "getPromotionIdOverride";
import addSku from "addSku";
import ME from "ME";
import { dispatcher } from "../Dispatcher.tsx";

let closure_6;
let error;
const require = arg1;
function _fetchSKU() {
  const self = this;
  const tmp = callback((arg0) => {
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
          return { value: "T", done: null };
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
              const dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              if (null == c5.get(callback)) {
                let obj5 = outer1_1(outer1_2[4]);
                const obj1 = { type: "SKU_FETCH_START", skuId: null };
                obj1[1] = tmp46;
                obj5.dispatch(obj1);
                let c4 = 1;
                const obj2 = { url: null, rejectWithError: null };
                obj2[0] = outer1_7.STORE_SKU(tmp46);
                const obj8 = callback(outer1_2[5]);
                obj2[1] = callback(outer1_2[6]).rejectWithMigratedError();
                c5 = 2;
                c6 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = obj8.httpGetWithCountryCodeQuery(obj2);
                return obj3;
              } else {
                c6 = 3;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            obj3 = lib(709);
            const obj4 = { type: "SKU_FETCH_FAIL", skuId: null };
            obj4[1] = callback;
            obj3.dispatch(obj4);
            const _HermesInternal = HermesInternal;
            let tmp23 = lib(3970);
            tmp23 = new tmp23("Failed to fetch SKU " + callback);
            throw tmp23;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            lib = arg1;
            obj = lib(709);
            obj5 = { type: "SKU_FETCH_SUCCESS", sku: null };
            obj5[1] = lib.body;
            obj.dispatch(obj5);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          const obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        } catch (tmp36) {
          let _httpGetWithCountryCodeQuery = tmp36;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp36;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _fetchSKU = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchPublishedSKU() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let _httpGetWithCountryCodeQuery = arg3;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c9 === 2) {
        c9 = 3;
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
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let addSku = tmp3;
              let getPromotionIdOverride = tmp5;
              const callback = callback2;
              callback2 = undefined;
              let closure_2;
              if (null == outer1_5.get(callback2)) {
                let obj6 = callback2(closure_2[4]);
                let obj1 = { type: "SKU_FETCH_START", skuId: null };
                obj1[1] = tmp61;
                obj6.dispatch(obj1);
                let c7 = 1;
                const result = callback(closure_2[8]).isTestModeForApplication(tmp60);
                callback2 = result;
                if (result) {
                  let STORE_SKUResult = obj10.STORE_SKU(tmp61);
                } else {
                  STORE_SKUResult = obj10.STORE_PUBLISHED_LISTINGS_SKU(tmp61);
                }
                const obj2 = { url: null, rejectWithError: null };
                obj2[0] = STORE_SKUResult;
                let tmp36Result = tmp36(closure_2[6]);
                obj2[1] = tmp36Result.rejectWithMigratedError();
                const obj3 = {};
                if (tmp62 === callback(closure_2[9]).ShopVariantsReturnStyle.VARIANTS_GROUP) {
                  obj3.variants_return_style = tmp62;
                }
                if (tmp63) {
                  obj3.include_unpublished = true;
                }
                const _Object = Object;
                if (Object.keys(obj3).length > 0) {
                  obj2.query = obj3;
                }
                tmp36Result = tmp36(closure_2[5]);
                c8 = 2;
                c9 = 1;
                let obj4 = { value: null, done: false };
                obj4[0] = tmp36Result.httpGetWithCountryCodeQuery(obj2);
                return obj4;
              } else {
                c9 = 3;
              }
              tmp60 = callback;
              tmp63 = _httpGetWithCountryCodeQuery;
            }
          } else if (1 === tmp8) {
            c7 = 0;
            obj4 = callback2(closure_2[4]);
            const obj5 = { type: "SKU_FETCH_FAIL", skuId: null };
            obj5[1] = callback;
            obj4.dispatch(obj5);
            const _HermesInternal = HermesInternal;
            let tmp27 = callback2(closure_2[7]);
            tmp27 = new tmp27("Failed to fetch SKU " + callback);
            throw tmp27;
          } else if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_2 = arg1;
            const body = closure_2.body;
            if (callback2) {
              let sku = body;
            } else {
              sku = body.sku;
            }
            obj = { type: "SKU_FETCH_SUCCESS", sku: null };
            obj[1] = sku;
            callback2(closure_2[4]).dispatch(obj);
            if (!callback2) {
              obj1 = callback2(closure_2[4]);
              obj6 = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: null };
              obj6[1] = closure_2.body;
              obj1.dispatch(obj6);
            }
            c7 = 0;
            const obj18 = callback2(closure_2[4]);
          }
          c7 = 0;
          c9 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        } catch (tmp43) {
          let closure_6 = tmp43;
          if (tmp4 === c7) {
            c9 = tmp2;
            throw tmp43;
          } else {
            c8 = tmp;
          }
        }
      }
    })();
  });
  const _fetchPublishedSKU = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchTestSKUsForApplication() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0, body) {
      body = tmp2;
      if (flag === undefined) {
        flag = true;
      }
      yield "PX_8";
      if (!obj12.isTestModeForApplication(callback)) {
        if (flag) {
          const _Error = Error;
          const error = new Error("this should only be used in test mode");
          throw error;
        }
      }
      const obj4 = callback(body[5]);
      const obj2 = { url: null, rejectWithError: null };
      obj2[0] = closure_7.APPLICATION_SKUS(callback);
      const obj6 = callback(body[6]);
      obj2[1] = obj6.rejectWithMigratedError();
      yield obj4.httpGetWithCountryCodeQuery(obj2);
      body = body.body;
      const obj = flag(body[4]);
      const obj5 = { type: "SKUS_FETCH_SUCCESS", skus: null };
      obj5[1] = body;
      obj.dispatch(obj5);
      return body;
    })();
    iter.next();
    return iter;
  });
  const _fetchTestSKUsForApplication = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _previewPurchaseSku() {
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
      if (promotionIdOverride2 === 2) {
        promotionIdOverride2 = 3;
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
          promotionIdOverride2 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              promotionIdOverride2 = 3;
              throw body;
            } else if (arg0 === 2) {
              promotionIdOverride2 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let dependencyMap = tmp3;
              c1 = tmp7;
              let callback;
              c1 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              let promotionIdOverride;
              ({ applicationId: c0, skuId: c1, paymentSourceId: c2, isGift: c3, currency: c4 } = callback);
              c5 = undefined;
              promotionIdOverride2 = undefined;
              let billingError;
              c5 = 1;
              promotionIdOverride2 = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              promotionIdOverride2 = 3;
              throw body;
            } else if (arg0 === 2) {
              promotionIdOverride2 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              let obj2 = { payment_source_id: null, gift: null, currency: null };
              obj2[0] = dependencyMap;
              obj2[1] = c3;
              obj2[2] = promotionIdOverride;
              c5 = obj2;
              if (obj11.isTestModeForApplication(callback)) {
                c5.test_mode = true;
              }
              promotionIdOverride2 = promotionIdOverride.getPromotionIdOverride();
              if (null != promotionIdOverride2) {
                c5.promotion_id_override = promotionIdOverride2;
              }
              promotionIdOverride = 1;
              obj2 = callback(4539);
              const obj3 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
              obj3[0] = billingError.STORE_SKU_PURCHASE(c1);
              obj3[1] = c5;
              let obj4 = callback(530);
              obj3[3] = obj4.rejectWithMigratedError();
              c5 = 3;
              promotionIdOverride2 = 1;
              obj4 = { value: null, done: false };
              obj4[0] = obj2.httpGetWithCountryCodeQuery(obj3);
              return obj4;
            }
          } else if (2 === tmp7) {
            promotionIdOverride = 0;
            let closure_8 = c3;
            if (closure_8 instanceof callback(4201).BillingError) {
              billingError = closure_8;
            } else {
              billingError = new callback(4201).BillingError(closure_8);
            }
            if (billingError.code !== callback(3969).ErrorCodes.BILLING_BUNDLE_ALREADY_PURCHASED) {
              if (billingError.code !== callback(3969).ErrorCodes.BILLING_BUNDLE_PARTIALLY_OWNED) {
                if (billingError.code !== callback(3969).ErrorCodes.INVALID_BILLING_ADDRESS) {
                  promotionIdOverride2 = 3;
                  return { value: null, done: true };
                }
              }
            }
            throw billingError;
          } else if (arg0 === 1) {
            promotionIdOverride2 = 3;
            throw body;
          } else if (arg0 === 2) {
            promotionIdOverride = 0;
            promotionIdOverride2 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            promotionIdOverride = 0;
            promotionIdOverride2 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp58) {
          c3 = tmp58;
          if (tmp4 === promotionIdOverride) {
            promotionIdOverride2 = tmp2;
            throw tmp58;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _previewPurchaseSku = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _grantChannelBranchEntitlement() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let getPromotionIdOverride = tmp3;
              let billingError = tmp7;
              const callback2 = closure_2;
              closure_2 = undefined;
              billingError = undefined;
              const obj1 = { type: "SKU_PURCHASE_START", applicationId: null, skuId: null };
              obj1[1] = callback;
              obj1[2] = closure_2;
              callback2(closure_2[4]).dispatch(obj1);
              let c6 = 1;
              const HTTP = callback(closure_2[6]).HTTP;
              const obj2 = { url: null, oldFormErrors: true, rejectWithError: null };
              obj2[0] = c7.CHANNEL_ENTITLEMENT_GRANT(callback2);
              const obj10 = callback2(closure_2[4]);
              obj2[2] = callback(closure_2[6]).rejectWithMigratedError();
              c7 = 2;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            getPromotionIdOverride = addSku;
            billingError = new callback(closure_2[10]).BillingError(getPromotionIdOverride);
            let obj4 = callback2(closure_2[4]);
            obj4 = { type: "SKU_PURCHASE_FAIL", applicationId: null, skuId: null, error: null };
            obj4[1] = callback;
            obj4[2] = callback2;
            obj4[3] = billingError;
            obj4.dispatch(obj4);
            throw billingError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_2 = arg1;
            obj = callback2(closure_2[4]);
            const obj6 = { type: "SKU_PURCHASE_SUCCESS", skuId: null, entitlements: null, libraryApplications: null };
            obj6[1] = callback2;
            obj6[2] = closure_2.body;
            obj6[3] = [];
            obj.dispatch(obj6);
            c6 = 0;
            c8 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = closure_2.body;
            return obj7;
          }
        } catch (tmp34) {
          addSku = tmp34;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp34;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _grantChannelBranchEntitlement = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _orderSKU() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let _httpGetWithCountryCodeQuery = arg3;
    let getPromotionIdOverride = arg4;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (function*(arg0, body) {
      if (c10 === 2) {
        c10 = 3;
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
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw body;
            } else if (arg0 === 2) {
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_6 = tmp3;
              let addSku = tmp5;
              body = undefined;
              let id;
              callback2(709).dispatch({ type: "ORDER_CREATE_START" });
              let c8 = 1;
              const obj1 = { order_line_items: null, billing_facet: null, location_facet: null };
              const obj2 = { sku_id: null, quantity: 1, purchase_type: 1 };
              obj2[0] = body;
              const items = [obj2];
              obj1[0] = items;
              const obj3 = { payment_source_id: null };
              obj3[0] = id;
              obj1[1] = obj3;
              let obj4 = { request_gateway_country_code: null };
              obj4[0] = dependencyMap;
              obj1[2] = obj4;
              if (_httpGetWithCountryCodeQuery) {
                const obj5 = { is_gift: true, gift_customization: null };
                ({ recipient_id: obj7[0], gift_style: obj7[1], emoji_id: obj7[2], emoji_name: obj7[3], sound_id: obj7[4], reward_sku_ids: obj7[5], custom_message: obj7[6] } = getPromotionIdOverride);
                obj5[1] = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
                obj1.gifting_facet = obj5;
                const obj6 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
              }
              const HTTP = callback(530).HTTP;
              const obj7 = { url: null, body: null, rejectWithError: null };
              obj7[0] = outer1_7.ORDER_CREATE;
              obj7[1] = obj1;
              let obj8 = callback(530);
              obj7[2] = obj8.rejectWithMigratedError();
              c9 = 2;
              c10 = 1;
              obj8 = { value: null, done: false };
              obj8[0] = HTTP.post(obj7);
              return obj8;
            }
          } else if (1 === tmp8) {
            c8 = 0;
            dependencyMap = closure_7;
            obj4 = id(709);
            obj4.dispatch({ type: "ORDER_CREATE_FAIL" });
            const _HermesInternal = HermesInternal;
            const billingError = new body(4201).BillingError("Failed to create order: " + dependencyMap);
            throw billingError;
          } else if (arg0 === 1) {
            c10 = 3;
            throw body;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = body;
            return obj9;
          } else {
            body = body.body;
            id = body.id;
            obj = id(709);
            const obj10 = { type: "ORDER_CREATE_SUCCESS", orderId: null, order: null };
            obj10[1] = id;
            obj10[2] = body;
            obj.dispatch(obj10);
            c8 = 0;
            c10 = 3;
            const obj11 = { value: null, done: true };
            obj11[0] = id;
            return obj11;
          }
        } catch (tmp36) {
          closure_7 = tmp36;
          if (tmp4 === c8) {
            c10 = tmp2;
            throw tmp36;
          } else {
            c9 = tmp;
          }
        }
      }
    })();
  });
  const _orderSKU = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _purchaseSKU() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c10 = 0;
    let c11 = 0;
    let c8 = 0;
    return (function*(arg0, gateway_checkout_context) {
      let c10;
      let c3;
      let c7;
      let c8;
      let c9;
      let getPromotionIdOverride;
      let isGift;
      let obj2;
      if (c11 === 2) {
        c11 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = gateway_checkout_context;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp6;
        throwTypeErrorResult = null;
        if (tmp7 === 3) {
          if (arg0 === 1) {
            throw gateway_checkout_context;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = gateway_checkout_context;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c11 = 2;
            if (0 === c10) {
              if (arg0 === 1) {
                c11 = 3;
                throw gateway_checkout_context;
              } else if (arg0 === 2) {
                c11 = 3;
                obj = { value: null, done: true };
                obj[0] = gateway_checkout_context;
                return obj;
              } else {
                c7 = tmp3;
                isGift = tmp5;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = paymentSource;
                paymentSource = undefined;
                c3 = undefined;
                let promotionIdOverride;
                obj2 = undefined;
                isGift = undefined;
                c7 = undefined;
                c8 = undefined;
                c9 = undefined;
                c10 = undefined;
                c11 = undefined;
                let closure_12;
                let promotionIdOverride2;
                let closure_14;
                let closure_15;
                let c16;
                const obj1 = {};
                throwTypeErrorResult = outer1_13;
                throwTypeErrorResult = obj1;
                throwTypeErrorResult = Object.assign(outer1_13);
                throwTypeErrorResult = obj1;
                throwTypeErrorResult = paymentSource;
                throwTypeErrorResult = Object.assign(paymentSource);
                paymentSource = obj1.paymentSource;
                ({ expectedAmount: c3, expectedCurrency: getPromotionIdOverride, analyticsLoadId: obj2, isGift } = obj1);
                ({ giftInfoOptions: c7, loadId: c8, countryCode: c9, quantity: c10 } = obj1);
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = callback2(709).wait(() => {
                  let obj = callback(paymentSource[4]);
                  obj = { type: "SKU_PURCHASE_START", applicationId: closure_0, skuId: callback };
                  obj.dispatch(obj);
                });
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                const obj27 = callback2(709);
                c11 = callback(7527).isTestModeForApplication(callback);
                c8 = 1;
                obj2 = { gift: isGift, sku_subscription_plan_id: obj1.subscriptionPlanId };
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                const obj28 = callback(7527);
                c10 = 2;
                c11 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = callback(3962).createGatewayCheckoutContext(paymentSource);
                return obj3;
              }
            } else if (1 === tmp8) {
              c8 = 0;
              let closure_17 = c9;
              if (closure_17 instanceof callback(paymentSource[10]).BillingError) {
                throwTypeErrorResult = closure_17;
              } else {
                throwTypeErrorResult = new.target;
                throwTypeErrorResult = new callback(paymentSource[10]).BillingError(closure_17);
              }
              throwTypeErrorResult = isGift;
              throwTypeErrorResult = c7;
              c16 = throwTypeErrorResult;
              throwTypeErrorResult = c16;
              throwTypeErrorResult = callback;
              throwTypeErrorResult = paymentSource;
              throwTypeErrorResult = c16.code !== callback(paymentSource[11]).ErrorCodes.CONFIRMATION_REQUIRED;
              if (throwTypeErrorResult) {
                throwTypeErrorResult = isGift;
                throwTypeErrorResult = c7;
                throwTypeErrorResult = c16;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = paymentSource;
                throwTypeErrorResult = c16.code !== callback(paymentSource[11]).ErrorCodes.AUTHENTICATION_REQUIRED;
              }
              if (!throwTypeErrorResult) {
                throwTypeErrorResult = isGift;
                throwTypeErrorResult = c7;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = paymentSource;
                let obj15 = callback2(paymentSource[4]);
                const obj4 = { type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: null, isGift: null };
                throwTypeErrorResult = callback2;
                obj4[1] = callback2;
                throwTypeErrorResult = isGift;
                obj4[2] = isGift;
                throwTypeErrorResult = obj15.dispatch(obj4);
              }
              throwTypeErrorResult = isGift;
              throwTypeErrorResult = c7;
              throwTypeErrorResult = callback2;
              throwTypeErrorResult = paymentSource;
              let obj5 = { type: "SKU_PURCHASE_FAIL", applicationId: null, skuId: null, error: null };
              throwTypeErrorResult = callback;
              obj5[1] = callback;
              throwTypeErrorResult = callback2;
              obj5[2] = callback2;
              throwTypeErrorResult = c16;
              obj5[3] = c16;
              throwTypeErrorResult = callback2(paymentSource[4]).dispatch(obj5);
              throwTypeErrorResult = c16;
              throwTypeErrorResult = callback;
              throwTypeErrorResult = paymentSource;
              if (c16.code !== callback(paymentSource[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
                throwTypeErrorResult = isGift;
                throwTypeErrorResult = c16;
                throw c16;
              } else {
                throwTypeErrorResult = isGift;
                throwTypeErrorResult = closure_17;
                if (closure_17.body.payment_id) {
                  throwTypeErrorResult = isGift;
                  throwTypeErrorResult = c7;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = paymentSource;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = paymentSource;
                  c11 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = callback(paymentSource[13]).handlePaymentConfirmation(closure_17.body, paymentSource);
                  return obj6;
                } else {
                  throwTypeErrorResult = c7;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = paymentSource;
                  throw callback(paymentSource[13]).dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
                }
              }
              const obj18 = callback2(paymentSource[4]);
            } else {
              if (2 === tmp8) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw gateway_checkout_context;
                } else if (arg0 === 2) {
                  c8 = 0;
                  c11 = 3;
                  let obj7 = { value: null, done: true };
                  obj7[0] = gateway_checkout_context;
                  return obj7;
                } else {
                  throwTypeErrorResult = obj2;
                  throwTypeErrorResult = isGift;
                  throwTypeErrorResult = c7;
                  obj2.gateway_checkout_context = gateway_checkout_context;
                  throwTypeErrorResult = c8;
                  obj2.load_id = c8;
                  throwTypeErrorResult = c7;
                  obj2.gift_info_options = c7;
                  closure_12 = obj2;
                  throwTypeErrorResult = promotionIdOverride;
                  promotionIdOverride2 = promotionIdOverride.getPromotionIdOverride();
                  throwTypeErrorResult = promotionIdOverride2;
                  if (null != promotionIdOverride2) {
                    closure_12.promotion_id_override = promotionIdOverride2;
                  }
                  if (c11) {
                    closure_12.test_mode = true;
                  } else if (null != paymentSource) {
                    closure_12.payment_source_id = paymentSource.id;
                    promotionIdOverride = closure_12;
                    obj7 = callback(paymentSource[13]);
                    c10 = 4;
                    c11 = 1;
                    const obj8 = { value: null, done: false };
                    obj8[0] = obj7.createPaymentSourceToken(paymentSource);
                    return obj8;
                  }
                  if (null != c3) {
                    closure_12.expected_amount = c3;
                  }
                  if (null != promotionIdOverride) {
                    closure_12.expected_currency = promotionIdOverride;
                  }
                  let obj9 = callback(paymentSource[14]);
                  closure_12.purchase_token = obj9.getPurchaseToken();
                  if (null != c10) {
                    closure_12.quantity = c10;
                  }
                  const HTTP = callback(paymentSource[6]).HTTP;
                  obj9 = { url: null, body: null, context: null, oldFormErrors: true, rejectWithError: null };
                  obj9[0] = c7.STORE_SKU_PURCHASE(callback2);
                  obj9[1] = closure_12;
                  const obj10 = { load_id: null };
                  obj10[0] = obj2;
                  obj9[2] = obj10;
                  let obj12 = callback(paymentSource[6]);
                  obj9[4] = obj12.rejectWithMigratedError();
                  c10 = 5;
                  c11 = 1;
                  const obj11 = { value: null, done: false };
                  obj11[0] = HTTP.post(obj9);
                  return obj11;
                }
              } else if (3 === tmp8) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw gateway_checkout_context;
                } else if (arg0 === 2) {
                  c8 = 0;
                  c11 = 3;
                  obj12 = { value: null, done: true };
                  obj12[0] = gateway_checkout_context;
                  return obj12;
                } else {
                  closure_14 = gateway_checkout_context;
                  obj5 = callback(paymentSource[6]);
                  c3 = closure_14;
                  const aPIBaseURL = obj5.getAPIBaseURL();
                  if (closure_14 == null) {
                    c3 = "";
                  }
                  closure_12.return_url = aPIBaseURL + c7.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(paymentSource.type, c3, "success");
                  const tmp33 = closure_12;
                }
              } else if (4 === tmp8) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw gateway_checkout_context;
                } else if (arg0 === 2) {
                  c8 = 0;
                  c11 = 3;
                  const obj13 = { value: null, done: true };
                  obj13[0] = gateway_checkout_context;
                  return obj13;
                } else {
                  promotionIdOverride.payment_source_token = gateway_checkout_context;
                  if (isGift.has(paymentSource.type)) {
                    obj2 = callback(paymentSource[13]);
                    c10 = 3;
                    c11 = 1;
                    const obj14 = { value: null, done: false };
                    obj14[0] = obj2.popupBridgeState(paymentSource.type);
                    return obj14;
                  }
                }
              } else if (arg0 === 1) {
                c11 = 3;
                throw gateway_checkout_context;
              } else if (arg0 === 2) {
                c8 = 0;
                c11 = 3;
                obj15 = { value: null, done: true };
                obj15[0] = gateway_checkout_context;
                return obj15;
              } else {
                throwTypeErrorResult = isGift;
                throwTypeErrorResult = c7;
                closure_15 = gateway_checkout_context;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = paymentSource;
                throwTypeErrorResult = callback2(paymentSource[4]);
                let dispatch = throwTypeErrorResult.dispatch;
                obj = { type: "SKU_PURCHASE_SUCCESS", skuId: null, libraryApplications: null, entitlements: null, giftCode: null };
                throwTypeErrorResult = callback2;
                obj[1] = callback2;
                throwTypeErrorResult = closure_15;
                if (null != closure_15.body.library_applications) {
                  const library_applications = closure_15.body.library_applications;
                  let found = library_applications.filter(callback(paymentSource[15]).isNotNullish);
                } else {
                  found = [];
                }
                obj[2] = found;
                obj[3] = closure_15.body.entitlements;
                obj[4] = closure_15.body.gift_code;
                dispatch(obj);
                obj = {};
                dispatch = Object.assign(closure_15.body);
                obj.appliedUserDiscounts = closure_15.body.applied_user_discounts;
                obj.redirectConfirmation = false;
                c8 = 0;
                c11 = 3;
              }
              if (null != c9) {
                throwTypeErrorResult = isGift;
                throwTypeErrorResult = closure_12;
                throwTypeErrorResult = c9;
                closure_12.country_code = c9;
              }
            }
          } catch (throwTypeErrorResult) {
            c9 = throwTypeErrorResult;
            throwTypeErrorResult = c8;
            if (tmp4 === c8) {
              throwTypeErrorResult = tmp2;
              c11 = tmp2;
              throw throwTypeErrorResult;
            } else {
              c10 = throwTypeErrorResult;
            }
          }
        }
      }
    })();
  });
  const _purchaseSKU = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resendPaymentVerificationEmail() {
  const self = this;
  const tmp = callback(function*() {
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
        return { value: "T", done: null };
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
            const dependencyMap = tmp3;
            let closure_1 = tmp7;
            let c3 = 1;
            const obj1 = { purchase_token: null };
            obj1[0] = outer1_0(outer1_2[14]).getPurchaseToken();
            let callback = {};
            const HTTP = outer1_0(outer1_2[6]).HTTP;
            const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
            obj2[0] = outer1_7.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION;
            obj2[1] = obj1;
            const obj7 = outer1_0(outer1_2[14]);
            obj2[3] = outer1_0(outer1_2[6]).rejectWithMigratedError();
            c5 = 2;
            c6 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = HTTP.post(obj2);
            return obj3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback = getPromotionIdOverride;
          if (callback instanceof callback(4201).BillingError) {
            let billingError = callback;
          } else {
            billingError = new callback(4201).BillingError(callback);
          }
          throw billingError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c6 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          const merged = Object.assign(arg1.body);
          c3 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = callback;
          return obj;
        }
      } catch (tmp26) {
        getPromotionIdOverride = tmp26;
        if (tmp4 === c3) {
          c6 = tmp2;
          throw tmp26;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const _resendPaymentVerificationEmail = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ADYEN_PAYMENT_SOURCES: closure_6, Endpoints: error } = ME);
let closure_13 = { isGift: false };
let result = require("addSku").fileFinishedImporting("actions/SKUActionCreators.tsx");

export const fetchSKU = function fetchSKU() {
  const self = this;
  const apply = _fetchSKU.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPublishedSKU = function fetchPublishedSKU() {
  const self = this;
  const apply = _fetchPublishedSKU.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchTestSKUsForApplication = function fetchTestSKUsForApplication(closure_1, arg1) {
  const self = this;
  const apply = _fetchTestSKUsForApplication.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const previewPurchaseSku = function previewPurchaseSku() {
  const self = this;
  const apply = _previewPurchaseSku.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const grantChannelBranchEntitlement = function grantChannelBranchEntitlement() {
  const self = this;
  const apply = _grantChannelBranchEntitlement.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const orderSKU = function orderSKU() {
  const self = this;
  const apply = _orderSKU.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const purchaseSKU = function purchaseSKU() {
  const self = this;
  const apply = _purchaseSKU.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resendPaymentVerificationEmail = function resendPaymentVerificationEmail() {
  const self = this;
  const apply = _resendPaymentVerificationEmail.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearPurchaseError = function clearPurchaseError() {
  dispatcher.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
};
export const showPurchaseConfirmationStep = function showPurchaseConfirmationStep() {
  dispatcher.wait(() => callback(table[4]).dispatch({ type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP" }));
};
export const updateSKUPaymentIsGift = function updateSKUPaymentIsGift(isGift) {
  let obj = dispatcher;
  obj = { type: "SKU_PURCHASE_UPDATE_IS_GIFT", isGift };
  obj.dispatch(obj);
};