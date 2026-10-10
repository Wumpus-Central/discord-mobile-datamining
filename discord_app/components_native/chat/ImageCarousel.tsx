// discord_app/components_native/chat/ImageCarousel.tsx
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import useWindowDimensions from "../../modules/screen/useWindowDimensions.native.tsx";
import ReanimatedRexportDefault from "../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../design/animation/reanimated/spring/spring.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import _modDef6620 from "../../../_runtime/metro/06620__.js";
import Upload from "../../lib/uploader/Upload.tsx";
import UploadAttachmentActionCreatorsDefault from "../../actions/UploadAttachmentActionCreators.tsx";
import showUploadPreviewActionSheetDefault from "../../modules/media_uploads/native/showUploadPreviewActionSheet.tsx";
import MediaKeyboardUtils from "../../modules/media_keyboard/native/MediaKeyboardUtils.tsx";
import AttachmentPreviewDefault from "../../modules/media/native/AttachmentPreview.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UploadAttachmentStore from "../../stores/UploadAttachmentStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const DraftType = fn(7243).DraftType;
const ImageCarouselConstants = fn(10019);
const IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = ImageCarouselConstants.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
let closure_10 = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5092);
let obj = {
  container: { width: "100%" },
  pressableContainer: { marginHorizontal: 4 },
  tileContainer: {
    position: "relative",
    minWidth: 60,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    overflow: "hidden",
    borderRadius: nativeDefault.radii.md - 1,
  },
  decorationsContainer: null,
  highlightedTileContainer: null,
  closeButton: null,
  scrollview: null,
  closeContainer: null,
  closeButtonIcon: null,
  altTagText: null,
  iconContainer: null,
  spoilerOverlay: null,
  footerRightContainer: null,
};
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.flex = 1;
obj4.flexDirection = "row";
obj4.justifyContent = "space-between";
obj4.alignItems = "flex-end";
obj4.padding = 4;
obj.decorationsContainer = obj4;
let obj3 = {
  position: "relative",
  minWidth: 60,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.md - 1,
};
obj.highlightedTileContainer = {
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  borderStyle: "solid",
  borderWidth: 2,
  borderRadius: 10,
};
let rect = { position: "absolute", top: -1 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN, right: 2 };
obj.closeButton = rect;
obj.scrollview = { paddingTop: IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING };
let size = {
  height: 20,
  width: 20,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
};
obj.closeContainer = size;
let obj5 = {
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  borderStyle: "solid",
  borderWidth: 2,
  borderRadius: 10,
};
obj.closeButtonIcon = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
let obj6 = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
obj.altTagText = {
  paddingHorizontal: nativeDefault.space.PX_4,
  lineHeight: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.xs,
  textTransform: "uppercase",
};
let obj7 = {
  paddingHorizontal: nativeDefault.space.PX_4,
  lineHeight: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.xs,
  textTransform: "uppercase",
};
obj.iconContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_4,
};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.spoilerOverlay = {};
const rect1 = {
  position: "absolute",
  bottom: 4,
  right: 4,
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: 4,
  borderRadius: 20,
  opacity: 0.85,
};
obj.footerRightContainer = rect1;
let closure_13 = createStyles.createStyles(obj);
const __initData = {
  code: 'function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},"respect-motion-settings"),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},"respect-motion-settings")}]};}',
};
const __initData2 = {
  code: "function ImageCarouselTsx2(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}",
};
let ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTileEntranceAnimatedStyle(arg0) {
      const cResult = sharedValue(576).c(5);
      let obj = sharedValue(576);
      sharedValue = sharedValue(4850).useSharedValue(0);
      if (cResult[0] !== sharedValue) {
        const fn = function l() {
          const result = sharedValue.set(1);
        };
        cResult[0] = sharedValue;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === sharedValue) {
        if (cResult[3] === arg0) {
          let tmp6 = cResult[4];
        }
        const effect = noop.useEffect(tmp5, tmp6);
        const fn2 = function s() {
          const obj = { opacity: null, transform: null };
          const obj3 = { duration: 300, easing: null };
          value = sharedValue.get();
          obj3.easing = native.STANDARD_EASING;
          obj.opacity = timing.withTiming(value, obj3, "respect-motion-settings");
          const obj4 = { scale: null };
          obj4.scale = spring.withSpring(
            sharedValue.get(),
            { stiffness: 80, damping: 6, mass: 0.3 },
            "respect-motion-settings",
          );
          const items = [obj4];
          obj.transform = items;
          return obj;
        };
        let obj3 = {
          withTiming: tmp(5093).withTiming,
          animatedStylePropValue: sharedValue,
          STANDARD_EASING: tmp(1200).STANDARD_EASING,
          withSpring: tmp(5378).withSpring,
        };
        fn2.__closure = obj3;
        fn2.__workletHash = 14689938623095;
        fn2.__initData = __initData;
        return tmp(4850).useAnimatedStyle(fn2);
      }
      let items = [sharedValue, arg0];
      cResult[2] = sharedValue;
      cResult[3] = arg0;
      cResult[4] = items;
      tmp6 = items;
      let obj2 = sharedValue(4850);
    }
  : function useTileEntranceAnimatedStyle(arg0) {
      sharedValue = sharedValue(4850).useSharedValue(0);
      let items = [sharedValue, arg0];
      const effect = noop.useEffect(() => {
        const result = sharedValue.set(1);
      }, items);
      let obj = sharedValue(4850);
      const fn = function l() {
        const obj = { opacity: null, transform: null };
        const obj3 = { duration: 300, easing: null };
        value = sharedValue.get();
        obj3.easing = native.STANDARD_EASING;
        obj.opacity = timing.withTiming(value, obj3, "respect-motion-settings");
        const obj4 = { scale: null };
        obj4.scale = spring.withSpring(
          sharedValue.get(),
          { stiffness: 80, damping: 6, mass: 0.3 },
          "respect-motion-settings",
        );
        const items = [obj4];
        obj.transform = items;
        return obj;
      };
      let obj2 = sharedValue(4850);
      fn.__closure = {
        withTiming: sharedValue(5093).withTiming,
        animatedStylePropValue: sharedValue,
        STANDARD_EASING: sharedValue(1200).STANDARD_EASING,
        withSpring: sharedValue(5378).withSpring,
      };
      fn.__workletHash = 1893609222612;
      fn.__initData = __initData2;
      return obj2.useAnimatedStyle(fn);
    };
let closure_16 = tmp7;
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Tile(onEdit) {
      const cResult = onEdit(channelId[9]).c(54);
      onEdit = onEdit.onEdit;
      const onRemove = onEdit.onRemove;
      channelId = onEdit.channelId;
      ({ highlightThumbnails, upload } = onEdit);
      let tmp4 = undefined !== highlightThumbnails && highlightThumbnails;
      const tmp5 = closure_13();
      ({ description, id } = upload);
      ({ item, isVideo, isImage, isThumbnail } = upload);
      const obj = onEdit(channelId[9]);
      onRemove(channelId[14])(
        item.platform === onEdit(channelId[15]).UploadPlatform.REACT_NATIVE,
        "Upload must be a React Native upload item.",
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UploadAttachmentStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === id) {
          let tmp11 = cResult[3];
        }
        const stateFromStores = tmp(tmp2[16]).useStateFromStores(first, tmp11);
        if (cResult[4] === id) {
          if (cResult[5] === onRemove) {
            let tmp13 = cResult[6];
          }
          if (cResult[7] === channelId) {
            if (cResult[8] === id) {
              if (cResult[9] === onEdit) {
                if (cResult[10] === onRemove) {
                  let uri = item.id;
                  class O {
                    constructor() {
                      obj = {
                        channelId,
                        onRemove,
                        onEdit(arg0) {
                          let tmpResult;
                          if (onEdit != null) {
                            tmpResult = tmp(id, arg0);
                          }
                          return tmpResult;
                        },
                        upload,
                      };
                      tmp = closure_1(closure_2[17])(obj);
                      return;
                    }
                  }
                  if (uri == null) {
                    uri = item.uri;
                  }
                  class P {
                    constructor() {
                      tmpResult = undefined;
                      if (onRemove != null) {
                        tmp3 = id;
                        tmpResult = tmp(id);
                      }
                      return tmpResult;
                    }
                  }
                  if (tmp4) {
                    tmp4 = true === isThumbnail;
                  }
                  if (cResult[13] !== item.filename) {
                    const intl = tmp(tmp2[18]).intl;
                    class O {
                      constructor() {
                        obj = {
                          channelId,
                          onRemove,
                          onEdit(arg0) {
                            let tmpResult;
                            if (onEdit != null) {
                              tmpResult = tmp(id, arg0);
                            }
                            return tmpResult;
                          },
                          upload,
                        };
                        tmp = closure_1(closure_2[17])(obj);
                        return;
                      }
                    }
                    class P {
                      constructor() {
                        tmpResult = undefined;
                        if (onRemove != null) {
                          tmp3 = id;
                          tmpResult = tmp(id);
                        }
                        return tmpResult;
                      }
                    }
                    const obj2 = { name: tmp17 };
                    const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[18]).t.MJHFt9, obj2);
                    cResult[13] = item.filename;
                    cResult[14] = formatToPlainStringResult;
                    let tmp16 = formatToPlainStringResult;
                  } else {
                    tmp16 = cResult[14];
                  }
                  const _Symbol = Symbol;
                  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                    const string = tmp(tmp2[18]).intl.string;
                    class O {
                      constructor() {
                        obj = {
                          channelId,
                          onRemove,
                          onEdit(arg0) {
                            let tmpResult;
                            if (onEdit != null) {
                              tmpResult = tmp(id, arg0);
                            }
                            return tmpResult;
                          },
                          upload,
                        };
                        tmp = closure_1(closure_2[17])(obj);
                        return;
                      }
                    }
                    class P {
                      constructor() {
                        tmpResult = undefined;
                        if (onRemove != null) {
                          tmp3 = id;
                          tmpResult = tmp(id);
                        }
                        return tmpResult;
                      }
                    }
                    let tmp19 = tmp20;
                  } else {
                    tmp19 = cResult[15];
                  }
                  if (cResult[16] !== item.filename) {
                    const intl2 = tmp(tmp2[18]).intl;
                    class O {
                      constructor() {
                        obj = {
                          channelId,
                          onRemove,
                          onEdit(arg0) {
                            let tmpResult;
                            if (onEdit != null) {
                              tmpResult = tmp(id, arg0);
                            }
                            return tmpResult;
                          },
                          upload,
                        };
                        tmp = closure_1(closure_2[17])(obj);
                        return;
                      }
                    }
                    class P {
                      constructor() {
                        tmpResult = undefined;
                        if (onRemove != null) {
                          tmp3 = id;
                          tmpResult = tmp(id);
                        }
                        return tmpResult;
                      }
                    }
                    const obj3 = { name: tmp22 };
                    const formatToPlainStringResult1 = intl2.formatToPlainString(tmp(tmp2[18]).t.FxKgb3, obj3);
                    cResult[16] = item.filename;
                    cResult[17] = formatToPlainStringResult1;
                    let tmp21 = formatToPlainStringResult1;
                  } else {
                    tmp21 = cResult[17];
                  }
                  if (cResult[18] === isThumbnail) {
                    if (cResult[19] === tmp5.footerRightContainer) {
                      let tmp25 = cResult[20];
                    }
                    if (cResult[21] === stateFromStores) {
                      if (cResult[22] === tmp5.spoilerOverlay) {
                        let tmp31 = cResult[23];
                      }
                      if (cResult[24] === description) {
                        if (cResult[25] === tmp5.altTagText) {
                          let tmp34 = cResult[26];
                        }
                        if (cResult[27] === isVideo) {
                          if (cResult[28] === tmp5.iconContainer) {
                            let tmp36 = cResult[29];
                          }
                          if (cResult[30] === tmp34) {
                            if (cResult[31] === tmp36) {
                              let tmp41 = cResult[32];
                            }
                            if (cResult[33] === stateFromStores) {
                              if (cResult[34] === tmp5.iconContainer) {
                                let tmp45 = cResult[35];
                              }
                              if (cResult[36] === tmp5.decorationsContainer) {
                                if (cResult[37] === tmp31) {
                                  if (cResult[38] === tmp41) {
                                    if (cResult[39] === tmp45) {
                                      let tmp50 = cResult[40];
                                    }
                                    if (cResult[41] === tmp13) {
                                      if (cResult[42] === isImage) {
                                        if (cResult[43] === isVideo) {
                                          if (cResult[44] === item.filename) {
                                            if (cResult[45] === item.uri) {
                                              if (cResult[46] === tmp16) {
                                                if (cResult[47] === tmp21) {
                                                  if (cResult[48] === tmp24) {
                                                    if (cResult[49] === tmp25) {
                                                      if (cResult[50] === tmp50) {
                                                        if (cResult[51] === uri) {
                                                          if (cResult[52] === tmp4) {
                                                            let tmp54 = cResult[53];
                                                          }
                                                          return tmp54;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    class O {
                                      constructor() {
                                        obj = {
                                          channelId,
                                          onRemove,
                                          onEdit(arg0) {
                                            let tmpResult;
                                            if (onEdit != null) {
                                              tmpResult = tmp(id, arg0);
                                            }
                                            return tmpResult;
                                          },
                                          upload,
                                        };
                                        tmp = closure_1(closure_2[17])(obj);
                                        return;
                                      }
                                    }
                                    class P {
                                      constructor() {
                                        tmpResult = undefined;
                                        if (onRemove != null) {
                                          tmp3 = id;
                                          tmpResult = tmp(id);
                                        }
                                        return tmpResult;
                                      }
                                    }
                                    tmp56[0] = uri;
                                    tmp56[1] = tmp15;
                                    tmp56[2] = item.filename;
                                    tmp56[3] = isImage;
                                    tmp56[4] = isVideo;
                                    tmp56[5] = tmp4;
                                    tmp56[6] = tmp16;
                                    tmp56[7] = tmp19;
                                    tmp56[8] = tmp21;
                                    tmp56[9] = tmp24;
                                    tmp56[10] = tmp13;
                                    const items1 = [tmp25, tmp50];
                                    tmp56[11] = items1;
                                    const tmp57 = closure_12(closure_18, tmp56);
                                    cResult[41] = tmp13;
                                    cResult[42] = isImage;
                                    cResult[43] = isVideo;
                                    cResult[44] = item.filename;
                                    cResult[45] = item.uri;
                                    cResult[46] = tmp16;
                                    cResult[47] = tmp21;
                                    cResult[48] = tmp24;
                                    cResult[49] = tmp25;
                                    cResult[50] = tmp50;
                                    cResult[51] = uri;
                                    cResult[52] = tmp4;
                                    cResult[53] = tmp57;
                                    tmp54 = tmp57;
                                  }
                                }
                              }
                              class O {
                                constructor() {
                                  obj = {
                                    channelId,
                                    onRemove,
                                    onEdit(arg0) {
                                      let tmpResult;
                                      if (onEdit != null) {
                                        tmpResult = tmp(id, arg0);
                                      }
                                      return tmpResult;
                                    },
                                    upload,
                                  };
                                  tmp = closure_1(closure_2[17])(obj);
                                  return;
                                }
                              }
                              class P {
                                constructor() {
                                  tmpResult = undefined;
                                  if (onRemove != null) {
                                    tmp3 = id;
                                    tmpResult = tmp(id);
                                  }
                                  return tmpResult;
                                }
                              }
                              tmp52[0] = tmp5.decorationsContainer;
                              const items2 = [tmp31, tmp41, tmp45];
                              tmp52[1] = items2;
                              const tmp53 = closure_12(id, tmp52);
                              cResult[36] = tmp5.decorationsContainer;
                              cResult[37] = tmp31;
                              cResult[38] = tmp41;
                              cResult[39] = tmp45;
                              cResult[40] = tmp53;
                              tmp50 = tmp53;
                            }
                            class O {
                              constructor() {
                                obj = {
                                  channelId,
                                  onRemove,
                                  onEdit(arg0) {
                                    let tmpResult;
                                    if (onEdit != null) {
                                      tmpResult = tmp(id, arg0);
                                    }
                                    return tmpResult;
                                  },
                                  upload,
                                };
                                tmp = closure_1(closure_2[17])(obj);
                                return;
                              }
                            }
                            if (stateFromStores) {
                              class O {
                                constructor() {
                                  obj = {
                                    channelId,
                                    onRemove,
                                    onEdit(arg0) {
                                      let tmpResult;
                                      if (onEdit != null) {
                                        tmpResult = tmp(id, arg0);
                                      }
                                      return tmpResult;
                                    },
                                    upload,
                                  };
                                  tmp = closure_1(closure_2[17])(obj);
                                  return;
                                }
                              }
                              tmp49[0] = tmp5.iconContainer;
                              class P {
                                constructor() {
                                  tmpResult = undefined;
                                  if (onRemove != null) {
                                    tmp3 = id;
                                    tmpResult = tmp(id);
                                  }
                                  return tmpResult;
                                }
                              }
                              const tmp46 = closure_11(id, tmp49);
                            }
                            class P {
                              constructor() {
                                tmpResult = undefined;
                                if (onRemove != null) {
                                  tmp3 = id;
                                  tmpResult = tmp(id);
                                }
                                return tmpResult;
                              }
                            }
                            cResult[33] = stateFromStores;
                            cResult[34] = tmp5.iconContainer;
                            cResult[35] = tmp46;
                            tmp45 = tmp46;
                          }
                          class O {
                            constructor() {
                              obj = {
                                channelId,
                                onRemove,
                                onEdit(arg0) {
                                  let tmpResult;
                                  if (onEdit != null) {
                                    tmpResult = tmp(id, arg0);
                                  }
                                  return tmpResult;
                                },
                                upload,
                              };
                              tmp = closure_1(closure_2[17])(obj);
                              return;
                            }
                          }
                          class P {
                            constructor() {
                              tmpResult = undefined;
                              if (onRemove != null) {
                                tmp3 = id;
                                tmpResult = tmp(id);
                              }
                              return tmpResult;
                            }
                          }
                          const items3 = [tmp34, tmp36];
                          tmp43[0] = items3;
                          const tmp44 = closure_12(id, tmp43);
                          cResult[30] = tmp34;
                          cResult[31] = tmp36;
                          cResult[32] = tmp44;
                          tmp41 = tmp44;
                        }
                        class O {
                          constructor() {
                            obj = {
                              channelId,
                              onRemove,
                              onEdit(arg0) {
                                let tmpResult;
                                if (onEdit != null) {
                                  tmpResult = tmp(id, arg0);
                                }
                                return tmpResult;
                              },
                              upload,
                            };
                            tmp = closure_1(closure_2[17])(obj);
                            return;
                          }
                        }
                        if (isVideo) {
                          class O {
                            constructor() {
                              obj = {
                                channelId,
                                onRemove,
                                onEdit(arg0) {
                                  let tmpResult;
                                  if (onEdit != null) {
                                    tmpResult = tmp(id, arg0);
                                  }
                                  return tmpResult;
                                },
                                upload,
                              };
                              tmp = closure_1(closure_2[17])(obj);
                              return;
                            }
                          }
                          tmp40[0] = tmp5.iconContainer;
                          class P {
                            constructor() {
                              tmpResult = undefined;
                              if (onRemove != null) {
                                tmp3 = id;
                                tmpResult = tmp(id);
                              }
                              return tmpResult;
                            }
                          }
                          const tmp37 = closure_11(id, tmp40);
                        }
                        class P {
                          constructor() {
                            tmpResult = undefined;
                            if (onRemove != null) {
                              tmp3 = id;
                              tmpResult = tmp(id);
                            }
                            return tmpResult;
                          }
                        }
                        cResult[27] = isVideo;
                        cResult[28] = tmp5.iconContainer;
                        cResult[29] = tmp37;
                        tmp36 = tmp37;
                      }
                      class O {
                        constructor() {
                          obj = {
                            channelId,
                            onRemove,
                            onEdit(arg0) {
                              let tmpResult;
                              if (onEdit != null) {
                                tmpResult = tmp(id, arg0);
                              }
                              return tmpResult;
                            },
                            upload,
                          };
                          tmp = closure_1(closure_2[17])(obj);
                          return;
                        }
                      }
                      if (null != description) {
                        class O {
                          constructor() {
                            obj = {
                              channelId,
                              onRemove,
                              onEdit(arg0) {
                                let tmpResult;
                                if (onEdit != null) {
                                  tmpResult = tmp(id, arg0);
                                }
                                return tmpResult;
                              },
                              upload,
                            };
                            tmp = closure_1(closure_2[17])(obj);
                            return;
                          }
                        }
                        class P {
                          constructor() {
                            tmpResult = undefined;
                            if (onRemove != null) {
                              tmp3 = id;
                              tmpResult = tmp(id);
                            }
                            return tmpResult;
                          }
                        }
                      }
                      class P {
                        constructor() {
                          tmpResult = undefined;
                          if (onRemove != null) {
                            tmp3 = id;
                            tmpResult = tmp(id);
                          }
                          return tmpResult;
                        }
                      }
                      cResult[24] = description;
                      cResult[25] = tmp5.altTagText;
                      cResult[26] = tmp35;
                      tmp34 = tmp35;
                    }
                    class O {
                      constructor() {
                        obj = {
                          channelId,
                          onRemove,
                          onEdit(arg0) {
                            let tmpResult;
                            if (onEdit != null) {
                              tmpResult = tmp(id, arg0);
                            }
                            return tmpResult;
                          },
                          upload,
                        };
                        tmp = closure_1(closure_2[17])(obj);
                        return;
                      }
                    }
                    if (stateFromStores) {
                      class O {
                        constructor() {
                          obj = {
                            channelId,
                            onRemove,
                            onEdit(arg0) {
                              let tmpResult;
                              if (onEdit != null) {
                                tmpResult = tmp(id, arg0);
                              }
                              return tmpResult;
                            },
                            upload,
                          };
                          tmp = closure_1(closure_2[17])(obj);
                          return;
                        }
                      }
                      const tmp32 = closure_11(tmp6(tmp2[20]), { style: null });
                      const obj4 = { style: null };
                    }
                    class P {
                      constructor() {
                        tmpResult = undefined;
                        if (onRemove != null) {
                          tmp3 = id;
                          tmpResult = tmp(id);
                        }
                        return tmpResult;
                      }
                    }
                    cResult[21] = stateFromStores;
                    cResult[22] = tmp5.spoilerOverlay;
                    cResult[23] = tmp32;
                    tmp31 = tmp32;
                  }
                  let tmp26 = null;
                  if (isThumbnail) {
                    class O {
                      constructor() {
                        obj = {
                          channelId,
                          onRemove,
                          onEdit(arg0) {
                            let tmpResult;
                            if (onEdit != null) {
                              tmpResult = tmp(id, arg0);
                            }
                            return tmpResult;
                          },
                          upload,
                        };
                        tmp = closure_1(closure_2[17])(obj);
                        return;
                      }
                    }
                    tmp29[0] = tmp5.footerRightContainer;
                    class P {
                      constructor() {
                        tmpResult = undefined;
                        if (onRemove != null) {
                          tmp3 = id;
                          tmpResult = tmp(id);
                        }
                        return tmpResult;
                      }
                    }
                    tmp30[0] = tmp6(tmp2[19]);
                    tmp30[1] = tmp(tmp2[12]).Icon.Sizes.SMALL_14;
                    tmp29[1] = closure_11(tmp(tmp2[12]).Icon, tmp30);
                    tmp26 = closure_11(id, tmp29);
                  }
                  cResult[18] = isThumbnail;
                  cResult[19] = tmp5.footerRightContainer;
                  cResult[20] = tmp26;
                  tmp25 = tmp26;
                }
              }
            }
          }
          class O {
            constructor() {
              obj = {
                channelId,
                onRemove,
                onEdit(arg0) {
                  let tmpResult;
                  if (onEdit != null) {
                    tmpResult = tmp(id, arg0);
                  }
                  return tmpResult;
                },
                upload,
              };
              tmp = closure_1(closure_2[17])(obj);
              return;
            }
          }
          class P {
            constructor() {
              tmpResult = undefined;
              if (onRemove != null) {
                tmp3 = id;
                tmpResult = tmp(id);
              }
              return tmpResult;
            }
          }
          cResult[8] = id;
          cResult[9] = onEdit;
          cResult[10] = onRemove;
          cResult[11] = upload;
          cResult[12] = O;
        }
        class P {
          constructor() {
            tmpResult = undefined;
            if (onRemove != null) {
              tmp3 = id;
              tmpResult = tmp(id);
            }
            return tmpResult;
          }
        }
        cResult[4] = id;
        cResult[5] = onRemove;
        cResult[6] = P;
        tmp13 = P;
        let tmpResult = tmp(tmp2[16]);
      }
      const fn = function o() {
        upload = UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage);
        let flag;
        if (upload != null) {
          flag = upload.spoiler;
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      };
      cResult[1] = channelId;
      cResult[2] = id;
      cResult[3] = fn;
      tmp11 = fn;
      const tmp7 = onRemove(channelId[14]);
    }
  : function Tile(onEdit) {
      onEdit = onEdit.onEdit;
      const onRemove = onEdit.onRemove;
      const channelId = onEdit.channelId;
      let flag = onEdit.highlightThumbnails;
      if (flag === undefined) {
        flag = false;
      }
      let upload = onEdit.upload;
      id = undefined;
      const tmp = closure_13();
      ({ description, id } = upload);
      ({ item, isVideo, isImage, isThumbnail } = upload);
      onRemove(channelId[14])(
        item.platform === onEdit(channelId[15]).UploadPlatform.REACT_NATIVE,
        "Upload must be a React Native upload item.",
      );
      const tmp4 = onRemove(channelId[14]);
      const items = [UploadAttachmentStore];
      const stateFromStores = onEdit(channelId[16]).useStateFromStores(items, () => {
        upload = UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage);
        let flag;
        if (upload != null) {
          flag = upload.spoiler;
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      });
      const items1 = [onRemove, id];
      const items2 = [channelId, onRemove, onEdit, upload, id];
      const callback = upload.useCallback(() => {
        let tmpResult;
        if (onRemove != null) {
          tmpResult = tmp(id);
        }
        return tmpResult;
      }, items1);
      let uri = item.id;
      const callback1 = upload.useCallback(() => {
        showUploadPreviewActionSheetDefault({
          channelId,
          onRemove,
          onEdit(arg0) {
            let tmpResult;
            if (onEdit != null) {
              tmpResult = tmp(id, arg0);
            }
            return tmpResult;
          },
          upload,
        });
      }, items2);
      if (uri == null) {
        uri = item.uri;
      }
      const obj2 = {
        itemKey: uri,
        uri: item.uri,
        fileName: item.filename,
        isImage,
        isVideo,
        isHighlighted: null,
        accessibilityLabel: null,
        accessibilityHint: null,
        removeAccessibilityLabel: null,
        onPress: null,
        onRemove: null,
        children: null,
      };
      if (flag) {
        flag = true === isThumbnail;
      }
      obj2.isHighlighted = flag;
      const intl = tmp5(tmp3[18]).intl;
      let str = item.filename;
      if (str == null) {
        str = "";
      }
      obj2.accessibilityLabel = intl.formatToPlainString(onEdit(channelId[18]).t.MJHFt9, { name: str });
      const intl2 = tmp5(tmp3[18]).intl;
      obj2.accessibilityHint = intl2.string(onEdit(channelId[18]).t.QtJ1c5);
      const intl3 = tmp5(tmp3[18]).intl;
      let str2 = item.filename;
      if (str2 == null) {
        str2 = "";
      }
      obj2.removeAccessibilityLabel = intl3.formatToPlainString(onEdit(channelId[18]).t.FxKgb3, { name: str2 });
      if (isImage) {
        const tmp12 = callback1;
      }
      obj2.onPress = tmp12;
      obj2.onRemove = callback;
      let tmp13 = null;
      if (isThumbnail) {
        const obj3 = { style: tmp.footerRightContainer, children: null };
        const obj4 = { source: tmp2(tmp3[19]), size: tmp5(tmp3[12]).Icon.Sizes.SMALL_14 };
        obj3.children = closure_11(tmp5(tmp3[12]).Icon, obj4);
        tmp13 = closure_11(id, obj3);
      }
      const items3 = [tmp13];
      const obj5 = { style: tmp.decorationsContainer, children: null };
      let tmp17 = null;
      if (stateFromStores) {
        const obj6 = { style: tmp.spoilerOverlay };
        tmp17 = closure_11(tmp2(tmp3[20]), obj6);
      }
      const items4 = [tmp17, ,];
      let tmp19 = null;
      if (null != description) {
        let length;
        if (description != null) {
          length = description.length;
        }
        tmp19 = null;
        if (length > 0) {
          const obj7 = {
            variant: "text-xs/medium",
            color: "text-overlay-light",
            allowFontScaling: false,
            style: tmp.altTagText,
            children: null,
          };
          const intl4 = tmp5(tmp3[18]).intl;
          obj7.children = intl4.string(tmp5(tmp3[18]).t.QEW81z);
          tmp19 = closure_11(tmp5(tmp3[21]).Text, obj7);
        }
      }
      const items5 = [tmp19];
      let tmp22 = null;
      if (isVideo) {
        const obj8 = {
          style: tmp.iconContainer,
          children: closure_11(tmp5(tmp3[22]).PlayIcon, { size: "xxs", color: "white" }),
        };
        tmp22 = closure_11(tmp16, obj8);
      }
      items5[1] = tmp22;
      items4[1] = closure_12(id, { children: items5 });
      let tmp24 = null;
      if (stateFromStores) {
        const obj9 = {
          style: tmp.iconContainer,
          children: closure_11(tmp5(tmp3[23]).EyeIcon, { size: "xxs", color: "white" }),
        };
        tmp24 = closure_11(tmp16, obj9);
      }
      items4[2] = tmp24;
      obj5.children = items4;
      items3[1] = closure_12(id, obj5);
      obj2.children = items3;
      return closure_12(closure_18, obj2);
    };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ImageCarouselTile(children) {
      const cResult = c.c(50);
      ({
        uri,
        fileName,
        isImage,
        isVideo,
        isHighlighted,
        accessibilityLabel,
        accessibilityHint,
        removeAccessibilityLabel,
        onPress,
        onRemove,
      } = children);
      children = children.children;
      let highlightedTileContainer = undefined !== isHighlighted;
      if (highlightedTileContainer) {
        highlightedTileContainer = isHighlighted;
      }
      const tmp4 = closure_13();
      if (highlightedTileContainer) {
        let diff = closure_10 - 4;
      } else {
        diff = closure_10;
      }
      if (cResult[0] !== onRemove) {
        const fn = function n(nativeEvent) {
          if ("remove" === nativeEvent.nativeEvent.actionName) {
            onRemove();
          }
        };
        cResult[0] = onRemove;
        cResult[1] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[1];
      }
      const tmp11 = closure_16(children.itemKey);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { name: "remove", label: null };
        const intl = util.intl;
        obj2.label = intl.string(util.t.kFwAsa);
        const items = [obj2];
        cResult[2] = items;
        let tmp12 = items;
      } else {
        tmp12 = cResult[2];
      }
      if (highlightedTileContainer) {
        highlightedTileContainer = tmp4.highlightedTileContainer;
      }
      if (cResult[3] === tmp4.pressableContainer) {
        if (cResult[4] === highlightedTileContainer) {
          let tmp14 = cResult[5];
        }
        if (cResult[6] === diff) {
          if (cResult[7] === tmp9) {
            let tmp15 = cResult[8];
          }
          if (cResult[9] === tmp4.tileContainer) {
            if (cResult[10] === tmp15) {
              if (cResult[11] === tmp11) {
                let tmp16 = cResult[12];
              }
              if (cResult[13] === fileName) {
                if (cResult[14] === diff) {
                  if (cResult[15] === isImage) {
                    if (cResult[16] === isVideo) {
                      if (cResult[17] === num2) {
                        if (cResult[18] === uri) {
                          if (cResult[19] === tmp9) {
                            let tmp17 = cResult[20];
                          }
                          if (cResult[21] === children) {
                            if (cResult[22] === tmp16) {
                              if (cResult[23] === tmp17) {
                                let tmp22 = cResult[24];
                              }
                              if (cResult[25] === accessibilityHint) {
                                if (cResult[26] === accessibilityLabel) {
                                  if (cResult[27] === tmp10) {
                                    if (cResult[28] === onPress) {
                                      if (cResult[29] === tmp22) {
                                        if (cResult[30] === tmp13) {
                                          if (cResult[31] === tmp14) {
                                            let tmp26 = cResult[32];
                                          }
                                          const _Symbol = Symbol;
                                          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                                            const rect = { top: 4, bottom: 4, left: 4, right: 4 };
                                            cResult[33] = rect;
                                            let tmp29 = rect;
                                          } else {
                                            tmp29 = cResult[33];
                                          }
                                          if (cResult[34] === tmp4.closeContainer) {
                                            if (cResult[35] === tmp11) {
                                              let tmp30 = cResult[36];
                                            }
                                            if (cResult[37] !== tmp4.closeButtonIcon) {
                                              const obj3 = {
                                                source: _modDef6620,
                                                size: native.Icon.Sizes.MEDIUM,
                                                color: nativeDefault.unsafe_rawColors.PRIMARY_500,
                                                style: tmp4.closeButtonIcon,
                                              };
                                              const tmp34 = closure_1_11(native.Icon, obj3);
                                              cResult[37] = tmp4.closeButtonIcon;
                                              cResult[38] = tmp34;
                                              let tmp31 = tmp34;
                                            } else {
                                              tmp31 = cResult[38];
                                            }
                                            if (cResult[39] === tmp30) {
                                              if (cResult[40] === tmp31) {
                                                let tmp35 = cResult[41];
                                              }
                                              if (cResult[42] === onRemove) {
                                                if (cResult[43] === removeAccessibilityLabel) {
                                                  if (cResult[44] === tmp4.closeButton) {
                                                    if (cResult[45] === tmp35) {
                                                      let tmp39 = cResult[46];
                                                    }
                                                    if (cResult[47] === tmp26) {
                                                      if (cResult[48] === tmp39) {
                                                        let tmp42 = cResult[49];
                                                      }
                                                      return tmp42;
                                                    }
                                                    const obj4 = { children: null };
                                                    const items1 = [tmp26, tmp39];
                                                    obj4.children = items1;
                                                    const tmp45 = __initData(React4, obj4);
                                                    cResult[47] = tmp26;
                                                    cResult[48] = tmp39;
                                                    cResult[49] = tmp45;
                                                    tmp42 = tmp45;
                                                  }
                                                }
                                              }
                                              const obj5 = {
                                                accessibilityRole: "button",
                                                accessibilityLabel: removeAccessibilityLabel,
                                                style: tmp4.closeButton,
                                                onPress: onRemove,
                                                hitSlop: tmp29,
                                                children: tmp35,
                                              };
                                              const tmp41 = closure_1_11(Pressables.PressableOpacity, obj5);
                                              cResult[42] = onRemove;
                                              cResult[43] = removeAccessibilityLabel;
                                              cResult[44] = tmp4.closeButton;
                                              cResult[45] = tmp35;
                                              cResult[46] = tmp41;
                                              tmp39 = tmp41;
                                            }
                                            const obj6 = { style: tmp30, children: tmp31 };
                                            const tmp38 = closure_1_11(ReanimatedRexportDefault.View, obj6);
                                            cResult[39] = tmp30;
                                            cResult[40] = tmp31;
                                            cResult[41] = tmp38;
                                            tmp35 = tmp38;
                                          }
                                          const items2 = [tmp4.closeContainer, tmp11];
                                          cResult[34] = tmp4.closeContainer;
                                          cResult[35] = tmp11;
                                          cResult[36] = items2;
                                          tmp30 = items2;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj7 = {
                                accessibilityRole: "button",
                                accessibilityLabel,
                                accessibilityHint,
                                accessibilityActions: tmp12,
                                onAccessibilityAction: tmp10,
                                disabled: tmp13,
                                onPress,
                                style: tmp14,
                                children: tmp22,
                              };
                              const tmp28 = closure_1_11(Pressables.PressableOpacity, obj7);
                              cResult[25] = accessibilityHint;
                              cResult[26] = accessibilityLabel;
                              cResult[27] = tmp10;
                              cResult[28] = onPress;
                              cResult[29] = tmp22;
                              cResult[30] = tmp13;
                              cResult[31] = tmp14;
                              cResult[32] = tmp28;
                              tmp26 = tmp28;
                            }
                          }
                          const obj8 = { style: tmp16, children: null };
                          const items3 = [tmp17, children];
                          obj8.children = items3;
                          const tmp25 = __initData(ReanimatedRexportDefault.View, obj8);
                          cResult[21] = children;
                          cResult[22] = tmp16;
                          cResult[23] = tmp17;
                          cResult[24] = tmp25;
                          tmp22 = tmp25;
                        }
                      }
                    }
                  }
                }
              }
              const size = {
                uri,
                isImage,
                isVideo,
                width: tmp9,
                height: diff,
                maxFileWidth: num2,
                fileName,
                borderRadius: nativeDefault.radii.md,
              };
              const tmp21 = closure_1_11(AttachmentPreviewDefault, size);
              cResult[13] = fileName;
              cResult[14] = diff;
              cResult[15] = isImage;
              cResult[16] = isVideo;
              cResult[17] = num2;
              cResult[18] = uri;
              cResult[19] = tmp9;
              cResult[20] = tmp21;
              tmp17 = tmp21;
            }
          }
          const items4 = [tmp4.tileContainer, tmp15, tmp11];
          cResult[9] = tmp4.tileContainer;
          cResult[10] = tmp15;
          cResult[11] = tmp11;
          cResult[12] = items4;
          tmp16 = items4;
        }
        const size1 = { width: tmp9, height: diff };
        cResult[6] = diff;
        cResult[7] = tmp9;
        cResult[8] = size1;
        tmp15 = size1;
      }
      const items5 = [tmp4.pressableContainer, highlightedTileContainer];
      cResult[3] = tmp4.pressableContainer;
      cResult[4] = highlightedTileContainer;
      cResult[5] = items5;
      tmp14 = items5;
    }
  : function ImageCarouselTile(arg0) {
      ({ isImage, isVideo, isHighlighted } = arg0);
      ({ itemKey, uri, fileName } = arg0);
      if (isHighlighted === undefined) {
        isHighlighted = false;
      }
      ({ onPress, onRemove } = arg0);
      ({ accessibilityLabel, accessibilityHint, removeAccessibilityLabel, children } = arg0);
      const tmp = closure_13();
      let tmp2 = isImage;
      if (!isImage) {
        tmp2 = isVideo;
      }
      if (isHighlighted) {
        let diff = closure_10 - 4;
        let tmp4 = closure_10;
      } else {
        tmp4 = closure_10;
        diff = closure_10;
      }
      let tmp6;
      if (tmp2) {
        tmp6 = tmp4;
      }
      const items = [onRemove];
      const callback = noop.useCallback((nativeEvent) => {
        if ("remove" === nativeEvent.nativeEvent.actionName) {
          onRemove();
        }
      }, items);
      const tmp8 = closure_16(itemKey);
      const obj = { name: "remove", label: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.kFwAsa);
      const items1 = [obj];
      const obj2 = {
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityHint,
        accessibilityActions: items1,
        onAccessibilityAction: callback,
        disabled: null == onPress,
        onPress,
        style: null,
        children: null,
      };
      const items2 = [tmp.pressableContainer];
      if (isHighlighted) {
        isHighlighted = tmp.highlightedTileContainer;
      }
      const obj3 = { children: null };
      items2[1] = isHighlighted;
      obj2.style = items2;
      const obj4 = { style: null, children: null };
      const items3 = [tmp.tileContainer, { width: tmp6, height: diff }, tmp8];
      obj4.style = items3;
      const size = {
        uri,
        isImage,
        isVideo,
        width: tmp6,
        height: diff,
        maxFileWidth: num2,
        fileName,
        borderRadius: nativeDefault.radii.md,
      };
      const items4 = [closure_1_11(AttachmentPreviewDefault, size), children];
      obj4.children = items4;
      obj2.children = __initData(ReanimatedRexportDefault.View, obj4);
      const items5 = [closure_1_11(Pressables.PressableOpacity, obj2)];
      const obj5 = {
        accessibilityRole: "button",
        accessibilityLabel: removeAccessibilityLabel,
        style: tmp.closeButton,
        onPress: onRemove,
        hitSlop: { top: 4, bottom: 4, left: 4, right: 4 },
        children: null,
      };
      const obj6 = { style: null, children: null };
      const items6 = [tmp.closeContainer, tmp8];
      obj6.style = items6;
      obj6.children = closure_1_11(native.Icon, {
        source: _modDef6620,
        size: native.Icon.Sizes.MEDIUM,
        color: nativeDefault.unsafe_rawColors.PRIMARY_500,
        style: tmp.closeButtonIcon,
      });
      obj5.children = closure_1_11(ReanimatedRexportDefault.View, obj6);
      items5[1] = closure_1_11(Pressables.PressableOpacity, obj5);
      obj3.children = items5;
      return __initData(React4, obj3);
    };
let closure_18 = tmp8;
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomScrollView(arg0) {
      const cResult = require("c").c(5);
      let tmp2 = closure_13();
      _require = noop.useRef(0);
      noop.useRef(0);
      ref = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(current) {
          if (tmp2) {
            current = ref.current;
            if (current != null) {
              current.scrollToEnd();
            }
          }
          ref.current = current;
          tmp2 = current > ref.current || ref2.current + useWindowDimensions.getWindowDimensions().width > current;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function y(nativeEvent) {
          closure_1.current = nativeEvent.nativeEvent.contentOffset.x;
        };
        cResult[1] = fn2;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === arg0) {
        if (cResult[3] === tmp2.scrollview) {
          let tmp6 = cResult[4];
        }
        return tmp6;
      }
      const obj2 = {};
      const merged = Object.assign(arg0);
      obj2.ref = ref;
      obj2.onContentSizeChange = first;
      obj2.onScroll = tmp5;
      obj2.scrollEventThrottle = 16;
      obj2.contentContainerStyle = tmp2.scrollview;
      const tmp8 = closure_11(closure_5, obj2);
      cResult[2] = arg0;
      cResult[3] = tmp2.scrollview;
      cResult[4] = tmp8;
      tmp6 = tmp8;
    }
  : function CustomScrollView(arg0) {
      noop.useRef(0);
      noop.useRef(0);
      const ref = noop.useRef(null);
      const callback = noop.useCallback((current) => {
        if (tmp2) {
          current = ref.current;
          if (current != null) {
            current.scrollToEnd();
          }
        }
        ref.current = current;
        tmp2 = current > ref.current || ref2.current + useWindowDimensions.getWindowDimensions().width > current;
      }, []);
      let obj = {};
      const callback1 = noop.useCallback((nativeEvent) => {
        closure_1.current = nativeEvent.nativeEvent.contentOffset.x;
      }, []);
      const merged = Object.assign(arg0);
      obj.ref = ref;
      obj.onContentSizeChange = callback;
      obj.onScroll = callback1;
      obj.scrollEventThrottle = 16;
      obj.contentContainerStyle = closure_13().scrollview;
      return closure_11(closure_5, obj);
    };
fn(558);
let obj8 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_4,
};
let obj9 = {};
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ImageCarouselRow(arg0) {
      const cResult = c.c(14);
      ({ visible, style, children } = arg0);
      const tmp4 = closure_13();
      let num = 0;
      if (visible) {
        num = closure_10 + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
      }
      let num2 = 0;
      if (visible) {
        num2 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
      }
      let num4 = 0;
      if (visible) {
        num4 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
      }
      if (cResult[0] === num) {
        if (cResult[1] === num2) {
          if (cResult[2] === num4) {
            let tmp10 = cResult[3];
          }
          if (cResult[4] === style) {
            if (cResult[5] === tmp4.container) {
              if (cResult[6] === tmp10) {
                let tmp11 = cResult[7];
              }
              const _Symbol = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = util.intl;
                const stringResult = intl.string(util.t.RhtzFe);
                cResult[8] = stringResult;
                let tmp13 = stringResult;
              } else {
                tmp13 = cResult[8];
              }
              if (cResult[9] !== children) {
                const obj2 = {
                  horizontal: true,
                  keyboardShouldPersistTaps: "always",
                  showsHorizontalScrollIndicator: false,
                  accessibilityRole: "list",
                  accessibilityLabel: tmp13,
                  children,
                };
                const tmp18 = closure_1_11(closure_19, obj2);
                cResult[9] = children;
                cResult[10] = tmp18;
                let tmp15 = tmp18;
              } else {
                tmp15 = cResult[10];
              }
              if (cResult[11] === tmp11) {
                if (cResult[12] === tmp15) {
                  let tmp19 = cResult[13];
                }
                return tmp19;
              }
              const obj3 = { style: tmp11, children: tmp15 };
              const tmp22 = closure_1_11(React4, obj3);
              cResult[11] = tmp11;
              cResult[12] = tmp15;
              cResult[13] = tmp22;
              tmp19 = tmp22;
            }
          }
          const items = [tmp4.container, tmp10, style];
          cResult[4] = style;
          cResult[5] = tmp4.container;
          cResult[6] = tmp10;
          cResult[7] = items;
          tmp11 = items;
        }
      }
      const obj4 = { height: num, marginTop: num2, marginBottom: num4 };
      cResult[0] = num;
      cResult[1] = num2;
      cResult[2] = num4;
      cResult[3] = obj4;
      tmp10 = obj4;
    }
  : function ImageCarouselRow(visible) {
      visible = visible.visible;
      ({ style, children } = visible);
      const items = [closure_13().container, ,];
      let num = 0;
      if (visible) {
        num = closure_10 + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
      }
      const obj = { height: num, marginTop: null, marginBottom: null };
      let num2 = 0;
      if (visible) {
        num2 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
      }
      obj.marginTop = num2;
      let num4 = 0;
      if (visible) {
        num4 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
      }
      const obj2 = { style: items, children: null };
      obj.marginBottom = num4;
      items[1] = obj;
      items[2] = style;
      const obj3 = {
        horizontal: true,
        keyboardShouldPersistTaps: "always",
        showsHorizontalScrollIndicator: false,
        accessibilityRole: "list",
        accessibilityLabel: null,
        children: null,
      };
      const intl = util.intl;
      obj3.accessibilityLabel = intl.string(util.t.RhtzFe);
      obj3.children = children;
      obj2.children = closure_1_11(closure_19, obj3);
      return closure_1_11(React4, obj2);
    };
let closure_20 = tmp10;
size = fn(2);
let result = size.fileFinishedImporting("components_native/chat/ImageCarousel.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ImageCarousel(arg0) {
        const cResult = channelId(576).c(15);
        ({ attachments, channelId } = arg0);
        ({ headerElement, highlightThumbnails } = arg0);
        highlightThumbnails = tmp2;
        let tmp3 = null != attachments;
        if (tmp3) {
          tmp3 = attachments.length > 0;
        }
        if (cResult[0] !== channelId) {
          const fn = function n(arg0) {
            UploadAttachmentActionCreatorsDefault.remove(channelId, arg0, DraftType.ChannelMessage);
          };
          cResult[0] = channelId;
          cResult[1] = fn;
          let tmp4 = fn;
        } else {
          tmp4 = cResult[1];
        }
        dependencyMap = tmp4;
        if (cResult[2] === channelId) {
          if (cResult[3] === tmp4) {
            let tmp5 = cResult[4];
          }
          const onEdit = tmp5;
          if (!tmp3) {
            tmp3 = null != headerElement;
          }
          if (cResult[5] === attachments) {
            if (cResult[6] === channelId) {
              if (cResult[7] === tmp2) {
                if (cResult[8] === tmp5) {
                  if (cResult[9] === tmp4) {
                    let tmp6 = cResult[10];
                  }
                  if (cResult[11] === headerElement) {
                    if (cResult[12] === tmp3) {
                      if (cResult[13] === tmp6) {
                        let tmp9 = cResult[14];
                      }
                      return tmp9;
                    }
                  }
                  const obj2 = { visible: tmp3, children: null };
                  let items = [headerElement, tmp6];
                  obj2.children = items;
                  const tmp12 = closure_12(closure_20, obj2);
                  cResult[11] = headerElement;
                  cResult[12] = tmp3;
                  cResult[13] = tmp6;
                  cResult[14] = tmp12;
                  tmp9 = tmp12;
                }
              }
            }
          }
          let mapped = null;
          if (null != attachments) {
            const _Object = Object;
            const values = Object.values(attachments);
            mapped = values.map((upload) =>
              closure_2_11(closure_17, { channelId, highlightThumbnails, onEdit, onRemove, upload }, upload.uniqueId),
            );
          }
          cResult[5] = attachments;
          cResult[6] = channelId;
          cResult[7] = tmp2;
          cResult[8] = tmp5;
          cResult[9] = tmp4;
          cResult[10] = mapped;
          tmp6 = mapped;
        }
        class C {
          constructor(arg0, arg1) {
            if (closure_2 != null) {
              tmp2 = arg0;
              tmpResult = tmp(arg0);
            }
            obj = closure_0(closure_2[29]);
            items = [];
            items[0] = arg1;
            addImagesFromPickerResult = obj.addImagesFromPicker(
              channelId,
              items,
              closure_0(closure_2[30]).UploadOrigin.IMAGE_EDITOR,
            );
            return;
          }
        }
        cResult[2] = channelId;
        cResult[3] = tmp4;
        cResult[4] = C;
        tmp5 = C;
        const obj = channelId(576);
      }
    : function ImageCarousel(arg0) {
        ({ attachments, channelId } = arg0);
        ({ headerElement, highlightThumbnails } = arg0);
        if (highlightThumbnails === undefined) {
          highlightThumbnails = false;
        }
        let onRemove;
        noop = undefined;
        let tmp = null != attachments;
        if (tmp) {
          tmp = attachments.length > 0;
        }
        let items = [channelId];
        onRemove = noop.useCallback((arg0) => {
          UploadAttachmentActionCreatorsDefault.remove(channelId, arg0, DraftType.ChannelMessage);
        }, items);
        const items1 = [channelId, onRemove];
        noop = noop.useCallback((arg0, arg1) => {
          if (callback != null) {
            tmp(arg0);
          }
          const items = [arg1];
          MediaKeyboardUtils.addImagesFromPicker(channelId, items, Upload.UploadOrigin.IMAGE_EDITOR);
        }, items1);
        if (!tmp) {
          tmp = null != headerElement;
        }
        const obj = { visible: tmp, children: null };
        const items2 = [headerElement];
        let mapped = null;
        if (null != attachments) {
          const _Object = Object;
          const values = Object.values(attachments);
          mapped = values.map((upload) =>
            closure_2_11(closure_17, { channelId, highlightThumbnails, onEdit, onRemove, upload }, upload.uniqueId),
          );
        }
        items2[1] = mapped;
        obj.children = items2;
        return closure_12(closure_20, obj);
      },
);
export const useTileEntranceAnimatedStyle = tmp7;
export const ImageCarouselTile = tmp8;
export const ImageCarouselRow = tmp10;
