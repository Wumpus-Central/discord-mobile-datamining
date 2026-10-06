// discord_app/modules/intelligence_layer/search/native/components/SmartSearchResults.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import SearchConstants from "../../../../search/SearchConstants.tsx";
import SmartSearchConstants from "../../SmartSearchConstants.tsx";
import SearchSessionAnalyticsManagerDefault from "../../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../../SmartSearchAnalyticsManager.tsx";
import MessageSearchResultParserDefault from "../../../../search/native/message_parsers/MessageSearchResultParser.tsx";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3;

let c9;
let metroImportAll;
const View = react_native.View;
const MAX_PRESENTED_CITATIONS = SmartSearchConstants.MAX_PRESENTED_CITATIONS;
const lineClamp = SearchConstants.SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (smartSearchQuery) {
      let index;
      let tmp4;
      let tmp6;
      const tmp = smartSearchQuery;
      let obj = smartSearchQuery(index[7]);
      const cResult = obj.c(21);
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      let citation = smartSearchQuery.citation;
      index = smartSearchQuery.index;
      let numCitationsPresented = smartSearchQuery.numCitationsPresented;
      const searchContext = smartSearchQuery.searchContext;
      const isChannelGroupStart = smartSearchQuery.isChannelGroupStart;
      if (cResult[0] !== searchContext) {
        let obj2 = { searchContext };
        cResult[0] = searchContext;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = tmp(index[8]);
      const onPressMessageItem = tmpResult.useOnPressMessageItem(tmp4);
      if (cResult[2] !== searchContext) {
        let obj3 = { searchContext };
        cResult[2] = searchContext;
        cResult[3] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[3];
      }
      const tmpResult2 = tmp(index[8]);
      const onPressConversationCitation = tmpResult2.useOnPressConversationCitation(tmp6);
      if (cResult[4] === citation) {
        if (cResult[5] === index) {
          if (cResult[6] === numCitationsPresented) {
            if (cResult[7] === onPressConversationCitation) {
              if (cResult[8] === onPressMessageItem) {
                let tmp8;
                let obj6;
                let HeaderlessMessageRow;
                if (cResult[9] === smartSearchQuery) {
                  tmp8 = cResult[10];
                }
                if (cResult[11] !== smartSearchQuery.queryText) {
                  const self = this;
                  const self2 = this;
                  const tmp11 = new citation(tmp2[11])(smartSearchQuery.queryText, lineClamp);
                  const tmp12 = tmp11;
                  cResult[11] = smartSearchQuery.queryText;
                  cResult[12] = tmp11;
                  obj6 = tmp11;
                } else {
                  obj6 = cResult[12];
                }
                if (isChannelGroupStart) {
                  HeaderlessMessageRow = citation(tmp2[12]);
                } else {
                  HeaderlessMessageRow = tmp(tmp2[12]).HeaderlessMessageRow;
                }
                if (cResult[13] === citation.message) {
                  let tmp15;
                  if (cResult[14] === obj6) {
                    tmp15 = cResult[15];
                  }
                  if (cResult[16] === HeaderlessMessageRow) {
                    if (cResult[17] === citation.messageId) {
                      if (cResult[18] === tmp8) {
                        let tmp17;
                        if (cResult[19] === tmp15) {
                          tmp17 = cResult[20];
                        }
                        return tmp17;
                      }
                    }
                  }
                  let obj4 = { message: tmp15, onPress: tmp8, lineClamp };
                  const tmp20 = closure_8(HeaderlessMessageRow, obj4, tmp14);
                  cResult[16] = HeaderlessMessageRow;
                  cResult[17] = citation.messageId;
                  cResult[18] = tmp8;
                  cResult[19] = tmp15;
                  cResult[20] = tmp20;
                  tmp17 = tmp20;
                }
                const parsed = obj6.parse(citation.message);
                cResult[13] = citation.message;
                cResult[14] = obj6;
                cResult[15] = parsed;
                tmp15 = parsed;
              }
            }
          }
        }
      }
      let closure_0 = numCitationsPresented(function* () {
        if (numCitationsPresented === 2) {
          numCitationsPresented = 3;
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
                smartSearchQuery = tmp;
                const obj4 = { smartSearchQuery, citation, index, numCitationsPresented };
                const obj6 = citation(index[9]);
                const result = obj6.trackSmartSearchCitationOpened(obj4, citation(index[10]));
                if ("conversation" === citation.sourceType) {
                  index = 1;
                  citation = 2;
                  numCitationsPresented = 1;
                  const obj5 = { value: onPressConversationCitation(citation), done: false };
                  return obj5;
                }
              }
            } else if (1 === tmp4) {
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
            return { value: "IconComponent", done: null };
          } catch (tmp12) {
            if (0 === index) {
              numCitationsPresented = 3;
              throw tmp12;
            } else {
              citation = 1;
            }
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[4] = citation;
      cResult[5] = index;
      cResult[6] = numCitationsPresented;
      cResult[7] = onPressConversationCitation;
      cResult[8] = onPressMessageItem;
      cResult[9] = smartSearchQuery;
      cResult[10] = fn;
      tmp8 = fn;
    }
  : (smartSearchQuery) => {
      let HeaderlessMessageRow;
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      const citation = smartSearchQuery.citation;
      let index = smartSearchQuery.index;
      const numCitationsPresented = smartSearchQuery.numCitationsPresented;
      const searchContext = smartSearchQuery.searchContext;
      const isChannelGroupStart = smartSearchQuery.isChannelGroupStart;
      let tmp = smartSearchQuery;
      let obj = smartSearchQuery(index[8]);
      const onPressMessageItem = obj.useOnPressMessageItem({ searchContext });
      let obj2 = smartSearchQuery(index[8]);
      const onPressConversationCitation = obj2.useOnPressConversationCitation({ searchContext });
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
          let c2;
          let v1;
          if (c3 === 2) {
            c3 = 3;
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
            try {
              c3 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_0 = tmp;
                  const obj4 = { smartSearchQuery, citation, index, numCitationsPresented };
                  const obj6 = v1(index[9]);
                  const result = obj6.trackSmartSearchCitationOpened(obj4, v1(index[10]));
                  if ("conversation" === citation.sourceType) {
                    index = 1;
                    v1 = 2;
                    c3 = 1;
                    const obj5 = { value: onPressConversationCitation(citation), done: false };
                    return obj5;
                  }
                }
              } else if (1 === tmp4) {
                index = 0;
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                index = 0;
                c3 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                index = 0;
                c3 = 3;
                const obj = { value: undefined, done: true };
                return obj;
              }
              closure_128_4(closure_128_1.channelId, closure_128_1.messageId);
              c3 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp12) {
              if (0 === index) {
                c3 = 3;
                throw tmp12;
              } else {
                v1 = 1;
              }
            }
          }
        }),
        items,
      );
      const memo = onPressMessageItem.useMemo(() => {
        const tmp = new MessageSearchResultParserDefault(smartSearchQuery.queryText, lineClamp);
        return tmp;
      }, items1);
      if (isChannelGroupStart) {
        HeaderlessMessageRow = citation(tmp2[12]);
      } else {
        HeaderlessMessageRow = tmp(tmp2[12]).HeaderlessMessageRow;
      }
      let obj3 = { message: memo.parse(citation.message), onPress: callback, lineClamp };
      return closure_8(HeaderlessMessageRow, obj3, citation.messageId);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (smartSearchQuery) => {
      let arr3;
      let entry;
      let items;
      let obj = smartSearchQuery(entry[7]);
      const cResult = obj.c(24);
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      const hasKeywordResults = smartSearchQuery.hasKeywordResults;
      const tmp = entry;
      entry = smartSearchQuery.entry;
      const guildId = smartSearchQuery.guildId;
      const citations = entry.citations;
      let arr2 = citations;
      if (hasKeywordResults) {
        let tmp3;
        if (cResult[0] !== citations) {
          const substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
          cResult[0] = citations;
          cResult[1] = substr;
          tmp3 = substr;
        } else {
          tmp3 = cResult[1];
        }
        arr2 = tmp3;
      }
      if (cResult[2] !== arr2) {
        const mapped = arr2.map((citation, index) => {
          const obj = { citation, isChannelGroupStart: tmp };
          return obj;
        });
        cResult[2] = arr2;
        cResult[3] = mapped;
        arr3 = mapped;
      } else {
        arr3 = cResult[3];
      }
      if (cResult[4] === arr2) {
        if (cResult[5] === entry.answerText) {
          if (cResult[6] === hasKeywordResults) {
            let tmp7;
            let tmp8;
            if (cResult[7] === smartSearchQuery) {
              tmp7 = cResult[8];
              tmp8 = cResult[9];
            }
            const effect = react.useEffect(tmp7, tmp8);
            if (cResult[10] === arr2) {
              if (cResult[11] === entry.answerText) {
                let tmp11;
                let tmp15;
                if (cResult[12] === guildId) {
                  tmp11 = cResult[13];
                }
                if (cResult[14] === arr2) {
                  if (cResult[15] === arr3) {
                    if (cResult[16] === smartSearchQuery) {
                      tmp15 = cResult[17];
                    }
                    if (cResult[21] === tmp11) {
                      let tmp18;
                      if (cResult[22] === tmp15) {
                        tmp18 = cResult[23];
                      }
                      return tmp18;
                    }
                    class M {
                      constructor(citation, index) {
                        citation = citation.citation;
                        const obj = {
                          smartSearchQuery,
                          citation,
                          isChannelGroupStart: citation.isChannelGroupStart,
                          index,
                          numCitationsPresented: arr2.length,
                        };
                        return metroImportAll(closure_10, obj, citation.messageId);
                      }
                    }
                    let obj2 = { children: items };
                    items = [tmp11, tmp15];
                    const tmp20 = closure_9(View, obj2);
                    cResult[21] = tmp11;
                    cResult[22] = tmp15;
                    cResult[23] = tmp20;
                    tmp18 = tmp20;
                  }
                }
                if (cResult[18] === arr2) {
                  let tmp16;
                  if (cResult[19] === smartSearchQuery) {
                    tmp16 = cResult[20];
                  }
                  const mapped1 = arr3.map(tmp16);
                  class M {
                    constructor(citation, index) {
                      citation = citation.citation;
                      const obj = {
                        smartSearchQuery,
                        citation,
                        isChannelGroupStart: citation.isChannelGroupStart,
                        index,
                        numCitationsPresented: arr2.length,
                      };
                      return metroImportAll(closure_10, obj, citation.messageId);
                    }
                  }
                  cResult[15] = arr3;
                  cResult[16] = smartSearchQuery;
                  cResult[17] = mapped1;
                  tmp15 = mapped1;
                }
                class M {
                  constructor(citation, index) {
                    citation = citation.citation;
                    const obj = {
                      smartSearchQuery,
                      citation,
                      isChannelGroupStart: citation.isChannelGroupStart,
                      index,
                      numCitationsPresented: arr2.length,
                    };
                    return metroImportAll(closure_10, obj, citation.messageId);
                  }
                }
                cResult[18] = arr2;
                cResult[19] = smartSearchQuery;
                cResult[20] = M;
                tmp16 = M;
              }
            }
            const obj3 = { answerText: entry.answerText, citations: arr2, guildId };
            const tmp14 = closure_8(hasKeywordResults(tmp[13]), obj3);
            cResult[10] = arr2;
            cResult[11] = entry.answerText;
            cResult[12] = guildId;
            cResult[13] = tmp14;
            tmp11 = tmp14;
          }
        }
      }
      const fn = function f() {
        let obj = SmartSearchAnalyticsManagerDefault;
        const obj2 = { smartSearchQuery, answerText: entry.answerText, presentedCitations: arr2, hasKeywordResults };
        obj.setAnswer(obj2, SearchSessionAnalyticsManagerDefault);
        return () => {
          const obj = hasKeywordResults(entry[9]);
          obj.setAnswer(null, hasKeywordResults(entry[10]));
        };
      };
      const items1 = [smartSearchQuery, arr2, entry.answerText, hasKeywordResults];
      cResult[4] = arr2;
      cResult[5] = entry.answerText;
      cResult[6] = hasKeywordResults;
      cResult[7] = smartSearchQuery;
      cResult[8] = fn;
      cResult[9] = items1;
      tmp8 = items1;
      tmp7 = fn;
    }
  : (smartSearchQuery) => {
      let items3;
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      const hasKeywordResults = smartSearchQuery.hasKeywordResults;
      const entry = smartSearchQuery.entry;
      const items = [entry.citations, hasKeywordResults];
      const guildId = smartSearchQuery.guildId;
      const memo = react.useMemo(() => {
        const citations = entry.citations;
        let substr = citations;
        if (hasKeywordResults) {
          substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
        }
        return substr;
      }, items);
      const items1 = [memo];
      const memo1 = react.useMemo(() => {
        let closure_0 = memo;
        return memo.map((citation, index) => {
          const obj = { citation, isChannelGroupStart: tmp };
          return obj;
        });
      }, items1);
      const items2 = [smartSearchQuery, memo, entry.answerText, hasKeywordResults];
      const effect = react.useEffect(() => {
        let obj = SmartSearchAnalyticsManagerDefault;
        const obj2 = { smartSearchQuery, answerText: entry.answerText, presentedCitations: memo, hasKeywordResults };
        obj.setAnswer(obj2, SearchSessionAnalyticsManagerDefault);
        return () => {
          const obj = hasKeywordResults(entry[9]);
          obj.setAnswer(null, hasKeywordResults(entry[10]));
        };
      }, items2);
      let obj = { children: items3 };
      let obj2 = { answerText: entry.answerText, citations: memo, guildId };
      items3 = [
        closure_8(hasKeywordResults(entry[13]), obj2),
        memo1.map((citation, index) => {
          citation = citation.citation;
          const obj = {
            smartSearchQuery,
            citation,
            isChannelGroupStart: citation.isChannelGroupStart,
            index,
            numCitationsPresented: memo.length,
          };
          return metroImportAll(closure_10, obj, citation.messageId);
        }),
      ];
      return closure_9(View, obj);
    };
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchResults.tsx");

export const SmartSearchResults = tmp3;
