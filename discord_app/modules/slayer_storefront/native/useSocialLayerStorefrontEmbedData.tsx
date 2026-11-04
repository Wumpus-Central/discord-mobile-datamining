// discord_app/modules/slayer_storefront/native/useSocialLayerStorefrontEmbedData.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import CodedLink from "../../coded_links/CodedLink.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";
import SocialLayerStorefrontStore from "../SocialLayerStorefrontStore.tsx";
import SocialLayerStorefrontEmbedStore from "SocialLayerStorefrontEmbedStore.tsx";

const require = globalThis.__r;

require = fn;
let index = { rows: {}, singleSkuIds: [], multiLinks: [] };
let closure_10 = { index, wishlistSkuIds: [], prices: {}, storefronts: {}, skus: {} };
let closure_11 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/useSocialLayerStorefrontEmbedData.tsx");

export function collectSocialLayerStorefrontEmbedLinks(arr) {
  function readLinks(codedLinks) {
    items = [];
    const iter = codedLinks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let type = nextResult.type;
      let tmp2 = type;
      let code = nextResult.code;
      if (type === set(set1[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
        let tmp3Result = set(set1[7]);
        let result = tmp3Result.parseStorefrontCodedLink(code);
        if (null != result) {
          let obj = { type: null };
          obj.type = tmp2;
          let merged = Object.assign(tmp8);
          let arr = items.push(obj);
        }
      }
      continue;
    }
    return items;
  }
  const set = new Set();
  items = [];
  const set1 = new Set();
  const rows = {};
  const item = arr.forEach((codedLinks) => {
    let arr = readLinks(codedLinks.codedLinks);
    const iter = arr[Symbol.iterator]();
    while (iter !== undefined) {
      let skuIds = iter.next().skuIds;
      if (1 === skuIds.length) {
        let addResult = set1.add(tmp[0]);
      }
      continue;
    }
    const contentMessage = codedLinks.getContentMessage();
    if (contentMessage !== codedLinks) {
      arr = readLinks(contentMessage.codedLinks);
    }
    if (0 !== arr.length) {
      obj[codedLinks.id] = arr;
      for (const item10033 of arr) {
        if (item10033.skuIds.length > 1) {
          let arr2 = items.push(item10033);
        } else {
          let addResult1 = set.add(item10033.skuIds[0]);
        }
        continue;
      }
    }
  });
  const obj2 = { index: null, legacySingleSkuIds: null };
  const obj3 = { rows, singleSkuIds: null, multiLinks: items };
  const items1 = [...set];
  obj3.singleSkuIds = items1;
  obj2.index = obj3;
  const items2 = [...set1];
  obj2.legacySingleSkuIds = items2;
  return obj2;
}
export function useSocialLayerStorefrontEmbedData(stateFromStores) {
  _require = stateFromStores;
  items = [stateFromStores];
  const memo = stateFromStoresObject.useMemo(() => {
    function readLinks(codedLinks) {
      items = [];
      const iter = codedLinks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let type = nextResult.type;
        let tmp2 = type;
        let code = nextResult.code;
        if (type === set(set1[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
          let tmp3Result = set(set1[7]);
          let result = tmp3Result.parseStorefrontCodedLink(code);
          if (null != result) {
            let obj = { type: null };
            obj.type = tmp2;
            let merged = Object.assign(tmp8);
            let arr = items.push(obj);
          }
        }
        continue;
      }
      return items;
    }
    const set = new Set();
    items = [];
    const set1 = new Set();
    const rows = {};
    const item = stateFromStores.forEach((codedLinks) => {
      let arr = readLinks(codedLinks.codedLinks);
      const iter = arr[Symbol.iterator]();
      while (iter !== undefined) {
        let skuIds = iter.next().skuIds;
        if (1 === skuIds.length) {
          let addResult = set1.add(tmp[0]);
        }
        continue;
      }
      const contentMessage = codedLinks.getContentMessage();
      if (contentMessage !== codedLinks) {
        arr = readLinks(contentMessage.codedLinks);
      }
      if (0 !== arr.length) {
        obj[codedLinks.id] = arr;
        for (const item10033 of arr) {
          if (item10033.skuIds.length > 1) {
            let arr2 = items.push(item10033);
          } else {
            let addResult1 = set.add(item10033.skuIds[0]);
          }
          continue;
        }
      }
    });
    const obj2 = { index: null, legacySingleSkuIds: null };
    const obj3 = { rows, singleSkuIds: null, multiLinks: items };
    const items1 = [...set];
    obj3.singleSkuIds = items1;
    obj2.index = obj3;
    const items2 = [...set1];
    obj2.legacySingleSkuIds = items2;
    return obj2;
  }, items);
  let isEligibleForSocialLayerStorefrontMobileEmbed =
    memo.index.singleSkuIds.length > 0 || memo.index.multiLinks.length > 0 || memo.legacySingleSkuIds.length > 0;
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    isEligibleForSocialLayerStorefrontMobileEmbed =
      require("SocialLayerStorefrontMobileEmbedExperiment").getIsEligibleForSocialLayerStorefrontMobileEmbed({
        location: "create_coded_link_embeds",
      });
    let obj2 = require("SocialLayerStorefrontMobileEmbedExperiment");
  }
  let isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed = isEligibleForSocialLayerStorefrontMobileEmbed;
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed = memo.index.multiLinks.length > 0;
  }
  if (isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed) {
    isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed =
      require("SocialLayerStorefrontMobileMultiSkuEmbedExperiment").getIsEligibleForSocialLayerStorefrontMobileMultiSkuEmbed(
        { location: "create_coded_link_embeds" },
      );
    let obj3 = require("SocialLayerStorefrontMobileMultiSkuEmbedExperiment");
  }
  let items1 = [
    memo,
    isEligibleForSocialLayerStorefrontMobileEmbed,
    isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed,
  ];
  const memo1 = obj.useMemo(() => {
    if (isEligibleForSocialLayerStorefrontMobileEmbed) {
      index = memo.index;
      if (isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed) {
        let obj = index;
      } else {
        obj = { singleSkuIds: index.singleSkuIds, multiLinks: null, rows: null };
        obj.multiLinks = obj.multiLinks;
        const _Object = Object;
        const _Object2 = Object;
        const entries = Object.entries(tmp2.index.rows);
        obj.rows = Object.fromEntries(
          entries.map((item) => {
            [tmp, arr] = item;
            items = [tmp];
            let found;
            if (arr != null) {
              found = arr.filter((skuIds) => 1 === skuIds.skuIds.length);
            }
            items[1] = found;
            return items;
          }),
        );
      }
    } else {
      return obj;
    }
  }, items1);
  let items2 = [closure_7];
  const items3 = [memo1.multiLinks];
  stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items2,
    () => {
      const multiLinks = memo1.multiLinks;
      return Object.fromEntries(
        multiLinks.map((item) => {
          ({ type, scopeId } = item);
          items = ["" + type + ":" + scopeId];
          if (
            type ===
            stateFromStores(isEligibleForSocialLayerStorefrontMobileEmbed[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP
          ) {
            const obj2 = { type: "application", applicationId: scopeId };
            let obj = obj2;
          } else {
            obj = { type: "guild", guildId: scopeId };
          }
          items[1] = storefrontFetchState.getStorefrontFetchState(obj);
          return items;
        }),
      );
    },
    items3,
  );
  const obj4 = require("initialize");
  const items4 = [stateFromStoresObject1];
  const items5 = [memo1.multiLinks];
  stateFromStoresObject1 = require("initialize").useStateFromStoresObject(
    items4,
    () => {
      const multiLinks = memo1.multiLinks;
      return Object.fromEntries(
        multiLinks.flatMap((skuIds) => {
          skuIds = skuIds.skuIds;
          return skuIds.map((item) => {
            items = [item, closure_1_6.get(item)];
            return items;
          });
        }),
      );
    },
    items5,
  );
  const tmp14 = isEligibleForSocialLayerStorefrontMobileEmbed ? memo1.singleSkuIds : memo.legacySingleSkuIds;
  closure_7 = tmp14;
  const obj5 = require("initialize");
  const tmp12 = stateFromStoresObject1;
  const items6 = [tmp12];
  const items7 = [tmp14];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items6,
    () => {
      const mapped = closure_7.map((item) => stateFromStoresObject1.get(item));
      const found = mapped.filter(GlobalUtils.isNotNullish);
      items = [...new Set(found.map((applicationId) => applicationId.applicationId))];
      return items;
    },
    items7,
  );
  const items8 = [stateFromStoresArray, stateFromStoresObject, stateFromStoresObject1];
  const memo2 = obj.useMemo(() => {
    items = [...stateFromStoresArray];
    const values = Object.values(stateFromStoresObject);
    const values2 = Object.values(stateFromStoresObject1);
    HermesBuiltin.arraySpread(
      values2.flatMap((applicationId) => {
        if (null != applicationId) {
          items = [applicationId.applicationId];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }),
      HermesBuiltin.arraySpread(
        values.flatMap((storefront) => {
          storefront = undefined;
          if (storefront != null) {
            storefront = storefront.storefront;
          }
          if (null != storefront) {
            items = [storefront.storefront.applicationId];
            let items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }),
        tmp,
      ),
    );
    const arraySpreadResult = HermesBuiltin.arraySpread(
      values.flatMap((storefront) => {
        storefront = undefined;
        if (storefront != null) {
          storefront = storefront.storefront;
        }
        if (null != storefront) {
          items = [storefront.storefront.applicationId];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }),
      tmp,
    );
    let items1 = [...new Set(items)];
    return items1;
  }, items8);
  stateFromStoresObject.useRef(singleSkuIds);
  const items9 = [memo2];
  const effect = obj.useEffect(() => {
    stateFromStores = async function _fetchApplications(isEligibleForSocialLayerStorefrontMobileEmbed) {
      await closure_2_1(closure_2_2[13]).fetchApplications(closure_1_9, false);
      if (1 === tmp6) {
        c2 = 0;
        c0 = 3;
      } else if (isEligibleForSocialLayerStorefrontMobileEmbed === 1) {
        c0 = 3;
        throw value;
      } else if (isEligibleForSocialLayerStorefrontMobileEmbed !== 2) {
        c2 = 0;
      }
      return value;
    };
    if (!obj.areArraysShallowEqual(memo2, ref.current)) {
      ref.current = memo2;
      if (0 !== memo2.length) {
        (function fetchApplications() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
    }
    obj = stateFromStores(isEligibleForSocialLayerStorefrontMobileEmbed[12]);
  }, items9);
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    singleSkuIds = memo1.singleSkuIds;
  } else {
    singleSkuIds = memo2.singleSkuIds;
  }
  const tmp9Result = require("initialize");
  const fetchSocialLayerStorefrontEmbedWishlist =
    require("useFetchSocialLayerStorefrontEmbedWishlist").useFetchSocialLayerStorefrontEmbedWishlist(
      singleSkuIds.length > 0,
    );
  const tmp9Result5 = require("useFetchSocialLayerStorefrontEmbedWishlist");
  const fetchSocialLayerStorefrontEmbedPrices =
    require("socialLayerStorefrontEmbedPrice").useFetchSocialLayerStorefrontEmbedPrices(singleSkuIds);
  const items10 = [singleSkuIds];
  const effect1 = obj.useEffect(() => SocialLayerStorefrontEmbedStore.watch(singleSkuIds), items10);
  const tmp9Result6 = require("socialLayerStorefrontEmbedPrice");
  const items11 = [stateFromStoresArray];
  const items12 = [singleSkuIds];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(
    items11,
    () => {
      if (singleSkuIds.length > 0) {
        let wishlistSkuIds = SocialLayerStorefrontEmbedStore.getWishlistSkuIds();
      } else {
        wishlistSkuIds = ref.wishlistSkuIds;
      }
      return wishlistSkuIds;
    },
    items12,
  );
  const tmp9Result7 = require("initialize");
  const items13 = [stateFromStoresArray];
  const items14 = [singleSkuIds];
  const stateFromStoresObject2 = require("initialize").useStateFromStoresObject(
    items13,
    () =>
      Object.fromEntries(
        singleSkuIds.map((item) => {
          items = [item, price.getPrice(item)];
          return items;
        }),
      ),
    items14,
  );
  const items15 = [
    isEligibleForSocialLayerStorefrontMobileEmbed,
    memo1,
    stateFromStoresArray1,
    stateFromStoresObject2,
    stateFromStoresObject,
    stateFromStoresObject1,
  ];
  return stateFromStoresObject.useMemo(() => {
    if (isEligibleForSocialLayerStorefrontMobileEmbed) {
      const obj = {
        index: memo1,
        wishlistSkuIds: stateFromStoresArray1,
        prices: stateFromStoresObject2,
        storefronts: stateFromStoresObject,
        skus: stateFromStoresObject1,
      };
      let tmp = obj;
    } else {
      tmp = closure_10;
    }
    return tmp;
  }, items15);
}
export function shouldRefreshSocialLayerStorefrontEmbed(
  codedLinks,
  socialLayerStorefrontEmbedData,
  socialLayerStorefrontEmbedData2,
) {
  items = fetchingSkuIds;
  if (fetchingSkuIds === undefined) {
    items = [];
  }
  let items1 = invalidApplicationIds;
  if (invalidApplicationIds === undefined) {
    items1 = [];
  }
  if (null != socialLayerStorefrontEmbedData2.index.rows[codedLinks.id]) {
    let someResult = obj.some((skuIds) => {
      skuIds = skuIds.skuIds;
      socialLayerStorefrontEmbedData = tmp;
      const combined = "" + skuIds.type + ":" + skuIds.scopeId;
      let tmp3 = !tmp;
      if (skuIds.length > 1) {
        tmp3 =
          socialLayerStorefrontEmbedData.storefronts[combined] ===
          socialLayerStorefrontEmbedData2.storefronts[combined];
      }
      let someResult = !tmp3;
      if (tmp3) {
        someResult = skuIds.some((item) => {
          value = SKUStore.get(item);
          if (prices) {
            let hasItem1 = prices.skus[item] !== closure_1.skus[item];
          } else {
            const wishlistSkuIds = prices.wishlistSkuIds;
            const wishlistSkuIds2 = closure_1.wishlistSkuIds;
            const hasItem = wishlistSkuIds.includes(item);
            hasItem1 = hasItem !== wishlistSkuIds2.includes(item);
            if (!hasItem1) {
              hasItem1 = prices.prices[item] !== closure_1.prices[item];
            }
          }
          if (!hasItem1) {
            hasItem1 = items.includes(item);
          }
          if (!hasItem1) {
            let hasItem2 = null != value;
            if (hasItem2) {
              hasItem2 = items1.includes(value.applicationId);
            }
            hasItem1 = hasItem2;
          }
          return hasItem1;
        });
      }
      return someResult;
    });
  } else {
    someResult = 0 !== items.length || 0 !== items1.length;
    if (someResult) {
      codedLinks = codedLinks.codedLinks;
      someResult = codedLinks.some((item) => {
        ({ type, code } = item);
        if (type !== CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
          if (type !== CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
            return false;
          }
        }
        const first = _slicedToArray(code.split("-"), 1)[0];
        if (items.includes(first)) {
          return true;
        } else {
          value = SKUStore.get(first);
          let hasItem = null != value;
          if (hasItem) {
            hasItem = items1.includes(value.applicationId);
          }
          return hasItem;
        }
      });
    }
  }
  return someResult;
}
