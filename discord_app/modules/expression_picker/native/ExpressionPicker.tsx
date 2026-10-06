// discord_app/modules/expression_picker/native/ExpressionPicker.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import AppAnalyticsUtilsDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import TopEmojisUtils from "../../emojis/top_emojis/TopEmojisUtils.tsx";
import trackOnEmojiPickerOpenedDefault from "../../emoji_picker/analytics/trackOnEmojiPickerOpened.tsx";
import react from "../../../../_runtime/00019_react.js";
import ExpressionPickerConstants from "../ExpressionPickerConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require,
  dependencyMap,
  flag2,
  importDefault,
  obj1,
  setKeyboardContextResult,
  tmp11,
  tmp13,
  tmp14,
  tmp15,
  tmp3,
  trackWithMetadataResult,
  trackWithMetadataResult1;

let PADDING_HORIZONTAL;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({
  ExpressionPickerViewType: hasOwnProperty,
  ExpressionPickerOrder: metroRequire,
  PADDING_HORIZONTAL,
} = ExpressionPickerConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = {
  expressionPickerContainer: obj2,
  expressionPickerContent: { flex: 1 },
  segmentedControl: obj3,
  segmentedControlUnpadded: { paddingHorizontal: 0 },
};
obj2 = {
  flex: 1,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT,
  position: "relative",
  paddingHorizontal: PADDING_HORIZONTAL,
};
obj3 = { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let bottomSheetIndex;
        let bottomSheetRef;
        let channel;
        let closure_2;
        let expressionPickerSelectedIndex;
        let expressionPickerViewType;
        let expressionType;
        let height;
        let hideGifFavorites;
        let inPortalKeyboard;
        let initialGifQuery;
        let onBackspace;
        let onPressEmoji;
        let onPressGIF;
        let onPressSticker;
        let ref;
        let stickerFormats;
        let suggestedEmojis;
        let tmp19;
        let visibleTabs;
        const tmp2 = dependencyMap;
        let obj = require("react");
        const cResult = obj.c(57);
        ({
          bottomSheetRef,
          bottomSheetIndex,
          channel,
          expressionType,
          hideGifFavorites,
          onPressEmoji,
          onPressSticker,
          onPressGIF,
          onBackspace,
          visibleTabs,
          initialGifQuery,
          suggestedEmojis,
          stickerFormats,
          height,
          inPortalKeyboard,
        } = arg0);
        const tmp4 = undefined !== hideGifFavorites && hideGifFavorites;
        if (undefined === visibleTabs) {
          visibleTabs = closure_6;
        }
        const tmp5 = closure_11();
        _require = react.useRef(false);
        if (cResult[0] === expressionType) {
          let tmp6;
          let tmp9;
          let tmp12;
          if (cResult[1] === visibleTabs) {
            tmp6 = cResult[2];
          }
          const tmp8 = expressionPickerViewType(10098)(tmp6);
          ({ expressionPickerSelectedIndex, expressionPickerViewType } = tmp8);
          const prop = tmp8.expressionPickerTabStrings;
          if (cResult[3] !== channel) {
            const guildId = channel.getGuildId();
            cResult[3] = channel;
            cResult[4] = guildId;
            tmp9 = guildId;
          } else {
            tmp9 = cResult[4];
          }
          dependencyMap = tmp9;
          if (cResult[5] !== tmp9) {
            class J {
              constructor() {
                obj = closure_0(closure_2[11]);
                result = obj.maybeFetchTopEmojisByGuild(closure_2);
                return;
              }
            }
            const items = [tmp9];
            cResult[5] = tmp9;
            cResult[6] = J;
            cResult[7] = items;
            tmp12 = items;
          } else {
            class J {
              constructor() {
                obj = closure_0(closure_2[11]);
                result = obj.maybeFetchTopEmojisByGuild(closure_2);
                return;
              }
            }
            tmp12 = cResult[7];
          }
          const effect = react.useEffect(J, tmp12);
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor(arg0) {
                obj = closure_0(closure_2[12]);
                obj1 = { type: closure_1_6[arg0] };
                setKeyboardContextResult = obj.setKeyboardContext(
                  closure_0(closure_2[13]).KeyboardTypes.EXPRESSION,
                  obj1,
                );
                return;
              }
            }
            cResult[8] = L;
          } else {
            class L {
              constructor(arg0) {
                obj = closure_0(closure_2[12]);
                obj1 = { type: closure_1_6[arg0] };
                setKeyboardContextResult = obj.setKeyboardContext(
                  closure_0(closure_2[13]).KeyboardTypes.EXPRESSION,
                  obj1,
                );
                return;
              }
            }
          }
          if (cResult[9] !== prop) {
            class L {
              constructor(arg0) {
                obj = closure_0(closure_2[12]);
                obj1 = { type: closure_1_6[arg0] };
                setKeyboardContextResult = obj.setKeyboardContext(
                  closure_0(closure_2[13]).KeyboardTypes.EXPRESSION,
                  obj1,
                );
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
          }
          if (cResult[12] === expressionPickerSelectedIndex) {
            let tmp22;
            class Q {
              constructor(arg0) {
                obj = { id: arg0, label: arg0, page: null };
                return obj;
              }
            }
            const tmpResult = require("SegmentedControlState");
            const segmentedControlState = tmpResult.useSegmentedControlState(tmp19);
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
                    trackWithMetadataResult = obj4.trackWithMetadata(
                      AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                      obj1,
                    );
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
              tmp22 = items1;
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
                    trackWithMetadataResult = obj4.trackWithMetadata(
                      AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                      obj1,
                    );
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
            const effect1 = react.useEffect(Z, tmp22);
            if (
              cResult[18] !==
              (expressionPickerViewType === constants.EMOJI || expressionPickerViewType === constants.STICKER)
            ) {
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
                    trackWithMetadataResult = obj4.trackWithMetadata(
                      AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                      obj1,
                    );
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
              tmp27[0] = expressionPickerViewType === constants.EMOJI || expressionPickerViewType === constants.STICKER;
              cResult[18] =
                expressionPickerViewType === constants.EMOJI || expressionPickerViewType === constants.STICKER;
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
                    trackWithMetadataResult = obj4.trackWithMetadata(
                      AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                      obj1,
                    );
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
            const tmp28 = expressionPickerViewType(10099)(tmp27);
            const tmpResult2 = require("useIsScreenReaderEnabled");
            const isScreenReaderEnabled = tmpResult2.useIsScreenReaderEnabled();
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
                    trackWithMetadataResult = obj4.trackWithMetadata(
                      AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                      obj1,
                    );
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
              if (cResult[23] !== height) {
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
                      trackWithMetadataResult = obj4.trackWithMetadata(
                        AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                        obj1,
                      );
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
                let tmp34 = null != height;
                if (tmp34) {
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
                        trackWithMetadataResult = obj4.trackWithMetadata(
                          AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                          obj1,
                        );
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
                          trackWithMetadataResult1 = obj.trackWithMetadata(
                            AnalyticEvents.EXPRESSION_PICKER_OPENED,
                            obj7,
                          );
                          flag = true;
                          tmp.current = true;
                        }
                      }
                      return;
                    }
                  }
                  tmp35[0] = height;
                  tmp34 = tmp35;
                }
                cResult[23] = height;
                cResult[24] = tmp34;
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
                      trackWithMetadataResult = obj4.trackWithMetadata(
                        AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                        obj1,
                      );
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
              if (cResult[25] === tmp5.expressionPickerContainer) {
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
                      trackWithMetadataResult = obj4.trackWithMetadata(
                        AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                        obj1,
                      );
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
                const tmp37 = inPortalKeyboard ? tmp5.segmentedControl : tmp5.segmentedControlUnpadded;
                if (cResult[28] !== segmentedControlState) {
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
                        trackWithMetadataResult = obj4.trackWithMetadata(
                          AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                          obj1,
                        );
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
                          trackWithMetadataResult1 = obj.trackWithMetadata(
                            AnalyticEvents.EXPRESSION_PICKER_OPENED,
                            obj7,
                          );
                          flag = true;
                          tmp.current = true;
                        }
                      }
                      return;
                    }
                  }
                  let obj3 = { state: segmentedControlState };
                  cResult[28] = segmentedControlState;
                  cResult[29] = closure_9(require("SegmentedControl").SegmentedControl, obj3);
                  const tmp39 = closure_9(require("SegmentedControl").SegmentedControl, obj3);
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
                        trackWithMetadataResult = obj4.trackWithMetadata(
                          AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                          obj1,
                        );
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
                          trackWithMetadataResult1 = obj.trackWithMetadata(
                            AnalyticEvents.EXPRESSION_PICKER_OPENED,
                            obj7,
                          );
                          flag = true;
                          tmp.current = true;
                        }
                      }
                      return;
                    }
                  }
                }
                if (cResult[30] === tmp37) {
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
                        trackWithMetadataResult = obj4.trackWithMetadata(
                          AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                          obj1,
                        );
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
                          trackWithMetadataResult1 = obj.trackWithMetadata(
                            AnalyticEvents.EXPRESSION_PICKER_OPENED,
                            obj7,
                          );
                          flag = true;
                          tmp.current = true;
                        }
                      }
                      return;
                    }
                  }
                  if (cResult[33] === tmp32) {
                    let tmp46;
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
                          trackWithMetadataResult = obj4.trackWithMetadata(
                            AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                            obj1,
                          );
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
                            trackWithMetadataResult1 = obj.trackWithMetadata(
                              AnalyticEvents.EXPRESSION_PICKER_OPENED,
                              obj7,
                            );
                            flag = true;
                            tmp.current = true;
                          }
                        }
                        return;
                      }
                    }
                    if (cResult[36] === bottomSheetIndex) {
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
                            trackWithMetadataResult = obj4.trackWithMetadata(
                              AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                              obj1,
                            );
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
                              trackWithMetadataResult1 = obj.trackWithMetadata(
                                AnalyticEvents.EXPRESSION_PICKER_OPENED,
                                obj7,
                              );
                              flag = true;
                              tmp.current = true;
                            }
                          }
                          return;
                        }
                      }
                    }
                    if (expressionPickerViewType === constants.EMOJI) {
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
                            trackWithMetadataResult = obj4.trackWithMetadata(
                              AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                              obj1,
                            );
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
                              trackWithMetadataResult1 = obj.trackWithMetadata(
                                AnalyticEvents.EXPRESSION_PICKER_OPENED,
                                obj7,
                              );
                              flag = true;
                              tmp.current = true;
                            }
                          }
                          return;
                        }
                      }
                      let obj4 = {
                        bottomSheetIndex,
                        bottomSheetRef,
                        channel,
                        onPressEmoji,
                        onBackspace,
                        inPortalKeyboard,
                        suggestedEmojis,
                      };
                      tmp46 = closure_9(expressionPickerViewType(10100), obj4);
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
                            trackWithMetadataResult = obj4.trackWithMetadata(
                              AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                              obj1,
                            );
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
                              trackWithMetadataResult1 = obj.trackWithMetadata(
                                AnalyticEvents.EXPRESSION_PICKER_OPENED,
                                obj7,
                              );
                              flag = true;
                              tmp.current = true;
                            }
                          }
                          return;
                        }
                      }
                    }
                    cResult[36] = bottomSheetIndex;
                    cResult[37] = bottomSheetRef;
                    cResult[38] = channel;
                    cResult[39] = expressionPickerViewType;
                    cResult[40] = tmp4;
                    cResult[41] = inPortalKeyboard;
                    cResult[42] = initialGifQuery;
                    cResult[43] = onBackspace;
                    cResult[44] = onPressEmoji;
                    cResult[45] = onPressGIF;
                    cResult[46] = onPressSticker;
                    cResult[47] = stickerFormats;
                    cResult[48] = suggestedEmojis;
                    cResult[49] = tmp46;
                  }
                  const items2 = [tmp5.expressionPickerContent, tmp32];
                  cResult[33] = tmp32;
                  cResult[34] = tmp5.expressionPickerContent;
                  cResult[35] = items2;
                }
                let obj5 = { style: tmp37, children: tmp38 };
                cResult[30] = tmp37;
                cResult[31] = tmp38;
                cResult[32] = closure_9(View, obj5);
                const tmp43 = closure_9(View, obj5);
              }
              const items3 = [tmp5.expressionPickerContainer, tmp33];
              cResult[25] = tmp5.expressionPickerContainer;
              cResult[26] = tmp33;
              cResult[27] = items3;
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
                    trackWithMetadataResult = obj4.trackWithMetadata(
                      AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                      obj1,
                    );
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
              tmp32[0] = tmp28.safeAreaBottomKeyboardAware;
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
                    trackWithMetadataResult = obj4.trackWithMetadata(
                      AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED,
                      obj1,
                    );
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
            cResult[22] = tmp32;
          }
          const obj6 = { pageWidth: 0, defaultIndex: expressionPickerSelectedIndex, onSetActiveIndex: L, items: tmp16 };
          cResult[12] = expressionPickerSelectedIndex;
          cResult[13] = tmp16;
          cResult[14] = obj6;
          tmp19 = obj6;
        }
        const obj7 = { expressionType, expressionPickerTabs: visibleTabs };
        cResult[0] = expressionType;
        cResult[1] = visibleTabs;
        cResult[2] = obj7;
        tmp6 = obj7;
      }
    : (hideGifFavorites) => {
        let bottomSheetIndex;
        let bottomSheetRef;
        let channel;
        let height;
        let inPortalKeyboard;
        let initialGifQuery;
        let items4;
        let items5;
        let obj4;
        let onBackspace;
        let onPressEmoji;
        let onPressGIF;
        let onPressSticker;
        let ref;
        let stickerFormats;
        let suggestedEmojis;
        let tmp17Result;
        let visibleTabs;
        ({ bottomSheetRef, bottomSheetIndex, channel } = hideGifFavorites);
        let flag = hideGifFavorites.hideGifFavorites;
        const expressionType = hideGifFavorites.expressionType;
        if (flag === undefined) {
          flag = false;
        }
        ({ visibleTabs, onPressEmoji, onPressSticker, onPressGIF, onBackspace } = hideGifFavorites);
        if (visibleTabs === undefined) {
          visibleTabs = closure_6;
        }
        ({ height, inPortalKeyboard } = hideGifFavorites);
        let expressionPickerViewType;
        let memo;
        ({ initialGifQuery, suggestedEmojis, stickerFormats } = hideGifFavorites);
        const tmp = closure_11();
        importDefault = memo.useRef(false);
        const tmp2 = importDefault;
        const tmp4 = require("useExpressionPickerTabData")({ expressionType, expressionPickerTabs: visibleTabs });
        expressionPickerViewType = tmp4.expressionPickerViewType;
        const prop = tmp4.expressionPickerTabStrings;
        const items = [channel];
        const expressionPickerSelectedIndex = tmp4.expressionPickerSelectedIndex;
        memo = memo.useMemo(() => channel.getGuildId(), items);
        const items1 = [memo];
        const effect = memo.useEffect(() => {
          const obj = TopEmojisUtils;
          const result = obj.maybeFetchTopEmojisByGuild(memo);
        }, items1);
        let obj = channel(expressionPickerViewType[14]);
        let obj2 = {
          pageWidth: 0,
          defaultIndex: expressionPickerSelectedIndex,
          onSetActiveIndex(arg0) {
            const obj = channel(expressionPickerViewType[12]);
            const obj2 = { type: closure_1_6[arg0] };
            obj.setKeyboardContext(channel(expressionPickerViewType[13]).KeyboardTypes.EXPRESSION, obj2);
          },
          items: prop.map((id) => ({ id, label: id, page: null })),
        };
        const items2 = [expressionPickerViewType];
        const segmentedControlState = obj.useSegmentedControlState(obj2);
        const effect1 = memo.useEffect(() => {
          if (ref.current) {
            const obj2 = { tab: expressionPickerViewType, badged: false };
            const obj4 = AppAnalyticsUtilsDefault;
            obj4.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj2);
          } else if (expressionPickerViewType === hasOwnProperty.EMOJI) {
            const obj3 = { intention: EmojiIntention.CHAT };
            trackOnEmojiPickerOpenedDefault(obj3);
            ref.current = true;
          } else {
            const obj5 = { tab: tmp2, badged: false };
            const obj = AppAnalyticsUtilsDefault;
            obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj5);
            ref.current = true;
          }
        }, items2);
        let tmp12 = expressionPickerViewType === constants.EMOJI;
        const tmp10 = require("useExpressionPickerInsets");
        if (!tmp12) {
          tmp12 = expressionPickerViewType === constants.STICKER;
        }
        const tmp10Result = tmp10({ hasCategories: tmp12 });
        const tmp7Result = channel(expressionPickerViewType[18]);
        if (tmp7Result.useIsScreenReaderEnabled()) {
          let obj3 = { marginBottom: tmp10Result.safeAreaBottomKeyboardAware };
          obj4 = obj3;
        } else {
          obj4 = {};
        }
        const items3 = [tmp.expressionPickerContainer];
        let tmp16 = null != height;
        if (tmp16) {
          let obj5 = { height };
          tmp16 = obj5;
        }
        const obj6 = { style: items3, children: items4 };
        items3[1] = tmp16;
        items4 = [,];
        const obj7 = {
          style: inPortalKeyboard ? tmp.segmentedControl : tmp.segmentedControlUnpadded,
          children: closure_9(channel(expressionPickerViewType[19]).SegmentedControl, { state: segmentedControlState }),
        };
        items4[0] = closure_9(View, obj7);
        const obj8 = { style: items5, children: tmp17Result };
        items5 = [tmp.expressionPickerContent, obj4];
        if (expressionPickerViewType === constants.EMOJI) {
          const obj9 = {
            bottomSheetIndex,
            bottomSheetRef,
            channel,
            onPressEmoji,
            onBackspace,
            inPortalKeyboard,
            suggestedEmojis,
          };
          tmp17Result = closure_9(tmp2(tmp3[20]), obj9);
        } else if (expressionPickerViewType === constants.GIF) {
          const obj10 = {
            bottomSheetRef,
            channelId: null,
            guildId: null,
            hideFavorites: flag,
            initialQuery: initialGifQuery,
            onPressGIF,
          };
          ({ id: obj11.channelId, guild_id: obj11.guildId } = channel);
          tmp17Result = closure_9(tmp2(tmp3[21]), obj10);
        } else {
          tmp17Result = null;
          if (expressionPickerViewType === constants.STICKER) {
            const obj12 = {
              bottomSheetRef,
              bottomSheetIndex,
              channel,
              onPressSticker,
              stickerFormats,
              inPortalKeyboard,
            };
            tmp17Result = closure_9(tmp2(tmp3[22]), obj12);
          }
        }
        items4[1] = closure_9(View, obj8);
        return closure_10(View, obj6);
      },
);
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPicker.tsx");

export default memoResult;
