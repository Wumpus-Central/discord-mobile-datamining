// === Module 5514: transformSKUTenantMetadata ===

// Module 5514 (transformSKUTenantMetadata)
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import size from "module_2" /* 2 */;

function transformProfileEffectKeyFrameFromServer(src) {
  const size = { src: src.src, loop: src.loop, height: src.height, width: src.width, duration: null, start: null, loopDelay: null, position: null, zIndex: null, randomizedSources: null };
  let num = src.duration;
  if (num == null) {
    num = 0;
  }
  size.duration = num;
  let num2 = src.start;
  if (num2 == null) {
    num2 = 0;
  }
  size.start = num2;
  ({ loopDelay: obj.loopDelay, position: obj.position, zIndex: obj.zIndex, randomizedSources } = src);
  let mapped;
  if (randomizedSources != null) {
    mapped = randomizedSources.map((src) => ({ src: src.src }));
  }
  size.randomizedSources = mapped;
  return size;
}
const result = size.fileFinishedImporting("modules/skus/utils/transformSKUTenantMetadata.tsx");

export default function transformSKUTenantMetadata(social_layer) {
  if (null != social_layer) {
    social_layer = social_layer.social_layer;
    let tmp;
    if (null != social_layer) {
      const carousel_items = social_layer.carousel_items;
      let mapped;
      if (carousel_items != null) {
        mapped = carousel_items.map((thumbnailAssetId) => ({ thumbnailAssetId: thumbnailAssetId.thumbnail_asset_id, assetId: thumbnailAssetId.asset_id, backgroundAssetId: thumbnailAssetId.background_asset_id, youtubeVideoId: thumbnailAssetId.youtube_video_id, label: thumbnailAssetId.label, labelIconAssetId: thumbnailAssetId.label_icon_asset_id, title: thumbnailAssetId.title, description: thumbnailAssetId.description }));
      }
      if (mapped == null) {
        mapped = [];
      }
      let obj = { carouselItems: mapped, expiresAt: null, cardImageAssetId: null, cardBackgroundImageAssetId: null };
      let date;
      if (null != social_layer.expires_at) {
        const _Date = Date;
        date = new Date(social_layer.expires_at);
      }
      obj.expiresAt = date;
      ({ card_image_asset_id: obj.cardImageAssetId, card_background_image_asset_id: obj.cardBackgroundImageAssetId } = social_layer);
      tmp = obj;
    }
    obj = { socialLayer: tmp, collectibles: null, gameServerPlanFeatures: null };
    const collectibles = social_layer.collectibles;
    let tmp6;
    if (null != collectibles) {
      obj = { type: null, item: null, categorySkuId: null, premiumType: null, expiresSecondsAfterClaim: null, expiresAt: null, variant: null, optionSelectorDisplayValue: null, sourceType: null, isFirstParty: null };
      ({ type: obj3.type, item } = collectibles);
      let tmp7;
      if (null != item) {
        const type = item.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          const obj1 = { id: null, type: null, asset: null, assets: null, label: null };
          ({ id: obj7.id, type: obj7.type, asset: obj7.asset, assets: assets2 } = item);
          let tmp13;
          if (null != assets2) {
            ({ static_image_path: obj8.staticImagePath, animated_image_path: obj8.animatedImagePath, video_path: obj8.videoPath } = assets2);
            tmp13 = { staticImagePath: null, animatedImagePath: null, videoPath: null };
            const obj2 = { staticImagePath: null, animatedImagePath: null, videoPath: null };
          }
          obj1.assets = tmp13;
          obj1.label = item.label;
          tmp7 = obj1;
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          const obj3 = { id: null, type: null, asset: null, assets: null, label: null, palette: null };
          ({ id: obj5.id, type: obj5.type, asset: obj5.asset, assets } = item);
          let tmp12;
          if (null != assets) {
            const obj4 = { staticImagePath: null, animatedImagePath: null, videoPath: null };
            ({ static_image_path: obj6.staticImagePath, animated_image_path: obj6.animatedImagePath, video_path: obj6.videoPath } = assets);
            tmp12 = obj4;
          }
          obj3.assets = tmp12;
          ({ label: obj5.label, palette: obj5.palette } = item);
          tmp7 = obj3;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj5 = { id: null, type: null, title: null, description: null, accessibilityLabel: null, animationType: null, staticFrameSrc: null, thumbnailPreviewSrc: null, reducedMotionSrc: null, effects: null };
          ({ id: obj4.id, type: obj4.type, title: obj4.title, description: obj4.description, accessibilityLabel: obj4.accessibilityLabel, animationType: obj4.animationType, staticFrameSrc: obj4.staticFrameSrc, thumbnailPreviewSrc: obj4.thumbnailPreviewSrc, reducedMotionSrc: obj4.reducedMotionSrc, effects } = item);
          let mapped1;
          if (effects != null) {
            mapped1 = effects.map(transformProfileEffectKeyFrameFromServer);
          }
          obj5.effects = mapped1;
          tmp7 = obj5;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          const obj6 = { id: null, type: null, label: null, layers: null, innerWidth: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null };
          ({ id: obj10.id, type: obj10.type, label: obj10.label, layers: obj10.layers, inner_width: obj10.innerWidth, overflow_top: obj10.overflowTop, overflow_bottom: obj10.overflowBottom, overflow_horizontal: obj10.overflowHorizontal } = item);
          tmp7 = obj6;
        }
      }
      obj.item = tmp7;
      ({ category_sku_id: obj3.categorySkuId, premium_type: obj3.premiumType, expires_seconds_after_claim: obj3.expiresSecondsAfterClaim } = collectibles);
      let date1;
      if (null != collectibles.expires_at) {
        const _Date2 = Date;
        date1 = new Date(1000 * collectibles.expires_at);
      }
      obj.expiresAt = date1;
      const variant = collectibles.variant;
      let tmp18;
      if (null != variant) {
        const obj7 = { role: null, baseVariantSkuId: null, baseVariantName: null, value: null, label: null, collapseUnder: null };
        ({ role: obj9.role, base_variant_sku_id: obj9.baseVariantSkuId, base_variant_name: obj9.baseVariantName, value: obj9.value, label: obj9.label, collapse_under: obj9.collapseUnder } = variant);
        tmp18 = obj7;
      }
      obj.variant = tmp18;
      ({ option_selector_display_value: obj3.optionSelectorDisplayValue, source_type: obj3.sourceType, is_first_party: obj3.isFirstParty } = collectibles);
      tmp6 = obj;
    }
    obj.collectibles = tmp6;
    const plan_features = social_layer.plan_features;
    let mapped2;
    if (plan_features != null) {
      mapped2 = plan_features.map((title) => ({ title: title.title, description: title.description }));
    }
    obj.gameServerPlanFeatures = mapped2;
    return obj;
  }
};