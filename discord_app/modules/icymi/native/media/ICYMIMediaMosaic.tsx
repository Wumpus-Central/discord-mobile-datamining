// discord_app/modules/icymi/native/media/ICYMIMediaMosaic.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import MediaSourceUtil from "../../../media_viewer/native/MediaSourceUtil.tsx";
import common_VideoDefault from "../../../../components_native/common/Video.tsx";
import ICYMITypes from "../../ICYMITypes.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import ICYMIContext from "../ICYMIContext.tsx";
import ThumbhashUtils from "../../../thumbhash/ThumbhashUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ICYMIStore from "../../ICYMIStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticsObjectTypes: closure_12, AnalyticsObjects: map1, AnalyticsPages: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5091);
let closure_18 = createStyles.createStyles(() => {
  const obj = {
    media: { borderRadius: nativeDefault.radii.xs },
    video: null,
    thumbhashMedia: null,
    container: null,
    imagesContainer: null,
    imageRow: null,
    topRow: null,
    bottomRow: null,
    videoIcon: null,
    muteIcon: null,
    spoilerText: null,
    leftColumn: null,
    rightColumn: null,
    singleImage: null,
    centerContainer: null,
    absoluteContainer: null,
    iconBg: null,
    iconBgSelected: null,
  };
  const obj2 = { borderRadius: nativeDefault.radii.xs };
  obj.video = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.thumbhashMedia = { position: "absolute", top: 0, left: 0, zIndex: 1 };
  obj.container = { gap: 4 };
  obj.imagesContainer = { justifyContent: "center", gap: 4, width: "100%" };
  obj.imageRow = { flexDirection: "row", gap: 4 };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.topRow = {
    overflow: "hidden",
    borderTopEndRadius: nativeDefault.radii.lg,
    borderTopStartRadius: nativeDefault.radii.lg,
  };
  const obj4 = {
    overflow: "hidden",
    borderTopEndRadius: nativeDefault.radii.lg,
    borderTopStartRadius: nativeDefault.radii.lg,
  };
  obj.bottomRow = {
    overflow: "hidden",
    borderBottomEndRadius: nativeDefault.radii.lg,
    borderBottomStartRadius: nativeDefault.radii.lg,
  };
  const obj5 = {
    overflow: "hidden",
    borderBottomEndRadius: nativeDefault.radii.lg,
    borderBottomStartRadius: nativeDefault.radii.lg,
  };
  obj.videoIcon = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.round,
    padding: 16,
  };
  const rect = {
    position: "absolute",
    borderRadius: nativeDefault.radii.round,
    padding: nativeDefault.space.PX_4,
    bottom: 8,
    right: 8,
  };
  obj.muteIcon = rect;
  const obj6 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.round,
    padding: 16,
  };
  obj.spoilerText = {
    backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND,
    borderRadius: nativeDefault.radii.lg,
    paddingHorizontal: nativeDefault.space.PX_12,
    paddingVertical: 6,
  };
  const obj7 = {
    backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND,
    borderRadius: nativeDefault.radii.lg,
    paddingHorizontal: nativeDefault.space.PX_12,
    paddingVertical: 6,
  };
  obj.leftColumn = {
    overflow: "hidden",
    borderTopStartRadius: nativeDefault.radii.lg,
    borderBottomStartRadius: nativeDefault.radii.lg,
  };
  const obj8 = {
    overflow: "hidden",
    borderTopStartRadius: nativeDefault.radii.lg,
    borderBottomStartRadius: nativeDefault.radii.lg,
  };
  obj.rightColumn = {
    overflow: "hidden",
    borderTopEndRadius: nativeDefault.radii.lg,
    borderBottomEndRadius: nativeDefault.radii.lg,
    gap: 4,
  };
  const obj9 = {
    overflow: "hidden",
    borderTopEndRadius: nativeDefault.radii.lg,
    borderBottomEndRadius: nativeDefault.radii.lg,
    gap: 4,
  };
  obj.singleImage = { overflow: "hidden", borderRadius: nativeDefault.radii.lg };
  obj.centerContainer = {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  };
  obj.absoluteContainer = { position: "absolute", width: "100%", height: "100%", zIndex: 2 };
  const obj10 = { overflow: "hidden", borderRadius: nativeDefault.radii.lg };
  obj.iconBg = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  const obj11 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  obj.iconBgSelected = { backgroundColor: nativeDefault.colors.WHITE };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MediaMosaicVideo(autoplay) {
      const cResult = c.c(16);
      ({ source, height, width, style } = autoplay);
      const tmp4 = closure_18();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ICYMIStore];
        const fn = function o() {
          return ICYMIStore.videosMuted();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      let uri = source.videoURI;
      if (uri == null) {
        uri = source.sourceURI;
      }
      if (uri == null) {
        uri = source.uri;
      }
      if (cResult[2] !== uri) {
        const obj2 = { videoURI: uri };
        cResult[2] = uri;
        cResult[3] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === style) {
        if (cResult[5] === tmp4.media) {
          let tmp11 = cResult[6];
        }
        let isGIFV = stateFromStores;
        if (!stateFromStores) {
          isGIFV = source.isGIFV;
        }
        if (cResult[7] === height) {
          if (cResult[8] === tmp4.video) {
            if (cResult[9] === tmp9) {
              if (cResult[10] === tmp10) {
                if (cResult[11] === tmp11) {
                  if (cResult[12] === isGIFV) {
                    if (cResult[13] === stateFromStores) {
                      if (cResult[14] === width) {
                        let tmp12 = cResult[15];
                      }
                      return tmp12;
                    }
                  }
                }
              }
            }
          }
        }
        const size = {
          src: tmp9,
          height,
          width,
          postponeRender: false,
          paused: tmp10,
          muted: stateFromStores,
          resizeMode: "cover",
          style: tmp11,
          videoStyle: tmp4.video,
          disableFocus: isGIFV,
        };
        const tmp15 = closure_1_15(common_VideoDefault, size);
        cResult[7] = height;
        cResult[8] = tmp4.video;
        cResult[9] = tmp9;
        cResult[10] = tmp10;
        cResult[11] = tmp11;
        cResult[12] = isGIFV;
        cResult[13] = stateFromStores;
        cResult[14] = width;
        cResult[15] = tmp15;
        tmp12 = tmp15;
      }
      const items1 = [tmp4.media, style];
      cResult[4] = style;
      cResult[5] = tmp4.media;
      cResult[6] = items1;
      tmp11 = items1;
      const tmpResult = initialize;
    }
  : function MediaMosaicVideo(source) {
      source = source.source;
      ({ height, width, autoplay, style } = source);
      const tmp = closure_18();
      const items = [ICYMIStore];
      let isGIFV = initialize.useStateFromStores(items, () => ICYMIStore.videosMuted());
      let uri = source.videoURI;
      if (uri == null) {
        uri = source.sourceURI;
      }
      if (uri == null) {
        uri = source.uri;
      }
      const size = {
        src: { videoURI: uri },
        height,
        width,
        postponeRender: false,
        paused: !autoplay,
        muted: isGIFV,
        resizeMode: "cover",
        style: null,
        videoStyle: tmp.video,
        disableFocus: null,
      };
      const items1 = [tmp.media, style];
      size.style = items1;
      if (!isGIFV) {
        isGIFV = source.isGIFV;
      }
      size.disableFocus = isGIFV;
      return closure_1_15(common_VideoDefault, size);
    };
const __initData = {
  code: "function ICYMIMediaMosaicTsx1(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}",
};
const __initData2 = {
  code: "function ICYMIMediaMosaicTsx2(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}",
};
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MediaMosaicImage(isSpoiler) {
      const cResult = imageFinishedLoading(576).c(32);
      ({ source, dimensions, style } = isSpoiler);
      const tmp3 = closure_18();
      let num = 2;
      [imageFinishedLoading, importDefault] = noop.useState(false);
      let obj = imageFinishedLoading(576);
      const fn = function s() {
        let num = 1;
        if (first) {
          num = 0;
        }
        return { opacity: timing.withTiming(num, { duration: 150 }) };
      };
      const obj2 = imageFinishedLoading(4811);
      fn.__closure = { withTiming: imageFinishedLoading(5092).withTiming, imageFinishedLoading };
      fn.__workletHash = 7803531897566;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (null == source.placeholder) {
        if (cResult[4] === animatedStyle) {
          if (cResult[5] === tmp3.thumbhashMedia) {
            let tmp11 = cResult[6];
          }
          if (cResult[7] === dimensions) {
            if (cResult[8] === style) {
              if (cResult[9] === tmp3.media) {
                let tmp12 = cResult[10];
              }
              if (cResult[11] === tmp12) {
                if (cResult[12] === undefined) {
                  let tmp13 = cResult[13];
                }
                if (cResult[14] === tmp11) {
                  if (cResult[17] !== source.uri) {
                    const obj4 = { uri: source.uri };
                    cResult[17] = source.uri;
                    cResult[18] = obj4;
                    let tmp21 = obj4;
                  } else {
                    tmp21 = cResult[18];
                  }
                  if (cResult[19] === dimensions) {
                    if (cResult[20] === style) {
                      if (cResult[21] === tmp3.media) {
                        let tmp22 = cResult[22];
                      }
                      const _Symbol = Symbol;
                      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                        class U {
                          constructor() {
                            return closure_1(true);
                          }
                        }
                        cResult[23] = U;
                      } else {
                        class U {
                          constructor() {
                            return closure_1(true);
                          }
                        }
                      }
                      if (isSpoiler.isSpoiler) {
                        class U {
                          constructor() {
                            return closure_1(true);
                          }
                        }
                      }
                      if (cResult[24] === source.uri) {
                        class U {
                          constructor() {
                            return closure_1(true);
                          }
                        }
                      }
                      const obj5 = { source: tmp21, style: tmp22, onLoadEnd: U, blurRadius: 0, fadeDuration: 0 };
                      const tmp28 = closure_15(FastImageDefault, obj5, source.uri);
                      cResult[24] = source.uri;
                      cResult[25] = tmp21;
                      cResult[26] = tmp22;
                      cResult[27] = 0;
                      cResult[28] = tmp28;
                    }
                  }
                  const items = [tmp3.media, style, dimensions];
                  cResult[19] = dimensions;
                  cResult[20] = style;
                  cResult[21] = tmp3.media;
                  cResult[22] = items;
                  tmp22 = items;
                }
                const obj6 = { style: tmp11, children: tmp13 };
                const tmp20 = closure_15(ReanimatedRexportDefault.View, obj6);
                cResult[14] = tmp11;
                cResult[15] = tmp13;
                cResult[16] = tmp20;
              }
              const obj7 = { source: undefined, style: tmp12 };
              const tmp16 = closure_15(FastImageDefault, obj7);
              cResult[11] = tmp12;
              cResult[12] = undefined;
              cResult[13] = tmp16;
              tmp13 = tmp16;
            }
          }
          const items1 = [style, tmp3.media, dimensions];
          cResult[7] = dimensions;
          cResult[8] = style;
          cResult[9] = tmp3.media;
          cResult[10] = items1;
          tmp12 = items1;
        }
        const items2 = [animatedStyle, tmp3.thumbhashMedia];
        cResult[4] = animatedStyle;
        cResult[5] = tmp3.thumbhashMedia;
        cResult[6] = items2;
        tmp11 = items2;
      } else {
        class U {
          constructor() {
            return closure_1(true);
          }
        }
        if (cResult[2] !== tmp7) {
          class U {
            constructor() {
              return closure_1(true);
            }
          }
          tmp9[0] = tmp7;
          cResult[num] = tmp7;
          num = 3;
          cResult[3] = tmp9;
        } else {
          class U {
            constructor() {
              return closure_1(true);
            }
          }
        }
      }
      const obj3 = { withTiming: imageFinishedLoading(5092).withTiming, imageFinishedLoading };
    }
  : function MediaMosaicImage(source) {
      source = source.source;
      ({ dimensions, style } = source);
      imageFinishedLoading = undefined;
      dependencyMap = undefined;
      const tmp = closure_18();
      [imageFinishedLoading, dependencyMap] = noop.useState(false);
      const fn = function h() {
        let num = 1;
        if (first) {
          num = 0;
        }
        return { opacity: timing.withTiming(num, { duration: 150 }) };
      };
      let obj = source(4811);
      fn.__closure = { withTiming: source(5092).withTiming, imageFinishedLoading };
      fn.__workletHash = 8852576862173;
      fn.__initData = __initData2;
      const items = [source.placeholder];
      const animatedStyle = obj.useAnimatedStyle(fn);
      const memo = noop.useMemo(() => {
        if (null != source.placeholder) {
          const obj = { uri: ThumbhashUtils.createThumbhashImageFromPlaceholder(tmp.placeholder) };
          return obj;
        }
      }, items);
      const obj3 = { style: null, children: null };
      const items1 = [animatedStyle, tmp.thumbhashMedia];
      obj3.style = items1;
      const obj4 = { source: memo, style: null };
      const items2 = [style, tmp.media, dimensions];
      obj4.style = items2;
      obj3.children = closure_15(imageFinishedLoading(6163), obj4);
      const items3 = [closure_15(imageFinishedLoading(4811).View, obj3)];
      const obj5 = {
        source: { uri: source.uri },
        style: null,
        onLoadEnd() {
          return closure_2(true);
        },
        blurRadius: null,
        fadeDuration: 0,
      };
      const items4 = [tmp.media, style, dimensions];
      obj5.style = items4;
      let num = 0;
      const obj2 = { withTiming: source(5092).withTiming, imageFinishedLoading };
      if (source.isSpoiler) {
        num = 100;
      }
      const obj6 = { children: null };
      obj5.blurRadius = num;
      items3[1] = closure_15(imageFinishedLoading(6163), obj5, source.uri);
      obj6.children = items3;
      return closure_17(closure_16, obj6);
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Media(handlePressMedia) {
      const cResult = initialIndex(ref[15]).c(33);
      ({ source, dimensions, initialIndex } = handlePressMedia);
      handlePressMedia = handlePressMedia.handlePressMedia;
      ({ style, visible } = handlePressMedia);
      const tmp4 = closure_18();
      ref = noop.useRef(null);
      let flag = source.spoiler;
      if (flag == null) {
        flag = false;
      }
      const tmp7 = isSpoiler(noop.useState(flag), 2);
      isSpoiler = tmp7[0];
      noop = tmp7[1];
      if (cResult[0] === handlePressMedia) {
        if (cResult[1] === initialIndex) {
          if (cResult[2] === isSpoiler) {
            let tmp9 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [ICYMIStore];
            class V {
              constructor() {
                return closure_1_11.videosMuted();
              }
            }
            cResult[4] = items;
            cResult[5] = V;
            let tmp12 = V;
            let tmp11 = items;
          } else {
            tmp11 = cResult[4];
            tmp12 = cResult[5];
          }
          const stateFromStores = initialIndex(tmp2[16]).useStateFromStores(tmp11, tmp12);
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [AccessibilityStore];
            class G {
              constructor() {
                return closure_1_7.useReducedMotion;
              }
            }
            cResult[6] = items1;
            cResult[7] = G;
            let tmp16 = G;
            let tmp15 = items1;
          } else {
            tmp15 = cResult[6];
            tmp16 = cResult[7];
          }
          const tmpResult = initialIndex(tmp2[16]);
          const stateFromStores1 = initialIndex(tmp2[16]).useStateFromStores(tmp15, tmp16);
          if (cResult[8] === isSpoiler) {
            if (cResult[9] === tmp4) {
              let tmp19 = cResult[10];
            }
            if (cResult[11] === isSpoiler) {
              if (cResult[12] === source) {
                if (cResult[13] === tmp4) {
                  if (cResult[14] === stateFromStores1) {
                    let tmp23 = cResult[15];
                  }
                  if (cResult[16] === source) {
                    if (cResult[17] === tmp4) {
                      if (cResult[18] === stateFromStores) {
                        let tmp28 = cResult[19];
                      }
                      if (cResult[20] === dimensions) {
                        if (cResult[21] === isSpoiler) {
                          if (cResult[22] === source) {
                            if (cResult[23] === style) {
                              if (cResult[24] === visible) {
                                if (cResult[26] === dimensions) {
                                  if (cResult[27] === tmp9) {
                                    if (cResult[28] === tmp19) {
                                      if (cResult[29] === tmp23) {
                                        if (cResult[30] === tmp28) {
                                          if (cResult[31] === tmp31) {
                                            let tmp36 = cResult[32];
                                          }
                                          return tmp36;
                                        }
                                      }
                                    }
                                  }
                                }
                                class G {
                                  constructor() {
                                    return closure_1_7.useReducedMotion;
                                  }
                                }
                                const obj2 = { ref, onPress: tmp9, style: dimensions, children: null };
                                const items2 = [tmp19, tmp23, tmp28, cResult[25]];
                                obj2.children = items2;
                                const tmp38 = closure_17(stateFromStores, obj2);
                                cResult[26] = dimensions;
                                cResult[27] = tmp9;
                                cResult[28] = tmp19;
                                cResult[29] = tmp23;
                                cResult[30] = tmp28;
                                cResult[31] = cResult[25];
                                cResult[32] = tmp38;
                                tmp36 = tmp38;
                              }
                            }
                          }
                        }
                      }
                      initialIndex(tmp2[25]);
                      class G {
                        constructor() {
                          return closure_1_7.useReducedMotion;
                        }
                      }
                      const obj3 = { source, style, dimensions, isSpoiler };
                      closure_15(closure_22, obj3);
                    }
                  }
                  class G {
                    constructor() {
                      return closure_1_7.useReducedMotion;
                    }
                  }
                  if (tmpResult7.isVideo(source.uri)) {
                    if (!source.isGIFV) {
                      const urlMatchesFileExtension = initialIndex(tmp2[12]).urlMatchesFileExtension;
                      const sourceURI = source.sourceURI;
                      class G {
                        constructor() {
                          return closure_1_7.useReducedMotion;
                        }
                      }
                      const tmpResult8 = initialIndex(tmp2[12]);
                    }
                    class G {
                      constructor() {
                        return closure_1_7.useReducedMotion;
                      }
                    }
                  }
                  cResult[16] = source;
                  cResult[17] = tmp4;
                  cResult[18] = stateFromStores;
                  cResult[19] = tmp29;
                  tmp28 = tmp29;
                  tmpResult7 = initialIndex(tmp2[25]);
                }
              }
            }
            let tmp24 = null != source.videoURI && !isSpoiler;
            class G {
              constructor() {
                return closure_1_7.useReducedMotion;
              }
            }
            if (tmp24) {
              tmp24 = stateFromStores1;
            }
            if (tmp24) {
              const obj4 = { style: null, children: null };
              class G {
                constructor() {
                  return closure_1_7.useReducedMotion;
                }
              }
              const obj5 = { style: tmp4.videoIcon, children: null };
              const obj6 = { color: handlePressMedia(tmp2[11]).colors.REDESIGN_BUTTON_TERTIARY_TEXT, size: "lg" };
              obj5.children = closure_15(initialIndex(tmp2[24]).PlayIcon, obj6);
              obj4.children = closure_15(closure_6, obj5);
              tmp24 = closure_15(closure_6, obj4);
            }
            cResult[11] = isSpoiler;
            cResult[12] = source;
            cResult[13] = tmp4;
            cResult[14] = stateFromStores1;
            cResult[15] = tmp24;
            tmp23 = tmp24;
          }
          let tmp20 = isSpoiler;
          if (isSpoiler) {
            const obj7 = { style: null, children: null };
            class G {
              constructor() {
                return closure_1_7.useReducedMotion;
              }
            }
            const obj8 = { style: tmp4.spoilerText, children: null };
            const obj9 = {
              maxFontSizeMultiplier: 1,
              variant: "heading-md/semibold",
              color: "mobile-text-heading-primary",
              children: null,
            };
            const intl = initialIndex(tmp2[23]).intl;
            obj9.children = intl.string(initialIndex(tmp2[23]).t["F+x38C"]).toUpperCase();
            obj8.children = closure_15(initialIndex(tmp2[22]).Text, obj9);
            obj7.children = closure_15(closure_6, obj8);
            tmp20 = closure_15(closure_6, obj7);
            const str2 = intl.string(initialIndex(tmp2[23]).t["F+x38C"]);
          }
          cResult[8] = isSpoiler;
          cResult[9] = tmp4;
          cResult[10] = tmp20;
          tmp19 = tmp20;
          const tmpResult5 = initialIndex(tmp2[16]);
        }
      }
      const fn = function h() {
        if (first) {
          closure_4(false);
        } else {
          const obj = { ref, initialIndex };
          handlePressMedia(obj);
        }
      };
      cResult[0] = handlePressMedia;
      cResult[1] = initialIndex;
      cResult[2] = isSpoiler;
      cResult[3] = fn;
      tmp9 = fn;
      let obj = initialIndex(ref[15]);
    }
  : function Media(handlePressMedia) {
      ({ source, dimensions, initialIndex } = handlePressMedia);
      handlePressMedia = handlePressMedia.handlePressMedia;
      const style = handlePressMedia.style;
      let isSpoiler;
      noop = undefined;
      let stateFromStores;
      const tmp = closure_18();
      const ref = noop.useRef(null);
      let flag = source.spoiler;
      if (flag == null) {
        flag = false;
      }
      const tmp3 = isSpoiler(noop.useState(flag), 2);
      isSpoiler = tmp3[0];
      noop = tmp3[1];
      const items = [handlePressMedia, initialIndex, isSpoiler];
      const callback = noop.useCallback(() => {
        if (first) {
          closure_4(false);
        } else {
          const obj = { ref, initialIndex };
          handlePressMedia(obj);
        }
      }, items);
      const items1 = [ICYMIStore];
      stateFromStores = initialIndex(ref[16]).useStateFromStores(items1, () => ICYMIStore.videosMuted());
      const obj2 = initialIndex(ref[16]);
      const items2 = [AccessibilityStore];
      const obj4 = { ref, onPress: callback, style: dimensions, children: null };
      let tmp12 = isSpoiler;
      const stateFromStores1 = initialIndex(ref[16]).useStateFromStores(
        items2,
        () => useReducedMotion.useReducedMotion,
      );
      if (isSpoiler) {
        const obj5 = { style: tmp.centerContainer, children: null };
        const obj6 = { style: tmp.spoilerText, children: null };
        const obj7 = {
          maxFontSizeMultiplier: 1,
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl = initialIndex(tmp7[23]).intl;
        obj7.children = intl.string(initialIndex(tmp7[23]).t["F+x38C"]).toUpperCase();
        obj6.children = closure_15(initialIndex(tmp7[22]).Text, obj7);
        obj5.children = closure_15(closure_6, obj6);
        tmp12 = closure_15(closure_6, obj5);
        const str = intl.string(initialIndex(tmp7[23]).t["F+x38C"]);
      }
      const items3 = [tmp12, , ,];
      let tmp15 = null != source.videoURI && !isSpoiler;
      if (tmp15) {
        let isGIFV = source.isGIFV;
        if (!isGIFV) {
          isGIFV = initialIndex(tmp7[12]).urlMatchesFileExtension(source.sourceURI, initialIndex(tmp7[13]).GIF_RE_IOS);
          const tmp6Result = initialIndex(tmp7[12]);
        }
        tmp15 = !isGIFV;
      }
      if (tmp15) {
        tmp15 = stateFromStores1;
      }
      if (tmp15) {
        const obj8 = { style: tmp.centerContainer, children: null };
        const obj9 = { style: tmp.videoIcon, children: null };
        const obj10 = { color: handlePressMedia(tmp7[11]).colors.REDESIGN_BUTTON_TERTIARY_TEXT, size: "lg" };
        obj9.children = closure_15(initialIndex(tmp7[24]).PlayIcon, obj10);
        obj8.children = closure_15(closure_6, obj9);
        tmp15 = closure_15(closure_6, obj8);
      }
      items3[1] = tmp15;
      const obj3 = initialIndex(ref[16]);
      const tmp11 = stateFromStores;
      let tmp19 = null;
      if (tmp6Result5.isVideo(source.uri)) {
        let isGIFV2 = source.isGIFV;
        if (!isGIFV2) {
          isGIFV2 = initialIndex(tmp7[12]).urlMatchesFileExtension(source.sourceURI, initialIndex(tmp7[13]).GIF_RE_IOS);
          const tmp6Result6 = initialIndex(tmp7[12]);
        }
        tmp19 = null;
        if (!isGIFV2) {
          const obj11 = { style: tmp.absoluteContainer, children: null };
          const items4 = [tmp.muteIcon];
          let obj12 = { style: null, onPress: null, activeOpacity: 0.8, children: null };
          items4[1] = stateFromStores ? tmp.iconBg : tmp.iconBgSelected;
          obj12.style = items4;
          obj12.onPress = function onPress() {
            return ICYMIActionCreatorsDefault.setVideosMuted(!stateFromStores);
          };
          if (stateFromStores) {
            const obj13 = { color: handlePressMedia(tmp7[11]).colors.INTERACTIVE_TEXT_DEFAULT, size: "sm" };
            let tmp20Result = closure_15(initialIndex(tmp7[28]).VoiceXIcon, obj13);
          } else {
            const obj14 = { color: handlePressMedia(tmp7[11]).colors.BLACK, size: "sm" };
            tmp20Result = closure_15(initialIndex(tmp7[29]).VoiceNormalIcon, obj14);
          }
          obj12.children = tmp20Result;
          obj12 = closure_15(initialIndex(tmp7[26]).PressableOpacity, obj12);
          obj11.children = obj12;
          closure_15(closure_6, obj11);
        }
      }
      items3[2] = tmp19;
      tmp6Result5 = initialIndex(ref[25]);
      if (tmp6Result7.isVideo(source.uri)) {
        if (null != source.videoURI) {
          const size = { source, height: null, width: null, style: null, autoplay: null };
          ({ height: obj20.height, width: obj20.width } = dimensions);
          size.style = style;
          size.autoplay = handlePressMedia.visible;
          let tmp26 = closure_15(closure_19, size);
        }
        items3[3] = tmp26;
        obj4.children = items3;
        return closure_17(tmp11, obj4);
      } else {
        let isGIFV3 = source.isGIFV;
        if (!isGIFV3) {
          isGIFV3 = initialIndex(tmp7[12]).urlMatchesFileExtension(source.sourceURI, initialIndex(tmp7[13]).GIF_RE_IOS);
          const tmp6Result8 = initialIndex(tmp7[12]);
        }
      }
      tmp26 = closure_15(closure_22, { source, style, dimensions, isSpoiler });
      tmp6Result7 = initialIndex(ref[25]);
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OneImageRow(widthOverride) {
      const cResult = c.c(13);
      ({ source, handlePressMedia } = widthOverride);
      const tmp2 = closure_18();
      const tmp3 = closure_31(widthOverride.widthOverride);
      if (cResult[0] === tmp2.imageRow) {
        if (cResult[1] === tmp2.topRow) {
          let tmp4 = cResult[2];
        }
        const result = tmp3 / 1.5;
        if (cResult[3] === tmp3) {
          if (cResult[4] === result) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === handlePressMedia) {
            if (cResult[7] === source) {
              if (cResult[8] === tmp6) {
                let tmp7 = cResult[9];
              }
              if (cResult[10] === tmp4) {
                if (cResult[11] === tmp7) {
                  let tmp11 = cResult[12];
                }
                return tmp11;
              }
              const obj2 = { style: tmp4, children: tmp7 };
              const tmp14 = closure_1_15(timestampProducer, obj2);
              cResult[10] = tmp4;
              cResult[11] = tmp7;
              cResult[12] = tmp14;
              tmp11 = tmp14;
            }
          }
          const obj3 = { handlePressMedia, initialIndex: 0, source, dimensions: tmp6 };
          const tmp10 = closure_1_15(closure_23, obj3);
          cResult[6] = handlePressMedia;
          cResult[7] = source;
          cResult[8] = tmp6;
          cResult[9] = tmp10;
          tmp7 = tmp10;
        }
        const size = { width: tmp3, height: result };
        cResult[3] = tmp3;
        cResult[4] = result;
        cResult[5] = size;
        tmp6 = size;
      }
      const items = [,];
      ({ imageRow: arr[0], topRow: arr[1] } = tmp2);
      cResult[0] = tmp2.imageRow;
      cResult[1] = tmp2.topRow;
      cResult[2] = items;
      tmp4 = items;
    }
  : function OneImageRow(arg0) {
      ({ source, handlePressMedia, widthOverride } = arg0);
      const tmp2 = closure_31(widthOverride);
      const obj = { style: null, children: null };
      const items = [,];
      ({ imageRow: arr[0], topRow: arr[1] } = closure_18());
      obj.style = items;
      const obj2 = { handlePressMedia, initialIndex: 0, source, dimensions: null };
      const size = { width: tmp2, height: tmp2 / 1.5 };
      obj2.dimensions = size;
      obj.children = closure_1_15(closure_23, obj2);
      return closure_1_15(timestampProducer, obj);
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ThreeImagesRow(handlePressMedia) {
      const cResult = offset(576).c(16);
      ({ sources, start, end, offset } = handlePressMedia);
      handlePressMedia = handlePressMedia.handlePressMedia;
      const tmp2 = closure_18();
      const tmp3 = closure_31(handlePressMedia.widthOverride);
      dependencyMap = tmp3;
      if (start) {
        start = tmp2.topRow;
      }
      if (end) {
        end = tmp2.bottomRow;
      }
      if (cResult[0] === tmp2.imageRow) {
        if (cResult[1] === start) {
          if (cResult[2] === end) {
            let tmp4 = cResult[3];
          }
          if (cResult[4] === handlePressMedia) {
            if (cResult[5] === tmp3) {
              if (cResult[6] === offset) {
                if (cResult[7] === sources) {
                  if (cResult[13] === tmp4) {
                    if (cResult[14] === tmp5) {
                      let tmp9 = cResult[15];
                    }
                    return tmp9;
                  }
                  const obj2 = { style: tmp4, children: cResult[8] };
                  const tmp12 = closure_15(closure_6, obj2);
                  cResult[13] = tmp4;
                  cResult[14] = cResult[8];
                  cResult[15] = tmp12;
                  tmp9 = tmp12;
                }
              }
            }
          }
          if (cResult[9] === handlePressMedia) {
            if (cResult[10] === tmp3) {
              if (cResult[11] === offset) {
                let tmp6 = cResult[12];
              }
              const mapped = sources.map(tmp6);
              cResult[4] = handlePressMedia;
              cResult[5] = tmp3;
              cResult[6] = offset;
              cResult[7] = sources;
              cResult[8] = mapped;
            }
          }
          const fn = function s(source, arg1) {
            const obj = { handlePressMedia, initialIndex: offset + arg1, source, dimensions: null };
            const size = { width: (closure_2 - 8) / 3, height: (closure_2 - 8) / 3 };
            obj.dimensions = size;
            return closure_2_15(closure_23, obj, offset + arg1);
          };
          cResult[9] = handlePressMedia;
          cResult[10] = tmp3;
          cResult[11] = offset;
          cResult[12] = fn;
          tmp6 = fn;
        }
      }
      const items = [tmp2.imageRow, start, end];
      cResult[0] = tmp2.imageRow;
      cResult[1] = start;
      cResult[2] = end;
      cResult[3] = items;
      tmp4 = items;
      let obj = offset(576);
    }
  : function ThreeImagesRow(widthOverride) {
      ({ sources, start, end, offset: require, handlePressMedia: importDefault } = widthOverride);
      const tmp = closure_18();
      closure_2 = closure_31(widthOverride.widthOverride);
      const items = [tmp.imageRow, ,];
      if (start) {
        start = tmp.topRow;
      }
      items[1] = start;
      if (end) {
        end = tmp.bottomRow;
      }
      items[2] = end;
      return closure_15(closure_6, {
        style: items,
        children: sources.map((source, index) => {
          const obj = { handlePressMedia, initialIndex: require + index, source, dimensions: null };
          const size = { width: (closure_2 - 8) / 3, height: (closure_2 - 8) / 3 };
          obj.dimensions = size;
          return closure_2_15(closure_23, obj, require + index);
        }),
      });
    };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TwoImagesRow(end) {
      const cResult = handlePressMedia(576).c(17);
      ({ sources, handlePressMedia } = end);
      let bottomRow = end.end;
      const tmp2 = closure_18();
      const tmp3 = closure_31(end.widthOverride);
      const result = (tmp3 - 4) / 2;
      const result1 = (tmp3 - 4) / 2 / 0.75;
      if (cResult[0] === result) {
        if (cResult[1] === result1) {
          let tmp6 = cResult[2];
        }
        const dimensions = tmp6;
        if (bottomRow) {
          bottomRow = tmp2.bottomRow;
        }
        if (cResult[3] === tmp2.imageRow) {
          if (cResult[4] === tmp2.topRow) {
            if (cResult[5] === bottomRow) {
              let tmp7 = cResult[6];
            }
            if (cResult[7] === tmp6) {
              if (cResult[8] === handlePressMedia) {
                if (cResult[9] === sources) {
                  if (cResult[14] === tmp7) {
                    if (cResult[15] === tmp8) {
                      let tmp12 = cResult[16];
                    }
                    return tmp12;
                  }
                  const obj2 = { style: tmp7, children: cResult[10] };
                  const tmp15 = closure_15(closure_6, obj2);
                  cResult[14] = tmp7;
                  cResult[15] = cResult[10];
                  cResult[16] = tmp15;
                  tmp12 = tmp15;
                }
              }
            }
            if (cResult[11] === tmp6) {
              if (cResult[12] === handlePressMedia) {
                let tmp9 = cResult[13];
              }
              const mapped = sources.map(tmp9);
              cResult[7] = tmp6;
              cResult[8] = handlePressMedia;
              cResult[9] = sources;
              cResult[10] = mapped;
            }
            const fn = function y(source, initialIndex) {
              return closure_2_15(closure_23, { handlePressMedia, initialIndex, source, dimensions }, initialIndex);
            };
            cResult[11] = tmp6;
            cResult[12] = handlePressMedia;
            cResult[13] = fn;
            tmp9 = fn;
          }
        }
        const items = [, ,];
        ({ imageRow: arr[0], topRow: arr[1] } = tmp2);
        items[2] = bottomRow;
        ({ imageRow: tmp[3], topRow: tmp[4] } = tmp2);
        cResult[5] = bottomRow;
        cResult[6] = items;
        tmp7 = items;
      }
      const size = { width: result, height: result1 };
      cResult[0] = result;
      cResult[1] = result1;
      cResult[2] = size;
      tmp6 = size;
      const obj = handlePressMedia(576);
    }
  : function TwoImagesRow(widthOverride) {
      ({ sources, handlePressMedia: require, end } = widthOverride);
      const tmp = closure_18();
      const tmp2 = closure_31(widthOverride.widthOverride);
      const size = { width: (tmp2 - 4) / 2, height: (tmp2 - 4) / 2 / 0.75 };
      const items = [, ,];
      ({ imageRow: arr[0], topRow: arr[1] } = tmp);
      if (end) {
        end = tmp.bottomRow;
      }
      items[2] = end;
      return closure_15(closure_6, {
        style: items,
        children: sources.map((source, initialIndex) =>
          closure_2_15(closure_23, { handlePressMedia, initialIndex, source, dimensions: size }, initialIndex),
        ),
      });
    };
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ThreeImages(widthOverride) {
      const cResult = c.c(35);
      ({ sources, handlePressMedia } = widthOverride);
      const tmp2 = closure_18();
      const tmp3 = closure_31(widthOverride.widthOverride);
      if (cResult[0] === tmp2.imageRow) {
        if (cResult[1] === tmp2.imagesContainer) {
          let tmp4 = cResult[2];
        }
        const diff = (2 * tmp3) / 3 - 4;
        const result = (2 * tmp3) / 3;
        if (cResult[3] === diff) {
          if (cResult[4] === result) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === handlePressMedia) {
            if (cResult[7] === sources[0]) {
              if (cResult[8] === tmp7) {
                let tmp8 = cResult[9];
              }
              if (cResult[10] === tmp2.leftColumn) {
                if (cResult[11] === tmp8) {
                  let tmp12 = cResult[12];
                }
                const result1 = tmp3 / 3;
                const result2 = tmp3 / 3;
                if (cResult[13] === result1) {
                  if (cResult[14] === result2) {
                    let tmp18 = cResult[15];
                  }
                  if (cResult[16] === handlePressMedia) {
                    if (cResult[17] === sources[1]) {
                      if (cResult[18] === tmp18) {
                        let tmp19 = cResult[19];
                      }
                      const result3 = tmp3 / 3;
                      const result4 = tmp3 / 3;
                      if (cResult[20] === result3) {
                        if (cResult[21] === result4) {
                          let tmp25 = cResult[22];
                        }
                        if (cResult[23] === handlePressMedia) {
                          if (cResult[24] === sources[2]) {
                            if (cResult[25] === tmp25) {
                              let tmp26 = cResult[26];
                            }
                            if (cResult[27] === tmp2.rightColumn) {
                              if (cResult[28] === tmp19) {
                                if (cResult[29] === tmp26) {
                                  let tmp30 = cResult[30];
                                }
                                if (cResult[31] === tmp4) {
                                  if (cResult[32] === tmp30) {
                                    if (cResult[33] === tmp12) {
                                      let tmp34 = cResult[34];
                                    }
                                    return tmp34;
                                  }
                                }
                                const obj2 = { style: tmp4, children: null };
                                const items = [tmp12, tmp30];
                                obj2.children = items;
                                const tmp37 = constants(timestampProducer, obj2);
                                cResult[31] = tmp4;
                                cResult[32] = tmp30;
                                cResult[33] = tmp12;
                                cResult[34] = tmp37;
                                tmp34 = tmp37;
                              }
                            }
                            const obj3 = { style: tmp2.rightColumn, children: null };
                            const items1 = [tmp19, tmp26];
                            obj3.children = items1;
                            const tmp33 = constants(timestampProducer, obj3);
                            cResult[27] = tmp2.rightColumn;
                            cResult[28] = tmp19;
                            cResult[29] = tmp26;
                            cResult[30] = tmp33;
                            tmp30 = tmp33;
                          }
                        }
                        const obj4 = { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: tmp25 };
                        const tmp29 = closure_1_15(closure_23, obj4);
                        cResult[23] = handlePressMedia;
                        cResult[24] = sources[2];
                        cResult[25] = tmp25;
                        cResult[26] = tmp29;
                        tmp26 = tmp29;
                      }
                      const size = { width: result3, height: result4 };
                      cResult[20] = result3;
                      cResult[21] = result4;
                      cResult[22] = size;
                      tmp25 = size;
                    }
                  }
                  const obj5 = { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: tmp18 };
                  const tmp22 = closure_1_15(closure_23, obj5);
                  cResult[16] = handlePressMedia;
                  cResult[17] = sources[1];
                  cResult[18] = tmp18;
                  cResult[19] = tmp22;
                  tmp19 = tmp22;
                }
                const size1 = { width: result1, height: result2 };
                cResult[13] = result1;
                cResult[14] = result2;
                cResult[15] = size1;
                tmp18 = size1;
              }
              const obj6 = { style: tmp2.leftColumn, children: tmp8 };
              const tmp15 = closure_1_15(timestampProducer, obj6);
              cResult[10] = tmp2.leftColumn;
              cResult[11] = tmp8;
              cResult[12] = tmp15;
              tmp12 = tmp15;
            }
          }
          const obj7 = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: tmp7 };
          const tmp11 = closure_1_15(closure_23, obj7);
          cResult[6] = handlePressMedia;
          cResult[7] = sources[0];
          cResult[8] = tmp7;
          cResult[9] = tmp11;
          tmp8 = tmp11;
        }
        const size2 = { width: diff, height: result };
        cResult[3] = diff;
        cResult[4] = result;
        cResult[5] = size2;
        tmp7 = size2;
      }
      const items2 = [,];
      ({ imagesContainer: arr[0], imageRow: arr[1] } = tmp2);
      cResult[0] = tmp2.imageRow;
      cResult[1] = tmp2.imagesContainer;
      cResult[2] = items2;
      tmp4 = items2;
    }
  : function ThreeImages(widthOverride) {
      ({ sources, handlePressMedia } = widthOverride);
      const tmp = closure_18();
      const tmp2 = closure_31(widthOverride.widthOverride);
      const obj = { style: null, children: null };
      const items = [,];
      ({ imagesContainer: arr[0], imageRow: arr[1] } = tmp);
      obj.style = items;
      const obj2 = { style: tmp.leftColumn, children: null };
      const obj3 = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: null };
      const size = { width: (2 * tmp2) / 3 - 4, height: (2 * tmp2) / 3 };
      obj3.dimensions = size;
      obj2.children = closure_1_15(closure_23, obj3);
      const items1 = [closure_1_15(timestampProducer, obj2)];
      const obj4 = { style: tmp.rightColumn, children: null };
      const items2 = [
        closure_1_15(closure_23, {
          handlePressMedia,
          initialIndex: 1,
          source: sources[1],
          dimensions: { width: tmp2 / 3, height: tmp2 / 3 },
        }),
        closure_1_15(closure_23, {
          handlePressMedia,
          initialIndex: 2,
          source: sources[2],
          dimensions: { width: tmp2 / 3, height: tmp2 / 3 },
        }),
      ];
      obj4.children = items2;
      items1[1] = constants(timestampProducer, obj4);
      obj.children = items1;
      return constants(timestampProducer, obj);
    };
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FourImages(widthOverride) {
      const cResult = c.c(37);
      ({ sources, handlePressMedia } = widthOverride);
      const tmp2 = closure_18();
      const tmp3 = closure_31(widthOverride.widthOverride);
      const diff = tmp3 / 2 - 4;
      const result = (tmp3 / 2 - 4) / 1.5;
      if (cResult[0] === diff) {
        if (cResult[1] === result) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp2.imageRow) {
          if (cResult[4] === tmp2.topRow) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            if (cResult[7] === handlePressMedia) {
              if (cResult[8] === sources[0]) {
                let tmp8 = cResult[9];
              }
              if (cResult[10] === tmp6) {
                if (cResult[11] === handlePressMedia) {
                  if (cResult[12] === sources[1]) {
                    let tmp12 = cResult[13];
                  }
                  if (cResult[14] === tmp7) {
                    if (cResult[15] === tmp8) {
                      if (cResult[16] === tmp12) {
                        let tmp16 = cResult[17];
                      }
                      if (cResult[18] === tmp2.bottomRow) {
                        if (cResult[19] === tmp2.imageRow) {
                          let tmp20 = cResult[20];
                        }
                        if (cResult[21] === tmp6) {
                          if (cResult[22] === handlePressMedia) {
                            if (cResult[23] === sources[2]) {
                              let tmp21 = cResult[24];
                            }
                            if (cResult[25] === tmp6) {
                              if (cResult[26] === handlePressMedia) {
                                if (cResult[27] === sources[3]) {
                                  let tmp25 = cResult[28];
                                }
                                if (cResult[29] === tmp25) {
                                  if (cResult[30] === tmp20) {
                                    if (cResult[31] === tmp21) {
                                      let tmp29 = cResult[32];
                                    }
                                    if (cResult[33] === tmp2.imagesContainer) {
                                      if (cResult[34] === tmp29) {
                                        if (cResult[35] === tmp16) {
                                          let tmp33 = cResult[36];
                                        }
                                        return tmp33;
                                      }
                                    }
                                    const obj2 = { style: tmp2.imagesContainer, children: null };
                                    const items = [tmp16, tmp29];
                                    obj2.children = items;
                                    const tmp36 = constants(timestampProducer, obj2);
                                    cResult[33] = tmp2.imagesContainer;
                                    cResult[34] = tmp29;
                                    cResult[35] = tmp16;
                                    cResult[36] = tmp36;
                                    tmp33 = tmp36;
                                  }
                                }
                                const obj3 = { style: tmp20, children: null };
                                const items1 = [tmp21, tmp25];
                                obj3.children = items1;
                                const tmp32 = constants(timestampProducer, obj3);
                                cResult[29] = tmp25;
                                cResult[30] = tmp20;
                                cResult[31] = tmp21;
                                cResult[32] = tmp32;
                                tmp29 = tmp32;
                              }
                            }
                            const obj4 = { handlePressMedia, initialIndex: 3, source: sources[3], dimensions: tmp6 };
                            const tmp28 = closure_1_15(closure_23, obj4);
                            cResult[25] = tmp6;
                            cResult[26] = handlePressMedia;
                            cResult[27] = sources[3];
                            cResult[28] = tmp28;
                            tmp25 = tmp28;
                          }
                        }
                        const obj5 = { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: tmp6 };
                        const tmp24 = closure_1_15(closure_23, obj5);
                        cResult[21] = tmp6;
                        cResult[22] = handlePressMedia;
                        cResult[23] = sources[2];
                        cResult[24] = tmp24;
                        tmp21 = tmp24;
                      }
                      const items2 = [,];
                      ({ imageRow: arr3[0], bottomRow: arr3[1] } = tmp2);
                      cResult[18] = tmp2.bottomRow;
                      cResult[19] = tmp2.imageRow;
                      cResult[20] = items2;
                      tmp20 = items2;
                    }
                  }
                  const obj6 = { style: tmp7, children: null };
                  const items3 = [tmp8, tmp12];
                  obj6.children = items3;
                  const tmp19 = constants(timestampProducer, obj6);
                  cResult[14] = tmp7;
                  cResult[15] = tmp8;
                  cResult[16] = tmp12;
                  cResult[17] = tmp19;
                  tmp16 = tmp19;
                }
              }
              const obj7 = { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: tmp6 };
              const tmp15 = closure_1_15(closure_23, obj7);
              cResult[10] = tmp6;
              cResult[11] = handlePressMedia;
              cResult[12] = sources[1];
              cResult[13] = tmp15;
              tmp12 = tmp15;
            }
          }
          const obj8 = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: tmp6 };
          const tmp11 = closure_1_15(closure_23, obj8);
          cResult[6] = tmp6;
          cResult[7] = handlePressMedia;
          cResult[8] = sources[0];
          cResult[9] = tmp11;
          tmp8 = tmp11;
        }
        const items4 = [,];
        ({ imageRow: arr[0], topRow: arr[1] } = tmp2);
        ({ imageRow: tmp[3], topRow: tmp[4] } = tmp2);
        cResult[5] = items4;
        tmp7 = items4;
      }
      const size = { width: diff, height: result };
      cResult[0] = diff;
      cResult[1] = result;
      cResult[2] = size;
      tmp6 = size;
    }
  : function FourImages(widthOverride) {
      ({ sources, handlePressMedia } = widthOverride);
      const tmp = closure_18();
      const tmp2 = closure_31(widthOverride.widthOverride);
      const size = { width: tmp2 / 2 - 4, height: (tmp2 / 2 - 4) / 1.5 };
      const obj = { style: tmp.imagesContainer, children: null };
      const obj2 = { style: null, children: null };
      const items = [,];
      ({ imageRow: arr[0], topRow: arr[1] } = tmp);
      obj2.style = items;
      const items1 = [
        closure_1_15(closure_23, { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: size }),
        closure_1_15(closure_23, { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: size }),
      ];
      obj2.children = items1;
      const items2 = [constants(timestampProducer, obj2)];
      const obj5 = { style: null, children: null };
      const items3 = [,];
      ({ imageRow: arr4[0], bottomRow: arr4[1] } = tmp);
      obj5.style = items3;
      const items4 = [
        closure_1_15(closure_23, { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: size }),
        closure_1_15(closure_23, { handlePressMedia, initialIndex: 3, source: sources[3], dimensions: size }),
      ];
      obj5.children = items4;
      items2[1] = constants(timestampProducer, obj5);
      obj.children = items2;
      return constants(timestampProducer, obj);
    };
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SingleImage(widthOverride) {
      const cResult = c.c(19);
      ({ source, initialIndex, handlePressMedia, visible } = widthOverride);
      const tmp2 = closure_18();
      const tmp3 = closure_31(widthOverride.widthOverride);
      const result = source.width / source.height;
      let num = 1;
      if (result >= 1) {
        const _Math = Math;
        const bound = Math.min(source.width, tmp3);
        const result1 = bound / result;
        if (cResult[0] === result1) {
        }
        const size = { height: result1, width: bound };
        cResult[0] = result1;
        cResult[num] = bound;
        num = 2;
        cResult[2] = size;
      } else {
        const _Math2 = Math;
        const bound1 = Math.min(source.height, 330);
        const result2 = bound1 * result;
        if (result2 > tmp3) {
          const result3 = tmp3 / result;
          if (cResult[3] === tmp3) {
            if (cResult[4] === result3) {
              let tmp7 = cResult[5];
            }
            let tmp5 = tmp7;
          }
          const size1 = { width: tmp3, height: result3 };
          cResult[3] = tmp3;
          cResult[4] = result3;
          cResult[5] = size1;
          tmp7 = size1;
        } else {
          if (cResult[6] === bound1) {
            if (cResult[7] === result2) {
              tmp5 = cResult[8];
            }
          }
          const size2 = { width: result2, height: bound1 };
          cResult[6] = bound1;
          cResult[7] = result2;
          cResult[8] = size2;
          tmp5 = size2;
        }
        if (cResult[9] === handlePressMedia) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === initialIndex) {
              if (cResult[12] === source) {
                if (cResult[13] === tmp2.singleImage) {
                  if (cResult[14] === visible) {
                    let tmp13 = cResult[15];
                  }
                  if (cResult[16] === tmp2.imagesContainer) {
                    if (cResult[17] === tmp13) {
                      let tmp17 = cResult[18];
                    }
                    return tmp17;
                  }
                  const obj2 = { style: tmp2.imagesContainer, children: tmp13 };
                  const tmp20 = closure_1_15(timestampProducer, obj2);
                  cResult[16] = tmp2.imagesContainer;
                  cResult[17] = tmp13;
                  cResult[18] = tmp20;
                  tmp17 = tmp20;
                }
              }
            }
          }
        }
        const obj3 = { handlePressMedia, initialIndex, source, dimensions: tmp5, style: tmp2.singleImage, visible };
        const tmp16 = closure_1_15(closure_23, obj3);
        cResult[9] = handlePressMedia;
        cResult[10] = tmp5;
        cResult[11] = initialIndex;
        cResult[12] = source;
        cResult[13] = tmp2.singleImage;
        cResult[14] = visible;
        cResult[15] = tmp16;
        tmp13 = tmp16;
      }
    }
  : function SingleImage(source) {
      source = source.source;
      ({ initialIndex, handlePressMedia, visible, widthOverride } = source);
      const tmp = closure_18();
      const tmp2 = closure_31(widthOverride);
      const width = tmp2;
      const items = [, ,];
      ({ width: arr[0], height: arr[1] } = source);
      items[2] = tmp2;
      const obj = {
        style: tmp.imagesContainer,
        children: closure_1_15(closure_23, {
          handlePressMedia,
          initialIndex,
          source,
          dimensions: noop.useMemo(() => {
            const size = source;
            const result = source.width / source.height;
            if (result >= 1) {
              const _Math2 = Math;
              const bound = Math.min(size.width, width);
              const size1 = { height: bound / result, width: bound };
              return size1;
            } else {
              const _Math = Math;
              const bound1 = Math.min(size.height, 330);
              const result1 = bound1 * result;
              if (result1 > width) {
                const size2 = { width, height: width / result };
                let size3 = size2;
              } else {
                size3 = { width: result1, height: bound1 };
              }
              return size3;
            }
          }, items),
          style: tmp.singleImage,
          visible,
        }),
      };
      return closure_1_15(timestampProducer, obj);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GravityAttachmentMediaMosaic(arg0) {
      let sum;
      const cResult = handlePressMedia(arr[15]).c(26);
      ({ sources, handlePressMedia } = arg0);
      ({ visible, widthOverride } = arg0);
      const tmp2 = closure_18();
      if (cResult[0] === sources.length) {
        if (cResult[1] === sources) {
          arr = cResult[2];
        }
        if (0 === length) {
          return null;
        } else if (1 === length) {
          if (cResult[6] === handlePressMedia) {
            if (cResult[7] === sources[0]) {
              if (cResult[8] === visible) {
                if (cResult[9] === widthOverride) {
                  let tmp23 = cResult[10];
                }
                return tmp23;
              }
            }
          }
          let obj2 = { widthOverride, initialIndex: 0, handlePressMedia, source: sources[0], visible };
          const tmp26 = closure_15(closure_29, obj2);
          cResult[6] = handlePressMedia;
          cResult[7] = sources[0];
          cResult[8] = visible;
          cResult[9] = widthOverride;
          cResult[10] = tmp26;
          tmp23 = tmp26;
        } else if (3 === length) {
          if (cResult[11] === handlePressMedia) {
            if (cResult[12] === sources) {
              if (cResult[13] === widthOverride) {
                let tmp19 = cResult[14];
              }
              return tmp19;
            }
          }
          let obj3 = { widthOverride, handlePressMedia, sources };
          const tmp22 = closure_15(closure_27, obj3);
          cResult[11] = handlePressMedia;
          cResult[12] = sources;
          cResult[13] = widthOverride;
          cResult[14] = tmp22;
          tmp19 = tmp22;
        } else if (4 === length) {
          if (cResult[15] === handlePressMedia) {
            if (cResult[16] === sources) {
              if (cResult[17] === widthOverride) {
                let tmp15 = cResult[18];
              }
              return tmp15;
            }
          }
          const obj4 = { widthOverride, handlePressMedia, sources };
          const tmp18 = closure_15(closure_28, obj4);
          cResult[15] = handlePressMedia;
          cResult[16] = sources;
          cResult[17] = widthOverride;
          cResult[18] = tmp18;
          tmp15 = tmp18;
        } else {
          if (cResult[19] === handlePressMedia) {
            if (cResult[20] === arr) {
              if (cResult[21] === widthOverride) {
                let tmp9 = cResult[22];
              }
              if (cResult[23] === tmp2.imagesContainer) {
                if (cResult[24] === tmp9) {
                  let tmp11 = cResult[25];
                }
                return tmp11;
              }
              const obj5 = { style: tmp28, children: tmp9 };
              const tmp14 = closure_15(closure_6, obj5);
              cResult[23] = tmp2.imagesContainer;
              cResult[24] = tmp9;
              cResult[25] = tmp14;
              tmp11 = tmp14;
            }
          }
          const mapped = arr.map((sources, index) => {
            if (1 === sources.length) {
              const obj2 = { handlePressMedia, source: sources[0] };
              return closure_2_15(closure_24, obj2, index);
            } else if (2 === sources.length) {
              const obj3 = { widthOverride, sources, handlePressMedia, end: index === arr.length - 1 };
              return closure_2_15(closure_26, obj3, index);
            } else {
              let num = 0;
              if (0 !== index) {
                num = arr[0].length + 3 * (index - 1);
              }
              const obj = {
                widthOverride,
                handlePressMedia,
                offset: num,
                sources,
                start: 0 === index,
                end: index === arr.length - 1,
              };
              return closure_2_15(closure_25, obj, index);
            }
          });
          cResult[19] = handlePressMedia;
          cResult[20] = arr;
          cResult[21] = widthOverride;
          cResult[22] = mapped;
          tmp9 = mapped;
        }
      }
      const result = length % 3;
      let num = 3;
      if (0 !== result) {
        num = result;
      }
      if (cResult[3] === num) {
        if (cResult[4] === sources) {
          let tmp4 = cResult[5];
        }
        const items = [];
        items.push(tmp4);
        if (num < length) {
          do {
            sum = num + 3;
            let arr4 = items.push(sources.slice(num, sum));
            num = sum;
          } while (sum < length);
        }
        cResult[0] = length;
        cResult[1] = sources;
        cResult[2] = items;
        arr = items;
      }
      const substr = sources.slice(0, num);
      cResult[3] = num;
      cResult[4] = sources;
      cResult[5] = substr;
      tmp4 = substr;
      let obj = handlePressMedia(arr[15]);
    }
  : function GravityAttachmentMediaMosaic(sources) {
      sources = sources.sources;
      const handlePressMedia = sources.handlePressMedia;
      const widthOverride = sources.widthOverride;
      let memo;
      const length = sources.length;
      let items = [length, sources];
      memo = memo.useMemo(() => {
        let sum;
        const result = length % 3;
        let num = 3;
        if (0 !== result) {
          num = result;
        }
        const items = [];
        items.push(sources.slice(0, num));
        if (num < length) {
          do {
            sum = num + 3;
            let arr3 = items.push(sources.slice(num, sum));
            num = sum;
          } while (sum < length);
        }
        return items;
      }, items);
      if (0 === length) {
        return null;
      } else if (1 === length) {
        let obj2 = { widthOverride, initialIndex: 0, handlePressMedia, source: null, visible: null };
        sources = sources[0];
        obj2.source = sources;
        obj2.visible = sources.visible;
        let tmp4 = closure_15(closure_29, obj2);
      } else if (3 === length) {
        let obj3 = { widthOverride, handlePressMedia, sources };
        tmp4 = closure_15(closure_27, obj3);
      } else if (4 === length) {
        const obj4 = { widthOverride, handlePressMedia, sources };
        tmp4 = closure_15(closure_28, obj4);
      } else {
        let obj = {
          style: tmp.imagesContainer,
          children: memo.map((sources, index) => {
            if (1 === sources.length) {
              const obj2 = { handlePressMedia, source: sources[0] };
              return closure_2_15(closure_24, obj2, index);
            } else if (2 === sources.length) {
              const obj3 = { widthOverride, sources, handlePressMedia, end: index === memo.length - 1 };
              return closure_2_15(closure_26, obj3, index);
            } else {
              let num = 0;
              if (0 !== index) {
                num = memo[0].length + 3 * (index - 1);
              }
              const obj = {
                widthOverride,
                handlePressMedia,
                offset: num,
                sources,
                start: 0 === index,
                end: index === memo.length - 1,
              };
              return closure_2_15(closure_25, obj, index);
            }
          }),
        };
        tmp4 = closure_15(closure_6, obj);
      }
      tmp = closure_18();
    };
let closure_30 = tmp5;
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMaxWidth(arg0) {
      let diff = arg0;
      const context = noop.useContext(ICYMIContext.ICYMIContext);
      if (null == arg0) {
        let width;
        if (context != null) {
          width = context.width;
        }
        diff = width - context.inset - 2 * context.margin;
      }
      return diff;
    }
  : function useMaxWidth(arg0) {
      let diff = arg0;
      const context = noop.useContext(ICYMIContext.ICYMIContext);
      if (null == arg0) {
        let width;
        if (context != null) {
          width = context.width;
        }
        diff = width - context.inset - 2 * context.margin;
      }
      return diff;
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/media/ICYMIMediaMosaic.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ICYMIMediaMosaic(message) {
      let obj = message;
      let partitionResult = itemType;
      const cResult = message(itemType[15]).c(34);
      message = message.message;
      const widthOverride = message.widthOverride;
      itemType = message.itemType;
      closure_18();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== message) {
        const fn = function c() {
          return ChannelStore.getChannel(message.getChannelId());
        };
        cResult[1] = message;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj2 = message(itemType[15]);
      const stateFromStores = obj(partitionResult[16]).useStateFromStores(first, tmp6);
      const objResult = obj(partitionResult[16]);
      const tmp8 = stateFromStores;
      [tmp10, noop] = stateFromStores(noop.useState(false), 2);
      let visible = !tmp10;
      if (!tmp10) {
        visible = message.visible;
      }
      if (cResult[3] !== message) {
        const objResult2 = obj(partitionResult[31]);
        const result = objResult2.extractMediaSourcesFromMessage(
          message,
          message,
          undefined,
          obj(partitionResult[32]).GRAVITY_VALID_EMBED_TYPES,
        );
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor(arg0) {
              obj = message(itemType[31]);
              return obj.flattenSource(message);
            }
          }
          cResult[6] = B;
        } else {
          class B {
            constructor(arg0) {
              obj = message(itemType[31]);
              return obj.flattenSource(message);
            }
          }
        }
        const mapped = result.map(B);
        const found = mapped.filter(obj(partitionResult[33]).isNotNullish);
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor(arg0) {
              return "embed" === message.accessoryType;
            }
          }
          cResult[7] = N;
        } else {
          class N {
            constructor(arg0) {
              return "embed" === message.accessoryType;
            }
          }
        }
        obj = obj(partitionResult[34]);
        partitionResult = obj.partition(found, N);
        cResult[3] = message;
        cResult[4] = found;
        cResult[5] = partitionResult;
      } else {
        class N {
          constructor(arg0) {
            return "embed" === message.accessoryType;
          }
        }
        [tmp21, tmp22] = tmp8(cResult[5], 2);
        if (cResult[8] === tmp21) {
          class N {
            constructor(arg0) {
              return "embed" === message.accessoryType;
            }
          }
        }
        let obj3 = { allMediaSources: tmp11, nonEmbedSources: tmp22, embedSources: tmp21 };
        cResult[8] = tmp21;
        cResult[9] = tmp11;
        cResult[10] = tmp22;
        cResult[11] = obj3;
        const tmp8Result = tmp8(cResult[5], 2);
      }
      const tmp9 = stateFromStores(noop.useState(false), 2);
    }
  : function ICYMIMediaMosaic(message) {
      message = message.message;
      const widthOverride = message.widthOverride;
      const itemType = message.itemType;
      noop = undefined;
      let allMediaSources;
      let nonEmbedSources;
      let handlePressMedia;
      const tmp = closure_18();
      let items = [handlePressMedia];
      const stateFromStores = message(itemType[16]).useStateFromStores(items, () =>
        ChannelStore.getChannel(message.getChannelId()),
      );
      let obj = message(itemType[16]);
      [tmp4, c4] = stateFromStores(noop.useState(false), 2);
      let visible = !tmp4;
      if (!tmp4) {
        visible = message.visible;
      }
      const items1 = [message];
      const memo = obj2.useMemo(() => {
        const result = MediaSourceUtil.extractMediaSourcesFromMessage(
          message,
          message,
          undefined,
          ICYMITypes.GRAVITY_VALID_EMBED_TYPES,
        );
        const mapped = result.map((item) => message(itemType[31]).flattenSource(item));
        const found = mapped.filter(GlobalUtils.isNotNullish);
        const tmp2 = _slicedToArray(
          _mod12.partition(found, (accessoryType) => "embed" === accessoryType.accessoryType),
          2,
        );
        return { allMediaSources: found, nonEmbedSources: tmp2[1], embedSources: tmp2[0] };
      }, items1);
      allMediaSources = memo.allMediaSources;
      nonEmbedSources = memo.nonEmbedSources;
      const embedSources = memo.embedSources;
      const items2 = [, , , ,];
      ({ channel_id: arr5[0], id: arr5[1] } = message);
      items2[2] = allMediaSources;
      items2[3] = stateFromStores;
      items2[4] = itemType;
      handlePressMedia = obj2.useCallback((arg0) => {
        let items;
        ({ ref, initialIndex } = arg0);
        widthOverride(itemType[27]).itemInteracted(items.id, "message", "press_media");
        let obj = widthOverride(itemType[27]);
        widthOverride(itemType[27]).feedItemActioned({
          itemId: items.id,
          itemType,
          actionParameters: {
            actionGestureType: "press",
            actionTargetElement: "media_mosaic",
            actionIntentType: "open",
            actionDestinationType: null,
          },
        });
        const obj2 = widthOverride(itemType[27]);
        const obj3 = {
          itemId: items.id,
          itemType,
          actionParameters: {
            actionGestureType: "press",
            actionTargetElement: "media_mosaic",
            actionIntentType: "open",
            actionDestinationType: null,
          },
        };
        message(itemType[35]).ack(
          items.channel_id,
          { page: constants3.ICYMI, object: constants2.ACK_MEDIA_VIEWED, objectType: constants.ACK_SEMI_AUTOMATIC },
          true,
          true,
          items.id,
        );
        items = [];
        const item = allMediaSources.forEach((item) => {
          const obj = {};
          const merged = Object.assign(item);
          obj.embedURI = undefined;
          items.push(obj);
        });
        _undefined(true);
        const obj4 = message(itemType[35]);
        const obj5 = {
          page: constants3.ICYMI,
          object: constants2.ACK_MEDIA_VIEWED,
          objectType: constants.ACK_SEMI_AUTOMATIC,
        };
        const obj7 = {
          disableDownload: false,
          initialSources: items,
          initialIndex,
          analyticsSource: "Channel",
          channelId: items.channel_id,
          contextName: null,
          contextIcon: "r",
          originViewOrOriginLayout: 0,
          onClose: "absolute",
        };
        let str = "";
        if (null != stateFromStores) {
          str = message(itemType[37]).computeChannelName(tmp8, UserStore, RelationshipStore);
          const tmp4Result = message(itemType[37]);
        }
        obj7.contextName = str;
        obj7.originViewOrOriginLayout = ref.current;
        obj7.onClose = function onClose() {
          return _undefined(false);
        };
        message(itemType[36]).openMediaModal(obj7);
        const obj6 = message(itemType[36]);
      }, items2);
      if (0 !== nonEmbedSources.length) {
        let obj3 = { style: tmp.container, children: null };
        let obj4 = { widthOverride, sources: nonEmbedSources, handlePressMedia, visible };
        const items3 = [closure_15(closure_30, obj4)];
        let mapped;
        if (embedSources != null) {
          mapped = embedSources.map((source, index) =>
            closure_2_15(
              closure_29,
              { widthOverride, handlePressMedia, initialIndex: index + nonEmbedSources.length, source, visible },
              "gif-" + index,
            ),
          );
        }
        items3[1] = mapped;
        obj3.children = items3;
        const _HermesInternal = HermesInternal;
        let tmp8Result = closure_17(allMediaSources, obj3, "message-image-" + message.id);
      } else {
        tmp8Result = null;
      }
      return tmp8Result;
    };
export const GravityAttachmentMediaMosaic = tmp5;
