// === Module 16470: SmartSearchRow ===

// Module 16470 (SmartSearchRow)
import nativeDefault from "native" /* 576 */;
import MessageSearchResultParserDefault from "MessageSearchResultParser" /* 16471 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;
import IntelligenceSearchStore from "IntelligenceSearchStore" /* 11832 */;

const require = fn;
const View = fn(17).View;
const IntelligenceSearchConstants = fn(11833);
({ MAX_PRESENTED_CITATIONS: closure_9, COLLAPSED_FRAME_HEIGHT } = IntelligenceSearchConstants);
let closure_10 = fn(7298).SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let obj = { collapsedFrame: { height: COLLAPSED_FRAME_HEIGHT }, content: { paddingBottom: nativeDefault.space.PX_40, overflow: "hidden" }, divider: null };
let obj3 = { paddingBottom: nativeDefault.space.PX_40, overflow: "hidden" };
obj.divider = { height: 1, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = noop.memo((entry) => {
  ({ searchContext, hasKeywordResults } = entry);
  _require = hasKeywordResults;
  entry = entry.entry;
  let isExpanded;
  let flashListContext;
  let stateFromStores;
  let onPressMessageItem;
  let onPressConversationCitation;
  closure_8 = undefined;
  let memo;
  let lineClamp;
  ({ guildId, requestKey } = entry);
  let tmp = closure_13();
  const items = [requestKey];
  const tmp4 = flashListContext(require("module_8171").useRecyclingState(false, items), 2);
  isExpanded = tmp4[0];
  asyncGeneratorStep = tmp6;
  let tmp7 = hasKeywordResults;
  if (hasKeywordResults) {
    tmp7 = !isExpanded;
  }
  let obj = require("module_8171");
  flashListContext = require("module_8171").useFlashListContext();
  const tmp2Result = require("module_8171");
  const items1 = [onPressConversationCitation];
  stateFromStores = require("initialize").useStateFromStores(items1, () => onPressConversationCitation.useReducedMotion);
  const items2 = [flashListContext, isExpanded, tmp4[1], stateFromStores];
  const callback = stateFromStores.useCallback(() => {
    closure_3(!first);
    if (first) {
      if (flashListContext != null) {
        const ref = flashListContext.getRef();
        if (ref != null) {
          const obj2 = { animated: !stateFromStores };
          ref.scrollToTop(obj2);
        }
      }
    }
  }, items2);
  const tmp2Result4 = require("initialize");
  onPressMessageItem = require("useOnPressSearchItem").useOnPressMessageItem({ searchContext });
  const tmp2Result5 = require("useOnPressSearchItem");
  onPressConversationCitation = require("useOnPressSearchItem").useOnPressConversationCitation({ searchContext });
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
              closure_2 = tmp3;
              closure_1 = tmp7;
              closure_129_0 = sourceType;
              if ("conversation" === sourceType.sourceType) {
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
          tmp7 = onPressMessageItem(closure_129_0.channelId, closure_129_0.messageId);
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
    })();
  });
  const items3 = [onPressMessageItem, onPressConversationCitation];
  closure_8 = stateFromStores.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items3);
  const items4 = [entry.citations, hasKeywordResults];
  memo = stateFromStores.useMemo(() => {
    const citations = entry.citations;
    let substr = citations;
    if (closure_0) {
      substr = citations.slice(0, React7);
    }
    return substr;
  }, items4);
  const items5 = [memo];
  const memo1 = stateFromStores.useMemo(() => {
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
  }, items5);
  const items6 = [entry.queryText];
  lineClamp = stateFromStores.useMemo(() => new MessageSearchResultParserDefault(entry.queryText, closure_10), items6);
  if (entry.status !== require("IntelligenceSearchTypes").IntelligenceSearchStatus.LOADING) {
    if (entry.status !== tmp2(tmp3[15]).IntelligenceSearchStatus.LOADED) {
      return null;
    }
  }
  let collapsedFrame = null;
  if (tmp7) {
    collapsedFrame = tmp.collapsedFrame;
  }
  const tmp17 = entry.status === require("IntelligenceSearchTypes").IntelligenceSearchStatus.LOADING;
  let obj2 = { style: null, children: null };
  const items7 = [collapsedFrame, tmp.content];
  obj2.style = items7;
  if (tmp17) {
    let obj3 = { isCollapsed: tmp7 };
    let tmp14Result = closure_11(tmp19(tmp3[16]), obj3);
    let tmp21 = tmp19;
    let tmp22 = closure_11;
  } else {
    let obj4 = { children: null };
    let obj5 = { answerText: entry.answerText, citations: memo, guildId };
    const items8 = [
      closure_11(tmp19(tmp3[17]), obj5),
      memo1.map((citation) => {
          citation = citation.citation;
          if (citation.isChannelGroupStart) {
            let HeaderlessMessageRow = entry(first[18]);
          } else {
            HeaderlessMessageRow = closure_0(first[18]).HeaderlessMessageRow;
          }
          return closure_1_11(HeaderlessMessageRow, {
            message: lineClamp.parse(citation.message),
            onPress() {
              return closure_8(citation);
            },
            lineClamp
          }, citation.messageId);
        })
    ];
    obj4.children = items8;
    tmp14Result = closure_12(tmp15, obj4);
    tmp21 = tmp19;
    tmp22 = closure_11;
  }
  const items9 = [tmp14Result, , ];
  if (tmp7) {
    let tmp22Result = tmp22(tmp21(tmp3[19]), { height: 72 });
  } else {
    tmp22Result = null;
    if (tmp17) {
      tmp22Result = tmp22(tmp21(tmp3[19]), { height: 120 });
    }
  }
  items9[1] = tmp22Result;
  let tmp22Result2 = hasKeywordResults;
  if (hasKeywordResults) {
    tmp22Result2 = !tmp17;
  }
  if (tmp22Result2) {
    const obj6 = { isExpanded, onPress: callback };
    tmp22Result2 = tmp22(tmp21(tmp3[20]), obj6);
  }
  items9[2] = tmp22Result2;
  obj2.children = items9;
  const children = [closure_12(onPressMessageItem, obj2), ];
  if (hasKeywordResults) {
    const obj7 = { style: tmp.divider };
    hasKeywordResults = tmp22(tmp15, obj7);
  }
  children[1] = hasKeywordResults;
  return closure_12(onPressMessageItem, { children });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default function SmartSearchRow(guildId) {
  guildId = guildId.guildId;
  const requestKey = guildId.requestKey;
  const items = [IntelligenceSearchStore];
  const items1 = [guildId, requestKey];
  const stateFromStores = guildId(504).useStateFromStores(items, () => IntelligenceSearchStore.getAnswer(guildId, requestKey), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = {};
    const merged = Object.assign(guildId);
    obj2.entry = stateFromStores;
    tmp2 = closure_11(closure_14, obj2);
  }
  return tmp2;
};