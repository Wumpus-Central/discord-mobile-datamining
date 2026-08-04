// discord_app/modules/autocompleter/native/AutocompleteWrapper.tsx
import PermissionOverwriteType from "PermissionOverwriteType";
import importAllResult from "useSafeAreaInsetsKeyboardAware";
import get_ActivityIndicator from "AutocompleteLabel";
import handleInit from "handleInit";
import getEmojiToGroupId from "getEmojiToGroupId";
import _handleConnectionOpen from "_handleConnectionOpen";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import ME from "ME";
import { BOOLEAN_CHOICES } from "TRUE_OPTION_NAME";
import AUTOCOMPLETE_ROW_HEIGHT from "AUTOCOMPLETE_ROW_HEIGHT";
import regExp from "regExp";
import { AutocompleteTypes } from "AutocompleteTypes";
import { EmojiInteractionPoint } from "set";
import jsxProd from "initialize";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c5;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_24;
let closure_25;
let closure_26;
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
function getStickersItemLayout(arg0, arg1) {
  const obj = { length: require(11499) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE, offset: null, index: null };
  const result = arg1 * (require(11499) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE + require(11499) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN);
  const diff = arg1 - 1;
  obj[1] = result + diff * require(11499) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN;
  obj[2] = arg1;
  return obj;
}
let c4 = importAllResult;
({ View: c5, FlatList: closure_6, StyleSheet } = get_ActivityIndicator);
({ AutoCompleteResultTypes: unpackModuleId, WHITESPACE_RE: closure_12, AnalyticEvents: map1, UpsellTypes: closure_14 } = ME);
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = AUTOCOMPLETE_ROW_HEIGHT);
({ MENTION_SENTINEL: closure_18, CHANNEL_SENTINEL: closure_19, EMOJI_SENTINEL: closure_20, GAME_MENTION_INPUT_PREFIX: closure_21 } = regExp);
({ jsx: closure_24, Fragment: closure_25, jsxs: closure_26 } = jsxProd);
let c27 = "text-sm/semibold";
const hairlineWidth = StyleSheet.hairlineWidth;
let closure_29 = createCacheKey.createStyles((borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
  let obj = { autocompletePositionRelative: { position: "relative" }, autocompleteWrapper: null, autocompleteWrapperAbsolute: null, autocompleteContainer: null, autocomplete: null, sectionDivider: null, sectionTitle: null, stickersAutocompleteList: null, newTag: null };
  let obj1 = require(500) /* set */;
  let str = "absolute";
  if (obj1.isAndroid()) {
    str = "relative";
  }
  obj[1] = { position: str, marginHorizontal, marginBottom };
  obj[2] = { left: 0, right: 0, bottom: 0 };
  obj = { backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius, borderWidth, borderTopWidth, borderColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
  obj[3] = obj;
  obj = { flexGrow: 0, flexShrink: 1, backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  obj[4] = obj;
  obj1 = { backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 };
  obj[5] = obj1;
  obj[6] = { backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  const obj2 = { backgroundColor: importDefault(712).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingLeft: 12, marginVertical: 12, justifyContent: "center" };
  obj[7] = { paddingLeft: 12 - require(11499) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: require(11499) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  const obj3 = { paddingLeft: 12 - require(11499) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_MARGIN, marginBottom: 12, height: require(11499) /* AutocompleteLabel */.AUTOCOMPLETE_STICKER_NODE_SIZE, flexShrink: 0 };
  obj[8] = { backgroundColor: importDefault(712).colors.BADGE_BACKGROUND_BRAND };
  return obj;
});
let closure_31 = { resultCount: 0, stickerResults: [], nonStickerResults: [], hasStickerResults: false, hasNonStickerResults: false };
const forwardRefResult = importAllResult.forwardRef((analyticsLocations, ref) => {
  let c26;
  let c36;
  let canOnlyUseTextCommands;
  let screenIndex;
  let tmp20;
  let tmp33;
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
  let closure_18;
  let context;
  let memo;
  let focused;
  let AutocompleteTypes;
  let selectionStart;
  let selectionEnd;
  let closure_25;
  c26 = undefined;
  let gameMentionsAutocompleteConfig;
  let c28;
  let anchor;
  let beginSearch;
  let autocompleteType;
  let query;
  let queryOptions;
  let autocompleteSelectionStart;
  let showOptionValuesPicker;
  c36 = undefined;
  let first2;
  let closure_38;
  let c39;
  let callback;
  let callback1;
  let memo2;
  let closure_43;
  let closure_44;
  let diff1;
  let memo3;
  let first3;
  let c48;
  let chatInputFloating;
  let c50;
  let token5;
  let c52;
  let isScreenReaderEnabled;
  let callback2;
  let callback4;
  let first4;
  let closure_57;
  ({ canOnlyUseTextCommands, screenIndex } = analyticsLocations);
  let obj = _require(canMentionEveryone[21]);
  let items = [optionStates];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ optionStates: optionStates.getOptionStates(channel.id), activeOption: optionStates.getActiveOption(channel.id), activeCommand: optionStates.getActiveCommand(channel.id), activeSection: optionStates.getActiveCommandSection(channel.id) }));
  optionStates = stateFromStoresObject.optionStates;
  activeOption = stateFromStoresObject.activeOption;
  activeCommand = stateFromStoresObject.activeCommand;
  let obj1 = _require(canMentionEveryone[22]);
  token = obj1.useToken(channel(canMentionEveryone[16]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj2 = _require(canMentionEveryone[23]);
  scaledTextLineHeight = obj2.useScaledTextLineHeight(gameMentionsAutocompleteConfig);
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
  memo = onChangeAutoCompleteVisibility.useMemo(() => _undefined(canMentionEveryone[27]).getAutocompleteOptions(channel, true, setting), items3);
  let tmp17 = keyboardType(onChangeAutoCompleteVisibility.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }), 2);
  const first1 = tmp17[0];
  focused = first1.focused;
  let text = first1.text;
  AutocompleteTypes = text;
  selectionStart = first1.selectionStart;
  selectionEnd = first1.selectionEnd;
  closure_25 = tmp17[1];
  let tmp8 = channel(canMentionEveryone[24])();
  [tmp20, c26] = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  let obj6 = _require(canMentionEveryone[28]);
  gameMentionsAutocompleteConfig = obj6.getGameMentionsAutocompleteConfig("AutocompleteWrapper game search");
  c28 = tmp22;
  const tmp23 = channel(canMentionEveryone[29])(text, selectionEnd, gameMentionsAutocompleteConfig.enabled && !gameMentionsAutocompleteConfig.combineMentionAutocomplete, focused);
  anchor = tmp23.anchor;
  beginSearch = tmp23.beginSearch;
  const effect = obj3.useEffect(() => {
    let c0 = false;
    let result = activeCommand.addConditionalChangeListener(() => {
      let tmp = !callback;
      if (!callback) {
        let flag;
        if (outer1_9.isConnected()) {
          const result = callback(outer1_2[30]).initiateEmojiInteraction(outer1_23.AutocompleteWrapperShown);
          flag = false;
          const obj = callback(outer1_2[30]);
        }
        tmp = flag;
      }
      return tmp;
    });
    return () => {
      let c0 = true;
    };
  }, []);
  const imperativeHandle = obj3.useImperativeHandle(ref, obj3.useMemo(() => {
    let c0 = -1;
    return () => ({
      setChatInputHeight: outer1_26,
      setData(arg0) {
        let closure_0;
        let closure_1;
        let closure_2;
        let PermissionOverwriteType;
        ({ focused: closure_0, text: closure_1, selectionStart: closure_2, selectionEnd: PermissionOverwriteType } = arg0);
        if (-1 !== timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          outer1_25(() => { ... });
        }, 16);
      }
    });
  }, []));
  const items4 = [selectionStart, selectionEnd, text, activeCommand, optionStates, activeOption, canMentionEveryone, commandsDisabled, memo, stateFromStores, stateFromStores1, gameMentionsAutocompleteConfig.enabled && !gameMentionsAutocompleteConfig.combineMentionAutocomplete, anchor];
  const memo1 = obj3.useMemo(() => {
    let canMentionEveryone = selectionStart;
    if (null != _undefined2) {
      if (0 !== str.trim().length) {
        if (null != activeOption) {
          let obj1 = _undefined(canMentionEveryone[31]);
          let applicationCommandOptionQueryOptions = obj1.getApplicationCommandOptionQueryOptions(tmp69);
        } else {
          applicationCommandOptionQueryOptions = { canMentionEveryone: null, canMentionHere: null, canMentionChannels: true, canMentionUsers: true, canMentionRoles: true, canMentionAnyGuildUser: false, canMentionNonMentionableRoles: false, canMentionOtherGlobals: true, canMentionGames: true };
          applicationCommandOptionQueryOptions[0] = canMentionEveryone;
          applicationCommandOptionQueryOptions[1] = canMentionEveryone;
        }
        let tmp5;
        if (null != activeOption) {
          tmp5 = optionStates[tmp69.name];
        }
        if (null != activeCommand) {
          if (null != tmp69) {
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
              let query = substr;
              if (null == tmp69.choices) {
                if (!tmp69.autocomplete) {
                  const type = tmp69.type;
                  if (_undefined(canMentionEveryone[32]).ApplicationCommandOptionType.BOOLEAN === type) {
                    let prefix = "";
                    let CHOICES = _undefined2.CHOICES;
                    let choices = nonStickerResults;
                    let flag = true;
                    let str2 = "";
                  } else if (_undefined(canMentionEveryone[32]).ApplicationCommandOptionType.CHANNEL === type) {
                    prefix = context;
                    CHOICES = _undefined2.CHANNELS;
                    const channelTypes = tmp69.channelTypes;
                    flag = true;
                    str2 = context;
                  } else {
                    if (_undefined(canMentionEveryone[32]).ApplicationCommandOptionType.ROLE !== type) {
                      if (_undefined(canMentionEveryone[32]).ApplicationCommandOptionType.USER !== type) {
                        flag = false;
                      }
                    }
                    prefix = closure_18;
                    CHOICES = _undefined2.MENTIONS;
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
                  let tmp62 = substr;
                  if (startsWithResult) {
                    let str8 = "";
                    if (substr.length > str2.length) {
                      str8 = substr.substring(str2.length);
                    }
                    query = str8;
                    tmp62 = str8;
                  }
                  let obj = {};
                  const _Object2 = Object;
                  const entries = Object.entries(optionStates);
                  const item = entries.forEach((arg0) => {
                    let tmp;
                    let tmp2;
                    [tmp, tmp2] = arg0;
                    if (null != tmp2.optionValue) {
                      obj[tmp] = tmp2.optionValue;
                    }
                  });
                  obj = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null, showOptionValuesPicker: null };
                  obj[0] = tmp62;
                  obj[1] = CHOICES;
                  obj[2] = num + num2;
                  obj1 = { activeCommand: null, optionValues: null, isActiveApplicationCommand: null, option: null, choices: null, channelTypes: null };
                  obj1[0] = tmp7;
                  obj1[1] = obj;
                  obj1[2] = flag;
                  obj1[3] = tmp69;
                  obj1[4] = choices;
                  obj1[5] = channelTypes;
                  const merged = Object.assign(applicationCommandOptionQueryOptions);
                  obj[3] = obj1;
                  obj[4] = flag;
                  return obj;
                }
              }
              prefix = "";
              CHOICES = _undefined2.CHOICES;
              choices = tmp69.choices;
              flag = true;
              str2 = "";
            }
          }
        }
        if (c28) {
          if (null != anchor) {
            let obj2 = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
            obj2[0] = str.slice(tmp24 + focused.length, selectionEnd).toLowerCase();
            obj2[1] = _undefined2.GAME_MENTIONS;
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
          let tmp29 = _undefined;
          let tmp30 = canMentionEveryone;
          obj2 = _undefined(canMentionEveryone[33]);
          let arr = _undefined2;
          let tmp32 = tmp28;
          let tmp33 = tmp8;
          let tmp34 = tmp9;
          let num5 = sum;
          let result = obj2.isWhitespaceSeparatingBoundary(_undefined2, tmp28);
          if (tmp27) {
            num5 = 0;
          }
          if (tmp28 === num5) {
            let tmp36 = selectionEnd;
            let substr1 = arr.slice(tmp28, selectionEnd);
            let tmp38 = _undefined;
            let tmp39 = canMentionEveryone;
            obj3 = _undefined(canMentionEveryone[33]);
            prefix = obj3.getPrefix(substr1);
            let tmp40 = _undefined;
            let tmp41 = canMentionEveryone;
            let obj4 = _undefined(canMentionEveryone[33]);
            query = obj4.getQuery(substr1);
            if (null == query) {
              let _Object = Object;
              let tmp46 = memo;
              let keys = Object.keys(memo);
              let found = keys.find((arg0) => {
                let tmp = arg0 !== constants.SLASHES && arg0 !== constants.SLASHES_DISCOVERY;
                if (!tmp) {
                  let tmp4 = null == outer1_9;
                  if (tmp4) {
                    tmp4 = !outer1_5;
                  }
                  tmp = tmp4;
                }
                if (tmp) {
                  let matchesResult = undefined !== closure_0;
                  if (matchesResult) {
                    matchesResult = undefined !== query;
                  }
                  if (matchesResult) {
                    matchesResult = obj.matches(tmp6, query, closure_2);
                  }
                  tmp = matchesResult;
                  tmp6 = closure_0;
                }
                return tmp;
              });
              tmp33 = query;
              let tmp44 = tmp28;
              let tmp45 = query;
              tmp34 = found;
              if (null != found) {
                break;
              }
            } else {
              let tmp43 = setting;
              tmp44 = tmp28;
              tmp45 = query;
              if (setting.test(query)) {
                break;
              }
            }
            let tmp48 = _undefined2;
            let tmp49 = tmp45;
            if (tmp34 === _undefined2.SLASHES) {
              let tmp50 = _undefined;
              let tmp51 = canMentionEveryone;
              let obj5 = _undefined(canMentionEveryone[34]);
              let str5 = tmp45;
              if (tmp45 == null) {
                str5 = "";
              }
              let text = obj5.getTextBeforeFirstOption(str5).text;
              query = text;
              tmp49 = text;
            }
            obj4 = { query: null, autocompleteType: null, autocompleteSelectionStart: null, queryOptions: null };
            obj4[0] = tmp49;
            obj4[1] = tmp34;
            obj4[2] = tmp44;
            obj5 = {};
            let tmp52 = obj5;
            let tmp53 = applicationCommandOptionQueryOptions;
            let merged2 = Object.assign(applicationCommandOptionQueryOptions);
            obj4[3] = obj5;
            return obj4;
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
          tmp45 = tmp33;
          tmp34 = found;
          tmp44 = diff;
          if (diff < num6) {
            break;
          }
        }
      }
    }
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items4);
  autocompleteType = memo1.autocompleteType;
  query = memo1.query;
  queryOptions = memo1.queryOptions;
  autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  showOptionValuesPicker = memo1.showOptionValuesPicker;
  _require = undefined;
  let tmp10Result = tmp10(obj3.useState(null), 2);
  _require = tmp28;
  tmp10Result = tmp10(obj3.useState(autocompleteType), 2);
  if (tmp10Result[0] !== autocompleteType) {
    tmp10Result[1](autocompleteType);
    tmp28(null);
  }
  const items5 = [
    tmp10Result[0],
    obj3.useCallback((arg0) => {
      if (arg0 > 0) {
        const _Math = Math;
        const _undefined = Math.round(arg0);
        _undefined((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }, [])
  ];
  const tmp19 = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  [tmp33, c36] = keyboardType(items5, 2);
  _require = undefined;
  const tmp10Result2 = keyboardType(obj3.useState(null), 2);
  _require = tmp35;
  const tmp10Result3 = keyboardType(obj3.useState(autocompleteType), 2);
  if (tmp10Result3[0] !== autocompleteType) {
    tmp10Result3[1](autocompleteType);
    tmp35(null);
  }
  const items6 = [
    tmp10Result2[0],
    obj3.useCallback((arg0) => {
      if (arg0 > 0) {
        const _Math = Math;
        const _undefined = Math.round(arg0);
        _undefined((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    }, [])
  ];
  const tmp10Result4 = keyboardType(items6, 2);
  first2 = tmp10Result4[0];
  closure_38 = tmp10Result4[1];
  c39 = tmp33;
  const items7 = [autocompleteType, query, queryOptions, memo];
  callback = obj3.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        let obj = memo[tmp];
        const queryResultsResult = obj.queryResults(tmp2, queryOptions, arg0);
        const items = [];
        const items1 = [];
        const item = queryResultsResult.forEach((type) => {
          if (type.type === outer1_11.STICKER) {
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
        callback(obj);
      }
    }
    callback(autocompleteType);
  }, items7);
  const items8 = [autocompleteType, callback, memo];
  const effect1 = obj3.useEffect(() => {
    let tmp2 = null;
    if (null != autocompleteType) {
      let stores;
      if (memo != null) {
        stores = memo[tmp].stores;
      }
      tmp2 = stores;
    }
    if (null != tmp2) {
      const batchedStoreListener = new _undefined(canMentionEveryone[21]).BatchedStoreListener(tmp2, () => callback(false));
      batchedStoreListener.attach("AutocompleteWrapper");
      return () => batchedStoreListener.detach();
    }
  }, items8);
  const items9 = [callback];
  const effect2 = obj3.useEffect(() => {
    callback(true);
  }, items9);
  const items10 = [stickerResults, nonStickerResults];
  callback1 = obj3.useCallback(() => ({ numStickerResults: stickerResults.length, numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length }), items10);
  const items11 = [autocompleteType, focused, keyboardType, resultCount];
  memo2 = obj3.useMemo(() => {
    let tmp = resultCount > 0;
    if (!tmp) {
      tmp = autocompleteType === _undefined2.SLASHES || tmp2 === _undefined2.SLASHES_DISCOVERY;
      const tmp3 = autocompleteType === _undefined2.SLASHES || tmp2 === _undefined2.SLASHES_DISCOVERY;
    }
    if (!tmp) {
      tmp = autocompleteType === _undefined2.GAME_MENTIONS;
    }
    let tmp7 = focused;
    if (focused) {
      tmp7 = tmp;
    }
    if (tmp7) {
      tmp7 = keyboardType === _undefined(canMentionEveryone[35]).KeyboardTypes.SYSTEM;
    }
    return tmp7;
  }, items11);
  closure_43 = obj3.useRef(false);
  const items12 = [autocompleteType, activeCommand];
  const effect3 = obj3.useEffect(() => {
    let tmp4 = autocompleteType === _undefined2.SLASHES;
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
        _undefined(canMentionEveryone[36]).trackWithMetadata(resultCount.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "slash_ui" });
        const obj = _undefined(canMentionEveryone[36]);
      }
    }
  }, items12);
  closure_44 = obj3.useRef(null);
  const items13 = [onChangeAutoCompleteVisibility, activeCommand, memo2, autocompleteType, channel, callback1, gameMentionsAutocompleteConfig.enabled];
  const effect4 = obj3.useEffect(() => {
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
        let obj = _undefined(canMentionEveryone[37]);
        obj = {};
        const merged = Object.assign(callback1());
        let enabled;
        if (tmp8 === _undefined2.MENTIONS) {
          enabled = gameMentionsAutocompleteConfig.enabled;
        }
        obj.gameMentionsAvailable = enabled;
        const result = obj.iOSTrackAutocompleteOpen(tmp8, tmp7, obj);
      }
      tmp7 = channel;
    } else {
      ref2.current = null;
    }
  }, items13);
  const tmp10Result1 = keyboardType(items5, 2);
  const insets = tmp4(tmp2[19])({ includeKeyboardHeight: true }).insets;
  let diff = channel(canMentionEveryone[18])({ ignoreKeyboard: true }).height - insets.top - insets.bottom;
  diff1 = diff - tmp(tmp2[20]).NAV_BAR_HEIGHT - tmp20;
  const items14 = [autocompleteType, stickerResults.length, diff1, scaledTextLineHeight, tmp33];
  memo3 = obj3.useMemo(() => {
    const sum = scaledTextLineHeight + 24;
    const sum1 = 200 + sum;
    if (stickerResults.length > 0) {
      let sum2 = sum1 + sum + _undefined(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + c28;
    } else {
      sum2 = sum1;
      if (autocompleteType !== _undefined2.EMOJIS_AND_STICKERS) {
        let num = 200;
        if (tmp3 === _undefined2.GAME_MENTIONS) {
          num = 200 + c39;
        }
        sum2 = num;
      }
    }
    return Math.min(diff1, sum2);
  }, items14);
  const tmp10Result5 = keyboardType(obj3.useState(null), 2);
  first3 = tmp10Result5[0];
  c48 = tmp54;
  const items15 = [resultCount, autocompleteType, memo2, hasStickerResults, hasNonStickerResults, nonStickerResults.length, memo3, first3, context, token, scaledTextLineHeight, tmp33, first2];
  const memo4 = obj3.useMemo(() => {
    if (autocompleteType === _undefined2.EMOJIS_AND_STICKERS) {
      let num7 = 0;
      if (0 !== nonStickerResults.length) {
        if (context) {
          num7 = length * token + (length - 1) * c28;
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
        sum2 = sum + (sum1 + _undefined(canMentionEveryone[17]).AUTOCOMPLETE_STICKER_NODE_SIZE + 12);
      }
      if (tmp17) {
        tmp17 = tmp14;
      }
      let sum3 = sum2;
      if (tmp17) {
        sum3 = sum2 + c28;
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
                  num4 = tmp5 * token + (tmp5 - 1) * c28;
                }
              }
              tmp6 = num4;
            }
            num3 = tmp6;
          }
          let sum4 = num3;
          if (tmp === tmp2.GAME_MENTIONS) {
            sum4 = num3 + c39;
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
  }, items15);
  let tmpResult = tmp(tmp2[38]);
  chatInputFloating = tmpResult.useMobileVisualRefreshConfig({ location: "AutocompleteWrapper" }).chatInputFloating;
  c50 = tmp56;
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
  let tmp62Result = anchor(token1, num, num2, token4, num3);
  c52 = tmp62Result;
  let tmp62 = anchor;
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
  const items16 = [isScreenReaderEnabled, chatInputFloating, tmp62Result.autocompletePositionRelative];
  const items17 = [memo4 > 0, token5];
  const memo5 = obj3.useMemo(() => {
    let prop = null;
    if (obj.isIOS()) {
      if (isScreenReaderEnabled) {
        prop = _undefined4.autocompletePositionRelative;
      } else {
        prop = null;
      }
    }
    return prop;
  }, items16);
  const memo6 = obj3.useMemo(() => {
    let tmp;
    if (c50) {
      const obj = { marginTop: null };
      obj[0] = token5;
      tmp = obj;
    }
    return tmp;
  }, items17);
  const items18 = [analyticsLocations, beginSearch, channel, chatInputRef];
  const tmpResult6 = _require(canMentionEveryone[15]);
  callback2 = obj3.useCallback((type) => {
    if (type.type !== scaledTextLineHeight.EMOJI_PREMIUM_UPSELL) {
      if (type.type === tmp.GLOBAL) {
        if ("gameMentionInput" === type.inlineAutocompleteType) {
          const current4 = chatInputRef.current;
          current4.insertText(focused, arg1, false);
          beginSearch(arg1);
        }
      }
      const autocompleteResultText = _undefined(canMentionEveryone[33]).getAutocompleteResultText(type, channel);
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
        current2.insertText(autocompleteResultText, arg1, type.type !== tmp.STICKER, tmp13);
        if (type.type === tmp.STICKER) {
          const current3 = tmp12.current;
          current3.handleSelectSticker(type.sticker, arg1);
        }
      }
      const obj3 = _undefined(canMentionEveryone[33]);
      tmp10 = channel;
    } else {
      let obj = channel(canMentionEveryone[41]);
      obj = { initialUpsellKey: null, analyticsLocations: null };
      obj[0] = stickerResults.EMOJI_AUTOCOMPLETE;
      obj[1] = _undefined;
      const result1 = obj.handleShowUpsellAlert(obj);
    }
  }, items18);
  const items19 = [chatInputRef, optionStates, channel];
  const items20 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
  const callback3 = obj3.useCallback((type) => {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (type.type === _undefined(canMentionEveryone[32]).ApplicationCommandOptionType.ATTACHMENT) {
      let success;
      if (optionStates[type.name].lastValidationResult != null) {
        success = lastValidationResult.success;
      }
      if (success) {
        const result = _undefined(canMentionEveryone[42]).openCommandAttachmentPreview(applicationCommandManager, channel.id, type.name);
        const tmpResult = _undefined(canMentionEveryone[42]);
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
  }, items19);
  callback4 = obj3.useCallback((type) => {
    if (type.type === scaledTextLineHeight.GLOBAL) {
      if ("gameMentionInput" === type.inlineAutocompleteType) {
        type = tmp.GAME_MENTION;
      }
      let obj = _undefined(canMentionEveryone[37]);
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
  }, items20);
  const tmp10Result6 = keyboardType(obj3.useState(null), 2);
  first4 = tmp10Result6[0];
  closure_57 = tmp10Result6[1];
  const items21 = [autocompleteType, callback4, first4, channel, activeCommand, gameMentionsAutocompleteConfig.showNewTag, tmp62Result];
  const callback5 = obj3.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (scaledTextLineHeight.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj.guildId = channel.guild_id;
      obj.onPress = function onPress() {
        return outer1_55(item);
      };
      return selectionEnd(channel(canMentionEveryone[17]).User, obj);
    } else if (tmp.GLOBAL === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj.onPress = function onPress() {
        return outer1_55(item);
      };
      let tmp62Result;
      if ("gameMentionInput" === item.inlineAutocompleteType) {
        if (gameMentionsAutocompleteConfig.showNewTag) {
          const obj1 = { containerStyle: null, variant: "text-xs/bold", color: "badge-text-brand" };
          obj1[0] = _undefined4.newTag;
          tmp62Result = tmp62(_undefined(canMentionEveryone[43]).NewTag, obj1);
        }
      }
      obj.badge = tmp62Result;
      return selectionEnd(channel(canMentionEveryone[17]).Global, obj);
    } else if (tmp.ROLE === type) {
      const obj2 = {};
      const merged2 = Object.assign(item);
      obj2.onPress = function onPress() {
        return outer1_55(item);
      };
      let tmp59 = autocompleteType === _undefined2.MENTIONS;
      if (tmp59) {
        tmp59 = null == activeCommand;
      }
      obj2.showDescription = tmp59;
      return selectionEnd(channel(canMentionEveryone[17]).Role, obj2);
    } else if (tmp.CHANNEL === type) {
      const obj3 = {};
      const merged3 = Object.assign(item);
      obj3.onPress = function onPress() {
        return outer1_55(item);
      };
      return selectionEnd(channel(canMentionEveryone[17]).Channel, obj3);
    } else if (tmp.EMOJI === type) {
      const obj4 = {};
      const merged4 = Object.assign(item);
      obj4.onPress = function onPress() {
        return outer1_55(item);
      };
      return selectionEnd(channel(canMentionEveryone[17]).Emoji, obj4);
    } else if (tmp.EMOJI_PREMIUM_UPSELL === type) {
      const obj5 = {};
      const merged5 = Object.assign(item);
      obj5.onPress = function onPress() {
        return outer1_55(item);
      };
      return selectionEnd(channel(canMentionEveryone[17]).EmojiPremiumUpsell, obj5);
    } else if (tmp.CHOICE === type) {
      const obj6 = {};
      const merged6 = Object.assign(item);
      obj6.onPress = function onPress() {
        return outer1_55(item);
      };
      return selectionEnd(channel(canMentionEveryone[17]).Choice, obj6);
    } else if (tmp.CHOICE_LOADING === type) {
      return selectionEnd(channel(canMentionEveryone[17]).ChoiceLoading, {});
    } else if (tmp.STICKER === type) {
      const obj7 = {};
      const merged7 = Object.assign(item);
      obj7.onPress = function onPress() {
        return outer1_55(item);
      };
      obj7.onLongPress = function onLongPress() {
        return outer1_57(item.sticker.id);
      };
      obj7.isInteracting = first4 === item.sticker.id;
      const _HermesInternal = HermesInternal;
      return selectionEnd(channel(canMentionEveryone[17]).Sticker, obj7, "" + item.sticker.id + "-" + first4 === item.sticker.id);
    } else if (tmp.GAME_MENTION === type) {
      const obj8 = {};
      const merged8 = Object.assign(item);
      obj8.onPress = function onPress() {
        return outer1_55(item);
      };
      return selectionEnd(channel(canMentionEveryone[17]).Game, obj8);
    } else if (tmp.LABEL === type) {
      obj = {};
      const merged9 = Object.assign(item);
      return selectionEnd(channel(canMentionEveryone[17]).Label, obj);
    } else {
      return null;
    }
  }, items21);
  const items22 = [tmp62Result.autocomplete, { maxHeight: memo3 }];
  const items23 = [tmp62Result.autocompleteWrapper, , ];
  let autocompleteWrapperAbsolute = !isAndroidResult;
  if (!isAndroidResult) {
    autocompleteWrapperAbsolute = tmp62Result.autocompleteWrapperAbsolute;
  }
  obj = { style: items23, children: null };
  items23[1] = autocompleteWrapperAbsolute;
  items23[2] = memo5;
  obj = { style: items24, children: null };
  items24 = [tmp62Result.autocompleteContainer, channel(canMentionEveryone[40])(memo4, screenIndex)];
  let tmp77Result1 = null != autocompleteType;
  if (tmp77Result1) {
    let tmp79Result = autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
    if (tmp79Result) {
      obj1 = { channel: null, onPressSlashItem: null, onHeightChange: null, canOnlyUseTextCommands: null };
      obj1[0] = channel;
      obj1[1] = function onPressSlashItem(command, section, visualSection) {
        let num = autocompleteSelectionStart;
        if (autocompleteSelectionStart == null) {
          num = 0;
        }
        callback2({ command, section, type: scaledTextLineHeight.SLASH, visualSection, location: _undefined(canMentionEveryone[46]).ApplicationCommandTriggerLocations.DISCOVERY }, num);
      };
      obj1[2] = tmp54;
      obj1[3] = canOnlyUseTextCommands;
      tmp79Result = tmp79(tmp4(tmp2[45]), obj1);
    }
    const items25 = [tmp79Result, , , , ];
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
        callback2({ command, section: arg1, type: scaledTextLineHeight.SLASH, location: _undefined(canMentionEveryone[46]).ApplicationCommandTriggerLocations.DISCOVERY, query }, num);
      };
      obj2[3] = items22;
      obj2[4] = tmp(tmp2[33]).getItemSeparator;
      obj2[5] = tmp(tmp2[33]).getItemLayout;
      obj2[6] = function onCommandsChange(arg0) {
        let num = 0;
        if (0 !== arg0) {
          if (context) {
            num = arg0 * token + (arg0 - 1) * c28;
          }
        }
        c48(num);
      };
      tmp79Result = tmp79(tmp4(tmp2[47]), obj2);
      const tmp4Result = tmp4(tmp2[47]);
    }
    items25[1] = tmp79Result;
    let tmp77Result = autocompleteType === tmp82.EMOJIS_AND_STICKERS;
    if (tmp77Result) {
      tmp77Result = hasStickerResults;
      if (hasStickerResults) {
        obj3 = { children: null };
        obj4 = { style: null, children: null };
        const items26 = [tmp62Result.sectionTitle, ];
        obj5 = { height: null };
        obj5[0] = scaledTextLineHeight;
        items26[1] = obj5;
        obj4[0] = items26;
        obj6 = { variant: null, children: null };
        obj6[0] = tmp6;
        const intl = tmp(tmp2[49]).intl;
        let obj7 = { prefix: null };
        obj7[0] = query;
        obj6[1] = intl.format(tmp(tmp2[49]).t.uferGG, obj7);
        obj4[1] = tmp79(tmp(tmp2[48]).Text, obj6);
        const items27 = [tmp79(tmp78, obj4), ];
        let obj8 = { horizontal: true, style: null, keyExtractor: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, getItemLayout: null, contentInset: null };
        const obj9 = {};
        let merged = Object.assign(items22);
        let merged1 = Object.assign(tmp62Result.stickersAutocompleteList);
        obj8[1] = obj9;
        obj8[2] = function keyExtractor(sticker) {
          return sticker.sticker.id;
        };
        obj8[3] = stickerResults;
        obj8[4] = callback5;
        obj8[6] = beginSearch;
        obj8[7] = { right: 12 };
        items27[1] = tmp79(chatInputRef, obj8);
        obj3[0] = items27;
        tmp77Result = tmp77(tmp81, obj3);
      }
      const items28 = [tmp77Result, , ];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        const obj10 = { style: null };
        obj10[0] = tmp62Result.sectionDivider;
        hasStickerResults = tmp79(tmp4(tmp2[50]), obj10);
      }
      items28[1] = hasStickerResults;
      if (hasNonStickerResults) {
        const obj11 = { style: null, children: null };
        const items29 = [tmp62Result.sectionTitle, ];
        const obj12 = { height: null };
        obj12[0] = scaledTextLineHeight;
        items29[1] = obj12;
        obj11[0] = items29;
        const obj13 = { variant: null, children: null };
        obj13[0] = tmp6;
        const intl2 = tmp(tmp2[49]).intl;
        const obj14 = { prefix: null };
        let _HermesInternal = HermesInternal;
        obj14[0] = "" + memo + query;
        obj13[1] = intl2.format(tmp(tmp2[49]).t.ksAVYt, obj14);
        obj11[1] = tmp79(tmp(tmp2[48]).Text, obj13);
        hasNonStickerResults = tmp79(tmp78, obj11);
      }
      const obj15 = { children: null };
      items28[2] = hasNonStickerResults;
      obj15[0] = items28;
      tmp77Result = tmp77(tmp81, obj15);
    }
    items25[2] = tmp77Result;
    let tmp79Result1 = autocompleteType === tmp82.GAME_MENTIONS;
    if (tmp79Result1) {
      const obj16 = { onLayout: null, children: null };
      obj16[0] = function onLayout(nativeEvent) {
        return _undefined3(nativeEvent.nativeEvent.layout.height);
      };
      obj16[1] = tmp79(tmp4(tmp2[51]), {});
      tmp79Result1 = tmp79(tmp78, obj16);
    }
    const obj17 = { children: null };
    items25[3] = tmp79Result1;
    const obj18 = { style: null, keyExtractor: null, data: null, renderItem: null, ItemSeparatorComponent: null, getItemLayout: null, onContentSizeChange: null };
    obj18[0] = items22;
    obj18[1] = function keyExtractor(arg0, arg1) {
      return String(arg1);
    };
    obj18[2] = nonStickerResults;
    obj18[3] = callback5;
    obj18[4] = tmp(tmp2[33]).getItemSeparator;
    obj18[5] = tmp(tmp2[33]).getItemLayout;
    obj18[6] = function onContentSizeChange(arg0, arg1) {
      return callback2(arg1);
    };
    items25[4] = tmp79(chatInputRef, obj18);
    obj17[0] = items25;
    tmp77Result1 = tmp77(tmp81, obj17);
  }
  obj[1] = tmp77Result1;
  const items30 = [selectionEnd(channel(canMentionEveryone[44]).View, obj), ];
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
    obj19[1] = tmp79(tmp4(tmp2[52]), obj20);
    tmp79Result2 = tmp79(tmp78, obj19);
  }
  items30[1] = tmp79Result2;
  obj[1] = items30;
  const tmp70 = channel(canMentionEveryone[40])(memo4, screenIndex);
  return selectionEnd(commandsDisabled, { style: tmp62Result.autocompletePositionRelative, children: c26(commandsDisabled, obj) });
});
forwardRefResult.displayName = "AutocompleteWrapper";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default memoResult;