// === Module 8464: APNGPlayer ===

// Module 8464 (APNGPlayer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, onLoad;

let closure_3 = ["onLoad"];
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(2);
  let closure_1 = react.useRef(false);
  if (cResult[0] !== arg0) {
    const obj2 = {
      play() {
          const current = null == closure_0.current || ref.current;
          if (!current) {
            const current2 = closure_0.current;
            current2.play();
            ref.current = true;
          }
        },
      pause() {
          const current = null != closure_0.current && ref.current;
          if (current) {
            const current2 = closure_0.current;
            current2.pause();
            ref.current = false;
          }
        },
      stop() {
          const current = null != closure_0.current && ref.current;
          if (current) {
            const current2 = closure_0.current;
            current2.stop();
            ref.current = false;
          }
        },
      seek(arg0) {
          if (null != closure_0.current) {
            const current = tmp.current;
            current.seek(arg0);
          }
        }
    };
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  let closure_0 = arg0;
  let closure_1 = react.useRef(false);
  const items = [arg0];
  return react.useMemo(() => {
    let ref;
    return {
      play() {
        const current = null == closure_1_0.current || ref.current;
        if (!current) {
          const current2 = closure_1_0.current;
          current2.play();
          ref.current = true;
        }
      },
      pause() {
        const current = null != closure_1_0.current && ref.current;
        if (current) {
          const current2 = closure_1_0.current;
          current2.pause();
          ref.current = false;
        }
      },
      stop() {
        const current = null != closure_1_0.current && ref.current;
        if (current) {
          const current2 = closure_1_0.current;
          current2.stop();
          ref.current = false;
        }
      },
      seek(arg0) {
        if (null != closure_1_0.current) {
          const current = tmp.current;
          current.seek(arg0);
        }
      }
    };
  }, items);
});
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((onLoad, arg1) => {
  let closure_0;
  let tmp10;
  let tmp4;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] !== onLoad) {
    onLoad = onLoad.onLoad;
    _require = onLoad;
    const tmp7 = _objectWithoutProperties(onLoad, closure_3);
    cResult[0] = onLoad;
    cResult[1] = onLoad;
    cResult[2] = tmp7;
    tmp4 = tmp7;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
  }
  const ref = react.useRef(null);
  if (cResult[3] !== tmp3) {
    const fn = function v(nativeEvent) {
      if (closure_0 != null) {
        tmp(nativeEvent.nativeEvent.url);
      }
    };
    cResult[3] = tmp3;
    cResult[4] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      return {
        play() {
          if (null != ref.current) {
            const Commands = closure_0(dependencyMap[5]).Commands;
            Commands.play(tmp.current);
          }
        },
        pause() {
          if (null != ref.current) {
            const Commands = closure_0(dependencyMap[5]).Commands;
            Commands.pause(tmp.current);
          }
        },
        stop() {
          if (null != ref.current) {
            const Commands = closure_0(dependencyMap[5]).Commands;
            Commands.seek(ref.current, 0);
            const Commands2 = closure_0(dependencyMap[5]).Commands;
            Commands2.pause(ref.current);
          }
        },
        seek(arg0) {
          if (null != ref.current) {
            const Commands = closure_0(dependencyMap[5]).Commands;
            Commands.seek(tmp.current, arg0);
          }
        }
      };
    };
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const imperativeHandle = react.useImperativeHandle(arg1, tmp10);
  if (cResult[6] === tmp9) {
    let tmp12;
    if (cResult[7] === tmp4) {
      tmp12 = cResult[8];
    }
    return tmp12;
  }
  ref(8465);
  const merged = Object.assign(tmp4);
  const tmp15 = <tmp13 ref={ref} onLoad={tmp9} />;
  cResult[6] = tmp9;
  cResult[7] = tmp4;
  cResult[8] = tmp15;
  tmp12 = tmp15;
}) : ((onLoad, arg1) => {
  onLoad = onLoad.onLoad;
  const merged = Object.assign(onLoad, Object.assign({ onLoad: 0 }));
  const ref = react.useRef(null);
  const items = [onLoad];
  const callback = react.useCallback((nativeEvent) => {
    if (onLoad != null) {
      tmp(nativeEvent.nativeEvent.url);
    }
  }, items);
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({
    play() {
      if (null != ref.current) {
        const Commands = onLoad(dependencyMap[5]).Commands;
        Commands.play(tmp.current);
      }
    },
    pause() {
      if (null != ref.current) {
        const Commands = onLoad(dependencyMap[5]).Commands;
        Commands.pause(tmp.current);
      }
    },
    stop() {
      if (null != ref.current) {
        const Commands = onLoad(dependencyMap[5]).Commands;
        Commands.seek(ref.current, 0);
        const Commands2 = onLoad(dependencyMap[5]).Commands;
        Commands2.pause(ref.current);
      }
    },
    seek(arg0) {
      if (null != ref.current) {
        const Commands = onLoad(dependencyMap[5]).Commands;
        Commands.seek(tmp.current, arg0);
      }
    }
  }));
  ref(8465);
  const merged1 = Object.assign(merged);
  return <tmp5 ref={ref} onLoad={callback} />;
}));
const result = size.fileFinishedImporting("modules/image/native/APNGPlayer.android.tsx");

export const useAPNGPlayerControls = tmp3;
export const APNGPlayer = forwardRefResult;