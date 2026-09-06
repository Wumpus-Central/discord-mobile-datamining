// discord_app/modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const helpdeskUrl = fn(1920).EMBEDDED_ACTIVITIES_BLOG_POST_URL;
const jsx = fn(21).jsx;
const TIMING_CONFIG = { duration: 500 };
fn(4560);
let createStyles = {
  arrow: null,
  tooltip: { padding: 16 },
  tooltipContainer: { position: "absolute", width: 280, zIndex: 2, right: -48, top: -8 },
  tooltipText: { textAlign: "center", fontSize: 14 },
  closeButtonWrapper: { marginTop: 14 },
};
createStyles = {
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
createStyles.transform = items;
createStyles.arrow = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function ActivitiesPrivateChannelCallTooltipTsx1(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default function ActivitiesPrivateChannelCallTooltip(onClosePress) {
  let num;
  const tmp = closure_8();
  let obj = num(504);
  let items = [AccessibilityStore];
  num = 4;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    num = 0;
  }
  class T {
    constructor() {
      obj = { transform: null };
      obj = { translateY: null };
      obj3 = closure_0(closure_2[7]);
      obj4 = closure_0(closure_2[7]);
      obj5 = closure_0(closure_2[8]);
      withTimingResult = obj5.withTiming(40, { duration: 0 });
      obj6 = closure_0(closure_2[8]);
      withTimingResult1 = obj6.withTiming(40 + c0, closure_7);
      obj7 = closure_0(closure_2[8]);
      obj.translateY = obj3.withRepeat(
        obj4.withSequence(withTimingResult, withTimingResult1, obj7.withTiming(40, closure_7)),
        10,
      );
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj = {
    withRepeat: tmp2(4296).withRepeat,
    withSequence: tmp2(4296).withSequence,
    withTiming: tmp2(4561).withTiming,
    OFFSET: 40,
    translateBounceOffset: num,
    TIMING_CONFIG,
  };
  T.__closure = obj;
  T.__workletHash = 4621705591670;
  T.__initData = __initData;
  const animatedStyle = num(4296).useAnimatedStyle(T);
  obj = { style: null, children: null };
  const items1 = [tmp.tooltipContainer, animatedStyle];
  obj.style = items1;
  const obj1 = {
    containerStyle: tmp.tooltip,
    labelStyle: tmp.tooltipText,
    arrowStyle: null,
    label: null,
    title: null,
    children: null,
  };
  const items2 = [tmp.arrow];
  obj1.arrowStyle = items2;
  const intl = tmp2(1114).intl;
  obj1.label = intl.format(num(1114).t.xAW71b, { helpdeskUrl });
  const intl2 = tmp2(1114).intl;
  obj1.title = intl2.string(num(1114).t.HOPqzR);
  let obj3 = { style: tmp.closeButtonWrapper, children: null };
  let obj4 = { text: null, onPress: null, variant: "secondary", size: "sm", grow: true };
  const intl3 = tmp2(1114).intl;
  obj4.text = intl3.string(num(1114).t["NX+WJN"]);
  obj4.onPress = onClosePress.onClosePress;
  obj3.children = jsx(num(4975).Button, { text: null, onPress: null, variant: "secondary", size: "sm", grow: true });
  obj1.children = <View style={tmp.closeButtonWrapper}>{null}</View>;
  obj.children = jsx(num(1178).Tooltip, {
    containerStyle: tmp.tooltip,
    labelStyle: tmp.tooltipText,
    arrowStyle: null,
    label: null,
    title: null,
    children: null,
  });
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
}
