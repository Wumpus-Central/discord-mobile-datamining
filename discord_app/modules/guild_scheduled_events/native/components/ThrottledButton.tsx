// === Module 8757: ThrottledButton ===

// Module 8757 (ThrottledButton)
import c from "c" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["onPress", "onPressIn", "onPressOut", "throttleMs"];
const jsx = fn(21).jsx;
let c6 = 500;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useThrottledActionHandler(arg0) {
  let tmp = arg0;
  const cResult = c.c(4);
  if (undefined === arg0) {
    tmp = c6;
  }
  closure_0 = tmp;
  closure_1 = noop.useRef(null);
  if (cResult[0] !== tmp) {
    function createThrottleActionHandler(arg0) {
      closure_0 = arg0;
      return (arg0) => {
        let tmp2 = null != closure_0;
        if (tmp2) {
          tmp2 = null === ref.current;
        }
        if (tmp2) {
          closure_0(arg0);
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            ref.current = null;
          }, closure_0);
        }
      };
    }
    cResult[0] = tmp;
    cResult[1] = createThrottleActionHandler;
    let tmp3 = createThrottleActionHandler;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f() {
      return () => clearTimeout(ref.current);
    };
    const items = [];
    cResult[2] = fn;
    cResult[3] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  return tmp3;
}) : (function useThrottledActionHandler() {
  closure_1 = noop.useRef(null);
  const effect = noop.useEffect(() => () => clearTimeout(ref.current), []);
  return function createThrottleActionHandler(arg0) {
    closure_0 = arg0;
    return (arg0) => {
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = null === ref.current;
      }
      if (tmp2) {
        closure_0(arg0);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          ref.current = null;
        }, num);
      }
    };
  };
});
let closure_7 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/ThrottledButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ThrottledButton(arg0) {
  const cResult = c.c(20);
  if (cResult[0] !== arg0) {
    ({ onPress, onPressIn, onPressOut, throttleMs } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = onPress;
    cResult[2] = onPressIn;
    cResult[3] = onPressOut;
    cResult[4] = tmp11;
    cResult[5] = throttleMs;
    let tmp8 = throttleMs;
    let tmp7 = tmp11;
    let tmp6 = onPressOut;
    let tmp5 = onPressIn;
    let tmp4 = onPress;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (undefined === tmp8) {
    tmp8 = c6;
  }
  const tmp12Result = closure_7(tmp8);
  if (cResult[6] === tmp12Result) {
    if (cResult[7] === tmp4) {
      let tmp14 = cResult[8];
    }
    if (cResult[9] === tmp12Result) {
      if (cResult[10] === tmp5) {
        let tmp16 = cResult[11];
      }
      if (cResult[12] === tmp12Result) {
        if (cResult[13] === tmp6) {
          let tmp18 = cResult[14];
        }
        if (cResult[15] === tmp7) {
          if (cResult[16] === tmp14) {
            if (cResult[17] === tmp16) {
              if (cResult[18] === tmp18) {
                let tmp20 = cResult[19];
              }
              return tmp20;
            }
          }
        }
        const obj2 = {};
        const merged = Object.assign(tmp7);
        obj2.onPress = tmp14;
        obj2.onPressIn = tmp16;
        obj2.onPressOut = tmp18;
        const tmp25 = jsx(components_Button_Button.Button, {});
        cResult[15] = tmp7;
        cResult[16] = tmp14;
        cResult[17] = tmp16;
        cResult[18] = tmp18;
        cResult[19] = tmp25;
        tmp20 = tmp25;
      }
      const tmp12ResultResult = tmp12Result(tmp6);
      cResult[12] = tmp12Result;
      cResult[13] = tmp6;
      cResult[14] = tmp12ResultResult;
      tmp18 = tmp12ResultResult;
    }
    const tmp12ResultResult1 = tmp12Result(tmp5);
    cResult[9] = tmp12Result;
    cResult[10] = tmp5;
    cResult[11] = tmp12ResultResult1;
    tmp16 = tmp12ResultResult1;
  }
  const tmp12ResultResult2 = tmp12Result(tmp4);
  cResult[6] = tmp12Result;
  cResult[7] = tmp4;
  cResult[8] = tmp12ResultResult2;
  tmp14 = tmp12ResultResult2;
}) : (function ThrottledButton(throttleMs) {
  let num = throttleMs.throttleMs;
  ({ onPress, onPressIn, onPressOut } = throttleMs);
  if (num === undefined) {
    num = 500;
  }
  const merged = Object.assign(throttleMs, Object.assign({ onPress: 0, onPressIn: 0, onPressOut: 0, throttleMs: 0 }));
  const tmp2 = closure_7(num);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onPress = tmp2(onPress);
  obj.onPressIn = tmp2(onPressIn);
  obj.onPressOut = tmp2(onPressOut);
  return jsx(components_Button_Button.Button, {});
});
export const useThrottledActionHandler = tmp2;