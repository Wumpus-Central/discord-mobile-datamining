// === Module 16041: useICYMIEmptyLoadingAnalytics ===

// Module 16041 (useICYMIEmptyLoadingAnalytics)
import closure_2 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/icymi/useICYMIEmptyLoadingAnalytics.tsx");

export const useICYMIEmptyLoadingAnalytics = function useICYMIEmptyLoadingAnalytics(loading, isFocused) {
  closure_0 = loading;
  closure_1 = isFocused;
  React = React.useRef(null);
  const items = [loading, isFocused];
  const effect = React.useEffect(() => {
    if (isFocused) {
      if (loading) {
        const _Date = Date;
        tmp2.current = Date.now();
        const ICYMIAnalytics = loading(isFocused[1]).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedEmptyLoadingSeen();
      } else if (null != tmp2.current) {
        const _Date2 = Date;
        const diff = Date.now() - tmp2.current;
        const ICYMIAnalytics2 = loading(isFocused[1]).ICYMIAnalytics;
        const obj = { dwellTimeMs: null };
        obj[0] = diff;
        const result1 = ICYMIAnalytics2.trackFeedEmptyLoadingComplete(obj);
        tmp2.current = null;
      }
    }
  }, items);
  const items1 = [isFocused];
  const effect1 = React.useEffect(() => {
    if (!isFocused) {
      if (null != ref.current) {
        const _Date = Date;
        const diff = Date.now() - tmp.current;
        const ICYMIAnalytics = loading(isFocused[1]).ICYMIAnalytics;
        const obj = { dwellTimeMs: null };
        obj[0] = diff;
        const result = ICYMIAnalytics.trackFeedEmptyLoadingAbandoned(obj);
        tmp.current = null;
      }
    }
  }, items1);
};