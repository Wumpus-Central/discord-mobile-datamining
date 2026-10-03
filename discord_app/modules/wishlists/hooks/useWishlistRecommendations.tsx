// === Module 10526: useWishlistRecommendations ===

// Module 10526 (useWishlistRecommendations)
import _mod12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import DurationsDefault from "Durations" /* 1102 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7858 */;
import WishlistFetchSource from "WishlistFetchSource" /* 8437 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 8438 */;
import useWishlistApplicationIds from "useWishlistApplicationIds" /* 10528 */;
import useWishlistSkuFilter from "useWishlistSkuFilter" /* 10529 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import WishlistRecommendationsStore from "WishlistRecommendationsStore" /* 10527 */;
import WishlistRecommendationRecord from "WishlistRecommendationRecord" /* 6728 */;

require = fn;
const constants = fn(6728).WishlistRecommendationReason;
let closure_9 = 30 * DurationsDefault.Millis.MINUTE;
let combinedSkusToUserAndReason = { state: "success", data: new WishlistRecommendationRecord({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = applicationIdsFilter(576).c(30);
  ({ userIdsAndWishlistIds, source, applicationIdsFilter } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore];
    const fn = function n() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = applicationIdsFilter(576);
  const stateFromStores = applicationIdsFilter(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === source) {
    if (cResult[3] === userIdsAndWishlistIds) {
      let tmp8 = cResult[4];
    }
    const fetchWishlists = applicationIdsFilter(8430).useFetchWishlists(tmp8);
    ({ wishlists, isFetching, errors } = fetchWishlists);
    if (cResult[5] === applicationIdsFilter) {
      if (cResult[6] === wishlists) {
        let tmp10 = cResult[7];
      }
      dependencyMap = tmp10;
      if (cResult[8] === applicationIdsFilter) {
        if (cResult[9] === wishlists) {
          dependencyMap2 = tmp29;
          if (cResult[15] === stateFromStores) {
            if (cResult[16] === tmp29) {
              if (cResult[17] === tmp10) {
                if (cResult[24] === cResult[18]) {
                  if (cResult[25] === errors) {
                    if (cResult[26] === tmp29) {
                      if (cResult[27] === tmp10) {
                        if (cResult[28] === isFetching) {
                          let tmp44 = cResult[29];
                        }
                        return tmp44;
                      }
                    }
                  }
                }
                let obj2 = { sortedWishlistSkus: cResult[18], wishlistSkuIdToSku: tmp29, wishlistSkusToUserAndReasonMap: tmp10, wishlistsAreFetching: isFetching, wishlistErrors: errors };
                cResult[24] = cResult[18];
                cResult[25] = errors;
                cResult[26] = tmp29;
                cResult[27] = tmp10;
                cResult[28] = isFetching;
                cResult[29] = obj2;
                tmp44 = obj2;
              }
            }
          }
          if (cResult[19] === stateFromStores) {
            if (cResult[20] === tmp10) {
              let tmp40 = cResult[21];
            }
            const _Object2 = Object;
            const keys = Object.keys(tmp29);
            const sorted = keys.sort(tmp40);
            if (cResult[22] !== tmp29) {
              class M {
                constructor(arg0) {
                  return closure_3[arg0];
                }
              }
              cResult[22] = tmp29;
              cResult[23] = M;
            } else {
              class M {
                constructor(arg0) {
                  return closure_3[arg0];
                }
              }
            }
            const mapped = sorted.map(M);
            cResult[15] = stateFromStores;
            cResult[16] = tmp29;
            cResult[17] = tmp10;
            cResult[18] = mapped;
          }
          const fn2 = function y(arg0, arg1) {
            let obj = dependencyMap[arg1];
            if (obj == null) {
              obj = {};
            }
            let obj2 = dependencyMap[arg0];
            if (obj2 == null) {
              obj2 = {};
            }
            const diff = Object.keys(obj).length - Object.keys(obj2).length;
            if (0 !== diff) {
              return diff;
            } else {
              const _Boolean = Boolean;
              const _Boolean2 = Boolean;
              const _Number = Number;
              const _Number2 = Number;
              const BooleanResult = Boolean(obj[stateFromStores]);
              return Number(Boolean(obj2[stateFromStores])) - Number(BooleanResult);
            }
          };
          cResult[19] = stateFromStores;
          cResult[20] = tmp10;
          cResult[21] = fn2;
          tmp40 = fn2;
        }
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            return closure_3[arg0];
          }
        }
        cResult[11] = tmp31;
      } else {
        class M {
          constructor(arg0) {
            return closure_3[arg0];
          }
        }
      }
      if (cResult[12] !== applicationIdsFilter) {
        class M {
          constructor(arg0) {
            return closure_3[arg0];
          }
        }
        cResult[12] = applicationIdsFilter;
        cResult[13] = tmp33;
      } else {
        class M {
          constructor(arg0) {
            return closure_3[arg0];
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            return closure_3[arg0];
          }
        }
        cResult[14] = T;
      } else {
        class M {
          constructor(arg0) {
            return closure_3[arg0];
          }
        }
      }
      const _Object = Object;
      const found = wishlists.filter(applicationIdsFilter(1375).isNotNullish);
      const found1 = found.flatMap(tmp31).filter(tmp33);
      const fromEntriesResult = Object.fromEntries(found1.map(T));
      cResult[8] = applicationIdsFilter;
      cResult[9] = wishlists;
      cResult[10] = fromEntriesResult;
      const flatMapResult = found.flatMap(tmp31);
    }
    const found2 = wishlists.filter(applicationIdsFilter(1375).isNotNullish);
    const obj3 = {};
    const iter = found2[Symbol.iterator]();
    const tmpResult2 = applicationIdsFilter(8430);
    while (iter !== undefined) {
      class M {
        constructor(arg0) {
          return closure_3[arg0];
        }
      }
      for (const item10065 of tmp18) {
        class M {
          constructor(arg0) {
            return closure_3[arg0];
          }
        }
        let isOwned = null == item10065.sku;
        if (!isOwned) {
          class M {
            constructor(arg0) {
              return closure_3[arg0];
            }
          }
          isOwned = tmp21.isOwned;
        }
        if (!isOwned) {
          class M {
            constructor(arg0) {
              return closure_3[arg0];
            }
          }
          if (tmp22) {
            class M {
              constructor(arg0) {
                return closure_3[arg0];
              }
            }
            let tmp22 = !applicationIdsFilter.includes(tmp21.sku.applicationId);
          }
          isOwned = tmp22;
        }
        if (isOwned) {
          class M {
            constructor(arg0) {
              return closure_3[arg0];
            }
          }
        } else {
          class M {
            constructor(arg0) {
              return closure_3[arg0];
            }
          }
          if (null != obj3[tmp21.skuId]) {
            class M {
              constructor(arg0) {
                return closure_3[arg0];
              }
            }
            let tmp23 = obj3[tmp21.skuId];
          } else {
            class M {
              constructor(arg0) {
                return closure_3[arg0];
              }
            }
          }
          let obj4 = {};
          let merged = Object.assign(tmp23);
          obj4[tmp17.userId] = constants.WISHLIST;
          obj3[tmp21.skuId] = obj4;
        }
      }
      continue;
    }
    cResult[5] = applicationIdsFilter;
    cResult[6] = wishlists;
    cResult[7] = obj3;
    tmp10 = obj3;
    const nextResult = iter.next();
  }
  const obj5 = { wishlistIdsAndUsers: userIdsAndWishlistIds, source };
  cResult[2] = source;
  cResult[3] = userIdsAndWishlistIds;
  cResult[4] = obj5;
  tmp8 = obj5;
  const tmpResult = applicationIdsFilter(504);
}) : ((applicationIdsFilter) => {
  applicationIdsFilter = applicationIdsFilter.applicationIdsFilter;
  let wishlists;
  let memo1;
  ({ userIdsAndWishlistIds, source } = applicationIdsFilter);
  let items = [AuthenticationStore];
  const stateFromStores = applicationIdsFilter(wishlists[9]).useStateFromStores(items, () => id.getId());
  let obj = applicationIdsFilter(wishlists[9]);
  const fetchWishlists = applicationIdsFilter(wishlists[10]).useFetchWishlists({ wishlistIdsAndUsers: userIdsAndWishlistIds, source });
  wishlists = fetchWishlists.wishlists;
  const items1 = [wishlists, applicationIdsFilter];
  ({ isFetching, errors } = fetchWishlists);
  const memo = memo1.useMemo(() => {
    const found = wishlists.filter(GlobalUtils.isNotNullish);
    const obj = {};
    const iter = found[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let items = nextResult.items;
      for (const item10023 of items) {
        let isOwned = null == item10023.sku;
        if (!isOwned) {
          isOwned = item10023.isOwned;
        }
        if (!isOwned) {
          let tmp8 = null != applicationIdsFilter;
          if (tmp8) {
            tmp8 = !applicationIdsFilter.includes(item10023.sku.applicationId);
          }
          isOwned = tmp8;
        }
        if (isOwned) {
          continue;
        } else {
          if (null != obj[item10023.skuId]) {
            let obj3 = obj[item10023.skuId];
          } else {
            obj3 = {};
          }
          let obj4 = {};
          let merged = Object.assign(obj3);
          obj4[tmp3.userId] = constants.WISHLIST;
          obj[item10023.skuId] = obj4;
        }
      }
      continue;
    }
    return obj;
  }, items1);
  const items2 = [wishlists, applicationIdsFilter];
  memo1 = memo1.useMemo(() => {
    const found = wishlists.filter(GlobalUtils.isNotNullish);
    const found1 = found.flatMap((items) => items.items).filter((sku) => {
      let tmp = null != sku && null != sku.sku && !sku.isOwned;
      if (tmp) {
        tmp = null == applicationIdsFilter || applicationIdsFilter.includes(sku.sku.applicationId);
        const tmp2 = null == applicationIdsFilter || applicationIdsFilter.includes(sku.sku.applicationId);
      }
      return tmp;
    });
    return Object.fromEntries(found1.map((item) => {
      const items = [, ];
      ({ skuId: arr[0], sku: arr[1] } = item);
      return items;
    }));
  }, items2);
  let obj3 = { sortedWishlistSkus: null, wishlistSkuIdToSku: memo1, wishlistSkusToUserAndReasonMap: memo, wishlistsAreFetching: isFetching, wishlistErrors: errors };
  const items3 = [stateFromStores, memo1, memo];
  obj3.sortedWishlistSkus = memo1.useMemo(() => {
    const keys = Object.keys(memo1);
    const sorted = keys.sort((arg0, arg1) => {
      let obj = memo[arg1];
      if (obj == null) {
        obj = {};
      }
      let obj2 = memo[arg0];
      if (obj2 == null) {
        obj2 = {};
      }
      const diff = Object.keys(obj).length - Object.keys(obj2).length;
      if (0 !== diff) {
        return diff;
      } else {
        const _Boolean = Boolean;
        const _Boolean2 = Boolean;
        const _Number = Number;
        const _Number2 = Number;
        const BooleanResult = Boolean(obj[stateFromStores]);
        return Number(Boolean(obj2[stateFromStores])) - Number(BooleanResult);
      }
    });
    return sorted.map((item) => memo1[item]);
  }, items3);
  return obj3;
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((userIds) => {
  let obj = userIds(applicationIds[8]);
  const cResult = obj.c(9);
  userIds = userIds.userIds;
  const numItems = userIds.numItems;
  applicationIds = userIds.applicationIds;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [WishlistRecommendationsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === applicationIds) {
    if (cResult[2] === userIds) {
      let tmp6 = cResult[3];
    }
    let stateFromStores = tmp(tmp2[9]).useStateFromStores(first, tmp6);
    if (cResult[4] === applicationIds) {
      if (cResult[5] === numItems) {
        if (cResult[6] === userIds) {
          let tmp8 = cResult[7];
          let tmp9 = cResult[8];
        }
        const effect = noop.useEffect(tmp8, tmp9);
        if (0 === userIds.length) {
          stateFromStores = obj;
        }
        return stateFromStores;
      }
    }
    const fn2 = function p() {
      if (0 !== userIds.length) {
        if (0 !== applicationIds.length) {
          const recommendations = WishlistRecommendationsStore.getRecommendations(userIds, applicationIds);
          if (null != recommendations) {
            if ("loading" !== recommendations.state) {
              const _Date = Date;
              let tmp3 = "success" === recommendations.state;
              recommendations.fetchedAt < Date.now() - closure_9;
              if (tmp3) {
                tmp3 = recommendations.data.skus.length >= numItems;
              }
            }
          }
          const wishlistRecommendations = WishlistActionCreatorsDefault.fetchWishlistRecommendations(applicationIds, userIds, numItems);
        }
      }
    };
    const items1 = [userIds, applicationIds, numItems];
    cResult[4] = applicationIds;
    cResult[5] = numItems;
    cResult[6] = userIds;
    cResult[7] = fn2;
    cResult[8] = items1;
    tmp9 = items1;
    tmp8 = fn2;
    const tmpResult = tmp(tmp2[9]);
  }
  const fn = function o() {
    return WishlistRecommendationsStore.getRecommendations(userIds, applicationIds);
  };
  cResult[1] = applicationIds;
  cResult[2] = userIds;
  cResult[3] = fn;
  tmp6 = fn;
  tmp = userIds;
  tmp2 = applicationIds;
}) : ((userIds) => {
  userIds = userIds.userIds;
  const numItems = userIds.numItems;
  const applicationIds = userIds.applicationIds;
  let obj = userIds(applicationIds[9]);
  const items = [WishlistRecommendationsStore];
  let stateFromStores = obj.useStateFromStores(items, () => WishlistRecommendationsStore.getRecommendations(userIds, applicationIds));
  const items1 = [userIds, applicationIds, numItems];
  const effect = noop.useEffect(() => {
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        const recommendations = WishlistRecommendationsStore.getRecommendations(userIds, applicationIds);
        if (null != recommendations) {
          if ("loading" !== recommendations.state) {
            const _Date = Date;
            let tmp3 = "success" === recommendations.state;
            recommendations.fetchedAt < Date.now() - closure_9;
            if (tmp3) {
              tmp3 = recommendations.data.skus.length >= numItems;
            }
          }
        }
        const wishlistRecommendations = WishlistActionCreatorsDefault.fetchWishlistRecommendations(applicationIds, userIds, numItems);
      }
    }
  }, items1);
  if (0 === userIds.length) {
    stateFromStores = obj;
  }
  return stateFromStores;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(43);
  ({ userIdsAndWishlistIds, numItems, applicationIds, source, filterByApplicationIds } = arg0);
  if (undefined === source) {
    source = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
  }
  if (cResult[0] !== userIdsAndWishlistIds) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(userId) {
        return userId.userId;
      };
      cResult[2] = fn;
      let tmp7 = fn;
    } else {
      tmp7 = cResult[2];
    }
    const mapped = userIdsAndWishlistIds.map(tmp7);
    cResult[0] = userIdsAndWishlistIds;
    cResult[1] = mapped;
  } else {
    if (cResult[3] === applicationIds) {
      if (cResult[4] === numItems) {
        if (cResult[5] === tmp5) {
          let tmp10 = cResult[6];
        }
        const tmp12 = closure_12(tmp10);
        let tmp13;
        if (tmp4) {
          tmp13 = applicationIds;
        }
        if (cResult[7] === source) {
          if (cResult[8] === tmp13) {
            if (cResult[9] === userIdsAndWishlistIds) {
              let tmp14 = cResult[10];
            }
            const tmp16 = closure_11(tmp14);
            ({ sortedWishlistSkus, wishlistSkuIdToSku } = tmp16);
            ({ wishlistSkusToUserAndReasonMap, wishlistErrors } = tmp16);
            const wishlistsAreFetching = tmp16.wishlistsAreFetching;
            if (null != tmp12) {
              if ("success" === tmp12.state) {
                if (cResult[12] === tmp12.data.skus) {
                  if (cResult[13] === wishlistSkuIdToSku) {
                    if (cResult[17] === tmp12.data.skusToUserAndReason) {
                    }
                    const obj2 = { filteredRecommendations: cResult[14], skusToUserAndReasonRecommendations: tmp12.data.skusToUserAndReason };
                    cResult[17] = tmp12.data.skusToUserAndReason;
                    cResult[18] = cResult[14];
                    cResult[19] = obj2;
                  }
                }
                if (cResult[15] !== wishlistSkuIdToSku) {
                  class M {
                    constructor(arg0) {
                      return !(arg0.id in wishlistSkuIdToSku);
                    }
                  }
                  cResult[15] = wishlistSkuIdToSku;
                  cResult[16] = M;
                } else {
                  class M {
                    constructor(arg0) {
                      return !(arg0.id in wishlistSkuIdToSku);
                    }
                  }
                }
                const skus = tmp12.data.skus;
                const found = skus.filter(M);
                cResult[12] = tmp12.data.skus;
                cResult[13] = wishlistSkuIdToSku;
                cResult[14] = found;
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              class M {
                constructor(arg0) {
                  return !(arg0.id in wishlistSkuIdToSku);
                }
              }
              tmp20[0] = [];
              tmp20[1] = {};
              cResult[11] = tmp20;
            } else {
              class M {
                constructor(arg0) {
                  return !(arg0.id in wishlistSkuIdToSku);
                }
              }
            }
            ({ filteredRecommendations, skusToUserAndReasonRecommendations } = tmp20);
            if (cResult[20] === skusToUserAndReasonRecommendations) {
              class M {
                constructor(arg0) {
                  return !(arg0.id in wishlistSkuIdToSku);
                }
              }
            }
            const merged = Object.assign(skusToUserAndReasonRecommendations);
            if (cResult[23] !== wishlistSkusToUserAndReasonMap) {
              class M {
                constructor(arg0) {
                  return !(arg0.id in wishlistSkuIdToSku);
                }
              }
              const _Object = Object;
              const entries = Object.entries(wishlistSkusToUserAndReasonMap);
              cResult[23] = wishlistSkusToUserAndReasonMap;
              cResult[24] = entries;
            } else {
              class M {
                constructor(arg0) {
                  return !(arg0.id in wishlistSkuIdToSku);
                }
              }
            }
            tmp30[Symbol.iterator]();
            const obj3 = {};
          }
        }
        const obj4 = { userIdsAndWishlistIds, source, applicationIdsFilter: tmp13 };
        cResult[7] = source;
        cResult[8] = tmp13;
        cResult[9] = userIdsAndWishlistIds;
        cResult[10] = obj4;
        tmp14 = obj4;
      }
    }
    const obj5 = { userIds: cResult[1], numItems, applicationIds };
    cResult[3] = applicationIds;
    cResult[4] = numItems;
    cResult[5] = cResult[1];
    cResult[6] = obj5;
    tmp10 = obj5;
  }
  tmp4 = undefined !== filterByApplicationIds && filterByApplicationIds;
}) : ((numItems) => {
  const userIdsAndWishlistIds = numItems.userIdsAndWishlistIds;
  ({ applicationIds, source } = numItems);
  if (source === undefined) {
    source = userIdsAndWishlistIds(sortedWishlistSkus[13]).WishlistFetchSource.USER_PROFILE;
  }
  let flag = numItems.filterByApplicationIds;
  if (flag === undefined) {
    flag = false;
  }
  sortedWishlistSkus = undefined;
  let wishlistSkuIdToSku;
  let wishlistSkusToUserAndReasonMap;
  let wishlistsAreFetching;
  let wishlistErrors;
  let recommendations;
  let skusToUserAndReasonRecommendations;
  let wishlistAndRecommendations;
  let items = [userIdsAndWishlistIds];
  const tmp3 = closure_12({ userIds: wishlistSkusToUserAndReasonMap.useMemo(() => userIdsAndWishlistIds.map((userId) => userId.userId), items), numItems: numItems.numItems, applicationIds });
  closure_1 = tmp3;
  let obj3 = { userIdsAndWishlistIds, source, applicationIdsFilter: null };
  let tmp5;
  if (flag) {
    tmp5 = applicationIds;
  }
  obj3.applicationIdsFilter = tmp5;
  const tmp4Result = closure_11(obj3);
  sortedWishlistSkus = tmp4Result.sortedWishlistSkus;
  wishlistSkuIdToSku = tmp4Result.wishlistSkuIdToSku;
  wishlistSkusToUserAndReasonMap = tmp4Result.wishlistSkusToUserAndReasonMap;
  wishlistsAreFetching = tmp4Result.wishlistsAreFetching;
  wishlistErrors = tmp4Result.wishlistErrors;
  const items1 = [tmp3, wishlistSkuIdToSku];
  const memo = obj.useMemo(() => {
    if (null != closure_1) {
      if ("success" === closure_1.state) {
        let obj = { filteredRecommendations: null, skusToUserAndReasonRecommendations: null };
        const skus = closure_1.data.skus;
        obj.filteredRecommendations = skus.filter((id) => !(id.id in wishlistSkuIdToSku));
        obj.skusToUserAndReasonRecommendations = closure_1.data.skusToUserAndReason;
      }
      return obj;
    }
    obj = { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} };
  }, items1);
  recommendations = memo.filteredRecommendations;
  skusToUserAndReasonRecommendations = memo.skusToUserAndReasonRecommendations;
  const items2 = [sortedWishlistSkus, recommendations, wishlistSkusToUserAndReasonMap, skusToUserAndReasonRecommendations];
  const skusToUserAndReason = obj.useMemo(() => {
    combinedSkusToUserAndReason = {};
    const merged = Object.assign(skusToUserAndReasonRecommendations);
    const entries = Object.entries(wishlistSkusToUserAndReasonMap);
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      [tmp7, tmp8] = tmp6;
      let obj2 = {};
      let merged1 = Object.assign(combinedSkusToUserAndReason[tmp7]);
      let merged2 = Object.assign(tmp8);
      combinedSkusToUserAndReason[tmp7] = obj2;
      continue;
    }
    const obj3 = { combinedSkus: null, combinedSkusToUserAndReason };
    const items = [...recommendations];
    obj3.combinedSkus = items;
    return obj3;
  }, items2);
  wishlistAndRecommendations = skusToUserAndReason.combinedSkus;
  const items3 = [wishlistsAreFetching, tmp3, wishlistErrors];
  const items4 = [recommendations, wishlistAndRecommendations];
  const status = obj.useMemo(() => {
    let str = "loading";
    if (!wishlistsAreFetching) {
      str = "loading";
      if (null != closure_1) {
        if (null == closure_1) {
          if (wishlistErrors.filter(GlobalUtils.isNotNullish).length > 0) {
            let str2 = "error";
          } else {
            str2 = "success";
          }
          str = str2;
        } else {
          str = "loading";
        }
      }
    }
    return str;
  }, items3);
  const memo3 = obj.useMemo(() => {
    const items = [...recommendations.map((id) => id.id), ...wishlistAndRecommendations.map((id) => id.id)];
    return _mod12.uniq(items);
  }, items4);
  let obj2 = { userIds: wishlistSkusToUserAndReasonMap.useMemo(() => userIdsAndWishlistIds.map((userId) => userId.userId), items), numItems: numItems.numItems, applicationIds };
  const getOrFetchStorefrontPricesForSkuIds = userIdsAndWishlistIds(sortedWishlistSkus[15]).useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo3 });
  return { recommendations, wishlistAndRecommendations, skusToUserAndReason: skusToUserAndReason.combinedSkusToUserAndReason, status };
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  _require = userId;
  const cResult = require("c").c(12);
  if (cResult[0] !== userId) {
    const fn = function o() {
      maybeFetchUserProfileDefault(closure_0);
    };
    const items = [userId];
    cResult[0] = userId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[3] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== userId) {
    const fn2 = function l() {
      return { defaultWishlistId: UserProfileStore.getFirstWishlistId(closure_0) };
    };
    cResult[4] = userId;
    cResult[5] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  const obj = require("c");
  const defaultWishlistId = require("initialize").useStateFromStoresObject(tmp7, tmp9).defaultWishlistId;
  if (cResult[6] === defaultWishlistId) {
    if (cResult[7] === userId) {
      let tmp10 = cResult[8];
    }
    if (cResult[9] === defaultWishlistId) {
      if (cResult[10] === tmp10) {
        let tmp11 = cResult[11];
      }
      return tmp11;
    }
    const obj2 = { userIdsAndWishlistIds: tmp10, defaultWishlistId };
    cResult[9] = defaultWishlistId;
    cResult[10] = tmp10;
    cResult[11] = obj2;
    tmp11 = obj2;
  }
  const items2 = [{ userId, wishlistId: defaultWishlistId }];
  cResult[6] = defaultWishlistId;
  cResult[7] = userId;
  cResult[8] = items2;
  tmp10 = items2;
  const obj3 = { userId, wishlistId: defaultWishlistId };
  const tmpResult = require("initialize");
}) : ((userId) => {
  _require = userId;
  let items = [userId];
  const effect = noop.useEffect(() => {
    maybeFetchUserProfileDefault(closure_0);
  }, items);
  const items1 = [UserProfileStore];
  const defaultWishlistId = require("initialize").useStateFromStoresObject(items1, () => ({ defaultWishlistId: UserProfileStore.getFirstWishlistId(closure_0) })).defaultWishlistId;
  const obj2 = { userIdsAndWishlistIds: null, defaultWishlistId };
  const items2 = [userId, defaultWishlistId];
  obj2.userIdsAndWishlistIds = noop.useMemo(() => {
    const items = [{ userId, wishlistId: defaultWishlistId }];
    return items;
  }, items2);
  return obj2;
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  _require = arr;
  const cResult = require("c").c(11);
  if (cResult[0] !== arr) {
    const fn = function o() {
      const item = closure_0.forEach((item) => {
        stateFromStoresArray(closure_1_2[16])(item);
      });
    };
    const items = [arr];
    cResult[0] = arr;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[3] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== arr) {
    const fn2 = function l() {
      return closure_0.map((item) => {
        firstWishlistId = firstWishlistId.getFirstWishlistId(item);
        if (firstWishlistId == null) {
          firstWishlistId = null;
        }
        return firstWishlistId;
      });
    };
    cResult[4] = arr;
    cResult[5] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  const obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp7, tmp9);
  if (cResult[6] === arr) {
    if (cResult[7] === stateFromStoresArray) {
      return cResult[8];
    }
  }
  if (cResult[9] !== stateFromStoresArray) {
    const fn3 = function h(userId, arg1) {
      return { userId, wishlistId: stateFromStoresArray[arg1] };
    };
    cResult[9] = stateFromStoresArray;
    cResult[10] = fn3;
    let tmp11 = fn3;
  } else {
    tmp11 = cResult[10];
  }
  const mapped = arr.map(tmp11);
  cResult[6] = arr;
  cResult[7] = stateFromStoresArray;
  cResult[8] = mapped;
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    const item = closure_0.forEach((item) => {
      stateFromStoresArray(closure_1_2[16])(item);
    });
  }, items);
  const items1 = [UserProfileStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => closure_0.map((item) => {
    firstWishlistId = firstWishlistId.getFirstWishlistId(item);
    if (firstWishlistId == null) {
      firstWishlistId = null;
    }
    return firstWishlistId;
  }));
  const items2 = [arg0, stateFromStoresArray];
  return noop.useMemo(() => closure_0.map((userId, index) => ({ userId, wishlistId: stateFromStoresArray[index] })), items2);
});
fn(558);
const importDefaultResult1 = new WishlistRecommendationRecord({ skus: [], skus_to_user_and_reason: {}, applications: [] });
let obj2 = { skus: [], skus_to_user_and_reason: {}, applications: [] };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ userId, numItems, source } = arg0);
  if (undefined === source) {
    source = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
  }
  ({ userIdsAndWishlistIds, defaultWishlistId } = closure_14(userId));
  const tmp4 = closure_14(userId);
  const wishlistApplicationIds = useWishlistApplicationIds.useWishlistApplicationIds(userId);
  if (cResult[0] === wishlistApplicationIds) {
    if (cResult[1] === numItems) {
      if (cResult[2] === source) {
        if (cResult[3] === userIdsAndWishlistIds) {
          let tmp6 = cResult[4];
        }
        ({ wishlistAndRecommendations, skusToUserAndReason, status } = closure_13(tmp6));
        if (cResult[5] === numItems) {
          if (cResult[6] === skusToUserAndReason) {
            if (cResult[7] === userId) {
              if (cResult[8] === wishlistAndRecommendations) {
                let tmp9 = cResult[9];
              }
              const wishlistSkuFilter = useWishlistSkuFilter.useWishlistSkuFilter(tmp9);
              ({ totalUnownedWishlistItemCount, slicedWishlistAndRecommendations } = wishlistSkuFilter);
              if (cResult[10] === defaultWishlistId) {
                if (cResult[11] === skusToUserAndReason) {
                  if (cResult[12] === slicedWishlistAndRecommendations) {
                    if (cResult[13] === status) {
                      if (cResult[14] === totalUnownedWishlistItemCount) {
                        let tmp11 = cResult[15];
                      }
                      return tmp11;
                    }
                  }
                }
              }
              const obj2 = { wishlistAndRecommendations: slicedWishlistAndRecommendations, skusToUserAndReason, status, defaultWishlistId, totalUnownedWishlistItemCount };
              cResult[10] = defaultWishlistId;
              cResult[11] = skusToUserAndReason;
              cResult[12] = slicedWishlistAndRecommendations;
              cResult[13] = status;
              cResult[14] = totalUnownedWishlistItemCount;
              cResult[15] = obj2;
              tmp11 = obj2;
              const tmpResult2 = useWishlistSkuFilter;
            }
          }
        }
        const obj3 = { wishlistAndRecommendations, skusToUserAndReason, userId, numItems };
        cResult[5] = numItems;
        cResult[6] = skusToUserAndReason;
        cResult[7] = userId;
        cResult[8] = wishlistAndRecommendations;
        cResult[9] = obj3;
        tmp9 = obj3;
        const tmp8 = closure_13(tmp6);
      }
    }
  }
  const obj4 = { userIdsAndWishlistIds, applicationIds: wishlistApplicationIds, numItems, source };
  cResult[0] = wishlistApplicationIds;
  cResult[1] = numItems;
  cResult[2] = source;
  cResult[3] = userIdsAndWishlistIds;
  cResult[4] = obj4;
  tmp6 = obj4;
  const tmpResult = useWishlistApplicationIds;
}) : ((arg0) => {
  ({ userId, numItems, source } = arg0);
  if (source === undefined) {
    source = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
  }
  ({ userIdsAndWishlistIds, defaultWishlistId } = closure_14(userId));
  const tmp3 = closure_14(userId);
  const obj2 = { userIdsAndWishlistIds, applicationIds: useWishlistApplicationIds.useWishlistApplicationIds(userId), numItems, source };
  ({ skusToUserAndReason, wishlistAndRecommendations, status } = closure_13({ userIdsAndWishlistIds, applicationIds: useWishlistApplicationIds.useWishlistApplicationIds(userId), numItems, source }));
  const tmp4 = closure_13({ userIdsAndWishlistIds, applicationIds: useWishlistApplicationIds.useWishlistApplicationIds(userId), numItems, source });
  const wishlistSkuFilter = useWishlistSkuFilter.useWishlistSkuFilter({ wishlistAndRecommendations, skusToUserAndReason, userId, numItems });
  return { wishlistAndRecommendations: wishlistSkuFilter.slicedWishlistAndRecommendations, skusToUserAndReason, status, defaultWishlistId, totalUnownedWishlistItemCount: wishlistSkuFilter.totalUnownedWishlistItemCount };
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ applicationIds, userIds, numItems, source } = arg0);
  if (undefined === source) {
    source = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
  }
  if (cResult[0] !== userIds) {
    let substr;
    if (userIds != null) {
      substr = userIds.slice(0, 5);
    }
    cResult[0] = userIds;
    cResult[1] = substr;
    let tmp4 = substr;
  } else {
    tmp4 = cResult[1];
  }
  const tmp7 = closure_15(tmp4);
  if (cResult[2] === applicationIds) {
    if (cResult[3] === numItems) {
      if (cResult[4] === source) {
        if (cResult[5] === tmp7) {
          let tmp8 = cResult[6];
        }
        ({ wishlistAndRecommendations, skusToUserAndReason, status } = closure_13(tmp8));
        if (cResult[7] === numItems) {
          if (cResult[8] === wishlistAndRecommendations) {
            let tmp11 = cResult[9];
          }
          if (cResult[10] === skusToUserAndReason) {
            if (cResult[11] === tmp11) {
              if (cResult[12] === status) {
                let tmp13 = cResult[13];
              }
              return tmp13;
            }
          }
          const obj2 = { recommendations: tmp11, skusToUserAndReason, status };
          cResult[10] = skusToUserAndReason;
          cResult[11] = tmp11;
          cResult[12] = status;
          cResult[13] = obj2;
          tmp13 = obj2;
        }
        const substr1 = wishlistAndRecommendations.slice(0, numItems);
        cResult[7] = numItems;
        cResult[8] = wishlistAndRecommendations;
        cResult[9] = substr1;
        tmp11 = substr1;
        const tmp10 = closure_13(tmp8);
      }
    }
  }
  const obj3 = { userIdsAndWishlistIds: tmp7, applicationIds, numItems, source, filterByApplicationIds: true };
  cResult[2] = applicationIds;
  cResult[3] = numItems;
  cResult[4] = source;
  cResult[5] = tmp7;
  cResult[6] = obj3;
  tmp8 = obj3;
}) : ((applicationIds) => {
  const userIds = applicationIds.userIds;
  const numItems = applicationIds.numItems;
  let USER_PROFILE = applicationIds.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
  }
  const items = [userIds];
  const tmp3 = closure_13({
    userIdsAndWishlistIds: closure_15(noop.useMemo(() => {
      let substr;
      if (userIds != null) {
        substr = userIds.slice(0, 5);
      }
      return substr;
    }, items)),
    applicationIds: applicationIds.applicationIds,
    numItems,
    source: USER_PROFILE,
    filterByApplicationIds: true
  });
  const wishlistAndRecommendations = tmp3.wishlistAndRecommendations;
  const obj2 = { recommendations: null, skusToUserAndReason, status };
  const items1 = [wishlistAndRecommendations, numItems];
  ({ skusToUserAndReason, status } = tmp3);
  obj2.recommendations = noop.useMemo(() => wishlistAndRecommendations.slice(0, numItems), items1);
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistRecommendations.tsx");

export const useWishlistRecommendationsForSingleUser = tmp4;
export const useRecommendationsForApplicationIds = tmp5;
export const useRecommendationsForSingleUser = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ userId, numItems, source } = arg0);
  if (undefined === source) {
    source = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
  }
  const userIdsAndWishlistIds = closure_14(userId).userIdsAndWishlistIds;
  const wishlistApplicationIds = useWishlistApplicationIds.useWishlistApplicationIds(userId);
  if (cResult[0] === wishlistApplicationIds) {
    if (cResult[1] === numItems) {
      if (cResult[2] === source) {
        if (cResult[3] === userIdsAndWishlistIds) {
          let tmp5 = cResult[4];
        }
        ({ recommendations, skusToUserAndReason, status } = closure_13(tmp5));
        if (cResult[5] === numItems) {
          if (cResult[6] === recommendations) {
            let tmp8 = cResult[7];
          }
          if (cResult[8] === skusToUserAndReason) {
            if (cResult[9] === tmp8) {
              if (cResult[10] === status) {
                let tmp10 = cResult[11];
              }
              return tmp10;
            }
          }
          const obj2 = { recommendations: tmp8, skusToUserAndReason, status };
          cResult[8] = skusToUserAndReason;
          cResult[9] = tmp8;
          cResult[10] = status;
          cResult[11] = obj2;
          tmp10 = obj2;
        }
        const substr = recommendations.slice(0, numItems);
        cResult[5] = numItems;
        cResult[6] = recommendations;
        cResult[7] = substr;
        tmp8 = substr;
        const tmp7 = closure_13(tmp5);
      }
    }
  }
  const obj3 = { userIdsAndWishlistIds, applicationIds: wishlistApplicationIds, numItems, source };
  cResult[0] = wishlistApplicationIds;
  cResult[1] = numItems;
  cResult[2] = source;
  cResult[3] = userIdsAndWishlistIds;
  cResult[4] = obj3;
  tmp5 = obj3;
  const tmpResult = useWishlistApplicationIds;
}) : ((source) => {
  ({ userId, numItems } = source);
  let USER_PROFILE = source.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
  }
  const tmp3 = closure_13({ userIdsAndWishlistIds: closure_14(userId).userIdsAndWishlistIds, applicationIds: useWishlistApplicationIds.useWishlistApplicationIds(userId), numItems, source: USER_PROFILE });
  const recommendations = tmp3.recommendations;
  const obj3 = { recommendations: null, skusToUserAndReason, status };
  const items = [recommendations, numItems];
  ({ skusToUserAndReason, status } = tmp3);
  obj3.recommendations = noop.useMemo(() => recommendations.slice(0, numItems), items);
  return obj3;
});