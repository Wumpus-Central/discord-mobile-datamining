// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import MediaViewerOverlayButtonDefault from "MediaViewerOverlayButton.tsx";
import useShouldHideMediaOptionsDefault from "../../../../media_channel/useShouldHideMediaOptions.tsx";
import MediaViewerOverlayButtonFavoriteGIFDefault from "MediaViewerOverlayButtonFavoriteGIF.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["ref"];
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SHARE_PREPARING_MODAL_KEY = fn(8041).SHARE_PREPARING_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx");

export const MediaModalOverlayHeader = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = isModalOpen(576).c(39);
      ({ onClose, source, disableDownload, disableMediaOverlayButton, shareable, contextName, contextIcon } = arg0);
      ({ animationDriver, channelId } = arg0);
      let tmp4 = closure_10();
      let obj = isModalOpen(576);
      const headerLayoutAnimation = isModalOpen(12763).useHeaderLayoutAnimation(animationDriver);
      if (cResult[0] === disableDownload) {
        if (cResult[1] === shareable) {
          if (cResult[2] === source) {
            let tmp6 = cResult[3];
          }
          const mediaShareActions = tmp(8010).useMediaShareActions(tmp6);
          const tmp9 = useShouldHideMediaOptionsDefault(channelId);
          const tmpResult = tmp(8010);
          isModalOpen = tmp(4736).useIsModalOpen(SHARE_PREPARING_MODAL_KEY);
          const tmpResult3 = tmp(4736);
          class O {
            constructor() {
              obj = closure_0(closure_2[13]);
              num = 1;
              if (closure_0) {
                num = 0;
              }
              obj1 = { opacity: obj.withTiming(num) };
              return obj1;
            }
          }
          const obj3 = { withTiming: tmp(4891).withTiming, isPreparing: isModalOpen };
          O.__closure = obj3;
          O.__workletHash = 13276839935975;
          O.__initData = __initData;
          const animatedStyle = tmp(4612).useAnimatedStyle(O);
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = {};
            let merged = Object.assign(closure_5.absoluteFillObject);
            obj4.bottom = undefined;
            cResult[4] = obj4;
            let tmp15 = obj4;
          } else {
            tmp15 = cResult[4];
          }
          if (cResult[5] !== headerLayoutAnimation) {
            const items = [tmp15, headerLayoutAnimation];
            cResult[5] = headerLayoutAnimation;
            cResult[6] = items;
            let tmp19 = items;
          } else {
            tmp19 = cResult[6];
          }
          let str2 = "box-none";
          if (isModalOpen) {
            str2 = "none";
          }
          const _Symbol2 = Symbol;
          ({ navbarInner, navbarLeft } = tmp4);
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(1126).intl;
            const tmp24 = closure_8(tmp(6017).XSmallIcon, { size: "md", color: "interactive-text-active" });
            cResult[7] = intl.string(tmp(1126).t.cpT0Cq);
            cResult[8] = tmp24;
            let tmp21 = tmp24;
            class O {
              constructor() {
                obj = closure_0(closure_2[13]);
                num = 1;
                if (closure_0) {
                  num = 0;
                }
                obj1 = { opacity: obj.withTiming(num) };
                return obj1;
              }
            }
            const stringResult = intl.string(tmp(1126).t.cpT0Cq);
          } else {
            tmp21 = cResult[8];
            const tmp20 = cResult[7];
          }
          if (cResult[9] !== onClose) {
            const obj5 = { accessibilityLabel: tmp20, icon: tmp21, onPress: onClose };
            cResult[9] = onClose;
            cResult[10] = closure_8(MediaViewerOverlayButtonDefault, obj5);
            class O {
              constructor() {
                obj = closure_0(closure_2[13]);
                num = 1;
                if (closure_0) {
                  num = 0;
                }
                obj1 = { opacity: obj.withTiming(num) };
                return obj1;
              }
            }
            const tmp27 = closure_8(MediaViewerOverlayButtonDefault, obj5);
          }
          if (cResult[11] === contextIcon) {
            if (cResult[12] === contextName) {
              if (cResult[13] === tmp4.contextIcon) {
                if (cResult[14] === tmp4.navbarName) {
                  if (cResult[15] === tmp4.navbarNameInner) {
                    if (cResult[16] === tmp4.navbarNameShrinkWrapper) {
                      let tmp28 = cResult[17];
                    }
                    if (cResult[18] === tmp4.navbarLeft) {
                      if (cResult[19] === tmp28) {
                        if (cResult[20] === tmp25) {
                          let tmp35 = cResult[21];
                        }
                        if (cResult[22] === mediaShareActions) {
                          if (cResult[23] === disableMediaOverlayButton) {
                            if (cResult[24] === tmp9) {
                              if (cResult[25] === source) {
                                if (cResult[26] === tmp4.navbarRight) {
                                  let tmp39 = cResult[27];
                                }
                                if (cResult[28] === tmp4.navbarInner) {
                                  if (cResult[29] === tmp35) {
                                    if (cResult[30] === tmp39) {
                                      let tmp45 = cResult[31];
                                    }
                                    if (cResult[32] === animatedStyle) {
                                      if (cResult[33] === tmp45) {
                                        if (cResult[34] === str2) {
                                          let tmp48 = cResult[35];
                                        }
                                        if (cResult[36] === tmp48) {
                                          if (cResult[37] === tmp19) {
                                            let tmp51 = cResult[38];
                                          }
                                          return tmp51;
                                        }
                                        const obj6 = { style: tmp19, children: tmp48 };
                                        const tmp53 = closure_8(ReanimatedRexportDefault.View, obj6);
                                        cResult[36] = tmp48;
                                        class O {
                                          constructor() {
                                            obj = closure_0(closure_2[13]);
                                            num = 1;
                                            if (closure_0) {
                                              num = 0;
                                            }
                                            obj1 = { opacity: obj.withTiming(num) };
                                            return obj1;
                                          }
                                        }
                                        cResult[38] = tmp53;
                                        tmp51 = tmp53;
                                      }
                                    }
                                    const obj7 = { style: animatedStyle, pointerEvents: str2, children: tmp45 };
                                    const tmp50 = closure_8(ReanimatedRexportDefault.View, obj7);
                                    cResult[32] = animatedStyle;
                                    class O {
                                      constructor() {
                                        obj = closure_0(closure_2[13]);
                                        num = 1;
                                        if (closure_0) {
                                          num = 0;
                                        }
                                        obj1 = { opacity: obj.withTiming(num) };
                                        return obj1;
                                      }
                                    }
                                    cResult[33] = tmp45;
                                    cResult[34] = str2;
                                    cResult[35] = tmp50;
                                    tmp48 = tmp50;
                                  }
                                }
                                const obj8 = { style: navbarInner, children: null };
                                const items1 = [tmp35, tmp39];
                                obj8.children = items1;
                                const tmp47 = closure_9(tmp(8046).MediaModalOverlayHeaderWrapper, obj8);
                                class O {
                                  constructor() {
                                    obj = closure_0(closure_2[13]);
                                    num = 1;
                                    if (closure_0) {
                                      num = 0;
                                    }
                                    obj1 = { opacity: obj.withTiming(num) };
                                    return obj1;
                                  }
                                }
                                cResult[28] = tmp4.navbarInner;
                                cResult[29] = tmp35;
                                cResult[30] = tmp39;
                                cResult[31] = tmp47;
                                tmp45 = tmp47;
                              }
                            }
                          }
                        }
                        let tmp41Result = !tmp9;
                        if (!tmp9) {
                          const obj9 = { style: tmp4.navbarRight, children: null };
                          const obj10 = { source };
                          const items2 = [closure_8(MediaViewerOverlayButtonFavoriteGIFDefault, obj10)];
                          class O {
                            constructor() {
                              obj = closure_0(closure_2[13]);
                              num = 1;
                              if (closure_0) {
                                num = 0;
                              }
                              obj1 = { opacity: obj.withTiming(num) };
                              return obj1;
                            }
                          }
                          items2[1] = null;
                          obj9.children = items2;
                          tmp41Result = closure_9(closure_6, obj9);
                        }
                        cResult[22] = mediaShareActions;
                        cResult[23] = disableMediaOverlayButton;
                        cResult[24] = tmp9;
                        class O {
                          constructor() {
                            obj = closure_0(closure_2[13]);
                            num = 1;
                            if (closure_0) {
                              num = 0;
                            }
                            obj1 = { opacity: obj.withTiming(num) };
                            return obj1;
                          }
                        }
                        cResult[25] = source;
                        cResult[26] = tmp4.navbarRight;
                        cResult[27] = tmp41Result;
                        tmp39 = tmp41Result;
                      }
                    }
                    const obj11 = { style: navbarLeft, children: null };
                    const items3 = [tmp25, tmp28];
                    obj11.children = items3;
                    class O {
                      constructor() {
                        obj = closure_0(closure_2[13]);
                        num = 1;
                        if (closure_0) {
                          num = 0;
                        }
                        obj1 = { opacity: obj.withTiming(num) };
                        return obj1;
                      }
                    }
                    cResult[18] = tmp4.navbarLeft;
                    cResult[19] = tmp28;
                    cResult[20] = tmp25;
                    cResult[21] = tmp38;
                    tmp35 = tmp38;
                  }
                }
              }
            }
          }
          let tmp31Result2 = null != contextName;
          if (tmp31Result2) {
            const obj12 = { style: tmp4.navbarName, children: null };
            const obj13 = { style: tmp4.navbarNameInner, children: null };
            let tmp31Result = null != contextIcon;
            if (tmp31Result) {
              const obj14 = {
                source: contextIcon,
                color: nativeDefault.unsafe_rawColors.PRIMARY_345,
                size: tmp(1188).Icon.Sizes.CUSTOM,
                style: tmp4.contextIcon,
              };
              tmp31Result = closure_8(tmp(1188).Icon, obj14);
            }
            const items4 = [,];
            class O {
              constructor() {
                obj = closure_0(closure_2[13]);
                num = 1;
                if (closure_0) {
                  num = 0;
                }
                obj1 = { opacity: obj.withTiming(num) };
                return obj1;
              }
            }
            const obj15 = { style: tmp4.navbarNameShrinkWrapper, children: null };
            const obj16 = {
              accessibilityRole: "header",
              variant: "heading-md/medium",
              lineClamp: 1,
              ellipsizeMode: "tail",
              color: "text-overlay-light",
              children: contextName,
            };
            obj15.children = closure_8(tmp(4886).Text, obj16);
            items4[1] = closure_8(closure_6, obj15);
            obj13.children = items4;
            obj12.children = closure_9(closure_6, obj13);
            tmp31Result2 = closure_8(closure_6, obj12);
          }
          cResult[11] = contextIcon;
          cResult[12] = contextName;
          cResult[13] = tmp4.contextIcon;
          cResult[14] = tmp4.navbarName;
          cResult[15] = tmp4.navbarNameInner;
          cResult[16] = tmp4.navbarNameShrinkWrapper;
          cResult[17] = tmp31Result2;
          tmp28 = tmp31Result2;
          const tmpResult4 = tmp(4612);
        }
      }
      const obj17 = { source, disableDownload, shareable };
      cResult[0] = disableDownload;
      cResult[1] = shareable;
      cResult[2] = source;
      cResult[3] = obj17;
      tmp6 = obj17;
      const obj2 = isModalOpen(12763);
    }
  : (arg0) => {
      ({ source, contextName, contextIcon } = arg0);
      let isModalOpen;
      ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
      const tmp = closure_10();
      const headerLayoutAnimation = isModalOpen(12763).useHeaderLayoutAnimation(animationDriver);
      let obj = isModalOpen(12763);
      const mediaShareActions = isModalOpen(8010).useMediaShareActions({ source, disableDownload, shareable });
      const tmp7 = useShouldHideMediaOptionsDefault(channelId);
      const obj2 = isModalOpen(8010);
      isModalOpen = isModalOpen(4736).useIsModalOpen(SHARE_PREPARING_MODAL_KEY);
      const obj3 = isModalOpen(4736);
      const fn = function _() {
        let num = 1;
        if (isModalOpen) {
          num = 0;
        }
        return { opacity: timing.withTiming(num) };
      };
      const obj4 = isModalOpen(4612);
      fn.__closure = { withTiming: isModalOpen(4891).withTiming, isPreparing: isModalOpen };
      fn.__workletHash = 12581177559108;
      fn.__initData = __initData2;
      const animatedStyle = obj4.useAnimatedStyle(fn);
      const obj6 = { style: null, children: null };
      const obj7 = {};
      let merged = Object.assign(closure_5.absoluteFillObject);
      obj7.bottom = undefined;
      const items = [obj7, headerLayoutAnimation];
      obj6.style = items;
      const obj8 = { style: animatedStyle, pointerEvents: null, children: null };
      let str = "box-none";
      if (isModalOpen) {
        str = "none";
      }
      obj8.pointerEvents = str;
      const obj9 = { style: tmp.navbarInner, children: null };
      const obj10 = { style: tmp.navbarLeft, children: null };
      const obj11 = { accessibilityLabel: null, icon: null, onPress: null };
      const obj5 = { withTiming: isModalOpen(4891).withTiming, isPreparing: isModalOpen };
      let intl = tmp2(1126).intl;
      obj11.accessibilityLabel = intl.string(isModalOpen(1126).t.cpT0Cq);
      obj11.icon = closure_8(isModalOpen(6017).XSmallIcon, { size: "md", color: "interactive-text-active" });
      obj11.onPress = onClose;
      const items1 = [closure_8(MediaViewerOverlayButtonDefault, obj11)];
      let tmp10Result3 = null != contextName;
      if (tmp10Result3) {
        const obj12 = { style: tmp.navbarName, children: null };
        const obj13 = { style: tmp.navbarNameInner, children: null };
        let tmp10Result = null != contextIcon;
        if (tmp10Result) {
          const obj14 = {
            source: contextIcon,
            color: nativeDefault.unsafe_rawColors.PRIMARY_345,
            size: tmp2(1188).Icon.Sizes.CUSTOM,
            style: tmp.contextIcon,
          };
          tmp10Result = closure_8(tmp2(1188).Icon, obj14);
        }
        const items2 = [tmp10Result];
        const obj15 = { style: tmp.navbarNameShrinkWrapper, children: null };
        const obj16 = {
          accessibilityRole: "header",
          variant: "heading-md/medium",
          lineClamp: 1,
          ellipsizeMode: "tail",
          color: "text-overlay-light",
          children: contextName,
        };
        obj15.children = closure_8(tmp2(4886).Text, obj16);
        items2[1] = closure_8(closure_6, obj15);
        obj13.children = items2;
        obj12.children = closure_9(closure_6, obj13);
        tmp10Result3 = closure_8(closure_6, obj12);
      }
      items1[1] = tmp10Result3;
      obj10.children = items1;
      const items3 = [closure_9(closure_6, obj10)];
      let tmp12Result = !tmp7;
      if (!tmp7) {
        const obj17 = { style: tmp.navbarRight, children: null };
        const obj18 = { source };
        const items4 = [closure_8(MediaViewerOverlayButtonFavoriteGIFDefault, obj18)];
        let tmp10Result4 = null;
        if (!disableMediaOverlayButton) {
          const obj19 = {
            items: mediaShareActions,
            children(ref) {
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { accessibilityLabel: null, icon: null, ref: null };
              const intl = isModalOpen(1126).intl;
              obj.accessibilityLabel = intl.string(isModalOpen(1126).t.PdRCRg);
              const tmp4 = MediaViewerOverlayButtonDefault;
              if (obj2.isAndroid()) {
                let tmp2Result = closure_1_8(isModalOpen(12768).MoreVerticalIcon, {
                  size: "md",
                  color: "interactive-text-active",
                });
              } else {
                tmp2Result = closure_1_8(isModalOpen(7577).MoreHorizontalIcon, {
                  size: "md",
                  color: "interactive-text-active",
                });
              }
              obj.icon = tmp2Result;
              obj.ref = ref.ref;
              const merged1 = Object.assign(merged);
              return closure_1_8(tmp4, obj);
            },
          };
          tmp10Result4 = closure_8(tmp2(7579).ContextMenu, obj19);
        }
        items4[1] = tmp10Result4;
        obj17.children = items4;
        tmp12Result = closure_9(closure_6, obj17);
      }
      items3[1] = tmp12Result;
      obj9.children = items3;
      obj8.children = closure_9(isModalOpen(8046).MediaModalOverlayHeaderWrapper, obj9);
      obj6.children = closure_8(ReanimatedRexportDefault.View, obj8);
      return closure_8(ReanimatedRexportDefault.View, obj6);
    };
