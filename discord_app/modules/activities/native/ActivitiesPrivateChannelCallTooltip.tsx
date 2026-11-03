// === Module 14524: ActivitiesPrivateChannelCallTooltip ===

// Module 14524 (ActivitiesPrivateChannelCallTooltip)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5377 */;
import components_Button_Button from "components/Button/Button" /* 5754 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const helpdeskUrl = fn(2147).EMBEDDED_ACTIVITIES_BLOG_POST_URL;
const jsx = fn(21).jsx;
let closure_7 = { duration: 500 };
const createStyles = fn(5141);
let obj2 = { arrow: null, tooltip: { padding: 16 }, tooltipContainer: { position: "absolute", width: 280, zIndex: 2, right: -48, top: -8 }, tooltipText: { textAlign: "center", fontSize: 14 }, closeButtonWrapper: { marginTop: 14 } };
let obj3 = { marginLeft: 200, top: 9, position: "relative", borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 16, borderLeftWidth: 16, transform: null };
let items = [{ rotateZ: "225deg" }];
obj3.transform = items;
obj2.arrow = obj3;
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = { code: "(function ActivitiesPrivateChannelCallTooltipTsx1(){let[withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG]=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default function ActivitiesPrivateChannelCallTooltip(onClosePress) {
  let tmp = closure_8();
  items = [AccessibilityStore];
  let num = 4;
  if (obj.useStateFromStores(items, () => _undefined4.useReducedMotion)) {
    num = 0;
  }
  obj = initialize;
  const items1 = [closure_9, _mod1652.withRepeat, _mod1652.withSequence, timing_timing.withTiming, 40, num, closure_7];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
  class ActivitiesPrivateChannelCallTooltipTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      tmp = closure_2(closure_3, { duration: 0 });
      tmp2 = closure_2(closure_3 + closure_4, closure_5);
      obj1.translateY = closure_0(closure_1(tmp, tmp2, closure_2(closure_3, closure_5)), 10);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  ActivitiesPrivateChannelCallTooltipTsx1.__closure = items2;
  ActivitiesPrivateChannelCallTooltipTsx1.__workletHash = 7430937794191;
  ActivitiesPrivateChannelCallTooltipTsx1.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(ActivitiesPrivateChannelCallTooltipTsx1);
  let obj2 = { style: null, children: null };
  const items3 = [tmp.tooltipContainer, animatedStyle];
  obj2.style = items3;
  const obj3 = { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: tmp.arrow, label: null, title: null, children: null };
  const intl = util.intl;
  obj3.label = intl.format(util.t.xAW71b, { helpdeskUrl });
  const intl2 = util.intl;
  obj3.title = intl2.string(util.t.HOPqzR);
  const obj5 = { style: tmp.closeButtonWrapper, children: null };
  const obj6 = { text: null, onPress: null, variant: "secondary", size: "sm", grow: true };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["NX+WJN"]);
  obj6.onPress = onClosePress.onClosePress;
  obj5.children = jsx(components_Button_Button.Button, { text: null, onPress: null, variant: "secondary", size: "sm", grow: true });
  obj3.children = <View style={tmp.closeButtonWrapper}>{null}</View>;
  obj2.children = jsx(native.Tooltip, { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: tmp.arrow, label: null, title: null, children: null });
  return jsx(_modDef1652.View, { style: null, children: null });
};