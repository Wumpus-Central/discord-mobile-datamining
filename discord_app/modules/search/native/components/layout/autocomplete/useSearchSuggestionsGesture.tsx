// === Module 18959: useSearchSuggestionsGesture ===

// Module 18959 (useSearchSuggestionsGesture)
import _mod1652 from "module_1652" /* 1652 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14104 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let context = noop.createContext(null);
let items = [{ code: "(function measureRelativeTo_useSearchSuggestionsGestureTsx1(view,container){return{x:view.pageX-container.pageX,y:view.pageY-container.pageY,width:view.width,height:view.height};})" }];
[tmp3] = items;
function measureRelativeTo(pageX, pageX2) {
  const size = { x: pageX.pageX - pageX2.pageX, y: pageX.pageY - pageX2.pageY, width: pageX.width, height: pageX.height };
  return size;
}
measureRelativeTo.__workletHash = 8310337569996;
measureRelativeTo.__initData = tmp3;
let items1 = [{ code: "(function containsPoint_useSearchSuggestionsGestureTsx2(rect,x,y){return rect.x<x&&x<rect.x+rect.width&&rect.y<y&&y<rect.y+rect.height;})" }];
[tmp4] = items1;
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
containsPoint.__workletHash = 16282531248450;
containsPoint.__initData = tmp4;
let closure_7 = { code: "(function useSearchSuggestionsGestureTsx3(e,manager){let[suggestionsMounted,measure,suggestionsRef,detectorRef,measureRelativeTo,containsPoint,dismissed]=this.__closure;manager.fail();const touch=e.allTouches[0];if(touch==null)return;if(!suggestionsMounted.get())return;const suggestions=measure(suggestionsRef);if(suggestions==null)return;const detector=measure(detectorRef);if(detector==null)return;const card=measureRelativeTo(suggestions,detector);if(containsPoint(card,touch.x,touch.y))return;dismissed.set(true);})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx");

export const SearchSuggestionsProvider = context.Provider;
export function useSearchSuggestionsContext() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useSearchSuggestionsContext must be used within a SearchSuggestionsProvider");
    throw error;
  } else {
    return context;
  }
}
export function useSearchSuggestionsGesture(channelDetailsSearchContext) {
  _require = channelDetailsSearchContext;
  const sharedValue = require("module_1652").useSharedValue(false);
  const obj = require("module_1652");
  sharedValue1 = require("module_1652").useSharedValue(false);
  const obj2 = require("module_1652");
  const animatedRef = require("module_1652").useAnimatedRef();
  const obj3 = require("module_1652");
  const animatedRef1 = require("module_1652").useAnimatedRef();
  items = [sharedValue];
  const callback = animatedRef.useCallback((arg0, arg1) => {
    if (arg0 !== arg1) {
      const result = sharedValue.set(false);
    }
  }, items);
  let items1 = [sharedValue, channelDetailsSearchContext, callback];
  const effect = animatedRef.useEffect(() => SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, callback), items1);
  const items2 = [sharedValue, animatedRef, sharedValue1, animatedRef1];
  const memo = animatedRef.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const ManualResult = Gesture.Manual();
    items = [closure_7, sharedValue1, _mod1652.measure, animatedRef1, animatedRef, measureRelativeTo, containsPoint, sharedValue];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
    function useSearchSuggestionsGestureTsx3(arg0, fail) {
      fail.fail();
      const point = arg0.allTouches[0];
      if (null != point) {
        if (_undefined.get()) {
          const tmp5 = _undefined2(c2);
          if (null != tmp5) {
            const tmp3Result = _undefined2(c3);
            if (null != tmp3Result) {
              if (!_undefined4(_undefined3(tmp5, tmp3Result), point.x, point.y)) {
                const result = _undefined5.set(true);
              }
            }
          }
        }
      }
    }
    const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
    useSearchSuggestionsGestureTsx3.__closure = items1;
    useSearchSuggestionsGestureTsx3.__workletHash = 17579046119458;
    useSearchSuggestionsGestureTsx3.__initData = tmp;
    return Gesture.Manual().manualActivation(true).onTouchesDown(useSearchSuggestionsGestureTsx3);
  }, items2);
  const items3 = [sharedValue];
  const callback1 = animatedRef.useCallback(() => {
    const result = sharedValue.set(true);
  }, items3);
  const items4 = [animatedRef1, sharedValue1, sharedValue, callback1];
  const memo1 = animatedRef.useMemo(() => ({ suggestionsRef: animatedRef1, suggestionsMounted: sharedValue1, dismissed: sharedValue, setDismissed: callback1 }), items4);
  const items5 = [memo, animatedRef, memo1];
  return animatedRef.useMemo(() => ({ gesture: memo, detectorRef: animatedRef, suggestionsContext: memo1 }), items5);
}