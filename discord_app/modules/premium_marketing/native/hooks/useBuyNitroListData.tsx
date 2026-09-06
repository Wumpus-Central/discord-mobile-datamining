// === Module 13359: useBuyNitroListData ===

// Module 13359 (useBuyNitroListData)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroListData.tsx");

export default function useBuyNitroListData(selection) {
  selection = selection.selection;
  const setTier = selection.setTier;
  let ref;
  noop = undefined;
  const tmp = setTier(ref[4])(selection.tier);
  ref = noop.useRef(null);
  noop = noop.useRef(false);
  const items = [setTier];
  const items1 = [tmp];
  const callback = noop.useCallback((arg0) => {
    closure_2.current = true;
    setTier(arg0);
  }, items);
  const effect = noop.useEffect(() => {
    if (ref.current) {
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
  const analyticsLocations = setTier(ref[2])().analyticsLocations;
  closure_129_1 = noop.useRef(false);
  obj.onScroll = function onScroll(nativeEvent) {
    const current = ref.current;
    let tmp4 = !current;
    if (!current) {
      tmp4 = nativeEvent.nativeEvent.layoutMeasurement.height + tmp.y >= tmp2.height;
    }
    if (tmp4) {
      const obj = { location_stack: setTier };
      obj.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
      ref.current = true;
    }
  };
  obj.onSelectNitroTier = callback;
  obj.listData = tmp;
  obj.listRef = ref;
  return obj;
};