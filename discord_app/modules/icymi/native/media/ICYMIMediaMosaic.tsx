// === Module 16479: ICYMIMediaMosaic ===

// Module 16479 (ICYMIMediaMosaic)
import _mod12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import FastImageDefault from "FastImage" /* 5981 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7950 */;
import common_VideoDefault from "common/Video" /* 7993 */;
import ICYMITypes from "ICYMITypes" /* 8034 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8039 */;
import ICYMIContext from "ICYMIContext" /* 16435 */;
import ThumbhashUtils from "ThumbhashUtils" /* 16480 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import ICYMIStore from "ICYMIStore" /* 8021 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault, message;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ AnalyticsObjectTypes: closure_12, AnalyticsObjects: map1, AnalyticsPages: closure_14 } = Constants);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles(() => {
  let rect;
  const obj = { media: { borderRadius: nativeDefault.radii.xs }, video: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, thumbhashMedia: { position: "absolute", top: 0, left: 0, zIndex: 1 }, container: { gap: 4 }, imagesContainer: { justifyContent: "center", gap: 4, width: "100%" }, imageRow: { flexDirection: "row", gap: 4 }, topRow: { overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderTopStartRadius: nativeDefault.radii.lg }, bottomRow: { overflow: "hidden", borderBottomEndRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg }, videoIcon: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, padding: 16 }, muteIcon: rect, spoilerText: { backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: 6 }, leftColumn: { overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg }, rightColumn: { overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderBottomEndRadius: nativeDefault.radii.lg, gap: 4 }, singleImage: { overflow: "hidden", borderRadius: nativeDefault.radii.lg }, centerContainer: { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", zIndex: 2 }, absoluteContainer: { position: "absolute", width: "100%", height: "100%", zIndex: 2 }, iconBg: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, iconBgSelected: { backgroundColor: nativeDefault.colors.WHITE } };
  ({ borderRadius: nativeDefault.radii.xs });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
  ({ overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderTopStartRadius: nativeDefault.radii.lg });
  ({ overflow: "hidden", borderBottomEndRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, padding: 16 });
  rect = { position: "absolute", borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, bottom: 8, right: 8 };
  ({ backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: 6 });
  ({ overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg });
  ({ overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderBottomEndRadius: nativeDefault.radii.lg, gap: 4 });
  ({ overflow: "hidden", borderRadius: nativeDefault.radii.lg });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER });
  ({ backgroundColor: nativeDefault.colors.WHITE });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((autoplay) => {
  let height;
  let source;
  let style;
  let tmp5;
  let tmp6;
  let tmp9;
  let width;
  const obj = react2;
  const cResult = obj.c(16);
  ({ source, height, width, style } = autoplay);
  autoplay = autoplay.autoplay;
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
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
    tmp9 = obj2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === style) {
    let tmp11;
    if (cResult[5] === tmp4.media) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === height) {
      if (cResult[8] === tmp4.video) {
        if (cResult[9] === tmp9) {
          if (cResult[10] === !autoplay) {
            if (cResult[11] === tmp11) {
              if (cResult[12] === (stateFromStores || source.isGIFV)) {
                if (cResult[13] === stateFromStores) {
                  let tmp13;
                  if (cResult[14] === width) {
                    tmp13 = cResult[15];
                  }
                  return tmp13;
                }
              }
            }
          }
        }
      }
    }
    size = { src: tmp9, height, width, postponeRender: false, paused: !autoplay, muted: stateFromStores, resizeMode: "cover", style: tmp11, videoStyle: tmp4.video, disableFocus: stateFromStores || source.isGIFV };
    const tmp16 = closure_15(common_VideoDefault, size);
    cResult[7] = height;
    cResult[8] = tmp4.video;
    cResult[9] = tmp9;
    cResult[10] = !autoplay;
    cResult[11] = tmp11;
    cResult[12] = stateFromStores || source.isGIFV;
    cResult[13] = stateFromStores;
    cResult[14] = width;
    cResult[15] = tmp16;
    tmp13 = tmp16;
  }
  const items1 = [tmp4.media, style];
  cResult[4] = style;
  cResult[5] = tmp4.media;
  cResult[6] = items1;
  tmp11 = items1;
}) : ((source) => {
  let autoplay;
  let height;
  let items1;
  let style;
  let width;
  source = source.source;
  ({ height, width, autoplay, style } = source);
  const tmp = closure_18();
  const items = [ICYMIStore];
  const obj = get_initialized;
  let isGIFV = obj.useStateFromStores(items, () => ICYMIStore.videosMuted());
  let uri = source.videoURI;
  const tmp3 = common_VideoDefault;
  if (uri == null) {
    uri = source.sourceURI;
  }
  if (uri == null) {
    uri = source.uri;
  }
  size = { src: { videoURI: uri }, height, width, postponeRender: false, paused: !autoplay, muted: isGIFV, resizeMode: "cover", style: items1, videoStyle: tmp.video, disableFocus: isGIFV };
  items1 = [tmp.media, style];
  if (!isGIFV) {
    isGIFV = source.isGIFV;
  }
  return closure_15(tmp3, size);
});
const __initData = { code: "function ICYMIMediaMosaicTsx1(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}" };
const __initData2 = { code: "function ICYMIMediaMosaicTsx2(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((isSpoiler) => {
  let closure_1;
  let dimensions;
  let imageFinishedLoading;
  let source;
  let style;
  const tmp = imageFinishedLoading;
  let obj = imageFinishedLoading(576);
  const cResult = obj.c(31);
  ({ source, dimensions, style } = isSpoiler);
  isSpoiler = isSpoiler.isSpoiler;
  const tmp4 = closure_18();
  [imageFinishedLoading, importDefault] = react.useState(false);
  const fn = function s() {
    let num = 1;
    const withTiming = timing.withTiming;
    timing;
    if (first) {
      num = 0;
    }
    const obj = { opacity: withTiming(num, { duration: 150 }) };
    return obj;
  };
  const obj2 = imageFinishedLoading(4618);
  fn.__closure = { withTiming: imageFinishedLoading(4897).withTiming, imageFinishedLoading };
  fn.__workletHash = 7803531897566;
  fn.__initData = __initData;
  ({ withTiming: imageFinishedLoading(4897).withTiming, imageFinishedLoading });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (null != source.placeholder) {
    let tmp9;
    if (cResult[0] !== source.placeholder) {
      const tmpResult = tmp(16480);
      const thumbhashImageFromPlaceholder = tmpResult.createThumbhashImageFromPlaceholder(source.placeholder);
      let num = 0;
      cResult[0] = source.placeholder;
      cResult[1] = thumbhashImageFromPlaceholder;
      tmp9 = thumbhashImageFromPlaceholder;
    } else {
      tmp9 = cResult[1];
    }
    size = { uri: tmp9, width: null, height: null };
    ({ width: obj5.width, height: obj5.height, height: tmp3[2] } = source);
    cResult[3] = source.width;
    cResult[4] = tmp9;
    cResult[5] = size;
  }
  if (cResult[6] === animatedStyle) {
    let tmp12;
    if (cResult[7] === tmp4.thumbhashMedia) {
      tmp12 = cResult[8];
    }
    if (cResult[9] === dimensions) {
      if (cResult[10] === style) {
        let tmp13;
        if (cResult[11] === tmp4.media) {
          tmp13 = cResult[12];
        }
        if (cResult[13] === tmp13) {
          let tmp14;
          if (cResult[14] === tmp8) {
            tmp14 = cResult[15];
          }
          if (cResult[16] === tmp12) {
            if (cResult[19] === dimensions) {
              if (cResult[20] === style) {
                let tmp22;
                if (cResult[21] === tmp4.media) {
                  tmp22 = cResult[22];
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
                if (isSpoiler) {
                  class U {
                    constructor() {
                      return closure_1(true);
                    }
                  }
                }
                if (cResult[24] === source) {
                  class U {
                    constructor() {
                      return closure_1(true);
                    }
                  }
                }
                const obj4 = { source, style: tmp22, onLoadEnd: U, blurRadius: 0 };
                cResult[24] = source;
                cResult[25] = tmp22;
                cResult[26] = 0;
                cResult[27] = closure_15(ReanimatedRexportDefault.Image, obj4, source.uri);
                const tmp28 = closure_15(ReanimatedRexportDefault.Image, obj4, source.uri);
              }
            }
            const items = [tmp4.media, style, dimensions];
            cResult[19] = dimensions;
            cResult[20] = style;
            cResult[21] = tmp4.media;
            cResult[22] = items;
            tmp22 = items;
          }
          const obj6 = { style: tmp12, children: tmp14 };
          cResult[16] = tmp12;
          cResult[17] = tmp14;
          cResult[18] = closure_15(ReanimatedRexportDefault.View, obj6);
          const tmp21 = closure_15(ReanimatedRexportDefault.View, obj6);
        }
        const obj7 = { source: tmp8, style: tmp13 };
        const tmp17 = closure_15(FastImageDefault, obj7);
        cResult[13] = tmp13;
        cResult[14] = tmp8;
        cResult[15] = tmp17;
        tmp14 = tmp17;
      }
    }
    const items1 = [style, tmp4.media, dimensions];
    cResult[9] = dimensions;
    cResult[10] = style;
    cResult[11] = tmp4.media;
    cResult[12] = items1;
    tmp13 = items1;
  }
  const items2 = [animatedStyle, tmp4.thumbhashMedia];
  cResult[6] = animatedStyle;
  cResult[7] = tmp4.thumbhashMedia;
  cResult[8] = items2;
  tmp12 = items2;
}) : ((source) => {
  let closure_2;
  let dimensions;
  let imageFinishedLoading;
  let items1;
  let items2;
  let items4;
  let num;
  let obj4;
  let style;
  source = source.source;
  ({ dimensions, style } = source);
  imageFinishedLoading = undefined;
  dependencyMap = undefined;
  const isSpoiler = source.isSpoiler;
  const tmp = closure_18();
  [imageFinishedLoading, dependencyMap] = react.useState(false);
  let obj = source(4618);
  const fn = function h() {
    let num = 1;
    const withTiming = timing.withTiming;
    timing;
    if (first) {
      num = 0;
    }
    const obj = { opacity: withTiming(num, { duration: 150 }) };
    return obj;
  };
  let obj2 = { withTiming: source(4897).withTiming, imageFinishedLoading };
  fn.__closure = obj2;
  fn.__workletHash = 8852576862173;
  fn.__initData = __initData2;
  const items = [, , ];
  ({ height: arr[0], placeholder: arr[1], width: arr[2] } = source);
  const animatedStyle = obj.useAnimatedStyle(fn);
  const memo = react.useMemo(() => {
    let obj2;
    if (null != source.placeholder) {
      size = { uri: obj2.createThumbhashImageFromPlaceholder(source.placeholder), width: null, height: null };
      ({ width: obj.width, height: obj.height } = source);
      obj2 = ThumbhashUtils;
      return size;
    }
  }, items);
  const obj3 = { style: items1, children: closure_15(imageFinishedLoading(5981), obj4) };
  items1 = [animatedStyle, tmp.thumbhashMedia];
  const View = imageFinishedLoading(4618).View;
  obj4 = { source: memo, style: items2 };
  items2 = [style, tmp.media, dimensions];
  const items3 = [closure_15(View, obj3), ];
  const obj5 = {
    source,
    style: items4,
    onLoadEnd() {
      return closure_2(true);
    },
    blurRadius: num
  };
  items4 = [tmp.media, style, dimensions];
  num = 0;
  const Image = imageFinishedLoading(4618).Image;
  if (isSpoiler) {
    num = 100;
  }
  const obj6 = { children: items3 };
  items3[1] = closure_15(Image, obj5, source.uri);
  return closure_17(closure_16, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((handlePressMedia) => {
  let PlayIcon;
  let Text;
  let closure_4;
  let dimensions;
  let initialIndex;
  let isSpoiler;
  let items2;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  let ref;
  let source;
  let str2;
  let style;
  let useReducedMotion;
  let visible;
  let obj = initialIndex(ref[15]);
  const cResult = obj.c(33);
  ({ source, dimensions, initialIndex } = handlePressMedia);
  handlePressMedia = handlePressMedia.handlePressMedia;
  ({ style, visible } = handlePressMedia);
  const tmp4 = closure_18();
  ref = react.useRef(null);
  let flag = source.spoiler;
  const useState = react.useState;
  if (flag == null) {
    flag = false;
  }
  const tmp7 = isSpoiler(useState(flag), 2);
  isSpoiler = tmp7[0];
  react = tmp7[1];
  if (cResult[0] === handlePressMedia) {
    if (cResult[1] === initialIndex) {
      let tmp9;
      let tmp12;
      let tmp11;
      let tmp16;
      let tmp15;
      if (cResult[2] === isSpoiler) {
        tmp9 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ICYMIStore];
        class V {
          constructor() {
            return ICYMIStore.videosMuted();
          }
        }
        cResult[4] = items;
        cResult[5] = V;
        tmp12 = V;
        tmp11 = items;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult = initialIndex(ref[16]);
      const stateFromStores = tmpResult.useStateFromStores(tmp11, tmp12);
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AccessibilityStore];
        class G {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        cResult[6] = items1;
        cResult[7] = G;
        tmp16 = G;
        tmp15 = items1;
      } else {
        tmp15 = cResult[6];
        tmp16 = cResult[7];
      }
      const tmpResult5 = initialIndex(ref[16]);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp15, tmp16);
      if (cResult[8] === isSpoiler) {
        let tmp19;
        if (cResult[9] === tmp4) {
          tmp19 = cResult[10];
        }
        if (cResult[11] === isSpoiler) {
          if (cResult[12] === source) {
            if (cResult[13] === tmp4) {
              let tmp23;
              if (cResult[14] === stateFromStores1) {
                tmp23 = cResult[15];
              }
              if (cResult[16] === source) {
                if (cResult[17] === tmp4) {
                  let tmp28;
                  if (cResult[18] === stateFromStores) {
                    tmp28 = cResult[19];
                  }
                  if (cResult[20] === dimensions) {
                    if (cResult[21] === isSpoiler) {
                      if (cResult[22] === source) {
                        if (cResult[23] === style) {
                          if (cResult[26] === dimensions) {
                            if (cResult[27] === tmp9) {
                              if (cResult[28] === tmp19) {
                                if (cResult[29] === tmp23) {
                                  if (cResult[30] === tmp28) {
                                    let tmp36;
                                    if (cResult[31] === tmp31) {
                                      tmp36 = cResult[32];
                                    }
                                    return tmp36;
                                  }
                                }
                              }
                            }
                          }
                          class G {
                            constructor() {
                              return useReducedMotion.useReducedMotion;
                            }
                          }
                          const obj2 = { ref, onPress: tmp9, style: dimensions, children: items2 };
                          items2 = [tmp19, tmp23, tmp28, tmp31];
                          const tmp38 = closure_17(stateFromStores, obj2);
                          cResult[26] = dimensions;
                          cResult[27] = tmp9;
                          cResult[28] = tmp19;
                          cResult[29] = tmp23;
                          cResult[30] = tmp28;
                          cResult[31] = tmp31;
                          cResult[32] = tmp38;
                          tmp36 = tmp38;
                        }
                      }
                    }
                  }
                  initialIndex(ref[25]);
                  class G {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                  const obj3 = { source, style, dimensions, isSpoiler };
                  closure_15(closure_22, obj3);
                }
              }
              const tmpResult7 = initialIndex(ref[25]);
              class G {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              if (tmpResult7.isVideo(source.uri)) {
                if (!source.isGIFV) {
                  const urlMatchesFileExtension = initialIndex(ref[12]).urlMatchesFileExtension;
                  const sourceURI = source.sourceURI;
                  initialIndex(ref[12]);
                  class G {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                }
                class G {
                  constructor() {
                    return useReducedMotion.useReducedMotion;
                  }
                }
              }
              cResult[16] = source;
              cResult[17] = tmp4;
              cResult[18] = stateFromStores;
              cResult[19] = tmp29;
              tmp28 = tmp29;
            }
          }
        }
        let tmp24 = null != source.videoURI && !isSpoiler;
        class G {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        if (tmp24) {
          tmp24 = stateFromStores1;
        }
        if (tmp24) {
          const obj4 = { style: null, children: closure_15(closure_6, obj5) };
          class G {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          obj5 = { style: tmp4.videoIcon, children: closure_15(PlayIcon, obj6) };
          obj6 = { color: handlePressMedia(ref[11]).colors.REDESIGN_BUTTON_TERTIARY_TEXT, size: "lg" };
          PlayIcon = initialIndex(tmp2[24]).PlayIcon;
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
      if (tmp20) {
        const obj7 = { style: null, children: closure_15(closure_6, obj8) };
        class G {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        obj8 = { style: tmp4.spoilerText, children: closure_15(Text, obj9) };
        obj9 = { maxFontSizeMultiplier: 1, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: str2.toUpperCase() };
        Text = initialIndex(tmp2[22]).Text;
        const intl = initialIndex(tmp2[23]).intl;
        str2 = intl.string(initialIndex(ref[23]).t["F+x38C"]);
        tmp20 = closure_15(closure_6, obj7);
      }
      cResult[8] = isSpoiler;
      cResult[9] = tmp4;
      cResult[10] = tmp20;
      tmp19 = tmp20;
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
}) : ((handlePressMedia) => {
  let PlayIcon;
  let PressableOpacity;
  let Text;
  let closure_4;
  let dimensions;
  let initialIndex;
  let obj10;
  let obj12;
  let obj6;
  let obj7;
  let obj9;
  let source;
  let str;
  let tmp20Result;
  let useReducedMotion;
  ({ source, dimensions, initialIndex } = handlePressMedia);
  handlePressMedia = handlePressMedia.handlePressMedia;
  const style = handlePressMedia.style;
  let isSpoiler;
  react = undefined;
  let stateFromStores;
  const visible = handlePressMedia.visible;
  const tmp = closure_18();
  let obj = react;
  const ref = react.useRef(null);
  let flag = source.spoiler;
  const useState = react.useState;
  if (flag == null) {
    flag = false;
  }
  const tmp3 = isSpoiler(useState(flag), 2);
  isSpoiler = tmp3[0];
  react = tmp3[1];
  const items = [handlePressMedia, initialIndex, isSpoiler];
  const callback = obj.useCallback(() => {
    if (first) {
      closure_4(false);
    } else {
      const obj = { ref, initialIndex };
      handlePressMedia(obj);
    }
  }, items);
  const items1 = [ICYMIStore];
  const obj2 = initialIndex(ref[16]);
  stateFromStores = obj2.useStateFromStores(items1, () => ICYMIStore.videosMuted());
  const items2 = [AccessibilityStore];
  const obj4 = { ref, onPress: callback, style: dimensions, children: null };
  let tmp12 = isSpoiler;
  const obj3 = initialIndex(ref[16]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const tmp11 = stateFromStores;
  if (isSpoiler) {
    const obj5 = { style: tmp.centerContainer, children: closure_15(closure_6, obj6) };
    obj6 = { style: tmp.spoilerText, children: closure_15(Text, obj7) };
    obj7 = { maxFontSizeMultiplier: 1, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: str.toUpperCase() };
    Text = initialIndex(tmp7[22]).Text;
    const intl = initialIndex(tmp7[23]).intl;
    str = intl.string(initialIndex(ref[23]).t["F+x38C"]);
    tmp12 = closure_15(closure_6, obj5);
  }
  const items3 = [tmp12, , , ];
  let tmp15 = null != source.videoURI && !isSpoiler;
  if (tmp15) {
    let isGIFV = source.isGIFV;
    if (!isGIFV) {
      const tmp6Result = initialIndex(ref[12]);
      isGIFV = tmp6Result.urlMatchesFileExtension(source.sourceURI, initialIndex(tmp7[13]).GIF_RE_IOS);
    }
    tmp15 = !isGIFV;
  }
  if (tmp15) {
    tmp15 = stateFromStores1;
  }
  if (tmp15) {
    const obj8 = { style: tmp.centerContainer, children: closure_15(closure_6, obj9) };
    obj9 = { style: tmp.videoIcon, children: closure_15(PlayIcon, obj10) };
    obj10 = { color: handlePressMedia(ref[11]).colors.REDESIGN_BUTTON_TERTIARY_TEXT, size: "lg" };
    PlayIcon = initialIndex(tmp7[24]).PlayIcon;
    tmp15 = closure_15(closure_6, obj8);
  }
  items3[1] = tmp15;
  let tmp20Result2 = null;
  const tmp6Result5 = initialIndex(ref[25]);
  if (tmp6Result5.isVideo(source.uri)) {
    let isGIFV2 = source.isGIFV;
    if (!isGIFV2) {
      const tmp6Result6 = initialIndex(ref[12]);
      isGIFV2 = tmp6Result6.urlMatchesFileExtension(source.sourceURI, initialIndex(tmp7[13]).GIF_RE_IOS);
    }
    tmp20Result2 = null;
    if (!isGIFV2) {
      const items4 = [tmp.muteIcon, ];
      const obj11 = { style: tmp.absoluteContainer, children: closure_15(PressableOpacity, obj12) };
      obj12 = {
        style: items4,
        onPress() {
              const obj = ICYMIActionCreatorsDefault;
              return obj.setVideosMuted(!stateFromStores);
            },
        activeOpacity: 0.8,
        children: tmp20Result
      };
      items4[1] = stateFromStores ? tmp.iconBg : tmp.iconBgSelected;
      PressableOpacity = initialIndex(tmp7[26]).PressableOpacity;
      if (stateFromStores) {
        const obj13 = { color: handlePressMedia(ref[11]).colors.INTERACTIVE_TEXT_DEFAULT, size: "sm" };
        const VoiceXIcon = initialIndex(tmp7[28]).VoiceXIcon;
        tmp20Result = closure_15(VoiceXIcon, obj13);
      } else {
        const obj14 = { color: handlePressMedia(ref[11]).colors.BLACK, size: "sm" };
        const VoiceNormalIcon = initialIndex(tmp7[29]).VoiceNormalIcon;
        tmp20Result = closure_15(VoiceNormalIcon, obj14);
      }
      tmp20Result2 = closure_15(closure_6, obj11);
    }
  }
  items3[2] = tmp20Result2;
  const tmp6Result7 = initialIndex(ref[25]);
  if (tmp6Result7.isVideo(source.uri)) {
    let tmp25;
    if (null != source.videoURI) {
      size = { source, height: null, width: null, style, autoplay: visible };
      ({ height: obj20.height, width: obj20.width } = dimensions);
      tmp25 = closure_15(closure_19, size);
    }
    items3[3] = tmp25;
    obj4.children = items3;
    return closure_17(tmp11, obj4);
  } else {
    let isGIFV3 = source.isGIFV;
    if (!isGIFV3) {
      const tmp6Result8 = initialIndex(ref[12]);
      isGIFV3 = tmp6Result8.urlMatchesFileExtension(source.sourceURI, initialIndex(tmp7[13]).GIF_RE_IOS);
    }
  }
  tmp25 = closure_15(closure_22, { source, style, dimensions, isSpoiler });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((widthOverride) => {
  let handlePressMedia;
  let source;
  const obj = react2;
  const cResult = obj.c(13);
  ({ source, handlePressMedia } = widthOverride);
  widthOverride = widthOverride.widthOverride;
  const tmp2 = closure_18();
  const tmp3 = closure_31(widthOverride);
  if (cResult[0] === tmp2.imageRow) {
    let tmp4;
    if (cResult[1] === tmp2.topRow) {
      tmp4 = cResult[2];
    }
    const result = tmp3 / 1.5;
    if (cResult[3] === tmp3) {
      let tmp6;
      if (cResult[4] === result) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === handlePressMedia) {
        if (cResult[7] === source) {
          let tmp7;
          if (cResult[8] === tmp6) {
            tmp7 = cResult[9];
          }
          if (cResult[10] === tmp4) {
            let tmp11;
            if (cResult[11] === tmp7) {
              tmp11 = cResult[12];
            }
            return tmp11;
          }
          const obj2 = { style: tmp4, children: tmp7 };
          const tmp14 = closure_15(metroRequire, obj2);
          cResult[10] = tmp4;
          cResult[11] = tmp7;
          cResult[12] = tmp14;
          tmp11 = tmp14;
        }
      }
      const obj3 = { handlePressMedia, initialIndex: 0, source, dimensions: tmp6 };
      const tmp10 = closure_15(closure_23, obj3);
      cResult[6] = handlePressMedia;
      cResult[7] = source;
      cResult[8] = tmp6;
      cResult[9] = tmp10;
      tmp7 = tmp10;
    }
    size = { width: tmp3, height: result };
    cResult[3] = tmp3;
    cResult[4] = result;
    cResult[5] = size;
    tmp6 = size;
  }
  const items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp2);
  cResult[0] = tmp2.imageRow;
  cResult[1] = tmp2.topRow;
  cResult[2] = items;
  tmp4 = items;
}) : ((arg0) => {
  let handlePressMedia;
  let items;
  let obj2;
  let source;
  let widthOverride;
  ({ source, handlePressMedia, widthOverride } = arg0);
  const tmp = closure_18();
  const tmp2 = closure_31(widthOverride);
  const obj = { style: items, children: closure_15(closure_23, obj2) };
  items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  obj2 = { handlePressMedia, initialIndex: 0, source, dimensions: size };
  size = { width: tmp2, height: tmp2 / 1.5 };
  return closure_15(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((handlePressMedia) => {
  let closure_2;
  let end;
  let offset;
  let sources;
  let start;
  let obj = offset(576);
  const cResult = obj.c(16);
  ({ sources, start, end, offset } = handlePressMedia);
  handlePressMedia = handlePressMedia.handlePressMedia;
  const widthOverride = handlePressMedia.widthOverride;
  const tmp2 = closure_18();
  const tmp3 = closure_31(widthOverride);
  dependencyMap = tmp3;
  if (start) {
    start = tmp2.topRow;
  }
  if (end) {
    end = tmp2.bottomRow;
  }
  if (cResult[0] === tmp2.imageRow) {
    if (cResult[1] === start) {
      let tmp4;
      let tmp5;
      if (cResult[2] === end) {
        tmp4 = cResult[3];
      }
      if (cResult[4] === handlePressMedia) {
        if (cResult[5] === tmp3) {
          if (cResult[6] === offset) {
            if (cResult[7] === sources) {
              tmp5 = cResult[8];
            }
            if (cResult[13] === tmp4) {
              let tmp8;
              if (cResult[14] === tmp5) {
                tmp8 = cResult[15];
              }
              return tmp8;
            }
            const obj2 = { style: tmp4, children: tmp5 };
            const tmp11 = closure_15(closure_6, obj2);
            cResult[13] = tmp4;
            cResult[14] = tmp5;
            cResult[15] = tmp11;
            tmp8 = tmp11;
          }
        }
      }
      if (cResult[9] === handlePressMedia) {
        if (cResult[10] === tmp3) {
          let tmp6;
          if (cResult[11] === offset) {
            tmp6 = cResult[12];
          }
          const mapped = sources.map(tmp6);
          cResult[4] = handlePressMedia;
          cResult[5] = tmp3;
          cResult[6] = offset;
          cResult[7] = sources;
          cResult[8] = mapped;
          tmp5 = mapped;
        }
      }
      const fn = function s(source, arg1) {
        const obj = { handlePressMedia, initialIndex: offset + arg1, source, dimensions: size };
        size = { width: (closure_2 - 8) / 3, height: (closure_2 - 8) / 3 };
        return closure_15(closure_23, obj, offset + arg1);
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
}) : ((widthOverride) => {
  let end;
  let handlePressMedia;
  let sources;
  let start;
  ({ sources, start, end, offset: require, handlePressMedia: importDefault } = widthOverride);
  widthOverride = widthOverride.widthOverride;
  const tmp = closure_18();
  let closure_2 = closure_31(widthOverride);
  const items = [tmp.imageRow, , ];
  if (start) {
    start = tmp.topRow;
  }
  items[1] = start;
  if (end) {
    end = tmp.bottomRow;
  }
  let obj = {
    style: items,
    children: sources.map((source, index) => {
      const obj = { handlePressMedia: importDefault, initialIndex: require + index, source, dimensions: size };
      size = { width: (closure_2 - 8) / 3, height: (closure_2 - 8) / 3 };
      return closure_15(closure_23, obj, require + index);
    })
  };
  items[2] = end;
  return closure_15(closure_6, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((end) => {
  let dimensions;
  let handlePressMedia;
  let sources;
  let obj = handlePressMedia(576);
  const cResult = obj.c(17);
  ({ sources, handlePressMedia } = end);
  let bottomRow = end.end;
  const widthOverride = end.widthOverride;
  const tmp2 = closure_18();
  const tmp3 = closure_31(widthOverride);
  const result = (tmp3 - 4) / 2;
  const result1 = (tmp3 - 4) / 2 / 0.75;
  if (cResult[0] === result) {
    let tmp6;
    if (cResult[1] === result1) {
      tmp6 = cResult[2];
    }
    importDefault = tmp6;
    if (bottomRow) {
      bottomRow = tmp2.bottomRow;
    }
    if (cResult[3] === tmp2.imageRow) {
      if (cResult[4] === tmp2.topRow) {
        let tmp7;
        let tmp8;
        if (cResult[5] === bottomRow) {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === handlePressMedia) {
            if (cResult[9] === sources) {
              tmp8 = cResult[10];
            }
            if (cResult[14] === tmp7) {
              let tmp11;
              if (cResult[15] === tmp8) {
                tmp11 = cResult[16];
              }
              return tmp11;
            }
            class R {
              constructor(arg0, arg1) {
                obj = { handlePressMedia, initialIndex: arg1, source: end, dimensions: closure_1 };
                return jsx(f74018, obj, arg1);
              }
            }
            const obj2 = { style: tmp7, children: tmp8 };
            const tmp13 = closure_15(closure_6, obj2);
            cResult[14] = tmp7;
            cResult[15] = tmp8;
            cResult[16] = tmp13;
            tmp11 = tmp13;
          }
        }
        if (cResult[11] === tmp6) {
          let tmp9;
          if (cResult[12] === handlePressMedia) {
            tmp9 = cResult[13];
          }
          const mapped = sources.map(tmp9);
          class R {
            constructor(arg0, arg1) {
              obj = { handlePressMedia, initialIndex: arg1, source: end, dimensions: closure_1 };
              return jsx(f74018, obj, arg1);
            }
          }
          cResult[8] = handlePressMedia;
          cResult[9] = sources;
          cResult[10] = mapped;
          tmp8 = mapped;
        }
        class R {
          constructor(arg0, arg1) {
            obj = { handlePressMedia, initialIndex: arg1, source: end, dimensions: closure_1 };
            return jsx(f74018, obj, arg1);
          }
        }
        cResult[11] = tmp6;
        cResult[12] = handlePressMedia;
        cResult[13] = R;
        tmp9 = R;
      }
    }
    const items = [, , ];
    ({ imageRow: arr[0], topRow: arr[1] } = tmp2);
    items[2] = bottomRow;
    ({ imageRow: tmp[3], topRow: tmp[4] } = tmp2);
    cResult[5] = bottomRow;
    cResult[6] = items;
    tmp7 = items;
  }
  size = { width: result, height: result1 };
  cResult[0] = result;
  cResult[1] = result1;
  cResult[2] = size;
  tmp6 = size;
}) : ((widthOverride) => {
  let end;
  let handlePressMedia;
  let sources;
  ({ sources, handlePressMedia: require, end } = widthOverride);
  widthOverride = widthOverride.widthOverride;
  const tmp = closure_18();
  const tmp2 = closure_31(widthOverride);
  size = { width: (tmp2 - 4) / 2, height: (tmp2 - 4) / 2 / 0.75 };
  const items = [, , ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  if (end) {
    end = tmp.bottomRow;
  }
  let obj = {
    style: items,
    children: sources.map((source, initialIndex) => {
      const obj = { handlePressMedia: require, initialIndex, source, dimensions: size };
      return closure_15(closure_23, obj, initialIndex);
    })
  };
  items[2] = end;
  return closure_15(closure_6, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((widthOverride) => {
  let handlePressMedia;
  let items;
  let items1;
  let sources;
  const obj = react2;
  const cResult = obj.c(35);
  ({ sources, handlePressMedia } = widthOverride);
  widthOverride = widthOverride.widthOverride;
  const tmp2 = closure_18();
  const tmp3 = closure_31(widthOverride);
  if (cResult[0] === tmp2.imageRow) {
    let tmp4;
    if (cResult[1] === tmp2.imagesContainer) {
      tmp4 = cResult[2];
    }
    const diff = 2 * tmp3 / 3 - 4;
    const result = 2 * tmp3 / 3;
    if (cResult[3] === diff) {
      let tmp7;
      if (cResult[4] === result) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === handlePressMedia) {
        if (cResult[7] === sources[0]) {
          let tmp8;
          if (cResult[8] === tmp7) {
            tmp8 = cResult[9];
          }
          if (cResult[10] === tmp2.leftColumn) {
            let tmp12;
            if (cResult[11] === tmp8) {
              tmp12 = cResult[12];
            }
            const result1 = tmp3 / 3;
            const result2 = tmp3 / 3;
            if (cResult[13] === result1) {
              let tmp18;
              if (cResult[14] === result2) {
                tmp18 = cResult[15];
              }
              if (cResult[16] === handlePressMedia) {
                if (cResult[17] === sources[1]) {
                  let tmp19;
                  if (cResult[18] === tmp18) {
                    tmp19 = cResult[19];
                  }
                  const result3 = tmp3 / 3;
                  const result4 = tmp3 / 3;
                  if (cResult[20] === result3) {
                    let tmp25;
                    if (cResult[21] === result4) {
                      tmp25 = cResult[22];
                    }
                    if (cResult[23] === handlePressMedia) {
                      if (cResult[24] === sources[2]) {
                        let tmp26;
                        if (cResult[25] === tmp25) {
                          tmp26 = cResult[26];
                        }
                        if (cResult[27] === tmp2.rightColumn) {
                          if (cResult[28] === tmp19) {
                            let tmp30;
                            if (cResult[29] === tmp26) {
                              tmp30 = cResult[30];
                            }
                            if (cResult[31] === tmp4) {
                              if (cResult[32] === tmp30) {
                                let tmp34;
                                if (cResult[33] === tmp12) {
                                  tmp34 = cResult[34];
                                }
                                return tmp34;
                              }
                            }
                            const obj2 = { style: tmp4, children: items };
                            items = [tmp12, tmp30];
                            const tmp37 = closure_17(metroRequire, obj2);
                            cResult[31] = tmp4;
                            cResult[32] = tmp30;
                            cResult[33] = tmp12;
                            cResult[34] = tmp37;
                            tmp34 = tmp37;
                          }
                        }
                        const obj3 = { style: tmp2.rightColumn, children: items1 };
                        items1 = [tmp19, tmp26];
                        const tmp33 = closure_17(metroRequire, obj3);
                        cResult[27] = tmp2.rightColumn;
                        cResult[28] = tmp19;
                        cResult[29] = tmp26;
                        cResult[30] = tmp33;
                        tmp30 = tmp33;
                      }
                    }
                    const obj4 = { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: tmp25 };
                    const tmp29 = closure_15(closure_23, obj4);
                    cResult[23] = handlePressMedia;
                    cResult[24] = sources[2];
                    cResult[25] = tmp25;
                    cResult[26] = tmp29;
                    tmp26 = tmp29;
                  }
                  size = { width: result3, height: result4 };
                  cResult[20] = result3;
                  cResult[21] = result4;
                  cResult[22] = size;
                  tmp25 = size;
                }
              }
              const obj5 = { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: tmp18 };
              const tmp22 = closure_15(closure_23, obj5);
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
          const tmp15 = closure_15(metroRequire, obj6);
          cResult[10] = tmp2.leftColumn;
          cResult[11] = tmp8;
          cResult[12] = tmp15;
          tmp12 = tmp15;
        }
      }
      const obj7 = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: tmp7 };
      const tmp11 = closure_15(closure_23, obj7);
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
  const items2 = [, ];
  ({ imagesContainer: arr[0], imageRow: arr[1] } = tmp2);
  cResult[0] = tmp2.imageRow;
  cResult[1] = tmp2.imagesContainer;
  cResult[2] = items2;
  tmp4 = items2;
}) : ((widthOverride) => {
  let handlePressMedia;
  let items;
  let items1;
  let items2;
  let obj3;
  let sources;
  ({ sources, handlePressMedia } = widthOverride);
  widthOverride = widthOverride.widthOverride;
  const tmp = closure_18();
  const tmp2 = closure_31(widthOverride);
  const obj = { style: items, children: items1 };
  items = [, ];
  ({ imagesContainer: arr[0], imageRow: arr[1] } = tmp);
  const obj2 = { style: tmp.leftColumn, children: closure_15(closure_23, obj3) };
  obj3 = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: size };
  size = { width: 2 * tmp2 / 3 - 4, height: 2 * tmp2 / 3 };
  items1 = [closure_15(metroRequire, obj2), ];
  const obj4 = { style: tmp.rightColumn, children: items2 };
  items2 = [, ];
  const obj5 = { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: { width: tmp2 / 3, height: tmp2 / 3 } };
  items2[0] = closure_15(closure_23, obj5);
  const obj6 = { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: { width: tmp2 / 3, height: tmp2 / 3 } };
  items2[1] = closure_15(closure_23, obj6);
  items1[1] = closure_17(metroRequire, obj4);
  return closure_17(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((widthOverride) => {
  let handlePressMedia;
  let items;
  let items1;
  let items3;
  let sources;
  const obj = react2;
  const cResult = obj.c(37);
  ({ sources, handlePressMedia } = widthOverride);
  widthOverride = widthOverride.widthOverride;
  const tmp2 = closure_18();
  const tmp3 = closure_31(widthOverride);
  const diff = tmp3 / 2 - 4;
  const result = (tmp3 / 2 - 4) / 1.5;
  if (cResult[0] === diff) {
    let tmp6;
    if (cResult[1] === result) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp2.imageRow) {
      let tmp7;
      if (cResult[4] === tmp2.topRow) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === handlePressMedia) {
          let tmp8;
          if (cResult[8] === sources[0]) {
            tmp8 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            if (cResult[11] === handlePressMedia) {
              let tmp12;
              if (cResult[12] === sources[1]) {
                tmp12 = cResult[13];
              }
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp8) {
                  let tmp16;
                  if (cResult[16] === tmp12) {
                    tmp16 = cResult[17];
                  }
                  if (cResult[18] === tmp2.bottomRow) {
                    let tmp20;
                    if (cResult[19] === tmp2.imageRow) {
                      tmp20 = cResult[20];
                    }
                    if (cResult[21] === tmp6) {
                      if (cResult[22] === handlePressMedia) {
                        let tmp21;
                        if (cResult[23] === sources[2]) {
                          tmp21 = cResult[24];
                        }
                        if (cResult[25] === tmp6) {
                          if (cResult[26] === handlePressMedia) {
                            let tmp25;
                            if (cResult[27] === sources[3]) {
                              tmp25 = cResult[28];
                            }
                            if (cResult[29] === tmp25) {
                              if (cResult[30] === tmp20) {
                                let tmp29;
                                if (cResult[31] === tmp21) {
                                  tmp29 = cResult[32];
                                }
                                if (cResult[33] === tmp2.imagesContainer) {
                                  if (cResult[34] === tmp29) {
                                    let tmp33;
                                    if (cResult[35] === tmp16) {
                                      tmp33 = cResult[36];
                                    }
                                    return tmp33;
                                  }
                                }
                                const obj2 = { style: tmp2.imagesContainer, children: items };
                                items = [tmp16, tmp29];
                                const tmp36 = closure_17(metroRequire, obj2);
                                cResult[33] = tmp2.imagesContainer;
                                cResult[34] = tmp29;
                                cResult[35] = tmp16;
                                cResult[36] = tmp36;
                                tmp33 = tmp36;
                              }
                            }
                            const obj3 = { style: tmp20, children: items1 };
                            items1 = [tmp21, tmp25];
                            const tmp32 = closure_17(metroRequire, obj3);
                            cResult[29] = tmp25;
                            cResult[30] = tmp20;
                            cResult[31] = tmp21;
                            cResult[32] = tmp32;
                            tmp29 = tmp32;
                          }
                        }
                        const obj4 = { handlePressMedia, initialIndex: 3, source: sources[3], dimensions: tmp6 };
                        const tmp28 = closure_15(closure_23, obj4);
                        cResult[25] = tmp6;
                        cResult[26] = handlePressMedia;
                        cResult[27] = sources[3];
                        cResult[28] = tmp28;
                        tmp25 = tmp28;
                      }
                    }
                    const obj5 = { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: tmp6 };
                    const tmp24 = closure_15(closure_23, obj5);
                    cResult[21] = tmp6;
                    cResult[22] = handlePressMedia;
                    cResult[23] = sources[2];
                    cResult[24] = tmp24;
                    tmp21 = tmp24;
                  }
                  const items2 = [, ];
                  ({ imageRow: arr3[0], bottomRow: arr3[1] } = tmp2);
                  cResult[18] = tmp2.bottomRow;
                  cResult[19] = tmp2.imageRow;
                  cResult[20] = items2;
                  tmp20 = items2;
                }
              }
              const obj6 = { style: tmp7, children: items3 };
              items3 = [tmp8, tmp12];
              const tmp19 = closure_17(metroRequire, obj6);
              cResult[14] = tmp7;
              cResult[15] = tmp8;
              cResult[16] = tmp12;
              cResult[17] = tmp19;
              tmp16 = tmp19;
            }
          }
          const obj7 = { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: tmp6 };
          const tmp15 = closure_15(closure_23, obj7);
          cResult[10] = tmp6;
          cResult[11] = handlePressMedia;
          cResult[12] = sources[1];
          cResult[13] = tmp15;
          tmp12 = tmp15;
        }
      }
      const obj8 = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: tmp6 };
      const tmp11 = closure_15(closure_23, obj8);
      cResult[6] = tmp6;
      cResult[7] = handlePressMedia;
      cResult[8] = sources[0];
      cResult[9] = tmp11;
      tmp8 = tmp11;
    }
    const items4 = [, ];
    ({ imageRow: arr[0], topRow: arr[1] } = tmp2);
    ({ imageRow: tmp[3], topRow: tmp[4] } = tmp2);
    cResult[5] = items4;
    tmp7 = items4;
  }
  size = { width: diff, height: result };
  cResult[0] = diff;
  cResult[1] = result;
  cResult[2] = size;
  tmp6 = size;
}) : ((widthOverride) => {
  let handlePressMedia;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let sources;
  ({ sources, handlePressMedia } = widthOverride);
  widthOverride = widthOverride.widthOverride;
  const tmp = closure_18();
  const tmp2 = closure_31(widthOverride);
  size = { width: tmp2 / 2 - 4, height: (tmp2 / 2 - 4) / 1.5 };
  const obj2 = { style: items, children: items1 };
  items = [, ];
  const obj = { style: tmp.imagesContainer, children: items2 };
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  items1 = [, ];
  const obj3 = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: size };
  items1[0] = closure_15(closure_23, obj3);
  const obj4 = { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: size };
  items1[1] = closure_15(closure_23, obj4);
  items2 = [closure_17(metroRequire, obj2), ];
  const obj5 = { style: items3, children: items4 };
  items3 = [, ];
  ({ imageRow: arr4[0], bottomRow: arr4[1] } = tmp);
  items4 = [, ];
  const obj6 = { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: size };
  items4[0] = closure_15(closure_23, obj6);
  const obj7 = { handlePressMedia, initialIndex: 3, source: sources[3], dimensions: size };
  items4[1] = closure_15(closure_23, obj7);
  items2[1] = closure_17(metroRequire, obj5);
  return closure_17(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((widthOverride) => {
  let handlePressMedia;
  let initialIndex;
  let source;
  let tmp5;
  let visible;
  const obj = react2;
  const cResult = obj.c(19);
  ({ source, initialIndex, handlePressMedia, visible } = widthOverride);
  widthOverride = widthOverride.widthOverride;
  const tmp2 = closure_18();
  const tmp3 = closure_31(widthOverride);
  const result = source.width / source.height;
  if (result >= 1) {
    const _Math = Math;
    const bound = Math.min(source.width, tmp3);
    const result1 = bound / result;
    if (cResult[0] === result1) {
      let tmp11;
      if (cResult[1] === bound) {
        tmp11 = cResult[2];
      }
      tmp5 = tmp11;
    }
    size = { height: result1, width: bound };
    cResult[0] = result1;
    cResult[1] = bound;
    cResult[2] = size;
    tmp11 = size;
  } else {
    const _Math2 = Math;
    const bound1 = Math.min(source.height, 330);
    const result2 = bound1 * result;
    if (result2 > tmp3) {
      const result3 = tmp3 / result;
      if (cResult[3] === tmp3) {
        let tmp7;
        if (cResult[4] === result3) {
          tmp7 = cResult[5];
        }
        tmp5 = tmp7;
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
  }
  if (cResult[9] === handlePressMedia) {
    if (cResult[10] === tmp5) {
      if (cResult[11] === initialIndex) {
        if (cResult[12] === source) {
          if (cResult[13] === tmp2.singleImage) {
            let tmp12;
            if (cResult[14] === visible) {
              tmp12 = cResult[15];
            }
            if (cResult[16] === tmp2.imagesContainer) {
              let tmp14;
              if (cResult[17] === tmp12) {
                tmp14 = cResult[18];
              }
              return tmp14;
            }
            const obj2 = { style: tmp2.imagesContainer, children: tmp12 };
            const tmp17 = closure_15(metroRequire, obj2);
            cResult[16] = tmp2.imagesContainer;
            cResult[17] = tmp12;
            cResult[18] = tmp17;
            tmp14 = tmp17;
          }
        }
      }
    }
  }
  const obj3 = { handlePressMedia, initialIndex, source, dimensions: tmp5, style: tmp2.singleImage, visible };
  const tmp13 = closure_15(closure_23, obj3);
  cResult[9] = handlePressMedia;
  cResult[10] = tmp5;
  cResult[11] = initialIndex;
  cResult[12] = source;
  cResult[13] = tmp2.singleImage;
  cResult[14] = visible;
  cResult[15] = tmp13;
  tmp12 = tmp13;
}) : ((source) => {
  let handlePressMedia;
  let initialIndex;
  let obj2;
  let visible;
  let widthOverride;
  source = source.source;
  ({ initialIndex, handlePressMedia, visible, widthOverride } = source);
  const tmp = closure_18();
  const tmp2 = closure_31(widthOverride);
  let closure_1 = tmp2;
  const items = [, , ];
  ({ width: arr[0], height: arr[1] } = source);
  items[2] = tmp2;
  const obj = { style: tmp.imagesContainer, children: closure_15(closure_23, obj2) };
  obj2 = {
    handlePressMedia,
    initialIndex,
    source,
    dimensions: react.useMemo(() => {
      size = source;
      const result = source.width / source.height;
      if (result >= 1) {
        const _Math2 = Math;
        const bound = Math.min(size.width, width);
        const size1 = { height: bound / result, width: bound };
        return size1;
      } else {
        let size3;
        const _Math = Math;
        const bound1 = Math.min(size.height, 330);
        const result1 = bound1 * result;
        if (result1 > width) {
          const size2 = { width, height: width / result };
          size3 = size2;
        } else {
          size3 = { width: result1, height: bound1 };
        }
        return size3;
      }
    }, items),
    style: tmp.singleImage,
    visible
  };
  return closure_15(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr;
  let handlePressMedia;
  let sources;
  let sum;
  let visible;
  let widthOverride;
  let obj = handlePressMedia(arr[15]);
  const cResult = obj.c(26);
  ({ sources, handlePressMedia } = arg0);
  ({ visible, widthOverride } = arg0);
  const tmp2 = closure_18();
  if (cResult[0] === sources.length) {
    if (cResult[1] === sources) {
      arr = cResult[2];
    }
    if (0 === sources.length) {
      return null;
    } else if (1 === sources.length) {
      if (cResult[6] === handlePressMedia) {
        if (cResult[7] === sources[0]) {
          if (cResult[8] === visible) {
            let tmp23;
            if (cResult[9] === widthOverride) {
              tmp23 = cResult[10];
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
    } else if (3 === sources.length) {
      if (cResult[11] === handlePressMedia) {
        if (cResult[12] === sources) {
          let tmp19;
          if (cResult[13] === widthOverride) {
            tmp19 = cResult[14];
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
    } else if (4 === sources.length) {
      if (cResult[15] === handlePressMedia) {
        if (cResult[16] === sources) {
          let tmp15;
          if (cResult[17] === widthOverride) {
            tmp15 = cResult[18];
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
          let tmp9;
          if (cResult[21] === widthOverride) {
            tmp9 = cResult[22];
          }
          if (cResult[23] === tmp2.imagesContainer) {
            let tmp11;
            if (cResult[24] === tmp9) {
              tmp11 = cResult[25];
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
          return closure_15(closure_24, obj2, index);
        } else if (2 === sources.length) {
          const obj3 = { widthOverride, sources, handlePressMedia, end: index === arr.length - 1 };
          return closure_15(closure_26, obj3, index);
        } else {
          let num = 0;
          if (0 !== index) {
            num = arr[0].length + 3 * (index - 1);
          }
          const obj = { widthOverride, handlePressMedia, offset: num, sources, start: 0 === index, end: index === arr.length - 1 };
          return closure_15(closure_25, obj, index);
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
    let tmp4;
    if (cResult[4] === sources) {
      tmp4 = cResult[5];
    }
    const items = [];
    items.push(tmp4);
    if (num < sources.length) {
      do {
        sum = num + 3;
        let arr4 = items.push(sources.slice(num, sum));
        num = sum;
      } while (sum < sources.length);
    }
    cResult[0] = sources.length;
    cResult[1] = sources;
    cResult[2] = items;
    arr = items;
  }
  const substr = sources.slice(0, num);
  cResult[3] = num;
  cResult[4] = sources;
  cResult[5] = substr;
  tmp4 = substr;
}) : ((sources) => {
  sources = sources.sources;
  const handlePressMedia = sources.handlePressMedia;
  const widthOverride = sources.widthOverride;
  let memo;
  const length = sources.length;
  const visible = sources.visible;
  let items = [length, sources];
  const tmp = closure_18();
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
  let tmp2 = null;
  if (0 !== length) {
    let tmp5;
    if (1 === length) {
      let obj2 = { widthOverride, initialIndex: 0, handlePressMedia, source: sources[0], visible };
      tmp5 = closure_15(closure_29, obj2);
    } else if (3 === length) {
      let obj3 = { widthOverride, handlePressMedia, sources };
      tmp5 = closure_15(closure_27, obj3);
    } else {
      let num = 4;
      if (4 === length) {
        const obj4 = { widthOverride, handlePressMedia, sources };
        tmp5 = closure_15(closure_28, obj4);
      } else {
        let obj = {
          style: tmp.imagesContainer,
          children: memo.map((sources, index) => {
                  if (1 === sources.length) {
                    const obj2 = { handlePressMedia, source: sources[0] };
                    return closure_15(closure_24, obj2, index);
                  } else if (2 === sources.length) {
                    const obj3 = { widthOverride, sources, handlePressMedia, end: index === memo.length - 1 };
                    return closure_15(closure_26, obj3, index);
                  } else {
                    let num = 0;
                    if (0 !== index) {
                      num = memo[0].length + 3 * (index - 1);
                    }
                    const obj = { widthOverride, handlePressMedia, offset: num, sources, start: 0 === index, end: index === memo.length - 1 };
                    return closure_15(closure_25, obj, index);
                  }
                })
        };
        tmp5 = closure_15(closure_6, obj);
      }
    }
    tmp2 = tmp5;
  }
  return tmp2;
});
let closure_30 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let diff = arg0;
  const context = react.useContext(ICYMIContext.ICYMIContext);
  if (null == arg0) {
    let width;
    if (context != null) {
      width = context.width;
    }
    diff = width - context.inset - 2 * context.margin;
  }
  return diff;
}) : ((arg0) => {
  let diff = arg0;
  const context = react.useContext(ICYMIContext.ICYMIContext);
  if (null == arg0) {
    let width;
    if (context != null) {
      width = context.width;
    }
    diff = width - context.inset - 2 * context.margin;
  }
  return diff;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let constants2;
  let constants3;
  let first;
  let handlePressMedia;
  let itemType;
  let length;
  let tmp11;
  let tmp13;
  let tmp22;
  let tmp23;
  let tmp7;
  let obj = message(itemType[15]);
  const cResult = obj.c(34);
  message = message.message;
  const widthOverride = message.widthOverride;
  itemType = message.itemType;
  let visible = message.visible;
  closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== message) {
    const fn = function c() {
      return ChannelStore.getChannel(message.getChannelId());
    };
    cResult[1] = message;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = message(itemType[16]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmp9 = stateFromStores;
  const tmp10 = stateFromStores(react.useState(false), 2);
  [tmp11, react] = tmp10;
  visible = !tmp11 && visible;
  if (cResult[3] !== message) {
    const tmpResult3 = message(itemType[31]);
    const result = tmpResult3.extractMediaSourcesFromMessage(message, message, undefined, tmp(tmp2[32]).GRAVITY_VALID_EMBED_TYPES);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(cResult) {
          const obj = message(itemType[31]);
          return obj.flattenSource(cResult);
        }
      }
      cResult[6] = B;
    } else {
      class B {
        constructor(cResult) {
          const obj = message(itemType[31]);
          return obj.flattenSource(cResult);
        }
      }
    }
    const mapped = result.map(B);
    const found = mapped.filter(tmp(tmp2[33]).isNotNullish);
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor(accessoryType) {
          return "embed" === accessoryType.accessoryType;
        }
      }
      cResult[7] = N;
    } else {
      class N {
        constructor(accessoryType) {
          return "embed" === accessoryType.accessoryType;
        }
      }
    }
    const tmpResult4 = message(itemType[34]);
    const partitionResult = tmpResult4.partition(found, N);
    cResult[3] = message;
    cResult[4] = found;
    cResult[5] = partitionResult;
    tmp13 = partitionResult;
  } else {
    class N {
      constructor(accessoryType) {
        return "embed" === accessoryType.accessoryType;
      }
    }
    tmp13 = cResult[5];
  }
  [tmp22, tmp23] = tmp9(tmp13, 2);
  tmp9(tmp13, 2);
  if (cResult[8] === tmp22) {
    class N {
      constructor(accessoryType) {
        return "embed" === accessoryType.accessoryType;
      }
    }
  }
  let obj2 = { allMediaSources: tmp12, nonEmbedSources: tmp23, embedSources: tmp22 };
  cResult[8] = tmp22;
  cResult[9] = tmp12;
  cResult[10] = tmp23;
  cResult[11] = obj2;
}) : ((message) => {
  let _undefined;
  let c4;
  let constants2;
  let constants3;
  let items3;
  let tmp4;
  let tmp9Result;
  message = message.message;
  const widthOverride = message.widthOverride;
  const itemType = message.itemType;
  react = undefined;
  let handlePressMedia;
  const tmp = closure_18();
  let obj = message(itemType[16]);
  let items = [handlePressMedia];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(message.getChannelId()));
  let obj2 = react;
  [tmp4, c4] = stateFromStores(react.useState(false), 2);
  const visible = tmp5;
  const items1 = [message];
  stateFromStores(react.useState(false), 2);
  const memo = obj2.useMemo(() => {
    let obj = MediaSourceUtil;
    const result = obj.extractMediaSourcesFromMessage(message, message, undefined, ICYMITypes.GRAVITY_VALID_EMBED_TYPES);
    const mapped = result.map((item) => {
      const obj = message(itemType[31]);
      return obj.flattenSource(item);
    });
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const obj2 = _mod12;
    const tmp2 = _slicedToArray(obj2.partition(found, (accessoryType) => "embed" === accessoryType.accessoryType), 2);
    return { allMediaSources: found, nonEmbedSources: tmp2[1], embedSources: tmp2[0] };
  }, items1);
  const allMediaSources = memo.allMediaSources;
  const nonEmbedSources = memo.nonEmbedSources;
  const embedSources = memo.embedSources;
  const items2 = [, , , , ];
  ({ channel_id: arr5[0], id: arr5[1] } = message);
  items2[2] = allMediaSources;
  items2[3] = stateFromStores;
  items2[4] = itemType;
  handlePressMedia = obj2.useCallback((arg0) => {
    let initialIndex;
    let ref;
    let str;
    let items;
    ({ ref, initialIndex } = arg0);
    let obj = widthOverride(itemType[27]);
    obj.itemInteracted(items.id, "message", "press_media");
    const obj2 = widthOverride(itemType[27]);
    const obj3 = { itemId: items.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "media_mosaic", actionIntentType: "open", actionDestinationType: null } };
    obj2.feedItemActioned(obj3);
    const obj4 = message(itemType[35]);
    const obj5 = { page: constants3.ICYMI, object: constants2.ACK_MEDIA_VIEWED, objectType: constants.ACK_SEMI_AUTOMATIC };
    obj4.ack(items.channel_id, obj5, true, true, items.id);
    items = [];
    const item = allMediaSources.forEach((item) => {
      const push = items.push;
      const obj = { embedURI: undefined };
      const merged = Object.assign(item);
      push(obj);
    });
    _undefined(true);
    const obj6 = {
      disableDownload: false,
      initialSources: items,
      initialIndex,
      analyticsSource: "Channel",
      channelId: items.channel_id,
      contextName: str,
      contextIcon: "r",
      originViewOrOriginLayout: ref.current,
      onClose() {
        return _undefined(false);
      }
    };
    str = "";
    const openMediaModal = message(itemType[36]).openMediaModal;
    message(itemType[36]);
    if (null != stateFromStores) {
      const tmp4Result = message(itemType[37]);
      str = tmp4Result.computeChannelName(tmp9, UserStore, RelationshipStore);
    }
    openMediaModal(obj6);
  }, items2);
  if (0 !== nonEmbedSources.length) {
    let obj3 = { style: tmp.container, children: items3 };
    let obj4 = { widthOverride, sources: nonEmbedSources, handlePressMedia, visible: !tmp4 && visible };
    items3 = [closure_15(closure_30, obj4), ];
    let mapped;
    const tmp10 = allMediaSources;
    if (embedSources != null) {
      mapped = embedSources.map((source, index) => {
        const obj = { widthOverride, handlePressMedia, initialIndex: index + nonEmbedSources.length, source, visible };
        return closure_15(closure_29, obj, "gif-" + index);
      });
    }
    items3[1] = mapped;
    const _HermesInternal = HermesInternal;
    let str = "message-image-";
    tmp9Result = closure_17(tmp10, obj3, "message-image-" + message.id);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/media/ICYMIMediaMosaic.tsx");

export default tmp6;
export const GravityAttachmentMediaMosaic = tmp5;