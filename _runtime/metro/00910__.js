// === Module 910: ? ===

// Module 910
import _mod693 from "module_693" /* 693 */;
import _mod911 from "module_911" /* 911 */;

const require = globalThis.__r;
let _require, dependencyMap, metric;

function triggerHandlers(arg0, arg1) {
  let length;
  if (closure_6[arg0] != null) {
    length = arr.length;
  }
  if (length) {
    const iter = closure_6[arg0][Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      try {
        nextResult(arg1);
      } catch (tmp10) {
        if (_mod911.DEBUG_BUILD) {
          const debug = _mod693.debug;
          const error = debug.error;
          const _HermesInternal = HermesInternal;
          const tmp11Result = _mod693;
          error("Error while triggering instrumentation handler.\nType: " + arg0 + "\nName: " + tmp11Result.getFunctionName(nextResult) + "\nError:", tmp10);
        }
      }
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_6 = {};
let closure_7 = {};

export const addClsInstrumentationHandler = function addClsInstrumentationHandler(fn, arg1) {
  let onCLSResult;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag === undefined) {
    flag = false;
  }
  const tmp3 = closure_6.cls || [];
  closure_6.cls = tmp3;
  let cls = closure_6.cls;
  cls.push(fn);
  if (!closure_7.cls) {
    let obj = cls(912);
    tmp5.cls = true;
    onCLSResult = obj.onCLS((metric) => {
      const obj = { metric };
      triggerHandlers("cls", obj);
      let closure_2 = metric;
    }, { reportAllChanges: true });
  }
  if (metric) {
    const obj2 = { metric };
    fn(obj2);
  }
  let tmp10;
  if (flag) {
    tmp10 = onCLSResult;
  }
  cls = "cls";
  dependencyMap = fn;
  metric = tmp10;
  return () => {
    if (metric) {
      tmp();
    }
    if (closure_6[ttfb]) {
      const index = arr.indexOf(fn);
      if (-1 !== index) {
        closure_6[ttfb].splice(index, 1);
      }
    }
  };
};
export const addInpInstrumentationHandler = function addInpInstrumentationHandler(_onInp) {
  const tmp3 = closure_6.inp || [];
  closure_6.inp = tmp3;
  let inp = closure_6.inp;
  inp.push(_onInp);
  if (!closure_7.inp) {
    let obj = inp(931);
    obj.onINP((metric) => {
      const obj = { metric };
      triggerHandlers("inp", obj);
      let closure_1_5 = metric;
    });
    tmp5.inp = true;
  }
  if (metric3) {
    const obj2 = { metric: metric3 };
    _onInp(obj2);
  }
  inp = "inp";
  dependencyMap = _onInp;
  return () => {
    if (metric) {
      tmp();
    }
    if (closure_6[ttfb]) {
      const index = arr.indexOf(fn);
      if (-1 !== index) {
        closure_6[ttfb].splice(index, 1);
      }
    }
  };
};
export const addLcpInstrumentationHandler = function addLcpInstrumentationHandler(fn, arg1) {
  let onLCPResult;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag === undefined) {
    flag = false;
  }
  const tmp3 = closure_6.lcp || [];
  closure_6.lcp = tmp3;
  let lcp = closure_6.lcp;
  lcp.push(fn);
  if (!closure_7.lcp) {
    let obj = lcp(927);
    tmp5.lcp = true;
    onLCPResult = obj.onLCP((metric) => {
      const obj = { metric };
      triggerHandlers("lcp", obj);
      let closure_1_3 = metric;
    }, { reportAllChanges: true });
  }
  if (metric) {
    const obj2 = { metric };
    fn(obj2);
  }
  let tmp10;
  if (flag) {
    tmp10 = onLCPResult;
  }
  lcp = "lcp";
  dependencyMap = fn;
  let closure_2 = tmp10;
  return () => {
    if (metric) {
      tmp();
    }
    if (closure_6[ttfb]) {
      const index = arr.indexOf(fn);
      if (-1 !== index) {
        closure_6[ttfb].splice(index, 1);
      }
    }
  };
};
export const addPerformanceInstrumentationHandler = function addPerformanceInstrumentationHandler(event, handleEntries) {
  const tmp2 = closure_6[event] || [];
  closure_6[event] = tmp2;
  const arr = closure_6[event];
  arr.push(handleEntries);
  if (!closure_7[event]) {
    _require = event;
    let obj = {};
    if ("event" === event) {
      obj.durationThreshold = 0;
    }
    const obj2 = require("observe");
    obj2.observe(event, (entries) => {
      const obj = { entries };
      triggerHandlers(event, obj);
    }, obj);
    tmp4[event] = true;
  }
  _require = event;
  let closure_1 = handleEntries;
  return () => {
    if (metric) {
      tmp();
    }
    if (closure_6[ttfb]) {
      const index = arr.indexOf(fn);
      if (-1 !== index) {
        closure_6[ttfb].splice(index, 1);
      }
    }
  };
};
export const addTtfbInstrumentationHandler = function addTtfbInstrumentationHandler(fn) {
  const tmp3 = closure_6.ttfb || [];
  closure_6.ttfb = tmp3;
  let ttfb = closure_6.ttfb;
  const arr = ttfb.push(fn);
  if (!closure_7.ttfb) {
    let obj = ttfb(930);
    obj.onTTFB((metric) => {
      const obj = { metric };
      triggerHandlers("ttfb", obj);
      let closure_1_4 = metric;
    });
    tmp5.ttfb = true;
  }
  if (metric2) {
    const obj2 = { metric: metric2 };
    fn(obj2);
  }
  ttfb = "ttfb";
  dependencyMap = fn;
  return () => {
    if (metric) {
      tmp();
    }
    if (closure_6[ttfb]) {
      const index = arr.indexOf(fn);
      if (-1 !== index) {
        closure_6[ttfb].splice(index, 1);
      }
    }
  };
};
export const isPerformanceEventTiming = function isPerformanceEventTiming(interactionId) {
  return "duration" in interactionId;
};