// discord_app/modules/intelligence_layer/search/native/components/SmartSearchRow.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SearchSessionAnalyticsManagerDefault from "../../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../../SmartSearchAnalyticsManager.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import SmartSearchResultsStore from "../../SmartSearchResultsStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let dependencyMap, obj1, scrollToTopResult, smartSearchQuery, tmp3;

let c9;
let metroImportAll;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { collapsedFrame: { height: 217, overflow: "hidden" }, expandedContent: obj2, divider: obj3 };
obj2 = { paddingBottom: nativeDefault.space.PX_40 };
createStyles = createStyles.createStyles;
obj3 = {
  height: 1,
  marginTop: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_10 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (smartSearchQuery) => {
        let closure_2;
        let entry;
        let flashListContext;
        let hasKeywordResults;
        let items2;
        let items3;
        let tmp5;
        const obj = smartSearchQuery(576);
        const cResult = obj.c(33);
        smartSearchQuery = smartSearchQuery.smartSearchQuery;
        ({ hasKeywordResults, entry } = smartSearchQuery);
        const tmp4 = closure_10();
        if (cResult[0] !== smartSearchQuery.requestKey) {
          const items = [smartSearchQuery.requestKey];
          cResult[0] = smartSearchQuery.requestKey;
          cResult[1] = items;
          tmp5 = items;
        } else {
          tmp5 = cResult[1];
        }
        const tmpResult = smartSearchQuery(8404);
        const tmp6 = flashListContext(tmpResult.useRecyclingState(hasKeywordResults, tmp5), 2);
        const isCollapsed = tmp6[0];
        dependencyMap = tmp8;
        const tmpResult4 = smartSearchQuery(16878);
        const smartSearchRowViewability = tmpResult4.useSmartSearchRowViewability();
        const tmpResult5 = smartSearchQuery(8404);
        flashListContext = tmpResult5.useFlashListContext();
        if (cResult[2] === flashListContext) {
          if (cResult[3] === isCollapsed) {
            if (cResult[4] === tmp6[1]) {
              let tmp11;
              if (cResult[5] === smartSearchQuery) {
                tmp11 = cResult[6];
              }
              if (entry.status === smartSearchQuery(11985).SmartSearchStatus.NOT_QUALIFIED) {
                return null;
              } else {
                let tmp13;
                const tmp12 = isCollapsed ? tmp4.collapsedFrame : tmp4.expandedContent;
                if (cResult[7] !== tmp12) {
                  const items1 = [tmp12];
                  cResult[7] = tmp12;
                  cResult[8] = items1;
                  tmp13 = items1;
                } else {
                  tmp13 = cResult[8];
                }
                if (cResult[9] === entry) {
                  if (cResult[10] === hasKeywordResults) {
                    if (cResult[11] === isCollapsed) {
                      let tmp14;
                      let tmp17;
                      if (cResult[12] === smartSearchQuery) {
                        tmp14 = cResult[13];
                      }
                      if (cResult[14] === entry.status) {
                        if (cResult[15] === isCollapsed) {
                          tmp17 = cResult[16];
                        }
                        if (cResult[17] === entry.status) {
                          if (cResult[18] === tmp11) {
                            if (cResult[19] === hasKeywordResults) {
                              let tmp24;
                              if (cResult[20] === isCollapsed) {
                                tmp24 = cResult[21];
                              }
                              if (cResult[22] === tmp13) {
                                if (cResult[23] === tmp14) {
                                  if (cResult[24] === tmp17) {
                                    let tmp28;
                                    if (cResult[25] === tmp24) {
                                      tmp28 = cResult[26];
                                    }
                                    if (cResult[27] === hasKeywordResults) {
                                      let tmp32;
                                      if (cResult[28] === tmp4.divider) {
                                        tmp32 = cResult[29];
                                      }
                                      if (cResult[30] === tmp28) {
                                        let tmp36;
                                        if (cResult[31] === tmp32) {
                                          tmp36 = cResult[32];
                                        }
                                        return tmp36;
                                      }
                                      let obj2 = { children: items2 };
                                      items2 = [tmp28, tmp32];
                                      const tmp39 = closure_9(View, obj2);
                                      cResult[30] = tmp28;
                                      cResult[31] = tmp32;
                                      cResult[32] = tmp39;
                                      tmp36 = tmp39;
                                    }
                                    let tmp33 = hasKeywordResults;
                                    if (tmp33) {
                                      let obj3 = { style: tmp4.divider };
                                      tmp33 = closure_8(View, obj3);
                                    }
                                    cResult[27] = hasKeywordResults;
                                    cResult[28] = tmp4.divider;
                                    cResult[29] = tmp33;
                                    tmp32 = tmp33;
                                  }
                                }
                              }
                              let obj4 = { style: tmp13, children: items3 };
                              items3 = [tmp14, tmp17, tmp24];
                              const tmp31 = closure_9(View, obj4);
                              cResult[22] = tmp13;
                              cResult[23] = tmp14;
                              cResult[24] = tmp17;
                              cResult[25] = tmp24;
                              cResult[26] = tmp31;
                              tmp28 = tmp31;
                            }
                          }
                        }
                        let tmp25 = hasKeywordResults && entry.status === tmp(11985).SmartSearchStatus.LOADED;
                        if (tmp25) {
                          const obj5 = { isCollapsed, onPress: tmp11 };
                          tmp25 = closure_8(isCollapsed(16891), obj5);
                        }
                        cResult[17] = entry.status;
                        cResult[18] = tmp11;
                        cResult[19] = hasKeywordResults;
                        cResult[20] = isCollapsed;
                        cResult[21] = tmp25;
                        tmp24 = tmp25;
                      }
                      if (isCollapsed) {
                        let tmp20;
                        const tmpResult6 = smartSearchQuery(11983);
                        if (!tmpResult6.isSmartSearchEmptyOrErrored(entry.status)) {
                          tmp20 = closure_8(isCollapsed(16889), { height: 72 });
                        }
                        cResult[14] = entry.status;
                        cResult[15] = isCollapsed;
                        cResult[16] = tmp20;
                        tmp17 = tmp20;
                      }
                      let tmp21 = null;
                      if (entry.status === smartSearchQuery(11985).SmartSearchStatus.LOADING) {
                        tmp21 = closure_8(isCollapsed(16889), { height: 120 });
                      }
                      tmp20 = tmp21;
                    }
                  }
                }
                const obj6 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
                const tmp16 = closure_8(smartSearchQuery(16879).SmartSearchContent, obj6);
                cResult[9] = entry;
                cResult[10] = hasKeywordResults;
                cResult[11] = isCollapsed;
                cResult[12] = smartSearchQuery;
                cResult[13] = tmp16;
                tmp14 = tmp16;
              }
            }
          }
        }
        class E {
          constructor() {
            tmp = !closure_1;
            tmp2 = closure_2(tmp);
            if (!closure_1) {
              obj = closure_3;
              tmp3 = null;
              if (closure_3 != null) {
                ref = obj.getRef();
                if (ref != null) {
                  obj1 = { animated: null };
                  tmp4 = closure_6;
                  obj1.animated = !closure_6.useReducedMotion;
                  scrollToTopResult = ref.scrollToTop(obj1);
                }
              }
            }
            obj4 = closure_1(closure_2[12]);
            obj6 = { smartSearchQuery, isCollapsed: tmp };
            result = obj4.trackSmartSearchAnswerToggled(obj6, closure_1(closure_2[13]));
            return;
          }
        }
        cResult[2] = flashListContext;
        cResult[3] = isCollapsed;
        cResult[4] = tmp6[1];
        cResult[5] = smartSearchQuery;
        cResult[6] = E;
        tmp11 = E;
      }
    : (smartSearchQuery) => {
        let closure_2;
        let entry;
        let hasKeywordResults;
        let items2;
        smartSearchQuery = smartSearchQuery.smartSearchQuery;
        ({ hasKeywordResults, entry } = smartSearchQuery);
        let flashListContext;
        const tmp = closure_10();
        const items = [smartSearchQuery.requestKey];
        const obj = smartSearchQuery(8404);
        const tmp4 = flashListContext(obj.useRecyclingState(hasKeywordResults, items), 2);
        const isCollapsed = tmp4[0];
        dependencyMap = tmp6;
        let obj2 = smartSearchQuery(16878);
        const smartSearchRowViewability = obj2.useSmartSearchRowViewability();
        let obj3 = smartSearchQuery(8404);
        flashListContext = obj3.useFlashListContext();
        const items1 = [flashListContext, isCollapsed, tmp4[1], smartSearchQuery];
        const callback = react.useCallback(() => {
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
          const obj3 = { smartSearchQuery, isCollapsed: !first };
          const obj4 = SmartSearchAnalyticsManagerDefault;
          const result = obj4.trackSmartSearchAnswerToggled(obj3, SearchSessionAnalyticsManagerDefault);
        }, items1);
        let tmp19Result = null;
        if (entry.status !== smartSearchQuery(11985).SmartSearchStatus.NOT_QUALIFIED) {
          let obj4 = { style: items2, children: null };
          items2 = [isCollapsed ? tmp.collapsedFrame : tmp.expandedContent];
          const obj5 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
          const items3 = [closure_8(tmp2(16879).SmartSearchContent, obj5), ,];
          if (isCollapsed) {
            let tmp11Result;
            const tmp2Result = smartSearchQuery(11983);
            if (!tmp2Result.isSmartSearchEmptyOrErrored(entry.status)) {
              tmp11Result = closure_8(isCollapsed(16889), { height: 72 });
            }
            items3[1] = tmp11Result;
            let tmp11Result4 = hasKeywordResults && entry.status === tmp2(11985).SmartSearchStatus.LOADED;
            if (tmp11Result4) {
              const obj6 = { isCollapsed, onPress: callback };
              tmp11Result4 = closure_8(isCollapsed(16891), obj6);
            }
            items3[2] = tmp11Result4;
            obj4.children = items3;
            const items4 = [closure_9(View, obj4)];
            let tmp11Result5 = hasKeywordResults;
            if (tmp11Result5) {
              const obj7 = { style: tmp.divider };
              tmp11Result5 = closure_8(View, obj7);
            }
            const obj8 = { children: items4 };
            items4[1] = tmp11Result5;
            tmp19Result = closure_9(View, obj8);
          }
          let tmp11Result6 = null;
          if (entry.status === smartSearchQuery(11985).SmartSearchStatus.LOADING) {
            tmp11Result6 = closure_8(isCollapsed(16889), { height: 120 });
          }
          tmp11Result = tmp11Result6;
        }
        return tmp19Result;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (smartSearchQuery) => {
      let first;
      const obj = smartSearchQuery(576);
      const cResult = obj.c(9);
      const tmp = smartSearchQuery;
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SmartSearchResultsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === smartSearchQuery.guildId) {
        let tmp6;
        let tmp7;
        if (cResult[2] === smartSearchQuery.requestKey) {
          tmp6 = cResult[3];
        }
        if (cResult[4] !== smartSearchQuery) {
          const items1 = [smartSearchQuery];
          cResult[4] = smartSearchQuery;
          cResult[5] = items1;
          tmp7 = items1;
        } else {
          tmp7 = cResult[5];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
        let tmp9 = null;
        if (null != stateFromStores) {
          if (cResult[6] === stateFromStores) {
            let tmp10;
            if (cResult[7] === smartSearchQuery) {
              tmp10 = cResult[8];
            }
            tmp9 = tmp10;
          }
          const obj2 = { entry: stateFromStores };
          const merged = Object.assign(smartSearchQuery);
          const tmp16 = closure_8(closure_11, obj2);
          cResult[6] = stateFromStores;
          cResult[7] = smartSearchQuery;
          cResult[8] = tmp16;
          tmp10 = tmp16;
        }
        return tmp9;
      }
      const fn = function l() {
        return SmartSearchResultsStore.getAnswer(smartSearchQuery.guildId, smartSearchQuery.requestKey);
      };
      cResult[1] = smartSearchQuery.guildId;
      cResult[2] = smartSearchQuery.requestKey;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (smartSearchQuery) => {
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      const items = [SmartSearchResultsStore];
      const items1 = [smartSearchQuery];
      const obj = smartSearchQuery(504);
      const stateFromStores = obj.useStateFromStores(
        items,
        () => SmartSearchResultsStore.getAnswer(smartSearchQuery.guildId, smartSearchQuery.requestKey),
        items1,
      );
      let tmp2 = null;
      if (null != stateFromStores) {
        const obj2 = { entry: stateFromStores };
        const merged = Object.assign(smartSearchQuery);
        tmp2 = closure_8(closure_11, obj2);
      }
      return tmp2;
    };
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default tmp5;
