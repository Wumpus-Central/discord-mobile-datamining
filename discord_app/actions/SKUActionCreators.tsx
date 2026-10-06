// === Module 10558: SKUActionCreators ===

// Module 10558 (SKUActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import BillingUtils from "BillingUtils" /* 4549 */;
import StoreUtils from "StoreUtils" /* 5329 */;
import PurchaseTokenUtils from "PurchaseTokenUtils" /* 5429 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7111 */;
import TestModeUtils from "TestModeUtils" /* 8545 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import StorefrontPromotionOverrideStore from "StorefrontPromotionOverrideStore" /* 8474 */;
import SKUStore from "SKUStore" /* 5702 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let _false, closure_10, closure_12, closure_6, closure_7, closure_8, country_code, expected_amount, gift_info_options, load_id, quantity;

let metroImportDefault;
let metroRequire;
let obj = function _fetchSKU() {
  obj = _asyncToGenerator(async (skuId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
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
              body = undefined;
              if (null == SKUStore.get(skuId)) {
                const obj5 = { type: "SKU_FETCH_START", skuId };
                const obj6 = DispatcherDefault;
                obj6.dispatch(obj5);
                c4 = 1;
                const obj7 = { url: closure_2_7.STORE_SKU(skuId), rejectWithError: obj9.rejectWithMigratedError() };
                const httpGetWithCountryCodeQuery = StoreUtils.httpGetWithCountryCodeQuery;
                StoreUtils;
                c5 = 2;
                c6 = 1;
                obj9 = HTTPUtils;
                const obj8 = { value: httpGetWithCountryCodeQuery(obj7), done: false };
                return obj8;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj10 = { type: "SKU_FETCH_FAIL", skuId };
            const obj4 = closure_130_1(closure_130_2[4]);
            obj4.dispatch(obj10);
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const tmp20 = closure_130_1(closure_130_2[7]);
            const tmp202 = new tmp20("Failed to fetch SKU " + skuId);
            throw tmp202;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj12 = { type: "SKU_FETCH_SUCCESS", sku: body.body };
            obj = closure_130_1(closure_130_2[4]);
            obj.dispatch(obj12);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp32) {
          closure_3 = tmp32;
          if (0 === c4) {
            c6 = 3;
            throw tmp32;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchPublishedSKU() {
  obj = _asyncToGenerator(async (skuId, arg1, variants_return_style, arg3) => {
    skuId = arg1;
    let closure_3 = arg3;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value, arg2, arg3) {
      let tmp29Result;
      let tmp29Result2;
      if (c9 === 2) {
        c9 = 3;
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
          let c1;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              c1 = undefined;
              variants_return_style = undefined;
              const tmp52 = skuId;
              if (null == SKUStore.get(skuId)) {
                let STORE_SKUResult;
                const obj4 = { type: "SKU_FETCH_START", skuId };
                const obj7 = DispatcherDefault;
                obj7.dispatch(obj4);
                c7 = 1;
                const obj9 = TestModeUtils;
                const result = obj9.isTestModeForApplication(tmp52);
                c1 = result;
                if (c1) {
                  STORE_SKUResult = closure_2_7.STORE_SKU(skuId);
                } else {
                  STORE_SKUResult = closure_2_7.STORE_PUBLISHED_LISTINGS_SKU(skuId);
                }
                obj6 = { url: STORE_SKUResult, rejectWithError: tmp29Result.rejectWithMigratedError() };
                const obj8 = {};
                tmp29Result = HTTPUtils;
                if (variants_return_style === ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP) {
                  obj8.variants_return_style = variants_return_style;
                }
                if (closure_3) {
                  obj8.include_unpublished = true;
                }
                const _Object = Object;
                if (Object.keys(obj8).length > 0) {
                  obj6.query = obj8;
                }
                c8 = 2;
                c9 = 1;
                const obj11 = { value: tmp29Result2.httpGetWithCountryCodeQuery(obj6), done: false };
                tmp29Result2 = StoreUtils;
                return obj11;
              }
            }
          } else if (1 === tmp4) {
            c7 = 0;
            const obj12 = { type: "SKU_FETCH_FAIL", skuId };
            const obj5 = closure_133_1(closure_133_2[4]);
            obj5.dispatch(obj12);
            obj6 = closure_133_1(closure_133_2[7]);
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const obj191 = new obj6("Failed to fetch SKU " + skuId);
            throw obj191;
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            let sku;
            variants_return_style = value;
            obj6 = closure_133_1(closure_133_2[4]).dispatch;
            const body = variants_return_style.body;
            closure_133_1(closure_133_2[4]);
            if (c1) {
              sku = body;
            } else {
              sku = body.sku;
            }
            obj = { type: "SKU_FETCH_SUCCESS", sku };
            obj6(obj);
            const tmp7 = c1;
            if (!tmp7) {
              obj6 = closure_133_1(closure_133_2[4]);
              const obj14 = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: variants_return_style.body };
              obj6.dispatch(obj14);
            }
            c7 = 0;
          }
          c9 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp36) {
          closure_6 = tmp36;
          if (0 === c7) {
            c9 = 3;
            throw tmp36;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchTestSKUsForApplication() {
  obj = _asyncToGenerator(async function(arg0) {
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
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
      try {
        let flag;
        let body;
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
            let closure_3 = tmp4;
            let closure_2 = tmp;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = true;
            }
            body = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj11 = closure_131_0(closure_131_2[8]);
            if (!obj11.isTestModeForApplication(closure_0)) {
              const tmp12 = flag;
              if (tmp12) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("this should only be used in test mode");
                throw error;
              }
            }
            const obj5 = { url: closure_131_7.APPLICATION_SKUS(closure_0), rejectWithError: obj6.rejectWithMigratedError() };
            const httpGetWithCountryCodeQuery = closure_131_0(closure_131_2[5]).httpGetWithCountryCodeQuery;
            const tmp20 = closure_131_0(closure_131_2[5]);
            obj6 = closure_131_0(closure_131_2[6]);
            c4 = 2;
            c5 = 1;
            const obj7 = { value: httpGetWithCountryCodeQuery(obj5), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          body = value.body;
          const obj9 = { type: "SKUS_FETCH_SUCCESS", skus: body };
          obj = closure_131_1(closure_131_2[4]);
          obj.dispatch(obj9);
          c5 = 3;
          const obj10 = { value: body, done: true };
          return obj10;
        }
      } catch (tmp26) {
        c5 = 3;
        throw tmp26;
      }
    }
  });
  return obj(...arguments);
};
obj = function _previewPurchaseSku() {
  obj = _asyncToGenerator(async function(arg0) {
    let apply_wallet_balance;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let obj5;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let currency;
      try {
        let payment_source_id;
        let gift;
        let obj7;
        let promotion_id_override;
        let billingError;
        c6 = 2;
        if (0 === apply_wallet_balance) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            c1 = undefined;
            payment_source_id = undefined;
            gift = undefined;
            currency = undefined;
            ({ applicationId: c0, skuId: c1, paymentSourceId: c2, isGift: c3, currency: c4, applyWalletBalance: c5 } = closure_0);
            obj7 = undefined;
            promotion_id_override = undefined;
            billingError = undefined;
            apply_wallet_balance = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === apply_wallet_balance) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            obj7 = { payment_source_id, gift, currency };
            if (null != apply_wallet_balance) {
              obj7.apply_wallet_balance = apply_wallet_balance;
            }
            const obj3 = closure_130_0(closure_130_2[8]);
            if (obj3.isTestModeForApplication(c0)) {
              obj7.test_mode = true;
            }
            promotion_id_override = closure_130_4.getPromotionIdOverride();
            if (null != promotion_id_override) {
              obj7.promotion_id_override = promotion_id_override;
            }
            currency = 1;
            const request = { url: closure_130_7.STORE_SKU_PURCHASE(c1), query: obj7, oldFormErrors: true, rejectWithError: obj5.rejectWithMigratedError() };
            const httpGetWithCountryCodeQuery = closure_130_0(closure_130_2[5]).httpGetWithCountryCodeQuery;
            const tmp56 = closure_130_0(closure_130_2[5]);
            obj5 = closure_130_0(closure_130_2[6]);
            apply_wallet_balance = 3;
            c6 = 1;
            const obj8 = { value: httpGetWithCountryCodeQuery(request), done: false };
            return obj8;
          }
        } else if (2 === apply_wallet_balance) {
          currency = 0;
          let closure_9 = closure_3;
          if (closure_9 instanceof closure_130_0(closure_130_2[10]).BillingError) {
            billingError = closure_9;
          } else {
            const self = this;
            const self2 = this;
            billingError = new closure_130_0(closure_130_2[10]).BillingError(closure_9);
          }
          if (billingError.code !== closure_130_0(closure_130_2[11]).ErrorCodes.BILLING_BUNDLE_ALREADY_PURCHASED) {
            if (billingError.code !== closure_130_0(closure_130_2[11]).ErrorCodes.BILLING_BUNDLE_PARTIALLY_OWNED) {
              if (billingError.code !== closure_130_0(closure_130_2[11]).ErrorCodes.INVALID_BILLING_ADDRESS) {
                c6 = 3;
                return { value: null, done: true };
              }
            }
          }
          throw billingError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          currency = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          currency = 0;
          c6 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp62) {
        closure_3 = tmp62;
        if (0 === currency) {
          c6 = 3;
          throw tmp62;
        } else {
          apply_wallet_balance = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _grantChannelBranchEntitlement() {
  obj = _asyncToGenerator(async (applicationId, skuId, skuId2) => {
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      let obj13;
      if (c8 === 2) {
        c8 = 3;
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
          let billingError;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              skuId = skuId2;
              skuId2 = undefined;
              billingError = undefined;
              const obj4 = { type: "SKU_PURCHASE_START", applicationId, skuId: skuId2 };
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj4);
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const post = HTTP.post;
              const obj6 = { url: closure_2_7.CHANNEL_ENTITLEMENT_GRANT(skuId), oldFormErrors: true, rejectWithError: obj13.rejectWithMigratedError() };
              c7 = 2;
              c8 = 1;
              obj13 = HTTPUtils;
              const obj7 = { value: post(obj6), done: false };
              return obj7;
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_4 = closure_5;
            const self = this;
            const self2 = this;
            billingError = new closure_132_0(closure_132_2[10]).BillingError(closure_4);
            const obj8 = { type: "SKU_PURCHASE_FAIL", applicationId, skuId, error: billingError };
            const obj5 = closure_132_1(closure_132_2[4]);
            obj5.dispatch(obj8);
            throw billingError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            skuId2 = value;
            const obj11 = { type: "SKU_PURCHASE_SUCCESS", skuId, entitlements: skuId2.body, libraryApplications: [] };
            obj = closure_132_1(closure_132_2[4]);
            obj.dispatch(obj11);
            c6 = 0;
            c8 = 3;
            return { value: skuId2.body, done: true };
          }
        } catch (tmp29) {
          closure_5 = tmp29;
          if (0 === c6) {
            c8 = 3;
            throw tmp29;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _orderSKU() {
  obj = _asyncToGenerator(async (sku_id, payment_source_id, request_gateway_country_code, arg3, arg4) => {
    let closure_3 = arg3;
    let closure_4 = arg4;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (async function(arg0, value, arg2, arg3, arg4) {
      let items;
      let obj10;
      let obj4;
      let obj6;
      if (c10 === 2) {
        c10 = 3;
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
          let body;
          let id;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              closure_6 = tmp;
              body = undefined;
              id = undefined;
              const obj13 = DispatcherDefault;
              obj13.dispatch({ type: "ORDER_CREATE_START" });
              c8 = 1;
              result = { order_line_items: items, billing_facet: obj4, location_facet: obj6 };
              items = [{ sku_id, quantity: 1, purchase_type: 1 }];
              const obj3 = { sku_id, quantity: 1, purchase_type: 1 };
              obj4 = { payment_source_id };
              obj6 = { request_gateway_country_code };
              if (closure_3) {
                const obj8 = { is_gift: true, gift_customization: obj10 };
                obj10 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
                ({ recipient_id: obj7.recipient_id, gift_style: obj7.gift_style, emoji_id: obj7.emoji_id, emoji_name: obj7.emoji_name, sound_id: obj7.sound_id, reward_sku_ids: obj7.reward_sku_ids, custom_message: obj7.custom_message_contents } = closure_4);
                result.gifting_facet = obj8;
              }
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.ORDER_CREATE, body: result, rejectWithError: result };
              const post = HTTP.post;
              const obj9 = HTTPUtils;
              result = obj9.rejectWithMigratedError();
              c9 = 2;
              c10 = 1;
              const obj11 = { value: post(request), done: false };
              return obj11;
            }
          } else if (1 === tmp4) {
            c8 = 0;
            request_gateway_country_code = closure_7;
            const obj5 = closure_134_1(closure_134_2[4]);
            obj5.dispatch({ type: "ORDER_CREATE_FAIL" });
            const self = this;
            const self2 = this;
            const billingError = new closure_134_0(closure_134_2[10]).BillingError(request_gateway_country_code);
            throw billingError;
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            id = body.id;
            result = closure_134_1(closure_134_2[4]);
            const obj14 = { type: "ORDER_CREATE_SUCCESS", orderId: id, order: body };
            result.dispatch(obj14);
            c8 = 0;
            c10 = 3;
            return { value: id, done: true };
          }
        } catch (tmp30) {
          closure_7 = tmp30;
          if (0 === c8) {
            c10 = 3;
            throw tmp30;
          } else {
            c9 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _purchaseSKU() {
  obj = _asyncToGenerator(async (applicationId, skuId, arg2) => {
    let closure_2 = arg2;
    let c11 = 0;
    let c12 = 0;
    let c9 = 0;
    return (async function(arg0, value, arg2) {
      let c10;
      let c3;
      let c4;
      let c5;
      let c7;
      let c8;
      let c9;
      let isGift;
      let obj17;
      let obj20;
      let obj30;
      let obj4;
      let obj9;
      if (c12 === 2) {
        c12 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let closure_15;
          let closure_16;
          let billingError;
          let paymentSource;
          c12 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              return { value, done: true };
            } else {
              closure_8 = tmp;
              expected_amount = undefined;
              _false = undefined;
              load_id = undefined;
              isGift = undefined;
              gift_info_options = undefined;
              quantity = undefined;
              body = undefined;
              promotion_id_override = undefined;
              closure_15 = undefined;
              closure_16 = undefined;
              billingError = undefined;
              const obj5 = {};
              const merged = Object.assign(closure_2_13);
              const merged1 = Object.assign(closure_2);
              paymentSource = obj5.paymentSource;
              ({ expectedAmount: c3, expectedCurrency: c4, analyticsLoadId: c5, isGift } = obj5);
              ({ giftInfoOptions: c7, loadId: c8, countryCode: c9, quantity: c10, applyWalletBalance: c11 } = obj5);
              const subscriptionPlanId = obj5.subscriptionPlanId;
              const obj27 = DispatcherDefault;
              obj27.wait(() => {
                obj = closure_2_1(closure_2_2[4]);
                const obj2 = { type: "SKU_PURCHASE_START", applicationId, skuId, isGift, loadId };
                obj.dispatch(obj2);
              });
              const obj28 = TestModeUtils;
              closure_12 = obj28.isTestModeForApplication(applicationId);
              country_code = 1;
              obj6 = { gift: isGift, sku_subscription_plan_id: subscriptionPlanId };
              c11 = 2;
              c12 = 1;
              const obj8 = { value: obj30.createGatewayCheckoutContext(paymentSource), done: false };
              obj30 = BillingUtils;
              return obj8;
            }
          } else {
            let prop;
            if (1 === c11) {
              country_code = 0;
              let closure_18 = closure_10;
              if (closure_18 instanceof closure_136_0(closure_136_2[10]).BillingError) {
                billingError = closure_18;
              } else {
                const self = this;
                const self2 = this;
                billingError = new closure_136_0(closure_136_2[10]).BillingError(closure_18);
              }
              const tmp105 = billingError.code !== closure_136_0(closure_136_2[11]).ErrorCodes.CONFIRMATION_REQUIRED && billingError.code !== closure_136_0(closure_136_2[11]).ErrorCodes.AUTHENTICATION_REQUIRED;
              if (!tmp105) {
                prop = skuId;
                const obj10 = { type: "SKU_PURCHASE_AWAIT_CONFIRMATION", skuId, isGift };
                const obj16 = closure_136_1(closure_136_2[4]);
                obj16.dispatch(obj10);
              }
              prop = closure_136_1(closure_136_2[4]);
              const obj12 = { type: "SKU_PURCHASE_FAIL", applicationId, skuId, error: billingError };
              prop.dispatch(obj12);
              if (billingError.code !== closure_136_0(closure_136_2[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
                throw billingError;
              } else if (closure_18.body.payment_id) {
                c12 = 3;
                const obj13 = { value: obj20.handlePaymentConfirmation(closure_18.body, paymentSource), done: true };
                obj20 = closure_136_0(closure_136_2[13]);
                return obj13;
              } else {
                const obj19 = closure_136_0(closure_136_2[13]);
                throw obj19.dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
              }
            } else {
              let closure_5;
              if (2 === c11) {
                if (arg0 === 1) {
                  c12 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  country_code = 0;
                  c12 = 3;
                  return { value, done: true };
                } else {
                  obj6.gateway_checkout_context = value;
                  obj6.load_id = tmp;
                  obj6.gift_info_options = gift_info_options;
                  body = obj6;
                  promotion_id_override = closure_136_4.getPromotionIdOverride();
                  if (null != promotion_id_override) {
                    body.promotion_id_override = promotion_id_override;
                  }
                  const tmp42 = closure_12;
                  if (tmp42) {
                    body.test_mode = true;
                  } else if (null != paymentSource) {
                    prop = body;
                    body.payment_source_id = paymentSource.id;
                    closure_5 = body;
                    c11 = 4;
                    c12 = 1;
                    const obj15 = { value: obj9.createPaymentSourceToken(paymentSource), done: false };
                    obj9 = closure_136_0(closure_136_2[13]);
                    return obj15;
                  }
                  if (null != expected_amount) {
                    body.expected_amount = expected_amount;
                  }
                  if (null != _false) {
                    body.expected_currency = _false;
                  }
                  const obj11 = closure_136_0(closure_136_2[14]);
                  body.purchase_token = obj11.getPurchaseToken();
                  if (null != quantity) {
                    body.quantity = quantity;
                  }
                  _false = c11;
                  const tmp74 = body;
                  if (c11 == null) {
                    _false = false;
                  }
                  tmp74.apply_wallet_balance = _false;
                  const HTTP = closure_136_0(closure_136_2[6]).HTTP;
                  const request = { url: closure_136_7.STORE_SKU_PURCHASE(skuId), body, context: obj17, oldFormErrors: true, rejectWithError: prop.rejectWithMigratedError() };
                  const post = HTTP.post;
                  obj17 = { load_id };
                  prop = closure_136_0(closure_136_2[6]);
                  c11 = 5;
                  c12 = 1;
                  const obj18 = { value: post(request), done: false };
                  return obj18;
                }
              } else if (3 === c11) {
                if (arg0 === 1) {
                  c12 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  country_code = 0;
                  c12 = 3;
                  return { value, done: true };
                } else {
                  closure_15 = value;
                  prop = closure_136_7.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                  expected_amount = closure_15;
                  const obj7 = closure_136_0(closure_136_2[6]);
                  const aPIBaseURL = obj7.getAPIBaseURL();
                  const type = paymentSource.type;
                  const tmp30 = body;
                  if (closure_15 == null) {
                    expected_amount = "";
                  }
                  tmp30.return_url = aPIBaseURL + prop(type, expected_amount, "success");
                }
              } else if (4 === c11) {
                if (arg0 === 1) {
                  c12 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  country_code = 0;
                  c12 = 3;
                  return { value, done: true };
                } else {
                  closure_5.payment_source_token = value;
                  if (closure_136_6.has(paymentSource.type)) {
                    c11 = 3;
                    c12 = 1;
                    const obj23 = { value: obj4.popupBridgeState(paymentSource.type), done: false };
                    obj4 = closure_136_0(closure_136_2[13]);
                    return obj23;
                  }
                }
              } else if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                country_code = 0;
                c12 = 3;
                return { value, done: true };
              } else {
                closure_16 = value;
                const obj25 = { type: "SKU_PURCHASE_SUCCESS", skuId, libraryApplications: prop, entitlements: closure_16.body.entitlements, giftCode: closure_16.body.gift_code, loadId: tmp };
                prop = skuId;
                const dispatch = closure_136_1(closure_136_2[4]).dispatch;
                closure_136_1(closure_136_2[4]);
                if (null != closure_16.body.library_applications) {
                  const library_applications = closure_16.body.library_applications;
                  prop = library_applications.filter(closure_136_0(closure_136_2[15]).isNotNullish);
                } else {
                  prop = [];
                }
                prop = tmp;
                dispatch(obj25);
                obj = { appliedUserDiscounts: closure_16.body.applied_user_discounts, redirectConfirmation: false };
                const merged2 = Object.assign(closure_16.body);
                country_code = 0;
                c12 = 3;
                return { value: obj, done: true };
              }
              if (null != country_code) {
                body.country_code = country_code;
              }
            }
          }
        } catch (tmp139) {
          closure_10 = tmp139;
          if (0 === country_code) {
            c12 = 3;
            throw tmp139;
          } else {
            c11 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _resendPaymentVerificationEmail() {
  obj = _asyncToGenerator(async function() {
    let obj7;
    let obj9;
    let value;
    if (c6 === 2) {
      c6 = 3;
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c3 = 1;
            const obj4 = { purchase_token: obj7.getPurchaseToken() };
            obj7 = PurchaseTokenUtils;
            value = {};
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION, body: obj4, oldFormErrors: true, rejectWithError: obj9.rejectWithMigratedError() };
            const post = HTTP.post;
            obj9 = HTTPUtils;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: post(request), done: false };
            return obj5;
          }
        } else if (1 === c5) {
          let billingError;
          c3 = 0;
          value = closure_4;
          if (value instanceof closure_130_0(closure_130_2[10]).BillingError) {
            billingError = value;
          } else {
            const self = this;
            const self2 = this;
            billingError = new closure_130_0(closure_130_2[10]).BillingError(value);
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
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp21) {
        closure_4 = tmp21;
        if (0 === c3) {
          c6 = 3;
          throw tmp21;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ ADYEN_PAYMENT_SOURCES: metroRequire, Endpoints: metroImportDefault } = Constants);
let closure_13 = { isGift: false };
let result = size.fileFinishedImporting("actions/SKUActionCreators.tsx");

export const fetchSKU = function fetchSKU() {
  return obj(...arguments);
};
export const fetchPublishedSKU = function fetchPublishedSKU() {
  return obj(...arguments);
};
export const fetchTestSKUsForApplication = function fetchTestSKUsForApplication() {
  return obj(...arguments);
};
export const previewPurchaseSku = function previewPurchaseSku() {
  return obj(...arguments);
};
export const grantChannelBranchEntitlement = function grantChannelBranchEntitlement() {
  return obj(...arguments);
};
export const orderSKU = function orderSKU() {
  return obj(...arguments);
};
export const purchaseSKU = function purchaseSKU() {
  return obj(...arguments);
};
export const resendPaymentVerificationEmail = function resendPaymentVerificationEmail() {
  return obj(...arguments);
};
export const clearPurchaseError = function clearPurchaseError() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
};
export const showPurchaseConfirmationStep = function showPurchaseConfirmationStep() {
  obj = DispatcherDefault;
  obj.wait(() => {
    obj = DispatcherDefault;
    return obj.dispatch({ type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP" });
  });
};
export const updateSKUPaymentIsGift = function updateSKUPaymentIsGift(isGift) {
  obj = DispatcherDefault;
  const obj2 = { type: "SKU_PURCHASE_UPDATE_IS_GIFT", isGift };
  obj.dispatch(obj2);
};