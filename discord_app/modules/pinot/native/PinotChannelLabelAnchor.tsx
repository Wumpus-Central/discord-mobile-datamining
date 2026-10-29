// === Module 11078: PinotChannelLabelAnchor ===

// Module 11078 (PinotChannelLabelAnchor)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const module_570 = fn(570);
let closure_4 = module_570.create(() => ({ labels: {} }));
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotChannelLabelAnchor(arg0) {
  _require = arg0;
  const cResult = require("c").c(7);
  dependencyMap = noop.useRef(null);
  if (cResult[0] !== arg0) {
    const fn = function t() {
      state.setState((labels) => {
        labels = labels.labels;
        const current = ref.current;
        let num;
        if (labels[closure_1_0] != null) {
          num = tmp2.layoutVersion;
        }
        if (num == null) {
          num = 0;
        }
        const labels2 = {};
        const sum = num + 1;
        const merged = Object.assign(labels);
        let tmp5;
        if (null != current) {
          const obj = { view: current, layoutVersion: sum };
          tmp5 = obj;
        }
        labels2[closure_1_0] = tmp5;
        return { labels: labels2 };
      });
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  closure_2 = tmp2;
  if (cResult[2] !== tmp2) {
    const fn2 = function c(current) {
      closure_1.current = current;
      closure_2();
    };
    cResult[2] = tmp2;
    cResult[3] = fn2;
    let tmp3 = fn2;
  } else {
    tmp3 = cResult[3];
  }
  if (cResult[4] === tmp2) {
    if (cResult[5] === tmp3) {
      let tmp4 = cResult[6];
    }
    return tmp4;
  }
  const obj2 = { ref: tmp3, onLayout: tmp2 };
  cResult[4] = tmp2;
  cResult[5] = tmp3;
  cResult[6] = obj2;
  tmp4 = obj2;
}) : (function usePinotChannelLabelAnchor(arg0) {
  closure_0 = arg0;
  closure_1 = noop.useRef(null);
  const items = [arg0];
  const onLayout = noop.useCallback(() => {
    state.setState((labels) => {
      labels = labels.labels;
      const current = ref.current;
      let num;
      if (labels[closure_1_0] != null) {
        num = tmp2.layoutVersion;
      }
      if (num == null) {
        num = 0;
      }
      const labels2 = {};
      const sum = num + 1;
      const merged = Object.assign(labels);
      let tmp5;
      if (null != current) {
        const obj = { view: current, layoutVersion: sum };
        tmp5 = obj;
      }
      labels2[closure_1_0] = tmp5;
      return { labels: labels2 };
    });
  }, items);
  let obj = { ref: null, onLayout };
  const items1 = [onLayout];
  obj.ref = noop.useCallback((current) => {
    closure_1.current = current;
    callback();
  }, items1);
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabelAnchor.tsx");

export const usePinotChannelLabelAnchor = tmp2;
export const usePinotChannelLabelCenter = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotChannelLabelCenter(arg0, arg1) {
  closure_0 = arg0;
  const cResult = c.c(13);
  if (cResult[0] !== arg0) {
    const fn = function s(arg0) {
      let tmp = arg0.labels[closure_0];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = closure_4(tmp2);
  closure_2 = tmp3;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b(arg0) {
      return arg0 + 1;
    };
    cResult[2] = fn2;
    let tmp4 = fn2;
  } else {
    tmp4 = cResult[2];
  }
  const tmp5 = _slicedToArray(noop.useReducer(tmp4, 0), 2);
  const first = tmp5[0];
  [tmp8, noop] = noop.useState(null);
  if (cResult[3] === arg1) {
    if (cResult[4] === tmp3) {
      let tmp9 = cResult[5];
    }
    if (cResult[6] === first) {
      if (cResult[7] === arg1) {
        if (cResult[8] === tmp3) {
          let tmp10 = cResult[9];
        }
        const effect = noop.useEffect(tmp9, tmp10);
        let center = null;
        if (null != tmp3) {
          let label;
          if (tmp8 != null) {
            label = tmp8.label;
          }
          center = null;
          if (label === tmp3) {
            center = tmp8.center;
          }
        }
        if (cResult[10] === center) {
          if (cResult[11] === tmp14) {
            let tmp15 = cResult[12];
          }
          return tmp15;
        }
        const obj3 = { hasLabel: null != tmp3, center, onContainerLayout: tmp5[1] };
        cResult[10] = center;
        cResult[11] = null != tmp3;
        cResult[12] = obj3;
        tmp15 = obj3;
      }
    }
    const items = [tmp3, arg1, first];
    cResult[6] = first;
    cResult[7] = arg1;
    cResult[8] = tmp3;
    cResult[9] = items;
    tmp10 = items;
  }
  const fn3 = function f() {
    let current = ref.current;
    if (null != closure_2) {
      if (null != current) {
        const view = tmp.view;
        view.measureInWindow((arg0, arg1, arg2) => {
          current = arg0;
          closure_1 = arg2;
          let tmp = closure_1;
          if (!closure_1) {
            tmp = 0 === arg2;
          }
          if (!tmp) {
            current.measureInWindow((arg0) => {
              if (!c1) {
                const obj = { label, center: closure_0 - arg0 + closure_1 / 2 };
                noop(obj);
              }
            });
          }
        });
        return () => {
          c1 = true;
        };
      }
    }
  };
  cResult[3] = arg1;
  cResult[4] = tmp3;
  cResult[5] = fn3;
  tmp9 = fn3;
  const tmp7 = _slicedToArray(noop.useState(null), 2);
}) : (function usePinotChannelLabelCenter(arg0, arg1) {
  closure_0 = arg0;
  let tmp = closure_4((arg0) => {
    let tmp = arg0.labels[closure_0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  });
  closure_2 = tmp;
  [tmp3, tmp4] = noop.useReducer((arg0) => arg0 + 1, 0);
  const tmp2 = _slicedToArray(noop.useReducer((arg0) => arg0 + 1, 0), 2);
  [tmp6, noop] = noop.useState(null);
  const items = [tmp, arg1, tmp3];
  const effect = noop.useEffect(() => {
    let current = ref.current;
    if (null != closure_2) {
      if (null != current) {
        const view = tmp.view;
        view.measureInWindow((arg0, arg1, arg2) => {
          current = arg0;
          closure_1 = arg2;
          let tmp = closure_1;
          if (!closure_1) {
            tmp = 0 === arg2;
          }
          if (!tmp) {
            current.measureInWindow((arg0) => {
              if (!c1) {
                const obj = { label, center: closure_0 - arg0 + closure_1 / 2 };
                noop(obj);
              }
            });
          }
        });
        return () => {
          c1 = true;
        };
      }
    }
  }, items);
  let center = null;
  if (null != tmp) {
    let label;
    if (tmp6 != null) {
      label = tmp6.label;
    }
    center = null;
    if (label === tmp) {
      center = tmp6.center;
    }
  }
  return { hasLabel: null != tmp, center, onContainerLayout: tmp4 };
});