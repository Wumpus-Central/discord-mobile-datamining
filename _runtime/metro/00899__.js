// === Module 899: ? ===

// Module 899
import _mod682 from "module_682" /* 682 */;
import _mod900 from "module_900" /* 900 */;

const require = globalThis.__r;

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
    const obj = cls(901);
    tmp5.cls = true;
    const onCLSResult = cls(901).onCLS((metric) => {
      triggerHandlers("cls", { metric });
      closure_2 = metric;
    }, { reportAllChanges: true });
  }
  if (closure_2) {
    const obj2 = { metric: tmp };
    fn(obj2);
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
    inp(920).onINP((metric) => {
      triggerHandlers("inp", { metric });
      closure_5 = metric;
    });
    tmp5.inp = true;
    const obj = inp(920);
  }
  if (metric3) {
    const obj2 = { metric: metric3 };
    _onInp(obj2);
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
    const obj = lcp(916);
    tmp5.lcp = true;
    const onLCPResult = lcp(916).onLCP((metric) => {
      triggerHandlers("lcp", { metric });
      closure_3 = metric;
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
  closure_6[event].push(handleEntries);
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
    ttfb(919).onTTFB((metric) => {
      triggerHandlers("ttfb", { metric });
      closure_4 = metric;
    });
    tmp5.ttfb = true;
    const obj = ttfb(919);
  }
  if (metric2) {
    const obj2 = { metric: metric2 };
    fn(obj2);
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