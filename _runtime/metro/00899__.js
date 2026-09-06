// === Module 899: ? ===

// Module 899
import _mod682 from "module_682" /* 682 */;
import _mod900 from "module_900" /* 900 */;

require = arg1;
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
        if (_mod900.DEBUG_BUILD) {
          const debug = _mod682.debug;
          debug.error(tmp2 + tmp6 + tmp3 + _mod682.getFunctionName(tmp7) + tmp4, tmp17);
          const tmp18Result = _mod682;
        }
      }
    }
    const nextResult = iter.next();
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_6 = {};
let closure_7 = {};

export const addClsInstrumentationHandler = function addClsInstrumentationHandler(fn, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag === undefined) {
    flag = false;
  }
  closure_6.cls = closure_6.cls || [];
  let cls = closure_6.cls;
  cls.push(fn);
  if (!closure_7.cls) {
    let obj = cls(901);
    tmp5.cls = true;
    const onCLSResult = obj.onCLS((metric) => {
      triggerHandlers("cls", { metric });
      closure_2 = metric;
    }, { reportAllChanges: true });
  }
  if (closure_2) {
    obj = { metric: tmp };
    fn(obj);
  }
  let tmp10;
  if (flag) {
    tmp10 = onCLSResult;
  }
  cls = "cls";
  dependencyMap = fn;
  closure_2 = tmp10;
  return () => {
    if (closure_1_2) {
      tmp();
    }
    if (closure_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
export const addInpInstrumentationHandler = function addInpInstrumentationHandler(_onInp) {
  closure_6.inp = closure_6.inp || [];
  let inp = closure_6.inp;
  inp.push(_onInp);
  if (!closure_7.inp) {
    let obj = inp(920);
    obj.onINP((metric) => {
      triggerHandlers("inp", { metric });
      closure_5 = metric;
    });
    tmp5.inp = true;
  }
  if (metric3) {
    obj = { metric: metric3 };
    _onInp(obj);
  }
  inp = "inp";
  dependencyMap = _onInp;
  return () => {
    if (closure_1_2) {
      tmp();
    }
    if (closure_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
export const addLcpInstrumentationHandler = function addLcpInstrumentationHandler(fn, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag === undefined) {
    flag = false;
  }
  closure_6.lcp = closure_6.lcp || [];
  let lcp = closure_6.lcp;
  lcp.push(fn);
  if (!closure_7.lcp) {
    let obj = lcp(916);
    tmp5.lcp = true;
    const onLCPResult = obj.onLCP((metric) => {
      triggerHandlers("lcp", { metric });
      closure_3 = metric;
    }, { reportAllChanges: true });
  }
  if (metric) {
    obj = { metric };
    fn(obj);
  }
  let tmp10;
  if (flag) {
    tmp10 = onLCPResult;
  }
  lcp = "lcp";
  dependencyMap = fn;
  closure_2 = tmp10;
  return () => {
    if (closure_1_2) {
      tmp();
    }
    if (closure_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
export const addPerformanceInstrumentationHandler = function addPerformanceInstrumentationHandler(event, handleEntries) {
  closure_6[event] = closure_6[event] || [];
  let arr = closure_6[event];
  arr = arr.push(handleEntries);
  if (!closure_7[event]) {
    _require = event;
    const obj = {};
    if ("event" === event) {
      obj.durationThreshold = 0;
    }
    require("observe").observe(event, (entries) => {
      triggerHandlers(closure_0, { entries });
    }, obj);
    tmp4[event] = true;
    const obj2 = require("observe");
  }
  closure_129_0 = event;
  closure_129_1 = handleEntries;
  return () => {
    if (closure_1_2) {
      tmp();
    }
    if (closure_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
export const addTtfbInstrumentationHandler = function addTtfbInstrumentationHandler(fn) {
  closure_6.ttfb = closure_6.ttfb || [];
  let ttfb = closure_6.ttfb;
  ttfb.push(fn);
  if (!closure_7.ttfb) {
    let obj = ttfb(919);
    obj.onTTFB((metric) => {
      triggerHandlers("ttfb", { metric });
      closure_4 = metric;
    });
    tmp5.ttfb = true;
  }
  if (metric2) {
    obj = { metric: metric2 };
    fn(obj);
  }
  ttfb = "ttfb";
  dependencyMap = fn;
  return () => {
    if (closure_1_2) {
      tmp();
    }
    if (closure_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
export const isPerformanceEventTiming = function isPerformanceEventTiming(interactionId) {
  return "duration" in interactionId;
};