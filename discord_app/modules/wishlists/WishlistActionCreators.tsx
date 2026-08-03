import fromServer from "fromServer";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import mergeGuildAvatar from "mergeGuildAvatar";
import handlePaymentSourceCreateEnd from "handlePaymentSourceCreateEnd";
import closure_7 from "fromServer";
import closure_8 from "fromServer";
import { getWishlistSkuIds } from "fromServer";
import ME from "ME";

let c10;
let closure_12;
let unpackModuleId;
const require = arg1;
function extraWishlistParams() {
  const obj = {};
  if (null != handlePaymentSourceCreateEnd.ipCountryCode) {
    obj.country_code = handlePaymentSourceCreateEnd.ipCountryCode;
  }
  if (obj2.isAndroid()) {
    obj.payment_gateway = constants.GOOGLE;
  } else {
    if (tmpResult.isIOS()) {
      obj.payment_gateway = constants.APPLE;
    }
    tmpResult = require(501) /* PlatformTypes */;
  }
  return obj;
}
function maybeDispatchAdditionalActions(wishlist_items) {
  wishlist_items = wishlist_items.wishlist_items;
  const mapped = wishlist_items.map((sku) => sku.sku);
  const found = mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
  let obj = importDefault(709);
  obj.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: found });
  const storefront_pricing = wishlist_items.storefront_pricing;
  if (null != storefront_pricing) {
    obj = { type: "SKUS_PRICING_FETCH_SUCCESS", priceId: null, data: null };
    obj = { type: "skus", skuIds: null };
    obj[1] = found.map((id) => id.id);
    obj[1] = obj;
    const tmp3Result = importDefault(709);
    obj[2] = require(5670) /* useSKUPrice */.transformStorefrontPricesServer(storefront_pricing);
    tmp3Result.dispatch(obj);
    const tmpResult = require(5670) /* useSKUPrice */;
  }
}
({ AnalyticEvents: c10, Endpoints: unpackModuleId, PaymentGateways: closure_12 } = ME);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/wishlists/WishlistActionCreators.tsx");

export default {
  fetchWishlist(arg0, stateFromStores, USER_PROFILE) {
    let closure_0 = arg0;
    let closure_1 = stateFromStores;
    let closure_2 = USER_PROFILE;
    return callback(function*() {
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
          return { value: "HermesInternal", done: null };
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
              let closure_2 = tmp3;
              let body = tmp7;
              let USER_PROFILE;
              body = undefined;
              closure_2 = undefined;
              let obj1 = { type: "WISHLIST_FETCH_START", wishlistId: null };
              obj1[1] = outer1_0;
              outer1_1(outer1_2[9]).dispatch(obj1);
              let c4 = 1;
              const HTTP = outer1_0(outer1_2[11]).HTTP;
              const obj2 = { url: null, query: null, rejectWithError: true };
              obj2[0] = outer1_11.USER_WISHLIST(outer1_0);
              USER_PROFILE = outer1_2;
              if (outer1_2 == null) {
                USER_PROFILE = outer1_0(outer1_2[12]).WishlistFetchSource.USER_PROFILE;
              }
              const obj3 = { source: null };
              obj3[0] = USER_PROFILE;
              const merged = Object.assign(outer1_13());
              obj2[1] = obj3;
              c5 = 2;
              c6 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj2);
              return obj4;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              const outer1_3 = fromServer;
              obj4 = outer1_1(outer1_2[9]);
              const obj5 = { type: "WISHLIST_FETCH_FAILURE", wishlistId: null, error: null };
              obj5[1] = USER_PROFILE;
              const aPIError = new outer1_0(outer1_2[14]).APIError(outer1_3);
              obj5[2] = aPIError;
              obj4.dispatch(obj5);
              let obj6 = outer1_1(outer1_2[13]);
              obj6.captureException(outer1_3);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              USER_PROFILE = arg1;
              body = USER_PROFILE.body;
              let wishlist_items;
              if (body != null) {
                wishlist_items = body.wishlist_items;
              }
              if (null == wishlist_items) {
                obj = outer1_1(outer1_2[13]);
                obj.captureMessage("Wishlist items not found in response");
              }
              body = USER_PROFILE.body;
              outer1_14(body);
              closure_2 = outer1_8.fromServer(body);
              obj1 = outer1_1(outer1_2[9]);
              obj6 = { type: "WISHLIST_FETCH_SUCCESS", wishlistId: null, wishlistData: null, updatedAt: null };
              obj6[1] = USER_PROFILE;
              obj6[2] = closure_2;
              obj6[3] = body;
              obj1.dispatch(obj6);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          }
        } catch (tmp52) {
          fromServer = tmp52;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp52;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  },
  addSkuToWishlist(id, outer1_2) {
    let closure_0 = id;
    let closure_1 = outer1_2;
    return callback(function*() {
      if (currentUser === 2) {
        currentUser = 3;
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
          currentUser = 2;
          if (0 === firstWishlistId) {
            if (arg0 === 1) {
              currentUser = 3;
              throw arg1;
            } else if (arg0 === 2) {
              currentUser = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp4;
              let closure_0 = tmp9;
              body = undefined;
              let user;
              let c3;
              firstWishlistId = undefined;
              closure_0 = null;
              c3 = 1;
              const HTTP = outer1_0(outer1_2[11]).HTTP;
              let obj1 = { url: null, body: null, rejectWithError: true };
              obj1[0] = outer1_11.USER_WISHLIST_ITEMS;
              const obj2 = { sku_id: null };
              obj2[0] = outer1_0;
              const merged = Object.assign(outer1_13());
              obj1[1] = obj2;
              firstWishlistId = 2;
              currentUser = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp9) {
            c3 = 0;
            currentUser = user;
            let obj4 = outer1_1(outer1_2[9]);
            obj4 = { type: "WISHLIST_ADD_SKU_FAILURE", skuId: null, error: null };
            obj4[1] = closure_0;
            const aPIError = new outer1_0(outer1_2[14]).APIError(currentUser);
            obj4[2] = aPIError;
            obj4.dispatch(obj4);
            throw currentUser;
          } else {
            if (2 === tmp9) {
              if (arg0 === 1) {
                currentUser = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                currentUser = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                closure_0 = arg1;
                body = arg1.body;
                outer1_14(body);
                user = outer1_8.fromServer(body);
                const obj6 = { type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: null, skuId: null, wishlistData: null };
                obj6[1] = user.id;
                obj6[2] = closure_0;
                obj6[3] = user;
                outer1_1(outer1_2[9]).dispatch(obj6);
                if (null != body) {
                  c3 = 2;
                  c3 = outer1_9(user);
                  const obj7 = { wishlist_id: null, action_type: "ADD", sku_id: null, sku_ids: null, location_stack: null };
                  obj7[0] = user.id;
                  obj7[2] = closure_0;
                  obj7[3] = c3;
                  obj7[4] = body;
                  outer1_1(outer1_2[15]).track(outer1_10.WISHLIST_UPDATED, obj7);
                  c3 = 1;
                  const obj12 = outer1_1(outer1_2[15]);
                }
                const obj10 = outer1_1(outer1_2[9]);
              }
            } else {
              if (3 === tmp9) {
                c3 = 1;
              } else {
                if (4 === tmp9) {
                  c3 = 0;
                } else if (arg0 === 1) {
                  currentUser = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  c3 = 0;
                }
                c3 = 0;
                currentUser = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              currentUser = 3;
            }
            c3 = 0;
            if (null != outer1_0) {
              firstWishlistId = currentUser.getCurrentUser();
              if (null != firstWishlistId) {
                if (null == firstWishlistId.getFirstWishlistId(firstWishlistId.id)) {
                  c3 = 3;
                  obj1 = outer1_0(outer1_2[16]);
                  firstWishlistId = 5;
                  currentUser = 1;
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
  removeSkuFromWishlist(wishlistId, outer1_1, analyticsLocations) {
    let closure_0 = wishlistId;
    let closure_1 = outer1_1;
    let closure_2 = analyticsLocations;
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
              let closure_2;
              let obj1 = { type: "WISHLIST_REMOVE_SKU_START", wishlistId: null, skuId: null };
              obj1[1] = outer1_0;
              obj1[2] = outer1_1;
              outer1_1(outer1_2[9]).dispatch(obj1);
              let c3 = 1;
              const HTTP = outer1_0(outer1_2[11]).HTTP;
              const obj2 = { url: null, query: null, rejectWithError: true };
              obj2[0] = outer1_11.USER_WISHLIST_ITEM(outer1_0, outer1_1);
              const obj3 = {};
              const merged = Object.assign(outer1_13());
              obj2[1] = obj3;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.del(obj2);
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            c3 = closure_2;
            obj1 = outer1_1(outer1_2[9]);
            const obj5 = { type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: null, skuId: null, error: null };
            obj5[1] = body;
            obj5[2] = id;
            const aPIError = new outer1_0(outer1_2[14]).APIError(c3);
            obj5[3] = aPIError;
            obj1.dispatch(obj5);
            throw c3;
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
                outer1_14(body);
                id = outer1_8.fromServer(body);
                let obj6 = outer1_1(outer1_2[9]);
                obj6 = { type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: null, skuId: null, wishlistData: null };
                obj6[1] = body;
                obj6[2] = id;
                obj6[3] = id;
                obj6.dispatch(obj6);
                if (null != closure_2) {
                  c3 = 2;
                  closure_2 = outer1_9(id);
                  const obj7 = { wishlist_id: null, action_type: "REMOVE", sku_id: null, sku_ids: null, location_stack: null };
                  obj7[0] = id.id;
                  obj7[2] = id;
                  obj7[3] = closure_2;
                  obj7[4] = closure_2;
                  outer1_1(outer1_2[15]).track(outer1_10.WISHLIST_UPDATED, obj7);
                  c3 = 1;
                  const obj9 = outer1_1(outer1_2[15]);
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
    let closure_0 = wishlistId;
    let closure_1 = arg1;
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
              let closure_2 = tmp3;
              let closure_1 = tmp5;
              let callback;
              currentUser = currentUser.getCurrentUser();
              callback = currentUser;
              if (null != currentUser) {
                let c3 = 1;
                callback = outer1_14;
                const HTTP = outer1_0(outer1_2[11]).HTTP;
                const obj1 = { url: null, body: null, rejectWithError: true };
                obj1[0] = outer1_11.USER_WISHLIST_PATCH(outer1_0);
                const obj2 = { visibility: null };
                obj2[0] = outer1_1;
                const merged = Object.assign(outer1_13());
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
            outer1_1 = createUserWidgetFromServer;
            obj3 = outer1_1(outer1_2[9]);
            const obj4 = { type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: null, error: null };
            obj4[1] = callback;
            const aPIError = new outer1_0(outer1_2[14]).APIError(outer1_1);
            obj4[2] = aPIError;
            obj3.dispatch(obj4);
            throw outer1_1;
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
            obj6[2] = closure_1;
            outer1_1(outer1_2[9]).dispatch(obj6);
            c3 = 2;
            const obj11 = outer1_1(outer1_2[9]);
            currentUser = 4;
            c6 = 1;
            const obj7 = { value: null, done: false };
            obj7[0] = outer1_0(outer1_2[16]).fetchProfile(outer1_0.id);
            return obj7;
          }
        } catch (tmp34) {
          createUserWidgetFromServer = tmp34;
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
    let fromServer;
    let createUserWidgetFromServer;
    let mergeGuildAvatar;
    let dependencyMap;
    let closure_0 = arg0;
    let closure_1 = arg1;
    ({ previousSkuId: dependencyMap, nextSkuId: fromServer, newWishlistData: createUserWidgetFromServer, analyticsLocations: mergeGuildAvatar } = arg2);
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
              let closure_1 = tmp3;
              let body = tmp7;
              body = undefined;
              closure_1 = undefined;
              let closure_2;
              const obj1 = { type: "WISHLIST_REORDER_START", wishlistId: null, skuId: null, previousSkuId: null, nextSkuId: null, newWishlistData: null };
              obj1[1] = outer1_0;
              obj1[2] = outer1_1;
              obj1[3] = outer1_2;
              obj1[4] = c3;
              obj1[5] = c4;
              outer1_1(outer1_2[9]).dispatch(obj1);
              c3 = 1;
              const HTTP = outer1_0(outer1_2[11]).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: true };
              obj2[0] = outer1_11.USER_WISHLIST_ITEM(outer1_0, outer1_1);
              let obj3 = { previous_sku_id: null, next_sku_id: null };
              obj3[0] = outer1_2;
              obj3[1] = c3;
              const merged = Object.assign(outer1_13());
              obj2[1] = obj3;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj2);
              return obj4;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              c3 = closure_2;
              obj3 = outer1_1(outer1_2[9]);
              let obj5 = { type: "WISHLIST_REORDER_FAILURE", wishlistId: null, skuId: null, error: null };
              obj5[1] = body;
              obj5[2] = closure_1;
              const aPIError = new outer1_0(outer1_2[14]).APIError(c3);
              obj5[3] = aPIError;
              obj3.dispatch(obj5);
              obj5 = outer1_1(outer1_2[13]);
              obj5.captureException(c3);
              c5 = 3;
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  body = arg1.body;
                  outer1_14(body);
                  closure_1 = outer1_8.fromServer(body);
                  const obj6 = { type: "WISHLIST_REORDER_SUCCESS", wishlistId: null, wishlistData: null };
                  obj6[1] = body;
                  obj6[2] = closure_1;
                  outer1_1(outer1_2[9]).dispatch(obj6);
                  if (null != c5) {
                    c3 = 2;
                    closure_2 = outer1_9(closure_1);
                    obj = outer1_1(outer1_2[15]);
                    const obj7 = { wishlist_id: null, action_type: "REORDER", sku_id: null, sku_ids: null, location_stack: null };
                    obj7[0] = body;
                    obj7[2] = closure_1;
                    obj7[3] = closure_2;
                    obj7[4] = c5;
                    obj.track(outer1_10.WISHLIST_UPDATED, obj7);
                    c3 = 1;
                  }
                  const obj10 = outer1_1(outer1_2[9]);
                }
              } else {
                c3 = 1;
              }
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          }
        } catch (tmp41) {
          closure_2 = tmp41;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp41;
          } else if (tmp === tmp43) {
            c4 = tmp;
          } else {
            c4 = tmp2;
          }
        }
      }
    })();
  },
  fetchWishlistRecommendations(arg0, arg1, stateFromStores1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let num = stateFromStores1;
    if (stateFromStores1 === undefined) {
      num = 20;
    }
    let flag = arg3;
    if (arg3 === undefined) {
      flag = true;
    }
    return flag(function*() {
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
              let closure_1 = tmp3;
              let body = tmp7;
              body = undefined;
              closure_1 = undefined;
              let obj1 = { type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: null, applicationIds: null };
              obj1[1] = outer1_1;
              obj1[2] = outer1_0;
              outer1_1(outer1_2[9]).dispatch(obj1);
              let c3 = 1;
              const HTTP = outer1_0(outer1_2[11]).HTTP;
              let obj2 = { url: null, query: null, rejectWithError: true };
              obj2[0] = outer1_11.USER_WISHLIST_RECOMMENDATIONS;
              const obj3 = { application_ids: null, user_ids: null, max_recommendations: null, localize: null };
              obj3[0] = outer1_0;
              obj3[1] = outer1_1;
              obj3[2] = outer1_2;
              obj3[3] = c3;
              const merged = Object.assign(outer1_13());
              obj2[1] = obj3;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj2);
              return obj4;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              obj1 = outer1_1(outer1_2[13]);
              obj1.captureException(closure_2);
              obj2 = outer1_1(outer1_2[9]);
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
                let skus;
                let storefront_pricing;
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
              closure_1 = outer1_7.fromServer(body);
              const obj6 = { type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: null, applicationIds: null, data: null };
              obj6[1] = closure_1;
              obj6[2] = body;
              obj6[3] = closure_1;
              outer1_1(outer1_2[9]).dispatch(obj6);
              c3 = 0;
              const obj8 = outer1_1(outer1_2[9]);
            }
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp21) {
          closure_2 = tmp21;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp21;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  }
};