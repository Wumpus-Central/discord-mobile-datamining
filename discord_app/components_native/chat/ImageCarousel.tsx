// discord_app/components_native/chat/ImageCarousel.tsx
import react2 from "../../../_runtime/00576_react.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import useWindowDimensions from "../../modules/screen/useWindowDimensions.native.tsx";
import ReanimatedRexportDefault from "../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../design/animation/reanimated/spring/spring.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import AssetRegistryDefault from "../../../_runtime/06427_AssetRegistry.js";
import DraftStore from "../../stores/DraftStore.tsx";
import Upload from "../../lib/uploader/Upload.tsx";
import UploadAttachmentActionCreatorsDefault from "../../actions/UploadAttachmentActionCreators.tsx";
import showUploadPreviewActionSheetDefault from "../../modules/media_uploads/native/showUploadPreviewActionSheet.tsx";
import MediaKeyboardUtils from "../../modules/media_keyboard/native/MediaKeyboardUtils.tsx";
import AttachmentPreviewDefault from "../../modules/media/native/AttachmentPreview.tsx";
import react_mod from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import UploadAttachmentStore from "../../stores/UploadAttachmentStore.tsx";
import ImageCarouselConstants from "../../modules/image/native/ImageCarouselConstants.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let StyleSheet;
let closure_12;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let rect;
let rect1;
let size;
let unpackModuleId;
let react = react_mod;
({ View: closure_4, StyleSheet, ScrollView: hasOwnProperty } = react_native);
const DraftType = DraftStore.DraftType;
const IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = ImageCarouselConstants.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
const IMAGE_CAROUSEL_TILE_HEIGHT = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_HEIGHT;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { width: "100%" },
  pressableContainer: { marginHorizontal: 4 },
  tileContainer: obj2,
  decorationsContainer: obj3,
  highlightedTileContainer: obj4,
  closeButton: rect,
  scrollview: { paddingTop: IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING },
  closeContainer: size,
  closeButtonIcon: obj5,
  altTagText: obj6,
  iconContainer: obj7,
  spoilerOverlay: obj8,
  footerRightContainer: rect1,
};
obj2 = {
  position: "relative",
  minWidth: 60,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.md - 1,
};
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", padding: 4 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = {
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  borderStyle: "solid",
  borderWidth: 2,
  borderRadius: 10,
};
rect = { position: "absolute", top: -1 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN, right: 2 };
size = {
  height: 20,
  width: 20,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
};
obj5 = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
obj6 = {
  paddingHorizontal: nativeDefault.space.PX_4,
  lineHeight: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.xs,
  textTransform: "uppercase",
};
obj7 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_4,
};
obj8 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
rect1 = {
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
let closure_13 = createStyles(obj);
const __initData = {
  code: 'function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},"respect-motion-settings"),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},"respect-motion-settings")}]};}',
};
const __initData2 = {
  code: "function ImageCarouselTsx2(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let sharedValue;
      let tmp5;
      const tmp = sharedValue;
      let obj = sharedValue(576);
      const cResult = obj.c(5);
      let obj2 = sharedValue(4612);
      sharedValue = obj2.useSharedValue(0);
      if (cResult[0] !== sharedValue) {
        const fn = function o() {
          const result = sharedValue.set(1);
        };
        cResult[0] = sharedValue;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === sharedValue) {
        let tmp6;
        if (cResult[3] === arg0) {
          tmp6 = cResult[4];
        }
        const effect = react.useEffect(tmp5, tmp6);
        const fn2 = function s() {
          let items;
          let obj2;
          let obj4;
          let value;
          let withTiming;
          const obj = { opacity: withTiming(value, obj2, "respect-motion-settings"), transform: items };
          withTiming = timing.withTiming;
          obj2 = { duration: 300, easing: native.STANDARD_EASING };
          timing;
          value = sharedValue.get();
          const obj3 = {
            scale: obj4.withSpring(
              sharedValue.get(),
              { stiffness: 80, damping: 6, mass: 0.3 },
              "respect-motion-settings",
            ),
          };
          items = [obj3];
          obj4 = spring;
          return obj;
        };
        let obj3 = {
          withTiming: tmp(4891).withTiming,
          animatedStylePropValue: sharedValue,
          STANDARD_EASING: tmp(1188).STANDARD_EASING,
          withSpring: tmp(5597).withSpring,
        };
        const useAnimatedStyle = tmp(4612).useAnimatedStyle;
        tmp(4612);
        fn2.__closure = obj3;
        fn2.__workletHash = 14689938623095;
        fn2.__initData = __initData;
        return useAnimatedStyle(fn2);
      }
      let items = [sharedValue, arg0];
      cResult[2] = sharedValue;
      cResult[3] = arg0;
      cResult[4] = items;
      tmp6 = items;
    }
  : (arg0) => {
      let sharedValue;
      let obj = sharedValue(4612);
      sharedValue = obj.useSharedValue(0);
      let items = [sharedValue, arg0];
      const effect = react.useEffect(() => {
        const result = sharedValue.set(1);
      }, items);
      let obj2 = sharedValue(4612);
      const fn = function o() {
        let items;
        let obj2;
        let obj4;
        let value;
        let withTiming;
        const obj = { opacity: withTiming(value, obj2, "respect-motion-settings"), transform: items };
        withTiming = timing.withTiming;
        obj2 = { duration: 300, easing: native.STANDARD_EASING };
        timing;
        value = sharedValue.get();
        const obj3 = {
          scale: obj4.withSpring(
            sharedValue.get(),
            { stiffness: 80, damping: 6, mass: 0.3 },
            "respect-motion-settings",
          ),
        };
        items = [obj3];
        obj4 = spring;
        return obj;
      };
      let obj3 = {
        withTiming: sharedValue(4891).withTiming,
        animatedStylePropValue: sharedValue,
        STANDARD_EASING: sharedValue(1188).STANDARD_EASING,
        withSpring: sharedValue(5597).withSpring,
      };
      fn.__closure = obj3;
      fn.__workletHash = 1893609222612;
      fn.__initData = __initData2;
      return obj2.useAnimatedStyle(fn);
    };
let closure_16 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onEdit) => {
      let channelId;
      let description;
      let first;
      let highlightThumbnails;
      let id;
      let isImage;
      let isThumbnail;
      let isVideo;
      let item;
      let upload;
      let tmp = onEdit;
      let obj = onEdit(channelId[9]);
      const cResult = obj.c(54);
      onEdit = onEdit.onEdit;
      const onRemove = onEdit.onRemove;
      channelId = onEdit.channelId;
      ({ highlightThumbnails, upload } = onEdit);
      let tmp4 = undefined !== highlightThumbnails && highlightThumbnails;
      const tmp5 = closure_13();
      ({ description, id } = upload);
      ({ item, isVideo, isImage, isThumbnail } = upload);
      const tmp7 = onRemove(channelId[14]);
      tmp7(
        item.platform === tmp(channelId[15]).UploadPlatform.REACT_NATIVE,
        "Upload must be a React Native upload item.",
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UploadAttachmentStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        let tmp11;
        if (cResult[2] === id) {
          tmp11 = cResult[3];
        }
        let tmpResult = tmp(tmp2[16]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp11);
        if (cResult[4] === id) {
          let tmp13;
          if (cResult[5] === onRemove) {
            tmp13 = cResult[6];
          }
          if (cResult[7] === channelId) {
            if (cResult[8] === id) {
              if (cResult[9] === onEdit) {
                if (cResult[10] === onRemove) {
                  let tmp16;
                  let tmp19;
                  let tmp21;
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
                      let tmpResult;
                      if (onRemove != null) {
                        tmpResult = tmp(id);
                      }
                      return tmpResult;
                    }
                  }
                  const filename = item.filename;
                  if (tmp4) {
                    let flag = true;
                    tmp4 = true === isThumbnail;
                  }
                  if (cResult[13] !== item.filename) {
                    const intl = tmp(tmp2[18]).intl;
                    const formatToPlainString = intl.formatToPlainString;
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
                    const MJHFt9 = tmp(tmp2[18]).t.MJHFt9;
                    class P {
                      constructor() {
                        let tmpResult;
                        if (onRemove != null) {
                          tmpResult = tmp(id);
                        }
                        return tmpResult;
                      }
                    }
                    const obj2 = { name: tmp17 };
                    const formatToPlainStringResult = formatToPlainString(MJHFt9, obj2);
                    cResult[13] = item.filename;
                    cResult[14] = formatToPlainStringResult;
                    tmp16 = formatToPlainStringResult;
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
                        let tmpResult;
                        if (onRemove != null) {
                          tmpResult = tmp(id);
                        }
                        return tmpResult;
                      }
                    }
                    tmp19 = tmp20;
                  } else {
                    tmp19 = cResult[15];
                  }
                  if (cResult[16] !== item.filename) {
                    const intl2 = tmp(tmp2[18]).intl;
                    const formatToPlainString2 = intl2.formatToPlainString;
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
                    const FxKgb3 = tmp(tmp2[18]).t.FxKgb3;
                    class P {
                      constructor() {
                        let tmpResult;
                        if (onRemove != null) {
                          tmpResult = tmp(id);
                        }
                        return tmpResult;
                      }
                    }
                    const obj3 = { name: tmp22 };
                    const formatToPlainString2Result = formatToPlainString2(FxKgb3, obj3);
                    cResult[16] = item.filename;
                    cResult[17] = formatToPlainString2Result;
                    tmp21 = formatToPlainString2Result;
                  } else {
                    tmp21 = cResult[17];
                  }
                  if (cResult[18] === isThumbnail) {
                    let tmp25;
                    let tmp32;
                    if (cResult[19] === tmp5.footerRightContainer) {
                      tmp25 = cResult[20];
                    }
                    if (cResult[21] === stateFromStores) {
                      let tmp31;
                      if (cResult[22] === tmp5.spoilerOverlay) {
                        tmp31 = cResult[23];
                      }
                      if (cResult[24] === description) {
                        let tmp34;
                        let tmp37;
                        if (cResult[25] === tmp5.altTagText) {
                          tmp34 = cResult[26];
                        }
                        if (cResult[27] === isVideo) {
                          let tmp36;
                          if (cResult[28] === tmp5.iconContainer) {
                            tmp36 = cResult[29];
                          }
                          if (cResult[30] === tmp34) {
                            let tmp41;
                            let tmp46;
                            if (cResult[31] === tmp36) {
                              tmp41 = cResult[32];
                            }
                            if (cResult[33] === stateFromStores) {
                              let tmp45;
                              if (cResult[34] === tmp5.iconContainer) {
                                tmp45 = cResult[35];
                              }
                              if (cResult[36] === tmp5.decorationsContainer) {
                                if (cResult[37] === tmp31) {
                                  if (cResult[38] === tmp41) {
                                    let tmp50;
                                    if (cResult[39] === tmp45) {
                                      tmp50 = cResult[40];
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
                                                          let tmp54;
                                                          if (cResult[52] === tmp4) {
                                                            tmp54 = cResult[53];
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
                                        let tmpResult;
                                        if (onRemove != null) {
                                          tmpResult = tmp(id);
                                        }
                                        return tmpResult;
                                      }
                                    }
                                    tmp56[0] = uri;
                                    tmp56[1] = tmp15;
                                    tmp56[2] = filename;
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
                                  let tmpResult;
                                  if (onRemove != null) {
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
                                  let tmpResult;
                                  if (onRemove != null) {
                                    tmpResult = tmp(id);
                                  }
                                  return tmpResult;
                                }
                              }
                              tmp46 = closure_11(id, tmp49);
                            }
                            class P {
                              constructor() {
                                let tmpResult;
                                if (onRemove != null) {
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
                              let tmpResult;
                              if (onRemove != null) {
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
                              let tmpResult;
                              if (onRemove != null) {
                                tmpResult = tmp(id);
                              }
                              return tmpResult;
                            }
                          }
                          tmp37 = closure_11(id, tmp40);
                        }
                        class P {
                          constructor() {
                            let tmpResult;
                            if (onRemove != null) {
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
                            let tmpResult;
                            if (onRemove != null) {
                              tmpResult = tmp(id);
                            }
                            return tmpResult;
                          }
                        }
                      }
                      class P {
                        constructor() {
                          let tmpResult;
                          if (onRemove != null) {
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
                      const obj4 = { style: null };
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
                      tmp32 = closure_11(onRemove(channelId[20]), obj4);
                    }
                    class P {
                      constructor() {
                        let tmpResult;
                        if (onRemove != null) {
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
                        let tmpResult;
                        if (onRemove != null) {
                          tmpResult = tmp(id);
                        }
                        return tmpResult;
                      }
                    }
                    const Icon = tmp(tmp2[12]).Icon;
                    tmp30[0] = onRemove(channelId[19]);
                    tmp30[1] = tmp(channelId[12]).Icon.Sizes.SMALL_14;
                    tmp29[1] = closure_11(Icon, tmp30);
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
              let tmpResult;
              if (onRemove != null) {
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
            let tmpResult;
            if (onRemove != null) {
              tmpResult = tmp(id);
            }
            return tmpResult;
          }
        }
        cResult[4] = id;
        cResult[5] = onRemove;
        cResult[6] = P;
        tmp13 = P;
      }
      const fn = function l() {
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
    }
  : (onEdit) => {
      let FxKgb3;
      let Icon;
      let MJHFt9;
      let description;
      let formatToPlainString;
      let formatToPlainString2;
      let id;
      let intl2;
      let intl4;
      let isImage;
      let isThumbnail;
      let isVideo;
      let item;
      let items3;
      let items4;
      let obj4;
      let str;
      let str2;
      let tmp12;
      onEdit = onEdit.onEdit;
      const onRemove = onEdit.onRemove;
      const channelId = onEdit.channelId;
      let flag = onEdit.highlightThumbnails;
      if (flag === undefined) {
        flag = false;
      }
      let upload = onEdit.upload;
      id = undefined;
      let tmp = closure_13();
      ({ description, id } = upload);
      ({ item, isVideo, isImage, isThumbnail } = upload);
      const tmp4 = onRemove(channelId[14]);
      tmp4(
        item.platform === onEdit(channelId[15]).UploadPlatform.REACT_NATIVE,
        "Upload must be a React Native upload item.",
      );
      let obj = onEdit(channelId[16]);
      const items = [UploadAttachmentStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
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
        const obj = {
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
        const tmp = showUploadPreviewActionSheetDefault(obj);
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
        isHighlighted: flag,
        accessibilityLabel: formatToPlainString(MJHFt9, { name: str }),
        accessibilityHint: intl2.string(onEdit(channelId[18]).t.QtJ1c5),
        removeAccessibilityLabel: formatToPlainString2(FxKgb3, { name: str2 }),
        onPress: tmp12,
        onRemove: callback,
        children: items3,
      };
      if (flag) {
        flag = true === isThumbnail;
      }
      const intl = tmp5(tmp3[18]).intl;
      formatToPlainString = intl.formatToPlainString;
      str = item.filename;
      MJHFt9 = tmp5(tmp3[18]).t.MJHFt9;
      if (str == null) {
        str = "";
      }
      intl2 = tmp5(tmp3[18]).intl;
      const intl3 = tmp5(tmp3[18]).intl;
      formatToPlainString2 = intl3.formatToPlainString;
      str2 = item.filename;
      FxKgb3 = tmp5(tmp3[18]).t.FxKgb3;
      if (str2 == null) {
        str2 = "";
      }
      if (isImage) {
        tmp12 = callback1;
      }
      let tmp13 = null;
      if (isThumbnail) {
        const obj3 = { style: tmp.footerRightContainer, children: closure_11(Icon, obj4) };
        obj4 = { source: onRemove(channelId[19]), size: onEdit(channelId[12]).Icon.Sizes.SMALL_14 };
        Icon = tmp5(tmp3[12]).Icon;
        tmp13 = closure_11(id, obj3);
      }
      items3 = [tmp13];
      let tmp17 = null;
      const obj5 = { style: tmp.decorationsContainer, children: items4 };
      if (stateFromStores) {
        const obj6 = { style: tmp.spoilerOverlay };
        tmp17 = closure_11(tmp2(tmp3[20]), obj6);
      }
      items4 = [tmp17, ,];
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
            children: intl4.string(onEdit(channelId[18]).t.QEW81z),
          };
          const Text = tmp5(tmp3[21]).Text;
          intl4 = tmp5(tmp3[18]).intl;
          tmp19 = closure_11(Text, obj7);
        }
      }
      const items5 = [tmp19];
      let tmp22 = null;
      if (isVideo) {
        const obj8 = {
          style: tmp.iconContainer,
          children: closure_11(onEdit(channelId[22]).PlayIcon, { size: "xxs", color: "white" }),
        };
        tmp22 = closure_11(tmp16, obj8);
      }
      items5[1] = tmp22;
      items4[1] = closure_12(id, { children: items5 });
      let tmp24 = null;
      if (stateFromStores) {
        const obj9 = {
          style: tmp.iconContainer,
          children: closure_11(onEdit(channelId[23]).EyeIcon, { size: "xxs", color: "white" }),
        };
        tmp24 = closure_11(tmp16, obj9);
      }
      items4[2] = tmp24;
      items3[1] = closure_12(id, obj5);
      return closure_12(closure_18, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let accessibilityHint;
      let accessibilityLabel;
      let diff;
      let fileName;
      let intl;
      let isHighlighted;
      let isImage;
      let isVideo;
      let items1;
      let items3;
      let onPress;
      let onRemove;
      let removeAccessibilityLabel;
      let tmp10;
      let tmp12;
      let uri;
      const obj = react2;
      const cResult = obj.c(50);
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
      const itemKey = children.itemKey;
      if (highlightedTileContainer) {
        highlightedTileContainer = isHighlighted;
      }
      const tmp4 = closure_13();
      if (highlightedTileContainer) {
        diff = IMAGE_CAROUSEL_TILE_HEIGHT - 4;
      } else {
        diff = IMAGE_CAROUSEL_TILE_HEIGHT;
      }
      if (cResult[0] !== onRemove) {
        const fn = function n(nativeEvent) {
          if ("remove" === nativeEvent.nativeEvent.actionName) {
            onRemove();
          }
        };
        cResult[0] = onRemove;
        cResult[1] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[1];
      }
      const tmp11 = closure_16(itemKey);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { name: "remove", label: intl.string(intl5.t.kFwAsa) };
        intl = intl5.intl;
        const items = [obj2];
        cResult[2] = items;
        tmp12 = items;
      } else {
        tmp12 = cResult[2];
      }
      if (highlightedTileContainer) {
        highlightedTileContainer = tmp4.highlightedTileContainer;
      }
      if (cResult[3] === tmp4.pressableContainer) {
        let tmp14;
        if (cResult[4] === highlightedTileContainer) {
          tmp14 = cResult[5];
        }
        if (cResult[6] === diff) {
          let tmp15;
          if (cResult[7] === tmp9) {
            tmp15 = cResult[8];
          }
          if (cResult[9] === tmp4.tileContainer) {
            if (cResult[10] === tmp15) {
              let tmp16;
              if (cResult[11] === tmp11) {
                tmp16 = cResult[12];
              }
              if (cResult[13] === fileName) {
                if (cResult[14] === diff) {
                  if (cResult[15] === isImage) {
                    if (cResult[16] === isVideo) {
                      if (cResult[17] === 192) {
                        if (cResult[18] === uri) {
                          let tmp17;
                          if (cResult[19] === tmp9) {
                            tmp17 = cResult[20];
                          }
                          if (cResult[21] === children) {
                            if (cResult[22] === tmp16) {
                              let tmp22;
                              if (cResult[23] === tmp17) {
                                tmp22 = cResult[24];
                              }
                              if (cResult[25] === accessibilityHint) {
                                if (cResult[26] === accessibilityLabel) {
                                  if (cResult[27] === tmp10) {
                                    if (cResult[28] === onPress) {
                                      if (cResult[29] === tmp22) {
                                        if ((cResult[30] === null) == onPress) {
                                          let tmp26;
                                          let tmp29;
                                          if (cResult[31] === tmp14) {
                                            tmp26 = cResult[32];
                                          }
                                          const _Symbol = Symbol;
                                          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                                            const rect = { top: 4, bottom: 4, left: 4, right: 4 };
                                            cResult[33] = rect;
                                            tmp29 = rect;
                                          } else {
                                            tmp29 = cResult[33];
                                          }
                                          if (cResult[34] === tmp4.closeContainer) {
                                            let tmp30;
                                            let tmp31;
                                            if (cResult[35] === tmp11) {
                                              tmp30 = cResult[36];
                                            }
                                            if (cResult[37] !== tmp4.closeButtonIcon) {
                                              const obj3 = {
                                                source: AssetRegistryDefault,
                                                size: native.Icon.Sizes.MEDIUM,
                                                color: nativeDefault.unsafe_rawColors.PRIMARY_500,
                                                style: tmp4.closeButtonIcon,
                                              };
                                              const Icon = native.Icon;
                                              const tmp34 = unpackModuleId(Icon, obj3);
                                              cResult[37] = tmp4.closeButtonIcon;
                                              cResult[38] = tmp34;
                                              tmp31 = tmp34;
                                            } else {
                                              tmp31 = cResult[38];
                                            }
                                            if (cResult[39] === tmp30) {
                                              let tmp35;
                                              if (cResult[40] === tmp31) {
                                                tmp35 = cResult[41];
                                              }
                                              if (cResult[42] === onRemove) {
                                                if (cResult[43] === removeAccessibilityLabel) {
                                                  if (cResult[44] === tmp4.closeButton) {
                                                    let tmp39;
                                                    if (cResult[45] === tmp35) {
                                                      tmp39 = cResult[46];
                                                    }
                                                    if (cResult[47] === tmp26) {
                                                      let tmp42;
                                                      if (cResult[48] === tmp39) {
                                                        tmp42 = cResult[49];
                                                      }
                                                      return tmp42;
                                                    }
                                                    const obj4 = { children: items1 };
                                                    items1 = [tmp26, tmp39];
                                                    const tmp45 = closure_12(React3, obj4);
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
                                              const tmp41 = unpackModuleId(Pressables.PressableOpacity, obj5);
                                              cResult[42] = onRemove;
                                              cResult[43] = removeAccessibilityLabel;
                                              cResult[44] = tmp4.closeButton;
                                              cResult[45] = tmp35;
                                              cResult[46] = tmp41;
                                              tmp39 = tmp41;
                                            }
                                            const obj6 = { style: tmp30, children: tmp31 };
                                            const tmp38 = unpackModuleId(ReanimatedRexportDefault.View, obj6);
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
                                disabled: null == onPress,
                                onPress,
                                style: tmp14,
                                children: tmp22,
                              };
                              const tmp28 = unpackModuleId(Pressables.PressableOpacity, obj7);
                              cResult[25] = accessibilityHint;
                              cResult[26] = accessibilityLabel;
                              cResult[27] = tmp10;
                              cResult[28] = onPress;
                              cResult[29] = tmp22;
                              cResult[30] = null == onPress;
                              cResult[31] = tmp14;
                              cResult[32] = tmp28;
                              tmp26 = tmp28;
                            }
                          }
                          const obj8 = { style: tmp16, children: items3 };
                          items3 = [tmp17, children];
                          const tmp25 = closure_12(ReanimatedRexportDefault.View, obj8);
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
              size = {
                uri,
                isImage,
                isVideo,
                width: tmp9,
                height: diff,
                maxFileWidth: 192,
                fileName,
                borderRadius: nativeDefault.radii.md,
              };
              const tmp20 = AttachmentPreviewDefault;
              const tmp21 = unpackModuleId(tmp20, size);
              cResult[13] = fileName;
              cResult[14] = diff;
              cResult[15] = isImage;
              cResult[16] = isVideo;
              cResult[17] = 192;
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
  : (arg0) => {
      let Icon;
      let View;
      let View2;
      let accessibilityHint;
      let accessibilityLabel;
      let children;
      let diff;
      let fileName;
      let intl;
      let isHighlighted;
      let isImage;
      let isVideo;
      let itemKey;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj4;
      let obj6;
      let obj7;
      let onPress;
      let onRemove;
      let removeAccessibilityLabel;
      let tmp4;
      let uri;
      ({ isImage, isVideo, isHighlighted } = arg0);
      ({ itemKey, uri, fileName } = arg0);
      if (isHighlighted === undefined) {
        isHighlighted = false;
      }
      ({ onPress, onRemove } = arg0);
      ({ accessibilityLabel, accessibilityHint, removeAccessibilityLabel, children } = arg0);
      const tmp = closure_13();
      const tmp2 = isImage || isVideo;
      if (isHighlighted) {
        diff = IMAGE_CAROUSEL_TILE_HEIGHT - 4;
        tmp4 = IMAGE_CAROUSEL_TILE_HEIGHT;
      } else {
        tmp4 = IMAGE_CAROUSEL_TILE_HEIGHT;
        diff = IMAGE_CAROUSEL_TILE_HEIGHT;
      }
      let tmp6;
      if (tmp2) {
        tmp6 = tmp4;
      }
      const items = [onRemove];
      const callback = react.useCallback((nativeEvent) => {
        if ("remove" === nativeEvent.nativeEvent.actionName) {
          onRemove();
        }
      }, items);
      const tmp8 = closure_16(itemKey);
      const obj = { name: "remove", label: intl.string(intl5.t.kFwAsa) };
      intl = intl5.intl;
      const items1 = [obj];
      const obj2 = {
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityHint,
        accessibilityActions: items1,
        onAccessibilityAction: callback,
        disabled: null == onPress,
        onPress,
        style: items2,
        children: closure_12(View, obj4),
      };
      items2 = [tmp.pressableContainer];
      const PressableOpacity = Pressables.PressableOpacity;
      if (isHighlighted) {
        isHighlighted = tmp.highlightedTileContainer;
      }
      const obj3 = { children: items5 };
      items2[1] = isHighlighted;
      obj4 = { style: items3, children: items4 };
      items3 = [tmp.tileContainer, { width: tmp6, height: diff }, tmp8];
      View = ReanimatedRexportDefault.View;
      size = {
        uri,
        isImage,
        isVideo,
        width: tmp6,
        height: diff,
        maxFileWidth: num2,
        fileName,
        borderRadius: nativeDefault.radii.md,
      };
      const tmp14 = AttachmentPreviewDefault;
      items4 = [unpackModuleId(tmp14, size), children];
      items5 = [unpackModuleId(PressableOpacity, obj2)];
      const obj5 = {
        accessibilityRole: "button",
        accessibilityLabel: removeAccessibilityLabel,
        style: tmp.closeButton,
        onPress: onRemove,
        hitSlop: { top: 4, bottom: 4, left: 4, right: 4 },
        children: unpackModuleId(View2, obj6),
      };
      const PressableOpacity2 = Pressables.PressableOpacity;
      obj6 = { style: items6, children: unpackModuleId(Icon, obj7) };
      items6 = [tmp.closeContainer, tmp8];
      View2 = ReanimatedRexportDefault.View;
      obj7 = {
        source: AssetRegistryDefault,
        size: native.Icon.Sizes.MEDIUM,
        color: nativeDefault.unsafe_rawColors.PRIMARY_500,
        style: tmp.closeButtonIcon,
      };
      Icon = native.Icon;
      items5[1] = unpackModuleId(PressableOpacity2, obj5);
      return closure_12(React3, obj3);
    };
let closure_18 = tmp10;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let ref;
      let tmp5;
      let obj = require("react");
      const cResult = obj.c(5);
      let tmp2 = closure_13();
      _require = react.useRef(0);
      const ref2 = react.useRef(0);
      ref = react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(current) {
          current = ref.current;
          const current2 = ref2.current;
          const obj = useWindowDimensions;
          const tmp2 = current > current || current2 + obj.getWindowDimensions().width > current;
          if (tmp2) {
            const current3 = ref.current;
            if (current3 != null) {
              current3.scrollToEnd();
            }
          }
          ref.current = current;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function y(nativeEvent) {
          ref2.current = nativeEvent.nativeEvent.contentOffset.x;
        };
        cResult[1] = fn2;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === arg0) {
        let tmp6;
        if (cResult[3] === tmp2.scrollview) {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
      const obj2 = {
        ref,
        onContentSizeChange: first,
        onScroll: tmp5,
        scrollEventThrottle: 16,
        contentContainerStyle: tmp2.scrollview,
      };
      const merged = Object.assign(arg0);
      const tmp8 = closure_11(closure_5, obj2);
      cResult[2] = arg0;
      cResult[3] = tmp2.scrollview;
      cResult[4] = tmp8;
      tmp6 = tmp8;
    }
  : (arg0) => {
      let callback1;
      const tmp = closure_13();
      react.useRef(0);
      const ref2 = react.useRef(0);
      const ref = react.useRef(null);
      const callback = react.useCallback((current) => {
        current = ref.current;
        const current2 = ref2.current;
        const obj = useWindowDimensions;
        const tmp2 = current > current || current2 + obj.getWindowDimensions().width > current;
        if (tmp2) {
          const current3 = ref.current;
          if (current3 != null) {
            current3.scrollToEnd();
          }
        }
        ref.current = current;
      }, []);
      let obj = {
        ref,
        onContentSizeChange: callback,
        onScroll: callback1,
        scrollEventThrottle: 16,
        contentContainerStyle: tmp.scrollview,
      };
      callback1 = react.useCallback((nativeEvent) => {
        ref2.current = nativeEvent.nativeEvent.contentOffset.x;
      }, []);
      const merged = Object.assign(arg0);
      return closure_11(closure_5, obj);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let attachments;
        let channelId;
        let headerElement;
        let highlightThumbnails;
        let items;
        let onRemove;
        let tmp4;
        let obj = channelId(576);
        const cResult = obj.c(15);
        ({ attachments, channelId } = arg0);
        ({ headerElement, highlightThumbnails } = arg0);
        highlightThumbnails = tmp2;
        let tmp3 = null != attachments && attachments.length > 0;
        if (cResult[0] !== channelId) {
          const fn = function n(arg0) {
            const obj = UploadAttachmentActionCreatorsDefault;
            obj.remove(channelId, arg0, DraftType.ChannelMessage);
          };
          cResult[0] = channelId;
          cResult[1] = fn;
          tmp4 = fn;
        } else {
          tmp4 = cResult[1];
        }
        dependencyMap = tmp4;
        if (cResult[2] === channelId) {
          let tmp5;
          if (cResult[3] === tmp4) {
            tmp5 = cResult[4];
          }
          const onEdit = tmp5;
          if (!tmp3) {
            tmp3 = null != headerElement;
          }
          if (cResult[5] === attachments) {
            if (cResult[6] === channelId) {
              if (cResult[7] === (undefined !== highlightThumbnails && highlightThumbnails)) {
                if (cResult[8] === tmp5) {
                  let tmp6;
                  if (cResult[9] === tmp4) {
                    tmp6 = cResult[10];
                  }
                  if (cResult[11] === headerElement) {
                    if (cResult[12] === tmp3) {
                      let tmp9;
                      if (cResult[13] === tmp6) {
                        tmp9 = cResult[14];
                      }
                      return tmp9;
                    }
                  }
                  const obj2 = { visible: tmp3, children: items };
                  items = [headerElement, tmp6];
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
            mapped = values.map((upload) => {
              const obj = { channelId, highlightThumbnails, onEdit, onRemove, upload };
              return unpackModuleId(closure_17, obj, upload.uniqueId);
            });
          }
          cResult[5] = attachments;
          cResult[6] = channelId;
          cResult[7] = undefined !== highlightThumbnails && highlightThumbnails;
          cResult[8] = tmp5;
          cResult[9] = tmp4;
          cResult[10] = mapped;
          tmp6 = mapped;
        }
        const fn2 = function p(arg0, arg1) {
          if (onRemove != null) {
            tmp(arg0);
          }
          const items = [arg1];
          const obj = MediaKeyboardUtils;
          obj.addImagesFromPicker(channelId, items, Upload.UploadOrigin.IMAGE_EDITOR);
        };
        cResult[2] = channelId;
        cResult[3] = tmp4;
        cResult[4] = fn2;
        tmp5 = fn2;
      }
    : (arg0) => {
        let attachments;
        let channelId;
        let headerElement;
        let highlightThumbnails;
        let items2;
        let onEdit;
        ({ attachments, channelId } = arg0);
        ({ headerElement, highlightThumbnails } = arg0);
        if (highlightThumbnails === undefined) {
          highlightThumbnails = false;
        }
        react = undefined;
        let tmp = null != attachments && attachments.length > 0;
        let items = [channelId];
        const onRemove = react.useCallback((arg0) => {
          const obj = UploadAttachmentActionCreatorsDefault;
          obj.remove(channelId, arg0, DraftType.ChannelMessage);
        }, items);
        const items1 = [channelId, onRemove];
        react = react.useCallback((arg0, arg1) => {
          if (callback != null) {
            tmp(arg0);
          }
          const items = [arg1];
          const obj = MediaKeyboardUtils;
          obj.addImagesFromPicker(channelId, items, Upload.UploadOrigin.IMAGE_EDITOR);
        }, items1);
        if (!tmp) {
          tmp = null != headerElement;
        }
        let obj = { visible: tmp, children: items2 };
        items2 = [headerElement];
        let mapped = null;
        if (null != attachments) {
          const _Object = Object;
          const values = Object.values(attachments);
          mapped = values.map((upload) => {
            const obj = { channelId, highlightThumbnails, onEdit, onRemove, upload };
            return unpackModuleId(closure_17, obj, upload.uniqueId);
          });
        }
        items2[1] = mapped;
        return closure_12(closure_20, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let style;
      let visible;
      const obj = react2;
      const cResult = obj.c(14);
      ({ visible, style, children } = arg0);
      const tmp4 = closure_13();
      let num = 0;
      if (visible) {
        num = IMAGE_CAROUSEL_TILE_HEIGHT + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
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
          let tmp10;
          if (cResult[2] === num4) {
            tmp10 = cResult[3];
          }
          if (cResult[4] === style) {
            if (cResult[5] === tmp4.container) {
              let tmp11;
              let tmp13;
              let tmp15;
              if (cResult[6] === tmp10) {
                tmp11 = cResult[7];
              }
              const _Symbol = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = intl5.intl;
                const stringResult = intl.string(intl5.t.RhtzFe);
                cResult[8] = stringResult;
                tmp13 = stringResult;
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
                const tmp18 = unpackModuleId(closure_19, obj2);
                cResult[9] = children;
                cResult[10] = tmp18;
                tmp15 = tmp18;
              } else {
                tmp15 = cResult[10];
              }
              if (cResult[11] === tmp11) {
                let tmp19;
                if (cResult[12] === tmp15) {
                  tmp19 = cResult[13];
                }
                return tmp19;
              }
              const obj3 = { style: tmp11, children: tmp15 };
              const tmp22 = unpackModuleId(React3, obj3);
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
  : (visible) => {
      let children;
      let intl;
      let num2;
      let num4;
      let obj3;
      let style;
      visible = visible.visible;
      ({ style, children } = visible);
      const items = [closure_13().container, ,];
      let num = 0;
      if (visible) {
        num = IMAGE_CAROUSEL_TILE_HEIGHT + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
      }
      const obj = { height: num, marginTop: num2, marginBottom: num4 };
      num2 = 0;
      if (visible) {
        num2 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
      }
      num4 = 0;
      if (visible) {
        num4 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
      }
      items[1] = obj;
      items[2] = style;
      const obj2 = { style: items, children: unpackModuleId(closure_19, obj3) };
      obj3 = {
        horizontal: true,
        keyboardShouldPersistTaps: "always",
        showsHorizontalScrollIndicator: false,
        accessibilityRole: "list",
        accessibilityLabel: intl.string(intl5.t.RhtzFe),
        children,
      };
      intl = intl5.intl;
      return unpackModuleId(React3, obj2);
    };
let closure_20 = tmp12;
size = size_mod;
let result = size.fileFinishedImporting("components_native/chat/ImageCarousel.tsx");

export default memoResult;
export const useTileEntranceAnimatedStyle = tmp9;
export const ImageCarouselTile = tmp10;
export const ImageCarouselRow = tmp12;
