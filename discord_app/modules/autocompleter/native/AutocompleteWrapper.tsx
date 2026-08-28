// === Module 11892: getStickersItemLayout ===

// Module 11892 (getStickersItemLayout)
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import AutocompleteLabel from "AutocompleteLabel" /* 11893 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "handleInit" /* 7471 */;
import closure_8 from "getEmojiToGroupId" /* 5366 */;
import closure_9 from "_handleConnectionOpen" /* 5186 */;
import closure_10 from "loadSavedGuildStickers" /* 5409 */;
import ME from "ME" /* 676 */;
import { BOOLEAN_CHOICES } from "TRUE_OPTION_NAME" /* 4917 */;
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT" /* 10277 */;
import regExp from "regExp" /* 4918 */;
import { AutocompleteTypes } from "AutocompleteTypes" /* 10353 */;
import { EmojiInteractionPoint } from "set" /* 1926 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function getStickersItemLayout(arg0, arg1) {
  const obj = { length: AutocompleteLabel.AUTOCOMPLETE_STICKER_NODE_SIZE, offset: null, index: null };
  const result = arg1 * (AutocompleteLabel.AUTOCOMPLETE_STICKER_NODE_SIZE + AutocompleteLabel.AUTOCOMPLETE_STICKER_NODE_MARGIN);
  const diff = arg1 - 1;
  obj[1] = result + diff * AutocompleteLabel.AUTOCOMPLETE_STICKER_NODE_MARGIN;
  obj[2] = arg1;
  return obj;
}
let c4 = importAllResult;
({ View: c5, FlatList: closure_6, StyleSheet } = get_ActivityIndicator);
({ AutoCompleteResultTypes: unpackModuleId, WHITESPACE_RE: closure_12, AnalyticEvents: map1, UpsellTypes: closure_14 } = ME);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = AUTOCOMPLETE_ROW_HEIGHT);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20, COMMAND_SENTINEL: closure_21, GAME_MENTION_INPUT_PREFIX: closure_22 } = regExp);
({ jsx: closure_25, Fragment: closure_26, jsxs: closure_27 } = jsxProd);
let c28 = "text-sm/semibold";
const hairlineWidth = StyleSheet.hairlineWidth;
let closure_30 = createCacheKey.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  let obj = { autocompletePositionRelative: { position: "relative" }, autocompleteWrapper: null, autocompleteWrapperAbsolute: null, autocompleteContainer: null, autocomplete: null, sectionDivider: null, sectionTitle: null, stickersAutocompleteList: null };
  obj1 = set;
  let str = "absolute";
  if (obj1.isAndroid()) {
    str = "relative";
  }
  obj[1] = { position: str, marginHorizontal, marginBottom };
  obj[2] = { left: 0, right: 0, bottom: 0 };
  obj = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  obj[3] = obj;
  obj = { flexGrow: 0, flexShrink: 1, backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj[4] = obj;
  obj1 = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  obj[5] = obj1;
  obj[6] = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  const obj2 = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  obj[7] = { paddingLeft: 12 - AutocompleteLabel.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: AutocompleteLabel.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  return obj;
});
let closure_32 = { resultCount: 0, stickerResults: [], nonStickerResults: [], hasStickerResults: false, hasNonStickerResults: false };
const forwardRefResult = importAllResult.forwardRef((analyticsLocations, ref) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  let _require = analyticsLocations;
  const channel = analyticsLocations.channel;
  let canMentionEveryone = analyticsLocations.canMentionEveryone;
  const keyboardType = analyticsLocations.keyboardType;
  const onChangeAutoCompleteVisibility = analyticsLocations.onChangeAutoCompleteVisibility;
  const commandsDisabled = analyticsLocations.commandsDisabled;
  const chatInputRef = analyticsLocations.chatInputRef;
  let optionStates;
  let activeOption;
  let activeCommand;
  let token;
  let scaledTextLineHeight;
  let setting;
  let resultCount;
  let stickerResults;
  let nonStickerResults;
  let hasStickerResults;
  let hasNonStickerResults;
  closure_18 = undefined;
  let context;
  let memo;
  let focused;
  c22 = undefined;
  let selectionStart;
  let selectionEnd;
  closure_25 = undefined;
  c26 = undefined;
  let setting1;
  setting1 = undefined;
  let anchor;
  let beginSearch;
  closure_31 = undefined;
  let autocompleteType;
  let query;
  let queryOptions;
  let autocompleteSelectionStart;
  let showOptionValuesPicker;
  c37 = undefined;
  let first2;
  closure_39 = undefined;
  closure_40 = undefined;
  let callback;
  let callback1;
  let memo2;
  closure_44 = undefined;
  closure_45 = undefined;
  let diff1;
  let memo3;
  let first3;
  closure_49 = undefined;
  let chatInputFloating;
  closure_51 = undefined;
  let token5;
  closure_53 = undefined;
  let isScreenReaderEnabled;
  let callback2;
  let callback4;
  let first4;
  closure_58 = undefined;
  ({ canOnlyUseTextCommands, screenIndex } = analyticsLocations);
  let obj = _require(canMentionEveryone[21]);
  let items = [optionStates];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ optionStates: optionStates.getOptionStates(channel.id), activeOption: optionStates.getActiveOption(channel.id), activeCommand: optionStates.getActiveCommand(channel.id), activeSection: optionStates.getActiveCommandSection(channel.id) }));
  optionStates = stateFromStoresObject.optionStates;
  activeOption = stateFromStoresObject.activeOption;
  activeCommand = stateFromStoresObject.activeCommand;
  obj1 = _require(canMentionEveryone[22]);
  token = obj1.useToken(channel(canMentionEveryone[16]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj2 = _require(canMentionEveryone[23]);
  scaledTextLineHeight = obj2.useScaledTextLineHeight(setting1);
  const IncludeStickersInAutocomplete = _require(canMentionEveryone[25]).IncludeStickersInAutocomplete;
  setting = IncludeStickersInAutocomplete.getSetting();
  let obj3 = onChangeAutoCompleteVisibility;
  const tmp11 = keyboardType(onChangeAutoCompleteVisibility.useState(autocompleteType), 2);
  const first = tmp11[0];
  resultCount = first.resultCount;
  stickerResults = first.stickerResults;
  nonStickerResults = first.nonStickerResults;
  hasStickerResults = first.hasStickerResults;
  hasNonStickerResults = first.hasNonStickerResults;
  closure_18 = tmp11[1];
  let obj4 = _require(canMentionEveryone[21]);
  let items1 = [activeOption];
  const stateFromStores = obj4.useStateFromStores(items1, () => activeOption.loadState);
  let obj5 = _require(canMentionEveryone[21]);
  const items2 = [token];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => token.loadState);
  context = onChangeAutoCompleteVisibility.useContext(_require(canMentionEveryone[26]).RedesignCompatContext);
  const items3 = [channel, setting];
  memo = onChangeAutoCompleteVisibility.useMemo(() => callback(canMentionEveryone[27]).getAutocompleteOptions(channel, true, setting), items3);
  let tmp17 = keyboardType(onChangeAutoCompleteVisibility.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }), 2);
  const first1 = tmp17[0];
  focused = first1.focused;
  let text = first1.text;
  c22 = text;
  selectionStart = first1.selectionStart;
  selectionEnd = first1.selectionEnd;
  closure_25 = tmp17[1];
  let tmp8 = channel(canMentionEveryone[24])();
  [tmp20, c26] = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const IncludeGameMentionsInAutocomplete = _require(canMentionEveryone[25]).IncludeGameMentionsInAutocomplete;
  setting1 = IncludeGameMentionsInAutocomplete.getSetting();
  const tmp22 = channel(canMentionEveryone[28])(text, selectionEnd, setting1, c22);
  anchor = tmp22.anchor;
  beginSearch = tmp22.beginSearch;
  closure_31 = onChangeAutoCompleteVisibility.useRef({ text: "", selectionEnd: 0 });
  const items4 = [activeOption, beginSearch, chatInputRef, setting1, anchor, selectionEnd, selectionStart, text];
  const effect = onChangeAutoCompleteVisibility.useEffect(() => {
    const text = closure_31.current.text;
    selectionEnd = closure_31.current.selectionEnd;
    closure_31.current.text = c22;
    closure_31.current.selectionEnd = selectionEnd;
    if (setting1) {
      if (arr.length >= 6) {
        if (null == activeOption) {
          if (selectionStart === tmp) {
            if (" " === arr[tmp - 1]) {
              const result = callback(canMentionEveryone[29]).findAutoInsertOnSpaceToken(arr, tmp, closure_18);
              if (null != result) {
                if ("gameMentionInput" === obj3.findAutoInsertOnSpaceMentionInlineAutocompleteType(result.trigger)) {
                  if (null == anchor) {
                    const tmp18Result = tmp18(tmp19[29]);
                    if (tmp18Result.isSpaceJustTypedAtCaret(text, selectionEnd, arr, tmp)) {
                      const current = chatInputRef.current;
                      current.insertText(c22, result.tokenStart, false, undefined, tmp);
                      beginSearch(result.tokenStart);
                    }
                  }
                }
                obj3 = channel(tmp19[30]);
              }
              const obj2 = callback(canMentionEveryone[29]);
              tmp18 = callback;
            }
          }
        }
      }
    }
  }, items4);
  const effect1 = onChangeAutoCompleteVisibility.useEffect(() => {
    c0 = false;
    let result = activeCommand.addConditionalChangeListener(() => {
      let tmp = !callback;
      if (!callback) {
        let flag;
        if (closure_1_9.isConnected()) {
          const result = callback(closure_1_2[31]).initiateEmojiInteraction(closure_1_24.AutocompleteWrapperShown);
          flag = false;
          const obj = callback(closure_1_2[31]);
        }
        tmp = flag;
      }
      return tmp;
    });
    return () => {
      c0 = true;
    };
  }, []);
  const imperativeHandle = onChangeAutoCompleteVisibility.useImperativeHandle(ref, onChangeAutoCompleteVisibility.useMemo(() => {
    c0 = -1;
    return () => ({
      setChatInputHeight: closure_1_26,
      setData(arg0) {
        ({ focused: closure_0, text: closure_1, selectionStart: closure_2, selectionEnd: closure_3 } = arg0);
        if (-1 !== timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          closure_1_25(() => { ... });
        }, 16);
      }
    });
  }, []));
  const items5 = [selectionStart, selectionEnd, text, activeCommand, optionStates, activeOption, canMentionEveryone, commandsDisabled, memo, stateFromStores, stateFromStores1, setting1, anchor];
  const memo1 = onChangeAutoCompleteVisibility.useMemo(() => {
    canMentionEveryone = selectionStart;
    if (null != _undefined) {
      if (0 !== str.trim().length) {
        if (null != activeOption) {
          obj1 = callback(canMentionEveryone[32]);
          let applicationCommandOptionQueryOptions = obj1.getApplicationCommandOptionQueryOptions(tmp71);
        } else {
          applicationCommandOptionQueryOptions = { canMentionEveryone: null, canMentionHere: null, canMentionChannels: true, canMentionUsers: true, canMentionRoles: true, canMentionAnyGuildUser: false, canMentionNonMentionableRoles: false, canMentionOtherGlobals: true };
          applicationCommandOptionQueryOptions[0] = canMentionEveryone;
          applicationCommandOptionQueryOptions[1] = canMentionEveryone;
        }
        let tmp5;
        if (null != activeOption) {
          tmp5 = optionStates[tmp71.name];
        }
        if (null != activeCommand) {
          if (null != tmp71) {
            if (null != tmp5) {
              let num = tmp5.location;
              if (num == null) {
                num = 0;
              }
              let num2 = tmp5.length;
              if (num2 == null) {
                num2 = 0;
              }
              let substr;
              if (tmp >= num + num2) {
                substr = str.substring(num + num2, tmp);
              }
              query = substr;
              if (null == tmp71.choices) {
                if (!tmp71.autocomplete) {
                  const type = tmp71.type;
                  if (callback(canMentionEveryone[33]).ApplicationCommandOptionType.BOOLEAN === type) {
                    let prefix = "";
                    let CHOICES = selectionStart.CHOICES;
                    let choices = nonStickerResults;
                    let flag = true;
                    let str2 = "";
                  } else if (callback(canMentionEveryone[33]).ApplicationCommandOptionType.CHANNEL === type) {
                    prefix = context;
                    CHOICES = selectionStart.CHANNELS;
                    const channelTypes = tmp71.channelTypes;
                    flag = true;
                    str2 = context;
                  } else {
                    if (callback(canMentionEveryone[33]).ApplicationCommandOptionType.ROLE !== type) {
                      if (callback(canMentionEveryone[33]).ApplicationCommandOptionType.USER !== type) {
                        flag = false;
                      }
                    }
                    prefix = closure_18;
                    CHOICES = selectionStart.MENTIONS;
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
                  let tmp64 = substr;
                  if (startsWithResult) {
                    let str8 = "";
                    if (substr.length > str2.length) {
                      str8 = substr.substring(str2.length);
                    }
                    query = str8;
                    tmp64 = str8;
                  }
                  let obj = {};
                  const _Object2 = Object;
                  const entries = Object.entries(optionStates);
                  const item = entries.forEach((arg0) => {
                    [tmp, tmp2] = arg0;
                    if (null != tmp2.optionValue) {
                      obj[tmp] = tmp2.optionValue;
                    }
                  });
                  obj = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null, showOptionValuesPicker: null };
                  obj[0] = tmp64;
                  obj[1] = CHOICES;
                  obj[2] = num + num2;
                  obj1 = { activeCommand: null, optionValues: null, isActiveApplicationCommand: null, option: null, choices: null, channelTypes: null };
                  obj1[0] = tmp7;
                  obj1[1] = obj;
                  obj1[2] = flag;
                  obj1[3] = tmp71;
                  obj1[4] = choices;
                  obj1[5] = channelTypes;
                  const merged = Object.assign(applicationCommandOptionQueryOptions);
                  obj[3] = obj1;
                  obj[4] = flag;
                  return obj;
                }
              }
              prefix = "";
              CHOICES = selectionStart.CHOICES;
              choices = tmp71.choices;
              flag = true;
              str2 = "";
            }
          }
        }
        if (setting1) {
          if (null != anchor) {
            let obj2 = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
            obj2[0] = str.slice(tmp24 + _undefined.length, selectionEnd).toLowerCase();
            obj2[1] = selectionStart.GAME_MENTIONS;
            obj2[2] = tmp24;
            let obj3 = {};
            const merged1 = Object.assign(applicationCommandOptionQueryOptions);
            obj2[3] = obj3;
            return obj2;
          }
        }
        let sum = null;
        if (null != tmp5) {
          let num3 = tmp5.location;
          if (num3 == null) {
            num3 = 0;
          }
          let num4 = tmp5.length;
          if (num4 == null) {
            num4 = 0;
          }
          sum = num3 + num4;
        }
        let tmp28 = tmp;
        while (true) {
          let tmp29 = callback;
          let tmp30 = canMentionEveryone;
          obj2 = callback(canMentionEveryone[29]);
          let arr = _undefined;
          let tmp32 = tmp28;
          let tmp33 = tmp8;
          let tmp34 = tmp9;
          let num5 = sum;
          let result = obj2.isWhitespaceSeparatingBoundary(_undefined, tmp28);
          if (tmp27) {
            num5 = 0;
          }
          if (tmp28 === num5) {
            let tmp36 = selectionEnd;
            let substr1 = arr.slice(tmp28, selectionEnd);
            let tmp38 = callback;
            let tmp39 = canMentionEveryone;
            obj3 = callback(canMentionEveryone[29]);
            prefix = obj3.getPrefix(substr1);
            let tmp41 = callback;
            let tmp42 = canMentionEveryone;
            let obj4 = callback(canMentionEveryone[29]);
            query = obj4.getQuery(substr1);
            if (null != query) {
              let tmp44 = focused;
              if (prefix !== focused) {
                let tmp45 = setting;
                let tmp46 = tmp28;
                let tmp47 = query;
                if (setting.test(query)) {
                  break;
                }
              }
              let tmp50 = selectionStart;
              let tmp51 = tmp47;
              if (tmp34 === selectionStart.SLASHES) {
                let tmp52 = callback;
                let tmp53 = canMentionEveryone;
                let obj5 = callback(canMentionEveryone[34]);
                let str5 = tmp47;
                if (tmp47 == null) {
                  str5 = "";
                }
                let text = obj5.getTextBeforeFirstOption(str5).text;
                query = text;
                tmp51 = text;
              }
              obj4 = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
              obj4[0] = tmp51;
              obj4[1] = tmp34;
              obj4[2] = tmp46;
              obj5 = {};
              let tmp54 = obj5;
              let tmp55 = applicationCommandOptionQueryOptions;
              let merged2 = Object.assign(applicationCommandOptionQueryOptions);
              obj4[3] = obj5;
              return obj4;
            }
            let _Object = Object;
            let tmp48 = memo;
            let keys = Object.keys(memo);
            let found = keys.find((arg0) => {
              let tmp = arg0 !== selectionStart.SLASHES && arg0 !== selectionStart.SLASHES_DISCOVERY;
              if (!tmp) {
                let tmp4 = null == closure_1_9;
                if (tmp4) {
                  tmp4 = !closure_1_5;
                }
                tmp = tmp4;
              }
              if (tmp) {
                let matchesResult = undefined !== prefix;
                if (matchesResult) {
                  matchesResult = undefined !== query;
                }
                if (matchesResult) {
                  matchesResult = obj.matches(tmp6, query, closure_2);
                }
                tmp = matchesResult;
                tmp6 = prefix;
              }
              return tmp;
            });
            tmp33 = query;
            tmp46 = tmp28;
            tmp47 = query;
            tmp34 = found;
            if (null != found) {
              break;
            }
          } else {
            found = tmp34;
          }
          let diff = tmp28 - 1;
          canMentionEveryone = diff;
          let num6 = sum;
          if (tmp27) {
            num6 = 0;
          }
          tmp28 = diff;
          tmp8 = tmp33;
          tmp9 = found;
          tmp47 = tmp33;
          tmp34 = found;
          tmp46 = diff;
          if (diff < num6) {
            break;
          }
        }
      }
    }
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items5);
  autocompleteType = memo1.autocompleteType;
  query = memo1.query;
  queryOptions = memo1.queryOptions;
  autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  showOptionValuesPicker = memo1.showOptionValuesPicker;
  _require = undefined;
  const tmp27 = keyboardType(onChangeAutoCompleteVisibility.useState(null), 2);
  _require = tmp28;
  let tmp29 = keyboardType(onChangeAutoCompleteVisibility.useState(autocompleteType), 2);
  if (tmp29[0] !== autocompleteType) {
    tmp29[1](autocompleteType);
    tmp28(null);
  }
  const items6 = [
    tmp27[0],
    obj3.useCallback((arg0) => {
      if (arg0 > 0) {
        const _Math = Math;
        callback = Math.round(arg0);
        callback((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }, [])
  ];
  let tmp10Result = tmp10(items6, 2);
  [tmp33, c37] = tmp10Result;
  _require = undefined;
  tmp10Result = tmp10(obj3.useState(null), 2);
  _require = tmp35;
  const tmp10Result1 = keyboardType(obj3.useState(autocompleteType), 2);
  if (tmp10Result1[0] !== autocompleteType) {
    tmp10Result1[1](autocompleteType);
    tmp35(null);
  }
  const items7 = [
    tmp10Result[0],
    obj3.useCallback((arg0) => {
      if (arg0 > 0) {
        const _Math = Math;
        callback = Math.round(arg0);
        callback((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }, [])
  ];
  const tmp10Result2 = keyboardType(items7, 2);
  first2 = tmp10Result2[0];
  closure_39 = tmp10Result2[1];
  closure_40 = tmp33;
  const items8 = [autocompleteType, query, queryOptions, memo];
  callback = obj3.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        let obj = memo[tmp];
        const queryResultsResult = obj.queryResults(tmp2, queryOptions, arg0);
        const items = [];
        const items1 = [];
        const item = queryResultsResult.forEach((type) => {
          if (type.type === closure_1_11.STICKER) {
            items.push(type);
          } else {
            items1.push(type);
          }
        });
        obj = { resultCount: null, stickerResults: null, nonStickerResults: null, hasStickerResults: null, hasNonStickerResults: null };
        obj[0] = queryResultsResult.length;
        obj[1] = items;
        obj[2] = items1;
        obj[3] = items.length > 0;
        obj[4] = items1.length > 0;
        callback2(obj);
      }
    }
    callback2(autocompleteType);
  }, items8);
  const items9 = [autocompleteType, callback, memo];
  const effect2 = obj3.useEffect(() => {
    let tmp2 = null;
    if (null != autocompleteType) {
      let stores;
      if (memo != null) {
        stores = memo[tmp].stores;
      }
      tmp2 = stores;
    }
    if (null != tmp2) {
      const batchedStoreListener = new callback(canMentionEveryone[21]).BatchedStoreListener(tmp2, () => callback(false));
      batchedStoreListener.attach("AutocompleteWrapper");
      return () => batchedStoreListener.detach();
    }
  }, items9);
  const items10 = [callback];
  const effect3 = obj3.useEffect(() => {
    callback(true);
  }, items10);
  const items11 = [stickerResults, nonStickerResults];
  callback1 = obj3.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length }), items11);
  const items12 = [autocompleteType, focused, keyboardType, resultCount];
  memo2 = obj3.useMemo(() => {
    let tmp = resultCount > 0;
    if (!tmp) {
      tmp = autocompleteType === selectionStart.SLASHES || tmp2 === selectionStart.SLASHES_DISCOVERY;
      const tmp3 = autocompleteType === selectionStart.SLASHES || tmp2 === selectionStart.SLASHES_DISCOVERY;
    }
    if (!tmp) {
      tmp = autocompleteType === selectionStart.GAME_MENTIONS;
    }
    let tmp7 = focused;
    if (focused) {
      tmp7 = tmp;
    }
    if (tmp7) {
      tmp7 = keyboardType === callback(canMentionEveryone[35]).KeyboardTypes.SYSTEM;
    }
    return tmp7;
  }, items12);
  closure_44 = obj3.useRef(false);
  const items13 = [autocompleteType, activeCommand];
  const effect4 = obj3.useEffect(() => {
    let tmp4 = autocompleteType === selectionStart.SLASHES;
    if (ref.current) {
      if (!tmp4) {
        tmp4 = tmp2 === tmp3.SLASHES_DISCOVERY;
      }
      if (!tmp4) {
        tmp4 = null != activeCommand;
      }
      tmp.current = tmp4;
    } else {
      let tmp5 = tmp4;
      if (!tmp4) {
        tmp5 = tmp2 === tmp3.SLASHES_DISCOVERY;
      }
      if (!tmp5) {
        tmp5 = null != activeCommand;
      }
      tmp.current = tmp5;
      if (tmp.current) {
        callback(canMentionEveryone[36]).trackWithMetadata(resultCount.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "slash_ui" });
        const obj = callback(canMentionEveryone[36]);
      }
    }
  }, items13);
  closure_45 = obj3.useRef(null);
  const items14 = [onChangeAutoCompleteVisibility, activeCommand, memo2, autocompleteType, channel, callback1, setting1];
  const effect5 = obj3.useEffect(() => {
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
        let obj = callback(canMentionEveryone[37]);
        obj = {};
        const merged = Object.assign(callback1());
        let tmp17;
        if (tmp8 === selectionStart.MENTIONS) {
          tmp17 = setting1;
        }
        obj.gameMentionsAvailable = tmp17;
        const result = obj.iOSTrackAutocompleteOpen(tmp8, tmp7, obj);
      }
      tmp7 = channel;
    } else {
      ref2.current = null;
    }
  }, items14);
  const tmp19 = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const insets = tmp4(tmp2[19])({ includeKeyboardHeight: true }).insets;
  let diff = channel(canMentionEveryone[18])({ ignoreKeyboard: true }).height - insets.top - insets.bottom;
  diff1 = diff - tmp(tmp2[20]).NAV_BAR_HEIGHT - tmp20;
  const items15 = [autocompleteType, stickerResults.length, diff1, scaledTextLineHeight, tmp33];
  memo3 = obj3.useMemo(() => {
    const sum = scaledTextLineHeight + 24;
    const sum1 = 200 + sum;
    if (stickerResults.length > 0) {
      let sum2 = sum1 + sum + callback(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + anchor;
    } else {
      sum2 = sum1;
      if (autocompleteType !== selectionStart.EMOJIS_AND_STICKERS) {
        let num = 200;
        if (tmp3 === selectionStart.GAME_MENTIONS) {
          num = 200 + closure_40;
        }
        sum2 = num;
      }
    }
    return Math.min(diff1, sum2);
  }, items15);
  const tmp10Result3 = keyboardType(obj3.useState(null), 2);
  first3 = tmp10Result3[0];
  closure_49 = tmp54;
  const items16 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, nonStickerResults.length, memo3, first3, context, token, scaledTextLineHeight, tmp33, first2];
  const memo4 = obj3.useMemo(() => {
    if (autocompleteType === selectionStart.EMOJIS_AND_STICKERS) {
      let num7 = 0;
      if (0 !== nonStickerResults.length) {
        if (context) {
          num7 = length * token + (length - 1) * anchor;
        }
      }
      let sum = num7;
      if (hasNonStickerResults) {
        sum = num7 + (scaledTextLineHeight + 24);
      }
      let tmp17 = hasStickerResults;
      let sum2 = sum;
      if (hasStickerResults) {
        const sum1 = scaledTextLineHeight + 24;
        sum2 = sum + (sum1 + callback(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12);
      }
      if (tmp17) {
        tmp17 = tmp14;
      }
      let sum3 = sum2;
      if (tmp17) {
        sum3 = sum2 + anchor;
      }
      let num2 = sum3;
      tmp14 = hasNonStickerResults;
    } else {
      if (tmp3) {
        let num6 = first3;
        if (first3 == null) {
          num6 = 0;
        }
        num2 = num6;
      } else {
        num2 = 0;
        if (null != tmp) {
          let num3 = 0;
          if (resultCount > 0) {
            let tmp6 = first2;
            if (first2 == null) {
              let num4 = 0;
              if (0 !== tmp5) {
                if (context) {
                  num4 = tmp5 * token + (tmp5 - 1) * anchor;
                }
              }
              tmp6 = num4;
            }
            num3 = tmp6;
          }
          let sum4 = num3;
          if (tmp === tmp2.GAME_MENTIONS) {
            sum4 = num3 + closure_40;
          }
          num2 = sum4;
        }
      }
      tmp3 = tmp === tmp2.SLASHES || tmp === tmp2.SLASHES_DISCOVERY;
    }
    let num12 = 0;
    if (memo2) {
      num12 = num2;
    }
    return Math.min(num12, memo3);
  }, items16);
  let tmpResult = tmp(tmp2[38]);
  chatInputFloating = tmpResult.useMobileVisualRefreshConfig({ location: "AutocompleteWrapper" }).chatInputFloating;
  closure_51 = tmp56;
  tmpResult = tmp(tmp2[22]);
  const token1 = tmpResult.useToken(tmp4(tmp2[16]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
  let tmp48 = channel(canMentionEveryone[18])({ ignoreKeyboard: true });
  const token2 = _require(canMentionEveryone[22]).useToken(tmp4(tmp2[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  const tmpResult1 = _require(canMentionEveryone[22]);
  const token3 = _require(canMentionEveryone[22]).useToken(tmp4(tmp2[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
  const tmpResult2 = _require(canMentionEveryone[22]);
  const token4 = _require(canMentionEveryone[22]).useToken(tmp4(tmp2[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
  const tmpResult3 = _require(canMentionEveryone[22]);
  token5 = _require(canMentionEveryone[22]).useToken(tmp4(tmp2[16]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
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
  const tmp62Result = beginSearch(token1, num, num2, token4, num3);
  closure_53 = tmp62Result;
  const tmp62 = beginSearch;
  const tmpResult4 = _require(canMentionEveryone[22]);
  isScreenReaderEnabled = _require(canMentionEveryone[39]).useIsScreenReaderEnabled();
  const tmpResult5 = _require(canMentionEveryone[39]);
  let isAndroidResult = _require(canMentionEveryone[15]).isAndroid();
  if (!isAndroidResult) {
    let isIOSResult = tmp(tmp2[15]).isIOS();
    if (isIOSResult) {
      let tmp67 = isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        tmp67 = chatInputFloating;
      }
      isIOSResult = tmp67;
    }
    isAndroidResult = isIOSResult;
    const tmpResult7 = tmp(tmp2[15]);
  }
  const items17 = [isScreenReaderEnabled, chatInputFloating, tmp62Result.autocompletePositionRelative];
  const items18 = [memo4 > 0, token5];
  const memo5 = obj3.useMemo(() => {
    const obj = callback(canMentionEveryone[15]);
    let prop = null;
    if (obj.isIOS()) {
      if (isScreenReaderEnabled) {
        prop = obj.autocompletePositionRelative;
      } else {
        prop = null;
      }
    }
    return prop;
  }, items17);
  const memo6 = obj3.useMemo(() => {
    let tmp;
    if (closure_51) {
      const obj = { marginTop: null };
      obj[0] = token5;
      tmp = obj;
    }
    return tmp;
  }, items18);
  const items19 = [analyticsLocations, beginSearch, channel, chatInputRef];
  const tmpResult6 = _require(canMentionEveryone[15]);
  callback2 = obj3.useCallback((type, tokenStart) => {
    if (type.type !== scaledTextLineHeight.EMOJI_PREMIUM_UPSELL) {
      if (type.type === tmp.GLOBAL) {
        if ("gameMentionInput" === type.inlineAutocompleteType) {
          const current4 = chatInputRef.current;
          current4.insertText(c22, tokenStart, false);
          beginSearch(tokenStart);
        }
      }
      const autocompleteResultText = callback(canMentionEveryone[29]).getAutocompleteResultText(type, channel);
      const current = chatInputRef.current;
      const applicationCommandManager = current.getApplicationCommandManager();
      if (type.type === tmp.GAME_MENTION) {
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
      }
      let result;
      if (applicationCommandManager != null) {
        result = applicationCommandManager.setAutoCompleteResult(tmp10.id, autocompleteResultText, arg2, type);
      }
      if (!result) {
        const current2 = tmp12.current;
        current2.insertText(autocompleteResultText, tokenStart, type.type !== tmp.STICKER, tmp13);
        if (type.type === tmp.STICKER) {
          const current3 = tmp12.current;
          current3.handleSelectSticker(type.sticker, tokenStart);
        }
      }
      const obj3 = callback(canMentionEveryone[29]);
      tmp10 = channel;
    } else {
      let obj = channel(canMentionEveryone[41]);
      obj = { initialUpsellKey: null, analyticsLocations: null };
      obj[0] = stickerResults.EMOJI_AUTOCOMPLETE;
      obj[1] = callback;
      const result1 = obj.handleShowUpsellAlert(obj);
    }
  }, items19);
  const items20 = [chatInputRef, optionStates, channel];
  const items21 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
  const callback3 = obj3.useCallback((type) => {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (type.type === callback(canMentionEveryone[33]).ApplicationCommandOptionType.ATTACHMENT) {
      let success;
      if (optionStates[type.name].lastValidationResult != null) {
        success = lastValidationResult.success;
      }
      if (success) {
        const result = callback(canMentionEveryone[42]).openCommandAttachmentPreview(applicationCommandManager, channel.id, type.name);
        const tmpResult = callback(canMentionEveryone[42]);
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
  callback4 = obj3.useCallback((type) => {
    if (type.type === scaledTextLineHeight.GLOBAL) {
      if ("gameMentionInput" === type.inlineAutocompleteType) {
        type = tmp.GAME_MENTION;
      }
      let obj = callback(canMentionEveryone[37]);
      obj = { selectionType: null, stickerId: null, gameId: null };
      obj[0] = type;
      let id = null;
      if (type.type === tmp.STICKER) {
        id = type.sticker.id;
      }
      obj[1] = id;
      let id1 = null;
      if (type.type === tmp.GAME_MENTION) {
        id1 = type.game.id;
      }
      obj[2] = id1;
      const merged = Object.assign(callback1());
      const result = obj.iOSTrackAutocompleteSelect(autocompleteType, channel, obj);
      let num = autocompleteSelectionStart;
      if (autocompleteSelectionStart == null) {
        num = 0;
      }
      callback2(type, num, showOptionValuesPicker);
    }
    type = type.type;
  }, items21);
  const tmp10Result4 = keyboardType(obj3.useState(null), 2);
  first4 = tmp10Result4[0];
  closure_58 = tmp10Result4[1];
  const items22 = [autocompleteType, callback4, first4, channel, activeCommand];
  const callback5 = obj3.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (scaledTextLineHeight.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj.guildId = channel.guild_id;
      obj.onPress = function onPress() {
        return closure_1_56(item);
      };
      return callback3(channel(canMentionEveryone[17]).User, obj);
    } else if (tmp.GLOBAL === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj.onPress = function onPress() {
        return closure_1_56(item);
      };
      return callback3(channel(canMentionEveryone[17]).Global, obj);
    } else if (tmp.ROLE === type) {
      obj1 = {};
      const merged2 = Object.assign(item);
      obj1.onPress = function onPress() {
        return closure_1_56(item);
      };
      let tmp59 = autocompleteType === selectionStart.MENTIONS;
      if (tmp59) {
        tmp59 = null == activeCommand;
      }
      obj1.showDescription = tmp59;
      return callback3(channel(canMentionEveryone[17]).Role, obj1);
    } else if (tmp.CHANNEL === type) {
      const obj2 = {};
      const merged3 = Object.assign(item);
      obj2.onPress = function onPress() {
        return closure_1_56(item);
      };
      return callback3(channel(canMentionEveryone[17]).Channel, obj2);
    } else if (tmp.EMOJI === type) {
      const obj3 = {};
      const merged4 = Object.assign(item);
      obj3.onPress = function onPress() {
        return closure_1_56(item);
      };
      return callback3(channel(canMentionEveryone[17]).Emoji, obj3);
    } else if (tmp.EMOJI_PREMIUM_UPSELL === type) {
      const obj4 = {};
      const merged5 = Object.assign(item);
      obj4.onPress = function onPress() {
        return closure_1_56(item);
      };
      return callback3(channel(canMentionEveryone[17]).EmojiPremiumUpsell, obj4);
    } else if (tmp.CHOICE === type) {
      const obj5 = {};
      const merged6 = Object.assign(item);
      obj5.onPress = function onPress() {
        return closure_1_56(item);
      };
      return callback3(channel(canMentionEveryone[17]).Choice, obj5);
    } else if (tmp.CHOICE_LOADING === type) {
      return callback3(channel(canMentionEveryone[17]).ChoiceLoading, {});
    } else if (tmp.STICKER === type) {
      const obj6 = {};
      const merged7 = Object.assign(item);
      obj6.onPress = function onPress() {
        return closure_1_56(item);
      };
      obj6.onLongPress = function onLongPress() {
        return closure_1_58(item.sticker.id);
      };
      obj6.isInteracting = first4 === item.sticker.id;
      const _HermesInternal = HermesInternal;
      return callback3(channel(canMentionEveryone[17]).Sticker, obj6, "" + item.sticker.id + "-" + first4 === item.sticker.id);
    } else if (tmp.GAME_MENTION === type) {
      const obj7 = {};
      const merged8 = Object.assign(item);
      obj7.onPress = function onPress() {
        return closure_1_56(item);
      };
      return callback3(channel(canMentionEveryone[17]).Game, obj7);
    } else if (tmp.LABEL === type) {
      obj = {};
      const merged9 = Object.assign(item);
      return callback3(channel(canMentionEveryone[17]).Label, obj);
    } else {
      return null;
    }
  }, items22);
  const items23 = [tmp62Result.autocomplete, { maxHeight: memo3 }];
  const items24 = [tmp62Result.autocompleteWrapper, , ];
  let autocompleteWrapperAbsolute = !isAndroidResult;
  if (!isAndroidResult) {
    autocompleteWrapperAbsolute = tmp62Result.autocompleteWrapperAbsolute;
  }
  obj = { style: items24, children: null };
  items24[1] = autocompleteWrapperAbsolute;
  items24[2] = memo5;
  obj = { style: items25, children: null };
  items25 = [tmp62Result.autocompleteContainer, channel(canMentionEveryone[40])(memo4, screenIndex)];
  let tmp77Result1 = null != autocompleteType;
  if (tmp77Result1) {
    let tmp79Result = autocompleteType === selectionStart.SLASHES_DISCOVERY;
    if (tmp79Result) {
      obj1 = { channel: null, onPressSlashItem: null, onHeightChange: null, canOnlyUseTextCommands: null };
      obj1[0] = channel;
      obj1[1] = function onPressSlashItem(command, section, visualSection) {
        let num = autocompleteSelectionStart;
        if (autocompleteSelectionStart == null) {
          num = 0;
        }
        callback2({ command, section, type: scaledTextLineHeight.SLASH, visualSection, location: callback(canMentionEveryone[45]).ApplicationCommandTriggerLocations.DISCOVERY }, num);
      };
      obj1[2] = tmp54;
      obj1[3] = canOnlyUseTextCommands;
      tmp79Result = tmp79(tmp4(tmp2[44]), obj1);
    }
    const items26 = [tmp79Result, , , , ];
    tmp79Result = autocompleteType === tmp82.SLASHES;
    if (tmp79Result) {
      obj2 = { channel: null, query: null, onPressCommandItem: null, style: null, ItemSeparatorComponent: null, getItemLayout: null, onCommandsChange: null };
      obj2[0] = channel;
      let str = query;
      if (query == null) {
        str = "";
      }
      obj2[1] = str;
      obj2[2] = function onPressCommandItem(command) {
        let num = autocompleteSelectionStart;
        if (autocompleteSelectionStart == null) {
          num = 0;
        }
        callback2({ command, section: arg1, type: scaledTextLineHeight.SLASH, location: callback(canMentionEveryone[45]).ApplicationCommandTriggerLocations.DISCOVERY, query }, num);
      };
      obj2[3] = items23;
      obj2[4] = tmp(tmp2[29]).getItemSeparator;
      obj2[5] = tmp(tmp2[29]).getItemLayout;
      obj2[6] = function onCommandsChange(arg0) {
        let num = 0;
        if (0 !== arg0) {
          if (context) {
            num = arg0 * token + (arg0 - 1) * anchor;
          }
        }
        closure_49(num);
      };
      tmp79Result = tmp79(tmp4(tmp2[46]), obj2);
      const tmp4Result = tmp4(tmp2[46]);
    }
    items26[1] = tmp79Result;
    let tmp77Result = autocompleteType === tmp82.EMOJIS_AND_STICKERS;
    if (tmp77Result) {
      tmp77Result = hasStickerResults;
      if (hasStickerResults) {
        obj3 = { children: null };
        obj4 = { style: null, children: null };
        const items27 = [tmp62Result.sectionTitle, ];
        obj5 = { height: null };
        obj5[0] = scaledTextLineHeight;
        items27[1] = obj5;
        obj4[0] = items27;
        let obj6 = { variant: null, children: null };
        obj6[0] = tmp6;
        const intl = tmp(tmp2[48]).intl;
        let obj7 = { prefix: null };
        obj7[0] = query;
        obj6[1] = intl.format(tmp(tmp2[48]).t.uferGG, obj7);
        obj4[1] = tmp79(tmp(tmp2[47]).Text, obj6);
        const items28 = [tmp79(tmp78, obj4), ];
        const obj8 = { horizontal: true, style: null, keyExtractor: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, getItemLayout: null, contentInset: null };
        const obj9 = {};
        let merged = Object.assign(items23);
        let merged1 = Object.assign(tmp62Result.stickersAutocompleteList);
        obj8[1] = obj9;
        obj8[2] = function keyExtractor(sticker) {
          return sticker.sticker.id;
        };
        obj8[3] = stickerResults;
        obj8[4] = callback5;
        obj8[6] = closure_31;
        obj8[7] = { right: 12 };
        items28[1] = tmp79(chatInputRef, obj8);
        obj3[0] = items28;
        tmp77Result = tmp77(tmp81, obj3);
      }
      const items29 = [tmp77Result, , ];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        const obj10 = { style: null };
        obj10[0] = tmp62Result.sectionDivider;
        hasStickerResults = tmp79(tmp4(tmp2[49]), obj10);
      }
      items29[1] = hasStickerResults;
      if (hasNonStickerResults) {
        const obj11 = { style: null, children: null };
        const items30 = [tmp62Result.sectionTitle, ];
        const obj12 = { height: null };
        obj12[0] = scaledTextLineHeight;
        items30[1] = obj12;
        obj11[0] = items30;
        const obj13 = { variant: null, children: null };
        obj13[0] = tmp6;
        const intl2 = tmp(tmp2[48]).intl;
        const obj14 = { prefix: null };
        let _HermesInternal = HermesInternal;
        obj14[0] = "" + memo + query;
        obj13[1] = intl2.format(tmp(tmp2[48]).t.ksAVYt, obj14);
        obj11[1] = tmp79(tmp(tmp2[47]).Text, obj13);
        hasNonStickerResults = tmp79(tmp78, obj11);
      }
      const obj15 = { children: null };
      items29[2] = hasNonStickerResults;
      obj15[0] = items29;
      tmp77Result = tmp77(tmp81, obj15);
    }
    items26[2] = tmp77Result;
    let tmp79Result1 = autocompleteType === tmp82.GAME_MENTIONS;
    if (tmp79Result1) {
      const obj16 = { onLayout: null, children: null };
      obj16[0] = function onLayout(nativeEvent) {
        return _undefined2(nativeEvent.nativeEvent.layout.height);
      };
      obj16[1] = tmp79(tmp4(tmp2[50]), {});
      tmp79Result1 = tmp79(tmp78, obj16);
    }
    const obj17 = { children: null };
    items26[3] = tmp79Result1;
    const obj18 = { style: null, keyExtractor: null, data: null, renderItem: null, ItemSeparatorComponent: null, getItemLayout: null, onContentSizeChange: null };
    obj18[0] = items23;
    obj18[1] = function keyExtractor(arg0, arg1) {
      return String(arg1);
    };
    obj18[2] = nonStickerResults;
    obj18[3] = callback5;
    obj18[4] = tmp(tmp2[29]).getItemSeparator;
    obj18[5] = tmp(tmp2[29]).getItemLayout;
    obj18[6] = function onContentSizeChange(arg0, arg1) {
      return callback4(arg1);
    };
    items26[4] = tmp79(chatInputRef, obj18);
    obj17[0] = items26;
    tmp77Result1 = tmp77(tmp81, obj17);
  }
  obj[1] = tmp77Result1;
  const items31 = [closure_25(channel(canMentionEveryone[43]).View, obj), ];
  let tmp79Result2 = null != activeCommand && !commandsDisabled;
  if (tmp79Result2) {
    const obj19 = { style: null, children: null };
    obj19[0] = memo6;
    const obj20 = { command: null, section: null, guildId: null, onPressOption: null, currentOption: null, optionStates: null };
    obj20[0] = activeCommand;
    obj20[1] = stateFromStoresObject.activeSection;
    obj20[2] = channel.guild_id;
    obj20[3] = callback3;
    obj20[4] = activeOption;
    obj20[5] = optionStates;
    obj19[1] = tmp79(tmp4(tmp2[51]), obj20);
    tmp79Result2 = tmp79(tmp78, obj19);
  }
  items31[1] = tmp79Result2;
  obj[1] = items31;
  const tmp70 = channel(canMentionEveryone[40])(memo4, screenIndex);
  return closure_25(commandsDisabled, { style: tmp62Result.autocompletePositionRelative, children: setting1(commandsDisabled, obj) });
});
forwardRefResult.displayName = "AutocompleteWrapper";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("set").fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default memoResult;