// === Module 18994: SearchBarActivityIcon ===

// Module 18994 (SearchBarActivityIcon)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5380 */;
import SearchUtils from "SearchUtils" /* 14124 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 7001 */;
import SearchQueryStore from "SearchQueryStore" /* 14131 */;

const require = globalThis.__r;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
let closure_7 = fn(9982).SEARCH_MESSAGE_TAB_SENTINEL;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5143);
let obj = { spinnerColor: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, spinner: { width: 18, height: 18, alignItems: "center", justifyContent: "center", position: "absolute" }, icon: { marginLeft: 12, marginRight: 4 } };
let closure_11 = createStyles.createStyles(obj);
let obj4 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = obj4);
let closure_14 = { code: "(function SearchBarActivityIconTsx1(){let[interpolate,fadeAnimationState,ANIMATION_STATE_INPUT]=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};})" };
let closure_15 = { code: "(function SearchBarActivityIconTsx2(){let[interpolate,fadeAnimationState,ANIMATION_STATE_INPUT]=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};})" };
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBarActivityIcon.tsx");

export default noop.memo(function SearchBarActivityIcon(searchContext) {
  searchContext = searchContext.searchContext;
  _require = searchContext;
  const tmp = closure_11();
  items = [SearchQueryStore, SearchMessageStore];
  const items1 = [searchContext];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(c0);
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(SearchUtils.getSearchTabFetchId(c0, closure_7, searchResultsQuery));
    let tmp3 = !isInitialFetchComplete;
    const result = SearchQueryStore.isAutocompleteVisible(c0);
    if (!isInitialFetchComplete) {
      tmp3 = !isInitialSearchQueryResult;
    }
    if (tmp3) {
      tmp3 = !result;
    }
    return tmp3;
  }, items1);
  let obj = require("useStateFromStores");
  const sharedValue = require("module_1652").useSharedValue(obj4.START);
  const items2 = [stateFromStores, sharedValue];
  const effect = noop.useEffect(() => {
    const withTiming = timing_timing.withTiming;
    if (c1) {
      const result = set(withTiming(obj4.END));
    } else {
      const result1 = set(withTiming(obj4.START));
    }
  }, items2);
  const obj2 = require("module_1652");
  const items3 = [closure_14, require("module_1652").interpolate, sharedValue, items];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items3;
  class SearchBarActivityIconTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2, [0, 0.5]) };
      return obj;
    }
  }
  const items4 = [tmp9, tmp10, tmp11];
  SearchBarActivityIconTsx1.__closure = items4;
  SearchBarActivityIconTsx1.__workletHash = 14380742529421;
  SearchBarActivityIconTsx1.__initData = tmp8;
  const animatedStyle = require("module_1652").useAnimatedStyle(SearchBarActivityIconTsx1);
  const obj3 = require("module_1652");
  const tmp7 = items;
  const items5 = [closure_15, require("module_1652").interpolate, sharedValue, tmp7];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items5;
  class SearchBarActivityIconTsx2 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), closure_2, [1, 0]) };
      return obj;
    }
  }
  const items6 = [tmp14, tmp15, tmp16];
  SearchBarActivityIconTsx2.__closure = items6;
  SearchBarActivityIconTsx2.__workletHash = 4711746497812;
  SearchBarActivityIconTsx2.__initData = tmp13;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(SearchBarActivityIconTsx2);
  obj4 = { style: animatedStyle, children: null };
  const obj5 = { color: tmp.spinnerColor.color, style: null };
  const items7 = [, ];
  ({ icon: arr8[0], spinner: arr8[1] } = tmp);
  obj5.style = items7;
  obj4.children = closure_8(ActivityIndicator, obj5);
  const items8 = [closure_8(_modDef1652.View, obj4), ];
  const obj6 = { style: animatedStyle1, children: null };
  const obj7 = { style: tmp.icon, size: null, color: "interactive-text-default" };
  const tmp2Result = require("module_1652");
  let str = "xs";
  if (tmp2Result2.isAndroid()) {
    str = "sm";
  }
  const obj8 = { children: null };
  obj7.size = str;
  obj6.children = closure_8(require("MagnifyingGlassIcon").MagnifyingGlassIcon, obj7);
  items8[1] = closure_8(_modDef1652.View, obj6);
  obj8.children = items8;
  return closure_10(closure_9, obj8);
});