// === Module 17111: SearchBarActivityIcon ===

// Module 17111 (SearchBarActivityIcon)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import timing from "timing" /* 4758 */;
import SearchUtils from "SearchUtils" /* 12598 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 7525 */;
import SearchQueryStore from "SearchQueryStore" /* 12597 */;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
let closure_7 = fn(8125).SEARCH_MESSAGE_TAB_SENTINEL;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4757);
let obj = { spinnerColor: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, spinner: { width: 18, height: 18, alignItems: "center", justifyContent: "center", position: "absolute" }, icon: { marginLeft: 12, marginRight: 4 } };
let closure_11 = createStyles.createStyles(obj);
let obj4 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = obj4);
const __initData = { code: "function SearchBarActivityIconTsx1(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};}" };
const __initData2 = { code: "function SearchBarActivityIconTsx2(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};}" };
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBarActivityIcon.tsx");

export default noop.memo(function SearchBarActivityIcon(searchContext) {
  searchContext = searchContext.searchContext;
  let sharedValue;
  const tmp = closure_11();
  items = [SearchQueryStore, SearchMessageStore];
  const items1 = [searchContext];
  const stateFromStores = searchContext(sharedValue[8]).useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(SearchUtils.getSearchTabFetchId(searchContext, closure_7, searchResultsQuery));
    let tmp3 = !isInitialFetchComplete;
    const result = SearchQueryStore.isAutocompleteVisible(searchContext);
    if (!isInitialFetchComplete) {
      tmp3 = !isInitialSearchQueryResult;
    }
    if (tmp3) {
      tmp3 = !result;
    }
    return tmp3;
  }, items1);
  let obj = searchContext(sharedValue[8]);
  sharedValue = searchContext(sharedValue[10]).useSharedValue(obj4.START);
  const items2 = [stateFromStores, sharedValue];
  const effect = noop.useEffect(() => {
    const withTiming = timing.withTiming;
    if (stateFromStores) {
      const result = set(withTiming(obj4.END));
    } else {
      const result1 = set(withTiming(obj4.START));
    }
  }, items2);
  const obj2 = searchContext(sharedValue[10]);
  class E {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[10]);
      obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [0, 0.5]);
      return obj;
    }
  }
  obj4 = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  E.__closure = obj4;
  E.__workletHash = 12880513119188;
  E.__initData = __initData;
  const animatedStyle = searchContext(sharedValue[10]).useAnimatedStyle(E);
  const obj3 = searchContext(sharedValue[10]);
  const fn = function v() {
    const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), items, [1, 0]) };
    return obj;
  };
  const obj5 = searchContext(sharedValue[10]);
  fn.__closure = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  fn.__workletHash = 11061952032557;
  fn.__initData = __initData2;
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const obj7 = { style: animatedStyle, children: null };
  const obj8 = { color: tmp.spinnerColor.color, style: null };
  const items3 = [, ];
  ({ icon: arr4[0], spinner: arr4[1] } = tmp);
  obj8.style = items3;
  obj7.children = closure_8(ActivityIndicator, obj8);
  const items4 = [closure_8(stateFromStores(sharedValue[10]).View, obj7), ];
  const obj9 = { style: animatedStyle1, children: null };
  const obj10 = { style: tmp.icon, size: null, color: "interactive-text-default" };
  const obj6 = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  let str = "xs";
  if (obj11.isAndroid()) {
    str = "sm";
  }
  const obj12 = { children: null };
  obj10.size = str;
  obj9.children = closure_8(searchContext(sharedValue[12]).MagnifyingGlassIcon, obj10);
  items4[1] = closure_8(stateFromStores(sharedValue[10]).View, obj9);
  obj12.children = items4;
  return closure_10(closure_9, obj12);
});