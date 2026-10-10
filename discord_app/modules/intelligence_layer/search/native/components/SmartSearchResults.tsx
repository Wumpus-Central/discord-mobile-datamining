// discord_app/modules/intelligence_layer/search/native/components/SmartSearchResults.tsx
import SearchSessionAnalyticsManagerDefault from "../../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../../SmartSearchAnalyticsManager.tsx";
import SmartSearchCitation from "SmartSearchCitation.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const MAX_PRESENTED_CITATIONS = fn(12036).MAX_PRESENTED_CITATIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchResults.tsx");

export const SmartSearchResults = ReactCompilerGating.isReactCompilerEnabled()
  ? function SmartSearchResults(smartSearchQuery) {
      const cResult = citations(entry[5]).c(27);
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
                let tmp9 = cResult[8];
                let tmp10 = cResult[9];
              }
              const effect = citations.useEffect(tmp9, tmp10);
              if (cResult[10] === citations) {
                if (cResult[11] === entry.answerText) {
                  if (cResult[12] === guildId) {
                    let tmp13 = cResult[13];
                  }
                  if (cResult[14] === citations) {
                    if (cResult[15] === arr2) {
                      if (cResult[16] === smartSearchQuery) {
                        if (cResult[21] !== smartSearchQuery) {
                          const obj2 = { smartSearchQuery };
                          const tmp23 = closure_6(tmp(tmp2[10]).SmartSearchFeedback, obj2);
                          cResult[21] = smartSearchQuery;
                          cResult[22] = tmp23;
                          let tmp21 = tmp23;
                        } else {
                          tmp21 = cResult[22];
                        }
                        if (cResult[23] === tmp13) {
                          if (cResult[24] === tmp17) {
                            if (cResult[25] === tmp21) {
                              let tmp24 = cResult[26];
                            }
                            return tmp24;
                          }
                        }
                        const obj3 = { children: null };
                        const items = [tmp13, cResult[17], tmp21];
                        obj3.children = items;
                        const tmp27 = closure_7(View, obj3);
                        cResult[23] = tmp13;
                        cResult[24] = cResult[17];
                        cResult[25] = tmp21;
                        cResult[26] = tmp27;
                        tmp24 = tmp27;
                      }
                    }
                  }
                  if (cResult[18] === citations) {
                    if (cResult[19] === smartSearchQuery) {
                      let tmp18 = cResult[20];
                    }
                    const mapped1 = arr2.map(tmp18);
                    cResult[14] = citations;
                    cResult[15] = arr2;
                    cResult[16] = smartSearchQuery;
                    cResult[17] = mapped1;
                  }
                  const fn2 = function _(citation, index) {
                    citation = citation.citation;
                    return timestampProducer(
                      SmartSearchCitation.SmartSearchCitation,
                      {
                        smartSearchQuery: citations,
                        citation,
                        isChannelGroupStart: citation.isChannelGroupStart,
                        index,
                        numCitationsPresented: citations.length,
                      },
                      citation.messageId,
                    );
                  };
                  cResult[18] = citations;
                  cResult[19] = smartSearchQuery;
                  cResult[20] = fn2;
                  tmp18 = fn2;
                }
              }
              const obj4 = { answerText: entry.answerText, citations, guildId };
              const tmp16 = closure_6(hasKeywordResults(tmp2[8]), obj4);
              cResult[10] = citations;
              cResult[11] = entry.answerText;
              cResult[12] = guildId;
              cResult[13] = tmp16;
              tmp13 = tmp16;
            }
          }
        }
        const fn = function f() {
          SmartSearchAnalyticsManagerDefault.setAnswer(
            {
              smartSearchQuery: citations,
              answerText: entry.answerText,
              presentedCitations: citations,
              hasKeywordResults,
            },
            SearchSessionAnalyticsManagerDefault,
          );
          return () => {
            hasKeywordResults(12058).setAnswer(null, hasKeywordResults(12056));
          };
        };
        const items1 = [smartSearchQuery, citations, entry.answerText, hasKeywordResults];
        cResult[4] = citations;
        cResult[5] = entry.answerText;
        cResult[6] = hasKeywordResults;
        cResult[7] = smartSearchQuery;
        cResult[8] = fn;
        cResult[9] = items1;
        tmp10 = items1;
        tmp9 = fn;
      } else if (cResult[0] !== citations) {
        const substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
        cResult[0] = citations;
        cResult[1] = substr;
      }
      const obj = citations(entry[5]);
      tmp = citations;
    }
  : function SmartSearchResults(smartSearchQuery) {
      smartSearchQuery = smartSearchQuery.smartSearchQuery;
      const hasKeywordResults = smartSearchQuery.hasKeywordResults;
      const entry = smartSearchQuery.entry;
      let memo;
      const items = [entry.citations, hasKeywordResults];
      memo = memo.useMemo(() => {
        const citations = entry.citations;
        let substr = citations;
        if (hasKeywordResults) {
          substr = citations.slice(0, MAX_PRESENTED_CITATIONS);
        }
        return substr;
      }, items);
      const items1 = [memo];
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
      }, items1);
      const items2 = [smartSearchQuery, memo, entry.answerText, hasKeywordResults];
      const effect = memo.useEffect(() => {
        SmartSearchAnalyticsManagerDefault.setAnswer(
          { smartSearchQuery, answerText: entry.answerText, presentedCitations: memo, hasKeywordResults },
          SearchSessionAnalyticsManagerDefault,
        );
        return () => {
          hasKeywordResults(12058).setAnswer(null, hasKeywordResults(12056));
        };
      }, items2);
      let obj = { children: null };
      const items3 = [
        closure_6(hasKeywordResults(entry[8]), {
          answerText: entry.answerText,
          citations: memo,
          guildId: smartSearchQuery.guildId,
        }),
        memo1.map((citation, index) => {
          citation = citation.citation;
          return timestampProducer(
            SmartSearchCitation.SmartSearchCitation,
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
        closure_6(smartSearchQuery(entry[10]).SmartSearchFeedback, { smartSearchQuery }),
      ];
      obj.children = items3;
      return closure_7(View, obj);
    };
