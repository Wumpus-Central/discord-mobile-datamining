// === Module 8426: SKUPreview ===

// Module 8426 (SKUPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import useToken from "useToken" /* 4580 */;
import ThemeAwareNitroWishlistingWumpusRive from "ThemeAwareNitroWishlistingWumpusRive" /* 4692 */;
import CollectiblesItemRecord from "CollectiblesItemRecord" /* 7057 */;
import useShopProductItems from "useShopProductItems" /* 7842 */;
import WishlistItemCardBase from "WishlistItemCardBase" /* 8427 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8453 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 8455 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8466 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8478 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 8480 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8481 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
let closure_5 = CollectiblesItemRecord.transformSKUToCollectiblesItem;
const SKUProductLines = Constants.SKUProductLines;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles((width, height) => {
  let items;
  const obj = { container: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, scaler: size, bundleContainer: { paddingTop: 20 }, socialLayerStorefrontContainer: { width, height }, profileFrameContainer: { padding: nativeDefault.space.PX_8 }, premiumRiveContainer: { width, height } };
  size = { width: WishlistItemCardBase.DEFAULT_ITEM_SIZE, height: WishlistItemCardBase.DEFAULT_ITEM_SIZE, justifyContent: "center", alignItems: "center", transform: items };
  items = [{ scaleX: width / WishlistItemCardBase.DEFAULT_ITEM_SIZE }, ];
  ({ scaleX: width / WishlistItemCardBase.DEFAULT_ITEM_SIZE });
  items[1] = { scaleY: height / WishlistItemCardBase.DEFAULT_ITEM_SIZE };
  ({ scaleY: height / WishlistItemCardBase.DEFAULT_ITEM_SIZE });
  ({ padding: nativeDefault.space.PX_8 });
  return obj;
});
let size = { width: WishlistItemCardBase.DEFAULT_ITEM_SIZE, height: WishlistItemCardBase.DEFAULT_ITEM_SIZE };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let collectiblesItemData;
  let size2;
  const obj = react2;
  const cResult = obj.c(53);
  ({ collectiblesItemData, size } = arg0);
  if (undefined === size) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  if (cResult[0] !== size) {
    let tmp4 = size;
    if (typeof size === "number") {
      const size1 = { width: size, height: size };
      tmp4 = size1;
    }
    cResult[0] = size;
    cResult[1] = tmp4;
    size2 = tmp4;
  } else {
    size2 = cResult[1];
  }
  const tmp5 = closure_8(size2.width, size2.height);
  if ("bundle" === collectiblesItemData.type) {
    let tmp57;
    if (cResult[2] !== collectiblesItemData.items) {
      const self = this;
      const self2 = this;
      const itemsSortingHat = new useShopProductItems.ItemsSortingHat(collectiblesItemData.items);
      cResult[2] = collectiblesItemData.items;
      cResult[3] = itemsSortingHat;
      tmp57 = itemsSortingHat;
    } else {
      tmp57 = cResult[3];
    }
    if (cResult[4] === tmp5.bundleContainer) {
      let tmp60;
      if (cResult[5] === tmp5.scaler) {
        tmp60 = cResult[6];
      }
      if (cResult[7] === collectiblesItemData.previewAssets) {
        if (cResult[8] === tmp57.firstAvatarDecoration) {
          if (cResult[9] === tmp57.firstNameplate) {
            let tmp61;
            if (cResult[10] === tmp57.firstProfileEffect) {
              tmp61 = cResult[11];
            }
            if (cResult[12] === tmp60) {
              let tmp66;
              if (cResult[13] === tmp61) {
                tmp66 = cResult[14];
              }
              if (cResult[15] === tmp5.container) {
                let tmp70;
                if (cResult[16] === tmp66) {
                  tmp70 = cResult[17];
                }
                return tmp70;
              }
              const tmp73 = <View style={tmp5.container}>{tmp66}</View>;
              cResult[15] = tmp5.container;
              cResult[16] = tmp66;
              cResult[17] = tmp73;
              tmp70 = tmp73;
            }
            const tmp69 = <View style={tmp60}>{tmp61}</View>;
            cResult[12] = tmp60;
            cResult[13] = tmp61;
            cResult[14] = tmp69;
            tmp66 = tmp69;
          }
        }
      }
      ({ firstAvatarDecoration: obj14.deco, firstProfileEffect: obj14.pfx, firstNameplate: obj14.nameplate } = tmp57);
      const tmp65 = jsx(BundleSampleV2Default, { deco: null, pfx: null, nameplate: null, size: "small", previewAssets: collectiblesItemData.previewAssets, disableStaticBackground: true, targetSize: size });
      cResult[7] = collectiblesItemData.previewAssets;
      cResult[8] = tmp57.firstAvatarDecoration;
      cResult[9] = tmp57.firstNameplate;
      cResult[10] = tmp57.firstProfileEffect;
      cResult[11] = tmp65;
      tmp61 = tmp65;
    }
    const items = [, ];
    ({ scaler: arr2[0], bundleContainer: arr2[1] } = tmp5);
    cResult[4] = tmp5.bundleContainer;
    cResult[5] = tmp5.scaler;
    cResult[6] = items;
    tmp60 = items;
  } else {
    const type = collectiblesItemData.item.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      let tmp45;
      if (cResult[18] !== collectiblesItemData.item) {
        const tmp48 = jsx(AvatarDecorationSampleV2Default, { item: collectiblesItemData.item, size: 100 });
        cResult[18] = collectiblesItemData.item;
        cResult[19] = tmp48;
        tmp45 = tmp48;
      } else {
        tmp45 = cResult[19];
      }
      if (cResult[20] === tmp5.scaler) {
        let tmp49;
        if (cResult[21] === tmp45) {
          tmp49 = cResult[22];
        }
        if (cResult[23] === tmp5.container) {
          let tmp53;
          if (cResult[24] === tmp49) {
            tmp53 = cResult[25];
          }
          return tmp53;
        }
        const tmp56 = <View style={tmp5.container}>{tmp49}</View>;
        cResult[23] = tmp5.container;
        cResult[24] = tmp49;
        cResult[25] = tmp56;
        tmp53 = tmp56;
      }
      const tmp52 = <View style={tmp5.scaler}>{tmp45}</View>;
      cResult[20] = tmp5.scaler;
      cResult[21] = tmp45;
      cResult[22] = tmp52;
      tmp49 = tmp52;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      let tmp33;
      if (cResult[26] !== collectiblesItemData.item) {
        const tmp36 = jsx(ProfileEffectSampleV2Default, { item: collectiblesItemData.item, hideBackground: true });
        cResult[26] = collectiblesItemData.item;
        cResult[27] = tmp36;
        tmp33 = tmp36;
      } else {
        tmp33 = cResult[27];
      }
      if (cResult[28] === tmp5.scaler) {
        let tmp37;
        if (cResult[29] === tmp33) {
          tmp37 = cResult[30];
        }
        if (cResult[31] === tmp5.container) {
          let tmp41;
          if (cResult[32] === tmp37) {
            tmp41 = cResult[33];
          }
          return tmp41;
        }
        const tmp44 = <View style={tmp5.container}>{tmp37}</View>;
        cResult[31] = tmp5.container;
        cResult[32] = tmp37;
        cResult[33] = tmp44;
        tmp41 = tmp44;
      }
      const tmp40 = <View style={tmp5.scaler}>{tmp33}</View>;
      cResult[28] = tmp5.scaler;
      cResult[29] = tmp33;
      cResult[30] = tmp40;
      tmp37 = tmp40;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      if (cResult[34] === tmp5.profileFrameContainer) {
        let tmp19;
        let tmp20;
        if (cResult[35] === tmp5.scaler) {
          tmp19 = cResult[36];
        }
        if (cResult[37] !== collectiblesItemData.item) {
          ProfileFrameSamplePreviewDefault;
          const tmp24 = <tmp23 profileFrame={collectiblesItemData.item} previewWidth={WishlistItemCardBase.DEFAULT_ITEM_SIZE - nativeDefault.space.PX_48} previewHeight={WishlistItemCardBase.DEFAULT_ITEM_SIZE} />;
          cResult[37] = collectiblesItemData.item;
          cResult[38] = tmp24;
          tmp20 = tmp24;
        } else {
          tmp20 = cResult[38];
        }
        if (cResult[39] === tmp19) {
          let tmp25;
          if (cResult[40] === tmp20) {
            tmp25 = cResult[41];
          }
          if (cResult[42] === tmp5.container) {
            let tmp29;
            if (cResult[43] === tmp25) {
              tmp29 = cResult[44];
            }
            return tmp29;
          }
          const tmp32 = <View style={tmp5.container}>{tmp25}</View>;
          cResult[42] = tmp5.container;
          cResult[43] = tmp25;
          cResult[44] = tmp32;
          tmp29 = tmp32;
        }
        const tmp28 = <View style={tmp19}>{tmp20}</View>;
        cResult[39] = tmp19;
        cResult[40] = tmp20;
        cResult[41] = tmp28;
        tmp25 = tmp28;
      }
      const items1 = [, ];
      ({ scaler: arr[0], profileFrameContainer: arr[1] } = tmp5);
      cResult[34] = tmp5.profileFrameContainer;
      cResult[35] = tmp5.scaler;
      cResult[36] = items1;
      tmp19 = items1;
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      let tmp7;
      if (cResult[45] !== collectiblesItemData.item) {
        const tmp10 = jsx(NameplateCardPreviewDefault, { item: collectiblesItemData.item });
        cResult[45] = collectiblesItemData.item;
        cResult[46] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[46];
      }
      if (cResult[47] === tmp5.scaler) {
        let tmp11;
        if (cResult[48] === tmp7) {
          tmp11 = cResult[49];
        }
        if (cResult[50] === tmp5.container) {
          let tmp15;
          if (cResult[51] === tmp11) {
            tmp15 = cResult[52];
          }
          return tmp15;
        }
        const tmp18 = <View style={tmp5.container}>{tmp11}</View>;
        cResult[50] = tmp5.container;
        cResult[51] = tmp11;
        cResult[52] = tmp18;
        tmp15 = tmp18;
      }
      const tmp14 = <View style={tmp5.scaler}>{tmp7}</View>;
      cResult[47] = tmp5.scaler;
      cResult[48] = tmp7;
      cResult[49] = tmp14;
      tmp11 = tmp14;
    } else {
      return null;
    }
  }
}) : (function(arg0) {
  let collectiblesItemData;
  ({ collectiblesItemData, size } = arg0);
  if (size === undefined) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  let size2 = size;
  if (typeof size === "number") {
    const size1 = { width: size, height: size };
    size2 = size1;
  }
  const tmp3 = closure_8(size2.width, size2.height);
  if ("bundle" === collectiblesItemData.type) {
    const self = this;
    const self2 = this;
    const itemsSortingHat = new useShopProductItems.ItemsSortingHat(collectiblesItemData.items);
    const items = [, ];
    ({ scaler: arr2[0], bundleContainer: arr2[1] } = tmp3);
    ({ firstAvatarDecoration: obj15.deco, firstProfileEffect: obj15.pfx, firstNameplate: obj15.nameplate } = itemsSortingHat);
    return <View style={tmp3.container}>{null}</View>;
  } else {
    const type = collectiblesItemData.item.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      return <View style={tmp3.container}>{null}</View>;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      return <View style={tmp3.container}>{null}</View>;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      const items1 = [, ];
      ({ scaler: arr[0], profileFrameContainer: arr[1] } = tmp3);
      ({ profileFrame: collectiblesItemData.item, previewWidth: WishlistItemCardBase.DEFAULT_ITEM_SIZE - nativeDefault.space.PX_48, previewHeight: WishlistItemCardBase.DEFAULT_ITEM_SIZE });
      ProfileFrameSamplePreviewDefault;
      return <View style={tmp3.container}>{null}</View>;
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      return <View style={tmp3.container}>{null}</View>;
    } else {
      return null;
    }
  }
});
let closure_10 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let sku;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  ({ sku, size } = arg0);
  if (undefined === size) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  if (cResult[0] !== sku) {
    const tmp6 = closure_5(sku);
    cResult[0] = sku;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  let tmp7 = null;
  if (null != tmp4) {
    if (cResult[2] === tmp4) {
      let tmp8;
      if (cResult[3] === size) {
        tmp8 = cResult[4];
      }
      tmp7 = tmp8;
    }
    const tmp11 = <closure_10 collectiblesItemData={tmp4} size={size} />;
    cResult[2] = tmp4;
    cResult[3] = size;
    cResult[4] = tmp11;
    tmp8 = tmp11;
  }
  return tmp7;
}) : ((sku) => {
  sku = sku.sku;
  let DEFAULT_ITEM_SIZE = sku.size;
  if (DEFAULT_ITEM_SIZE === undefined) {
    DEFAULT_ITEM_SIZE = sku(8427).DEFAULT_ITEM_SIZE;
  }
  const items = [sku];
  const memo = react.useMemo(() => closure_5(sku), items);
  let tmp4 = null;
  if (null != memo) {
    tmp4 = <closure_10 collectiblesItemData={memo} size={DEFAULT_ITEM_SIZE} />;
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let size2;
  let sku;
  const obj = react2;
  const cResult = obj.c(5);
  ({ sku, size } = arg0);
  if (undefined === size) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  if (cResult[0] !== size) {
    let tmp4 = size;
    if (typeof size === "number") {
      const size1 = { width: size, height: size };
      tmp4 = size1;
    }
    cResult[0] = size;
    cResult[1] = tmp4;
    size2 = tmp4;
  } else {
    size2 = cResult[1];
  }
  const tmp5 = closure_8(size2.width, size2.height);
  if (cResult[2] === sku) {
    let tmp6;
    if (cResult[3] === tmp5.socialLayerStorefrontContainer) {
      tmp6 = cResult[4];
    }
    return tmp6;
  }
  const tmp7 = jsx(SlayerStorefrontItemCardDefault, { sku, containerStyle: tmp5.socialLayerStorefrontContainer });
  cResult[2] = sku;
  cResult[3] = tmp5.socialLayerStorefrontContainer;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : ((size) => {
  let DEFAULT_ITEM_SIZE = size.size;
  const sku = size.sku;
  if (DEFAULT_ITEM_SIZE === undefined) {
    DEFAULT_ITEM_SIZE = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  size = DEFAULT_ITEM_SIZE;
  if (typeof DEFAULT_ITEM_SIZE === "number") {
    const size1 = { width: DEFAULT_ITEM_SIZE, height: DEFAULT_ITEM_SIZE };
    size = size1;
  }
  return jsx(SlayerStorefrontItemCardDefault, { sku, containerStyle: closure_8(size.width, size.height).socialLayerStorefrontContainer });
});
let closure_12 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((size) => {
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  let DEFAULT_ITEM_SIZE = size.size;
  if (undefined === DEFAULT_ITEM_SIZE) {
    DEFAULT_ITEM_SIZE = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  if (cResult[0] !== DEFAULT_ITEM_SIZE) {
    let tmp4 = DEFAULT_ITEM_SIZE;
    if (typeof DEFAULT_ITEM_SIZE === "number") {
      const size1 = { width: DEFAULT_ITEM_SIZE, height: DEFAULT_ITEM_SIZE };
      tmp4 = size1;
    }
    cResult[0] = DEFAULT_ITEM_SIZE;
    cResult[1] = tmp4;
    size = tmp4;
  } else {
    size = cResult[1];
  }
  const tmp5 = closure_8(size.width, size.height);
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.TEXT_DEFAULT);
  if (cResult[2] !== token) {
    const obj3 = { logoColor: token };
    const tmp9 = jsx(ThemeAwareNitroWishlistingWumpusRive.ThemeAwareNitroWishlistingWumpusRive, { dataBinding: obj3 });
    cResult[2] = token;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5.premiumRiveContainer) {
    let tmp10;
    if (cResult[5] === tmp7) {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const tmp11 = <View style={tmp5.premiumRiveContainer}>{tmp7}</View>;
  cResult[4] = tmp5.premiumRiveContainer;
  cResult[5] = tmp7;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : ((size) => {
  let DEFAULT_ITEM_SIZE = size.size;
  if (DEFAULT_ITEM_SIZE === undefined) {
    DEFAULT_ITEM_SIZE = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  size = DEFAULT_ITEM_SIZE;
  if (typeof DEFAULT_ITEM_SIZE === "number") {
    const size1 = { width: DEFAULT_ITEM_SIZE, height: DEFAULT_ITEM_SIZE };
    size = size1;
  }
  const tmp3 = closure_8(size.width, size.height);
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.TEXT_DEFAULT);
  return <View style={tmp3.premiumRiveContainer}>{null}</View>;
});
let closure_13 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let sku;
  const obj = react2;
  const cResult = obj.c(8);
  ({ sku, size } = arg0);
  if (undefined === size) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    if (cResult[0] === size) {
      let tmp15;
      if (cResult[1] === sku) {
        tmp15 = cResult[2];
      }
      return tmp15;
    }
    const tmp18 = <closure_11 sku={sku} size={size} />;
    cResult[0] = size;
    cResult[1] = sku;
    cResult[2] = tmp18;
    tmp15 = tmp18;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    if (cResult[3] === size) {
      let tmp11;
      if (cResult[4] === sku) {
        tmp11 = cResult[5];
      }
      return tmp11;
    }
    const tmp14 = <closure_12 sku={sku} size={size} />;
    cResult[3] = size;
    cResult[4] = sku;
    cResult[5] = tmp14;
    tmp11 = tmp14;
  } else if (SKUProductLines.PREMIUM === productLine) {
    let tmp7;
    if (cResult[6] !== size) {
      const tmp10 = <closure_13 size={size} />;
      cResult[6] = size;
      cResult[7] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[7];
    }
    return tmp7;
  } else {
    if (SKUProductLines.APPLICATION !== productLine) {
      if (SKUProductLines.BOOST !== productLine) {
        if (SKUProductLines.GUILD_ROLE !== productLine) {
          if (SKUProductLines.GUILD_PRODUCT !== productLine) {
            const tmpResult = GlobalUtils;
            tmpResult.assertNever(sku.productLine);
          }
        }
      }
    }
    return null;
  }
}) : ((arg0) => {
  let sku;
  ({ sku, size } = arg0);
  if (size === undefined) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    return <closure_11 sku={sku} size={size} />;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    return <closure_12 sku={sku} size={size} />;
  } else if (SKUProductLines.PREMIUM === productLine) {
    return <closure_13 size={size} />;
  } else {
    if (SKUProductLines.APPLICATION !== productLine) {
      if (SKUProductLines.BOOST !== productLine) {
        if (SKUProductLines.GUILD_ROLE !== productLine) {
          if (SKUProductLines.GUILD_PRODUCT !== productLine) {
            const obj = GlobalUtils;
            obj.assertNever(sku.productLine);
          }
        }
      }
    }
    return null;
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/skus/native/SKUPreview.tsx");

export default tmp5;
export const CollectiblesPreview = tmp2;
export const SocialLayerStorefrontSKUPreview = tmp3;
export const PremiumSKUPreview = tmp4;