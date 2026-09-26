// === Module 15643: JankSlidingSurfaceReporter ===

// Module 15643 (JankSlidingSurfaceReporter)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import NativeJankStatsModuleDefault from "NativeJankStatsModule" /* 15644 */;
import getJankSurfaceName from "getJankSurfaceName" /* 15645 */;
import noop from "module_19" /* 19 */;

require = fn;
const JankScreenConstants = fn(15641);
({ INTERACTION_NONE: closure_4, INTERACTION_TRANSITION: hasOwnProperty } = JankScreenConstants);
let __initData = { code: "function JankSlidingSurfaceReporterNativeTsx1(){const{position}=this.__closure;return position.get();}" };
let closure_7 = { code: "function JankSlidingSurfaceReporterNativeTsx2(current){const{openAt,closedAt,OPEN_SETTLED,CLOSED_SETTLED,MOVING,lastState,runOnJS,report,INTERACTION_NONE,INTERACTION_TRANSITION}=this.__closure;const openIsLower=openAt<closedAt;const atOpen=openIsLower?current<=openAt:current>=openAt;const atClosed=openIsLower?current>=closedAt:current<=closedAt;const state=atOpen?OPEN_SETTLED:atClosed?CLOSED_SETTLED:MOVING;const prevState=lastState.get();if(state===prevState)return;lastState.set(state);if(state===OPEN_SETTLED){runOnJS(report)(true,INTERACTION_NONE);}else if(state===CLOSED_SETTLED){runOnJS(report)(false,INTERACTION_NONE);}else if(prevState===OPEN_SETTLED){runOnJS(report)(false,INTERACTION_TRANSITION);}else if(prevState===CLOSED_SETTLED){runOnJS(report)(true,INTERACTION_TRANSITION);}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/JankSlidingSurfaceReporter.native.tsx");

export default function JankSlidingSurfaceReporter(position) {
  position = position.position;
  const openAt = position.openAt;
  const closedAt = position.closedAt;
  const resolveOpenName = position.resolveOpenName;
  const resolveClosedName = position.resolveClosedName;
  const onCoveringChange = position.onCoveringChange;
  resolveOpenName.useRef({ resolveOpenName, resolveClosedName, onCoveringChange });
  const items = [resolveOpenName, resolveClosedName, onCoveringChange];
  const effect = resolveOpenName.useEffect(() => {
    closure_6.current = { resolveOpenName, resolveClosedName, onCoveringChange };
  }, items);
  __initData = resolveOpenName.useCallback((arg0, arg1) => {
    const current = ref.current;
    ({ resolveClosedName, onCoveringChange } = current);
    if (onCoveringChange != null) {
      onCoveringChange(arg0);
    }
    const obj = NativeJankStatsModuleDefault;
    if (obj != null) {
      if (arg0) {
        resolveClosedName = current.resolveOpenName;
      }
      obj.setScreenContext(getJankSurfaceName.composeJankSurfaceName(resolveClosedName), arg1);
    }
  }, []);
  const sharedValue = position(closedAt[4]).useSharedValue(0);
  let obj = position(closedAt[4]);
  class I {
    constructor() {
      return position.get();
    }
  }
  I.__closure = { position };
  I.__workletHash = 6255198126313;
  I.__initData = __initData;
  const fn = function _(arg0) {
    let num = 1;
    if (!(openAt < closedAt ? arg0 <= openAt : arg0 >= openAt)) {
      let num2 = 3;
      if (tmp3 ? arg0 >= closedAt : arg0 <= closedAt) {
        num2 = 2;
      }
      num = num2;
    }
    value = sharedValue.get();
    if (num !== value) {
      const result = sharedValue.set(num);
      if (1 === num) {
        ReanimatedRexport.runOnJS(callback)(true, React4);
      } else if (2 === num) {
        ReanimatedRexport.runOnJS(callback)(false, React4);
      } else if (1 === value) {
        ReanimatedRexport.runOnJS(callback)(false, hasOwnProperty);
      } else if (2 === value) {
        ReanimatedRexport.runOnJS(callback)(true, hasOwnProperty);
      }
    }
  };
  let obj2 = position(closedAt[4]);
  fn.__closure = { openAt, closedAt, OPEN_SETTLED: 1, CLOSED_SETTLED: 2, MOVING: 3, lastState: sharedValue, runOnJS: position(closedAt[4]).runOnJS, report: __initData, INTERACTION_NONE: resolveClosedName, INTERACTION_TRANSITION: onCoveringChange };
  fn.__workletHash = 3128845092759;
  fn.__initData = __initData;
  const animatedReaction = obj2.useAnimatedReaction(I, fn);
  return null;
};