// discord_app/design/components/Tooltip/native/Tooltip.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import spring_spring from "../../../animation/reanimated/spring/spring.tsx";
import useTooltipPositionDefault from "useTooltipPosition.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let closure_8 = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
const createStyles = fn(5243);
let obj2 = {
  container: { position: "absolute", alignItems: "center" },
  horizontalContainer: { flexDirection: "row" },
  textContainer: {
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: nativeDefault.space.PX_4,
    borderRadius: nativeDefault.radii.sm,
    maxWidth: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  },
  text: { textAlign: "center" },
  arrow: null,
  bottomArrow: null,
  topArrow: null,
  leftArrow: null,
  rightArrow: null,
};
let size = {
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
  borderTopColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.arrow = size;
obj2.bottomArrow = { borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 6 };
obj2.topArrow = { borderLeftWidth: 6, borderRightWidth: 6, borderBottomWidth: 6 };
obj2.leftArrow = { borderTopWidth: 6, borderBottomWidth: 6, borderRightWidth: 6 };
obj2.rightArrow = { borderTopWidth: 6, borderBottomWidth: 6, borderLeftWidth: 6 };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = {
  code: "(function TooltipNativeTsx1(){let[withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING]=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};})",
};
let closure_11 = {
  code: "(function TooltipNativeTsx2(){let[withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING,isHorizontal]=this.__closure;const color=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{borderTopColor:isHorizontal?'transparent':color,borderBottomColor:isHorizontal?'transparent':color,borderLeftColor:isHorizontal?color:'transparent',borderRightColor:isHorizontal?color:'transparent'};})",
};
size = fn(2);
let result = size.fileFinishedImporting("design/components/Tooltip/native/Tooltip.native.tsx");

export function Tooltip(targetMeasurements) {
  ({ surfaceMeasurements, label, position, onPress } = targetMeasurements);
  c1 = undefined;
  let tmp = closure_9();
  const sharedValue = _mod1652.useSharedValue(0);
  c0 = sharedValue;
  const token = useToken.useToken(nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  const token1 = useToken.useToken(nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  items = [sharedValue];
  const items1 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = _undefined.set(1);
  }, items);
  const callback1 = noop.useCallback(() => {
    const result = _undefined.set(0);
  }, items1);
  [tmp11, c1] = noop.useState(null);
  const tmp12 = useTooltipPositionDefault(
    tmp11,
    surfaceMeasurements,
    targetMeasurements.targetMeasurements,
    position,
    4,
  );
  ({ adjustmentX, adjustmentY } = tmp12);
  let tmp14 = tmp13;
  ({ tooltipX, tooltipY } = tmp12);
  if ("left" !== position) {
    tmp14 = "right" === position;
  }
  const tmp10 = _slicedToArray(noop.useState(null), 2);
  const items2 = [
    closure_10,
    spring_spring.withSpring,
    _mod1652.interpolateColor,
    sharedValue,
    token,
    token1,
    closure_8,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items2;
  class TooltipNativeTsx1 {
    constructor() {
      obj = { backgroundColor: null };
      items = [,];
      items[0] = closure_3;
      items[1] = closure_4;
      obj.backgroundColor = closure_0(closure_1(closure_2.get(), [0, 1], items), closure_5, "animate-always");
      return obj;
    }
  }
  const items3 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
  TooltipNativeTsx1.__closure = items3;
  TooltipNativeTsx1.__workletHash = 1253049499792;
  TooltipNativeTsx1.__initData = tmp16;
  const animatedStyle = _mod1652.useAnimatedStyle(TooltipNativeTsx1);
  const tmp2Result = _mod1652;
  const items4 = [
    closure_11,
    spring_spring.withSpring,
    _mod1652.interpolateColor,
    sharedValue,
    token,
    token1,
    closure_8,
    tmp14,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items4;
  class TooltipNativeTsx2 {
    constructor() {
      items = [,];
      items[0] = closure_3;
      items[1] = closure_4;
      tmp = closure_0(closure_1(closure_2.get(), [0, 1], items), closure_5, "animate-always");
      tmp2 = closure_6;
      str = "transparent";
      str2 = "transparent";
      if (!closure_6) {
        str2 = tmp;
      }
      obj = { borderTopColor: str2, borderBottomColor: null, borderLeftColor: null, borderRightColor: null };
      tmp3 = str;
      if (!tmp2) {
        tmp3 = tmp;
      }
      obj.borderBottomColor = tmp3;
      tmp4 = str;
      if (tmp2) {
        tmp4 = tmp;
      }
      obj.borderLeftColor = tmp4;
      if (tmp2) {
        str = tmp;
      }
      obj.borderRightColor = str;
      return obj;
    }
  }
  const items5 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31];
  TooltipNativeTsx2.__closure = items5;
  TooltipNativeTsx2.__workletHash = 10252270917599;
  TooltipNativeTsx2.__initData = tmp24;
  const animatedStyle1 = _mod1652.useAnimatedStyle(TooltipNativeTsx2);
  const obj4 = {
    disabled: null == onPress,
    onPress,
    onLayout(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
      _undefined2(size);
    },
    onPressIn: callback,
    onPressOut: callback1,
    accessibilityLabel: label,
    accessibilityRole: "button",
    style: null,
    children: null,
  };
  const items6 = [tmp.container, ,];
  let horizontalContainer;
  if (tmp14) {
    horizontalContainer = tmp.horizontalContainer;
  }
  items6[1] = horizontalContainer;
  let num = 0;
  if (null != tmp11) {
    num = 1;
  }
  items6[2] = { opacity: num, top: tooltipY, left: tooltipX };
  obj4.style = items6;
  if ("bottom" === position) {
    const obj5 = { style: null };
    const items7 = [, , ,];
    ({ arrow: arr9[0], topArrow: arr9[1] } = tmp);
    const obj6 = { left: -adjustmentX };
    items7[2] = obj6;
    items7[3] = animatedStyle1;
    obj5.style = items7;
    let tmp36 = timestampProducer(_modDef1652.View, obj5);
  } else {
    tmp36 = null;
    if ("right" === position) {
      const obj7 = { style: null };
      const items8 = [, , ,];
      ({ arrow: arr8[0], leftArrow: arr8[1] } = tmp);
      const obj8 = { top: -adjustmentY };
      items8[2] = obj8;
      items8[3] = animatedStyle1;
      obj7.style = items8;
      tmp36 = timestampProducer(_modDef1652.View, obj7);
    }
  }
  const items9 = [tmp36, ,];
  const obj9 = {
    style: null,
    children: timestampProducer(Text_Text.Text, {
      style: tmp.text,
      variant: "body-xs/semibold",
      color: "text-overlay-light",
      children: label,
    }),
  };
  const items10 = [tmp.textContainer, animatedStyle];
  obj9.style = items10;
  items9[1] = timestampProducer(_modDef1652.View, obj9);
  if ("top" === position) {
    const obj11 = { style: null };
    const items11 = [, , ,];
    ({ arrow: arr13[0], bottomArrow: arr13[1] } = tmp);
    const obj12 = { left: -adjustmentX };
    items11[2] = obj12;
    items11[3] = animatedStyle1;
    obj11.style = items11;
    let tmp39Result = timestampProducer(_modDef1652.View, obj11);
  } else {
    tmp39Result = null;
    if (tmp13) {
      const obj13 = { style: null };
      const items12 = [, , ,];
      ({ arrow: arr12[0], rightArrow: arr12[1] } = tmp);
      const obj14 = { top: -adjustmentY };
      items12[2] = obj14;
      items12[3] = animatedStyle1;
      obj13.style = items12;
      tmp39Result = timestampProducer(_modDef1652.View, obj13);
    }
  }
  items9[2] = tmp39Result;
  obj4.children = items9;
  return metroImportDefault(Pressable, obj4);
}
