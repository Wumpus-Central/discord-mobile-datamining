// === Module 12934: useBuyNitroListData ===

// Module 12934 (useBuyNitroListData)
import closure_2 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroListData.tsx");

export default function useBuyNitroListData(selection) {
  selection = selection.selection;
  const setTier = selection.setTier;
  let analyticsLocations = setTier;
  dependencyMap = undefined;
  let React;
  const tmp = analyticsLocations(12935)(selection.tier);
  const ref = React.useRef(null);
  dependencyMap = ref;
  React = React.useRef(false);
  const items = [setTier];
  const items1 = [tmp];
  const callback = React.useCallback((c4) => {
    closure_2.current = true;
    analyticsLocations(c4);
  }, items);
  const effect = React.useEffect(() => {
    if (ref2.current) {
      tmp.current = false;
      const _requestAnimationFrame = requestAnimationFrame;
      closure_0 = requestAnimationFrame(() => {
        const current = ref.current;
        let scrollToTopResult;
        if (current != null) {
          scrollToTopResult = current.scrollToTop({ animated: true });
        }
        return scrollToTopResult;
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
  let obj = { onScroll: null, onSelectNitroTier: null, listData: null, listRef: null };
  analyticsLocations = undefined;
  dependencyMap = undefined;
  analyticsLocations = analyticsLocations(5905)().analyticsLocations;
  dependencyMap = React.useRef(false);
  obj[0] = function onScroll(nativeEvent) {
    const current = ref.current;
    let tmp4 = !current;
    if (!current) {
      tmp4 = nativeEvent.nativeEvent.layoutMeasurement.height + tmp.y >= tmp2.height;
    }
    if (tmp4) {
      let obj = analyticsLocations(ref[3]);
      obj = { location_stack: null };
      obj[0] = analyticsLocations;
      obj.track(closure_1_3.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
      ref.current = true;
    }
  };
  obj[1] = callback;
  obj[2] = tmp;
  obj[3] = ref;
  return obj;
};