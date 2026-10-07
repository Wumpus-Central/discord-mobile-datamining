// === Module 12038: AutocompleteWrapper ===

// Module 12038 (AutocompleteWrapper)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import Server from "Server" /* 1985 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import utils_AutocompleteUtilsDefault from "utils/AutocompleteUtils" /* 5708 */;
import TimestampUtils from "TimestampUtils" /* 5814 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6541 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7047 */;
import GameSearchSurfaces from "GameSearchSurfaces" /* 8597 */;
import GameSearchSession from "GameSearchSession" /* 8600 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8848 */;
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 10084 */;
import AutocompleteOptions from "AutocompleteOptions" /* 10165 */;
import TimestampSuggestionUtils from "TimestampSuggestionUtils" /* 10167 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 11874 */;
import Autocomplete from "Autocomplete" /* 12039 */;
import ChannelAutocompleteAnalytics from "ChannelAutocompleteAnalytics" /* 12050 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7419 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5443 */;
import StickersStore from "StickersStore" /* 5694 */;

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
const BOOLEAN_CHOICES = fn(5795).BOOLEAN_CHOICES;
const ApplicationCommandsConstants = fn(10085);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = ApplicationCommandsConstants);
const ChannelAutocompleteConstants = fn(5796);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20, COMMAND_SENTINEL: closure_21, GAME_MENTION_INPUT_PREFIX: closure_22, TIMESTAMP_MENTION_INPUT_PREFIX: closure_23 } = ChannelAutocompleteConstants);
const AutocompleteTypes = fn(10166).AutocompleteTypes;
const EmojiInteractionPoint = fn(1380).EmojiInteractionPoint;
const jsxProd = fn(21);
({ jsx: closure_26, Fragment: closure_27, jsxs: closure_28 } = jsxProd);
let c29 = "text-sm/semibold";
const hairlineWidth = StyleSheet.hairlineWidth;
let c31 = 200;
let closure_32 = { allowSpaces: true, maxQueryLength: 64 };
let obj = { allowSpaces: true, maxQueryLength: fn(5901).GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH };
const createStyles = fn(4896);
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
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const diff = useWindowDimensionsDefault({ ignoreKeyboard: true }).height - insets.top - insets.bottom;
  return diff - NavigatorConstants.NAV_BAR_HEIGHT - arg0;
});
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
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
const forwardRefResult = noop.forwardRef((analyticsLocations, arg1) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const channel = analyticsLocations.channel;
  let canMentionEveryone = analyticsLocations.canMentionEveryone;
  const keyboardType = analyticsLocations.keyboardType;
  const onChangeAutoCompleteVisibility = analyticsLocations.onChangeAutoCompleteVisibility;
  const commandsDisabled = analyticsLocations.commandsDisabled;
  const chatInputRef = analyticsLocations.chatInputRef;
  let optionStates;
  c25 = undefined;
  let beginSearch;
  let beginSearch2;
  closure_33 = undefined;
  let autocompleteSelectionStart;
  c40 = undefined;
  c41 = undefined;
  let callback2;
  let callback4;
  let first4;
  closure_60 = undefined;
  ({ canOnlyUseTextCommands, screenIndex } = analyticsLocations);
  let items = [optionStates];
  const stateFromStoresObject = analyticsLocations(canMentionEveryone[26]).useStateFromStoresObject(items, () => ({ optionStates: ApplicationCommandStore.getOptionStates(channel.id), activeOption: ApplicationCommandStore.getActiveOption(channel.id), activeCommand: ApplicationCommandStore.getActiveCommand(channel.id), activeSection: ApplicationCommandStore.getActiveCommandSection(channel.id) }));
  optionStates = stateFromStoresObject.optionStates;
  const activeOption = stateFromStoresObject.activeOption;
  const activeCommand = stateFromStoresObject.activeCommand;
  obj = analyticsLocations(canMentionEveryone[26]);
  const token = analyticsLocations(canMentionEveryone[27]).useToken(channel(canMentionEveryone[19]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj2 = analyticsLocations(canMentionEveryone[27]);
  const scaledTextLineHeight = analyticsLocations(canMentionEveryone[28]).useScaledTextLineHeight(beginSearch);
  let obj3 = analyticsLocations(canMentionEveryone[28]);
  let tmp8 = channel(canMentionEveryone[29])();
  analyticsLocations(canMentionEveryone[30]).useTimestampSearchHeaderHeight();
  const IncludeStickersInAutocomplete = analyticsLocations(canMentionEveryone[31]).IncludeStickersInAutocomplete;
  const setting = IncludeStickersInAutocomplete.getSetting();
  const tmp12 = keyboardType(onChangeAutoCompleteVisibility.useState(autocompleteSelectionStart), 2);
  const first = tmp12[0];
  const resultCount = first.resultCount;
  const stickerResults = first.stickerResults;
  const nonStickerResults = first.nonStickerResults;
  let hasStickerResults = first.hasStickerResults;
  let hasNonStickerResults = first.hasNonStickerResults;
  closure_18 = tmp12[1];
  let obj4 = analyticsLocations(canMentionEveryone[30]);
  let items1 = [activeOption];
  const stateFromStores = analyticsLocations(canMentionEveryone[26]).useStateFromStores(items1, () => activeOption.loadState);
  let obj6 = analyticsLocations(canMentionEveryone[26]);
  const items2 = [token];
  const stateFromStores1 = analyticsLocations(canMentionEveryone[26]).useStateFromStores(items2, () => token.loadState);
  const context = onChangeAutoCompleteVisibility.useContext(analyticsLocations(canMentionEveryone[32]).RedesignCompatContext);
  const items3 = [channel, setting];
  const memo = onChangeAutoCompleteVisibility.useMemo(() => AutocompleteOptions.getAutocompleteOptions(channel, true, setting), items3);
  let tmp18 = keyboardType(onChangeAutoCompleteVisibility.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }), 2);
  const first1 = tmp18[0];
  const focused = first1.focused;
  let text = first1.text;
  c22 = text;
  const selectionStart = first1.selectionStart;
  let selectionEnd = first1.selectionEnd;
  let obj7 = analyticsLocations(canMentionEveryone[26]);
  [tmp21, c25] = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const IncludeGameMentionsInAutocomplete = analyticsLocations(canMentionEveryone[31]).IncludeGameMentionsInAutocomplete;
  const setting1 = IncludeGameMentionsInAutocomplete.getSetting();
  const tmp23 = channel(canMentionEveryone[34])(text, selectionEnd, setting1, c22, closure_33);
  const anchor = tmp23.anchor;
  beginSearch = tmp23.beginSearch;
  const TimestampAutocompleteMobileExperiment = analyticsLocations(canMentionEveryone[35]).TimestampAutocompleteMobileExperiment;
  const enabled = TimestampAutocompleteMobileExperiment.getConfig({ location: "AutocompleteWrapper timestamp search" }).enabled;
  const tmp24 = channel(canMentionEveryone[34])(text, selectionEnd, enabled, selectionStart, beginSearch2);
  const anchor2 = tmp24.anchor;
  beginSearch2 = tmp24.beginSearch;
  closure_33 = onChangeAutoCompleteVisibility.useRef({ text: "", selectionEnd: 0 });
  const items4 = [activeOption, beginSearch, beginSearch2, chatInputRef, setting1, anchor, enabled, anchor2, selectionEnd, selectionStart, text];
  const effect = onChangeAutoCompleteVisibility.useEffect(() => {
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
  const effect1 = onChangeAutoCompleteVisibility.useEffect(() => {
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
  const setData = channel(canMentionEveryone[39])(tmp18[1], 16).setData;
  const items5 = [setData];
  const imperativeHandle = onChangeAutoCompleteVisibility.useImperativeHandle(arg1, () => ({ setChatInputHeight, setData }), items5);
  const items6 = [selectionStart, selectionEnd, text, activeCommand, optionStates, activeOption, canMentionEveryone, commandsDisabled, memo, stateFromStores, stateFromStores1, setting1, anchor, anchor2];
  const memo1 = onChangeAutoCompleteVisibility.useMemo(() => {
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
  const autocompleteType = memo1.autocompleteType;
  let query = memo1.query;
  const queryOptions = memo1.queryOptions;
  autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  const showOptionValuesPicker = memo1.showOptionValuesPicker;
  const tmp20 = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  [tmp30, c40] = keyboardType(queryOptions(autocompleteType), 2);
  const tmp29 = keyboardType(queryOptions(autocompleteType), 2);
  [tmp32, c41] = keyboardType(queryOptions(autocompleteType), 2);
  let tmp33 = keyboardType(queryOptions(autocompleteType), 2);
  const first2 = tmp33[0];
  closure_43 = tmp33[1];
  closure_44 = tmp30;
  const timestampSearchHeaderHeight = tmp32;
  const items7 = [anchor2];
  const effect2 = obj5.useEffect(() => {
    if (null != anchor2) {
      RunAfterInteractionsUtils.runAfterInteractions(TimestampSuggestionUtils.preloadTimestampParser);
    }
  }, items7);
  const items8 = [autocompleteType, query, queryOptions, memo];
  const callback = obj5.useCallback((arg0) => {
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
  const items9 = [autocompleteType, callback, memo];
  const effect3 = obj5.useEffect(() => {
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
  const items10 = [callback];
  const effect4 = obj5.useEffect(() => {
    callback(true);
  }, items10);
  const items11 = [stickerResults, nonStickerResults];
  const callback1 = obj5.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length }), items11);
  const items12 = [autocompleteType, focused, keyboardType, resultCount];
  const memo2 = obj5.useMemo(() => {
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
  onChangeAutoCompleteVisibility.useRef(false);
  const items13 = [autocompleteType, activeCommand];
  const effect5 = obj5.useEffect(() => {
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
  const items14 = [autocompleteType];
  const effect6 = obj5.useEffect(() => autocompleteType === AutocompleteTypes.GAME_MENTIONS ? (() => {
    const gameSearchSession = analyticsLocations(8600).getGameSearchSession(analyticsLocations(8597).GameSearchSurface.CHAT_MENTION);
    return gameSearchSession.end();
  }) : undefined, items14);
  onChangeAutoCompleteVisibility.useRef(null);
  const items15 = [onChangeAutoCompleteVisibility, activeCommand, memo2, autocompleteType, channel, callback1, setting1];
  const effect7 = obj5.useEffect(() => {
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
  const tmp44 = query(tmp21);
  closure_51 = tmp44;
  const items16 = [autocompleteType, stickerResults.length, tmp44, scaledTextLineHeight, tmp30, tmp32];
  const memo3 = obj5.useMemo(() => {
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
  const tmp11Result = keyboardType(onChangeAutoCompleteVisibility.useState(null), 2);
  const first3 = tmp11Result[0];
  closure_54 = tmp48;
  const items17 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, nonStickerResults.length, memo3, first3, tmp32, context, token, scaledTextLineHeight, tmp30, first2];
  const memo4 = obj5.useMemo(() => {
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
  closure_55 = tmp50;
  const tmp31 = keyboardType(queryOptions(autocompleteType), 2);
  const token1 = analyticsLocations(canMentionEveryone[27]).useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
  let tmpResult = analyticsLocations(canMentionEveryone[27]);
  const token2 = analyticsLocations(canMentionEveryone[27]).useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  const tmpResult6 = analyticsLocations(canMentionEveryone[27]);
  const token3 = analyticsLocations(canMentionEveryone[27]).useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
  const tmpResult7 = analyticsLocations(canMentionEveryone[27]);
  const token4 = analyticsLocations(canMentionEveryone[27]).useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
  const tmpResult8 = analyticsLocations(canMentionEveryone[27]);
  const token5 = analyticsLocations(canMentionEveryone[27]).useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
  let num = 0;
  if (memo4 > 0) {
    num = token2;
  }
  let num2 = 0;
  if (memo4 > 0) {
    num2 = token3;
  }
  if (memo4 > 0) {
    let num3 = token5;
  } else {
    num3 = 0;
    if (null != activeCommand) {
      num3 = 0;
    }
  }
  const tmp56Result = setData(token1, num, num2, token4, num3);
  const tmpResult9 = analyticsLocations(canMentionEveryone[27]);
  let prop = null;
  if (tmpResult10.isIOS()) {
    prop = tmp56Result.autocompletePositionRelative;
  }
  const items18 = [memo4 > 0, token5];
  const memo5 = obj5.useMemo(() => {
    let tmp;
    if (closure_55) {
      obj = { marginTop: token5 };
      tmp = obj;
    }
    return tmp;
  }, items18);
  const items19 = [analyticsLocations, beginSearch, beginSearch2, channel, chatInputRef];
  tmpResult10 = analyticsLocations(canMentionEveryone[18]);
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
  const items20 = [chatInputRef, optionStates, channel];
  const items21 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
  const callback3 = obj5.useCallback((type) => {
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
        const gameSearchSession = GameSearchSession.getGameSearchSession(GameSearchSurfaces.GameSearchSurface.CHAT_MENTION);
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
  const tmp11Result2 = keyboardType(onChangeAutoCompleteVisibility.useState(null), 2);
  first4 = tmp11Result2[0];
  closure_60 = tmp11Result2[1];
  const items22 = [autocompleteType, callback4, first4, channel, activeCommand];
  const callback5 = obj5.useCallback((item) => {
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
  const items23 = [tmp56Result.autocomplete, { maxHeight: memo3 }];
  let obj8 = { style: null, children: null };
  const items24 = [tmp56Result.autocompleteWrapper, prop];
  obj8.style = items24;
  let obj9 = { style: null, children: null };
  const items25 = [tmp56Result.autocompleteContainer, channel(canMentionEveryone[49])(memo4, screenIndex)];
  obj9.style = items25;
  let tmp67Result4 = null != autocompleteType;
  if (tmp67Result4) {
    let tmp69Result = autocompleteType === selectionEnd.SLASHES_DISCOVERY;
    if (tmp69Result) {
      let obj10 = {
        channel,
        onPressSlashItem(command, section, visualSection) {
              let num = autocompleteSelectionStart;
              if (autocompleteSelectionStart == null) {
                num = 0;
              }
              callback2({ command, section, type: constants.SLASH, visualSection, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY }, num);
              obj = { command, section, type: constants.SLASH, visualSection, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY };
            },
        onHeightChange: tmp48,
        canOnlyUseTextCommands
      };
      tmp69Result = tmp69(tmp4(tmp2[54]), obj10);
    }
    const items26 = [tmp69Result, , , , , ];
    let tmp69Result5 = autocompleteType === tmp72.SLASHES;
    if (tmp69Result5) {
      let obj11 = { channel, query: null, onPressCommandItem: null, style: null, ItemSeparatorComponent: null, getItemLayout: null, onCommandsChange: null };
      let str = query;
      if (query == null) {
        str = "";
      }
      obj11.query = str;
      obj11.onPressCommandItem = function onPressCommandItem(commands, found) {
        let num = autocompleteSelectionStart;
        if (autocompleteSelectionStart == null) {
          num = 0;
        }
        callback2({ command: commands, section: found, type: constants.SLASH, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY, query }, num);
        obj = { command: commands, section: found, type: constants.SLASH, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY, query };
      };
      obj11.style = items23;
      obj11.ItemSeparatorComponent = tmp(tmp2[36]).getItemSeparator;
      obj11.getItemLayout = tmp(tmp2[36]).getItemLayout;
      obj11.onCommandsChange = function onCommandsChange(commands) {
        let num = 0;
        if (0 !== commands) {
          if (context) {
            num = commands * token + (commands - 1) * hairlineWidth;
          }
        }
        closure_54(num);
      };
      tmp69Result5 = tmp69(tmp4(tmp2[56]), obj11);
      const tmp4Result = tmp4(tmp2[56]);
    }
    items26[1] = tmp69Result5;
    let tmp67Result3 = autocompleteType === tmp72.EMOJIS_AND_STICKERS;
    if (tmp67Result3) {
      let tmp67Result = hasStickerResults;
      if (hasStickerResults) {
        let obj12 = { children: null };
        let obj13 = { style: null, children: null };
        const items27 = [tmp56Result.sectionTitle, ];
        let obj14 = { height: scaledTextLineHeight };
        items27[1] = obj14;
        obj13.style = items27;
        let obj15 = { variant: tmp6, children: null };
        const intl = tmp(tmp2[58]).intl;
        const obj16 = { prefix: query };
        obj15.children = intl.format(tmp(tmp2[58]).t.uferGG, obj16);
        obj13.children = tmp69(tmp(tmp2[57]).Text, obj15);
        const items28 = [tmp69(tmp68, obj13), ];
        const obj17 = { horizontal: true, style: null, keyExtractor: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, getItemLayout: null, contentInset: null };
        const obj18 = {};
        let merged = Object.assign(items23);
        let merged1 = Object.assign(tmp56Result.stickersAutocompleteList);
        obj17.style = obj18;
        obj17.keyExtractor = function keyExtractor(sticker) {
          return sticker.sticker.id;
        };
        obj17.data = stickerResults;
        obj17.renderItem = callback5;
        obj17.getItemLayout = autocompleteType;
        obj17.contentInset = { right: 12 };
        items28[1] = tmp69(chatInputRef, obj17);
        obj12.children = items28;
        tmp67Result = tmp67(tmp71, obj12);
      }
      const items29 = [tmp67Result, , ];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        const obj19 = { style: tmp56Result.sectionDivider };
        hasStickerResults = tmp69(tmp4(tmp2[59]), obj19);
      }
      items29[1] = hasStickerResults;
      if (hasNonStickerResults) {
        const obj20 = { style: null, children: null };
        const items30 = [tmp56Result.sectionTitle, ];
        const obj21 = { height: scaledTextLineHeight };
        items30[1] = obj21;
        obj20.style = items30;
        const obj22 = { variant: tmp6, children: null };
        const intl2 = tmp(tmp2[58]).intl;
        const obj23 = { prefix: null };
        let _HermesInternal = HermesInternal;
        obj23.prefix = "" + memo + query;
        obj22.children = intl2.format(tmp(tmp2[58]).t.ksAVYt, obj23);
        obj20.children = tmp69(tmp(tmp2[57]).Text, obj22);
        hasNonStickerResults = tmp69(tmp68, obj20);
      }
      const obj24 = { children: null };
      items29[2] = hasNonStickerResults;
      obj24.children = items29;
      tmp67Result3 = tmp67(tmp71, obj24);
    }
    items26[2] = tmp67Result3;
    let tmp69Result6 = autocompleteType === tmp72.GAME_MENTIONS;
    if (tmp69Result6) {
      const obj25 = {
        onLayout(nativeEvent) {
              return _undefined(nativeEvent.nativeEvent.layout.height);
            },
        children: tmp69(tmp4(tmp2[60]), {})
      };
      tmp69Result6 = tmp69(tmp68, obj25);
    }
    items26[3] = tmp69Result6;
    let tmp69Result7 = autocompleteType === tmp72.TIMESTAMPS;
    if (tmp69Result7) {
      const obj26 = {
        onLayout(nativeEvent) {
              return _undefined2(nativeEvent.nativeEvent.layout.height);
            },
        children: tmp69(tmp4(tmp2[30]), {})
      };
      tmp69Result7 = tmp69(tmp68, obj26);
    }
    const obj27 = { children: null };
    items26[4] = tmp69Result7;
    const obj28 = {
      style: items23,
      keyExtractor(arg0, arg1) {
          return String(arg1);
        },
      data: nonStickerResults,
      renderItem: callback5,
      ItemSeparatorComponent: tmp(tmp2[36]).getItemSeparator,
      getItemLayout: tmp(tmp2[36]).getItemLayout,
      onContentSizeChange(arg0, arg1) {
          return closure_43(arg1);
        }
    };
    items26[5] = tmp69(chatInputRef, obj28);
    obj27.children = items26;
    tmp67Result4 = tmp67(tmp71, obj27);
  }
  obj9.children = tmp67Result4;
  const items31 = [setting1(channel(canMentionEveryone[53]).View, obj9), ];
  let tmp69Result8 = null != activeCommand && !commandsDisabled;
  if (tmp69Result8) {
    const obj29 = { style: memo5, children: null };
    const obj30 = { command: activeCommand, section: stateFromStoresObject.activeSection, guildId: channel.guild_id, onPressOption: callback3, currentOption: activeOption, optionStates };
    obj29.children = tmp69(tmp4(tmp2[61]), obj30);
    tmp69Result8 = tmp69(tmp68, obj29);
  }
  items31[1] = tmp69Result8;
  obj8.children = items31;
  const tmp60 = channel(canMentionEveryone[49])(memo4, screenIndex);
  return setting1(commandsDisabled, { style: tmp56Result.autocompletePositionRelative, children: anchor(commandsDisabled, obj8) });
});
forwardRefResult.displayName = "AutocompleteWrapper";
const size = fn(2);
let result = size.fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default noop.memo(forwardRefResult);