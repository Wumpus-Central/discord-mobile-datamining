// === Module 10792: useWishlistRecommendations ===

// Module 10792 (useWishlistRecommendations)
import _mod12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1090 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8187 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 8783 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import WishlistRecommendationsStore from "WishlistRecommendationsStore" /* 10793 */;
import WishlistRecommendationRecord from "WishlistRecommendationRecord" /* 7227 */;

require = fn;
function useWishlistRecommendationsWithWishlists(userIdsAndWishlistIds) {
  userIdsAndWishlistIds = userIdsAndWishlistIds.userIdsAndWishlistIds;
  ({ numItems, applicationIds, source } = userIdsAndWishlistIds);
  if (source === undefined) {
    source = userIdsAndWishlistIds(memo3[8]).WishlistFetchSource.USER_PROFILE;
  }
  let flag = userIdsAndWishlistIds.filterByApplicationIds;
  if (flag === undefined) {
    flag = false;
  }
  memo3 = undefined;
  let memo2;
  let memo1;
  isFetching = undefined;
  errors = undefined;
  let recommendations;
  let skusToUserAndReasonRecommendations;
  let wishlistAndRecommendations;
  let items = [userIdsAndWishlistIds];
  const memo = memo1.useMemo(() => userIdsAndWishlistIds.map((userId) => userId.userId), items);
  closure_129_0 = memo;
  closure_129_1 = numItems;
  closure_129_2 = applicationIds;
  const items1 = [recommendations];
  const items2 = [memo, applicationIds, numItems];
  let stateFromStores = userIdsAndWishlistIds(memo3[7]).useStateFromStores(items1, () => WishlistRecommendationsStore.getRecommendations(userIdsAndWishlistIds, memo3));
  const effect = memo1.useEffect(() => {
    if (0 !== userIdsAndWishlistIds.length) {
      if (0 !== memo3.length) {
        recommendations = WishlistRecommendationsStore.getRecommendations(tmp, tmp8);
        if (null != recommendations) {
          if ("loading" !== recommendations.state) {
            const _Date = Date;
            let tmp3 = "success" === recommendations.state;
            if (tmp3) {
              tmp3 = recommendations.data.skus.length >= stateFromStores;
            }
            const tmp14 = recommendations.fetchedAt < Date.now() - closure_9;
          }
        }
        const wishlistRecommendations = WishlistActionCreatorsDefault.fetchWishlistRecommendations(tmp8, tmp, stateFromStores);
      }
    }
  }, items2);
  if (0 === memo.length) {
    let tmp7 = obj;
  } else {
    tmp7 = stateFromStores;
  }
  stateFromStores = tmp7;
  let tmp8;
  if (flag) {
    tmp8 = applicationIds;
  }
  closure_130_0 = tmp8;
  let tmp3Result = tmp3(tmp4[7]);
  const items3 = [errors];
  const stateFromStores1 = tmp3Result.useStateFromStores(items3, () => errors.getId());
  closure_130_1 = stateFromStores1;
  tmp3Result = tmp3(tmp4[8]);
  const fetchWishlists = tmp3Result.useFetchWishlists({ wishlistIdsAndUsers: userIdsAndWishlistIds, source });
  const wishlists = fetchWishlists.wishlists;
  closure_130_2 = wishlists;
  ({ isFetching, errors } = fetchWishlists);
  const items4 = [wishlists, tmp8];
  memo1 = obj.useMemo(() => {
    const found = memo3.filter(GlobalUtils.isNotNullish);
    let obj = {};
    const iter = found[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let items = nextResult.items;
      for (const item10023 of items) {
        let tmp6 = item10023;
        let isOwned = null == item10023.sku;
        if (!isOwned) {
          isOwned = tmp6.isOwned;
        }
        if (!isOwned) {
          let obj2 = userIdsAndWishlistIds;
          let tmp8 = null != userIdsAndWishlistIds;
          if (tmp8) {
            tmp8 = !obj2.includes(tmp6.sku.applicationId);
          }
          isOwned = tmp8;
        }
        if (isOwned) {
          continue;
        } else {
          if (null != obj[tmp6.skuId]) {
            obj = obj[tmp6.skuId];
          } else {
            obj = {};
          }
          obj = {};
          let merged = Object.assign(obj);
          obj[tmp3.userId] = skusToUserAndReasonRecommendations.WISHLIST;
          obj[tmp6.skuId] = obj;
        }
      }
      continue;
    }
    return obj;
  }, items4);
  closure_130_3 = memo1;
  const items5 = [wishlists, tmp8];
  memo2 = obj.useMemo(() => {
    const found = memo3.filter(GlobalUtils.isNotNullish);
    const found1 = found.flatMap((items) => items.items).filter((sku) => {
      let tmp = null != sku && null != sku.sku && !sku.isOwned;
      if (tmp) {
        tmp = null == userIdsAndWishlistIds || userIdsAndWishlistIds.includes(sku.sku.applicationId);
        const tmp2 = null == userIdsAndWishlistIds || userIdsAndWishlistIds.includes(sku.sku.applicationId);
      }
      return tmp;
    });
    return Object.fromEntries(found1.map((item) => {
      const items = [, ];
      ({ skuId: arr[0], sku: arr[1] } = item);
      return items;
    }));
  }, items5);
  closure_130_4 = memo2;
  const items6 = [stateFromStores1, memo2, memo1];
  memo3 = obj.useMemo(() => {
    const keys = Object.keys(memo1);
    const sorted = keys.sort((arg0, arg1) => {
      let obj = memo2[arg1];
      if (obj == null) {
        obj = {};
      }
      obj = memo2[arg0];
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
        const BooleanResult = Boolean(obj[stateFromStores]);
        return Number(Boolean(obj[stateFromStores])) - Number(BooleanResult);
      }
    });
    return sorted.map((item) => memo1[item]);
  }, items6);
  const items7 = [tmp7, memo2];
  const memo4 = obj.useMemo(() => {
    if (null != stateFromStores) {
      if ("success" === tmp.state) {
        let obj = { filteredRecommendations: null, skusToUserAndReasonRecommendations: null };
        const skus = tmp.data.skus;
        obj.filteredRecommendations = skus.filter((id) => !(id.id in memo2));
        obj.skusToUserAndReasonRecommendations = tmp.data.skusToUserAndReason;
      }
      return obj;
    }
    obj = { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} };
  }, items7);
  recommendations = memo4.filteredRecommendations;
  skusToUserAndReasonRecommendations = memo4.skusToUserAndReasonRecommendations;
  const items8 = [memo3, recommendations, memo1, skusToUserAndReasonRecommendations];
  const skusToUserAndReason = obj.useMemo(() => {
    combinedSkusToUserAndReason = {};
    const merged = Object.assign(skusToUserAndReasonRecommendations);
    const entries = Object.entries(memo1);
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      [tmp7, tmp8] = tmp6;
      combinedSkusToUserAndReason = {};
      let merged1 = Object.assign(combinedSkusToUserAndReason[tmp7]);
      let merged2 = Object.assign(tmp8);
      combinedSkusToUserAndReason[tmp7] = combinedSkusToUserAndReason;
      continue;
    }
    combinedSkusToUserAndReason = { combinedSkus: null, combinedSkusToUserAndReason };
    const items = [...recommendations];
    combinedSkusToUserAndReason.combinedSkus = items;
    return combinedSkusToUserAndReason;
  }, items8);
  wishlistAndRecommendations = skusToUserAndReason.combinedSkus;
  const items9 = [isFetching, tmp7, errors];
  const items10 = [recommendations, wishlistAndRecommendations];
  const status = obj.useMemo(() => {
    let str = "loading";
    if (!isFetching) {
      str = "loading";
      if (null != stateFromStores) {
        if (null == tmp) {
          if (errors.filter(GlobalUtils.isNotNullish).length > 0) {
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
    return _mod12.uniq(items);
  }, items10);
  let obj2 = userIdsAndWishlistIds(memo3[7]);
  const getOrFetchStorefrontPricesForSkuIds = userIdsAndWishlistIds(memo3[12]).useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo7 });
  return { recommendations, wishlistAndRecommendations, skusToUserAndReason: skusToUserAndReason.combinedSkusToUserAndReason, status };
}
let closure_8 = fn(7227).WishlistRecommendationReason;
let closure_9 = 30 * DurationsDefault.Millis.MINUTE;
let combinedSkusToUserAndReason = { state: "success", data: null, fetchedAt: 0 };
combinedSkusToUserAndReason = { skus: [], skus_to_user_and_reason: {}, applications: [] };
WishlistRecommendationRecord = new WishlistRecommendationRecord(combinedSkusToUserAndReason);
combinedSkusToUserAndReason.data = WishlistRecommendationRecord;
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistRecommendations.tsx");

export const useWishlistRecommendationsForSingleUser = function useWishlistRecommendationsForSingleUser(arg0) {
  ({ userId, numItems, source } = arg0);
  if (source === undefined) {
    source = userId(8776).WishlistFetchSource.USER_PROFILE;
  }
  const items = [userId];
  const effect = noop.useEffect(() => {
    maybeFetchUserProfileDefault(userId);
  }, items);
  let obj = userId(504);
  const items1 = [UserProfileStore];
  const defaultWishlistId = obj.useStateFromStoresObject(items1, () => ({ defaultWishlistId: UserProfileStore.getFirstWishlistId(userId) })).defaultWishlistId;
  const items2 = [userId, defaultWishlistId];
  obj = {
    userIdsAndWishlistIds: noop.useMemo(() => {
      const items = [{ userId, wishlistId: recommendations }];
      return items;
    }, items2),
    applicationIds: userId(10794).useWishlistApplicationIds(userId),
    numItems,
    source
  };
  const obj3 = userId(10794);
  ({ skusToUserAndReason, wishlistAndRecommendations, status } = useWishlistRecommendationsWithWishlists(obj));
  const tmp4 = useWishlistRecommendationsWithWishlists(obj);
  const wishlistSkuFilter = userId(10795).useWishlistSkuFilter({ wishlistAndRecommendations, skusToUserAndReason, userId, numItems });
  obj = { wishlistAndRecommendations: wishlistSkuFilter.slicedWishlistAndRecommendations, skusToUserAndReason, status, defaultWishlistId, totalUnownedWishlistItemCount: wishlistSkuFilter.totalUnownedWishlistItemCount };
  return obj;
};
export const useRecommendationsForApplicationIds = function useRecommendationsForApplicationIds(userIds) {
  userIds = userIds.userIds;
  const numItems = userIds.numItems;
  let USER_PROFILE = userIds.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = userIds(wishlistAndRecommendations[8]).WishlistFetchSource.USER_PROFILE;
  }
  wishlistAndRecommendations = undefined;
  let obj = { userIdsAndWishlistIds: null, applicationIds: null, numItems: null, source: null, filterByApplicationIds: true };
  const items = [userIds];
  const memo = noop.useMemo(() => {
    let substr;
    if (userIds != null) {
      substr = userIds.slice(0, 5);
    }
    return substr;
  }, items);
  closure_129_0 = memo;
  const items1 = [memo];
  const effect = noop.useEffect(() => {
    const item = userIds.forEach((item) => {
      numItems(wishlistAndRecommendations[13])(item);
    });
  }, items1);
  const items2 = [UserProfileStore];
  const stateFromStoresArray = userIds(wishlistAndRecommendations[7]).useStateFromStoresArray(items2, () => userIds.map((item) => {
    firstWishlistId = firstWishlistId.getFirstWishlistId(item);
    if (firstWishlistId == null) {
      firstWishlistId = null;
    }
    return firstWishlistId;
  }));
  closure_129_1 = stateFromStoresArray;
  const items3 = [memo, stateFromStoresArray];
  obj.userIdsAndWishlistIds = noop.useMemo(() => userIds.map((userId, index) => ({ userId, wishlistId: numItems[index] })), items3);
  obj.applicationIds = userIds.applicationIds;
  obj.numItems = numItems;
  obj.source = USER_PROFILE;
  const tmp6 = useWishlistRecommendationsWithWishlists(obj);
  wishlistAndRecommendations = tmp6.wishlistAndRecommendations;
  obj = { recommendations: null, skusToUserAndReason, status };
  const items4 = [wishlistAndRecommendations, numItems];
  ({ skusToUserAndReason, status } = tmp6);
  obj.recommendations = noop.useMemo(() => wishlistAndRecommendations.slice(0, numItems), items4);
  return obj;
};
export const useRecommendationsForSingleUser = function useRecommendationsForSingleUser(source) {
  ({ userId, numItems } = source);
  userId = numItems;
  let USER_PROFILE = source.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = userId(8776).WishlistFetchSource.USER_PROFILE;
  }
  let obj = { userIdsAndWishlistIds: null, applicationIds: null, numItems: null, source: null };
  let items = [userId];
  const effect = noop.useEffect(() => {
    maybeFetchUserProfileDefault(userId);
  }, items);
  const items1 = [UserProfileStore];
  const defaultWishlistId = userId(504).useStateFromStoresObject(items1, () => ({ defaultWishlistId: UserProfileStore.getFirstWishlistId(userId) })).defaultWishlistId;
  const items2 = [userId, defaultWishlistId];
  obj.userIdsAndWishlistIds = noop.useMemo(() => {
    const items = [{ userId, wishlistId: recommendations }];
    return items;
  }, items2);
  const obj2 = userId(504);
  obj.applicationIds = userId(10794).useWishlistApplicationIds(userId);
  obj.numItems = numItems;
  obj.source = USER_PROFILE;
  const tmp4 = useWishlistRecommendationsWithWishlists(obj);
  const recommendations = tmp4.recommendations;
  obj = { recommendations: null, skusToUserAndReason, status };
  const items3 = [recommendations, numItems];
  ({ skusToUserAndReason, status } = tmp4);
  obj.recommendations = noop.useMemo(() => recommendations.slice(0, userId), items3);
  return obj;
};