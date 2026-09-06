// discord_app/modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx
import LegacyBaseButton from "../../../../../../../_runtime/06655_LegacyBaseButton.js";
import SearchPlatformUtilsDefault from "../../../SearchPlatformUtils.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function inBoundingBox(arg0, left, arg2) {
  const first = arg0.allTouches[0];
  let tmp2 = null != first;
  if (tmp2) {
    let tmp4 = left.left < first.absoluteX && first.absoluteX < left.right;
    if (tmp4) {
      tmp4 = left.top < first.absoluteY + arg2;
    }
    if (tmp4) {
      tmp4 = first.absoluteY + arg2 < left.bottom;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
inBoundingBox.__closure = {};
inBoundingBox.__workletHash = 14606221606756;
inBoundingBox.__initData = {
  code: "function inBoundingBox_useSearchSuggestionsGestureTsx1(e,coordinates,safeAreaTop){const touch=e.allTouches[0];if(touch==null)return false;return coordinates.left<touch.absoluteX&&touch.absoluteX<coordinates.right&&coordinates.top<touch.absoluteY+safeAreaTop&&touch.absoluteY+safeAreaTop<coordinates.bottom;}",
};
let closure_5 = {
  code: "function useSearchSuggestionsGestureTsx2(e,manager){const{coordinates,inBoundingBox,safeAreaTop,dismissed}=this.__closure;manager.fail();const _coordinates=coordinates.get();if(_coordinates==null||inBoundingBox(e,_coordinates,safeAreaTop))return;dismissed.set(true);}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx",
);

export const useSearchSuggestionsGesture = function useSearchSuggestionsGesture(channelDetailsSearchContext) {
  _require = channelDetailsSearchContext;
  const sharedValue = require("ReanimatedRexport").useSharedValue(false);
  const obj = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(null);
  const items = [sharedValue];
  callback = callback.useCallback((arg0, arg1) => {
    if (arg0 !== arg1) {
      const result = sharedValue.set(false);
    }
  }, items);
  const items1 = [sharedValue, channelDetailsSearchContext, callback];
  const effect = callback.useEffect(
    () => SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, callback),
    items1,
  );
  const obj2 = require("ReanimatedRexport");
  let num = 0;
  if (obj4.isAndroid()) {
    num = sharedValue(sharedValue1[3])().top;
  }
  const items2 = [sharedValue1, num, sharedValue];
  const memo = obj3.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const ManualResult = Gesture.Manual();
    const fn = function e(arg0, fail) {
      fail.fail();
      const rect = sharedValue1.get();
      let tmp2 = null == rect;
      if (!tmp2) {
        if (typeof num === "function") {
          const first = arg0.allTouches[0];
          let tmp7 = null != first;
          if (tmp7) {
            tmp7 =
              rect.left < first.absoluteX &&
              first.absoluteX < rect.right &&
              rect.top < first.absoluteY + tmp4 &&
              first.absoluteY + tmp4 < rect.bottom;
            const tmp8 =
              rect.left < first.absoluteX &&
              first.absoluteX < rect.right &&
              rect.top < first.absoluteY + tmp4 &&
              first.absoluteY + tmp4 < rect.bottom;
          }
          tmp2 = tmp7;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (!tmp2) {
        const result = sharedValue.set(true);
      }
    };
    fn.__closure = { coordinates: sharedValue1, inBoundingBox, safeAreaTop: num, dismissed: sharedValue };
    fn.__workletHash = 2369649298113;
    fn.__initData = __initData;
    return Gesture.Manual().manualActivation(true).onTouchesDown(fn);
  }, items2);
  const items3 = [sharedValue1];
  const callback1 = obj3.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items3);
  const items4 = [sharedValue];
  const callback2 = obj3.useCallback(() => {
    const result = sharedValue.set(true);
  }, items4);
  const items5 = [sharedValue, callback2, memo, callback1];
  return callback.useMemo(
    () => ({ gesture: memo, dismissed: sharedValue, onLayoutMeasure: callback1, setDismissed: callback2 }),
    items5,
  );
};
