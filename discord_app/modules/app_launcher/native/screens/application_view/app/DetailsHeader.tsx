// discord_app/modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import BioMarkupUtils from "../../../../../markup/BioMarkupUtils.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let dependencyMap,
  flag,
  num,
  obj1,
  ref2,
  set,
  set2,
  set2Result,
  tmp10,
  tmp13,
  tmp14,
  tmp15,
  tmp19,
  tmp2,
  tmp20,
  tmp21,
  tmp22,
  tmp24,
  tmp25,
  tmp3,
  tmp5,
  tmp6,
  tmp8;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let colors = ["black", "transparent"];
let createStyles = createStyles_mod;
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
  nameContainer: obj2,
  nameText: { flexShrink: 1 },
  partnerLabelWrapper: obj3,
};
obj2 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = {
  justifyContent: "center",
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  borderRadius: nativeDefault.radii.lg,
};
let ref = createStyles(obj);
let __initData = { code: "function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}" };
__initData = { code: "function DetailsHeaderTsx2(){const{height}=this.__closure;return{height:height.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let obj = react2;
      const cResult = obj.c(3);
      const obj2 = ReanimatedRexport;
      const sharedValue = obj2.useSharedValue(null);
      const fn = function t() {
        const obj = { height: sharedValue.get() };
        return obj;
      };
      fn.__closure = { height: sharedValue };
      fn.__workletHash = 23826674246;
      fn.__initData = __initData;
      const obj3 = ReanimatedRexport;
      const animatedStyle = obj3.useAnimatedStyle(fn);
      if (cResult[0] === sharedValue) {
        let tmp4;
        if (cResult[1] === animatedStyle) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      const obj4 = { containerStyle: animatedStyle, containerHeight: sharedValue };
      cResult[0] = sharedValue;
      cResult[1] = animatedStyle;
      cResult[2] = obj4;
      tmp4 = obj4;
    }
  : () => {
      let fn;
      let obj3;
      let obj = ReanimatedRexport;
      const sharedValue = obj.useSharedValue(null);
      const obj2 = { containerStyle: obj3.useAnimatedStyle(fn), containerHeight: sharedValue };
      fn = function t() {
        const obj = { height: sharedValue.get() };
        return obj;
      };
      fn.__closure = { height: sharedValue };
      fn.__workletHash = 873669633445;
      fn.__initData = __initData;
      obj3 = ReanimatedRexport;
      return obj2;
    };
const __initData2 = {
  code: "function DetailsHeaderTsx3(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}",
};
let closure_17 = {
  code: "function DetailsHeaderTsx4(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let application;
        let closure_13;
        let closure_2;
        let closure_4;
        let containerHeight;
        let containerStyle;
        let first1;
        let hideName;
        let mainContainerStyle;
        let tmp16;
        let viewContainerStyle;
        let tmp = ref;
        let obj = ref(576);
        const cResult = obj.c(81);
        ({ application, viewContainerStyle, mainContainerStyle, hideName } = arg0);
        ref();
        if (cResult[0] !== application) {
          const tmpResult = tmp(8826);
          const isPartnerApplicationResult = tmpResult.isPartnerApplication(application);
          cResult[0] = application;
          cResult[1] = isPartnerApplicationResult;
        }
        ref = react.useRef(null);
        const tmp9 = first1(react.useState(false), 2);
        const first = tmp9[0];
        dependencyMap = tmp9[1];
        const tmp11 = first1(react.useState(false), 2);
        first1 = tmp11[0];
        react = tmp11[1];
        let closure_5 = react.useRef(true);
        ({ containerStyle, containerHeight } = closure_15());
        closure_15();
        if (cResult[2] !== application) {
          const tmpResult5 = tmp(8826);
          const sectionName = tmpResult5.getSectionName(application);
          cResult[2] = application;
          cResult[3] = sectionName;
        }
        if (cResult[4] !== application) {
          const tmpResult6 = tmp(8826);
          const str = tmpResult6.getSectionDescription(application);
          cResult[4] = application;
          cResult[5] = str;
          cResult[6] = null != str && str.trim().length > 0;
          tmp16 = str;
          const tmp18 = null != str && str.trim().length > 0;
        } else {
          tmp16 = cResult[5];
        }
        const tmp8Result = first1(react.useState(null), 2);
        let closure_7 = tmp8Result[0];
        let closure_8 = tmp8Result[1];
        const tmp8Result4 = first1(react.useState(null), 2);
        const first2 = tmp8Result4[0];
        let closure_10 = tmp8Result4[1];
        colors = obj3.useRef(0);
        ref = obj3.useRef(0);
        [r10087, closure_13] = first1(react.useState(false), 2);
        first1(react.useState(false), 2);
        const tmp8Result6 = first1(react.useState(false), 2);
        const first3 = tmp8Result6[0];
        closure_15 = tmp8Result6[1];
        if (null != tmp16) {
          if (cResult[7] !== tmp16) {
            const tmpResult7 = tmp(8971);
            let result = tmpResult7.parseBioReactWithCachedAST(tmp16);
            cResult[7] = tmp16;
            cResult[8] = result;
          }
        }
        const tmpResult8 = tmp(5919);
        const isScreenLandscape = tmpResult8.useIsScreenLandscape();
        const tmp29 = first(7957)(isScreenLandscape);
        closure_17 = tmp29;
        if (cResult[9] === isScreenLandscape) {
          let tmp30;
          let tmp31;
          if (cResult[10] === tmp29) {
            tmp30 = cResult[11];
            tmp31 = cResult[12];
          }
          const effect = obj3.useEffect(tmp30, tmp31);
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            function pe(nativeEvent) {
              ref2.current = nativeEvent.nativeEvent.layout.height;
              const tmp = ref2.current > 0 && ref.current > 0;
              if (tmp) {
                closure_15(true);
              }
            }
            cResult[13] = pe;
          }
          if (cResult[14] === containerHeight) {
            if (cResult[17] !== first2) {
              class Se {
                constructor(nativeEvent) {
                  const lines = nativeEvent.nativeEvent.lines;
                  const tmp = null == first2 && null != lines[0];
                  if (tmp) {
                    closure_10(lines[0].height);
                  }
                  if (null == ref.current) {
                    ref.current = lines.length;
                  }
                  if (lines.length > 3) {
                    setShouldLineClamp(true);
                    closure_2(true);
                  }
                }
              }
              cResult[17] = first2;
              class Te {
                constructor() {
                  tmp = closure_1;
                  if (tmp) {
                    tmp2 = closure_5;
                    flag = false;
                    closure_5.current = false;
                    tmp3 = closure_3;
                    if (tmp3) {
                      tmp13 = containerHeight;
                      tmp14 = closure_0;
                      tmp15 = closure_2;
                      set2 = containerHeight.set;
                      tmp16 = closure_0(closure_2[13]);
                      tmp17 = closure_11;
                      current = closure_11.current;
                      tmp18 = closure_0;
                      tmp19 = closure_2;
                      withTiming = tmp16.withTiming;
                      fn = function t() {
                        const obj = ref(closure_2[8]);
                        obj.runOnJS(setShouldLineClamp)(true);
                      };
                      obj1 = { runOnJS: null, setShouldLineClamp: null };
                      tmp20 = closure_0;
                      tmp21 = closure_2;
                      timingStandard = closure_0(closure_2[14]).timingStandard;
                      obj1.runOnJS = closure_0(closure_2[8]).runOnJS;
                      tmp22 = closure_13;
                      obj1.setShouldLineClamp = closure_13;
                      fn.__closure = obj1;
                      num = 10020568053710;
                      fn.__workletHash = 10020568053710;
                      tmp23 = closure_16;
                      fn.__initData = closure_16;
                      str = "respect-motion-settings";
                      tmp24 = tmp16;
                      tmp25 = current;
                      tmp26 = fn;
                      set2Result = set2(withTiming(current, timingStandard, "respect-motion-settings", fn));
                    } else {
                      tmp4 = closure_13;
                      tmp5 = closure_13(false);
                      tmp6 = containerHeight;
                      tmp7 = closure_0;
                      tmp8 = closure_2;
                      set = containerHeight.set;
                      obj = closure_0(closure_2[13]);
                      tmp9 = closure_12;
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      result = set(obj.withTiming(closure_12.current, closure_0(closure_2[14]).timingStandard));
                    }
                    tmp28 = closure_4;
                    tmp29 = closure_4(!tmp3);
                  }
                  return;
                }
              }
              cResult[18] = Se;
            } else {
              class Se {
                constructor(nativeEvent) {
                  const lines = nativeEvent.nativeEvent.lines;
                  const tmp = null == first2 && null != lines[0];
                  if (tmp) {
                    closure_10(lines[0].height);
                  }
                  if (null == ref.current) {
                    ref.current = lines.length;
                  }
                  if (lines.length > 3) {
                    setShouldLineClamp(true);
                    closure_2(true);
                  }
                }
              }
            }
            if (cResult[19] === containerHeight) {
              class Se {
                constructor(nativeEvent) {
                  const lines = nativeEvent.nativeEvent.lines;
                  const tmp = null == first2 && null != lines[0];
                  if (tmp) {
                    closure_10(lines[0].height);
                  }
                  if (null == ref.current) {
                    ref.current = lines.length;
                  }
                  if (lines.length > 3) {
                    setShouldLineClamp(true);
                    closure_2(true);
                  }
                }
              }
            }
            class Te {
              constructor() {
                tmp = closure_1;
                if (tmp) {
                  tmp2 = closure_5;
                  flag = false;
                  closure_5.current = false;
                  tmp3 = closure_3;
                  if (tmp3) {
                    tmp13 = containerHeight;
                    tmp14 = closure_0;
                    tmp15 = closure_2;
                    set2 = containerHeight.set;
                    tmp16 = closure_0(closure_2[13]);
                    tmp17 = closure_11;
                    current = closure_11.current;
                    tmp18 = closure_0;
                    tmp19 = closure_2;
                    withTiming = tmp16.withTiming;
                    fn = function t() {
                      const obj = ref(closure_2[8]);
                      obj.runOnJS(setShouldLineClamp)(true);
                    };
                    obj1 = { runOnJS: null, setShouldLineClamp: null };
                    tmp20 = closure_0;
                    tmp21 = closure_2;
                    timingStandard = closure_0(closure_2[14]).timingStandard;
                    obj1.runOnJS = closure_0(closure_2[8]).runOnJS;
                    tmp22 = closure_13;
                    obj1.setShouldLineClamp = closure_13;
                    fn.__closure = obj1;
                    num = 10020568053710;
                    fn.__workletHash = 10020568053710;
                    tmp23 = closure_16;
                    fn.__initData = closure_16;
                    str = "respect-motion-settings";
                    tmp24 = tmp16;
                    tmp25 = current;
                    tmp26 = fn;
                    set2Result = set2(withTiming(current, timingStandard, "respect-motion-settings", fn));
                  } else {
                    tmp4 = closure_13;
                    tmp5 = closure_13(false);
                    tmp6 = containerHeight;
                    tmp7 = closure_0;
                    tmp8 = closure_2;
                    set = containerHeight.set;
                    obj = closure_0(closure_2[13]);
                    tmp9 = closure_12;
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    result = set(obj.withTiming(closure_12.current, closure_0(closure_2[14]).timingStandard));
                  }
                  tmp28 = closure_4;
                  tmp29 = closure_4(!tmp3);
                }
                return;
              }
            }
            cResult[19] = containerHeight;
            cResult[20] = first1;
            cResult[21] = first;
            cResult[22] = Te;
          }
          function xe(nativeEvent) {
            if (!first3) {
              ref.current = nativeEvent.nativeEvent.layout.height;
              const result = containerHeight.set(ref.current);
              const tmp7 = ref2.current > 0 && ref.current > 0;
              if (tmp7) {
                closure_15(true);
              }
            }
          }
          cResult[14] = containerHeight;
          cResult[15] = first3;
          cResult[16] = xe;
        }
        function he() {
          if (isScreenLandscape !== closure_17) {
            closure_15(false);
            ref2.current = 0;
            ref.current = 0;
          }
        }
        const items = [isScreenLandscape, tmp29];
        cResult[9] = isScreenLandscape;
        cResult[10] = tmp29;
        cResult[11] = he;
        cResult[12] = items;
        tmp31 = items;
        tmp30 = he;
      }
    : (viewContainerStyle) => {
        let Text;
        let Text2;
        let Text3;
        let _undefined;
        let application;
        let c14;
        let c6;
        let closure_11;
        let closure_2;
        let closure_4;
        let containerStyle;
        let hideName;
        let intl;
        let intl3;
        let intl4;
        let items10;
        let items11;
        let items13;
        let items14;
        let items15;
        let items2;
        let items3;
        let items4;
        let items5;
        let items6;
        let items8;
        let mainContainerStyle;
        let obj10;
        let obj19;
        let obj21;
        let obj23;
        let obj6;
        let tmp17;
        let tmp44;
        ({ application, mainContainerStyle, hideName } = viewContainerStyle);
        let first1;
        react = undefined;
        c6 = undefined;
        let num2;
        let closure_9;
        let num3;
        colors = undefined;
        ref = undefined;
        ref2 = undefined;
        c14 = undefined;
        let first2;
        let closure_16;
        let isScreenLandscape;
        let closure_18;
        viewContainerStyle = viewContainerStyle.viewContainerStyle;
        let tmp = ref();
        let obj = ref(8826);
        let obj2 = react;
        const isPartnerApplicationResult = obj.isPartnerApplication(application);
        ref = react.useRef(null);
        let tmp7 = first1(react.useState(false), 2);
        const first = tmp7[0];
        dependencyMap = tmp7[1];
        const tmp9 = first1(react.useState(false), 2);
        first1 = tmp9[0];
        react = tmp9[1];
        let closure_5 = react.useRef(true);
        ({ containerHeight: c6, containerStyle } = first2());
        first2();
        const obj3 = ref(8826);
        const sectionName = obj3.getSectionName(application);
        const obj4 = ref(8826);
        const str = obj4.getSectionDescription(application);
        let tmp27Result5 = null != str;
        if (tmp27Result5) {
          tmp27Result5 = str.trim().length > 0;
        }
        const tmp6Result = first1(obj2.useState(null), 2);
        num2 = tmp6Result[0];
        closure_9 = tmp6Result[1];
        const tmp6Result4 = first1(obj2.useState(null), 2);
        num3 = tmp6Result4[0];
        colors = tmp6Result4[1];
        ref = obj2.useRef(0);
        ref2 = obj2.useRef(0);
        [tmp17, c14] = first1(obj2.useState(false), 2);
        first1(obj2.useState(false), 2);
        const tmp6Result6 = first1(obj2.useState(false), 2);
        first2 = tmp6Result6[0];
        closure_16 = tmp6Result6[1];
        const items = [str];
        const memo = obj2.useMemo(() => {
          let result = null;
          if (null != str) {
            const obj = BioMarkupUtils;
            result = obj.parseBioReactWithCachedAST(tmp);
          }
          return result;
        }, items);
        const tmp2Result = ref(5919);
        isScreenLandscape = tmp2Result.useIsScreenLandscape();
        const tmp23 = first(7957)(isScreenLandscape);
        closure_18 = tmp23;
        const items1 = [isScreenLandscape, tmp23];
        const effect = obj2.useEffect(() => {
          if (isScreenLandscape !== closure_18) {
            closure_16(false);
            ref2.current = 0;
            ref.current = 0;
          }
        }, items1);
        let tmp26 = first;
        first(5980)(ref);
        if (first) {
          tmp26 = !first1;
        }
        const obj5 = { style: items2, children: closure_9(closure_5, obj6) };
        items2 = [tmp.animatedViewContainer, containerStyle, viewContainerStyle];
        obj6 = {
          style: items3,
          onLayout(nativeEvent) {
            if (!first2) {
              ref.current = nativeEvent.nativeEvent.layout.height;
              const result = _undefined.set(ref.current);
              const tmp7 = ref2.current > 0 && ref.current > 0;
              if (tmp7) {
                closure_16(true);
              }
            }
          },
          children: items5,
        };
        items3 = [tmp.container, mainContainerStyle];
        let tmp29Result = !hideName;
        const obj7 = { style: tmp.nameContainer, children: items4 };
        const View = tmp22(4618).View;
        const tmp28 = num3;
        if (!hideName) {
          const obj8 = {
            style: tmp.nameText,
            variant: "heading-lg/bold",
            color: "text-default",
            lineClamp: 1,
            children: sectionName,
          };
          tmp29Result = tmp29(tmp2(4892).Heading, obj8);
        }
        items4 = [tmp29Result];
        let tmp29Result5 = null;
        if (isPartnerApplicationResult) {
          const obj9 = { style: tmp.partnerLabelWrapper, children: num2(Text, obj10) };
          obj10 = { variant: "text-xs/medium", color: "text-default", children: intl.string(ref(1126).t.LO4f0P) };
          Text = tmp2(4892).Text;
          intl = tmp2(1126).intl;
          tmp29Result5 = tmp29(tmp30, obj9);
        }
        items4[1] = tmp29Result5;
        items5 = [closure_9(closure_5, obj7)];
        let tmp27Result4 = tmp27Result5;
        if (tmp27Result4) {
          let tmp29Result6;
          let descriptionContainer = !hideName;
          const tmp34 = c6;
          if (!hideName) {
            descriptionContainer = tmp.descriptionContainer;
          }
          const obj12 = { style: null };
          const absoluteFill = str.absoluteFill;
          const obj11 = {
            style: descriptionContainer,
            onPress() {
              if (first) {
                closure_5.current = false;
                if (first1) {
                  set2 = _undefined.set;
                  const current = ref.current;
                  const withTiming = timing.withTiming;
                  const fn = function t() {
                    const obj = ref(closure_2[8]);
                    obj.runOnJS(setShouldLineClamp)(true);
                  };
                  const obj2 = { runOnJS: ReanimatedRexport.runOnJS, setShouldLineClamp };
                  const timingStandard = timingPresets.timingStandard;
                  fn.__closure = obj2;
                  fn.__workletHash = 2433505176233;
                  fn.__initData = __initData;
                  set2(withTiming(current, timingStandard, "respect-motion-settings", fn));
                } else {
                  setShouldLineClamp(false);
                  set = _undefined.set;
                  let obj = timing;
                  const result = set(obj.withTiming(ref2.current, timingPresets.timingStandard));
                }
                closure_4(!first1);
              }
            },
            accessibilityRole: "button",
            children: items10,
          };
          const tmp22Result = first(6059);
          if (tmp26) {
            const obj13 = { style: absoluteFill, children: items6 };
            obj12.style = tmp.maskFill;
            items6 = [tmp29(closure_5, obj12)];
            const items7 = [tmp.maskLastLine];
            if (num3 == null) {
              num3 = 0;
            }
            const obj14 = { style: items7, children: items8 };
            const obj15 = { height: num3 };
            items7[1] = obj15;
            const obj16 = { style: tmp.maskFill };
            items8 = [tmp29(closure_5, obj16), ,];
            const obj17 = {
              start: ref(1105).HorizontalGradient.START,
              end: ref(1105).HorizontalGradient.END,
              colors,
              style: tmp.maskFade,
            };
            const tmp22Result2 = first(5612);
            items8[1] = num2(tmp22Result2, obj17);
            if (num2 == null) {
              num2 = 0;
            }
            const obj18 = { style: obj19 };
            obj19 = { width: num2 };
            items8[2] = num2(closure_5, obj18);
            items6[1] = closure_9(closure_5, obj14);
            tmp29Result6 = tmp27(tmp30, obj13);
          } else {
            const items9 = [absoluteFill, tmp.maskFill];
            obj12.style = items9;
            tmp29Result6 = tmp29(tmp30, obj12);
          }
          const obj20 = { maskElement: tmp29Result6, children: num2(Text2, obj21) };
          Text2 = tmp2(4892).Text;
          obj21 = { variant: "text-sm/medium", color: "text-default", lineClamp: num4, children: memo };
          items10 = [tmp29(tmp22Result, obj20), ,];
          let tmp29Result7 = null;
          if (tmp26) {
            const obj22 = { style: tmp.viewMoreCTA, children: closure_9(Text3, obj23) };
            obj23 = {
              onLayout(nativeEvent) {
                if (null == num2) {
                  closure_9(nativeEvent.nativeEvent.layout.width);
                }
              },
              variant: "text-sm/medium",
              color: "text-brand",
              children: items11,
            };
            Text3 = tmp2(4892).Text;
            const intl2 = tmp2(1126).intl;
            items11 = ["\u2026 ", intl2.string(tmp2(1126).t["OBCR+p"])];
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
                children: intl3.string(ref(1126).t.D5xGUK),
              };
              const Text4 = tmp2(4892).Text;
              intl3 = tmp2(1126).intl;
              tmp29Result8 = tmp29(Text4, obj24);
            }
          }
          items10[2] = tmp29Result8;
          tmp27Result4 = tmp27(tmp34, obj11);
        }
        items5[1] = tmp27Result4;
        const children = [tmp29(View, obj5)];
        let tmp27Result6 = !first2;
        if (tmp27Result6) {
          const obj25 = {
            style: items13,
            onLayout(nativeEvent) {
              ref2.current = nativeEvent.nativeEvent.layout.height;
              const tmp = ref2.current > 0 && ref.current > 0;
              if (tmp) {
                closure_16(true);
              }
            },
            children: items14,
          };
          items13 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
          let tmp29Result9 = !hideName;
          if (tmp29Result9) {
            const obj26 = { variant: "heading-lg/bold", color: "text-default", children: sectionName };
            tmp29Result9 = tmp29(tmp2(4892).Heading, obj26);
          }
          items14 = [tmp29Result9];
          if (tmp27Result5) {
            const obj27 = { style: tmp44, children: items15 };
            const obj28 = {
              variant: "text-sm/medium",
              color: "text-default",
              onTextLayout(nativeEvent) {
                const lines = nativeEvent.nativeEvent.lines;
                const tmp = null == num3 && null != lines[0];
                if (tmp) {
                  closure_11(lines[0].height);
                }
                if (null == ref.current) {
                  ref.current = lines.length;
                }
                if (lines.length > 3) {
                  setShouldLineClamp(true);
                  closure_2(true);
                }
              },
              children: memo,
            };
            tmp44 = !hideName && tmp.descriptionContainer;
            items15 = [tmp29(tmp2(4892).Text, obj28)];
            const obj29 = {
              variant: "text-sm/medium",
              color: "text-brand",
              style: tmp.collapseDescriptionCTA,
              children: intl4.string(ref(1126).t.D5xGUK),
            };
            const Text5 = tmp2(4892).Text;
            intl4 = tmp2(1126).intl;
            items15[1] = num2(Text5, obj29);
            tmp27Result5 = tmp27(tmp30, obj27);
          }
          items14[1] = tmp27Result5;
          tmp27Result6 = tmp27(tmp30, obj25);
        }
        children[1] = tmp27Result6;
        return closure_9(tmp28, { children });
      },
);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx");

export default memoResult;
