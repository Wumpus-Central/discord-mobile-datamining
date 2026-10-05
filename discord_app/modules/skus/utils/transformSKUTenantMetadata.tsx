// discord_app/modules/skus/utils/transformSKUTenantMetadata.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

function transformProfileEffectKeyFrameFromServer(src) {
  let mapped;
  let num;
  let num2;
  let randomizedSources;
  size = {
    src: src.src,
    loop: src.loop,
    height: src.height,
    width: src.width,
    duration: num,
    start: num2,
    loopDelay: null,
    position: null,
    zIndex: null,
    randomizedSources: mapped,
  };
  num = src.duration;
  if (num == null) {
    num = 0;
  }
  num2 = src.start;
  if (num2 == null) {
    num2 = 0;
  }
  ({ loopDelay: obj.loopDelay, position: obj.position, zIndex: obj.zIndex, randomizedSources } = src);
  mapped = undefined;
  if (randomizedSources != null) {
    mapped = randomizedSources.map((src) => ({ src: src.src }));
  }
  return size;
}
let size = size_mod;
const result = size.fileFinishedImporting("modules/skus/utils/transformSKUTenantMetadata.tsx");

export default function transformSKUTenantMetadata(social_layer) {
  let assets;
  let assets2;
  let date;
  let date1;
  let effects;
  let item;
  let mapped1;
  let mapped2;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp4;
  let tmp5;
  if (null != social_layer) {
    social_layer = social_layer.social_layer;
    let tmp;
    if (null != social_layer) {
      const carousel_items = social_layer.carousel_items;
      let mapped;
      if (carousel_items != null) {
        mapped = carousel_items.map((thumbnailAssetId) => ({
          thumbnailAssetId: thumbnailAssetId.thumbnail_asset_id,
          assetId: thumbnailAssetId.asset_id,
          backgroundAssetId: thumbnailAssetId.background_asset_id,
          youtubeVideoId: thumbnailAssetId.youtube_video_id,
          label: thumbnailAssetId.label,
          labelIconAssetId: thumbnailAssetId.label_icon_asset_id,
          title: thumbnailAssetId.title,
          description: thumbnailAssetId.description,
        }));
      }
      if (mapped == null) {
        mapped = [];
      }
      const obj = { carouselItems: mapped, expiresAt: date, cardImageAssetId: null, cardBackgroundImageAssetId: null };
      date = undefined;
      if (null != social_layer.expires_at) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date(social_layer.expires_at);
      }
      ({ card_image_asset_id: obj.cardImageAssetId, card_background_image_asset_id: obj.cardBackgroundImageAssetId } =
        social_layer);
      tmp = obj;
    }
    const collectibles = social_layer.collectibles;
    const obj2 = { socialLayer: tmp, collectibles: tmp4, gameServerPlanFeatures: mapped2 };
    tmp4 = undefined;
    if (null != collectibles) {
      const obj19 = {
        type: null,
        item: tmp5,
        categorySkuId: null,
        premiumType: null,
        expiresSecondsAfterClaim: null,
        expiresAt: date1,
        variant: tmp14,
        optionSelectorDisplayValue: null,
        sourceType: null,
        isFirstParty: null,
      };
      ({ type: obj3.type, item } = collectibles);
      tmp5 = undefined;
      if (null != item) {
        const type = item.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          const obj20 = { id: null, type: null, asset: null, assets: tmp11, label: item.label };
          ({ id: obj7.id, type: obj7.type, asset: obj7.asset, assets: assets2 } = item);
          tmp11 = undefined;
          if (null != assets2) {
            const obj21 = { staticImagePath: null, animatedImagePath: null, videoPath: null };
            ({
              static_image_path: obj8.staticImagePath,
              animated_image_path: obj8.animatedImagePath,
              video_path: obj8.videoPath,
            } = assets2);
            tmp11 = obj21;
          }
          tmp5 = obj20;
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          const obj22 = { id: null, type: null, asset: null, assets: tmp10, label: null, palette: null };
          ({ id: obj5.id, type: obj5.type, asset: obj5.asset, assets } = item);
          tmp10 = undefined;
          if (null != assets) {
            const obj23 = { staticImagePath: null, animatedImagePath: null, videoPath: null };
            ({
              static_image_path: obj6.staticImagePath,
              animated_image_path: obj6.animatedImagePath,
              video_path: obj6.videoPath,
            } = assets);
            tmp10 = obj23;
          }
          ({ label: obj5.label, palette: obj5.palette } = item);
          tmp5 = obj22;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj24 = {
            id: null,
            type: null,
            title: null,
            description: null,
            accessibilityLabel: null,
            animationType: null,
            staticFrameSrc: null,
            thumbnailPreviewSrc: null,
            reducedMotionSrc: null,
            effects: mapped1,
          };
          ({
            id: obj4.id,
            type: obj4.type,
            title: obj4.title,
            description: obj4.description,
            accessibilityLabel: obj4.accessibilityLabel,
            animationType: obj4.animationType,
            staticFrameSrc: obj4.staticFrameSrc,
            thumbnailPreviewSrc: obj4.thumbnailPreviewSrc,
            reducedMotionSrc: obj4.reducedMotionSrc,
            effects,
          } = item);
          mapped1 = undefined;
          if (effects != null) {
            mapped1 = effects.map(transformProfileEffectKeyFrameFromServer);
          }
          tmp5 = obj24;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          const obj25 = {
            id: null,
            type: null,
            label: null,
            layers: null,
            innerWidth: null,
            overflowTop: null,
            overflowBottom: null,
            overflowHorizontal: null,
          };
          ({
            id: obj10.id,
            type: obj10.type,
            label: obj10.label,
            layers: obj10.layers,
            inner_width: obj10.innerWidth,
            overflow_top: obj10.overflowTop,
            overflow_bottom: obj10.overflowBottom,
            overflow_horizontal: obj10.overflowHorizontal,
          } = item);
          tmp5 = obj25;
        }
      }
      ({
        category_sku_id: obj3.categorySkuId,
        premium_type: obj3.premiumType,
        expires_seconds_after_claim: obj3.expiresSecondsAfterClaim,
      } = collectibles);
      date1 = undefined;
      if (null != collectibles.expires_at) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        date1 = new Date(1000 * collectibles.expires_at);
      }
      const variant = collectibles.variant;
      tmp14 = undefined;
      if (null != variant) {
        const obj26 = {
          role: null,
          baseVariantSkuId: null,
          baseVariantName: null,
          value: null,
          label: null,
          collapseUnder: null,
        };
        ({
          role: obj9.role,
          base_variant_sku_id: obj9.baseVariantSkuId,
          base_variant_name: obj9.baseVariantName,
          value: obj9.value,
          label: obj9.label,
          collapse_under: obj9.collapseUnder,
        } = variant);
        tmp14 = obj26;
      }
      ({
        option_selector_display_value: obj3.optionSelectorDisplayValue,
        source_type: obj3.sourceType,
        is_first_party: obj3.isFirstParty,
      } = collectibles);
      tmp4 = obj19;
    }
    const plan_features = social_layer.plan_features;
    mapped2 = undefined;
    if (plan_features != null) {
      mapped2 = plan_features.map((title) => ({ title: title.title, description: title.description }));
    }
    return obj2;
  }
}
