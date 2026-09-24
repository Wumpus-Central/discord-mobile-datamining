// discord_app/modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const helpdeskUrl = fn(2004).EMBEDDED_ACTIVITIES_BLOG_POST_URL;
const jsx = fn(21).jsx;
const TIMING_CONFIG = { duration: 500 };
const createStyles = fn(4829);
let obj2 = {
  arrow: null,
  tooltip: { padding: 16 },
  tooltipContainer: { position: "absolute", width: 280, zIndex: 2, right: -48, top: -8 },
  tooltipText: { textAlign: "center", fontSize: 14 },
  closeButtonWrapper: { marginTop: 14 },
};
let obj3 = {
  marginLeft: 200,
  top: 9,
  position: "relative",
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 16,
  borderLeftWidth: 16,
  transform: null,
};
let items = [{ rotateZ: "225deg" }];
obj3.transform = items;
obj2.arrow = obj3;
let closure_8 = createStyles.createStyles(obj2);
const __initData = {
  code: "function ActivitiesPrivateChannelCallTooltipTsx1(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default function ActivitiesPrivateChannelCallTooltip(onClosePress) {
  const tmp = closure_8();
  let items = [AccessibilityStore];
  let num = 4;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    num = 0;
  }
  obj = num(504);
  class T {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      obj3 = closure_0(closure_2[7]);
      obj4 = closure_0(closure_2[7]);
      obj5 = closure_0(closure_2[8]);
      withTimingResult = obj5.withTiming(40, { duration: 0 });
      obj6 = closure_0(closure_2[8]);
      withTimingResult1 = obj6.withTiming(40 + c0, closure_7);
      obj7 = closure_0(closure_2[8]);
      obj1.translateY = obj3.withRepeat(
        obj4.withSequence(withTimingResult, withTimingResult1, obj7.withTiming(40, closure_7)),
        10,
      );
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const tmp2Result = num(4561);
  T.__closure = {
    withRepeat: num(4561).withRepeat,
    withSequence: num(4561).withSequence,
    withTiming: num(4830).withTiming,
    OFFSET: 40,
    translateBounceOffset: num,
    TIMING_CONFIG,
  };
  T.__workletHash = 4621705591670;
  T.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(T);
  let obj3 = { style: null, children: null };
  const items1 = [tmp.tooltipContainer, animatedStyle];
  obj3.style = items1;
  let obj4 = {
    containerStyle: tmp.tooltip,
    labelStyle: tmp.tooltipText,
    arrowStyle: null,
    label: null,
    title: null,
    children: null,
  };
  const items2 = [tmp.arrow];
  obj4.arrowStyle = items2;
  const intl = tmp2(1115).intl;
  obj4.label = intl.format(num(1115).t.xAW71b, { helpdeskUrl });
  const intl2 = tmp2(1115).intl;
  obj4.title = intl2.string(num(1115).t.HOPqzR);
  let obj6 = { style: tmp.closeButtonWrapper, children: null };
  const obj7 = { text: null, onPress: null, variant: "secondary", size: "sm", grow: true };
  const intl3 = tmp2(1115).intl;
  obj7.text = intl3.string(num(1115).t["NX+WJN"]);
  obj7.onPress = onClosePress.onClosePress;
  obj6.children = jsx(num(5273).Button, { text: null, onPress: null, variant: "secondary", size: "sm", grow: true });
  obj4.children = <View style={tmp.closeButtonWrapper}>{null}</View>;
  obj3.children = jsx(num(1177).Tooltip, {
    containerStyle: tmp.tooltip,
    labelStyle: tmp.tooltipText,
    arrowStyle: null,
    label: null,
    title: null,
    children: null,
  });
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
}
