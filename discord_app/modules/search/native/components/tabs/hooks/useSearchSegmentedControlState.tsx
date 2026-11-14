// === Module 19560: useSearchSegmentedControlState ===

// Module 19560 (useSearchSegmentedControlState)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import SegmentedControlState from "SegmentedControlState" /* 7983 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = { code: "(function useSearchSegmentedControlStateTsx1(){let[visibleTabsStateful]=this.__closure;return visibleTabsStateful;})" };
let closure_4 = { code: "(function useSearchSegmentedControlStateTsx2(){let[visibleTabs,activeIndex]=this.__closure;return visibleTabs.get()[activeIndex.get()];})" };
let closure_5 = { code: "(function useSearchSegmentedControlStateTsx3(){let[visibleTabs]=this.__closure;return visibleTabs.get();})" };
let closure_6 = { code: "(function useSearchSegmentedControlStateTsx4(visibleTabs){let[lastSelectedTab,scheduleOnRN,setActiveIndex]=this.__closure;if(visibleTabs.length===0)return;const lastSelectedTabIndex=visibleTabs.indexOf(lastSelectedTab.get());const targetIndex=Math.max(0,lastSelectedTabIndex);const maxIndex=Math.max(0,visibleTabs.length-1);const nextActiveIndex=Math.min(targetIndex,maxIndex);scheduleOnRN(setActiveIndex,nextActiveIndex,false);})" };
let closure_7 = { code: "(function useSearchSegmentedControlStateTsx5(){let[selectedTab]=this.__closure;return selectedTab.get();})" };
let closure_8 = { code: "(function useSearchSegmentedControlStateTsx6(selectedTab){let[lastSelectedTab,scheduleOnRN,onSelectedTabChange]=this.__closure;if(selectedTab==null)return;lastSelectedTab.set(selectedTab);scheduleOnRN(onSelectedTabChange,selectedTab);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchSegmentedControlState.tsx");

export function useSearchSegmentedControlState(visibleTabs) {
  visibleTabs = visibleTabs.visibleTabs;
  ({ items, onSelectedTabChange, width } = visibleTabs);
  const sharedValue = _mod1655.useSharedValue(visibleTabs[0]);
  const items1 = [closure_3, visibleTabs];
  [tmp4, tmp5] = items1;
  function useSearchSegmentedControlStateTsx1() {
    return c0;
  }
  const items2 = [tmp5];
  useSearchSegmentedControlStateTsx1.__closure = items2;
  useSearchSegmentedControlStateTsx1.__workletHash = 15809985377575;
  useSearchSegmentedControlStateTsx1.__initData = tmp4;
  const derivedValue = _mod1655.useDerivedValue(useSearchSegmentedControlStateTsx1);
  const segmentedControlState = SegmentedControlState.useSegmentedControlState({ items, defaultIndex: 0, pageWidth: width });
  ({ activeIndex, setActiveIndex } = segmentedControlState);
  const tmpResult = SegmentedControlState;
  const items3 = [closure_4, derivedValue, activeIndex];
  [tmp8, tmp9, tmp10] = items3;
  function useSearchSegmentedControlStateTsx2() {
    value = segmentedControlState.get();
    return value[selectedTab.get(selectedTab)];
  }
  const items4 = [tmp9, tmp10];
  useSearchSegmentedControlStateTsx2.__closure = items4;
  useSearchSegmentedControlStateTsx2.__workletHash = 486888790446;
  useSearchSegmentedControlStateTsx2.__initData = tmp8;
  const derivedValue1 = _mod1655.useDerivedValue(useSearchSegmentedControlStateTsx2);
  const tmpResult4 = _mod1655;
  const items5 = [closure_5, derivedValue];
  [tmp12, tmp13] = items5;
  function useSearchSegmentedControlStateTsx3() {
    return segmentedControlState.get();
  }
  const items6 = [tmp13];
  useSearchSegmentedControlStateTsx3.__closure = items6;
  useSearchSegmentedControlStateTsx3.__workletHash = 2804619280412;
  useSearchSegmentedControlStateTsx3.__initData = tmp12;
  const items7 = [closure_6, sharedValue, _mod1708.scheduleOnRN, setActiveIndex];
  [tmp14, tmp15, tmp16, tmp17] = items7;
  function useSearchSegmentedControlStateTsx4(arr) {
    if (0 !== arr.length) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(0, arr.indexOf(segmentedControlState.get()));
      const _Math3 = Math;
      selectedTab(c2, Math.min(bound, Math.max(0, arr.length - 1)), false);
    }
  }
  const items8 = [tmp15, tmp16, tmp17];
  useSearchSegmentedControlStateTsx4.__closure = items8;
  useSearchSegmentedControlStateTsx4.__workletHash = 7505903029346;
  useSearchSegmentedControlStateTsx4.__initData = tmp14;
  const animatedReaction = _mod1655.useAnimatedReaction(useSearchSegmentedControlStateTsx3, useSearchSegmentedControlStateTsx4);
  const tmpResult5 = _mod1655;
  const items9 = [closure_7, derivedValue1];
  [tmp19, tmp20] = items9;
  function useSearchSegmentedControlStateTsx5() {
    return segmentedControlState.get();
  }
  const items10 = [tmp20];
  useSearchSegmentedControlStateTsx5.__closure = items10;
  useSearchSegmentedControlStateTsx5.__workletHash = 4304064409818;
  useSearchSegmentedControlStateTsx5.__initData = tmp19;
  const items11 = [closure_8, sharedValue, _mod1708.scheduleOnRN, onSelectedTabChange];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp21, tmp22, tmp23, tmp24] = items11;
  function useSearchSegmentedControlStateTsx6(arg0) {
    if (null != arg0) {
      const result = segmentedControlState.set(arg0);
      selectedTab(c2, arg0);
    }
  }
  const items12 = [tmp22, tmp23, tmp24];
  useSearchSegmentedControlStateTsx6.__closure = items12;
  useSearchSegmentedControlStateTsx6.__workletHash = 3261294603829;
  useSearchSegmentedControlStateTsx6.__initData = tmp21;
  const animatedReaction1 = _mod1655.useAnimatedReaction(useSearchSegmentedControlStateTsx5, useSearchSegmentedControlStateTsx6);
  const items13 = [segmentedControlState, derivedValue1];
  return noop.useMemo(() => ({ segmentedControlState, selectedTab }), items13);
}