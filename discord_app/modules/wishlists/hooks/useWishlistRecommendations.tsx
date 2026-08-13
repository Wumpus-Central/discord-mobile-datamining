// discord_app/modules/wishlists/hooks/useWishlistRecommendations.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import fetchFingerprint from "fetchFingerprint";
import handleUserSettingsStoreUpdate from "handleUserSettingsStoreUpdate";
import importDefaultResult from "fromServer";
import { WishlistRecommendationReason as closure_8 } from "fromServer";

const require = arg1;
function useWishlistRecommendationsWithWishlists(userIdsAndWishlistIds) {
  let applicationIds;
  let errors;
  let isFetching;
  let numItems;
  let source;
  userIdsAndWishlistIds = userIdsAndWishlistIds.userIdsAndWishlistIds;
  let memo = userIdsAndWishlistIds;
  ({ numItems, applicationIds, source } = userIdsAndWishlistIds);
  if (source === undefined) {
    source = memo(memo3[8]).WishlistFetchSource.USER_PROFILE;
  }
  let flag = userIdsAndWishlistIds.filterByApplicationIds;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores1;
  memo3 = undefined;
  let memo2;
  let memo1;
  isFetching = undefined;
  errors = undefined;
  let recommendations;
  let skusToUserAndReasonRecommendations;
  let wishlistAndRecommendations;
  let items = [userIdsAndWishlistIds];
  memo = memo1.useMemo(() => memo.map((userId) => userId.userId), items);
  stateFromStores1 = numItems;
  memo3 = applicationIds;
  const items1 = [recommendations];
  const items2 = [memo, applicationIds, numItems];
  const stateFromStores = memo(memo3[7]).useStateFromStores(items1, () => recommendations.getRecommendations(memo, memo3));
  const effect = memo1.useEffect(() => {
    if (0 !== memo.length) {
      if (0 !== memo3.length) {
        recommendations = recommendations.getRecommendations(tmp, tmp8);
        if (null != recommendations) {
          if ("loading" !== recommendations.state) {
            const _Date = Date;
            let tmp3 = "success" === recommendations.state;
            if (tmp3) {
              tmp3 = recommendations.data.skus.length >= stateFromStores1;
            }
            const tmp14 = recommendations.fetchedAt < Date.now() - wishlistAndRecommendations;
          }
        }
        const wishlistRecommendations = stateFromStores1(memo3[10]).fetchWishlistRecommendations(tmp8, tmp, stateFromStores1);
        const obj = stateFromStores1(memo3[10]);
      }
    }
  }, items2);
  if (0 === memo.length) {
    let tmp7 = obj;
  } else {
    tmp7 = stateFromStores;
  }
  stateFromStores1 = tmp7;
  let tmp8;
  if (flag) {
    tmp8 = applicationIds;
  }
  memo = tmp8;
  let tmp3Result = tmp3(tmp4[7]);
  const items3 = [errors];
  stateFromStores1 = tmp3Result.useStateFromStores(items3, () => errors.getId());
  tmp3Result = tmp3(tmp4[8]);
  const fetchWishlists = tmp3Result.useFetchWishlists({ wishlistIdsAndUsers: userIdsAndWishlistIds, source });
  const wishlists = fetchWishlists.wishlists;
  memo3 = wishlists;
  ({ isFetching, errors } = fetchWishlists);
  const items4 = [wishlists, tmp8];
  memo1 = obj.useMemo(() => {
    const found = memo3.filter(memo(memo3[9]).isNotNullish);
    let obj = {};
    const iter = found[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let items = nextResult.items;
      let tmp4 = items;
      let tmp5 = items;
      for (const item10023 of items) {
        let tmp6 = item10023;
        let isOwned = null == item10023.sku;
        if (!isOwned) {
          let tmp7 = item10023;
          isOwned = tmp6.isOwned;
        }
        if (!isOwned) {
          let obj2 = memo;
          let tmp8 = null != memo;
          if (tmp8) {
            let tmp9 = item10023;
            tmp8 = !obj2.includes(tmp6.sku.applicationId);
          }
          isOwned = tmp8;
        }
        if (isOwned) {
          continue;
        } else {
          let tmp10 = item10023;
          if (null != obj[tmp6.skuId]) {
            let tmp11 = item10023;
            obj = obj[tmp6.skuId];
          } else {
            obj = {};
          }
          obj = {};
          let tmp12 = obj;
          let tmp13 = obj;
          let merged = Object.assign(obj);
          let tmp15 = nextResult;
          let tmp16 = skusToUserAndReasonRecommendations;
          obj[tmp3.userId] = skusToUserAndReasonRecommendations.WISHLIST;
          obj[tmp6.skuId] = obj;
        }
      }
      continue;
    }
    return obj;
  }, items4);
  memo2 = memo1;
  const items5 = [wishlists, tmp8];
  memo2 = obj.useMemo(() => {
    const found = memo3.filter(memo(memo3[9]).isNotNullish);
    const found1 = found.flatMap((items) => items.items).filter((sku) => {
      let tmp = null != sku && null != sku.sku && !sku.isOwned;
      if (tmp) {
        tmp = null == closure_0 || closure_0.includes(sku.sku.applicationId);
        const obj = closure_0;
        const tmp2 = null == closure_0 || closure_0.includes(sku.sku.applicationId);
      }
      return tmp;
    });
    return Object.fromEntries(found1.map((arg0) => {
      const items = [, ];
      ({ skuId: arr[0], sku: arr[1] } = arg0);
      return items;
    }));
  }, items5);
  memo1 = memo2;
  const items6 = [stateFromStores1, memo2, memo1];
  memo3 = obj.useMemo(() => {
    const keys = Object.keys(memo1);
    const sorted = keys.sort((arg0, arg1) => {
      let obj = table[arg1];
      if (obj == null) {
        obj = {};
      }
      obj = table[arg0];
      if (obj == null) {
        obj = {};
      }
      const diff = Object.keys(obj).length - Object.keys(obj).length;
      if (0 !== diff) {
        return diff;
      } else {
        const _Boolean = Boolean;
        const _Boolean2 = Boolean;
        const _Number = Number;
        const _Number2 = Number;
        const BooleanResult = Boolean(obj[closure_1]);
        return Number(Boolean(obj[closure_1])) - Number(BooleanResult);
      }
      const tmp = table;
    });
    return sorted.map((arg0) => table2[arg0]);
  }, items6);
  const items7 = [tmp7, memo2];
  const memo4 = obj.useMemo(() => {
    if (null != stateFromStores1) {
      if ("success" === tmp.state) {
        let obj = { filteredRecommendations: null, skusToUserAndReasonRecommendations: null };
        const skus = tmp.data.skus;
        obj[0] = skus.filter((id) => !(id.id in _slicedToArray));
        obj[1] = tmp.data.skusToUserAndReason;
      }
      return obj;
    }
    obj = { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} };
  }, items7);
  recommendations = memo4.filteredRecommendations;
  skusToUserAndReasonRecommendations = memo4.skusToUserAndReasonRecommendations;
  const items8 = [memo3, recommendations, memo1, skusToUserAndReasonRecommendations];
  const skusToUserAndReason = obj.useMemo(() => {
    let tmp7;
    let tmp8;
    let obj = {};
    const merged = Object.assign(skusToUserAndReasonRecommendations);
    const entries = Object.entries(memo1);
    while (tmp3 !== undefined) {
      let tmp5 = memo2;
      let tmp6 = memo2(tmp4, 2);
      [tmp7, tmp8] = tmp6;
      obj = {};
      let tmp9 = obj;
      let merged1 = Object.assign(obj[tmp7]);
      let tmp11 = obj;
      let tmp12 = tmp8;
      let merged2 = Object.assign(tmp8);
      obj[tmp7] = obj;
      continue;
    }
    obj = { combinedSkus: null, combinedSkusToUserAndReason: null };
    const items = [...recommendations];
    obj[0] = items;
    obj[1] = obj;
    return obj;
  }, items8);
  wishlistAndRecommendations = skusToUserAndReason.combinedSkus;
  const items9 = [isFetching, tmp7, errors];
  const items10 = [recommendations, wishlistAndRecommendations];
  const status = obj.useMemo(() => {
    let str = "loading";
    if (!isFetching) {
      str = "loading";
      if (null != stateFromStores1) {
        if (null == tmp) {
          if (errors.filter(memo(memo3[9]).isNotNullish).length > 0) {
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
  }, items9);
  const memo7 = obj.useMemo(() => {
    const items = [...recommendations.map((id) => id.id), ...wishlistAndRecommendations.map((id) => id.id)];
    return memo(memo3[11]).uniq(items);
  }, items10);
  let obj2 = memo(memo3[7]);
  const getOrFetchStorefrontPricesForSkuIds = memo(memo3[12]).useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo7 });
  return { recommendations, wishlistAndRecommendations, skusToUserAndReason: skusToUserAndReason.combinedSkusToUserAndReason, status };
}
let closure_9 = 30 * require("set").Millis.MINUTE;
let obj = { state: "success", data: null, fetchedAt: 0 };
obj = { skus: [], skus_to_user_and_reason: {}, applications: [] };
importDefaultResult = new importDefaultResult(obj);
obj[1] = importDefaultResult;
const result = require("createUserWidgetFromServer").fileFinishedImporting("modules/wishlists/hooks/useWishlistRecommendations.tsx");

export const useWishlistRecommendationsForSingleUser = function useWishlistRecommendationsForSingleUser(arg0) {
  let numItems;
  let skusToUserAndReason;
  let source;
  let status;
  let userId;
  let wishlistAndRecommendations;
  ({ userId, numItems, source } = arg0);
  if (source === undefined) {
    source = userId(9406).WishlistFetchSource.USER_PROFILE;
  }
  const items = [userId];
  const effect = React.useEffect(() => {
    recommendations(outer1_2[13])(userId);
  }, items);
  let obj = userId(589);
  const items1 = [createUserWidgetFromServer];
  const defaultWishlistId = obj.useStateFromStoresObject(items1, () => ({ defaultWishlistId: outer1_5.getFirstWishlistId(userId) })).defaultWishlistId;
  const items2 = [userId, defaultWishlistId];
  obj = {
    userIdsAndWishlistIds: React.useMemo(() => {
      const items = [{ userId, wishlistId: recommendations }];
      return items;
    }, items2),
    applicationIds: null,
    numItems: null,
    source: null
  };
  obj[1] = userId(10132).useWishlistApplicationIds(userId);
  obj[2] = numItems;
  obj[3] = source;
  const obj3 = userId(10132);
  ({ skusToUserAndReason, wishlistAndRecommendations, status } = useWishlistRecommendationsWithWishlists(obj));
  const tmp4 = useWishlistRecommendationsWithWishlists(obj);
  const wishlistSkuFilter = userId(10133).useWishlistSkuFilter({ wishlistAndRecommendations, skusToUserAndReason, userId, numItems });
  obj = { wishlistAndRecommendations: wishlistSkuFilter.slicedWishlistAndRecommendations, skusToUserAndReason, status, defaultWishlistId, totalUnownedWishlistItemCount: wishlistSkuFilter.totalUnownedWishlistItemCount };
  return obj;
};
export const useRecommendationsForApplicationIds = function useRecommendationsForApplicationIds(userIds) {
  let skusToUserAndReason;
  let status;
  userIds = userIds.userIds;
  let memo = userIds;
  const numItems = userIds.numItems;
  let stateFromStoresArray = numItems;
  let USER_PROFILE = userIds.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = memo(wishlistAndRecommendations[8]).WishlistFetchSource.USER_PROFILE;
  }
  wishlistAndRecommendations = undefined;
  let obj = { userIdsAndWishlistIds: null, applicationIds: null, numItems: null, source: null, filterByApplicationIds: true };
  const items = [userIds];
  memo = React.useMemo(() => {
    let substr;
    if (memo != null) {
      substr = memo.slice(0, 5);
    }
    return substr;
  }, items);
  stateFromStoresArray = undefined;
  const items1 = [memo];
  const effect = React.useEffect(() => {
    const item = memo.forEach((arg0) => {
      callback(table[13])(arg0);
    });
  }, items1);
  const items2 = [createUserWidgetFromServer];
  stateFromStoresArray = memo(wishlistAndRecommendations[7]).useStateFromStoresArray(items2, () => memo.map((id) => {
    firstWishlistId = firstWishlistId.getFirstWishlistId(id);
    if (firstWishlistId == null) {
      firstWishlistId = null;
    }
    return firstWishlistId;
  }));
  const items3 = [memo, stateFromStoresArray];
  obj[0] = React.useMemo(() => memo.map((userId) => ({ userId, wishlistId: table[arg1] })), items3);
  obj[1] = userIds.applicationIds;
  obj[2] = numItems;
  obj[3] = USER_PROFILE;
  const tmp6 = useWishlistRecommendationsWithWishlists(obj);
  wishlistAndRecommendations = tmp6.wishlistAndRecommendations;
  obj = { recommendations: React.useMemo(() => wishlistAndRecommendations.slice(0, stateFromStoresArray), items4), skusToUserAndReason, status };
  items4 = [wishlistAndRecommendations, numItems];
  ({ skusToUserAndReason, status } = tmp6);
  return obj;
};
export const useRecommendationsForSingleUser = function useRecommendationsForSingleUser(source) {
  let numItems;
  let skusToUserAndReason;
  let status;
  let userId;
  ({ userId, numItems } = source);
  userId = numItems;
  let USER_PROFILE = source.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = userId(9406).WishlistFetchSource.USER_PROFILE;
  }
  let recommendations;
  let obj = { userIdsAndWishlistIds: null, applicationIds: null, numItems: null, source: null };
  recommendations = undefined;
  let items = [userId];
  const effect = React.useEffect(() => {
    recommendations(outer1_2[13])(userId);
  }, items);
  const items1 = [createUserWidgetFromServer];
  const defaultWishlistId = userId(589).useStateFromStoresObject(items1, () => ({ defaultWishlistId: outer1_5.getFirstWishlistId(userId) })).defaultWishlistId;
  recommendations = defaultWishlistId;
  const items2 = [userId, defaultWishlistId];
  obj[0] = React.useMemo(() => {
    const items = [{ userId, wishlistId: recommendations }];
    return items;
  }, items2);
  const obj2 = userId(589);
  obj[1] = userId(10132).useWishlistApplicationIds(userId);
  obj[2] = numItems;
  obj[3] = USER_PROFILE;
  const tmp4 = useWishlistRecommendationsWithWishlists(obj);
  recommendations = tmp4.recommendations;
  obj = { recommendations: React.useMemo(() => recommendations.slice(0, userId), items3), skusToUserAndReason, status };
  items3 = [recommendations, numItems];
  ({ skusToUserAndReason, status } = tmp4);
  return obj;
};