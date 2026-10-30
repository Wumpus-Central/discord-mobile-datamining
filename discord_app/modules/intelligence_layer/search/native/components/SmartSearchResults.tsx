// discord_app/modules/intelligence_layer/search/native/components/SmartSearchResults.tsx
import SearchSessionAnalyticsManagerDefault from "../../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../../SmartSearchAnalyticsManager.tsx";
import SmartSearchCitation from "SmartSearchCitation.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const MAX_PRESENTED_CITATIONS = fn(13838).MAX_PRESENTED_CITATIONS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchResults.tsx");

export function SmartSearchResults(smartSearchQuery) {
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
      hasKeywordResults(13860).setAnswer(null, hasKeywordResults(13858));
    };
  }, items2);
  let obj = { children: null };
  const items3 = [
    closure_6(hasKeywordResults(entry[6]), {
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
    closure_6(smartSearchQuery(entry[8]).SmartSearchFeedback, { smartSearchQuery }),
  ];
  obj.children = items3;
  return closure_7(View, obj);
}
