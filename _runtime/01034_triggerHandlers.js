// _runtime/01034_triggerHandlers.js
import { observe } from "01046_observe.js";
import { __SENTRY_DEBUG__ } from "metro/01035___SENTRY_DEBUG__.js";
const require = arg1;
let dependencyMap = arg6;
function triggerHandlers(arg0, arg1) {
  let length;
  if (closure_6[arg0] != null) {
    length = arr.length;
  }
  if (length) {
    const iter = arr[Symbol.iterator]();
    if (iter !== undefined) {
      try {
        tmp14(arg1);
      } catch (tmp17) {
        if (__SENTRY_DEBUG__ /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
          const debug = tmp18(817).debug;
          debug.error(tmp2 + tmp6 + tmp3 + tmp18(817).getFunctionName(tmp7) + tmp4, tmp17);
          const tmp18Result = tmp18(817);
        }
      }
    }
    const nextResult = iter.next();
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_6 = {};
let closure_7 = {};
arg5.addClsInstrumentationHandler = function addClsInstrumentationHandler(arg0, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag === undefined) {
    flag = false;
  }
  closure_6.cls = closure_6.cls || [];
  let cls = tmp2.cls;
  cls.push(arg0);
  if (!closure_7.cls) {
    let obj = cls(1036);
    tmp5.cls = true;
    const onCLSResult = obj.onCLS((metric) => {
      callback("cls", { metric });
      let closure_2 = metric;
    }, { reportAllChanges: true });
  }
  if (closure_2) {
    obj = { metric: null };
    obj[0] = tmp;
    arg0(obj);
  }
  let tmp10;
  if (flag) {
    tmp10 = onCLSResult;
  }
  cls = "cls";
  const dependencyMap = arg0;
  closure_2 = tmp10;
  return () => {
    if (closure_2) {
      tmp();
    }
    if (outer1_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
arg5.addInpInstrumentationHandler = function addInpInstrumentationHandler(_onInp) {
  closure_6.inp = closure_6.inp || [];
  let inp = tmp2.inp;
  inp.push(_onInp);
  if (!closure_7.inp) {
    let obj = inp(1055);
    obj.onINP((metric) => {
      callback("inp", { metric });
      let closure_5 = metric;
    });
    tmp5.inp = true;
  }
  if (closure_5) {
    obj = { metric: null };
    obj[0] = tmp;
    _onInp(obj);
  }
  inp = "inp";
  const dependencyMap = _onInp;
  return () => {
    if (closure_2) {
      tmp();
    }
    if (outer1_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
arg5.addLcpInstrumentationHandler = function addLcpInstrumentationHandler(arg0, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag === undefined) {
    flag = false;
  }
  closure_6.lcp = closure_6.lcp || [];
  let lcp = tmp2.lcp;
  lcp.push(arg0);
  if (!closure_7.lcp) {
    let obj = lcp(1051);
    tmp5.lcp = true;
    const onLCPResult = obj.onLCP((metric) => {
      callback("lcp", { metric });
      let closure_3 = metric;
    }, { reportAllChanges: true });
  }
  if (closure_3) {
    obj = { metric: null };
    obj[0] = tmp;
    arg0(obj);
  }
  let tmp10;
  if (flag) {
    tmp10 = onLCPResult;
  }
  lcp = "lcp";
  const dependencyMap = arg0;
  let closure_2 = tmp10;
  return () => {
    if (closure_2) {
      tmp();
    }
    if (outer1_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
arg5.addPerformanceInstrumentationHandler = function addPerformanceInstrumentationHandler(event, handleEntries) {
  closure_6[event] = closure_6[event] || [];
  let arr = tmp[event];
  arr = arr.push(handleEntries);
  if (!closure_7[event]) {
    let _require = event;
    const obj = {};
    if ("event" === event) {
      obj.durationThreshold = 0;
    }
    _observe.observe(event, (entries) => {
      outer1_8(closure_0, { entries });
    }, obj);
    tmp4[event] = true;
    const obj2 = _observe;
  }
  _require = event;
  const dependencyMap = handleEntries;
  return () => {
    if (closure_2) {
      tmp();
    }
    if (outer1_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
arg5.addTtfbInstrumentationHandler = function addTtfbInstrumentationHandler(arg0) {
  closure_6.ttfb = closure_6.ttfb || [];
  let ttfb = tmp2.ttfb;
  ttfb.push(arg0);
  if (!closure_7.ttfb) {
    let obj = ttfb(1054);
    obj.onTTFB((metric) => {
      callback("ttfb", { metric });
      let closure_4 = metric;
    });
    tmp5.ttfb = true;
  }
  if (closure_4) {
    obj = { metric: null };
    obj[0] = tmp;
    arg0(obj);
  }
  ttfb = "ttfb";
  const dependencyMap = arg0;
  return () => {
    if (closure_2) {
      tmp();
    }
    if (outer1_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
arg5.isPerformanceEventTiming = function isPerformanceEventTiming(interactionId) {
  return "duration" in interactionId;
};