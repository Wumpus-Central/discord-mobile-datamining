// discord_app/modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import BioMarkupUtils from "../../../../../markup/BioMarkupUtils.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let colors = ["black", "transparent"];
const createStyles = fn(5091);
let obj = {
  animatedViewContainer: { overflow: "hidden" },
  container: { position: "relative", width: "100%" },
  measuringContainer: { width: "100%", position: "absolute" },
  descriptionContainer: { marginTop: 8 },
  viewMoreCTA: { position: "absolute", right: 0, bottom: 0, pointerEvents: "none" },
  maskFill: { flex: 1, backgroundColor: "black" },
  maskLastLine: { flexDirection: "row" },
  maskFade: { width: 32 },
  collapseDescriptionCTA: { marginTop: 4 },
  nameContainer: { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4, overflow: "hidden" },
  nameText: { flexShrink: 1 },
  partnerLabelWrapper: null,
};
let obj3 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4, overflow: "hidden" };
obj.partnerLabelWrapper = {
  justifyContent: "center",
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  borderRadius: nativeDefault.radii.lg,
};
let closure_12 = createStyles.createStyles(obj);
const __initData = { code: "function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}" };
const __initData2 = { code: "function DetailsHeaderTsx2(){const{height}=this.__closure;return{height:height.get()};}" };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useContainerAnimation() {
      const cResult = c.c(3);
      const sharedValue = ReanimatedRexport.useSharedValue(null);
      const fn = function t() {
        return { height: sharedValue.get() };
      };
      fn.__closure = { height: sharedValue };
      fn.__workletHash = 23826674246;
      fn.__initData = __initData;
      const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
      if (cResult[0] === sharedValue) {
        if (cResult[1] === animatedStyle) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      const obj4 = { containerStyle: animatedStyle, containerHeight: sharedValue };
      cResult[0] = sharedValue;
      cResult[1] = animatedStyle;
      cResult[2] = obj4;
      tmp4 = obj4;
    }
  : function useContainerAnimation() {
      const sharedValue = ReanimatedRexport.useSharedValue(null);
      const obj2 = { containerStyle: null, containerHeight: null };
      const fn = function t() {
        return { height: sharedValue.get() };
      };
      fn.__closure = { height: sharedValue };
      fn.__workletHash = 873669633445;
      fn.__initData = __initData2;
      obj2.containerStyle = ReanimatedRexport.useAnimatedStyle(fn);
      obj2.containerHeight = sharedValue;
      return obj2;
    };
let closure_16 = {
  code: "function DetailsHeaderTsx3(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}",
};
let closure_17 = {
  code: "function DetailsHeaderTsx4(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}",
};
ReactCompilerGating = fn(558);
let obj4 = {
  justifyContent: "center",
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  borderRadius: nativeDefault.radii.lg,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function DetailsHeader(arg0) {
        const cResult = ref(576).c(81);
        ({ application, viewContainerStyle, mainContainerStyle, hideName } = arg0);
        const tmp4 = ref2();
        if (cResult[0] !== application) {
          const isPartnerApplicationResult = tmp(9219).isPartnerApplication(application);
          cResult[0] = application;
          cResult[1] = isPartnerApplicationResult;
          let tmp5 = isPartnerApplicationResult;
          const tmpResult = tmp(9219);
        } else {
          tmp5 = cResult[1];
        }
        ref = noop.useRef(null);
        const tmp9 = first1(noop.useState(false), 2);
        const first = tmp9[0];
        dependencyMap = tmp9[1];
        const tmp11 = first1(noop.useState(false), 2);
        first1 = tmp11[0];
        noop = tmp11[1];
        closure_5 = noop.useRef(true);
        let obj = ref(576);
        ({ containerStyle, containerHeight } = closure_15());
        if (cResult[2] !== application) {
          const sectionName = tmp(9219).getSectionName(application);
          cResult[2] = application;
          cResult[3] = sectionName;
          let tmp14 = sectionName;
          const tmpResult5 = tmp(9219);
        } else {
          tmp14 = cResult[3];
        }
        if (cResult[4] !== application) {
          const str = tmp(9219).getSectionDescription(application);
          let tmp18 = null != str;
          if (tmp18) {
            tmp18 = str.trim().length > 0;
          }
          cResult[4] = application;
          cResult[5] = str;
          cResult[6] = tmp18;
          let tmp17 = tmp18;
          let tmp16 = str;
          const tmpResult6 = tmp(9219);
        } else {
          tmp16 = cResult[5];
          tmp17 = cResult[6];
        }
        const tmp8Result = first1(noop.useState(null), 2);
        const first2 = tmp8Result[0];
        closure_8 = tmp8Result[1];
        const tmp8Result4 = first1(noop.useState(null), 2);
        const first3 = tmp8Result4[0];
        closure_10 = tmp8Result4[1];
        colors = obj3.useRef(0);
        const tmp13 = closure_15();
        ref2 = noop.useRef(0);
        [tmp24, closure_13] = first1(noop.useState(false), 2);
        const tmp8Result6 = first1(noop.useState(false), 2);
        const first4 = tmp8Result6[0];
        closure_15 = tmp8Result6[1];
        if (null == tmp16) {
          const isScreenLandscape = tmp(8310).useIsScreenLandscape();
          const tmp32 = first(5929)(isScreenLandscape);
          closure_17 = tmp32;
          if (cResult[9] === isScreenLandscape) {
            if (cResult[10] === tmp32) {
              let tmp33 = cResult[11];
              let tmp34 = cResult[12];
            }
            const effect = obj3.useEffect(tmp33, tmp34);
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              function handleExpandedContainerLayout(nativeEvent) {
                ref2.current = nativeEvent.nativeEvent.layout.height;
                let tmp = ref2.current > 0;
                if (tmp) {
                  tmp = ref.current > 0;
                }
                if (tmp) {
                  closure_15(true);
                }
              }
              cResult[13] = handleExpandedContainerLayout;
              let tmp37 = handleExpandedContainerLayout;
            } else {
              tmp37 = cResult[13];
            }
            if (cResult[14] === containerHeight) {
              if (cResult[15] === first4) {
                let tmp38 = cResult[16];
              }
              if (cResult[17] !== first3) {
                function handleApplicationDescriptionTextLayout(nativeEvent) {
                  const lines = nativeEvent.nativeEvent.lines;
                  if (tmp) {
                    closure_10(lines[0].height);
                  }
                  if (null == ref.current) {
                    ref.current = length;
                  }
                  if (lines.length > 3) {
                    setShouldLineClamp(true);
                    closure_2(true);
                  }
                  tmp = null == first3 && null != lines[0];
                }
                cResult[17] = first3;
                cResult[18] = handleApplicationDescriptionTextLayout;
                let tmp39 = handleApplicationDescriptionTextLayout;
              } else {
                tmp39 = cResult[18];
              }
              if (cResult[19] === containerHeight) {
                if (cResult[20] === first1) {
                  if (cResult[21] === first) {
                    let tmp40 = cResult[22];
                  }
                  const tmp41 = tmp31(6167)(ref);
                  let tmp42 = first;
                  if (first) {
                    tmp42 = !first1;
                  }
                  if (cResult[23] === containerStyle) {
                    if (cResult[24] === tmp4.animatedViewContainer) {
                      if (cResult[25] === viewContainerStyle) {
                        let tmp43 = cResult[26];
                      }
                      if (cResult[27] === mainContainerStyle) {
                        if (cResult[28] === tmp4.container) {
                          let tmp44 = cResult[29];
                        }
                        if (cResult[30] === hideName) {
                          if (cResult[31] === tmp14) {
                            if (cResult[32] === tmp4.nameText) {
                              let tmp45 = cResult[33];
                            }
                            if (cResult[34] === tmp5) {
                              if (cResult[35] === tmp4.partnerLabelWrapper) {
                                let tmp48 = cResult[36];
                              }
                              if (cResult[37] === tmp4.nameContainer) {
                                if (cResult[38] === tmp45) {
                                  if (cResult[39] === tmp48) {
                                    let tmp52 = cResult[40];
                                  }
                                  if (cResult[41] === tmp41) {
                                    if (cResult[42] === null) {
                                      if (cResult[43] === first1) {
                                        if (cResult[44] === first3) {
                                          if (cResult[45] === tmp42) {
                                            if (cResult[46] === tmp40) {
                                              if (cResult[47] === tmp17) {
                                                if (cResult[48] === hideName) {
                                                  if (cResult[49] === tmp24) {
                                                    if (cResult[50] === first) {
                                                      if (cResult[51] === tmp4.collapseDescriptionCTA) {
                                                        if (cResult[52] === tmp4.descriptionContainer) {
                                                          if (cResult[53] === tmp4.maskFade) {
                                                            if (cResult[54] === tmp4.maskFill) {
                                                              if (cResult[55] === tmp4.maskLastLine) {
                                                                if (cResult[56] === tmp4.viewMoreCTA) {
                                                                  if (cResult[57] === first2) {
                                                                    let tmp56 = cResult[58];
                                                                  }
                                                                  if (cResult[59] === tmp38) {
                                                                    if (cResult[60] === tmp44) {
                                                                      if (cResult[61] === tmp52) {
                                                                        if (cResult[62] === tmp56) {
                                                                          let tmp70 = cResult[63];
                                                                        }
                                                                        if (cResult[64] === tmp43) {
                                                                          if (cResult[65] === tmp70) {
                                                                            let tmp74 = cResult[66];
                                                                          }
                                                                          if (cResult[67] === null) {
                                                                            if (cResult[68] === tmp39) {
                                                                              if (cResult[69] === tmp17) {
                                                                                if (cResult[70] === first4) {
                                                                                  if (cResult[71] === hideName) {
                                                                                    if (
                                                                                      cResult[72] === mainContainerStyle
                                                                                    ) {
                                                                                      if (cResult[73] === tmp14) {
                                                                                        if (
                                                                                          cResult[74] ===
                                                                                          tmp4.collapseDescriptionCTA
                                                                                        ) {
                                                                                          if (
                                                                                            cResult[75] ===
                                                                                            tmp4.descriptionContainer
                                                                                          ) {
                                                                                            if (
                                                                                              cResult[76] ===
                                                                                              tmp4.measuringContainer
                                                                                            ) {
                                                                                              let tmp77 = cResult[77];
                                                                                            }
                                                                                            if (cResult[78] === tmp74) {
                                                                                              if (
                                                                                                cResult[79] === tmp77
                                                                                              ) {
                                                                                                let tmp85 = cResult[80];
                                                                                              }
                                                                                              return tmp85;
                                                                                            }
                                                                                            let obj2 = {
                                                                                              children: null,
                                                                                            };
                                                                                            const items = [
                                                                                              tmp74,
                                                                                              tmp77,
                                                                                            ];
                                                                                            obj2.children = items;
                                                                                            const tmp88 = first3(
                                                                                              closure_10,
                                                                                              obj2,
                                                                                            );
                                                                                            cResult[78] = tmp74;
                                                                                            cResult[79] = tmp77;
                                                                                            cResult[80] = tmp88;
                                                                                            tmp85 = tmp88;
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                          let tmp79Result2 = !first4;
                                                                          if (!first4) {
                                                                            const obj4 = {
                                                                              style: null,
                                                                              onLayout: null,
                                                                              children: null,
                                                                            };
                                                                            const items1 = [
                                                                              mainContainerStyle,
                                                                              tmp4.measuringContainer,
                                                                              { opacity: 0, pointerEvents: "none" },
                                                                            ];
                                                                            obj4.style = items1;
                                                                            obj4.onLayout = tmp37;
                                                                            let tmp81 = !hideName;
                                                                            if (!hideName) {
                                                                              const obj5 = {
                                                                                variant: "heading-lg/bold",
                                                                                color: "text-default",
                                                                                children: tmp14,
                                                                              };
                                                                              tmp81 = closure_8(
                                                                                tmp(5087).Heading,
                                                                                obj5,
                                                                              );
                                                                            }
                                                                            const items2 = [tmp81];
                                                                            let tmp79Result = tmp17;
                                                                            if (tmp17) {
                                                                              let descriptionContainer2 = !hideName;
                                                                              if (!hideName) {
                                                                                descriptionContainer2 =
                                                                                  tmp4.descriptionContainer;
                                                                              }
                                                                              const obj6 = {
                                                                                style: descriptionContainer2,
                                                                                children: null,
                                                                              };
                                                                              const obj7 = {
                                                                                variant: "text-sm/medium",
                                                                                color: "text-default",
                                                                                onTextLayout: tmp39,
                                                                                children: null,
                                                                              };
                                                                              const items3 = [
                                                                                closure_8(tmp(5087).Text, obj7),
                                                                              ];
                                                                              const obj8 = {
                                                                                variant: "text-sm/medium",
                                                                                color: "text-brand",
                                                                                style: tmp4.collapseDescriptionCTA,
                                                                                children: null,
                                                                              };
                                                                              const intl4 = tmp(1126).intl;
                                                                              obj8.children = intl4.string(
                                                                                tmp(1126).t.D5xGUK,
                                                                              );
                                                                              items3[1] = closure_8(
                                                                                tmp(5087).Text,
                                                                                obj8,
                                                                              );
                                                                              obj6.children = items3;
                                                                              tmp79Result = tmp79(tmp80, obj6);
                                                                            }
                                                                            items2[1] = tmp79Result;
                                                                            obj4.children = items2;
                                                                            tmp79Result2 = tmp79(tmp80, obj4);
                                                                          }
                                                                          cResult[67] = null;
                                                                          cResult[68] = tmp39;
                                                                          cResult[69] = tmp17;
                                                                          cResult[70] = first4;
                                                                          cResult[71] = hideName;
                                                                          cResult[72] = mainContainerStyle;
                                                                          cResult[73] = tmp14;
                                                                          cResult[74] = tmp4.collapseDescriptionCTA;
                                                                          cResult[75] = tmp4.descriptionContainer;
                                                                          cResult[76] = tmp4.measuringContainer;
                                                                          cResult[77] = tmp79Result2;
                                                                          tmp77 = tmp79Result2;
                                                                        }
                                                                        const obj9 = { style: tmp43, children: tmp70 };
                                                                        const tmp76 = closure_8(tmp31(4811).View, obj9);
                                                                        cResult[64] = tmp43;
                                                                        cResult[65] = tmp70;
                                                                        cResult[66] = tmp76;
                                                                        tmp74 = tmp76;
                                                                      }
                                                                    }
                                                                  }
                                                                  const obj10 = {
                                                                    style: tmp44,
                                                                    onLayout: tmp38,
                                                                    children: null,
                                                                  };
                                                                  const items4 = [tmp52, tmp56];
                                                                  obj10.children = items4;
                                                                  const tmp73 = first3(closure_5, obj10);
                                                                  cResult[59] = tmp38;
                                                                  cResult[60] = tmp44;
                                                                  cResult[61] = tmp52;
                                                                  cResult[62] = tmp56;
                                                                  cResult[63] = tmp73;
                                                                  tmp70 = tmp73;
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
                                          }
                                        }
                                      }
                                    }
                                  }
                                  let tmp58Result2 = tmp17;
                                  if (tmp17) {
                                    let descriptionContainer = !hideName;
                                    if (!hideName) {
                                      descriptionContainer = tmp4.descriptionContainer;
                                    }
                                    const obj11 = {
                                      style: descriptionContainer,
                                      onPress: tmp40,
                                      accessibilityRole: "button",
                                      children: null,
                                    };
                                    const obj12 = { style: null };
                                    const absoluteFill = first2.absoluteFill;
                                    if (tmp42) {
                                      const obj13 = { style: absoluteFill, children: null };
                                      obj12.style = tmp4.maskFill;
                                      const items5 = [tmp60(tmp62, obj12)];
                                      const items6 = [tmp4.maskLastLine];
                                      let num42 = first3;
                                      if (first3 == null) {
                                        num42 = 0;
                                      }
                                      const obj14 = { style: null, children: null };
                                      const obj15 = { height: num42 };
                                      items6[1] = obj15;
                                      obj14.style = items6;
                                      const obj16 = { style: tmp4.maskFill };
                                      const items7 = [tmp60(tmp62, obj16), ,];
                                      const obj17 = {
                                        start: tmp(1105).HorizontalGradient.START,
                                        end: tmp(1105).HorizontalGradient.END,
                                        colors,
                                        style: tmp4.maskFade,
                                      };
                                      items7[1] = tmp60(tmp31(5388), obj17);
                                      let num43 = first2;
                                      if (first2 == null) {
                                        num43 = 0;
                                      }
                                      const obj18 = { style: null };
                                      const obj19 = { width: num43 };
                                      obj18.style = obj19;
                                      items7[2] = tmp60(tmp62, obj18);
                                      obj14.children = items7;
                                      items5[1] = tmp58(tmp62, obj14);
                                      obj13.children = items5;
                                      let tmp60Result2 = tmp58(tmp62, obj13);
                                      let tmp65 = tmp62;
                                      const tmp31Result2 = tmp31(5388);
                                    } else {
                                      const items8 = [absoluteFill, tmp4.maskFill];
                                      obj12.style = items8;
                                      tmp60Result2 = tmp60(tmp62, obj12);
                                      tmp65 = tmp62;
                                    }
                                    const obj20 = { maskElement: tmp60Result2, children: null };
                                    const obj21 = {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      lineClamp: num44,
                                      children: null,
                                    };
                                    obj20.children = closure_8(tmp(5087).Text, obj21);
                                    const items9 = [closure_8(tmp31(6247), obj20), ,];
                                    let tmp60Result = null;
                                    if (tmp42) {
                                      const obj22 = { style: tmp4.viewMoreCTA, children: null };
                                      const obj23 = {
                                        onLayout(nativeEvent) {
                                          if (null == first2) {
                                            closure_8(nativeEvent.nativeEvent.layout.width);
                                          }
                                        },
                                        variant: "text-sm/medium",
                                        color: "text-brand",
                                        children: null,
                                      };
                                      const intl2 = tmp(1126).intl;
                                      const items10 = ["\u2026 ", intl2.string(tmp(1126).t["OBCR+p"])];
                                      obj23.children = items10;
                                      obj22.children = tmp58(tmp(5087).Text, obj23);
                                      tmp60Result = tmp60(tmp65, obj22);
                                    }
                                    items9[1] = tmp60Result;
                                    let tmp60Result3 = null;
                                    if (first) {
                                      tmp60Result3 = null;
                                      if (first1) {
                                        const obj24 = {
                                          variant: "text-sm/medium",
                                          color: "text-brand",
                                          style: tmp4.collapseDescriptionCTA,
                                          children: null,
                                        };
                                        const intl3 = tmp(1126).intl;
                                        obj24.children = intl3.string(tmp(1126).t.D5xGUK);
                                        tmp60Result3 = tmp60(tmp(5087).Text, obj24);
                                      }
                                    }
                                    items9[2] = tmp60Result3;
                                    obj11.children = items9;
                                    tmp58Result2 = tmp58(containerHeight, obj11);
                                    const tmp31Result = tmp31(6247);
                                  }
                                  cResult[41] = tmp41;
                                  cResult[42] = null;
                                  cResult[43] = first1;
                                  cResult[44] = first3;
                                  cResult[45] = tmp42;
                                  cResult[46] = tmp40;
                                  cResult[47] = tmp17;
                                  cResult[48] = hideName;
                                  cResult[49] = tmp24;
                                  cResult[50] = first;
                                  cResult[51] = tmp4.collapseDescriptionCTA;
                                  cResult[52] = tmp4.descriptionContainer;
                                  cResult[53] = tmp4.maskFade;
                                  cResult[54] = tmp4.maskFill;
                                  cResult[55] = tmp4.maskLastLine;
                                  cResult[56] = tmp4.viewMoreCTA;
                                  cResult[57] = first2;
                                  cResult[58] = tmp58Result2;
                                  tmp56 = tmp58Result2;
                                }
                              }
                              const obj25 = { style: tmp4.nameContainer, children: null };
                              const items11 = [tmp45, tmp48];
                              obj25.children = items11;
                              const tmp55 = first3(closure_5, obj25);
                              cResult[37] = tmp4.nameContainer;
                              cResult[38] = tmp45;
                              cResult[39] = tmp48;
                              cResult[40] = tmp55;
                              tmp52 = tmp55;
                            }
                            let tmp49 = null;
                            if (tmp5) {
                              const obj26 = { style: tmp4.partnerLabelWrapper, children: null };
                              const obj27 = { variant: "text-xs/medium", color: "text-default", children: null };
                              const intl = tmp(1126).intl;
                              obj27.children = intl.string(tmp(1126).t.LO4f0P);
                              obj26.children = closure_8(tmp(5087).Text, obj27);
                              tmp49 = closure_8(closure_5, obj26);
                            }
                            cResult[34] = tmp5;
                            cResult[35] = tmp4.partnerLabelWrapper;
                            cResult[36] = tmp49;
                            tmp48 = tmp49;
                          }
                        }
                        let tmp46 = !hideName;
                        if (!hideName) {
                          const obj28 = {
                            style: tmp4.nameText,
                            variant: "heading-lg/bold",
                            color: "text-default",
                            lineClamp: 1,
                            children: tmp14,
                          };
                          tmp46 = closure_8(tmp(5087).Heading, obj28);
                        }
                        cResult[30] = hideName;
                        cResult[31] = tmp14;
                        cResult[32] = tmp4.nameText;
                        cResult[33] = tmp46;
                        tmp45 = tmp46;
                      }
                      const items12 = [tmp4.container, mainContainerStyle];
                      cResult[27] = mainContainerStyle;
                      cResult[28] = tmp4.container;
                      cResult[29] = items12;
                      tmp44 = items12;
                    }
                  }
                  const items13 = [tmp4.animatedViewContainer, containerStyle, viewContainerStyle];
                  cResult[23] = containerStyle;
                  cResult[24] = tmp4.animatedViewContainer;
                  cResult[25] = viewContainerStyle;
                  cResult[26] = items13;
                  tmp43 = items13;
                }
              }
              function handleApplicationDescriptionPress() {
                if (first) {
                  closure_5.current = false;
                  if (first1) {
                    const obj2 = timing;
                    const current = ref.current;
                    const fn = function t() {
                      ref(closure_2[8]).runOnJS(setShouldLineClamp)(true);
                    };
                    const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setShouldLineClamp };
                    fn.__closure = obj3;
                    fn.__workletHash = 10020568053710;
                    fn.__initData = __initData;
                    const result = containerHeight.set(
                      obj2.withTiming(current, timingPresets.timingStandard, "respect-motion-settings", fn),
                    );
                  } else {
                    setShouldLineClamp(false);
                    const result1 = containerHeight.set(timing.withTiming(ref2.current, timingPresets.timingStandard));
                  }
                  closure_4(!first1);
                }
              }
              cResult[19] = containerHeight;
              cResult[20] = first1;
              cResult[21] = first;
              cResult[22] = handleApplicationDescriptionPress;
              tmp40 = handleApplicationDescriptionPress;
            }
            function handleCollapsedContainerLayout(nativeEvent) {
              if (!first4) {
                ref.current = nativeEvent.nativeEvent.layout.height;
                const result = containerHeight.set(ref.current);
                if (tmp6) {
                  closure_15(true);
                }
                tmp6 = ref2.current > 0 && ref.current > 0;
              }
            }
            cResult[14] = containerHeight;
            cResult[15] = first4;
            cResult[16] = handleCollapsedContainerLayout;
            tmp38 = handleCollapsedContainerLayout;
          }
          function he() {
            if (isScreenLandscape !== closure_17) {
              closure_15(false);
              closure_12.current = 0;
              closure_11.current = 0;
            }
          }
          const items14 = [isScreenLandscape, tmp32];
          cResult[9] = isScreenLandscape;
          cResult[10] = tmp32;
          cResult[11] = he;
          cResult[12] = items14;
          tmp34 = items14;
          tmp33 = he;
          const tmpResult7 = tmp(8310);
        } else if (cResult[7] !== tmp16) {
          let result = tmp(10580).parseBioReactWithCachedAST(tmp16);
          cResult[7] = tmp16;
          cResult[8] = result;
          const tmpResult8 = tmp(10580);
        }
      }
    : function DetailsHeader(viewContainerStyle) {
        ({ application, mainContainerStyle, hideName } = viewContainerStyle);
        let first1;
        noop = undefined;
        c6 = undefined;
        let num2;
        closure_9 = undefined;
        let num3;
        colors = undefined;
        let ref;
        c14 = undefined;
        let first2;
        closure_16 = undefined;
        let isScreenLandscape;
        closure_18 = undefined;
        let tmp = ref();
        let obj = ref(9219);
        ref = noop.useRef(null);
        const tmp7 = first1(noop.useState(false), 2);
        const first = tmp7[0];
        dependencyMap = tmp7[1];
        const tmp9 = first1(noop.useState(false), 2);
        first1 = tmp9[0];
        noop = tmp9[1];
        closure_5 = noop.useRef(true);
        const isPartnerApplicationResult = ref(9219).isPartnerApplication(application);
        ({ containerHeight: c6, containerStyle } = first2());
        const tmp11 = first2();
        const sectionName = ref(9219).getSectionName(application);
        let obj3 = ref(9219);
        const str = ref(9219).getSectionDescription(application);
        let tmp27Result5 = null != str;
        if (tmp27Result5) {
          tmp27Result5 = str.trim().length > 0;
        }
        const tmp6Result = first1(noop.useState(null), 2);
        num2 = tmp6Result[0];
        closure_9 = tmp6Result[1];
        const tmp6Result4 = first1(noop.useState(null), 2);
        num3 = tmp6Result4[0];
        colors = tmp6Result4[1];
        ref = obj2.useRef(0);
        noop.useRef(0);
        const obj4 = ref(9219);
        [tmp17, c14] = first1(noop.useState(false), 2);
        const tmp6Result6 = first1(noop.useState(false), 2);
        first2 = tmp6Result6[0];
        closure_16 = tmp6Result6[1];
        const items = [str];
        const memo = obj2.useMemo(() => {
          let result = null;
          if (null != str) {
            result = BioMarkupUtils.parseBioReactWithCachedAST(tmp);
          }
          return result;
        }, items);
        const tmp6Result5 = first1(noop.useState(false), 2);
        isScreenLandscape = ref(8310).useIsScreenLandscape();
        const tmp23 = first(5929)(isScreenLandscape);
        closure_18 = tmp23;
        const items1 = [isScreenLandscape, tmp23];
        const effect = obj2.useEffect(() => {
          if (isScreenLandscape !== closure_18) {
            closure_16(false);
            closure_13.current = 0;
            closure_12.current = 0;
          }
        }, items1);
        let tmp26 = first;
        const tmp2Result = ref(8310);
        if (first) {
          tmp26 = !first1;
        }
        const obj5 = { style: null, children: null };
        const items2 = [tmp.animatedViewContainer, containerStyle, viewContainerStyle.viewContainerStyle];
        obj5.style = items2;
        const obj6 = {
          style: null,
          onLayout: function handleCollapsedContainerLayout(nativeEvent) {
            if (!first2) {
              ref.current = nativeEvent.nativeEvent.layout.height;
              const result = _undefined.set(ref.current);
              if (tmp6) {
                closure_16(true);
              }
              tmp6 = ref2.current > 0 && ref.current > 0;
            }
          },
          children: null,
        };
        const items3 = [tmp.container, mainContainerStyle];
        obj6.style = items3;
        const obj7 = { style: tmp.nameContainer, children: null };
        let tmp29Result = !hideName;
        if (!hideName) {
          const obj8 = {
            style: tmp.nameText,
            variant: "heading-lg/bold",
            color: "text-default",
            lineClamp: 1,
            children: sectionName,
          };
          tmp29Result = tmp29(tmp2(5087).Heading, obj8);
        }
        const items4 = [tmp29Result];
        let tmp29Result5 = null;
        if (isPartnerApplicationResult) {
          const obj9 = { style: tmp.partnerLabelWrapper, children: null };
          const obj10 = { variant: "text-xs/medium", color: "text-default", children: null };
          const intl = tmp2(1126).intl;
          obj10.children = intl.string(tmp2(1126).t.LO4f0P);
          obj9.children = tmp29(tmp2(5087).Text, obj10);
          tmp29Result5 = tmp29(tmp30, obj9);
        }
        items4[1] = tmp29Result5;
        obj7.children = items4;
        const items5 = [closure_9(closure_5, obj7)];
        let tmp27Result4 = tmp27Result5;
        if (tmp27Result5) {
          let descriptionContainer = !hideName;
          if (!hideName) {
            descriptionContainer = tmp.descriptionContainer;
          }
          const obj11 = {
            style: descriptionContainer,
            onPress: function handleApplicationDescriptionPress() {
              if (first) {
                closure_5.current = false;
                if (first1) {
                  const obj2 = timing;
                  const current = ref.current;
                  const fn = function t() {
                    ref(closure_2[8]).runOnJS(setShouldLineClamp)(true);
                  };
                  const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setShouldLineClamp };
                  fn.__closure = obj3;
                  fn.__workletHash = 2433505176233;
                  fn.__initData = __initData;
                  const result = _undefined.set(
                    obj2.withTiming(current, timingPresets.timingStandard, "respect-motion-settings", fn),
                  );
                } else {
                  setShouldLineClamp(false);
                  const result1 = _undefined.set(timing.withTiming(ref2.current, timingPresets.timingStandard));
                }
                closure_4(!first1);
              }
            },
            accessibilityRole: "button",
            children: null,
          };
          const obj12 = { style: null };
          const absoluteFill = str.absoluteFill;
          if (tmp26) {
            const obj13 = { style: absoluteFill, children: null };
            obj12.style = tmp.maskFill;
            const items6 = [tmp29(tmp30, obj12)];
            const items7 = [tmp.maskLastLine];
            if (num3 == null) {
              num3 = 0;
            }
            const obj14 = { style: null, children: null };
            const obj15 = { height: num3 };
            items7[1] = obj15;
            obj14.style = items7;
            const obj16 = { style: tmp.maskFill };
            const items8 = [tmp29(tmp30, obj16), ,];
            const obj17 = {
              start: tmp2(1105).HorizontalGradient.START,
              end: tmp2(1105).HorizontalGradient.END,
              colors,
              style: tmp.maskFade,
            };
            items8[1] = tmp29(tmp22(5388), obj17);
            if (num2 == null) {
              num2 = 0;
            }
            const obj18 = { style: null };
            const obj19 = { width: num2 };
            obj18.style = obj19;
            items8[2] = tmp29(tmp30, obj18);
            obj14.children = items8;
            items6[1] = tmp27(tmp30, obj14);
            obj13.children = items6;
            let tmp29Result6 = tmp27(tmp30, obj13);
            const tmp22Result2 = tmp22(5388);
          } else {
            const items9 = [absoluteFill, tmp.maskFill];
            obj12.style = items9;
            tmp29Result6 = tmp29(tmp30, obj12);
          }
          const obj20 = { maskElement: tmp29Result6, children: null };
          const obj21 = { variant: "text-sm/medium", color: "text-default", lineClamp: num4, children: memo };
          obj20.children = tmp29(tmp2(5087).Text, obj21);
          const items10 = [tmp29(tmp22(6247), obj20), ,];
          let tmp29Result7 = null;
          if (tmp26) {
            const obj22 = { style: tmp.viewMoreCTA, children: null };
            const obj23 = {
              onLayout(nativeEvent) {
                if (null == num2) {
                  closure_9(nativeEvent.nativeEvent.layout.width);
                }
              },
              variant: "text-sm/medium",
              color: "text-brand",
              children: null,
            };
            const intl2 = tmp2(1126).intl;
            const items11 = ["\u2026 ", intl2.string(tmp2(1126).t["OBCR+p"])];
            obj23.children = items11;
            obj22.children = tmp27(tmp2(5087).Text, obj23);
            tmp29Result7 = tmp29(tmp30, obj22);
          }
          items10[1] = tmp29Result7;
          let tmp29Result8 = null;
          if (first) {
            tmp29Result8 = null;
            if (first1) {
              const obj24 = {
                variant: "text-sm/medium",
                color: "text-brand",
                style: tmp.collapseDescriptionCTA,
                children: null,
              };
              const intl3 = tmp2(1126).intl;
              obj24.children = intl3.string(tmp2(1126).t.D5xGUK);
              tmp29Result8 = tmp29(tmp2(5087).Text, obj24);
            }
          }
          items10[2] = tmp29Result8;
          obj11.children = items10;
          tmp27Result4 = tmp27(c6, obj11);
          const tmp22Result = tmp22(6247);
        }
        items5[1] = tmp27Result4;
        obj6.children = items5;
        obj5.children = closure_9(closure_5, obj6);
        const children = [num2(first(4811).View, obj5)];
        let tmp27Result6 = !first2;
        if (!first2) {
          const obj25 = { style: null, onLayout: null, children: null };
          const items13 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
          obj25.style = items13;
          obj25.onLayout = function handleExpandedContainerLayout(nativeEvent) {
            ref2.current = nativeEvent.nativeEvent.layout.height;
            let tmp = ref2.current > 0;
            if (tmp) {
              tmp = ref.current > 0;
            }
            if (tmp) {
              closure_16(true);
            }
          };
          let tmp29Result9 = !hideName;
          if (!hideName) {
            const obj26 = { variant: "heading-lg/bold", color: "text-default", children: sectionName };
            tmp29Result9 = tmp29(tmp2(5087).Heading, obj26);
          }
          const items14 = [tmp29Result9];
          if (tmp27Result5) {
            let descriptionContainer2 = !hideName;
            if (!hideName) {
              descriptionContainer2 = tmp.descriptionContainer;
            }
            const obj27 = { style: descriptionContainer2, children: null };
            const obj28 = {
              variant: "text-sm/medium",
              color: "text-default",
              onTextLayout: function handleApplicationDescriptionTextLayout(nativeEvent) {
                const lines = nativeEvent.nativeEvent.lines;
                if (tmp) {
                  closure_11(lines[0].height);
                }
                if (null == ref.current) {
                  ref.current = length;
                }
                if (lines.length > 3) {
                  setShouldLineClamp(true);
                  closure_2(true);
                }
                tmp = null == num3 && null != lines[0];
              },
              children: memo,
            };
            const items15 = [tmp29(tmp2(5087).Text, obj28)];
            const obj29 = {
              variant: "text-sm/medium",
              color: "text-brand",
              style: tmp.collapseDescriptionCTA,
              children: null,
            };
            const intl4 = tmp2(1126).intl;
            obj29.children = intl4.string(tmp2(1126).t.D5xGUK);
            items15[1] = tmp29(tmp2(5087).Text, obj29);
            obj27.children = items15;
            tmp27Result5 = tmp27(tmp30, obj27);
          }
          items14[1] = tmp27Result5;
          obj25.children = items14;
          tmp27Result6 = tmp27(tmp30, obj25);
        }
        children[1] = tmp27Result6;
        return closure_9(num3, { children });
      },
);
