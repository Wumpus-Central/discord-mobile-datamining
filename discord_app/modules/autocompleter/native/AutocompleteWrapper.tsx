// === Module 14687: AutocompleteWrapper ===

// Module 14687 (AutocompleteWrapper)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import Server from "Server" /* 2116 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5922 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 6004 */;
import utils_AutocompleteUtilsDefault from "utils/AutocompleteUtils" /* 7009 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7521 */;
import TimestampUtils from "TimestampUtils" /* 9308 */;
import GameSearchSession from "GameSearchSession" /* 10188 */;
import GameSearchFilterGroup from "GameSearchFilterGroup" /* 10189 */;
import GameSearchSurfaces from "GameSearchSurfaces" /* 10429 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 11109 */;
import autocompleter_AutocompleteUtils from "autocompleter/AutocompleteUtils" /* 11172 */;
import AutocompleteOptions from "AutocompleteOptions" /* 11334 */;
import TimestampSuggestionUtils from "TimestampSuggestionUtils" /* 11361 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 14532 */;
import Autocomplete from "Autocomplete" /* 14688 */;
import ChannelAutocompleteAnalytics from "ChannelAutocompleteAnalytics" /* 14699 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 8941 */;
import EmojiStore from "EmojiStore" /* 6906 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6737 */;
import StickersStore from "StickersStore" /* 6947 */;

require = fn;
function getItemKey(type, arg1) {
  type = type.type;
  if (constants.USER === type) {
    const _HermesInternal12 = HermesInternal;
    return "" + type.type + ":" + type.user.id;
  } else if (constants.ROLE === type) {
    const _HermesInternal11 = HermesInternal;
    return "" + type.type + ":" + type.id;
  } else if (constants.GLOBAL === type) {
    const _HermesInternal10 = HermesInternal;
    return "" + type.type + ":" + type.test;
  } else if (constants.CHANNEL === type) {
    const _HermesInternal9 = HermesInternal;
    return "" + type.type + ":" + type.channel.id;
  } else if (constants.EMOJI === type) {
    const _HermesInternal8 = HermesInternal;
    return "" + type.type + ":" + type.url + ":" + type.name;
  } else if (constants.STICKER === type) {
    const _HermesInternal7 = HermesInternal;
    return "" + type.type + ":" + type.sticker.id;
  } else if (constants.SLASH === type) {
    const _HermesInternal6 = HermesInternal;
    return "" + type.type + ":" + type.section.id + ":" + type.command.id;
  } else if (constants.CHOICE === type) {
    const _HermesInternal5 = HermesInternal;
    return "" + type.type + ":" + type.choice.name + ":" + type.choice.value;
  } else if (constants.CHOICE_LOADING === type) {
    const _HermesInternal4 = HermesInternal;
    return "" + type.type + ":" + arg1;
  } else if (constants.LABEL === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + type.type + ":" + type.label;
  } else if (constants.GAME_MENTION === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + type.type + ":" + type.game.id;
  } else if (constants.TIMESTAMP_MENTION === type) {
    const _HermesInternal = HermesInternal;
    return "" + type.type + ":" + type.mention.timestamp + ":" + type.mention.format;
  } else {
    return constants.EMOJI_PREMIUM_UPSELL === type ? type.type : undefined;
  }
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, View: closure_6, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1072);
({ AutoCompleteResultTypes: closure_11, WHITESPACE_RE: closure_12, AnalyticEvents: map1, UpsellTypes: closure_14 } = Constants);
const BOOLEAN_CHOICES = fn(6282).BOOLEAN_CHOICES;
const ApplicationCommandsConstants = fn(11173);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = ApplicationCommandsConstants);
const ChannelAutocompleteConstants = fn(6283);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20, COMMAND_SENTINEL: closure_21, GAME_MENTION_INPUT_PREFIX: closure_22, TIMESTAMP_MENTION_INPUT_PREFIX: closure_23 } = ChannelAutocompleteConstants);
const AutocompleteTypes = fn(11335).AutocompleteTypes;
const EmojiInteractionPoint = fn(1388).EmojiInteractionPoint;
const jsxProd = fn(21);
({ jsx: closure_26, Fragment: closure_27, jsxs: closure_28 } = jsxProd);
let c29 = "body-sm/semibold";
const hairlineWidth = StyleSheet.hairlineWidth;
let c31 = 200;
let closure_32 = { allowSpaces: true, maxQueryLength: 64 };
let obj = { allowSpaces: true, maxQueryLength: fn(9313).GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH };
const createStyles = fn(5243);
let closure_34 = createStyles.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  obj = { autocompletePositionRelative: { position: "relative" }, autocompleteWrapper: null, autocompleteContainer: null, autocomplete: null, applicationCommands: null, resultsList: null, sectionDivider: null, sectionTitle: null, stickersAutocompleteList: null, stickersAutocompleteContent: null };
  let str = "absolute";
  if (obj2.isAndroid()) {
    str = "relative";
  }
  obj.autocompleteWrapper = { position: str, marginHorizontal, marginBottom };
  obj2 = PlatformUtils;
  obj.autocompleteContainer = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  const obj3 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  obj.autocomplete = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj.applicationCommands = { flexGrow: 1 };
  obj.resultsList = { flexGrow: 1 };
  const obj4 = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj.sectionDivider = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  const obj5 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  obj.sectionTitle = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  const obj6 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  obj.stickersAutocompleteList = { marginBottom: 12, height: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  const obj7 = { marginBottom: 12, height: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  obj.stickersAutocompleteContent = { paddingLeft: 12 - Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN };
  return obj;
});
let closure_36 = { resultCount: 0, stickerResults: [], nonStickerResults: [], hasStickerResults: false, hasNonStickerResults: false };
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
    closure_28 = undefined;
    closure_29 = undefined;
    closure_30 = undefined;
    anchor = undefined;
    beginSearch = undefined;
    anchor = undefined;
    beginSearch = undefined;
    closure_35 = undefined;
    setData = undefined;
    autocompleteType = undefined;
    query = undefined;
    queryOptions = undefined;
    closure_40 = undefined;
    showOptionValuesPicker = undefined;
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
    closure_61 = undefined;
    closure_62 = undefined;
    closure_63 = undefined;
    closure_64 = undefined;
    closure_65 = undefined;
    tmp = analyticsLocations;
    tmp2 = canMentionEveryone;
    ({ canOnlyUseTextCommands, screenIndex, ref } = global);
    obj = analyticsLocations(canMentionEveryone[24]);
    items = [];
    items[0] = optionStates;
    stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ optionStates: ApplicationCommandStore.getOptionStates(channel.id), activeOption: ApplicationCommandStore.getActiveOption(channel.id), activeCommand: ApplicationCommandStore.getActiveCommand(channel.id), activeSection: ApplicationCommandStore.getActiveCommandSection(channel.id) }));
    optionStates = stateFromStoresObject.optionStates;
    activeOption = stateFromStoresObject.activeOption;
    activeCommand = stateFromStoresObject.activeCommand;
    obj2 = analyticsLocations(canMentionEveryone[25]);
    tmp4 = channel;
    token = obj2.useToken(channel(canMentionEveryone[19]).modules.mobile.TABLE_ROW_HEIGHT);
    closure_10 = token;
    obj3 = analyticsLocations(canMentionEveryone[26]);
    tmp6 = closure_29;
    scaledTextLineHeight = obj3.useScaledTextLineHeight(closure_29);
    closure_11 = scaledTextLineHeight;
    tmp8 = channel(canMentionEveryone[27])();
    obj4 = analyticsLocations(canMentionEveryone[28]);
    timestampSearchHeaderHeight = obj4.useTimestampSearchHeaderHeight();
    IncludeStickersInAutocomplete = analyticsLocations(canMentionEveryone[29]).IncludeStickersInAutocomplete;
    setting = IncludeStickersInAutocomplete.getSetting();
    closure_12 = setting;
    obj5 = closure_4;
    tmp11 = keyboardType;
    tmp12 = keyboardType(closure_4.useState(setData), 2);
    first = tmp12[0];
    resultCount = first.resultCount;
    stickerResults = first.stickerResults;
    nonStickerResults = first.nonStickerResults;
    hasStickerResults = first.hasStickerResults;
    hasNonStickerResults = first.hasNonStickerResults;
    closure_18 = tmp12[1];
    obj6 = analyticsLocations(canMentionEveryone[24]);
    items1 = [];
    items1[0] = activeOption;
    stateFromStores = obj6.useStateFromStores(items1, () => activeOption.loadState);
    obj7 = analyticsLocations(canMentionEveryone[24]);
    items2 = [];
    items2[0] = closure_10;
    stateFromStores1 = obj7.useStateFromStores(items2, () => token.loadState);
    context = closure_4.useContext(analyticsLocations(canMentionEveryone[30]).RedesignCompatContext);
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
    closure_26 = closure_4.useRef(0);
    closure_27 = closure_4.useRef(false);
    callback = closure_4.useCallback((current) => {
      closure_26.current = current;
      if (ref2.current) {
        _undefined(current);
      }
    }, []);
    closure_28 = callback;
    IncludeGameMentionsInAutocomplete = analyticsLocations(canMentionEveryone[29]).IncludeGameMentionsInAutocomplete;
    setting1 = IncludeGameMentionsInAutocomplete.getSetting();
    closure_29 = setting1;
    closure_30 = setting1;
    tmp24 = channel(canMentionEveryone[32])(text, selectionEnd, setting1, c22, anchor);
    anchor = tmp24.anchor;
    beginSearch = tmp24.beginSearch;
    tmp25 = channel(canMentionEveryone[32])(text, selectionEnd, true, selectionStart, beginSearch);
    anchor2 = tmp25.anchor;
    anchor = anchor2;
    beginSearch2 = tmp25.beginSearch;
    beginSearch = beginSearch2;
    closure_35 = closure_4.useRef({ text: "", selectionEnd: 0 });
    items4 = [, , , , , , , , , ];
    items4[0] = activeOption;
    items4[1] = beginSearch;
    items4[2] = beginSearch2;
    items4[3] = chatInputRef;
    items4[4] = setting1;
    items4[5] = anchor;
    items4[6] = anchor2;
    items4[7] = selectionEnd;
    items4[8] = selectionStart;
    items4[9] = text;
    effect = closure_4.useEffect(() => {
      text = closure_35.current.text;
      selectionEnd = closure_35.current.selectionEnd;
      closure_35.current.text = text;
      closure_35.current.selectionEnd = selectionEnd;
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
                      const tmp32Result = autocompleter_AutocompleteUtils;
                      if (tmp32Result.isSpaceJustTypedAtCaret(text, selectionEnd, tmp, tmp2)) {
                        const current2 = chatInputRef.current;
                        current2.insertText(closure_2_22, result.tokenStart, false, undefined, tmp2);
                        beginSearch(result.tokenStart);
                      }
                    }
                  }
                } else if ("timestampMentionInput" === result1) {
                  if (null == anchor2) {
                    const tmp32Result2 = autocompleter_AutocompleteUtils;
                    if (tmp32Result2.isSpaceJustTypedAtCaret(text, selectionEnd, tmp, tmp2)) {
                      current = chatInputRef.current;
                      current.insertText(dependencyMap2, result.tokenStart, false, undefined, tmp2);
                      beginSearch2(result.tokenStart);
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
            const result = analyticsLocations(canMentionEveryone[35]).initiateEmojiInteraction(c25.AutocompleteWrapperShown);
            flag = false;
            obj = analyticsLocations(canMentionEveryone[35]);
          }
          tmp = flag;
        }
        return tmp;
      });
      return () => {
        c0 = true;
      };
    }, []);
    setData = channel(canMentionEveryone[36])(tmp18[1], 16).setData;
    items5 = [, ];
    items5[0] = setData;
    items5[1] = callback;
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
            let applicationCommandOptionQueryOptions = analyticsLocations(canMentionEveryone[37]).getApplicationCommandOptionQueryOptions(activeOption);
            const obj2 = analyticsLocations(canMentionEveryone[37]);
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
                  substr = str.substring(sum, analyticsLocations(canMentionEveryone[38]).getCommandOptionValueEnd(str, sum, activeCommand));
                  const obj3 = analyticsLocations(canMentionEveryone[38]);
                }
                query = substr;
                if (null == activeOption.choices) {
                  if (!activeOption.autocomplete) {
                    const type = activeOption.type;
                    if (analyticsLocations(canMentionEveryone[39]).ApplicationCommandOptionType.BOOLEAN === type) {
                      let prefix = "";
                      let CHOICES = selectionEnd.CHOICES;
                      let choices = nonStickerResults;
                      let flag = true;
                      let str2 = "";
                    } else if (analyticsLocations(canMentionEveryone[39]).ApplicationCommandOptionType.CHANNEL === type) {
                      prefix = context;
                      CHOICES = selectionEnd.CHANNELS;
                      const channelTypes = activeOption.channelTypes;
                      flag = true;
                      str2 = context;
                    } else {
                      if (analyticsLocations(canMentionEveryone[39]).ApplicationCommandOptionType.ROLE !== type) {
                        if (analyticsLocations(canMentionEveryone[39]).ApplicationCommandOptionType.USER !== type) {
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
            let obj4 = analyticsLocations(canMentionEveryone[40]);
            let arr = text;
            let tmp36 = tmp8;
            let num5 = sum1;
            let result = obj4.isAutocompleteSeparatingBoundary(text, tmp);
            if (tmp31) {
              num5 = 0;
            }
            if (tmp === num5) {
              let substr1 = arr.slice(tmp, selectionEnd);
              let obj5 = analyticsLocations(canMentionEveryone[33]);
              prefix = obj5.getPrefix(substr1);
              let obj6 = analyticsLocations(canMentionEveryone[33]);
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
            text = analyticsLocations(canMentionEveryone[38]).getTextBeforeFirstOption(str5).text;
            query = text;
            tmp55 = text;
            const obj7 = analyticsLocations(canMentionEveryone[38]);
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
    closure_40 = autocompleteSelectionStart;
    showOptionValuesPicker = memo1.showOptionValuesPicker;
    closure_129_0 = undefined;
    tmp30 = keyboardType(closure_4.useState(null), 2);
    tmp31 = tmp30[1];
    closure_129_0 = tmp31;
    tmp32 = keyboardType(closure_4.useState(autocompleteType), 2);
    if (tmp32[0] !== autocompleteType) {
      tmp33 = tmp32[1](autocompleteType);
      tmp31Result = tmp31(null);
    }
    items7 = [, ];
    items7[0] = tmp30[0];
    items7[1] = obj5.useCallback((arg0) => {
      closure_0 = arg0;
      if (arg0 > 0) {
        closure_1 = 1.5 / hasOwnProperty.get();
        analyticsLocations((arg0) => {
          let tmp = arg0;
          if (null == arg0) {
            tmp = closure_0;
          } else {
            const _Math = Math;
          }
          return tmp;
        });
      }
    }, []);
    tmp11Result = tmp11(items7, 2);
    [tmp36, closure_42] = tmp11Result;
    closure_130_0 = undefined;
    tmp11Result1 = tmp11(obj5.useState(null), 2);
    tmp38 = tmp11Result1[1];
    closure_130_0 = tmp38;
    tmp11Result2 = tmp11(obj5.useState(autocompleteType), 2);
    if (tmp11Result2[0] !== autocompleteType) {
      tmp40 = tmp11Result2[1](autocompleteType);
      tmp38Result = tmp38(null);
    }
    items8 = [, ];
    items8[0] = tmp11Result1[0];
    items8[1] = obj5.useCallback((arg0) => {
      closure_0 = arg0;
      if (arg0 > 0) {
        closure_1 = 1.5 / hasOwnProperty.get();
        analyticsLocations((arg0) => {
          let tmp = arg0;
          if (null == arg0) {
            tmp = closure_0;
          } else {
            const _Math = Math;
          }
          return tmp;
        });
      }
    }, []);
    tmp11Result3 = tmp11(items8, 2);
    [tmp43, closure_43] = tmp11Result3;
    closure_131_0 = undefined;
    tmp11Result4 = tmp11(obj5.useState(null), 2);
    tmp45 = tmp11Result4[1];
    closure_131_0 = tmp45;
    tmp11Result5 = tmp11(obj5.useState(autocompleteType), 2);
    if (tmp11Result5[0] !== autocompleteType) {
      tmp47 = tmp11Result5[1](autocompleteType);
      tmp45Result = tmp45(null);
    }
    items9 = [, ];
    items9[0] = tmp11Result4[0];
    items9[1] = obj5.useCallback((arg0) => {
      closure_0 = arg0;
      if (arg0 > 0) {
        closure_1 = 1.5 / hasOwnProperty.get();
        analyticsLocations((arg0) => {
          let tmp = arg0;
          if (null == arg0) {
            tmp = closure_0;
          } else {
            const _Math = Math;
          }
          return tmp;
        });
      }
    }, []);
    tmp11Result6 = tmp11(items9, 2);
    first2 = tmp11Result6[0];
    closure_44 = first2;
    closure_45 = tmp11Result6[1];
    if (tmp36 == null) {
      tmp36 = tmp8;
    }
    closure_46 = tmp36;
    if (tmp43 == null) {
      tmp43 = timestampSearchHeaderHeight;
    }
    closure_47 = tmp43;
    items10 = [];
    items10[0] = anchor2;
    effect2 = obj5.useEffect(() => {
      if (null != anchor2) {
        RunAfterInteractionsUtils.runAfterInteractions(TimestampSuggestionUtils.preloadTimestampParser);
      }
    }, items10);
    items11 = [, , , ];
    items11[0] = autocompleteType;
    items11[1] = query;
    items11[2] = queryOptions;
    items11[3] = memo;
    callback1 = obj5.useCallback((arg0) => {
      if (null != autocompleteType) {
        if (null != query) {
          const queryResultsResult = memo[tmp].queryResults(tmp2, queryOptions, arg0);
          items = [];
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
      closure_18(closure_36);
    }, items11);
    closure_48 = callback1;
    items12 = [, , ];
    items12[0] = autocompleteType;
    items12[1] = callback1;
    items12[2] = memo;
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
        const batchedStoreListener = new analyticsLocations(canMentionEveryone[24]).BatchedStoreListener(tmp2, () => callback1(false));
        batchedStoreListener.attach("AutocompleteWrapper");
        return () => batchedStoreListener.detach();
      }
    }, items12);
    items13 = [];
    items13[0] = callback1;
    effect4 = obj5.useEffect(() => {
      callback1(true);
    }, items13);
    items14 = [, ];
    items14[0] = stickerResults;
    items14[1] = nonStickerResults;
    callback2 = obj5.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length }), items14);
    closure_49 = callback2;
    items15 = [, , , ];
    items15[0] = autocompleteType;
    items15[1] = focused;
    items15[2] = keyboardType;
    items15[3] = resultCount;
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
    }, items15);
    closure_50 = memo2;
    items16 = [, , ];
    items16[0] = autocompleteType;
    items16[1] = memo2;
    items16[2] = nonStickerResults;
    memo3 = obj5.useMemo(() => {
      let flatMapResult = null;
      if (memo2) {
        flatMapResult = null;
        if (autocompleteType === AutocompleteTypes.MENTIONS) {
          flatMapResult = nonStickerResults.flatMap((type) => {
            if (type.type === constants.USER) {
              items = [type.user.id];
              let items1 = items;
            } else {
              items1 = [];
            }
            return items1;
          });
        }
      }
      return flatMapResult;
    }, items16);
    tmp58 = tmp4(tmp2[42])(channel.guild_id, memo3);
    closure_51 = obj5.useRef(false);
    items17 = [, ];
    items17[0] = autocompleteType;
    items17[1] = activeCommand;
    effect5 = obj5.useEffect(() => {
      let tmp4 = autocompleteType === AutocompleteTypes.SLASHES;
      if (ref3.current) {
        if (!tmp4) {
          tmp4 = autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
        }
        if (!tmp4) {
          tmp4 = null != activeCommand;
        }
        ref3.current = tmp4;
      } else {
        let tmp5 = tmp4;
        if (!tmp4) {
          tmp5 = autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
        }
        if (!tmp5) {
          tmp5 = null != activeCommand;
        }
        ref3.current = tmp5;
        if (ref3.current) {
          AppAnalyticsUtils.trackWithMetadata(constants2.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "slash_ui" });
        }
      }
    }, items17);
    items18 = [];
    items18[0] = autocompleteType;
    effect6 = obj5.useEffect(() => autocompleteType === AutocompleteTypes.GAME_MENTIONS ? (() => {
      const gameSearchSession = analyticsLocations(10188).getGameSearchSession(analyticsLocations(10429).GameSearchSurface.CHAT_MENTION, analyticsLocations(10189).GameSearchFilterGroup.DEFAULT);
      return gameSearchSession.end();
    }) : undefined, items18);
    closure_52 = obj5.useRef(null);
    items19 = [, , , , , , ];
    items19[0] = onChangeAutoCompleteVisibility;
    items19[1] = activeCommand;
    items19[2] = memo2;
    items19[3] = autocompleteType;
    items19[4] = channel;
    items19[5] = callback2;
    items19[6] = setting1;
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
        if (ref4.current !== combined) {
          ref4.current = combined;
          const obj2 = {};
          const merged = Object.assign(callback2());
          let tmp17;
          if (autocompleteType === AutocompleteTypes.MENTIONS) {
            tmp17 = setting1;
          }
          obj2.gameMentionsAvailable = tmp17;
          const result = ChannelAutocompleteAnalytics.iOSTrackAutocompleteOpen(autocompleteType, channel, obj2);
        }
      } else {
        ref4.current = null;
      }
    }, items19);
    tmp62 = memo2;
    if (!memo2) {
      tmp62 = null != activeCommand;
    }
    closure_53 = tmp62;
    items20 = [];
    items20[0] = tmp62;
    layoutEffect = obj5.useLayoutEffect(() => {
      closure_27.current = current;
      if (current) {
        _undefined(ref.current);
      }
    }, items20);
    tmp64 = tmp4(tmp2[21])({ ignoreKeyboard: true });
    insets = tmp4(tmp2[22])({ includeKeyboardHeight: true }).insets;
    diff = tmp64.height - insets.top - insets.bottom;
    diff1 = diff - tmp(tmp2[23]).NAV_BAR_HEIGHT - tmp21;
    closure_54 = diff1;
    items21 = [, , , , , ];
    items21[0] = autocompleteType;
    items21[1] = stickerResults.length;
    items21[2] = diff1;
    items21[3] = scaledTextLineHeight;
    items21[4] = tmp36;
    items21[5] = tmp43;
    memo4 = obj5.useMemo(() => {
      const sum = scaledTextLineHeight + 24;
      const sum1 = c31 + sum;
      if (stickerResults.length > 0) {
        let sum2 = sum1 + sum + Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + hairlineWidth;
      } else {
        sum2 = sum1;
        if (autocompleteType !== AutocompleteTypes.EMOJIS_AND_STICKERS) {
          if (autocompleteType === AutocompleteTypes.GAME_MENTIONS) {
            let sum3 = c31 + closure_46;
          } else if (autocompleteType === AutocompleteTypes.TIMESTAMPS) {
            sum3 = c31 + timestampSearchHeaderHeight;
          } else {
            sum3 = c31;
          }
        }
      }
      return Math.min(diff1, sum2);
    }, items21);
    closure_55 = memo4;
    tmp11Result7 = tmp11(obj5.useState(null), 2);
    first3 = tmp11Result7[0];
    closure_56 = first3;
    tmp70 = tmp11Result7[1];
    closure_57 = tmp70;
    items22 = [, , , , , , , , , , , , , ];
    items22[0] = resultCount;
    items22[1] = autocompleteType;
    items22[2] = memo2;
    items22[3] = hasStickerResults;
    items22[4] = hasNonStickerResults;
    items22[5] = nonStickerResults.length;
    items22[6] = memo4;
    items22[7] = first3;
    items22[8] = tmp43;
    items22[9] = context;
    items22[10] = token;
    items22[11] = scaledTextLineHeight;
    items22[12] = tmp36;
    items22[13] = first2;
    memo5 = obj5.useMemo(() => {
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
              let sum4 = num3 + closure_46;
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
      return Math.min(num12, memo4);
    }, items22);
    tmp72 = memo5 > 0;
    closure_58 = tmp72;
    tmpResult = tmp(tmp2[25]);
    token1 = tmpResult.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
    tmpResult1 = tmp(tmp2[25]);
    token2 = tmpResult1.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
    tmpResult2 = tmp(tmp2[25]);
    token3 = tmpResult2.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
    tmpResult3 = tmp(tmp2[25]);
    token4 = tmpResult3.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
    tmpResult4 = tmp(tmp2[25]);
    token5 = tmpResult4.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
    closure_59 = token5;
    num = 0;
    tmp78 = beginSearch;
    if (tmp72) {
      num = token2;
    }
    num2 = 0;
    if (tmp72) {
      num2 = token3;
    }
    if (tmp72) {
      num3 = token5;
    } else {
      num3 = 0;
      if (null != activeCommand) {
        num3 = 0;
      }
    }
    tmp78Result = tmp78(token1, num, num2, token4, num3);
    tmpResult5 = tmp(tmp2[18]);
    prop = null;
    if (tmpResult5.isIOS()) {
      prop = tmp78Result.autocompletePositionRelative;
    }
    items23 = [, ];
    items23[0] = tmp72;
    items23[1] = token5;
    memo6 = obj5.useMemo(() => {
      let tmp;
      if (closure_58) {
        obj = { marginTop: token5 };
        tmp = obj;
      }
      return tmp;
    }, items23);
    items24 = [, , , , ];
    items24[0] = analyticsLocations;
    items24[1] = beginSearch;
    items24[2] = beginSearch2;
    items24[3] = channel;
    items24[4] = chatInputRef;
    tmp82 = tmp4(tmp2[48])(memo5, screenIndex);
    callback3 = obj5.useCallback((type, tokenStart, arg2) => {
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
            current4.insertText(dependencyMap2, tokenStart, false);
            beginSearch2(tokenStart);
          }
        }
        const autocompleteResultText = autocompleter_AutocompleteUtils.getAutocompleteResultText(type, channel);
        current = chatInputRef.current;
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
            items = [gameMentionNode];
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
    }, items24);
    closure_60 = callback3;
    items25 = [, , ];
    items25[0] = chatInputRef;
    items25[1] = optionStates;
    items25[2] = channel;
    items26 = [, , , , , ];
    items26[0] = autocompleteSelectionStart;
    items26[1] = autocompleteType;
    items26[2] = callback2;
    items26[3] = channel;
    items26[4] = callback3;
    items26[5] = showOptionValuesPicker;
    callback4 = obj5.useCallback((type) => {
      current = chatInputRef.current;
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
          length = applicationCommandManager.props.text.length;
        }
        if (applicationCommandManager != null) {
          const result2 = applicationCommandManager.insertOrJumpCommandOption(type, length);
        }
      }
    }, items25);
    callback5 = obj5.useCallback((type) => {
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
        const merged = Object.assign(callback2());
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
        callback3(type, num, showOptionValuesPicker);
      }
      if (type.type === constants.GLOBAL) {
        if ("timestampMentionInput" === type.inlineAutocompleteType) {
          type = constants.TIMESTAMP_MENTION;
        }
      }
      type = type.type;
    }, items26);
    closure_61 = callback5;
    tmp11Result8 = tmp11(obj5.useState(null), 2);
    first4 = tmp11Result8[0];
    closure_62 = first4;
    closure_63 = tmp11Result8[1];
    ref1 = obj5.useRef(null);
    closure_64 = ref1;
    ref2 = obj5.useRef(null);
    closure_65 = ref2;
    items27 = [, , ];
    items27[0] = query;
    items27[1] = autocompleteType;
    name = undefined;
    if (activeOption != null) {
      name = activeOption.name;
    }
    items27[2] = name;
    effect8 = obj5.useEffect(() => {
      current = ref1.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
      const current2 = ref2.current;
      if (current2 != null) {
        current2.scrollToOffset({ offset: 0, animated: false });
      }
    }, items27);
    items28 = [, , , , ];
    items28[0] = autocompleteType;
    items28[1] = callback5;
    items28[2] = first4;
    items28[3] = channel;
    items28[4] = activeCommand;
    callback6 = obj5.useCallback((item) => {
      item = item.item;
      const type = item.type;
      if (scaledTextLineHeight.USER === type) {
        const obj2 = {};
        const merged = Object.assign(item);
        obj2.guildId = channel.guild_id;
        obj2.onPress = function onPress() {
          return callback5(item);
        };
        return ref(channel(canMentionEveryone[20]).User, obj2);
      } else if (scaledTextLineHeight.GLOBAL === type) {
        const obj3 = {};
        const merged1 = Object.assign(item);
        obj3.onPress = function onPress() {
          return callback5(item);
        };
        return ref(channel(canMentionEveryone[20]).Global, obj3);
      } else if (scaledTextLineHeight.ROLE === type) {
        const obj4 = {};
        const merged2 = Object.assign(item);
        obj4.onPress = function onPress() {
          return callback5(item);
        };
        let tmp65 = autocompleteType === selectionEnd.MENTIONS;
        if (tmp65) {
          tmp65 = null == activeCommand;
        }
        obj4.showDescription = tmp65;
        return ref(channel(canMentionEveryone[20]).Role, obj4);
      } else if (scaledTextLineHeight.CHANNEL === type) {
        const obj5 = {};
        const merged3 = Object.assign(item);
        obj5.onPress = function onPress() {
          return callback5(item);
        };
        return ref(channel(canMentionEveryone[20]).Channel, obj5);
      } else if (scaledTextLineHeight.EMOJI === type) {
        const obj6 = {};
        const merged4 = Object.assign(item);
        obj6.onPress = function onPress() {
          return callback5(item);
        };
        return ref(channel(canMentionEveryone[20]).Emoji, obj6);
      } else if (scaledTextLineHeight.EMOJI_PREMIUM_UPSELL === type) {
        const obj7 = {};
        const merged5 = Object.assign(item);
        obj7.onPress = function onPress() {
          return callback5(item);
        };
        return ref(channel(canMentionEveryone[20]).EmojiPremiumUpsell, obj7);
      } else if (scaledTextLineHeight.CHOICE === type) {
        const obj8 = {};
        const merged6 = Object.assign(item);
        obj8.onPress = function onPress() {
          return callback5(item);
        };
        return ref(channel(canMentionEveryone[20]).Choice, obj8);
      } else if (scaledTextLineHeight.CHOICE_LOADING === type) {
        return ref(channel(canMentionEveryone[20]).ChoiceLoading, {});
      } else if (scaledTextLineHeight.STICKER === type) {
        const obj9 = {};
        const merged7 = Object.assign(item);
        obj9.onPress = function onPress() {
          return callback5(item);
        };
        obj9.onLongPress = function onLongPress() {
          return closure_63(item.sticker.id);
        };
        obj9.isInteracting = first4 === item.sticker.id;
        const _HermesInternal = HermesInternal;
        return ref(channel(canMentionEveryone[20]).Sticker, obj9, "" + item.sticker.id + "-" + first4 === item.sticker.id);
      } else if (scaledTextLineHeight.GAME_MENTION === type) {
        const obj10 = {};
        const merged8 = Object.assign(item);
        obj10.onPress = function onPress() {
          return callback5(item);
        };
        return ref(channel(canMentionEveryone[20]).Game, obj10);
      } else if (scaledTextLineHeight.TIMESTAMP_MENTION === type) {
        const obj11 = {};
        const merged9 = Object.assign(item);
        obj11.onPress = function onPress() {
          return callback5(item);
        };
        return ref(channel(canMentionEveryone[20]).Timestamp, obj11);
      } else if (scaledTextLineHeight.LABEL === type) {
        obj = {};
        const merged10 = Object.assign(item);
        return ref(channel(canMentionEveryone[20]).Label, obj);
      } else {
        return null;
      }
    }, items28);
    items29 = [, ];
    items29[0] = tmp78Result.autocomplete;
    items29[1] = { maxHeight: memo4 };
    tmp93 = closure_28;
    tmp94 = chatInputRef;
    obj1 = { style: null, children: null };
    items30 = [, ];
    items30[0] = tmp78Result.autocompleteWrapper;
    items30[1] = prop;
    obj1.style = items30;
    tmp95 = closure_26;
    obj37 = { style: null, children: null };
    items31 = [, ];
    items31[0] = tmp78Result.autocompleteContainer;
    items31[1] = tmp82;
    obj37.style = items31;
    tmp93Result2 = null != autocompleteType;
    if (tmp93Result2) {
      tmp97 = closure_27;
      tmp98 = selectionEnd;
      tmp95Result = autocompleteType === selectionEnd.SLASHES_DISCOVERY;
      if (tmp95Result) {
        obj38 = { channel: null, onPressSlashItem: null, onHeightChange: null, canOnlyUseTextCommands: null };
        obj38.channel = channel;
        obj38.onPressSlashItem = function onPressSlashItem(command, section, visualSection) {
          let num = autocompleteSelectionStart;
          if (autocompleteSelectionStart == null) {
            num = 0;
          }
          callback3({ command, section, type: constants.SLASH, visualSection, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY }, num);
          obj = { command, section, type: constants.SLASH, visualSection, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY };
        };
        obj38.onHeightChange = tmp70;
        obj38.canOnlyUseTextCommands = canOnlyUseTextCommands;
        tmp95Result = tmp95(tmp4(tmp2[53]), obj38);
      }
      items32 = [, , , , , ];
      items32[0] = tmp95Result;
      tmp95Result1 = autocompleteType === tmp98.SLASHES;
      if (tmp95Result1) {
        obj39 = { channel: null, query: null, onPressCommandItem: null, style: null, ItemSeparatorComponent: null, onCommandsChange: null };
        obj39.channel = channel;
        str = query;
        tmp4Result = tmp4(tmp2[55]);
        if (query == null) {
          str = "";
        }
        obj39.query = str;
        obj39.onPressCommandItem = function onPressCommandItem(commands, found) {
          let num = autocompleteSelectionStart;
          if (autocompleteSelectionStart == null) {
            num = 0;
          }
          callback3({ command: commands, section: found, type: constants.SLASH, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY, query }, num);
          obj = { command: commands, section: found, type: constants.SLASH, location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY, query };
        };
        items33 = [];
        tmp102 = items33;
        tmp103 = items29;
        num4 = 0;
        items33[HermesBuiltin.arraySpread(items29, 0)] = tmp78Result.applicationCommands;
        obj39.style = items33;
        obj39.ItemSeparatorComponent = tmp(tmp2[33]).getItemSeparator;
        obj39.onCommandsChange = function onCommandsChange(commands) {
          let num = 0;
          if (0 !== commands) {
            if (context) {
              num = commands * token + (commands - 1) * hairlineWidth;
            }
          }
          closure_57(num);
        };
        tmp95Result1 = tmp95(tmp4Result, obj39);
      }
      items32[1] = tmp95Result1;
      tmp93Result1 = autocompleteType === tmp98.EMOJIS_AND_STICKERS;
      if (tmp93Result1) {
        tmp93Result = hasStickerResults;
        if (hasStickerResults) {
          obj40 = { children: null };
          obj41 = { style: null, children: null };
          items34 = [, ];
          items34[0] = tmp78Result.sectionTitle;
          obj42 = { height: null };
          obj42.height = scaledTextLineHeight;
          items34[1] = obj42;
          obj41.style = items34;
          obj43 = { variant: null, children: null };
          obj43.variant = tmp6;
          intl = tmp(tmp2[57]).intl;
          obj44 = { prefix: null };
          obj44.prefix = query;
          obj43.children = intl.format(tmp(tmp2[57]).t.uferGG, obj44);
          obj41.children = tmp95(tmp(tmp2[56]).Text, obj43);
          items35 = [, ];
          items35[0] = tmp95(tmp94, obj41);
          obj45 = { ref: null, maintainVisibleContentPosition: null, horizontal: true, style: null, contentContainerStyle: null, keyExtractor: null, data: null, extraData: null, renderItem: null, showsHorizontalScrollIndicator: false, contentInset: null };
          obj45.ref = ref2;
          obj45.maintainVisibleContentPosition = { disabled: true };
          items36 = [, ];
          items36[0] = items29;
          items36[1] = tmp78Result.stickersAutocompleteList;
          obj45.style = items36;
          obj45.contentContainerStyle = tmp78Result.stickersAutocompleteContent;
          tmp106 = closure_35;
          obj45.keyExtractor = closure_35;
          obj45.data = stickerResults;
          obj45.extraData = first4;
          obj45.renderItem = callback6;
          obj45.contentInset = { right: 12 };
          items35[1] = tmp95(tmp(tmp2[58]).FlashList, obj45);
          obj40.children = items35;
          tmp93Result = tmp93(tmp97, obj40);
        }
        items37 = [, , ];
        items37[0] = tmp93Result;
        if (hasStickerResults) {
          hasStickerResults = hasNonStickerResults;
        }
        if (hasStickerResults) {
          obj46 = { style: null };
          obj46.style = tmp78Result.sectionDivider;
          hasStickerResults = tmp95(tmp4(tmp2[59]), obj46);
        }
        items37[1] = hasStickerResults;
        tmp95Result2 = hasNonStickerResults;
        if (hasNonStickerResults) {
          obj47 = { style: null, children: null };
          items38 = [, ];
          items38[0] = tmp78Result.sectionTitle;
          obj48 = { height: null };
          obj48.height = scaledTextLineHeight;
          items38[1] = obj48;
          obj47.style = items38;
          obj49 = { variant: null, children: null };
          obj49.variant = tmp6;
          intl2 = tmp(tmp2[57]).intl;
          obj50 = { prefix: null };
          tmp108 = closure_20;
          tmp109 = globalThis;
          _HermesInternal = HermesInternal;
          str2 = "";
          obj50.prefix = "" + closure_20 + query;
          obj49.children = intl2.format(tmp(tmp2[57]).t.ksAVYt, obj50);
          obj47.children = tmp95(tmp(tmp2[56]).Text, obj49);
          tmp95Result2 = tmp95(tmp94, obj47);
        }
        obj51 = { children: null };
        items37[2] = tmp95Result2;
        obj51.children = items37;
        tmp93Result1 = tmp93(tmp97, obj51);
      }
      items32[2] = tmp93Result1;
      tmp95Result3 = autocompleteType === tmp98.GAME_MENTIONS;
      if (tmp95Result3) {
        obj52 = { onLayout: null, children: null };
        obj52.onLayout = function onLayout(nativeEvent) {
          return _undefined2(nativeEvent.nativeEvent.layout.height);
        };
        obj52.children = tmp95(tmp4(tmp2[60]), {});
        tmp95Result3 = tmp95(tmp94, obj52);
      }
      items32[3] = tmp95Result3;
      tmp95Result4 = autocompleteType === tmp98.TIMESTAMPS;
      if (tmp95Result4) {
        obj53 = { onLayout: null, children: null };
        obj53.onLayout = function onLayout(nativeEvent) {
          return _undefined3(nativeEvent.nativeEvent.layout.height);
        };
        obj53.children = tmp95(tmp4(tmp2[28]), {});
        tmp95Result4 = tmp95(tmp94, obj53);
      }
      items32[4] = tmp95Result4;
      if (hasNonStickerResults) {
        obj54 = { ref: null, maintainVisibleContentPosition: null, style: null, keyExtractor: null, getItemType: null, data: null, renderItem: null, ItemSeparatorComponent: null, onContentSizeChange: null };
        obj54.ref = ref1;
        obj54.maintainVisibleContentPosition = { disabled: true };
        items39 = [, ];
        items39[0] = items29;
        items39[1] = tmp78Result.resultsList;
        obj54.style = items39;
        tmp112 = closure_35;
        obj54.keyExtractor = closure_35;
        obj54.getItemType = function getItemType(type) {
          return type.type;
        };
        obj54.data = nonStickerResults;
        obj54.renderItem = callback6;
        obj54.ItemSeparatorComponent = tmp(tmp2[33]).getItemSeparator;
        obj54.onContentSizeChange = function onContentSizeChange(arg0, arg1) {
          return closure_45(arg1);
        };
        hasNonStickerResults = tmp95(tmp(tmp2[58]).FlashList, obj54);
      }
      obj55 = { children: null };
      items32[5] = hasNonStickerResults;
      obj55.children = items32;
      tmp93Result2 = tmp93(tmp97, obj55);
    }
    obj37.children = tmp93Result2;
    items40 = [, ];
    items40[0] = tmp95(tmp4(tmp2[52]).View, obj37);
    tmp95Result5 = null != activeCommand && !commandsDisabled;
    if (tmp95Result5) {
      obj56 = { style: null, children: null };
      obj56.style = memo6;
      obj57 = { command: null, section: null, guildId: null, onPressOption: null, currentOption: null, optionStates: null };
      obj57.command = activeCommand;
      obj57.section = stateFromStoresObject.activeSection;
      obj57.guildId = channel.guild_id;
      obj57.onPressOption = callback4;
      obj57.currentOption = activeOption;
      obj57.optionStates = optionStates;
      obj56.children = tmp95(tmp4(tmp2[61]), obj57);
      tmp95Result5 = tmp95(tmp94, obj56);
    }
    items40[1] = tmp95Result5;
    obj1.children = items40;
    obj58 = { style: tmp78Result.autocompletePositionRelative, children: tmp93(tmp94, obj1) };
    return tmp95(tmp94, obj58);
  }
}
ACWrapper.displayName = "AutocompleteWrapper";
const size = fn(2);
let result = size.fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default noop.memo(ACWrapper);