// discord_app/design/components/Modal/native/ModalStepIndicator.native.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2038 from "../../../intl/Mana.messages.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function StepPill(isActive) {
  isActive = isActive.isActive;
  let TEXT_BRAND = isActive.activeColor;
  if (TEXT_BRAND === undefined) {
    TEXT_BRAND = num(sharedValue[4]).colors.TEXT_BRAND;
  }
  let BACKGROUND_MOD_STRONG = isActive.inactiveColor;
  if (BACKGROUND_MOD_STRONG === undefined) {
    BACKGROUND_MOD_STRONG = num(sharedValue[4]).colors.BACKGROUND_MOD_STRONG;
  }
  num = isActive.inactiveOpacity;
  if (num === undefined) {
    num = 1;
  }
  sharedValue = undefined;
  let token;
  let token1;
  let obj = isActive(sharedValue[5]);
  let num2 = 0;
  if (isActive) {
    num2 = 1;
  }
  sharedValue = obj.useSharedValue(num2);
  let tmp6Result = tmp6(tmp7[6]);
  token = tmp6Result.useToken(TEXT_BRAND);
  tmp6Result = tmp6(tmp7[6]);
  token1 = tmp6Result.useToken(BACKGROUND_MOD_STRONG);
  let items = [isActive, sharedValue];
  const effect = token.useEffect(() => {
    num = 0;
    if (isActive) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num, closure_6));
  }, items);
  const tmp5 = closure_7();
  class I {
    constructor() {
      obj = { width: null, backgroundColor: null, opacity: null };
      obj2 = closure_0(closure_2[5]);
      obj.width = obj2.interpolate(closure_2.get(), [0, 1], [12, 36]);
      obj3 = closure_0(closure_2[5]);
      items = [,];
      items[0] = closure_4;
      items[1] = closure_3;
      obj.backgroundColor = obj3.interpolateColor(closure_2.get(), [0, 1], items);
      obj4 = closure_0(closure_2[5]);
      items1 = [,];
      items1[0] = c1;
      items1[1] = 1;
      obj.opacity = obj4.interpolate(closure_2.get(), [0, 1], items1);
      return obj;
    }
  }
  obj = {
    interpolate: tmp6(tmp7[5]).interpolate,
    sharedValue,
    WIDTH_INACTIVE: 12,
    WIDTH_ACTIVE: 36,
    interpolateColor: tmp6(tmp7[5]).interpolateColor,
    inactiveColor: token1,
    activeColor: token,
    inactiveOpacity: num,
  };
  I.__closure = obj;
  I.__workletHash = 12485955218699;
  I.__initData = __initData;
  const animatedStyle = isActive(sharedValue[5]).useAnimatedStyle(I);
  obj = { style: null };
  let items1 = [animatedStyle, tmp5.stepPill];
  obj.style = items1;
  return jsx(num(sharedValue[5]).View, { style: null });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
let closure_6 = { overshootClamping: true };
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", gap: 4 },
  stepPill: { height: 4, borderRadius: 2 },
});
const __initData = {
  code: "function ModalStepIndicatorNativeTsx1(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Modal/native/ModalStepIndicator.native.tsx");

export const ModalStepIndicator = function ModalStepIndicator(arg0) {
  ({ currentStep, totalSteps } = arg0);
  ({ activeColor, inactiveColor, inactiveOpacity } = arg0);
  const tmp = closure_7();
  if (totalSteps <= 0) {
    let obj = { style: tmp.container };
    return <View style={tmp.container} />;
  } else {
    const items = [];
    for (let num = 0; num < totalSteps; num = num + 1) {
      obj = { isActive: num === currentStep, activeColor, inactiveColor, inactiveOpacity };
      let arr = items.push(
        <StepPill
          key={num}
          isActive={num === currentStep}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          inactiveOpacity={inactiveOpacity}
        />,
      );
    }
    if (currentStep < 0) {
      obj = { style: tmp.container, children: items };
      return <View style={tmp.container}>{items}</View>;
    } else {
      const intl = util.intl;
      const obj1 = {
        accessible: true,
        accessibilityRole: "progressbar",
        accessibilityLabel: intl.string(_modDef2038.KUwsC0),
        accessibilityValue: null,
        importantForAccessibility: "yes",
        style: null,
        children: null,
      };
      const range = { min: 1, max: totalSteps, now: currentStep + 1 };
      obj1.accessibilityValue = range;
      obj1.style = tmp.container;
      obj1.children = items;
      return (
        <View
          accessible
          accessibilityRole="progressbar"
          accessibilityLabel={intl.string(_modDef2038.KUwsC0)}
          accessibilityValue={null}
          importantForAccessibility="yes"
          style={null}
        >
          {null}
        </View>
      );
    }
  }
};
