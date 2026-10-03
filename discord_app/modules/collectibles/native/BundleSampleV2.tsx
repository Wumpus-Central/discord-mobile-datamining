// discord_app/modules/collectibles/native/BundleSampleV2.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import utils from "../nameplates/utils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2.tsx";
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2.tsx";
import NameplateDummyUserPreview from "../nameplates/native/NameplateDummyUserPreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ PixelRatio: c3, StyleSheet, View: closure_4 } = get_ActivityIndicator);
const BUNDLE_PREVIEW_CONFIG = fn(8454).BUNDLE_PREVIEW_CONFIG;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(13);
      ({ previewAssets, disableBackground, mutedBackground, targetSize } = arg0);
      ({ bgStatic, fgStatic } = previewAssets);
      if (cResult[0] === bgStatic) {
        if (cResult[1] === targetSize) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] === tmp3) {
          if (cResult[4] === disableBackground) {
            if (cResult[5] === mutedBackground) {
              let tmp19 = cResult[6];
            }
            if (cResult[7] === fgStatic) {
              if (cResult[8] === targetSize) {
                let tmp26 = cResult[9];
              }
              if (cResult[10] === tmp19) {
                if (cResult[11] === tmp26) {
                  let tmp44 = cResult[12];
                }
                return tmp44;
              }
              const obj2 = { style: closure_9.container, children: null };
              const items = [tmp19, tmp26];
              obj2.children = items;
              const tmp48 = React5(React4, obj2);
              cResult[10] = tmp19;
              cResult[11] = tmp26;
              cResult[12] = tmp48;
              tmp44 = tmp48;
            }
            let tmp29Result = null != fgStatic;
            if (tmp29Result) {
              const obj3 = { style: closure_9.fgClip, pointerEvents: "none", children: null };
              let combined = fgStatic;
              if (null != targetSize) {
                combined = fgStatic;
                if (fgStatic.startsWith("https://cdn.discordapp.com")) {
                  const _Math4 = Math;
                  const bound = Math.min(React3.get(), 2);
                  const _Math5 = Math;
                  const rounded = Math.round(targetSize.width * bound);
                  const _Math6 = Math;
                  const rounded1 = Math.round(targetSize.height * bound);
                  let str7 = "?";
                  if (fgStatic.includes("?")) {
                    str7 = "&";
                  }
                  const _HermesInternal2 = HermesInternal;
                  combined = "" + fgStatic + str7 + "width=" + rounded + "&height=" + rounded1;
                }
              }
              const obj4 = {
                source: null,
                style: null,
                resizeMode: "cover",
                accessibilityElementsHidden: true,
                importantForAccessibility: "no-hide-descendants",
              };
              const obj5 = { uri: combined };
              obj4.source = obj5;
              obj4.style = closure_9.fgImage;
              obj3.children = timestampProducer(FastImageDefault, obj4);
              tmp29Result = timestampProducer(React4, obj3);
            }
            cResult[7] = fgStatic;
            cResult[8] = targetSize;
            cResult[9] = tmp29Result;
            tmp26 = tmp29Result;
          }
        }
        let tmp22Result2 = !disableBackground;
        if (!disableBackground) {
          tmp22Result2 = null != tmp3;
        }
        if (tmp22Result2) {
          const obj6 = { style: closure_9.bgBleedClip, pointerEvents: "none", children: null };
          let tmp22Result = tmp3;
          if (mutedBackground) {
            const obj7 = { style: tmp24.bgMutedWrap, pointerEvents: "none", children: tmp3 };
            tmp22Result = timestampProducer(React4, obj7);
          }
          obj6.children = tmp22Result;
          tmp22Result2 = timestampProducer(React4, obj6);
        }
        cResult[3] = tmp3;
        cResult[4] = disableBackground;
        cResult[5] = mutedBackground;
        cResult[6] = tmp22Result2;
        tmp19 = tmp22Result2;
      }
      let tmp5Result = null;
      if (null != bgStatic) {
        let combined1 = bgStatic;
        if (null != targetSize) {
          combined1 = bgStatic;
          if (bgStatic.startsWith("https://cdn.discordapp.com")) {
            const _Math = Math;
            const bound1 = Math.min(React3.get(), 2);
            const _Math2 = Math;
            const rounded2 = Math.round(targetSize.width * bound1);
            const _Math3 = Math;
            const rounded3 = Math.round(targetSize.height * bound1);
            let str2 = "?";
            if (bgStatic.includes("?")) {
              str2 = "&";
            }
            const _HermesInternal = HermesInternal;
            combined1 = "" + bgStatic + str2 + "width=" + rounded2 + "&height=" + rounded3;
          }
        }
        const obj8 = {
          source: null,
          style: null,
          resizeMode: "cover",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        const obj9 = { uri: combined1 };
        obj8.source = obj9;
        obj8.style = closure_9.bgImage;
        tmp5Result = timestampProducer(FastImageDefault, obj8);
      }
      cResult[0] = bgStatic;
      cResult[1] = targetSize;
      cResult[2] = tmp5Result;
      tmp3 = tmp5Result;
    }
  : (mutedBackground) => {
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
        const obj = {
          source: null,
          style: null,
          resizeMode: "cover",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
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
      const items = [tmp21Result2];
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
        const obj7 = {
          source: null,
          style: null,
          resizeMode: "cover",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        const obj8 = { uri: combined1 };
        obj7.source = obj8;
        obj7.style = closure_9.fgImage;
        obj6.children = timestampProducer(FastImageDefault, obj7);
        tmp24Result = timestampProducer(React4, obj6);
      }
      items[1] = tmp24Result;
      obj3.children = items;
      return React5(React4, obj3);
    };
let obj2 = { container: null, bgBleedClip: null, bgMutedWrap: null, bgImage: null, fgClip: null, fgImage: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj2.container = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.overflow = "hidden";
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj2.bgBleedClip = obj4;
let obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5.opacity = 0.8;
obj2.bgMutedWrap = obj5;
obj2.bgImage = { width: "100%", height: "100%" };
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6.overflow = "hidden";
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj2.fgClip = obj6;
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj2.fgImage = {};
const styles = StyleSheet.create(obj2);
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles((arg0) => {
  const obj = { bundle: null, pfx: null, avatar: null, avatarWithNameplate: null, nameplate: null };
  const size = { width: tmp.bundleWidth, height: tmp.bundleHeight, borderRadius: nativeDefault.radii.xs };
  obj.bundle = size;
  const size1 = {
    position: "absolute",
    top: tmp.pfxTop,
    left: tmp.pfxLeft,
    width: tmp.pfxWidth,
    height: tmp.pfxHeight,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    transform: null,
    zIndex: 0,
    overflow: "hidden",
    borderRadius: nativeDefault.radii.xs,
  };
  const items = [{ rotate: "-8deg" }];
  size1.transform = items;
  obj.pfx = size1;
  const rect = {
    position: "absolute",
    top: tmp.avatarTop,
    right: tmp.avatarRight,
    transform: null,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  };
  const items1 = [{ rotate: "8deg" }];
  rect.transform = items1;
  obj.avatar = rect;
  const rect1 = {
    position: "absolute",
    top: tmp.avatarWithNameplateTop,
    right: tmp.avatarWithNameplateRight,
    transform: null,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: nativeDefault.colors.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  };
  const items2 = [{ rotate: "8deg" }];
  rect1.transform = items2;
  obj.avatarWithNameplate = rect1;
  obj.nameplate = {
    position: "absolute",
    bottom: BUNDLE_PREVIEW_CONFIG[arg0].nameplateBottom,
    marginHorizontal: 10,
    width: "90%",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    zIndex: 2,
    borderRadius: nativeDefault.radii.sm,
    shadowColor: nativeDefault.colors.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  };
  return obj;
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let AvatarSizes = dependencyMap;
      const cResult = c.c(21);
      ({ deco, pfx, nameplate, size } = arg0);
      let str = "small";
      if (undefined !== size) {
        str = size;
      }
      const tmp3 = closure_10(str);
      if (null == nameplate) {
        const tmp12 =
          null != undefined
            ? BUNDLE_PREVIEW_CONFIG[str].avatarDecorationSizeTriple
            : BUNDLE_PREVIEW_CONFIG[str].avatarDecorationSize;
        if (cResult[2] === pfx) {
          if (cResult[3] === tmp3.pfx) {
            let tmp13 = cResult[4];
          }
          if (cResult[5] === tmp12) {
            if (cResult[6] === deco) {
              if (cResult[7] === undefined) {
                if (cResult[8] === tmp3.avatar) {
                  if (cResult[9] === tmp3.avatarWithNameplate) {
                    let tmp18 = cResult[10];
                  }
                  if (cResult[11] === tmp11.nameplatePreviewWidth) {
                    if (cResult[12] === undefined) {
                      if (cResult[13] === str) {
                        if (cResult[14] === tmp3.nameplate) {
                          let tmp24 = cResult[15];
                        }
                        if (cResult[16] === tmp3.bundle) {
                          if (cResult[17] === tmp13) {
                            if (cResult[18] === tmp18) {
                              if (cResult[19] === tmp24) {
                                let tmp29 = cResult[20];
                              }
                              return tmp29;
                            }
                          }
                        }
                        const obj2 = { style: tmp3.bundle, children: null };
                        const items = [tmp13, tmp18, tmp24];
                        obj2.children = items;
                        const tmp32 = React5(React4, obj2);
                        cResult[16] = tmp3.bundle;
                        cResult[17] = tmp13;
                        cResult[18] = tmp18;
                        cResult[19] = tmp24;
                        cResult[20] = tmp32;
                        tmp29 = tmp32;
                      }
                    }
                  }
                  if (null == undefined) {
                    cResult[11] = tmp11.nameplatePreviewWidth;
                    cResult[12] = undefined;
                    cResult[13] = str;
                    cResult[14] = tmp3.nameplate;
                    cResult[15] = null;
                    tmp24 = null;
                  } else {
                    const obj3 = { style: tmp3.nameplate, children: null };
                    let obj4 = { width: tmp11.nameplatePreviewWidth, avatarSize: null, nameplate: null };
                    if ("large" === str) {
                      AvatarSizes = native.AvatarSizes;
                      let XSMALL_20 = AvatarSizes.NORMAL;
                    } else {
                      XSMALL_20 = native.AvatarSizes.XSMALL_20;
                    }
                    obj4.avatarSize = XSMALL_20;
                    obj4.nameplate = undefined;
                    obj4 = timestampProducer(NameplateDummyUserPreview.NameplateDummyUserPreview, obj4);
                    obj3.children = obj4;
                    timestampProducer(React4, obj3);
                  }
                }
              }
            }
          }
          if (null == deco) {
            cResult[5] = tmp12;
            cResult[6] = deco;
            cResult[7] = undefined;
            cResult[8] = tmp3.avatar;
            cResult[9] = tmp3.avatarWithNameplate;
            cResult[10] = tmp19;
            tmp18 = tmp19;
          } else {
            const obj5 = { style: null, children: null };
            const items1 = [null != undefined ? tmp3.avatarWithNameplate : tmp3.avatar];
            obj5.style = items1;
            const obj6 = { item: deco, size: tmp12, threeTierBundle: null != undefined };
            obj5.children = timestampProducer(AvatarDecorationSampleV2Default, obj6);
            timestampProducer(React4, obj5);
          }
        }
        let tmp14 = null != pfx;
        if (tmp14) {
          const obj7 = { style: tmp3.pfx, children: null };
          const obj8 = { item: pfx };
          obj7.children = timestampProducer(ProfileEffectSampleV2Default, obj8);
          tmp14 = timestampProducer(React4, obj7);
        }
        cResult[2] = pfx;
        cResult[3] = tmp3.pfx;
        cResult[4] = tmp14;
        tmp13 = tmp14;
      } else {
        _modDef38(nameplate.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
        if (cResult[0] !== nameplate) {
          const nameplateData = utils.getNameplateData(nameplate);
          cResult[0] = nameplate;
          cResult[1] = nameplateData;
          const tmpResult = utils;
        }
      }
    }
  : (arg0) => {
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
      const items = [tmp12, ,];
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
      tmp9 =
        null != nameplateData
          ? BUNDLE_PREVIEW_CONFIG[size].avatarDecorationSizeTriple
          : BUNDLE_PREVIEW_CONFIG[size].avatarDecorationSize;
    };
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/BundleSampleV2.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(12);
      ({ deco, pfx, nameplate, size, previewAssets, disableStaticBackground, mutedStaticBackground, targetSize } =
        arg0);
      let str = "small";
      if (undefined !== size) {
        str = size;
      }
      if (cResult[0] === deco) {
        if (cResult[1] === nameplate) {
          if (cResult[2] === pfx) {
            if (cResult[3] === str) {
              let tmp4 = cResult[4];
            }
            let fgStatic;
            if (previewAssets != null) {
              fgStatic = previewAssets.fgStatic;
            }
            if (null != fgStatic) {
              if (cResult[5] === tmp2) {
                if (cResult[6] === tmp3) {
                  if (cResult[7] === previewAssets) {
                  }
                }
              }
              const obj2 = { previewAssets, disableBackground: tmp2, mutedBackground: tmp3, targetSize };
              const tmp17 = timestampProducer(closure_8, obj2);
              cResult[5] = tmp2;
              cResult[6] = tmp3;
              cResult[7] = previewAssets;
              cResult[8] = targetSize;
              cResult[9] = tmp17;
            } else {
              if (cResult[10] !== tmp4) {
                const obj3 = {};
                const merged = Object.assign(tmp4);
                const tmp13 = timestampProducer(closure_11, obj3);
                cResult[10] = tmp4;
                cResult[11] = tmp13;
                let tmp7 = tmp13;
              } else {
                tmp7 = cResult[11];
              }
              return tmp7;
            }
          }
        }
      }
      const obj4 = { deco, pfx, nameplate, size: str };
      cResult[0] = deco;
      cResult[1] = nameplate;
      cResult[2] = pfx;
      cResult[3] = str;
      cResult[4] = obj4;
      tmp4 = obj4;
    }
  : (size) => {
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
        const obj2 = {
          previewAssets,
          disableBackground: disableStaticBackground,
          mutedBackground: flag,
          targetSize: size.targetSize,
        };
        let tmp4 = timestampProducer(closure_8, obj2);
      } else {
        const obj = { deco, pfx, nameplate, size: str };
        tmp4 = timestampProducer(closure_11, obj);
      }
      return tmp4;
    };
