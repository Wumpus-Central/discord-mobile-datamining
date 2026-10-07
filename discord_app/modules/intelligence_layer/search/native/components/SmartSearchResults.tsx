// discord_app/modules/intelligence_layer/search/native/components/SmartSearchResults.tsx
import SearchSessionAnalyticsManagerDefault from "../../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../../SmartSearchAnalyticsManager.tsx";
import MessageSearchResultParserDefault from "../../../../search/native/message_parsers/MessageSearchResultParser.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const MAX_PRESENTED_CITATIONS = fn(11982).MAX_PRESENTED_CITATIONS;
const lineClamp = fn(7524).SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (smartSearchQuery) => {
      const cResult = require("c").c(21);
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      _require = smartSearchQuery;
      let citation = smartSearchQuery.citation;
      index = smartSearchQuery.index;
      let numCitationsPresented = smartSearchQuery.numCitationsPresented;
      const searchContext = smartSearchQuery.searchContext;
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
      if (cResult[2] !== searchContext) {
        let obj3 = { searchContext };
        cResult[2] = searchContext;
        cResult[3] = obj3;
        let tmp6 = obj3;
      } else {
        tmp6 = cResult[3];
      }
      const tmpResult = require("useOnPressSearchItem");
      const onPressConversationCitation = require("useOnPressSearchItem").useOnPressConversationCitation(tmp6);
      if (cResult[4] === citation) {
        if (cResult[5] === index) {
          if (cResult[6] === numCitationsPresented) {
            if (cResult[7] === onPressConversationCitation) {
              if (cResult[8] === onPressMessageItem) {
                if (cResult[9] === smartSearchQuery) {
                  let tmp8 = cResult[10];
                }
                if (cResult[11] !== smartSearchQuery.queryText) {
                  const tmp13 = new citation(tmp2[11])(smartSearchQuery.queryText, lineClamp);
                  cResult[11] = smartSearchQuery.queryText;
                  cResult[12] = tmp13;
                  let obj6 = tmp13;
                } else {
                  obj6 = cResult[12];
                }
                if (smartSearchQuery.isChannelGroupStart) {
                  let HeaderlessMessageRow = citation(tmp2[12]);
                } else {
                  HeaderlessMessageRow = tmp(tmp2[12]).HeaderlessMessageRow;
                }
                if (cResult[13] === citation.message) {
                  if (cResult[14] === obj6) {
                    let tmp17 = cResult[15];
                  }
                  if (cResult[16] === HeaderlessMessageRow) {
                    if (cResult[17] === citation.messageId) {
                      if (cResult[18] === tmp8) {
                        if (cResult[19] === tmp17) {
                          let tmp19 = cResult[20];
                        }
                        return tmp19;
                      }
                    }
                  }
                  let obj4 = { message: tmp17, onPress: tmp8, lineClamp };
                  const tmp22 = closure_8(HeaderlessMessageRow, obj4, tmp16);
                  cResult[16] = HeaderlessMessageRow;
                  cResult[17] = citation.messageId;
                  cResult[18] = tmp8;
                  cResult[19] = tmp17;
                  cResult[20] = tmp22;
                  tmp19 = tmp22;
                }
                const parsed = obj6.parse(citation.message);
                cResult[13] = citation.message;
                cResult[14] = obj6;
                cResult[15] = parsed;
                tmp17 = parsed;
              }
            }
          }
        }
      }
      _require = numCitationsPresented(function* () {
        if (numCitationsPresented === 2) {
          numCitationsPresented = 3;
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
            numCitationsPresented = 2;
            if (0 === citation) {
              if (arg0 === 1) {
                numCitationsPresented = 3;
                throw value;
              } else if (arg0 === 2) {
                numCitationsPresented = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const smartSearchQuery = tmp3;
                const obj4 = { smartSearchQuery, citation, index, numCitationsPresented };
                const result = citation(index[9]).trackSmartSearchCitationOpened(obj4, citation(index[10]));
                if ("conversation" === citation.sourceType) {
                  index = 1;
                  citation = 2;
                  numCitationsPresented = 1;
                  const obj5 = { value: onPressConversationCitation(citation), done: false };
                  return obj5;
                }
                const obj6 = citation(index[9]);
              }
            } else if (1 === tmp7) {
              index = 0;
            } else if (arg0 === 1) {
              numCitationsPresented = 3;
              throw value;
            } else if (arg0 === 2) {
              index = 0;
              numCitationsPresented = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              index = 0;
              numCitationsPresented = 3;
              const obj = { value: undefined, done: true };
              return obj;
            }
            onPressMessageItem(citation.channelId, citation.messageId);
            numCitationsPresented = 3;
          } catch (tmp15) {
            if (tmp4 === index) {
              numCitationsPresented = tmp2;
              throw tmp15;
            } else {
              citation = tmp;
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
      cResult[4] = citation;
      cResult[5] = index;
      cResult[6] = numCitationsPresented;
      cResult[7] = onPressConversationCitation;
      cResult[8] = onPressMessageItem;
      cResult[9] = smartSearchQuery;
      cResult[10] = fn;
      tmp8 = fn;
      const tmpResult2 = require("useOnPressSearchItem");
    }
  : (smartSearchQuery) => {
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      const citation = smartSearchQuery.citation;
      const index = smartSearchQuery.index;
      const numCitationsPresented = smartSearchQuery.numCitationsPresented;
      const searchContext = smartSearchQuery.searchContext;
      const onPressMessageItem = smartSearchQuery(index[8]).useOnPressMessageItem({ searchContext });
      let obj = smartSearchQuery(index[8]);
      const tmp = smartSearchQuery;
      const onPressConversationCitation = smartSearchQuery(index[8]).useOnPressConversationCitation({ searchContext });
      const items = [
        onPressMessageItem,
        onPressConversationCitation,
        index,
        numCitationsPresented,
        citation,
        smartSearchQuery,
      ];
      const items1 = [smartSearchQuery.queryText];
      const callback = onPressMessageItem.useCallback(
        numCitationsPresented(function* () {
          if (c3 === 2) {
            c3 = 3;
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
              c3 = 2;
              if (0 === v2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_0 = tmp3;
                  const obj4 = { smartSearchQuery, citation, index, numCitationsPresented };
                  const result = v2(12004).trackSmartSearchCitationOpened(obj4, v2(12002));
                  if ("conversation" === citation.sourceType) {
                    dependencyMap = 1;
                    v2 = 2;
                    c3 = 1;
                    const obj5 = { value: onPressConversationCitation(citation), done: false };
                    return obj5;
                  }
                  const obj6 = v2(12004);
                }
              } else if (1 === tmp7) {
                dependencyMap = 0;
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c3 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                dependencyMap = 0;
                c3 = 3;
                const obj = { value: undefined, done: true };
                return obj;
              }
              closure_128_4(closure_128_1.channelId, closure_128_1.messageId);
              c3 = 3;
            } catch (tmp15) {
              if (tmp4 === dependencyMap) {
                c3 = tmp2;
                throw tmp15;
              } else {
                v2 = tmp;
              }
            }
          }
        }),
        items,
      );
      const memo = onPressMessageItem.useMemo(
        () => new MessageSearchResultParserDefault(smartSearchQuery.queryText, closure_7),
        items1,
      );
      if (smartSearchQuery.isChannelGroupStart) {
        let HeaderlessMessageRow = citation(tmp2[12]);
      } else {
        HeaderlessMessageRow = tmp(tmp2[12]).HeaderlessMessageRow;
      }
      let obj2 = smartSearchQuery(index[8]);
      return closure_8(
        HeaderlessMessageRow,
        { message: memo.parse(citation.message), onPress: callback, lineClamp },
        citation.messageId,
      );
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchResults.tsx");

export const SmartSearchResults = ReactCompilerGating.isReactCompilerEnabled()
  ? (smartSearchQuery) => {
      const cResult = citations(entry[7]).c(24);
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      entry = smartSearchQuery.entry;
      const guildId = smartSearchQuery.guildId;
      citations = entry.citations;
      if (!smartSearchQuery.hasKeywordResults) {
        if (cResult[2] !== citations) {
          const mapped = citations.map((citation, index) => {
            const obj = { citation, isChannelGroupStart: null };
            let tmp = 0 === index;
            if (!tmp) {
              tmp = closure_0[index - 1].channelId !== citation.channelId;
            }
            obj.isChannelGroupStart = tmp;
            return obj;
          });
          cResult[2] = citations;
          cResult[3] = mapped;
          let arr2 = mapped;
        } else {
          arr2 = cResult[3];
        }
        if (cResult[4] === citations) {
          if (cResult[5] === entry.answerText) {
            if (cResult[6] === hasKeywordResults) {
              if (cResult[7] === smartSearchQuery) {
                let tmp8 = cResult[8];
                let tmp9 = cResult[9];
              }
              const effect = noop.useEffect(tmp8, tmp9);
              if (cResult[10] === citations) {
                if (cResult[11] === entry.answerText) {
                  if (cResult[12] === guildId) {
                    let tmp13 = cResult[13];
                  }
                  if (cResult[14] === citations) {
                    if (cResult[15] === arr2) {
                      if (cResult[16] === smartSearchQuery) {
                        if (cResult[21] === tmp13) {
                          if (cResult[22] === tmp17) {
                            let tmp21 = cResult[23];
                          }
                          return tmp21;
                        }
                        class M {
                          constructor(arg0, arg1) {
                            citation = smartSearchQuery.citation;
                            obj = {
                              smartSearchQuery: citations,
                              citation,
                              isChannelGroupStart: smartSearchQuery.isChannelGroupStart,
                              index: arg1,
                              numCitationsPresented: citations.length,
                            };
                            return jsx(f75532, obj, citation.messageId);
                          }
                        }
                        const obj2 = { children: null };
                        const items = [tmp13, cResult[17]];
                        obj2.children = items;
                        const tmp23 = closure_9(View, obj2);
                        cResult[21] = tmp13;
                        cResult[22] = cResult[17];
                        cResult[23] = tmp23;
                        tmp21 = tmp23;
                      }
                    }
                  }
                  if (cResult[18] === citations) {
                    if (cResult[19] === smartSearchQuery) {
                      let tmp18 = cResult[20];
                    }
                    const mapped1 = arr2.map(tmp18);
                    class M {
                      constructor(arg0, arg1) {
                        citation = smartSearchQuery.citation;
                        obj = {
                          smartSearchQuery: citations,
                          citation,
                          isChannelGroupStart: smartSearchQuery.isChannelGroupStart,
                          index: arg1,
                          numCitationsPresented: citations.length,
                        };
                        return jsx(f75532, obj, citation.messageId);
                      }
                    }
                    cResult[15] = arr2;
                    cResult[16] = smartSearchQuery;
                    cResult[17] = mapped1;
                  }
                  class M {
                    constructor(arg0, arg1) {
                      citation = smartSearchQuery.citation;
                      obj = {
                        smartSearchQuery: citations,
                        citation,
                        isChannelGroupStart: smartSearchQuery.isChannelGroupStart,
                        index: arg1,
                        numCitationsPresented: citations.length,
                      };
                      return jsx(f75532, obj, citation.messageId);
                    }
                  }
                  cResult[18] = citations;
                  cResult[19] = smartSearchQuery;
                  cResult[20] = M;
                  tmp18 = M;
                }
              }
              const obj3 = { answerText: entry.answerText, citations, guildId };
              const tmp16 = closure_8(hasKeywordResults(tmp[13]), obj3);
              cResult[10] = citations;
              cResult[11] = entry.answerText;
              cResult[12] = guildId;
              cResult[13] = tmp16;
              tmp13 = tmp16;
            }
          }
        }
        const items1 = [smartSearchQuery, citations, entry.answerText, hasKeywordResults];
        cResult[4] = citations;
        cResult[5] = entry.answerText;
        cResult[6] = hasKeywordResults;
        cResult[7] = smartSearchQuery;
        cResult[8] = tmp10;
        cResult[9] = items1;
        tmp9 = items1;
        tmp8 = tmp10;
      } else if (cResult[0] !== citations) {
        const substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
        class M {
          constructor(arg0, arg1) {
            citation = smartSearchQuery.citation;
            obj = {
              smartSearchQuery: citations,
              citation,
              isChannelGroupStart: smartSearchQuery.isChannelGroupStart,
              index: arg1,
              numCitationsPresented: citations.length,
            };
            return jsx(f75532, obj, citation.messageId);
          }
        }
        cResult[1] = substr;
      }
      const obj = citations(entry[7]);
      tmp = entry;
    }
  : (smartSearchQuery) => {
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      const hasKeywordResults = smartSearchQuery.hasKeywordResults;
      const entry = smartSearchQuery.entry;
      const items = [entry.citations, hasKeywordResults];
      const memo = noop.useMemo(() => {
        const citations = entry.citations;
        let substr = citations;
        if (hasKeywordResults) {
          substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
        }
        return substr;
      }, items);
      const items1 = [memo];
      const memo1 = noop.useMemo(() => {
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
      }, items1);
      const items2 = [smartSearchQuery, memo, entry.answerText, hasKeywordResults];
      const effect = noop.useEffect(() => {
        SmartSearchAnalyticsManagerDefault.setAnswer(
          { smartSearchQuery, answerText: entry.answerText, presentedCitations: memo, hasKeywordResults },
          SearchSessionAnalyticsManagerDefault,
        );
        return () => {
          hasKeywordResults(12004).setAnswer(null, hasKeywordResults(12002));
        };
      }, items2);
      let obj = { children: null };
      const items3 = [
        closure_8(hasKeywordResults(entry[13]), {
          answerText: entry.answerText,
          citations: memo,
          guildId: smartSearchQuery.guildId,
        }),
        memo1.map((citation, index) => {
          citation = citation.citation;
          return closure_2_8(
            closure_10,
            {
              smartSearchQuery,
              citation,
              isChannelGroupStart: citation.isChannelGroupStart,
              index,
              numCitationsPresented: memo.length,
            },
            citation.messageId,
          );
        }),
      ];
      obj.children = items3;
      return closure_9(View, obj);
    };
