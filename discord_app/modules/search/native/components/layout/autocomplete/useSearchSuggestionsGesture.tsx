// discord_app/modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import LegacyBaseButton from "../../../../../../../_runtime/06140_LegacyBaseButton.js";
import SearchPlatformUtilsDefault from "../../../SearchPlatformUtils.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let context = react.createContext(null);
const Provider = context.Provider;
let ReactCompilerGating = ReactCompilerGating_mod;
function measureRelativeTo(pageX, pageX2) {
  size = { x: pageX.pageX - pageX2.pageX, y: pageX.pageY - pageX2.pageY, width: pageX.width, height: pageX.height };
  return size;
}
measureRelativeTo.__closure = {};
measureRelativeTo.__workletHash = 15107587770349;
measureRelativeTo.__initData = {
  code: "function measureRelativeTo_useSearchSuggestionsGestureTsx1(view,container){return{x:view.pageX-container.pageX,y:view.pageY-container.pageY,width:view.width,height:view.height};}",
};
function containsPoint(arg0, arg1, arg2) {
  return arg0.x < arg1 && arg1 < arg0.x + arg0.width && arg0.y < arg2 && arg2 < arg0.y + arg0.height;
}
containsPoint.__closure = {};
containsPoint.__workletHash = 11759746841411;
containsPoint.__initData = {
  code: "function containsPoint_useSearchSuggestionsGestureTsx2(rect,x,y){return rect.x<x&&x<rect.x+rect.width&&rect.y<y&&y<rect.y+rect.height;}",
};
const __initData = {
  code: "function useSearchSuggestionsGestureTsx3(e,manager){const{suggestionsMounted,measure,suggestionsRef,detectorRef,measureRelativeTo,containsPoint,dismissed}=this.__closure;manager.fail();const touch=e.allTouches[0];if(touch==null){return;}if(!suggestionsMounted.get()){return;}const suggestions=measure(suggestionsRef);if(suggestions==null){return;}const detector=measure(detectorRef);if(detector==null){return;}const card=measureRelativeTo(suggestions,detector);if(containsPoint(card,touch.x,touch.y)){return;}dismissed.set(true);}",
};
let closure_8 = {
  code: "function useSearchSuggestionsGestureTsx4(e,manager){const{suggestionsMounted,measure,suggestionsRef,detectorRef,measureRelativeTo,containsPoint,dismissed}=this.__closure;manager.fail();const touch=e.allTouches[0];if(touch==null)return;if(!suggestionsMounted.get())return;const suggestions=measure(suggestionsRef);if(suggestions==null)return;const detector=measure(detectorRef);if(detector==null)return;const card=measureRelativeTo(suggestions,detector);if(containsPoint(card,touch.x,touch.y))return;dismissed.set(true);}",
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function () {
      context = react.useContext(context);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("useSearchSuggestionsContext must be used within a SearchSuggestionsProvider");
        throw error;
      } else {
        return context;
      }
    }
  : function () {
      context = react.useContext(context);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("useSearchSuggestionsContext must be used within a SearchSuggestionsProvider");
        throw error;
      } else {
        return context;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let closure_5;
      let sharedValue1;
      let tmp8;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(25);
      const obj2 = require("ReanimatedRexport");
      const sharedValue = obj2.useSharedValue(false);
      const obj3 = require("ReanimatedRexport");
      sharedValue1 = obj3.useSharedValue(false);
      const obj4 = require("ReanimatedRexport");
      const animatedRef = obj4.useAnimatedRef();
      const obj5 = require("ReanimatedRexport");
      const animatedRef1 = obj5.useAnimatedRef();
      if (cResult[0] !== sharedValue) {
        const fn = function s(arg0, arg1) {
          if (arg0 !== arg1) {
            const result = sharedValue.set(false);
          }
        };
        cResult[0] = sharedValue;
        cResult[1] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      measureRelativeTo = tmp8;
      if (cResult[2] === arg0) {
        let tmp9;
        if (cResult[3] === tmp8) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === sharedValue) {
          if (cResult[6] === arg0) {
            let tmp10;
            if (cResult[7] === tmp8) {
              tmp10 = cResult[8];
            }
            const effect = animatedRef.useEffect(tmp9, tmp10);
            if (cResult[9] === animatedRef) {
              if (cResult[10] === sharedValue) {
                if (cResult[11] === sharedValue1) {
                  if (cResult[14] !== sharedValue) {
                    class T {
                      constructor() {
                        const result = sharedValue.set(true);
                      }
                    }
                    cResult[14] = sharedValue;
                    cResult[15] = T;
                  } else {
                    class T {
                      constructor() {
                        const result = sharedValue.set(true);
                      }
                    }
                  }
                  if (cResult[16] === sharedValue) {
                    class T {
                      constructor() {
                        const result = sharedValue.set(true);
                      }
                    }
                  }
                  const obj6 = {
                    suggestionsRef: animatedRef1,
                    suggestionsMounted: sharedValue1,
                    dismissed: sharedValue,
                    setDismissed: T,
                  };
                  class S {
                    constructor(arg0, fail) {
                      let x;
                      let y;
                      fail.fail();
                      const first = arg0.allTouches[0];
                      if (null != first) {
                        if (sharedValue1.get()) {
                          const obj = ReanimatedRexport;
                          const measureResult = obj.measure(animatedRef1);
                          if (null != measureResult) {
                            const tmp3Result = ReanimatedRexport;
                            const measureResult1 = tmp3Result.measure(animatedRef);
                            if (null != measureResult1) {
                              if (typeof measureRelativeTo === "function") {
                                const diff = measureResult.pageX - measureResult1.pageX;
                                const diff1 = measureResult.pageY - measureResult1.pageY;
                                ({ x, y } = first);
                                if (typeof containsPoint === "function") {
                                  const tmp12 = diff < x && x < diff + tmp9 && diff1 < y && y < diff1 + tmp10;
                                  if (!tmp12) {
                                    const result = sharedValue.set(true);
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                          }
                        }
                      }
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
            const manualActivationResult = ManualResult.manualActivation(true);
            class S {
              constructor(arg0, fail) {
                let x;
                let y;
                fail.fail();
                const first = arg0.allTouches[0];
                if (null != first) {
                  if (sharedValue1.get()) {
                    const obj = ReanimatedRexport;
                    const measureResult = obj.measure(animatedRef1);
                    if (null != measureResult) {
                      const tmp3Result = ReanimatedRexport;
                      const measureResult1 = tmp3Result.measure(animatedRef);
                      if (null != measureResult1) {
                        if (typeof measureRelativeTo === "function") {
                          const diff = measureResult.pageX - measureResult1.pageX;
                          const diff1 = measureResult.pageY - measureResult1.pageY;
                          ({ x, y } = first);
                          if (typeof containsPoint === "function") {
                            const tmp12 = diff < x && x < diff + tmp9 && diff1 < y && y < diff1 + tmp10;
                            if (!tmp12) {
                              const result = sharedValue.set(true);
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                    }
                  }
                }
              }
            }
            const onTouchesDown = manualActivationResult.onTouchesDown;
            S.__closure = {
              suggestionsMounted: sharedValue1,
              measure: require("ReanimatedRexport").measure,
              suggestionsRef: animatedRef1,
              detectorRef: animatedRef,
              measureRelativeTo,
              containsPoint,
              dismissed: sharedValue,
            };
            S.__workletHash = 4841283826141;
            S.__initData = __initData;
            const obj7 = {
              suggestionsMounted: sharedValue1,
              measure: require("ReanimatedRexport").measure,
              suggestionsRef: animatedRef1,
              detectorRef: animatedRef,
              measureRelativeTo,
              containsPoint,
              dismissed: sharedValue,
            };
            cResult[9] = animatedRef;
            cResult[10] = sharedValue;
            cResult[11] = sharedValue1;
            cResult[12] = animatedRef1;
            cResult[13] = onTouchesDown(S);
            const onTouchesDownResult = onTouchesDown(S);
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
        const obj = SearchPlatformUtilsDefault;
        return obj.subscribeTextInputValue(closure_0, closure_5);
      };
      cResult[2] = arg0;
      cResult[3] = tmp8;
      cResult[4] = fn2;
      tmp9 = fn2;
    }
  : (arg0) => {
      let closure_0;
      let sharedValue1;
      _require = arg0;
      let obj = require("ReanimatedRexport");
      const sharedValue = obj.useSharedValue(false);
      const obj2 = require("ReanimatedRexport");
      sharedValue1 = obj2.useSharedValue(false);
      const obj3 = require("ReanimatedRexport");
      const animatedRef = obj3.useAnimatedRef();
      const obj4 = require("ReanimatedRexport");
      const animatedRef1 = obj4.useAnimatedRef();
      const items = [sharedValue];
      const callback = animatedRef.useCallback((arg0, arg1) => {
        if (arg0 !== arg1) {
          const result = sharedValue.set(false);
        }
      }, items);
      const items1 = [sharedValue, arg0, callback];
      const effect = animatedRef.useEffect(() => {
        const obj = SearchPlatformUtilsDefault;
        return obj.subscribeTextInputValue(closure_0, callback);
      }, items1);
      const items2 = [sharedValue, animatedRef, sharedValue1, animatedRef1];
      const memo = animatedRef.useMemo(() => {
        const Gesture = LegacyBaseButton.Gesture;
        const fn = function e(arg0, fail) {
          let x;
          let y;
          fail.fail();
          const first = arg0.allTouches[0];
          if (null != first) {
            if (closure_1_2.get()) {
              const obj = closure_0(sharedValue1[3]);
              const measureResult = obj.measure(animatedRef1);
              if (null != measureResult) {
                const tmp3Result = closure_0(sharedValue1[3]);
                const measureResult1 = tmp3Result.measure(animatedRef);
                if (null != measureResult1) {
                  if (typeof callback === "function") {
                    const diff = measureResult.pageX - measureResult1.pageX;
                    const diff1 = measureResult.pageY - measureResult1.pageY;
                    ({ x, y } = first);
                    if (typeof memo === "function") {
                      const tmp12 = diff < x && x < diff + tmp9 && diff1 < y && y < diff1 + tmp10;
                      if (!tmp12) {
                        const result = sharedValue.set(true);
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
            }
          }
        };
        const ManualResult = Gesture.Manual();
        const manualActivationResult = ManualResult.manualActivation(true);
        let obj = {
          suggestionsMounted: sharedValue1,
          measure: ReanimatedRexport.measure,
          suggestionsRef: animatedRef1,
          detectorRef: animatedRef,
          measureRelativeTo,
          containsPoint,
          dismissed: sharedValue,
        };
        fn.__closure = obj;
        fn.__workletHash = 6889014680796;
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
      return animatedRef.useMemo(
        () => ({ gesture: memo, detectorRef: animatedRef, suggestionsContext: memo1 }),
        items5,
      );
    };
let size = size_mod;
let result = size.fileFinishedImporting(
  "modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx",
);

export const SearchSuggestionsProvider = Provider;
export const useSearchSuggestionsContext = tmp3;
export const useSearchSuggestionsGesture = tmp4;
