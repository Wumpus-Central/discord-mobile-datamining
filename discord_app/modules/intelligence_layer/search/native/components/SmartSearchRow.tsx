// === Module 18744: SmartSearchRow ===

// Module 18744 (SmartSearchRow)
import nativeDefault from "native" /* 575 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 13875 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13893 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13895 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;

const require = fn;
const View = fn(17).View;
SmartSearchResultsStoreDefault;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj = { collapsedFrame: { height: 217, overflow: "hidden" }, expandedContent: { paddingBottom: nativeDefault.space.PX_40 }, divider: null };
let obj3 = { paddingBottom: nativeDefault.space.PX_40 };
obj.divider = { height: 1, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = noop.memo(function SmartSearchRowContainer(smartSearchQuery) {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  ({ hasKeywordResults, entry } = smartSearchQuery);
  let flashListContext;
  const tmp = closure_10();
  const items = [smartSearchQuery.requestKey];
  const tmp4 = flashListContext(smartSearchQuery(7294).useRecyclingState(hasKeywordResults, items), 2);
  const isCollapsed = tmp4[0];
  dependencyMap = tmp6;
  const obj = smartSearchQuery(7294);
  const smartSearchRowViewability = smartSearchQuery(18745).useSmartSearchRowViewability();
  let obj2 = smartSearchQuery(18745);
  flashListContext = smartSearchQuery(7294).useFlashListContext();
  const items1 = [flashListContext, isCollapsed, tmp4[1], smartSearchQuery];
  const callback = noop.useCallback(() => {
    closure_2(!first);
    if (!first) {
      if (flashListContext != null) {
        const ref = flashListContext.getRef();
        if (ref != null) {
          const obj2 = { animated: !AccessibilityStore.useReducedMotion };
          ref.scrollToTop(obj2);
        }
      }
    }
    const result = SmartSearchAnalyticsManagerDefault.trackSmartSearchAnswerToggled({ smartSearchQuery, isCollapsed: !first }, SearchSessionAnalyticsManagerDefault);
    const obj3 = { smartSearchQuery, isCollapsed: !first };
  }, items1);
  let tmp19Result = null;
  if (entry.status !== smartSearchQuery(13876).SmartSearchStatus.NOT_QUALIFIED) {
    let obj4 = { style: isCollapsed ? tmp.collapsedFrame : tmp.expandedContent, children: null };
    const obj5 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
    const items2 = [closure_8(tmp2(18746).SmartSearchContent, obj5), , ];
    if (isCollapsed) {
      if (!tmp2Result.isSmartSearchEmptyOrErrored(entry.status)) {
        let tmp11Result = closure_8(isCollapsed(18758), { height: 72 });
      }
      items2[1] = tmp11Result;
      let tmp11Result4 = hasKeywordResults;
      if (hasKeywordResults) {
        tmp11Result4 = entry.status === tmp2(13876).SmartSearchStatus.LOADED;
      }
      if (tmp11Result4) {
        const obj6 = { isCollapsed, onPress: callback };
        tmp11Result4 = closure_8(isCollapsed(18760), obj6);
      }
      items2[2] = tmp11Result4;
      obj4.children = items2;
      const items3 = [closure_9(View, obj4), ];
      let tmp11Result5 = hasKeywordResults;
      if (hasKeywordResults) {
        const obj7 = { style: tmp.divider };
        tmp11Result5 = closure_8(View, obj7);
      }
      const obj8 = { children: null };
      items3[1] = tmp11Result5;
      obj8.children = items3;
      tmp19Result = closure_9(View, obj8);
      tmp2Result = tmp2(13874);
    }
    let tmp11Result6 = null;
    if (entry.status === tmp2(13876).SmartSearchStatus.LOADING) {
      tmp11Result6 = closure_8(isCollapsed(18758), { height: 120 });
    }
    tmp11Result = tmp11Result6;
  }
  return tmp19Result;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default function SmartSearchRowConnected(smartSearchQuery) {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const items = [SmartSearchResultsStore];
  const items1 = [smartSearchQuery];
  const stateFromStores = smartSearchQuery(504).useStateFromStores(items, () => SmartSearchResultsStore.getAnswer(smartSearchQuery.guildId, smartSearchQuery.requestKey), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = {};
    const merged = Object.assign(smartSearchQuery);
    obj2.entry = stateFromStores;
    tmp2 = closure_8(closure_11, obj2);
  }
  return tmp2;
};