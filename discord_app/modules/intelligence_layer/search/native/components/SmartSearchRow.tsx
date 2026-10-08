// discord_app/modules/intelligence_layer/search/native/components/SmartSearchRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SmartSearchResultsStoreDefault from "../../SmartSearchResultsStore.tsx";
import SearchSessionAnalyticsManagerDefault from "../../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../../SmartSearchAnalyticsManager.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

const require = fn;
const View = fn(17).View;
SmartSearchResultsStoreDefault;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  collapsedFrame: { height: 217, overflow: "hidden" },
  expandedContent: { paddingBottom: nativeDefault.space.PX_40 },
  divider: null,
};
let obj3 = { paddingBottom: nativeDefault.space.PX_40 };
obj.divider = {
  height: 1,
  marginTop: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SmartSearchRowContainer(smartSearchQuery) {
        const cResult = smartSearchQuery(576).c(31);
        smartSearchQuery = smartSearchQuery.smartSearchQuery;
        ({ hasKeywordResults, entry } = smartSearchQuery);
        const tmp4 = closure_10();
        if (cResult[0] !== smartSearchQuery.requestKey) {
          const items = [smartSearchQuery.requestKey];
          cResult[0] = smartSearchQuery.requestKey;
          cResult[1] = items;
          let tmp5 = items;
        } else {
          tmp5 = cResult[1];
        }
        const obj = smartSearchQuery(576);
        const tmp6 = flashListContext(smartSearchQuery(8600).useRecyclingState(hasKeywordResults, tmp5), 2);
        const isCollapsed = tmp6[0];
        dependencyMap = tmp8;
        const tmpResult = smartSearchQuery(8600);
        const smartSearchRowViewability = smartSearchQuery(17157).useSmartSearchRowViewability();
        const tmpResult4 = smartSearchQuery(17157);
        flashListContext = smartSearchQuery(8600).useFlashListContext();
        if (cResult[2] === flashListContext) {
          if (cResult[3] === isCollapsed) {
            if (cResult[4] === tmp8) {
              if (cResult[5] === smartSearchQuery) {
                let tmp11 = cResult[6];
              }
              if (entry.status === tmp(12058).SmartSearchStatus.NOT_QUALIFIED) {
                return null;
              } else {
                const tmp12 = isCollapsed ? tmp4.collapsedFrame : tmp4.expandedContent;
                if (cResult[7] === entry) {
                  if (cResult[8] === hasKeywordResults) {
                    if (cResult[9] === isCollapsed) {
                      if (cResult[10] === smartSearchQuery) {
                        let tmp13 = cResult[11];
                      }
                      if (cResult[12] === entry.status) {
                        if (cResult[13] === isCollapsed) {
                          if (cResult[15] === entry.status) {
                            if (cResult[16] === tmp11) {
                              if (cResult[17] === hasKeywordResults) {
                                if (cResult[18] === isCollapsed) {
                                  let tmp24 = cResult[19];
                                }
                                if (cResult[20] === tmp12) {
                                  if (cResult[21] === tmp13) {
                                    if (cResult[22] === tmp16) {
                                      if (cResult[23] === tmp24) {
                                        let tmp28 = cResult[24];
                                      }
                                      if (cResult[25] === hasKeywordResults) {
                                        if (cResult[26] === tmp4.divider) {
                                          let tmp32 = cResult[27];
                                        }
                                        if (cResult[28] === tmp28) {
                                          if (cResult[29] === tmp32) {
                                            let tmp36 = cResult[30];
                                          }
                                          return tmp36;
                                        }
                                        let obj2 = { children: null };
                                        const items1 = [tmp28, tmp32];
                                        obj2.children = items1;
                                        const tmp39 = closure_9(View, obj2);
                                        cResult[28] = tmp28;
                                        cResult[29] = tmp32;
                                        cResult[30] = tmp39;
                                        tmp36 = tmp39;
                                      }
                                      let tmp33 = hasKeywordResults;
                                      if (hasKeywordResults) {
                                        let obj3 = { style: tmp4.divider };
                                        tmp33 = closure_8(View, obj3);
                                      }
                                      cResult[25] = hasKeywordResults;
                                      cResult[26] = tmp4.divider;
                                      cResult[27] = tmp33;
                                      tmp32 = tmp33;
                                    }
                                  }
                                }
                                let obj4 = { style: tmp12, children: null };
                                const items2 = [tmp13, tmp16, tmp24];
                                obj4.children = items2;
                                const tmp31 = closure_9(View, obj4);
                                cResult[20] = tmp12;
                                cResult[21] = tmp13;
                                cResult[22] = tmp16;
                                cResult[23] = tmp24;
                                cResult[24] = tmp31;
                                tmp28 = tmp31;
                              }
                            }
                          }
                          let tmp25 = hasKeywordResults;
                          if (hasKeywordResults) {
                            tmp25 = entry.status === tmp(12058).SmartSearchStatus.LOADED;
                          }
                          if (tmp25) {
                            const obj5 = { isCollapsed, onPress: tmp11 };
                            tmp25 = closure_8(isCollapsed(17172), obj5);
                          }
                          cResult[15] = entry.status;
                          cResult[16] = tmp11;
                          cResult[17] = hasKeywordResults;
                          cResult[18] = isCollapsed;
                          cResult[19] = tmp25;
                          tmp24 = tmp25;
                        }
                      }
                      if (isCollapsed) {
                        if (!tmpResult6.isSmartSearchEmptyOrErrored(entry.status)) {
                          let tmp19 = closure_8(isCollapsed(17170), { height: 72 });
                        }
                        cResult[12] = entry.status;
                        cResult[13] = isCollapsed;
                        cResult[14] = tmp19;
                        tmpResult6 = tmp(12056);
                      }
                      let tmp20 = null;
                      if (entry.status === tmp(12058).SmartSearchStatus.LOADING) {
                        tmp20 = closure_8(isCollapsed(17170), { height: 120 });
                      }
                      tmp19 = tmp20;
                    }
                  }
                }
                const obj6 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
                const tmp15 = closure_8(tmp(17158).SmartSearchContent, obj6);
                cResult[7] = entry;
                cResult[8] = hasKeywordResults;
                cResult[9] = isCollapsed;
                cResult[10] = smartSearchQuery;
                cResult[11] = tmp15;
                tmp13 = tmp15;
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
        const tmpResult5 = smartSearchQuery(8600);
      }
    : function SmartSearchRowContainer(smartSearchQuery) {
        smartSearchQuery = smartSearchQuery.smartSearchQuery;
        ({ hasKeywordResults, entry } = smartSearchQuery);
        let flashListContext;
        const tmp = closure_10();
        const items = [smartSearchQuery.requestKey];
        const tmp4 = flashListContext(smartSearchQuery(8600).useRecyclingState(hasKeywordResults, items), 2);
        const isCollapsed = tmp4[0];
        dependencyMap = tmp6;
        const obj = smartSearchQuery(8600);
        const smartSearchRowViewability = smartSearchQuery(17157).useSmartSearchRowViewability();
        let obj2 = smartSearchQuery(17157);
        flashListContext = smartSearchQuery(8600).useFlashListContext();
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
          const result = SmartSearchAnalyticsManagerDefault.trackSmartSearchAnswerToggled(
            { smartSearchQuery, isCollapsed: !first },
            SearchSessionAnalyticsManagerDefault,
          );
          const obj3 = { smartSearchQuery, isCollapsed: !first };
        }, items1);
        let tmp19Result = null;
        if (entry.status !== smartSearchQuery(12058).SmartSearchStatus.NOT_QUALIFIED) {
          let obj4 = { style: isCollapsed ? tmp.collapsedFrame : tmp.expandedContent, children: null };
          const obj5 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
          const items2 = [closure_8(tmp2(17158).SmartSearchContent, obj5), ,];
          if (isCollapsed) {
            if (!tmp2Result.isSmartSearchEmptyOrErrored(entry.status)) {
              let tmp11Result = closure_8(isCollapsed(17170), { height: 72 });
            }
            items2[1] = tmp11Result;
            let tmp11Result4 = hasKeywordResults;
            if (hasKeywordResults) {
              tmp11Result4 = entry.status === tmp2(12058).SmartSearchStatus.LOADED;
            }
            if (tmp11Result4) {
              const obj6 = { isCollapsed, onPress: callback };
              tmp11Result4 = closure_8(isCollapsed(17172), obj6);
            }
            items2[2] = tmp11Result4;
            obj4.children = items2;
            const items3 = [closure_9(View, obj4)];
            let tmp11Result5 = hasKeywordResults;
            if (hasKeywordResults) {
              const obj7 = { style: tmp.divider };
              tmp11Result5 = closure_8(View, obj7);
            }
            const obj8 = { children: null };
            items3[1] = tmp11Result5;
            obj8.children = items3;
            tmp19Result = closure_9(View, obj8);
            tmp2Result = tmp2(12056);
          }
          let tmp11Result6 = null;
          if (entry.status === tmp2(12058).SmartSearchStatus.LOADING) {
            tmp11Result6 = closure_8(isCollapsed(17170), { height: 120 });
          }
          tmp11Result = tmp11Result6;
        }
        return tmp19Result;
      },
);
ReactCompilerGating = fn(558);
let obj4 = {
  height: 1,
  marginTop: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SmartSearchRowConnected(smartSearchQuery) {
      const cResult = smartSearchQuery(576).c(9);
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
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
        }
        if (cResult[4] !== smartSearchQuery) {
          const items1 = [smartSearchQuery];
          cResult[4] = smartSearchQuery;
          cResult[5] = items1;
          let tmp7 = items1;
        } else {
          tmp7 = cResult[5];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
        if (null == stateFromStores) {
          return null;
        } else {
          if (cResult[6] === stateFromStores) {
          }
          const obj2 = {};
          const merged = Object.assign(smartSearchQuery);
          obj2.entry = stateFromStores;
          const tmp16 = closure_8(closure_11, obj2);
          cResult[6] = stateFromStores;
          cResult[7] = smartSearchQuery;
          cResult[8] = tmp16;
        }
        const tmpResult = tmp(504);
      }
      const fn = function n() {
        return SmartSearchResultsStore.getAnswer(smartSearchQuery.guildId, smartSearchQuery.requestKey);
      };
      cResult[1] = smartSearchQuery.guildId;
      cResult[2] = smartSearchQuery.requestKey;
      cResult[3] = fn;
      tmp6 = fn;
      const obj = smartSearchQuery(576);
      tmp = smartSearchQuery;
    }
  : function SmartSearchRowConnected(smartSearchQuery) {
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      const items = [SmartSearchResultsStore];
      const items1 = [smartSearchQuery];
      const stateFromStores = smartSearchQuery(504).useStateFromStores(
        items,
        () => SmartSearchResultsStore.getAnswer(smartSearchQuery.guildId, smartSearchQuery.requestKey),
        items1,
      );
      let tmp2 = null;
      if (null != stateFromStores) {
        const obj2 = {};
        const merged = Object.assign(smartSearchQuery);
        obj2.entry = stateFromStores;
        tmp2 = closure_8(closure_11, obj2);
      }
      return tmp2;
    };
