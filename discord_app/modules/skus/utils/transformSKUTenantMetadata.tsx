// === Module 4490: transformProfileEffectKeyFrameFromServer ===

// Module 4490 (transformProfileEffectKeyFrameFromServer)
import set from "set" /* 2 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1950 */;

function transformProfileEffectKeyFrameFromServer(src) {
  const obj = { src: src.src, loop: src.loop, height: src.height, width: src.width, duration: null, start: null, loopDelay: null, position: null, zIndex: null, randomizedSources: null };
  let num = src.duration;
  if (num == null) {
    num = 0;
  }
  obj[4] = num;
  let num2 = src.start;
  if (num2 == null) {
    num2 = 0;
  }
  obj[5] = num2;
  ({ loopDelay: obj[6], position: obj[7], zIndex: obj[8], randomizedSources } = src);
  let mapped;
  if (randomizedSources != null) {
    mapped = randomizedSources.map((src) => ({ src: src.src }));
  }
  obj[9] = mapped;
  return obj;
}
const result = set.fileFinishedImporting("modules/skus/utils/transformSKUTenantMetadata.tsx");

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
      let obj = { carouselItems: null, expiresAt: null, cardImageAssetId: null, cardBackgroundImageAssetId: null };
      obj[0] = mapped;
      let date;
      if (null != social_layer.expires_at) {
        const _Date = Date;
        date = new Date(social_layer.expires_at);
      }
      obj[1] = date;
      ({ card_image_asset_id: obj[2], card_background_image_asset_id: obj[3] } = social_layer);
      tmp = obj;
    }
    obj = { socialLayer: null, collectibles: null, gameServerPlanFeatures: null };
    obj[0] = tmp;
    const collectibles = social_layer.collectibles;
    let tmp6;
    if (null != collectibles) {
      obj = { type: null, item: null, categorySkuId: null, premiumType: null, expiresSecondsAfterClaim: null, expiresAt: null, variant: null, optionSelectorDisplayValue: null, sourceType: null, isFirstParty: null };
      ({ type: obj3[0], item } = collectibles);
      let tmp7;
      if (null != item) {
        const type = item.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          obj1 = { id: null, type: null, asset: null, assets: null, label: null };
          ({ id: obj7[0], type: obj7[1], asset: obj7[2], assets: assets2 } = item);
          let tmp13;
          if (null != assets2) {
            ({ static_image_path: obj8[0], animated_image_path: obj8[1], video_path: obj8[2] } = assets2);
            tmp13 = { staticImagePath: null, animatedImagePath: null, videoPath: null };
            const obj2 = { staticImagePath: null, animatedImagePath: null, videoPath: null };
          }
          obj1[3] = tmp13;
          obj1[4] = item.label;
          tmp7 = obj1;
        } else if (tmp8(1950).CollectiblesItemType.NAMEPLATE === type) {
          const obj3 = { id: null, type: null, asset: null, assets: null, label: null, palette: null };
          ({ id: obj5[0], type: obj5[1], asset: obj5[2], assets } = item);
          let tmp12;
          if (null != assets) {
            const obj4 = { staticImagePath: null, animatedImagePath: null, videoPath: null };
            ({ static_image_path: obj6[0], animated_image_path: obj6[1], video_path: obj6[2] } = assets);
            tmp12 = obj4;
          }
          obj3[3] = tmp12;
          ({ label: obj5[4], palette: obj5[5] } = item);
          tmp7 = obj3;
        } else if (tmp8(1950).CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj5 = { id: null, type: null, title: null, description: null, accessibilityLabel: null, animationType: null, staticFrameSrc: null, thumbnailPreviewSrc: null, reducedMotionSrc: null, effects: null };
          ({ id: obj4[0], type: obj4[1], title: obj4[2], description: obj4[3], accessibilityLabel: obj4[4], animationType: obj4[5], staticFrameSrc: obj4[6], thumbnailPreviewSrc: obj4[7], reducedMotionSrc: obj4[8], effects } = item);
          let mapped1;
          if (effects != null) {
            mapped1 = effects.map(transformProfileEffectKeyFrameFromServer);
          }
          obj5[9] = mapped1;
          tmp7 = obj5;
        } else if (tmp8(1950).CollectiblesItemType.PROFILE_FRAME === type) {
          const obj6 = { id: null, type: null, label: null, layers: null, innerWidth: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null };
          ({ id: obj10[0], type: obj10[1], label: obj10[2], layers: obj10[3], inner_width: obj10[4], overflow_top: obj10[5], overflow_bottom: obj10[6], overflow_horizontal: obj10[7] } = item);
          tmp7 = obj6;
        }
      }
      obj[1] = tmp7;
      ({ category_sku_id: obj3[2], premium_type: obj3[3], expires_seconds_after_claim: obj3[4] } = collectibles);
      let date1;
      if (null != collectibles.expires_at) {
        const _Date2 = Date;
        date1 = new Date(1000 * collectibles.expires_at);
      }
      obj[5] = date1;
      const variant = collectibles.variant;
      let tmp18;
      if (null != variant) {
        const obj7 = { role: null, baseVariantSkuId: null, baseVariantName: null, value: null, label: null, collapseUnder: null };
        ({ role: obj9[0], base_variant_sku_id: obj9[1], base_variant_name: obj9[2], value: obj9[3], label: obj9[4], collapse_under: obj9[5] } = variant);
        tmp18 = obj7;
      }
      obj[6] = tmp18;
      ({ option_selector_display_value: obj3[7], source_type: obj3[8], is_first_party: obj3[9] } = collectibles);
      tmp6 = obj;
    }
    obj[1] = tmp6;
    const plan_features = social_layer.plan_features;
    let mapped2;
    if (plan_features != null) {
      mapped2 = plan_features.map((title) => ({ title: title.title, description: title.description }));
    }
    obj[2] = mapped2;
    return obj;
  }
};