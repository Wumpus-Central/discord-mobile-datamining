// discord_app/modules/wishlists/WishlistActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import StorefrontUtils from "../storefront/StorefrontUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserProfileStore from "../user_profile/UserProfileStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import BillingInfoStore from "../../stores/billing/BillingInfoStore.tsx";
import WishlistRecommendationRecord from "records/WishlistRecommendationRecord.tsx";
import WishlistRecord from "records/WishlistRecord.tsx";

require = fn;
function extraWishlistParams() {
  const obj = {};
  if (null != BillingInfoStore.ipCountryCode) {
    obj.country_code = BillingInfoStore.ipCountryCode;
  }
  if (obj2.isAndroid()) {
    obj.payment_gateway = constants.GOOGLE;
  } else {
    if (tmpResult.isIOS()) {
      obj.payment_gateway = constants.APPLE;
    }
    tmpResult = utils_PlatformUtils;
  }
  return obj;
}
function maybeDispatchAdditionalActions(wishlist_items) {
  wishlist_items = wishlist_items.wishlist_items;
  const mapped = wishlist_items.map((sku) => sku.sku);
  const found = mapped.filter(GlobalUtils.isNotNullish);
  let obj = DispatcherDefault;
  obj.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: found });
  const storefront_pricing = wishlist_items.storefront_pricing;
  if (null != storefront_pricing) {
    obj = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: null, data: null };
    obj = { type: "skus", skuIds: found.map((id) => id.id) };
    obj.priceId = obj;
    const tmp3Result = DispatcherDefault;
    obj.data = StorefrontUtils.transformStorefrontPricesServer(storefront_pricing);
    tmp3Result.dispatch(obj);
    const tmpResult = StorefrontUtils;
  }
}
const getWishlistSkuIds = fn(8778).getWishlistSkuIds;
const Constants = fn(1074);
({ AnalyticEvents: c10, Endpoints: closure_11, PaymentGateways: closure_12 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/WishlistActionCreators.tsx");

export default {
  fetchWishlist(wishlistId, stateFromStores, USER_PROFILE) {
    closure_0 = wishlistId;
    closure_2 = USER_PROFILE;
    return (async () => {
      let obj1 = { type: "WISHLIST_FETCH_START", wishlistId };
      stateFromStores(tmp3[9]).dispatch(obj1);
      const HTTP = USER_PROFILE(tmp3[11]).HTTP;
      const request = { url: closure_1_11.USER_WISHLIST(wishlistId), query: null, rejectWithError: true };
      USER_PROFILE = tmp3;
      if (tmp3 == null) {
        USER_PROFILE = USER_PROFILE(tmp3[12]).WishlistFetchSource.USER_PROFILE;
      }
      const merged = Object.assign(extraWishlistParams());
      request.query = { source: USER_PROFILE };
      await HTTP.get(request);
      if (1 === tmp7) {
        c4 = 0;
        closure_129_3 = closure_3;
        stateFromStores(tmp3[9]);
        const obj4 = { type: "WISHLIST_FETCH_FAILURE", wishlistId: closure_130_0, error: null };
        const aPIError = new USER_PROFILE(tmp3[14]).APIError(closure_129_3);
        obj4.error = aPIError;
        obj4.dispatch(obj4);
        stateFromStores(tmp3[13]).captureException(closure_129_3);
        c6 = 3;
        stateFromStores(tmp3[13]);
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_129_0 = arg1;
        const body = closure_129_0.body;
        let wishlist_items;
        if (body != null) {
          wishlist_items = body.wishlist_items;
        }
        if (null == wishlist_items) {
          stateFromStores(tmp3[13]).captureMessage("Wishlist items not found in response");
          stateFromStores(tmp3[13]);
        }
        const body2 = closure_129_0.body;
        maybeDispatchAdditionalActions(body2);
        closure_129_2 = WishlistRecord.fromServer(body2);
        obj1 = stateFromStores(tmp3[9]);
        obj1.dispatch({
          type: "WISHLIST_FETCH_SUCCESS",
          wishlistId: closure_130_0,
          wishlistData: closure_129_2,
          updatedAt: closure_130_1,
        });
        c4 = 0;
      }
      return arg1;
    })();
  },
  addSkuToWishlist(id, analyticsLocations) {
    closure_0 = id;
    closure_1 = analyticsLocations;
    return (async (arg0, value) => {
      if (currentUser === 2) {
        currentUser = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp8 === 3) {
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
          currentUser = 2;
          if (0 === firstWishlistId) {
            if (arg0 === 1) {
              currentUser = 3;
              throw value;
            } else if (arg0 === 2) {
              currentUser = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const sku_id = tmp9;
              let body;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              let currentUser2;
              closure_128_0 = null;
              c3 = 1;
              const HTTP = sku_id(tmp42[11]).HTTP;
              const request = { url: constants2.USER_WISHLIST_ITEMS, body: null, rejectWithError: true };
              let obj1 = { sku_id };
              const merged = Object.assign(extraWishlistParams());
              request.body = obj1;
              firstWishlistId = 2;
              currentUser = 1;
              const obj2 = { value: HTTP.post(request), done: false };
              return obj2;
            }
          } else if (1 === tmp9) {
            c3 = 0;
            closure_128_5 = tmp42;
            let obj4 = tmp4(tmp42[9]);
            const obj3 = { type: "WISHLIST_ADD_SKU_FAILURE", skuId: closure_129_0, error: null };
            const aPIError = new sku_id(tmp42[14]).APIError(closure_128_5);
            obj3.error = aPIError;
            obj4.dispatch(obj3);
            throw closure_128_5;
          } else {
            if (2 === tmp9) {
              if (arg0 === 1) {
                currentUser = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                currentUser = 3;
                obj4 = { value, done: true };
                return obj4;
              } else {
                closure_128_0 = value;
                body = value.body;
                maybeDispatchAdditionalActions(body);
                closure_128_2 = WishlistRecord.fromServer(body);
                const obj5 = {
                  type: "WISHLIST_ADD_SKU_SUCCESS",
                  wishlistId: closure_128_2.id,
                  skuId: closure_129_0,
                  wishlistData: closure_128_2,
                };
                tmp4(tmp42[9]).dispatch(obj5);
                if (null != closure_129_1) {
                  c3 = 2;
                  closure_128_3 = getWishlistSkuIds(closure_128_2);
                  const obj6 = {
                    wishlist_id: closure_128_2.id,
                    action_type: "ADD",
                    sku_id: closure_129_0,
                    sku_ids: closure_128_3,
                    location_stack: closure_129_1,
                  };
                  tmp4(tmp42[15]).track(constants.WISHLIST_UPDATED, obj6);
                  c3 = 1;
                  const obj12 = tmp4(tmp42[15]);
                }
                const obj10 = tmp4(tmp42[9]);
              }
            } else {
              if (3 === tmp9) {
                c3 = 1;
              } else {
                if (4 === tmp9) {
                  c3 = 0;
                } else if (arg0 === 1) {
                  currentUser = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  c3 = 0;
                }
                c3 = 0;
                currentUser = 3;
                obj = { value, done: true };
                return obj;
              }
              currentUser = 3;
            }
            c3 = 0;
            if (null != closure_128_0) {
              currentUser2 = currentUser.getCurrentUser();
              if (null != currentUser2) {
                if (null == firstWishlistId.getFirstWishlistId(currentUser2.id)) {
                  c3 = 3;
                  obj1 = sku_id(tmp42[16]);
                  firstWishlistId = 5;
                  currentUser = 1;
                  const obj7 = { value: obj1.fetchProfile(currentUser2.id), done: false };
                  return obj7;
                }
              }
            }
          }
        } catch (tmp42) {
          if (tmp5 === c3) {
            currentUser = tmp3;
            throw tmp42;
          } else if (tmp2 === tmp44) {
            firstWishlistId = tmp2;
          } else if (tmp === tmp44) {
            firstWishlistId = tmp3;
          } else {
            firstWishlistId = tmp6;
          }
        }
      }
    })();
  },
  removeSkuFromWishlist(wishlistId, skuId, analyticsLocations) {
    closure_0 = wishlistId;
    closure_1 = skuId;
    closure_2 = analyticsLocations;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
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
              skuId = tmp3;
              wishlistId = tmp7;
              let body;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              let obj1 = { type: "WISHLIST_REMOVE_SKU_START", wishlistId, skuId };
              skuId(tmp26[9]).dispatch(obj1);
              c3 = 1;
              const HTTP = wishlistId(tmp26[11]).HTTP;
              const request = {
                url: closure_1_11.USER_WISHLIST_ITEM(wishlistId, skuId),
                query: null,
                rejectWithError: true,
              };
              const obj2 = {};
              const merged = Object.assign(extraWishlistParams());
              request.query = obj2;
              c4 = 2;
              c5 = 1;
              const obj3 = { value: HTTP.del(request), done: false };
              return obj3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_3 = tmp26;
            obj1 = skuId(tmp26[9]);
            const obj4 = {
              type: "WISHLIST_REMOVE_SKU_FAILURE",
              wishlistId: closure_129_0,
              skuId: closure_129_1,
              error: null,
            };
            const aPIError = new wishlistId(tmp26[14]).APIError(closure_128_3);
            obj4.error = aPIError;
            obj1.dispatch(obj4);
            throw closure_128_3;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                body = value.body;
                maybeDispatchAdditionalActions(body);
                closure_128_1 = WishlistRecord.fromServer(body);
                let obj6 = skuId(tmp26[9]);
                const obj5 = {
                  type: "WISHLIST_REMOVE_SKU_SUCCESS",
                  wishlistId: closure_129_0,
                  skuId: closure_129_1,
                  wishlistData: closure_128_1,
                };
                obj6.dispatch(obj5);
                if (null != closure_129_2) {
                  c3 = 2;
                  closure_128_2 = getWishlistSkuIds(closure_128_1);
                  obj6 = {
                    wishlist_id: closure_128_1.id,
                    action_type: "REMOVE",
                    sku_id: closure_129_1,
                    sku_ids: closure_128_2,
                    location_stack: closure_129_2,
                  };
                  skuId(tmp26[15]).track(constants.WISHLIST_UPDATED, obj6);
                  c3 = 1;
                  const obj9 = skuId(tmp26[15]);
                }
              }
            } else {
              c3 = 1;
            }
            c3 = 0;
            c5 = 3;
          }
        } catch (tmp26) {
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
    closure_1 = arg1;
    return (async (arg0, value) => {
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
          if (0 === currentUser) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const visibility = tmp5;
              closure_129_0 = undefined;
              currentUser = currentUser.getCurrentUser();
              closure_129_0 = currentUser;
              if (null != currentUser) {
                c3 = 1;
                wishlistId = maybeDispatchAdditionalActions;
                const HTTP = wishlistId(tmp3[11]).HTTP;
                const request = {
                  url: closure_1_11.USER_WISHLIST_PATCH(wishlistId),
                  body: null,
                  rejectWithError: true,
                };
                const obj1 = { visibility };
                const merged = Object.assign(extraWishlistParams());
                request.body = obj1;
                currentUser = 2;
                c6 = 1;
                const obj2 = { value: HTTP.patch(request), done: false };
                return obj2;
              } else {
                c6 = 3;
              }
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_129_1 = closure_4;
            let obj3 = visibility(tmp3[9]);
            obj3 = { type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: closure_130_0, error: null };
            const aPIError = new wishlistId(tmp3[14]).APIError(closure_129_1);
            obj3.error = aPIError;
            obj3.dispatch(obj3);
            throw closure_129_1;
          } else if (2 !== tmp8) {
            if (3 === tmp8) {
              c3 = 1;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 1;
            }
            c3 = 0;
          }
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            wishlistId(value.body);
            const obj5 = {
              type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS",
              wishlistId: closure_130_0,
              visibility: closure_130_1,
            };
            visibility(tmp3[9]).dispatch(obj5);
            c3 = 2;
            const obj11 = visibility(tmp3[9]);
            currentUser = 4;
            c6 = 1;
            const obj6 = { value: wishlistId(tmp3[16]).fetchProfile(closure_129_0.id), done: false };
            return obj6;
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
    ({
      previousSkuId: dependencyMap,
      nextSkuId: asyncGeneratorStep,
      newWishlistData: UserProfileStore,
      analyticsLocations: UserStore,
    } = arg2);
    return (async () => {
      const skuId = tmp3;
      skuId(tmp41[9]).dispatch({
        type: "WISHLIST_REORDER_START",
        wishlistId,
        skuId,
        previousSkuId: previous_sku_id,
        nextSkuId: next_sku_id,
        newWishlistData,
      });
      const HTTP = wishlistId(tmp41[11]).HTTP;
      const request = { url: closure_1_11.USER_WISHLIST_ITEM(wishlistId, skuId), body: null, rejectWithError: true };
      const merged = Object.assign(extraWishlistParams());
      request.body = { previous_sku_id, next_sku_id };
      await HTTP.patch(request);
      if (1 === tmp7) {
        c3 = 0;
        closure_128_3 = tmp41;
        const obj4 = { type: "WISHLIST_REORDER_FAILURE", wishlistId: closure_129_0, skuId: closure_129_1, error: null };
        const aPIError = new wishlistId(tmp41[14]).APIError(closure_128_3);
        obj4.error = aPIError;
        skuId(tmp41[9]).dispatch(obj4);
        let obj5 = skuId(tmp41[13]);
        obj5.captureException(closure_128_3);
        c5 = 3;
        skuId(tmp41[9]);
      } else {
        if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const body = arg1.body;
            maybeDispatchAdditionalActions(body);
            closure_128_1 = WishlistRecord.fromServer(body);
            obj5 = { type: "WISHLIST_REORDER_SUCCESS", wishlistId: closure_129_0, wishlistData: closure_128_1 };
            skuId(tmp41[9]).dispatch(obj5);
            if (null != closure_129_5) {
              closure_128_2 = getWishlistSkuIds(closure_128_1);
              skuId(tmp41[15]).track(constants.WISHLIST_UPDATED, {
                wishlist_id: closure_129_0,
                action_type: "REORDER",
                sku_id: closure_129_1,
                sku_ids: closure_128_2,
                location_stack: closure_129_5,
              });
              c3 = 1;
              skuId(tmp41[15]);
            }
            skuId(tmp41[9]);
          }
        } else {
          c3 = 1;
        }
        c3 = 0;
      }
      return arg1;
    })();
  },
  fetchWishlistRecommendations(memo3, userIdsAndWishlistIds, stateFromStores) {
    closure_0 = memo3;
    closure_1 = userIdsAndWishlistIds;
    let flag = arg3;
    if (arg3 === undefined) {
      flag = true;
    }
    return flag(function* () {
      let obj1 = { type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: tmp3, applicationIds: application_ids };
      tmp3(tmp21[9]).dispatch(obj1);
      const HTTP = application_ids(tmp21[11]).HTTP;
      const request = { url: constants.USER_WISHLIST_RECOMMENDATIONS, query: null, rejectWithError: true };
      let obj2 = { application_ids, user_ids: tmp3, max_recommendations: num, localize: flag };
      const merged = Object.assign(extraWishlistParams());
      request.query = obj2;
      yield HTTP.get(request);
      if (1 === tmp7) {
        c3 = 0;
        closure_128_2 = tmp21;
        obj1 = tmp3(tmp21[13]);
        obj1.captureException(closure_128_2);
        obj2 = tmp3(tmp21[9]);
        obj2.dispatch({
          type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE",
          userIds: closure_129_1,
          applicationIds: closure_129_0,
        });
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const body = arg1.body;
        (function maybeDispatchAdditionalActionsForRecommendation(skus) {
          let obj = closure_1_1(closure_1_2[9]);
          obj.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: skus.skus });
          ({ storefront_pricing, skus } = skus);
          if (null != storefront_pricing) {
            obj = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: null, data: null };
            obj = { type: "skus", skuIds: skus.map((id) => id.id) };
            obj.priceId = obj;
            const tmpResult = closure_1_1(tmp2[9]);
            obj.data = closure_1_0(tmp2[10]).transformStorefrontPricesServer(storefront_pricing);
            tmpResult.dispatch(obj);
            const obj5 = closure_1_0(tmp2[10]);
          }
        })(body);
        closure_128_1 = WishlistRecommendationRecord.fromServer(body);
        tmp3(tmp21[9]).dispatch({
          type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS",
          userIds: closure_129_1,
          applicationIds: closure_129_0,
          data: closure_128_1,
        });
        c3 = 0;
        tmp3(tmp21[9]);
      }
      return arg1;
    })();
  },
};
