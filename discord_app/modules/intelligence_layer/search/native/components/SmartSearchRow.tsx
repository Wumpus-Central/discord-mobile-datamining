// discord_app/modules/intelligence_layer/search/native/components/SmartSearchRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SmartSearchResultsStoreDefault from "../../SmartSearchResultsStore.tsx";
import MessageSearchResultParserDefault from "../../../../search/native/message_parsers/MessageSearchResultParser.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

const require = fn;
function SmartSearchContent(entry) {
  ({ smartSearchQuery, hasKeywordResults } = entry);
  _require = hasKeywordResults;
  entry = entry.entry;
  let onPressMessageItem;
  asyncGeneratorStep = undefined;
  let memo;
  const searchContext = smartSearchQuery.searchContext;
  onPressMessageItem = require("useOnPressSearchItem").useOnPressMessageItem({ searchContext });
  let obj = require("useOnPressSearchItem");
  const onPressConversationCitation = require("useOnPressSearchItem").useOnPressConversationCitation({ searchContext });
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
          return { value: "HermesInternal", done: null };
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
  } else if (tmp(tmp2[13]).SmartSearchStatus.LOADING === status) {
    let obj3 = { isCollapsed: entry.isCollapsed };
    return closure_11(entry(tmp2[14]), obj3);
  } else if (tmp(tmp2[13]).SmartSearchStatus.LOADED === status) {
    let obj4 = { children: null };
    let obj5 = { answerText: entry.answerText, citations: memo, guildId: smartSearchQuery.guildId };
    const items4 = [
      closure_11(entry(tmp2[15]), obj5),
      memo1.map((citation) => {
        citation = citation.citation;
        if (citation.isChannelGroupStart) {
          let HeaderlessMessageRow = entry(onPressMessageItem[16]);
        } else {
          HeaderlessMessageRow = closure_0(onPressMessageItem[16]).HeaderlessMessageRow;
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
    if (tmp(tmp2[13]).SmartSearchStatus.ERROR !== status) {
      const EMPTY = tmp(tmp2[13]).SmartSearchStatus.EMPTY;
    }
    const obj6 = { smartSearchQuery, source: "smart_search_row" };
    return closure_11(entry(tmp2[17]), obj6);
  }
  let obj2 = require("useOnPressSearchItem");
}
const View = fn(17).View;
SmartSearchResultsStoreDefault;
const MAX_PRESENTED_CITATIONS = fn(12016).MAX_PRESENTED_CITATIONS;
let closure_10 = fn(7468).SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4836);
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
let closure_15 = noop.memo((arg0) => {
  ({ smartSearchQuery, hasKeywordResults, entry } = arg0);
  let isCollapsed;
  let flashListContext;
  const tmp = closure_13();
  const items = [smartSearchQuery.requestKey];
  const tmp4 = _slicedToArray(isCollapsed(flashListContext[18]).useRecyclingState(hasKeywordResults, items), 2);
  isCollapsed = tmp4[0];
  importDefault = tmp6;
  const obj = isCollapsed(flashListContext[18]);
  flashListContext = isCollapsed(flashListContext[18]).useFlashListContext();
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
  if (entry.status !== isCollapsed(flashListContext[13]).SmartSearchStatus.NOT_QUALIFIED) {
    const obj3 = { style: null, children: null };
    const items2 = [isCollapsed ? tmp.collapsedFrame : tmp.expandedContent];
    obj3.style = items2;
    const obj4 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
    const items3 = [closure_11(SmartSearchContent, obj4), ,];
    if (isCollapsed) {
      if (!tmp2Result.isSmartSearchEmptyOrErrored(entry.status)) {
        let tmp10Result = closure_11(require("SmartSearchBottomFade"), { height: 72 });
      }
      items3[1] = tmp10Result;
      let tmp10Result4 = hasKeywordResults;
      if (hasKeywordResults) {
        tmp10Result4 = entry.status === tmp2(tmp3[13]).SmartSearchStatus.LOADED;
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
      tmp2Result = tmp2(tmp3[19]);
    }
    let tmp10Result6 = null;
    if (entry.status === tmp2(tmp3[13]).SmartSearchStatus.LOADING) {
      tmp10Result6 = closure_11(require("SmartSearchBottomFade"), { height: 120 });
    }
    tmp10Result = tmp10Result6;
  }
  return tmp19Result;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default function SmartSearchRowConnected(smartSearchQuery) {
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
}
