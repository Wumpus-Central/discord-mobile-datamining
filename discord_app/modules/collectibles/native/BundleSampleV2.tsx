// === Module 8797: BundleSampleV2 ===

// Module 8797 (BundleSampleV2)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import utils from "utils" /* 1886 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import FastImageDefault from "FastImage" /* 5587 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 8799 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8810 */;
import NameplateDummyUserPreview from "NameplateDummyUserPreview" /* 8817 */;
import noop from "module_19" /* 19 */;

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
        const bound = Math.min(React3.get(), 2);
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
    let obj = { source: null, style: null, resizeMode: "cover", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    obj = { uri: combined };
    obj.source = obj;
    obj.style = closure_9.bgImage;
    tmp = timestampProducer(FastImageDefault, obj);
  }
  obj = { style: closure_9.container, children: null };
  let tmp21Result = !disableBackground;
  if (!disableBackground) {
    tmp21Result = null != tmp;
  }
  if (tmp21Result) {
    const obj1 = { style: tmp19.bgBleedClip, pointerEvents: "none", children: null };
    tmp21Result = tmp;
    if (mutedBackground.mutedBackground) {
      const obj2 = { style: tmp19.bgMutedWrap, pointerEvents: "none", children: tmp };
      tmp21Result = tmp21(tmp18, obj2);
    }
    obj1.children = tmp21Result;
    tmp21Result = tmp21(tmp18, obj1);
  }
  const items = [tmp21Result, ];
  let tmp24Result = null != fgStatic;
  if (tmp24Result) {
    const obj3 = { style: tmp19.fgClip, pointerEvents: "none", children: null };
    let combined1 = fgStatic;
    if (null != targetSize) {
      combined1 = fgStatic;
      if (fgStatic.startsWith("https://cdn.discordapp.com")) {
        const _Math4 = Math;
        const bound1 = Math.min(React3.get(), 2);
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
    const obj5 = { uri: combined1 };
    obj4.source = obj5;
    obj4.style = tmp19.fgImage;
    obj3.children = timestampProducer(FastImageDefault, obj4);
    tmp24Result = tmp24(tmp18, obj3);
  }
  items[1] = tmp24Result;
  obj.children = items;
  return React5(React4, obj);
}
function BundleSampleV2Composed(arg0) {
  ({ deco, pfx, nameplate, size } = arg0);
  if (size === undefined) {
    size = "small";
  }
  const tmp = closure_10(size);
  let nameplateData;
  if (null != nameplate) {
    _modDef38(nameplate.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
    let obj = utils;
    nameplateData = obj.getNameplateData(nameplate);
  }
  obj = { style: tmp.bundle, children: null };
  let tmp12 = null != pfx;
  if (tmp12) {
    obj = { style: tmp.pfx, children: null };
    const obj1 = { item: pfx };
    obj.children = timestampProducer(ProfileEffectSampleV2Default, obj1);
    tmp12 = timestampProducer(tmp11, obj);
  }
  const items = [tmp12, , ];
  if (null == deco) {
    items[1] = tmp16;
    if (null == nameplateData) {
      items[2] = null;
      obj.children = items;
      return React5(tmp11, obj);
    } else {
      const obj2 = { style: tmp.nameplate, children: null };
      let AvatarSizes = dependencyMap;
      let obj3 = { width: tmp8.nameplatePreviewWidth, avatarSize: null, nameplate: null };
      if ("large" === size) {
        AvatarSizes = tmp23(1178).AvatarSizes;
        let XSMALL_20 = AvatarSizes.NORMAL;
      } else {
        XSMALL_20 = tmp23(1178).AvatarSizes.XSMALL_20;
      }
      obj3.avatarSize = XSMALL_20;
      obj3.nameplate = nameplateData;
      obj3 = tmp22(NameplateDummyUserPreview.NameplateDummyUserPreview, obj3);
      obj2.children = obj3;
      timestampProducer(tmp11, obj2);
    }
  } else {
    const obj4 = { style: null, children: null };
    const items1 = [null != nameplateData ? tmp.avatarWithNameplate : tmp.avatar];
    obj4.style = items1;
    const obj5 = { item: deco, size: tmp9, threeTierBundle: null != nameplateData };
    obj4.children = timestampProducer(AvatarDecorationSampleV2Default, obj5);
    timestampProducer(tmp11, obj4);
  }
}
get_ActivityIndicator = fn(17);
({ PixelRatio: c3, StyleSheet, View: closure_4 } = get_ActivityIndicator);
const BUNDLE_PREVIEW_CONFIG = fn(8798).BUNDLE_PREVIEW_CONFIG;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: null, bgBleedClip: null, bgMutedWrap: null, bgImage: null, fgClip: null, fgImage: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.overflow = "hidden";
obj.container = obj;
obj = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.overflow = "hidden";
obj.justifyContent = "center";
obj.alignItems = "center";
obj.bgBleedClip = obj;
let obj1 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj1.opacity = 0.8;
obj.bgMutedWrap = obj1;
obj.bgImage = { width: "100%", height: "100%" };
let obj2 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj2.overflow = "hidden";
obj2.justifyContent = "center";
obj2.alignItems = "center";
obj.fgClip = obj2;
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj.fgImage = {};
const styles = StyleSheet.create(obj);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles((arg0) => {
  let obj = { bundle: null, pfx: null, avatar: null, avatarWithNameplate: null, nameplate: null };
  const size = { width: tmp.bundleWidth, height: tmp.bundleHeight, borderRadius: nativeDefault.radii.xs };
  obj.bundle = size;
  const size1 = { position: "absolute", top: tmp.pfxTop, left: tmp.pfxLeft, width: tmp.pfxWidth, height: tmp.pfxHeight, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, transform: null, zIndex: 0, overflow: "hidden", borderRadius: nativeDefault.radii.xs };
  const items = [{ rotate: "-8deg" }];
  size1.transform = items;
  obj.pfx = size1;
  const rect = { position: "absolute", top: tmp.avatarTop, right: tmp.avatarRight, transform: null, zIndex: 1, alignItems: "center", justifyContent: "center" };
  const items1 = [{ rotate: "8deg" }];
  rect.transform = items1;
  obj.avatar = rect;
  const rect1 = { position: "absolute", top: tmp.avatarWithNameplateTop, right: tmp.avatarWithNameplateRight, transform: null, zIndex: 1, alignItems: "center", justifyContent: "center", shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 4 };
  const items2 = [{ rotate: "8deg" }];
  rect1.transform = items2;
  obj.avatarWithNameplate = rect1;
  obj = { position: "absolute", bottom: tmp.nameplateBottom, marginHorizontal: 10, width: "90%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, zIndex: 2, borderRadius: nativeDefault.radii.sm, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 4 };
  obj.nameplate = obj;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/BundleSampleV2.tsx");

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
    let obj = { previewAssets, disableBackground: disableStaticBackground, mutedBackground: flag, targetSize: size.targetSize };
    let tmp4 = timestampProducer(BundleStaticPreviewContent, obj);
  } else {
    obj = { deco, pfx, nameplate, size: str };
    tmp4 = timestampProducer(BundleSampleV2Composed, obj);
  }
  return tmp4;
};