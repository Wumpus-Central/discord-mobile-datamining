// === Module 8793: DetailsHeader ===

// Module 8793 (DetailsHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import BioMarkupUtils from "BioMarkupUtils" /* 8942 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let colors = ["black", "transparent"];
const createStyles = fn(4890);
let obj = { animatedViewContainer: { overflow: "hidden" }, container: { position: "relative", width: "100%" }, measuringContainer: { width: "100%", position: "absolute" }, descriptionContainer: { marginTop: 8 }, viewMoreCTA: { position: "absolute", right: 0, bottom: 0, pointerEvents: "none" }, maskFill: { flex: 1, backgroundColor: "black" }, maskLastLine: { flexDirection: "row" }, maskFade: { width: 32 }, collapseDescriptionCTA: { marginTop: 4 }, nameContainer: { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4, overflow: "hidden" }, nameText: { flexShrink: 1 }, partnerLabelWrapper: null };
let obj3 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4, overflow: "hidden" };
obj.partnerLabelWrapper = { justifyContent: "center", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: nativeDefault.radii.lg };
createStyles.createStyles(obj);
let __initData = { code: "function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}" };
__initData = { code: "function DetailsHeaderTsx2(){const{height}=this.__closure;return{height:height.get()};}" };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const sharedValue = ReanimatedRexport.useSharedValue(null);
  const obj2 = { containerStyle: null, containerHeight: null };
  const fn = function t() {
    return { height: sharedValue.get() };
  };
  fn.__closure = { height: sharedValue };
  fn.__workletHash = 873669633445;
  fn.__initData = __initData;
  obj2.containerStyle = ReanimatedRexport.useAnimatedStyle(fn);
  obj2.containerHeight = sharedValue;
  return obj2;
});
const __initData2 = { code: "function DetailsHeaderTsx3(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}" };
let closure_17 = { code: "function DetailsHeaderTsx4(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}" };
ReactCompilerGating = fn(558);
let obj4 = { justifyContent: "center", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: nativeDefault.radii.lg };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = ref(576).c(81);
  ({ application, viewContainerStyle, mainContainerStyle, hideName } = arg0);
  ref();
  if (cResult[0] !== application) {
    const isPartnerApplicationResult = tmp(8794).isPartnerApplication(application);
    cResult[0] = application;
    cResult[1] = isPartnerApplicationResult;
    const tmpResult = tmp(8794);
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
    const sectionName = tmp(8794).getSectionName(application);
    cResult[2] = application;
    cResult[3] = sectionName;
    const tmpResult4 = tmp(8794);
  }
  if (cResult[4] !== application) {
    const str = tmp(8794).getSectionDescription(application);
    let tmp18 = null != str;
    if (tmp18) {
      tmp18 = str.trim().length > 0;
    }
    cResult[4] = application;
    cResult[5] = str;
    cResult[6] = tmp18;
    let tmp16 = str;
    const tmpResult5 = tmp(8794);
  } else {
    tmp16 = cResult[5];
  }
  const tmp8Result = first1(noop.useState(null), 2);
  closure_7 = tmp8Result[0];
  closure_8 = tmp8Result[1];
  const tmp8Result4 = first1(noop.useState(null), 2);
  const first2 = tmp8Result4[0];
  closure_10 = tmp8Result4[1];
  const colors = obj3.useRef(0);
  ref = obj3.useRef(0);
  const tmp13 = closure_15();
  [r10087, closure_13] = first1(noop.useState(false), 2);
  const tmp8Result6 = first1(noop.useState(false), 2);
  const first3 = tmp8Result6[0];
  closure_15 = tmp8Result6[1];
  if (null == tmp16) {
    const isScreenLandscape = tmp(5912).useIsScreenLandscape();
    const tmp29 = first(7946)(isScreenLandscape);
    closure_17 = tmp29;
    if (cResult[9] === isScreenLandscape) {
      if (cResult[10] === tmp29) {
        let tmp30 = cResult[11];
        let tmp31 = cResult[12];
      }
      const effect = obj3.useEffect(tmp30, tmp31);
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        function pe(nativeEvent) {
          ref2.current = nativeEvent.nativeEvent.layout.height;
          let tmp = ref2.current > 0;
          if (tmp) {
            tmp = ref.current > 0;
          }
          if (tmp) {
            closure_15(true);
          }
        }
        cResult[13] = pe;
      }
      if (cResult[14] === containerHeight) {
        if (cResult[17] !== first2) {
          class Se {
            constructor(arg0) {
              lines = arg0.nativeEvent.lines;
              length = lines.length;
              tmp = null == closure_9 && null != lines[0];
              if (tmp) {
                tmp2 = closure_10;
                tmp3 = closure_10(lines[0].height);
              }
              if (null == closure_0.current) {
                closure_0.current = length;
              }
              if (length > 3) {
                tmp4 = closure_13;
                flag = true;
                tmp5 = closure_13(true);
                tmp6 = closure_2;
                tmp7 = closure_2(true);
              }
              return;
            }
          }
          cResult[17] = first2;
          class Te {
            constructor() {
              if (!closure_1) {
                return;
              } else {
                tmp = closure_5;
                flag = false;
                closure_5.current = false;
                tmp2 = closure_3;
                if (closure_3) {
                  tmp12 = containerHeight;
                  tmp13 = closure_0;
                  tmp14 = closure_2;
                  obj2 = closure_0(closure_2[13]);
                  tmp15 = closure_11;
                  current = closure_11.current;
                  tmp16 = closure_0;
                  tmp17 = closure_2;
                  fn = function t() {
                    ref(closure_2[8]).runOnJS(setShouldLineClamp)(true);
                  };
                  obj1 = { runOnJS: null, setShouldLineClamp: null };
                  tmp18 = closure_0;
                  tmp19 = closure_2;
                  obj1.runOnJS = closure_0(closure_2[8]).runOnJS;
                  tmp20 = closure_13;
                  obj1.setShouldLineClamp = closure_13;
                  fn.__closure = obj1;
                  num = 10020568053710;
                  fn.__workletHash = 10020568053710;
                  tmp21 = closure_16;
                  fn.__initData = closure_16;
                  str = "respect-motion-settings";
                  tmp22 = obj2;
                  tmp23 = current;
                  tmp24 = fn;
                  result = containerHeight.set(obj2.withTiming(current, closure_0(closure_2[14]).timingStandard, "respect-motion-settings", fn));
                } else {
                  tmp3 = closure_13;
                  tmp4 = closure_13(false);
                  tmp5 = containerHeight;
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  obj = closure_0(closure_2[13]);
                  tmp8 = closure_12;
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  result1 = containerHeight.set(obj.withTiming(closure_12.current, closure_0(closure_2[14]).timingStandard));
                }
                tmp26 = closure_4;
                tmp27 = closure_4(!tmp2);
              }
              return;
            }
          }
          cResult[18] = Se;
        } else {
          class Se {
            constructor(arg0) {
              lines = arg0.nativeEvent.lines;
              length = lines.length;
              tmp = null == closure_9 && null != lines[0];
              if (tmp) {
                tmp2 = closure_10;
                tmp3 = closure_10(lines[0].height);
              }
              if (null == closure_0.current) {
                closure_0.current = length;
              }
              if (length > 3) {
                tmp4 = closure_13;
                flag = true;
                tmp5 = closure_13(true);
                tmp6 = closure_2;
                tmp7 = closure_2(true);
              }
              return;
            }
          }
        }
        if (cResult[19] === containerHeight) {
          class Se {
            constructor(arg0) {
              lines = arg0.nativeEvent.lines;
              length = lines.length;
              tmp = null == closure_9 && null != lines[0];
              if (tmp) {
                tmp2 = closure_10;
                tmp3 = closure_10(lines[0].height);
              }
              if (null == closure_0.current) {
                closure_0.current = length;
              }
              if (length > 3) {
                tmp4 = closure_13;
                flag = true;
                tmp5 = closure_13(true);
                tmp6 = closure_2;
                tmp7 = closure_2(true);
              }
              return;
            }
          }
        }
        class Te {
          constructor() {
            if (!closure_1) {
              return;
            } else {
              tmp = closure_5;
              flag = false;
              closure_5.current = false;
              tmp2 = closure_3;
              if (closure_3) {
                tmp12 = containerHeight;
                tmp13 = closure_0;
                tmp14 = closure_2;
                obj2 = closure_0(closure_2[13]);
                tmp15 = closure_11;
                current = closure_11.current;
                tmp16 = closure_0;
                tmp17 = closure_2;
                fn = function t() {
                  ref(closure_2[8]).runOnJS(setShouldLineClamp)(true);
                };
                obj1 = { runOnJS: null, setShouldLineClamp: null };
                tmp18 = closure_0;
                tmp19 = closure_2;
                obj1.runOnJS = closure_0(closure_2[8]).runOnJS;
                tmp20 = closure_13;
                obj1.setShouldLineClamp = closure_13;
                fn.__closure = obj1;
                num = 10020568053710;
                fn.__workletHash = 10020568053710;
                tmp21 = closure_16;
                fn.__initData = closure_16;
                str = "respect-motion-settings";
                tmp22 = obj2;
                tmp23 = current;
                tmp24 = fn;
                result = containerHeight.set(obj2.withTiming(current, closure_0(closure_2[14]).timingStandard, "respect-motion-settings", fn));
              } else {
                tmp3 = closure_13;
                tmp4 = closure_13(false);
                tmp5 = containerHeight;
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj = closure_0(closure_2[13]);
                tmp8 = closure_12;
                tmp9 = closure_0;
                tmp10 = closure_2;
                result1 = containerHeight.set(obj.withTiming(closure_12.current, closure_0(closure_2[14]).timingStandard));
              }
              tmp26 = closure_4;
              tmp27 = closure_4(!tmp2);
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
          if (tmp6) {
            closure_15(true);
          }
          tmp6 = ref2.current > 0 && ref.current > 0;
        }
      }
      cResult[14] = containerHeight;
      cResult[15] = first3;
      cResult[16] = xe;
    }
    function he() {
      if (isScreenLandscape !== closure_17) {
        closure_15(false);
        closure_12.current = 0;
        closure_11.current = 0;
      }
    }
    const items = [isScreenLandscape, tmp29];
    cResult[9] = isScreenLandscape;
    cResult[10] = tmp29;
    cResult[11] = he;
    cResult[12] = items;
    tmp31 = items;
    tmp30 = he;
    const tmpResult6 = tmp(5912);
  } else {
    class Se {
      constructor(arg0) {
        lines = arg0.nativeEvent.lines;
        length = lines.length;
        tmp = null == closure_9 && null != lines[0];
        if (tmp) {
          tmp2 = closure_10;
          tmp3 = closure_10(lines[0].height);
        }
        if (null == closure_0.current) {
          closure_0.current = length;
        }
        if (length > 3) {
          tmp4 = closure_13;
          flag = true;
          tmp5 = closure_13(true);
          tmp6 = closure_2;
          tmp7 = closure_2(true);
        }
        return;
      }
    }
  }
  const tmp8Result5 = first1(noop.useState(false), 2);
}) : ((viewContainerStyle) => {
  ({ application, mainContainerStyle, hideName } = viewContainerStyle);
  let first1;
  noop = undefined;
  c6 = undefined;
  let num2;
  closure_9 = undefined;
  let num3;
  let colors;
  ref = undefined;
  c14 = undefined;
  let first2;
  closure_16 = undefined;
  let isScreenLandscape;
  closure_18 = undefined;
  let tmp = ref();
  let obj = ref(8794);
  ref = noop.useRef(null);
  const tmp7 = first1(noop.useState(false), 2);
  const first = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(noop.useState(false), 2);
  first1 = tmp9[0];
  noop = tmp9[1];
  closure_5 = noop.useRef(true);
  const isPartnerApplicationResult = ref(8794).isPartnerApplication(application);
  ({ containerHeight: c6, containerStyle } = first2());
  const tmp11 = first2();
  const sectionName = ref(8794).getSectionName(application);
  let obj3 = ref(8794);
  const str = ref(8794).getSectionDescription(application);
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
  const obj4 = ref(8794);
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
  isScreenLandscape = ref(5912).useIsScreenLandscape();
  const tmp23 = first(7946)(isScreenLandscape);
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
  const tmp2Result = ref(5912);
  if (first) {
    tmp26 = !first1;
  }
  const obj5 = { style: null, children: null };
  const items2 = [tmp.animatedViewContainer, containerStyle, viewContainerStyle.viewContainerStyle];
  obj5.style = items2;
  const obj6 = {
    style: null,
    onLayout(nativeEvent) {
      if (!first2) {
        ref.current = nativeEvent.nativeEvent.layout.height;
        const result = _undefined.set(ref.current);
        if (tmp6) {
          closure_16(true);
        }
        tmp6 = ref2.current > 0 && ref.current > 0;
      }
    },
    children: null
  };
  const items3 = [tmp.container, mainContainerStyle];
  obj6.style = items3;
  const obj7 = { style: tmp.nameContainer, children: null };
  let tmp29Result = !hideName;
  if (!hideName) {
    const obj8 = { style: tmp.nameText, variant: "heading-lg/bold", color: "text-default", lineClamp: 1, children: sectionName };
    tmp29Result = tmp29(tmp2(4886).Heading, obj8);
  }
  const items4 = [tmp29Result, ];
  let tmp29Result5 = null;
  if (isPartnerApplicationResult) {
    const obj9 = { style: tmp.partnerLabelWrapper, children: null };
    const obj10 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl = tmp2(1126).intl;
    obj10.children = intl.string(tmp2(1126).t.LO4f0P);
    obj9.children = tmp29(tmp2(4886).Text, obj10);
    tmp29Result5 = tmp29(tmp30, obj9);
  }
  items4[1] = tmp29Result5;
  obj7.children = items4;
  const items5 = [closure_9(closure_5, obj7), ];
  let tmp27Result4 = tmp27Result5;
  if (tmp27Result5) {
    let descriptionContainer = !hideName;
    if (!hideName) {
      descriptionContainer = tmp.descriptionContainer;
    }
    const obj11 = {
      style: descriptionContainer,
      onPress() {
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
              const result = _undefined.set(obj2.withTiming(current, timingPresets.timingStandard, "respect-motion-settings", fn));
            } else {
              setShouldLineClamp(false);
              const result1 = _undefined.set(timing.withTiming(ref2.current, timingPresets.timingStandard));
            }
            closure_4(!first1);
          }
        },
      accessibilityRole: "button",
      children: null
    };
    const obj12 = { style: null };
    const absoluteFill = str.absoluteFill;
    if (tmp26) {
      const obj13 = { style: absoluteFill, children: null };
      obj12.style = tmp.maskFill;
      const items6 = [tmp29(tmp30, obj12), ];
      const items7 = [tmp.maskLastLine, ];
      if (num3 == null) {
        num3 = 0;
      }
      const obj14 = { style: null, children: null };
      const obj15 = { height: num3 };
      items7[1] = obj15;
      obj14.style = items7;
      const obj16 = { style: tmp.maskFill };
      const items8 = [tmp29(tmp30, obj16), , ];
      const obj17 = { start: tmp2(1105).HorizontalGradient.START, end: tmp2(1105).HorizontalGradient.END, colors, style: tmp.maskFade };
      items8[1] = tmp29(tmp22(5605), obj17);
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
      const tmp22Result2 = tmp22(5605);
    } else {
      const items9 = [absoluteFill, tmp.maskFill];
      obj12.style = items9;
      tmp29Result6 = tmp29(tmp30, obj12);
    }
    const obj20 = { maskElement: tmp29Result6, children: null };
    const obj21 = { variant: "text-sm/medium", color: "text-default", lineClamp: num4, children: memo };
    obj20.children = tmp29(tmp2(4886).Text, obj21);
    const items10 = [tmp29(tmp22(6052), obj20), , ];
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
        children: null
      };
      const intl2 = tmp2(1126).intl;
      const items11 = ["\u2026 ", intl2.string(tmp2(1126).t["OBCR+p"])];
      obj23.children = items11;
      obj22.children = tmp27(tmp2(4886).Text, obj23);
      tmp29Result7 = tmp29(tmp30, obj22);
    }
    items10[1] = tmp29Result7;
    let tmp29Result8 = null;
    if (first) {
      tmp29Result8 = null;
      if (first1) {
        const obj24 = { variant: "text-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA, children: null };
        const intl3 = tmp2(1126).intl;
        obj24.children = intl3.string(tmp2(1126).t.D5xGUK);
        tmp29Result8 = tmp29(tmp2(4886).Text, obj24);
      }
    }
    items10[2] = tmp29Result8;
    obj11.children = items10;
    tmp27Result4 = tmp27(c6, obj11);
    const tmp22Result = tmp22(6052);
  }
  items5[1] = tmp27Result4;
  obj6.children = items5;
  obj5.children = closure_9(closure_5, obj6);
  const children = [num2(first(4612).View, obj5), ];
  let tmp27Result6 = !first2;
  if (!first2) {
    const obj25 = { style: null, onLayout: null, children: null };
    const items13 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
    obj25.style = items13;
    obj25.onLayout = function onLayout(nativeEvent) {
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
      tmp29Result9 = tmp29(tmp2(4886).Heading, obj26);
    }
    const items14 = [tmp29Result9, ];
    if (tmp27Result5) {
      let descriptionContainer2 = !hideName;
      if (!hideName) {
        descriptionContainer2 = tmp.descriptionContainer;
      }
      const obj27 = { style: descriptionContainer2, children: null };
      const obj28 = {
        variant: "text-sm/medium",
        color: "text-default",
        onTextLayout(nativeEvent) {
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
        children: memo
      };
      const items15 = [tmp29(tmp2(4886).Text, obj28), ];
      const obj29 = { variant: "text-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA, children: null };
      const intl4 = tmp2(1126).intl;
      obj29.children = intl4.string(tmp2(1126).t.D5xGUK);
      items15[1] = tmp29(tmp2(4886).Text, obj29);
      obj27.children = items15;
      tmp27Result5 = tmp27(tmp30, obj27);
    }
    items14[1] = tmp27Result5;
    obj25.children = items14;
    tmp27Result6 = tmp27(tmp30, obj25);
  }
  children[1] = tmp27Result6;
  return closure_9(num3, { children });
}));