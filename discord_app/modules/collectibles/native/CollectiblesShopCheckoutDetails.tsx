// discord_app/modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FractionalPremiumSKUs from "../../../../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx";
import util from "../../../intl/index.native.tsx";
import utils from "../nameplates/utils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import useShopProductItems from "../hooks/useShopProductItems.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import useMaybeFetchProfileFrameDefault from "../profile_frames/hooks/useMaybeFetchProfileFrame.tsx";
import useProfileEffectDefault from "../profile_effects/useProfileEffect.tsx";
import BundleSampleV2Default from "BundleSampleV2.tsx";
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2.tsx";
import NameplateDefault from "../nameplates/native/Nameplate.tsx";
import ProfileFrameSamplePreviewDefault from "../profile_frames/native/previews/ProfileFrameSamplePreview.tsx";
import _modDef9028 from "../../../../discord_assets/assets/orbs/orb_profile_badge_icon-2x.png.js";
import FractionalNitroCoinIllustration from "FractionalNitroCoinIllustration.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import getProductName from "../utils/getProductName.tsx";
import _modDef12659 from "../../../../discord_assets/assets/collectibles/previews/sample_profile_small.png.js";
import OrbCheckoutAmountTagDefault from "../../virtual_currency/native/OrbCheckoutAmountTag.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const EXTERNAL_PRODUCT_SKU_IDS = fn(1087).EXTERNAL_PRODUCT_SKU_IDS;
const CollectiblesPreviewConstants = fn(8982);
({ BUNDLE_PREVIEW_CONFIG: metroRequire, SAMPLE_PROFILE_ASPECT_RATIO } = CollectiblesPreviewConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(5091);
let obj2 = {
  externalProductImage: { width: 45, height: 45 },
  bundlePreviewContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: nativeDefault.radii.xs,
  },
  bundlePreviewScale: { overflow: "hidden", alignItems: "center", justifyContent: "center" },
  productContainer: null,
  productDetailsContainer: null,
  productPreviewContainer: null,
  productDetails: null,
  productDetailsTextContainer: null,
  errorContainer: null,
};
let obj3 = { alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.xs };
obj2.productContainer = {
  borderRadius: nativeDefault.radii.lg,
  flexDirection: "column",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj4 = {
  borderRadius: nativeDefault.radii.lg,
  flexDirection: "column",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.productDetailsContainer = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
};
obj2.productPreviewContainer = { justifyContent: "center", alignItems: "center" };
let obj5 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
};
obj2.productDetails = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj6 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.productDetailsTextContainer = { gap: nativeDefault.space.PX_4 };
let obj7 = { gap: nativeDefault.space.PX_4 };
obj2.errorContainer = {
  height: 36,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  borderBottomLeftRadius: nativeDefault.radii.lg,
  borderBottomRightRadius: nativeDefault.radii.lg,
};
let closure_9 = createStyles.createStyles(obj2);
createStyles = fn(5091);
let closure_10 = createStyles.createStyles((arg0) => {
  const colors = nativeDefault.colors;
  if (arg0) {
    let BORDER_FEEDBACK_CRITICAL = colors.BACKGROUND_BRAND;
    let tmp4 = importDefault;
  } else {
    BORDER_FEEDBACK_CRITICAL = colors.BORDER_FEEDBACK_CRITICAL;
    tmp4 = importDefault;
  }
  const obj = {
    giftProductContainer: {
      borderWidth: 2,
      borderColor: BORDER_FEEDBACK_CRITICAL,
      marginHorizontal: tmp4(587).space.PX_16,
      backgroundColor: "set",
    },
  };
  return obj;
});
createStyles = fn(5091);
const obj11 = { profileEffectContainer: null, profileEffect: null };
let size = {
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
obj11.profileEffectContainer = size;
obj11.profileEffect = { position: "absolute", width: "100%", aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, top: 0 };
let closure_11 = createStyles.createStyles(obj11);
createStyles = fn(5091);
const obj12 = { nameplate: null };
let obj8 = {
  height: 36,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  borderBottomLeftRadius: nativeDefault.radii.lg,
  borderBottomRightRadius: nativeDefault.radii.lg,
};
obj12.nameplate = { borderRadius: nativeDefault.radii.xs };
let closure_12 = createStyles.createStyles(obj12);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProfileEffectAssetPreview(item) {
      const cResult = c.c(14);
      let profileEffectContainer = closure_11();
      const tmp4 = useProfileEffectDefault(item.item.skuId);
      if (null == tmp4) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { uri: _modDef12659 };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === tmp4.accessibilityLabel) {
          if (cResult[2] === profileEffectContainer.profileEffect) {
            let tmp7 = cResult[3];
          }
          if (cResult[4] !== tmp4.thumbnailPreviewSrc) {
            const obj3 = { uri: tmp4.thumbnailPreviewSrc };
            cResult[4] = tmp4.thumbnailPreviewSrc;
            cResult[5] = obj3;
            let tmp10 = obj3;
          } else {
            tmp10 = cResult[5];
          }
          if (cResult[6] === tmp4.title) {
            if (cResult[7] === profileEffectContainer.profileEffect) {
              if (cResult[8] === tmp10) {
                let tmp11 = cResult[9];
              }
              if (cResult[10] === profileEffectContainer.profileEffectContainer) {
                if (cResult[11] === tmp7) {
                }
              }
              const obj4 = { style: profileEffectContainer.profileEffectContainer, children: null };
              const items = [tmp7, tmp11];
              obj4.children = items;
              const tmp17 = closure_1_8(View, obj4);
              profileEffectContainer = profileEffectContainer.profileEffectContainer;
              cResult[10] = profileEffectContainer;
              cResult[11] = tmp7;
              cResult[12] = tmp11;
              cResult[13] = tmp17;
            }
          }
          const obj5 = {
            style: profileEffectContainer.profileEffect,
            source: tmp10,
            accessibilityLabel: tmp4.title,
            resizeMode: "cover",
          };
          const tmp13 = React5(FastImageDefault, obj5);
          cResult[6] = tmp4.title;
          cResult[7] = profileEffectContainer.profileEffect;
          cResult[8] = tmp10;
          cResult[9] = tmp13;
          tmp11 = tmp13;
        }
        const obj6 = {
          source: first,
          accessibilityLabel: tmp4.accessibilityLabel,
          style: profileEffectContainer.profileEffect,
          resizeMode: "cover",
        };
        const tmp9 = React5(FastImageDefault, obj6);
        cResult[1] = tmp4.accessibilityLabel;
        cResult[2] = profileEffectContainer.profileEffect;
        cResult[3] = tmp9;
        tmp7 = tmp9;
      }
    }
  : function ProfileEffectAssetPreview(item) {
      const tmp = closure_11();
      const tmp4 = useProfileEffectDefault(item.item.skuId);
      let tmp5 = null;
      if (null != tmp4) {
        const obj = { style: tmp.profileEffectContainer, children: null };
        const obj2 = { source: null, accessibilityLabel: null, style: null, resizeMode: "cover" };
        const obj3 = { uri: _modDef12659 };
        obj2.source = obj3;
        obj2.accessibilityLabel = tmp4.accessibilityLabel;
        obj2.style = tmp.profileEffect;
        const items = [React5(FastImageDefault, obj2)];
        const obj4 = { style: tmp.profileEffect, source: null, accessibilityLabel: null, resizeMode: "cover" };
        const obj5 = { uri: tmp4.thumbnailPreviewSrc };
        obj4.source = obj5;
        obj4.accessibilityLabel = tmp4.title;
        items[1] = React5(FastImageDefault, obj4);
        obj.children = items;
        tmp5 = closure_1_8(View, obj);
        const tmp2Result = FastImageDefault;
      }
      return tmp5;
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProfileFrameAssetPreview(item) {
      let BACKGROUND_BASE_LOW = dependencyMap;
      const cResult = c.c(4);
      ({ width, height } = item);
      const tmp3 = useMaybeFetchProfileFrameDefault(item.item.skuId);
      if (null == tmp3) {
        return null;
      } else {
        if (cResult[0] === height) {
          if (cResult[1] === tmp3) {
          }
        }
        const obj2 = { profileFrame: tmp3, previewWidth: width, previewHeight: height, profileBackgroundColor: null };
        BACKGROUND_BASE_LOW = nativeDefault.colors.BACKGROUND_BASE_LOW;
        obj2.profileBackgroundColor = BACKGROUND_BASE_LOW;
        const tmp7 = React5(ProfileFrameSamplePreviewDefault, obj2);
        cResult[0] = height;
        cResult[1] = tmp3;
        cResult[2] = width;
        cResult[3] = tmp7;
        const tmp2Result = ProfileFrameSamplePreviewDefault;
      }
    }
  : function ProfileFrameAssetPreview(arg0) {
      ({ item, width, height } = arg0);
      const tmp3 = useMaybeFetchProfileFrameDefault(item.skuId);
      let tmp4 = null;
      if (null != tmp3) {
        const obj = {
          profileFrame: tmp3,
          previewWidth: width,
          previewHeight: height,
          profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
        };
        tmp4 = React5(ProfileFrameSamplePreviewDefault, obj);
        const tmpResult = ProfileFrameSamplePreviewDefault;
      }
      return tmp4;
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BundleAssetPreview(arg0) {
      const cResult = c.c(26);
      ({ product, width, height } = arg0);
      const tmp3 = closure_9();
      const shopProductItems = useShopProductItems.useShopProductItems(product);
      ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
      const bundleWidth = timestampProducer.small.bundleWidth;
      const result = width / bundleWidth;
      if (cResult[0] === height) {
        if (cResult[1] === width) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp3.bundlePreviewContainer) {
          if (cResult[4] === tmp6) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] !== result) {
            const size = { width: bundleWidth, height: bundleWidth, transform: null };
            const obj3 = { scale: result };
            const items = [obj3];
            size.transform = items;
            cResult[6] = result;
            cResult[7] = size;
            let tmp8 = size;
          } else {
            tmp8 = cResult[7];
          }
          if (cResult[8] === tmp3.bundlePreviewScale) {
            if (cResult[9] === tmp8) {
              let tmp9 = cResult[10];
            }
            if (cResult[11] === height) {
              if (cResult[12] === width) {
                let tmp10 = cResult[13];
              }
              if (cResult[14] === firstAvatarDecoration) {
                if (cResult[15] === firstNameplate) {
                  if (cResult[16] === firstProfileEffect) {
                    if (cResult[17] === product.previewAssets) {
                      if (cResult[18] === tmp10) {
                        let tmp11 = cResult[19];
                      }
                      if (cResult[20] === tmp9) {
                        if (cResult[21] === tmp11) {
                          let tmp15 = cResult[22];
                        }
                        if (cResult[23] === tmp7) {
                          if (cResult[24] === tmp15) {
                            let tmp19 = cResult[25];
                          }
                          return tmp19;
                        }
                        const obj4 = { style: tmp7, children: tmp15 };
                        const tmp22 = React5(View, obj4);
                        cResult[23] = tmp7;
                        cResult[24] = tmp15;
                        cResult[25] = tmp22;
                        tmp19 = tmp22;
                      }
                      const obj5 = { style: tmp9, children: tmp11 };
                      const tmp18 = React5(View, obj5);
                      cResult[20] = tmp9;
                      cResult[21] = tmp11;
                      cResult[22] = tmp18;
                      tmp15 = tmp18;
                    }
                  }
                }
              }
              const obj6 = {
                deco: firstAvatarDecoration,
                pfx: firstProfileEffect,
                nameplate: firstNameplate,
                previewAssets: product.previewAssets,
                disableStaticBackground: true,
                size: "small",
                targetSize: tmp10,
              };
              const tmp14 = React5(BundleSampleV2Default, obj6);
              cResult[14] = firstAvatarDecoration;
              cResult[15] = firstNameplate;
              cResult[16] = firstProfileEffect;
              cResult[17] = product.previewAssets;
              cResult[18] = tmp10;
              cResult[19] = tmp14;
              tmp11 = tmp14;
            }
            const size1 = { width, height };
            cResult[11] = height;
            cResult[12] = width;
            cResult[13] = size1;
            tmp10 = size1;
          }
          const items1 = [tmp3.bundlePreviewScale, tmp8];
          cResult[8] = tmp3.bundlePreviewScale;
          cResult[9] = tmp8;
          cResult[10] = items1;
          tmp9 = items1;
        }
        const items2 = [tmp3.bundlePreviewContainer, tmp6];
        cResult[3] = tmp3.bundlePreviewContainer;
        cResult[4] = tmp6;
        cResult[5] = items2;
        tmp7 = items2;
      }
      const size2 = { width, height };
      cResult[0] = height;
      cResult[1] = width;
      cResult[2] = size2;
      tmp6 = size2;
    }
  : function BundleAssetPreview(height) {
      ({ product, width } = height);
      height = height.height;
      const tmp = closure_9();
      closure_2 = tmp;
      const shopProductItems = useShopProductItems.useShopProductItems(product);
      const bundleWidth = timestampProducer.small.bundleWidth;
      const result = width / bundleWidth;
      c4 = result;
      let items = [tmp.bundlePreviewContainer, width, height];
      ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
      let items1 = [tmp.bundlePreviewScale, bundleWidth, result];
      const memo = noop.useMemo(() => {
        const items = [closure_2.bundlePreviewContainer];
        const size = { width, height };
        items[1] = size;
        return items;
      }, items);
      const items2 = [width, height];
      const memo1 = noop.useMemo(() => {
        const items = [closure_2.bundlePreviewScale];
        const size = { width: bundleWidth, height: bundleWidth, transform: null };
        const items1 = [{ scale }];
        size.transform = items1;
        items[1] = size;
        return items;
      }, items1);
      const obj2 = { style: memo, children: null };
      const obj3 = { style: memo1, children: null };
      const memo2 = noop.useMemo(() => {
        const size = { width, height };
        return size;
      }, items2);
      obj3.children = React5(BundleSampleV2Default, {
        deco: firstAvatarDecoration,
        pfx: firstProfileEffect,
        nameplate: firstNameplate,
        previewAssets: product.previewAssets,
        disableStaticBackground: true,
        size: "small",
        targetSize: memo2,
      });
      obj2.children = React5(View, obj3);
      return React5(View, obj2);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NameplateAssetPreview(item) {
      const cResult = c.c(5);
      item = item.item;
      const tmp4 = closure_12();
      if (cResult[0] !== item) {
        const nameplateData = utils.getNameplateData(item);
        cResult[0] = item;
        cResult[1] = nameplateData;
        let tmp5 = nameplateData;
        const tmpResult = utils;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp4.nameplate) {
          let tmp7 = cResult[4];
        }
        return tmp7;
      }
      const tmp8 = React5(NameplateDefault, {
        nameplate: tmp5,
        fullOpacity: true,
        isSquarePreview: true,
        style: tmp4.nameplate,
      });
      cResult[2] = tmp5;
      cResult[3] = tmp4.nameplate;
      cResult[4] = tmp8;
      tmp7 = tmp8;
      const obj2 = { nameplate: tmp5, fullOpacity: true, isSquarePreview: true, style: tmp4.nameplate };
    }
  : function NameplateAssetPreview(item) {
      const tmp = closure_12();
      const nameplateData = utils.getNameplateData(item.item);
      return React5(NameplateDefault, {
        nameplate: nameplateData,
        fullOpacity: true,
        isSquarePreview: true,
        style: tmp.nameplate,
      });
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectibleProductPreview(arg0) {
      const cResult = c.c(15);
      ({ product, recipientUser } = arg0);
      const tmp4 = closure_9();
      if (product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        let num = 42;
      } else {
        num = 55;
      }
      if (cResult[0] === recipientUser) {
        if (cResult[1] === num) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] !== num) {
          const size = { height: 55, width: num };
          cResult[3] = num;
          cResult[4] = size;
          let tmp7 = size;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp4.productPreviewContainer) {
          if (cResult[6] === tmp7) {
            let tmp8 = cResult[7];
          }
          if (cResult[8] === product) {
            if (cResult[9] === tmp5) {
              if (cResult[10] === num) {
                let tmp9 = cResult[11];
              }
              if (cResult[12] === tmp8) {
                if (cResult[13] === tmp9) {
                  let tmp13 = cResult[14];
                }
                return tmp13;
              }
              const obj2 = { style: tmp8, children: tmp9 };
              const tmp16 = React5(View, obj2);
              cResult[12] = tmp8;
              cResult[13] = tmp9;
              cResult[14] = tmp16;
              tmp13 = tmp16;
            }
          }
          const size1 = { product, width: num, height: 55, userAvatarSource: tmp5 };
          const tmp12 = React5(closure_18, size1);
          cResult[8] = product;
          cResult[9] = tmp5;
          cResult[10] = num;
          cResult[11] = tmp12;
          tmp9 = tmp12;
        }
        const items = [tmp4.productPreviewContainer, tmp7];
        cResult[5] = tmp4.productPreviewContainer;
        cResult[6] = tmp7;
        cResult[7] = items;
        tmp8 = items;
      }
      let avatarSource;
      if (recipientUser != null) {
        avatarSource = recipientUser.getAvatarSource(undefined, false, num);
      }
      cResult[0] = recipientUser;
      cResult[1] = num;
      cResult[2] = avatarSource;
      tmp5 = avatarSource;
    }
  : function CollectibleProductPreview(arg0) {
      ({ product, recipientUser } = arg0);
      if (product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        let num = 42;
      } else {
        num = 55;
      }
      let avatarSource;
      if (recipientUser != null) {
        avatarSource = recipientUser.getAvatarSource(undefined, false, num);
      }
      const obj = {
        style: null,
        children: React5(closure_18, { product, width: num, height: 55, userAvatarSource: avatarSource }),
      };
      const items = [closure_9().productPreviewContainer, { height: 55, width: num }];
      obj.style = items;
      return React5(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectibleProductPreviewContent(arg0) {
      const cResult = c.c(21);
      ({ product, width, height, userAvatarSource } = arg0);
      const tmp4 = closure_9();
      const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
      if (ALL.has(product.skuId)) {
        if (cResult[0] !== product.skuId) {
          const size = {
            skuId: product.skuId,
            width: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT,
            height: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT,
          };
          const tmp39 = React5(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
          cResult[0] = product.skuId;
          cResult[1] = tmp39;
          let tmp37 = tmp39;
        } else {
          tmp37 = cResult[1];
        }
        return tmp37;
      } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { uri: _modDef9028 };
          cResult[2] = obj2;
          let tmp31 = obj2;
        } else {
          tmp31 = cResult[2];
        }
        if (cResult[3] !== tmp4.externalProductImage) {
          const obj3 = { source: tmp31, style: tmp4.externalProductImage };
          const tmp36 = React5(FastImageDefault, obj3);
          cResult[3] = tmp4.externalProductImage;
          cResult[4] = tmp36;
          let tmp33 = tmp36;
        } else {
          tmp33 = cResult[4];
        }
        return tmp33;
      } else {
        const type = product.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          if (cResult[5] === product.items[0]) {
            if (cResult[6] === userAvatarSource) {
              if (cResult[7] === width) {
                let tmp26 = cResult[8];
              }
              return tmp26;
            }
          }
          const obj4 = { item: product.items[0], size: width, avatarSource: userAvatarSource, animate: false };
          const tmp29 = React5(AvatarDecorationSampleV2Default, obj4);
          cResult[5] = product.items[0];
          cResult[6] = userAvatarSource;
          cResult[7] = width;
          cResult[8] = tmp29;
          tmp26 = tmp29;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          const first = product.items[0];
          if (cResult[9] !== first) {
            const obj5 = { item: first };
            const tmp25 = React5(closure_13, obj5);
            cResult[9] = first;
            cResult[10] = tmp25;
            let tmp22 = tmp25;
          } else {
            tmp22 = cResult[10];
          }
          return tmp22;
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          const first1 = product.items[0];
          if (cResult[11] !== first1) {
            const obj6 = { item: first1 };
            const tmp20 = React5(closure_16, obj6);
            cResult[11] = first1;
            cResult[12] = tmp20;
            let tmp17 = tmp20;
          } else {
            tmp17 = cResult[12];
          }
          return tmp17;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          const first2 = product.items[0];
          if (cResult[13] === height) {
            if (cResult[14] === first2) {
              if (cResult[15] === width) {
                let tmp12 = cResult[16];
              }
              return tmp12;
            }
          }
          const size1 = { item: first2, width, height };
          const tmp15 = React5(closure_14, size1);
          cResult[13] = height;
          cResult[14] = first2;
          cResult[15] = width;
          cResult[16] = tmp15;
          tmp12 = tmp15;
        } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
          if (cResult[17] === height) {
            if (cResult[18] === product) {
              if (cResult[19] === width) {
                let tmp7 = cResult[20];
              }
              return tmp7;
            }
          }
          const size2 = { product, width, height };
          const tmp10 = React5(closure_15, size2);
          cResult[17] = height;
          cResult[18] = product;
          cResult[19] = width;
          cResult[20] = tmp10;
          tmp7 = tmp10;
        } else {
          return null;
        }
      }
    }
  : function CollectibleProductPreviewContent(userAvatarSource) {
      ({ product, width, height } = userAvatarSource);
      const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
      if (ALL.has(product.skuId)) {
        const size = {
          skuId: product.skuId,
          width: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT,
          height: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT,
        };
        return React5(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size);
      } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
        const obj = { source: null, style: null };
        const obj2 = { uri: _modDef9028 };
        obj.source = obj2;
        obj.style = tmp.externalProductImage;
        return React5(FastImageDefault, obj);
      } else {
        const type = product.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          const obj3 = {
            item: product.items[0],
            size: width,
            avatarSource: userAvatarSource.userAvatarSource,
            animate: false,
          };
          return React5(AvatarDecorationSampleV2Default, obj3);
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj4 = { item: product.items[0] };
          return React5(closure_13, obj4);
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          const obj5 = { item: product.items[0] };
          return React5(closure_16, obj5);
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          const size1 = { item: product.items[0], width, height };
          return React5(closure_14, size1);
        } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
          const size2 = { product, width, height };
          return React5(closure_15, size2);
        } else {
          return null;
        }
      }
      tmp = closure_9();
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProductDetails(arg0) {
      const cResult = c.c(27);
      ({ product, recipientUser } = arg0);
      let productDetails = closure_9();
      const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
      if (ALL.has(product.skuId)) {
        const _Symbol6 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl7 = util.intl;
          const stringResult = intl7.string(util.t.DFMPWS);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
      } else {
        if (product.skuId !== EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
          const type = product.type;
          if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
            const _Symbol5 = Symbol;
            if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
              const intl6 = util.intl;
              const stringResult1 = intl6.string(util.t["7v0T9P"]);
              cResult[2] = stringResult1;
              let tmp20 = stringResult1;
            } else {
              tmp20 = cResult[2];
            }
            let tmp6 = tmp20;
          } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
            const _Symbol4 = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = util.intl;
              const stringResult2 = intl5.string(util.t.wR5wOo);
              cResult[3] = stringResult2;
              let tmp17 = stringResult2;
            } else {
              tmp17 = cResult[3];
            }
            tmp6 = tmp17;
          } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
            const _Symbol3 = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = util.intl;
              const stringResult3 = intl4.string(util.t.x5CoXR);
              cResult[4] = stringResult3;
              let tmp14 = stringResult3;
            } else {
              tmp14 = cResult[4];
            }
            tmp6 = tmp14;
          } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
            const _Symbol2 = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = util.intl;
              const stringResult4 = intl3.string(util.t.GWrZOd);
              cResult[5] = stringResult4;
              let tmp11 = stringResult4;
            } else {
              tmp11 = cResult[5];
            }
            tmp6 = tmp11;
          } else {
            tmp6 = null;
            if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
              const _Symbol7 = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = util.intl;
                const stringResult5 = intl2.string(util.t.Zr5tjn);
                cResult[6] = stringResult5;
                let tmp8 = stringResult5;
              } else {
                tmp8 = cResult[6];
              }
              tmp6 = tmp8;
            }
          }
        } else {
          const _Symbol = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult6 = intl.string(util.t["0+rBWT"]);
            cResult[1] = stringResult6;
            tmp6 = stringResult6;
          } else {
            tmp6 = cResult[1];
          }
        }
        if (null == tmp6) {
          if (cResult[7] !== product.name) {
            const obj2 = { variant: "text-md/semibold", children: product.name };
            const tmp47 = React5(Text_Text.Text, obj2);
            cResult[7] = product.name;
            cResult[8] = tmp47;
            let tmp45 = tmp47;
          } else {
            tmp45 = cResult[8];
          }
          if (cResult[9] === productDetails.productDetails) {
          }
          const obj3 = { style: productDetails.productDetails, children: tmp45 };
          const tmp51 = React5(View, obj3);
          productDetails = productDetails.productDetails;
          cResult[9] = productDetails;
          cResult[10] = tmp45;
          cResult[11] = tmp51;
        } else {
          if (cResult[12] === product) {
            if (cResult[13] === recipientUser) {
              let tmp27 = cResult[14];
            }
            if (cResult[15] !== product.name) {
              const obj4 = { variant: "text-md/semibold", children: product.name };
              const tmp33 = React5(Text_Text.Text, obj4);
              cResult[15] = product.name;
              cResult[16] = tmp33;
              let tmp31 = tmp33;
            } else {
              tmp31 = cResult[16];
            }
            if (cResult[17] !== tmp6) {
              const obj5 = { variant: "text-sm/medium", children: tmp6 };
              const tmp36 = React5(Text_Text.Text, obj5);
              cResult[17] = tmp6;
              cResult[18] = tmp36;
              let tmp34 = tmp36;
            } else {
              tmp34 = cResult[18];
            }
            if (cResult[19] === productDetails.productDetailsTextContainer) {
              if (cResult[20] === tmp31) {
                if (cResult[21] === tmp34) {
                  let tmp37 = cResult[22];
                }
                if (cResult[23] === productDetails.productDetails) {
                  if (cResult[24] === tmp27) {
                    if (cResult[25] === tmp37) {
                      let tmp41 = cResult[26];
                    }
                    return tmp41;
                  }
                }
                const obj6 = { style: productDetails.productDetails, children: null };
                const items = [tmp27, tmp37];
                obj6.children = items;
                const tmp44 = closure_1_8(View, obj6);
                cResult[23] = productDetails.productDetails;
                cResult[24] = tmp27;
                cResult[25] = tmp37;
                cResult[26] = tmp44;
                tmp41 = tmp44;
              }
            }
            const obj7 = { style: productDetails.productDetailsTextContainer, children: null };
            const items1 = [tmp31, tmp34];
            obj7.children = items1;
            const tmp40 = closure_1_8(View, obj7);
            cResult[19] = productDetails.productDetailsTextContainer;
            cResult[20] = tmp31;
            cResult[21] = tmp34;
            cResult[22] = tmp40;
            tmp37 = tmp40;
          }
          const obj8 = { product, recipientUser };
          const tmp30 = React5(closure_17, obj8);
          cResult[12] = product;
          cResult[13] = recipientUser;
          cResult[14] = tmp30;
          tmp27 = tmp30;
        }
      }
    }
  : function ProductDetails(product) {
      product = product.product;
      require = product;
      const tmp = closure_9();
      const items = [,];
      ({ type: arr[0], skuId: arr[1] } = product);
      const memo = noop.useMemo(() => {
        const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
        if (ALL.has(product.skuId)) {
          const intl7 = util.intl;
          return intl7.string(util.t.DFMPWS);
        } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
          const intl6 = util.intl;
          return intl6.string(util.t["0+rBWT"]);
        } else {
          const type = product.type;
          if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
            const intl5 = util.intl;
            return intl5.string(util.t["7v0T9P"]);
          } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
            const intl4 = util.intl;
            return intl4.string(util.t.wR5wOo);
          } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
            const intl3 = util.intl;
            return intl3.string(util.t.x5CoXR);
          } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
            const intl2 = util.intl;
            return intl2.string(util.t.GWrZOd);
          } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
            const intl = util.intl;
            return intl.string(util.t.Zr5tjn);
          } else {
            return null;
          }
        }
      }, items);
      if (null == memo) {
        const obj = { style: tmp.productDetails, children: null };
        const obj2 = { variant: "text-md/semibold", children: product.name };
        obj.children = closure_7(Text_Text.Text, obj2);
        let tmp7 = closure_7(View, obj);
      } else {
        const obj3 = { style: tmp.productDetails, children: null };
        const obj4 = { product, recipientUser: product.recipientUser };
        const items1 = [closure_7(closure_17, obj4)];
        const obj5 = { style: tmp.productDetailsTextContainer, children: null };
        const obj6 = { variant: "text-md/semibold", children: product.name };
        const items2 = [closure_7(Text_Text.Text, obj6)];
        const obj7 = { variant: "text-sm/medium", children: memo };
        items2[1] = closure_7(Text_Text.Text, obj7);
        obj5.children = items2;
        items1[1] = closure_8(View, obj5);
        obj3.children = items1;
        tmp7 = closure_8(View, obj3);
      }
      return tmp7;
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProductPriceAmountTag(arg0) {
      const cResult = c.c(13);
      ({ product, hasShopDiscount, useOrbPrice } = arg0);
      if (useOrbPrice) {
        if (cResult[0] === hasShopDiscount) {
        }
        const obj2 = { product, hasShopDiscount };
        const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice(obj2);
        cResult[0] = hasShopDiscount;
        cResult[1] = product;
        cResult[2] = productOrbPrice;
        const tmpResult = CollectiblesProductUtils;
      } else {
        if (cResult[3] === hasShopDiscount) {
          if (cResult[4] === product) {
            let tmp4 = cResult[5];
          }
          if (cResult[6] === undefined) {
            if (cResult[7] === tmp4) {
              let tmp9 = cResult[8];
            }
            ({ orbPrice, priceText } = tmp9);
            if (useOrbPrice) {
              let amount;
              if (orbPrice != null) {
                amount = orbPrice.amount;
              }
              if (cResult[9] !== amount) {
                const obj3 = { orbAmount: amount };
                const tmp18 = React5(OrbCheckoutAmountTagDefault, obj3);
                cResult[9] = amount;
                cResult[10] = tmp18;
                let tmp15 = tmp18;
              } else {
                tmp15 = cResult[10];
              }
              return tmp15;
            } else {
              if (cResult[11] !== priceText) {
                const obj4 = { variant: "text-md/semibold", children: priceText };
                const tmp12 = React5(Text_Text.Text, obj4);
                cResult[11] = priceText;
                cResult[12] = tmp12;
                let tmp10 = tmp12;
              } else {
                tmp10 = cResult[12];
              }
              return tmp10;
            }
          }
          const obj5 = { orbPrice: undefined, priceText: tmp4 };
          cResult[6] = undefined;
          cResult[7] = tmp4;
          cResult[8] = obj5;
          tmp9 = obj5;
        }
        const formattedPriceForCollectiblesProduct =
          collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, hasShopDiscount, true);
        cResult[3] = hasShopDiscount;
        cResult[4] = product;
        cResult[5] = formattedPriceForCollectiblesProduct;
        tmp4 = formattedPriceForCollectiblesProduct;
        const tmpResult2 = collectibles_CollectiblesUtils;
      }
    }
  : function ProductPriceAmountTag(product) {
      product = product.product;
      require = product;
      const hasShopDiscount = product.hasShopDiscount;
      const useOrbPrice = product.useOrbPrice;
      const items = [product, hasShopDiscount, useOrbPrice];
      const memo = noop.useMemo(() => {
        if (useOrbPrice) {
          const obj = { product, hasShopDiscount };
          const orbPrice = CollectiblesProductUtils.getProductOrbPrice(obj);
          const tmpResult = CollectiblesProductUtils;
        } else {
          const priceText = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(
            product,
            hasShopDiscount,
            true,
          );
          const tmpResult2 = collectibles_CollectiblesUtils;
        }
        return { orbPrice, priceText };
      }, items);
      let orbPrice = memo.orbPrice;
      if (useOrbPrice) {
        let amount;
        if (orbPrice != null) {
          amount = orbPrice.amount;
        }
        const obj2 = { orbAmount: amount };
        let tmp3Result = closure_7(hasShopDiscount(useOrbPrice[27]), obj2);
        const tmp9 = hasShopDiscount(useOrbPrice[27]);
      } else {
        let obj = { variant: "text-md/semibold", children: tmp2 };
        tmp3Result = closure_7(require("Text/Text").Text, obj);
      }
      return tmp3Result;
    };
ReactCompilerGating = fn(558);
const obj14 = { borderRadius: nativeDefault.radii.xs };
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectiblesShopCheckoutDetails(arg0) {
      const cResult = c.c(31);
      ({ product, recipientUser, isValidRecipient, useOrbPrice, isGift } = arg0);
      const tmp7 = closure_9();
      const tmp8 = closure_10(undefined !== isValidRecipient && isValidRecipient);
      const currentUser = useCurrentUser.useCurrentUser();
      if (cResult[0] !== currentUser) {
        const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
        cResult[0] = currentUser;
        cResult[1] = canUseShopDiscountsResult;
        let tmp10 = canUseShopDiscountsResult;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== product) {
        const productNameAndTypeLabel = getProductName.getProductNameAndTypeLabel(product);
        cResult[2] = product;
        cResult[3] = productNameAndTypeLabel;
        let tmp13 = productNameAndTypeLabel;
        const tmpResult4 = getProductName;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === tmp10) {
        if (cResult[5] === product) {
          if (cResult[6] === tmp5) {
            const _HermesInternal = HermesInternal;
            const combined = "" + tmp13 + ", " + cResult[7];
            let giftProductContainer = tmp6;
            if (tmp6) {
              giftProductContainer = tmp8.giftProductContainer;
            }
            if (cResult[8] === tmp7.productContainer) {
              if (cResult[9] === giftProductContainer) {
                let tmp20 = cResult[10];
              }
              if (cResult[11] === product) {
                if (cResult[12] === recipientUser) {
                  let tmp21 = cResult[13];
                }
                if (cResult[14] === tmp10) {
                  if (cResult[15] === product) {
                    if (cResult[16] === tmp5) {
                      let tmp25 = cResult[17];
                    }
                    if (cResult[18] === combined) {
                      if (cResult[19] === tmp7.productDetailsContainer) {
                        if (cResult[20] === tmp25) {
                          if (cResult[21] === tmp21) {
                            let tmp29 = cResult[22];
                          }
                          if (cResult[23] === tmp6) {
                            if (cResult[24] === tmp4) {
                              if (cResult[25] === tmp7.errorContainer) {
                                let tmp33 = cResult[26];
                              }
                              if (cResult[27] === tmp29) {
                                if (cResult[28] === tmp33) {
                                  if (cResult[29] === tmp20) {
                                    let tmp37 = cResult[30];
                                  }
                                  return tmp37;
                                }
                              }
                              const obj2 = { style: tmp20, children: null };
                              const items = [tmp29, tmp33];
                              obj2.children = items;
                              const tmp40 = closure_1_8(View, obj2);
                              cResult[27] = tmp29;
                              cResult[28] = tmp33;
                              cResult[29] = tmp20;
                              cResult[30] = tmp40;
                              tmp37 = tmp40;
                            }
                          }
                          let tmp34 = tmp6;
                          if (tmp6) {
                            tmp34 = !tmp4;
                          }
                          if (tmp34) {
                            const obj4 = { style: tmp7.errorContainer, children: null };
                            const obj5 = {
                              variant: "text-xs/semibold",
                              color: "text-feedback-critical",
                              children: null,
                            };
                            const intl2 = util.intl;
                            obj5.children = intl2.string(util.t["3YfczA"]);
                            obj4.children = React5(Text_Text.Text, obj5);
                            tmp34 = React5(View, obj4);
                          }
                          cResult[23] = tmp6;
                          cResult[24] = tmp4;
                          cResult[25] = tmp7.errorContainer;
                          cResult[26] = tmp34;
                          tmp33 = tmp34;
                        }
                      }
                    }
                    const obj6 = {
                      style: tmp7.productDetailsContainer,
                      accessibilityLabel: combined,
                      accessible: true,
                      children: null,
                    };
                    const items1 = [tmp21, tmp25];
                    obj6.children = items1;
                    const tmp32 = closure_1_8(View, obj6);
                    cResult[18] = combined;
                    cResult[19] = tmp7.productDetailsContainer;
                    cResult[20] = tmp25;
                    cResult[21] = tmp21;
                    cResult[22] = tmp32;
                    tmp29 = tmp32;
                  }
                }
                const obj7 = { product, hasShopDiscount: tmp10, useOrbPrice: tmp5 };
                const tmp28 = React5(closure_20, obj7);
                cResult[14] = tmp10;
                cResult[15] = product;
                cResult[16] = tmp5;
                cResult[17] = tmp28;
                tmp25 = tmp28;
              }
              const obj8 = { product, recipientUser };
              const tmp24 = React5(closure_19, obj8);
              cResult[11] = product;
              cResult[12] = recipientUser;
              cResult[13] = tmp24;
              tmp21 = tmp24;
            }
            const items2 = [tmp7.productContainer, giftProductContainer];
            cResult[8] = tmp7.productContainer;
            cResult[9] = giftProductContainer;
            cResult[10] = items2;
            tmp20 = items2;
          }
        }
      }
      if (undefined !== useOrbPrice && useOrbPrice) {
        const intl = util.intl;
        const obj9 = { product, hasShopDiscount: tmp10 };
        const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice(obj9);
        let str2;
        if (productOrbPrice != null) {
          str2 = productOrbPrice.amount;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj10 = { orbAmount: str2 };
        let str = intl.formatToPlainString(util.t.W4DfeF, obj10);
        const tmpResult5 = CollectiblesProductUtils;
      } else {
        str = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, tmp10, true);
        if (str == null) {
          str = "";
        }
        const tmpResult6 = collectibles_CollectiblesUtils;
      }
      cResult[4] = tmp10;
      cResult[5] = product;
      cResult[6] = undefined !== useOrbPrice && useOrbPrice;
      cResult[7] = str;
      const tmpResult = useCurrentUser;
    }
  : function CollectiblesShopCheckoutDetails(recipientUser) {
      const product = recipientUser.product;
      require = product;
      let flag = recipientUser.isValidRecipient;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = recipientUser.useOrbPrice;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let flag3 = recipientUser.isGift;
      if (flag3 === undefined) {
        flag3 = false;
      }
      const tmp = closure_9();
      const tmp2 = closure_10(flag);
      const currentUser = useCurrentUser.useCurrentUser();
      const canUseShopDiscountsResult = flag2(4728).canUseShopDiscounts(currentUser);
      dependencyMap = canUseShopDiscountsResult;
      const items = [product, flag2, canUseShopDiscountsResult];
      const items1 = [tmp.productContainer];
      let giftProductContainer = flag3;
      const memo = noop.useMemo(() => {
        const productNameAndTypeLabel = getProductName.getProductNameAndTypeLabel(product);
        if (flag2) {
          const intl = util.intl;
          const obj2 = { product, hasShopDiscount };
          const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice(obj2);
          let str2;
          if (productOrbPrice != null) {
            str2 = productOrbPrice.amount;
          }
          if (str2 == null) {
            str2 = "";
          }
          const obj3 = { orbAmount: str2 };
          let str = intl.formatToPlainString(util.t.W4DfeF, obj3);
          const tmpResult = CollectiblesProductUtils;
        } else {
          str = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, hasShopDiscount, true);
          if (str == null) {
            str = "";
          }
          const tmpResult2 = collectibles_CollectiblesUtils;
        }
        return "" + productNameAndTypeLabel + ", " + str;
      }, items);
      if (flag3) {
        giftProductContainer = tmp2.giftProductContainer;
      }
      let obj3 = { style: items1, children: null };
      items1[1] = giftProductContainer;
      const obj4 = { style: tmp.productDetailsContainer, accessibilityLabel: memo, accessible: true, children: null };
      const items2 = [
        closure_7(closure_19, { product, recipientUser: recipientUser.recipientUser }),
        closure_7(closure_20, { product, hasShopDiscount: canUseShopDiscountsResult, useOrbPrice: flag2 }),
      ];
      obj4.children = items2;
      const items3 = [closure_8(View, obj4)];
      if (flag3) {
        flag3 = !flag;
      }
      if (flag3) {
        const obj5 = { style: tmp.errorContainer, children: null };
        const obj6 = { variant: "text-xs/semibold", color: "text-feedback-critical", children: null };
        let intl = tmp3(1126).intl;
        obj6.children = intl.string(tmp3(1126).t["3YfczA"]);
        obj5.children = closure_7(tmp3(5087).Text, obj6);
        flag3 = closure_7(View, obj5);
      }
      items3[1] = flag3;
      obj3.children = items3;
      return closure_8(View, obj3);
    };
