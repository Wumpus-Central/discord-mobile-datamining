// discord_app/modules/icymi/useICYMIEmptyLoadingAnalytics.tsx
import ICYMIAnalytics3 from "ICYMIAnalytics.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/useICYMIEmptyLoadingAnalytics.tsx");

export const useICYMIEmptyLoadingAnalytics = function useICYMIEmptyLoadingAnalytics(loading, isFocused) {
  closure_0 = loading;
  closure_1 = isFocused;
  noop = noop.useRef(null);
  const items = [loading, isFocused];
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
  const items1 = [isFocused];
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
};
