// discord_app/modules/jank_stats/native/JankSlidingSurfaceReporter.native.tsx
import NativeJankSessionModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankSessionModule.tsx";
import getJankSurfaceName from "getJankSurfaceName.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const JankScreenConstants = fn(18348);
({ INTERACTION_NONE: closure_4, INTERACTION_TRANSITION: hasOwnProperty } = JankScreenConstants);
let closure_6 = {
  code: "(function JankSlidingSurfaceReporterNativeTsx1(){let[position]=this.__closure;return position.get();})",
};
let closure_7 = {
  code: "(function JankSlidingSurfaceReporterNativeTsx2(current){let[openAt,closedAt,OPEN_SETTLED,CLOSED_SETTLED,MOVING,lastState,scheduleOnRN,report,INTERACTION_NONE,INTERACTION_TRANSITION]=this.__closure;const openIsLower=openAt<closedAt;const atOpen=openIsLower?current<=openAt:current>=openAt;const atClosed=openIsLower?current>=closedAt:current<=closedAt;const state=atOpen?OPEN_SETTLED:atClosed?CLOSED_SETTLED:MOVING;const prevState=lastState.get();if(state===prevState)return;lastState.set(state);if(state===OPEN_SETTLED){scheduleOnRN(report,true,INTERACTION_NONE);}else if(state===CLOSED_SETTLED){scheduleOnRN(report,false,INTERACTION_NONE);}else if(prevState===OPEN_SETTLED){scheduleOnRN(report,false,INTERACTION_TRANSITION);}else if(prevState===CLOSED_SETTLED){scheduleOnRN(report,true,INTERACTION_TRANSITION);}})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/JankSlidingSurfaceReporter.native.tsx");

export default function JankSlidingSurfaceReporter(resolveOpenName) {
  resolveOpenName = resolveOpenName.resolveOpenName;
  _require = resolveOpenName;
  const resolveClosedName = resolveOpenName.resolveClosedName;
  c1 = resolveClosedName;
  const onCoveringChange = resolveOpenName.onCoveringChange;
  dependencyMap = onCoveringChange;
  noop = undefined;
  ({ position, openAt, closedAt } = resolveOpenName);
  noop = noop.useRef({ resolveOpenName, resolveClosedName, onCoveringChange });
  items = [resolveOpenName, resolveClosedName, onCoveringChange];
  const effect = noop.useEffect(() => {
    c3.current = { resolveOpenName, resolveClosedName, onCoveringChange };
  }, items);
  const callback = noop.useCallback((arg0, arg1) => {
    const current = _undefined.current;
    ({ resolveClosedName, onCoveringChange } = current);
    if (onCoveringChange != null) {
      onCoveringChange(arg0);
    }
    const obj = NativeJankSessionModuleDefault;
    if (arg0) {
      resolveClosedName = current.resolveOpenName;
    }
    obj.setScreenContext(getJankSurfaceName.composeJankSurfaceName(resolveClosedName), arg1);
  }, []);
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj = require("../../../../_runtime/metro/01652__.js");
  const tmp3 = _require;
  const items1 = [c6, position];
  _require = undefined;
  [tmp6, tmp7] = items1;
  class JankSlidingSurfaceReporterNativeTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items2 = [tmp7];
  JankSlidingSurfaceReporterNativeTsx1.__closure = items2;
  JankSlidingSurfaceReporterNativeTsx1.__workletHash = 2008471193072;
  JankSlidingSurfaceReporterNativeTsx1.__initData = tmp6;
  const items3 = [c7, openAt, closedAt, 1, 2, 3, sharedValue, tmp3(1705).scheduleOnRN, callback, c4, c5];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items3;
  class JankSlidingSurfaceReporterNativeTsx2 {
    constructor(arg0) {
      tmp = closure_0;
      tmp2 = closure_1;
      tmp3 = closure_0 < closure_1;
      if (tmp3 ? resolveOpenName <= tmp : resolveOpenName >= tmp) {
        tmp4 = closure_2;
      } else {
        tmp4 = (tmp3 ? resolveOpenName >= tmp2 : resolveOpenName <= tmp2) ? closure_3 : closure_4;
      }
      obj = closure_5;
      value = closure_5.get();
      if (tmp4 !== value) {
        result = obj.set(tmp4);
        if (tmp4 === closure_2) {
          tmp19 = closure_6;
          tmp20 = closure_7;
          tmp21 = closure_8;
          flag4 = true;
          tmp22 = closure_6(closure_7, true, closure_8);
        } else if (tmp4 === closure_3) {
          tmp15 = closure_6;
          tmp16 = closure_7;
          tmp17 = closure_8;
          flag3 = false;
          tmp18 = closure_6(closure_7, false, closure_8);
        } else if (value === tmp24) {
          tmp11 = closure_6;
          tmp12 = closure_7;
          tmp13 = closure_9;
          flag2 = false;
          tmp14 = closure_6(closure_7, false, closure_9);
        } else if (value === tmp6) {
          tmp7 = closure_6;
          tmp8 = closure_7;
          tmp9 = closure_9;
          flag = true;
          tmp10 = closure_6(closure_7, true, closure_9);
        }
      }
      return;
    }
  }
  const items4 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  JankSlidingSurfaceReporterNativeTsx2.__closure = items4;
  JankSlidingSurfaceReporterNativeTsx2.__workletHash = 17561289534023;
  JankSlidingSurfaceReporterNativeTsx2.__initData = tmp8;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    JankSlidingSurfaceReporterNativeTsx1,
    JankSlidingSurfaceReporterNativeTsx2,
  );
  return null;
}
