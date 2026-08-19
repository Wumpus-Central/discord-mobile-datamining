// discord_app/modules/collectibles/native/BundleSampleV2.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import getNameplateData from "../nameplates/utils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import ProfileEffectSampleDefault from "ProfileEffectSampleV2.tsx";
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2.tsx";
import NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG from "../nameplates/native/NameplateDummyUserPreview.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { BUNDLE_PREVIEW_CONFIG } from "CollectiblesPreviewConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function BundleStaticPreviewContent(mutedBackground) {
  ({ previewAssets, disableBackground, targetSize } = mutedBackground);
  ({ bgStatic, fgStatic } = previewAssets);
  let tmp = null;
  if (null != bgStatic) {
    let combined = bgStatic;
    if (null != targetSize) {
      combined = bgStatic;
      if (bgStatic.startsWith("https://cdn.discordapp.com")) {
        const _Math = Math;
        const bound = Math.min(store.get(), 2);
        const _Math2 = Math;
        const rounded = Math.round(targetSize.width * bound);
        const _Math3 = Math;
        const rounded1 = Math.round(targetSize.height * bound);
        let str2 = "?";
        if (bgStatic.includes("?")) {
          str2 = "&";
        }
        const _HermesInternal = HermesInternal;
        combined = "" + bgStatic + str2 + "width=" + rounded + "&height=" + rounded1;
      }
    }
    let obj = { uri: null };
    obj[0] = combined;
    obj[0] = obj;
    obj[1] = closure_9.bgImage;
    tmp = callback(preloadDefault, obj);
  }
  obj = { style: closure_9.container, children: null };
  let tmp21Result = !disableBackground;
  if (!disableBackground) {
    tmp21Result = null != tmp;
  }
  if (tmp21Result) {
    obj1 = { style: null, pointerEvents: "none", children: null };
    obj1[0] = closure_9.bgBleedClip;
    tmp21Result = tmp;
    if (mutedBackground.mutedBackground) {
      const obj2 = { style: null, pointerEvents: "none", children: null };
      obj2[0] = closure_9.bgMutedWrap;
      obj2[2] = tmp;
      tmp21Result = callback(closure_4, obj2);
    }
    obj1[2] = tmp21Result;
    tmp21Result = callback(closure_4, obj1);
  }
  const items = [tmp21Result, ];
  let tmp24Result = null != fgStatic;
  if (tmp24Result) {
    const obj3 = { style: null, pointerEvents: "none", children: null };
    obj3[0] = closure_9.fgClip;
    let combined1 = fgStatic;
    if (null != targetSize) {
      combined1 = fgStatic;
      if (fgStatic.startsWith("https://cdn.discordapp.com")) {
        const _Math4 = Math;
        const bound1 = Math.min(store.get(), 2);
        const _Math5 = Math;
        const rounded2 = Math.round(targetSize.width * bound1);
        const _Math6 = Math;
        const rounded3 = Math.round(targetSize.height * bound1);
        let str7 = "?";
        if (fgStatic.includes("?")) {
          str7 = "&";
        }
        const _HermesInternal2 = HermesInternal;
        combined1 = "" + fgStatic + str7 + "width=" + rounded2 + "&height=" + rounded3;
      }
    }
    const obj4 = { source: null, style: null, resizeMode: "cover", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const obj5 = { uri: null };
    obj5[0] = combined1;
    obj4[0] = obj5;
    obj4[1] = closure_9.fgImage;
    obj3[2] = callback(preloadDefault, obj4);
    tmp24Result = callback(closure_4, obj3);
  }
  items[1] = tmp24Result;
  obj[1] = items;
  return callback2(closure_4, obj);
}
function BundleSampleV2Composed(arg0) {
  ({ deco, pfx, nameplate, size } = arg0);
  if (size === undefined) {
    size = "small";
  }
  const tmp = callback2(size);
  let nameplateData;
  if (null != nameplate) {
    _modDef38(nameplate.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
    let obj = getNameplateData;
    nameplateData = obj.getNameplateData(nameplate);
  }
  obj = { style: tmp.bundle, children: null };
  let tmp12 = null != pfx;
  if (tmp12) {
    obj = { style: null, children: null };
    obj[0] = tmp.pfx;
    obj1 = { item: null };
    obj1[0] = pfx;
    obj[1] = callback(ProfileEffectSampleDefault, obj1);
    tmp12 = callback(closure_4, obj);
  }
  const items = [tmp12, , ];
  if (null == deco) {
    items[1] = tmp16;
    if (null == nameplateData) {
      items[2] = null;
      obj[1] = items;
      return callback2(closure_4, obj);
    } else {
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.nameplate;
      let AvatarSizes = dependencyMap;
      let obj3 = { width: null, avatarSize: null, nameplate: null };
      obj3[0] = tmp8.nameplatePreviewWidth;
      if ("large" === size) {
        AvatarSizes = Button.AvatarSizes;
        let XSMALL_20 = AvatarSizes.NORMAL;
      } else {
        XSMALL_20 = Button.AvatarSizes.XSMALL_20;
      }
      obj3[1] = XSMALL_20;
      obj3[2] = nameplateData;
      obj3 = callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, obj3);
      obj2[1] = obj3;
      callback(closure_4, obj2);
    }
  } else {
    const obj4 = { style: null, children: null };
    const items1 = [null != nameplateData ? tmp.avatarWithNameplate : tmp.avatar];
    obj4[0] = items1;
    const obj5 = { item: null, size: null, threeTierBundle: null };
    obj5[0] = deco;
    obj5[1] = tmp9;
    obj5[2] = null != nameplateData;
    obj4[1] = callback(AvatarDecorationSampleV2Default, obj5);
    callback(closure_4, obj4);
  }
  tmp9 = null != nameplateData ? BUNDLE_PREVIEW_CONFIG[size].avatarDecorationSizeTriple : BUNDLE_PREVIEW_CONFIG[size].avatarDecorationSize;
}
noopAll;
({ PixelRatio: c3, StyleSheet, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.overflow = "hidden";
obj[0] = obj;
obj = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.overflow = "hidden";
obj.justifyContent = "center";
obj.alignItems = "center";
obj[1] = obj;
let obj1 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj1.opacity = 0.8;
obj[2] = obj1;
obj[3] = { width: "100%", height: "100%" };
let obj2 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj2.overflow = "hidden";
obj2.justifyContent = "center";
obj2.alignItems = "center";
obj[4] = obj2;
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj[5] = {};
const styles = StyleSheet.create(obj);
let closure_10 = createCacheKey.createStyles((arg0) => {
  let obj = { width: tmp.bundleWidth, height: tmp.bundleHeight, borderRadius: ThemesDefault.radii.xs };
  obj[0] = obj;
  obj = { position: "absolute", top: tmp.pfxTop, left: tmp.pfxLeft, width: tmp.pfxWidth, height: tmp.pfxHeight, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, transform: items, zIndex: 0, overflow: "hidden", borderRadius: ThemesDefault.radii.xs };
  items = [{ rotate: "-8deg" }];
  obj[1] = obj;
  const items1 = [{ rotate: "8deg" }];
  obj[2] = { position: "absolute", top: BUNDLE_PREVIEW_CONFIG[arg0].avatarTop, right: BUNDLE_PREVIEW_CONFIG[arg0].avatarRight, transform: items1, zIndex: 1, alignItems: "center", justifyContent: "center" };
  const items2 = [{ rotate: "8deg" }];
  obj[3] = { position: "absolute", top: BUNDLE_PREVIEW_CONFIG[arg0].avatarWithNameplateTop, right: BUNDLE_PREVIEW_CONFIG[arg0].avatarWithNameplateRight, transform: items2, zIndex: 1, alignItems: "center", justifyContent: "center", shadowColor: ThemesDefault.colors.BLACK, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 4 };
  obj[4] = { position: "absolute", bottom: BUNDLE_PREVIEW_CONFIG[arg0].nameplateBottom, marginHorizontal: 10, width: "90%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, zIndex: 2, borderRadius: ThemesDefault.radii.sm, shadowColor: ThemesDefault.colors.BLACK, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 4 };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/BundleSampleV2.tsx");

export default function BundleSampleV2(size) {
  let str = size.size;
  ({ deco, pfx, nameplate } = size);
  if (str === undefined) {
    str = "small";
  }
  ({ previewAssets, disableStaticBackground } = size);
  if (disableStaticBackground === undefined) {
    disableStaticBackground = false;
  }
  let flag = size.mutedStaticBackground;
  if (flag === undefined) {
    flag = false;
  }
  let fgStatic;
  if (previewAssets != null) {
    fgStatic = previewAssets.fgStatic;
  }
  if (null != fgStatic) {
    let obj = { previewAssets: null, disableBackground: null, mutedBackground: null, targetSize: null };
    obj[0] = previewAssets;
    obj[1] = disableStaticBackground;
    obj[2] = flag;
    obj[3] = size.targetSize;
    let tmp4 = callback(BundleStaticPreviewContent, obj);
  } else {
    obj = { deco: null, pfx: null, nameplate: null, size: null };
    obj[0] = deco;
    obj[1] = pfx;
    obj[2] = nameplate;
    obj[3] = str;
    tmp4 = callback(BundleSampleV2Composed, obj);
  }
  return tmp4;
};