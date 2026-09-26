// discord_app/modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import LegacyBaseButton from "../../../../../../../_runtime/06073_LegacyBaseButton.js";
import SearchPlatformUtilsDefault from "../../../SearchPlatformUtils.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let context = noop.createContext(null);
function measureRelativeTo(pageX, pageX2) {
  const size = {
    x: pageX.pageX - pageX2.pageX,
    y: pageX.pageY - pageX2.pageY,
    width: pageX.width,
    height: pageX.height,
  };
  return size;
}
measureRelativeTo.__closure = {};
measureRelativeTo.__workletHash = 15107587770349;
measureRelativeTo.__initData = {
  code: "function measureRelativeTo_useSearchSuggestionsGestureTsx1(view,container){return{x:view.pageX-container.pageX,y:view.pageY-container.pageY,width:view.width,height:view.height};}",
};
function containsPoint(arg0, arg1, arg2) {
  let tmp = arg0.x < arg1 && arg1 < arg0.x + arg0.width;
  if (tmp) {
    tmp = arg0.y < arg2;
  }
  if (tmp) {
    tmp = arg2 < arg0.y + arg0.height;
  }
  return tmp;
}
containsPoint.__closure = {};
containsPoint.__workletHash = 11759746841411;
containsPoint.__initData = {
  code: "function containsPoint_useSearchSuggestionsGestureTsx2(rect,x,y){return rect.x<x&&x<rect.x+rect.width&&rect.y<y&&y<rect.y+rect.height;}",
};
let closure_7 = {
  code: "function useSearchSuggestionsGestureTsx3(e,manager){const{suggestionsMounted,measure,suggestionsRef,detectorRef,measureRelativeTo,containsPoint,dismissed}=this.__closure;manager.fail();const touch=e.allTouches[0];if(touch==null)return;if(!suggestionsMounted.get())return;const suggestions=measure(suggestionsRef);if(suggestions==null)return;const detector=measure(detectorRef);if(detector==null)return;const card=measureRelativeTo(suggestions,detector);if(containsPoint(card,touch.x,touch.y))return;dismissed.set(true);}",
};
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx",
);

export const SearchSuggestionsProvider = context.Provider;
export const useSearchSuggestionsContext = function useSearchSuggestionsContext() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useSearchSuggestionsContext must be used within a SearchSuggestionsProvider");
    throw error;
  } else {
    return context;
  }
};
export const useSearchSuggestionsGesture = function useSearchSuggestionsGesture(channelDetailsSearchContext) {
  _require = channelDetailsSearchContext;
  const sharedValue = require("ReanimatedRexport").useSharedValue(false);
  let obj = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(false);
  const obj2 = require("ReanimatedRexport");
  const animatedRef = require("ReanimatedRexport").useAnimatedRef();
  const obj3 = require("ReanimatedRexport");
  const animatedRef1 = require("ReanimatedRexport").useAnimatedRef();
  const items = [sharedValue];
  const callback = animatedRef.useCallback((arg0, arg1) => {
    if (arg0 !== arg1) {
      const result = sharedValue.set(false);
    }
  }, items);
  const items1 = [sharedValue, channelDetailsSearchContext, callback];
  const effect = animatedRef.useEffect(
    () => SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, callback),
    items1,
  );
  const items2 = [sharedValue, animatedRef, sharedValue1, animatedRef1];
  const memo = animatedRef.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const ManualResult = Gesture.Manual();
    const fn = function e(arg0, fail) {
      fail.fail();
      const first = arg0.allTouches[0];
      if (null != first) {
        if (closure_1_2.get()) {
          const measureResult = closure_0(sharedValue1[1]).measure(animatedRef1);
          if (null != measureResult) {
            const measureResult1 = closure_0(sharedValue1[1]).measure(animatedRef);
            if (null != measureResult1) {
              if (typeof callback === "function") {
                const diff = measureResult.pageX - measureResult1.pageX;
                const diff1 = measureResult.pageY - measureResult1.pageY;
                ({ x, y } = first);
                if (typeof memo === "function") {
                  if (!tmp12) {
                    const result = sharedValue.set(true);
                  }
                  tmp12 = diff < x && x < diff + tmp9 && diff1 < y && y < diff1 + tmp10;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            const tmp3Result = closure_0(sharedValue1[1]);
          }
          const obj = closure_0(sharedValue1[1]);
        }
      }
    };
    const manualActivationResult = Gesture.Manual().manualActivation(true);
    fn.__closure = {
      suggestionsMounted: sharedValue1,
      measure: ReanimatedRexport.measure,
      suggestionsRef: animatedRef1,
      detectorRef: animatedRef,
      measureRelativeTo,
      containsPoint,
      dismissed: sharedValue,
    };
    fn.__workletHash = 12139911159035;
    fn.__initData = __initData;
    return manualActivationResult.onTouchesDown(fn);
  }, items2);
  const items3 = [sharedValue];
  const callback1 = animatedRef.useCallback(() => {
    const result = sharedValue.set(true);
  }, items3);
  const items4 = [animatedRef1, sharedValue1, sharedValue, callback1];
  const memo1 = animatedRef.useMemo(
    () => ({
      suggestionsRef: animatedRef1,
      suggestionsMounted: sharedValue1,
      dismissed: sharedValue,
      setDismissed: callback1,
    }),
    items4,
  );
  const items5 = [memo, animatedRef, memo1];
  return animatedRef.useMemo(() => ({ gesture: memo, detectorRef: animatedRef, suggestionsContext: memo1 }), items5);
};
