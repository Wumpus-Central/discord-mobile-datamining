// === Module 1034: triggerHandlers ===

// Module 1034 (triggerHandlers)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 1035 */;

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
        if (__SENTRY_DEBUG__.DEBUG_BUILD) {
          const debug = registerSpanErrorInstrumentation.debug;
          debug.error(tmp2 + tmp6 + tmp3 + registerSpanErrorInstrumentation.getFunctionName(tmp7) + tmp4, tmp17);
          const tmp18Result = registerSpanErrorInstrumentation;
        }
      }
    }
    const nextResult = iter.next();
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_6 = {};
let closure_7 = {};
arg5.addClsInstrumentationHandler = function addClsInstrumentationHandler(fn, arg1) {
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
    let obj = cls(1036);
    tmp5.cls = true;
    const onCLSResult = obj.onCLS((metric) => {
      callback("cls", { metric });
      closure_2 = metric;
    }, { reportAllChanges: true });
  }
  if (closure_2) {
    obj = { metric: null };
    obj[0] = tmp;
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
    if (closure_2) {
      tmp();
    }
    if (closure_1_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
arg5.addInpInstrumentationHandler = function addInpInstrumentationHandler(_onInp) {
  closure_6.inp = closure_6.inp || [];
  let inp = closure_6.inp;
  inp.push(_onInp);
  if (!closure_7.inp) {
    let obj = inp(1055);
    obj.onINP((metric) => {
      callback("inp", { metric });
      closure_5 = metric;
    });
    tmp5.inp = true;
  }
  if (closure_5) {
    obj = { metric: null };
    obj[0] = closure_5;
    _onInp(obj);
  }
  inp = "inp";
  dependencyMap = _onInp;
  return () => {
    if (closure_2) {
      tmp();
    }
    if (closure_1_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
arg5.addLcpInstrumentationHandler = function addLcpInstrumentationHandler(fn, arg1) {
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
    let obj = lcp(1051);
    tmp5.lcp = true;
    const onLCPResult = obj.onLCP((metric) => {
      callback("lcp", { metric });
      closure_3 = metric;
    }, { reportAllChanges: true });
  }
  if (closure_3) {
    obj = { metric: null };
    obj[0] = closure_3;
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
    if (closure_2) {
      tmp();
    }
    if (closure_1_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
arg5.addPerformanceInstrumentationHandler = function addPerformanceInstrumentationHandler(event, handleEntries) {
  closure_6[event] = closure_6[event] || [];
  let arr = closure_6[event];
  arr = arr.push(handleEntries);
  if (!closure_7[event]) {
    let _require = event;
    const obj = {};
    if ("event" === event) {
      obj.durationThreshold = 0;
    }
    _require(1046).observe(event, (entries) => {
      triggerHandlers(closure_0, { entries });
    }, obj);
    tmp4[event] = true;
    const obj2 = _require(1046);
  }
  _require = event;
  dependencyMap = handleEntries;
  return () => {
    if (closure_2) {
      tmp();
    }
    if (closure_1_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
arg5.addTtfbInstrumentationHandler = function addTtfbInstrumentationHandler(fn) {
  closure_6.ttfb = closure_6.ttfb || [];
  let ttfb = closure_6.ttfb;
  ttfb.push(fn);
  if (!closure_7.ttfb) {
    let obj = ttfb(1054);
    obj.onTTFB((metric) => {
      callback("ttfb", { metric });
      closure_4 = metric;
    });
    tmp5.ttfb = true;
  }
  if (closure_4) {
    obj = { metric: null };
    obj[0] = closure_4;
    fn(obj);
  }
  ttfb = "ttfb";
  dependencyMap = fn;
  return () => {
    if (closure_2) {
      tmp();
    }
    if (closure_1_6[ttfb]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
};
arg5.isPerformanceEventTiming = function isPerformanceEventTiming(item) {
  return "duration" in item;
};