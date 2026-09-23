// discord_app/modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx
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
const createStyles = fn(4827);
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
let __initData = { code: "function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}" };
let closure_14 = {
  code: "function DetailsHeaderTsx2(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}",
};
let obj4 = {
  justifyContent: "center",
  paddingVertical: 2,
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  borderRadius: nativeDefault.radii.lg,
};
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
  let obj = sharedValue(9480);
  ref = noop.useRef(null);
  const tmp7 = first1(noop.useState(false), 2);
  const first = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(noop.useState(false), 2);
  first1 = tmp9[0];
  noop = tmp9[1];
  closure_5 = noop.useRef(true);
  sharedValue = undefined;
  const isPartnerApplicationResult = sharedValue(9480).isPartnerApplication(application);
  sharedValue = sharedValue(4559).useSharedValue(null);
  let obj3 = sharedValue(4559);
  let fn = function t() {
    return { height: sharedValue.get() };
  };
  fn.__closure = { height: sharedValue };
  fn.__workletHash = 23826674246;
  fn.__initData = __initData;
  const animatedStyle = sharedValue(4559).useAnimatedStyle(fn);
  const obj4 = sharedValue(4559);
  const sectionName = sharedValue(9480).getSectionName(application);
  const obj5 = sharedValue(9480);
  const str = sharedValue(9480).getSectionDescription(application);
  let tmp28Result5 = null != str;
  if (tmp28Result5) {
    tmp28Result5 = str.trim().length > 0;
  }
  const tmp6Result = first1(noop.useState(null), 2);
  num2 = tmp6Result[0];
  closure_9 = tmp6Result[1];
  const tmp6Result4 = first1(noop.useState(null), 2);
  num3 = tmp6Result4[0];
  colors = tmp6Result4[1];
  ref = obj2.useRef(0);
  __initData = obj2.useRef(0);
  const obj6 = sharedValue(9480);
  [tmp18, c14] = first1(noop.useState(false), 2);
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
  isScreenLandscape = sharedValue(5428).useIsScreenLandscape();
  const tmp24 = first(8618)(isScreenLandscape);
  closure_18 = tmp24;
  const items1 = [isScreenLandscape, tmp24];
  const effect = obj2.useEffect(() => {
    if (isScreenLandscape !== closure_18) {
      closure_16(false);
      closure_13.current = 0;
      closure_12.current = 0;
    }
  }, items1);
  let tmp27 = first;
  const tmp2Result = sharedValue(5428);
  if (first) {
    tmp27 = !first1;
  }
  const obj7 = { style: null, children: null };
  const items2 = [tmp.animatedViewContainer, animatedStyle, viewContainerStyle.viewContainerStyle];
  obj7.style = items2;
  const obj8 = {
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
    children: null,
  };
  const items3 = [tmp.container, mainContainerStyle];
  obj8.style = items3;
  const obj9 = { style: tmp.nameContainer, children: null };
  let tmp30Result = !hideName;
  if (!hideName) {
    const obj10 = {
      style: tmp.nameText,
      variant: "heading-lg/bold",
      color: "text-default",
      lineClamp: 1,
      children: sectionName,
    };
    tmp30Result = tmp30(tmp2(4823).Heading, obj10);
  }
  const items4 = [tmp30Result];
  let tmp30Result5 = null;
  if (isPartnerApplicationResult) {
    const obj11 = { style: tmp.partnerLabelWrapper, children: null };
    const obj12 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl = tmp2(1115).intl;
    obj12.children = intl.string(tmp2(1115).t.LO4f0P);
    obj11.children = tmp30(tmp2(4823).Text, obj12);
    tmp30Result5 = tmp30(tmp31, obj11);
  }
  items4[1] = tmp30Result5;
  obj9.children = items4;
  const items5 = [closure_9(closure_5, obj9)];
  let tmp28Result4 = tmp28Result5;
  if (tmp28Result5) {
    let descriptionContainer = !hideName;
    if (!hideName) {
      descriptionContainer = tmp.descriptionContainer;
    }
    const obj13 = {
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
            const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setShouldLineClamp: _undefined };
            fn.__closure = obj3;
            fn.__workletHash = 6050776164847;
            fn.__initData = _undefined;
            const result = sharedValue.set(
              obj2.withTiming(current, timingPresets.timingStandard, "respect-motion-settings", fn),
            );
          } else {
            _undefined(false);
            const result1 = sharedValue.set(timing.withTiming(ref2.current, timingPresets.timingStandard));
          }
          closure_4(!first1);
        }
      },
      accessibilityRole: "button",
      children: null,
    };
    const obj14 = { style: null };
    const absoluteFill = str.absoluteFill;
    if (tmp27) {
      const obj15 = { style: absoluteFill, children: null };
      obj14.style = tmp.maskFill;
      const items6 = [tmp30(tmp31, obj14)];
      const items7 = [tmp.maskLastLine];
      if (num3 == null) {
        num3 = 0;
      }
      const obj16 = { style: null, children: null };
      const obj17 = { height: num3 };
      items7[1] = obj17;
      obj16.style = items7;
      const obj18 = { style: tmp.maskFill };
      const items8 = [tmp30(tmp31, obj18), ,];
      const obj19 = {
        start: tmp2(1094).HorizontalGradient.START,
        end: tmp2(1094).HorizontalGradient.END,
        colors,
        style: tmp.maskFade,
      };
      items8[1] = tmp30(tmp23(5283), obj19);
      if (num2 == null) {
        num2 = 0;
      }
      const obj20 = { style: null };
      const obj21 = { width: num2 };
      obj20.style = obj21;
      items8[2] = tmp30(tmp31, obj20);
      obj16.children = items8;
      items6[1] = tmp28(tmp31, obj16);
      obj15.children = items6;
      let tmp30Result6 = tmp28(tmp31, obj15);
      const tmp23Result2 = tmp23(5283);
    } else {
      const items9 = [absoluteFill, tmp.maskFill];
      obj14.style = items9;
      tmp30Result6 = tmp30(tmp31, obj14);
    }
    const obj22 = { maskElement: tmp30Result6, children: null };
    const obj23 = { variant: "text-sm/medium", color: "text-default", lineClamp: num4, children: memo };
    obj22.children = tmp30(tmp2(4823).Text, obj23);
    const items10 = [tmp30(tmp23(5967), obj22), ,];
    let tmp30Result7 = null;
    if (tmp27) {
      const obj24 = { style: tmp.viewMoreCTA, children: null };
      const obj25 = {
        onLayout(nativeEvent) {
          if (null == num2) {
            closure_9(nativeEvent.nativeEvent.layout.width);
          }
        },
        variant: "text-sm/medium",
        color: "text-brand",
        children: null,
      };
      const intl2 = tmp2(1115).intl;
      const items11 = ["\u2026 ", intl2.string(tmp2(1115).t["OBCR+p"])];
      obj25.children = items11;
      obj24.children = tmp28(tmp2(4823).Text, obj25);
      tmp30Result7 = tmp30(tmp31, obj24);
    }
    items10[1] = tmp30Result7;
    let tmp30Result8 = null;
    if (first) {
      tmp30Result8 = null;
      if (first1) {
        const obj26 = {
          variant: "text-sm/medium",
          color: "text-brand",
          style: tmp.collapseDescriptionCTA,
          children: null,
        };
        const intl3 = tmp2(1115).intl;
        obj26.children = intl3.string(tmp2(1115).t.D5xGUK);
        tmp30Result8 = tmp30(tmp2(4823).Text, obj26);
      }
    }
    items10[2] = tmp30Result8;
    obj13.children = items10;
    tmp28Result4 = tmp28(sharedValue, obj13);
    const tmp23Result = tmp23(5967);
  }
  items5[1] = tmp28Result4;
  obj8.children = items5;
  obj7.children = closure_9(closure_5, obj8);
  const children = [num2(first(4559).View, obj7)];
  let tmp28Result6 = !first2;
  if (!first2) {
    const obj27 = { style: null, onLayout: null, children: null };
    const items13 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
    obj27.style = items13;
    obj27.onLayout = function onLayout(nativeEvent) {
      ref2.current = nativeEvent.nativeEvent.layout.height;
      let tmp = ref2.current > 0;
      if (tmp) {
        tmp = ref.current > 0;
      }
      if (tmp) {
        closure_16(true);
      }
    };
    let tmp30Result9 = !hideName;
    if (!hideName) {
      const obj28 = { variant: "heading-lg/bold", color: "text-default", children: sectionName };
      tmp30Result9 = tmp30(tmp2(4823).Heading, obj28);
    }
    const items14 = [tmp30Result9];
    if (tmp28Result5) {
      let descriptionContainer2 = !hideName;
      if (!hideName) {
        descriptionContainer2 = tmp.descriptionContainer;
      }
      const obj29 = { style: descriptionContainer2, children: null };
      const obj30 = {
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
          tmp = null == num3 && null != lines[0];
        },
        children: memo,
      };
      const items15 = [tmp30(tmp2(4823).Text, obj30)];
      const obj31 = {
        variant: "text-sm/medium",
        color: "text-brand",
        style: tmp.collapseDescriptionCTA,
        children: null,
      };
      const intl4 = tmp2(1115).intl;
      obj31.children = intl4.string(tmp2(1115).t.D5xGUK);
      items15[1] = tmp30(tmp2(4823).Text, obj31);
      obj29.children = items15;
      tmp28Result5 = tmp28(tmp31, obj29);
    }
    items14[1] = tmp28Result5;
    obj27.children = items14;
    tmp28Result6 = tmp28(tmp31, obj27);
  }
  children[1] = tmp28Result6;
  return closure_9(num3, { children });
});
