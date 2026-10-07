// === Module 16810: useSearchSuggestionsGesture ===

// Module 16810 (useSearchSuggestionsGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11980 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let context = noop.createContext(null);
fn(558);
function measureRelativeTo(pageX, pageX2) {
  const size = { x: pageX.pageX - pageX2.pageX, y: pageX.pageY - pageX2.pageY, width: pageX.width, height: pageX.height };
  return size;
}
measureRelativeTo.__closure = {};
measureRelativeTo.__workletHash = 15107587770349;
measureRelativeTo.__initData = { code: "function measureRelativeTo_useSearchSuggestionsGestureTsx1(view,container){return{x:view.pageX-container.pageX,y:view.pageY-container.pageY,width:view.width,height:view.height};}" };
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
containsPoint.__initData = { code: "function containsPoint_useSearchSuggestionsGestureTsx2(rect,x,y){return rect.x<x&&x<rect.x+rect.width&&rect.y<y&&y<rect.y+rect.height;}" };
const __initData = { code: "function useSearchSuggestionsGestureTsx3(e,manager){const{suggestionsMounted,measure,suggestionsRef,detectorRef,measureRelativeTo,containsPoint,dismissed}=this.__closure;manager.fail();const touch=e.allTouches[0];if(touch==null){return;}if(!suggestionsMounted.get()){return;}const suggestions=measure(suggestionsRef);if(suggestions==null){return;}const detector=measure(detectorRef);if(detector==null){return;}const card=measureRelativeTo(suggestions,detector);if(containsPoint(card,touch.x,touch.y)){return;}dismissed.set(true);}" };
let closure_8 = { code: "function useSearchSuggestionsGestureTsx4(e,manager){const{suggestionsMounted,measure,suggestionsRef,detectorRef,measureRelativeTo,containsPoint,dismissed}=this.__closure;manager.fail();const touch=e.allTouches[0];if(touch==null)return;if(!suggestionsMounted.get())return;const suggestions=measure(suggestionsRef);if(suggestions==null)return;const detector=measure(detectorRef);if(detector==null)return;const card=measureRelativeTo(suggestions,detector);if(containsPoint(card,touch.x,touch.y))return;dismissed.set(true);}" };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useSearchSuggestionsContext must be used within a SearchSuggestionsProvider");
    throw error;
  } else {
    return context;
  }
}) : (() => {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useSearchSuggestionsContext must be used within a SearchSuggestionsProvider");
    throw error;
  } else {
    return context;
  }
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx");

export const SearchSuggestionsProvider = context.Provider;
export const useSearchSuggestionsContext = tmp3;
export const useSearchSuggestionsGesture = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(25);
  let obj = require("c");
  const sharedValue = require("ReanimatedRexport").useSharedValue(false);
  const obj2 = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(false);
  const obj3 = require("ReanimatedRexport");
  const animatedRef = require("ReanimatedRexport").useAnimatedRef();
  const obj4 = require("ReanimatedRexport");
  const animatedRef1 = require("ReanimatedRexport").useAnimatedRef();
  if (cResult[0] !== sharedValue) {
    const fn = function s(arg0, arg1) {
      if (arg0 !== arg1) {
        const result = sharedValue.set(false);
      }
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  measureRelativeTo = tmp8;
  if (cResult[2] === arg0) {
    if (cResult[3] === tmp8) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === sharedValue) {
      if (cResult[6] === arg0) {
        if (cResult[7] === tmp8) {
          let tmp10 = cResult[8];
        }
        const effect = animatedRef.useEffect(tmp9, tmp10);
        if (cResult[9] === animatedRef) {
          if (cResult[10] === sharedValue) {
            if (cResult[11] === sharedValue1) {
              if (cResult[14] !== sharedValue) {
                class T {
                  constructor() {
                    result = closure_1.set(true);
                    return;
                  }
                }
                cResult[14] = sharedValue;
                cResult[15] = T;
              } else {
                class T {
                  constructor() {
                    result = closure_1.set(true);
                    return;
                  }
                }
              }
              if (cResult[16] === sharedValue) {
                class T {
                  constructor() {
                    result = closure_1.set(true);
                    return;
                  }
                }
              }
              const obj6 = { suggestionsRef: animatedRef1, suggestionsMounted: sharedValue1, dismissed: sharedValue, setDismissed: T };
              class S {
                constructor(arg0, arg1) {
                  failResult = arg1.fail();
                  first = arg0.allTouches[0];
                  if (null != first) {
                    tmp15 = closure_2;
                    if (closure_2.get()) {
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj = closure_0(closure_2[3]);
                      tmp5 = closure_4;
                      measureResult = obj.measure(closure_4);
                      if (null != measureResult) {
                        tmp3Result = tmp3(tmp4[3]);
                        tmp16 = closure_3;
                        measureResult1 = tmp3Result.measure(closure_3);
                        if (null != measureResult1) {
                          tmp18 = measureRelativeTo;
                          if (typeof measureRelativeTo === "function") {
                            diff = measureResult.pageX - measureResult1.pageX;
                            diff1 = measureResult.pageY - measureResult1.pageY;
                            tmp11 = containsPoint;
                            ({ x, y } = first);
                            if (typeof containsPoint === "function") {
                              tmp12 = diff < x && x < diff + tmp9 && diff1 < y && y < diff1 + tmp10;
                              if (!tmp12) {
                                tmp13 = closure_1;
                                flag = true;
                                result = closure_1.set(true);
                              }
                            } else {
                              str2 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            str = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                      }
                    }
                  }
                  return;
                }
              }
              cResult[16] = sharedValue;
              cResult[17] = T;
              cResult[18] = sharedValue1;
              cResult[19] = animatedRef1;
              cResult[20] = obj6;
            }
          }
        }
        const Gesture = tmp(tmp2[5]).Gesture;
        const ManualResult = Gesture.Manual();
        class S {
          constructor(arg0, arg1) {
            failResult = arg1.fail();
            first = arg0.allTouches[0];
            if (null != first) {
              tmp15 = closure_2;
              if (closure_2.get()) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[3]);
                tmp5 = closure_4;
                measureResult = obj.measure(closure_4);
                if (null != measureResult) {
                  tmp3Result = tmp3(tmp4[3]);
                  tmp16 = closure_3;
                  measureResult1 = tmp3Result.measure(closure_3);
                  if (null != measureResult1) {
                    tmp18 = measureRelativeTo;
                    if (typeof measureRelativeTo === "function") {
                      diff = measureResult.pageX - measureResult1.pageX;
                      diff1 = measureResult.pageY - measureResult1.pageY;
                      tmp11 = containsPoint;
                      ({ x, y } = first);
                      if (typeof containsPoint === "function") {
                        tmp12 = diff < x && x < diff + tmp9 && diff1 < y && y < diff1 + tmp10;
                        if (!tmp12) {
                          tmp13 = closure_1;
                          flag = true;
                          result = closure_1.set(true);
                        }
                      } else {
                        str2 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      str = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                }
              }
            }
            return;
          }
        }
        const obj7 = { suggestionsMounted: sharedValue1, measure: tmp(tmp2[3]).measure, suggestionsRef: animatedRef1, detectorRef: animatedRef, measureRelativeTo, containsPoint, dismissed: sharedValue };
        S.__closure = obj7;
        S.__workletHash = 4841283826141;
        S.__initData = __initData;
        const onTouchesDownResult = Gesture.Manual().manualActivation(true).onTouchesDown(S);
        cResult[9] = animatedRef;
        cResult[10] = sharedValue;
        cResult[11] = sharedValue1;
        cResult[12] = animatedRef1;
        cResult[13] = onTouchesDownResult;
        const manualActivationResult = Gesture.Manual().manualActivation(true);
      }
    }
    const items = [sharedValue, arg0, tmp8];
    cResult[5] = sharedValue;
    cResult[6] = arg0;
    cResult[7] = tmp8;
    cResult[8] = items;
    tmp10 = items;
  }
  const fn2 = function _() {
    return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, closure_5);
  };
  cResult[2] = arg0;
  cResult[3] = tmp8;
  cResult[4] = fn2;
  tmp9 = fn2;
  const obj5 = require("ReanimatedRexport");
}) : ((arg0) => {
  _require = arg0;
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
  const items1 = [sharedValue, arg0, callback];
  const effect = animatedRef.useEffect(() => SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, callback), items1);
  const items2 = [sharedValue, animatedRef, sharedValue1, animatedRef1];
  const memo = animatedRef.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const ManualResult = Gesture.Manual();
    const fn = function e(arg0, fail) {
      fail.fail();
      const first = arg0.allTouches[0];
      if (null != first) {
        if (closure_1_2.get()) {
          const measureResult = closure_0(sharedValue1[3]).measure(animatedRef1);
          if (null != measureResult) {
            const measureResult1 = closure_0(sharedValue1[3]).measure(animatedRef);
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
            const tmp3Result = closure_0(sharedValue1[3]);
          }
          const obj = closure_0(sharedValue1[3]);
        }
      }
    };
    const manualActivationResult = Gesture.Manual().manualActivation(true);
    fn.__closure = { suggestionsMounted: sharedValue1, measure: ReanimatedRexport.measure, suggestionsRef: animatedRef1, detectorRef: animatedRef, measureRelativeTo, containsPoint, dismissed: sharedValue };
    fn.__workletHash = 6889014680796;
    fn.__initData = __initData;
    return manualActivationResult.onTouchesDown(fn);
  }, items2);
  const items3 = [sharedValue];
  const callback1 = animatedRef.useCallback(() => {
    const result = sharedValue.set(true);
  }, items3);
  const items4 = [animatedRef1, sharedValue1, sharedValue, callback1];
  const memo1 = animatedRef.useMemo(() => ({ suggestionsRef: animatedRef1, suggestionsMounted: sharedValue1, dismissed: sharedValue, setDismissed: callback1 }), items4);
  const items5 = [memo, animatedRef, memo1];
  return animatedRef.useMemo(() => ({ gesture: memo, detectorRef: animatedRef, suggestionsContext: memo1 }), items5);
});