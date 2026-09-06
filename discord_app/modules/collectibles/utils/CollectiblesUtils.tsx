// === Module 7588: utils/CollectiblesUtils ===

// Module 7588 (utils/CollectiblesUtils)
import DateUtils from "DateUtils" /* 4242 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4607 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4615 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7393 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7589 */;
import size from "module_2" /* 2 */;

const ApplicationStreamPresets = StreamSettingsConstants.ApplicationStreamPresets;
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesUtils.tsx");

export const constructGoLiveSource = function constructGoLiveSource(resolution, frameRate, desktopSource) {
  let obj = { qualityOptions: null, context: BaseConnectionEvent.MediaEngineContextTypes.STREAM };
  obj = { preset: ApplicationStreamPresets.PRESET_CUSTOM, resolution, frameRate };
  obj.qualityOptions = obj;
  if (null != desktopSource) {
    if (null != desktopSource.desktopSource) {
      obj = { sourceId: desktopSource.desktopSource.id, sound: true };
      obj.desktopSettings = obj;
    }
    if (null != desktopSource.cameraSource) {
      const obj1 = { videoDeviceGuid: desktopSource.cameraSource.videoDeviceGuid, audioDeviceGuid: desktopSource.cameraSource.audioDeviceGuid };
      obj.cameraSettings = obj1;
    }
  }
  return obj;
};
export const buildFetchCollectiblesOptionsQuery = function buildFetchCollectiblesOptionsQuery(noCache, tab) {
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
};
export const getOptimizedProfileEffectThumbnailUrl = function getOptimizedProfileEffectThumbnailUrl(arg0) {
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    return "" + arg0 + "?width=100&height=195";
  }
};
export const useFetchFractionalPremiumInfo = function useFetchFractionalPremiumInfo() {
  const tmp = useFractionalPremiumInfoDefault({ forceFetch: true });
  let obj = DateUtils;
  obj = { isLoading: !tmp.fetched, isFractionalPremiumActive: tmp.isFractionalPremiumActive, expiresAt: obj.dateFormat(tmp.endsAt, "L") };
  return obj;
};