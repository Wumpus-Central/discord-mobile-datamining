// === Module 9288: DetailsHeader ===

// Module 9288 (DetailsHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import BioMarkupUtils from "BioMarkupUtils" /* 9419 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let colors = ["black", "transparent"];
fn(4560);
let obj = { animatedViewContainer: { overflow: "hidden" }, container: { position: "relative", width: "100%" }, measuringContainer: { width: "100%", position: "absolute" }, descriptionContainer: { marginTop: 8 }, viewMoreCTA: { position: "absolute", right: 0, bottom: 0, pointerEvents: "none" }, maskFill: { flex: 1, backgroundColor: "black" }, maskLastLine: { flexDirection: "row" }, maskFade: { width: 32 }, collapseDescriptionCTA: { marginTop: 4 }, nameContainer: null, nameText: null, partnerLabelWrapper: null };
obj = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4, overflow: "hidden" };
obj.nameContainer = obj;
obj.nameText = { flexShrink: 1 };
const createStyles = { justifyContent: "center", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: nativeDefault.radii.lg };
obj.partnerLabelWrapper = createStyles;
let closure_12 = createStyles.createStyles(obj);
let __initData = { code: "function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}" };
let closure_14 = { code: "function DetailsHeaderTsx2(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx");

export default noop.memo(function DetailsHeader(viewContainerStyle) {
  ({ application, mainContainerStyle, hideName } = viewContainerStyle);
  let first1;
  noop = undefined;
  let sharedValue;
  let num2;
  closure_9 = undefined;
  let num3;
  colors = undefined;
  let ref;
  __initData = undefined;
  c14 = undefined;
  let first2;
  closure_16 = undefined;
  let isScreenLandscape;
  closure_18 = undefined;
  let tmp = ref();
  let obj = sharedValue(9289);
  let obj1 = noop;
  ref = noop.useRef(null);
  const tmp7 = first1(noop.useState(false), 2);
  const first = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(noop.useState(false), 2);
  first1 = tmp9[0];
  noop = tmp9[1];
  closure_5 = noop.useRef(true);
  sharedValue = undefined;
  let obj2 = sharedValue(4296);
  sharedValue = obj2.useSharedValue(null);
  let obj3 = sharedValue(4296);
  let fn = function t() {
    return { height: sharedValue.get() };
  };
  fn.__closure = { height: sharedValue };
  fn.__workletHash = 23826674246;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj4 = sharedValue(9289);
  const sectionName = obj4.getSectionName(application);
  let obj5 = sharedValue(9289);
  const str = obj5.getSectionDescription(application);
  let tmp28Result1 = null != str;
  if (tmp28Result1) {
    tmp28Result1 = str.trim().length > 0;
  }
  let tmp6Result = tmp6(obj1.useState(null), 2);
  num2 = tmp6Result[0];
  closure_9 = tmp6Result[1];
  tmp6Result = tmp6(obj1.useState(null), 2);
  num3 = tmp6Result[0];
  colors = tmp6Result[1];
  ref = obj1.useRef(0);
  __initData = obj1.useRef(0);
  const isPartnerApplicationResult = obj.isPartnerApplication(application);
  [tmp18, c14] = first1(obj1.useState(false), 2);
  const tmp6Result2 = first1(obj1.useState(false), 2);
  first2 = tmp6Result2[0];
  closure_16 = tmp6Result2[1];
  const items = [str];
  const memo = obj1.useMemo(() => {
    let result = null;
    if (null != str) {
      result = BioMarkupUtils.parseBioReactWithCachedAST(tmp);
    }
    return result;
  }, items);
  const tmp6Result1 = first1(obj1.useState(false), 2);
  isScreenLandscape = sharedValue(5126).useIsScreenLandscape();
  const tmp24 = first(8272)(isScreenLandscape);
  closure_18 = tmp24;
  const items1 = [isScreenLandscape, tmp24];
  const effect = obj1.useEffect(() => {
    if (isScreenLandscape !== closure_18) {
      closure_16(false);
      closure_13.current = 0;
      closure_12.current = 0;
    }
  }, items1);
  let tmp27 = first;
  const tmp2Result = sharedValue(5126);
  if (first) {
    tmp27 = !first1;
  }
  obj = { style: null, children: null };
  const items2 = [tmp.animatedViewContainer, animatedStyle, viewContainerStyle.viewContainerStyle];
  obj.style = items2;
  obj = {
    style: null,
    onLayout(nativeEvent) {
      if (!first2) {
        ref.current = nativeEvent.nativeEvent.layout.height;
        const result = sharedValue.set(ref.current);
        if (tmp6) {
          closure_16(true);
        }
        tmp6 = ref2.current > 0 && ref.current > 0;
      }
    },
    children: null
  };
  const items3 = [tmp.container, mainContainerStyle];
  obj.style = items3;
  obj1 = { style: tmp.nameContainer, children: null };
  let tmp30Result = !hideName;
  if (!hideName) {
    obj2 = { style: tmp.nameText, variant: "heading-lg/bold", color: "text-default", lineClamp: 1, children: sectionName };
    tmp30Result = tmp30(tmp2(4556).Heading, obj2);
  }
  const items4 = [tmp30Result, ];
  tmp30Result = null;
  if (isPartnerApplicationResult) {
    obj3 = { style: tmp.partnerLabelWrapper, children: null };
    obj4 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl = tmp2(1114).intl;
    obj4.children = intl.string(tmp2(1114).t.LO4f0P);
    obj3.children = tmp30(tmp2(4556).Text, obj4);
    tmp30Result = tmp30(tmp31, obj3);
  }
  items4[1] = tmp30Result;
  obj1.children = items4;
  const items5 = [closure_9(closure_5, obj1), ];
  let tmp28Result = tmp28Result1;
  if (tmp28Result1) {
    let descriptionContainer = !hideName;
    if (!hideName) {
      descriptionContainer = tmp.descriptionContainer;
    }
    obj5 = {
      style: descriptionContainer,
      onPress() {
          if (first) {
            closure_5.current = false;
            if (first1) {
              const obj2 = timing;
              const current = ref.current;
              const fn = function t() {
                sharedValue(closure_2[6]).runOnJS(_undefined)(true);
              };
              let obj = { runOnJS: ReanimatedRexport.runOnJS, setShouldLineClamp: _undefined };
              fn.__closure = obj;
              fn.__workletHash = 6050776164847;
              fn.__initData = _undefined;
              const result = sharedValue.set(obj2.withTiming(current, timingPresets.timingStandard, "respect-motion-settings", fn));
            } else {
              _undefined(false);
              obj = timing;
              const result1 = sharedValue.set(obj.withTiming(ref2.current, timingPresets.timingStandard));
            }
            closure_4(!first1);
          }
        },
      accessibilityRole: "button",
      children: null
    };
    const obj6 = { style: null };
    const absoluteFill = str.absoluteFill;
    let tmp23Result = tmp23(5664);
    if (tmp27) {
      const obj7 = { style: absoluteFill, children: null };
      obj6.style = tmp.maskFill;
      const items6 = [tmp30(tmp31, obj6), ];
      const items7 = [tmp.maskLastLine, ];
      if (num3 == null) {
        num3 = 0;
      }
      const obj8 = { style: null, children: null };
      const obj9 = { height: num3 };
      items7[1] = obj9;
      obj8.style = items7;
      const obj10 = { style: tmp.maskFill };
      const items8 = [tmp30(tmp31, obj10), , ];
      const obj11 = { start: null, end: null, colors: null, style: null };
      tmp23Result = tmp23(4987);
      obj11.start = tmp2(1093).HorizontalGradient.START;
      obj11.end = tmp2(1093).HorizontalGradient.END;
      obj11.colors = colors;
      obj11.style = tmp.maskFade;
      items8[1] = tmp30(tmp23Result, obj11);
      if (num2 == null) {
        num2 = 0;
      }
      const obj12 = { style: null };
      const obj13 = { width: num2 };
      obj12.style = obj13;
      items8[2] = tmp30(tmp31, obj12);
      obj8.children = items8;
      items6[1] = tmp28(tmp31, obj8);
      obj7.children = items6;
      let tmp30Result1 = tmp28(tmp31, obj7);
    } else {
      const items9 = [absoluteFill, tmp.maskFill];
      obj6.style = items9;
      tmp30Result1 = tmp30(tmp31, obj6);
    }
    const obj14 = { maskElement: tmp30Result1, children: null };
    const obj15 = { variant: "text-sm/medium", color: "text-default", lineClamp: num4, children: memo };
    obj14.children = tmp30(tmp2(4556).Text, obj15);
    const items10 = [tmp30(tmp23Result, obj14), , ];
    let tmp30Result2 = null;
    if (tmp27) {
      const obj16 = { style: tmp.viewMoreCTA, children: null };
      const obj17 = {
        onLayout(nativeEvent) {
              if (null == num2) {
                closure_9(nativeEvent.nativeEvent.layout.width);
              }
            },
        variant: "text-sm/medium",
        color: "text-brand",
        children: null
      };
      const intl2 = tmp2(1114).intl;
      const items11 = ["\u2026 ", intl2.string(tmp2(1114).t["OBCR+p"])];
      obj17.children = items11;
      obj16.children = tmp28(tmp2(4556).Text, obj17);
      tmp30Result2 = tmp30(tmp31, obj16);
    }
    items10[1] = tmp30Result2;
    let tmp30Result3 = null;
    if (first) {
      tmp30Result3 = null;
      if (first1) {
        const obj18 = { variant: "text-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA, children: null };
        const intl3 = tmp2(1114).intl;
        obj18.children = intl3.string(tmp2(1114).t.D5xGUK);
        tmp30Result3 = tmp30(tmp2(4556).Text, obj18);
      }
    }
    items10[2] = tmp30Result3;
    obj5.children = items10;
    tmp28Result = tmp28(sharedValue, obj5);
  }
  items5[1] = tmp28Result;
  obj.children = items5;
  obj.children = closure_9(closure_5, obj);
  const children = [num2(first(4296).View, obj), ];
  let tmp28Result2 = !first2;
  if (!first2) {
    const obj19 = { style: null, onLayout: null, children: null };
    const items13 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
    obj19.style = items13;
    obj19.onLayout = function onLayout(nativeEvent) {
      ref2.current = nativeEvent.nativeEvent.layout.height;
      let tmp = ref2.current > 0;
      if (tmp) {
        tmp = ref.current > 0;
      }
      if (tmp) {
        closure_16(true);
      }
    };
    let tmp30Result4 = !hideName;
    if (!hideName) {
      const obj20 = { variant: "heading-lg/bold", color: "text-default", children: sectionName };
      tmp30Result4 = tmp30(tmp2(4556).Heading, obj20);
    }
    const items14 = [tmp30Result4, ];
    if (tmp28Result1) {
      let descriptionContainer2 = !hideName;
      if (!hideName) {
        descriptionContainer2 = tmp.descriptionContainer;
      }
      const obj21 = { style: descriptionContainer2, children: null };
      const obj22 = {
        variant: "text-sm/medium",
        color: "text-default",
        onTextLayout(nativeEvent) {
              const lines = nativeEvent.nativeEvent.lines;
              if (tmp) {
                closure_11(lines[0].height);
              }
              if (null == sharedValue.current) {
                sharedValue.current = length;
              }
              if (lines.length > 3) {
                _undefined(true);
                closure_2(true);
              }
            },
        children: memo
      };
      const items15 = [tmp30(tmp2(4556).Text, obj22), ];
      const obj23 = { variant: "text-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA, children: null };
      const intl4 = tmp2(1114).intl;
      obj23.children = intl4.string(tmp2(1114).t.D5xGUK);
      items15[1] = tmp30(tmp2(4556).Text, obj23);
      obj21.children = items15;
      tmp28Result1 = tmp28(tmp31, obj21);
    }
    items14[1] = tmp28Result1;
    obj19.children = items14;
    tmp28Result2 = tmp28(tmp31, obj19);
  }
  children[1] = tmp28Result2;
  return closure_9(num3, { children });
});