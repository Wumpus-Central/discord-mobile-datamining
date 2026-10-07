// === Module 16877: SmartSearchRow ===

// Module 16877 (SmartSearchRow)
import nativeDefault from "native" /* 587 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 11984 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12002 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12004 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const require = fn;
const View = fn(17).View;
SmartSearchResultsStoreDefault;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj = { collapsedFrame: { height: 217, overflow: "hidden" }, expandedContent: { paddingBottom: nativeDefault.space.PX_40 }, divider: null };
let obj3 = { paddingBottom: nativeDefault.space.PX_40 };
obj.divider = { height: 1, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((smartSearchQuery) => {
  const cResult = smartSearchQuery(576).c(33);
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
  const tmp6 = flashListContext(smartSearchQuery(8404).useRecyclingState(hasKeywordResults, tmp5), 2);
  const isCollapsed = tmp6[0];
  dependencyMap = tmp8;
  const tmpResult = smartSearchQuery(8404);
  const smartSearchRowViewability = smartSearchQuery(16878).useSmartSearchRowViewability();
  const tmpResult4 = smartSearchQuery(16878);
  flashListContext = smartSearchQuery(8404).useFlashListContext();
  if (cResult[2] === flashListContext) {
    if (cResult[3] === isCollapsed) {
      if (cResult[4] === tmp8) {
        if (cResult[5] === smartSearchQuery) {
          let tmp11 = cResult[6];
        }
        if (entry.status === tmp(11985).SmartSearchStatus.NOT_QUALIFIED) {
          return null;
        } else {
          const tmp12 = isCollapsed ? tmp4.collapsedFrame : tmp4.expandedContent;
          if (cResult[7] !== tmp12) {
            const items1 = [tmp12];
            cResult[7] = tmp12;
            cResult[8] = items1;
            let tmp13 = items1;
          } else {
            tmp13 = cResult[8];
          }
          if (cResult[9] === entry) {
            if (cResult[10] === hasKeywordResults) {
              if (cResult[11] === isCollapsed) {
                if (cResult[12] === smartSearchQuery) {
                  let tmp14 = cResult[13];
                }
                if (cResult[14] === entry.status) {
                  if (cResult[15] === isCollapsed) {
                    if (cResult[17] === entry.status) {
                      if (cResult[18] === tmp11) {
                        if (cResult[19] === hasKeywordResults) {
                          if (cResult[20] === isCollapsed) {
                            let tmp25 = cResult[21];
                          }
                          if (cResult[22] === tmp13) {
                            if (cResult[23] === tmp14) {
                              if (cResult[24] === tmp17) {
                                if (cResult[25] === tmp25) {
                                  let tmp29 = cResult[26];
                                }
                                if (cResult[27] === hasKeywordResults) {
                                  if (cResult[28] === tmp4.divider) {
                                    let tmp33 = cResult[29];
                                  }
                                  if (cResult[30] === tmp29) {
                                    if (cResult[31] === tmp33) {
                                      let tmp37 = cResult[32];
                                    }
                                    return tmp37;
                                  }
                                  let obj2 = { children: null };
                                  const items2 = [tmp29, tmp33];
                                  obj2.children = items2;
                                  const tmp40 = closure_9(View, obj2);
                                  cResult[30] = tmp29;
                                  cResult[31] = tmp33;
                                  cResult[32] = tmp40;
                                  tmp37 = tmp40;
                                }
                                let tmp34 = hasKeywordResults;
                                if (hasKeywordResults) {
                                  let obj3 = { style: tmp4.divider };
                                  tmp34 = closure_8(View, obj3);
                                }
                                cResult[27] = hasKeywordResults;
                                cResult[28] = tmp4.divider;
                                cResult[29] = tmp34;
                                tmp33 = tmp34;
                              }
                            }
                          }
                          let obj4 = { style: tmp13, children: null };
                          const items3 = [tmp14, tmp17, tmp25];
                          obj4.children = items3;
                          const tmp32 = closure_9(View, obj4);
                          cResult[22] = tmp13;
                          cResult[23] = tmp14;
                          cResult[24] = tmp17;
                          cResult[25] = tmp25;
                          cResult[26] = tmp32;
                          tmp29 = tmp32;
                        }
                      }
                    }
                    let tmp26 = hasKeywordResults;
                    if (hasKeywordResults) {
                      tmp26 = entry.status === tmp(11985).SmartSearchStatus.LOADED;
                    }
                    if (tmp26) {
                      const obj5 = { isCollapsed, onPress: tmp11 };
                      tmp26 = closure_8(isCollapsed(16891), obj5);
                    }
                    cResult[17] = entry.status;
                    cResult[18] = tmp11;
                    cResult[19] = hasKeywordResults;
                    cResult[20] = isCollapsed;
                    cResult[21] = tmp26;
                    tmp25 = tmp26;
                  }
                }
                if (isCollapsed) {
                  if (!tmpResult6.isSmartSearchEmptyOrErrored(entry.status)) {
                    let tmp20 = closure_8(isCollapsed(16889), { height: 72 });
                  }
                  cResult[14] = entry.status;
                  cResult[15] = isCollapsed;
                  cResult[16] = tmp20;
                  tmpResult6 = tmp(11983);
                }
                let tmp21 = null;
                if (entry.status === tmp(11985).SmartSearchStatus.LOADING) {
                  tmp21 = closure_8(isCollapsed(16889), { height: 120 });
                }
                tmp20 = tmp21;
              }
            }
          }
          const obj6 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
          const tmp16 = closure_8(tmp(16879).SmartSearchContent, obj6);
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
  const tmpResult5 = smartSearchQuery(8404);
}) : ((smartSearchQuery) => {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  ({ hasKeywordResults, entry } = smartSearchQuery);
  let flashListContext;
  const tmp = closure_10();
  const items = [smartSearchQuery.requestKey];
  const tmp4 = flashListContext(smartSearchQuery(8404).useRecyclingState(hasKeywordResults, items), 2);
  const isCollapsed = tmp4[0];
  dependencyMap = tmp6;
  const obj = smartSearchQuery(8404);
  const smartSearchRowViewability = smartSearchQuery(16878).useSmartSearchRowViewability();
  let obj2 = smartSearchQuery(16878);
  flashListContext = smartSearchQuery(8404).useFlashListContext();
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
  if (entry.status !== smartSearchQuery(11985).SmartSearchStatus.NOT_QUALIFIED) {
    let obj4 = { style: null, children: null };
    const items2 = [isCollapsed ? tmp.collapsedFrame : tmp.expandedContent];
    obj4.style = items2;
    const obj5 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
    const items3 = [closure_8(tmp2(16879).SmartSearchContent, obj5), , ];
    if (isCollapsed) {
      if (!tmp2Result.isSmartSearchEmptyOrErrored(entry.status)) {
        let tmp11Result = closure_8(isCollapsed(16889), { height: 72 });
      }
      items3[1] = tmp11Result;
      let tmp11Result4 = hasKeywordResults;
      if (hasKeywordResults) {
        tmp11Result4 = entry.status === tmp2(11985).SmartSearchStatus.LOADED;
      }
      if (tmp11Result4) {
        const obj6 = { isCollapsed, onPress: callback };
        tmp11Result4 = closure_8(isCollapsed(16891), obj6);
      }
      items3[2] = tmp11Result4;
      obj4.children = items3;
      const items4 = [closure_9(View, obj4), ];
      let tmp11Result5 = hasKeywordResults;
      if (hasKeywordResults) {
        const obj7 = { style: tmp.divider };
        tmp11Result5 = closure_8(View, obj7);
      }
      const obj8 = { children: null };
      items4[1] = tmp11Result5;
      obj8.children = items4;
      tmp19Result = closure_9(View, obj8);
      tmp2Result = tmp2(11983);
    }
    let tmp11Result6 = null;
    if (entry.status === tmp2(11985).SmartSearchStatus.LOADING) {
      tmp11Result6 = closure_8(isCollapsed(16889), { height: 120 });
    }
    tmp11Result = tmp11Result6;
  }
  return tmp19Result;
}));
ReactCompilerGating = fn(558);
let obj4 = { height: 1, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((smartSearchQuery) => {
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
  const fn = function l() {
    return SmartSearchResultsStore.getAnswer(smartSearchQuery.guildId, smartSearchQuery.requestKey);
  };
  cResult[1] = smartSearchQuery.guildId;
  cResult[2] = smartSearchQuery.requestKey;
  cResult[3] = fn;
  tmp6 = fn;
  const obj = smartSearchQuery(576);
  tmp = smartSearchQuery;
}) : ((smartSearchQuery) => {
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
});