// === Module 17312: SmartSearchCitation ===

// Module 17312 (SmartSearchCitation)
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 17313 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_5 = fn(9285).SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchCitation.tsx");

export const SmartSearchCitation = ReactCompilerGating.isReactCompilerEnabled() ? (function SmartSearchCitation(smartSearchQuery) {
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
              const tmp13 = new citation(tmp2[9])(smartSearchQuery.queryText, onPressConversationCitation);
              cResult[11] = smartSearchQuery.queryText;
              cResult[12] = tmp13;
              let obj6 = tmp13;
            } else {
              obj6 = cResult[12];
            }
            if (smartSearchQuery.isChannelGroupStart) {
              let HeaderlessMessageRow = citation(tmp2[10]);
            } else {
              HeaderlessMessageRow = tmp(tmp2[10]).HeaderlessMessageRow;
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
              let obj4 = { message: tmp17, onPress: tmp8, lineClamp: onPressConversationCitation };
              const tmp22 = <HeaderlessMessageRow key={tmp16} message={tmp17} onPress={tmp8} lineClamp={onPressConversationCitation} />;
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
  _require = numCitationsPresented(function*() {
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
            const result = citation(index[7]).trackSmartSearchCitationOpened(obj4, citation(index[8]));
            if ("conversation" === citation.sourceType) {
              index = 1;
              citation = 2;
              numCitationsPresented = 1;
              const obj5 = { value: onPressConversationCitation(citation), done: false };
              return obj5;
            }
            const obj6 = citation(index[7]);
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
  function t3() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[4] = citation;
  cResult[5] = index;
  cResult[6] = numCitationsPresented;
  cResult[7] = onPressConversationCitation;
  cResult[8] = onPressMessageItem;
  cResult[9] = smartSearchQuery;
  cResult[10] = t3;
  tmp8 = t3;
  const tmpResult2 = require("useOnPressSearchItem");
}) : (function SmartSearchCitation(smartSearchQuery) {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const citation = smartSearchQuery.citation;
  const index = smartSearchQuery.index;
  const numCitationsPresented = smartSearchQuery.numCitationsPresented;
  const searchContext = smartSearchQuery.searchContext;
  const onPressMessageItem = smartSearchQuery(index[6]).useOnPressMessageItem({ searchContext });
  let obj = smartSearchQuery(index[6]);
  const tmp = smartSearchQuery;
  const onPressConversationCitation = smartSearchQuery(index[6]).useOnPressConversationCitation({ searchContext });
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
            const result = v2(12014).trackSmartSearchCitationOpened(obj4, v2(12012));
            if ("conversation" === citation.sourceType) {
              dependencyMap = 1;
              v2 = 2;
              c3 = 1;
              const obj5 = { value: onPressConversationCitation(citation), done: false };
              return obj5;
            }
            const obj6 = v2(12014);
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
    let HeaderlessMessageRow = citation(tmp2[10]);
  } else {
    HeaderlessMessageRow = tmp(tmp2[10]).HeaderlessMessageRow;
  }
  let obj2 = smartSearchQuery(index[6]);
  return <HeaderlessMessageRow key={citation.messageId} message={memo.parse(citation.message)} onPress={callback} lineClamp={onPressConversationCitation} />;
});