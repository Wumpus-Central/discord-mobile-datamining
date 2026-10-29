// discord_app/modules/collectibles/utils/CollectiblesUtils.tsx
import c from "../../../../_runtime/00576_c.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import useFractionalPremiumInfoDefault from "../../billing/hooks/useFractionalPremiumInfo.tsx";
import ShopVariantsReturnStyle from "../../../../discord_common/js/shared/shared-constants/ShopVariantsReturnStyle.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesUtils.tsx");

export function buildFetchCollectiblesOptionsQuery(noCache, tab) {
  const obj = {};
  if (null != tab) {
    obj.tab = tab;
  }
  if (null != noCache) {
    if (true === noCache.noCache) {
      obj.no_cache = true;
    }
    if (true === noCache.includeUnpublished) {
      obj.include_unpublished = true;
    }
    if (true === noCache.includeBundles) {
      obj.include_bundles = true;
    }
    if (true === noCache.includeDynamicBlocks) {
      obj.include_dynamic_blocks = true;
    }
    let tmp = null != noCache.countryCode;
    if (tmp) {
      tmp = "" !== noCache.countryCode;
    }
    if (tmp) {
      obj.country_code = noCache.countryCode;
    }
    if (null !== noCache.paymentGateway) {
      obj.payment_gateway = noCache.paymentGateway;
    }
    if (noCache.variantsReturnStyle === ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP) {
      obj.variants_return_style = ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP;
    }
    if (null != noCache.shopHomeConfig) {
      obj.shop_home_config = noCache.shopHomeConfig;
    }
    if (null != noCache.skipNumCategories) {
      obj.skip_num_categories = noCache.skipNumCategories;
    }
  }
  return obj;
}
export function getOptimizedProfileEffectThumbnailUrl(arg0) {
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    return "" + arg0 + "?width=100&height=195";
  }
}
export const useFetchFractionalPremiumInfo = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchFractionalPremiumInfo() {
      const cResult = c.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { forceFetch: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp5 = useFractionalPremiumInfoDefault(first);
      if (cResult[1] !== tmp5.endsAt) {
        const dateFormatResult = DateUtils.dateFormat(tmp5.endsAt, "L");
        cResult[1] = tmp5.endsAt;
        cResult[2] = dateFormatResult;
        let tmp6 = dateFormatResult;
        const tmpResult = DateUtils;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp6) {
        if (cResult[4] === tmp5.isFractionalPremiumActive) {
          if (cResult[5] === tmp8) {
            let tmp9 = cResult[6];
          }
          return tmp9;
        }
      }
      const obj3 = {
        isLoading: !tmp5.fetched,
        isFractionalPremiumActive: tmp5.isFractionalPremiumActive,
        expiresAt: tmp6,
      };
      cResult[3] = tmp6;
      cResult[4] = tmp5.isFractionalPremiumActive;
      cResult[5] = !tmp5.fetched;
      cResult[6] = obj3;
      tmp9 = obj3;
    }
  : function useFetchFractionalPremiumInfo() {
      const tmp = useFractionalPremiumInfoDefault({ forceFetch: true });
      return {
        isLoading: !tmp.fetched,
        isFractionalPremiumActive: tmp.isFractionalPremiumActive,
        expiresAt: DateUtils.dateFormat(tmp.endsAt, "L"),
      };
    };
