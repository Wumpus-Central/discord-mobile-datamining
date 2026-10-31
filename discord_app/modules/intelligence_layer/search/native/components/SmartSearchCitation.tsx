// === Module 18750: SmartSearchCitation ===

// Module 18750 (SmartSearchCitation)
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 18751 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_5 = fn(9827).SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchCitation.tsx");

export function SmartSearchCitation(smartSearchQuery) {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const citation = smartSearchQuery.citation;
  const index = smartSearchQuery.index;
  const numCitationsPresented = smartSearchQuery.numCitationsPresented;
  const searchContext = smartSearchQuery.searchContext;
  const onPressMessageItem = smartSearchQuery(index[4]).useOnPressMessageItem({ searchContext });
  let obj = smartSearchQuery(index[4]);
  const tmp = smartSearchQuery;
  const onPressConversationCitation = smartSearchQuery(index[4]).useOnPressConversationCitation({ searchContext });
  const items = [onPressMessageItem, onPressConversationCitation, index, numCitationsPresented, citation, smartSearchQuery];
  const items1 = [smartSearchQuery.queryText];
  const callback = onPressMessageItem.useCallback(numCitationsPresented(function*() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const result = v2(13895).trackSmartSearchCitationOpened(obj4, v2(13893));
            if ("conversation" === citation.sourceType) {
              dependencyMap = 1;
              v2 = 2;
              c3 = 1;
              const obj5 = { value: onPressConversationCitation(citation), done: false };
              return obj5;
            }
            const obj6 = v2(13895);
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
  }), items);
  const memo = onPressMessageItem.useMemo(() => new MessageSearchResultParserDefault(smartSearchQuery.queryText, closure_5), items1);
  if (smartSearchQuery.isChannelGroupStart) {
    let HeaderlessMessageRow = citation(tmp2[8]);
  } else {
    HeaderlessMessageRow = tmp(tmp2[8]).HeaderlessMessageRow;
  }
  let obj2 = smartSearchQuery(index[4]);
  return <HeaderlessMessageRow key={citation.messageId} message={memo.parse(citation.message)} onPress={callback} lineClamp={onPressConversationCitation} />;
}