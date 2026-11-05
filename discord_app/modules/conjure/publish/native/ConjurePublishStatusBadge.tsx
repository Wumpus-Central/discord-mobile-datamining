// === Module 12444: ConjurePublishStatusBadge ===

// Module 12444 (ConjurePublishStatusBadge)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5380 */;
import ConjureHeaderIconButton from "ConjureHeaderIconButton" /* 12443 */;
import ProgressCircleDefault from "ProgressCircle" /* 12445 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
function ConjurePublishSpinner() {
  const tmp = closure_6();
  const token = require("useToken").useToken(nativeDefault.colors.BACKGROUND_BRAND);
  let obj = require("useToken");
  const sharedValue = require("module_1652").useSharedValue(0);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = _mod1652;
    const obj2 = timing_timing;
    const result = _undefined.set(obj.withRepeat(obj2.withTiming(360, { duration: 800, easing: _mod1652.Easing.linear }), -1, false));
    return () => c0(dependencyMap[7]).cancelAnimation(_undefined);
  }, items);
  let obj2 = require("module_1652");
  const items1 = [closure_7, sharedValue];
  _require = undefined;
  [tmp7, tmp8] = items1;
  class ConjurePublishStatusBadgeTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { rotate: "" + closure_0.get() + "deg" };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp8];
  ConjurePublishStatusBadgeTsx1.__closure = items2;
  ConjurePublishStatusBadgeTsx1.__workletHash = 4407393143037;
  ConjurePublishStatusBadgeTsx1.__initData = tmp7;
  const animatedStyle = require("module_1652").useAnimatedStyle(ConjurePublishStatusBadgeTsx1);
  const obj4 = { style: null, children: jsx(ProgressCircleDefault, { percent: 70, size: 12, strokeWidth: 2, color: token, style: tmp.spinner }) };
  const items3 = [tmp.spinner, animatedStyle];
  obj4.style = items3;
  return jsx(_modDef1652.View, { style: null, children: jsx(ProgressCircleDefault, { percent: 70, size: 12, strokeWidth: 2, color: token, style: tmp.spinner }) });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let obj2 = { dot: null, spinner: null };
let size = { width: fn(12443).CONJURE_HEADER_BADGE_SIZE, height: fn(12443).CONJURE_HEADER_BADGE_SIZE, borderRadius: fn(12443).CONJURE_HEADER_BADGE_SIZE / 2, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.dot = size;
obj2.spinner = { width: 12, height: 12 };
let closure_6 = createStyles.createStyles(obj2);
let closure_7 = { code: "(function ConjurePublishStatusBadgeTsx1(){let[rotation]=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishStatusBadge.tsx");

export default function ConjurePublishStatusBadge(indicator) {
  if ("publishing" === indicator.indicator) {
    let tmp4 = <ConjurePublishSpinner />;
  } else {
    const obj = { style: tmp.dot };
    tmp4 = <View style={tmp.dot} />;
  }
  return tmp4;
};
export function conjurePublishBadgeSize(indicator) {
  let num = 12;
  if ("publishing" !== indicator) {
    num = ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE;
  }
  return num;
}