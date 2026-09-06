// === Module 16629: SearchBarActivityIcon ===

// Module 16629 (SearchBarActivityIcon)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import SearchUtils from "SearchUtils" /* 12340 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 7281 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
let closure_7 = fn(7878).SEARCH_MESSAGE_TAB_SENTINEL;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
let createStyles = fn(4560);
let obj = { spinnerColor: null, spinner: null, icon: null };
obj = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.spinnerColor = obj;
obj.spinner = { width: 18, height: 18, alignItems: "center", justifyContent: "center", position: "absolute" };
obj.icon = { marginLeft: 12, marginRight: 4 };
let closure_11 = createStyles.createStyles(obj);
createStyles = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = createStyles);
const __initData = { code: "function SearchBarActivityIconTsx1(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};}" };
const __initData2 = { code: "function SearchBarActivityIconTsx2(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBarActivityIcon.tsx");

export default noop.memo(function SearchBarActivityIcon(searchContext) {
  searchContext = searchContext.searchContext;
  let sharedValue;
  const tmp = closure_11();
  let obj = searchContext(sharedValue[8]);
  items = [SearchQueryStore, SearchMessageStore];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  let obj1 = searchContext(sharedValue[10]);
  sharedValue = obj1.useSharedValue(createStyles.START);
  const items2 = [stateFromStores, sharedValue];
  const effect = noop.useEffect(() => {
    const withTiming = timing.withTiming;
    if (stateFromStores) {
      const result = set(withTiming(createStyles.END));
    } else {
      const result1 = set(withTiming(createStyles.START));
    }
  }, items2);
  let obj2 = searchContext(sharedValue[10]);
  class E {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[10]);
      obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [0, 0.5]);
      return obj;
    }
  }
  obj = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  E.__closure = obj;
  E.__workletHash = 12880513119188;
  E.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(E);
  let obj4 = searchContext(sharedValue[10]);
  const fn = function v() {
    const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), items, [1, 0]) };
    return obj;
  };
  obj = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  fn.__closure = obj;
  fn.__workletHash = 11061952032557;
  fn.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  obj1 = { style: animatedStyle, children: null };
  obj2 = { color: tmp.spinnerColor.color, style: null };
  const items3 = [, ];
  ({ icon: arr4[0], spinner: arr4[1] } = tmp);
  obj2.style = items3;
  obj1.children = closure_8(ActivityIndicator, obj2);
  const items4 = [closure_8(stateFromStores(sharedValue[10]).View, obj1), ];
  const obj3 = { style: animatedStyle1, children: null };
  obj4 = { style: tmp.icon, size: null, color: "interactive-text-default" };
  let str = "xs";
  if (obj11.isAndroid()) {
    str = "sm";
  }
  const obj5 = { children: null };
  obj4.size = str;
  obj3.children = closure_8(searchContext(sharedValue[12]).MagnifyingGlassIcon, obj4);
  items4[1] = closure_8(stateFromStores(sharedValue[10]).View, obj3);
  obj5.children = items4;
  return closure_10(closure_9, obj5);
});