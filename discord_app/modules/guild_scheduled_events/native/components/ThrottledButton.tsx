// discord_app/modules/guild_scheduled_events/native/components/ThrottledButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = ["onPress", "onPressIn", "onPressOut", "throttleMs"];
const jsx = Fragment.jsx;
let c6 = 500;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp = arg0;
      const obj = react2;
      const cResult = obj.c(4);
      if (undefined === arg0) {
        tmp = c6;
      }
      let closure_0 = tmp;
      let closure_1 = react.useRef(null);
      if (cResult[0] !== tmp) {
        const fn = function t(arg0) {
          let ref;
          closure_0 = arg0;
          return (arg0) => {
            const tmp2 = null != closure_0 && null === ref.current;
            if (tmp2) {
              closure_0(arg0);
              const _setTimeout = setTimeout;
              ref.current = setTimeout(() => {
                ref.current = null;
              }, closure_0);
            }
          };
        };
        cResult[0] = tmp;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f() {
          let ref;
          return () => clearTimeout(ref.current);
        };
        const items = [];
        cResult[2] = fn2;
        cResult[3] = items;
        tmp5 = items;
        tmp4 = fn2;
      } else {
        tmp4 = cResult[2];
        tmp5 = cResult[3];
      }
      const effect = react.useEffect(tmp4, tmp5);
      return tmp3;
    }
  : () => {
      let num = arg0;
      if (arg0 === undefined) {
        num = 500;
      }
      let closure_1 = react.useRef(null);
      const effect = react.useEffect(() => {
        let ref;
        return () => clearTimeout(ref.current);
      }, []);
      return (arg0) => {
        let ref;
        let closure_0 = arg0;
        return (arg0) => {
          const tmp2 = null != closure_0 && null === ref.current;
          if (tmp2) {
            closure_0(arg0);
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              ref.current = null;
            }, num);
          }
        };
      };
    };
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let onPress;
      let onPressIn;
      let onPressOut;
      let throttleMs;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(20);
      if (cResult[0] !== arg0) {
        ({ onPress, onPressIn, onPressOut, throttleMs } = arg0);
        const tmp11 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = onPress;
        cResult[2] = onPressIn;
        cResult[3] = onPressOut;
        cResult[4] = tmp11;
        cResult[5] = throttleMs;
        tmp8 = throttleMs;
        tmp7 = tmp11;
        tmp6 = onPressOut;
        tmp5 = onPressIn;
        tmp4 = onPress;
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
        let tmp14;
        if (cResult[7] === tmp4) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp12Result) {
          let tmp16;
          if (cResult[10] === tmp5) {
            tmp16 = cResult[11];
          }
          if (cResult[12] === tmp12Result) {
            let tmp18;
            if (cResult[13] === tmp6) {
              tmp18 = cResult[14];
            }
            if (cResult[15] === tmp7) {
              if (cResult[16] === tmp14) {
                if (cResult[17] === tmp16) {
                  let tmp20;
                  if (cResult[18] === tmp18) {
                    tmp20 = cResult[19];
                  }
                  return tmp20;
                }
              }
            }
            const Button = components_Button_Button.Button;
            const merged = Object.assign(tmp7);
            const tmp25 = <Button onPress={tmp14} onPressIn={tmp16} onPressOut={tmp18} />;
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
    }
  : (throttleMs) => {
      let onPress;
      let onPressIn;
      let onPressOut;
      let num = throttleMs.throttleMs;
      ({ onPress, onPressIn, onPressOut } = throttleMs);
      if (num === undefined) {
        num = 500;
      }
      const merged = Object.assign(
        throttleMs,
        Object.assign({ onPress: 0, onPressIn: 0, onPressOut: 0, throttleMs: 0 }),
      );
      const tmp2 = closure_7(num);
      const Button = components_Button_Button.Button;
      const merged1 = Object.assign(merged);
      return <Button onPress={tmp2(onPress)} onPressIn={tmp2(onPressIn)} onPressOut={tmp2(onPressOut)} />;
    };
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/ThrottledButton.tsx");

export default tmp3;
export const useThrottledActionHandler = tmp2;
