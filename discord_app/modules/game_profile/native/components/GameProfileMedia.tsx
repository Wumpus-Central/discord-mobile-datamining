// === Module 9310: GameProfileMedia ===

// Module 9310 (GameProfileMedia)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import openMediaModal from "openMediaModal" /* 8751 */;
import useMediaViewerSources from "useMediaViewerSources" /* 8752 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9245 */;
import GameProfileMediaSources from "GameProfileMediaSources" /* 9311 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;

require = fn;
function keyExtractor(originalUrl, arg1) {
  return "" + originalUrl.originalUrl + "-" + arg1;
}
function getItemType(type) {
  if ("trailer" === type.type) {
    const _HermesInternal = HermesInternal;
    type = "trailer-" + type.originalUrl;
  } else {
    type = type.type;
  }
  return type;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
const NOOP = fn(1095).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
let PX_16 = nativeDefault.space.PX_16;
let closure_14 = 2 * (fn(9311).MEDIA_ITEM_MAX_WIDTH + PX_12);
const createStyles = fn(4972);
let obj = { container: { gap: nativeDefault.space.PX_12, marginHorizontal: -nativeDefault.space.PX_16 }, list: { overflow: "visible" }, separator: { width: PX_12 }, listPadding: { width: PX_16 }, mediaItem: null, mediaImage: null, portraitImage: null, imageBackdrop: null, mediaVideo: null, reducedMotionPoster: null, playIconWrapper: null };
let obj3 = { gap: nativeDefault.space.PX_12, marginHorizontal: -nativeDefault.space.PX_16 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj.mediaItem = { maxWidth: fn(9311).MEDIA_ITEM_MAX_WIDTH, maxHeight: fn(9311).MEDIA_ITEM_MAX_HEIGHT, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
obj.portraitImage = { resizeMode: "contain" };
let obj5 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let items = [{ scale: 1.2 }];
obj5.transform = items;
obj.imageBackdrop = obj5;
let size = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj.mediaVideo = size;
let obj6 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6.resizeMode = "cover";
obj.reducedMotionPoster = obj6;
let obj7 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj.playIconWrapper = obj7;
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function Separator() {
  const cResult = c.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = React6(hasOwnProperty, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function Separator() {
  return React6(hasOwnProperty, { style: closure_15().separator });
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ListPadding() {
  const cResult = c.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.listPadding) {
    const obj2 = { style: tmp2.listPadding };
    const tmp6 = React6(hasOwnProperty, obj2);
    cResult[0] = tmp2.listPadding;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ListPadding() {
  return React6(hasOwnProperty, { style: closure_15().listPadding });
});
ReactCompilerGating = fn(558);
let closure_20 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ImageItem(index) {
  const cResult = recordDimensions(sources[10]).c(34);
  ({ url, accessibilityLabel, recordDimensions } = index);
  index = index.index;
  sources = index.sources;
  const trackAction = index.trackAction;
  ({ width, height, onScrollToIndex } = index);
  const setMediaModalOpen = index.setMediaModalOpen;
  const tmp3 = closure_15();
  const ref = onScrollToIndex.useRef(null);
  let size = sources[index];
  if (cResult[0] === recordDimensions) {
    if (cResult[1] === size.uri) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === index) {
      if (cResult[4] === onScrollToIndex) {
        if (cResult[5] === setMediaModalOpen) {
          if (cResult[6] === sources) {
            if (cResult[7] === trackAction) {
              let tmp7 = cResult[8];
            }
            if (cResult[9] === height) {
              if (cResult[10] === width) {
                let tmp8 = cResult[11];
              }
              if (cResult[12] === tmp3.mediaItem) {
                if (cResult[13] === tmp8) {
                  let tmp10 = cResult[14];
                }
                if (cResult[15] === tmp5) {
                  if (cResult[16] === tmp3.imageBackdrop) {
                    if (cResult[17] === url) {
                      let tmp12 = cResult[18];
                    }
                    if (cResult[19] !== url) {
                      const obj2 = { uri: url };
                      class A {
                        constructor() {
                          tmp = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.ClickImage);
                          tmp2 = setMediaModalOpen(true);
                          obj = closure_0(closure_2[12]);
                          obj1 = {
                            initialSources: sources,
                            initialIndex: index,
                            originViewOrOriginLayout: closure_6.current,
                            analyticsSource: "game_profile",
                            openAs: "action-sheet",
                            disableMediaOverlayButton: true,
                            shareable: false,
                            onIndexChange(arg0) {
                                                      return onScrollToIndex(arg0);
                                                    },
                            onClose() {
                                                      return setMediaModalOpen(false);
                                                    }
                          };
                          openMediaModalResult = obj.openMediaModal(obj1);
                          return;
                        }
                      }
                      cResult[19] = url;
                      cResult[20] = obj2;
                      let tmp17 = obj2;
                    } else {
                      tmp17 = cResult[20];
                    }
                    class A {
                      constructor() {
                        tmp = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.ClickImage);
                        tmp2 = setMediaModalOpen(true);
                        obj = closure_0(closure_2[12]);
                        obj1 = {
                          initialSources: sources,
                          initialIndex: index,
                          originViewOrOriginLayout: closure_6.current,
                          analyticsSource: "game_profile",
                          openAs: "action-sheet",
                          disableMediaOverlayButton: true,
                          shareable: false,
                          onIndexChange(arg0) {
                                                  return onScrollToIndex(arg0);
                                                },
                          onClose() {
                                                  return setMediaModalOpen(false);
                                                }
                        };
                        openMediaModalResult = obj.openMediaModal(obj1);
                        return;
                      }
                    }
                    if (cResult[21] === tmp3.mediaImage) {
                      if (cResult[22] === tmp5) {
                        let tmp18 = cResult[23];
                      }
                      if (cResult[24] === tmp6) {
                        if (cResult[25] === tmp17) {
                          if (cResult[26] === tmp18) {
                            let tmp19 = cResult[27];
                          }
                          if (cResult[28] === accessibilityLabel) {
                            if (cResult[29] === tmp7) {
                              if (cResult[30] === tmp10) {
                                if (cResult[31] === tmp12) {
                                  if (cResult[32] === tmp19) {
                                    let tmp22 = cResult[33];
                                  }
                                  return tmp22;
                                }
                              }
                            }
                          }
                          class A {
                            constructor() {
                              tmp = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.ClickImage);
                              tmp2 = setMediaModalOpen(true);
                              obj = closure_0(closure_2[12]);
                              obj1 = {
                                initialSources: sources,
                                initialIndex: index,
                                originViewOrOriginLayout: closure_6.current,
                                analyticsSource: "game_profile",
                                openAs: "action-sheet",
                                disableMediaOverlayButton: true,
                                shareable: false,
                                onIndexChange(arg0) {
                                                              return onScrollToIndex(arg0);
                                                            },
                                onClose() {
                                                              return setMediaModalOpen(false);
                                                            }
                              };
                              openMediaModalResult = obj.openMediaModal(obj1);
                              return;
                            }
                          }
                          const obj3 = { ref, style: tmp10, onPress: tmp7, accessibilityLabel, children: null };
                          const items = [tmp12, tmp19];
                          obj3.children = items;
                          const tmp24 = closure_10(ref, obj3);
                          cResult[28] = accessibilityLabel;
                          cResult[29] = tmp7;
                          cResult[30] = tmp10;
                          cResult[31] = tmp12;
                          cResult[32] = tmp19;
                          cResult[33] = tmp24;
                          tmp22 = tmp24;
                        }
                      }
                      class A {
                        constructor() {
                          tmp = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.ClickImage);
                          tmp2 = setMediaModalOpen(true);
                          obj = closure_0(closure_2[12]);
                          obj1 = {
                            initialSources: sources,
                            initialIndex: index,
                            originViewOrOriginLayout: closure_6.current,
                            analyticsSource: "game_profile",
                            openAs: "action-sheet",
                            disableMediaOverlayButton: true,
                            shareable: false,
                            onIndexChange(arg0) {
                                                      return onScrollToIndex(arg0);
                                                    },
                            onClose() {
                                                      return setMediaModalOpen(false);
                                                    }
                          };
                          openMediaModalResult = obj.openMediaModal(obj1);
                          return;
                        }
                      }
                      const obj4 = { source: tmp17, style: tmp18, onLoad: tmp6, accessible: false };
                      const tmp21 = closure_9(index(tmp[13]), obj4);
                      cResult[24] = tmp6;
                      cResult[25] = tmp17;
                      cResult[26] = tmp18;
                      cResult[27] = tmp21;
                      tmp19 = tmp21;
                    }
                    const items1 = [tmp3.mediaImage, tmp5];
                    cResult[21] = tmp3.mediaImage;
                    cResult[22] = tmp5;
                    cResult[23] = items1;
                    tmp18 = items1;
                  }
                }
                class A {
                  constructor() {
                    tmp = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.ClickImage);
                    tmp2 = setMediaModalOpen(true);
                    obj = closure_0(closure_2[12]);
                    obj1 = {
                      initialSources: sources,
                      initialIndex: index,
                      originViewOrOriginLayout: closure_6.current,
                      analyticsSource: "game_profile",
                      openAs: "action-sheet",
                      disableMediaOverlayButton: true,
                      shareable: false,
                      onIndexChange(arg0) {
                                          return onScrollToIndex(arg0);
                                        },
                      onClose() {
                                          return setMediaModalOpen(false);
                                        }
                    };
                    openMediaModalResult = obj.openMediaModal(obj1);
                    return;
                  }
                }
                if (tmp5) {
                  class A {
                    constructor() {
                      tmp = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.ClickImage);
                      tmp2 = setMediaModalOpen(true);
                      obj = closure_0(closure_2[12]);
                      obj1 = {
                        initialSources: sources,
                        initialIndex: index,
                        originViewOrOriginLayout: closure_6.current,
                        analyticsSource: "game_profile",
                        openAs: "action-sheet",
                        disableMediaOverlayButton: true,
                        shareable: false,
                        onIndexChange(arg0) {
                                              return onScrollToIndex(arg0);
                                            },
                        onClose() {
                                              return setMediaModalOpen(false);
                                            }
                      };
                      openMediaModalResult = obj.openMediaModal(obj1);
                      return;
                    }
                  }
                  const obj5 = { uri: url };
                  tmp16[0] = obj5;
                  tmp16[1] = tmp3.imageBackdrop;
                  const tmp13 = closure_9(index(tmp[13]), tmp16);
                }
                cResult[15] = tmp5;
                cResult[16] = tmp3.imageBackdrop;
                cResult[17] = url;
                cResult[18] = tmp13;
                tmp12 = tmp13;
              }
              class A {
                constructor() {
                  tmp = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.ClickImage);
                  tmp2 = setMediaModalOpen(true);
                  obj = closure_0(closure_2[12]);
                  obj1 = {
                    initialSources: sources,
                    initialIndex: index,
                    originViewOrOriginLayout: closure_6.current,
                    analyticsSource: "game_profile",
                    openAs: "action-sheet",
                    disableMediaOverlayButton: true,
                    shareable: false,
                    onIndexChange(arg0) {
                                      return onScrollToIndex(arg0);
                                    },
                    onClose() {
                                      return setMediaModalOpen(false);
                                    }
                  };
                  openMediaModalResult = obj.openMediaModal(obj1);
                  return;
                }
              }
              tmp11[0] = tmp3.mediaItem;
              tmp11[1] = tmp8;
              cResult[12] = tmp3.mediaItem;
              cResult[13] = tmp8;
              cResult[14] = tmp11;
              tmp10 = tmp11;
            }
            class A {
              constructor() {
                tmp = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.ClickImage);
                tmp2 = setMediaModalOpen(true);
                obj = closure_0(closure_2[12]);
                obj1 = {
                  initialSources: sources,
                  initialIndex: index,
                  originViewOrOriginLayout: closure_6.current,
                  analyticsSource: "game_profile",
                  openAs: "action-sheet",
                  disableMediaOverlayButton: true,
                  shareable: false,
                  onIndexChange(arg0) {
                                  return onScrollToIndex(arg0);
                                },
                  onClose() {
                                  return setMediaModalOpen(false);
                                }
                };
                openMediaModalResult = obj.openMediaModal(obj1);
                return;
              }
            }
            tmp9[0] = width;
            tmp9[1] = height;
            cResult[9] = height;
            cResult[10] = width;
            cResult[11] = tmp9;
            tmp8 = tmp9;
          }
        }
      }
    }
    class A {
      constructor() {
        tmp = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.ClickImage);
        tmp2 = setMediaModalOpen(true);
        obj = closure_0(closure_2[12]);
        obj1 = {
          initialSources: sources,
          initialIndex: index,
          originViewOrOriginLayout: closure_6.current,
          analyticsSource: "game_profile",
          openAs: "action-sheet",
          disableMediaOverlayButton: true,
          shareable: false,
          onIndexChange(arg0) {
                  return onScrollToIndex(arg0);
                },
          onClose() {
                  return setMediaModalOpen(false);
                }
        };
        openMediaModalResult = obj.openMediaModal(obj1);
        return;
      }
    }
    cResult[3] = index;
    cResult[4] = onScrollToIndex;
    cResult[5] = setMediaModalOpen;
    cResult[6] = sources;
    cResult[7] = trackAction;
    cResult[8] = A;
    tmp7 = A;
  }
  const fn = function o(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    let source = nativeEvent;
    if ("source" in nativeEvent) {
      source = nativeEvent.source;
    }
    size = { width: source.width, height: source.height };
    recordDimensions(size.uri, size);
  };
  cResult[0] = recordDimensions;
  cResult[1] = size.uri;
  cResult[2] = fn;
  tmp6 = fn;
  const obj = recordDimensions(sources[10]);
}) : (function ImageItem(index) {
  ({ url, recordDimensions } = index);
  index = index.index;
  const sources = index.sources;
  const trackAction = index.trackAction;
  const onScrollToIndex = index.onScrollToIndex;
  const setMediaModalOpen = index.setMediaModalOpen;
  ({ accessibilityLabel, width, height } = index);
  const tmp = closure_15();
  const ref = onScrollToIndex.useRef(null);
  let size = sources[index];
  let portraitImage = size.height > size.width;
  const items = [size.uri, recordDimensions];
  const items1 = [sources, index, trackAction, onScrollToIndex, setMediaModalOpen];
  const callback = onScrollToIndex.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    let source = nativeEvent;
    if ("source" in nativeEvent) {
      source = nativeEvent.source;
    }
    size = { width: source.width, height: source.height };
    recordDimensions(size.uri, size);
  }, items);
  const obj = {
    ref,
    style: null,
    onPress: onScrollToIndex.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickImage);
      setMediaModalOpen(true);
      openMediaModal.openMediaModal({
        initialSources: sources,
        initialIndex: index,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        disableMediaOverlayButton: true,
        shareable: false,
        onIndexChange(arg0) {
          return onScrollToIndex(arg0);
        },
        onClose() {
          return setMediaModalOpen(false);
        }
      });
    }, items1),
    accessibilityLabel,
    children: null
  };
  const items2 = [tmp.mediaItem, { width, height }];
  obj.style = items2;
  let tmp6 = portraitImage;
  if (portraitImage) {
    const obj2 = { source: null, style: null, resizeMode: "cover", blurRadius: 24, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const obj3 = { uri: url };
    obj2.source = obj3;
    obj2.style = tmp.imageBackdrop;
    tmp6 = closure_9(index(sources[13]), obj2);
  }
  const items3 = [tmp6, ];
  const obj4 = { source: { uri: url }, style: null, onLoad: null, accessible: false };
  const items4 = [tmp.mediaImage, ];
  if (portraitImage) {
    portraitImage = tmp.portraitImage;
  }
  items4[1] = portraitImage;
  obj4.style = items4;
  obj4.onLoad = callback;
  items3[1] = closure_9(index(sources[13]), obj4);
  obj.children = items3;
  return closure_10(ref, obj);
}));
let closure_21 = noop.memo(function TrailerItem(sources) {
  ({ posterUrl, index } = sources);
  sources = sources.sources;
  const trackAction = sources.trackAction;
  const onScrollToIndex = sources.onScrollToIndex;
  const setMediaModalOpen = sources.setMediaModalOpen;
  ({ url, active, reducedMotion, width, height } = sources);
  const tmp = closure_15();
  setMediaModalOpen.useRef(null);
  const ref = setMediaModalOpen.useRef(0);
  const callback = setMediaModalOpen.useCallback((current) => {
    closure_6.current = current;
  }, []);
  const ref1 = setMediaModalOpen.useRef(index(trackAction[14]).createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items = [trackAction, sources, index, onScrollToIndex, setMediaModalOpen];
  const obj2 = {
    ref,
    style: null,
    onPress: setMediaModalOpen.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickTrailer);
      setMediaModalOpen(true);
      openMediaModal.openMediaModal({
        initialSources: sources,
        initialIndex: index,
        initialIndexVideoStartTime: ref.current,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        disableMediaOverlayButton: true,
        shareable: false,
        onIndexChange(arg0) {
          return onScrollToIndex(arg0);
        },
        onClose() {
          return setMediaModalOpen(false);
        }
      });
    }, items),
    accessibilityLabel: null,
    children: null
  };
  const items1 = [tmp.mediaItem, { width, height }];
  obj2.style = items1;
  const intl = index(trackAction[15]).intl;
  obj2.accessibilityLabel = intl.string(index(trackAction[15]).t.oRN0Og);
  if (reducedMotion) {
    const obj3 = { children: null };
    const obj4 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj5 = { uri: posterUrl };
    obj4.source = obj5;
    obj4.style = tmp.reducedMotionPoster;
    const items2 = [closure_9(sources(tmp5[13]), obj4), ];
    const obj6 = { style: tmp.playIconWrapper, pointerEvents: "none", children: closure_9(index(tmp5[16]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) };
    items2[1] = closure_9(ref, obj6);
    obj3.children = items2;
    let tmp8Result = closure_10(closure_11, obj3);
  } else {
    const obj7 = { style: tmp.mediaVideo, source: null, poster: null, posterResizeMode: "cover", paused: null, muted: true, resizeMode: "cover", pauseWhileAppInactive: true, controls: null };
    const obj8 = { uri: url };
    obj7.source = obj8;
    obj7.poster = posterUrl;
    obj7.paused = !active;
    obj7.controls = ref1.current;
    tmp8Result = closure_9(index(tmp5[14]).VideoComponent, obj7);
  }
  obj2.children = tmp8Result;
  return closure_9(ref, obj2);
});
ReactCompilerGating = fn(558);
let obj4 = { maxWidth: fn(9311).MEDIA_ITEM_MAX_WIDTH, maxHeight: fn(9311).MEDIA_ITEM_MAX_HEIGHT, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileMedia(game) {
  const cResult = game(stateFromStores[10]).c(51);
  game = game.game;
  const trackAction = game.trackAction;
  onScrollToIndex();
  let obj = game(stateFromStores[10]);
  const obscured = game(stateFromStores[17]).useObscuredSurface().obscured;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ref];
    const fn = function l() {
      return ref.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = game(stateFromStores[17]);
  stateFromStores = game(stateFromStores[18]).useStateFromStores(tmp5, tmp6);
  const obj4 = noop;
  const tmpResult = game(stateFromStores[18]);
  [tmp10, _slicedToArray] = noop.useState(0);
  const tmp9 = _slicedToArray(noop.useState(0), 2);
  noop = _slicedToArray(noop.useState(0), 2)[1];
  [first, setMediaModalOpen] = noop.useState(false);
  ref = noop.useRef(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const carouselPreviewPixelSize = tmp(tmp2[7]).getCarouselPreviewPixelSize();
    cResult[2] = carouselPreviewPixelSize;
    let tmp15 = carouselPreviewPixelSize;
    const tmpResult4 = tmp(tmp2[7]);
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor(arg0) {
        tmp = closure_3(game.nativeEvent.layout.width);
        return;
      }
    }
    cResult[3] = U;
  } else {
    class U {
      constructor(arg0) {
        tmp = closure_3(game.nativeEvent.layout.width);
        return;
      }
    }
  }
  if (cResult[4] !== game) {
    class U {
      constructor(arg0) {
        tmp = closure_3(game.nativeEvent.layout.width);
        return;
      }
    }
    const mediaEntries = obj6.buildMediaEntries(game);
    cResult[4] = game;
    cResult[5] = mediaEntries;
  } else {
    class U {
      constructor(arg0) {
        tmp = closure_3(game.nativeEvent.layout.width);
        return;
      }
    }
  }
  const tmp11 = _slicedToArray(noop.useState(0), 2);
  const gameProfileMediaDimensions = game(stateFromStores[19]).useGameProfileMediaDimensions(tmp(tmp2[7]).MEDIA_VIEWER_ITEM_SIZE.width);
  ({ dimensions, recordDimensions } = gameProfileMediaDimensions);
  const bound = Math.max(0, Math.min(tmp(tmp2[7]).MEDIA_ITEM_MAX_WIDTH, tmp10 - PX_12 - 2 * PX_16));
  const bound1 = Math.min(tmp(tmp2[7]).MEDIA_ITEM_MAX_HEIGHT, bound / tmp(tmp2[7]).MEDIA_ITEM_ASPECT_RATIO);
  if (cResult[6] === dimensions) {
    class U {
      constructor(arg0) {
        tmp = closure_3(game.nativeEvent.layout.width);
        return;
      }
    }
    const sources = tmp24;
    if (cResult[9] === tmp24) {
      class U {
        constructor(arg0) {
          tmp = closure_3(game.nativeEvent.layout.width);
          return;
        }
      }
      const effect = obj4.useEffect(Q, tmp27);
      let result = (tmp10 - bound - 2 * tmp21) / 2;
      class Q {
        constructor() {
          if (closure_5) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[20]);
            tmp3 = closure_11;
            result = obj.updateMediaViewerSources(closure_11);
          }
          return;
        }
      }
      const sum = bound + PX_12;
      PX_16 = sum;
      if (cResult[13] === sum) {
        class U {
          constructor(arg0) {
            tmp = closure_3(game.nativeEvent.layout.width);
            return;
          }
        }
      }
      if (cResult[17] === sum) {
        class U {
          constructor(arg0) {
            tmp = closure_3(game.nativeEvent.layout.width);
            return;
          }
        }
        const mapped = arr2.map(tmp31);
        class Q {
          constructor() {
            if (closure_5) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[20]);
              tmp3 = closure_11;
              result = obj.updateMediaViewerSources(closure_11);
            }
            return;
          }
        }
        cResult[14] = arr2;
        cResult[15] = result;
        cResult[16] = mapped;
      }
      function re(arg0, arg1) {
        return Math.max(0, arg1 * sum - PX_12);
      }
      cResult[17] = sum;
      cResult[18] = result;
      cResult[19] = re;
      tmp31 = re;
    }
    class Q {
      constructor() {
        if (closure_5) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[20]);
          tmp3 = closure_11;
          result = obj.updateMediaViewerSources(closure_11);
        }
        return;
      }
    }
    const items1 = [tmp24, first];
    cResult[9] = tmp24;
    cResult[10] = first;
    cResult[11] = Q;
    cResult[12] = items1;
    tmp27 = items1;
  }
  tmp21 = PX_16;
  const tmpResult5 = game(stateFromStores[19]);
  const mediaViewerSources = game(stateFromStores[7]).buildMediaViewerSources(arr2, tmp15, dimensions);
  cResult[6] = dimensions;
  cResult[7] = arr2;
  cResult[8] = mediaViewerSources;
  const tmpResult6 = game(stateFromStores[7]);
}) : (function GameProfileMedia(game) {
  game = game.game;
  const trackAction = game.trackAction;
  let stateFromStores;
  let first;
  noop = undefined;
  let setMediaModalOpen;
  let memo4;
  const tmp = memo4();
  let obj = game(stateFromStores[17]);
  let tmp2 = game;
  const items = [setMediaModalOpen];
  stateFromStores = game(stateFromStores[18]).useStateFromStores(items, () => setMediaModalOpen.useReducedMotion);
  const tmp5 = first(noop.useState(0), 2);
  first = tmp5[0];
  noop = tmp5[1];
  const tmp7 = first(noop.useState(0), 2);
  closure_5 = tmp7[1];
  const tmp8 = first(noop.useState(false), 2);
  const first1 = tmp8[0];
  setMediaModalOpen = tmp8[1];
  const ref = noop.useRef(null);
  const memo = noop.useMemo(() => game(stateFromStores[7]).getCarouselPreviewPixelSize(), []);
  const items1 = [game];
  const callback = noop.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo1 = noop.useMemo(() => GameProfileMediaSources.buildMediaEntries(game), items1);
  const obj2 = game(stateFromStores[18]);
  const obj3 = noop;
  const gameProfileMediaDimensions = game(stateFromStores[19]).useGameProfileMediaDimensions(game(stateFromStores[7]).MEDIA_VIEWER_ITEM_SIZE.width);
  const dimensions = gameProfileMediaDimensions.dimensions;
  const recordDimensions = gameProfileMediaDimensions.recordDimensions;
  const items2 = [first];
  const memo2 = noop.useMemo(() => Math.max(0, Math.min(GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH, first - PX_12 - 2 * PX_16)), items2);
  const items3 = [memo2];
  const memo3 = noop.useMemo(() => Math.min(GameProfileMediaSources.MEDIA_ITEM_MAX_HEIGHT, memo2 / GameProfileMediaSources.MEDIA_ITEM_ASPECT_RATIO), items3);
  const items4 = [memo1, memo, dimensions];
  memo4 = noop.useMemo(() => GameProfileMediaSources.buildMediaViewerSources(memo1, memo, dimensions), items4);
  const items5 = [memo4, first1];
  const effect = noop.useEffect(() => {
    if (first1) {
      const result = useMediaViewerSources.updateMediaViewerSources(memo4);
    }
  }, items5);
  const items6 = [memo1, first, memo2];
  const memo5 = noop.useMemo(() => memo1.map((item, index) => Math.max(0, index * (closure_1_13 + recordDimensions) - (first - closure_1_13 - 2 * memo2) / 2)), items6);
  const items7 = [memo5];
  const items8 = [memo5];
  const callback1 = noop.useCallback((nativeEvent) => {
    if (0 !== memo5.length) {
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const _Math2 = Math;
      num = 1;
      let absolute = Math.abs(memo5[0] - x);
      let num2 = 0;
      let num3 = 0;
      if (1 < memo5.length) {
        do {
          let _Math = Math;
          let absolute1 = Math.abs(memo5[num] - x);
          let tmp3 = absolute;
          let tmp4 = num2;
          if (absolute1 < absolute) {
            tmp3 = absolute1;
            tmp4 = num;
          }
          num = num + 1;
          absolute = tmp3;
          num2 = tmp4;
          num3 = tmp4;
        } while (num < memo5.length);
      }
      closure_5(num3);
    }
  }, items7);
  const callback2 = noop.useCallback((arg0) => {
    if (null != memo5[arg0]) {
      const current = ref.current;
      if (current != null) {
        const obj = { offset: tmp, animated: false };
        current.scrollToOffset(obj);
      }
    }
    closure_5(arg0);
  }, items8);
  let num = -1;
  if (!obj.useObscuredSurface().obscured) {
    num = -1;
    if (!first1) {
      num = -1;
      if (!stateFromStores) {
        num = tmp7[0];
      }
    }
  }
  const items9 = [num, memo4, trackAction, memo2, memo3, callback2, stateFromStores, recordDimensions, ];
  let name;
  if (game != null) {
    name = game.name;
  }
  items9[8] = name;
  const items10 = [num, memo2, memo3, memo4, stateFromStores];
  const callback3 = obj3.useCallback((arg0) => {
    ({ item, index } = arg0);
    if ("trailer" === item.type) {
      const size = { url: null, posterUrl: null, active: null, reducedMotion: null, index: null, sources: null, trackAction: null, width: null, height: null, onScrollToIndex: null, setMediaModalOpen: null };
      ({ originalUrl: obj2.url, previewUrl: obj2.posterUrl } = item);
      size.active = index === num;
      size.reducedMotion = stateFromStores;
      size.index = index;
      size.sources = memo4;
      size.trackAction = trackAction;
      size.width = memo2;
      size.height = memo3;
      size.onScrollToIndex = callback2;
      size.setMediaModalOpen = setMediaModalOpen;
      let tmp20Result = React6(closure_21, size);
    } else {
      const size1 = { url: item.previewUrl, accessibilityLabel: null, recordDimensions: null, index: null, sources: null, trackAction: null, width: null, height: null, onScrollToIndex: null, setMediaModalOpen: null };
      const intl = util.intl;
      let name;
      if (game != null) {
        name = game.name;
      }
      const obj = { game: name };
      size1.accessibilityLabel = intl.formatToPlainString(util.t.COYYrn, obj);
      size1.recordDimensions = recordDimensions;
      size1.index = index;
      size1.sources = memo4;
      size1.trackAction = trackAction;
      size1.width = memo2;
      size1.height = memo3;
      size1.onScrollToIndex = callback2;
      size1.setMediaModalOpen = setMediaModalOpen;
      tmp20Result = React6(closure_20, size1);
    }
    return tmp20Result;
  }, items9);
  let tmp32Result2 = null;
  if (0 !== memo1.length) {
    const obj5 = { style: tmp.container, onLayout: callback, children: null };
    let tmp32Result = memo2 > 0;
    if (tmp32Result) {
      const obj6 = { ref, horizontal: true, renderScrollComponent: trackAction(tmp3[22]), style: tmp.list, overrideProps: null, data: null, extraData: null, renderItem: null, keyExtractor: null, getItemType: null, drawDistance: null, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: null, ListHeaderComponent: null, ListFooterComponent: null, decelerationRate: "fast", snapToOffsets: null, snapToStart: false, snapToEnd: false, onMomentumScrollEnd: null };
      const obj7 = { style: tmp.list };
      obj6.overrideProps = obj7;
      obj6.data = memo1;
      obj6.extraData = tmp23;
      obj6.renderItem = callback3;
      obj6.keyExtractor = num;
      obj6.getItemType = getItemType;
      obj6.drawDistance = memo3;
      obj6.ItemSeparatorComponent = memo5;
      obj6.ListHeaderComponent = callback2;
      obj6.ListFooterComponent = callback2;
      obj6.snapToOffsets = memo5;
      obj6.onMomentumScrollEnd = callback1;
      tmp32Result = tmp32(tmp2(tmp3[21]).FlashList, obj6);
    }
    obj5.children = tmp32Result;
    tmp32Result2 = tmp32(closure_5, obj5);
  }
  return tmp32Result2;
});