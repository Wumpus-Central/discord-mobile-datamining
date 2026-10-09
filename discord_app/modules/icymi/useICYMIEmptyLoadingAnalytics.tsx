// === Module 16858: useICYMIEmptyLoadingAnalytics ===

// Module 16858 (useICYMIEmptyLoadingAnalytics)
import ICYMIAnalytics3 from "ICYMIAnalytics" /* 14578 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/useICYMIEmptyLoadingAnalytics.tsx");

export const useICYMIEmptyLoadingAnalytics = ReactCompilerGating.isReactCompilerEnabled() ? (function useICYMIEmptyLoadingAnalytics(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(7);
  noop = noop.useRef(null);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const effect = obj2.useEffect(tmp2, tmp3);
    if (cResult[4] !== arg1) {
      const fn2 = function s() {
        if (!closure_1) {
          if (null != ref.current) {
            const _Date = Date;
            const diff = Date.now() - ref.current;
            const ICYMIAnalytics = ICYMIAnalytics3.ICYMIAnalytics;
            const obj = { dwellTimeMs: diff };
            const result = ICYMIAnalytics.trackFeedEmptyLoadingAbandoned(obj);
            ref.current = null;
          }
        }
      };
      const items = [arg1];
      cResult[4] = arg1;
      cResult[5] = fn2;
      cResult[6] = items;
      let tmp6 = items;
      let tmp5 = fn2;
    } else {
      tmp5 = cResult[5];
      tmp6 = cResult[6];
    }
    const effect1 = obj2.useEffect(tmp5, tmp6);
  }
  const fn = function c() {
    if (closure_1) {
      if (closure_0) {
        const _Date = Date;
        ref.current = Date.now();
        const ICYMIAnalytics = ICYMIAnalytics3.ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedEmptyLoadingSeen();
      } else if (null != ref.current) {
        const _Date2 = Date;
        const diff = Date.now() - ref.current;
        const ICYMIAnalytics2 = ICYMIAnalytics3.ICYMIAnalytics;
        const obj = { dwellTimeMs: diff };
        const result1 = ICYMIAnalytics2.trackFeedEmptyLoadingComplete(obj);
        ref.current = null;
      }
    }
  };
  const items1 = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp3 = items1;
  tmp2 = fn;
}) : (function useICYMIEmptyLoadingAnalytics(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  noop = noop.useRef(null);
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      if (closure_0) {
        const _Date = Date;
        ref.current = Date.now();
        const ICYMIAnalytics = ICYMIAnalytics3.ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedEmptyLoadingSeen();
      } else if (null != ref.current) {
        const _Date2 = Date;
        const diff = Date.now() - ref.current;
        const ICYMIAnalytics2 = ICYMIAnalytics3.ICYMIAnalytics;
        const obj = { dwellTimeMs: diff };
        const result1 = ICYMIAnalytics2.trackFeedEmptyLoadingComplete(obj);
        ref.current = null;
      }
    }
  }, items);
  const items1 = [arg1];
  const effect1 = noop.useEffect(() => {
    if (!closure_1) {
      if (null != ref.current) {
        const _Date = Date;
        const diff = Date.now() - ref.current;
        const ICYMIAnalytics = ICYMIAnalytics3.ICYMIAnalytics;
        const obj = { dwellTimeMs: diff };
        const result = ICYMIAnalytics.trackFeedEmptyLoadingAbandoned(obj);
        ref.current = null;
      }
    }
  }, items1);
});