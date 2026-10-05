// === Module 14888: QuestHomeOrbShopRewardCardAssetTile ===

// Module 14888 (QuestHomeOrbShopRewardCardAssetTile)
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1088 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import useToken from "useToken" /* 4580 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import FastImageDefault from "FastImage" /* 5974 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import useShopProductItems from "useShopProductItems" /* 7842 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8418 */;
import useDefaultVariantIndex from "useDefaultVariantIndex" /* 8419 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8453 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 8455 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8466 */;
import AssetRegistryDefault from "AssetRegistry" /* 8467 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 8468 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8478 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 8480 */;
import _modDef8499 from "module_8499" /* 8499 */;
import FractionalNitroCoinIllustration2 from "FractionalNitroCoinIllustration" /* 8500 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const AvatarDecorationSampleV2Default = AvatarDecorationSampleV2;
let dependencyMap;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let size;
let size1;
({ Image: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 100;
const diff = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * nativeDefault.space.PX_16;
const unpackModuleId = diff;
const PX_32 = nativeDefault.space.PX_32;
let closure_13 = 2 * nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((width) => {
  const obj = { container: { width, height: width, justifyContent: "center", alignItems: "center" }, avatar: size, avatarDecoration: { position: "absolute", width, height: width, justifyContent: "center", alignItems: "center" } };
  size = { height: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio, width: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio, borderRadius: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio / 2, opacity: 0.8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let item;
  let items;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(13);
  ({ item, size } = arg0);
  const tmp3 = closure_14(size);
  const tmp5 = _modDef38;
  tmp5(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  if (cResult[0] !== tmp3.avatar) {
    const obj2 = { style: tmp3.avatar, resizeMode: "contain", source: AssetRegistryDefault, accessible: false };
    const tmp10 = metroImportAll(hasOwnProperty, obj2);
    cResult[0] = tmp3.avatar;
    cResult[1] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === item) {
    let tmp11;
    if (cResult[3] === size) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === item.label) {
      if (cResult[6] === tmp3.avatarDecoration) {
        let tmp13;
        if (cResult[7] === tmp11) {
          tmp13 = cResult[8];
        }
        if (cResult[9] === tmp3.container) {
          if (cResult[10] === tmp7) {
            let tmp17;
            if (cResult[11] === tmp13) {
              tmp17 = cResult[12];
            }
            return tmp17;
          }
        }
        const obj3 = { style: tmp3.container, children: items };
        items = [tmp7, tmp13];
        const tmp20 = React4(metroRequire, obj3);
        cResult[9] = tmp3.container;
        cResult[10] = tmp7;
        cResult[11] = tmp13;
        cResult[12] = tmp20;
        tmp17 = tmp20;
      }
    }
    const obj4 = { style: tmp3.avatarDecoration, accessibilityLabel: item.label, children: tmp11 };
    const tmp16 = metroImportAll(metroRequire, obj4);
    cResult[5] = item.label;
    cResult[6] = tmp3.avatarDecoration;
    cResult[7] = tmp11;
    cResult[8] = tmp16;
    tmp13 = tmp16;
  }
  const tmp12 = metroImportAll(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size });
  cResult[2] = item;
  cResult[3] = size;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let item;
  let items;
  ({ item, size } = arg0);
  const tmp = closure_14(size);
  const tmp2 = _modDef38;
  tmp2(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  const obj = { style: tmp.container, children: items };
  items = [, ];
  const obj2 = { style: tmp.avatar, resizeMode: "contain", source: AssetRegistryDefault, accessible: false };
  items[0] = metroImportAll(hasOwnProperty, obj2);
  const obj3 = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: metroImportAll(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size }) };
  items[1] = metroImportAll(metroRequire, obj3);
  return React4(metroRequire, obj);
});
createStyles = createStyles_mod;
let obj = { assetContainer: size, overlayContainer: obj2, profileEffectContainer: size1, profileFrameContainer: { width: "100%", height: diff, alignItems: "center" }, compactProfileFrameContainer: { height: "100%", justifyContent: "center" }, externalProductImage: { width: 80, height: 80, resizeMode: "contain" } };
size = { display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", height: "100%", width: "100%", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let cardHeight;
  let cardWidth;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let hideCardDetails;
  let product;
  const obj = react2;
  const cResult = obj.c(46);
  ({ product, cardWidth, cardHeight, hideCardDetails } = arg0);
  const tmp5 = closure_16();
  const tmpResult = useShopProductItems;
  const shopProductItems = tmpResult.useShopProductItems(product);
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  if (cResult[0] === cardHeight) {
    let tmp7;
    if (cResult[1] === cardWidth) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === cardHeight) {
      if (cResult[4] === cardWidth) {
        let tmp9;
        let size2;
        if (cResult[5] === tmp7) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === cardHeight) {
          if (cResult[8] === cardWidth) {
            let tmp15;
            if (cResult[9] === tmp9) {
              tmp15 = cResult[10];
            }
            if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
              if (cResult[11] === tmp15) {
                if (cResult[12] === firstAvatarDecoration) {
                  if (cResult[13] === firstNameplate) {
                    if (cResult[14] === firstProfileEffect) {
                      let tmp66;
                      if (cResult[15] === product.previewAssets) {
                        tmp66 = cResult[16];
                      }
                      return tmp66;
                    }
                  }
                }
              }
              const obj2 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, size: "small", previewAssets: product.previewAssets, disableStaticBackground: true, targetSize: tmp15 };
              const tmp69 = metroImportAll(BundleSampleV2Default, obj2);
              cResult[11] = tmp15;
              cResult[12] = firstAvatarDecoration;
              cResult[13] = firstNameplate;
              cResult[14] = firstProfileEffect;
              cResult[15] = product.previewAssets;
              cResult[16] = tmp69;
              tmp66 = tmp69;
            } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
              let tmp60;
              let tmp62;
              const _Symbol = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const obj3 = { uri: _modDef8499 };
                cResult[17] = obj3;
                tmp60 = obj3;
              } else {
                tmp60 = cResult[17];
              }
              if (cResult[18] !== tmp5.externalProductImage) {
                const obj4 = { source: tmp60, style: tmp5.externalProductImage };
                const tmp65 = metroImportAll(FastImageDefault, obj4);
                cResult[18] = tmp5.externalProductImage;
                cResult[19] = tmp65;
                tmp62 = tmp65;
              } else {
                tmp62 = cResult[19];
              }
              return tmp62;
            } else {
              const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
              if (ALL.has(product.skuId)) {
                let tmp56;
                if (cResult[20] !== product.skuId) {
                  size = { skuId: product.skuId, width: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.CARD, height: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.CARD };
                  const FractionalNitroCoinIllustration = FractionalNitroCoinIllustration2.FractionalNitroCoinIllustration;
                  const tmp58 = metroImportAll(FractionalNitroCoinIllustration, size);
                  cResult[20] = product.skuId;
                  cResult[21] = tmp58;
                  tmp56 = tmp58;
                } else {
                  tmp56 = cResult[21];
                }
                return tmp56;
              } else {
                const first = _slicedToArray(product.items, 1)[0];
                let type;
                if (first != null) {
                  type = first.type;
                }
                if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
                  if (undefined !== hideCardDetails && hideCardDetails) {
                    let avatarDecorationSize;
                    if (tmp9 != null) {
                      avatarDecorationSize = tmp9.avatarDecorationSize;
                    }
                    if (avatarDecorationSize == null) {
                      avatarDecorationSize = size;
                    }
                    if (cResult[22] === avatarDecorationSize) {
                      let tmp52;
                      if (cResult[23] === first) {
                        tmp52 = cResult[24];
                      }
                      return tmp52;
                    }
                    const obj6 = { item: first, size: avatarDecorationSize };
                    const tmp55 = metroImportAll(closure_15, obj6);
                    cResult[22] = avatarDecorationSize;
                    cResult[23] = first;
                    cResult[24] = tmp55;
                    tmp52 = tmp55;
                  } else {
                    let tmp46;
                    if (cResult[25] !== first) {
                      const obj7 = { item: first, size };
                      const tmp50 = metroImportAll(AvatarDecorationSampleV2Default, obj7);
                      cResult[25] = first;
                      cResult[26] = tmp50;
                      tmp46 = tmp50;
                    } else {
                      tmp46 = cResult[26];
                    }
                    return tmp46;
                  }
                } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
                  let tmp38;
                  if (cResult[27] !== first) {
                    const obj8 = { item: first, hideBackground: true };
                    const tmp41 = metroImportAll(ProfileEffectSampleV2Default, obj8);
                    cResult[27] = first;
                    cResult[28] = tmp41;
                    tmp38 = tmp41;
                  } else {
                    tmp38 = cResult[28];
                  }
                  if (cResult[29] === tmp5.profileEffectContainer) {
                    let tmp42;
                    if (cResult[30] === tmp38) {
                      tmp42 = cResult[31];
                    }
                    return tmp42;
                  }
                  const obj9 = { style: tmp5.profileEffectContainer, children: tmp38 };
                  const tmp45 = metroImportAll(metroRequire, obj9);
                  cResult[29] = tmp5.profileEffectContainer;
                  cResult[30] = tmp38;
                  cResult[31] = tmp45;
                  tmp42 = tmp45;
                } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
                  let tmp25;
                  if (cResult[32] === tmp9) {
                    if (cResult[33] === (undefined !== hideCardDetails && hideCardDetails)) {
                      if (cResult[34] === tmp5.compactProfileFrameContainer) {
                        if (cResult[35] === tmp5.profileFrameContainer) {
                          tmp25 = cResult[36];
                        }
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
                          prop1 = unpackModuleId;
                        }
                        if (cResult[37] === first) {
                          if (cResult[38] === prop) {
                            let tmp29;
                            if (cResult[39] === prop1) {
                              tmp29 = cResult[40];
                            }
                            if (cResult[41] === tmp25) {
                              let tmp34;
                              if (cResult[42] === tmp29) {
                                tmp34 = cResult[43];
                              }
                              return tmp34;
                            }
                            const obj10 = { style: tmp25, children: tmp29 };
                            const tmp37 = metroImportAll(metroRequire, obj10);
                            cResult[41] = tmp25;
                            cResult[42] = tmp29;
                            cResult[43] = tmp37;
                            tmp34 = tmp37;
                          }
                        }
                        const obj11 = { profileFrame: first, previewWidth: prop, previewHeight: prop1, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
                        const tmp32 = ProfileFrameSamplePreviewDefault;
                        const tmp33 = metroImportAll(tmp32, obj11);
                        cResult[37] = first;
                        cResult[38] = prop;
                        cResult[39] = prop1;
                        cResult[40] = tmp33;
                        tmp29 = tmp33;
                      }
                    }
                  }
                  if (undefined !== hideCardDetails && hideCardDetails) {
                    let profileFrameContainer;
                    if (null != tmp9) {
                      const items = [, ];
                      ({ profileFrameContainer: arr[0], compactProfileFrameContainer: arr[1] } = tmp5);
                      profileFrameContainer = items;
                    }
                    cResult[32] = tmp9;
                    cResult[33] = undefined !== hideCardDetails && hideCardDetails;
                    cResult[34] = tmp5.compactProfileFrameContainer;
                    cResult[35] = tmp5.profileFrameContainer;
                    cResult[36] = profileFrameContainer;
                    tmp25 = profileFrameContainer;
                  }
                  profileFrameContainer = tmp5.profileFrameContainer;
                } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
                  let tmp21;
                  if (cResult[44] !== first) {
                    const obj12 = { item: first };
                    const tmp24 = metroImportAll(NameplateCardPreviewDefault, obj12);
                    cResult[44] = first;
                    cResult[45] = tmp24;
                    tmp21 = tmp24;
                  } else {
                    tmp21 = cResult[45];
                  }
                  return tmp21;
                } else {
                  return null;
                }
              }
            }
          }
        }
        if (null != tmp9) {
          const size1 = { width: null, height: null };
          ({ width: obj5.width, height: obj5.height } = tmp9);
          size2 = size1;
        } else {
          size2 = { width: cardWidth, height: cardHeight };
        }
        cResult[7] = cardHeight;
        cResult[8] = cardWidth;
        cResult[9] = tmp9;
        cResult[10] = size2;
        tmp15 = size2;
      }
    }
    let tmp10 = null;
    if (tmp7) {
      const size3 = { width: cardWidth, height: cardHeight, profileFramePreviewWidth: cardWidth - PX_32, profileFramePreviewHeight: cardHeight - closure_13, avatarDecorationSize: Math.round(Math.min(size, cardWidth * (size / CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH))) };
      const _Math = Math;
      const _Math2 = Math;
      tmp10 = size3;
    }
    cResult[3] = cardHeight;
    cResult[4] = cardWidth;
    cResult[5] = tmp7;
    cResult[6] = tmp10;
    tmp9 = tmp10;
  }
  const tmp8 = cardWidth < CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH || cardHeight < CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT;
  cResult[0] = cardHeight;
  cResult[1] = cardWidth;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : ((cardHeight) => {
  let avatarDecorationSize;
  let cardWidth;
  let closure_2;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let obj10;
  let obj4;
  let obj8;
  let product;
  let prop;
  let prop1;
  let tmp16;
  let tmp17;
  ({ product, cardWidth } = cardHeight);
  cardHeight = cardHeight.cardHeight;
  let flag = cardHeight.hideCardDetails;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_16();
  const obj = cardWidth(7842);
  const shopProductItems = obj.useShopProductItems(product);
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const tmp5 = cardWidth < cardWidth(8418).COLLECTIBLES_SHOP_CARD_WIDTH || cardHeight < cardWidth(8418).COLLECTIBLES_SHOP_CARD_HEIGHT;
  dependencyMap = tmp5;
  const items = [cardHeight, cardWidth, tmp5];
  const memo = react.useMemo(() => {
    let tmp = null;
    if (closure_2) {
      size = { width: cardWidth, height: cardHeight, profileFramePreviewWidth: cardWidth - PX_32, profileFramePreviewHeight: cardHeight - closure_13, avatarDecorationSize: Math.round(Math.min(c10, cardWidth * (c10 / CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH))) };
      const _Math = Math;
      const _Math2 = Math;
      tmp = size;
    }
    return tmp;
  }, items);
  const items1 = [cardHeight, cardWidth, memo];
  const memo1 = react.useMemo(() => {
    let size1;
    if (null != memo) {
      size = { width: null, height: null };
      ({ width: obj2.width, height: obj2.height } = memo);
      size1 = size;
    } else {
      size1 = { width: cardWidth, height: cardHeight };
    }
    return size1;
  }, items1);
  if (product.type === cardWidth(1980).CollectiblesItemType.BUNDLE) {
    const obj2 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, size: "small", previewAssets: product.previewAssets, disableStaticBackground: true, targetSize: memo1 };
    return closure_8(cardHeight(8453), obj2);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const obj3 = { source: obj4, style: tmp.externalProductImage };
    obj4 = { uri: cardHeight(8499) };
    const tmp33 = cardHeight(5974);
    return closure_8(tmp33, obj3);
  } else {
    const ALL = cardWidth(1088).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      size = { skuId: product.skuId, width: cardWidth(8500).FRACTIONAL_NITRO_COIN_SIZE.CARD, height: cardWidth(8500).FRACTIONAL_NITRO_COIN_SIZE.CARD };
      const FractionalNitroCoinIllustration = cardWidth(8500).FractionalNitroCoinIllustration;
      return closure_8(FractionalNitroCoinIllustration, size);
    } else {
      const first = memo(product.items, 1)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (cardWidth(1980).CollectiblesItemType.AVATAR_DECORATION === type) {
        let tmp24Result;
        if (flag) {
          const obj5 = { item: first, size: avatarDecorationSize };
          avatarDecorationSize = undefined;
          if (memo != null) {
            avatarDecorationSize = memo.avatarDecorationSize;
          }
          if (avatarDecorationSize == null) {
            avatarDecorationSize = size;
          }
          tmp24Result = closure_8(closure_15, obj5);
        } else {
          const obj6 = { item: first, size };
          tmp24Result = closure_8(cardHeight(8466), obj6);
        }
        return tmp24Result;
      } else if (cardWidth(1980).CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj7 = { style: tmp.profileEffectContainer, children: closure_8(cardHeight(8455), obj8) };
        obj8 = { item: first, hideBackground: true };
        return closure_8(closure_6, obj7);
      } else if (cardWidth(1980).CollectiblesItemType.PROFILE_FRAME === type) {
        if (flag) {
          let profileFrameContainer;
          if (null != memo) {
            const items2 = [, ];
            ({ profileFrameContainer: arr3[0], compactProfileFrameContainer: arr3[1] } = tmp);
            profileFrameContainer = items2;
          }
          const obj9 = { style: profileFrameContainer, children: closure_8(tmp17, obj10) };
          obj10 = { profileFrame: first, previewWidth: prop, previewHeight: prop1, profileBackgroundColor: tmp16(587).colors.BACKGROUND_BASE_LOW };
          prop = undefined;
          tmp16 = cardHeight;
          tmp17 = cardHeight(8478);
          if (memo != null) {
            prop = memo.profileFramePreviewWidth;
          }
          if (prop == null) {
            prop = cardWidth(8418).COLLECTIBLES_SHOP_CARD_WIDTH - PX_32;
          }
          prop1 = undefined;
          if (memo != null) {
            prop1 = memo.profileFramePreviewHeight;
          }
          if (prop1 == null) {
            prop1 = closure_11;
          }
          return closure_8(tmp15, obj9);
        }
        profileFrameContainer = tmp.profileFrameContainer;
      } else if (cardWidth(1980).CollectiblesItemType.NAMEPLATE === type) {
        const obj11 = { item: first };
        return closure_8(cardHeight(8480), obj11);
      } else {
        return null;
      }
    }
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let cardHeight;
  let cardWidth;
  let hideCardDetails;
  let product;
  const obj = react2;
  const cResult = obj.c(25);
  ({ product, cardWidth, cardHeight, hideCardDetails } = arg0);
  const tmp5 = closure_16();
  const tmpResult = useDefaultVariantIndex;
  const defaultVariantIndex = tmpResult.useDefaultVariantIndex(product);
  if (cResult[0] === product) {
    let tmp7;
    let tmp8;
    if (cResult[1] === defaultVariantIndex) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const hexToRgbaString = ColorUtils.hexToRgbaString;
    ColorUtils;
    const hexWithOpacity = ColorUtils.hexWithOpacity;
    ColorUtils;
    const tmpResult8 = useToken;
    const hexToRgbaStringResult = hexToRgbaString(hexWithOpacity(tmpResult8.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW), 1));
    if (!(undefined !== hideCardDetails && hideCardDetails)) {
      if (tmp8 !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        let str;
        let tmp15;
        if (tmp8 !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
          str = "75%";
        }
        if (cResult[4] !== hexToRgbaStringResult) {
          const obj2 = { backgroundColor: hexToRgbaStringResult };
          cResult[4] = hexToRgbaStringResult;
          cResult[5] = obj2;
          tmp15 = obj2;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] === tmp5.assetContainer) {
          let tmp16;
          let tmp17;
          if (cResult[7] === tmp15) {
            tmp16 = cResult[8];
          }
          if (cResult[9] !== str) {
            const obj3 = { height: str };
            cResult[9] = str;
            cResult[10] = obj3;
            tmp17 = obj3;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] === tmp5.overlayContainer) {
            let tmp18;
            if (cResult[12] === tmp17) {
              tmp18 = cResult[13];
            }
            if (cResult[14] === cardHeight) {
              if (cResult[15] === cardWidth) {
                if (cResult[16] === (undefined !== hideCardDetails && hideCardDetails)) {
                  let tmp19;
                  if (cResult[17] === tmp7) {
                    tmp19 = cResult[18];
                  }
                  if (cResult[19] === tmp18) {
                    let tmp23;
                    if (cResult[20] === tmp19) {
                      tmp23 = cResult[21];
                    }
                    if (cResult[22] === tmp16) {
                      let tmp27;
                      if (cResult[23] === tmp23) {
                        tmp27 = cResult[24];
                      }
                      return tmp27;
                    }
                    const obj4 = { style: tmp16, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: tmp23 };
                    const tmp30 = metroImportAll(metroRequire, obj4);
                    cResult[22] = tmp16;
                    cResult[23] = tmp23;
                    cResult[24] = tmp30;
                    tmp27 = tmp30;
                  }
                  const obj5 = { style: tmp18, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: tmp19 };
                  const tmp26 = metroImportAll(metroRequire, obj5);
                  cResult[19] = tmp18;
                  cResult[20] = tmp19;
                  cResult[21] = tmp26;
                  tmp23 = tmp26;
                }
              }
            }
            const obj6 = { product: tmp7, cardWidth, cardHeight, hideCardDetails: undefined !== hideCardDetails && hideCardDetails };
            const tmp22 = metroImportAll(closure_17, obj6);
            cResult[14] = cardHeight;
            cResult[15] = cardWidth;
            cResult[16] = undefined !== hideCardDetails && hideCardDetails;
            cResult[17] = tmp7;
            cResult[18] = tmp22;
            tmp19 = tmp22;
          }
          const items = [tmp5.overlayContainer, tmp17];
          cResult[11] = tmp5.overlayContainer;
          cResult[12] = tmp17;
          cResult[13] = items;
          tmp18 = items;
        }
        const items1 = [tmp5.assetContainer, tmp15];
        cResult[6] = tmp5.assetContainer;
        cResult[7] = tmp15;
        cResult[8] = items1;
        tmp16 = items1;
      }
    }
    str = "100%";
  }
  const tmpResult9 = CollectiblesProductUtils;
  const selectedProduct = tmpResult9.getSelectedProduct(product, defaultVariantIndex);
  const tmpResult10 = CollectiblesProductUtils;
  const productType = tmpResult10.getProductType(selectedProduct);
  cResult[0] = product;
  cResult[1] = defaultVariantIndex;
  cResult[2] = selectedProduct;
  cResult[3] = productType;
  tmp8 = productType;
  tmp7 = selectedProduct;
}) : ((arg0) => {
  let cardHeight;
  let cardWidth;
  let hideCardDetails;
  let items;
  let items1;
  let obj6;
  let obj8;
  let product;
  ({ product, hideCardDetails } = arg0);
  ({ cardWidth, cardHeight } = arg0);
  if (hideCardDetails === undefined) {
    hideCardDetails = false;
  }
  const tmp = closure_16();
  const obj = useDefaultVariantIndex;
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const obj2 = CollectiblesProductUtils;
  const selectedProduct = obj2.getSelectedProduct(product, defaultVariantIndex);
  const obj3 = CollectiblesProductUtils;
  const productType = obj3.getProductType(selectedProduct);
  ColorUtils;
  ColorUtils;
  useToken;
  if (!hideCardDetails) {
    if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
      let str;
      if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
        str = "75%";
      }
      const obj4 = { style: items, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: metroImportAll(metroRequire, obj6) };
      items = [tmp.assetContainer, ];
      const obj5 = { backgroundColor: tmp10 };
      items[1] = obj5;
      obj6 = { style: items1, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: metroImportAll(closure_17, obj8) };
      items1 = [tmp.overlayContainer, ];
      const obj7 = { height: str };
      items1[1] = obj7;
      obj8 = { product: selectedProduct, cardWidth, cardHeight, hideCardDetails };
      return metroImportAll(metroRequire, obj4);
    }
  }
  str = "100%";
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCardAssetTile.tsx");

export default memoResult;