// === Module 9815: ? ===

// Module 9815
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, Pressable: closure_6, StyleSheet: error } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
let closure_11 = ["black", "transparent"];
let obj = { animatedViewContainer: { overflow: "hidden" }, container: { position: "relative", width: "100%" }, measuringContainer: { width: "100%", position: "absolute" }, descriptionContainer: { marginTop: 8 }, viewMoreCTA: { position: "absolute", right: 0, bottom: 0, pointerEvents: "none" }, maskFill: { flex: 1, backgroundColor: "black" }, maskLastLine: { flexDirection: "row" }, maskFade: { width: 32 }, collapseDescriptionCTA: { marginTop: 4 }, nameContainer: null, nameText: null, partnerLabelWrapper: null };
obj = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_4, overflow: "hidden" };
obj[9] = obj;
obj[10] = { flexShrink: 1 };
createCacheKey = { justifyContent: "center", paddingVertical: 2, paddingHorizontal: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: ThemesDefault.radii.lg };
obj[11] = createCacheKey;
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = { code: "function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}" };
let closure_14 = { code: "function DetailsHeaderTsx2(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}" };
const memoResult = importAllResult.memo(function DetailsHeader(viewContainerStyle) {
  ({ application, mainContainerStyle, hideName } = viewContainerStyle);
  let sharedValue;
  let first;
  dependencyMap = undefined;
  let first1;
  importAllResult = undefined;
  closure_5 = undefined;
  sharedValue = undefined;
  let str;
  let num2;
  closure_9 = undefined;
  let num3;
  closure_11 = undefined;
  let callback;
  closure_13 = undefined;
  c14 = undefined;
  let first2;
  closure_16 = undefined;
  let isScreenLandscape;
  closure_18 = undefined;
  let tmp = callback();
  let obj = sharedValue(8447);
  obj1 = importAllResult;
  const ref = importAllResult.useRef(null);
  sharedValue = ref;
  const tmp7 = first1(importAllResult.useState(false), 2);
  first = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(importAllResult.useState(false), 2);
  first1 = tmp9[0];
  importAllResult = tmp9[1];
  closure_5 = importAllResult.useRef(true);
  sharedValue = undefined;
  let obj2 = sharedValue(4115);
  sharedValue = obj2.useSharedValue(null);
  let obj3 = sharedValue(4115);
  let fn = function t() {
    return { height: sharedValue.get() };
  };
  fn.__closure = { height: sharedValue };
  fn.__workletHash = 23826674246;
  fn.__initData = closure_13;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj4 = sharedValue(8447);
  const sectionName = obj4.getSectionName(application);
  let obj5 = sharedValue(8447);
  str = obj5.getSectionDescription(application);
  let tmp28Result1 = null != str;
  if (tmp28Result1) {
    tmp28Result1 = str.trim().length > 0;
  }
  let tmp6Result = tmp6(obj1.useState(null), 2);
  num2 = tmp6Result[0];
  closure_9 = tmp6Result[1];
  tmp6Result = tmp6(obj1.useState(null), 2);
  num3 = tmp6Result[0];
  closure_11 = tmp6Result[1];
  callback = obj1.useRef(0);
  closure_13 = obj1.useRef(0);
  const isPartnerApplicationResult = obj.isPartnerApplication(application);
  [tmp18, c14] = first1(obj1.useState(false), 2);
  const tmp6Result2 = first1(obj1.useState(false), 2);
  first2 = tmp6Result2[0];
  closure_16 = tmp6Result2[1];
  const items = [str];
  const memo = obj1.useMemo(() => {
    let result = null;
    if (null != str) {
      result = sharedValue(9550).parseBioReactWithCachedAST(tmp);
      const obj = sharedValue(9550);
    }
    return result;
  }, items);
  const tmp6Result1 = first1(obj1.useState(false), 2);
  isScreenLandscape = sharedValue(8944).useIsScreenLandscape();
  const tmp24 = first(6701)(isScreenLandscape);
  closure_18 = tmp24;
  const items1 = [isScreenLandscape, tmp24];
  const effect = obj1.useEffect(() => {
    if (isScreenLandscape !== closure_18) {
      callback4(false);
      closure_13.current = 0;
      closure_12.current = 0;
    }
  }, items1);
  let tmp27 = first;
  const tmp2Result = sharedValue(8944);
  if (first) {
    tmp27 = !first1;
  }
  obj = { style: items2, children: null };
  items2 = [tmp.animatedViewContainer, animatedStyle, viewContainerStyle.viewContainerStyle];
  obj = {
    style: items3,
    onLayout(nativeEvent) {
      if (!first2) {
        ref.current = nativeEvent.nativeEvent.layout.height;
        const result = sharedValue.set(ref.current);
        if (tmp6) {
          callback4(true);
        }
        const tmp2 = ref;
        tmp6 = ref2.current > 0 && ref.current > 0;
      }
    },
    children: null
  };
  items3 = [tmp.container, mainContainerStyle];
  obj1 = { style: tmp.nameContainer, children: null };
  let tmp30Result = !hideName;
  if (!hideName) {
    obj2 = { style: null, variant: "heading-lg/bold", color: "text-default", lineClamp: 1, children: null };
    obj2[0] = tmp.nameText;
    obj2[4] = sectionName;
    tmp30Result = tmp30(tmp2(4734).Heading, obj2);
  }
  const items4 = [tmp30Result, ];
  tmp30Result = null;
  if (isPartnerApplicationResult) {
    obj3 = { style: null, children: null };
    obj3[0] = tmp.partnerLabelWrapper;
    obj4 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl = tmp2(1236).intl;
    obj4[2] = intl.string(tmp2(1236).t.LO4f0P);
    obj3[1] = tmp30(tmp2(4734).Text, obj4);
    tmp30Result = tmp30(tmp31, obj3);
  }
  items4[1] = tmp30Result;
  obj1[1] = items4;
  const items5 = [closure_9(closure_5, obj1), ];
  let tmp28Result = tmp28Result1;
  if (tmp28Result1) {
    let descriptionContainer = !hideName;
    if (!hideName) {
      descriptionContainer = tmp.descriptionContainer;
    }
    obj5 = { style: null, onPress: null, accessibilityRole: "button", children: null };
    obj5[0] = descriptionContainer;
    obj5[1] = function onPress() {
      if (first) {
        closure_5.current = false;
        if (first1) {
          const obj2 = sharedValue(4664);
          const current = ref.current;
          const fn = function t() {
            closure_1_0(closure_1_2[6]).runOnJS(closure_14)(true);
          };
          let obj = { runOnJS: null, setShouldLineClamp: null };
          obj[0] = sharedValue(4115).runOnJS;
          obj[1] = _undefined;
          fn.__closure = obj;
          fn.__workletHash = 6050776164847;
          fn.__initData = _undefined;
          const result = sharedValue.set(obj2.withTiming(current, sharedValue(4667).timingStandard, "respect-motion-settings", fn));
        } else {
          _undefined(false);
          obj = sharedValue(4664);
          const result1 = sharedValue.set(obj.withTiming(ref2.current, sharedValue(4667).timingStandard));
        }
        callback(!first1);
        const tmp2 = first1;
      }
    };
    const obj6 = { style: null };
    const absoluteFill = str.absoluteFill;
    let tmp23Result = tmp23(6352);
    if (tmp27) {
      const obj7 = { style: null, children: null };
      obj7[0] = absoluteFill;
      obj6[0] = tmp.maskFill;
      const items6 = [tmp30(tmp31, obj6), ];
      const items7 = [tmp.maskLastLine, ];
      if (num3 == null) {
        num3 = 0;
      }
      const obj8 = { style: null, children: null };
      const obj9 = { height: null };
      obj9[0] = num3;
      items7[1] = obj9;
      obj8[0] = items7;
      const obj10 = { style: null };
      obj10[0] = tmp.maskFill;
      const items8 = [tmp30(tmp31, obj10), , ];
      const obj11 = { start: null, end: null, colors: null, style: null };
      tmp23Result = tmp23(4756);
      obj11[0] = tmp2(691).HorizontalGradient.START;
      obj11[1] = tmp2(691).HorizontalGradient.END;
      obj11[2] = closure_11;
      obj11[3] = tmp.maskFade;
      items8[1] = tmp30(tmp23Result, obj11);
      if (num2 == null) {
        num2 = 0;
      }
      const obj12 = { style: null };
      const obj13 = { width: null };
      obj13[0] = num2;
      obj12[0] = obj13;
      items8[2] = tmp30(tmp31, obj12);
      obj8[1] = items8;
      items6[1] = tmp28(tmp31, obj8);
      obj7[1] = items6;
      let tmp30Result1 = tmp28(tmp31, obj7);
    } else {
      const items9 = [absoluteFill, tmp.maskFill];
      obj6[0] = items9;
      tmp30Result1 = tmp30(tmp31, obj6);
    }
    const obj14 = { maskElement: null, children: null };
    obj14[0] = tmp30Result1;
    const obj15 = { variant: "text-sm/medium", color: "text-default", lineClamp: null, children: null };
    obj15[2] = num4;
    obj15[3] = memo;
    obj14[1] = tmp30(tmp2(4734).Text, obj15);
    const items10 = [tmp30(tmp23Result, obj14), , ];
    let tmp30Result2 = null;
    if (tmp27) {
      const obj16 = { style: null, children: null };
      obj16[0] = tmp.viewMoreCTA;
      const obj17 = { onLayout: null, variant: "text-sm/medium", color: "text-brand", children: null };
      obj17[0] = function onLayout(nativeEvent) {
        if (null == num2) {
          callback2(nativeEvent.nativeEvent.layout.width);
        }
      };
      const intl2 = tmp2(1236).intl;
      const items11 = ["\u2026 ", intl2.string(tmp2(1236).t["OBCR+p"])];
      obj17[3] = items11;
      obj16[1] = tmp28(tmp2(4734).Text, obj17);
      tmp30Result2 = tmp30(tmp31, obj16);
    }
    items10[1] = tmp30Result2;
    let tmp30Result3 = null;
    if (first) {
      tmp30Result3 = null;
      if (first1) {
        const obj18 = { variant: "text-sm/medium", color: "text-brand", style: null, children: null };
        obj18[2] = tmp.collapseDescriptionCTA;
        const intl3 = tmp2(1236).intl;
        obj18[3] = intl3.string(tmp2(1236).t.D5xGUK);
        tmp30Result3 = tmp30(tmp2(4734).Text, obj18);
      }
    }
    items10[2] = tmp30Result3;
    obj5[3] = items10;
    tmp28Result = tmp28(sharedValue, obj5);
    const tmp35 = sharedValue;
  }
  items5[1] = tmp28Result;
  obj[2] = items5;
  obj[1] = closure_9(closure_5, obj);
  const children = [num2(first(4115).View, obj), ];
  let tmp28Result2 = !first2;
  if (!first2) {
    const obj19 = { style: null, onLayout: null, children: null };
    const items13 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
    obj19[0] = items13;
    obj19[1] = function onLayout(nativeEvent) {
      ref2.current = nativeEvent.nativeEvent.layout.height;
      let tmp = ref2.current > 0;
      if (tmp) {
        tmp = ref.current > 0;
      }
      if (tmp) {
        callback4(true);
      }
    };
    let tmp30Result4 = !hideName;
    if (!hideName) {
      const obj20 = { variant: "heading-lg/bold", color: "text-default", children: null };
      obj20[2] = sectionName;
      tmp30Result4 = tmp30(tmp2(4734).Heading, obj20);
    }
    const items14 = [tmp30Result4, ];
    if (tmp28Result1) {
      let descriptionContainer2 = !hideName;
      if (!hideName) {
        descriptionContainer2 = tmp.descriptionContainer;
      }
      const obj21 = { style: null, children: null };
      obj21[0] = descriptionContainer2;
      const obj22 = { variant: "text-sm/medium", color: "text-default", onTextLayout: null, children: null };
      obj22[2] = function onTextLayout(nativeEvent) {
        const lines = nativeEvent.nativeEvent.lines;
        if (tmp) {
          callback3(lines[0].height);
        }
        if (null == sharedValue.current) {
          sharedValue.current = length;
        }
        if (lines.length > 3) {
          _undefined(true);
          dependencyMap(true);
        }
      };
      obj22[3] = memo;
      const items15 = [tmp30(tmp2(4734).Text, obj22), ];
      const obj23 = { variant: "text-sm/medium", color: "text-brand", style: null, children: null };
      obj23[2] = tmp.collapseDescriptionCTA;
      const intl4 = tmp2(1236).intl;
      obj23[3] = intl4.string(tmp2(1236).t.D5xGUK);
      items15[1] = tmp30(tmp2(4734).Text, obj23);
      obj21[1] = items15;
      tmp28Result1 = tmp28(tmp31, obj21);
    }
    items14[1] = tmp28Result1;
    obj19[2] = items14;
    tmp28Result2 = tmp28(tmp31, obj19);
  }
  children[1] = tmp28Result2;
  return closure_9(num3, { children });
});
let result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx");

export default memoResult;