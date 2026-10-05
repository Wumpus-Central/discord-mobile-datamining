// discord_app/modules/wishlists/WishlistActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import StorefrontUtils from "../storefront/StorefrontUtils.tsx";
import WishlistRecord2 from "records/WishlistRecord.tsx";
import _asyncToGenerator_mod from "../../../_runtime/metro/00005__asyncToGenerator.js";
import UserProfileStore from "../user_profile/UserProfileStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import BillingInfoStore from "../../stores/billing/BillingInfoStore.tsx";
import WishlistRecommendationRecord from "records/WishlistRecommendationRecord.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const WishlistRecord = WishlistRecord2;
let c5, c6, closure_4;

let c10;
let closure_12;
let unpackModuleId;
const f97286 = (id) => id.id;
function extraWishlistParams() {
  const obj = {};
  if (null != BillingInfoStore.ipCountryCode) {
    obj.country_code = BillingInfoStore.ipCountryCode;
  }
  const obj2 = utils_PlatformUtils;
  if (obj2.isAndroid()) {
    obj.payment_gateway = constants.GOOGLE;
  } else {
    const tmpResult = utils_PlatformUtils;
    if (tmpResult.isIOS()) {
      obj.payment_gateway = constants.APPLE;
    }
  }
  return obj;
}
function maybeDispatchAdditionalActions(wishlist_items) {
  let obj3;
  let tmpResult;
  wishlist_items = wishlist_items.wishlist_items;
  const mapped = wishlist_items.map((sku) => sku.sku);
  const found = mapped.filter(GlobalUtils.isNotNullish);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: found });
  const storefront_pricing = wishlist_items.storefront_pricing;
  if (null != storefront_pricing) {
    const obj2 = {
      type: "SKUS_PRICING_FETCH_SUCCESS",
      priceId: obj3,
      data: tmpResult.transformStorefrontPricesServer(storefront_pricing),
    };
    obj3 = { type: "skus", skuIds: found.map(f97286) };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    tmpResult = StorefrontUtils;
    dispatch(obj2);
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
const getWishlistSkuIds = WishlistRecord2.getWishlistSkuIds;
({ AnalyticEvents: c10, Endpoints: unpackModuleId, PaymentGateways: closure_12 } = Constants);
let obj = {
  fetchWishlist(wishlistId, stateFromStores, USER_PROFILE) {
    let closure_0 = wishlistId;
    let closure_2 = USER_PROFILE;
    return (async function () {
      let aPIError;
      let closure_1;
      let obj7;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let body2;
          let wishlistData;
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
              stateFromStores = tmp4;
              wishlistId = undefined;
              body2 = undefined;
              wishlistData = undefined;
              const obj5 = { type: "WISHLIST_FETCH_START", wishlistId };
              const obj11 = stateFromStores(wishlistData[9]);
              obj11.dispatch(obj5);
              c4 = 1;
              const HTTP = USER_PROFILE(wishlistData[11]).HTTP;
              const request = { url: closure_1_11.USER_WISHLIST(wishlistId), query: obj7, rejectWithError: true };
              const get = HTTP.get;
              USER_PROFILE = wishlistData;
              if (wishlistData == null) {
                USER_PROFILE = USER_PROFILE(wishlistData[12]).WishlistFetchSource.USER_PROFILE;
              }
              obj7 = { source: USER_PROFILE };
              const merged = Object.assign(extraWishlistParams());
              c5 = 2;
              c6 = 1;
              const obj8 = { value: get(request), done: false };
              return obj8;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj9 = { type: "WISHLIST_FETCH_FAILURE", wishlistId: closure_130_0, error: aPIError };
              const dispatch = stateFromStores(wishlistData[9]).dispatch;
              const self = this;
              const self2 = this;
              const tmp30 = stateFromStores(wishlistData[9]);
              aPIError = new USER_PROFILE(wishlistData[14]).APIError(closure_3);
              dispatch(obj9);
              const obj6 = stateFromStores(wishlistData[13]);
              obj6.captureException(closure_3);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              wishlistId = value;
              const body = wishlistId.body;
              let wishlist_items;
              if (body != null) {
                wishlist_items = body.wishlist_items;
              }
              if (null == wishlist_items) {
                const obj = stateFromStores(wishlistData[13]);
                obj.captureMessage("Wishlist items not found in response");
              }
              body2 = wishlistId.body;
              maybeDispatchAdditionalActions(body2);
              wishlistData = WishlistRecord.fromServer(body2);
              const obj12 = {
                type: "WISHLIST_FETCH_SUCCESS",
                wishlistId: closure_130_0,
                wishlistData,
                updatedAt: closure_130_1,
              };
              const obj2 = stateFromStores(wishlistData[9]);
              obj2.dispatch(obj12);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp48) {
          closure_3 = tmp48;
          if (0 === c4) {
            c6 = 3;
            throw tmp48;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  },
  addSkuToWishlist(id, analyticsLocations) {
    let closure_0 = id;
    let closure_1 = analyticsLocations;
    return (async function () {
      let aPIError;
      let closure_1;
      let currentUser;
      let firstWishlistId;
      let obj2;
      let obj5;
      if (currentUser === 2) {
        currentUser = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        let wishlistData;
        try {
          let body;
          let sku_ids;
          let sku_id;
          currentUser = 2;
          if (0 === firstWishlistId) {
            if (arg0 === 1) {
              currentUser = 3;
              throw value;
            } else if (arg0 === 2) {
              currentUser = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              body = undefined;
              wishlistData = undefined;
              sku_ids = undefined;
              sku_id = null;
              c3 = 1;
              const HTTP = sku_id(wishlistData[11]).HTTP;
              const request = { url: constants2.USER_WISHLIST_ITEMS, body: obj5, rejectWithError: true };
              obj5 = { sku_id };
              const post = HTTP.post;
              const merged = Object.assign(extraWishlistParams());
              firstWishlistId = 2;
              currentUser = 1;
              const obj6 = { value: post(request), done: false };
              return obj6;
            }
          } else if (1 === firstWishlistId) {
            c3 = 0;
            let closure_5 = wishlistData;
            const obj7 = { type: "WISHLIST_ADD_SKU_FAILURE", skuId: closure_129_0, error: aPIError };
            const dispatch = tmp(wishlistData[9]).dispatch;
            const self = this;
            const self2 = this;
            const tmp27 = tmp(wishlistData[9]);
            aPIError = new sku_id(wishlistData[14]).APIError(closure_5);
            dispatch(obj7);
            throw closure_5;
          } else {
            if (2 === firstWishlistId) {
              if (arg0 === 1) {
                currentUser = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                currentUser = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                sku_id = value;
                body = value.body;
                maybeDispatchAdditionalActions(body);
                wishlistData = WishlistRecord.fromServer(body);
                const obj10 = {
                  type: "WISHLIST_ADD_SKU_SUCCESS",
                  wishlistId: wishlistData.id,
                  skuId: closure_129_0,
                  wishlistData,
                };
                const obj9 = tmp(wishlistData[9]);
                obj9.dispatch(obj10);
                if (null != closure_129_1) {
                  sku_ids = getWishlistSkuIds(wishlistData);
                  const obj12 = {
                    wishlist_id: wishlistData.id,
                    action_type: "ADD",
                    sku_id: closure_129_0,
                    sku_ids,
                    location_stack: closure_129_1,
                  };
                  const obj11 = tmp(wishlistData[15]);
                  obj11.track(constants.WISHLIST_UPDATED, obj12);
                  c3 = 1;
                }
              }
            } else {
              if (3 === firstWishlistId) {
                c3 = 1;
              } else if (4 === firstWishlistId) {
                c3 = 0;
              } else if (arg0 === 1) {
                currentUser = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                currentUser = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
              }
              currentUser = 3;
              return { value: "IconComponent", done: null };
            }
            c3 = 0;
            if (null != sku_id) {
              firstWishlistId = currentUser.getCurrentUser();
              if (null != firstWishlistId) {
                if (null == firstWishlistId.getFirstWishlistId(firstWishlistId.id)) {
                  c3 = 3;
                  firstWishlistId = 5;
                  currentUser = 1;
                  const obj13 = { value: obj2.fetchProfile(firstWishlistId.id), done: false };
                  obj2 = sku_id(wishlistData[16]);
                  return obj13;
                }
              }
            }
          }
        } catch (tmp36) {
          wishlistData = tmp36;
          if (0 === c3) {
            currentUser = 3;
            throw tmp36;
          } else if (1 === c3) {
            firstWishlistId = 1;
          } else if (2 === c3) {
            firstWishlistId = 3;
          } else {
            firstWishlistId = 4;
          }
        }
      }
    })();
  },
  removeSkuFromWishlist(wishlistId, skuId, analyticsLocations) {
    let closure_0 = wishlistId;
    let closure_1 = skuId;
    let closure_2 = analyticsLocations;
    return (async function () {
      let aPIError;
      let closure_1;
      let obj5;
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
        let sku_ids;
        try {
          let body;
          let tmp;
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
              wishlistId = tmp4;
              body = undefined;
              tmp = undefined;
              sku_ids = undefined;
              const obj4 = { type: "WISHLIST_REMOVE_SKU_START", wishlistId, skuId: tmp };
              const obj10 = tmp(sku_ids[9]);
              obj10.dispatch(obj4);
              c3 = 1;
              const HTTP = wishlistId(sku_ids[11]).HTTP;
              const request = {
                url: closure_1_11.USER_WISHLIST_ITEM(wishlistId, tmp),
                query: obj5,
                rejectWithError: true,
              };
              const del = HTTP.del;
              obj5 = {};
              const merged = Object.assign(extraWishlistParams());
              c4 = 2;
              c5 = 1;
              const obj7 = { value: del(request), done: false };
              return obj7;
            }
          } else if (1 === c4) {
            c3 = 0;
            let closure_3 = sku_ids;
            const obj9 = {
              type: "WISHLIST_REMOVE_SKU_FAILURE",
              wishlistId: closure_129_0,
              skuId: closure_129_1,
              error: aPIError,
            };
            const dispatch = tmp(sku_ids[9]).dispatch;
            const self = this;
            const self2 = this;
            const tmp12 = tmp(sku_ids[9]);
            aPIError = new wishlistId(sku_ids[14]).APIError(closure_3);
            dispatch(obj9);
            throw closure_3;
          } else {
            if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                body = value.body;
                maybeDispatchAdditionalActions(body);
                tmp = WishlistRecord.fromServer(body);
                const obj11 = {
                  type: "WISHLIST_REMOVE_SKU_SUCCESS",
                  wishlistId: closure_129_0,
                  skuId: closure_129_1,
                  wishlistData: tmp,
                };
                const obj6 = tmp(sku_ids[9]);
                obj6.dispatch(obj11);
                if (null != closure_129_2) {
                  sku_ids = getWishlistSkuIds(tmp);
                  const obj12 = {
                    wishlist_id: tmp.id,
                    action_type: "REMOVE",
                    sku_id: closure_129_1,
                    sku_ids,
                    location_stack: closure_129_2,
                  };
                  const obj8 = tmp(sku_ids[15]);
                  obj8.track(constants.WISHLIST_UPDATED, obj12);
                  c3 = 1;
                }
              }
            } else {
              c3 = 1;
            }
            c3 = 0;
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          sku_ids = tmp22;
          if (0 === c3) {
            c5 = 3;
            throw tmp22;
          } else if (1 === tmp24) {
            c4 = 1;
          } else {
            c4 = 3;
          }
        }
      }
    })();
  },
  updateWishlistVisibility(wishlistId, arg1) {
    let closure_1 = arg1;
    return (async function () {
      let aPIError;
      let closure_0;
      let currentUser;
      let obj12;
      let obj4;
      let visibility;
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
          let closure_2;
          let patchResult;
          c6 = 2;
          if (0 === currentUser) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp;
              currentUser = undefined;
              currentUser = currentUser.getCurrentUser();
              if (null != currentUser) {
                c3 = 1;
                wishlistId = maybeDispatchAdditionalActions;
                const HTTP = wishlistId(closure_2[11]).HTTP;
                const request = {
                  url: closure_1_11.USER_WISHLIST_PATCH(wishlistId),
                  body: obj4,
                  rejectWithError: true,
                };
                const patch = HTTP.patch;
                obj4 = { visibility };
                const merged = Object.assign(extraWishlistParams());
                patchResult = patch(request);
                currentUser = 2;
                c6 = 1;
                const obj5 = { value: patchResult, done: false };
                return obj5;
              }
            }
          } else if (1 === currentUser) {
            c3 = 0;
            visibility = closure_4;
            const obj6 = { type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: closure_130_0, error: aPIError };
            const dispatch = patchResult(closure_2[9]).dispatch;
            const self = this;
            const self2 = this;
            const tmp11 = patchResult(closure_2[9]);
            aPIError = new wishlistId(closure_2[14]).APIError(visibility);
            patchResult = dispatch(obj6);
            throw visibility;
          } else if (2 === currentUser) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              wishlistId(value.body);
              const obj8 = {
                type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS",
                wishlistId: closure_130_0,
                visibility: closure_130_1,
              };
              const obj10 = patchResult(closure_2[9]);
              obj10.dispatch(obj8);
              c3 = 2;
              currentUser = 4;
              c6 = 1;
              const obj9 = { value: obj12.fetchProfile(currentUser.id), done: false };
              obj12 = wishlistId(closure_2[16]);
              return obj9;
            }
          } else {
            if (3 === currentUser) {
              c3 = 1;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c3 = 1;
            }
            c3 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp29) {
          closure_4 = tmp29;
          if (0 === c3) {
            c6 = 3;
            throw tmp29;
          } else if (1 === tmp31) {
            currentUser = 1;
          } else {
            currentUser = 3;
          }
        }
      }
    })();
  },
  reorderWishlistItem(arg0, arg1, arg2) {
    let newWishlistData;
    let closure_0 = arg0;
    let closure_1 = arg1;
    ({
      previousSkuId: dependencyMap,
      nextSkuId: _asyncToGenerator,
      newWishlistData: UserProfileStore,
      analyticsLocations: UserStore,
    } = arg2);
    return (async function () {
      let aPIError;
      let obj6;
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
        let sku_ids;
        try {
          let wishlistId;
          let body;
          let tmp;
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
              wishlistId = tmp4;
              body = undefined;
              tmp = undefined;
              sku_ids = undefined;
              const obj4 = {
                type: "WISHLIST_REORDER_START",
                wishlistId,
                skuId: tmp,
                previousSkuId: previous_sku_id,
                nextSkuId: next_sku_id,
                newWishlistData: UserProfileStore,
              };
              const obj11 = tmp(sku_ids[9]);
              obj11.dispatch(obj4);
              c3 = 1;
              const HTTP = wishlistId(sku_ids[11]).HTTP;
              const request = {
                url: closure_1_11.USER_WISHLIST_ITEM(wishlistId, tmp),
                body: obj6,
                rejectWithError: true,
              };
              const patch = HTTP.patch;
              obj6 = { previous_sku_id, next_sku_id };
              const merged = Object.assign(extraWishlistParams());
              c4 = 2;
              c5 = 1;
              const obj7 = { value: patch(request), done: false };
              return obj7;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              _asyncToGenerator = sku_ids;
              const obj8 = {
                type: "WISHLIST_REORDER_FAILURE",
                wishlistId: closure_129_0,
                skuId: closure_129_1,
                error: aPIError,
              };
              const dispatch = tmp(sku_ids[9]).dispatch;
              const self = this;
              const self2 = this;
              const tmp24 = tmp(sku_ids[9]);
              aPIError = new wishlistId(sku_ids[14]).APIError(_asyncToGenerator);
              dispatch(obj8);
              const obj5 = tmp(sku_ids[13]);
              obj5.captureException(_asyncToGenerator);
            } else {
              if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  body = value.body;
                  maybeDispatchAdditionalActions(body);
                  tmp = WishlistRecord.fromServer(body);
                  const obj12 = { type: "WISHLIST_REORDER_SUCCESS", wishlistId: closure_129_0, wishlistData: tmp };
                  const obj9 = tmp(sku_ids[9]);
                  obj9.dispatch(obj12);
                  if (null != closure_129_5) {
                    sku_ids = getWishlistSkuIds(tmp);
                    const obj13 = {
                      wishlist_id: closure_129_0,
                      action_type: "REORDER",
                      sku_id: closure_129_1,
                      sku_ids,
                      location_stack: closure_129_5,
                    };
                    const obj = tmp(sku_ids[15]);
                    obj.track(constants.WISHLIST_UPDATED, obj13);
                    c3 = 1;
                  }
                }
              } else {
                c3 = 1;
              }
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp37) {
          sku_ids = tmp37;
          if (0 === c3) {
            c5 = 3;
            throw tmp37;
          } else if (1 === tmp39) {
            c4 = 1;
          } else {
            c4 = 3;
          }
        }
      }
    })();
  },
  fetchWishlistRecommendations(applicationIds, userIds) {
    let num;
    let closure_0 = applicationIds;
    let closure_1 = userIds;
    let flag = arg3;
    if (arg3 === undefined) {
      flag = true;
    }
    return flag(function* () {
      let closure_0;
      let closure_1;
      let obj7;
      function maybeDispatchAdditionalActionsForRecommendation(body) {
        let obj3;
        let obj4;
        let skus2;
        let storefront_pricing;
        const skus = body.skus;
        const obj = closure_1_1(closure_1_2[9]);
        obj.dispatch({ type: "SKUS_FETCH_SUCCESS", skus });
        ({ storefront_pricing, skus: skus2 } = body);
        if (null != storefront_pricing) {
          const obj2 = {
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: obj3,
            data: obj4.transformStorefrontPricesServer(storefront_pricing),
          };
          obj3 = { type: "skus", skuIds: skus2.map(f97286) };
          const dispatch = closure_1_1(closure_1_2[9]).dispatch;
          closure_1_1(closure_1_2[9]);
          obj4 = closure_1_0(closure_1_2[10]);
          dispatch(obj2);
        }
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let body;
          let tmp;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const application_ids = tmp4;
              body = undefined;
              tmp = undefined;
              const obj6 = {
                type: "WISHLIST_RECOMMENDATIONS_FETCH_START",
                userIds: tmp,
                applicationIds: application_ids,
              };
              const obj10 = tmp(closure_2[9]);
              const dispatchResult = obj10.dispatch(obj6);
              c3 = 1;
              const HTTP = application_ids(closure_2[11]).HTTP;
              const request = { url: constants.USER_WISHLIST_RECOMMENDATIONS, query: obj7, rejectWithError: true };
              obj7 = { application_ids, user_ids: tmp, max_recommendations: 2, localize: flag };
              const get = HTTP.get;
              const merged = Object.assign(extraWishlistParams());
              c4 = 2;
              c5 = 1;
              const obj9 = { value: get(request), done: false };
              return obj9;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              let obj2 = tmp(closure_2[13]);
              obj2.captureException(closure_2);
              let obj3 = tmp(closure_2[9]);
              const obj11 = {
                type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE",
                userIds: closure_129_1,
                applicationIds: closure_129_0,
              };
              const dispatchResult1 = obj3.dispatch(obj11);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              body = value.body;
              maybeDispatchAdditionalActionsForRecommendation(body);
              tmp = WishlistRecommendationRecord.fromServer(body);
              const obj12 = {
                type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS",
                userIds: closure_129_1,
                applicationIds: closure_129_0,
                data: tmp,
              };
              const obj8 = tmp(closure_2[9]);
              obj8.dispatch(obj12);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp18) {
          closure_2 = tmp18;
          if (0 === c3) {
            c5 = 3;
            throw tmp18;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
};
const result = size.fileFinishedImporting("modules/wishlists/WishlistActionCreators.tsx");

export default obj;
