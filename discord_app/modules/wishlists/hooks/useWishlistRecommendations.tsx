// discord_app/modules/wishlists/hooks/useWishlistRecommendations.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import react2 from "../../../../_runtime/00576_react.js";
import DurationsDefault from "../../../utils/Durations.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import WishlistRecommendationRecord2 from "../records/WishlistRecommendationRecord.tsx";
import maybeFetchUserProfileDefault from "../../user_profile/maybeFetchUserProfile.tsx";
import WishlistFetchSource from "../WishlistFetchSource.tsx";
import WishlistActionCreatorsDefault from "../WishlistActionCreators.tsx";
import useGetOrFetchStorefrontPrices from "../../storefront/hooks/useGetOrFetchStorefrontPrices.tsx";
import useWishlistApplicationIds from "useWishlistApplicationIds.native.tsx";
import useWishlistSkuFilter from "useWishlistSkuFilter.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import WishlistRecommendationsStore from "../WishlistRecommendationsStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const WishlistRecommendationRecord = WishlistRecommendationRecord2;
let _require, dependencyMap, firstWishlistId;

let obj2;
const constants = WishlistRecommendationRecord2.WishlistRecommendationReason;
let closure_9 = 30 * DurationsDefault.Millis.MINUTE;
let combinedSkusToUserAndReason = { state: "success", data: new WishlistRecommendationRecord(obj2), fetchedAt: 0 };
obj2 = { skus: [], skus_to_user_and_reason: {}, applications: [] };
new WishlistRecommendationRecord(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let applicationIdsFilter;
      let closure_2;
      let errors;
      let id;
      let isFetching;
      let source;
      let tmp4;
      let tmp5;
      let userIdsAndWishlistIds;
      let wishlists;
      let obj = applicationIdsFilter(576);
      const cResult = obj.c(30);
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
      const tmpResult = applicationIdsFilter(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === source) {
        let tmp8;
        if (cResult[3] === userIdsAndWishlistIds) {
          tmp8 = cResult[4];
        }
        const tmpResult2 = applicationIdsFilter(8463);
        const fetchWishlists = tmpResult2.useFetchWishlists(tmp8);
        ({ wishlists, isFetching, errors } = fetchWishlists);
        if (cResult[5] === applicationIdsFilter) {
          let tmp10;
          if (cResult[6] === wishlists) {
            tmp10 = cResult[7];
          }
          dependencyMap = tmp10;
          if (cResult[8] === applicationIdsFilter) {
            let tmp29;
            let tmp38;
            if (cResult[9] === wishlists) {
              tmp29 = cResult[10];
            }
            let closure_3 = tmp29;
            if (cResult[15] === stateFromStores) {
              if (cResult[16] === tmp29) {
                if (cResult[17] === tmp10) {
                  tmp38 = cResult[18];
                }
                if (cResult[24] === tmp38) {
                  if (cResult[25] === errors) {
                    if (cResult[26] === tmp29) {
                      if (cResult[27] === tmp10) {
                        let tmp42;
                        if (cResult[28] === isFetching) {
                          tmp42 = cResult[29];
                        }
                        return tmp42;
                      }
                    }
                  }
                }
                let obj2 = {
                  sortedWishlistSkus: tmp38,
                  wishlistSkuIdToSku: tmp29,
                  wishlistSkusToUserAndReasonMap: tmp10,
                  wishlistsAreFetching: isFetching,
                  wishlistErrors: errors,
                };
                cResult[24] = tmp38;
                cResult[25] = errors;
                cResult[26] = tmp29;
                cResult[27] = tmp10;
                cResult[28] = isFetching;
                cResult[29] = obj2;
                tmp42 = obj2;
              }
            }
            if (cResult[19] === stateFromStores) {
              let tmp39;
              if (cResult[20] === tmp10) {
                tmp39 = cResult[21];
              }
              const _Object2 = Object;
              const keys = Object.keys(tmp29);
              const sorted = keys.sort(tmp39);
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
              tmp38 = mapped;
            }
            const fn2 = function y(arg0, arg1) {
              let obj = closure_2[arg1];
              if (obj == null) {
                obj = {};
              }
              let obj2 = closure_2[arg0];
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
                const NumberResult = Number(Boolean(obj2[stateFromStores]));
                return NumberResult - Number(BooleanResult);
              }
            };
            cResult[19] = stateFromStores;
            cResult[20] = tmp10;
            cResult[21] = fn2;
            tmp39 = fn2;
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
          const flatMapResult = found.flatMap(tmp31);
          const found1 = flatMapResult.filter(tmp33);
          const fromEntriesResult = fromEntries(found1.map(T));
          cResult[8] = applicationIdsFilter;
          cResult[9] = wishlists;
          cResult[10] = fromEntriesResult;
          tmp29 = fromEntriesResult;
        }
        const found2 = wishlists.filter(applicationIdsFilter(1375).isNotNullish);
        const obj3 = {};
        const iter = found2[Symbol.iterator]();
        const nextResult = iter.next();
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
              let tmp22;
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
                tmp22 = !applicationIdsFilter.includes(tmp21.sku.applicationId);
              }
              isOwned = tmp22;
            }
            if (!isOwned) {
              let tmp23;
              class M {
                constructor(arg0) {
                  return closure_3[arg0];
                }
              }
              let skuId = tmp21.skuId;
              if (null != obj3[tmp21.skuId]) {
                class M {
                  constructor(arg0) {
                    return closure_3[arg0];
                  }
                }
                tmp23 = obj3[tmp21.skuId];
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
              obj3[skuId] = obj4;
            }
            continue;
          }
          continue;
        }
        cResult[5] = applicationIdsFilter;
        cResult[6] = wishlists;
        cResult[7] = obj3;
        tmp10 = obj3;
      }
      const obj5 = { wishlistIdsAndUsers: userIdsAndWishlistIds, source };
      cResult[2] = source;
      cResult[3] = userIdsAndWishlistIds;
      cResult[4] = obj5;
      tmp8 = obj5;
    }
  : (applicationIdsFilter) => {
      let errors;
      let id;
      let isFetching;
      let items3;
      let source;
      let userIdsAndWishlistIds;
      applicationIdsFilter = applicationIdsFilter.applicationIdsFilter;
      let wishlists;
      let memo1;
      ({ userIdsAndWishlistIds, source } = applicationIdsFilter);
      let obj = applicationIdsFilter(wishlists[9]);
      let items = [AuthenticationStore];
      const stateFromStores = obj.useStateFromStores(items, () => id.getId());
      let obj2 = applicationIdsFilter(wishlists[10]);
      const fetchWishlists = obj2.useFetchWishlists({ wishlistIdsAndUsers: userIdsAndWishlistIds, source });
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
            let isOwned = null == item10023.sku || item10023.isOwned;
            if (!isOwned) {
              let tmp8 = null != applicationIdsFilter && !applicationIdsFilter.includes(item10023.sku.applicationId);
              isOwned = tmp8;
            }
            if (!isOwned) {
              let obj3;
              let skuId = item10023.skuId;
              if (null != obj[item10023.skuId]) {
                obj3 = obj[item10023.skuId];
              } else {
                obj3 = {};
              }
              let obj4 = {};
              let merged = Object.assign(obj3);
              obj4[tmp3.userId] = constants.WISHLIST;
              obj[skuId] = obj4;
            }
            continue;
          }
          continue;
        }
        return obj;
      }, items1);
      const items2 = [wishlists, applicationIdsFilter];
      memo1 = memo1.useMemo(() => {
        const found = wishlists.filter(GlobalUtils.isNotNullish);
        const flatMapResult = found.flatMap((items) => items.items);
        const found1 = flatMapResult.filter((sku) => {
          let tmp = null != sku && null != sku.sku && !sku.isOwned;
          if (tmp) {
            tmp = null == applicationIdsFilter || applicationIdsFilter.includes(sku.sku.applicationId);
            null == applicationIdsFilter || applicationIdsFilter.includes(sku.sku.applicationId);
          }
          return tmp;
        });
        return fromEntries(
          found1.map((item) => {
            const items = [,];
            ({ skuId: arr[0], sku: arr[1] } = item);
            return items;
          }),
        );
      }, items2);
      let obj3 = {
        sortedWishlistSkus: memo1.useMemo(() => {
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
              const NumberResult = Number(Boolean(obj2[stateFromStores]));
              return NumberResult - Number(BooleanResult);
            }
          });
          return sorted.map((item) => memo1[item]);
        }, items3),
        wishlistSkuIdToSku: memo1,
        wishlistSkusToUserAndReasonMap: memo,
        wishlistsAreFetching: isFetching,
        wishlistErrors: errors,
      };
      items3 = [stateFromStores, memo1, memo];
      return obj3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userIds) => {
      let applicationIds;
      let first;
      let obj = userIds(applicationIds[8]);
      const cResult = obj.c(9);
      const tmp = userIds;
      userIds = userIds.userIds;
      const numItems = userIds.numItems;
      const tmp2 = applicationIds;
      applicationIds = userIds.applicationIds;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [WishlistRecommendationsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === applicationIds) {
        let tmp6;
        if (cResult[2] === userIds) {
          tmp6 = cResult[3];
        }
        const tmpResult = tmp(tmp2[9]);
        let stateFromStores = tmpResult.useStateFromStores(first, tmp6);
        if (cResult[4] === applicationIds) {
          if (cResult[5] === numItems) {
            let tmp8;
            let tmp9;
            if (cResult[6] === userIds) {
              tmp8 = cResult[7];
              tmp9 = cResult[8];
            }
            const effect = react.useEffect(tmp8, tmp9);
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
              const obj = WishlistActionCreatorsDefault;
              const wishlistRecommendations = obj.fetchWishlistRecommendations(applicationIds, userIds, numItems);
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
      }
      const fn = function o() {
        return WishlistRecommendationsStore.getRecommendations(userIds, applicationIds);
      };
      cResult[1] = applicationIds;
      cResult[2] = userIds;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (userIds) => {
      userIds = userIds.userIds;
      const numItems = userIds.numItems;
      const applicationIds = userIds.applicationIds;
      let obj = userIds(applicationIds[9]);
      const items = [WishlistRecommendationsStore];
      let stateFromStores = obj.useStateFromStores(items, () =>
        WishlistRecommendationsStore.getRecommendations(userIds, applicationIds),
      );
      const items1 = [userIds, applicationIds, numItems];
      const effect = react.useEffect(() => {
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
            const obj = WishlistActionCreatorsDefault;
            const wishlistRecommendations = obj.fetchWishlistRecommendations(applicationIds, userIds, numItems);
          }
        }
      }, items1);
      if (0 === userIds.length) {
        stateFromStores = obj;
      }
      return stateFromStores;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let applicationIds;
      let combinedSkus;
      let filterByApplicationIds;
      let filteredRecommendations;
      let numItems;
      let skusToUserAndReasonRecommendations;
      let sortedWishlistSkus;
      let source;
      let tmp38;
      let tmp39;
      let tmp51;
      let tmp6;
      let userIdsAndWishlistIds;
      let wishlistErrors;
      let wishlistSkuIdToSku;
      let wishlistSkusToUserAndReasonMap;
      const obj = react2;
      const cResult = obj.c(43);
      ({ userIdsAndWishlistIds, numItems, applicationIds, source, filterByApplicationIds } = arg0);
      if (undefined === source) {
        source = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
      }
      const tmp5 = undefined !== filterByApplicationIds && filterByApplicationIds;
      if (cResult[0] !== userIdsAndWishlistIds) {
        let tmp8;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function o(userId) {
            return userId.userId;
          };
          cResult[2] = fn;
          tmp8 = fn;
        } else {
          tmp8 = cResult[2];
        }
        const mapped = userIdsAndWishlistIds.map(tmp8);
        cResult[0] = userIdsAndWishlistIds;
        cResult[1] = mapped;
        tmp6 = mapped;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[3] === applicationIds) {
        if (cResult[4] === numItems) {
          let tmp10;
          if (cResult[5] === tmp6) {
            tmp10 = cResult[6];
          }
          const tmp12 = closure_12(tmp10);
          let tmp13;
          if (tmp5) {
            tmp13 = applicationIds;
          }
          if (cResult[7] === source) {
            if (cResult[8] === tmp13) {
              let tmp14;
              let tmp20;
              if (cResult[9] === userIdsAndWishlistIds) {
                tmp14 = cResult[10];
              }
              const tmp16 = closure_11(tmp14);
              ({ sortedWishlistSkus, wishlistSkuIdToSku } = tmp16);
              ({ wishlistSkusToUserAndReasonMap, wishlistErrors } = tmp16);
              if (null != tmp12) {
                if ("success" === tmp12.state) {
                  if (cResult[12] === tmp12.data.skus) {
                    let tmp22;
                    if (cResult[13] === wishlistSkuIdToSku) {
                      tmp22 = cResult[14];
                    }
                    if (cResult[17] === tmp12.data.skusToUserAndReason) {
                      let tmp25;
                      if (cResult[18] === tmp22) {
                        tmp25 = cResult[19];
                      }
                      tmp20 = tmp25;
                    }
                    const obj2 = {
                      filteredRecommendations: tmp22,
                      skusToUserAndReasonRecommendations: tmp12.data.skusToUserAndReason,
                    };
                    cResult[17] = tmp12.data.skusToUserAndReason;
                    cResult[18] = tmp22;
                    cResult[19] = obj2;
                    tmp25 = obj2;
                  }
                  if (cResult[15] !== wishlistSkuIdToSku) {
                    class M {
                      constructor(id) {
                        return !(id.id in wishlistSkuIdToSku);
                      }
                    }
                    cResult[15] = wishlistSkuIdToSku;
                    cResult[16] = M;
                  } else {
                    class M {
                      constructor(id) {
                        return !(id.id in wishlistSkuIdToSku);
                      }
                    }
                  }
                  const skus = tmp12.data.skus;
                  const found = skus.filter(M);
                  cResult[12] = tmp12.data.skus;
                  cResult[13] = wishlistSkuIdToSku;
                  cResult[14] = found;
                  tmp22 = found;
                }
                ({ filteredRecommendations, skusToUserAndReasonRecommendations } = tmp20);
                if (cResult[20] === skusToUserAndReasonRecommendations) {
                  class M {
                    constructor(id) {
                      return !(id.id in wishlistSkuIdToSku);
                    }
                  }
                  if (cResult[25] === filteredRecommendations) {
                    class M {
                      constructor(id) {
                        return !(id.id in wishlistSkuIdToSku);
                      }
                    }
                    if (cResult[28] === tmp26) {
                      class M {
                        constructor(id) {
                          return !(id.id in wishlistSkuIdToSku);
                        }
                      }
                      ({ combinedSkus, combinedSkusToUserAndReason } = tmp51);
                      if (!tmp17) {
                        class M {
                          constructor(id) {
                            return !(id.id in wishlistSkuIdToSku);
                          }
                        }
                        if (null != tmp12) {
                          class M {
                            constructor(id) {
                              return !(id.id in wishlistSkuIdToSku);
                            }
                          }
                        }
                      }
                      if (cResult[31] === combinedSkus) {
                        class M {
                          constructor(id) {
                            return !(id.id in wishlistSkuIdToSku);
                          }
                        }
                        if (cResult[36] !== tmp52) {
                          class M {
                            constructor(id) {
                              return !(id.id in wishlistSkuIdToSku);
                            }
                          }
                          tmp65[0] = tmp52;
                          cResult[36] = tmp52;
                          cResult[37] = tmp65;
                        } else {
                          class M {
                            constructor(id) {
                              return !(id.id in wishlistSkuIdToSku);
                            }
                          }
                        }
                        const obj8 = useGetOrFetchStorefrontPrices;
                        const getOrFetchStorefrontPricesForSkuIds = obj8.useGetOrFetchStorefrontPricesForSkuIds(tmp65);
                        if (cResult[38] === combinedSkus) {
                          class M {
                            constructor(id) {
                              return !(id.id in wishlistSkuIdToSku);
                            }
                          }
                        }
                        const obj3 = {
                          recommendations: filteredRecommendations,
                          wishlistAndRecommendations: combinedSkus,
                          skusToUserAndReason: combinedSkusToUserAndReason,
                          status: "loading",
                        };
                        cResult[38] = combinedSkus;
                        cResult[39] = combinedSkusToUserAndReason;
                        cResult[40] = filteredRecommendations;
                        cResult[41] = "loading";
                        cResult[42] = obj3;
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                        class Q {
                          constructor(id) {
                            return id.id;
                          }
                        }
                        cResult[34] = Q;
                      } else {
                        class Q {
                          constructor(id) {
                            return id.id;
                          }
                        }
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                        class V {
                          constructor(id) {
                            return id.id;
                          }
                        }
                        cResult[35] = V;
                      } else {
                        class V {
                          constructor(id) {
                            return id.id;
                          }
                        }
                      }
                      const uniq = _mod12.uniq;
                      const items = [];
                      _mod12;
                      const arraySpreadResult = HermesBuiltin.arraySpread(items, filteredRecommendations.map(Q), 0);
                      HermesBuiltin.arraySpread(items, combinedSkus.map(V), arraySpreadResult);
                      cResult[31] = combinedSkus;
                      cResult[32] = filteredRecommendations;
                      cResult[33] = uniq(items);
                      const uniqResult = uniq(items);
                    }
                    const obj4 = { combinedSkus: tmp45, combinedSkusToUserAndReason: tmp26 };
                    cResult[28] = tmp26;
                    cResult[29] = tmp45;
                    cResult[30] = obj4;
                    tmp51 = obj4;
                  }
                  const items1 = [];
                  HermesBuiltin.arraySpread(
                    items1,
                    filteredRecommendations,
                    HermesBuiltin.arraySpread(items1, sortedWishlistSkus, 0),
                  );
                  cResult[25] = filteredRecommendations;
                  cResult[26] = sortedWishlistSkus;
                  cResult[27] = items1;
                }
                const obj5 = {};
                const merged = Object.assign(skusToUserAndReasonRecommendations);
                if (cResult[23] !== wishlistSkusToUserAndReasonMap) {
                  class V {
                    constructor(id) {
                      return id.id;
                    }
                  }
                  const _Object = Object;
                  const entries = Object.entries(wishlistSkusToUserAndReasonMap);
                  cResult[23] = wishlistSkusToUserAndReasonMap;
                  cResult[24] = entries;
                } else {
                  class V {
                    constructor(id) {
                      return id.id;
                    }
                  }
                }
                const tmp33 = tmp30[Symbol.iterator]();
                while (tmp33 !== undefined) {
                  class V {
                    constructor(id) {
                      return id.id;
                    }
                  }
                  let tmp37 = _slicedToArray(tmp35, 2);
                  [tmp38, tmp39] = tmp37;
                  let obj6 = {};
                  let merged1 = Object.assign(obj5[tmp38]);
                  let merged2 = Object.assign(tmp39);
                  obj5[tmp38] = obj6;
                  continue;
                }
                cResult[20] = skusToUserAndReasonRecommendations;
                cResult[21] = wishlistSkusToUserAndReasonMap;
                cResult[22] = obj5;
              }
              const _Symbol2 = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                class V {
                  constructor(id) {
                    return id.id;
                  }
                }
                tmp21[0] = [];
                tmp21[1] = {};
                cResult[11] = tmp21;
                tmp20 = tmp21;
              } else {
                class V {
                  constructor(id) {
                    return id.id;
                  }
                }
              }
            }
          }
          const obj7 = { userIdsAndWishlistIds, source, applicationIdsFilter: tmp13 };
          cResult[7] = source;
          cResult[8] = tmp13;
          cResult[9] = userIdsAndWishlistIds;
          cResult[10] = obj7;
          tmp14 = obj7;
        }
      }
      const obj9 = { userIds: tmp6, numItems, applicationIds };
      cResult[3] = applicationIds;
      cResult[4] = numItems;
      cResult[5] = tmp6;
      cResult[6] = obj9;
      tmp10 = obj9;
    }
  : (userIdsAndWishlistIds) => {
      let applicationIds;
      let sortedWishlistSkus;
      let source;
      let tmp5;
      userIdsAndWishlistIds = userIdsAndWishlistIds.userIdsAndWishlistIds;
      ({ applicationIds, source } = userIdsAndWishlistIds);
      const numItems = userIdsAndWishlistIds.numItems;
      if (source === undefined) {
        source = userIdsAndWishlistIds(sortedWishlistSkus[13]).WishlistFetchSource.USER_PROFILE;
      }
      let flag = userIdsAndWishlistIds.filterByApplicationIds;
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
      let obj = wishlistSkusToUserAndReasonMap;
      let items = [userIdsAndWishlistIds];
      let obj2 = {
        userIds: wishlistSkusToUserAndReasonMap.useMemo(
          () => userIdsAndWishlistIds.map((userId) => userId.userId),
          items,
        ),
        numItems,
        applicationIds,
      };
      let tmp3 = closure_12(obj2);
      let closure_1 = tmp3;
      let obj3 = { userIdsAndWishlistIds, source, applicationIdsFilter: tmp5 };
      tmp5 = undefined;
      if (flag) {
        tmp5 = applicationIds;
      }
      const tmp4Result = closure_11(obj3);
      sortedWishlistSkus = tmp4Result.sortedWishlistSkus;
      wishlistSkuIdToSku = tmp4Result.wishlistSkuIdToSku;
      wishlistSkusToUserAndReasonMap = tmp4Result.wishlistSkusToUserAndReasonMap;
      wishlistsAreFetching = tmp4Result.wishlistsAreFetching;
      wishlistErrors = tmp4Result.wishlistErrors;
      const items1 = [tmp3, wishlistSkuIdToSku];
      const memo = obj.useMemo(() => {
        let skus;
        if (null != closure_1) {
          let obj;
          if ("success" === closure_1.state) {
            obj = {
              filteredRecommendations: skus.filter((id) => !(id.id in wishlistSkuIdToSku)),
              skusToUserAndReasonRecommendations: closure_1.data.skusToUserAndReason,
            };
            skus = closure_1.data.skus;
          }
          return obj;
        }
        obj = { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} };
      }, items1);
      recommendations = memo.filteredRecommendations;
      skusToUserAndReasonRecommendations = memo.skusToUserAndReasonRecommendations;
      const items2 = [
        sortedWishlistSkus,
        recommendations,
        wishlistSkusToUserAndReasonMap,
        skusToUserAndReasonRecommendations,
      ];
      const memo1 = obj.useMemo(() => {
        let items;
        let tmp7;
        let tmp8;
        combinedSkusToUserAndReason = {};
        const merged = Object.assign(skusToUserAndReasonRecommendations);
        const entries = Object.entries(wishlistSkusToUserAndReasonMap);
        const tmp3 = entries[Symbol.iterator]();
        while (tmp3 !== undefined) {
          let tmp6 = _slicedToArray(tmp4, 2);
          [tmp7, tmp8] = tmp6;
          let obj2 = {};
          let merged1 = Object.assign(combinedSkusToUserAndReason[tmp7]);
          let merged2 = Object.assign(tmp8);
          combinedSkusToUserAndReason[tmp7] = obj2;
          continue;
        }
        const obj3 = { combinedSkus: items, combinedSkusToUserAndReason };
        items = [...recommendations];
        return obj3;
      }, items2);
      wishlistAndRecommendations = memo1.combinedSkus;
      const items3 = [wishlistsAreFetching, tmp3, wishlistErrors];
      const skusToUserAndReason = memo1.combinedSkusToUserAndReason;
      const items4 = [recommendations, wishlistAndRecommendations];
      const status = obj.useMemo(() => {
        let str = "loading";
        if (!wishlistsAreFetching) {
          str = "loading";
          if (null != closure_1) {
            if (null == closure_1) {
              let str2;
              if (wishlistErrors.filter(GlobalUtils.isNotNullish).length > 0) {
                str2 = "error";
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
        const obj = _mod12;
        return obj.uniq(items);
      }, items4);
      const obj4 = userIdsAndWishlistIds(sortedWishlistSkus[15]);
      const getOrFetchStorefrontPricesForSkuIds = obj4.useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo3 });
      return { recommendations, wishlistAndRecommendations, skusToUserAndReason, status };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp9;
      _require = userId;
      let obj = require("react");
      const cResult = obj.c(12);
      const tmp = _require;
      if (cResult[0] !== userId) {
        const fn = function o() {
          maybeFetchUserProfileDefault(userId);
        };
        const items = [userId];
        cResult[0] = userId;
        cResult[1] = fn;
        cResult[2] = items;
        tmp5 = items;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserProfileStore];
        cResult[3] = items1;
        tmp7 = items1;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== userId) {
        const fn2 = function l() {
          const obj = { defaultWishlistId: UserProfileStore.getFirstWishlistId(userId) };
          return obj;
        };
        cResult[4] = userId;
        cResult[5] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[5];
      }
      const tmpResult = tmp(504);
      const defaultWishlistId = tmpResult.useStateFromStoresObject(tmp7, tmp9).defaultWishlistId;
      if (cResult[6] === defaultWishlistId) {
        let tmp10;
        if (cResult[7] === userId) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === defaultWishlistId) {
          let tmp11;
          if (cResult[10] === tmp10) {
            tmp11 = cResult[11];
          }
          return tmp11;
        }
        const obj2 = { userIdsAndWishlistIds: tmp10, defaultWishlistId };
        cResult[9] = defaultWishlistId;
        cResult[10] = tmp10;
        cResult[11] = obj2;
        tmp11 = obj2;
      }
      const items2 = [];
      const obj3 = { userId, wishlistId: defaultWishlistId };
      items2[0] = obj3;
      cResult[6] = defaultWishlistId;
      cResult[7] = userId;
      cResult[8] = items2;
      tmp10 = items2;
    }
  : (userId) => {
      let items2;
      _require = userId;
      let items = [userId];
      const effect = react.useEffect(() => {
        maybeFetchUserProfileDefault(userId);
      }, items);
      let obj = require("get initialized");
      const items1 = [UserProfileStore];
      const defaultWishlistId = obj.useStateFromStoresObject(items1, () => {
        const obj = { defaultWishlistId: UserProfileStore.getFirstWishlistId(userId) };
        return obj;
      }).defaultWishlistId;
      const obj2 = {
        userIdsAndWishlistIds: react.useMemo(() => {
          const items = [];
          const obj = { userId, wishlistId: defaultWishlistId };
          items[0] = obj;
          return items;
        }, items2),
        defaultWishlistId,
      };
      items2 = [userId, defaultWishlistId];
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp9;
      _require = arr;
      const obj = require("react");
      const cResult = obj.c(11);
      const tmp = _require;
      if (cResult[0] !== arr) {
        const fn = function o() {
          const item = arr.forEach((item) => {
            stateFromStoresArray(closure_1_2[16])(item);
          });
        };
        const items = [arr];
        cResult[0] = arr;
        cResult[1] = fn;
        cResult[2] = items;
        tmp5 = items;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserProfileStore];
        cResult[3] = items1;
        tmp7 = items1;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== arr) {
        const fn2 = function l() {
          return arr.map((item) => {
            firstWishlistId = firstWishlistId.getFirstWishlistId(item);
            if (firstWishlistId == null) {
              firstWishlistId = null;
            }
            return firstWishlistId;
          });
        };
        cResult[4] = arr;
        cResult[5] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[5];
      }
      const tmpResult = tmp(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp7, tmp9);
      if (cResult[6] === arr) {
        let tmp11;
        if (cResult[7] === stateFromStoresArray) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
      if (cResult[9] !== stateFromStoresArray) {
        const fn3 = function h(userId, arg1) {
          return { userId, wishlistId: stateFromStoresArray[arg1] };
        };
        cResult[9] = stateFromStoresArray;
        cResult[10] = fn3;
        tmp12 = fn3;
      } else {
        tmp12 = cResult[10];
      }
      const mapped = arr.map(tmp12);
      cResult[6] = arr;
      cResult[7] = stateFromStoresArray;
      cResult[8] = mapped;
      tmp11 = mapped;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [arg0];
      const effect = react.useEffect(() => {
        const item = closure_0.forEach((item) => {
          stateFromStoresArray(closure_1_2[16])(item);
        });
      }, items);
      const items1 = [UserProfileStore];
      const obj = require("get initialized");
      const stateFromStoresArray = obj.useStateFromStoresArray(items1, () =>
        closure_0.map((item) => {
          firstWishlistId = firstWishlistId.getFirstWishlistId(item);
          if (firstWishlistId == null) {
            firstWishlistId = null;
          }
          return firstWishlistId;
        }),
      );
      const items2 = [arg0, stateFromStoresArray];
      return react.useMemo(
        () => closure_0.map((userId, index) => ({ userId, wishlistId: stateFromStoresArray[index] })),
        items2,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let defaultWishlistId;
      let numItems;
      let skusToUserAndReason;
      let slicedWishlistAndRecommendations;
      let source;
      let status;
      let totalUnownedWishlistItemCount;
      let userId;
      let userIdsAndWishlistIds;
      let wishlistAndRecommendations;
      const obj = react2;
      const cResult = obj.c(16);
      ({ userId, numItems, source } = arg0);
      if (undefined === source) {
        source = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
      }
      ({ userIdsAndWishlistIds, defaultWishlistId } = closure_14(userId));
      closure_14(userId);
      const tmpResult = useWishlistApplicationIds;
      const wishlistApplicationIds = tmpResult.useWishlistApplicationIds(userId);
      if (cResult[0] === wishlistApplicationIds) {
        if (cResult[1] === numItems) {
          if (cResult[2] === source) {
            let tmp6;
            if (cResult[3] === userIdsAndWishlistIds) {
              tmp6 = cResult[4];
            }
            ({ wishlistAndRecommendations, skusToUserAndReason, status } = closure_13(tmp6));
            closure_13(tmp6);
            if (cResult[5] === numItems) {
              if (cResult[6] === skusToUserAndReason) {
                if (cResult[7] === userId) {
                  let tmp9;
                  if (cResult[8] === wishlistAndRecommendations) {
                    tmp9 = cResult[9];
                  }
                  const tmpResult2 = useWishlistSkuFilter;
                  const wishlistSkuFilter = tmpResult2.useWishlistSkuFilter(tmp9);
                  ({ totalUnownedWishlistItemCount, slicedWishlistAndRecommendations } = wishlistSkuFilter);
                  if (cResult[10] === defaultWishlistId) {
                    if (cResult[11] === skusToUserAndReason) {
                      if (cResult[12] === slicedWishlistAndRecommendations) {
                        if (cResult[13] === status) {
                          let tmp11;
                          if (cResult[14] === totalUnownedWishlistItemCount) {
                            tmp11 = cResult[15];
                          }
                          return tmp11;
                        }
                      }
                    }
                  }
                  const obj2 = {
                    wishlistAndRecommendations: slicedWishlistAndRecommendations,
                    skusToUserAndReason,
                    status,
                    defaultWishlistId,
                    totalUnownedWishlistItemCount,
                  };
                  cResult[10] = defaultWishlistId;
                  cResult[11] = skusToUserAndReason;
                  cResult[12] = slicedWishlistAndRecommendations;
                  cResult[13] = status;
                  cResult[14] = totalUnownedWishlistItemCount;
                  cResult[15] = obj2;
                  tmp11 = obj2;
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
    }
  : (arg0) => {
      let defaultWishlistId;
      let numItems;
      let skusToUserAndReason;
      let source;
      let status;
      let userId;
      let userIdsAndWishlistIds;
      let wishlistAndRecommendations;
      ({ userId, numItems, source } = arg0);
      if (source === undefined) {
        source = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
      }
      ({ userIdsAndWishlistIds, defaultWishlistId } = closure_14(userId));
      closure_14(userId);
      const obj = useWishlistApplicationIds;
      const obj2 = { userIdsAndWishlistIds, applicationIds: obj.useWishlistApplicationIds(userId), numItems, source };
      ({ skusToUserAndReason, wishlistAndRecommendations, status } = closure_13(obj2));
      closure_13(obj2);
      const obj3 = useWishlistSkuFilter;
      const wishlistSkuFilter = obj3.useWishlistSkuFilter({
        wishlistAndRecommendations,
        skusToUserAndReason,
        userId,
        numItems,
      });
      return {
        wishlistAndRecommendations: wishlistSkuFilter.slicedWishlistAndRecommendations,
        skusToUserAndReason,
        status,
        defaultWishlistId,
        totalUnownedWishlistItemCount: wishlistSkuFilter.totalUnownedWishlistItemCount,
      };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let applicationIds;
      let numItems;
      let skusToUserAndReason;
      let source;
      let status;
      let tmp4;
      let userIds;
      let wishlistAndRecommendations;
      const obj = react2;
      const cResult = obj.c(14);
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
        tmp4 = substr;
      } else {
        tmp4 = cResult[1];
      }
      const tmp7 = closure_15(tmp4);
      if (cResult[2] === applicationIds) {
        if (cResult[3] === numItems) {
          if (cResult[4] === source) {
            let tmp8;
            if (cResult[5] === tmp7) {
              tmp8 = cResult[6];
            }
            ({ wishlistAndRecommendations, skusToUserAndReason, status } = closure_13(tmp8));
            closure_13(tmp8);
            if (cResult[7] === numItems) {
              let tmp11;
              if (cResult[8] === wishlistAndRecommendations) {
                tmp11 = cResult[9];
              }
              if (cResult[10] === skusToUserAndReason) {
                if (cResult[11] === tmp11) {
                  let tmp13;
                  if (cResult[12] === status) {
                    tmp13 = cResult[13];
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
    }
  : (userIds) => {
      let items1;
      let skusToUserAndReason;
      let status;
      userIds = userIds.userIds;
      const numItems = userIds.numItems;
      let USER_PROFILE = userIds.source;
      const applicationIds = userIds.applicationIds;
      if (USER_PROFILE === undefined) {
        USER_PROFILE = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
      }
      const items = [userIds];
      const obj = {
        userIdsAndWishlistIds: closure_15(
          react.useMemo(() => {
            let substr;
            if (userIds != null) {
              substr = userIds.slice(0, 5);
            }
            return substr;
          }, items),
        ),
        applicationIds,
        numItems,
        source: USER_PROFILE,
        filterByApplicationIds: true,
      };
      const tmp3 = closure_13(obj);
      const wishlistAndRecommendations = tmp3.wishlistAndRecommendations;
      const obj2 = {
        recommendations: react.useMemo(() => wishlistAndRecommendations.slice(0, numItems), items1),
        skusToUserAndReason,
        status,
      };
      items1 = [wishlistAndRecommendations, numItems];
      ({ skusToUserAndReason, status } = tmp3);
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let numItems;
      let recommendations;
      let skusToUserAndReason;
      let source;
      let status;
      let userId;
      const obj = react2;
      const cResult = obj.c(12);
      ({ userId, numItems, source } = arg0);
      if (undefined === source) {
        source = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
      }
      const userIdsAndWishlistIds = closure_14(userId).userIdsAndWishlistIds;
      const tmpResult = useWishlistApplicationIds;
      const wishlistApplicationIds = tmpResult.useWishlistApplicationIds(userId);
      if (cResult[0] === wishlistApplicationIds) {
        if (cResult[1] === numItems) {
          if (cResult[2] === source) {
            let tmp5;
            if (cResult[3] === userIdsAndWishlistIds) {
              tmp5 = cResult[4];
            }
            ({ recommendations, skusToUserAndReason, status } = closure_13(tmp5));
            closure_13(tmp5);
            if (cResult[5] === numItems) {
              let tmp8;
              if (cResult[6] === recommendations) {
                tmp8 = cResult[7];
              }
              if (cResult[8] === skusToUserAndReason) {
                if (cResult[9] === tmp8) {
                  let tmp10;
                  if (cResult[10] === status) {
                    tmp10 = cResult[11];
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
    }
  : (source) => {
      let items;
      let numItems;
      let skusToUserAndReason;
      let status;
      let userId;
      ({ userId, numItems } = source);
      let USER_PROFILE = source.source;
      if (USER_PROFILE === undefined) {
        USER_PROFILE = WishlistFetchSource.WishlistFetchSource.USER_PROFILE;
      }
      const userIdsAndWishlistIds = closure_14(userId).userIdsAndWishlistIds;
      const obj = useWishlistApplicationIds;
      const obj2 = {
        userIdsAndWishlistIds,
        applicationIds: obj.useWishlistApplicationIds(userId),
        numItems,
        source: USER_PROFILE,
      };
      const tmp3 = closure_13(obj2);
      const recommendations = tmp3.recommendations;
      const obj3 = {
        recommendations: react.useMemo(() => recommendations.slice(0, numItems), items),
        skusToUserAndReason,
        status,
      };
      items = [recommendations, numItems];
      ({ skusToUserAndReason, status } = tmp3);
      return obj3;
    };
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistRecommendations.tsx");

export const useWishlistRecommendationsForSingleUser = tmp4;
export const useRecommendationsForApplicationIds = tmp5;
export const useRecommendationsForSingleUser = tmp6;
