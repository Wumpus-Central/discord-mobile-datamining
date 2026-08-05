// discord_app/modules/premium_marketing/native/hooks/useBuyNitroListData.tsx
import noop from "noop";
import { AnalyticEvents } from "ME";

const result = require("context").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroListData.tsx");

export default function useBuyNitroListData(selection) {
  selection = selection.selection;
  const setTier = selection.setTier;
  let analyticsLocations = setTier;
  let dependencyMap;
  let React;
  const tmp = analyticsLocations(7575)(selection.tier);
  const ref = React.useRef(null);
  dependencyMap = ref;
  React = React.useRef(false);
  const items = [setTier];
  const items1 = [tmp];
  const callback = React.useCallback((c4) => {
    noop.current = true;
    analyticsLocations(c4);
  }, items);
  const effect = React.useEffect(() => {
    if (ref2.current) {
      tmp.current = false;
      const _requestAnimationFrame = requestAnimationFrame;
      let closure_0 = requestAnimationFrame(() => {
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
  analyticsLocations = analyticsLocations(5610)().analyticsLocations;
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
      obj.track(outer1_3.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj);
      ref.current = true;
    }
  };
  obj[1] = callback;
  obj[2] = tmp;
  obj[3] = ref;
  return obj;
};