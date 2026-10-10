// === Module 9729: ExpressionPicker ===

// Module 9729 (ExpressionPicker)
import nativeDefault from "native" /* 587 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5107 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9432 */;
import trackOnEmojiPickerOpenedDefault from "trackOnEmojiPickerOpened" /* 9458 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ExpressionPickerConstants = fn(1241);
({ ExpressionPickerViewType: hasOwnProperty, ExpressionPickerOrder: metroRequire, PADDING_HORIZONTAL } = ExpressionPickerConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const EmojiIntention = fn(1393).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj = { expressionPickerContainer: { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL }, expressionPickerContent: { flex: 1 }, segmentedControl: { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 }, segmentedControlUnpadded: { paddingHorizontal: 0 } };
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL };
let obj4 = { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPicker.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ExpressionPicker(arg0) {
  const cResult = require("c").c(57);
  ({ bottomSheetRef, bottomSheetIndex, channel, expressionType, hideGifFavorites, onPressEmoji, onPressSticker, onPressGIF, onBackspace, visibleTabs, initialGifQuery, suggestedEmojis, stickerFormats, height, inPortalKeyboard } = arg0);
  if (undefined === visibleTabs) {
    visibleTabs = closure_6;
  }
  closure_11();
  _require = noop.useRef(false);
  if (cResult[0] === expressionType) {
    if (cResult[1] === visibleTabs) {
      let tmp5 = cResult[2];
    }
    const tmp7 = expressionPickerViewType(9730)(tmp5);
    ({ expressionPickerSelectedIndex, expressionPickerViewType } = tmp7);
    const prop = tmp7.expressionPickerTabStrings;
    if (cResult[3] !== channel) {
      const guildId = channel.getGuildId();
      cResult[3] = channel;
      cResult[4] = guildId;
      let tmp8 = guildId;
    } else {
      tmp8 = cResult[4];
    }
    dependencyMap = tmp8;
    if (cResult[5] !== tmp8) {
      class J {
        constructor() {
          obj = closure_0(closure_2[11]);
          result = obj.maybeFetchTopEmojisByGuild(closure_2);
          return;
        }
      }
      const items = [tmp8];
      cResult[5] = tmp8;
      cResult[6] = J;
      cResult[7] = items;
      let tmp11 = items;
    } else {
      class J {
        constructor() {
          obj = closure_0(closure_2[11]);
          result = obj.maybeFetchTopEmojisByGuild(closure_2);
          return;
        }
      }
      tmp11 = cResult[7];
    }
    const effect = noop.useEffect(J, tmp11);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          obj1 = { type: closure_1_6[arg0] };
          setKeyboardContextResult = obj.setKeyboardContext(closure_0(closure_2[13]).KeyboardTypes.EXPRESSION, obj1);
          return;
        }
      }
      cResult[8] = L;
    } else {
      class L {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          obj1 = { type: closure_1_6[arg0] };
          setKeyboardContextResult = obj.setKeyboardContext(closure_0(closure_2[13]).KeyboardTypes.EXPRESSION, obj1);
          return;
        }
      }
    }
    if (cResult[9] !== prop) {
      class L {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          obj1 = { type: closure_1_6[arg0] };
          setKeyboardContextResult = obj.setKeyboardContext(closure_0(closure_2[13]).KeyboardTypes.EXPRESSION, obj1);
          return;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor(arg0) {
            obj = { id: arg0, label: arg0, page: null };
            return obj;
          }
        }
        cResult[11] = Q;
      } else {
        class Q {
          constructor(arg0) {
            obj = { id: arg0, label: arg0, page: null };
            return obj;
          }
        }
      }
      const mapped = prop.map(Q);
      cResult[9] = prop;
      cResult[10] = mapped;
    } else {
      class Q {
        constructor(arg0) {
          obj = { id: arg0, label: arg0, page: null };
          return obj;
        }
      }
      if (cResult[12] === expressionPickerSelectedIndex) {
        class Q {
          constructor(arg0) {
            obj = { id: arg0, label: arg0, page: null };
            return obj;
          }
        }
        const segmentedControlState = tmp(8529).useSegmentedControlState(tmp19);
        if (cResult[15] !== expressionPickerViewType) {
          class Z {
            constructor() {
              tmp = closure_0;
              if (closure_0.current) {
                tmp12 = closure_1;
                tmp13 = closure_2;
                obj4 = closure_1(closure_2[15]);
                tmp14 = AnalyticEvents;
                obj1 = { tab: null, badged: false };
                tmp15 = expressionPickerViewType;
                obj1.tab = expressionPickerViewType;
                trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj1);
              } else {
                tmp3 = ExpressionPickerViewType;
                if (expressionPickerViewType === ExpressionPickerViewType.EMOJI) {
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  obj6 = { intention: null };
                  tmp10 = EmojiIntention;
                  obj6.intention = EmojiIntention.CHAT;
                  tmp11 = closure_1(closure_2[16])(obj6);
                  flag2 = true;
                  tmp.current = true;
                } else {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj = closure_1(closure_2[15]);
                  tmp6 = AnalyticEvents;
                  obj7 = { tab: null, badged: false };
                  obj7.tab = tmp2;
                  trackWithMetadataResult1 = obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj7);
                  flag = true;
                  tmp.current = true;
                }
              }
              return;
            }
          }
          const items1 = [expressionPickerViewType];
          cResult[15] = expressionPickerViewType;
          cResult[16] = Z;
          cResult[17] = items1;
          let tmp22 = items1;
        } else {
          class Z {
            constructor() {
              tmp = closure_0;
              if (closure_0.current) {
                tmp12 = closure_1;
                tmp13 = closure_2;
                obj4 = closure_1(closure_2[15]);
                tmp14 = AnalyticEvents;
                obj1 = { tab: null, badged: false };
                tmp15 = expressionPickerViewType;
                obj1.tab = expressionPickerViewType;
                trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj1);
              } else {
                tmp3 = ExpressionPickerViewType;
                if (expressionPickerViewType === ExpressionPickerViewType.EMOJI) {
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  obj6 = { intention: null };
                  tmp10 = EmojiIntention;
                  obj6.intention = EmojiIntention.CHAT;
                  tmp11 = closure_1(closure_2[16])(obj6);
                  flag2 = true;
                  tmp.current = true;
                } else {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj = closure_1(closure_2[15]);
                  tmp6 = AnalyticEvents;
                  obj7 = { tab: null, badged: false };
                  obj7.tab = tmp2;
                  trackWithMetadataResult1 = obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj7);
                  flag = true;
                  tmp.current = true;
                }
              }
              return;
            }
          }
          tmp22 = cResult[17];
        }
        const effect1 = noop.useEffect(Z, tmp22);
        if (cResult[18] !== (expressionPickerViewType === constants.EMOJI || expressionPickerViewType === constants.STICKER)) {
          class Z {
            constructor() {
              tmp = closure_0;
              if (closure_0.current) {
                tmp12 = closure_1;
                tmp13 = closure_2;
                obj4 = closure_1(closure_2[15]);
                tmp14 = AnalyticEvents;
                obj1 = { tab: null, badged: false };
                tmp15 = expressionPickerViewType;
                obj1.tab = expressionPickerViewType;
                trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj1);
              } else {
                tmp3 = ExpressionPickerViewType;
                if (expressionPickerViewType === ExpressionPickerViewType.EMOJI) {
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  obj6 = { intention: null };
                  tmp10 = EmojiIntention;
                  obj6.intention = EmojiIntention.CHAT;
                  tmp11 = closure_1(closure_2[16])(obj6);
                  flag2 = true;
                  tmp.current = true;
                } else {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj = closure_1(closure_2[15]);
                  tmp6 = AnalyticEvents;
                  obj7 = { tab: null, badged: false };
                  obj7.tab = tmp2;
                  trackWithMetadataResult1 = obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj7);
                  flag = true;
                  tmp.current = true;
                }
              }
              return;
            }
          }
          tmp27[0] = tmp25;
          cResult[18] = tmp25;
          cResult[19] = tmp27;
        } else {
          class Z {
            constructor() {
              tmp = closure_0;
              if (closure_0.current) {
                tmp12 = closure_1;
                tmp13 = closure_2;
                obj4 = closure_1(closure_2[15]);
                tmp14 = AnalyticEvents;
                obj1 = { tab: null, badged: false };
                tmp15 = expressionPickerViewType;
                obj1.tab = expressionPickerViewType;
                trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj1);
              } else {
                tmp3 = ExpressionPickerViewType;
                if (expressionPickerViewType === ExpressionPickerViewType.EMOJI) {
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  obj6 = { intention: null };
                  tmp10 = EmojiIntention;
                  obj6.intention = EmojiIntention.CHAT;
                  tmp11 = closure_1(closure_2[16])(obj6);
                  flag2 = true;
                  tmp.current = true;
                } else {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj = closure_1(closure_2[15]);
                  tmp6 = AnalyticEvents;
                  obj7 = { tab: null, badged: false };
                  obj7.tab = tmp2;
                  trackWithMetadataResult1 = obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj7);
                  flag = true;
                  tmp.current = true;
                }
              }
              return;
            }
          }
        }
        const tmp28 = expressionPickerViewType(9731)(tmp27);
        const tmpResult = tmp(8529);
        const isScreenReaderEnabled = tmp(5362).useIsScreenReaderEnabled();
        if (cResult[20] === tmp28) {
          class Z {
            constructor() {
              tmp = closure_0;
              if (closure_0.current) {
                tmp12 = closure_1;
                tmp13 = closure_2;
                obj4 = closure_1(closure_2[15]);
                tmp14 = AnalyticEvents;
                obj1 = { tab: null, badged: false };
                tmp15 = expressionPickerViewType;
                obj1.tab = expressionPickerViewType;
                trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj1);
              } else {
                tmp3 = ExpressionPickerViewType;
                if (expressionPickerViewType === ExpressionPickerViewType.EMOJI) {
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  obj6 = { intention: null };
                  tmp10 = EmojiIntention;
                  obj6.intention = EmojiIntention.CHAT;
                  tmp11 = closure_1(closure_2[16])(obj6);
                  flag2 = true;
                  tmp.current = true;
                } else {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj = closure_1(closure_2[15]);
                  tmp6 = AnalyticEvents;
                  obj7 = { tab: null, badged: false };
                  obj7.tab = tmp2;
                  trackWithMetadataResult1 = obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj7);
                  flag = true;
                  tmp.current = true;
                }
              }
              return;
            }
          }
        }
        if (isScreenReaderEnabled) {
          class Z {
            constructor() {
              tmp = closure_0;
              if (closure_0.current) {
                tmp12 = closure_1;
                tmp13 = closure_2;
                obj4 = closure_1(closure_2[15]);
                tmp14 = AnalyticEvents;
                obj1 = { tab: null, badged: false };
                tmp15 = expressionPickerViewType;
                obj1.tab = expressionPickerViewType;
                trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj1);
              } else {
                tmp3 = ExpressionPickerViewType;
                if (expressionPickerViewType === ExpressionPickerViewType.EMOJI) {
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  obj6 = { intention: null };
                  tmp10 = EmojiIntention;
                  obj6.intention = EmojiIntention.CHAT;
                  tmp11 = closure_1(closure_2[16])(obj6);
                  flag2 = true;
                  tmp.current = true;
                } else {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj = closure_1(closure_2[15]);
                  tmp6 = AnalyticEvents;
                  obj7 = { tab: null, badged: false };
                  obj7.tab = tmp2;
                  trackWithMetadataResult1 = obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj7);
                  flag = true;
                  tmp.current = true;
                }
              }
              return;
            }
          }
          tmp31[0] = tmp28.safeAreaBottomKeyboardAware;
        } else {
          class Z {
            constructor() {
              tmp = closure_0;
              if (closure_0.current) {
                tmp12 = closure_1;
                tmp13 = closure_2;
                obj4 = closure_1(closure_2[15]);
                tmp14 = AnalyticEvents;
                obj1 = { tab: null, badged: false };
                tmp15 = expressionPickerViewType;
                obj1.tab = expressionPickerViewType;
                trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj1);
              } else {
                tmp3 = ExpressionPickerViewType;
                if (expressionPickerViewType === ExpressionPickerViewType.EMOJI) {
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  obj6 = { intention: null };
                  tmp10 = EmojiIntention;
                  obj6.intention = EmojiIntention.CHAT;
                  tmp11 = closure_1(closure_2[16])(obj6);
                  flag2 = true;
                  tmp.current = true;
                } else {
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj = closure_1(closure_2[15]);
                  tmp6 = AnalyticEvents;
                  obj7 = { tab: null, badged: false };
                  obj7.tab = tmp2;
                  trackWithMetadataResult1 = obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj7);
                  flag = true;
                  tmp.current = true;
                }
              }
              return;
            }
          }
        }
        cResult[20] = tmp28;
        cResult[21] = isScreenReaderEnabled;
        cResult[22] = tmp31;
        const tmpResult2 = tmp(5362);
      }
      let obj3 = { pageWidth: 0, defaultIndex: expressionPickerSelectedIndex, onSetActiveIndex: L, items: tmp15 };
      cResult[12] = expressionPickerSelectedIndex;
      cResult[13] = tmp15;
      cResult[14] = obj3;
      tmp19 = obj3;
    }
  }
  let obj4 = { expressionType, expressionPickerTabs: visibleTabs };
  cResult[0] = expressionType;
  cResult[1] = visibleTabs;
  cResult[2] = obj4;
  tmp5 = obj4;
  let obj = require("c");
}) : (function ExpressionPicker(expressionType) {
  ({ bottomSheetRef, bottomSheetIndex, channel } = expressionType);
  let flag = expressionType.hideGifFavorites;
  if (flag === undefined) {
    flag = false;
  }
  ({ visibleTabs, onPressEmoji, onPressSticker, onPressGIF, onBackspace } = expressionType);
  if (visibleTabs === undefined) {
    visibleTabs = closure_6;
  }
  ({ height, inPortalKeyboard } = expressionType);
  let expressionPickerViewType;
  let memo;
  ({ initialGifQuery, suggestedEmojis, stickerFormats } = expressionType);
  const tmp = closure_11();
  importDefault = memo.useRef(false);
  const tmp4 = require("useExpressionPickerTabData")({ expressionType: expressionType.expressionType, expressionPickerTabs: visibleTabs });
  expressionPickerViewType = tmp4.expressionPickerViewType;
  const prop = tmp4.expressionPickerTabStrings;
  const items = [channel];
  memo = memo.useMemo(() => channel.getGuildId(), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => {
    const result = TopEmojisUtils.maybeFetchTopEmojisByGuild(memo);
  }, items1);
  let obj = channel(expressionPickerViewType[14]);
  const items2 = [expressionPickerViewType];
  const segmentedControlState = obj.useSegmentedControlState({
    pageWidth: 0,
    defaultIndex: tmp4.expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      channel(expressionPickerViewType[12]).setKeyboardContext(channel(expressionPickerViewType[13]).KeyboardTypes.EXPRESSION, { type: dependencyMap2[arg0] });
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  });
  const effect1 = memo.useEffect(() => {
    if (ref.current) {
      const obj2 = { tab: expressionPickerViewType, badged: false };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj2);
    } else if (expressionPickerViewType === constants.EMOJI) {
      const obj3 = { intention: EmojiIntention.CHAT };
      trackOnEmojiPickerOpenedDefault(obj3);
      ref.current = true;
    } else {
      const obj5 = { tab: tmp2, badged: false };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj5);
      ref.current = true;
    }
  }, items2);
  let tmp12 = expressionPickerViewType === constants.EMOJI;
  let obj2 = {
    pageWidth: 0,
    defaultIndex: tmp4.expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      channel(expressionPickerViewType[12]).setKeyboardContext(channel(expressionPickerViewType[13]).KeyboardTypes.EXPRESSION, { type: dependencyMap2[arg0] });
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  };
  if (!tmp12) {
    tmp12 = expressionPickerViewType === constants.STICKER;
  }
  const tmp10 = require("useExpressionPickerInsets");
  const tmp10Result = require("useExpressionPickerInsets")({ hasCategories: tmp12 });
  if (tmp7Result.useIsScreenReaderEnabled()) {
    let obj3 = { marginBottom: tmp10Result.safeAreaBottomKeyboardAware };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items3 = [tmp.expressionPickerContainer, ];
  let tmp16 = null != height;
  if (tmp16) {
    let obj5 = { height };
    tmp16 = obj5;
  }
  const obj6 = { style: items3, children: null };
  items3[1] = tmp16;
  tmp7Result = channel(expressionPickerViewType[18]);
  const items4 = [closure_9(View, { style: inPortalKeyboard ? tmp.segmentedControl : tmp.segmentedControlUnpadded, children: closure_9(channel(expressionPickerViewType[19]).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj8 = { style: null, children: null };
  const items5 = [tmp.expressionPickerContent, obj4];
  obj8.style = items5;
  if (expressionPickerViewType === constants.EMOJI) {
    const obj9 = { bottomSheetIndex, bottomSheetRef, channel, onPressEmoji, onBackspace, inPortalKeyboard, suggestedEmojis };
    let tmp17Result = closure_9(tmp2(tmp3[20]), obj9);
  } else if (expressionPickerViewType === constants.GIF) {
    const obj10 = { bottomSheetRef, channelId: null, guildId: null, hideFavorites: null, initialQuery: null, onPressGIF: null };
    ({ id: obj11.channelId, guild_id: obj11.guildId } = channel);
    obj10.hideFavorites = flag;
    obj10.initialQuery = initialGifQuery;
    obj10.onPressGIF = onPressGIF;
    tmp17Result = closure_9(tmp2(tmp3[21]), obj10);
  } else {
    tmp17Result = null;
    if (expressionPickerViewType === constants.STICKER) {
      const obj12 = { bottomSheetRef, bottomSheetIndex, channel, onPressSticker, stickerFormats, inPortalKeyboard };
      tmp17Result = closure_9(tmp2(tmp3[22]), obj12);
    }
  }
  obj8.children = tmp17Result;
  items4[1] = closure_9(View, obj8);
  obj6.children = items4;
  return closure_10(View, obj6);
}));