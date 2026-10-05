// discord_app/modules/intelligence_layer/search/native/components/SmartSearchRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SmartSearchResultsStoreDefault from "../../SmartSearchResultsStore.tsx";
import MessageSearchResultParserDefault from "../../../../search/native/message_parsers/MessageSearchResultParser.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

const require = fn;
const View = fn(17).View;
SmartSearchResultsStoreDefault;
const MAX_PRESENTED_CITATIONS = fn(11988).MAX_PRESENTED_CITATIONS;
const lineClamp = fn(7513).SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
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
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasKeywordResults) => {
      const cResult = require("c").c(31);
      ({ smartSearchQuery, entry, isCollapsed } = hasKeywordResults);
      ({ searchContext, guildId } = smartSearchQuery);
      if (cResult[0] !== searchContext) {
        let obj2 = { searchContext };
        cResult[0] = searchContext;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      let obj = require("c");
      const onPressMessageItem = require("useOnPressSearchItem").useOnPressMessageItem(tmp4);
      _require = onPressMessageItem;
      if (cResult[2] !== searchContext) {
        let obj3 = { searchContext };
        cResult[2] = searchContext;
        cResult[3] = obj3;
        let tmp6 = obj3;
      } else {
        tmp6 = cResult[3];
      }
      const tmpResult = require("useOnPressSearchItem");
      let onPressConversationCitation = require("useOnPressSearchItem").useOnPressConversationCitation(tmp6);
      if (cResult[4] === onPressConversationCitation) {
        if (cResult[5] === onPressMessageItem) {
          let tmp8 = cResult[6];
        }
        dependencyMap = tmp8;
        const citations = entry.citations;
        if (!hasKeywordResults.hasKeywordResults) {
          if (cResult[9] !== citations) {
            _require = citations;
            const mapped = citations.map((citation, index) => {
              const obj = { citation, isChannelGroupStart: null };
              let tmp = 0 === index;
              if (!tmp) {
                tmp = closure_0[index - 1].channelId !== citation.channelId;
              }
              obj.isChannelGroupStart = tmp;
              return obj;
            });
            cResult[9] = citations;
            cResult[10] = mapped;
            let arr2 = mapped;
          } else {
            arr2 = cResult[10];
          }
          if (cResult[11] !== entry.queryText) {
            const tmp20 = new onPressConversationCitation(16857)(entry.queryText, lineClamp);
            cResult[11] = entry.queryText;
            cResult[12] = tmp20;
            let tmp15 = tmp20;
          } else {
            tmp15 = cResult[12];
          }
          _slicedToArray = tmp15;
          const status = entry.status;
          if (tmp(11989).SmartSearchStatus.NOT_QUALIFIED === status) {
            return null;
          } else if (tmp(11989).SmartSearchStatus.LOADING === status) {
            if (cResult[13] !== isCollapsed) {
              let obj4 = { isCollapsed };
              const tmp41 = closure_11(onPressConversationCitation(16863), obj4);
              cResult[13] = isCollapsed;
              cResult[14] = tmp41;
              let tmp38 = tmp41;
            } else {
              tmp38 = cResult[14];
            }
            return tmp38;
          } else if (tmp(11989).SmartSearchStatus.LOADED === status) {
            if (cResult[15] === citations) {
              if (cResult[16] === entry.answerText) {
                if (cResult[17] === guildId) {
                  let tmp26 = cResult[18];
                }
                if (cResult[19] === arr2) {
                  if (cResult[20] === tmp8) {
                    if (cResult[21] === tmp15) {
                      if (cResult[26] === tmp26) {
                        if (cResult[27] === tmp31) {
                          let tmp35 = cResult[28];
                        }
                        return tmp35;
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
                      let obj5 = { children: null };
                      const items = [tmp26, cResult[22]];
                      obj5.children = items;
                      const tmp37 = closure_12(View, obj5);
                      cResult[26] = tmp26;
                      cResult[27] = cResult[22];
                      cResult[28] = tmp37;
                      tmp35 = tmp37;
                    }
                  }
                }
                if (cResult[23] === tmp8) {
                  if (cResult[24] === tmp15) {
                    let tmp32 = cResult[25];
                  }
                  const mapped1 = arr2.map(tmp32);
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
                  cResult[21] = tmp15;
                  cResult[22] = mapped1;
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
                cResult[24] = tmp15;
                cResult[25] = N;
                tmp32 = N;
              }
            }
            tmp29[0] = entry.answerText;
            tmp29[1] = citations;
            tmp29[2] = guildId;
            const tmp30 = closure_11(onPressConversationCitation(16864), tmp29);
            cResult[15] = citations;
            cResult[16] = entry.answerText;
            cResult[17] = guildId;
            cResult[18] = tmp30;
            tmp26 = tmp30;
          } else {
            if (tmp(11989).SmartSearchStatus.ERROR !== status) {
              const EMPTY = tmp(11989).SmartSearchStatus.EMPTY;
            }
            if (cResult[29] !== smartSearchQuery) {
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
              const tmp25 = closure_11(onPressConversationCitation(16804), {
                smartSearchQuery: null,
                source: "smart_search_row",
              });
              cResult[29] = smartSearchQuery;
              cResult[30] = tmp25;
              let tmp22 = tmp25;
              const obj6 = { smartSearchQuery: null, source: "smart_search_row" };
            } else {
              tmp22 = cResult[30];
            }
            return tmp22;
          }
        } else if (cResult[7] !== citations) {
          const substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
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
          cResult[7] = citations;
          cResult[8] = substr;
        }
      }
      _require = asyncGeneratorStep(async (arg0) => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c5 = 2;
            let tmp7 = c4;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_2 = tmp3;
                onPressConversationCitation = tmp7;
                closure_129_0 = closure_0;
                if ("conversation" === closure_0.sourceType) {
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj4 = { value: onPressConversationCitation(tmp20), done: false };
                  return obj4;
                }
              }
            } else if (1 === tmp7) {
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
            tmp7 = closure_0(closure_129_0.channelId, closure_129_0.messageId);
            c5 = 3;
          } catch (tmp14) {
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp14;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      const fn = function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      cResult[4] = onPressConversationCitation;
      cResult[5] = onPressMessageItem;
      cResult[6] = fn;
      tmp8 = fn;
      const tmpResult2 = require("useOnPressSearchItem");
    }
  : (entry) => {
      ({ smartSearchQuery, hasKeywordResults } = entry);
      _require = hasKeywordResults;
      entry = entry.entry;
      let onPressMessageItem;
      asyncGeneratorStep = undefined;
      let memo;
      const searchContext = smartSearchQuery.searchContext;
      onPressMessageItem = require("useOnPressSearchItem").useOnPressMessageItem({ searchContext });
      let obj = require("useOnPressSearchItem");
      const onPressConversationCitation = require("useOnPressSearchItem").useOnPressConversationCitation({
        searchContext,
      });
      _require = asyncGeneratorStep(async (arg0) => {
        const sourceType = arg0;
        c4 = 0;
        c5 = 0;
        c3 = 0;
        return (async (arg0) => {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c5 = 2;
              let tmp7 = c4;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_1 = tmp7;
                  closure_129_0 = sourceType;
                  if ("conversation" === sourceType.sourceType) {
                    v0 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj4 = { value: v0(tmp20), done: false };
                    return obj4;
                  }
                }
              } else if (1 === tmp7) {
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
              tmp7 = tmp3(closure_129_0.channelId, closure_129_0.messageId);
              c5 = 3;
            } catch (tmp14) {
              if (tmp4 === v0) {
                c5 = tmp2;
                throw tmp14;
              } else {
                c4 = tmp;
              }
            }
          }
        })();
      });
      const items = [onPressMessageItem, onPressConversationCitation];
      asyncGeneratorStep = memo.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, items);
      const items1 = [entry.citations, hasKeywordResults];
      memo = memo.useMemo(() => {
        const citations = entry.citations;
        let substr = citations;
        if (closure_0) {
          substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
        }
        return substr;
      }, items1);
      const items2 = [memo];
      const memo1 = memo.useMemo(() => {
        closure_0 = memo;
        return memo.map((citation, index) => {
          const obj = { citation, isChannelGroupStart: null };
          let tmp = 0 === index;
          if (!tmp) {
            tmp = closure_0[index - 1].channelId !== citation.channelId;
          }
          obj.isChannelGroupStart = tmp;
          return obj;
        });
      }, items2);
      const items3 = [entry.queryText];
      closure_6 = memo.useMemo(() => new MessageSearchResultParserDefault(entry.queryText, closure_10), items3);
      const status = entry.status;
      if (require("SmartSearchTypes").SmartSearchStatus.NOT_QUALIFIED === status) {
        return null;
      } else if (tmp(tmp2[15]).SmartSearchStatus.LOADING === status) {
        let obj3 = { isCollapsed: entry.isCollapsed };
        return closure_11(entry(tmp2[16]), obj3);
      } else if (tmp(tmp2[15]).SmartSearchStatus.LOADED === status) {
        let obj4 = { children: null };
        let obj5 = { answerText: entry.answerText, citations: memo, guildId: smartSearchQuery.guildId };
        const items4 = [
          closure_11(entry(tmp2[17]), obj5),
          memo1.map((citation) => {
            citation = citation.citation;
            if (citation.isChannelGroupStart) {
              let HeaderlessMessageRow = entry(onPressMessageItem[18]);
            } else {
              HeaderlessMessageRow = closure_0(onPressMessageItem[18]).HeaderlessMessageRow;
            }
            return closure_1_11(
              HeaderlessMessageRow,
              {
                message: closure_6.parse(citation.message),
                onPress() {
                  return closure_4(citation);
                },
                lineClamp,
              },
              citation.messageId,
            );
          }),
        ];
        obj4.children = items4;
        return closure_12(closure_6, obj4);
      } else {
        if (tmp(tmp2[15]).SmartSearchStatus.ERROR !== status) {
          const EMPTY = tmp(tmp2[15]).SmartSearchStatus.EMPTY;
        }
        const obj6 = { smartSearchQuery, source: "smart_search_row" };
        return closure_11(entry(tmp2[19]), obj6);
      }
      let obj2 = require("useOnPressSearchItem");
    };
ReactCompilerGating = fn(558);
let closure_15 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = isCollapsed(flashListContext[12]).c(32);
        ({ smartSearchQuery, hasKeywordResults, entry } = arg0);
        const tmp4 = closure_13();
        if (cResult[0] !== smartSearchQuery.requestKey) {
          const items = [smartSearchQuery.requestKey];
          cResult[0] = smartSearchQuery.requestKey;
          cResult[1] = items;
          let tmp5 = items;
        } else {
          tmp5 = cResult[1];
        }
        const obj = isCollapsed(flashListContext[12]);
        [isCollapsed, cResult[4]] = isCollapsed(flashListContext[20]).useRecyclingState(hasKeywordResults, tmp5);
        importDefault = tmp8;
        const tmpResult = isCollapsed(flashListContext[20]);
        flashListContext = isCollapsed(flashListContext[20]).useFlashListContext();
        if (cResult[2] === flashListContext) {
          if (cResult[3] === isCollapsed) {
            if (cResult[4] === tmp8) {
              let tmp10 = cResult[5];
            }
            if (entry.status === tmp(tmp2[15]).SmartSearchStatus.NOT_QUALIFIED) {
              return null;
            } else {
              const tmp11 = isCollapsed ? tmp4.collapsedFrame : tmp4.expandedContent;
              if (cResult[6] !== tmp11) {
                const items1 = [tmp11];
                cResult[6] = tmp11;
                cResult[7] = items1;
                let tmp12 = items1;
              } else {
                tmp12 = cResult[7];
              }
              if (cResult[8] === entry) {
                if (cResult[9] === hasKeywordResults) {
                  if (cResult[10] === isCollapsed) {
                    if (cResult[11] === smartSearchQuery) {
                      let tmp13 = cResult[12];
                    }
                    if (cResult[13] === entry.status) {
                      if (cResult[14] === isCollapsed) {
                        if (cResult[16] === entry.status) {
                          if (cResult[17] === tmp10) {
                            if (cResult[18] === hasKeywordResults) {
                              if (cResult[19] === isCollapsed) {
                                let tmp25 = cResult[20];
                              }
                              if (cResult[21] === tmp12) {
                                if (cResult[22] === tmp13) {
                                  if (cResult[23] === tmp17) {
                                    if (cResult[24] === tmp25) {
                                      let tmp29 = cResult[25];
                                    }
                                    if (cResult[26] === hasKeywordResults) {
                                      if (cResult[27] === tmp4.divider) {
                                        let tmp33 = cResult[28];
                                      }
                                      if (cResult[29] === tmp29) {
                                        if (cResult[30] === tmp33) {
                                          let tmp37 = cResult[31];
                                        }
                                        return tmp37;
                                      }
                                      let obj2 = { children: null };
                                      const items2 = [tmp29, tmp33];
                                      obj2.children = items2;
                                      const tmp40 = closure_12(View, obj2);
                                      cResult[29] = tmp29;
                                      cResult[30] = tmp33;
                                      cResult[31] = tmp40;
                                      tmp37 = tmp40;
                                    }
                                    let tmp34 = hasKeywordResults;
                                    if (hasKeywordResults) {
                                      const obj3 = { style: tmp4.divider };
                                      tmp34 = closure_11(View, obj3);
                                    }
                                    cResult[26] = hasKeywordResults;
                                    cResult[27] = tmp4.divider;
                                    cResult[28] = tmp34;
                                    tmp33 = tmp34;
                                  }
                                }
                              }
                              const obj4 = { style: tmp12, children: null };
                              const items3 = [tmp13, tmp17, tmp25];
                              obj4.children = items3;
                              const tmp32 = closure_12(View, obj4);
                              cResult[21] = tmp12;
                              cResult[22] = tmp13;
                              cResult[23] = tmp17;
                              cResult[24] = tmp25;
                              cResult[25] = tmp32;
                              tmp29 = tmp32;
                            }
                          }
                        }
                        let tmp26 = hasKeywordResults;
                        if (hasKeywordResults) {
                          tmp26 = entry.status === tmp(tmp2[15]).SmartSearchStatus.LOADED;
                        }
                        if (tmp26) {
                          const obj5 = { isCollapsed, onPress: tmp10 };
                          tmp26 = closure_11(require("SmartSearchExpandButton"), obj5);
                        }
                        cResult[16] = entry.status;
                        cResult[17] = tmp10;
                        cResult[18] = hasKeywordResults;
                        cResult[19] = isCollapsed;
                        cResult[20] = tmp26;
                        tmp25 = tmp26;
                      }
                    }
                    if (isCollapsed) {
                      if (!tmpResult4.isSmartSearchEmptyOrErrored(entry.status)) {
                        let tmp20 = closure_11(require("SmartSearchBottomFade"), { height: 72 });
                      }
                      cResult[13] = entry.status;
                      cResult[14] = isCollapsed;
                      cResult[15] = tmp20;
                      tmpResult4 = tmp(tmp2[21]);
                    }
                    let tmp21 = null;
                    if (entry.status === tmp(tmp2[15]).SmartSearchStatus.LOADING) {
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
        cResult[5] = E;
        tmp10 = E;
        const tmpResult3 = isCollapsed(flashListContext[20]);
      }
    : (arg0) => {
        ({ smartSearchQuery, hasKeywordResults, entry } = arg0);
        let isCollapsed;
        let flashListContext;
        const tmp = closure_13();
        const items = [smartSearchQuery.requestKey];
        const tmp4 = _slicedToArray(isCollapsed(flashListContext[20]).useRecyclingState(hasKeywordResults, items), 2);
        isCollapsed = tmp4[0];
        importDefault = tmp6;
        const obj = isCollapsed(flashListContext[20]);
        flashListContext = isCollapsed(flashListContext[20]).useFlashListContext();
        const items1 = [flashListContext, isCollapsed, tmp4[1]];
        const callback = noop.useCallback(() => {
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
          const obj3 = { style: null, children: null };
          const items2 = [isCollapsed ? tmp.collapsedFrame : tmp.expandedContent];
          obj3.style = items2;
          const obj4 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
          const items3 = [closure_11(closure_14, obj4), ,];
          if (isCollapsed) {
            if (!tmp2Result.isSmartSearchEmptyOrErrored(entry.status)) {
              let tmp10Result = closure_11(require("SmartSearchBottomFade"), { height: 72 });
            }
            items3[1] = tmp10Result;
            let tmp10Result4 = hasKeywordResults;
            if (hasKeywordResults) {
              tmp10Result4 = entry.status === tmp2(tmp3[15]).SmartSearchStatus.LOADED;
            }
            if (tmp10Result4) {
              const obj5 = { isCollapsed, onPress: callback };
              tmp10Result4 = closure_11(require("SmartSearchExpandButton"), obj5);
            }
            items3[2] = tmp10Result4;
            obj3.children = items3;
            const items4 = [closure_12(View, obj3)];
            let tmp10Result5 = hasKeywordResults;
            if (hasKeywordResults) {
              const obj6 = { style: tmp.divider };
              tmp10Result5 = closure_11(View, obj6);
            }
            const obj7 = { children: null };
            items4[1] = tmp10Result5;
            obj7.children = items4;
            tmp19Result = closure_12(View, obj7);
            tmp2Result = tmp2(tmp3[21]);
          }
          let tmp10Result6 = null;
          if (entry.status === tmp2(tmp3[15]).SmartSearchStatus.LOADING) {
            tmp10Result6 = closure_11(require("SmartSearchBottomFade"), { height: 120 });
          }
          tmp10Result = tmp10Result6;
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
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (smartSearchQuery) => {
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
          const tmp16 = closure_11(closure_15, obj2);
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
  : (smartSearchQuery) => {
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
        tmp2 = closure_11(closure_15, obj2);
      }
      return tmp2;
    };
