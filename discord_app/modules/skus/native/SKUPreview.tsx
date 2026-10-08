// === Module 8945: SKUPreview ===

// Module 8945 (SKUPreview)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GlobalUtils from "GlobalUtils" /* 1387 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1992 */;
import useToken from "useToken" /* 4778 */;
import ThemeAwareNitroWishlistingWumpusRive from "ThemeAwareNitroWishlistingWumpusRive" /* 4892 */;
import useShopProductItems from "useShopProductItems" /* 8271 */;
import WishlistItemCardBase from "WishlistItemCardBase" /* 8946 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8970 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 8972 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8983 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8995 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 8997 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8998 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(7256).transformSKUToCollectiblesItem;
const SKUProductLines = fn(1085).SKUProductLines;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles((width, height) => {
  const obj = { container: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, scaler: null, bundleContainer: null, socialLayerStorefrontContainer: null, profileFrameContainer: null, premiumRiveContainer: null };
  size = { width: WishlistItemCardBase.DEFAULT_ITEM_SIZE, height: WishlistItemCardBase.DEFAULT_ITEM_SIZE, justifyContent: "center", alignItems: "center", transform: null };
  const items = [{ scaleX: width / WishlistItemCardBase.DEFAULT_ITEM_SIZE }, ];
  const obj2 = { scaleX: width / WishlistItemCardBase.DEFAULT_ITEM_SIZE };
  items[1] = { scaleY: height / WishlistItemCardBase.DEFAULT_ITEM_SIZE };
  size.transform = items;
  obj.scaler = size;
  obj.bundleContainer = { paddingTop: 20 };
  obj.socialLayerStorefrontContainer = { width, height };
  const obj3 = { scaleY: height / WishlistItemCardBase.DEFAULT_ITEM_SIZE };
  obj.profileFrameContainer = { padding: nativeDefault.space.PX_8 };
  obj.premiumRiveContainer = { width, height };
  return obj;
});
let size = { width: fn(8946).DEFAULT_ITEM_SIZE, height: fn(8946).DEFAULT_ITEM_SIZE };
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesPreview(arg0) {
  const cResult = c.c(53);
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
    let size2 = tmp4;
  } else {
    size2 = cResult[1];
  }
  const tmp5 = closure_8(size2.width, size2.height);
  if ("bundle" === collectiblesItemData.type) {
    if (cResult[2] !== collectiblesItemData.items) {
      const itemsSortingHat = new useShopProductItems.ItemsSortingHat(collectiblesItemData.items);
      cResult[2] = collectiblesItemData.items;
      cResult[3] = itemsSortingHat;
      let tmp57 = itemsSortingHat;
    } else {
      tmp57 = cResult[3];
    }
    if (cResult[4] === tmp5.bundleContainer) {
      if (cResult[5] === tmp5.scaler) {
        let tmp62 = cResult[6];
      }
      if (cResult[7] === collectiblesItemData.previewAssets) {
        if (cResult[8] === tmp57.firstAvatarDecoration) {
          if (cResult[9] === tmp57.firstNameplate) {
            if (cResult[10] === tmp57.firstProfileEffect) {
              let tmp63 = cResult[11];
            }
            if (cResult[12] === tmp62) {
              if (cResult[13] === tmp63) {
                let tmp68 = cResult[14];
              }
              if (cResult[15] === tmp5.container) {
                if (cResult[16] === tmp68) {
                  let tmp72 = cResult[17];
                }
                return tmp72;
              }
              const obj2 = { style: tmp5.container, children: tmp68 };
              const tmp75 = <View style={tmp5.container}>{tmp68}</View>;
              cResult[15] = tmp5.container;
              cResult[16] = tmp68;
              cResult[17] = tmp75;
              tmp72 = tmp75;
            }
            const obj3 = { style: tmp62, children: tmp63 };
            const tmp71 = <View style={tmp62}>{tmp63}</View>;
            cResult[12] = tmp62;
            cResult[13] = tmp63;
            cResult[14] = tmp71;
            tmp68 = tmp71;
          }
        }
      }
      const obj4 = { deco: null, pfx: null, nameplate: null, size: "small", previewAssets: null, disableStaticBackground: true, targetSize: null };
      ({ firstAvatarDecoration: obj14.deco, firstProfileEffect: obj14.pfx, firstNameplate: obj14.nameplate } = tmp57);
      obj4.previewAssets = collectiblesItemData.previewAssets;
      obj4.targetSize = size;
      const tmp67 = jsx(BundleSampleV2Default, { deco: null, pfx: null, nameplate: null, size: "small", previewAssets: null, disableStaticBackground: true, targetSize: null });
      cResult[7] = collectiblesItemData.previewAssets;
      cResult[8] = tmp57.firstAvatarDecoration;
      cResult[9] = tmp57.firstNameplate;
      cResult[10] = tmp57.firstProfileEffect;
      cResult[11] = tmp67;
      tmp63 = tmp67;
    }
    const items = [, ];
    ({ scaler: arr2[0], bundleContainer: arr2[1] } = tmp5);
    cResult[4] = tmp5.bundleContainer;
    cResult[5] = tmp5.scaler;
    cResult[6] = items;
    tmp62 = items;
  } else {
    const type = collectiblesItemData.item.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      if (cResult[18] !== collectiblesItemData.item) {
        const obj5 = { item: collectiblesItemData.item, size: 100 };
        const tmp48 = jsx(AvatarDecorationSampleV2Default, { item: collectiblesItemData.item, size: 100 });
        cResult[18] = collectiblesItemData.item;
        cResult[19] = tmp48;
        let tmp45 = tmp48;
      } else {
        tmp45 = cResult[19];
      }
      if (cResult[20] === tmp5.scaler) {
        if (cResult[21] === tmp45) {
          let tmp49 = cResult[22];
        }
        if (cResult[23] === tmp5.container) {
          if (cResult[24] === tmp49) {
            let tmp53 = cResult[25];
          }
          return tmp53;
        }
        const obj6 = { style: tmp5.container, children: tmp49 };
        const tmp56 = <View style={tmp5.container}>{tmp49}</View>;
        cResult[23] = tmp5.container;
        cResult[24] = tmp49;
        cResult[25] = tmp56;
        tmp53 = tmp56;
      }
      const obj7 = { style: tmp5.scaler, children: tmp45 };
      const tmp52 = <View style={tmp5.scaler}>{tmp45}</View>;
      cResult[20] = tmp5.scaler;
      cResult[21] = tmp45;
      cResult[22] = tmp52;
      tmp49 = tmp52;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      if (cResult[26] !== collectiblesItemData.item) {
        const obj8 = { item: collectiblesItemData.item, hideBackground: true };
        const tmp36 = jsx(ProfileEffectSampleV2Default, { item: collectiblesItemData.item, hideBackground: true });
        cResult[26] = collectiblesItemData.item;
        cResult[27] = tmp36;
        let tmp33 = tmp36;
      } else {
        tmp33 = cResult[27];
      }
      if (cResult[28] === tmp5.scaler) {
        if (cResult[29] === tmp33) {
          let tmp37 = cResult[30];
        }
        if (cResult[31] === tmp5.container) {
          if (cResult[32] === tmp37) {
            let tmp41 = cResult[33];
          }
          return tmp41;
        }
        const obj9 = { style: tmp5.container, children: tmp37 };
        const tmp44 = <View style={tmp5.container}>{tmp37}</View>;
        cResult[31] = tmp5.container;
        cResult[32] = tmp37;
        cResult[33] = tmp44;
        tmp41 = tmp44;
      }
      const obj10 = { style: tmp5.scaler, children: tmp33 };
      const tmp40 = <View style={tmp5.scaler}>{tmp33}</View>;
      cResult[28] = tmp5.scaler;
      cResult[29] = tmp33;
      cResult[30] = tmp40;
      tmp37 = tmp40;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      if (cResult[34] === tmp5.profileFrameContainer) {
        if (cResult[35] === tmp5.scaler) {
          let tmp19 = cResult[36];
        }
        if (cResult[37] !== collectiblesItemData.item) {
          const obj11 = { profileFrame: collectiblesItemData.item, previewWidth: WishlistItemCardBase.DEFAULT_ITEM_SIZE - nativeDefault.space.PX_48, previewHeight: WishlistItemCardBase.DEFAULT_ITEM_SIZE };
          const tmp24 = jsx(ProfileFrameSamplePreviewDefault, { profileFrame: collectiblesItemData.item, previewWidth: WishlistItemCardBase.DEFAULT_ITEM_SIZE - nativeDefault.space.PX_48, previewHeight: WishlistItemCardBase.DEFAULT_ITEM_SIZE });
          cResult[37] = collectiblesItemData.item;
          cResult[38] = tmp24;
          let tmp20 = tmp24;
        } else {
          tmp20 = cResult[38];
        }
        if (cResult[39] === tmp19) {
          if (cResult[40] === tmp20) {
            let tmp25 = cResult[41];
          }
          if (cResult[42] === tmp5.container) {
            if (cResult[43] === tmp25) {
              let tmp29 = cResult[44];
            }
            return tmp29;
          }
          const obj12 = { style: tmp5.container, children: tmp25 };
          const tmp32 = <View style={tmp5.container}>{tmp25}</View>;
          cResult[42] = tmp5.container;
          cResult[43] = tmp25;
          cResult[44] = tmp32;
          tmp29 = tmp32;
        }
        const obj13 = { style: tmp19, children: tmp20 };
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
      if (cResult[45] !== collectiblesItemData.item) {
        const obj15 = { item: collectiblesItemData.item };
        const tmp10 = jsx(NameplateCardPreviewDefault, { item: collectiblesItemData.item });
        cResult[45] = collectiblesItemData.item;
        cResult[46] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[46];
      }
      if (cResult[47] === tmp5.scaler) {
        if (cResult[48] === tmp7) {
          let tmp11 = cResult[49];
        }
        if (cResult[50] === tmp5.container) {
          if (cResult[51] === tmp11) {
            let tmp15 = cResult[52];
          }
          return tmp15;
        }
        const obj16 = { style: tmp5.container, children: tmp11 };
        const tmp18 = <View style={tmp5.container}>{tmp11}</View>;
        cResult[50] = tmp5.container;
        cResult[51] = tmp11;
        cResult[52] = tmp18;
        tmp15 = tmp18;
      }
      const obj17 = { style: tmp5.scaler, children: tmp7 };
      const tmp14 = <View style={tmp5.scaler}>{tmp7}</View>;
      cResult[47] = tmp5.scaler;
      cResult[48] = tmp7;
      cResult[49] = tmp14;
      tmp11 = tmp14;
    } else {
      return null;
    }
  }
}) : (function CollectiblesPreview(arg0) {
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
    const itemsSortingHat = new useShopProductItems.ItemsSortingHat(collectiblesItemData.items);
    const obj2 = { style: tmp3.container, children: null };
    const obj3 = { style: null, children: null };
    const items = [, ];
    ({ scaler: arr2[0], bundleContainer: arr2[1] } = tmp3);
    obj3.style = items;
    const obj4 = { deco: null, pfx: null, nameplate: null, size: "small", previewAssets: null, disableStaticBackground: true, targetSize: null };
    ({ firstAvatarDecoration: obj15.deco, firstProfileEffect: obj15.pfx, firstNameplate: obj15.nameplate } = itemsSortingHat);
    obj4.previewAssets = collectiblesItemData.previewAssets;
    obj4.targetSize = size;
    obj3.children = jsx(BundleSampleV2Default, { deco: null, pfx: null, nameplate: null, size: "small", previewAssets: null, disableStaticBackground: true, targetSize: null });
    obj2.children = <View style={null}>{null}</View>;
    return <View style={tmp3.container}>{null}</View>;
  } else {
    const type = collectiblesItemData.item.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj5 = { style: tmp3.container, children: null };
      const obj6 = { style: tmp3.scaler, children: null };
      const obj7 = { item: collectiblesItemData.item, size: 100 };
      obj6.children = jsx(AvatarDecorationSampleV2Default, { item: collectiblesItemData.item, size: 100 });
      obj5.children = <View style={tmp3.scaler}>{null}</View>;
      return <View style={tmp3.container}>{null}</View>;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj8 = { style: tmp3.container, children: null };
      const obj9 = { style: tmp3.scaler, children: null };
      const obj10 = { item: collectiblesItemData.item, hideBackground: true };
      obj9.children = jsx(ProfileEffectSampleV2Default, { item: collectiblesItemData.item, hideBackground: true });
      obj8.children = <View style={tmp3.scaler}>{null}</View>;
      return <View style={tmp3.container}>{null}</View>;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      const obj11 = { style: tmp3.container, children: null };
      const obj12 = { style: null, children: null };
      const items1 = [, ];
      ({ scaler: arr[0], profileFrameContainer: arr[1] } = tmp3);
      obj12.style = items1;
      const obj13 = { profileFrame: collectiblesItemData.item, previewWidth: WishlistItemCardBase.DEFAULT_ITEM_SIZE - nativeDefault.space.PX_48, previewHeight: WishlistItemCardBase.DEFAULT_ITEM_SIZE };
      obj12.children = jsx(ProfileFrameSamplePreviewDefault, { profileFrame: collectiblesItemData.item, previewWidth: WishlistItemCardBase.DEFAULT_ITEM_SIZE - nativeDefault.space.PX_48, previewHeight: WishlistItemCardBase.DEFAULT_ITEM_SIZE });
      obj11.children = <View style={null}>{null}</View>;
      return <View style={tmp3.container}>{null}</View>;
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const obj = { style: tmp3.container, children: null };
      const obj14 = { style: tmp3.scaler, children: null };
      const obj16 = { item: collectiblesItemData.item };
      obj14.children = jsx(NameplateCardPreviewDefault, { item: collectiblesItemData.item });
      obj.children = <View style={tmp3.scaler}>{null}</View>;
      return <View style={tmp3.container}>{null}</View>;
    } else {
      return null;
    }
  }
});
let closure_10 = tmp2;
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesSKUPreview(arg0) {
  const cResult = c.c(5);
  ({ sku, size } = arg0);
  if (undefined === size) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  if (cResult[0] !== sku) {
    const tmp6 = closure_5(sku);
    cResult[0] = sku;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (null == tmp4) {
    return null;
  } else {
    if (cResult[2] === tmp4) {
    }
    const obj2 = { collectiblesItemData: tmp4, size };
    const tmp10 = <closure_10 collectiblesItemData={tmp4} size={size} />;
    cResult[2] = tmp4;
    cResult[3] = size;
    cResult[4] = tmp10;
  }
}) : (function CollectiblesSKUPreview(sku) {
  sku = sku.sku;
  let DEFAULT_ITEM_SIZE = sku.size;
  if (DEFAULT_ITEM_SIZE === undefined) {
    DEFAULT_ITEM_SIZE = sku(8946).DEFAULT_ITEM_SIZE;
  }
  const items = [sku];
  const memo = noop.useMemo(() => closure_5(sku), items);
  let tmp4 = null;
  if (null != memo) {
    const obj = { collectiblesItemData: memo, size: DEFAULT_ITEM_SIZE };
    tmp4 = <closure_10 collectiblesItemData={memo} size={DEFAULT_ITEM_SIZE} />;
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SocialLayerStorefrontSKUPreview(arg0) {
  const cResult = c.c(5);
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
    let size2 = tmp4;
  } else {
    size2 = cResult[1];
  }
  const tmp5 = closure_8(size2.width, size2.height);
  if (cResult[2] === sku) {
    if (cResult[3] === tmp5.socialLayerStorefrontContainer) {
      let tmp6 = cResult[4];
    }
    return tmp6;
  }
  const tmp7 = jsx(SlayerStorefrontItemCardDefault, { sku, containerStyle: tmp5.socialLayerStorefrontContainer });
  cResult[2] = sku;
  cResult[3] = tmp5.socialLayerStorefrontContainer;
  cResult[4] = tmp7;
  tmp6 = tmp7;
  const obj2 = { sku, containerStyle: tmp5.socialLayerStorefrontContainer };
}) : (function SocialLayerStorefrontSKUPreview(size) {
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
  return jsx(SlayerStorefrontItemCardDefault, { sku: size.sku, containerStyle: closure_8(size.width, size.height).socialLayerStorefrontContainer });
});
let closure_12 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumSKUPreview(size) {
  const cResult = c.c(7);
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
  const token = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT);
  if (cResult[2] !== token) {
    const obj2 = { dataBinding: null };
    const obj3 = { logoColor: token };
    obj2.dataBinding = obj3;
    const tmp9 = jsx(ThemeAwareNitroWishlistingWumpusRive.ThemeAwareNitroWishlistingWumpusRive, { dataBinding: null });
    cResult[2] = token;
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5.premiumRiveContainer) {
    if (cResult[5] === tmp7) {
      let tmp10 = cResult[6];
    }
    return tmp10;
  }
  const tmp11 = <View style={tmp5.premiumRiveContainer}>{tmp7}</View>;
  cResult[4] = tmp5.premiumRiveContainer;
  cResult[5] = tmp7;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  const obj4 = { style: tmp5.premiumRiveContainer, children: tmp7 };
  const tmpResult = useToken;
}) : (function PremiumSKUPreview(size) {
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
  const obj2 = { style: tmp3.premiumRiveContainer, children: null };
  const token = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT);
  obj2.children = jsx(ThemeAwareNitroWishlistingWumpusRive.ThemeAwareNitroWishlistingWumpusRive, { dataBinding: { logoColor: token } });
  return <View style={tmp3.premiumRiveContainer}>{null}</View>;
});
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/skus/native/SKUPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SKUPreview(arg0) {
  const cResult = c.c(8);
  ({ sku, size } = arg0);
  if (undefined === size) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    if (cResult[0] === size) {
      if (cResult[1] === sku) {
        let tmp15 = cResult[2];
      }
      return tmp15;
    }
    const obj2 = { sku, size };
    const tmp18 = <closure_11 sku={sku} size={size} />;
    cResult[0] = size;
    cResult[1] = sku;
    cResult[2] = tmp18;
    tmp15 = tmp18;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    if (cResult[3] === size) {
      if (cResult[4] === sku) {
        let tmp11 = cResult[5];
      }
      return tmp11;
    }
    const obj3 = { sku, size };
    const tmp14 = <closure_12 sku={sku} size={size} />;
    cResult[3] = size;
    cResult[4] = sku;
    cResult[5] = tmp14;
    tmp11 = tmp14;
  } else if (SKUProductLines.PREMIUM === productLine) {
    if (cResult[6] !== size) {
      const obj4 = { size };
      const tmp10 = <closure_13 size={size} />;
      cResult[6] = size;
      cResult[7] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[7];
    }
    return tmp7;
  } else {
    if (SKUProductLines.APPLICATION !== productLine) {
      if (SKUProductLines.BOOST !== productLine) {
        if (SKUProductLines.GUILD_ROLE !== productLine) {
          if (SKUProductLines.GUILD_PRODUCT !== productLine) {
            GlobalUtils.assertNever(sku.productLine);
            const tmpResult = GlobalUtils;
          }
        }
      }
    }
    return null;
  }
}) : (function SKUPreview(arg0) {
  ({ sku, size } = arg0);
  if (size === undefined) {
    size = WishlistItemCardBase.DEFAULT_ITEM_SIZE;
  }
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    const obj2 = { sku, size };
    return <closure_11 sku={sku} size={size} />;
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    const obj3 = { sku, size };
    return <closure_12 sku={sku} size={size} />;
  } else if (SKUProductLines.PREMIUM === productLine) {
    const obj4 = { size };
    return <closure_13 size={size} />;
  } else {
    if (SKUProductLines.APPLICATION !== productLine) {
      if (SKUProductLines.BOOST !== productLine) {
        if (SKUProductLines.GUILD_ROLE !== productLine) {
          if (SKUProductLines.GUILD_PRODUCT !== productLine) {
            GlobalUtils.assertNever(sku.productLine);
          }
        }
      }
    }
    return null;
  }
});
export const CollectiblesPreview = tmp2;
export const SocialLayerStorefrontSKUPreview = tmp3;
export const PremiumSKUPreview = tmp4;