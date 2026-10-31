// === Module 18757: SmartSearchFeedback ===

// Module 18757 (SmartSearchFeedback)
import nativeDefault from "native" /* 575 */;
import _modDef4123 from "module_4123" /* 4123 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 13875 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13893 */;
import SmartSearchActionCreators from "SmartSearchActionCreators" /* 13910 */;
import IconActionButtonDefault from "IconActionButton" /* 14541 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
SmartSearchResultsStoreDefault;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
const obj2 = { feedbackContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_6, height: nativeDefault.space.PX_24 }, buttonContainer: { flexDirection: "row", alignItems: "center" } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchFeedback.tsx");

export function SmartSearchFeedback(smartSearchQuery) {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const tmp = closure_8();
  const items = [SmartSearchResultsStore];
  const items1 = [, ];
  ({ guildId: arr2[0], requestKey: arr2[1] } = smartSearchQuery);
  const stateFromStores = smartSearchQuery(504).useStateFromStores(items, () => SmartSearchResultsStore.getResultFeedback(smartSearchQuery.guildId, smartSearchQuery.requestKey), items1);
  let obj = smartSearchQuery(504);
  const items2 = [smartSearchQuery.requestKey];
  let tmp7Result2 = null;
  if (!_slicedToArray(obj2.useRecyclingState(null !== stateFromStores, items2), 1)[0]) {
    const obj3 = { style: tmp.feedbackContainer, children: null };
    const intl = tmp2(1113).intl;
    const string = intl.string;
    if (tmp5) {
      let stringResult = string(tmp2(1113).t.kZbFIO);
    } else {
      stringResult = string(_modDef4123.uij9Dy);
    }
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
    const items3 = [closure_6(tmp2(5624).Text, obj4), ];
    let tmp7Result = null === stateFromStores;
    if (tmp7Result) {
      const obj5 = { style: tmp.buttonContainer, children: null };
      const obj6 = {
        IconComponent: tmp2(9870).ThumbsUpIcon,
        onPress() {
              const obj = SmartSearchActionCreators;
              obj.setResultFeedback({ smartSearchQuery, hasPositiveFeedback: true, SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault });
            },
        accessibilityLabel: null
      };
      const intl2 = tmp2(1113).intl;
      obj6.accessibilityLabel = intl2.string(_modDef4123["x/H32X"]);
      const items4 = [closure_6(IconActionButtonDefault, obj6), ];
      const obj7 = { IconComponent: null, noMargin: true, onPress: null, accessibilityLabel: null };
      obj7.IconComponent = tmp2(9872).ThumbsDownIcon;
      obj7.onPress = function onPress() {
        const obj = SmartSearchActionCreators;
        obj.setResultFeedback({ smartSearchQuery, hasPositiveFeedback: false, SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault });
      };
      const intl3 = tmp2(1113).intl;
      obj7.accessibilityLabel = intl3.string(_modDef4123.FoToeH);
      items4[1] = closure_6(IconActionButtonDefault, obj7);
      obj5.children = items4;
      tmp7Result = closure_7(View, obj5);
    }
    items3[1] = tmp7Result;
    obj3.children = items3;
    tmp7Result2 = closure_7(View, obj3);
  }
  return tmp7Result2;
}