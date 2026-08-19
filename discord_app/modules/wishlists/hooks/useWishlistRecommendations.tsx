// discord_app/modules/wishlists/hooks/useWishlistRecommendations.tsx
import obj132Default from "../../../utils/Durations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import createUserWidgetFromServer from "../../user_profile/UserProfileStore.tsx";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import handleUserSettingsStoreUpdate from "../WishlistRecommendationsStore.tsx";
import importDefaultResult from "../records/WishlistRecommendationRecord.tsx";
import { WishlistRecommendationReason as closure_8 } from "../records/WishlistRecommendationRecord.tsx";

const require = fn;
function useWishlistRecommendationsWithWishlists(userIdsAndWishlistIds) {
  userIdsAndWishlistIds = userIdsAndWishlistIds.userIdsAndWishlistIds;
  applicationIds = userIdsAndWishlistIds;
  ({ numItems, applicationIds, source } = userIdsAndWishlistIds);
  if (source === undefined) {
    source = applicationIds(memo3[8]).WishlistFetchSource.USER_PROFILE;
  }
  let flag = userIdsAndWishlistIds.filterByApplicationIds;
  if (flag === undefined) {
    flag = false;
  }
  let memo2;
  let memo1;
  isFetching = undefined;
  errors = undefined;
  let recommendations;
  let skusToUserAndReasonRecommendations;
  let wishlistAndRecommendations;
  let items = [userIdsAndWishlistIds];
  const memo = memo1.useMemo(() => applicationIds.map((item, index) => item.userId), items);
  applicationIds = memo;
  let stateFromStores1 = numItems;
  memo3 = applicationIds;
  const items1 = [recommendations];
  const items2 = [memo, applicationIds, numItems];
  const stateFromStores = applicationIds(memo3[7]).useStateFromStores(items1, () => recommendations.getRecommendations(applicationIds, memo3));
  const effect = memo1.useEffect(() => {
    if (0 !== applicationIds.length) {
      if (0 !== memo3.length) {
        recommendations = recommendations.getRecommendations(applicationIds, memo3);
        if (null != recommendations) {
          if ("loading" !== recommendations.state) {
            const _Date = Date;
            let tmp3 = "success" === recommendations.state;
            recommendations.fetchedAt < Date.now() - wishlistAndRecommendations;
            if (tmp3) {
              tmp3 = recommendations.data.skus.length >= stateFromStores1;
            }
          }
        }
        const wishlistRecommendations = stateFromStores1(memo3[10]).fetchWishlistRecommendations(memo3, applicationIds, stateFromStores1);
        obj = stateFromStores1(memo3[10]);
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
  applicationIds = tmp8;
  let tmp3Result = tmp3(tmp4[7]);
  const items3 = [errors];
  stateFromStores1 = tmp3Result.useStateFromStores(items3, () => errors.getId());
  tmp3Result = tmp3(tmp4[8]);
  const fetchWishlists = tmp3Result.useFetchWishlists({ wishlistIdsAndUsers: userIdsAndWishlistIds, source });
  const wishlists = fetchWishlists.wishlists;
  ({ isFetching, errors } = fetchWishlists);
  const items4 = [wishlists, tmp8];
  memo1 = obj.useMemo(() => {
    const found = memo3.filter(applicationIds(memo3[9]).isNotNullish);
    obj = {};
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
          let tmp8 = null != applicationIds;
          if (tmp8) {
            tmp8 = !applicationIds.includes(item10023.sku.applicationId);
          }
          isOwned = tmp8;
        }
        if (isOwned) {
          continue;
        } else {
          if (null != obj[item10023.skuId]) {
            obj = obj[item10023.skuId];
          } else {
            obj = {};
          }
          obj = {};
          let merged = Object.assign(obj);
          obj[tmp3.userId] = skusToUserAndReasonRecommendations.WISHLIST;
          obj[item10023.skuId] = obj;
        }
      }
      continue;
    }
    return obj;
  }, items4);
  const items5 = [wishlists, tmp8];
  memo2 = obj.useMemo(() => {
    const found = memo3.filter(applicationIds(memo3[9]).isNotNullish);
    const found1 = found.flatMap((item, index) => item.items).filter((item, index) => {
      let tmp = null != item && null != item.sku && !item.isOwned;
      if (tmp) {
        tmp = null == closure_0 || closure_0.includes(item.sku.applicationId);
        const tmp2 = null == closure_0 || closure_0.includes(item.sku.applicationId);
      }
      return tmp;
    });
    return Object.fromEntries(found1.map((item, index) => {
      const items = [, ];
      ({ skuId: arr[0], sku: arr[1] } = item);
      return items;
    }));
  }, items5);
  memo1 = memo2;
  const items6 = [stateFromStores1, memo2, memo1];
  memo3 = obj.useMemo(() => {
    const keys = Object.keys(memo1);
    const sorted = keys.sort((arg0, arg1) => {
      obj = table[arg1];
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
    });
    return sorted.map((item, index) => table2[item]);
  }, items6);
  const items7 = [tmp7, memo2];
  const memo4 = obj.useMemo(() => {
    if (null != stateFromStores1) {
      if ("success" === stateFromStores1.state) {
        obj = { filteredRecommendations: null, skusToUserAndReasonRecommendations: null };
        const skus = stateFromStores1.data.skus;
        obj[0] = skus.filter((item, index) => !(item.id in closure_3));
        obj[1] = stateFromStores1.data.skusToUserAndReason;
      }
      return obj;
    }
    obj = { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} };
  }, items7);
  recommendations = memo4.filteredRecommendations;
  skusToUserAndReasonRecommendations = memo4.skusToUserAndReasonRecommendations;
  const items8 = [memo3, recommendations, memo1, skusToUserAndReasonRecommendations];
  const skusToUserAndReason = obj.useMemo(() => {
    obj = {};
    const merged = Object.assign(skusToUserAndReasonRecommendations);
    const entries = Object.entries(memo1);
    while (tmp3 !== undefined) {
      let tmp6 = memo2(tmp4, 2);
      [tmp7, tmp8] = tmp6;
      obj = {};
      let merged1 = Object.assign(obj[tmp7]);
      let merged2 = Object.assign(tmp8);
      obj[tmp7] = obj;
      continue;
    }
    obj = { combinedSkus: items, combinedSkusToUserAndReason: obj };
    items = [...recommendations];
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
        if (null == stateFromStores1) {
          if (errors.filter(applicationIds(memo3[9]).isNotNullish).length > 0) {
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
    const items = [...recommendations.map((item, index) => item.id), ...wishlistAndRecommendations.map((item, index) => item.id)];
    return applicationIds(memo3[11]).uniq(items);
  }, items10);
  const obj2 = applicationIds(memo3[7]);
  const getOrFetchStorefrontPricesForSkuIds = applicationIds(memo3[12]).useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo7 });
  return { recommendations, wishlistAndRecommendations, skusToUserAndReason: skusToUserAndReason.combinedSkusToUserAndReason, status };
}
let closure_9 = 30 * obj132Default.Millis.MINUTE;
let obj = { skus: [], skus_to_user_and_reason: {}, applications: [] };
importDefaultResult = new importDefaultResult(obj);
obj[1] = importDefaultResult;
const result = require("obj132").fileFinishedImporting("modules/wishlists/hooks/useWishlistRecommendations.tsx");

export const useWishlistRecommendationsForSingleUser = function useWishlistRecommendationsForSingleUser(arg0) {
  ({ userId, numItems, source } = arg0);
  if (source === undefined) {
    source = userId(9185).WishlistFetchSource.USER_PROFILE;
  }
  const items = [userId];
  const effect = React.useEffect(() => {
    recommendations(dependencyMap[13])(userId);
  }, items);
  obj = userId(589);
  const items1 = [closure_5];
  const defaultWishlistId = obj.useStateFromStoresObject(items1, () => ({ defaultWishlistId: closure_1_5.getFirstWishlistId(userId) })).defaultWishlistId;
  const items2 = [userId, defaultWishlistId];
  obj = {
    userIdsAndWishlistIds: React.useMemo(() => {
      const items = [{ userId, wishlistId: recommendations }];
      return items;
    }, items2),
    applicationIds: userId(10348).useWishlistApplicationIds(userId),
    numItems,
    source
  };
  const obj3 = userId(10348);
  ({ skusToUserAndReason, wishlistAndRecommendations, status } = useWishlistRecommendationsWithWishlists(obj));
  const tmp4 = useWishlistRecommendationsWithWishlists(obj);
  const wishlistSkuFilter = userId(10349).useWishlistSkuFilter({ wishlistAndRecommendations, skusToUserAndReason, userId, numItems });
  obj = { wishlistAndRecommendations: wishlistSkuFilter.slicedWishlistAndRecommendations, skusToUserAndReason, status, defaultWishlistId, totalUnownedWishlistItemCount: wishlistSkuFilter.totalUnownedWishlistItemCount };
  return obj;
};
export const useRecommendationsForApplicationIds = function useRecommendationsForApplicationIds(userIds) {
  userIds = userIds.userIds;
  let memo = userIds;
  const numItems = userIds.numItems;
  let stateFromStoresArray = numItems;
  let USER_PROFILE = userIds.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = memo(wishlistAndRecommendations[8]).WishlistFetchSource.USER_PROFILE;
  }
  wishlistAndRecommendations = undefined;
  obj = { userIdsAndWishlistIds: null, applicationIds: null, numItems: null, source: null, filterByApplicationIds: true };
  const items = [userIds];
  memo = React.useMemo(() => {
    let substr;
    if (memo != null) {
      substr = memo.slice(0, 5);
    }
    return substr;
  }, items);
  const items1 = [memo];
  const effect = React.useEffect(() => {
    const item = memo.forEach((item, index) => {
      callback(table[13])(item);
    });
  }, items1);
  const items2 = [closure_5];
  stateFromStoresArray = memo(wishlistAndRecommendations[7]).useStateFromStoresArray(items2, () => memo.map((item, index) => {
    firstWishlistId = firstWishlistId.getFirstWishlistId(item);
    if (firstWishlistId == null) {
      firstWishlistId = null;
    }
    return firstWishlistId;
  }));
  const items3 = [memo, stateFromStoresArray];
  obj[0] = React.useMemo(() => memo.map((item, index) => ({ userId: item, wishlistId: table[index] })), items3);
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
  ({ userId, numItems } = source);
  userId = numItems;
  let USER_PROFILE = source.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = userId(9185).WishlistFetchSource.USER_PROFILE;
  }
  obj = { userIdsAndWishlistIds: null, applicationIds: null, numItems: null, source: null };
  let items = [userId];
  const effect = React.useEffect(() => {
    recommendations(dependencyMap[13])(userId);
  }, items);
  const items1 = [closure_5];
  const defaultWishlistId = userId(589).useStateFromStoresObject(items1, () => ({ defaultWishlistId: closure_1_5.getFirstWishlistId(userId) })).defaultWishlistId;
  const items2 = [userId, defaultWishlistId];
  obj[0] = React.useMemo(() => {
    const items = [{ userId, wishlistId: recommendations }];
    return items;
  }, items2);
  const obj2 = userId(589);
  obj[1] = userId(10348).useWishlistApplicationIds(userId);
  obj[2] = numItems;
  obj[3] = USER_PROFILE;
  const tmp4 = useWishlistRecommendationsWithWishlists(obj);
  const recommendations = tmp4.recommendations;
  obj = { recommendations: React.useMemo(() => recommendations.slice(0, userId), items3), skusToUserAndReason, status };
  items3 = [recommendations, numItems];
  ({ skusToUserAndReason, status } = tmp4);
  return obj;
};