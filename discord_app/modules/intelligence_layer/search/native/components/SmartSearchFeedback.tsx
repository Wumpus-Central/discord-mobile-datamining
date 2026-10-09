// discord_app/modules/intelligence_layer/search/native/components/SmartSearchFeedback.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4053 from "../../SmartSearch.messages.js";
import SmartSearchResultsStoreDefault from "../../SmartSearchResultsStore.tsx";
import SearchSessionAnalyticsManagerDefault from "../../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchActionCreators from "../../SmartSearchActionCreators.tsx";
import IconActionButtonDefault from "../../../../main_tabs_v2/native/shared_components/IconActionButton.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
SmartSearchResultsStoreDefault;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  feedbackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: nativeDefault.space.PX_4,
    marginLeft: nativeDefault.space.PX_16,
    marginRight: nativeDefault.space.PX_6,
    height: nativeDefault.space.PX_24,
  },
  buttonContainer: { flexDirection: "row", alignItems: "center" },
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginVertical: nativeDefault.space.PX_4,
  marginLeft: nativeDefault.space.PX_16,
  marginRight: nativeDefault.space.PX_6,
  height: nativeDefault.space.PX_24,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SmartSearchFeedback.tsx",
);

export const SmartSearchFeedback = ReactCompilerGating.isReactCompilerEnabled()
  ? function SmartSearchFeedback(smartSearchQuery) {
      const cResult = smartSearchQuery(576).c(19);
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      let feedbackContainer = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SmartSearchResultsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === smartSearchQuery.guildId) {
        if (cResult[2] === smartSearchQuery.requestKey) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
        if (cResult[5] !== smartSearchQuery.requestKey) {
          const items1 = [smartSearchQuery.requestKey];
          cResult[5] = smartSearchQuery.requestKey;
          cResult[6] = items1;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[6];
        }
        const tmpResult = tmp(504);
        if (_slicedToArray(tmpResult2.useRecyclingState(null !== stateFromStores, tmp9), 1)[0]) {
          return null;
        } else if (cResult[7] !== stateFromStores) {
          const intl = tmp(1126).intl;
          const string = intl.string;
          if (tmp11) {
            let stringResult = string(tmp(1126).t.kZbFIO);
          } else {
            stringResult = string(_modDef4053.uij9Dy);
          }
          cResult[7] = stateFromStores;
          cResult[8] = stringResult;
        } else {
          if (cResult[9] !== cResult[8]) {
            const obj2 = { variant: "text-sm/medium", color: "text-muted", children: tmp14 };
            const tmp20 = closure_6(tmp(5087).Text, obj2);
            cResult[9] = tmp14;
            cResult[10] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[10];
          }
          if (cResult[11] === stateFromStores) {
            if (cResult[12] === smartSearchQuery) {
              if (cResult[13] === feedbackContainer.buttonContainer) {
                let tmp21 = cResult[14];
              }
              if (cResult[15] === feedbackContainer.feedbackContainer) {
                if (cResult[16] === tmp18) {
                }
              }
              const obj3 = { style: feedbackContainer.feedbackContainer, children: null };
              const items2 = [tmp18, tmp21];
              obj3.children = items2;
              const tmp32 = closure_7(View, obj3);
              feedbackContainer = feedbackContainer.feedbackContainer;
              cResult[15] = feedbackContainer;
              cResult[16] = tmp18;
              cResult[17] = tmp21;
              cResult[18] = tmp32;
            }
          }
          let tmp22 = null === stateFromStores;
          if (tmp22) {
            const obj4 = { style: feedbackContainer.buttonContainer, children: null };
            const obj5 = {
              source: null,
              IconComponent: tmp(9331).ThumbsUpIcon,
              onPress() {
                const obj = SmartSearchActionCreators;
                obj.setResultFeedback({
                  smartSearchQuery,
                  hasPositiveFeedback: true,
                  SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault,
                });
              },
              accessibilityLabel: null,
            };
            const intl2 = tmp(1126).intl;
            obj5.accessibilityLabel = intl2.string(_modDef4053["x/H32X"]);
            const items3 = [closure_6(IconActionButtonDefault, obj5)];
            const obj6 = { source: null, IconComponent: null, noMargin: true, onPress: null, accessibilityLabel: null };
            obj6.IconComponent = tmp(9333).ThumbsDownIcon;
            obj6.onPress = function onPress() {
              const obj = SmartSearchActionCreators;
              obj.setResultFeedback({
                smartSearchQuery,
                hasPositiveFeedback: false,
                SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault,
              });
            };
            const intl3 = tmp(1126).intl;
            obj6.accessibilityLabel = intl3.string(_modDef4053.FoToeH);
            items3[1] = closure_6(IconActionButtonDefault, obj6);
            obj4.children = items3;
            tmp22 = closure_7(View, obj4);
          }
          cResult[11] = stateFromStores;
          cResult[12] = smartSearchQuery;
          cResult[13] = feedbackContainer.buttonContainer;
          cResult[14] = tmp22;
          tmp21 = tmp22;
        }
        tmpResult2 = tmp(8608);
      }
      const fn = function y() {
        return SmartSearchResultsStore.getResultFeedback(smartSearchQuery.guildId, smartSearchQuery.requestKey);
      };
      const items4 = [,];
      ({ guildId: arr2[0], requestKey: arr2[1] } = smartSearchQuery);
      cResult[1] = smartSearchQuery.guildId;
      cResult[2] = smartSearchQuery.requestKey;
      cResult[3] = fn;
      cResult[4] = items4;
      tmp7 = items4;
      tmp6 = fn;
      let obj = smartSearchQuery(576);
    }
  : function SmartSearchFeedback(smartSearchQuery) {
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      const tmp = closure_8();
      const items = [SmartSearchResultsStore];
      const items1 = [,];
      ({ guildId: arr2[0], requestKey: arr2[1] } = smartSearchQuery);
      const stateFromStores = smartSearchQuery(504).useStateFromStores(
        items,
        () => SmartSearchResultsStore.getResultFeedback(smartSearchQuery.guildId, smartSearchQuery.requestKey),
        items1,
      );
      let obj = smartSearchQuery(504);
      const items2 = [smartSearchQuery.requestKey];
      let tmp7Result2 = null;
      if (!_slicedToArray(obj2.useRecyclingState(null !== stateFromStores, items2), 1)[0]) {
        const obj3 = { style: tmp.feedbackContainer, children: null };
        const intl = tmp2(1126).intl;
        const string = intl.string;
        if (tmp5) {
          let stringResult = string(tmp2(1126).t.kZbFIO);
        } else {
          stringResult = string(_modDef4053.uij9Dy);
        }
        const obj4 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
        const items3 = [closure_6(tmp2(5087).Text, obj4)];
        let tmp7Result = null === stateFromStores;
        if (tmp7Result) {
          const obj5 = { style: tmp.buttonContainer, children: null };
          const obj6 = {
            source: null,
            IconComponent: tmp2(9331).ThumbsUpIcon,
            onPress() {
              const obj = SmartSearchActionCreators;
              obj.setResultFeedback({
                smartSearchQuery,
                hasPositiveFeedback: true,
                SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault,
              });
            },
            accessibilityLabel: null,
          };
          const intl2 = tmp2(1126).intl;
          obj6.accessibilityLabel = intl2.string(_modDef4053["x/H32X"]);
          const items4 = [closure_6(IconActionButtonDefault, obj6)];
          const obj7 = { source: null, IconComponent: null, noMargin: true, onPress: null, accessibilityLabel: null };
          obj7.IconComponent = tmp2(9333).ThumbsDownIcon;
          obj7.onPress = function onPress() {
            const obj = SmartSearchActionCreators;
            obj.setResultFeedback({
              smartSearchQuery,
              hasPositiveFeedback: false,
              SearchSessionAnalyticsManager: SearchSessionAnalyticsManagerDefault,
            });
          };
          const intl3 = tmp2(1126).intl;
          obj7.accessibilityLabel = intl3.string(_modDef4053.FoToeH);
          items4[1] = closure_6(IconActionButtonDefault, obj7);
          obj5.children = items4;
          tmp7Result = closure_7(View, obj5);
        }
        items3[1] = tmp7Result;
        obj3.children = items3;
        tmp7Result2 = closure_7(View, obj3);
      }
      return tmp7Result2;
    };
