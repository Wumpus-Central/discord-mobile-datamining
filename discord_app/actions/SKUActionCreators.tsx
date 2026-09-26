// === Module 10276: SKUActionCreators ===

// Module 10276 (SKUActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import BillingUtils from "BillingUtils" /* 4503 */;
import StoreUtils from "StoreUtils" /* 5092 */;
import PurchaseTokenUtils from "PurchaseTokenUtils" /* 5192 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7008 */;
import TestModeUtils from "TestModeUtils" /* 8319 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import StorefrontPromotionOverrideStore from "StorefrontPromotionOverrideStore" /* 8248 */;
import SKUStore from "SKUStore" /* 5822 */;

require = fn;
let closure_8 = async function _fetchSKU() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
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
            closure_129_0 = skuId;
            closure_129_1 = undefined;
            if (null == SKUStore.get(skuId)) {
              const obj5 = { type: "SKU_FETCH_START", skuId };
              DispatcherDefault.dispatch(obj5);
              c4 = 1;
              const obj7 = { url: closure_2_7.STORE_SKU(skuId), rejectWithError: null };
              const obj8 = StoreUtils;
              obj7.rejectWithError = HTTPUtils.rejectWithMigratedError();
              c5 = 2;
              c6 = 1;
              const obj9 = { value: obj8.httpGetWithCountryCodeQuery(obj7), done: false };
              return obj9;
            } else {
              c6 = 3;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          const obj11 = { type: "SKU_FETCH_FAIL", skuId: closure_129_0 };
          closure_130_1(closure_130_2[4]).dispatch(obj11);
          const _HermesInternal = HermesInternal;
          const obj4 = closure_130_1(closure_130_2[4]);
          const tmp232 = new closure_130_1(closure_130_2[7])("Failed to fetch SKU " + closure_129_0);
          throw tmp232;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          const obj12 = { type: "SKU_FETCH_SUCCESS", sku: closure_129_1.body };
          closure_130_1(closure_130_2[4]).dispatch(obj12);
          c4 = 0;
          const obj = closure_130_1(closure_130_2[4]);
        }
        c4 = 0;
        c6 = 3;
        const obj13 = { value, done: true };
        return obj13;
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
};
let closure_9 = async function _fetchPublishedSKU(arg0) {
  closure_0 = arg0;
  closure_3 = arg3;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp5;
            closure_132_0 = skuId;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            if (null == SKUStore.get(skuId)) {
              const obj6 = { type: "SKU_FETCH_START", skuId };
              DispatcherDefault.dispatch(obj6);
              c7 = 1;
              const result = TestModeUtils.isTestModeForApplication(closure_0);
              closure_132_1 = result;
              if (result) {
                let STORE_SKUResult = closure_2_7.STORE_SKU(skuId);
              } else {
                STORE_SKUResult = closure_2_7.STORE_PUBLISHED_LISTINGS_SKU(skuId);
              }
              const obj8 = { url: STORE_SKUResult, rejectWithError: null };
              obj8.rejectWithError = HTTPUtils.rejectWithMigratedError();
              const obj11 = {};
              if (variants_return_style === ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP) {
                obj11.variants_return_style = variants_return_style;
              }
              if (closure_3) {
                obj11.include_unpublished = true;
              }
              const _Object = Object;
              if (Object.keys(obj11).length > 0) {
                obj8.query = obj11;
              }
              const tmp36Result = HTTPUtils;
              c8 = 2;
              c9 = 1;
              const obj12 = { value: StoreUtils.httpGetWithCountryCodeQuery(obj8), done: false };
              return obj12;
            } else {
              c9 = 3;
            }
          }
        } else if (1 === tmp8) {
          c7 = 0;
          const obj13 = { type: "SKU_FETCH_FAIL", skuId: closure_132_0 };
          closure_133_1(closure_133_2[4]).dispatch(obj13);
          const _HermesInternal = HermesInternal;
          const obj5 = closure_133_1(closure_133_2[4]);
          const tmp272 = new closure_133_1(closure_133_2[7])("Failed to fetch SKU " + closure_132_0);
          throw tmp272;
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_132_2 = value;
          const body = closure_132_2.body;
          if (closure_132_1) {
            let sku = body;
          } else {
            sku = body.sku;
          }
          const obj = { type: "SKU_FETCH_SUCCESS", sku };
          closure_133_1(closure_133_2[4]).dispatch(obj);
          if (!closure_132_1) {
            const obj14 = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: closure_132_2.body };
            closure_133_1(closure_133_2[4]).dispatch(obj14);
            const obj2 = closure_133_1(closure_133_2[4]);
          }
          c7 = 0;
          const obj18 = closure_133_1(closure_133_2[4]);
        }
        c7 = 0;
        c9 = 3;
        const obj15 = { value, done: true };
        return obj15;
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
};
let closure_10 = async function _fetchTestSKUsForApplication(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = true;
          }
          closure_130_1 = flag;
          let body;
          c4 = 1;
          c5 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          if (!obj12.isTestModeForApplication(closure_130_0)) {
            if (closure_130_1) {
              const _Error = Error;
              const error = new Error("this should only be used in test mode");
              throw error;
            }
          }
          obj12 = closure_131_0(closure_131_2[8]);
          const obj6 = { url: closure_131_7.APPLICATION_SKUS(closure_130_0), rejectWithError: null };
          const obj5 = closure_131_0(closure_131_2[5]);
          obj6.rejectWithError = closure_131_0(closure_131_2[6]).rejectWithMigratedError();
          c4 = 2;
          c5 = 1;
          const obj8 = { value: obj5.httpGetWithCountryCodeQuery(obj6), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        body = value.body;
        const obj10 = { type: "SKUS_FETCH_SUCCESS", skus: body };
        closure_131_1(closure_131_2[4]).dispatch(obj10);
        c5 = 3;
        const obj11 = { value: body, done: true };
        return obj11;
      }
    } catch (tmp28) {
      c5 = tmp;
      throw tmp28;
    }
  }
};
let closure_11 = async function _previewPurchaseSku(arg0) {
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({ applicationId: closure_129_0, skuId: closure_129_1, paymentSourceId: closure_129_2, isGift: closure_129_3, currency: closure_129_4 } = closure_0);
          closure_129_5 = undefined;
          let promotionIdOverride;
          closure_129_7 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj7 = { payment_source_id: closure_129_2, gift: closure_129_3, currency: closure_129_4 };
          closure_129_5 = obj7;
          if (obj11.isTestModeForApplication(closure_129_0)) {
            closure_129_5.test_mode = true;
          }
          promotionIdOverride = closure_130_4.getPromotionIdOverride();
          if (null != promotionIdOverride) {
            closure_129_5.promotion_id_override = promotionIdOverride;
          }
          c4 = 1;
          obj11 = closure_130_0(closure_130_2[8]);
          const request = { url: closure_130_7.STORE_SKU_PURCHASE(closure_129_1), query: closure_129_5, oldFormErrors: true, rejectWithError: null };
          const obj3 = closure_130_0(closure_130_2[5]);
          request.rejectWithError = closure_130_0(closure_130_2[6]).rejectWithMigratedError();
          c5 = 3;
          c6 = 1;
          const obj8 = { value: obj3.httpGetWithCountryCodeQuery(request), done: false };
          return obj8;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_8 = closure_3;
        if (closure_129_8 instanceof closure_130_0(closure_130_2[10]).BillingError) {
          let billingError = closure_129_8;
        } else {
          billingError = new closure_130_0(closure_130_2[10]).BillingError(closure_129_8);
        }
        closure_129_7 = billingError;
        if (closure_129_7.code !== closure_130_0(closure_130_2[11]).ErrorCodes.BILLING_BUNDLE_ALREADY_PURCHASED) {
          if (closure_129_7.code !== closure_130_0(closure_130_2[11]).ErrorCodes.BILLING_BUNDLE_PARTIALLY_OWNED) {
            if (closure_129_7.code !== closure_130_0(closure_130_2[11]).ErrorCodes.INVALID_BILLING_ADDRESS) {
              c6 = 3;
              return { value: null, done: true };
            }
          }
        }
        throw closure_129_7;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        c4 = 0;
        c6 = 3;
        const obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp58) {
      closure_3 = tmp58;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp58;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_12 = async function _grantChannelBranchEntitlement() {
  closure_1 = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = applicationId;
            closure_131_1 = skuId;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            const obj4 = { type: "SKU_PURCHASE_START", applicationId, skuId };
            DispatcherDefault.dispatch(obj4);
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: closure_2_7.CHANNEL_ENTITLEMENT_GRANT(closure_1), oldFormErrors: true, rejectWithError: null };
            obj6.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c7 = 2;
            c8 = 1;
            const obj7 = { value: HTTP.post(obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_4 = closure_5;
          const billingError = new closure_132_0(closure_132_2[10]).BillingError(closure_131_4);
          closure_131_3 = billingError;
          const obj8 = { type: "SKU_PURCHASE_FAIL", applicationId: closure_131_0, skuId: closure_131_1, error: closure_131_3 };
          closure_132_1(closure_132_2[4]).dispatch(obj8);
          throw closure_131_3;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_131_2 = value;
          const obj11 = { type: "SKU_PURCHASE_SUCCESS", skuId: closure_131_1, entitlements: closure_131_2.body, libraryApplications: [] };
          closure_132_1(closure_132_2[4]).dispatch(obj11);
          c6 = 0;
          c8 = 3;
          const obj12 = { value: closure_131_2.body, done: true };
          return obj12;
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
};
let closure_14 = async function _orderSKU() {
  closure_3 = arg3;
  closure_4 = arg4;
  c9 = 0;
  c10 = 0;
  c8 = 0;
  return (async (arg0, value, arg2, arg3, arg4) => {
    if (c10 === 2) {
      c10 = 3;
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
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_6 = tmp3;
            closure_5 = tmp5;
            let body;
            let id;
            DispatcherDefault.dispatch({ type: "ORDER_CREATE_START" });
            c8 = 1;
            const obj4 = { order_line_items: null, billing_facet: null, location_facet: null };
            const obj6 = { sku_id, quantity: 1, purchase_type: 1 };
            const items = [obj6];
            obj4.order_line_items = items;
            const obj8 = { payment_source_id };
            obj4.billing_facet = obj8;
            const obj10 = { request_gateway_country_code };
            obj4.location_facet = obj10;
            if (closure_3) {
              const obj11 = { is_gift: true, gift_customization: null };
              ({ recipient_id: obj7.recipient_id, gift_style: obj7.gift_style, emoji_id: obj7.emoji_id, emoji_name: obj7.emoji_name, sound_id: obj7.sound_id, reward_sku_ids: obj7.reward_sku_ids, custom_message: obj7.custom_message_contents } = closure_4);
              obj11.gift_customization = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
              obj4.gifting_facet = obj11;
              const obj12 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
            }
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.ORDER_CREATE, body: obj4, rejectWithError: null };
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c9 = 2;
            c10 = 1;
            const obj14 = { value: HTTP.post(request), done: false };
            return obj14;
          }
        } else if (1 === tmp8) {
          c8 = 0;
          closure_133_2 = closure_7;
          closure_134_1(closure_134_2[4]).dispatch({ type: "ORDER_CREATE_FAIL" });
          const _HermesInternal = HermesInternal;
          const billingError = new closure_134_0(closure_134_2[10]).BillingError("Failed to create order: " + closure_133_2);
          throw billingError;
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          c10 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          body = value.body;
          id = body.id;
          const obj16 = { type: "ORDER_CREATE_SUCCESS", orderId: id, order: body };
          closure_134_1(closure_134_2[4]).dispatch(obj16);
          c8 = 0;
          c10 = 3;
          const obj17 = { value: id, done: true };
          return obj17;
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
};
let closure_15 = async function _purchaseSKU(arg0) {
  if (c11 === 2) {
    c11 = 3;
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
      c11 = 2;
      if (0 === c10) {
        if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_7 = tmp3;
          isGift = tmp5;
          closure_134_0 = applicationId;
          closure_134_1 = skuId;
          closure_134_2 = undefined;
          closure_134_3 = undefined;
          closure_134_4 = undefined;
          closure_134_5 = undefined;
          closure_134_6 = undefined;
          closure_134_7 = undefined;
          closure_134_8 = undefined;
          closure_134_9 = undefined;
          closure_134_10 = undefined;
          closure_134_11 = undefined;
          closure_134_12 = undefined;
          let promotionIdOverride;
          closure_134_14 = undefined;
          closure_134_15 = undefined;
          closure_134_16 = undefined;
          const obj5 = {};
          const merged = Object.assign(map1);
          const merged1 = Object.assign(closure_2);
          const paymentSource = obj5.paymentSource;
          closure_134_2 = paymentSource;
          ({ expectedAmount: closure_134_3, expectedCurrency: closure_134_4, analyticsLoadId: closure_134_5, isGift } = obj5);
          closure_134_6 = isGift;
          ({ giftInfoOptions: closure_134_7, loadId: closure_134_8, countryCode: closure_134_9, quantity: closure_134_10 } = obj5);
          DispatcherDefault.wait(() => {
            skuId(closure_2[4]).dispatch({ type: "SKU_PURCHASE_START", applicationId, skuId, isGift, loadId });
          });
          closure_134_11 = TestModeUtils.isTestModeForApplication(applicationId);
          c8 = 1;
          const obj7 = { gift: isGift, sku_subscription_plan_id: obj5.subscriptionPlanId };
          c10 = 2;
          c11 = 1;
          const obj9 = { value: BillingUtils.createGatewayCheckoutContext(paymentSource), done: false };
          return obj9;
        }
      } else if (1 === tmp8) {
        c8 = 0;
        closure_134_17 = closure_9;
        if (closure_134_17 instanceof closure_135_0(closure_135_2[10]).BillingError) {
          let billingError = closure_134_17;
        } else {
          billingError = new closure_135_0(closure_135_2[10]).BillingError(closure_134_17);
        }
        closure_134_16 = billingError;
        let tmp108 = closure_134_16.code !== closure_135_0(closure_135_2[11]).ErrorCodes.CONFIRMATION_REQUIRED;
        if (tmp108) {
          tmp108 = closure_134_16.code !== closure_135_0(closure_135_2[11]).ErrorCodes.AUTHENTICATION_REQUIRED;
        }
        if (!tmp108) {
          const obj11 = { type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId: closure_134_1, isGift: closure_134_6 };
          closure_135_1(closure_135_2[4]).dispatch(obj11);
          const obj16 = closure_135_1(closure_135_2[4]);
        }
        const obj12 = { type: "SKU_PURCHASE_FAIL", applicationId: closure_134_0, skuId: closure_134_1, error: closure_134_16 };
        closure_135_1(closure_135_2[4]).dispatch(obj12);
        if (closure_134_16.code !== closure_135_0(closure_135_2[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
          throw closure_134_16;
        } else if (closure_134_17.body.payment_id) {
          c11 = 3;
          const obj14 = { value: closure_135_0(closure_135_2[13]).handlePaymentConfirmation(closure_134_17.body, closure_134_2), done: true };
          return obj14;
        } else {
          throw closure_135_0(closure_135_2[13]).dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
        }
        const obj18 = closure_135_1(closure_135_2[4]);
      } else {
        if (2 === tmp8) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c11 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            obj7.gateway_checkout_context = value;
            obj7.load_id = closure_134_8;
            obj7.gift_info_options = closure_134_7;
            closure_134_12 = obj7;
            promotionIdOverride = closure_135_4.getPromotionIdOverride();
            if (null != promotionIdOverride) {
              closure_134_12.promotion_id_override = promotionIdOverride;
            }
            if (closure_134_11) {
              closure_134_12.test_mode = true;
            } else if (null != closure_134_2) {
              closure_134_12.payment_source_id = closure_134_2.id;
              closure_4 = closure_134_12;
              c10 = 4;
              c11 = 1;
              const obj17 = { value: closure_135_0(closure_135_2[13]).createPaymentSourceToken(closure_134_2), done: false };
              return obj17;
            }
            if (null != closure_134_3) {
              closure_134_12.expected_amount = closure_134_3;
            }
            if (null != closure_134_4) {
              closure_134_12.expected_currency = closure_134_4;
            }
            closure_134_12.purchase_token = closure_135_0(closure_135_2[14]).getPurchaseToken();
            if (null != closure_134_10) {
              closure_134_12.quantity = closure_134_10;
            }
            const HTTP = closure_135_0(closure_135_2[6]).HTTP;
            const request = { url: closure_135_7.STORE_SKU_PURCHASE(closure_134_1), body: closure_134_12, context: null, oldFormErrors: true, rejectWithError: null };
            const obj19 = { load_id: closure_134_5 };
            request.context = obj19;
            const obj10 = closure_135_0(closure_135_2[14]);
            request.rejectWithError = closure_135_0(closure_135_2[6]).rejectWithMigratedError();
            c10 = 5;
            c11 = 1;
            const obj22 = { value: HTTP.post(request), done: false };
            return obj22;
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c11 = 3;
            const obj23 = { value, done: true };
            return obj23;
          } else {
            closure_134_14 = value;
            c3 = closure_134_14;
            const aPIBaseURL = closure_135_0(closure_135_2[6]).getAPIBaseURL();
            if (closure_134_14 == null) {
              c3 = "";
            }
            closure_134_12.return_url = aPIBaseURL + closure_135_7.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(closure_134_2.type, c3, "success");
            const obj6 = closure_135_0(closure_135_2[6]);
          }
        } else if (4 === tmp8) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c11 = 3;
            const obj24 = { value, done: true };
            return obj24;
          } else {
            closure_4.payment_source_token = value;
            if (closure_135_6.has(closure_134_2.type)) {
              c10 = 3;
              c11 = 1;
              const obj25 = { value: closure_135_0(closure_135_2[13]).popupBridgeState(closure_134_2.type), done: false };
              return obj25;
            }
          }
        } else if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          c11 = 3;
          const obj26 = { value, done: true };
          return obj26;
        } else {
          closure_134_15 = value;
          let dispatch = closure_135_1(closure_135_2[4]).dispatch;
          let obj = { type: "SKU_PURCHASE_SUCCESS", skuId: closure_134_1, libraryApplications: null, entitlements: null, giftCode: null, loadId: null };
          if (null != closure_134_15.body.library_applications) {
            const library_applications = closure_134_15.body.library_applications;
            let found = library_applications.filter(closure_135_0(closure_135_2[15]).isNotNullish);
          } else {
            found = [];
          }
          obj.libraryApplications = found;
          obj.entitlements = closure_134_15.body.entitlements;
          obj.giftCode = closure_134_15.body.gift_code;
          obj.loadId = closure_134_8;
          dispatch(obj);
          obj = {};
          dispatch = Object.assign(closure_134_15.body);
          obj.appliedUserDiscounts = closure_134_15.body.applied_user_discounts;
          obj.redirectConfirmation = false;
          c8 = 0;
          c11 = 3;
          const tmp155 = closure_135_1(closure_135_2[4]);
        }
        if (null != closure_134_9) {
          closure_134_12.country_code = closure_134_9;
        }
      }
    } catch (tmp143) {
      closure_9 = tmp143;
      if (tmp4 === c8) {
        c11 = tmp2;
        throw tmp143;
      } else {
        c10 = tmp;
      }
    }
  }
};
let closure_16 = async function _resendPaymentVerificationEmail() {
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
          c3 = 1;
          const obj4 = { purchase_token: PurchaseTokenUtils.getPurchaseToken() };
          value = {};
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION, body: obj4, oldFormErrors: true, rejectWithError: null };
          request.rejectWithError = HTTPUtils.rejectWithMigratedError();
          c5 = 2;
          c6 = 1;
          const obj5 = { value: HTTP.post(request), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_129_0 = closure_4;
        if (closure_129_0 instanceof closure_130_0(closure_130_2[10]).BillingError) {
          let billingError = closure_129_0;
        } else {
          billingError = new closure_130_0(closure_130_2[10]).BillingError(closure_129_0);
        }
        throw billingError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        const merged = Object.assign(value.body);
        c3 = 0;
        c6 = 3;
        const obj = { value, done: true };
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
};
const Constants = fn(1074);
({ ADYEN_PAYMENT_SOURCES: metroRequire, Endpoints: closure_7 } = Constants);
let closure_13 = { isGift: false };
const size = fn(2);
let result = size.fileFinishedImporting("actions/SKUActionCreators.tsx");

export const fetchSKU = function fetchSKU() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPublishedSKU = function fetchPublishedSKU() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchTestSKUsForApplication = function fetchTestSKUsForApplication() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const previewPurchaseSku = function previewPurchaseSku() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const grantChannelBranchEntitlement = function grantChannelBranchEntitlement() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const orderSKU = function orderSKU() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const purchaseSKU = function purchaseSKU() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resendPaymentVerificationEmail = function resendPaymentVerificationEmail() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearPurchaseError = function clearPurchaseError() {
  DispatcherDefault.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
};
export const showPurchaseConfirmationStep = function showPurchaseConfirmationStep() {
  DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP" }));
};
export const updateSKUPaymentIsGift = function updateSKUPaymentIsGift(isGift) {
  DispatcherDefault.dispatch({ type: "SKU_PURCHASE_UPDATE_IS_GIFT", isGift });
};