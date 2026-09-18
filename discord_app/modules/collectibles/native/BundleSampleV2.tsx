// === Module 9038: BundleSampleV2 ===

// Module 9038 (BundleSampleV2)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import utils from "utils" /* 1887 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1890 */;
import FastImageDefault from "FastImage" /* 5757 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 9040 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9051 */;
import NameplateDummyUserPreview from "NameplateDummyUserPreview" /* 9058 */;
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
    const obj = { source: null, style: null, resizeMode: "cover", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const obj2 = { uri: combined };
    obj.source = obj2;
    obj.style = closure_9.bgImage;
    tmp = timestampProducer(FastImageDefault, obj);
  }
  const obj3 = { style: closure_9.container, children: null };
  let tmp21Result2 = !disableBackground;
  if (!disableBackground) {
    tmp21Result2 = null != tmp;
  }
  if (tmp21Result2) {
    const obj4 = { style: closure_9.bgBleedClip, pointerEvents: "none", children: null };
    let tmp21Result = tmp;
    if (mutedBackground.mutedBackground) {
      const obj5 = { style: closure_9.bgMutedWrap, pointerEvents: "none", children: tmp };
      tmp21Result = timestampProducer(React4, obj5);
    }
    obj4.children = tmp21Result;
    tmp21Result2 = timestampProducer(React4, obj4);
  }
  const items = [tmp21Result2, ];
  let tmp24Result = null != fgStatic;
  if (tmp24Result) {
    const obj6 = { style: closure_9.fgClip, pointerEvents: "none", children: null };
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
    const obj7 = { source: null, style: null, resizeMode: "cover", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const obj8 = { uri: combined1 };
    obj7.source = obj8;
    obj7.style = closure_9.fgImage;
    obj6.children = timestampProducer(FastImageDefault, obj7);
    tmp24Result = timestampProducer(React4, obj6);
  }
  items[1] = tmp24Result;
  obj3.children = items;
  return React5(React4, obj3);
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
    nameplateData = utils.getNameplateData(nameplate);
  }
  const obj2 = { style: tmp.bundle, children: null };
  let tmp12 = null != pfx;
  if (tmp12) {
    const obj3 = { style: tmp.pfx, children: null };
    const obj4 = { item: pfx };
    obj3.children = timestampProducer(ProfileEffectSampleV2Default, obj4);
    tmp12 = timestampProducer(React4, obj3);
  }
  const items = [tmp12, , ];
  if (null == deco) {
    items[1] = tmp16;
    if (null == nameplateData) {
      items[2] = null;
      obj2.children = items;
      return React5(React4, obj2);
    } else {
      const obj5 = { style: tmp.nameplate, children: null };
      let AvatarSizes = dependencyMap;
      let obj6 = { width: tmp8.nameplatePreviewWidth, avatarSize: null, nameplate: null };
      if ("large" === size) {
        AvatarSizes = native.AvatarSizes;
        let XSMALL_20 = AvatarSizes.NORMAL;
      } else {
        XSMALL_20 = native.AvatarSizes.XSMALL_20;
      }
      obj6.avatarSize = XSMALL_20;
      obj6.nameplate = nameplateData;
      obj6 = timestampProducer(NameplateDummyUserPreview.NameplateDummyUserPreview, obj6);
      obj5.children = obj6;
      timestampProducer(React4, obj5);
    }
  } else {
    const obj7 = { style: null, children: null };
    const items1 = [null != nameplateData ? tmp.avatarWithNameplate : tmp.avatar];
    obj7.style = items1;
    const obj8 = { item: deco, size: tmp9, threeTierBundle: null != nameplateData };
    obj7.children = timestampProducer(AvatarDecorationSampleV2Default, obj8);
    timestampProducer(React4, obj7);
  }
  tmp9 = null != nameplateData ? BUNDLE_PREVIEW_CONFIG[size].avatarDecorationSizeTriple : BUNDLE_PREVIEW_CONFIG[size].avatarDecorationSize;
}
get_ActivityIndicator = fn(17);
({ PixelRatio: c3, StyleSheet, View: closure_4 } = get_ActivityIndicator);
const BUNDLE_PREVIEW_CONFIG = fn(9039).BUNDLE_PREVIEW_CONFIG;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: null, bgBleedClip: null, bgMutedWrap: null, bgImage: null, fgClip: null, fgImage: null };
let obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.overflow = "hidden";
obj.container = obj2;
let obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj.bgBleedClip = obj3;
let obj4 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj4.opacity = 0.8;
obj.bgMutedWrap = obj4;
obj.bgImage = { width: "100%", height: "100%" };
let obj5 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj5.overflow = "hidden";
obj5.justifyContent = "center";
obj5.alignItems = "center";
obj.fgClip = obj5;
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj.fgImage = {};
const styles = StyleSheet.create(obj);
const createStyles = fn(4722);
let closure_10 = createStyles.createStyles((arg0) => {
  const obj = { bundle: null, pfx: null, avatar: null, avatarWithNameplate: null, nameplate: null };
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
  obj.nameplate = { position: "absolute", bottom: BUNDLE_PREVIEW_CONFIG[arg0].nameplateBottom, marginHorizontal: 10, width: "90%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, zIndex: 2, borderRadius: nativeDefault.radii.sm, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 4 };
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
    const obj2 = { previewAssets, disableBackground: disableStaticBackground, mutedBackground: flag, targetSize: size.targetSize };
    let tmp4 = timestampProducer(BundleStaticPreviewContent, obj2);
  } else {
    const obj = { deco, pfx, nameplate, size: str };
    tmp4 = timestampProducer(BundleSampleV2Composed, obj);
  }
  return tmp4;
};