// === Module 12251: ActivitiesPrivateChannelCallTooltip ===

// Module 12251 (ActivitiesPrivateChannelCallTooltip)
import noopAll from "noop" /* 19 */;
import _modDef4186 from "module_4186" /* 4186 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;
import { EMBEDDED_ACTIVITIES_BLOG_POST_URL as closure_5 } from "items3" /* 4474 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
noopAll;
let closure_7 = { duration: 500 };
let items = [{ rotateZ: "225deg" }];
let closure_8 = createCacheKey.createStyles({ arrow: { marginLeft: 200, top: 9, position: "relative", borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 16, borderLeftWidth: 16, transform: items }, tooltip: { padding: 16 }, tooltipContainer: { position: "absolute", width: 280, zIndex: 2, right: -48, top: -8 }, tooltipText: { textAlign: "center", fontSize: 14 }, closeButtonWrapper: { marginTop: 14 } });
let closure_9 = { code: "function ActivitiesPrivateChannelCallTooltipTsx1(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}" };
const result = require("set").fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default function ActivitiesPrivateChannelCallTooltip(onClosePress) {
  let num;
  const tmp = callback();
  let obj = num(589);
  let items = [closure_4];
  num = 4;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    num = 0;
  }
  class T {
    constructor() {
      obj = { transform: null };
      obj = { translateY: null };
      obj3 = c0(closure_1_2[7]);
      obj4 = c0(closure_1_2[7]);
      obj5 = c0(closure_1_2[8]);
      withTimingResult = obj5.withTiming(40, { duration: 0 });
      obj6 = c0(closure_1_2[8]);
      withTimingResult1 = obj6.withTiming(40 + c0, closure_1_7);
      obj7 = c0(closure_1_2[8]);
      obj[0] = obj3.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, obj7.withTiming(40, closure_1_7)), 10);
      items = [];
      items[0] = obj;
      obj[0] = items;
      return obj;
    }
  }
  obj = { withRepeat: tmp2(4186).withRepeat, withSequence: tmp2(4186).withSequence, withTiming: tmp2(4447).withTiming, OFFSET: 40, translateBounceOffset: num, TIMING_CONFIG: closure_7 };
  T.__closure = obj;
  T.__workletHash = 4621705591670;
  T.__initData = closure_9;
  const animatedStyle = num(4186).useAnimatedStyle(T);
  obj = { style: items1, children: null };
  items1 = [tmp.tooltipContainer, animatedStyle];
  obj1 = { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: items2, label: null, title: null, children: null };
  items2 = [tmp.arrow];
  const intl = tmp2(1236).intl;
  obj1[3] = intl.format(num(1236).t.xAW71b, { helpdeskUrl: closure_5 });
  const intl2 = tmp2(1236).intl;
  obj1[4] = intl2.string(num(1236).t.HOPqzR);
  let obj3 = { style: tmp.closeButtonWrapper, children: null };
  let obj4 = { text: null, onPress: null, variant: "secondary", size: "sm", grow: true };
  const intl3 = tmp2(1236).intl;
  obj4[0] = intl3.string(num(1236).t["NX+WJN"]);
  obj4[1] = onClosePress.onClosePress;
  obj3[1] = jsx(num(4893).Button, { text: null, onPress: null, variant: "secondary", size: "sm", grow: true });
  obj1[5] = <View style={tmp.closeButtonWrapper}>{null}</View>;
  obj[1] = jsx(num(1297).Tooltip, { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: items2, label: null, title: null, children: null });
  return jsx(_modDef4186.View, { style: items1, children: null });
};