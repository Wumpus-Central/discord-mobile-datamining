// discord_app/modules/search/native/components/tabs/hooks/useSearchSegmentedControlState.tsx
import ReanimatedRexport from "../../../../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = {
  code: "function useSearchSegmentedControlStateTsx1(){const{visibleTabsStateful}=this.__closure;return visibleTabsStateful;}",
};
let closure_4 = {
  code: "function useSearchSegmentedControlStateTsx2(){const{visibleTabs,activeIndex}=this.__closure;return visibleTabs.get()[activeIndex.get()];}",
};
let closure_5 = {
  code: "function useSearchSegmentedControlStateTsx3(){const{visibleTabs}=this.__closure;return visibleTabs.get();}",
};
let closure_6 = {
  code: "function useSearchSegmentedControlStateTsx4(visibleTabs_0){const{lastSelectedTab,runOnJS,setActiveIndex}=this.__closure;if(visibleTabs_0.length===0){return;}const lastSelectedTabIndex=visibleTabs_0.indexOf(lastSelectedTab.get());const targetIndex=Math.max(0,lastSelectedTabIndex);const maxIndex=Math.max(0,visibleTabs_0.length-1);const nextActiveIndex=Math.min(targetIndex,maxIndex);runOnJS(setActiveIndex)(nextActiveIndex,false);}",
};
const __initData = {
  code: "function useSearchSegmentedControlStateTsx5(){const{selectedTab}=this.__closure;return selectedTab.get();}",
};
const __initData2 = {
  code: "function useSearchSegmentedControlStateTsx6(selectedTab_0){const{lastSelectedTab,runOnJS,onSelectedTabChange}=this.__closure;if(selectedTab_0==null){return;}lastSelectedTab.set(selectedTab_0);runOnJS(onSelectedTabChange)(selectedTab_0);}",
};
const __initData3 = {
  code: "function useSearchSegmentedControlStateTsx7(){const{visibleTabsStateful}=this.__closure;return visibleTabsStateful;}",
};
const __initData4 = {
  code: "function useSearchSegmentedControlStateTsx8(){const{visibleTabs,activeIndex}=this.__closure;return visibleTabs.get()[activeIndex.get()];}",
};
const __initData5 = {
  code: "function useSearchSegmentedControlStateTsx9(){const{visibleTabs}=this.__closure;return visibleTabs.get();}",
};
const __initData6 = {
  code: "function useSearchSegmentedControlStateTsx10(visibleTabs_0){const{lastSelectedTab,runOnJS,setActiveIndex}=this.__closure;if(visibleTabs_0.length===0)return;const lastSelectedTabIndex=visibleTabs_0.indexOf(lastSelectedTab.get());const targetIndex=Math.max(0,lastSelectedTabIndex);const maxIndex=Math.max(0,visibleTabs_0.length-1);const nextActiveIndex=Math.min(targetIndex,maxIndex);runOnJS(setActiveIndex)(nextActiveIndex,false);}",
};
const __initData7 = {
  code: "function useSearchSegmentedControlStateTsx11(){const{selectedTab}=this.__closure;return selectedTab.get();}",
};
const __initData8 = {
  code: "function useSearchSegmentedControlStateTsx12(selectedTab_0){const{lastSelectedTab,runOnJS,onSelectedTabChange}=this.__closure;if(selectedTab_0==null)return;lastSelectedTab.set(selectedTab_0);runOnJS(onSelectedTabChange)(selectedTab_0);}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/hooks/useSearchSegmentedControlState.tsx",
);

export const useSearchSegmentedControlState = ReactCompilerGating.isReactCompilerEnabled()
  ? (onSelectedTabChange) => {
      const cResult = visibleTabs(onSelectedTabChange[2]).c(6);
      ({ items, visibleTabs } = onSelectedTabChange);
      onSelectedTabChange = onSelectedTabChange.onSelectedTabChange;
      const width = onSelectedTabChange.width;
      let obj = visibleTabs(onSelectedTabChange[2]);
      const sharedValue = visibleTabs(onSelectedTabChange[3]).useSharedValue(visibleTabs[0]);
      const obj2 = visibleTabs(onSelectedTabChange[3]);
      const fn = function _() {
        return visibleTabs;
      };
      fn.__closure = { visibleTabsStateful: visibleTabs };
      fn.__workletHash = 17125959946782;
      fn.__initData = derivedValue;
      derivedValue = visibleTabs(onSelectedTabChange[3]).useDerivedValue(fn);
      if (cResult[0] === items) {
        if (cResult[1] === width) {
          let tmp6 = cResult[2];
        }
        const segmentedControlState = visibleTabs(tmp2[4]).useSegmentedControlState(tmp6);
        const activeIndex = segmentedControlState.activeIndex;
        const setActiveIndex = segmentedControlState.setActiveIndex;
        const tmpResult = visibleTabs(tmp2[4]);
        class C {
          constructor() {
            value = closure_3.get();
            return value[activeIndex.get(activeIndex)];
          }
        }
        const obj4 = { visibleTabs: derivedValue, activeIndex };
        C.__closure = obj4;
        C.__workletHash = 6189329624535;
        C.__initData = activeIndex;
        const derivedValue1 = visibleTabs(tmp2[3]).useDerivedValue(C);
        const tmpResult4 = visibleTabs(tmp2[3]);
        class J {
          constructor() {
            return closure_3.get();
          }
        }
        const obj5 = { visibleTabs: derivedValue };
        J.__closure = obj5;
        J.__workletHash = 9222891018885;
        J.__initData = setActiveIndex;
        class O {
          constructor(arg0) {
            if (0 !== onSelectedTabChange.length) {
              tmp = closure_2;
              tmp2 = globalThis;
              _Math = Math;
              _Math2 = Math;
              num = 1;
              bound = Math.max(0, onSelectedTabChange.indexOf(closure_2.get()));
              _Math3 = Math;
              tmp5 = closure_0;
              tmp6 = closure_1;
              bound1 = Math.min(bound, Math.max(0, onSelectedTabChange.length - 1));
              obj = closure_0(closure_1[3]);
              tmp7 = setActiveIndex;
              flag = false;
              tmp8 = obj.runOnJS(setActiveIndex)(bound1, false);
            }
            return;
          }
        }
        const obj6 = { lastSelectedTab: sharedValue, runOnJS: visibleTabs(tmp2[3]).runOnJS, setActiveIndex };
        O.__closure = obj6;
        O.__workletHash = 5570630144592;
        O.__initData = derivedValue1;
        const animatedReaction = visibleTabs(tmp2[3]).useAnimatedReaction(J, O);
        const tmpResult5 = visibleTabs(tmp2[3]);
        class D {
          constructor() {
            return closure_6.get();
          }
        }
        const obj7 = { selectedTab: derivedValue1 };
        D.__closure = obj7;
        D.__workletHash = 2491149576387;
        D.__initData = __initData;
        class A {
          constructor(arg0) {
            if (null != onSelectedTabChange) {
              tmp = closure_2;
              result = closure_2.set(onSelectedTabChange);
              tmp3 = closure_0;
              tmp4 = closure_1;
              obj = closure_0(closure_1[3]);
              tmp5 = onSelectedTabChange;
              tmp6 = obj.runOnJS(onSelectedTabChange)(onSelectedTabChange);
            }
            return;
          }
        }
        const obj8 = { lastSelectedTab: sharedValue, runOnJS: visibleTabs(tmp2[3]).runOnJS, onSelectedTabChange };
        A.__closure = obj8;
        A.__workletHash = 14512470299943;
        A.__initData = __initData2;
        const animatedReaction1 = visibleTabs(tmp2[3]).useAnimatedReaction(D, A);
        if (cResult[3] === segmentedControlState) {
          if (cResult[4] === derivedValue1) {
            let tmp17 = cResult[5];
          }
          return tmp17;
        }
        const obj9 = { segmentedControlState, selectedTab: derivedValue1 };
        cResult[3] = segmentedControlState;
        cResult[4] = derivedValue1;
        cResult[5] = obj9;
        tmp17 = obj9;
        const tmpResult6 = visibleTabs(tmp2[3]);
      }
      tmp7[0] = items;
      tmp7[2] = width;
      cResult[0] = items;
      cResult[1] = width;
      cResult[2] = tmp7;
      tmp6 = tmp7;
      const obj3 = visibleTabs(onSelectedTabChange[3]);
    }
  : (visibleTabs) => {
      visibleTabs = visibleTabs.visibleTabs;
      const onSelectedTabChange = visibleTabs.onSelectedTabChange;
      ({ items, width } = visibleTabs);
      const sharedValue = visibleTabs(onSelectedTabChange[3]).useSharedValue(visibleTabs[0]);
      let obj = visibleTabs(onSelectedTabChange[3]);
      const fn = function o() {
        return visibleTabs;
      };
      fn.__closure = { visibleTabsStateful: visibleTabs };
      fn.__workletHash = 6991647771288;
      fn.__initData = __initData3;
      const derivedValue = visibleTabs(onSelectedTabChange[3]).useDerivedValue(fn);
      const obj2 = visibleTabs(onSelectedTabChange[3]);
      const segmentedControlState = visibleTabs(onSelectedTabChange[4]).useSegmentedControlState({
        items,
        defaultIndex: 0,
        pageWidth: width,
      });
      const activeIndex = segmentedControlState.activeIndex;
      const setActiveIndex = segmentedControlState.setActiveIndex;
      const obj3 = visibleTabs(onSelectedTabChange[4]);
      const fn2 = function u() {
        value = derivedValue.get();
        return value[activeIndex.get(activeIndex)];
      };
      fn2.__closure = { visibleTabs: derivedValue, activeIndex };
      fn2.__workletHash = 7793889056093;
      fn2.__initData = __initData4;
      const derivedValue1 = visibleTabs(onSelectedTabChange[3]).useDerivedValue(fn2);
      const obj4 = visibleTabs(onSelectedTabChange[3]);
      const fn3 = function f() {
        return derivedValue.get();
      };
      fn3.__closure = { visibleTabs: derivedValue };
      fn3.__workletHash = 6921245528079;
      fn3.__initData = __initData5;
      const fn4 = function v(arr) {
        if (0 !== arr.length) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.max(0, arr.indexOf(sharedValue.get()));
          const _Math3 = Math;
          const bound1 = Math.min(bound, Math.max(0, arr.length - 1));
          ReanimatedRexport.runOnJS(setActiveIndex)(bound1, false);
        }
      };
      const obj5 = visibleTabs(onSelectedTabChange[3]);
      fn4.__closure = {
        lastSelectedTab: sharedValue,
        runOnJS: visibleTabs(onSelectedTabChange[3]).runOnJS,
        setActiveIndex,
      };
      fn4.__workletHash = 623172990403;
      fn4.__initData = __initData6;
      const animatedReaction = obj5.useAnimatedReaction(fn3, fn4);
      const obj6 = {
        lastSelectedTab: sharedValue,
        runOnJS: visibleTabs(onSelectedTabChange[3]).runOnJS,
        setActiveIndex,
      };
      class C {
        constructor() {
          return closure_7.get();
        }
      }
      C.__closure = { selectedTab: derivedValue1 };
      C.__workletHash = 16939639310614;
      C.__initData = __initData7;
      class I {
        constructor(arg0) {
          if (null != visibleTabs) {
            tmp = closure_2;
            result = closure_2.set(visibleTabs);
            tmp3 = closure_0;
            tmp4 = closure_1;
            obj = closure_0(closure_1[3]);
            tmp5 = onSelectedTabChange;
            tmp6 = obj.runOnJS(onSelectedTabChange)(visibleTabs);
          }
          return;
        }
      }
      const obj7 = visibleTabs(onSelectedTabChange[3]);
      I.__closure = {
        lastSelectedTab: sharedValue,
        runOnJS: visibleTabs(onSelectedTabChange[3]).runOnJS,
        onSelectedTabChange,
      };
      I.__workletHash = 16778762787604;
      I.__initData = __initData8;
      const animatedReaction1 = obj7.useAnimatedReaction(C, I);
      const items1 = [segmentedControlState, derivedValue1];
      return sharedValue.useMemo(() => ({ segmentedControlState, selectedTab: derivedValue1 }), items1);
    };
