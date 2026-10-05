// discord_app/modules/intelligence_layer/search/native/components/SmartSearchRow.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SearchConstants from "../../../../search/SearchConstants.tsx";
import SmartSearchConstants from "../../SmartSearchConstants.tsx";
import MessageSearchResultParserDefault from "../../../../search/native/message_parsers/MessageSearchResultParser.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator_mod from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import SmartSearchResultsStore from "../../SmartSearchResultsStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c4, c5, citation, dependencyMap, importDefault, obj1, scrollToTopResult, tmp3;

let closure_12;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
const MAX_PRESENTED_CITATIONS = SmartSearchConstants.MAX_PRESENTED_CITATIONS;
const lineClamp = SearchConstants.SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
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
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (hasKeywordResults) {
      let closure_3;
      let entry;
      let guildId;
      let isCollapsed;
      let items;
      let onPressMessageItem;
      let searchContext;
      let smartSearchQuery;
      let tmp4;
      let tmp6;
      const tmp = onPressMessageItem;
      let obj = onPressMessageItem(576);
      const cResult = obj.c(31);
      ({ smartSearchQuery, entry, isCollapsed } = hasKeywordResults);
      ({ searchContext, guildId } = smartSearchQuery);
      if (cResult[0] !== searchContext) {
        let obj2 = { searchContext };
        cResult[0] = searchContext;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = tmp(16812);
      onPressMessageItem = tmpResult.useOnPressMessageItem(tmp4);
      if (cResult[2] !== searchContext) {
        let obj3 = { searchContext };
        cResult[2] = searchContext;
        cResult[3] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[3];
      }
      const tmpResult2 = tmp(16812);
      const onPressConversationCitation = tmpResult2.useOnPressConversationCitation(tmp6);
      if (cResult[4] === onPressConversationCitation) {
        let tmp8;
        let arr3;
        let tmp13;
        if (cResult[5] === onPressMessageItem) {
          tmp8 = cResult[6];
        }
        dependencyMap = tmp8;
        const citations = entry.citations;
        let arr2 = citations;
        if (hasKeywordResults.hasKeywordResults) {
          let tmp9;
          if (cResult[7] !== citations) {
            const substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
            cResult[7] = citations;
            cResult[8] = substr;
            tmp9 = substr;
          } else {
            tmp9 = cResult[8];
          }
          arr2 = tmp9;
        }
        if (cResult[9] !== arr2) {
          const mapped = arr2.map((citation, index) => {
            const obj = { citation, isChannelGroupStart: tmp };
            return obj;
          });
          cResult[9] = arr2;
          cResult[10] = mapped;
          arr3 = mapped;
        } else {
          arr3 = cResult[10];
        }
        if (cResult[11] !== entry.queryText) {
          const self = this;
          const self2 = this;
          const tmp16 = new onPressConversationCitation(16857)(entry.queryText, lineClamp);
          const tmp17 = tmp16;
          cResult[11] = entry.queryText;
          cResult[12] = tmp16;
          tmp13 = tmp16;
        } else {
          tmp13 = cResult[12];
        }
        _slicedToArray = tmp13;
        const status = entry.status;
        if (tmp(11989).SmartSearchStatus.NOT_QUALIFIED === status) {
          return null;
        } else if (tmp(11989).SmartSearchStatus.LOADING === status) {
          let tmp33;
          if (cResult[13] !== isCollapsed) {
            let obj4 = { isCollapsed };
            const tmp36 = closure_11(onPressConversationCitation(16863), obj4);
            cResult[13] = isCollapsed;
            cResult[14] = tmp36;
            tmp33 = tmp36;
          } else {
            tmp33 = cResult[14];
          }
          return tmp33;
        } else if (tmp(11989).SmartSearchStatus.LOADED === status) {
          if (cResult[15] === arr2) {
            if (cResult[16] === entry.answerText) {
              let tmp22;
              let tmp27;
              if (cResult[17] === guildId) {
                tmp22 = cResult[18];
              }
              if (cResult[19] === arr3) {
                if (cResult[20] === tmp8) {
                  if (cResult[21] === tmp13) {
                    tmp27 = cResult[22];
                  }
                  if (cResult[26] === tmp22) {
                    let tmp30;
                    if (cResult[27] === tmp27) {
                      tmp30 = cResult[28];
                    }
                    return tmp30;
                  }
                  class N {
                    constructor(arg0) {
                      citation = hasKeywordResults.citation;
                      if (hasKeywordResults.isChannelGroupStart) {
                        tmp3 = closure_1;
                        tmp4 = closure_2;
                        HeaderlessMessageRow = closure_1(closure_2[18]);
                      } else {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        HeaderlessMessageRow = closure_0(closure_2[18]).HeaderlessMessageRow;
                      }
                      obj = {
                        message: closure_3.parse(citation.message),
                        onPress() {
                          return closure_2(citation);
                        },
                        lineClamp: closure_1_10,
                      };
                      return closure_1_11(HeaderlessMessageRow, obj, citation.messageId);
                    }
                  }
                  let obj5 = { children: items };
                  items = [tmp22, tmp27];
                  const tmp32 = closure_12(View, obj5);
                  cResult[26] = tmp22;
                  cResult[27] = tmp27;
                  cResult[28] = tmp32;
                  tmp30 = tmp32;
                }
              }
              if (cResult[23] === tmp8) {
                let tmp28;
                if (cResult[24] === tmp13) {
                  tmp28 = cResult[25];
                }
                const mapped1 = arr3.map(tmp28);
                class N {
                  constructor(arg0) {
                    citation = hasKeywordResults.citation;
                    if (hasKeywordResults.isChannelGroupStart) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      HeaderlessMessageRow = closure_1(closure_2[18]);
                    } else {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      HeaderlessMessageRow = closure_0(closure_2[18]).HeaderlessMessageRow;
                    }
                    obj = {
                      message: closure_3.parse(citation.message),
                      onPress() {
                        return closure_2(citation);
                      },
                      lineClamp: closure_1_10,
                    };
                    return closure_1_11(HeaderlessMessageRow, obj, citation.messageId);
                  }
                }
                cResult[20] = tmp8;
                cResult[21] = tmp13;
                cResult[22] = mapped1;
                tmp27 = mapped1;
              }
              class N {
                constructor(arg0) {
                  citation = hasKeywordResults.citation;
                  if (hasKeywordResults.isChannelGroupStart) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    HeaderlessMessageRow = closure_1(closure_2[18]);
                  } else {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    HeaderlessMessageRow = closure_0(closure_2[18]).HeaderlessMessageRow;
                  }
                  obj = {
                    message: closure_3.parse(citation.message),
                    onPress() {
                      return closure_2(citation);
                    },
                    lineClamp: closure_1_10,
                  };
                  return closure_1_11(HeaderlessMessageRow, obj, citation.messageId);
                }
              }
              cResult[23] = tmp8;
              cResult[24] = tmp13;
              cResult[25] = N;
              tmp28 = N;
            }
          }
          tmp25[0] = entry.answerText;
          tmp25[1] = arr2;
          tmp25[2] = guildId;
          const tmp26 = closure_11(onPressConversationCitation(16864), tmp25);
          cResult[15] = arr2;
          cResult[16] = entry.answerText;
          cResult[17] = guildId;
          cResult[18] = tmp26;
          tmp22 = tmp26;
        } else {
          let tmp18;
          if (tmp(11989).SmartSearchStatus.ERROR !== status) {
            const EMPTY = tmp(11989).SmartSearchStatus.EMPTY;
          }
          if (cResult[29] !== smartSearchQuery) {
            const obj6 = { smartSearchQuery: null, source: "smart_search_row" };
            class N {
              constructor(arg0) {
                citation = hasKeywordResults.citation;
                if (hasKeywordResults.isChannelGroupStart) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  HeaderlessMessageRow = closure_1(closure_2[18]);
                } else {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  HeaderlessMessageRow = closure_0(closure_2[18]).HeaderlessMessageRow;
                }
                obj = {
                  message: closure_3.parse(citation.message),
                  onPress() {
                    return closure_2(citation);
                  },
                  lineClamp: closure_1_10,
                };
                return closure_1_11(HeaderlessMessageRow, obj, citation.messageId);
              }
            }
            const tmp21 = closure_11(onPressConversationCitation(16804), obj6);
            cResult[29] = smartSearchQuery;
            cResult[30] = tmp21;
            tmp18 = tmp21;
          } else {
            tmp18 = cResult[30];
          }
          return tmp18;
        }
      }
      _require = _asyncToGenerator(async (arg0) => {
        closure_0 = arg0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_2 = tmp;
                let closure_1 = tmp4;
                if ("conversation" === closure_0.sourceType) {
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: closure_1(tmp17), done: false };
                  return obj4;
                }
              }
            } else if (1 === c4) {
              c3 = 0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c3 = 0;
              c5 = 3;
              const obj = { value: undefined, done: true };
              return obj;
            }
            closure_0(closure_0.channelId, closure_0.messageId);
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp12) {
            if (0 === c3) {
              c5 = 3;
              throw tmp12;
            } else {
              c4 = 1;
            }
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[4] = onPressConversationCitation;
      cResult[5] = onPressMessageItem;
      cResult[6] = fn;
      tmp8 = fn;
    }
  : (entry) => {
      let closure_4;
      let hasKeywordResults;
      let items4;
      let smartSearchQuery;
      ({ smartSearchQuery, hasKeywordResults } = entry);
      entry = entry.entry;
      let onPressMessageItem;
      _asyncToGenerator = undefined;
      let memo;
      const searchContext = smartSearchQuery.searchContext;
      const isCollapsed = entry.isCollapsed;
      const guildId = smartSearchQuery.guildId;
      let obj = hasKeywordResults(onPressMessageItem[13]);
      onPressMessageItem = obj.useOnPressMessageItem({ searchContext });
      let obj2 = hasKeywordResults(onPressMessageItem[13]);
      const onPressConversationCitation = obj2.useOnPressConversationCitation({ searchContext });
      const useCallback = memo.useCallback;
      let closure_0 = _asyncToGenerator(async (arg0) => {
        let closure_2;
        closure_0 = arg0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let v0;
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp4;
                if ("conversation" === closure_0.sourceType) {
                  v0 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: v0(tmp17), done: false };
                  return obj4;
                }
              }
            } else if (1 === c4) {
              v0 = 0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              v0 = 0;
              c5 = 3;
              const obj = { value: undefined, done: true };
              return obj;
            }
            tmp(closure_0.channelId, closure_0.messageId);
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp12) {
            if (0 === v0) {
              c5 = 3;
              throw tmp12;
            } else {
              c4 = 1;
            }
          }
        }
      });
      const items = [onPressMessageItem, onPressConversationCitation];
      _asyncToGenerator = useCallback(function () {
        return closure_0(...arguments);
      }, items);
      const items1 = [entry.citations, hasKeywordResults];
      memo = memo.useMemo(() => {
        const citations = entry.citations;
        let substr = citations;
        if (hasKeywordResults) {
          substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
        }
        return substr;
      }, items1);
      const items2 = [memo];
      const memo1 = memo.useMemo(() => {
        let closure_0 = memo;
        return memo.map((citation, index) => {
          const obj = { citation, isChannelGroupStart: tmp };
          return obj;
        });
      }, items2);
      const items3 = [entry.queryText];
      let closure_6 = memo.useMemo(() => {
        const tmp = new MessageSearchResultParserDefault(entry.queryText, lineClamp);
        return tmp;
      }, items3);
      const status = entry.status;
      if (hasKeywordResults(onPressMessageItem[15]).SmartSearchStatus.NOT_QUALIFIED === status) {
        return null;
      } else if (hasKeywordResults(onPressMessageItem[15]).SmartSearchStatus.LOADING === status) {
        let obj3 = { isCollapsed };
        return closure_11(entry(onPressMessageItem[16]), obj3);
      } else if (hasKeywordResults(onPressMessageItem[15]).SmartSearchStatus.LOADED === status) {
        let obj4 = { children: items4 };
        let obj5 = { answerText: entry.answerText, citations: memo, guildId };
        items4 = [
          closure_11(entry(onPressMessageItem[17]), obj5),
          memo1.map((citation) => {
            let HeaderlessMessageRow;
            citation = citation.citation;
            if (citation.isChannelGroupStart) {
              HeaderlessMessageRow = entry(onPressMessageItem[18]);
            } else {
              HeaderlessMessageRow = hasKeywordResults(onPressMessageItem[18]).HeaderlessMessageRow;
            }
            const obj = {
              message: closure_6.parse(citation.message),
              onPress() {
                return closure_4(citation);
              },
              lineClamp,
            };
            return closure_1_11(HeaderlessMessageRow, obj, citation.messageId);
          }),
        ];
        return closure_12(closure_6, obj4);
      } else {
        if (hasKeywordResults(onPressMessageItem[15]).SmartSearchStatus.ERROR !== status) {
          const EMPTY = hasKeywordResults(tmp2[15]).SmartSearchStatus.EMPTY;
        }
        const obj6 = { smartSearchQuery, source: "smart_search_row" };
        return closure_11(entry(onPressMessageItem[19]), obj6);
      }
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let closure_1;
        let entry;
        let flashListContext;
        let hasKeywordResults;
        let isCollapsed;
        let items2;
        let items3;
        let smartSearchQuery;
        let tmp5;
        const obj = isCollapsed(flashListContext[12]);
        const cResult = obj.c(32);
        ({ smartSearchQuery, hasKeywordResults, entry } = arg0);
        const tmp4 = closure_13();
        if (cResult[0] !== smartSearchQuery.requestKey) {
          const items = [smartSearchQuery.requestKey];
          cResult[0] = smartSearchQuery.requestKey;
          cResult[1] = items;
          tmp5 = items;
        } else {
          tmp5 = cResult[1];
        }
        const tmpResult = isCollapsed(flashListContext[20]);
        const tmp6 = _slicedToArray(tmpResult.useRecyclingState(hasKeywordResults, tmp5), 2);
        isCollapsed = tmp6[0];
        importDefault = tmp8;
        const tmpResult3 = isCollapsed(flashListContext[20]);
        flashListContext = tmpResult3.useFlashListContext();
        if (cResult[2] === flashListContext) {
          if (cResult[3] === isCollapsed) {
            let tmp10;
            if (cResult[4] === tmp6[1]) {
              tmp10 = cResult[5];
            }
            if (entry.status === isCollapsed(flashListContext[15]).SmartSearchStatus.NOT_QUALIFIED) {
              return null;
            } else {
              let tmp12;
              const tmp11 = isCollapsed ? tmp4.collapsedFrame : tmp4.expandedContent;
              if (cResult[6] !== tmp11) {
                const items1 = [tmp11];
                cResult[6] = tmp11;
                cResult[7] = items1;
                tmp12 = items1;
              } else {
                tmp12 = cResult[7];
              }
              if (cResult[8] === entry) {
                if (cResult[9] === hasKeywordResults) {
                  if (cResult[10] === isCollapsed) {
                    let tmp13;
                    let tmp17;
                    if (cResult[11] === smartSearchQuery) {
                      tmp13 = cResult[12];
                    }
                    if (cResult[13] === entry.status) {
                      if (cResult[14] === isCollapsed) {
                        tmp17 = cResult[15];
                      }
                      if (cResult[16] === entry.status) {
                        if (cResult[17] === tmp10) {
                          if (cResult[18] === hasKeywordResults) {
                            let tmp24;
                            if (cResult[19] === isCollapsed) {
                              tmp24 = cResult[20];
                            }
                            if (cResult[21] === tmp12) {
                              if (cResult[22] === tmp13) {
                                if (cResult[23] === tmp17) {
                                  let tmp28;
                                  if (cResult[24] === tmp24) {
                                    tmp28 = cResult[25];
                                  }
                                  if (cResult[26] === hasKeywordResults) {
                                    let tmp32;
                                    if (cResult[27] === tmp4.divider) {
                                      tmp32 = cResult[28];
                                    }
                                    if (cResult[29] === tmp28) {
                                      let tmp36;
                                      if (cResult[30] === tmp32) {
                                        tmp36 = cResult[31];
                                      }
                                      return tmp36;
                                    }
                                    let obj2 = { children: items2 };
                                    items2 = [tmp28, tmp32];
                                    const tmp39 = closure_12(View, obj2);
                                    cResult[29] = tmp28;
                                    cResult[30] = tmp32;
                                    cResult[31] = tmp39;
                                    tmp36 = tmp39;
                                  }
                                  let tmp33 = hasKeywordResults;
                                  if (tmp33) {
                                    const obj3 = { style: tmp4.divider };
                                    tmp33 = closure_11(View, obj3);
                                  }
                                  cResult[26] = hasKeywordResults;
                                  cResult[27] = tmp4.divider;
                                  cResult[28] = tmp33;
                                  tmp32 = tmp33;
                                }
                              }
                            }
                            const obj4 = { style: tmp12, children: items3 };
                            items3 = [tmp13, tmp17, tmp24];
                            const tmp31 = closure_12(View, obj4);
                            cResult[21] = tmp12;
                            cResult[22] = tmp13;
                            cResult[23] = tmp17;
                            cResult[24] = tmp24;
                            cResult[25] = tmp31;
                            tmp28 = tmp31;
                          }
                        }
                      }
                      let tmp25 = hasKeywordResults && entry.status === tmp(tmp2[15]).SmartSearchStatus.LOADED;
                      if (tmp25) {
                        const obj5 = { isCollapsed, onPress: tmp10 };
                        tmp25 = closure_11(require("SmartSearchExpandButton"), obj5);
                      }
                      cResult[16] = entry.status;
                      cResult[17] = tmp10;
                      cResult[18] = hasKeywordResults;
                      cResult[19] = isCollapsed;
                      cResult[20] = tmp25;
                      tmp24 = tmp25;
                    }
                    if (isCollapsed) {
                      let tmp20;
                      const tmpResult4 = isCollapsed(flashListContext[21]);
                      if (!tmpResult4.isSmartSearchEmptyOrErrored(entry.status)) {
                        tmp20 = closure_11(require("SmartSearchBottomFade"), { height: 72 });
                      }
                      cResult[13] = entry.status;
                      cResult[14] = isCollapsed;
                      cResult[15] = tmp20;
                      tmp17 = tmp20;
                    }
                    let tmp21 = null;
                    if (entry.status === isCollapsed(flashListContext[15]).SmartSearchStatus.LOADING) {
                      tmp21 = closure_11(require("SmartSearchBottomFade"), { height: 120 });
                    }
                    tmp20 = tmp21;
                  }
                }
              }
              const obj6 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
              const tmp16 = closure_11(closure_14, obj6);
              cResult[8] = entry;
              cResult[9] = hasKeywordResults;
              cResult[10] = isCollapsed;
              cResult[11] = smartSearchQuery;
              cResult[12] = tmp16;
              tmp13 = tmp16;
            }
          }
        }
        class E {
          constructor() {
            tmp = closure_1(!closure_0);
            if (!closure_0) {
              obj = closure_2;
              tmp2 = null;
              if (closure_2 != null) {
                ref = obj.getRef();
                if (ref != null) {
                  obj1 = { animated: null };
                  tmp3 = closure_7;
                  obj1.animated = !closure_7.useReducedMotion;
                  scrollToTopResult = ref.scrollToTop(obj1);
                }
              }
            }
            return;
          }
        }
        cResult[2] = flashListContext;
        cResult[3] = isCollapsed;
        cResult[4] = tmp6[1];
        cResult[5] = E;
        tmp10 = E;
      }
    : (arg0) => {
        let closure_1;
        let entry;
        let hasKeywordResults;
        let items2;
        let smartSearchQuery;
        ({ smartSearchQuery, hasKeywordResults, entry } = arg0);
        let isCollapsed;
        let flashListContext;
        const tmp = closure_13();
        const items = [smartSearchQuery.requestKey];
        const obj = isCollapsed(flashListContext[20]);
        const tmp4 = _slicedToArray(obj.useRecyclingState(hasKeywordResults, items), 2);
        isCollapsed = tmp4[0];
        importDefault = tmp6;
        let obj2 = isCollapsed(flashListContext[20]);
        flashListContext = obj2.useFlashListContext();
        const items1 = [flashListContext, isCollapsed, tmp4[1]];
        const callback = react.useCallback(() => {
          closure_1(!first);
          if (!first) {
            if (flashListContext != null) {
              const ref = flashListContext.getRef();
              if (ref != null) {
                const obj2 = { animated: !AccessibilityStore.useReducedMotion };
                ref.scrollToTop(obj2);
              }
            }
          }
        }, items1);
        let tmp19Result = null;
        if (entry.status !== isCollapsed(flashListContext[15]).SmartSearchStatus.NOT_QUALIFIED) {
          const obj3 = { style: items2, children: null };
          items2 = [isCollapsed ? tmp.collapsedFrame : tmp.expandedContent];
          const obj4 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
          const items3 = [closure_11(closure_14, obj4), ,];
          if (isCollapsed) {
            let tmp10Result;
            const tmp2Result = isCollapsed(flashListContext[21]);
            if (!tmp2Result.isSmartSearchEmptyOrErrored(entry.status)) {
              tmp10Result = closure_11(require("SmartSearchBottomFade"), { height: 72 });
            }
            items3[1] = tmp10Result;
            let tmp10Result4 = hasKeywordResults && entry.status === tmp2(tmp3[15]).SmartSearchStatus.LOADED;
            if (tmp10Result4) {
              const obj5 = { isCollapsed, onPress: callback };
              tmp10Result4 = closure_11(require("SmartSearchExpandButton"), obj5);
            }
            items3[2] = tmp10Result4;
            obj3.children = items3;
            const items4 = [closure_12(View, obj3)];
            let tmp10Result5 = hasKeywordResults;
            if (tmp10Result5) {
              const obj6 = { style: tmp.divider };
              tmp10Result5 = closure_11(View, obj6);
            }
            const obj7 = { children: items4 };
            items4[1] = tmp10Result5;
            tmp19Result = closure_12(View, obj7);
          }
          let tmp10Result6 = null;
          if (entry.status === isCollapsed(flashListContext[15]).SmartSearchStatus.LOADING) {
            tmp10Result6 = closure_11(require("SmartSearchBottomFade"), { height: 120 });
          }
          tmp10Result = tmp10Result6;
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
          const tmp16 = closure_11(closure_15, obj2);
          cResult[6] = stateFromStores;
          cResult[7] = smartSearchQuery;
          cResult[8] = tmp16;
          tmp10 = tmp16;
        }
        return tmp9;
      }
      const fn = function n() {
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
        tmp2 = closure_11(closure_15, obj2);
      }
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default tmp5;
