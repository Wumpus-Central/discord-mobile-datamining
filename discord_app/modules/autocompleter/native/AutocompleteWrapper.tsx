// === Module 12111: AutocompleteWrapper ===

// Module 12111 (AutocompleteWrapper)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import KeyboardTypes from "KeyboardTypes" /* 1628 */;
import Server from "Server" /* 1997 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import utils_AutocompleteUtilsDefault from "utils/AutocompleteUtils" /* 6098 */;
import NavigatorConstants from "NavigatorConstants" /* 6261 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6656 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6717 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7235 */;
import TimestampUtils from "TimestampUtils" /* 8131 */;
import GameSearchSession from "GameSearchSession" /* 8684 */;
import GameSearchFilterGroup from "GameSearchFilterGroup" /* 8685 */;
import GameSearchSurfaces from "GameSearchSurfaces" /* 9081 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9208 */;
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 9667 */;
import AutocompleteOptions from "AutocompleteOptions" /* 9751 */;
import TimestampSuggestionUtils from "TimestampSuggestionUtils" /* 9764 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 11946 */;
import Autocomplete from "Autocomplete" /* 12112 */;
import ChannelAutocompleteAnalytics from "ChannelAutocompleteAnalytics" /* 12123 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7894 */;
import EmojiStore from "EmojiStore" /* 5992 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5753 */;
import StickersStore from "StickersStore" /* 6035 */;

require = fn;
function getStickersItemLayout(arg0, index) {
  obj = { length: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE, offset: null, index: null };
  const result = index * (Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN);
  const diff = index - 1;
  obj.offset = result + diff * Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN;
  obj.index = index;
  return obj;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, FlatList: metroRequire, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ AutoCompleteResultTypes: closure_11, WHITESPACE_RE: closure_12, AnalyticEvents: map1, UpsellTypes: closure_14 } = Constants);
const BOOLEAN_CHOICES = fn(5399).BOOLEAN_CHOICES;
const ApplicationCommandsConstants = fn(9668);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = ApplicationCommandsConstants);
const ChannelAutocompleteConstants = fn(5400);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20, COMMAND_SENTINEL: closure_21, GAME_MENTION_INPUT_PREFIX: closure_22, TIMESTAMP_MENTION_INPUT_PREFIX: closure_23 } = ChannelAutocompleteConstants);
const AutocompleteTypes = fn(9752).AutocompleteTypes;
const EmojiInteractionPoint = fn(1392).EmojiInteractionPoint;
const jsxProd = fn(21);
({ jsx: closure_26, Fragment: closure_27, jsxs: closure_28 } = jsxProd);
let c29 = "text-sm/semibold";
const hairlineWidth = StyleSheet.hairlineWidth;
let c31 = 200;
let closure_32 = { allowSpaces: true, maxQueryLength: 64 };
let obj = { allowSpaces: true, maxQueryLength: fn(8212).GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH };
const createStyles = fn(5090);
let closure_34 = createStyles.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  obj = { autocompletePositionRelative: { position: "relative" }, autocompleteWrapper: null, autocompleteContainer: null, autocomplete: null, sectionDivider: null, sectionTitle: null, stickersAutocompleteList: null };
  let str = "absolute";
  if (obj2.isAndroid()) {
    str = "relative";
  }
  obj.autocompleteWrapper = { position: str, marginHorizontal, marginBottom };
  obj2 = PlatformUtils;
  obj.autocompleteContainer = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  const obj3 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  obj.autocomplete = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  const obj4 = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj.sectionDivider = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  const obj5 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  obj.sectionTitle = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  const obj6 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  obj.stickersAutocompleteList = { paddingLeft: 12 - Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaxAvailableSpace(arg0) {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(tmp7).insets;
  const diff = useWindowDimensionsDefault(first).height - insets.top - insets.bottom;
  return diff - NavigatorConstants.NAV_BAR_HEIGHT - arg0;
}) : (function useMaxAvailableSpace(arg0) {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const diff = useWindowDimensionsDefault({ ignoreKeyboard: true }).height - insets.top - insets.bottom;
  return diff - NavigatorConstants.NAV_BAR_HEIGHT - arg0;
});
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMeasuredHeight(arg0) {
  const cResult = c.c(3);
  [tmp3, tmp4] = noop.useState(null);
  require = tmp4;
  const tmp5 = _slicedToArray(noop.useState(arg0), 2);
  if (tmp5[0] !== arg0) {
    tmp5[1](arg0);
    tmp4(null);
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0) {
      if (arg0 > 0) {
        const _Math = Math;
        const tmp4 = Math.round(arg0);
        tmp4((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3) {
    const items = [tmp3, first];
    cResult[1] = tmp3;
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (function useMeasuredHeight(arg0) {
  let tmp = _slicedToArray(noop.useState(null), 2);
  closure_0 = tmp2;
  const tmp3 = _slicedToArray(noop.useState(arg0), 2);
  if (tmp3[0] !== arg0) {
    tmp3[1](arg0);
    tmp2(null);
  }
  const items = [
    tmp[0],
    noop.useCallback((arg0) => {
      if (arg0 > 0) {
        const _Math = Math;
        closure_0 = Math.round(arg0);
        closure_0((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }, [])
  ];
  return items;
});
let closure_38 = { resultCount: 0, stickerResults: [], nonStickerResults: [], hasStickerResults: false, hasNonStickerResults: false };
class ACWrapper {
  constructor(arg0) {
    analyticsLocations = global.analyticsLocations;
    channel = global.channel;
    canMentionEveryone = global.canMentionEveryone;
    keyboardType = global.keyboardType;
    onChangeAutoCompleteVisibility = global.onChangeAutoCompleteVisibility;
    closure_4 = onChangeAutoCompleteVisibility;
    commandsDisabled = global.commandsDisabled;
    chatInputRef = global.chatInputRef;
    optionStates = undefined;
    activeOption = undefined;
    activeCommand = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    resultCount = undefined;
    stickerResults = undefined;
    nonStickerResults = undefined;
    hasStickerResults = undefined;
    hasNonStickerResults = undefined;
    closure_18 = undefined;
    closure_19 = undefined;
    closure_20 = undefined;
    focused = undefined;
    c22 = undefined;
    selectionStart = undefined;
    selectionEnd = undefined;
    closure_25 = undefined;
    closure_26 = undefined;
    closure_27 = undefined;
    anchor = undefined;
    beginSearch = undefined;
    enabled = undefined;
    anchor = undefined;
    beginSearch = undefined;
    closure_33 = undefined;
    setData = undefined;
    autocompleteType = undefined;
    query = undefined;
    queryOptions = undefined;
    closure_38 = undefined;
    showOptionValuesPicker = undefined;
    closure_40 = undefined;
    closure_41 = undefined;
    closure_42 = undefined;
    closure_43 = undefined;
    closure_44 = undefined;
    closure_45 = undefined;
    closure_46 = undefined;
    closure_47 = undefined;
    closure_48 = undefined;
    closure_49 = undefined;
    closure_50 = undefined;
    closure_51 = undefined;
    closure_52 = undefined;
    closure_53 = undefined;
    closure_54 = undefined;
    closure_55 = undefined;
    closure_56 = undefined;
    closure_57 = undefined;
    closure_58 = undefined;
    closure_59 = undefined;
    closure_60 = undefined;
    tmp = analyticsLocations;
    tmp2 = canMentionEveryone;
    ({ canOnlyUseTextCommands, screenIndex, ref } = global);
    obj = analyticsLocations(canMentionEveryone[26]);
    items = [];
    items[0] = optionStates;
    stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ optionStates: ApplicationCommandStore.getOptionStates(channel.id), activeOption: ApplicationCommandStore.getActiveOption(channel.id), activeCommand: ApplicationCommandStore.getActiveCommand(channel.id), activeSection: ApplicationCommandStore.getActiveCommandSection(channel.id) }));
    optionStates = stateFromStoresObject.optionStates;
    activeOption = stateFromStoresObject.activeOption;
    activeCommand = stateFromStoresObject.activeCommand;
    obj2 = analyticsLocations(canMentionEveryone[27]);
    tmp4 = channel;
    token = obj2.useToken(channel(canMentionEveryone[19]).modules.mobile.TABLE_ROW_HEIGHT);
    closure_10 = token;
    obj3 = analyticsLocations(canMentionEveryone[28]);
    tmp6 = beginSearch;
    scaledTextLineHeight = obj3.useScaledTextLineHeight(beginSearch);
    closure_11 = scaledTextLineHeight;
    tmp8 = channel(canMentionEveryone[29])();
    obj4 = analyticsLocations(canMentionEveryone[30]);
    timestampSearchHeaderHeight = obj4.useTimestampSearchHeaderHeight();
    IncludeStickersInAutocomplete = analyticsLocations(canMentionEveryone[31]).IncludeStickersInAutocomplete;
    setting = IncludeStickersInAutocomplete.getSetting();
    closure_12 = setting;
    obj5 = closure_4;
    tmp11 = keyboardType;
    tmp12 = keyboardType(closure_4.useState(closure_38), 2);
    first = tmp12[0];
    resultCount = first.resultCount;
    stickerResults = first.stickerResults;
    nonStickerResults = first.nonStickerResults;
    hasStickerResults = first.hasStickerResults;
    hasNonStickerResults = first.hasNonStickerResults;
    closure_18 = tmp12[1];
    obj6 = analyticsLocations(canMentionEveryone[26]);
    items1 = [];
    items1[0] = activeOption;
    stateFromStores = obj6.useStateFromStores(items1, () => activeOption.loadState);
    obj7 = analyticsLocations(canMentionEveryone[26]);
    items2 = [];
    items2[0] = closure_10;
    stateFromStores1 = obj7.useStateFromStores(items2, () => token.loadState);
    context = closure_4.useContext(analyticsLocations(canMentionEveryone[32]).RedesignCompatContext);
    closure_19 = context;
    items3 = [, ];
    items3[0] = channel;
    items3[1] = setting;
    memo = closure_4.useMemo(() => AutocompleteOptions.getAutocompleteOptions(channel, true, setting), items3);
    closure_20 = memo;
    tmp18 = keyboardType(closure_4.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }), 2);
    first1 = tmp18[0];
    focused = first1.focused;
    text = first1.text;
    c22 = text;
    selectionStart = first1.selectionStart;
    selectionEnd = first1.selectionEnd;
    tmp20 = keyboardType(closure_4.useState(0), 2);
    [tmp21, closure_25] = tmp20;
    IncludeGameMentionsInAutocomplete = analyticsLocations(canMentionEveryone[31]).IncludeGameMentionsInAutocomplete;
    setting1 = IncludeGameMentionsInAutocomplete.getSetting();
    closure_26 = setting1;
    closure_27 = setting1;
    tmp23 = channel(canMentionEveryone[34])(text, selectionEnd, setting1, c22, closure_33);
    anchor = tmp23.anchor;
    beginSearch = tmp23.beginSearch;
    TimestampAutocompleteMobileExperiment = analyticsLocations(canMentionEveryone[35]).TimestampAutocompleteMobileExperiment;
    enabled = TimestampAutocompleteMobileExperiment.getConfig({ location: "AutocompleteWrapper timestamp search" }).enabled;
    tmp24 = channel(canMentionEveryone[34])(text, selectionEnd, enabled, selectionStart, beginSearch);
    anchor2 = tmp24.anchor;
    anchor = anchor2;
    beginSearch2 = tmp24.beginSearch;
    beginSearch = beginSearch2;
    closure_33 = closure_4.useRef({ text: "", selectionEnd: 0 });
    items4 = [, , , , , , , , , , ];
    items4[0] = activeOption;
    items4[1] = beginSearch;
    items4[2] = beginSearch2;
    items4[3] = chatInputRef;
    items4[4] = setting1;
    items4[5] = anchor;
    items4[6] = enabled;
    items4[7] = anchor2;
    items4[8] = selectionEnd;
    items4[9] = selectionStart;
    items4[10] = text;
    effect = closure_4.useEffect(() => {
      text = closure_33.current.text;
      selectionEnd = closure_33.current.selectionEnd;
      closure_33.current.text = text;
      closure_33.current.selectionEnd = selectionEnd;
      if (text.length >= 6) {
        if (null == activeOption) {
          if (selectionStart === tmp2) {
            if (" " === tmp[tmp2 - 1]) {
              const result = autocompleter_AutocompleteUtils.findAutoInsertOnSpaceToken(tmp, tmp2, collapsedCategories);
              if (null != result) {
                const result1 = utils_AutocompleteUtilsDefault.findAutoInsertOnSpaceMentionInlineAutocompleteType(result.trigger);
                if ("gameMentionInput" === result1) {
                  if (setting1) {
                    if (null == anchor) {
                      const tmp33Result = autocompleter_AutocompleteUtils;
                      if (tmp33Result.isSpaceJustTypedAtCaret(text, selectionEnd, tmp, tmp2)) {
                        const current2 = chatInputRef.current;
                        current2.insertText(closure_2_22, result.tokenStart, false, undefined, tmp2);
                        beginSearch(result.tokenStart);
                      }
                    }
                  }
                } else if ("timestampMentionInput" === result1) {
                  if (enabled) {
                    if (null == anchor2) {
                      const tmp33Result2 = autocompleter_AutocompleteUtils;
                      if (tmp33Result2.isSpaceJustTypedAtCaret(text, selectionEnd, tmp, tmp2)) {
                        const current = chatInputRef.current;
                        current.insertText(closure_2_23, result.tokenStart, false, undefined, tmp2);
                        beginSearch2(result.tokenStart);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }, items4);
    effect1 = closure_4.useEffect(() => {
      c0 = false;
      let result = activeCommand.addConditionalChangeListener(() => {
        let tmp = !c0;
        if (!c0) {
          let flag;
          if (activeCommand.isConnected()) {
            const result = analyticsLocations(canMentionEveryone[38]).initiateEmojiInteraction(c25.AutocompleteWrapperShown);
            flag = false;
            obj = analyticsLocations(canMentionEveryone[38]);
          }
          tmp = flag;
        }
        return tmp;
      });
      return () => {
        c0 = true;
      };
    }, []);
    setData = channel(canMentionEveryone[39])(tmp18[1], 16).setData;
    items5 = [];
    items5[0] = setData;
    imperativeHandle = closure_4.useImperativeHandle(ref, () => ({ setChatInputHeight, setData }), items5);
    items6 = [, , , , , , , , , , , , , ];
    items6[0] = selectionStart;
    items6[1] = selectionEnd;
    items6[2] = text;
    items6[3] = activeCommand;
    items6[4] = optionStates;
    items6[5] = activeOption;
    items6[6] = canMentionEveryone;
    items6[7] = commandsDisabled;
    items6[8] = memo;
    items6[9] = stateFromStores;
    items6[10] = stateFromStores1;
    items6[11] = setting1;
    items6[12] = anchor;
    items6[13] = anchor2;
    memo1 = closure_4.useMemo(() => {
      let tmp50;
      let tmp51;
      let tmp52;
      let tmp = selectionStart;
      canMentionEveryone = selectionStart;
      if (null != text) {
        if (0 !== str.trim().length) {
          if (null != activeOption) {
            let applicationCommandOptionQueryOptions = analyticsLocations(canMentionEveryone[40]).getApplicationCommandOptionQueryOptions(activeOption);
            const obj2 = analyticsLocations(canMentionEveryone[40]);
          } else {
            applicationCommandOptionQueryOptions = { canMentionEveryone, canMentionHere: canMentionEveryone, canMentionChannels: true, canMentionUsers: true, canMentionRoles: true, canMentionAnyGuildUser: false, canMentionNonMentionableRoles: false, canMentionOtherGlobals: true };
          }
          let tmp5;
          if (null != activeOption) {
            tmp5 = optionStates[activeOption.name];
          }
          if (null != activeCommand) {
            if (null != activeOption) {
              if (null != tmp5) {
                let num = tmp5.location;
                if (num == null) {
                  num = 0;
                }
                let num2 = tmp5.length;
                if (num2 == null) {
                  num2 = 0;
                }
                const sum = num + num2;
                let substr;
                if (tmp >= sum) {
                  substr = str.substring(sum, analyticsLocations(canMentionEveryone[41]).getCommandOptionValueEnd(str, sum, activeCommand));
                  const obj3 = analyticsLocations(canMentionEveryone[41]);
                }
                query = substr;
                if (null == activeOption.choices) {
                  if (!activeOption.autocomplete) {
                    const type = activeOption.type;
                    if (analyticsLocations(canMentionEveryone[42]).ApplicationCommandOptionType.BOOLEAN === type) {
                      let prefix = "";
                      let CHOICES = selectionEnd.CHOICES;
                      let choices = nonStickerResults;
                      let flag = true;
                      let str2 = "";
                    } else if (analyticsLocations(canMentionEveryone[42]).ApplicationCommandOptionType.CHANNEL === type) {
                      prefix = context;
                      CHOICES = selectionEnd.CHANNELS;
                      const channelTypes = activeOption.channelTypes;
                      flag = true;
                      str2 = context;
                    } else {
                      if (analyticsLocations(canMentionEveryone[42]).ApplicationCommandOptionType.ROLE !== type) {
                        if (analyticsLocations(canMentionEveryone[42]).ApplicationCommandOptionType.USER !== type) {
                          flag = false;
                        }
                      }
                      prefix = closure_18;
                      CHOICES = selectionEnd.MENTIONS;
                      flag = true;
                      str2 = closure_18;
                    }
                  }
                  let tmp8 = substr;
                  let tmp9 = CHOICES;
                  if (flag) {
                    let startsWithResult = null != str2;
                    if (startsWithResult) {
                      startsWithResult = "" !== str2;
                    }
                    if (startsWithResult) {
                      startsWithResult = null != substr;
                    }
                    if (startsWithResult) {
                      startsWithResult = substr.startsWith(str2);
                    }
                    let tmp74 = substr;
                    if (startsWithResult) {
                      let str8 = "";
                      if (substr.length > str2.length) {
                        str8 = substr.substring(str2.length);
                      }
                      query = str8;
                      tmp74 = str8;
                    }
                    const optionValues = {};
                    const _Object2 = Object;
                    const entries = Object.entries(optionStates);
                    const item = entries.forEach((item) => {
                      [tmp, tmp2] = item;
                      if (null != tmp2.optionValue) {
                        obj[tmp] = tmp2.optionValue;
                      }
                    });
                    const obj8 = { query: tmp74, autocompleteType: CHOICES, autocompleteSelectionStart: num + num2, queryOptions: null, showOptionValuesPicker: null };
                    const obj9 = { activeCommand, optionValues, isActiveApplicationCommand: flag, option: activeOption, choices, channelTypes };
                    const merged = Object.assign(applicationCommandOptionQueryOptions);
                    obj8.queryOptions = obj9;
                    obj8.showOptionValuesPicker = flag;
                    return obj8;
                  }
                }
                prefix = "";
                CHOICES = selectionEnd.CHOICES;
                choices = activeOption.choices;
                flag = true;
                str2 = "";
              }
            }
          }
          if (setting1) {
            if (null != anchor) {
              const obj10 = { query: str.slice(anchor + text.length, selectionEnd).toLowerCase(), autocompleteType: selectionEnd.GAME_MENTIONS, autocompleteSelectionStart: anchor, queryOptions: null };
              const obj11 = {};
              const merged1 = Object.assign(applicationCommandOptionQueryOptions);
              obj10.queryOptions = obj11;
              return obj10;
            }
          }
          if (null != anchor2) {
            if (null == activeCommand) {
              const obj12 = { query: str.slice(anchor2 + selectionStart.length, selectionEnd), autocompleteType: selectionEnd.TIMESTAMPS, autocompleteSelectionStart: anchor2, queryOptions: null };
              const obj13 = {};
              const merged2 = Object.assign(applicationCommandOptionQueryOptions);
              obj12.queryOptions = obj13;
              return obj12;
            }
          }
          let sum1 = null;
          if (null != tmp5) {
            let num3 = tmp5.location;
            if (num3 == null) {
              num3 = 0;
            }
            let num4 = tmp5.length;
            if (num4 == null) {
              num4 = 0;
            }
            sum1 = num3 + num4;
          }
          while (true) {
            let obj4 = analyticsLocations(canMentionEveryone[43]);
            let arr = text;
            let tmp36 = tmp8;
            let num5 = sum1;
            let result = obj4.isAutocompleteSeparatingBoundary(text, tmp);
            if (tmp31) {
              num5 = 0;
            }
            if (tmp === num5) {
              let substr1 = arr.slice(tmp, selectionEnd);
              let obj5 = analyticsLocations(canMentionEveryone[36]);
              prefix = obj5.getPrefix(substr1);
              let obj6 = analyticsLocations(canMentionEveryone[36]);
              query = obj6.getQuery(substr1);
              if (null != query) {
                if (prefix !== focused) {
                  tmp36 = query;
                  let found = tmp9;
                }
              }
              let _Object = Object;
              let keys = Object.keys(memo);
              found = keys.find((item) => {
                let tmp = item !== AutocompleteTypes.SLASHES && item !== AutocompleteTypes.SLASHES_DISCOVERY;
                if (!tmp) {
                  let tmp4 = null == activeCommand;
                  if (tmp4) {
                    tmp4 = !commandsDisabled;
                  }
                  tmp = tmp4;
                }
                if (tmp) {
                  let matchesResult = undefined !== prefix;
                  if (matchesResult) {
                    matchesResult = undefined !== query;
                  }
                  if (matchesResult) {
                    matchesResult = obj.matches(prefix, query, diff);
                  }
                  tmp = matchesResult;
                }
                return tmp;
              });
              tmp36 = query;
              tmp50 = tmp;
              tmp51 = query;
              tmp52 = found;
              if (null != found) {
                break;
              }
            } else {
              found = tmp9;
            }
            let diff = tmp - 1;
            canMentionEveryone = diff;
            let num6 = sum1;
            if (tmp31) {
              num6 = 0;
            }
            tmp = diff;
            tmp8 = tmp36;
            tmp9 = found;
            tmp51 = tmp36;
            tmp52 = found;
            tmp50 = diff;
            if (diff < num6) {
              break;
            }
          }
          let tmp55 = tmp51;
          if (tmp52 === selectionEnd.SLASHES) {
            let str5 = tmp51;
            if (tmp51 == null) {
              str5 = "";
            }
            text = analyticsLocations(canMentionEveryone[41]).getTextBeforeFirstOption(str5).text;
            query = text;
            tmp55 = text;
            const obj7 = analyticsLocations(canMentionEveryone[41]);
          }
          const obj14 = { query: tmp55, autocompleteType: tmp52, autocompleteSelectionStart: tmp50, queryOptions: null };
          const obj15 = {};
          const merged3 = Object.assign(applicationCommandOptionQueryOptions);
          obj14.queryOptions = obj15;
          return obj14;
        }
      }
      return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
    }, items6);
    autocompleteType = memo1.autocompleteType;
    query = memo1.query;
    queryOptions = memo1.queryOptions;
    autocompleteSelectionStart = memo1.autocompleteSelectionStart;
    closure_38 = autocompleteSelectionStart;
    showOptionValuesPicker = memo1.showOptionValuesPicker;
    tmp29 = keyboardType(queryOptions(autocompleteType), 2);
    [tmp30, closure_40] = tmp29;
    tmp31 = keyboardType(queryOptions(autocompleteType), 2);
    [tmp32, closure_41] = tmp31;
    tmp33 = keyboardType(queryOptions(autocompleteType), 2);
    first2 = tmp33[0];
    closure_42 = first2;
    closure_43 = tmp33[1];
    if (tmp30 == null) {
      tmp30 = tmp8;
    }
    closure_44 = tmp30;
    if (tmp32 == null) {
      tmp32 = timestampSearchHeaderHeight;
    }
    closure_45 = tmp32;
    items7 = [];
    items7[0] = anchor2;
    effect2 = obj5.useEffect(() => {
      if (null != anchor2) {
        RunAfterInteractionsUtils.runAfterInteractions(TimestampSuggestionUtils.preloadTimestampParser);
      }
    }, items7);
    items8 = [, , , ];
    items8[0] = autocompleteType;
    items8[1] = query;
    items8[2] = queryOptions;
    items8[3] = memo;
    callback = obj5.useCallback((arg0) => {
      if (null != autocompleteType) {
        if (null != query) {
          const queryResultsResult = memo[tmp].queryResults(tmp2, queryOptions, arg0);
          const items = [];
          const items1 = [];
          const item = queryResultsResult.forEach((type) => {
            if (type.type === scaledTextLineHeight.STICKER) {
              items.push(type);
            } else {
              items1.push(type);
            }
          });
          const obj2 = { resultCount: queryResultsResult.length, stickerResults: items, nonStickerResults: items1, hasStickerResults: items.length > 0, hasNonStickerResults: items1.length > 0 };
          closure_18(obj2);
        }
      }
      closure_18(closure_38);
    }, items8);
    closure_46 = callback;
    items9 = [, , ];
    items9[0] = autocompleteType;
    items9[1] = callback;
    items9[2] = memo;
    effect3 = obj5.useEffect(() => {
      let tmp2 = null;
      if (null != autocompleteType) {
        let stores;
        if (memo != null) {
          stores = memo[tmp].stores;
        }
        tmp2 = stores;
      }
      if (null != tmp2) {
        const batchedStoreListener = new analyticsLocations(canMentionEveryone[26]).BatchedStoreListener(tmp2, () => callback(false));
        batchedStoreListener.attach("AutocompleteWrapper");
        return () => batchedStoreListener.detach();
      }
    }, items9);
    items10 = [];
    items10[0] = callback;
    effect4 = obj5.useEffect(() => {
      callback(true);
    }, items10);
    items11 = [, ];
    items11[0] = stickerResults;
    items11[1] = nonStickerResults;
    callback1 = obj5.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length }), items11);
    closure_47 = callback1;
    items12 = [, , , ];
    items12[0] = autocompleteType;
    items12[1] = focused;
    items12[2] = keyboardType;
    items12[3] = resultCount;
    memo2 = obj5.useMemo(() => {
      let tmp = resultCount > 0;
      if (!tmp) {
        tmp = autocompleteType === AutocompleteTypes.SLASHES || tmp2 === AutocompleteTypes.SLASHES_DISCOVERY;
        const tmp3 = autocompleteType === AutocompleteTypes.SLASHES || tmp2 === AutocompleteTypes.SLASHES_DISCOVERY;
      }
      if (!tmp) {
        tmp = autocompleteType === AutocompleteTypes.GAME_MENTIONS;
      }
      if (!tmp) {
        tmp = autocompleteType === AutocompleteTypes.TIMESTAMPS;
      }
      let tmp9 = focused;
      if (focused) {
        tmp9 = tmp;
      }
      if (tmp9) {
        tmp9 = keyboardType === KeyboardTypes.KeyboardTypes.SYSTEM;
      }
      return tmp9;
    }, items12);
    closure_48 = memo2;
    closure_49 = obj5.useRef(false);
    items13 = [, ];
    items13[0] = autocompleteType;
    items13[1] = activeCommand;
    effect5 = obj5.useEffect(() => {
      let tmp4 = autocompleteType === AutocompleteTypes.SLASHES;
      if (ref.current) {
        if (!tmp4) {
          tmp4 = autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
        }
        if (!tmp4) {
          tmp4 = null != activeCommand;
        }
        ref.current = tmp4;
      } else {
        let tmp5 = tmp4;
        if (!tmp4) {
          tmp5 = autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
        }
        if (!tmp5) {
          tmp5 = null != activeCommand;
        }
        ref.current = tmp5;
        if (ref.current) {
          AppAnalyticsUtils.trackWithMetadata(constants2.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "slash_ui" });
        }
      }
    }, items13);
    items14 = [];
    items14[0] = autocompleteType;
    effect6 = obj5.useEffect(() => autocompleteType === AutocompleteTypes.GAME_MENTIONS ? (() => {
      const gameSearchSession = analyticsLocations(8684).getGameSearchSession(analyticsLocations(9081).GameSearchSurface.CHAT_MENTION, analyticsLocations(8685).GameSearchFilterGroup.DEFAULT);
      return gameSearchSession.end();
    }) : undefined, items14);
    closure_50 = obj5.useRef(null);
    items15 = [, , , , , , ];
    items15[0] = onChangeAutoCompleteVisibility;
    items15[1] = activeCommand;
    items15[2] = memo2;
    items15[3] = autocompleteType;
    items15[4] = channel;
    items15[5] = callback1;
    items15[6] = setting1;
    effect7 = obj5.useEffect(() => {
      let tmp = memo2;
      if (!memo2) {
        tmp = null != activeCommand;
      }
      if (onChangeAutoCompleteVisibility != null) {
        tmp4(tmp);
      }
      if (tmp) {
        let str = autocompleteType;
        if (autocompleteType == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + channel.id + ":" + str;
        if (ref2.current !== combined) {
          ref2.current = combined;
          const obj2 = {};
          const merged = Object.assign(callback1());
          let tmp17;
          if (autocompleteType === AutocompleteTypes.MENTIONS) {
            tmp17 = setting1;
          }
          obj2.gameMentionsAvailable = tmp17;
          const result = ChannelAutocompleteAnalytics.iOSTrackAutocompleteOpen(autocompleteType, channel, obj2);
        }
      } else {
        ref2.current = null;
      }
    }, items15);
    tmp44 = query(tmp21);
    closure_51 = tmp44;
    items16 = [, , , , , ];
    items16[0] = autocompleteType;
    items16[1] = stickerResults.length;
    items16[2] = tmp44;
    items16[3] = scaledTextLineHeight;
    items16[4] = tmp30;
    items16[5] = tmp32;
    memo3 = obj5.useMemo(() => {
      const sum = scaledTextLineHeight + 24;
      const sum1 = c31 + sum;
      if (stickerResults.length > 0) {
        let sum2 = sum1 + sum + Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + hairlineWidth;
      } else {
        sum2 = sum1;
        if (autocompleteType !== AutocompleteTypes.EMOJIS_AND_STICKERS) {
          if (autocompleteType === AutocompleteTypes.GAME_MENTIONS) {
            let sum3 = c31 + closure_44;
          } else if (autocompleteType === AutocompleteTypes.TIMESTAMPS) {
            sum3 = c31 + timestampSearchHeaderHeight;
          } else {
            sum3 = c31;
          }
        }
      }
      return Math.min(closure_51, sum2);
    }, items16);
    closure_52 = memo3;
    tmp11Result = tmp11(obj5.useState(null), 2);
    first3 = tmp11Result[0];
    closure_53 = first3;
    tmp48 = tmp11Result[1];
    closure_54 = tmp48;
    items17 = [, , , , , , , , , , , , , ];
    items17[0] = resultCount;
    items17[1] = autocompleteType;
    items17[2] = memo2;
    items17[3] = hasStickerResults;
    items17[4] = hasNonStickerResults;
    items17[5] = nonStickerResults.length;
    items17[6] = memo3;
    items17[7] = first3;
    items17[8] = tmp32;
    items17[9] = context;
    items17[10] = token;
    items17[11] = scaledTextLineHeight;
    items17[12] = tmp30;
    items17[13] = first2;
    memo4 = obj5.useMemo(() => {
      if (autocompleteType === AutocompleteTypes.EMOJIS_AND_STICKERS) {
        let num7 = 0;
        if (0 !== nonStickerResults.length) {
          if (context) {
            num7 = length * token + (length - 1) * hairlineWidth;
          }
        }
        let sum = num7;
        if (hasNonStickerResults) {
          sum = num7 + (scaledTextLineHeight + 24);
        }
        let tmp18 = hasStickerResults;
        let sum2 = sum;
        if (hasStickerResults) {
          const sum1 = scaledTextLineHeight + 24;
          sum2 = sum + (sum1 + Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + 12);
        }
        if (tmp18) {
          tmp18 = hasNonStickerResults;
        }
        let sum3 = sum2;
        if (tmp18) {
          sum3 = sum2 + hairlineWidth;
        }
        let num2 = sum3;
      } else {
        if (tmp3) {
          let num6 = first3;
          if (first3 == null) {
            num6 = 0;
          }
          num2 = num6;
        } else {
          num2 = 0;
          if (null != autocompleteType) {
            let num3 = 0;
            if (resultCount > 0) {
              let tmp6 = first2;
              if (first2 == null) {
                let num4 = 0;
                if (0 !== resultCount) {
                  if (context) {
                    num4 = resultCount * token + (resultCount - 1) * hairlineWidth;
                  }
                }
                tmp6 = num4;
              }
              num3 = tmp6;
            }
            if (autocompleteType === AutocompleteTypes.GAME_MENTIONS) {
              let sum4 = num3 + closure_44;
            } else {
              sum4 = num3;
              if (autocompleteType === AutocompleteTypes.TIMESTAMPS) {
                sum4 = num3 + timestampSearchHeaderHeight;
              }
            }
            num2 = sum4;
          }
        }
        tmp3 = autocompleteType === AutocompleteTypes.SLASHES || autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
      }
      let num12 = 0;
      if (memo2) {
        num12 = num2;
      }
      return Math.min(num12, memo3);
    }, items17);
    tmp50 = memo4 > 0;
    closure_55 = tmp50;
    tmpResult = tmp(tmp2[27]);
    token1 = tmpResult.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
    tmpResult1 = tmp(tmp2[27]);
    token2 = tmpResult1.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
    tmpResult2 = tmp(tmp2[27]);
    token3 = tmpResult2.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
    tmpResult3 = tmp(tmp2[27]);
    token4 = tmpResult3.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
    tmpResult4 = tmp(tmp2[27]);
    token5 = tmpResult4.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
    closure_56 = token5;
    num = 0;
    tmp56 = setData;
    if (tmp50) {
      num = token2;
    }
    num2 = 0;
    if (tmp50) {
      num2 = token3;
    }
    if (tmp50) {
      num3 = token5;
    } else {
      num3 = 0;
      if (null != activeCommand) {
        num3 = 0;
      }
    }
    tmp56Result = tmp56(token1, num, num2, token4, num3);
    tmpResult5 = tmp(tmp2[18]);
    prop = null;
    if (tmpResult5.isIOS()) {
      prop = tmp56Result.autocompletePositionRelative;
    }
    items18 = [, ];
    items18[0] = tmp50;
    items18[1] = token5;
    memo5 = obj5.useMemo(() => {
      let tmp;
      if (closure_55) {
        obj = { marginTop: token5 };
        tmp = obj;
      }
      return tmp;
    }, items18);
    items19 = [, , , , ];
    items19[0] = analyticsLocations;
    items19[1] = beginSearch;
    items19[2] = beginSearch2;
    items19[3] = channel;
    items19[4] = chatInputRef;
    tmp60 = tmp4(tmp2[50])(memo4, screenIndex);
    callback2 = obj5.useCallback((type, tokenStart, arg2) => {
      if (type.type !== constants.EMOJI_PREMIUM_UPSELL) {
        if (type.type === constants.GLOBAL) {
          if ("gameMentionInput" === type.inlineAutocompleteType) {
            const current5 = chatInputRef.current;
            current5.insertText(closure_2_22, tokenStart, false);
            beginSearch(tokenStart);
          }
        }
        if (type.type === constants.GLOBAL) {
          if ("timestampMentionInput" === type.inlineAutocompleteType) {
            const current4 = chatInputRef.current;
            current4.insertText(closure_2_23, tokenStart, false);
            beginSearch2(tokenStart);
          }
        }
        const autocompleteResultText = autocompleter_AutocompleteUtils.getAutocompleteResultText(type, channel);
        const current = chatInputRef.current;
        const applicationCommandManager = current.getApplicationCommandManager();
        let tmp13;
        if (type.type === constants.GAME_MENTION) {
          if (applicationCommandManager != null) {
            applicationCommandManager.addGameMention(type.game);
          }
          let gameMentionNode;
          if (applicationCommandManager != null) {
            gameMentionNode = applicationCommandManager.buildGameMentionNode(type.game);
          }
          let tmp17;
          if (null != gameMentionNode) {
            const items = [gameMentionNode];
            tmp17 = items;
          }
          tmp13 = tmp17;
        }
        let tmp18 = autocompleteResultText;
        let tmp19 = tmp13;
        if (type.type === constants.TIMESTAMP_MENTION) {
          tmp18 = autocompleteResultText;
          tmp19 = tmp13;
          if (null != applicationCommandManager) {
            const result = TimestampUtils.formatTimestampMention(type.mention);
            tmp18 = autocompleteResultText;
            tmp19 = tmp13;
            if (null != result) {
              const addTimestampMentionResult = applicationCommandManager.addTimestampMention(result.formatted, type.mention);
              const items1 = [applicationCommandManager.buildTimestampMentionNode(addTimestampMentionResult)];
              tmp18 = addTimestampMentionResult;
              tmp19 = items1;
            }
            const tmp8Result = TimestampUtils;
          }
        }
        let result1;
        if (applicationCommandManager != null) {
          result1 = applicationCommandManager.setAutoCompleteResult(channel.id, tmp18, arg2, type);
        }
        if (!result1) {
          const current2 = chatInputRef.current;
          current2.insertText(tmp18, tokenStart, type.type !== constants.STICKER, tmp19);
          if (type.type === constants.STICKER) {
            const current3 = chatInputRef.current;
            current3.handleSelectSticker(type.sticker, tokenStart);
          }
        }
      } else {
        const obj2 = { initialUpsellKey: constants3.EMOJI_AUTOCOMPLETE, analyticsLocations };
        const result2 = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
      }
    }, items19);
    closure_57 = callback2;
    items20 = [, , ];
    items20[0] = chatInputRef;
    items20[1] = optionStates;
    items20[2] = channel;
    items21 = [, , , , , ];
    items21[0] = autocompleteSelectionStart;
    items21[1] = autocompleteType;
    items21[2] = callback1;
    items21[3] = channel;
    items21[4] = callback2;
    items21[5] = showOptionValuesPicker;
    callback3 = obj5.useCallback((type) => {
      const current = chatInputRef.current;
      const applicationCommandManager = current.getApplicationCommandManager();
      if (type.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
        let success;
        if (optionStates[type.name].lastValidationResult != null) {
          success = lastValidationResult.success;
        }
        if (success) {
          const result = application_commands_ApplicationCommandUtils.openCommandAttachmentPreview(applicationCommandManager, channel.id, type.name);
          const tmpResult = application_commands_ApplicationCommandUtils;
        } else if (applicationCommandManager != null) {
          const result1 = applicationCommandManager.insertOrJumpCommandOption(type);
        }
      } else {
        if (applicationCommandManager != null) {
          const length = applicationCommandManager.props.text.length;
        }
        if (applicationCommandManager != null) {
          const result2 = applicationCommandManager.insertOrJumpCommandOption(type, length);
        }
      }
    }, items20);
    callback4 = obj5.useCallback((type) => {
      if (type.type === constants.GLOBAL) {
        if ("gameMentionInput" === type.inlineAutocompleteType) {
          type = constants.GAME_MENTION;
        }
        const obj2 = { selectionType: type, stickerId: null, gameId: null };
        let id = null;
        if (type.type === constants.STICKER) {
          id = type.sticker.id;
        }
        obj2.stickerId = id;
        let id1 = null;
        if (type.type === constants.GAME_MENTION) {
          id1 = type.game.id;
        }
        obj2.gameId = id1;
        const merged = Object.assign(callback1());
        const result = ChannelAutocompleteAnalytics.iOSTrackAutocompleteSelect(autocompleteType, channel, obj2);
        if (type.type === constants.GAME_MENTION) {
          const gameSearchSession = GameSearchSession.getGameSearchSession(GameSearchSurfaces.GameSearchSurface.CHAT_MENTION, GameSearchFilterGroup.GameSearchFilterGroup.DEFAULT);
          gameSearchSession.select(type.game.id);
          const tmp2Result = GameSearchSession;
        }
        let num = autocompleteSelectionStart;
        if (autocompleteSelectionStart == null) {
          num = 0;
        }
        callback2(type, num, showOptionValuesPicker);
      }
      if (type.type === constants.GLOBAL) {
        if ("timestampMentionInput" === type.inlineAutocompleteType) {
          type = constants.TIMESTAMP_MENTION;
        }
      }
      type = type.type;
    }, items21);
    closure_58 = callback4;
    tmp11Result1 = tmp11(obj5.useState(null), 2);
    first4 = tmp11Result1[0];
    closure_59 = first4;
    closure_60 = tmp11Result1[1];
    items22 = [, , , , ];
    items22[0] = autocompleteType;
    items22[1] = callback4;
    items22[2] = first4;
    items22[3] = channel;
    items22[4] = activeCommand;
    callback5 = obj5.useCallback((item) => {
      item = item.item;
      const type = item.type;
      if (scaledTextLineHeight.USER === type) {
        const obj2 = {};
        const merged = Object.assign(item);
        obj2.guildId = channel.guild_id;
        obj2.onPress = function onPress() {
          return callback4(item);
        };
        return setting1(channel(canMentionEveryone[20]).User, obj2);
      } else if (scaledTextLineHeight.GLOBAL === type) {
        const obj3 = {};
        const merged1 = Object.assign(item);
        obj3.onPress = function onPress() {
          return callback4(item);
        };
        return setting1(channel(canMentionEveryone[20]).Global, obj3);
      } else if (scaledTextLineHeight.ROLE === type) {
        const obj4 = {};
        const merged2 = Object.assign(item);
        obj4.onPress = function onPress() {
          return callback4(item);
        };
        let tmp65 = autocompleteType === selectionEnd.MENTIONS;
        if (tmp65) {
          tmp65 = null == activeCommand;
        }
        obj4.showDescription = tmp65;
        return setting1(channel(canMentionEveryone[20]).Role, obj4);
      } else if (scaledTextLineHeight.CHANNEL === type) {
        const obj5 = {};
        const merged3 = Object.assign(item);
        obj5.onPress = function onPress() {
          return callback4(item);
        };
        return setting1(channel(canMentionEveryone[20]).Channel, obj5);
      } else if (scaledTextLineHeight.EMOJI === type) {
        const obj6 = {};
        const merged4 = Object.assign(item);
        obj6.onPress = function onPress() {
          return callback4(item);
        };
        return setting1(channel(canMentionEveryone[20]).Emoji, obj6);
      } else if (scaledTextLineHeight.EMOJI_PREMIUM_UPSELL === type) {
        const obj7 = {};
        const merged5 = Object.assign(item);
        obj7.onPress = function onPress() {
          return callback4(item);
        };
        return setting1(channel(canMentionEveryone[20]).EmojiPremiumUpsell, obj7);
      } else if (scaledTextLineHeight.CHOICE === type) {
        const obj8 = {};
        const merged6 = Object.assign(item);
        obj8.onPress = function onPress() {
          return callback4(item);
        };
        return setting1(channel(canMentionEveryone[20]).Choice, obj8);
      } else if (scaledTextLineHeight.CHOICE_LOADING === type) {
        return setting1(channel(canMentionEveryone[20]).ChoiceLoading, {});
      } else if (scaledTextLineHeight.STICKER === type) {
        const obj9 = {};
        const merged7 = Object.assign(item);
        obj9.onPress = function onPress() {
          return callback4(item);
        };
        obj9.onLongPress = function onLongPress() {
          return closure_60(item.sticker.id);
        };
        obj9.isInteracting = first4 === item.sticker.id;
        const _HermesInternal = HermesInternal;
        return setting1(channel(canMentionEveryone[20]).Sticker, obj9, "" + item.sticker.id + "-" + first4 === item.sticker.id);
      } else if (scaledTextLineHeight.GAME_MENTION === type) {
        const obj10 = {};
        const merged8 = Object.assign(item);
        obj10.onPress = function onPress() {
          return callback4(item);
        };
        return setting1(channel(canMentionEveryone[20]).Game, obj10);
      } else if (scaledTextLineHeight.TIMESTAMP_MENTION === type) {
        const obj11 = {};
        const merged9 = Object.assign(item);
        obj11.onPress = function onPress() {
          return callback4(item);
        };
        return setting1(channel(canMentionEveryone[20]).Timestamp, obj11);
      } else if (scaledTextLineHeight.LABEL === type) {
        obj = {};
        const merged10 = Object.assign(item);
        return setting1(channel(canMentionEveryone[20]).Label, obj);
      } else {
        return null;
      }
    }, items22);
    items23 = [, ];
    items23[0] = tmp56Result.autocomplete;
    items23[1] = { maxHeight: memo3 };
    tmp67 = anchor;
    tmp68 = commandsDisabled;
    obj1 = { style: null, children: null };
    items24 = [, ];
    items24[0] = tmp56Result.autocompleteWrapper;
    items24[1] = prop;
    obj1.style = items24;
    tmp69 = closure_26;
    obj38 = { style: null, children: null };
    items25 = [, ];
    items25[0] = tmp56Result.autocompleteContainer;
    items25[1] = tmp60;
    obj38.style = items25;
    tmp67Result2 = null != autocompleteType;
    if (tmp67Result2) {
      tmp71 = closure_27;
      tmp72 = selectionEnd;
      tmp69Result = autocompleteType === selectionEnd.SLASHES_DISCOVERY;
      if (tmp69Result) {
        obj39 = { channel: null, onPressSlashItem: null, onHeightChange: null, canOnlyUseTextCommands: null };
        obj39.channel = channel;
        obj39.onPressSlashItem = function onPressSlashItem(command, section, visualSection) {
          let num = autocompleteSelectionStart;
          if (autocompleteSelectionStart == null) {
            num = 0;
          }
          callback2({ command, section, type: constants.SLASH, visualSection, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY }, num);
          obj = { command, section, type: constants.SLASH, visualSection, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY };
        };
        obj39.onHeightChange = tmp48;
        obj39.canOnlyUseTextCommands = canOnlyUseTextCommands;
        tmp69Result = tmp69(tmp4(tmp2[55]), obj39);
      }
      items26 = [, , , , , ];
      items26[0] = tmp69Result;
      tmp69Result1 = autocompleteType === tmp72.SLASHES;
      if (tmp69Result1) {
        obj40 = { channel: null, query: null, onPressCommandItem: null, style: null, ItemSeparatorComponent: null, getItemLayout: null, onCommandsChange: null };
        obj40.channel = channel;
        str = query;
        tmp4Result = tmp4(tmp2[57]);
        if (query == null) {
          str = "";
        }
        obj40.query = str;
        obj40.onPressCommandItem = function onPressCommandItem(commands, found) {
          let num = autocompleteSelectionStart;
          if (autocompleteSelectionStart == null) {
            num = 0;
          }
          callback2({ command: commands, section: found, type: constants.SLASH, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY, query }, num);
          obj = { command: commands, section: found, type: constants.SLASH, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY, query };
        };
        obj40.style = items23;
        obj40.ItemSeparatorComponent = tmp(tmp2[36]).getItemSeparator;
        obj40.getItemLayout = tmp(tmp2[36]).getItemLayout;
        obj40.onCommandsChange = function onCommandsChange(commands) {
          let num = 0;
          if (0 !== commands) {
            if (context) {
              num = commands * token + (commands - 1) * hairlineWidth;
            }
          }
          closure_54(num);
        };
        tmp69Result1 = tmp69(tmp4Result, obj40);
      }
      items26[1] = tmp69Result1;
      tmp67Result1 = autocompleteType === tmp72.EMOJIS_AND_STICKERS;
      if (tmp67Result1) {
        tmp67Result = hasStickerResults;
        if (hasStickerResults) {
          obj41 = { children: null };
          obj42 = { style: null, children: null };
          items27 = [, ];
          items27[0] = tmp56Result.sectionTitle;
          obj43 = { height: null };
          obj43.height = scaledTextLineHeight;
          items27[1] = obj43;
          obj42.style = items27;
          obj44 = { variant: null, children: null };
          obj44.variant = tmp6;
          intl = tmp(tmp2[59]).intl;
          obj45 = { prefix: null };
          obj45.prefix = query;
          obj44.children = intl.format(tmp(tmp2[59]).t.uferGG, obj45);
          obj42.children = tmp69(tmp(tmp2[58]).Text, obj44);
          items28 = [, ];
          items28[0] = tmp69(tmp68, obj42);
          tmp78 = chatInputRef;
          obj46 = { horizontal: true, style: null, keyExtractor: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, getItemLayout: null, contentInset: null };
          obj47 = {};
          tmp79 = obj47;
          tmp80 = items23;
          merged = Object.assign(items23);
          tmp82 = obj47;
          merged1 = Object.assign(tmp56Result.stickersAutocompleteList);
          obj46.style = obj47;
          obj46.keyExtractor = function keyExtractor(sticker) {
            return sticker.sticker.id;
          };
          obj46.data = stickerResults;
          obj46.renderItem = callback5;
          tmp84 = autocompleteType;
          obj46.getItemLayout = autocompleteType;
          obj46.contentInset = { right: 12 };
          items28[1] = tmp69(chatInputRef, obj46);
          obj41.children = items28;
          tmp67Result = tmp67(tmp71, obj41);
        }
        items29 = [, , ];
        items29[0] = tmp67Result;
        if (hasStickerResults) {
          hasStickerResults = hasNonStickerResults;
        }
        if (hasStickerResults) {
          obj48 = { style: null };
          obj48.style = tmp56Result.sectionDivider;
          hasStickerResults = tmp69(tmp4(tmp2[60]), obj48);
        }
        items29[1] = hasStickerResults;
        if (hasNonStickerResults) {
          obj49 = { style: null, children: null };
          items30 = [, ];
          items30[0] = tmp56Result.sectionTitle;
          obj50 = { height: null };
          obj50.height = scaledTextLineHeight;
          items30[1] = obj50;
          obj49.style = items30;
          obj51 = { variant: null, children: null };
          obj51.variant = tmp6;
          intl2 = tmp(tmp2[59]).intl;
          obj52 = { prefix: null };
          tmp85 = closure_20;
          tmp86 = globalThis;
          _HermesInternal = HermesInternal;
          str2 = "";
          obj52.prefix = "" + closure_20 + query;
          obj51.children = intl2.format(tmp(tmp2[59]).t.ksAVYt, obj52);
          obj49.children = tmp69(tmp(tmp2[58]).Text, obj51);
          hasNonStickerResults = tmp69(tmp68, obj49);
        }
        obj53 = { children: null };
        items29[2] = hasNonStickerResults;
        obj53.children = items29;
        tmp67Result1 = tmp67(tmp71, obj53);
      }
      items26[2] = tmp67Result1;
      tmp69Result2 = autocompleteType === tmp72.GAME_MENTIONS;
      if (tmp69Result2) {
        obj54 = { onLayout: null, children: null };
        obj54.onLayout = function onLayout(nativeEvent) {
          return _undefined(nativeEvent.nativeEvent.layout.height);
        };
        obj54.children = tmp69(tmp4(tmp2[61]), {});
        tmp69Result2 = tmp69(tmp68, obj54);
      }
      items26[3] = tmp69Result2;
      tmp69Result3 = autocompleteType === tmp72.TIMESTAMPS;
      if (tmp69Result3) {
        obj55 = { onLayout: null, children: null };
        obj55.onLayout = function onLayout(nativeEvent) {
          return _undefined2(nativeEvent.nativeEvent.layout.height);
        };
        obj55.children = tmp69(tmp4(tmp2[30]), {});
        tmp69Result3 = tmp69(tmp68, obj55);
      }
      obj56 = { children: null };
      items26[4] = tmp69Result3;
      tmp89 = chatInputRef;
      obj57 = { style: null, keyExtractor: null, data: null, renderItem: null, ItemSeparatorComponent: null, getItemLayout: null, onContentSizeChange: null };
      obj57.style = items23;
      obj57.keyExtractor = function keyExtractor(arg0, arg1) {
        return String(arg1);
      };
      obj57.data = nonStickerResults;
      obj57.renderItem = callback5;
      obj57.ItemSeparatorComponent = tmp(tmp2[36]).getItemSeparator;
      obj57.getItemLayout = tmp(tmp2[36]).getItemLayout;
      obj57.onContentSizeChange = function onContentSizeChange(arg0, arg1) {
        return closure_43(arg1);
      };
      items26[5] = tmp69(chatInputRef, obj57);
      obj56.children = items26;
      tmp67Result2 = tmp67(tmp71, obj56);
    }
    obj38.children = tmp67Result2;
    items31 = [, ];
    items31[0] = tmp69(tmp4(tmp2[54]).View, obj38);
    tmp69Result4 = null != activeCommand && !commandsDisabled;
    if (tmp69Result4) {
      obj58 = { style: null, children: null };
      obj58.style = memo5;
      obj59 = { command: null, section: null, guildId: null, onPressOption: null, currentOption: null, optionStates: null };
      obj59.command = activeCommand;
      obj59.section = stateFromStoresObject.activeSection;
      obj59.guildId = channel.guild_id;
      obj59.onPressOption = callback3;
      obj59.currentOption = activeOption;
      obj59.optionStates = optionStates;
      obj58.children = tmp69(tmp4(tmp2[62]), obj59);
      tmp69Result4 = tmp69(tmp68, obj58);
    }
    items31[1] = tmp69Result4;
    obj1.children = items31;
    obj60 = { style: tmp56Result.autocompletePositionRelative, children: tmp67(tmp68, obj1) };
    return tmp69(tmp68, obj60);
  }
}
ACWrapper.displayName = "AutocompleteWrapper";
const size = fn(2);
let result = size.fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default noop.memo(ACWrapper);