// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import SharePreparingModalConstants from "../../../../share/native/SharePreparingModalConstants.tsx";
import MediaViewerOverlayButtonDefault from "MediaViewerOverlayButton.tsx";
import useShouldHideMediaOptionsDefault from "../../../../media_channel/useShouldHideMediaOptions.tsx";
import MediaViewerOverlayButtonFavoriteGIFDefault from "MediaViewerOverlayButtonFavoriteGIF.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let closure_3 = ["ref"];
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const SHARE_PREPARING_MODAL_KEY = SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({
  navbarInner: { flex: 1, justifyContent: "space-between" },
  navbarLeft: { flexShrink: 1, flexDirection: "row", marginRight: 8 },
  navbarRight: { flexShrink: 0, justifyContent: "flex-end", flexDirection: "row", gap: 8 },
  navbarName: { flexShrink: 1, alignItems: "center", height: 40, marginLeft: 8 },
  navbarNameInner: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 18,
  },
  navbarNameShrinkWrapper: { flexShrink: 1 },
  contextIcon: { width: 18, height: 18, marginRight: 6 },
});
const __initData = {
  code: "function MediaModalOverlayHeaderTsx1(){const{withTiming,isPreparing}=this.__closure;return{opacity:withTiming(isPreparing?0:1)};}",
};
const __initData2 = {
  code: "function MediaModalOverlayHeaderTsx2(){const{withTiming,isPreparing}=this.__closure;return{opacity:withTiming(isPreparing?0:1)};}",
};
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let animationDriver;
      let channelId;
      let contextIcon;
      let contextName;
      let disableDownload;
      let disableMediaOverlayButton;
      let isModalOpen;
      let items1;
      let items2;
      let items4;
      let navbarInner;
      let navbarLeft;
      let obj13;
      let obj16;
      let onClose;
      let shareable;
      let source;
      let tmp = isModalOpen;
      let obj = isModalOpen(576);
      const cResult = obj.c(39);
      ({ onClose, source, disableDownload, disableMediaOverlayButton, shareable, contextName, contextIcon } = arg0);
      ({ animationDriver, channelId } = arg0);
      let tmp4 = closure_10();
      let obj2 = isModalOpen(12778);
      const headerLayoutAnimation = obj2.useHeaderLayoutAnimation(animationDriver);
      if (cResult[0] === disableDownload) {
        if (cResult[1] === shareable) {
          let tmp6;
          let tmp16;
          let tmp20;
          let tmp22;
          let tmp21;
          if (cResult[2] === source) {
            tmp6 = cResult[3];
          }
          const tmpResult = tmp(8020);
          const mediaShareActions = tmpResult.useMediaShareActions(tmp6);
          const tmp9 = useShouldHideMediaOptionsDefault(channelId);
          const tmpResult3 = tmp(4742);
          isModalOpen = tmpResult3.useIsModalOpen(SHARE_PREPARING_MODAL_KEY);
          const tmpResult4 = tmp(4618);
          class O {
            constructor() {
              tmp = closure_0(closure_2[13]);
              num = 1;
              withTiming = tmp.withTiming;
              if (closure_0) {
                num = 0;
              }
              obj = { opacity: withTiming(num) };
              return obj;
            }
          }
          const useAnimatedStyle = tmpResult4.useAnimatedStyle;
          O.__closure = { withTiming: tmp(4897).withTiming, isPreparing: isModalOpen };
          let num = 13276839935975;
          O.__workletHash = 13276839935975;
          O.__initData = __initData;
          const obj3 = { withTiming: tmp(4897).withTiming, isPreparing: isModalOpen };
          const animatedStyle = useAnimatedStyle(O);
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { bottom: undefined };
            let merged = Object.assign(closure_5.absoluteFillObject);
            cResult[4] = obj4;
            tmp16 = obj4;
          } else {
            tmp16 = cResult[4];
          }
          if (cResult[5] !== headerLayoutAnimation) {
            const items = [tmp16, headerLayoutAnimation];
            cResult[5] = headerLayoutAnimation;
            cResult[6] = items;
            tmp20 = items;
          } else {
            tmp20 = cResult[6];
          }
          let str2 = "box-none";
          if (isModalOpen) {
            str2 = "none";
          }
          const _Symbol2 = Symbol;
          ({ navbarInner, navbarLeft } = tmp4);
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.cpT0Cq);
            const tmp25 = closure_8(tmp(6024).XSmallIcon, { size: "md", color: "interactive-text-active" });
            cResult[7] = stringResult;
            cResult[8] = tmp25;
            tmp22 = tmp25;
            class O {
              constructor() {
                tmp = closure_0(closure_2[13]);
                num = 1;
                withTiming = tmp.withTiming;
                if (closure_0) {
                  num = 0;
                }
                obj = { opacity: withTiming(num) };
                return obj;
              }
            }
          } else {
            tmp22 = cResult[8];
            tmp21 = cResult[7];
          }
          if (cResult[9] !== onClose) {
            const obj5 = { accessibilityLabel: tmp21, icon: tmp22, onPress: onClose };
            cResult[9] = onClose;
            cResult[10] = closure_8(MediaViewerOverlayButtonDefault, obj5);
            closure_8(MediaViewerOverlayButtonDefault, obj5);
            class O {
              constructor() {
                tmp = closure_0(closure_2[13]);
                num = 1;
                withTiming = tmp.withTiming;
                if (closure_0) {
                  num = 0;
                }
                obj = { opacity: withTiming(num) };
                return obj;
              }
            }
          }
          if (cResult[11] === contextIcon) {
            if (cResult[12] === contextName) {
              if (cResult[13] === tmp4.contextIcon) {
                if (cResult[14] === tmp4.navbarName) {
                  if (cResult[15] === tmp4.navbarNameInner) {
                    let tmp29;
                    if (cResult[16] === tmp4.navbarNameShrinkWrapper) {
                      tmp29 = cResult[17];
                    }
                    if (cResult[18] === tmp4.navbarLeft) {
                      if (cResult[19] === tmp29) {
                        let tmp36;
                        if (cResult[20] === tmp26) {
                          tmp36 = cResult[21];
                        }
                        if (cResult[22] === mediaShareActions) {
                          if (cResult[23] === disableMediaOverlayButton) {
                            if (cResult[24] === tmp9) {
                              if (cResult[25] === source) {
                                let tmp40;
                                if (cResult[26] === tmp4.navbarRight) {
                                  tmp40 = cResult[27];
                                }
                                if (cResult[28] === tmp4.navbarInner) {
                                  if (cResult[29] === tmp36) {
                                    let tmp46;
                                    if (cResult[30] === tmp40) {
                                      tmp46 = cResult[31];
                                    }
                                    if (cResult[32] === animatedStyle) {
                                      if (cResult[33] === tmp46) {
                                        let tmp49;
                                        if (cResult[34] === str2) {
                                          tmp49 = cResult[35];
                                        }
                                        if (cResult[36] === tmp49) {
                                          let tmp52;
                                          if (cResult[37] === tmp20) {
                                            tmp52 = cResult[38];
                                          }
                                          return tmp52;
                                        }
                                        const obj6 = { style: tmp20, children: tmp49 };
                                        const tmp54 = closure_8(ReanimatedRexportDefault.View, obj6);
                                        cResult[36] = tmp49;
                                        class O {
                                          constructor() {
                                            tmp = closure_0(closure_2[13]);
                                            num = 1;
                                            withTiming = tmp.withTiming;
                                            if (closure_0) {
                                              num = 0;
                                            }
                                            obj = { opacity: withTiming(num) };
                                            return obj;
                                          }
                                        }
                                        cResult[38] = tmp54;
                                        tmp52 = tmp54;
                                      }
                                    }
                                    const obj7 = { style: animatedStyle, pointerEvents: str2, children: tmp46 };
                                    const tmp51 = closure_8(ReanimatedRexportDefault.View, obj7);
                                    cResult[32] = animatedStyle;
                                    class O {
                                      constructor() {
                                        tmp = closure_0(closure_2[13]);
                                        num = 1;
                                        withTiming = tmp.withTiming;
                                        if (closure_0) {
                                          num = 0;
                                        }
                                        obj = { opacity: withTiming(num) };
                                        return obj;
                                      }
                                    }
                                    cResult[33] = tmp46;
                                    cResult[34] = str2;
                                    cResult[35] = tmp51;
                                    tmp49 = tmp51;
                                  }
                                }
                                const obj8 = { style: navbarInner, children: items1 };
                                items1 = [tmp36, tmp40];
                                const tmp48 = closure_9(tmp(8056).MediaModalOverlayHeaderWrapper, obj8);
                                class O {
                                  constructor() {
                                    tmp = closure_0(closure_2[13]);
                                    num = 1;
                                    withTiming = tmp.withTiming;
                                    if (closure_0) {
                                      num = 0;
                                    }
                                    obj = { opacity: withTiming(num) };
                                    return obj;
                                  }
                                }
                                cResult[28] = tmp4.navbarInner;
                                cResult[29] = tmp36;
                                cResult[30] = tmp40;
                                cResult[31] = tmp48;
                                tmp46 = tmp48;
                              }
                            }
                          }
                        }
                        let tmp42Result = !tmp9;
                        if (tmp42Result) {
                          const obj10 = { source };
                          const obj9 = { style: tmp4.navbarRight, children: items2 };
                          items2 = [closure_8(MediaViewerOverlayButtonFavoriteGIFDefault, obj10)];
                          class O {
                            constructor() {
                              tmp = closure_0(closure_2[13]);
                              num = 1;
                              withTiming = tmp.withTiming;
                              if (closure_0) {
                                num = 0;
                              }
                              obj = { opacity: withTiming(num) };
                              return obj;
                            }
                          }
                          items2[1] = null;
                          tmp42Result = closure_9(closure_6, obj9);
                        }
                        cResult[22] = mediaShareActions;
                        cResult[23] = disableMediaOverlayButton;
                        cResult[24] = tmp9;
                        class O {
                          constructor() {
                            tmp = closure_0(closure_2[13]);
                            num = 1;
                            withTiming = tmp.withTiming;
                            if (closure_0) {
                              num = 0;
                            }
                            obj = { opacity: withTiming(num) };
                            return obj;
                          }
                        }
                        cResult[25] = source;
                        cResult[26] = tmp4.navbarRight;
                        cResult[27] = tmp42Result;
                        tmp40 = tmp42Result;
                      }
                    }
                    const items3 = [tmp26, tmp29];
                    class O {
                      constructor() {
                        tmp = closure_0(closure_2[13]);
                        num = 1;
                        withTiming = tmp.withTiming;
                        if (closure_0) {
                          num = 0;
                        }
                        obj = { opacity: withTiming(num) };
                        return obj;
                      }
                    }
                    cResult[18] = tmp4.navbarLeft;
                    cResult[19] = tmp29;
                    cResult[20] = tmp26;
                    cResult[21] = tmp39;
                    tmp36 = tmp39;
                  }
                }
              }
            }
          }
          let tmp32Result2 = null != contextName;
          if (tmp32Result2) {
            const obj12 = { style: tmp4.navbarName, children: closure_9(closure_6, obj13) };
            let tmp32Result = null != contextIcon;
            obj13 = { style: tmp4.navbarNameInner, children: items4 };
            if (tmp32Result) {
              const obj14 = {
                source: contextIcon,
                color: nativeDefault.unsafe_rawColors.PRIMARY_345,
                size: tmp(1188).Icon.Sizes.CUSTOM,
                style: tmp4.contextIcon,
              };
              const Icon = tmp(1188).Icon;
              tmp32Result = closure_8(Icon, obj14);
            }
            items4 = [,];
            class O {
              constructor() {
                tmp = closure_0(closure_2[13]);
                num = 1;
                withTiming = tmp.withTiming;
                if (closure_0) {
                  num = 0;
                }
                obj = { opacity: withTiming(num) };
                return obj;
              }
            }
            const obj15 = { style: tmp4.navbarNameShrinkWrapper, children: closure_8(tmp(4892).Text, obj16) };
            obj16 = {
              accessibilityRole: "header",
              variant: "heading-md/medium",
              lineClamp: 1,
              ellipsizeMode: "tail",
              color: "text-overlay-light",
              children: contextName,
            };
            items4[1] = closure_8(closure_6, obj15);
            tmp32Result2 = closure_8(closure_6, obj12);
          }
          cResult[11] = contextIcon;
          cResult[12] = contextName;
          cResult[13] = tmp4.contextIcon;
          cResult[14] = tmp4.navbarName;
          cResult[15] = tmp4.navbarNameInner;
          cResult[16] = tmp4.navbarNameShrinkWrapper;
          cResult[17] = tmp32Result2;
          tmp29 = tmp32Result2;
        }
      }
      const obj17 = { source, disableDownload, shareable };
      cResult[0] = disableDownload;
      cResult[1] = shareable;
      cResult[2] = source;
      cResult[3] = obj17;
      tmp6 = obj17;
    }
  : (arg0) => {
      let MediaModalOverlayHeaderWrapper;
      let View2;
      let animationDriver;
      let channelId;
      let contextIcon;
      let contextName;
      let disableDownload;
      let disableMediaOverlayButton;
      let intl;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj13;
      let obj16;
      let obj8;
      let obj9;
      let onClose;
      let shareable;
      let source;
      let str;
      ({ source, contextName, contextIcon } = arg0);
      let isModalOpen;
      ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
      const tmp = closure_10();
      let obj = isModalOpen(12778);
      const headerLayoutAnimation = obj.useHeaderLayoutAnimation(animationDriver);
      let obj2 = isModalOpen(8020);
      const mediaShareActions = obj2.useMediaShareActions({ source, disableDownload, shareable });
      const tmp7 = useShouldHideMediaOptionsDefault(channelId);
      const obj3 = isModalOpen(4742);
      isModalOpen = obj3.useIsModalOpen(SHARE_PREPARING_MODAL_KEY);
      const fn = function _() {
        let num = 1;
        const withTiming = timing.withTiming;
        timing;
        if (isModalOpen) {
          num = 0;
        }
        const obj = { opacity: withTiming(num) };
        return obj;
      };
      const obj4 = isModalOpen(4618);
      fn.__closure = { withTiming: isModalOpen(4897).withTiming, isPreparing: isModalOpen };
      fn.__workletHash = 12581177559108;
      fn.__initData = __initData2;
      ({ withTiming: isModalOpen(4897).withTiming, isPreparing: isModalOpen });
      const animatedStyle = obj4.useAnimatedStyle(fn);
      const obj6 = { style: items, children: closure_8(View2, obj8) };
      const obj7 = { bottom: undefined };
      const View = ReanimatedRexportDefault.View;
      let merged = Object.assign(closure_5.absoluteFillObject);
      items = [obj7, headerLayoutAnimation];
      obj8 = { style: animatedStyle, pointerEvents: str, children: closure_9(MediaModalOverlayHeaderWrapper, obj9) };
      str = "box-none";
      View2 = ReanimatedRexportDefault.View;
      if (isModalOpen) {
        str = "none";
      }
      const obj10 = { style: tmp.navbarLeft, children: items1 };
      obj9 = { style: tmp.navbarInner, children: items3 };
      const obj11 = {
        accessibilityLabel: intl.string(isModalOpen(1126).t.cpT0Cq),
        icon: closure_8(isModalOpen(6024).XSmallIcon, { size: "md", color: "interactive-text-active" }),
        onPress: onClose,
      };
      MediaModalOverlayHeaderWrapper = isModalOpen(8056).MediaModalOverlayHeaderWrapper;
      const tmp6Result = MediaViewerOverlayButtonDefault;
      intl = tmp2(1126).intl;
      items1 = [closure_8(tmp6Result, obj11)];
      let tmp10Result3 = null != contextName;
      if (tmp10Result3) {
        const obj12 = { style: tmp.navbarName, children: closure_9(closure_6, obj13) };
        let tmp10Result = null != contextIcon;
        obj13 = { style: tmp.navbarNameInner, children: items2 };
        if (tmp10Result) {
          const obj14 = {
            source: contextIcon,
            color: nativeDefault.unsafe_rawColors.PRIMARY_345,
            size: isModalOpen(1188).Icon.Sizes.CUSTOM,
            style: tmp.contextIcon,
          };
          const Icon = tmp2(1188).Icon;
          tmp10Result = closure_8(Icon, obj14);
        }
        items2 = [tmp10Result];
        const obj15 = { style: tmp.navbarNameShrinkWrapper, children: closure_8(isModalOpen(4892).Text, obj16) };
        obj16 = {
          accessibilityRole: "header",
          variant: "heading-md/medium",
          lineClamp: 1,
          ellipsizeMode: "tail",
          color: "text-overlay-light",
          children: contextName,
        };
        items2[1] = closure_8(closure_6, obj15);
        tmp10Result3 = closure_8(closure_6, obj12);
      }
      items1[1] = tmp10Result3;
      items3 = [closure_9(closure_6, obj10)];
      let tmp12Result = !tmp7;
      if (tmp12Result) {
        const obj17 = { style: tmp.navbarRight, children: items4 };
        const obj18 = { source };
        items4 = [closure_8(MediaViewerOverlayButtonFavoriteGIFDefault, obj18)];
        let tmp10Result4 = null;
        if (!disableMediaOverlayButton) {
          const obj19 = {
            items: mediaShareActions,
            children(ref) {
              let intl;
              let tmp2Result;
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = {
                accessibilityLabel: intl.string(isModalOpen(dependencyMap[14]).t.PdRCRg),
                icon: tmp2Result,
                ref: ref.ref,
              };
              const tmp4 = MediaViewerOverlayButtonDefault;
              intl = isModalOpen(dependencyMap[14]).intl;
              const obj2 = isModalOpen(dependencyMap[22]);
              if (obj2.isAndroid()) {
                tmp2Result = closure_1_8(isModalOpen(dependencyMap[23]).MoreVerticalIcon, {
                  size: "md",
                  color: "interactive-text-active",
                });
              } else {
                tmp2Result = closure_1_8(isModalOpen(dependencyMap[24]).MoreHorizontalIcon, {
                  size: "md",
                  color: "interactive-text-active",
                });
              }
              const merged1 = Object.assign(merged);
              return closure_1_8(tmp4, obj);
            },
          };
          tmp10Result4 = closure_8(tmp2(7590).ContextMenu, obj19);
        }
        items4[1] = tmp10Result4;
        tmp12Result = closure_9(closure_6, obj17);
      }
      items3[1] = tmp12Result;
      return closure_8(View, obj6);
    };
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx");

export const MediaModalOverlayHeader = tmp5;
