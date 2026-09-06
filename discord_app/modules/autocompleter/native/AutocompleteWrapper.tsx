// === Module 12385: getStickersItemLayout ===

// Module 12385 (getStickersItemLayout)
import ThemesDefault from "Themes" /* 576 */;
import set from "set" /* 1115 */;
import AutocompleteLabel from "AutocompleteLabel" /* 12386 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "handleInit" /* 7780 */;
import closure_8 from "getEmojiToGroupId" /* 5459 */;
import closure_9 from "_handleConnectionOpen" /* 5277 */;
import closure_10 from "loadSavedGuildStickers" /* 5502 */;
import ME from "ME" /* 1074 */;
import { BOOLEAN_CHOICES } from "TRUE_OPTION_NAME" /* 4999 */;
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT" /* 10263 */;
import regExp from "regExp" /* 5000 */;
import { AutocompleteTypes } from "AutocompleteTypes" /* 10424 */;
import { EmojiInteractionPoint } from "set" /* 1374 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

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
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20, COMMAND_SENTINEL: closure_21, GAME_MENTION_INPUT_PREFIX: closure_22, TIMESTAMP_MENTION_INPUT_PREFIX: closure_23 } = regExp);
({ jsx: closure_26, Fragment: closure_27, jsxs: closure_28 } = jsxProd);
let c29 = "text-sm/semibold";
const hairlineWidth = StyleSheet.hairlineWidth;
let c31 = 200;
let closure_32 = { allowSpaces: true, maxQueryLength: 64 };
let closure_33 = createCacheKey.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  let obj = { autocompletePositionRelative: { position: "relative" }, autocompleteWrapper: null, autocompleteContainer: null, autocomplete: null, sectionDivider: null, sectionTitle: null, stickersAutocompleteList: null };
  obj1 = set;
  let str = "absolute";
  if (obj1.isAndroid()) {
    str = "relative";
  }
  obj[1] = { position: str, marginHorizontal, marginBottom };
  obj = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  obj[2] = obj;
  obj = { flexGrow: 0, flexShrink: 1, backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj[3] = obj;
  obj1 = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  obj[4] = obj1;
  obj[5] = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  const obj2 = { backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  obj[6] = { paddingLeft: 12 - AutocompleteLabel.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: AutocompleteLabel.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  return obj;
});
let closure_35 = { resultCount: 0, stickerResults: [], nonStickerResults: [], hasStickerResults: false, hasNonStickerResults: false };
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
  c25 = undefined;
  let setting1;
  setting1 = undefined;
  let anchor;
  let beginSearch;
  let enabled;
  let anchor2;
  let beginSearch2;
  closure_33 = undefined;
  let setData;
  let autocompleteType;
  let query;
  let queryOptions;
  let autocompleteSelectionStart;
  let showOptionValuesPicker;
  c40 = undefined;
  c41 = undefined;
  let first2;
  closure_43 = undefined;
  closure_44 = undefined;
  let timestampSearchHeaderHeight;
  let callback;
  let callback1;
  let memo2;
  closure_49 = undefined;
  closure_50 = undefined;
  let diff1;
  let memo3;
  let first3;
  closure_54 = undefined;
  closure_55 = undefined;
  let token5;
  let callback2;
  let callback4;
  let first4;
  closure_60 = undefined;
  let tmp = _require;
  ({ canOnlyUseTextCommands, screenIndex } = analyticsLocations);
  let obj = _require(canMentionEveryone[23]);
  let items = [optionStates];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ optionStates: optionStates.getOptionStates(channel.id), activeOption: optionStates.getActiveOption(channel.id), activeCommand: optionStates.getActiveCommand(channel.id), activeSection: optionStates.getActiveCommandSection(channel.id) }));
  optionStates = stateFromStoresObject.optionStates;
  activeOption = stateFromStoresObject.activeOption;
  activeCommand = stateFromStoresObject.activeCommand;
  obj1 = _require(canMentionEveryone[24]);
  token = obj1.useToken(channel(canMentionEveryone[18]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj2 = _require(canMentionEveryone[25]);
  scaledTextLineHeight = obj2.useScaledTextLineHeight(beginSearch);
  let obj3 = _require(canMentionEveryone[27]);
  timestampSearchHeaderHeight = obj3.useTimestampSearchHeaderHeight();
  const IncludeStickersInAutocomplete = _require(canMentionEveryone[28]).IncludeStickersInAutocomplete;
  setting = IncludeStickersInAutocomplete.getSetting();
  let obj4 = onChangeAutoCompleteVisibility;
  const tmp12 = keyboardType(onChangeAutoCompleteVisibility.useState(autocompleteType), 2);
  const first = tmp12[0];
  resultCount = first.resultCount;
  stickerResults = first.stickerResults;
  nonStickerResults = first.nonStickerResults;
  hasStickerResults = first.hasStickerResults;
  hasNonStickerResults = first.hasNonStickerResults;
  closure_18 = tmp12[1];
  let obj5 = _require(canMentionEveryone[23]);
  let items1 = [activeOption];
  const stateFromStores = obj5.useStateFromStores(items1, () => activeOption.loadState);
  let obj6 = _require(canMentionEveryone[23]);
  const items2 = [token];
  const stateFromStores1 = obj6.useStateFromStores(items2, () => token.loadState);
  context = onChangeAutoCompleteVisibility.useContext(_require(canMentionEveryone[29]).RedesignCompatContext);
  const items3 = [channel, setting];
  memo = onChangeAutoCompleteVisibility.useMemo(() => callback(canMentionEveryone[30]).getAutocompleteOptions(channel, true, setting), items3);
  let tmp18 = keyboardType(onChangeAutoCompleteVisibility.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }), 2);
  const first1 = tmp18[0];
  focused = first1.focused;
  let text = first1.text;
  c22 = text;
  selectionStart = first1.selectionStart;
  selectionEnd = first1.selectionEnd;
  let tmp8 = channel(canMentionEveryone[26])();
  [tmp21, c25] = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const IncludeGameMentionsInAutocomplete = _require(canMentionEveryone[28]).IncludeGameMentionsInAutocomplete;
  setting1 = IncludeGameMentionsInAutocomplete.getSetting();
  const tmp23 = channel(canMentionEveryone[31])(text, selectionEnd, setting1, c22);
  anchor = tmp23.anchor;
  beginSearch = tmp23.beginSearch;
  const TimestampAutocompleteMobileExperiment = _require(canMentionEveryone[32]).TimestampAutocompleteMobileExperiment;
  enabled = TimestampAutocompleteMobileExperiment.getConfig({ location: "AutocompleteWrapper timestamp search" }).enabled;
  const tmp24 = channel(canMentionEveryone[31])(text, selectionEnd, enabled, selectionStart, beginSearch2);
  anchor2 = tmp24.anchor;
  beginSearch2 = tmp24.beginSearch;
  closure_33 = onChangeAutoCompleteVisibility.useRef({ text: "", selectionEnd: 0 });
  const items4 = [activeOption, beginSearch, beginSearch2, chatInputRef, setting1, anchor, enabled, anchor2, selectionEnd, selectionStart, text];
  const effect = onChangeAutoCompleteVisibility.useEffect(() => {
    const text = closure_33.current.text;
    selectionEnd = closure_33.current.selectionEnd;
    closure_33.current.text = _undefined;
    closure_33.current.selectionEnd = selectionEnd;
    if (_undefined.length >= 6) {
      if (null == activeOption) {
        if (selectionStart === tmp2) {
          if (" " === tmp[tmp2 - 1]) {
            const result = callback(canMentionEveryone[33]).findAutoInsertOnSpaceToken(tmp, tmp2, closure_18);
            if (null != result) {
              const result1 = channel(tmp34[34]).findAutoInsertOnSpaceMentionInlineAutocompleteType(result.trigger);
              if ("gameMentionInput" === result1) {
                if (setting1) {
                  if (null == anchor) {
                    let tmp33Result = tmp33(tmp34[33]);
                    if (tmp33Result.isSpaceJustTypedAtCaret(text, selectionEnd, tmp, tmp2)) {
                      const current2 = chatInputRef.current;
                      current2.insertText(_undefined, result.tokenStart, false, undefined, tmp2);
                      beginSearch(result.tokenStart);
                    }
                  }
                }
              } else if ("timestampMentionInput" === result1) {
                if (enabled) {
                  if (null == anchor2) {
                    tmp33Result = tmp33(tmp34[33]);
                    if (tmp33Result.isSpaceJustTypedAtCaret(text, selectionEnd, tmp, tmp2)) {
                      const current = chatInputRef.current;
                      current.insertText(selectionStart, result.tokenStart, false, undefined, tmp2);
                      beginSearch2(result.tokenStart);
                    }
                  }
                }
              }
              const obj4 = channel(tmp34[34]);
            }
            const obj3 = callback(canMentionEveryone[33]);
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
          const result = callback(closure_1_2[35]).initiateEmojiInteraction(closure_1_25.AutocompleteWrapperShown);
          flag = false;
          const obj = callback(closure_1_2[35]);
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
  const items5 = [setData];
  const imperativeHandle = onChangeAutoCompleteVisibility.useImperativeHandle(ref, () => ({ setChatInputHeight: c25, setData }), items5);
  const items6 = [selectionStart, selectionEnd, text, activeCommand, optionStates, activeOption, canMentionEveryone, commandsDisabled, memo, stateFromStores, stateFromStores1, setting1, anchor, anchor2];
  const memo1 = onChangeAutoCompleteVisibility.useMemo(() => {
    canMentionEveryone = selectionStart;
    if (null != _undefined) {
      if (0 !== str.trim().length) {
        if (null != activeOption) {
          obj1 = callback(canMentionEveryone[37]);
          let applicationCommandOptionQueryOptions = obj1.getApplicationCommandOptionQueryOptions(tmp78);
        } else {
          applicationCommandOptionQueryOptions = { canMentionEveryone: null, canMentionHere: null, canMentionChannels: true, canMentionUsers: true, canMentionRoles: true, canMentionAnyGuildUser: false, canMentionNonMentionableRoles: false, canMentionOtherGlobals: true };
          applicationCommandOptionQueryOptions[0] = canMentionEveryone;
          applicationCommandOptionQueryOptions[1] = canMentionEveryone;
        }
        let tmp5;
        if (null != activeOption) {
          tmp5 = optionStates[tmp78.name];
        }
        if (null != activeCommand) {
          if (null != tmp78) {
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
              if (null == tmp78.choices) {
                if (!tmp78.autocomplete) {
                  const type = tmp78.type;
                  if (callback(canMentionEveryone[38]).ApplicationCommandOptionType.BOOLEAN === type) {
                    let prefix = "";
                    let CHOICES = selectionEnd.CHOICES;
                    let choices = nonStickerResults;
                    let flag = true;
                    let str2 = "";
                  } else if (callback(canMentionEveryone[38]).ApplicationCommandOptionType.CHANNEL === type) {
                    prefix = context;
                    CHOICES = selectionEnd.CHANNELS;
                    const channelTypes = tmp78.channelTypes;
                    flag = true;
                    str2 = context;
                  } else {
                    if (callback(canMentionEveryone[38]).ApplicationCommandOptionType.ROLE !== type) {
                      if (callback(canMentionEveryone[38]).ApplicationCommandOptionType.USER !== type) {
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
                  let tmp71 = substr;
                  if (startsWithResult) {
                    let str8 = "";
                    if (substr.length > str2.length) {
                      str8 = substr.substring(str2.length);
                    }
                    query = str8;
                    tmp71 = str8;
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
                  obj[0] = tmp71;
                  obj[1] = CHOICES;
                  obj[2] = num + num2;
                  obj1 = { activeCommand: null, optionValues: null, isActiveApplicationCommand: null, option: null, choices: null, channelTypes: null };
                  obj1[0] = tmp7;
                  obj1[1] = obj;
                  obj1[2] = flag;
                  obj1[3] = tmp78;
                  obj1[4] = choices;
                  obj1[5] = channelTypes;
                  const merged = Object.assign(applicationCommandOptionQueryOptions);
                  obj[3] = obj1;
                  obj[4] = flag;
                  return obj;
                }
              }
              prefix = "";
              CHOICES = selectionEnd.CHOICES;
              choices = tmp78.choices;
              flag = true;
              str2 = "";
            }
          }
        }
        if (setting1) {
          if (null != anchor) {
            let obj2 = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
            obj2[0] = str.slice(tmp24 + _undefined.length, selectionEnd).toLowerCase();
            obj2[1] = selectionEnd.GAME_MENTIONS;
            obj2[2] = tmp24;
            let obj3 = {};
            const merged1 = Object.assign(applicationCommandOptionQueryOptions);
            obj2[3] = obj3;
            return obj2;
          }
        }
        if (null != anchor2) {
          if (null == tmp7) {
            let obj4 = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
            obj4[0] = str.slice(tmp25 + selectionStart.length, selectionEnd);
            obj4[1] = selectionEnd.TIMESTAMPS;
            obj4[2] = tmp25;
            let obj5 = {};
            const merged2 = Object.assign(applicationCommandOptionQueryOptions);
            obj4[3] = obj5;
            return obj4;
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
        let tmp29 = tmp;
        while (true) {
          let tmp30 = callback;
          let tmp31 = canMentionEveryone;
          obj2 = callback(canMentionEveryone[39]);
          let arr = _undefined;
          let tmp33 = tmp29;
          let tmp34 = tmp8;
          let tmp35 = tmp9;
          let num5 = sum;
          let result = obj2.isAutocompleteSeparatingBoundary(_undefined, tmp29);
          if (tmp28) {
            num5 = 0;
          }
          if (tmp29 === num5) {
            let tmp37 = selectionEnd;
            let substr1 = arr.slice(tmp29, selectionEnd);
            let tmp39 = callback;
            let tmp40 = canMentionEveryone;
            obj3 = callback(canMentionEveryone[33]);
            prefix = obj3.getPrefix(substr1);
            let tmp42 = callback;
            let tmp43 = canMentionEveryone;
            obj4 = callback(canMentionEveryone[33]);
            query = obj4.getQuery(substr1);
            if (null != query) {
              let tmp45 = focused;
              if (prefix !== focused) {
                let tmp46 = setting;
                let tmp47 = tmp29;
                let tmp48 = query;
                if (setting.test(query)) {
                  break;
                }
              }
              let tmp51 = selectionEnd;
              let tmp52 = tmp48;
              if (tmp35 === selectionEnd.SLASHES) {
                let tmp53 = callback;
                let tmp54 = canMentionEveryone;
                obj5 = callback(canMentionEveryone[40]);
                let str5 = tmp48;
                if (tmp48 == null) {
                  str5 = "";
                }
                let text = obj5.getTextBeforeFirstOption(str5).text;
                query = text;
                tmp52 = text;
              }
              let obj6 = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
              obj6[0] = tmp52;
              obj6[1] = tmp35;
              obj6[2] = tmp47;
              let obj7 = {};
              let tmp55 = obj7;
              let tmp56 = applicationCommandOptionQueryOptions;
              let merged3 = Object.assign(applicationCommandOptionQueryOptions);
              obj6[3] = obj7;
              return obj6;
            }
            let _Object = Object;
            let tmp49 = memo;
            let keys = Object.keys(memo);
            let found = keys.find((arg0) => {
              let tmp = arg0 !== selectionEnd.SLASHES && arg0 !== selectionEnd.SLASHES_DISCOVERY;
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
            tmp34 = query;
            tmp47 = tmp29;
            tmp48 = query;
            tmp35 = found;
            if (null != found) {
              break;
            }
          } else {
            found = tmp35;
          }
          let diff = tmp29 - 1;
          canMentionEveryone = diff;
          let num6 = sum;
          if (tmp28) {
            num6 = 0;
          }
          tmp29 = diff;
          tmp8 = tmp34;
          tmp9 = found;
          tmp48 = tmp34;
          tmp35 = found;
          tmp47 = diff;
          if (diff < num6) {
            break;
          }
        }
      }
    }
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items6);
  autocompleteType = memo1.autocompleteType;
  query = memo1.query;
  queryOptions = memo1.queryOptions;
  autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  showOptionValuesPicker = memo1.showOptionValuesPicker;
  _require = undefined;
  let tmp29 = keyboardType(onChangeAutoCompleteVisibility.useState(null), 2);
  _require = tmp30;
  let tmp31 = keyboardType(onChangeAutoCompleteVisibility.useState(autocompleteType), 2);
  if (tmp31[0] !== autocompleteType) {
    tmp31[1](autocompleteType);
    tmp30(null);
  }
  const items7 = [
    tmp29[0],
    obj4.useCallback((arg0) => {
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
  let tmp11Result = tmp11(items7, 2);
  [tmp35, c40] = tmp11Result;
  _require = undefined;
  tmp11Result = tmp11(obj4.useState(null), 2);
  _require = tmp37;
  const tmp11Result1 = keyboardType(obj4.useState(autocompleteType), 2);
  if (tmp11Result1[0] !== autocompleteType) {
    tmp11Result1[1](autocompleteType);
    tmp37(null);
  }
  const items8 = [
    tmp11Result[0],
    obj4.useCallback((arg0) => {
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
  const tmp20 = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  [tmp42, c41] = keyboardType(items8, 2);
  _require = undefined;
  const tmp11Result3 = keyboardType(obj4.useState(null), 2);
  _require = tmp44;
  const tmp11Result4 = keyboardType(obj4.useState(autocompleteType), 2);
  if (tmp11Result4[0] !== autocompleteType) {
    tmp11Result4[1](autocompleteType);
    tmp44(null);
  }
  const items9 = [
    tmp11Result3[0],
    obj4.useCallback((arg0) => {
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
  const tmp11Result5 = keyboardType(items9, 2);
  first2 = tmp11Result5[0];
  closure_43 = tmp11Result5[1];
  closure_44 = tmp35;
  timestampSearchHeaderHeight = tmp42;
  const items10 = [anchor2];
  const effect2 = obj4.useEffect(() => {
    if (null != anchor2) {
      callback(canMentionEveryone[14]).runAfterInteractions(callback(canMentionEveryone[15]).preloadTimestampParser);
      const obj = callback(canMentionEveryone[14]);
    }
  }, items10);
  const items11 = [autocompleteType, query, queryOptions, memo];
  callback = obj4.useCallback((arg0) => {
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
  }, items11);
  const items12 = [autocompleteType, callback, memo];
  const effect3 = obj4.useEffect(() => {
    let tmp2 = null;
    if (null != autocompleteType) {
      let stores;
      if (memo != null) {
        stores = memo[tmp].stores;
      }
      tmp2 = stores;
    }
    if (null != tmp2) {
      const batchedStoreListener = new callback(canMentionEveryone[23]).BatchedStoreListener(tmp2, () => callback(false));
      batchedStoreListener.attach("AutocompleteWrapper");
      return () => batchedStoreListener.detach();
    }
  }, items12);
  const items13 = [callback];
  const effect4 = obj4.useEffect(() => {
    callback(true);
  }, items13);
  const items14 = [stickerResults, nonStickerResults];
  callback1 = obj4.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length }), items14);
  const items15 = [autocompleteType, focused, keyboardType, resultCount];
  memo2 = obj4.useMemo(() => {
    let tmp = resultCount > 0;
    if (!tmp) {
      tmp = autocompleteType === selectionEnd.SLASHES || tmp2 === selectionEnd.SLASHES_DISCOVERY;
      const tmp3 = autocompleteType === selectionEnd.SLASHES || tmp2 === selectionEnd.SLASHES_DISCOVERY;
    }
    if (!tmp) {
      tmp = autocompleteType === selectionEnd.GAME_MENTIONS;
    }
    if (!tmp) {
      tmp = autocompleteType === selectionEnd.TIMESTAMPS;
    }
    let tmp9 = focused;
    if (focused) {
      tmp9 = tmp;
    }
    if (tmp9) {
      tmp9 = keyboardType === callback(canMentionEveryone[41]).KeyboardTypes.SYSTEM;
    }
    return tmp9;
  }, items15);
  closure_49 = obj4.useRef(false);
  const items16 = [autocompleteType, activeCommand];
  const effect5 = obj4.useEffect(() => {
    let tmp4 = autocompleteType === selectionEnd.SLASHES;
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
        callback(canMentionEveryone[42]).trackWithMetadata(resultCount.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "slash_ui" });
        const obj = callback(canMentionEveryone[42]);
      }
    }
  }, items16);
  closure_50 = obj4.useRef(null);
  const items17 = [onChangeAutoCompleteVisibility, activeCommand, memo2, autocompleteType, channel, callback1, setting1];
  const effect6 = obj4.useEffect(() => {
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
        let obj = callback(canMentionEveryone[43]);
        obj = {};
        const merged = Object.assign(callback1());
        let tmp17;
        if (tmp8 === selectionEnd.MENTIONS) {
          tmp17 = setting1;
        }
        obj.gameMentionsAvailable = tmp17;
        const result = obj.iOSTrackAutocompleteOpen(tmp8, tmp7, obj);
      }
      tmp7 = channel;
    } else {
      ref2.current = null;
    }
  }, items17);
  const tmp11Result2 = keyboardType(items8, 2);
  const insets = tmp4(tmp2[21])({ includeKeyboardHeight: true }).insets;
  let diff = channel(canMentionEveryone[20])({ ignoreKeyboard: true }).height - insets.top - insets.bottom;
  diff1 = diff - tmp(tmp2[22]).NAV_BAR_HEIGHT - tmp21;
  const items18 = [autocompleteType, stickerResults.length, diff1, scaledTextLineHeight, tmp35, tmp42];
  memo3 = obj4.useMemo(() => {
    const sum = scaledTextLineHeight + 24;
    const sum1 = anchor2 + sum;
    if (stickerResults.length > 0) {
      let sum2 = sum1 + sum + callback(canMentionEveryone[19]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + enabled;
    } else {
      sum2 = sum1;
      if (autocompleteType !== selectionEnd.EMOJIS_AND_STICKERS) {
        if (tmp4 === tmp5.GAME_MENTIONS) {
          let sum3 = tmp2 + closure_44;
        } else if (tmp4 === tmp5.TIMESTAMPS) {
          sum3 = tmp2 + timestampSearchHeaderHeight;
        } else {
          sum3 = tmp2;
        }
      }
    }
    return Math.min(diff1, sum2);
  }, items18);
  const tmp11Result6 = keyboardType(obj4.useState(null), 2);
  first3 = tmp11Result6[0];
  closure_54 = tmp64;
  const items19 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, nonStickerResults.length, memo3, first3, tmp42, context, token, scaledTextLineHeight, tmp35, first2];
  const memo4 = obj4.useMemo(() => {
    if (autocompleteType === selectionEnd.EMOJIS_AND_STICKERS) {
      let num7 = 0;
      if (0 !== nonStickerResults.length) {
        if (context) {
          num7 = length * token + (length - 1) * enabled;
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
        sum2 = sum + (sum1 + callback(canMentionEveryone[19]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12);
      }
      if (tmp18) {
        tmp18 = tmp15;
      }
      let sum3 = sum2;
      if (tmp18) {
        sum3 = sum2 + enabled;
      }
      let num2 = sum3;
      tmp15 = hasNonStickerResults;
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
                  num4 = tmp5 * token + (tmp5 - 1) * enabled;
                }
              }
              tmp6 = num4;
            }
            num3 = tmp6;
          }
          if (tmp === tmp2.GAME_MENTIONS) {
            let sum4 = num3 + closure_44;
          } else {
            sum4 = num3;
            if (tmp === tmp2.TIMESTAMPS) {
              sum4 = num3 + timestampSearchHeaderHeight;
            }
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
  }, items19);
  closure_55 = tmp66;
  let tmpResult = tmp(tmp2[24]);
  const token1 = tmpResult.useToken(tmp4(tmp2[18]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
  tmpResult = tmp(tmp2[24]);
  const token2 = tmpResult.useToken(tmp4(tmp2[18]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  const tmp58 = channel(canMentionEveryone[20])({ ignoreKeyboard: true });
  const token3 = tmp(canMentionEveryone[24]).useToken(tmp4(tmp2[18]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
  const tmpResult1 = tmp(canMentionEveryone[24]);
  const token4 = tmp(canMentionEveryone[24]).useToken(tmp4(tmp2[18]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
  const tmpResult2 = tmp(canMentionEveryone[24]);
  token5 = tmp(canMentionEveryone[24]).useToken(tmp4(tmp2[18]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
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
  const tmp72Result = closure_33(token1, num, num2, token4, num3);
  const tmp72 = closure_33;
  const tmpResult3 = tmp(canMentionEveryone[24]);
  let prop = null;
  if (tmpResult4.isIOS()) {
    prop = tmp72Result.autocompletePositionRelative;
  }
  const items20 = [memo4 > 0, token5];
  const memo5 = obj4.useMemo(() => {
    let tmp;
    if (closure_55) {
      const obj = { marginTop: null };
      obj[0] = token5;
      tmp = obj;
    }
    return tmp;
  }, items20);
  const items21 = [analyticsLocations, beginSearch, beginSearch2, channel, chatInputRef];
  tmpResult4 = tmp(canMentionEveryone[17]);
  callback2 = obj4.useCallback((type, tokenStart) => {
    if (type.type !== scaledTextLineHeight.EMOJI_PREMIUM_UPSELL) {
      if (type.type === tmp.GLOBAL) {
        if ("gameMentionInput" === type.inlineAutocompleteType) {
          const current5 = chatInputRef.current;
          current5.insertText(c22, tokenStart, false);
          beginSearch(tokenStart);
        }
      }
      if (type.type === tmp.GLOBAL) {
        if ("timestampMentionInput" === type.inlineAutocompleteType) {
          const current4 = chatInputRef.current;
          current4.insertText(selectionStart, tokenStart, false);
          beginSearch2(tokenStart);
        }
      }
      const autocompleteResultText = callback(canMentionEveryone[33]).getAutocompleteResultText(type, channel);
      const current = chatInputRef.current;
      const applicationCommandManager = current.getApplicationCommandManager();
      let tmp13;
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
        tmp13 = tmp17;
      }
      let tmp18 = autocompleteResultText;
      let tmp19 = tmp13;
      if (type.type === tmp.TIMESTAMP_MENTION) {
        tmp18 = autocompleteResultText;
        tmp19 = tmp13;
        if (null != applicationCommandManager) {
          const result = tmp8(tmp9[46]).formatTimestampMention(type.mention);
          tmp18 = autocompleteResultText;
          tmp19 = tmp13;
          if (null != result) {
            const addTimestampMentionResult = applicationCommandManager.addTimestampMention(result.formatted, type.mention);
            const items1 = [applicationCommandManager.buildTimestampMentionNode(addTimestampMentionResult)];
            tmp18 = addTimestampMentionResult;
            tmp19 = items1;
          }
          const tmp8Result = tmp8(tmp9[46]);
        }
      }
      let result1;
      if (applicationCommandManager != null) {
        result1 = applicationCommandManager.setAutoCompleteResult(tmp10.id, tmp18, arg2, type);
      }
      if (!result1) {
        const current2 = tmp12.current;
        current2.insertText(tmp18, tokenStart, type.type !== tmp.STICKER, tmp19);
        if (type.type === tmp.STICKER) {
          const current3 = tmp12.current;
          current3.handleSelectSticker(type.sticker, tokenStart);
        }
      }
      const obj3 = callback(canMentionEveryone[33]);
      tmp10 = channel;
      tmp8 = callback;
      tmp9 = canMentionEveryone;
    } else {
      let obj = channel(canMentionEveryone[45]);
      obj = { initialUpsellKey: null, analyticsLocations: null };
      obj[0] = stickerResults.EMOJI_AUTOCOMPLETE;
      obj[1] = callback;
      const result2 = obj.handleShowUpsellAlert(obj);
    }
  }, items21);
  const items22 = [chatInputRef, optionStates, channel];
  const items23 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
  const callback3 = obj4.useCallback((type) => {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (type.type === callback(canMentionEveryone[38]).ApplicationCommandOptionType.ATTACHMENT) {
      let success;
      if (optionStates[type.name].lastValidationResult != null) {
        success = lastValidationResult.success;
      }
      if (success) {
        const result = callback(canMentionEveryone[47]).openCommandAttachmentPreview(applicationCommandManager, channel.id, type.name);
        const tmpResult = callback(canMentionEveryone[47]);
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
  }, items22);
  callback4 = obj4.useCallback((type) => {
    if (type.type === scaledTextLineHeight.GLOBAL) {
      if ("gameMentionInput" === type.inlineAutocompleteType) {
        type = tmp.GAME_MENTION;
      }
      let obj = callback(canMentionEveryone[43]);
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
    if (type.type === scaledTextLineHeight.GLOBAL) {
      if ("timestampMentionInput" === type.inlineAutocompleteType) {
        type = tmp.TIMESTAMP_MENTION;
      }
    }
    type = type.type;
  }, items23);
  const tmp11Result7 = keyboardType(obj4.useState(null), 2);
  first4 = tmp11Result7[0];
  closure_60 = tmp11Result7[1];
  const items24 = [autocompleteType, callback4, first4, channel, activeCommand];
  const callback5 = obj4.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (scaledTextLineHeight.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj.guildId = channel.guild_id;
      obj.onPress = function onPress() {
        return closure_1_58(item);
      };
      return setting1(channel(canMentionEveryone[19]).User, obj);
    } else if (tmp.GLOBAL === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj.onPress = function onPress() {
        return closure_1_58(item);
      };
      return setting1(channel(canMentionEveryone[19]).Global, obj);
    } else if (tmp.ROLE === type) {
      obj1 = {};
      const merged2 = Object.assign(item);
      obj1.onPress = function onPress() {
        return closure_1_58(item);
      };
      let tmp65 = autocompleteType === selectionEnd.MENTIONS;
      if (tmp65) {
        tmp65 = null == activeCommand;
      }
      obj1.showDescription = tmp65;
      return setting1(channel(canMentionEveryone[19]).Role, obj1);
    } else if (tmp.CHANNEL === type) {
      const obj2 = {};
      const merged3 = Object.assign(item);
      obj2.onPress = function onPress() {
        return closure_1_58(item);
      };
      return setting1(channel(canMentionEveryone[19]).Channel, obj2);
    } else if (tmp.EMOJI === type) {
      const obj3 = {};
      const merged4 = Object.assign(item);
      obj3.onPress = function onPress() {
        return closure_1_58(item);
      };
      return setting1(channel(canMentionEveryone[19]).Emoji, obj3);
    } else if (tmp.EMOJI_PREMIUM_UPSELL === type) {
      const obj4 = {};
      const merged5 = Object.assign(item);
      obj4.onPress = function onPress() {
        return closure_1_58(item);
      };
      return setting1(channel(canMentionEveryone[19]).EmojiPremiumUpsell, obj4);
    } else if (tmp.CHOICE === type) {
      const obj5 = {};
      const merged6 = Object.assign(item);
      obj5.onPress = function onPress() {
        return closure_1_58(item);
      };
      return setting1(channel(canMentionEveryone[19]).Choice, obj5);
    } else if (tmp.CHOICE_LOADING === type) {
      return setting1(channel(canMentionEveryone[19]).ChoiceLoading, {});
    } else if (tmp.STICKER === type) {
      const obj6 = {};
      const merged7 = Object.assign(item);
      obj6.onPress = function onPress() {
        return closure_1_58(item);
      };
      obj6.onLongPress = function onLongPress() {
        return closure_1_60(item.sticker.id);
      };
      obj6.isInteracting = first4 === item.sticker.id;
      const _HermesInternal = HermesInternal;
      return setting1(channel(canMentionEveryone[19]).Sticker, obj6, "" + item.sticker.id + "-" + first4 === item.sticker.id);
    } else if (tmp.GAME_MENTION === type) {
      const obj7 = {};
      const merged8 = Object.assign(item);
      obj7.onPress = function onPress() {
        return closure_1_58(item);
      };
      return setting1(channel(canMentionEveryone[19]).Game, obj7);
    } else if (tmp.TIMESTAMP_MENTION === type) {
      const obj8 = {};
      const merged9 = Object.assign(item);
      obj8.onPress = function onPress() {
        return closure_1_58(item);
      };
      return setting1(channel(canMentionEveryone[19]).Timestamp, obj8);
    } else if (tmp.LABEL === type) {
      obj = {};
      const merged10 = Object.assign(item);
      return setting1(channel(canMentionEveryone[19]).Label, obj);
    } else {
      return null;
    }
  }, items24);
  const items25 = [tmp72Result.autocomplete, { maxHeight: memo3 }];
  obj = { style: items26, children: null };
  items26 = [tmp72Result.autocompleteWrapper, prop];
  obj = { style: items27, children: null };
  items27 = [tmp72Result.autocompleteContainer, channel(canMentionEveryone[44])(memo4, screenIndex)];
  let tmp83Result1 = null != autocompleteType;
  if (tmp83Result1) {
    let tmp85Result = autocompleteType === selectionEnd.SLASHES_DISCOVERY;
    if (tmp85Result) {
      obj1 = { channel: null, onPressSlashItem: null, onHeightChange: null, canOnlyUseTextCommands: null };
      obj1[0] = channel;
      obj1[1] = function onPressSlashItem(command, section, visualSection) {
        let num = autocompleteSelectionStart;
        if (autocompleteSelectionStart == null) {
          num = 0;
        }
        callback2({ command, section, type: scaledTextLineHeight.SLASH, visualSection, location: callback(canMentionEveryone[50]).ApplicationCommandTriggerLocations.DISCOVERY }, num);
      };
      obj1[2] = tmp64;
      obj1[3] = canOnlyUseTextCommands;
      tmp85Result = tmp85(tmp4(tmp2[49]), obj1);
    }
    const items28 = [tmp85Result, , , , , ];
    tmp85Result = autocompleteType === tmp88.SLASHES;
    if (tmp85Result) {
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
        callback2({ command, section: arg1, type: scaledTextLineHeight.SLASH, location: callback(canMentionEveryone[50]).ApplicationCommandTriggerLocations.DISCOVERY, query }, num);
      };
      obj2[3] = items25;
      obj2[4] = tmp(tmp2[33]).getItemSeparator;
      obj2[5] = tmp(tmp2[33]).getItemLayout;
      obj2[6] = function onCommandsChange(arg0) {
        let num = 0;
        if (0 !== arg0) {
          if (context) {
            num = arg0 * token + (arg0 - 1) * enabled;
          }
        }
        closure_54(num);
      };
      tmp85Result = tmp85(tmp4(tmp2[51]), obj2);
      const tmp4Result = tmp4(tmp2[51]);
    }
    items28[1] = tmp85Result;
    let tmp83Result = autocompleteType === tmp88.EMOJIS_AND_STICKERS;
    if (tmp83Result) {
      tmp83Result = hasStickerResults;
      if (hasStickerResults) {
        obj3 = { children: null };
        obj4 = { style: null, children: null };
        const items29 = [tmp72Result.sectionTitle, ];
        obj5 = { height: null };
        obj5[0] = scaledTextLineHeight;
        items29[1] = obj5;
        obj4[0] = items29;
        obj6 = { variant: null, children: null };
        obj6[0] = tmp6;
        const intl = tmp(tmp2[53]).intl;
        let obj7 = { prefix: null };
        obj7[0] = query;
        obj6[1] = intl.format(tmp(tmp2[53]).t.uferGG, obj7);
        obj4[1] = tmp85(tmp(tmp2[52]).Text, obj6);
        const items30 = [tmp85(tmp84, obj4), ];
        let obj8 = { horizontal: true, style: null, keyExtractor: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, getItemLayout: null, contentInset: null };
        const obj9 = {};
        let merged = Object.assign(items25);
        let merged1 = Object.assign(tmp72Result.stickersAutocompleteList);
        obj8[1] = obj9;
        obj8[2] = function keyExtractor(sticker) {
          return sticker.sticker.id;
        };
        obj8[3] = stickerResults;
        obj8[4] = callback5;
        tmp = setData;
        obj8[6] = setData;
        obj8[7] = { right: 12 };
        items30[1] = tmp85(chatInputRef, obj8);
        obj3[0] = items30;
        tmp83Result = tmp83(tmp87, obj3);
      }
      const items31 = [tmp83Result, , ];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        const obj10 = { style: null };
        obj10[0] = tmp72Result.sectionDivider;
        hasStickerResults = tmp85(tmp4(tmp2[54]), obj10);
      }
      items31[1] = hasStickerResults;
      if (hasNonStickerResults) {
        const obj11 = { style: null, children: null };
        const items32 = [tmp72Result.sectionTitle, ];
        const obj12 = { height: null };
        obj12[0] = scaledTextLineHeight;
        items32[1] = obj12;
        obj11[0] = items32;
        const obj13 = { variant: null, children: null };
        obj13[0] = tmp6;
        const intl2 = tmp(tmp2[53]).intl;
        const obj14 = { prefix: null };
        tmp = memo;
        tmp = globalThis;
        let _HermesInternal = HermesInternal;
        obj14[0] = "" + memo + query;
        obj13[1] = intl2.format(tmp(tmp2[53]).t.ksAVYt, obj14);
        obj11[1] = tmp85(tmp(tmp2[52]).Text, obj13);
        hasNonStickerResults = tmp85(tmp84, obj11);
      }
      const obj15 = { children: null };
      items31[2] = hasNonStickerResults;
      obj15[0] = items31;
      tmp83Result = tmp83(tmp87, obj15);
    }
    items28[2] = tmp83Result;
    tmp = autocompleteType === tmp88.GAME_MENTIONS;
    if (tmp) {
      const obj16 = { onLayout: null, children: null };
      obj16[0] = function onLayout(nativeEvent) {
        return _undefined2(nativeEvent.nativeEvent.layout.height);
      };
      obj16[1] = tmp85(tmp4(tmp2[55]), {});
      tmp = tmp85(tmp84, obj16);
    }
    items28[3] = tmp;
    tmp = autocompleteType === tmp88.TIMESTAMPS;
    if (tmp) {
      const obj17 = { onLayout: null, children: null };
      obj17[0] = function onLayout(nativeEvent) {
        return _undefined3(nativeEvent.nativeEvent.layout.height);
      };
      obj17[1] = tmp85(tmp4(tmp2[27]), {});
      tmp = tmp85(tmp84, obj17);
    }
    const obj18 = { children: null };
    items28[4] = tmp;
    tmp = chatInputRef;
    const obj19 = { style: null, keyExtractor: null, data: null, renderItem: null, ItemSeparatorComponent: null, getItemLayout: null, onContentSizeChange: null };
    obj19[0] = items25;
    obj19[1] = function keyExtractor(arg0, arg1) {
      return String(arg1);
    };
    obj19[2] = nonStickerResults;
    obj19[3] = callback5;
    obj19[4] = tmp(tmp2[33]).getItemSeparator;
    obj19[5] = tmp(tmp2[33]).getItemLayout;
    obj19[6] = function onContentSizeChange(arg0, arg1) {
      return callback3(arg1);
    };
    items28[5] = tmp85(chatInputRef, obj19);
    obj18[0] = items28;
    tmp83Result1 = tmp83(tmp87, obj18);
  }
  obj[1] = tmp83Result1;
  const items33 = [setting1(channel(canMentionEveryone[48]).View, obj), ];
  tmp = null != activeCommand && !commandsDisabled;
  if (tmp) {
    const obj20 = { style: null, children: null };
    obj20[0] = memo5;
    const obj21 = { command: null, section: null, guildId: null, onPressOption: null, currentOption: null, optionStates: null };
    obj21[0] = activeCommand;
    obj21[1] = stateFromStoresObject.activeSection;
    obj21[2] = channel.guild_id;
    obj21[3] = callback3;
    obj21[4] = activeOption;
    obj21[5] = optionStates;
    obj20[1] = tmp85(tmp4(tmp2[56]), obj21);
    tmp = tmp85(tmp84, obj20);
  }
  items33[1] = tmp;
  obj[1] = items33;
  const tmp76 = channel(canMentionEveryone[44])(memo4, screenIndex);
  return setting1(commandsDisabled, { style: tmp72Result.autocompletePositionRelative, children: anchor(commandsDisabled, obj) });
});
forwardRefResult.displayName = "AutocompleteWrapper";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("set").fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default memoResult;