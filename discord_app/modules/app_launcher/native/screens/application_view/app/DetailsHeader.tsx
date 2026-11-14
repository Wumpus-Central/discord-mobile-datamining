// discord_app/modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1708 from "../../../../../../../_runtime/metro/01708__.js";
import timing_timing from "../../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import BioMarkupUtils from "../../../../../markup/BioMarkupUtils.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: closure_6, StyleSheet: metroImportDefault } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
let colors = ["black", "transparent"];
const createStyles = fn(5306);
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
let closure_13 = { code: "(function DetailsHeaderTsx1(){let[height]=this.__closure;return{height:height.get()};})" };
let closure_14 = {
  code: "(function DetailsHeaderTsx2(){let[scheduleOnRN,setShouldLineClamp]=this.__closure;scheduleOnRN(setShouldLineClamp,true);})",
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
  _require = undefined;
  let first1;
  noop = undefined;
  let str;
  let num2;
  closure_9 = undefined;
  let num3;
  colors = undefined;
  let ref;
  let ref2;
  c14 = undefined;
  let first2;
  closure_16 = undefined;
  let isScreenLandscape;
  closure_18 = undefined;
  let tmp = ref();
  let obj = require("AppLauncherUtils");
  ref = noop.useRef(null);
  _require = ref;
  const tmp7 = first1(noop.useState(false), 2);
  const first = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(noop.useState(false), 2);
  first1 = tmp9[0];
  noop = tmp9[1];
  closure_5 = noop.useRef(true);
  const isPartnerApplicationResult = require("AppLauncherUtils").isPartnerApplication(application);
  const sharedValue = require("../../../../../../../_runtime/metro/01655__.js").useSharedValue(null);
  const obj3 = require("../../../../../../../_runtime/metro/01655__.js");
  items = [ref2, sharedValue];
  _require = undefined;
  [tmp12, tmp13] = items;
  class DetailsHeaderTsx1 {
    constructor() {
      obj = { height: closure_0.get() };
      return obj;
    }
  }
  let items1 = [tmp13];
  DetailsHeaderTsx1.__closure = items1;
  DetailsHeaderTsx1.__workletHash = 9372666213791;
  DetailsHeaderTsx1.__initData = tmp12;
  const animatedStyle = require("../../../../../../../_runtime/metro/01655__.js").useAnimatedStyle(DetailsHeaderTsx1);
  const obj4 = require("../../../../../../../_runtime/metro/01655__.js");
  const sectionName = require("AppLauncherUtils").getSectionName(application);
  const tmp2Result = require("AppLauncherUtils");
  str = require("AppLauncherUtils").getSectionDescription(application);
  let tmp30Result5 = null != str;
  if (tmp30Result5) {
    tmp30Result5 = str.trim().length > 0;
  }
  const tmp6Result = first1(noop.useState(null), 2);
  num2 = tmp6Result[0];
  closure_9 = tmp6Result[1];
  const tmp6Result4 = first1(noop.useState(null), 2);
  num3 = tmp6Result4[0];
  colors = tmp6Result4[1];
  ref = obj2.useRef(0);
  ref2 = obj2.useRef(0);
  const tmp2Result3 = require("AppLauncherUtils");
  [tmp20, c14] = first1(noop.useState(false), 2);
  const tmp6Result6 = first1(noop.useState(false), 2);
  first2 = tmp6Result6[0];
  closure_16 = tmp6Result6[1];
  const items2 = [str];
  const memo = obj2.useMemo(() => {
    let result = null;
    if (null != str) {
      result = BioMarkupUtils.parseBioReactWithCachedAST(tmp);
    }
    return result;
  }, items2);
  const tmp6Result5 = first1(noop.useState(false), 2);
  isScreenLandscape = require("useIsScreenLandscape").useIsScreenLandscape();
  const tmp26 = first(6836)(isScreenLandscape);
  closure_18 = tmp26;
  const items3 = [isScreenLandscape, tmp26];
  const effect = obj2.useEffect(() => {
    if (isScreenLandscape !== closure_18) {
      closure_16(false);
      closure_13.current = 0;
      closure_12.current = 0;
    }
  }, items3);
  let tmp29 = first;
  const tmp2Result4 = require("useIsScreenLandscape");
  if (first) {
    tmp29 = !first1;
  }
  const obj5 = { style: null, children: null };
  const items4 = [tmp.animatedViewContainer, animatedStyle, viewContainerStyle.viewContainerStyle];
  obj5.style = items4;
  const obj6 = {
    style: null,
    onLayout: function handleCollapsedContainerLayout(nativeEvent) {
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
  const items5 = [tmp.container, mainContainerStyle];
  obj6.style = items5;
  const obj7 = { style: tmp.nameContainer, children: null };
  let tmp32Result = !hideName;
  if (!hideName) {
    const obj8 = {
      style: tmp.nameText,
      variant: "heading-lg/semibold",
      color: "text-default",
      lineClamp: 1,
      children: sectionName,
    };
    tmp32Result = tmp32(tmp2(5929).Heading, obj8);
  }
  const items6 = [tmp32Result];
  let tmp32Result5 = null;
  if (isPartnerApplicationResult) {
    const obj9 = { style: tmp.partnerLabelWrapper, children: null };
    const obj10 = { variant: "body-xs/medium", color: "text-default", children: null };
    const intl = tmp2(1113).intl;
    obj10.children = intl.string(tmp2(1113).t.LO4f0P);
    obj9.children = tmp32(tmp2(5929).Text, obj10);
    tmp32Result5 = tmp32(tmp33, obj9);
  }
  items6[1] = tmp32Result5;
  obj7.children = items6;
  const items7 = [closure_9(closure_5, obj7)];
  let tmp30Result4 = tmp30Result5;
  if (tmp30Result5) {
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
            const obj2 = timing_timing;
            const current = ref.current;
            const timingStandard = timingPresets.timingStandard;
            items = [closure_14, _mod1708.scheduleOnRN, _undefined2];
            c0 = undefined;
            c1 = undefined;
            [tmp23, tmp24, tmp25] = items;
            class DetailsHeaderTsx2 {
              constructor() {
                tmp = closure_0(closure_1, true);
                return;
              }
            }
            const items1 = [tmp24, tmp25];
            DetailsHeaderTsx2.__closure = items1;
            DetailsHeaderTsx2.__workletHash = 15470146172891;
            DetailsHeaderTsx2.__initData = tmp23;
            const result = sharedValue.set(
              obj2.withTiming(current, timingStandard, "respect-motion-settings", DetailsHeaderTsx2),
            );
          } else {
            _undefined2(false);
            const result1 = sharedValue.set(timing_timing.withTiming(ref2.current, timingPresets.timingStandard));
          }
          closure_4(!first1);
        }
      },
      accessibilityRole: "button",
      children: null,
    };
    const obj12 = { style: null };
    const absoluteFill = str.absoluteFill;
    if (tmp29) {
      const obj13 = { style: absoluteFill, children: null };
      obj12.style = tmp.maskFill;
      const items8 = [tmp32(tmp33, obj12)];
      const items9 = [tmp.maskLastLine];
      if (num3 == null) {
        num3 = 0;
      }
      const obj14 = { style: null, children: null };
      const obj15 = { height: num3 };
      items9[1] = obj15;
      obj14.style = items9;
      const obj16 = { style: tmp.maskFill };
      const items10 = [tmp32(tmp33, obj16), ,];
      const obj17 = {
        start: tmp2(1092).HorizontalGradient.START,
        end: tmp2(1092).HorizontalGradient.END,
        colors,
        style: tmp.maskFade,
      };
      items10[1] = tmp32(tmp25(5893), obj17);
      if (num2 == null) {
        num2 = 0;
      }
      const obj18 = { style: null };
      const obj19 = { width: num2 };
      obj18.style = obj19;
      items10[2] = tmp32(tmp33, obj18);
      obj14.children = items10;
      items8[1] = tmp30(tmp33, obj14);
      obj13.children = items8;
      let tmp32Result6 = tmp30(tmp33, obj13);
      const tmp25Result2 = tmp25(5893);
    } else {
      const items11 = [absoluteFill, tmp.maskFill];
      obj12.style = items11;
      tmp32Result6 = tmp32(tmp33, obj12);
    }
    const obj20 = { maskElement: tmp32Result6, children: null };
    const obj21 = { variant: "body-sm/medium", color: "text-default", lineClamp: num4, children: memo };
    obj20.children = tmp32(tmp2(5929).Text, obj21);
    const items12 = [tmp32(tmp25(7533), obj20), ,];
    let tmp32Result7 = null;
    if (tmp29) {
      const obj22 = { style: tmp.viewMoreCTA, children: null };
      const obj23 = {
        onLayout(nativeEvent) {
          if (null == num2) {
            closure_9(nativeEvent.nativeEvent.layout.width);
          }
        },
        variant: "body-sm/medium",
        color: "text-brand",
        children: null,
      };
      const intl2 = tmp2(1113).intl;
      const items13 = ["\u2026 ", intl2.string(tmp2(1113).t["OBCR+p"])];
      obj23.children = items13;
      obj22.children = tmp30(tmp2(5929).Text, obj23);
      tmp32Result7 = tmp32(tmp33, obj22);
    }
    items12[1] = tmp32Result7;
    let tmp32Result8 = null;
    if (first) {
      tmp32Result8 = null;
      if (first1) {
        const obj24 = {
          variant: "body-sm/medium",
          color: "text-brand",
          style: tmp.collapseDescriptionCTA,
          children: null,
        };
        const intl3 = tmp2(1113).intl;
        obj24.children = intl3.string(tmp2(1113).t.D5xGUK);
        tmp32Result8 = tmp32(tmp2(5929).Text, obj24);
      }
    }
    items12[2] = tmp32Result8;
    obj11.children = items12;
    tmp30Result4 = tmp30(sharedValue, obj11);
    const tmp25Result = tmp25(7533);
  }
  items7[1] = tmp30Result4;
  obj6.children = items7;
  obj5.children = closure_9(closure_5, obj6);
  const children = [num2(first(1655).View, obj5)];
  let tmp30Result6 = !first2;
  if (!first2) {
    const obj25 = { style: null, onLayout: null, children: null };
    const items15 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
    obj25.style = items15;
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
    let tmp32Result9 = !hideName;
    if (!hideName) {
      const obj26 = { variant: "heading-lg/semibold", color: "text-default", children: sectionName };
      tmp32Result9 = tmp32(tmp2(5929).Heading, obj26);
    }
    const items16 = [tmp32Result9];
    if (tmp30Result5) {
      let descriptionContainer2 = !hideName;
      if (!hideName) {
        descriptionContainer2 = tmp.descriptionContainer;
      }
      const obj27 = { style: descriptionContainer2, children: null };
      const obj28 = {
        variant: "body-sm/medium",
        color: "text-default",
        onTextLayout: function handleApplicationDescriptionTextLayout(nativeEvent) {
          const lines = nativeEvent.nativeEvent.lines;
          if (tmp) {
            closure_11(lines[0].height);
          }
          if (null == _undefined.current) {
            _undefined.current = length;
          }
          if (lines.length > 3) {
            _undefined2(true);
            closure_2(true);
          }
          tmp = null == num3 && null != lines[0];
        },
        children: memo,
      };
      const items17 = [tmp32(tmp2(5929).Text, obj28)];
      const obj29 = {
        variant: "body-sm/medium",
        color: "text-brand",
        style: tmp.collapseDescriptionCTA,
        children: null,
      };
      const intl4 = tmp2(1113).intl;
      obj29.children = intl4.string(tmp2(1113).t.D5xGUK);
      items17[1] = tmp32(tmp2(5929).Text, obj29);
      obj27.children = items17;
      tmp30Result5 = tmp30(tmp33, obj27);
    }
    items16[1] = tmp30Result5;
    obj25.children = items16;
    tmp30Result6 = tmp30(tmp33, obj25);
  }
  children[1] = tmp30Result6;
  return closure_9(num3, { children });
});
