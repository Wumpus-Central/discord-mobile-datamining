// === Module 7869: _fetchSKU ===

// Module 7869 (_fetchSKU)
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import getPromotionIdOverride from "getPromotionIdOverride" /* 7870 */;
import addSku from "addSku" /* 4521 */;
import ME from "ME" /* 676 */;

const require = fn;
function _fetchSKU() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              if (null == c5.get(callback)) {
                let obj5 = closure_1_1(closure_1_2[4]);
                obj1 = { type: "SKU_FETCH_START", skuId: null };
                obj1[1] = callback;
                obj5.dispatch(obj1);
                c4 = 1;
                const obj2 = { url: null, rejectWithError: null };
                obj2[0] = closure_1_7.STORE_SKU(callback);
                const obj8 = callback(closure_1_2[5]);
                obj2[1] = callback(closure_1_2[6]).rejectWithMigratedError();
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
            let tmp23 = lib(4062);
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
          closure_3 = tmp36;
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
  closure_8 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c8 = 0;
    c9 = 0;
    c7 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_5 = tmp3;
              closure_4 = tmp5;
              const callback = callback2;
              callback2 = undefined;
              closure_2 = undefined;
              if (null == closure_1_5.get(callback2)) {
                let obj6 = callback2(closure_2[4]);
                obj1 = { type: "SKU_FETCH_START", skuId: null };
                obj1[1] = tmp61;
                obj6.dispatch(obj1);
                c7 = 1;
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
                if (closure_3) {
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
          closure_6 = tmp43;
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
  closure_9 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0, body) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_3 = tmp5;
              body = tmp2;
              let flag;
              if (flag === undefined) {
                flag = true;
              }
              body = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              if (!obj12.isTestModeForApplication(callback)) {
                if (flag) {
                  const _Error = Error;
                  error = new Error("this should only be used in test mode");
                  throw error;
                }
              }
              let obj4 = callback(body[5]);
              const obj2 = { url: null, rejectWithError: null };
              obj2[0] = closure_7.APPLICATION_SKUS(callback);
              let obj6 = callback(body[6]);
              obj2[1] = obj6.rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj4.httpGetWithCountryCodeQuery(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            body = body.body;
            obj = flag(body[4]);
            const obj5 = { type: "SKUS_FETCH_SUCCESS", skus: null };
            obj5[1] = body;
            obj.dispatch(obj5);
            c5 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          }
        } catch (tmp28) {
          c5 = tmp;
          throw tmp28;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_10 = tmp;
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
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0, body) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              dependencyMap = tmp3;
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
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              promotionIdOverride2 = 3;
              throw body;
            } else if (arg0 === 2) {
              promotionIdOverride2 = 3;
              obj1 = { value: null, done: true };
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
              obj2 = callback(4384);
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
            closure_8 = c3;
            if (closure_8 instanceof callback(4273).BillingError) {
              billingError = closure_8;
            } else {
              billingError = new callback(4273).BillingError(closure_8);
            }
            if (billingError.code !== callback(4061).ErrorCodes.BILLING_BUNDLE_ALREADY_PURCHASED) {
              if (billingError.code !== callback(4061).ErrorCodes.BILLING_BUNDLE_PARTIALLY_OWNED) {
                if (billingError.code !== callback(4061).ErrorCodes.INVALID_BILLING_ADDRESS) {
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
  closure_11 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_4 = tmp3;
              let billingError = tmp7;
              const callback2 = closure_2;
              closure_2 = undefined;
              billingError = undefined;
              obj1 = { type: "SKU_PURCHASE_START", applicationId: null, skuId: null };
              obj1[1] = callback;
              obj1[2] = closure_2;
              callback2(closure_2[4]).dispatch(obj1);
              c6 = 1;
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
            closure_4 = closure_5;
            billingError = new callback(closure_2[10]).BillingError(closure_4);
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
          closure_5 = tmp34;
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
  closure_12 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c9 = 0;
    c10 = 0;
    c8 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_6 = tmp3;
              closure_5 = tmp5;
              body = undefined;
              let id;
              callback2(709).dispatch({ type: "ORDER_CREATE_START" });
              c8 = 1;
              obj1 = { order_line_items: null, billing_facet: null, location_facet: null };
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
              if (closure_3) {
                const obj5 = { is_gift: true, gift_customization: null };
                ({ recipient_id: obj7[0], gift_style: obj7[1], emoji_id: obj7[2], emoji_name: obj7[3], sound_id: obj7[4], reward_sku_ids: obj7[5], custom_message: obj7[6] } = closure_4);
                obj5[1] = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
                obj1.gifting_facet = obj5;
              }
              const HTTP = callback(530).HTTP;
              const obj7 = { url: null, body: null, rejectWithError: null };
              obj7[0] = closure_1_7.ORDER_CREATE;
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
            const billingError = new body(4273).BillingError("Failed to create order: " + dependencyMap);
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
  closure_14 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c10 = 0;
    c11 = 0;
    c8 = 0;
    return (function*(arg0, gateway_checkout_context) {
      if (c11 === 2) {
        c11 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw gateway_checkout_context;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = gateway_checkout_context;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let paymentSource;
              c3 = undefined;
              let promotionIdOverride;
              obj2 = undefined;
              isGift = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              c10 = undefined;
              c11 = undefined;
              closure_12 = undefined;
              let promotionIdOverride2;
              closure_14 = undefined;
              closure_15 = undefined;
              let billingError;
              obj1 = {};
              const merged = Object.assign(closure_1_13);
              const merged1 = Object.assign(paymentSource);
              paymentSource = obj1.paymentSource;
              ({ expectedAmount: c3, expectedCurrency: closure_4, analyticsLoadId: obj2, isGift } = obj1);
              ({ giftInfoOptions: c7, loadId: c8, countryCode: c9, quantity: c10 } = obj1);
              callback2(709).wait(() => {
                callback(paymentSource[4]);
                const obj = { type: "SKU_PURCHASE_START", applicationId: closure_0, skuId: callback };
                obj.dispatch(obj);
              });
              const obj27 = callback2(709);
              c11 = callback(7871).isTestModeForApplication(callback);
              c8 = 1;
              obj2 = { gift: isGift, sku_subscription_plan_id: obj1.subscriptionPlanId };
              const obj28 = callback(7871);
              c10 = 2;
              c11 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(4054).createGatewayCheckoutContext(paymentSource);
              return obj3;
            }
          } else if (1 === tmp8) {
            c8 = 0;
            closure_17 = c9;
            if (closure_17 instanceof callback(paymentSource[10]).BillingError) {
              billingError = closure_17;
            } else {
              billingError = new callback(paymentSource[10]).BillingError(closure_17);
            }
            let tmp107 = billingError.code !== callback(paymentSource[11]).ErrorCodes.CONFIRMATION_REQUIRED;
            if (tmp107) {
              tmp107 = billingError.code !== callback(paymentSource[11]).ErrorCodes.AUTHENTICATION_REQUIRED;
            }
            if (!tmp107) {
              let obj15 = callback2(paymentSource[4]);
              const obj4 = { type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: null, isGift: null };
              obj4[1] = callback2;
              obj4[2] = isGift;
              obj15.dispatch(obj4);
            }
            let obj5 = { type: "SKU_PURCHASE_FAIL", applicationId: null, skuId: null, error: null };
            obj5[1] = callback;
            obj5[2] = callback2;
            obj5[3] = billingError;
            callback2(paymentSource[4]).dispatch(obj5);
            if (billingError.code !== callback(paymentSource[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
              throw billingError;
            } else if (closure_17.body.payment_id) {
              c11 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = callback(paymentSource[13]).handlePaymentConfirmation(closure_17.body, paymentSource);
              return obj6;
            } else {
              throw callback(paymentSource[13]).dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
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
                obj2.gateway_checkout_context = gateway_checkout_context;
                obj2.load_id = c8;
                obj2.gift_info_options = c7;
                closure_12 = obj2;
                promotionIdOverride2 = promotionIdOverride.getPromotionIdOverride();
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
              closure_15 = gateway_checkout_context;
              let dispatch = callback2(paymentSource[4]).dispatch;
              obj = { type: "SKU_PURCHASE_SUCCESS", skuId: null, libraryApplications: null, entitlements: null, giftCode: null };
              obj[1] = callback2;
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
              const tmp155 = callback2(paymentSource[4]);
            }
            if (null != c9) {
              closure_12.country_code = c9;
            }
          }
        } catch (tmp142) {
          c9 = tmp142;
          if (tmp4 === c8) {
            c11 = tmp2;
            throw tmp142;
          } else {
            c10 = tmp;
          }
        }
      }
    })();
  });
  closure_15 = tmp;
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
        throw body;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = body;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            dependencyMap = tmp3;
            closure_1 = tmp7;
            c3 = 1;
            obj1 = { purchase_token: null };
            obj1[0] = closure_1_0(closure_1_2[14]).getPurchaseToken();
            let callback = {};
            const HTTP = closure_1_0(closure_1_2[6]).HTTP;
            const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
            obj2[0] = closure_1_7.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION;
            obj2[1] = obj1;
            const obj7 = closure_1_0(closure_1_2[14]);
            obj2[3] = closure_1_0(closure_1_2[6]).rejectWithMigratedError();
            c5 = 2;
            c6 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = HTTP.post(obj2);
            return obj3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback = closure_4;
          if (callback instanceof callback(4273).BillingError) {
            let billingError = callback;
          } else {
            billingError = new callback(4273).BillingError(callback);
          }
          throw billingError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw body;
        } else if (arg0 === 2) {
          c3 = 0;
          c6 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = body;
          return obj4;
        } else {
          const merged = Object.assign(body.body);
          c3 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = callback;
          return obj;
        }
      } catch (tmp26) {
        closure_4 = tmp26;
        if (tmp4 === c3) {
          c6 = tmp2;
          throw tmp26;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  closure_16 = tmp;
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
let result = require("obj132").fileFinishedImporting("actions/SKUActionCreators.tsx");

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
  dispatcherDefault.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
};
export const showPurchaseConfirmationStep = function showPurchaseConfirmationStep() {
  dispatcherDefault.wait(() => callback(table[4]).dispatch({ type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP" }));
};
export const updateSKUPaymentIsGift = function updateSKUPaymentIsGift(isGift) {
  const obj = { type: "SKU_PURCHASE_UPDATE_IS_GIFT", isGift };
  obj.dispatch(obj);
};