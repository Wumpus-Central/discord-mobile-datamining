// discord_app/modules/jank_stats/native/JankSlidingSurfaceReporter.native.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx";
import getJankSurfaceName from "getJankSurfaceName.tsx";
import react from "../../../../_runtime/00019_react.js";
import JankScreenConstants from "JankScreenConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
({ INTERACTION_NONE: closure_4, INTERACTION_TRANSITION: hasOwnProperty } = JankScreenConstants);
let __initData = {
  code: "function JankSlidingSurfaceReporterNativeTsx1(){const{position}=this.__closure;return position.get();}",
};
let closure_7 = {
  code: "function JankSlidingSurfaceReporterNativeTsx2(current){const{openAt,closedAt,OPEN_SETTLED,CLOSED_SETTLED,MOVING,lastState,runOnJS,report,INTERACTION_NONE,INTERACTION_TRANSITION}=this.__closure;const openIsLower=openAt<closedAt;const atOpen=openIsLower?current<=openAt:current>=openAt;const atClosed=openIsLower?current>=closedAt:current<=closedAt;const state=atOpen?OPEN_SETTLED:atClosed?CLOSED_SETTLED:MOVING;const prevState=lastState.get();if(state===prevState){return;}lastState.set(state);if(state===OPEN_SETTLED){runOnJS(report)(true,INTERACTION_NONE);}else{if(state===CLOSED_SETTLED){runOnJS(report)(false,INTERACTION_NONE);}else{if(prevState===OPEN_SETTLED){runOnJS(report)(false,INTERACTION_TRANSITION);}else{if(prevState===CLOSED_SETTLED){runOnJS(report)(true,INTERACTION_TRANSITION);}}}}}",
};
let closure_8 = {
  code: "function JankSlidingSurfaceReporterNativeTsx3(){const{position}=this.__closure;return position.get();}",
};
const __initData2 = {
  code: "function JankSlidingSurfaceReporterNativeTsx4(current){const{openAt,closedAt,OPEN_SETTLED,CLOSED_SETTLED,MOVING,lastState,runOnJS,report,INTERACTION_NONE,INTERACTION_TRANSITION}=this.__closure;const openIsLower=openAt<closedAt;const atOpen=openIsLower?current<=openAt:current>=openAt;const atClosed=openIsLower?current>=closedAt:current<=closedAt;const state=atOpen?OPEN_SETTLED:atClosed?CLOSED_SETTLED:MOVING;const prevState=lastState.get();if(state===prevState)return;lastState.set(state);if(state===OPEN_SETTLED){runOnJS(report)(true,INTERACTION_NONE);}else if(state===CLOSED_SETTLED){runOnJS(report)(false,INTERACTION_NONE);}else if(prevState===OPEN_SETTLED){runOnJS(report)(false,INTERACTION_TRANSITION);}else if(prevState===CLOSED_SETTLED){runOnJS(report)(true,INTERACTION_TRANSITION);}}",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (position) => {
      let closedAt;
      let obj4;
      let ref;
      let obj = position(closedAt[3]);
      const cResult = obj.c(9);
      position = position.position;
      const openAt = position.openAt;
      closedAt = position.closedAt;
      let resolveOpenName = position.resolveOpenName;
      let resolveClosedName = position.resolveClosedName;
      const onCoveringChange = position.onCoveringChange;
      if (cResult[0] === onCoveringChange) {
        if (cResult[1] === resolveClosedName) {
          let tmp4;
          if (cResult[2] === resolveOpenName) {
            tmp4 = cResult[3];
          }
          let obj3 = resolveOpenName;
          __initData = resolveOpenName.useRef(tmp4);
          if (cResult[4] === onCoveringChange) {
            if (cResult[5] === resolveClosedName) {
              let tmp5;
              let tmp6;
              if (cResult[6] === resolveOpenName) {
                tmp5 = cResult[7];
                tmp6 = cResult[8];
              }
              const effect = obj3.useEffect(tmp5, tmp6);
              function report(arg0, arg1) {
                const current = ref.current;
                ({ resolveClosedName, onCoveringChange } = current);
                resolveOpenName = current.resolveOpenName;
                if (onCoveringChange != null) {
                  onCoveringChange(arg0);
                }
                const tmp3 = react_nativeDefault;
                if (tmp3 != null) {
                  const setScreenContext = tmp3.setScreenContext;
                  const composeJankSurfaceName = getJankSurfaceName.composeJankSurfaceName;
                  getJankSurfaceName;
                  if (arg0) {
                    resolveClosedName = resolveOpenName;
                  }
                  setScreenContext(composeJankSurfaceName(resolveClosedName), arg1);
                }
              }
              class I {
                constructor() {
                  const obj = { resolveOpenName, resolveClosedName, onCoveringChange };
                  ref.current = obj;
                }
              }
              const sharedValue = obj4.useSharedValue(0);
              const fn = function f() {
                return position.get();
              };
              let obj2 = { position };
              fn.__closure = obj2;
              fn.__workletHash = 6255198126313;
              fn.__initData = __initData;
              const fn2 = function v(arg0) {
                let num = 1;
                if (!(openAt < closedAt ? arg0 <= openAt : arg0 >= openAt)) {
                  let num2 = 3;
                  if (openAt < closedAt ? arg0 >= closedAt : arg0 <= closedAt) {
                    num2 = 2;
                  }
                  num = num2;
                }
                const value = sharedValue.get();
                if (num !== value) {
                  const result = sharedValue.set(num);
                  if (1 === num) {
                    const obj4 = ReanimatedRexport;
                    obj4.runOnJS(report)(true, React3);
                  } else if (2 === num) {
                    const obj3 = ReanimatedRexport;
                    obj3.runOnJS(report)(false, React3);
                  } else if (1 === value) {
                    const obj2 = ReanimatedRexport;
                    obj2.runOnJS(report)(false, hasOwnProperty);
                  } else if (2 === value) {
                    const obj5 = ReanimatedRexport;
                    obj5.runOnJS(report)(true, hasOwnProperty);
                  }
                }
              };
              let obj5 = {
                openAt,
                closedAt,
                OPEN_SETTLED: 1,
                CLOSED_SETTLED: 2,
                MOVING: 3,
                lastState: sharedValue,
                runOnJS: position(closedAt[6]).runOnJS,
                report,
                INTERACTION_NONE: resolveClosedName,
                INTERACTION_TRANSITION: onCoveringChange,
              };
              const useAnimatedReaction = position(closedAt[6]).useAnimatedReaction;
              position(closedAt[6]);
              fn2.__closure = obj5;
              fn2.__workletHash = 7165168414551;
              fn2.__initData = report;
              const animatedReaction = useAnimatedReaction(fn, fn2);
              return null;
            }
          }
          class I {
            constructor() {
              const obj = { resolveOpenName, resolveClosedName, onCoveringChange };
              ref.current = obj;
            }
          }
          const items = [resolveOpenName, resolveClosedName, onCoveringChange];
          let num = 4;
          cResult[4] = onCoveringChange;
          let num2 = 5;
          cResult[5] = resolveClosedName;
          cResult[6] = resolveOpenName;
          cResult[7] = I;
          cResult[8] = items;
          tmp6 = items;
          tmp5 = I;
        }
      }
      const obj6 = { resolveOpenName, resolveClosedName, onCoveringChange };
      cResult[0] = onCoveringChange;
      cResult[1] = resolveClosedName;
      cResult[2] = resolveOpenName;
      cResult[3] = obj6;
      tmp4 = obj6;
    }
  : (position) => {
      position = position.position;
      const openAt = position.openAt;
      const closedAt = position.closedAt;
      let resolveOpenName = position.resolveOpenName;
      let resolveClosedName = position.resolveClosedName;
      const onCoveringChange = position.onCoveringChange;
      const ref = resolveOpenName.useRef({ resolveOpenName, resolveClosedName, onCoveringChange });
      const items = [resolveOpenName, resolveClosedName, onCoveringChange];
      const effect = resolveOpenName.useEffect(() => {
        const obj = { resolveOpenName, resolveClosedName, onCoveringChange };
        ref.current = obj;
      }, items);
      const report = resolveOpenName.useCallback((arg0, arg1) => {
        const current = ref.current;
        ({ resolveClosedName, onCoveringChange } = current);
        resolveOpenName = current.resolveOpenName;
        if (onCoveringChange != null) {
          onCoveringChange(arg0);
        }
        const tmp3 = react_nativeDefault;
        if (tmp3 != null) {
          const setScreenContext = tmp3.setScreenContext;
          const composeJankSurfaceName = getJankSurfaceName.composeJankSurfaceName;
          getJankSurfaceName;
          if (arg0) {
            resolveClosedName = resolveOpenName;
          }
          setScreenContext(composeJankSurfaceName(resolveClosedName), arg1);
        }
      }, []);
      let obj = position(closedAt[6]);
      const sharedValue = obj.useSharedValue(0);
      let obj2 = position(closedAt[6]);
      const fn = function p() {
        return position.get();
      };
      fn.__closure = { position };
      fn.__workletHash = 4424338084843;
      fn.__initData = sharedValue;
      const fn2 = function _(arg0) {
        let num = 1;
        if (!(openAt < closedAt ? arg0 <= openAt : arg0 >= openAt)) {
          let num2 = 3;
          if (openAt < closedAt ? arg0 >= closedAt : arg0 <= closedAt) {
            num2 = 2;
          }
          num = num2;
        }
        const value = sharedValue.get();
        if (num !== value) {
          const result = sharedValue.set(num);
          if (1 === num) {
            const obj4 = ReanimatedRexport;
            obj4.runOnJS(callback)(true, React3);
          } else if (2 === num) {
            const obj3 = ReanimatedRexport;
            obj3.runOnJS(callback)(false, React3);
          } else if (1 === value) {
            const obj2 = ReanimatedRexport;
            obj2.runOnJS(callback)(false, hasOwnProperty);
          } else if (2 === value) {
            const obj5 = ReanimatedRexport;
            obj5.runOnJS(callback)(true, hasOwnProperty);
          }
        }
      };
      let obj3 = {
        openAt,
        closedAt,
        OPEN_SETTLED: 1,
        CLOSED_SETTLED: 2,
        MOVING: 3,
        lastState: sharedValue,
        runOnJS: position(closedAt[6]).runOnJS,
        report,
        INTERACTION_NONE: resolveClosedName,
        INTERACTION_TRANSITION: onCoveringChange,
      };
      fn2.__closure = obj3;
      fn2.__workletHash = 13786531289489;
      fn2.__initData = __initData2;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      return null;
    };
let result = size.fileFinishedImporting("modules/jank_stats/native/JankSlidingSurfaceReporter.native.tsx");

export default tmp3;
