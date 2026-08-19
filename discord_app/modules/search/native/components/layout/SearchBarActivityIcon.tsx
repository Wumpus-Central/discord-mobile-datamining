// discord_app/modules/search/native/components/layout/SearchBarActivityIcon.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { ActivityIndicator } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import handleReaction from "../../../SearchMessageStore.tsx";
import prototype from "../../stores/SearchQueryStore.tsx";
import { SEARCH_MESSAGE_TAB_SENTINEL as closure_7 } from "../../../SearchConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let c3 = importAllResult;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let obj = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj[0] = obj;
obj[1] = { width: 18, height: 18, alignItems: "center", justifyContent: "center", position: "absolute" };
obj[2] = { marginLeft: 12, marginRight: 4 };
let closure_11 = createCacheKey.createStyles(obj);
createCacheKey = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = createCacheKey);
let closure_14 = { code: "function SearchBarActivityIconTsx1(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};}" };
let closure_15 = { code: "function SearchBarActivityIconTsx2(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};}" };
const memoResult = importAllResult.memo(function SearchBarActivityIcon(searchContext) {
  searchContext = searchContext.searchContext;
  let sharedValue;
  const tmp = callback2();
  let obj = searchContext(sharedValue[8]);
  items = [closure_6, closure_5];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = closure_1_6.getSearchResultsQuery(searchContext);
    const isInitialFetchComplete = closure_1_5.getIsInitialFetchComplete(searchContext(sharedValue[9]).getSearchTabFetchId(searchContext, closure_1_7, searchResultsQuery));
    let tmp3 = !isInitialFetchComplete;
    const obj = searchContext(sharedValue[9]);
    const result = closure_1_6.isAutocompleteVisible(searchContext);
    if (!isInitialFetchComplete) {
      tmp3 = !isInitialSearchQueryResult;
    }
    if (tmp3) {
      tmp3 = !result;
    }
    return tmp3;
  }, items1);
  obj1 = searchContext(sharedValue[10]);
  sharedValue = obj1.useSharedValue(createCacheKey.START);
  const items2 = [stateFromStores, sharedValue];
  const effect = importAllResult.useEffect(() => {
    const withTiming = searchContext(sharedValue[11]).withTiming;
    if (stateFromStores) {
      const result = set(withTiming(createCacheKey.END));
    } else {
      const result1 = set(withTiming(createCacheKey.START));
    }
    const tmp2 = searchContext(sharedValue[11]);
  }, items2);
  let obj2 = searchContext(sharedValue[10]);
  class E {
    constructor() {
      obj = { opacity: null };
      obj2 = searchContext(closure_2[10]);
      obj[0] = obj2.interpolate(closure_2.get(), closure_1_13, [0, 0.5]);
      return obj;
    }
  }
  obj = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  E.__closure = obj;
  E.__workletHash = 12880513119188;
  E.__initData = closure_14;
  const animatedStyle = obj2.useAnimatedStyle(E);
  let obj4 = searchContext(sharedValue[10]);
  const fn = function v() {
    const obj = { opacity: searchContext(sharedValue[10]).interpolate(sharedValue.get(), items, [1, 0]) };
    return obj;
  };
  obj = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  fn.__closure = obj;
  fn.__workletHash = 11061952032557;
  fn.__initData = closure_15;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  obj1 = { style: animatedStyle, children: callback(ActivityIndicator, obj2) };
  obj2 = { color: tmp.spinnerColor.color, style: items3 };
  items3 = [, ];
  ({ icon: arr4[0], spinner: arr4[1] } = tmp);
  const items4 = [callback(stateFromStores(sharedValue[10]).View, obj1), ];
  const obj3 = { style: animatedStyle1, children: null };
  obj4 = { style: tmp.icon, size: null, color: "interactive-text-default" };
  let str = "xs";
  if (obj11.isAndroid()) {
    str = "sm";
  }
  const obj5 = { children: null };
  obj4[1] = str;
  obj3[1] = callback(searchContext(sharedValue[12]).MagnifyingGlassIcon, obj4);
  items4[1] = callback(stateFromStores(sharedValue[10]).View, obj3);
  obj5[0] = items4;
  return callback(closure_9, obj5);
});
let result = require("obj132").fileFinishedImporting("modules/search/native/components/layout/SearchBarActivityIcon.tsx");

export default memoResult;