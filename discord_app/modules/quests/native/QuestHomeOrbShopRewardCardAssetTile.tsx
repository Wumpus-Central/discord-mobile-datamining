// discord_app/modules/quests/native/QuestHomeOrbShopRewardCardAssetTile.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FractionalPremiumSKUs from "../../../../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import CollectiblesProductUtils from "../../collectibles/utils/CollectiblesProductUtils.tsx";
import useShopProductItems from "../../collectibles/hooks/useShopProductItems.tsx";
import CollectiblesShopCardV2 from "../../collectibles/native/CollectiblesShopCardV2.tsx";
import useDefaultVariantIndex from "../../collectibles/hooks/useDefaultVariantIndex.tsx";
import BundleSampleV2Default from "../../collectibles/native/BundleSampleV2.tsx";
import ProfileEffectSampleV2Default from "../../collectibles/native/ProfileEffectSampleV2.tsx";
import AvatarDecorationSampleV2 from "../../collectibles/native/AvatarDecorationSampleV2.tsx";
import _modDef8500 from "../../../../_runtime/metro/08500__.js";
import CutoutableAvatarDecorationDefault from "../../collectibles/native/components/CutoutableAvatarDecoration.tsx";
import ProfileFrameSamplePreviewDefault from "../../collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx";
import NameplateCardPreviewDefault from "../../collectibles/nameplates/native/NameplateCardPreview.tsx";
import _modDef8532 from "../../../../discord_assets/assets/orbs/orb_profile_badge_icon-2x.png.js";
import FractionalNitroCoinIllustration from "../../collectibles/native/FractionalNitroCoinIllustration.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const AvatarDecorationSampleV2Default = AvatarDecorationSampleV2;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const EXTERNAL_PRODUCT_SKU_IDS = fn(1087).EXTERNAL_PRODUCT_SKU_IDS;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 100;
const diff = fn(8451).COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * nativeDefault.space.PX_16;
const PX_32 = nativeDefault.space.PX_32;
let closure_13 = 2 * nativeDefault.space.PX_16;
let createStyles = fn(4896);
let closure_14 = createStyles.createStyles((width) => {
  const obj = {
    container: { width, height: width, justifyContent: "center", alignItems: "center" },
    avatar: null,
    avatarDecoration: null,
  };
  size = {
    height: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio,
    width: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio,
    borderRadius: (width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio) / 2,
    opacity: 0.8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  };
  obj.avatar = size;
  obj.avatarDecoration = { position: "absolute", width, height: width, justifyContent: "center", alignItems: "center" };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(13);
      ({ item, size } = arg0);
      const tmp3 = closure_14(size);
      _modDef38(
        item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION,
        "Item must be Avatar Decoration",
      );
      if (cResult[0] !== tmp3.avatar) {
        const obj2 = { style: tmp3.avatar, resizeMode: "contain", source: _modDef8500, accessible: false };
        const tmp10 = closure_1_8(hasOwnProperty, obj2);
        cResult[0] = tmp3.avatar;
        cResult[1] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === item) {
        if (cResult[3] === size) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === item.label) {
          if (cResult[6] === tmp3.avatarDecoration) {
            if (cResult[7] === tmp11) {
              let tmp13 = cResult[8];
            }
            if (cResult[9] === tmp3.container) {
              if (cResult[10] === tmp7) {
                if (cResult[11] === tmp13) {
                  let tmp17 = cResult[12];
                }
                return tmp17;
              }
            }
            const obj3 = { style: tmp3.container, children: null };
            const items = [tmp7, tmp13];
            obj3.children = items;
            const tmp20 = options(timestampProducer, obj3);
            cResult[9] = tmp3.container;
            cResult[10] = tmp7;
            cResult[11] = tmp13;
            cResult[12] = tmp20;
            tmp17 = tmp20;
          }
        }
        const obj4 = { style: tmp3.avatarDecoration, accessibilityLabel: item.label, children: tmp11 };
        const tmp16 = closure_1_8(timestampProducer, obj4);
        cResult[5] = item.label;
        cResult[6] = tmp3.avatarDecoration;
        cResult[7] = tmp11;
        cResult[8] = tmp16;
        tmp13 = tmp16;
      }
      const tmp12 = closure_1_8(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size });
      cResult[2] = item;
      cResult[3] = size;
      cResult[4] = tmp12;
      tmp11 = tmp12;
    }
  : (arg0) => {
      ({ item, size } = arg0);
      const tmp = closure_14(size);
      _modDef38(
        item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION,
        "Item must be Avatar Decoration",
      );
      const obj = { style: tmp.container, children: null };
      const items = [
        closure_1_8(hasOwnProperty, {
          style: tmp.avatar,
          resizeMode: "contain",
          source: _modDef8500,
          accessible: false,
        }),
      ];
      const obj2 = { style: tmp.avatar, resizeMode: "contain", source: _modDef8500, accessible: false };
      items[1] = closure_1_8(timestampProducer, {
        style: tmp.avatarDecoration,
        accessibilityLabel: item.label,
        children: closure_1_8(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size }),
      });
      obj.children = items;
      return options(timestampProducer, obj);
    };
createStyles = fn(4896);
let obj = {
  assetContainer: null,
  overlayContainer: null,
  profileEffectContainer: null,
  profileFrameContainer: null,
  compactProfileFrameContainer: null,
  externalProductImage: null,
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
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.justifyContent = "center";
obj5.alignItems = "center";
obj5.width = "100%";
obj5.height = "100%";
obj.overlayContainer = obj5;
let size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.profileEffectContainer = size1;
obj.profileFrameContainer = { width: "100%", height: diff, alignItems: "center" };
obj.compactProfileFrameContainer = { height: "100%", justifyContent: "center" };
obj.externalProductImage = { width: 80, height: 80, resizeMode: "contain" };
let closure_16 = createStyles.createStyles(obj);
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(46);
      ({ product, cardWidth, cardHeight, hideCardDetails } = arg0);
      const tmp5 = closure_16();
      const shopProductItems = useShopProductItems.useShopProductItems(product);
      ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
      if (cResult[0] === cardHeight) {
        if (cResult[1] === cardWidth) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === cardHeight) {
          if (cResult[4] === cardWidth) {
            if (cResult[5] === tmp7) {
              let tmp9 = cResult[6];
            }
            if (cResult[7] === cardHeight) {
              if (cResult[8] === cardWidth) {
                if (cResult[9] === tmp9) {
                  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
                    if (cResult[11] === tmp15) {
                      if (cResult[12] === firstAvatarDecoration) {
                        if (cResult[13] === firstNameplate) {
                          if (cResult[14] === firstProfileEffect) {
                            if (cResult[15] === product.previewAssets) {
                              let tmp68 = cResult[16];
                            }
                            return tmp68;
                          }
                        }
                      }
                    }
                    const obj2 = {
                      deco: firstAvatarDecoration,
                      pfx: firstProfileEffect,
                      nameplate: firstNameplate,
                      size: "small",
                      previewAssets: product.previewAssets,
                      disableStaticBackground: true,
                      targetSize: tmp15,
                    };
                    const tmp71 = closure_1_8(BundleSampleV2Default, obj2);
                    cResult[11] = tmp15;
                    cResult[12] = firstAvatarDecoration;
                    cResult[13] = firstNameplate;
                    cResult[14] = firstProfileEffect;
                    cResult[15] = product.previewAssets;
                    cResult[16] = tmp71;
                    tmp68 = tmp71;
                  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
                    const _Symbol = Symbol;
                    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj3 = { uri: _modDef8532 };
                      cResult[17] = obj3;
                      let tmp62 = obj3;
                    } else {
                      tmp62 = cResult[17];
                    }
                    if (cResult[18] !== tmp5.externalProductImage) {
                      const obj4 = { source: tmp62, style: tmp5.externalProductImage };
                      const tmp67 = closure_1_8(FastImageDefault, obj4);
                      cResult[18] = tmp5.externalProductImage;
                      cResult[19] = tmp67;
                      let tmp64 = tmp67;
                    } else {
                      tmp64 = cResult[19];
                    }
                    return tmp64;
                  } else {
                    const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
                    if (ALL.has(product.skuId)) {
                      if (cResult[20] !== product.skuId) {
                        size = {
                          skuId: product.skuId,
                          width: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.CARD,
                          height: FractionalNitroCoinIllustration.FRACTIONAL_NITRO_COIN_SIZE.CARD,
                        };
                        const tmp60 = closure_1_8(
                          FractionalNitroCoinIllustration.FractionalNitroCoinIllustration,
                          size,
                        );
                        cResult[20] = product.skuId;
                        cResult[21] = tmp60;
                        let tmp58 = tmp60;
                      } else {
                        tmp58 = cResult[21];
                      }
                      return tmp58;
                    } else {
                      const first = _slicedToArray(product.items, 1)[0];
                      let type;
                      if (first != null) {
                        type = first.type;
                      }
                      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
                        if (tmp4) {
                          let avatarDecorationSize;
                          if (tmp9 != null) {
                            avatarDecorationSize = tmp9.avatarDecorationSize;
                          }
                          if (avatarDecorationSize == null) {
                            avatarDecorationSize = size;
                          }
                          if (cResult[22] === avatarDecorationSize) {
                            if (cResult[23] === first) {
                              let tmp54 = cResult[24];
                            }
                            return tmp54;
                          }
                          const obj6 = { item: first, size: avatarDecorationSize };
                          const tmp57 = closure_1_8(closure_15, obj6);
                          cResult[22] = avatarDecorationSize;
                          cResult[23] = first;
                          cResult[24] = tmp57;
                          tmp54 = tmp57;
                        } else {
                          if (cResult[25] !== first) {
                            const obj7 = { item: first, size };
                            const tmp52 = closure_1_8(AvatarDecorationSampleV2Default, obj7);
                            cResult[25] = first;
                            cResult[26] = tmp52;
                            let tmp48 = tmp52;
                          } else {
                            tmp48 = cResult[26];
                          }
                          return tmp48;
                        }
                      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
                        if (cResult[27] !== first) {
                          const obj8 = { item: first, hideBackground: true };
                          const tmp43 = closure_1_8(ProfileEffectSampleV2Default, obj8);
                          cResult[27] = first;
                          cResult[28] = tmp43;
                          let tmp40 = tmp43;
                        } else {
                          tmp40 = cResult[28];
                        }
                        if (cResult[29] === tmp5.profileEffectContainer) {
                          if (cResult[30] === tmp40) {
                            let tmp44 = cResult[31];
                          }
                          return tmp44;
                        }
                        const obj9 = { style: tmp5.profileEffectContainer, children: tmp40 };
                        const tmp47 = closure_1_8(timestampProducer, obj9);
                        cResult[29] = tmp5.profileEffectContainer;
                        cResult[30] = tmp40;
                        cResult[31] = tmp47;
                        tmp44 = tmp47;
                      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
                        if (cResult[32] === tmp9) {
                          if (cResult[33] === tmp4) {
                            if (cResult[34] === tmp5.compactProfileFrameContainer) {
                              if (cResult[35] === tmp5.profileFrameContainer) {
                                let prop;
                                if (tmp9 != null) {
                                  prop = tmp9.profileFramePreviewWidth;
                                }
                                if (prop == null) {
                                  prop = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH - PX_32;
                                }
                                let prop1;
                                if (tmp9 != null) {
                                  prop1 = tmp9.profileFramePreviewHeight;
                                }
                                if (prop1 == null) {
                                  prop1 = diff;
                                }
                                if (cResult[37] === first) {
                                  if (cResult[38] === prop) {
                                    if (cResult[39] === prop1) {
                                      let tmp31 = cResult[40];
                                    }
                                    if (cResult[41] === tmp26) {
                                      if (cResult[42] === tmp31) {
                                        let tmp36 = cResult[43];
                                      }
                                      return tmp36;
                                    }
                                    const obj10 = { style: tmp26, children: tmp31 };
                                    const tmp39 = closure_1_8(timestampProducer, obj10);
                                    cResult[41] = tmp26;
                                    cResult[42] = tmp31;
                                    cResult[43] = tmp39;
                                    tmp36 = tmp39;
                                  }
                                }
                                const obj11 = {
                                  profileFrame: first,
                                  previewWidth: prop,
                                  previewHeight: prop1,
                                  profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
                                };
                                const tmp35 = closure_1_8(ProfileFrameSamplePreviewDefault, obj11);
                                cResult[37] = first;
                                cResult[38] = prop;
                                cResult[39] = prop1;
                                cResult[40] = tmp35;
                                tmp31 = tmp35;
                              }
                            }
                          }
                        }
                        if (!tmp4) {
                          let profileFrameContainer = tmp5.profileFrameContainer;
                          cResult[32] = tmp9;
                          cResult[33] = tmp4;
                          cResult[34] = tmp5.compactProfileFrameContainer;
                          cResult[35] = tmp5.profileFrameContainer;
                          cResult[36] = profileFrameContainer;
                        }
                        const items = [,];
                        ({ profileFrameContainer: arr[0], compactProfileFrameContainer: arr[1] } = tmp5);
                        profileFrameContainer = items;
                      } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
                        if (cResult[44] !== first) {
                          const obj12 = { item: first };
                          const tmp25 = closure_1_8(NameplateCardPreviewDefault, obj12);
                          cResult[44] = first;
                          cResult[45] = tmp25;
                          let tmp22 = tmp25;
                        } else {
                          tmp22 = cResult[45];
                        }
                        return tmp22;
                      } else {
                        return null;
                      }
                    }
                  }
                }
              }
            }
            if (null != tmp9) {
              const size1 = { width: null, height: null };
              ({ width: obj5.width, height: obj5.height } = tmp9);
              let size2 = size1;
            } else {
              size2 = { width: cardWidth, height: cardHeight };
            }
            cResult[7] = cardHeight;
            cResult[8] = cardWidth;
            cResult[9] = tmp9;
            cResult[10] = size2;
          }
        }
        let tmp10 = null;
        if (tmp7) {
          const size3 = {
            width: cardWidth,
            height: cardHeight,
            profileFramePreviewWidth: cardWidth - PX_32,
            profileFramePreviewHeight: cardHeight - closure_13,
            avatarDecorationSize: null,
          };
          const _Math = Math;
          const _Math2 = Math;
          size3.avatarDecorationSize = Math.round(
            Math.min(size, cardWidth * (size / CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH)),
          );
          tmp10 = size3;
        }
        cResult[3] = cardHeight;
        cResult[4] = cardWidth;
        cResult[5] = tmp7;
        cResult[6] = tmp10;
        tmp9 = tmp10;
      }
      const tmp8 =
        cardWidth < CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH ||
        cardHeight < CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT;
      cResult[0] = cardHeight;
      cResult[1] = cardWidth;
      cResult[2] = tmp8;
      tmp7 = tmp8;
      const tmpResult = useShopProductItems;
    }
  : (cardHeight) => {
      ({ product, cardWidth } = cardHeight);
      cardHeight = cardHeight.cardHeight;
      let flag = cardHeight.hideCardDetails;
      if (flag === undefined) {
        flag = false;
      }
      let tmp = closure_16();
      const shopProductItems = cardWidth(7853).useShopProductItems(product);
      ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
      const tmp5 =
        cardWidth < cardWidth(8451).COLLECTIBLES_SHOP_CARD_WIDTH ||
        cardHeight < cardWidth(8451).COLLECTIBLES_SHOP_CARD_HEIGHT;
      dependencyMap = tmp5;
      const items = [cardHeight, cardWidth, tmp5];
      const memo = noop.useMemo(() => {
        let tmp = null;
        if (closure_2) {
          size = {
            width: cardWidth,
            height: cardHeight,
            profileFramePreviewWidth: cardWidth - PX_32,
            profileFramePreviewHeight: cardHeight - closure_13,
            avatarDecorationSize: null,
          };
          const _Math = Math;
          const _Math2 = Math;
          size.avatarDecorationSize = Math.round(
            Math.min(c10, cardWidth * (c10 / CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH)),
          );
          tmp = size;
        }
        return tmp;
      }, items);
      const items1 = [cardHeight, cardWidth, memo];
      const memo1 = noop.useMemo(() => {
        if (null != memo) {
          size = { width: null, height: null };
          ({ width: obj2.width, height: obj2.height } = memo);
          let size1 = size;
        } else {
          size1 = { width: cardWidth, height: cardHeight };
        }
        return size1;
      }, items1);
      if (product.type === cardWidth(1980).CollectiblesItemType.BUNDLE) {
        const obj2 = {
          deco: firstAvatarDecoration,
          pfx: firstProfileEffect,
          nameplate: firstNameplate,
          size: "small",
          previewAssets: product.previewAssets,
          disableStaticBackground: true,
          targetSize: memo1,
        };
        return closure_8(cardHeight(8486), obj2);
      } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
        const obj3 = { source: null, style: null };
        const obj4 = { uri: cardHeight(8532) };
        obj3.source = obj4;
        obj3.style = tmp.externalProductImage;
        return closure_8(cardHeight(5981), obj3);
      } else {
        const ALL = cardWidth(1088).FractionalPremiumSKUsSets.ALL;
        if (ALL.has(product.skuId)) {
          size = {
            skuId: product.skuId,
            width: cardWidth(8533).FRACTIONAL_NITRO_COIN_SIZE.CARD,
            height: cardWidth(8533).FRACTIONAL_NITRO_COIN_SIZE.CARD,
          };
          return closure_8(cardWidth(8533).FractionalNitroCoinIllustration, size);
        } else {
          const first = memo(product.items, 1)[0];
          let type;
          if (first != null) {
            type = first.type;
          }
          if (cardWidth(1980).CollectiblesItemType.AVATAR_DECORATION === type) {
            if (flag) {
              const obj5 = { item: first, size: null };
              let avatarDecorationSize;
              if (memo != null) {
                avatarDecorationSize = memo.avatarDecorationSize;
              }
              if (avatarDecorationSize == null) {
                avatarDecorationSize = size;
              }
              obj5.size = avatarDecorationSize;
              let tmp24Result = closure_8(closure_15, obj5);
            } else {
              const obj6 = { item: first, size };
              tmp24Result = closure_8(cardHeight(8499), obj6);
            }
            return tmp24Result;
          } else if (cardWidth(1980).CollectiblesItemType.PROFILE_EFFECT === type) {
            const obj7 = { style: tmp.profileEffectContainer, children: null };
            const obj8 = { item: first, hideBackground: true };
            obj7.children = closure_8(cardHeight(8488), obj8);
            return closure_8(closure_6, obj7);
          } else if (cardWidth(1980).CollectiblesItemType.PROFILE_FRAME === type) {
            if (flag) {
              if (null != memo) {
                const items2 = [,];
                ({ profileFrameContainer: arr3[0], compactProfileFrameContainer: arr3[1] } = tmp);
                let profileFrameContainer = items2;
              }
              const obj9 = { style: profileFrameContainer, children: null };
              const obj10 = {
                profileFrame: first,
                previewWidth: null,
                previewHeight: null,
                profileBackgroundColor: null,
              };
              let prop;
              if (memo != null) {
                prop = memo.profileFramePreviewWidth;
              }
              if (prop == null) {
                prop = cardWidth(8451).COLLECTIBLES_SHOP_CARD_WIDTH - PX_32;
              }
              obj10.previewWidth = prop;
              let prop1;
              if (memo != null) {
                prop1 = memo.profileFramePreviewHeight;
              }
              if (prop1 == null) {
                prop1 = closure_11;
              }
              obj10.previewHeight = prop1;
              obj10.profileBackgroundColor = cardHeight(587).colors.BACKGROUND_BASE_LOW;
              obj9.children = closure_8(cardHeight(8511), obj10);
              return closure_8(tmp15, obj9);
            }
            profileFrameContainer = tmp.profileFrameContainer;
          } else if (cardWidth(1980).CollectiblesItemType.NAMEPLATE === type) {
            const obj11 = { item: first };
            return closure_8(cardHeight(8513), obj11);
          } else {
            return null;
          }
        }
      }
      const obj = cardWidth(7853);
    };
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCardAssetTile.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(25);
        ({ product, cardWidth, cardHeight, hideCardDetails } = arg0);
        const tmp5 = closure_16();
        const defaultVariantIndex = useDefaultVariantIndex.useDefaultVariantIndex(product);
        if (cResult[0] === product) {
          if (cResult[1] === defaultVariantIndex) {
            let tmp7 = cResult[2];
            let tmp8 = cResult[3];
          }
          const tmpResult6 = ColorUtils;
          const tmpResult7 = ColorUtils;
          const hexToRgbaStringResult = tmpResult6.hexToRgbaString(
            tmpResult7.hexWithOpacity(useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW), 1),
          );
          if (!tmp4) {
            if (tmp8 !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
              if (tmp8 !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
                let str = "75%";
              }
              if (cResult[4] !== hexToRgbaStringResult) {
                const obj2 = { backgroundColor: hexToRgbaStringResult };
                cResult[4] = hexToRgbaStringResult;
                cResult[5] = obj2;
                let tmp13 = obj2;
              } else {
                tmp13 = cResult[5];
              }
              if (cResult[6] === tmp5.assetContainer) {
                if (cResult[7] === tmp13) {
                  let tmp14 = cResult[8];
                }
                if (cResult[9] !== str) {
                  const obj3 = { height: str };
                  cResult[9] = str;
                  cResult[10] = obj3;
                  let tmp15 = obj3;
                } else {
                  tmp15 = cResult[10];
                }
                if (cResult[11] === tmp5.overlayContainer) {
                  if (cResult[12] === tmp15) {
                    let tmp16 = cResult[13];
                  }
                  if (cResult[14] === cardHeight) {
                    if (cResult[15] === cardWidth) {
                      if (cResult[16] === tmp4) {
                        if (cResult[17] === tmp7) {
                          let tmp17 = cResult[18];
                        }
                        if (cResult[19] === tmp16) {
                          if (cResult[20] === tmp17) {
                            let tmp21 = cResult[21];
                          }
                          if (cResult[22] === tmp14) {
                            if (cResult[23] === tmp21) {
                              let tmp25 = cResult[24];
                            }
                            return tmp25;
                          }
                          const obj4 = {
                            style: tmp14,
                            importantForAccessibility: "no-hide-descendants",
                            accessibilityElementsHidden: true,
                            children: tmp21,
                          };
                          const tmp28 = closure_1_8(timestampProducer, obj4);
                          cResult[22] = tmp14;
                          cResult[23] = tmp21;
                          cResult[24] = tmp28;
                          tmp25 = tmp28;
                        }
                        const obj5 = {
                          style: tmp16,
                          renderToHardwareTextureAndroid: true,
                          needsOffscreenAlphaCompositing: true,
                          children: tmp17,
                        };
                        const tmp24 = closure_1_8(timestampProducer, obj5);
                        cResult[19] = tmp16;
                        cResult[20] = tmp17;
                        cResult[21] = tmp24;
                        tmp21 = tmp24;
                      }
                    }
                  }
                  const obj6 = { product: tmp7, cardWidth, cardHeight, hideCardDetails: tmp4 };
                  const tmp20 = closure_1_8(closure_17, obj6);
                  cResult[14] = cardHeight;
                  cResult[15] = cardWidth;
                  cResult[16] = tmp4;
                  cResult[17] = tmp7;
                  cResult[18] = tmp20;
                  tmp17 = tmp20;
                }
                const items = [tmp5.overlayContainer, tmp15];
                cResult[11] = tmp5.overlayContainer;
                cResult[12] = tmp15;
                cResult[13] = items;
                tmp16 = items;
              }
              const items1 = [tmp5.assetContainer, tmp13];
              cResult[6] = tmp5.assetContainer;
              cResult[7] = tmp13;
              cResult[8] = items1;
              tmp14 = items1;
            }
          }
          str = "100%";
          const tmpResult8 = useToken;
        }
        const tmpResult = useDefaultVariantIndex;
        const selectedProduct = CollectiblesProductUtils.getSelectedProduct(product, defaultVariantIndex);
        const tmpResult9 = CollectiblesProductUtils;
        const productType = CollectiblesProductUtils.getProductType(selectedProduct);
        cResult[0] = product;
        cResult[1] = defaultVariantIndex;
        cResult[2] = selectedProduct;
        cResult[3] = productType;
        tmp8 = productType;
        tmp7 = selectedProduct;
        const tmpResult10 = CollectiblesProductUtils;
      }
    : (arg0) => {
        ({ product, hideCardDetails } = arg0);
        ({ cardWidth, cardHeight } = arg0);
        if (hideCardDetails === undefined) {
          hideCardDetails = false;
        }
        const tmp = closure_16();
        const defaultVariantIndex = useDefaultVariantIndex.useDefaultVariantIndex(product);
        const selectedProduct = CollectiblesProductUtils.getSelectedProduct(product, defaultVariantIndex);
        const productType = CollectiblesProductUtils.getProductType(selectedProduct);
        ColorUtils;
        ColorUtils;
        useToken;
        if (!hideCardDetails) {
          if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
            if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
              let str = "75%";
            }
            const obj4 = {
              style: null,
              importantForAccessibility: "no-hide-descendants",
              accessibilityElementsHidden: true,
              children: null,
            };
            const items = [tmp.assetContainer];
            const obj5 = { backgroundColor: tmp10 };
            items[1] = obj5;
            obj4.style = items;
            const obj6 = {
              style: null,
              renderToHardwareTextureAndroid: true,
              needsOffscreenAlphaCompositing: true,
              children: null,
            };
            const items1 = [tmp.overlayContainer];
            const obj7 = { height: str };
            items1[1] = obj7;
            obj6.style = items1;
            const obj8 = { product: selectedProduct, cardWidth, cardHeight, hideCardDetails };
            obj6.children = closure_1_8(closure_17, obj8);
            obj4.children = closure_1_8(timestampProducer, obj6);
            return closure_1_8(timestampProducer, obj4);
          }
        }
        str = "100%";
      },
);
