// discord_app/modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import FractionalPremiumSKUs from "../../../../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx";
import intl8 from "../../../intl/index.native.tsx";
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
import _modDef8499 from "../../../../discord_assets/assets/orbs/orb_profile_badge_icon-2x.png.js";
import FractionalNitroCoinIllustration2 from "FractionalNitroCoinIllustration.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import getProductName from "../utils/getProductName.tsx";
import _modDef10747 from "../../../../discord_assets/assets/collectibles/previews/sample_profile_small.png.js";
import OrbCheckoutAmountTagDefault from "../../virtual_currency/native/OrbCheckoutAmountTag.tsx";
import react from "../../../../_runtime/00019_react.js";
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

let SAMPLE_PROFILE_ASPECT_RATIO;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
const View = react_native.View;
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ BUNDLE_PREVIEW_CONFIG: metroRequire, SAMPLE_PROFILE_ASPECT_RATIO } = CollectiblesPreviewConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  externalProductImage: { width: 45, height: 45 },
  bundlePreviewContainer: obj2,
  bundlePreviewScale: { overflow: "hidden", alignItems: "center", justifyContent: "center" },
  productContainer: obj3,
  productDetailsContainer: obj4,
  productPreviewContainer: { justifyContent: "center", alignItems: "center" },
  productDetails: obj5,
  productDetailsTextContainer: obj6,
  errorContainer: obj7,
};
obj2 = { alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = {
  borderRadius: nativeDefault.radii.lg,
  flexDirection: "column",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj4 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
};
obj5 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj6 = { gap: nativeDefault.space.PX_4 };
obj7 = {
  height: 36,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  borderBottomLeftRadius: nativeDefault.radii.lg,
  borderBottomRightRadius: nativeDefault.radii.lg,
};
let closure_9 = createStyles(obj);
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles((arg0) => {
  let BORDER_FEEDBACK_CRITICAL;
  let tmp5;
  const colors = nativeDefault.colors;
  const tmp3 = arg0;
  if (tmp3) {
    BORDER_FEEDBACK_CRITICAL = colors.BACKGROUND_BRAND;
    tmp5 = importDefault;
  } else {
    BORDER_FEEDBACK_CRITICAL = colors.BORDER_FEEDBACK_CRITICAL;
    tmp5 = importDefault;
  }
  const obj = {
    giftProductContainer: {
      borderWidth: 2,
      borderColor: BORDER_FEEDBACK_CRITICAL,
      marginHorizontal: tmp5(587).space.PX_16,
      backgroundColor: "enabled",
    },
  };
  ({
    borderWidth: 2,
    borderColor: BORDER_FEEDBACK_CRITICAL,
    marginHorizontal: tmp5(587).space.PX_16,
    backgroundColor: "enabled",
  });
  return obj;
});
createStyles = createStyles_mod;
let obj8 = {
  profileEffectContainer: size,
  profileEffect: { position: "absolute", width: "100%", aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, top: 0 },
};
size = {
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
let closure_11 = createStyles.createStyles(obj8);
createStyles = createStyles_mod;
let obj9 = { nameplate: obj10 };
obj10 = { borderRadius: nativeDefault.radii.xs };
let closure_12 = createStyles.createStyles(obj9);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (item) => {
      let items;
      const obj = react2;
      const cResult = obj.c(14);
      item = item.item;
      const tmp3 = closure_11();
      const tmp5 = useProfileEffectDefault(item.skuId);
      let tmp6 = null;
      if (null != tmp5) {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { uri: _modDef10747 };
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === tmp5.accessibilityLabel) {
          let tmp9;
          let tmp12;
          if (cResult[2] === tmp3.profileEffect) {
            tmp9 = cResult[3];
          }
          if (cResult[4] !== tmp5.thumbnailPreviewSrc) {
            const obj3 = { uri: tmp5.thumbnailPreviewSrc };
            cResult[4] = tmp5.thumbnailPreviewSrc;
            cResult[5] = obj3;
            tmp12 = obj3;
          } else {
            tmp12 = cResult[5];
          }
          if (cResult[6] === tmp5.title) {
            if (cResult[7] === tmp3.profileEffect) {
              let tmp13;
              if (cResult[8] === tmp12) {
                tmp13 = cResult[9];
              }
              if (cResult[10] === tmp3.profileEffectContainer) {
                if (cResult[11] === tmp9) {
                  let tmp16;
                  if (cResult[12] === tmp13) {
                    tmp16 = cResult[13];
                  }
                  tmp6 = tmp16;
                }
              }
              const obj4 = { style: tmp3.profileEffectContainer, children: items };
              items = [tmp9, tmp13];
              const tmp19 = metroImportAll(View, obj4);
              cResult[10] = tmp3.profileEffectContainer;
              cResult[11] = tmp9;
              cResult[12] = tmp13;
              cResult[13] = tmp19;
              tmp16 = tmp19;
            }
          }
          const obj5 = {
            style: tmp3.profileEffect,
            source: tmp12,
            accessibilityLabel: tmp5.title,
            resizeMode: "cover",
          };
          const tmp15 = metroImportDefault(FastImageDefault, obj5);
          cResult[6] = tmp5.title;
          cResult[7] = tmp3.profileEffect;
          cResult[8] = tmp12;
          cResult[9] = tmp15;
          tmp13 = tmp15;
        }
        const obj6 = {
          source: first,
          accessibilityLabel: tmp5.accessibilityLabel,
          style: tmp3.profileEffect,
          resizeMode: "cover",
        };
        const tmp11 = metroImportDefault(FastImageDefault, obj6);
        cResult[1] = tmp5.accessibilityLabel;
        cResult[2] = tmp3.profileEffect;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      }
      return tmp6;
    }
  : (item) => {
      let items;
      let obj3;
      let obj5;
      item = item.item;
      const tmp = closure_11();
      const tmp4 = useProfileEffectDefault(item.skuId);
      let tmp5 = null;
      if (null != tmp4) {
        const obj = { style: tmp.profileEffectContainer, children: items };
        const obj2 = {
          source: obj3,
          accessibilityLabel: tmp4.accessibilityLabel,
          style: tmp.profileEffect,
          resizeMode: "cover",
        };
        obj3 = { uri: _modDef10747 };
        const tmp2Result = FastImageDefault;
        items = [metroImportDefault(tmp2Result, obj2)];
        const obj4 = { style: tmp.profileEffect, source: obj5, accessibilityLabel: tmp4.title, resizeMode: "cover" };
        obj5 = { uri: tmp4.thumbnailPreviewSrc };
        items[1] = metroImportDefault(FastImageDefault, obj4);
        tmp5 = metroImportAll(View, obj);
      }
      return tmp5;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (item) => {
      let height;
      let width;
      const obj = react2;
      const cResult = obj.c(4);
      ({ width, height } = item);
      const tmp4 = useMaybeFetchProfileFrameDefault(item.item.skuId);
      let tmp5 = null;
      if (null != tmp4) {
        if (cResult[0] === height) {
          if (cResult[1] === tmp4) {
            let tmp6;
            if (cResult[2] === width) {
              tmp6 = cResult[3];
            }
            tmp5 = tmp6;
          }
        }
        const obj2 = {
          profileFrame: tmp4,
          previewWidth: width,
          previewHeight: height,
          profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
        };
        const tmp3Result = ProfileFrameSamplePreviewDefault;
        const tmp9 = metroImportDefault(tmp3Result, obj2);
        cResult[0] = height;
        cResult[1] = tmp4;
        cResult[2] = width;
        cResult[3] = tmp9;
        tmp6 = tmp9;
      }
      return tmp5;
    }
  : (arg0) => {
      let height;
      let item;
      let width;
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
        const tmpResult = ProfileFrameSamplePreviewDefault;
        tmp4 = metroImportDefault(tmpResult, obj);
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let firstAvatarDecoration;
      let firstNameplate;
      let firstProfileEffect;
      let height;
      let items;
      let product;
      let width;
      const obj = react2;
      const cResult = obj.c(26);
      ({ product, width, height } = arg0);
      const tmp3 = closure_9();
      const obj2 = useShopProductItems;
      const shopProductItems = obj2.useShopProductItems(product);
      ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
      const bundleWidth = metroRequire.small.bundleWidth;
      const result = width / bundleWidth;
      if (cResult[0] === height) {
        let tmp6;
        if (cResult[1] === width) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp3.bundlePreviewContainer) {
          let tmp7;
          let tmp8;
          if (cResult[4] === tmp6) {
            tmp7 = cResult[5];
          }
          if (cResult[6] !== result) {
            size = { width: bundleWidth, height: bundleWidth, transform: items };
            items = [{ scale: result }];
            const obj3 = { scale: result };
            cResult[6] = result;
            cResult[7] = size;
            tmp8 = size;
          } else {
            tmp8 = cResult[7];
          }
          if (cResult[8] === tmp3.bundlePreviewScale) {
            let tmp9;
            if (cResult[9] === tmp8) {
              tmp9 = cResult[10];
            }
            if (cResult[11] === height) {
              let tmp10;
              if (cResult[12] === width) {
                tmp10 = cResult[13];
              }
              if (cResult[14] === firstAvatarDecoration) {
                if (cResult[15] === firstNameplate) {
                  if (cResult[16] === firstProfileEffect) {
                    if (cResult[17] === product.previewAssets) {
                      let tmp11;
                      if (cResult[18] === tmp10) {
                        tmp11 = cResult[19];
                      }
                      if (cResult[20] === tmp9) {
                        let tmp15;
                        if (cResult[21] === tmp11) {
                          tmp15 = cResult[22];
                        }
                        if (cResult[23] === tmp7) {
                          let tmp19;
                          if (cResult[24] === tmp15) {
                            tmp19 = cResult[25];
                          }
                          return tmp19;
                        }
                        const obj4 = { style: tmp7, children: tmp15 };
                        const tmp22 = metroImportDefault(View, obj4);
                        cResult[23] = tmp7;
                        cResult[24] = tmp15;
                        cResult[25] = tmp22;
                        tmp19 = tmp22;
                      }
                      const obj5 = { style: tmp9, children: tmp11 };
                      const tmp18 = metroImportDefault(View, obj5);
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
              const tmp14 = metroImportDefault(BundleSampleV2Default, obj6);
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
  : (height) => {
      let firstAvatarDecoration;
      let firstNameplate;
      let firstProfileEffect;
      let obj3;
      let obj4;
      let product;
      let width;
      ({ product, width } = height);
      height = height.height;
      const tmp = closure_9();
      let closure_2 = tmp;
      let obj = useShopProductItems;
      const shopProductItems = obj.useShopProductItems(product);
      const bundleWidth = metroRequire.small.bundleWidth;
      const result = width / bundleWidth;
      let c4 = result;
      let items = [tmp.bundlePreviewContainer, width, height];
      ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
      let items1 = [tmp.bundlePreviewScale, bundleWidth, result];
      const memo = react.useMemo(() => {
        const items = [closure_2.bundlePreviewContainer];
        size = { width, height };
        items[1] = size;
        return items;
      }, items);
      const items2 = [width, height];
      const memo1 = react.useMemo(() => {
        let items1;
        const items = [closure_2.bundlePreviewScale];
        size = { width: bundleWidth, height: bundleWidth, transform: items1 };
        items1 = [];
        const obj = { scale };
        items1[0] = obj;
        items[1] = size;
        return items;
      }, items1);
      const obj2 = { style: memo, children: metroImportDefault(View, obj3) };
      obj3 = { style: memo1, children: metroImportDefault(BundleSampleV2Default, obj4) };
      const memo2 = react.useMemo(() => {
        size = { width, height };
        return size;
      }, items2);
      obj4 = {
        deco: firstAvatarDecoration,
        pfx: firstProfileEffect,
        nameplate: firstNameplate,
        previewAssets: product.previewAssets,
        disableStaticBackground: true,
        size: "small",
        targetSize: memo2,
      };
      return metroImportDefault(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (item) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      item = item.item;
      const tmp4 = closure_12();
      if (cResult[0] !== item) {
        const tmpResult = utils;
        const nameplateData = tmpResult.getNameplateData(item);
        cResult[0] = item;
        cResult[1] = nameplateData;
        tmp5 = nameplateData;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        let tmp7;
        if (cResult[3] === tmp4.nameplate) {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
      const obj2 = { nameplate: tmp5, fullOpacity: true, isSquarePreview: true, style: tmp4.nameplate };
      const tmp8 = metroImportDefault(NameplateDefault, obj2);
      cResult[2] = tmp5;
      cResult[3] = tmp4.nameplate;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : (item) => {
      item = item.item;
      const tmp = closure_12();
      const obj = utils;
      const nameplateData = obj.getNameplateData(item);
      const obj2 = { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true, style: tmp.nameplate };
      return metroImportDefault(NameplateDefault, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let num;
      let product;
      let recipientUser;
      const obj = react2;
      const cResult = obj.c(15);
      ({ product, recipientUser } = arg0);
      const tmp4 = closure_9();
      if (product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        num = 42;
      } else {
        num = 55;
      }
      if (cResult[0] === recipientUser) {
        let tmp5;
        let tmp7;
        if (cResult[1] === num) {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== num) {
          size = { height: 55, width: num };
          cResult[3] = num;
          cResult[4] = size;
          tmp7 = size;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp4.productPreviewContainer) {
          let tmp8;
          if (cResult[6] === tmp7) {
            tmp8 = cResult[7];
          }
          if (cResult[8] === product) {
            if (cResult[9] === tmp5) {
              let tmp9;
              if (cResult[10] === num) {
                tmp9 = cResult[11];
              }
              if (cResult[12] === tmp8) {
                let tmp13;
                if (cResult[13] === tmp9) {
                  tmp13 = cResult[14];
                }
                return tmp13;
              }
              const obj2 = { style: tmp8, children: tmp9 };
              const tmp16 = metroImportDefault(View, obj2);
              cResult[12] = tmp8;
              cResult[13] = tmp9;
              cResult[14] = tmp16;
              tmp13 = tmp16;
            }
          }
          const size1 = { product, width: num, height: 55, userAvatarSource: tmp5 };
          const tmp12 = metroImportDefault(closure_18, size1);
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
  : (arg0) => {
      let items;
      let num;
      let product;
      let recipientUser;
      ({ product, recipientUser } = arg0);
      const tmp = closure_9();
      if (product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
        num = 42;
      } else {
        num = 55;
      }
      let avatarSource;
      if (recipientUser != null) {
        avatarSource = recipientUser.getAvatarSource(undefined, false, num);
      }
      const obj = {
        style: items,
        children: metroImportDefault(closure_18, { product, width: num, height: 55, userAvatarSource: avatarSource }),
      };
      items = [tmp.productPreviewContainer, { height: 55, width: num }];
      return metroImportDefault(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let height;
      let product;
      let userAvatarSource;
      let width;
      const obj = react2;
      const cResult = obj.c(21);
      ({ product, width, height, userAvatarSource } = arg0);
      const tmp4 = closure_9();
      const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
      if (ALL.has(product.skuId)) {
        let tmp37;
        if (cResult[0] !== product.skuId) {
          size = {
            skuId: product.skuId,
            width: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT,
            height: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT,
          };
          const FractionalNitroCoinIllustration = FractionalNitroCoinIllustration2.FractionalNitroCoinIllustration;
          const tmp39 = metroImportDefault(FractionalNitroCoinIllustration, size);
          cResult[0] = product.skuId;
          cResult[1] = tmp39;
          tmp37 = tmp39;
        } else {
          tmp37 = cResult[1];
        }
        return tmp37;
      } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
        let tmp31;
        let tmp33;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { uri: _modDef8499 };
          cResult[2] = obj2;
          tmp31 = obj2;
        } else {
          tmp31 = cResult[2];
        }
        if (cResult[3] !== tmp4.externalProductImage) {
          const obj3 = { source: tmp31, style: tmp4.externalProductImage };
          const tmp36 = metroImportDefault(FastImageDefault, obj3);
          cResult[3] = tmp4.externalProductImage;
          cResult[4] = tmp36;
          tmp33 = tmp36;
        } else {
          tmp33 = cResult[4];
        }
        return tmp33;
      } else {
        const type = product.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          if (cResult[5] === product.items[0]) {
            if (cResult[6] === userAvatarSource) {
              let tmp26;
              if (cResult[7] === width) {
                tmp26 = cResult[8];
              }
              return tmp26;
            }
          }
          const obj4 = { item: product.items[0], size: width, avatarSource: userAvatarSource, animate: false };
          const tmp29 = metroImportDefault(AvatarDecorationSampleV2Default, obj4);
          cResult[5] = product.items[0];
          cResult[6] = userAvatarSource;
          cResult[7] = width;
          cResult[8] = tmp29;
          tmp26 = tmp29;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          let tmp22;
          const first = product.items[0];
          if (cResult[9] !== first) {
            const obj5 = { item: first };
            const tmp25 = metroImportDefault(closure_13, obj5);
            cResult[9] = first;
            cResult[10] = tmp25;
            tmp22 = tmp25;
          } else {
            tmp22 = cResult[10];
          }
          return tmp22;
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          let tmp17;
          const first1 = product.items[0];
          if (cResult[11] !== first1) {
            const obj6 = { item: first1 };
            const tmp20 = metroImportDefault(closure_16, obj6);
            cResult[11] = first1;
            cResult[12] = tmp20;
            tmp17 = tmp20;
          } else {
            tmp17 = cResult[12];
          }
          return tmp17;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          const first2 = product.items[0];
          if (cResult[13] === height) {
            if (cResult[14] === first2) {
              let tmp12;
              if (cResult[15] === width) {
                tmp12 = cResult[16];
              }
              return tmp12;
            }
          }
          const size1 = { item: first2, width, height };
          const tmp15 = metroImportDefault(closure_14, size1);
          cResult[13] = height;
          cResult[14] = first2;
          cResult[15] = width;
          cResult[16] = tmp15;
          tmp12 = tmp15;
        } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
          if (cResult[17] === height) {
            if (cResult[18] === product) {
              let tmp7;
              if (cResult[19] === width) {
                tmp7 = cResult[20];
              }
              return tmp7;
            }
          }
          const size2 = { product, width, height };
          const tmp10 = metroImportDefault(closure_15, size2);
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
  : (userAvatarSource) => {
      let height;
      let obj2;
      let product;
      let width;
      ({ product, width, height } = userAvatarSource);
      userAvatarSource = userAvatarSource.userAvatarSource;
      const tmp = closure_9();
      const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
      if (ALL.has(product.skuId)) {
        size = {
          skuId: product.skuId,
          width: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT,
          height: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT,
        };
        const FractionalNitroCoinIllustration = FractionalNitroCoinIllustration2.FractionalNitroCoinIllustration;
        return metroImportDefault(FractionalNitroCoinIllustration, size);
      } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
        const obj = { source: obj2, style: tmp.externalProductImage };
        obj2 = { uri: _modDef8499 };
        const tmp18 = FastImageDefault;
        return metroImportDefault(tmp18, obj);
      } else {
        const type = product.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          const obj3 = { item: product.items[0], size: width, avatarSource: userAvatarSource, animate: false };
          return metroImportDefault(AvatarDecorationSampleV2Default, obj3);
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj4 = { item: product.items[0] };
          return metroImportDefault(closure_13, obj4);
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          const obj5 = { item: product.items[0] };
          return metroImportDefault(closure_16, obj5);
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          const size1 = { item: product.items[0], width, height };
          return metroImportDefault(closure_14, size1);
        } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
          const size2 = { product, width, height };
          return metroImportDefault(closure_15, size2);
        } else {
          return null;
        }
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let items1;
      let product;
      let recipientUser;
      let tmp40;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(27);
      ({ product, recipientUser } = arg0);
      const tmp4 = closure_9();
      const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
      if (ALL.has(product.skuId)) {
        let first;
        const _Symbol6 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl7 = intl8.intl;
          const stringResult = intl7.string(intl8.t.DFMPWS);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        tmp7 = first;
      } else if (product.skuId !== EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
        const type = product.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          let tmp21;
          const _Symbol5 = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const intl6 = intl8.intl;
            const stringResult1 = intl6.string(intl8.t["7v0T9P"]);
            cResult[2] = stringResult1;
            tmp21 = stringResult1;
          } else {
            tmp21 = cResult[2];
          }
          tmp7 = tmp21;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          let tmp18;
          const _Symbol4 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = intl8.intl;
            const stringResult2 = intl5.string(intl8.t.wR5wOo);
            cResult[3] = stringResult2;
            tmp18 = stringResult2;
          } else {
            tmp18 = cResult[3];
          }
          tmp7 = tmp18;
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          let tmp15;
          const _Symbol3 = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = intl8.intl;
            const stringResult3 = intl4.string(intl8.t.x5CoXR);
            cResult[4] = stringResult3;
            tmp15 = stringResult3;
          } else {
            tmp15 = cResult[4];
          }
          tmp7 = tmp15;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          let tmp12;
          const _Symbol2 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = intl8.intl;
            const stringResult4 = intl3.string(intl8.t.GWrZOd);
            cResult[5] = stringResult4;
            tmp12 = stringResult4;
          } else {
            tmp12 = cResult[5];
          }
          tmp7 = tmp12;
        } else {
          tmp7 = null;
          if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
            let tmp9;
            const _Symbol7 = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = intl8.intl;
              const stringResult5 = intl2.string(intl8.t.Zr5tjn);
              cResult[6] = stringResult5;
              tmp9 = stringResult5;
            } else {
              tmp9 = cResult[6];
            }
            tmp7 = tmp9;
          }
        }
      } else {
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl8.intl;
          const stringResult6 = intl.string(intl8.t["0+rBWT"]);
          cResult[1] = stringResult6;
          tmp7 = stringResult6;
        } else {
          tmp7 = cResult[1];
        }
      }
      if (null == tmp7) {
        let tmp44;
        if (cResult[7] !== product.name) {
          const obj2 = { variant: "text-md/semibold", children: product.name };
          const tmp46 = metroImportDefault(Text_Text.Text, obj2);
          cResult[7] = product.name;
          cResult[8] = tmp46;
          tmp44 = tmp46;
        } else {
          tmp44 = cResult[8];
        }
        if (cResult[9] === tmp4.productDetails) {
          let tmp47;
          if (cResult[10] === tmp44) {
            tmp47 = cResult[11];
          }
          tmp40 = tmp47;
        }
        const obj3 = { style: tmp4.productDetails, children: tmp44 };
        const tmp50 = metroImportDefault(View, obj3);
        cResult[9] = tmp4.productDetails;
        cResult[10] = tmp44;
        cResult[11] = tmp50;
        tmp47 = tmp50;
      } else {
        if (cResult[12] === product) {
          let tmp26;
          let tmp30;
          let tmp33;
          if (cResult[13] === recipientUser) {
            tmp26 = cResult[14];
          }
          if (cResult[15] !== product.name) {
            const obj4 = { variant: "text-md/semibold", children: product.name };
            const tmp32 = metroImportDefault(Text_Text.Text, obj4);
            cResult[15] = product.name;
            cResult[16] = tmp32;
            tmp30 = tmp32;
          } else {
            tmp30 = cResult[16];
          }
          if (cResult[17] !== tmp7) {
            const obj5 = { variant: "text-sm/medium", children: tmp7 };
            const tmp35 = metroImportDefault(Text_Text.Text, obj5);
            cResult[17] = tmp7;
            cResult[18] = tmp35;
            tmp33 = tmp35;
          } else {
            tmp33 = cResult[18];
          }
          if (cResult[19] === tmp4.productDetailsTextContainer) {
            if (cResult[20] === tmp30) {
              let tmp36;
              if (cResult[21] === tmp33) {
                tmp36 = cResult[22];
              }
              if (cResult[23] === tmp4.productDetails) {
                if (cResult[24] === tmp26) {
                  if (cResult[25] === tmp36) {
                    tmp40 = cResult[26];
                  }
                }
              }
              const obj6 = { style: tmp4.productDetails, children: items };
              items = [tmp26, tmp36];
              const tmp43 = metroImportAll(View, obj6);
              cResult[23] = tmp4.productDetails;
              cResult[24] = tmp26;
              cResult[25] = tmp36;
              cResult[26] = tmp43;
              tmp40 = tmp43;
            }
          }
          const obj7 = { style: tmp4.productDetailsTextContainer, children: items1 };
          items1 = [tmp30, tmp33];
          const tmp39 = metroImportAll(View, obj7);
          cResult[19] = tmp4.productDetailsTextContainer;
          cResult[20] = tmp30;
          cResult[21] = tmp33;
          cResult[22] = tmp39;
          tmp36 = tmp39;
        }
        const obj8 = { product, recipientUser };
        const tmp29 = metroImportDefault(closure_17, obj8);
        cResult[12] = product;
        cResult[13] = recipientUser;
        cResult[14] = tmp29;
        tmp26 = tmp29;
      }
      return tmp40;
    }
  : (product) => {
      let items1;
      let items2;
      let obj2;
      let tmp7;
      product = product.product;
      require = product;
      const recipientUser = product.recipientUser;
      const tmp = closure_9();
      const items = [,];
      ({ type: arr[0], skuId: arr[1] } = product);
      const memo = react.useMemo(() => {
        const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
        if (ALL.has(require.skuId)) {
          const intl7 = intl8.intl;
          return intl7.string(intl8.t.DFMPWS);
        } else if (require.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
          const intl6 = intl8.intl;
          return intl6.string(intl8.t["0+rBWT"]);
        } else {
          const type = require.type;
          if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
            const intl5 = intl8.intl;
            return intl5.string(intl8.t["7v0T9P"]);
          } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
            const intl4 = intl8.intl;
            return intl4.string(intl8.t.wR5wOo);
          } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
            const intl3 = intl8.intl;
            return intl3.string(intl8.t.x5CoXR);
          } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
            const intl2 = intl8.intl;
            return intl2.string(intl8.t.GWrZOd);
          } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
            const intl = intl8.intl;
            return intl.string(intl8.t.Zr5tjn);
          } else {
            return null;
          }
        }
      }, items);
      if (null == memo) {
        const obj = { style: tmp.productDetails, children: closure_7(Text_Text.Text, obj2) };
        obj2 = { variant: "text-md/semibold", children: product.name };
        tmp7 = closure_7(View, obj);
      } else {
        const obj3 = { style: tmp.productDetails, children: items1 };
        const obj4 = { product, recipientUser };
        items1 = [closure_7(closure_17, obj4)];
        const obj5 = { style: tmp.productDetailsTextContainer, children: items2 };
        const obj6 = { variant: "text-md/semibold", children: product.name };
        items2 = [closure_7(Text_Text.Text, obj6)];
        const obj7 = { variant: "text-sm/medium", children: memo };
        items2[1] = closure_7(Text_Text.Text, obj7);
        items1[1] = closure_8(View, obj5);
        tmp7 = closure_8(View, obj3);
      }
      return tmp7;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let hasShopDiscount;
      let orbPrice;
      let priceText;
      let product;
      let tmp4;
      let useOrbPrice;
      const obj = react2;
      const cResult = obj.c(13);
      ({ product, hasShopDiscount, useOrbPrice } = arg0);
      if (useOrbPrice) {
        const obj2 = { product, hasShopDiscount };
        const tmpResult = CollectiblesProductUtils;
        const productOrbPrice = tmpResult.getProductOrbPrice(obj2);
        cResult[0] = hasShopDiscount;
        cResult[1] = product;
        cResult[2] = productOrbPrice;
      } else {
        if (cResult[3] === hasShopDiscount) {
          if (cResult[4] === product) {
            tmp4 = cResult[5];
          }
        }
        const tmpResult2 = collectibles_CollectiblesUtils;
        const formattedPriceForCollectiblesProduct = tmpResult2.getFormattedPriceForCollectiblesProduct(
          product,
          hasShopDiscount,
          true,
        );
        cResult[3] = hasShopDiscount;
        cResult[4] = product;
        cResult[5] = formattedPriceForCollectiblesProduct;
        tmp4 = formattedPriceForCollectiblesProduct;
      }
      if (cResult[6] === tmp6) {
        let tmp9;
        if (cResult[7] === tmp4) {
          tmp9 = cResult[8];
        }
        ({ orbPrice, priceText } = tmp9);
        if (useOrbPrice) {
          let tmp15;
          let amount;
          if (orbPrice != null) {
            amount = orbPrice.amount;
          }
          if (cResult[9] !== amount) {
            const obj3 = { orbAmount: amount };
            const tmp18 = metroImportDefault(OrbCheckoutAmountTagDefault, obj3);
            cResult[9] = amount;
            cResult[10] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[10];
          }
          return tmp15;
        } else {
          let tmp10;
          if (cResult[11] !== priceText) {
            const obj4 = { variant: "text-md/semibold", children: priceText };
            const tmp12 = metroImportDefault(Text_Text.Text, obj4);
            cResult[11] = priceText;
            cResult[12] = tmp12;
            tmp10 = tmp12;
          } else {
            tmp10 = cResult[12];
          }
          return tmp10;
        }
      }
      const obj5 = { orbPrice: tmp6, priceText: tmp4 };
      cResult[6] = tmp6;
      cResult[7] = tmp4;
      cResult[8] = obj5;
      tmp9 = obj5;
    }
  : (product) => {
      let tmp3Result;
      product = product.product;
      require = product;
      const hasShopDiscount = product.hasShopDiscount;
      const useOrbPrice = product.useOrbPrice;
      const items = [product, hasShopDiscount, useOrbPrice];
      const memo = react.useMemo(() => {
        let orbPrice;
        let priceText;
        if (useOrbPrice) {
          const obj = { product: require, hasShopDiscount };
          const tmpResult = CollectiblesProductUtils;
          orbPrice = tmpResult.getProductOrbPrice(obj);
        } else {
          const tmpResult2 = collectibles_CollectiblesUtils;
          priceText = tmpResult2.getFormattedPriceForCollectiblesProduct(require, hasShopDiscount, true);
        }
        return { orbPrice, priceText };
      }, items);
      let orbPrice = memo.orbPrice;
      if (useOrbPrice) {
        let amount;
        const tmp9 = hasShopDiscount(useOrbPrice[27]);
        if (orbPrice != null) {
          amount = orbPrice.amount;
        }
        const obj2 = { orbAmount: amount };
        tmp3Result = closure_7(tmp9, obj2);
      } else {
        let obj = { variant: "text-md/semibold", children: tmp2 };
        tmp3Result = closure_7(require("Text/Text").Text, obj);
      }
      return tmp3Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Text;
      let intl2;
      let isGift;
      let isValidRecipient;
      let items;
      let items1;
      let obj5;
      let product;
      let recipientUser;
      let str;
      let tmp10;
      let tmp13;
      let useOrbPrice;
      const obj = react2;
      const cResult = obj.c(31);
      ({ product, recipientUser, isValidRecipient, useOrbPrice, isGift } = arg0);
      const tmp7 = closure_9();
      const tmp8 = closure_10(undefined !== isValidRecipient && isValidRecipient);
      const tmpResult = useCurrentUser;
      const currentUser = tmpResult.useCurrentUser();
      if (cResult[0] !== currentUser) {
        const obj3 = PremiumUtilsDefault;
        const canUseShopDiscountsResult = obj3.canUseShopDiscounts(currentUser);
        cResult[0] = currentUser;
        cResult[1] = canUseShopDiscountsResult;
        tmp10 = canUseShopDiscountsResult;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== product) {
        const tmpResult4 = getProductName;
        const productNameAndTypeLabel = tmpResult4.getProductNameAndTypeLabel(product);
        cResult[2] = product;
        cResult[3] = productNameAndTypeLabel;
        tmp13 = productNameAndTypeLabel;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === tmp10) {
        if (cResult[5] === product) {
          let tmp15;
          if (cResult[6] === (undefined !== useOrbPrice && useOrbPrice)) {
            tmp15 = cResult[7];
          }
          const _HermesInternal = HermesInternal;
          const combined = "" + tmp13 + ", " + tmp15;
          if (cResult[8] === tmp7.productContainer) {
            let tmp22;
            if (cResult[9] === (undefined !== isGift && isGift && tmp8.giftProductContainer)) {
              tmp22 = cResult[10];
            }
            if (cResult[11] === product) {
              let tmp23;
              if (cResult[12] === recipientUser) {
                tmp23 = cResult[13];
              }
              if (cResult[14] === tmp10) {
                if (cResult[15] === product) {
                  let tmp27;
                  if (cResult[16] === (undefined !== useOrbPrice && useOrbPrice)) {
                    tmp27 = cResult[17];
                  }
                  if (cResult[18] === combined) {
                    if (cResult[19] === tmp7.productDetailsContainer) {
                      if (cResult[20] === tmp27) {
                        let tmp31;
                        if (cResult[21] === tmp23) {
                          tmp31 = cResult[22];
                        }
                        if (cResult[23] === (undefined !== isGift && isGift)) {
                          if (cResult[24] === (undefined !== isValidRecipient && isValidRecipient)) {
                            let tmp35;
                            if (cResult[25] === tmp7.errorContainer) {
                              tmp35 = cResult[26];
                            }
                            if (cResult[27] === tmp31) {
                              if (cResult[28] === tmp35) {
                                let tmp39;
                                if (cResult[29] === tmp22) {
                                  tmp39 = cResult[30];
                                }
                                return tmp39;
                              }
                            }
                            const obj2 = { style: tmp22, children: items };
                            items = [tmp31, tmp35];
                            const tmp42 = metroImportAll(View, obj2);
                            cResult[27] = tmp31;
                            cResult[28] = tmp35;
                            cResult[29] = tmp22;
                            cResult[30] = tmp42;
                            tmp39 = tmp42;
                          }
                        }
                        let tmp36 = tmp6 && !tmp4;
                        if (tmp36) {
                          const obj4 = { style: tmp7.errorContainer, children: metroImportDefault(Text, obj5) };
                          obj5 = {
                            variant: "text-xs/semibold",
                            color: "text-feedback-critical",
                            children: intl2.string(intl8.t["3YfczA"]),
                          };
                          Text = Text_Text.Text;
                          intl2 = intl8.intl;
                          tmp36 = metroImportDefault(View, obj4);
                        }
                        cResult[23] = undefined !== isGift && isGift;
                        cResult[24] = undefined !== isValidRecipient && isValidRecipient;
                        cResult[25] = tmp7.errorContainer;
                        cResult[26] = tmp36;
                        tmp35 = tmp36;
                      }
                    }
                  }
                  const obj6 = {
                    style: tmp7.productDetailsContainer,
                    accessibilityLabel: combined,
                    accessible: true,
                    children: items1,
                  };
                  items1 = [tmp23, tmp27];
                  const tmp34 = metroImportAll(View, obj6);
                  cResult[18] = combined;
                  cResult[19] = tmp7.productDetailsContainer;
                  cResult[20] = tmp27;
                  cResult[21] = tmp23;
                  cResult[22] = tmp34;
                  tmp31 = tmp34;
                }
              }
              const obj7 = { product, hasShopDiscount: tmp10, useOrbPrice: undefined !== useOrbPrice && useOrbPrice };
              const tmp30 = metroImportDefault(closure_20, obj7);
              cResult[14] = tmp10;
              cResult[15] = product;
              cResult[16] = undefined !== useOrbPrice && useOrbPrice;
              cResult[17] = tmp30;
              tmp27 = tmp30;
            }
            const obj8 = { product, recipientUser };
            const tmp26 = metroImportDefault(closure_19, obj8);
            cResult[11] = product;
            cResult[12] = recipientUser;
            cResult[13] = tmp26;
            tmp23 = tmp26;
          }
          const items2 = [tmp7.productContainer, undefined !== isGift && isGift && tmp8.giftProductContainer];
          cResult[8] = tmp7.productContainer;
          cResult[9] = undefined !== isGift && isGift && tmp8.giftProductContainer;
          cResult[10] = items2;
          tmp22 = items2;
        }
      }
      if (undefined !== useOrbPrice && useOrbPrice) {
        const intl = intl8.intl;
        const formatToPlainString = intl.formatToPlainString;
        const W4DfeF = intl8.t.W4DfeF;
        const obj9 = { product, hasShopDiscount: tmp10 };
        const tmpResult5 = CollectiblesProductUtils;
        const productOrbPrice = tmpResult5.getProductOrbPrice(obj9);
        let str2;
        if (productOrbPrice != null) {
          str2 = productOrbPrice.amount;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj10 = { orbAmount: str2 };
        str = formatToPlainString(W4DfeF, obj10);
      } else {
        const tmpResult6 = collectibles_CollectiblesUtils;
        str = tmpResult6.getFormattedPriceForCollectiblesProduct(product, tmp10, true);
        if (str == null) {
          str = "";
        }
      }
      cResult[4] = tmp10;
      cResult[5] = product;
      cResult[6] = undefined !== useOrbPrice && useOrbPrice;
      cResult[7] = str;
      tmp15 = str;
    }
  : (product) => {
      let Text;
      let hasShopDiscount;
      let intl;
      let items2;
      let items3;
      let obj6;
      product = product.product;
      require = product;
      let flag = product.isValidRecipient;
      const recipientUser = product.recipientUser;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = product.useOrbPrice;
      if (flag2 === undefined) {
        flag2 = false;
      }
      let flag3 = product.isGift;
      if (flag3 === undefined) {
        flag3 = false;
      }
      const tmp = closure_9();
      const tmp2 = closure_10(flag);
      let obj = useCurrentUser;
      const currentUser = obj.useCurrentUser();
      let obj2 = flag2(4528);
      const canUseShopDiscountsResult = obj2.canUseShopDiscounts(currentUser);
      dependencyMap = canUseShopDiscountsResult;
      const items = [product, flag2, canUseShopDiscountsResult];
      const items1 = [tmp.productContainer];
      let giftProductContainer = flag3;
      const memo = react.useMemo(() => {
        let str;
        const obj = getProductName;
        const productNameAndTypeLabel = obj.getProductNameAndTypeLabel(require);
        if (flag2) {
          const intl = intl8.intl;
          const formatToPlainString = intl.formatToPlainString;
          const W4DfeF = intl8.t.W4DfeF;
          const obj2 = { product: require, hasShopDiscount };
          const tmpResult = CollectiblesProductUtils;
          const productOrbPrice = tmpResult.getProductOrbPrice(obj2);
          let str2;
          if (productOrbPrice != null) {
            str2 = productOrbPrice.amount;
          }
          if (str2 == null) {
            str2 = "";
          }
          const obj3 = { orbAmount: str2 };
          str = formatToPlainString(W4DfeF, obj3);
        } else {
          const tmpResult2 = collectibles_CollectiblesUtils;
          str = tmpResult2.getFormattedPriceForCollectiblesProduct(require, hasShopDiscount, true);
          if (str == null) {
            str = "";
          }
        }
        return "" + productNameAndTypeLabel + ", " + str;
      }, items);
      if (flag3) {
        giftProductContainer = tmp2.giftProductContainer;
      }
      let obj3 = { style: items1, children: items3 };
      items1[1] = giftProductContainer;
      const obj4 = { style: tmp.productDetailsContainer, accessibilityLabel: memo, accessible: true, children: items2 };
      items2 = [
        closure_7(closure_19, { product, recipientUser }),
        closure_7(closure_20, { product, hasShopDiscount: canUseShopDiscountsResult, useOrbPrice: flag2 }),
      ];
      items3 = [closure_8(View, obj4)];
      if (flag3) {
        flag3 = !flag;
      }
      if (flag3) {
        const obj5 = { style: tmp.errorContainer, children: closure_7(Text, obj6) };
        obj6 = {
          variant: "text-xs/semibold",
          color: "text-feedback-critical",
          children: intl.string(intl8.t["3YfczA"]),
        };
        Text = tmp3(4886).Text;
        intl = tmp3(1126).intl;
        flag3 = closure_7(View, obj5);
      }
      items3[1] = flag3;
      return closure_8(View, obj3);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx");

export default tmp5;
