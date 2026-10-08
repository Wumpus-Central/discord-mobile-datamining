// discord_app/modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FractionalPremiumSKUs from "../../../../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import useShopProductItems from "../hooks/useShopProductItems.tsx";
import CheckmarkLargeBoldIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeBoldIcon.tsx";
import CollectiblesShopCardV2 from "CollectiblesShopCardV2.tsx";
import useDefaultVariantIndex from "../hooks/useDefaultVariantIndex.tsx";
import BundleSampleV2Default from "BundleSampleV2.tsx";
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2.tsx";
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2.tsx";
import ProfileFrameSamplePreviewDefault from "../profile_frames/native/previews/ProfileFrameSamplePreview.tsx";
import NameplateCardPreviewDefault from "../nameplates/native/NameplateCardPreview.tsx";
import _modDef9017 from "../../../../discord_assets/assets/orbs/orb_profile_badge_icon-2x.png.js";
import FractionalNitroCoinIllustration from "FractionalNitroCoinIllustration.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const EXTERNAL_PRODUCT_SKU_IDS = fn(1087).EXTERNAL_PRODUCT_SKU_IDS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const diff = fn(8937).COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * nativeDefault.space.PX_16;
const createStyles = fn(5090);
let obj = {
  assetContainer: null,
  overlayContainer: null,
  profileEffectContainer: null,
  profileFrameContainer: null,
  externalProductImage: null,
  purchasedOrDisabled: null,
  overlayIcon: null,
};
let size = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  borderRadius: nativeDefault.radii.sm,
};
obj.assetContainer = size;
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj3.width = "100%";
obj3.height = "75%";
obj.overlayContainer = obj3;
let size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.profileEffectContainer = size1;
obj.profileFrameContainer = { width: "100%", height: diff, alignItems: "center" };
obj.externalProductImage = { width: 80, height: 80, resizeMode: "contain" };
obj.purchasedOrDisabled = { opacity: 0.4 };
obj.overlayIcon = { position: "absolute", opacity: 1, color: nativeDefault.colors.ICON_STRONG, fontWeight: "bold" };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PurchasedAssetOverlay() {
      const cResult = c.c(5);
      const tmp4 = closure_10();
      if (cResult[0] !== tmp4.overlayIcon) {
        const obj2 = { size: "lg", style: tmp4.overlayIcon };
        const tmp7 = React5(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj2);
        cResult[0] = tmp4.overlayIcon;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.overlayContainer) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = React5(hasOwnProperty, { style: tmp4.overlayContainer, children: tmp5 });
      cResult[2] = tmp4.overlayContainer;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj3 = { style: tmp4.overlayContainer, children: tmp5 };
    }
  : function PurchasedAssetOverlay() {
      const tmp = closure_10();
      const obj = {
        style: tmp.overlayContainer,
        children: React5(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, { size: "lg", style: tmp.overlayIcon }),
      };
      return React5(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DisabledAssetOverlay() {
      const cResult = c.c(5);
      const tmp4 = closure_10();
      if (cResult[0] !== tmp4.overlayIcon) {
        const obj2 = { size: "lg", style: tmp4.overlayIcon };
        const tmp7 = React5(LockIcon.LockIcon, obj2);
        cResult[0] = tmp4.overlayIcon;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.overlayContainer) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = React5(hasOwnProperty, { style: tmp4.overlayContainer, children: tmp5 });
      cResult[2] = tmp4.overlayContainer;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj3 = { style: tmp4.overlayContainer, children: tmp5 };
    }
  : function DisabledAssetOverlay() {
      const tmp = closure_10();
      const obj = {
        style: tmp.overlayContainer,
        children: React5(LockIcon.LockIcon, { size: "lg", style: tmp.overlayIcon }),
      };
      return React5(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProductPreview(isDisabled) {
      const cResult = c.c(14);
      ({ product, isPurchased, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = isDisabled);
      const tmp4 = closure_10();
      const productType = CollectiblesProductUtils.getProductType(product);
      if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
          let str = "75%";
        }
        if (!isPurchased) {
          isPurchased = isDisabled.isDisabled;
        }
        if (isPurchased) {
          isPurchased = tmp4.purchasedOrDisabled;
        }
        if (cResult[0] !== str) {
          const obj3 = { height: str };
          cResult[0] = str;
          cResult[1] = obj3;
          let tmp6 = obj3;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === tmp4.overlayContainer) {
          if (cResult[3] === isPurchased) {
            if (cResult[4] === tmp6) {
              let tmp7 = cResult[5];
            }
            if (cResult[6] === cardWidth) {
              if (cResult[7] === disableBundleStaticBackground) {
                if (cResult[8] === muteBundleStaticBackground) {
                  if (cResult[9] === product) {
                    let tmp8 = cResult[10];
                  }
                  if (cResult[11] === tmp7) {
                    if (cResult[12] === tmp8) {
                      let tmp12 = cResult[13];
                    }
                    return tmp12;
                  }
                  const obj4 = {
                    style: tmp7,
                    renderToHardwareTextureAndroid: true,
                    needsOffscreenAlphaCompositing: true,
                    children: tmp8,
                  };
                  const tmp15 = React5(hasOwnProperty, obj4);
                  cResult[11] = tmp7;
                  cResult[12] = tmp8;
                  cResult[13] = tmp15;
                  tmp12 = tmp15;
                }
              }
            }
            const obj5 = { product, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
            const tmp11 = React5(closure_14, obj5);
            cResult[6] = cardWidth;
            cResult[7] = disableBundleStaticBackground;
            cResult[8] = muteBundleStaticBackground;
            cResult[9] = product;
            cResult[10] = tmp11;
            tmp8 = tmp11;
          }
        }
        const items = [tmp4.overlayContainer, isPurchased, tmp6];
        cResult[2] = tmp4.overlayContainer;
        cResult[3] = isPurchased;
        cResult[4] = tmp6;
        cResult[5] = items;
        tmp7 = items;
      }
      str = "100%";
    }
  : function ProductPreview(arg0) {
      ({ product, isPurchased } = arg0);
      ({ isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
      const tmp = closure_10();
      const productType = CollectiblesProductUtils.getProductType(product);
      if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
          let str = "75%";
        }
        const items = [tmp.overlayContainer, ,];
        if (!isPurchased) {
          isPurchased = isDisabled;
        }
        if (isPurchased) {
          isPurchased = tmp.purchasedOrDisabled;
        }
        const obj2 = {
          style: null,
          renderToHardwareTextureAndroid: true,
          needsOffscreenAlphaCompositing: true,
          children: null,
        };
        items[1] = isPurchased;
        const obj3 = { height: str };
        items[2] = obj3;
        obj2.style = items;
        const obj4 = { product, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
        obj2.children = React5(closure_14, obj4);
        return React5(hasOwnProperty, obj2);
      }
      str = "100%";
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProductPreviewInner(arg0) {
      const cResult = c.c(29);
      ({ product, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
      const tmp4 = closure_10();
      const shopProductItems = useShopProductItems.useShopProductItems(product);
      ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
      if (cardWidth == null) {
        cardWidth = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH;
      }
      if (cResult[0] !== cardWidth) {
        const size = { width: cardWidth, height: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT };
        cResult[0] = cardWidth;
        cResult[1] = size;
        let tmp6 = size;
      } else {
        tmp6 = cResult[1];
      }
      if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
        if (cResult[2] === tmp6) {
          if (cResult[3] === disableBundleStaticBackground) {
            if (cResult[4] === firstAvatarDecoration) {
              if (cResult[5] === firstNameplate) {
                if (cResult[6] === firstProfileEffect) {
                  if (cResult[7] === muteBundleStaticBackground) {
                    if (cResult[8] === product.previewAssets) {
                      let tmp46 = cResult[9];
                    }
                    return tmp46;
                  }
                }
              }
            }
          }
        }
        const obj3 = {
          deco: firstAvatarDecoration,
          pfx: firstProfileEffect,
          nameplate: firstNameplate,
          size: "small",
          previewAssets: product.previewAssets,
          disableStaticBackground: disableBundleStaticBackground,
          mutedStaticBackground: muteBundleStaticBackground,
          targetSize: tmp6,
        };
        const tmp49 = React5(BundleSampleV2Default, obj3);
        cResult[2] = tmp6;
        cResult[3] = disableBundleStaticBackground;
        cResult[4] = firstAvatarDecoration;
        cResult[5] = firstNameplate;
        cResult[6] = firstProfileEffect;
        cResult[7] = muteBundleStaticBackground;
        cResult[8] = product.previewAssets;
        cResult[9] = tmp49;
        tmp46 = tmp49;
      } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { uri: _modDef9017 };
          cResult[10] = obj4;
          let tmp40 = obj4;
        } else {
          tmp40 = cResult[10];
        }
        if (cResult[11] !== tmp4.externalProductImage) {
          const obj5 = { source: tmp40, style: tmp4.externalProductImage };
          const tmp45 = React5(FastImageDefault, obj5);
          cResult[11] = tmp4.externalProductImage;
          cResult[12] = tmp45;
          let tmp42 = tmp45;
        } else {
          tmp42 = cResult[12];
        }
        return tmp42;
      } else {
        const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
        if (ALL.has(product.skuId)) {
          if (cResult[13] !== product.skuId) {
            const size1 = {
              skuId: product.skuId,
              width: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.CARD,
              height: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.CARD,
            };
            const tmp38 = React5(FractionalNitroCoinIllustration.FractionalNitroCoinIllustration, size1);
            cResult[13] = product.skuId;
            cResult[14] = tmp38;
            let tmp36 = tmp38;
          } else {
            tmp36 = cResult[14];
          }
          return tmp36;
        } else {
          const first = _slicedToArray(product.items, 1)[0];
          let type;
          if (first != null) {
            type = first.type;
          }
          if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
            if (cResult[15] !== first) {
              const obj6 = { item: first, size: 100 };
              const tmp35 = React5(AvatarDecorationSampleV2Default, obj6);
              cResult[15] = first;
              cResult[16] = tmp35;
              let tmp32 = tmp35;
            } else {
              tmp32 = cResult[16];
            }
            return tmp32;
          } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
            if (cResult[17] !== first) {
              const obj7 = { item: first, hideBackground: true };
              const tmp27 = React5(ProfileEffectSampleV2Default, obj7);
              cResult[17] = first;
              cResult[18] = tmp27;
              let tmp24 = tmp27;
            } else {
              tmp24 = cResult[18];
            }
            if (cResult[19] === tmp4.profileEffectContainer) {
              if (cResult[20] === tmp24) {
                let tmp28 = cResult[21];
              }
              return tmp28;
            }
            const obj8 = { style: tmp4.profileEffectContainer, children: tmp24 };
            const tmp31 = React5(hasOwnProperty, obj8);
            cResult[19] = tmp4.profileEffectContainer;
            cResult[20] = tmp24;
            cResult[21] = tmp31;
            tmp28 = tmp31;
          } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
            if (cResult[22] !== first) {
              const obj9 = {
                profileFrame: first,
                previewWidth: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH - nativeDefault.space.PX_32,
                previewHeight: diff,
                profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
              };
              const tmp19 = React5(ProfileFrameSamplePreviewDefault, obj9);
              cResult[22] = first;
              cResult[23] = tmp19;
              let tmp14 = tmp19;
            } else {
              tmp14 = cResult[23];
            }
            if (cResult[24] === tmp4.profileFrameContainer) {
              if (cResult[25] === tmp14) {
                let tmp20 = cResult[26];
              }
              return tmp20;
            }
            const obj10 = { style: tmp4.profileFrameContainer, children: tmp14 };
            const tmp23 = React5(hasOwnProperty, obj10);
            cResult[24] = tmp4.profileFrameContainer;
            cResult[25] = tmp14;
            cResult[26] = tmp23;
            tmp20 = tmp23;
          } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
            if (cResult[27] !== first) {
              const obj11 = { item: first };
              const tmp13 = React5(NameplateCardPreviewDefault, obj11);
              cResult[27] = first;
              cResult[28] = tmp13;
              let tmp10 = tmp13;
            } else {
              tmp10 = cResult[28];
            }
            return tmp10;
          } else {
            return null;
          }
        }
      }
    }
  : function ProductPreviewInner(arg0) {
      ({ product, cardWidth } = arg0);
      ({ disableBundleStaticBackground, muteBundleStaticBackground } = arg0);
      const tmp = closure_10();
      const shopProductItems = cardWidth(8271).useShopProductItems(product);
      const items = [cardWidth];
      ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
      const memo = noop.useMemo(() => {
        let COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth;
        if (cardWidth == null) {
          COLLECTIBLES_SHOP_CARD_WIDTH = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH;
        }
        const size = {
          width: COLLECTIBLES_SHOP_CARD_WIDTH,
          height: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT,
        };
        return size;
      }, items);
      if (product.type === cardWidth(1992).CollectiblesItemType.BUNDLE) {
        const obj2 = {
          deco: firstAvatarDecoration,
          pfx: firstProfileEffect,
          nameplate: firstNameplate,
          size: "small",
          previewAssets: product.previewAssets,
          disableStaticBackground: disableBundleStaticBackground,
          mutedStaticBackground: muteBundleStaticBackground,
          targetSize: memo,
        };
        return closure_7(BundleSampleV2Default, obj2);
      } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
        const obj3 = { source: null, style: null };
        const obj4 = { uri: _modDef9017 };
        obj3.source = obj4;
        obj3.style = tmp.externalProductImage;
        return closure_7(FastImageDefault, obj3);
      } else {
        const ALL = cardWidth(1088).FractionalPremiumSKUsSets.ALL;
        if (ALL.has(product.skuId)) {
          let size = {
            skuId: product.skuId,
            width: cardWidth(9018).FRACTIONAL_NITRO_COIN_SIZE.CARD,
            height: cardWidth(9018).FRACTIONAL_NITRO_COIN_SIZE.CARD,
          };
          return closure_7(cardWidth(9018).FractionalNitroCoinIllustration, size);
        } else {
          const first = _slicedToArray(product.items, 1)[0];
          let type;
          if (first != null) {
            type = first.type;
          }
          if (cardWidth(1992).CollectiblesItemType.AVATAR_DECORATION === type) {
            const obj5 = { item: first, size: 100 };
            return closure_7(AvatarDecorationSampleV2Default, obj5);
          } else if (cardWidth(1992).CollectiblesItemType.PROFILE_EFFECT === type) {
            const obj6 = { style: tmp.profileEffectContainer, children: null };
            const obj7 = { item: first, hideBackground: true };
            obj6.children = closure_7(ProfileEffectSampleV2Default, obj7);
            return closure_7(closure_5, obj6);
          } else if (cardWidth(1992).CollectiblesItemType.PROFILE_FRAME === type) {
            const obj8 = { style: tmp.profileFrameContainer, children: null };
            const obj9 = {
              profileFrame: first,
              previewWidth: cardWidth(8937).COLLECTIBLES_SHOP_CARD_WIDTH - nativeDefault.space.PX_32,
              previewHeight,
              profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
            };
            obj8.children = closure_7(ProfileFrameSamplePreviewDefault, obj9);
            return closure_7(closure_5, obj8);
          } else if (cardWidth(1992).CollectiblesItemType.NAMEPLATE === type) {
            const obj10 = { item: first };
            return closure_7(NameplateCardPreviewDefault, obj10);
          } else {
            return null;
          }
        }
      }
      const obj = cardWidth(8271);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AssetTileInternal(arg0) {
      const cResult = c.c(8);
      ({ children, solidBackground } = arg0);
      const tmp5 = closure_10();
      const tmp4 = undefined !== solidBackground && solidBackground;
      const tmpResult = ColorUtils;
      const tmpResult3 = ColorUtils;
      let num = 0.8;
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      if (tmp4) {
        num = 1;
      }
      const hexToRgbaStringResult = tmpResult.hexToRgbaString(tmpResult3.hexWithOpacity(token, num));
      if (cResult[0] !== hexToRgbaStringResult) {
        const obj2 = { backgroundColor: hexToRgbaStringResult };
        cResult[0] = hexToRgbaStringResult;
        cResult[1] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === tmp5.assetContainer) {
        if (cResult[3] === tmp8) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === children) {
          if (cResult[6] === tmp9) {
            let tmp10 = cResult[7];
          }
          return tmp10;
        }
        const obj3 = {
          style: tmp9,
          importantForAccessibility: "no-hide-descendants",
          accessibilityElementsHidden: true,
          children,
        };
        const tmp13 = React5(hasOwnProperty, obj3);
        cResult[5] = children;
        cResult[6] = tmp9;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      const items = [tmp5.assetContainer, tmp8];
      cResult[2] = tmp5.assetContainer;
      cResult[3] = tmp8;
      cResult[4] = items;
      tmp9 = items;
      const tmpResult4 = useToken;
    }
  : function AssetTileInternal(solidBackground) {
      let flag = solidBackground.solidBackground;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_10();
      const obj = ColorUtils;
      const obj2 = ColorUtils;
      let num = 0.8;
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      if (flag) {
        num = 1;
      }
      const obj4 = {
        style: null,
        importantForAccessibility: "no-hide-descendants",
        accessibilityElementsHidden: true,
        children: null,
      };
      const items = [tmp.assetContainer];
      items[1] = { backgroundColor: obj.hexToRgbaString(obj2.hexWithOpacity(token, num)) };
      obj4.style = items;
      obj4.children = solidBackground.children;
      return React5(hasOwnProperty, obj4);
    };
ReactCompilerGating = fn(558);
let obj4 = { position: "absolute", opacity: 1, color: nativeDefault.colors.ICON_STRONG, fontWeight: "bold" };
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function AssetTileV2(arg0) {
        const cResult = c.c(20);
        ({
          product,
          isPurchased,
          solidBackground,
          isDisabled,
          disableBundleStaticBackground,
          muteBundleStaticBackground,
          cardWidth,
        } = arg0);
        const defaultVariantIndex = useDefaultVariantIndex.useDefaultVariantIndex(product);
        if (cResult[0] === product) {
          if (cResult[1] === defaultVariantIndex) {
            let tmp5 = cResult[2];
          }
          if (cResult[3] === cardWidth) {
            if (cResult[4] === disableBundleStaticBackground) {
              if (cResult[5] === isDisabled) {
                if (cResult[6] === isPurchased) {
                  if (cResult[7] === muteBundleStaticBackground) {
                    if (cResult[8] === tmp5) {
                      let tmp7 = cResult[9];
                    }
                    if (cResult[10] !== isPurchased) {
                      let tmp12 = isPurchased;
                      if (isPurchased) {
                        tmp12 = React5(closure_11, {});
                      }
                      cResult[10] = isPurchased;
                      cResult[11] = tmp12;
                      let tmp11 = tmp12;
                    } else {
                      tmp11 = cResult[11];
                    }
                    if (cResult[12] === isDisabled) {
                      if (cResult[13] === isPurchased) {
                        let tmp15 = cResult[14];
                      }
                      if (cResult[15] === solidBackground) {
                        if (cResult[16] === tmp7) {
                          if (cResult[17] === tmp11) {
                            if (cResult[18] === tmp15) {
                              let tmp19 = cResult[19];
                            }
                            return tmp19;
                          }
                        }
                      }
                      const obj3 = { solidBackground, children: null };
                      const items = [tmp7, tmp11, tmp15];
                      obj3.children = items;
                      const tmp22 = closure_1_8(closure_15, obj3);
                      cResult[15] = solidBackground;
                      cResult[16] = tmp7;
                      cResult[17] = tmp11;
                      cResult[18] = tmp15;
                      cResult[19] = tmp22;
                      tmp19 = tmp22;
                    }
                    let tmp16 = isDisabled;
                    if (isDisabled) {
                      tmp16 = !isPurchased;
                    }
                    if (tmp16) {
                      tmp16 = React5(closure_12, {});
                    }
                    cResult[12] = isDisabled;
                    cResult[13] = isPurchased;
                    cResult[14] = tmp16;
                    tmp15 = tmp16;
                  }
                }
              }
            }
          }
          const obj4 = {
            product: tmp5,
            isPurchased,
            isDisabled,
            disableBundleStaticBackground,
            muteBundleStaticBackground,
            cardWidth,
          };
          const tmp10 = React5(closure_13, obj4);
          cResult[3] = cardWidth;
          cResult[4] = disableBundleStaticBackground;
          cResult[5] = isDisabled;
          cResult[6] = isPurchased;
          cResult[7] = muteBundleStaticBackground;
          cResult[8] = tmp5;
          cResult[9] = tmp10;
          tmp7 = tmp10;
        }
        const selectedProduct = CollectiblesProductUtils.getSelectedProduct(product, defaultVariantIndex);
        cResult[0] = product;
        cResult[1] = defaultVariantIndex;
        cResult[2] = selectedProduct;
        tmp5 = selectedProduct;
        const tmpResult = CollectiblesProductUtils;
      }
    : function AssetTileV2(arg0) {
        ({ product, isPurchased, isDisabled } = arg0);
        ({ solidBackground, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
        const defaultVariantIndex = useDefaultVariantIndex.useDefaultVariantIndex(product);
        const obj3 = { solidBackground, children: null };
        const items = [
          React5(closure_13, {
            product: CollectiblesProductUtils.getSelectedProduct(product, defaultVariantIndex),
            isPurchased,
            isDisabled,
            disableBundleStaticBackground,
            muteBundleStaticBackground,
            cardWidth,
          }),
          ,
        ];
        let tmp4Result = isPurchased;
        if (isPurchased) {
          tmp4Result = React5(closure_11, {});
        }
        items[1] = tmp4Result;
        if (isDisabled) {
          isDisabled = !isPurchased;
        }
        if (isDisabled) {
          isDisabled = React5(closure_12, {});
        }
        items[2] = isDisabled;
        obj3.children = items;
        return closure_1_8(closure_15, obj3);
      },
);
