// === Module 9578: extraWishlistParams ===

// Module 9578 (extraWishlistParams)
import PlatformTypes from "PlatformTypes" /* 501 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import useSKUPrice from "useSKUPrice" /* 6025 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "createUserWidgetFromServer" /* 7293 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import closure_6 from "handlePaymentSourceCreateEnd" /* 4109 */;
import closure_7 from "fromServer" /* 6021 */;
import closure_8 from "fromServer" /* 9573 */;
import { getWishlistSkuIds } from "fromServer" /* 9573 */;
import ME from "ME" /* 676 */;

require = arg1;
function extraWishlistParams() {
  const obj = {};
  if (null != closure_6.ipCountryCode) {
    obj.country_code = closure_6.ipCountryCode;
  }
  if (obj2.isAndroid()) {
    obj.payment_gateway = constants.GOOGLE;
  } else {
    if (tmpResult.isIOS()) {
      obj.payment_gateway = constants.APPLE;
    }
    tmpResult = PlatformTypes;
  }
  return obj;
}
function maybeDispatchAdditionalActions(wishlist_items) {
  wishlist_items = wishlist_items.wishlist_items;
  const mapped = wishlist_items.map((sku) => sku.sku);
  const found = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  let obj = dispatcherDefault;
  obj.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: found });
  const storefront_pricing = wishlist_items.storefront_pricing;
  if (null != storefront_pricing) {
    obj = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: null, data: null };
    obj = { type: "skus", skuIds: null };
    obj[1] = found.map((id) => id.id);
    obj[1] = obj;
    const tmp3Result = dispatcherDefault;
    obj[2] = useSKUPrice.transformStorefrontPricesServer(storefront_pricing);
    tmp3Result.dispatch(obj);
    const tmpResult = useSKUPrice;
  }
}
({ AnalyticEvents: c10, Endpoints: unpackModuleId, PaymentGateways: closure_12 } = ME);
const result = require("set").fileFinishedImporting("modules/wishlists/WishlistActionCreators.tsx");

export default {
  fetchWishlist(arg0, stateFromStores, USER_PROFILE) {
    closure_0 = arg0;
    closure_1 = stateFromStores;
    closure_2 = USER_PROFILE;
    return callback(function*() {
      closure_2 = tmp3;
      obj1 = { type: "WISHLIST_FETCH_START", wishlistId: null };
      obj1[1] = closure_1_0;
      closure_1_1(closure_1_2[9]).dispatch(obj1);
      c4 = 1;
      const HTTP = closure_1_0(closure_1_2[11]).HTTP;
      const obj2 = { url: null, query: null, rejectWithError: true };
      obj2[0] = closure_1_11.USER_WISHLIST(closure_1_0);
      USER_PROFILE = closure_1_2;
      if (closure_1_2 == null) {
        USER_PROFILE = closure_1_0(closure_1_2[12]).WishlistFetchSource.USER_PROFILE;
      }
      const obj3 = { source: null };
      obj3[0] = USER_PROFILE;
      const merged = Object.assign(closure_1_13());
      obj2[1] = obj3;
      yield HTTP.get(obj2);
      if (1 === tmp7) {
        c4 = 0;
        const obj4 = closure_1_1(closure_1_2[9]);
        const obj5 = { type: "WISHLIST_FETCH_FAILURE", wishlistId: null, error: null };
        obj5[1] = USER_PROFILE;
        const aPIError = new closure_1_0(closure_1_2[14]).APIError(closure_3);
        obj5[2] = aPIError;
        obj4.dispatch(obj5);
        let obj6 = closure_1_1(closure_1_2[13]);
        obj6.captureException(closure_3);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        USER_PROFILE = arg1;
        let body = USER_PROFILE.body;
        let wishlist_items;
        if (body != null) {
          wishlist_items = body.wishlist_items;
        }
        if (null == wishlist_items) {
          const obj = closure_1_1(closure_1_2[13]);
          obj.captureMessage("Wishlist items not found in response");
        }
        body = USER_PROFILE.body;
        closure_1_14(body);
        closure_2 = closure_1_8.fromServer(body);
        obj1 = closure_1_1(closure_1_2[9]);
        obj6 = { type: "WISHLIST_FETCH_SUCCESS", wishlistId: null, wishlistData: null, updatedAt: null };
        obj6[1] = USER_PROFILE;
        obj6[2] = closure_2;
        obj6[3] = body;
        obj1.dispatch(obj6);
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  },
  addSkuToWishlist(closure_1_1, closure_1_2) {
    closure_0 = closure_1_1;
    closure_1 = closure_1_2;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
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
              let body = tmp4;
              closure_0 = tmp9;
              body = undefined;
              let user;
              c3 = undefined;
              c4 = undefined;
              closure_0 = null;
              c3 = 1;
              const HTTP = closure_1_0(closure_1_2[11]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: true };
              obj1[0] = closure_1_11.USER_WISHLIST_ITEMS;
              const obj2 = { sku_id: null };
              obj2[0] = closure_1_0;
              const merged = Object.assign(closure_1_13());
              obj1[1] = obj2;
              c4 = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp9) {
            c3 = 0;
            const currentUser = user;
            let obj4 = closure_1_1(closure_1_2[9]);
            obj4 = { type: "WISHLIST_ADD_SKU_FAILURE", skuId: null, error: null };
            obj4[1] = closure_0;
            const aPIError = new closure_1_0(closure_1_2[14]).APIError(currentUser);
            obj4[2] = aPIError;
            obj4.dispatch(obj4);
            throw currentUser;
          } else {
            if (2 === tmp9) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                closure_0 = arg1;
                body = arg1.body;
                closure_1_14(body);
                user = closure_1_8.fromServer(body);
                const obj6 = { type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: null, skuId: null, wishlistData: null };
                obj6[1] = user.id;
                obj6[2] = closure_0;
                obj6[3] = user;
                closure_1_1(closure_1_2[9]).dispatch(obj6);
                if (null != body) {
                  c3 = 2;
                  c3 = closure_1_9(user);
                  const obj7 = { wishlist_id: null, action_type: "ADD", sku_id: null, sku_ids: null, location_stack: null };
                  obj7[0] = user.id;
                  obj7[2] = closure_0;
                  obj7[3] = c3;
                  obj7[4] = body;
                  closure_1_1(closure_1_2[15]).track(closure_1_10.WISHLIST_UPDATED, obj7);
                  c3 = 1;
                  const obj12 = closure_1_1(closure_1_2[15]);
                }
                const obj10 = closure_1_1(closure_1_2[9]);
              }
            } else {
              if (3 === tmp9) {
                c3 = 1;
              } else {
                if (4 === tmp9) {
                  c3 = 0;
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  c3 = 0;
                }
                c3 = 0;
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c5 = 3;
            }
            c3 = 0;
            if (null != closure_1_0) {
              const firstWishlistId = currentUser.getCurrentUser();
              if (null != firstWishlistId) {
                if (null == firstWishlistId.getFirstWishlistId(firstWishlistId.id)) {
                  c3 = 3;
                  obj1 = closure_1_0(closure_1_2[16]);
                  c4 = 5;
                  c5 = 1;
                  const obj8 = { value: null, done: false };
                  obj8[0] = obj1.fetchProfile(firstWishlistId.id);
                  return obj8;
                }
              }
            }
          }
        } catch (tmp42) {
          user = tmp42;
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp42;
          } else if (tmp2 === tmp44) {
            c4 = tmp2;
          } else if (tmp === tmp44) {
            c4 = tmp3;
          } else {
            c4 = tmp6;
          }
        }
      }
    })();
  },
  removeSkuFromWishlist(wishlistId, closure_1_1, analyticsLocations) {
    closure_0 = wishlistId;
    closure_1 = closure_1_1;
    closure_2 = analyticsLocations;
    return callback(function*() {
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
              let id = tmp3;
              let body = tmp7;
              body = undefined;
              id = undefined;
              closure_2 = undefined;
              obj1 = { type: "WISHLIST_REMOVE_SKU_START", wishlistId: null, skuId: null };
              obj1[1] = closure_1_0;
              obj1[2] = closure_1_1;
              closure_1_1(closure_1_2[9]).dispatch(obj1);
              c3 = 1;
              const HTTP = closure_1_0(closure_1_2[11]).HTTP;
              const obj2 = { url: null, query: null, rejectWithError: true };
              obj2[0] = closure_1_11.USER_WISHLIST_ITEM(closure_1_0, closure_1_1);
              const obj3 = {};
              const merged = Object.assign(closure_1_13());
              obj2[1] = obj3;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.del(obj2);
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_3 = closure_2;
            obj1 = closure_1_1(closure_1_2[9]);
            const obj5 = { type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: null, skuId: null, error: null };
            obj5[1] = body;
            obj5[2] = id;
            const aPIError = new closure_1_0(closure_1_2[14]).APIError(closure_3);
            obj5[3] = aPIError;
            obj1.dispatch(obj5);
            throw closure_3;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                body = arg1.body;
                closure_1_14(body);
                id = closure_1_8.fromServer(body);
                let obj6 = closure_1_1(closure_1_2[9]);
                obj6 = { type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: null, skuId: null, wishlistData: null };
                obj6[1] = body;
                obj6[2] = id;
                obj6[3] = id;
                obj6.dispatch(obj6);
                if (null != closure_2) {
                  c3 = 2;
                  closure_2 = closure_1_9(id);
                  const obj7 = { wishlist_id: null, action_type: "REMOVE", sku_id: null, sku_ids: null, location_stack: null };
                  obj7[0] = id.id;
                  obj7[2] = id;
                  obj7[3] = closure_2;
                  obj7[4] = closure_2;
                  closure_1_1(closure_1_2[15]).track(closure_1_10.WISHLIST_UPDATED, obj7);
                  c3 = 1;
                  const obj9 = closure_1_1(closure_1_2[15]);
                }
              }
            } else {
              c3 = 1;
            }
            c3 = 0;
            c5 = 3;
          }
        } catch (tmp26) {
          closure_2 = tmp26;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp26;
          } else if (tmp === tmp28) {
            c4 = tmp;
          } else {
            c4 = tmp2;
          }
        }
      }
    })();
  },
  updateWishlistVisibility(wishlistId, arg1) {
    closure_0 = wishlistId;
    closure_1 = arg1;
    return callback(function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          if (0 === currentUser) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              let callback2 = tmp5;
              let callback;
              currentUser = currentUser.getCurrentUser();
              callback = currentUser;
              if (null != currentUser) {
                c3 = 1;
                callback = closure_1_14;
                const HTTP = closure_1_0(closure_1_2[11]).HTTP;
                obj1 = { url: null, body: null, rejectWithError: true };
                obj1[0] = closure_1_11.USER_WISHLIST_PATCH(closure_1_0);
                const obj2 = { visibility: null };
                obj2[0] = callback2;
                const merged = Object.assign(closure_1_13());
                obj1[1] = obj2;
                currentUser = 2;
                c6 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = HTTP.patch(obj1);
                return obj3;
              } else {
                c6 = 3;
              }
            }
          } else if (1 === tmp8) {
            c3 = 0;
            callback2 = closure_4;
            obj3 = callback2(closure_1_2[9]);
            const obj4 = { type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: null, error: null };
            obj4[1] = callback;
            const aPIError = new closure_1_0(closure_1_2[14]).APIError(callback2);
            obj4[2] = aPIError;
            obj3.dispatch(obj4);
            throw callback2;
          } else if (2 !== tmp8) {
            if (3 === tmp8) {
              c3 = 1;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = 1;
            }
            c3 = 0;
          }
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            callback(arg1.body);
            const obj6 = { type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: null, visibility: null };
            obj6[1] = callback;
            obj6[2] = callback2;
            callback2(closure_1_2[9]).dispatch(obj6);
            c3 = 2;
            const obj11 = callback2(closure_1_2[9]);
            currentUser = 4;
            c6 = 1;
            const obj7 = { value: null, done: false };
            obj7[0] = closure_1_0(closure_1_2[16]).fetchProfile(closure_1_0.id);
            return obj7;
          }
        } catch (tmp34) {
          closure_4 = tmp34;
          if (tmp4 === c3) {
            c6 = tmp2;
            throw tmp34;
          } else if (tmp === tmp36) {
            currentUser = tmp;
          } else {
            currentUser = tmp2;
          }
        }
      }
    })();
  },
  reorderWishlistItem(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    ({ previousSkuId: dependencyMap, nextSkuId: closure_3, newWishlistData: closure_4, analyticsLocations: closure_5 } = arg2);
    return callback(function*() {
      closure_1 = tmp3;
      obj1 = { type: "WISHLIST_REORDER_START", wishlistId: null, skuId: null, previousSkuId: null, nextSkuId: null, newWishlistData: null };
      obj1[1] = closure_1_0;
      obj1[2] = closure_1_1;
      obj1[3] = closure_1_2;
      obj1[4] = closure_3;
      obj1[5] = c4;
      closure_1_1(closure_1_2[9]).dispatch(obj1);
      c3 = 1;
      const HTTP = closure_1_0(closure_1_2[11]).HTTP;
      const obj2 = { url: null, body: null, rejectWithError: true };
      obj2[0] = closure_1_11.USER_WISHLIST_ITEM(closure_1_0, closure_1_1);
      let obj3 = { previous_sku_id: null, next_sku_id: null };
      obj3[0] = closure_1_2;
      obj3[1] = closure_3;
      const merged = Object.assign(closure_1_13());
      obj2[1] = obj3;
      yield HTTP.patch(obj2);
      if (1 === tmp7) {
        c3 = 0;
        closure_3 = closure_2;
        obj3 = closure_1_1(closure_1_2[9]);
        let obj5 = { type: "WISHLIST_REORDER_FAILURE", wishlistId: null, skuId: null, error: null };
        obj5[1] = body;
        obj5[2] = closure_1;
        const aPIError = new closure_1_0(closure_1_2[14]).APIError(closure_3);
        obj5[3] = aPIError;
        obj3.dispatch(obj5);
        obj5 = closure_1_1(closure_1_2[13]);
        obj5.captureException(closure_3);
        c5 = 3;
      } else {
        if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            body = arg1.body;
            closure_1_14(body);
            closure_1 = closure_1_8.fromServer(body);
            const obj6 = { type: "WISHLIST_REORDER_SUCCESS", wishlistId: null, wishlistData: null };
            obj6[1] = body;
            obj6[2] = closure_1;
            closure_1_1(closure_1_2[9]).dispatch(obj6);
            if (null != c5) {
              c3 = 2;
              closure_2 = closure_1_9(closure_1);
              const obj = closure_1_1(closure_1_2[15]);
              const obj7 = { wishlist_id: null, action_type: "REORDER", sku_id: null, sku_ids: null, location_stack: null };
              obj7[0] = body;
              obj7[2] = closure_1;
              obj7[3] = closure_2;
              obj7[4] = c5;
              obj.track(closure_1_10.WISHLIST_UPDATED, obj7);
              c3 = 1;
            }
            const obj10 = closure_1_1(closure_1_2[9]);
          }
        } else {
          c3 = 1;
        }
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    })();
  },
  fetchWishlistRecommendations(arg0, arg1, stateFromStores1) {
    closure_0 = arg0;
    closure_1 = arg1;
    let num = stateFromStores1;
    if (stateFromStores1 === undefined) {
      num = 20;
    }
    let flag = arg3;
    if (arg3 === undefined) {
      flag = true;
    }
    return flag(function*() {
      closure_1 = tmp3;
      obj1 = { type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: null, applicationIds: null };
      obj1[1] = closure_1_1;
      obj1[2] = closure_1_0;
      closure_1_1(closure_1_2[9]).dispatch(obj1);
      c3 = 1;
      const HTTP = closure_1_0(closure_1_2[11]).HTTP;
      let obj2 = { url: null, query: null, rejectWithError: true };
      obj2[0] = closure_1_11.USER_WISHLIST_RECOMMENDATIONS;
      const obj3 = { application_ids: null, user_ids: null, max_recommendations: null, localize: null };
      obj3[0] = closure_1_0;
      obj3[1] = closure_1_1;
      obj3[2] = closure_1_2;
      obj3[3] = c3;
      const merged = Object.assign(closure_1_13());
      obj2[1] = obj3;
      yield HTTP.get(obj2);
      if (1 === tmp7) {
        c3 = 0;
        obj1 = closure_1_1(closure_1_2[13]);
        obj1.captureException(closure_2);
        obj2 = closure_1_1(closure_1_2[9]);
        let obj5 = { type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: null, applicationIds: null };
        obj5[1] = closure_1;
        obj5[2] = body;
        obj2.dispatch(obj5);
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        body = arg1.body;
        (function maybeDispatchAdditionalActionsForRecommendation(body) {
          let obj = callback(tmp21[9]);
          obj.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: body.skus });
          ({ storefront_pricing, skus } = body);
          if (null != storefront_pricing) {
            obj = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: null, data: null };
            obj = { type: "skus", skuIds: null };
            obj[1] = skus.map((id) => id.id);
            obj[1] = obj;
            const tmpResult = callback(tmp2[9]);
            obj[2] = body(tmp2[10]).transformStorefrontPricesServer(storefront_pricing);
            tmpResult.dispatch(obj);
            const obj5 = body(tmp2[10]);
          }
        })(body);
        closure_1 = closure_1_7.fromServer(body);
        const obj6 = { type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: null, applicationIds: null, data: null };
        obj6[1] = closure_1;
        obj6[2] = body;
        obj6[3] = closure_1;
        closure_1_1(closure_1_2[9]).dispatch(obj6);
        c3 = 0;
        const obj8 = closure_1_1(closure_1_2[9]);
      }
      c3 = 0;
      return arg1;
    })();
  }
};