// discord_app/modules/autocompleter/native/AutocompleteWrapper.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import Server from "../../../flow/Server.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import utils_AutocompleteUtilsDefault from "../../../utils/native/AutocompleteUtils.tsx";
import ApplicationCommandConstants from "../../application_commands/ApplicationCommandConstants.tsx";
import TimestampUtils from "../../markup/TimestampUtils.tsx";
import GameAutocompleteUtils from "../../games/autocomplete/GameAutocompleteUtils.tsx";
import NavigatorConstants from "../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import RunAfterInteractionsUtils from "../../../utils/native/RunAfterInteractionsUtils.tsx";
import ApplicationCommandTypes from "../../application_commands/ApplicationCommandTypes.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import autocompleter_AutocompleteUtils from "AutocompleteUtils.tsx";
import AutocompleteOptions from "AutocompleteOptions.tsx";
import channel_text_area_ChannelAutocompleteConstants from "../../channel_text_area/native/ChannelAutocompleteConstants.tsx";
import TimestampSuggestionUtils from "../../timestamp_autocomplete/TimestampSuggestionUtils.tsx";
import application_commands_ApplicationCommandUtils from "../../application_commands/native/ApplicationCommandUtils.tsx";
import Autocomplete from "Autocomplete.tsx";
import ChannelAutocompleteAnalytics from "../../channel_text_area/native/ChannelAutocompleteAnalytics.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ApplicationCommandStore from "../../application_commands/ApplicationCommandStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import StickersStore from "../../stickers/StickersStore.tsx";
import Constants from "../../../Constants.tsx";
import ApplicationCommandsConstants from "../../application_commands/native/ApplicationCommandsConstants.tsx";
import ChannelAutocompleteConstants from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let analyticsLocations;

let StyleSheet;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_26;
let closure_27;
let closure_28;
let hasOwnProperty;
let map1;
let metroRequire;
let unpackModuleId;
function getStickersItemLayout(arg0, index) {
  let diff;
  let result;
  obj = {
    length: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE,
    offset: result + diff * Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN,
    index,
  };
  result = index * (Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN);
  diff = index - 1;
  return obj;
}
({ View: hasOwnProperty, FlatList: metroRequire, StyleSheet } = react_native);
({
  AutoCompleteResultTypes: unpackModuleId,
  WHITESPACE_RE: closure_12,
  AnalyticEvents: map1,
  UpsellTypes: closure_14,
} = Constants);
const BOOLEAN_CHOICES = ApplicationCommandConstants.BOOLEAN_CHOICES;
({ AUTOCOMPLETE_EMOJI_ROW_HEIGHT: closure_16, AUTOCOMPLETE_ROW_HEIGHT: closure_17 } = ApplicationCommandsConstants);
({
  MENTION_SENTINEL: closure_18,
  CHANNEL_SENTINEL: closure_19,
  EMOJI_SENTINEL: closure_20,
  COMMAND_SENTINEL: closure_21,
  GAME_MENTION_INPUT_PREFIX: closure_22,
  TIMESTAMP_MENTION_INPUT_PREFIX: closure_23,
} = ChannelAutocompleteConstants);
const AutocompleteTypes = channel_text_area_ChannelAutocompleteConstants.AutocompleteTypes;
const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
({ jsx: closure_26, Fragment: closure_27, jsxs: closure_28 } = Fragment);
let c29 = "text-sm/semibold";
const hairlineWidth = StyleSheet.hairlineWidth;
let c31 = 200;
let closure_32 = { allowSpaces: true, maxQueryLength: 64 };
let obj = { allowSpaces: true, maxQueryLength: GameAutocompleteUtils.GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH };
let closure_34 = createStyles.createStyles(
  (borderRadius, borderWidth, borderTopWidth, marginHorizontal, marginBottom) => {
    let str;
    obj = {
      autocompletePositionRelative: { position: "relative" },
      autocompleteWrapper: { position: str, marginHorizontal, marginBottom },
      autocompleteContainer: {
        backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
        borderRadius,
        borderWidth,
        borderTopWidth,
        borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER,
        overflow: "hidden",
      },
      autocomplete: {
        flexGrow: 0,
        flexShrink: 1,
        backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
      },
      sectionDivider: { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 },
      sectionTitle: {
        backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
        paddingLeft: 12,
        marginVertical: 12,
        justifyContent: "center",
      },
      stickersAutocompleteList: {
        paddingLeft: 12 - Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN,
        marginBottom: 12,
        height: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE,
        flexShrink: 0,
      },
    };
    str = "absolute";
    const obj2 = PlatformUtils;
    if (obj2.isAndroid()) {
      str = "relative";
    }
    ({
      backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
      borderRadius,
      borderWidth,
      borderTopWidth,
      borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER,
      overflow: "hidden",
    });
    ({ flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND });
    ({ backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, marginLeft: -16 });
    ({
      backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
      paddingLeft: 12,
      marginVertical: 12,
      justifyContent: "center",
    });
    ({
      paddingLeft: 12 - Autocomplete.AUTOCOMPLETE_STICKER_NODE_MARGIN,
      marginBottom: 12,
      height: Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE,
      flexShrink: 0,
    });
    return obj;
  },
);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp7;
      obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { ignoreKeyboard: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp6 = useWindowDimensionsDefault(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { includeKeyboardHeight: true };
        cResult[1] = obj3;
        tmp7 = obj3;
      } else {
        tmp7 = cResult[1];
      }
      const insets = useSafeAreaInsetsKeyboardAwareDefault(tmp7).insets;
      const diff = tmp6.height - insets.top - insets.bottom;
      return diff - NavigatorConstants.NAV_BAR_HEIGHT - arg0;
    }
  : (arg0) => {
      const tmp = useWindowDimensionsDefault({ ignoreKeyboard: true });
      const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
      const diff = tmp.height - insets.top - insets.bottom;
      return diff - NavigatorConstants.NAV_BAR_HEIGHT - arg0;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp3;
      let tmp4;
      let tmp9;
      obj = react2;
      const cResult = obj.c(3);
      [tmp3, tmp4] = _slicedToArray(react.useState(null), 2);
      let closure_0 = tmp4;
      const tmp2 = _slicedToArray(react.useState(null), 2);
      const tmp5 = _slicedToArray(react.useState(arg0), 2);
      if (tmp5[0] !== arg0) {
        tmp5[1](arg0);
        tmp4(null);
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(arg0) {
          if (arg0 > 0) {
            let tmp = globalThis;
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
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp3) {
        const items = [tmp3, first];
        cResult[1] = tmp3;
        cResult[2] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : (arg0) => {
      let first;
      let tmp3;
      [first, tmp3] = react.useState(null);
      let closure_0 = tmp3;
      const tmp4 = _slicedToArray(react.useState(arg0), 2);
      if (tmp4[0] !== arg0) {
        tmp4[1](arg0);
        tmp3(null);
      }
      const items = [
        first,
        react.useCallback((arg0) => {
          if (arg0 > 0) {
            let tmp = globalThis;
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
        }, []),
      ];
      return items;
    };
let closure_38 = {
  resultCount: 0,
  stickerResults: [],
  nonStickerResults: [],
  hasStickerResults: false,
  hasNonStickerResults: false,
};
const forwardRefResult = react.forwardRef((analyticsLocations, arg1) => {
  let Text;
  let Text2;
  let _undefined;
  let _undefined2;
  let c25;
  let c40;
  let c41;
  let canOnlyUseTextCommands;
  let format;
  let intl;
  let items23;
  let items24;
  let items26;
  let items27;
  let items29;
  let items30;
  let ksAVYt;
  let num3;
  let obj15;
  let obj16;
  let obj18;
  let obj22;
  let obj23;
  let obj30;
  let screenIndex;
  let setChatInputHeight;
  let str;
  let tmp22;
  let tmp31;
  let tmp33;
  let tmp67Result4;
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
  let closure_33;
  let autocompleteSelectionStart;
  c40 = undefined;
  c41 = undefined;
  let closure_44;
  let callback;
  let callback1;
  let memo2;
  let ref;
  let ref2;
  let closure_51;
  let memo3;
  let first3;
  let closure_54;
  let closure_55;
  let token5;
  let callback2;
  let callback4;
  let first4;
  let closure_60;
  let tmp = analyticsLocations;
  let tmp2 = canMentionEveryone;
  ({ canOnlyUseTextCommands, screenIndex } = analyticsLocations);
  obj = analyticsLocations(canMentionEveryone[26]);
  let items = [optionStates];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    obj = {
      optionStates: ApplicationCommandStore.getOptionStates(channel.id),
      activeOption: ApplicationCommandStore.getActiveOption(channel.id),
      activeCommand: ApplicationCommandStore.getActiveCommand(channel.id),
      activeSection: ApplicationCommandStore.getActiveCommandSection(channel.id),
    };
    return obj;
  });
  optionStates = stateFromStoresObject.optionStates;
  const activeOption = stateFromStoresObject.activeOption;
  const activeCommand = stateFromStoresObject.activeCommand;
  const activeSection = stateFromStoresObject.activeSection;
  let obj2 = analyticsLocations(canMentionEveryone[27]);
  let tmp4 = channel;
  const token = obj2.useToken(channel(canMentionEveryone[19]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj3 = analyticsLocations(canMentionEveryone[28]);
  let tmp6 = beginSearch;
  const scaledTextLineHeight = obj3.useScaledTextLineHeight(beginSearch);
  let tmp8 = channel(canMentionEveryone[29])();
  let obj4 = analyticsLocations(canMentionEveryone[30]);
  let timestampSearchHeaderHeight = obj4.useTimestampSearchHeaderHeight();
  const IncludeStickersInAutocomplete = analyticsLocations(canMentionEveryone[31]).IncludeStickersInAutocomplete;
  const setting = IncludeStickersInAutocomplete.getSetting();
  let obj5 = onChangeAutoCompleteVisibility;
  const tmp12 = keyboardType(onChangeAutoCompleteVisibility.useState(autocompleteSelectionStart), 2);
  const first = tmp12[0];
  const resultCount = first.resultCount;
  const stickerResults = first.stickerResults;
  const nonStickerResults = first.nonStickerResults;
  let hasStickerResults = first.hasStickerResults;
  let hasNonStickerResults = first.hasNonStickerResults;
  let closure_18 = tmp12[1];
  let obj6 = analyticsLocations(canMentionEveryone[26]);
  let items1 = [activeOption];
  const stateFromStores = obj6.useStateFromStores(items1, () => activeOption.loadState);
  let obj7 = analyticsLocations(canMentionEveryone[26]);
  const items2 = [token];
  const stateFromStores1 = obj7.useStateFromStores(items2, () => token.loadState);
  const context = onChangeAutoCompleteVisibility.useContext(
    analyticsLocations(canMentionEveryone[32]).RedesignCompatContext,
  );
  const items3 = [channel, setting];
  const memo = onChangeAutoCompleteVisibility.useMemo(() => {
    obj = AutocompleteOptions;
    return obj.getAutocompleteOptions(channel, true, setting);
  }, items3);
  let tmp18 = keyboardType(
    onChangeAutoCompleteVisibility.useState({ focused: false, text: "", selectionStart: 0, selectionEnd: 0 }),
    2,
  );
  const first1 = tmp18[0];
  const focused = first1.focused;
  let text = first1.text;
  let c22 = text;
  const selectionStart = first1.selectionStart;
  let selectionEnd = first1.selectionEnd;
  const tmp20 = tmp18[1];
  [tmp22, c25] = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const tmp21 = keyboardType(onChangeAutoCompleteVisibility.useState(0), 2);
  const IncludeGameMentionsInAutocomplete = analyticsLocations(
    canMentionEveryone[31],
  ).IncludeGameMentionsInAutocomplete;
  const setting1 = IncludeGameMentionsInAutocomplete.getSetting();
  const tmp24 = channel(canMentionEveryone[34])(text, selectionEnd, setting1, c22, closure_33);
  const anchor = tmp24.anchor;
  beginSearch = tmp24.beginSearch;
  const TimestampAutocompleteMobileExperiment = analyticsLocations(
    canMentionEveryone[35],
  ).TimestampAutocompleteMobileExperiment;
  const enabled = TimestampAutocompleteMobileExperiment.getConfig({
    location: "AutocompleteWrapper timestamp search",
  }).enabled;
  const tmp25 = channel(canMentionEveryone[34])(text, selectionEnd, enabled, selectionStart, beginSearch2);
  const anchor2 = tmp25.anchor;
  beginSearch2 = tmp25.beginSearch;
  closure_33 = onChangeAutoCompleteVisibility.useRef({ text: "", selectionEnd: 0 });
  const items4 = [
    activeOption,
    beginSearch,
    beginSearch2,
    chatInputRef,
    setting1,
    anchor,
    enabled,
    anchor2,
    selectionEnd,
    selectionStart,
    text,
  ];
  const effect = onChangeAutoCompleteVisibility.useEffect(() => {
    text = closure_33.current.text;
    selectionEnd = closure_33.current.selectionEnd;
    closure_33.current.text = text;
    closure_33.current.selectionEnd = selectionEnd;
    if (text.length >= 6) {
      if (null == activeOption) {
        if (selectionStart === selectionEnd) {
          if (" " === text[selectionEnd - 1]) {
            const obj3 = autocompleter_AutocompleteUtils;
            const result = obj3.findAutoInsertOnSpaceToken(tmp, tmp2, authStore4);
            if (null != result) {
              const obj4 = utils_AutocompleteUtilsDefault;
              const result1 = obj4.findAutoInsertOnSpaceMentionInlineAutocompleteType(result.trigger);
              if ("gameMentionInput" === result1) {
                if (setting1) {
                  if (null == anchor) {
                    const tmp33Result = autocompleter_AutocompleteUtils;
                    if (tmp33Result.isSpaceJustTypedAtCaret(text, selectionEnd, text, selectionEnd)) {
                      const current2 = chatInputRef.current;
                      current2.insertText(afk, result.tokenStart, false, undefined, selectionEnd);
                      beginSearch(result.tokenStart);
                    }
                  }
                }
              } else if ("timestampMentionInput" === result1) {
                if (enabled) {
                  if (null == anchor2) {
                    const tmp33Result2 = autocompleter_AutocompleteUtils;
                    if (tmp33Result2.isSpaceJustTypedAtCaret(text, selectionEnd, text, selectionEnd)) {
                      const current = chatInputRef.current;
                      current.insertText(closure_23, result.tokenStart, false, undefined, selectionEnd);
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
    let c0 = false;
    let result = activeCommand.addConditionalChangeListener(() => {
      let tmp = !c0;
      if (tmp) {
        let flag;
        if (activeCommand.isConnected()) {
          obj = analyticsLocations(canMentionEveryone[38]);
          const result = obj.initiateEmojiInteraction(c25.AutocompleteWrapperShown);
          flag = false;
        }
        tmp = flag;
      }
      return tmp;
    });
    return () => {
      c0 = true;
    };
  }, []);
  const setData = channel(canMentionEveryone[39])(tmp20, 16).setData;
  const items5 = [setData];
  const imperativeHandle = onChangeAutoCompleteVisibility.useImperativeHandle(
    arg1,
    () => ({ setChatInputHeight, setData }),
    items5,
  );
  const items6 = [
    selectionStart,
    selectionEnd,
    text,
    activeCommand,
    optionStates,
    activeOption,
    canMentionEveryone,
    commandsDisabled,
    memo,
    stateFromStores,
    stateFromStores1,
    setting1,
    anchor,
    anchor2,
  ];
  const memo1 = onChangeAutoCompleteVisibility.useMemo(() => {
    let obj10;
    let obj12;
    let obj14;
    let obj8;
    let str6;
    let tmp50;
    let tmp51;
    let tmp52;
    let tmp = selectionStart;
    canMentionEveryone = selectionStart;
    if (null != text) {
      if (0 !== text.trim().length) {
        let applicationCommandOptionQueryOptions;
        let prefix;
        let tmp8;
        let tmp9;
        if (null != activeOption) {
          let tmp4 = canMentionEveryone;
          const obj2 = analyticsLocations(canMentionEveryone[40]);
          applicationCommandOptionQueryOptions = obj2.getApplicationCommandOptionQueryOptions(activeOption);
        } else {
          applicationCommandOptionQueryOptions = {
            canMentionEveryone,
            canMentionHere: canMentionEveryone,
            canMentionChannels: true,
            canMentionUsers: true,
            canMentionRoles: true,
            canMentionAnyGuildUser: false,
            canMentionNonMentionableRoles: false,
            canMentionOtherGlobals: true,
          };
          const tmp2 = canMentionEveryone;
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
                const substring = str.substring;
                const obj3 = analyticsLocations(canMentionEveryone[41]);
                substr = substring(sum, obj3.getCommandOptionValueEnd(str, sum, activeCommand));
              }
              query = substr;
              if (null == activeOption.choices) {
                let CHOICES;
                let choices;
                let flag;
                let str2;
                let channelTypes;
                if (!activeOption.autocomplete) {
                  const type = activeOption.type;
                  if (analyticsLocations(canMentionEveryone[42]).ApplicationCommandOptionType.BOOLEAN === type) {
                    prefix = "";
                    CHOICES = selectionEnd.CHOICES;
                    choices = nonStickerResults;
                    flag = true;
                    str2 = "";
                  } else if (analyticsLocations(canMentionEveryone[42]).ApplicationCommandOptionType.CHANNEL === type) {
                    prefix = context;
                    CHOICES = selectionEnd.CHANNELS;
                    channelTypes = activeOption.channelTypes;
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
                tmp8 = substr;
                tmp9 = CHOICES;
                if (flag) {
                  let tmp75 = substr;
                  const startsWithResult = null != str2 && "" !== str2 && null != substr && substr.startsWith(str2);
                  if (startsWithResult) {
                    let str8 = "";
                    if (substr.length > str2.length) {
                      str8 = substr.substring(str2.length);
                    }
                    query = str8;
                    tmp75 = str8;
                  }
                  const optionValues = {};
                  const _Object2 = Object;
                  const entries = Object.entries(optionStates);
                  const item = entries.forEach((item) => {
                    let tmp;
                    let tmp2;
                    [tmp, tmp2] = item;
                    if (null != tmp2.optionValue) {
                      obj[tmp] = tmp2.optionValue;
                    }
                  });
                  const obj7 = {
                    query: tmp75,
                    autocompleteType: CHOICES,
                    autocompleteSelectionStart: num + num2,
                    queryOptions: obj8,
                    showOptionValuesPicker: flag,
                  };
                  obj8 = {
                    activeCommand,
                    optionValues,
                    isActiveApplicationCommand: flag,
                    option: activeOption,
                    choices,
                    channelTypes,
                  };
                  const merged = Object.assign(applicationCommandOptionQueryOptions);
                  return obj7;
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
            const obj9 = {
              query: str6.toLowerCase(),
              autocompleteType: selectionEnd.GAME_MENTIONS,
              autocompleteSelectionStart: anchor,
              queryOptions: obj10,
            };
            obj10 = {};
            str6 = text.slice(anchor + text.length, selectionEnd);
            const merged1 = Object.assign(applicationCommandOptionQueryOptions);
            return obj9;
          }
        }
        if (null != anchor2) {
          if (null == activeCommand) {
            const obj11 = {
              query: text.slice(anchor2 + selectionStart.length, selectionEnd),
              autocompleteType: selectionEnd.TIMESTAMPS,
              autocompleteSelectionStart: anchor2,
              queryOptions: obj12,
            };
            obj12 = {};
            const merged2 = Object.assign(applicationCommandOptionQueryOptions);
            return obj11;
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
          let found;
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
                found = tmp9;
              }
            }
            let _Object = Object;
            let keys = Object.keys(memo);
            found = keys.find((item) => {
              let tmp = item !== AutocompleteTypes.SLASHES && item !== AutocompleteTypes.SLASHES_DISCOVERY;
              obj = memo[item];
              if (!tmp) {
                tmp = null == activeCommand && !commandsDisabled;
                const tmp4 = null == activeCommand && !commandsDisabled;
              }
              if (tmp) {
                tmp = undefined !== prefix && undefined !== query && obj.matches(prefix, query, canMentionEveryone);
                const matchesResult =
                  undefined !== prefix && undefined !== query && obj.matches(prefix, query, canMentionEveryone);
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
          const getTextBeforeFirstOption = analyticsLocations(canMentionEveryone[41]).getTextBeforeFirstOption;
          analyticsLocations(canMentionEveryone[41]);
          if (tmp51 == null) {
            str5 = "";
          }
          text = getTextBeforeFirstOption(str5).text;
          query = text;
          tmp55 = text;
        }
        const obj13 = { query: tmp55, autocompleteType: tmp52, autocompleteSelectionStart: tmp50, queryOptions: obj14 };
        obj14 = {};
        const merged3 = Object.assign(applicationCommandOptionQueryOptions);
        return obj13;
      }
    }
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items6);
  const autocompleteType = memo1.autocompleteType;
  let query = memo1.query;
  const queryOptions = memo1.queryOptions;
  autocompleteSelectionStart = memo1.autocompleteSelectionStart;
  const showOptionValuesPicker = memo1.showOptionValuesPicker;
  [tmp31, c40] = keyboardType(queryOptions(autocompleteType), 2);
  const tmp30 = keyboardType(queryOptions(autocompleteType), 2);
  [tmp33, c41] = keyboardType(queryOptions(autocompleteType), 2);
  const tmp32 = keyboardType(queryOptions(autocompleteType), 2);
  const tmp34 = keyboardType(queryOptions(autocompleteType), 2);
  const first2 = tmp34[0];
  let closure_43 = tmp34[1];
  if (tmp31 == null) {
    tmp31 = tmp8;
  }
  closure_44 = tmp31;
  if (tmp33 == null) {
    tmp33 = timestampSearchHeaderHeight;
  }
  timestampSearchHeaderHeight = tmp33;
  const items7 = [anchor2];
  const effect2 = obj5.useEffect(() => {
    if (null != anchor2) {
      obj = RunAfterInteractionsUtils;
      obj.runAfterInteractions(TimestampSuggestionUtils.preloadTimestampParser);
    }
  }, items7);
  const items8 = [autocompleteType, query, queryOptions, memo];
  callback = obj5.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        obj = memo[tmp];
        const queryResultsResult = obj.queryResults(tmp2, queryOptions, arg0);
        const items = [];
        const items1 = [];
        const item = queryResultsResult.forEach((type) => {
          if (type.type === constants.STICKER) {
            items.push(type);
          } else {
            items1.push(type);
          }
        });
        const obj2 = {
          resultCount: queryResultsResult.length,
          stickerResults: items,
          nonStickerResults: items1,
          hasStickerResults: items.length > 0,
          hasNonStickerResults: items1.length > 0,
        };
        closure_18(obj2);
      }
    }
    closure_18(closure_38);
  }, items8);
  const items9 = [autocompleteType, callback, memo];
  const effect3 = obj5.useEffect(function () {
    let tmp2 = null;
    if (null != autocompleteType) {
      let stores;
      if (memo != null) {
        stores = memo[tmp].stores;
      }
      tmp2 = stores;
    }
    if (null != tmp2) {
      const self = this;
      const self2 = this;
      const batchedStoreListener = new analyticsLocations(canMentionEveryone[26]).BatchedStoreListener(tmp2, () =>
        callback(false),
      );
      batchedStoreListener.attach("AutocompleteWrapper");
      return () => batchedStoreListener.detach();
    }
  }, items9);
  const items10 = [callback];
  const effect4 = obj5.useEffect(() => {
    callback(true);
  }, items10);
  const items11 = [stickerResults, nonStickerResults];
  callback1 = obj5.useCallback(() => {
    obj = {
      numStickerResults: stickerResults.length,
      numEmojiResults: nonStickerResults.filter((type) => type.type === constants.EMOJI).length,
    };
    return obj;
  }, items11);
  const items12 = [autocompleteType, focused, keyboardType, resultCount];
  memo2 = obj5.useMemo(() => {
    let tmp = resultCount > 0;
    if (!tmp) {
      tmp = autocompleteType === AutocompleteTypes.SLASHES || tmp2 === AutocompleteTypes.SLASHES_DISCOVERY;
    }
    if (!tmp) {
      tmp = autocompleteType === AutocompleteTypes.GAME_MENTIONS;
    }
    if (!tmp) {
      tmp = autocompleteType === AutocompleteTypes.TIMESTAMPS;
    }
    let tmp9 = focused;
    const SYSTEM = KeyboardTypes.KeyboardTypes.SYSTEM;
    if (focused) {
      tmp9 = tmp;
    }
    if (tmp9) {
      tmp9 = keyboardType === SYSTEM;
    }
    return tmp9;
  }, items12);
  ref = obj5.useRef(false);
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
      const tmp5 = tmp4 || autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY || null != activeCommand;
      ref.current = tmp5;
      if (ref.current) {
        obj = AppAnalyticsUtils;
        obj.trackWithMetadata(map1.APPLICATION_COMMAND_TOP_OF_FUNNEL, { location: "slash_ui" });
      }
    }
  }, items13);
  ref2 = obj5.useRef(null);
  const items14 = [
    onChangeAutoCompleteVisibility,
    activeCommand,
    memo2,
    autocompleteType,
    channel,
    callback1,
    setting1,
  ];
  const effect6 = obj5.useEffect(() => {
    let tmp18;
    if (onChangeAutoCompleteVisibility != null) {
      tmp4(memo2 || null != activeCommand);
    }
    if (memo2 || null != activeCommand) {
      let str = autocompleteType;
      const id = channel.id;
      if (autocompleteType == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + id + ":" + str;
      if (ref2.current !== combined) {
        ref2.current = combined;
        obj = { gameMentionsAvailable: tmp18 };
        const iOSTrackAutocompleteOpen = ChannelAutocompleteAnalytics.iOSTrackAutocompleteOpen;
        ChannelAutocompleteAnalytics;
        const merged = Object.assign(callback1());
        tmp18 = undefined;
        if (autocompleteType === AutocompleteTypes.MENTIONS) {
          tmp18 = setting1;
        }
        const result = iOSTrackAutocompleteOpen(autocompleteType, channel, obj);
      }
    } else {
      ref2.current = null;
    }
  }, items14);
  const tmp44 = query(tmp22);
  closure_51 = tmp44;
  const items15 = [autocompleteType, stickerResults.length, tmp44, scaledTextLineHeight, tmp31, tmp33];
  memo3 = obj5.useMemo(() => {
    let sum2;
    const sum = scaledTextLineHeight + 24;
    const sum1 = c31 + sum;
    if (stickerResults.length > 0) {
      sum2 = sum1 + sum + Autocomplete.AUTOCOMPLETE_STICKER_NODE_SIZE + 12 + hairlineWidth;
    } else {
      sum2 = sum1;
      if (autocompleteType !== AutocompleteTypes.EMOJIS_AND_STICKERS) {
        let sum3;
        if (autocompleteType === AutocompleteTypes.GAME_MENTIONS) {
          sum3 = c31 + closure_44;
        } else if (autocompleteType === AutocompleteTypes.TIMESTAMPS) {
          sum3 = c31 + timestampSearchHeaderHeight;
        } else {
          sum3 = c31;
        }
        sum2 = sum3;
      }
    }
    return Math.min(closure_51, sum2);
  }, items15);
  const tmp11Result = keyboardType(obj5.useState(null), 2);
  first3 = tmp11Result[0];
  closure_54 = tmp48;
  const items16 = [
    resultCount,
    autocompleteType,
    memo2,
    hasStickerResults,
    hasNonStickerResults,
    nonStickerResults.length,
    memo3,
    first3,
    tmp33,
    context,
    token,
    scaledTextLineHeight,
    tmp31,
    first2,
  ];
  const memo4 = obj5.useMemo(() => {
    let num2;
    if (autocompleteType === AutocompleteTypes.EMOJIS_AND_STICKERS) {
      let tmp13 = token;
      let num7 = 0;
      if (0 !== nonStickerResults.length) {
        if (!context) {
          tmp13 = autocompleteType === AutocompleteTypes.EMOJIS_AND_STICKERS ? authStore3 : closure_17;
        }
        num7 = length * tmp13 + (length - 1) * hairlineWidth;
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
      num2 = sum3;
    } else {
      const tmp3 =
        autocompleteType === AutocompleteTypes.SLASHES || autocompleteType === AutocompleteTypes.SLASHES_DISCOVERY;
      if (tmp3) {
        let num6 = first3;
        if (first3 == null) {
          num6 = 0;
        }
        num2 = num6;
      } else {
        num2 = 0;
        if (null != autocompleteType) {
          let sum4;
          let num3 = 0;
          if (resultCount > 0) {
            let tmp6 = first2;
            if (first2 == null) {
              let tmp7 = token;
              let num4 = 0;
              if (0 !== resultCount) {
                if (!context) {
                  tmp7 = autocompleteType === AutocompleteTypes.EMOJIS_AND_STICKERS ? authStore3 : closure_17;
                }
                num4 = resultCount * tmp7 + (resultCount - 1) * hairlineWidth;
              }
              tmp6 = num4;
            }
            num3 = tmp6;
          }
          if (autocompleteType === AutocompleteTypes.GAME_MENTIONS) {
            sum4 = num3 + closure_44;
          } else {
            sum4 = num3;
            if (autocompleteType === AutocompleteTypes.TIMESTAMPS) {
              sum4 = num3 + timestampSearchHeaderHeight;
            }
          }
          num2 = sum4;
        }
      }
    }
    let num12 = 0;
    const _Math = Math;
    if (memo2) {
      num12 = num2;
    }
    return min(num12, memo3);
  }, items16);
  let tmp50 = memo4 > 0;
  closure_55 = tmp50;
  let tmpResult = tmp(tmp2[27]);
  const token1 = tmpResult.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS);
  const tmpResult6 = tmp(tmp2[27]);
  const token2 = tmpResult6.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  const tmpResult7 = tmp(tmp2[27]);
  const token3 = tmpResult7.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH);
  const tmpResult8 = tmp(tmp2[27]);
  const token4 = tmpResult8.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL);
  const tmpResult9 = tmp(tmp2[27]);
  token5 = tmpResult9.useToken(tmp4(tmp2[19]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM);
  let num = 0;
  const tmp56 = setData;
  if (tmp50) {
    num = token2;
  }
  let num2 = 0;
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
  const tmp56Result = tmp56(token1, num, num2, token4, num3);
  let prop = null;
  const tmpResult10 = tmp(tmp2[18]);
  if (tmpResult10.isIOS()) {
    prop = tmp56Result.autocompletePositionRelative;
  }
  const items17 = [tmp50, token5];
  const memo5 = obj5.useMemo(() => {
    let tmp;
    if (closure_55) {
      tmp = { marginTop: token5 };
      obj = { marginTop: token5 };
    }
    return tmp;
  }, items17);
  const items18 = [analyticsLocations, beginSearch, beginSearch2, channel, chatInputRef];
  const tmp60 = tmp4(tmp2[47])(memo4, screenIndex);
  callback2 = obj5.useCallback((type, tokenStart, arg2) => {
    if (type.type !== unpackModuleId.EMOJI_PREMIUM_UPSELL) {
      if (type.type === unpackModuleId.GLOBAL) {
        if ("gameMentionInput" === type.inlineAutocompleteType) {
          const current5 = chatInputRef.current;
          current5.insertText(afk, tokenStart, false);
          beginSearch(tokenStart);
        }
      }
      if (type.type === unpackModuleId.GLOBAL) {
        if ("timestampMentionInput" === type.inlineAutocompleteType) {
          const current4 = chatInputRef.current;
          current4.insertText(closure_23, tokenStart, false);
          beginSearch2(tokenStart);
        }
      }
      const obj3 = autocompleter_AutocompleteUtils;
      const autocompleteResultText = obj3.getAutocompleteResultText(type, channel);
      const current = chatInputRef.current;
      const applicationCommandManager = current.getApplicationCommandManager();
      let tmp13;
      if (type.type === unpackModuleId.GAME_MENTION) {
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
      if (type.type === unpackModuleId.TIMESTAMP_MENTION) {
        tmp18 = autocompleteResultText;
        tmp19 = tmp13;
        if (null != applicationCommandManager) {
          const tmp8Result = TimestampUtils;
          const result = tmp8Result.formatTimestampMention(type.mention);
          tmp18 = autocompleteResultText;
          tmp19 = tmp13;
          if (null != result) {
            const addTimestampMentionResult = applicationCommandManager.addTimestampMention(
              result.formatted,
              type.mention,
            );
            const items1 = [applicationCommandManager.buildTimestampMentionNode(addTimestampMentionResult)];
            tmp18 = addTimestampMentionResult;
            tmp19 = items1;
          }
        }
      }
      let result1;
      if (applicationCommandManager != null) {
        result1 = applicationCommandManager.setAutoCompleteResult(channel.id, tmp18, arg2, type);
      }
      if (!result1) {
        const current2 = chatInputRef.current;
        current2.insertText(tmp18, tokenStart, type.type !== unpackModuleId.STICKER, tmp19);
        if (type.type === unpackModuleId.STICKER) {
          const current3 = chatInputRef.current;
          current3.handleSelectSticker(type.sticker, tokenStart);
        }
      }
    } else {
      const obj2 = { initialUpsellKey: stickerResults.EMOJI_AUTOCOMPLETE, analyticsLocations };
      obj = PremiumUpsellUtilsDefault;
      const result2 = obj.handleShowUpsellAlert(obj2);
    }
  }, items18);
  const items19 = [chatInputRef, optionStates, channel];
  const items20 = [autocompleteSelectionStart, autocompleteType, callback1, channel, callback2, showOptionValuesPicker];
  const callback3 = obj5.useCallback((type) => {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (type.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
      let success;
      const id = channel.id;
      if (optionStates[type.name].lastValidationResult != null) {
        success = lastValidationResult.success;
      }
      if (success) {
        const tmpResult = application_commands_ApplicationCommandUtils;
        const result = tmpResult.openCommandAttachmentPreview(applicationCommandManager, id, type.name);
      } else if (applicationCommandManager != null) {
        const result1 = applicationCommandManager.insertOrJumpCommandOption(type);
      }
    } else {
      let length;
      if (applicationCommandManager != null) {
        length = applicationCommandManager.props.text.length;
      }
      if (applicationCommandManager != null) {
        const result2 = applicationCommandManager.insertOrJumpCommandOption(type, length);
      }
    }
  }, items19);
  callback4 = obj5.useCallback((type) => {
    let id;
    let id1;
    if (type.type === unpackModuleId.GLOBAL) {
      if ("gameMentionInput" === type.inlineAutocompleteType) {
        type = unpackModuleId.GAME_MENTION;
      }
      obj = { selectionType: type, stickerId: id, gameId: id1 };
      id = null;
      const iOSTrackAutocompleteSelect = ChannelAutocompleteAnalytics.iOSTrackAutocompleteSelect;
      ChannelAutocompleteAnalytics;
      if (type.type === unpackModuleId.STICKER) {
        id = type.sticker.id;
      }
      id1 = null;
      if (type.type === unpackModuleId.GAME_MENTION) {
        id1 = type.game.id;
      }
      const merged = Object.assign(callback1());
      const result = iOSTrackAutocompleteSelect(autocompleteType, channel, obj);
      let num = autocompleteSelectionStart;
      if (autocompleteSelectionStart == null) {
        num = 0;
      }
      callback2(type, num, showOptionValuesPicker);
    }
    if (type.type === unpackModuleId.GLOBAL) {
      if ("timestampMentionInput" === type.inlineAutocompleteType) {
        type = unpackModuleId.TIMESTAMP_MENTION;
      }
    }
    type = type.type;
  }, items20);
  const tmp11Result2 = keyboardType(obj5.useState(null), 2);
  first4 = tmp11Result2[0];
  closure_60 = tmp11Result2[1];
  const items21 = [autocompleteType, callback4, first4, channel, activeCommand];
  const callback5 = obj5.useCallback((item) => {
    let tmp65;
    item = item.item;
    const type = item.type;
    if (scaledTextLineHeight.USER === type) {
      const obj2 = {
        guildId: channel.guild_id,
        onPress() {
          return callback4(item);
        },
      };
      const User = channel(canMentionEveryone[20]).User;
      const merged = Object.assign(item);
      return setting1(User, obj2);
    } else if (scaledTextLineHeight.GLOBAL === type) {
      const obj3 = {
        onPress() {
          return callback4(item);
        },
      };
      const Global = channel(canMentionEveryone[20]).Global;
      const merged1 = Object.assign(item);
      return setting1(Global, obj3);
    } else if (scaledTextLineHeight.ROLE === type) {
      const obj4 = {
        onPress() {
          return callback4(item);
        },
        showDescription: tmp65,
      };
      const Role = channel(canMentionEveryone[20]).Role;
      const merged2 = Object.assign(item);
      tmp65 = autocompleteType === selectionEnd.MENTIONS && null == activeCommand;
      return setting1(Role, obj4);
    } else if (scaledTextLineHeight.CHANNEL === type) {
      const obj5 = {
        onPress() {
          return callback4(item);
        },
      };
      const Channel = channel(canMentionEveryone[20]).Channel;
      const merged3 = Object.assign(item);
      return setting1(Channel, obj5);
    } else if (scaledTextLineHeight.EMOJI === type) {
      const obj6 = {
        onPress() {
          return callback4(item);
        },
      };
      const Emoji = channel(canMentionEveryone[20]).Emoji;
      const merged4 = Object.assign(item);
      return setting1(Emoji, obj6);
    } else if (scaledTextLineHeight.EMOJI_PREMIUM_UPSELL === type) {
      const obj7 = {
        onPress() {
          return callback4(item);
        },
      };
      const EmojiPremiumUpsell = channel(canMentionEveryone[20]).EmojiPremiumUpsell;
      const merged5 = Object.assign(item);
      return setting1(EmojiPremiumUpsell, obj7);
    } else if (scaledTextLineHeight.CHOICE === type) {
      const obj8 = {
        onPress() {
          return callback4(item);
        },
      };
      const Choice = channel(canMentionEveryone[20]).Choice;
      const merged6 = Object.assign(item);
      return setting1(Choice, obj8);
    } else if (scaledTextLineHeight.CHOICE_LOADING === type) {
      return setting1(channel(canMentionEveryone[20]).ChoiceLoading, {});
    } else if (scaledTextLineHeight.STICKER === type) {
      const obj9 = {
        onPress() {
          return callback4(item);
        },
        onLongPress() {
          return closure_60(item.sticker.id);
        },
        isInteracting: first4 === item.sticker.id,
      };
      const Sticker = channel(canMentionEveryone[20]).Sticker;
      const merged7 = Object.assign(item);
      const _HermesInternal = HermesInternal;
      return setting1(Sticker, obj9, "" + item.sticker.id + "-" + first4 === item.sticker.id);
    } else if (scaledTextLineHeight.GAME_MENTION === type) {
      const obj10 = {
        onPress() {
          return callback4(item);
        },
      };
      const Game = channel(canMentionEveryone[20]).Game;
      const merged8 = Object.assign(item);
      return setting1(Game, obj10);
    } else if (scaledTextLineHeight.TIMESTAMP_MENTION === type) {
      const obj11 = {
        onPress() {
          return callback4(item);
        },
      };
      const Timestamp = channel(canMentionEveryone[20]).Timestamp;
      const merged9 = Object.assign(item);
      return setting1(Timestamp, obj11);
    } else if (scaledTextLineHeight.LABEL === type) {
      obj = {};
      const Label = channel(canMentionEveryone[20]).Label;
      const merged10 = Object.assign(item);
      return setting1(Label, obj);
    } else {
      return null;
    }
  }, items21);
  const items22 = [tmp56Result.autocomplete, { maxHeight: memo3 }];
  let obj8 = { style: items23, children: items30 };
  items23 = [tmp56Result.autocompleteWrapper, prop];
  let obj9 = { style: items24, children: tmp67Result4 };
  items24 = [tmp56Result.autocompleteContainer, tmp60];
  tmp67Result4 = null != autocompleteType;
  const View = tmp4(tmp2[51]).View;
  if (tmp67Result4) {
    let tmp69Result = autocompleteType === selectionEnd.SLASHES_DISCOVERY;
    if (tmp69Result) {
      let obj10 = {
        channel,
        onPressSlashItem(command, section, visualSection) {
          let num = autocompleteSelectionStart;
          obj = {
            command,
            section,
            type: unpackModuleId.SLASH,
            visualSection,
            location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY,
          };
          if (autocompleteSelectionStart == null) {
            num = 0;
          }
          callback2(obj, num);
        },
        onHeightChange: tmp48,
        canOnlyUseTextCommands,
      };
      tmp69Result = tmp69(tmp4(tmp2[52]), obj10);
    }
    const items25 = [tmp69Result, , , , ,];
    let tmp69Result5 = autocompleteType === tmp72.SLASHES;
    if (tmp69Result5) {
      let obj11 = {
        channel,
        query: str,
        onPressCommandItem(commands, found) {
          let num = autocompleteSelectionStart;
          obj = {
            command: commands,
            section: found,
            type: unpackModuleId.SLASH,
            location: ApplicationCommandTypes.ApplicationCommandTriggerLocations.DISCOVERY,
            query,
          };
          if (autocompleteSelectionStart == null) {
            num = 0;
          }
          callback2(obj, num);
        },
        style: items22,
        ItemSeparatorComponent: tmp(tmp2[36]).getItemSeparator,
        getItemLayout: tmp(tmp2[36]).getItemLayout,
        onCommandsChange(commands) {
          let tmp3 = token;
          let num = 0;
          if (0 !== commands) {
            if (!context) {
              tmp3 = tmp2 === AutocompleteTypes.EMOJIS_AND_STICKERS ? authStore3 : closure_17;
            }
            num = commands * tmp3 + (commands - 1) * hairlineWidth;
          }
          closure_54(num);
        },
      };
      str = query;
      const tmp4Result = tmp4(tmp2[54]);
      if (query == null) {
        str = "";
      }
      tmp69Result5 = tmp69(tmp4Result, obj11);
    }
    items25[1] = tmp69Result5;
    let tmp67Result3 = autocompleteType === tmp72.EMOJIS_AND_STICKERS;
    if (tmp67Result3) {
      let tmp67Result = hasStickerResults;
      if (tmp67Result) {
        let obj12 = { children: items27 };
        let obj13 = { style: items26, children: setting1(Text, obj15) };
        items26 = [tmp56Result.sectionTitle];
        let obj14 = { height: scaledTextLineHeight };
        items26[1] = obj14;
        obj15 = { variant: tmp6, children: intl.format(tmp(tmp2[56]).t.uferGG, obj16) };
        Text = tmp(tmp2[55]).Text;
        intl = tmp(tmp2[56]).intl;
        obj16 = { prefix: query };
        items27 = [setting1(tmp68, obj13)];
        const obj17 = {
          horizontal: true,
          style: obj18,
          keyExtractor(sticker) {
            return sticker.sticker.id;
          },
          data: stickerResults,
          renderItem: callback5,
          showsHorizontalScrollIndicator: false,
          getItemLayout: autocompleteType,
          contentInset: { right: 12 },
        };
        obj18 = {};
        let merged = Object.assign(items22);
        let merged1 = Object.assign(tmp56Result.stickersAutocompleteList);
        items27[1] = setting1(chatInputRef, obj17);
        tmp67Result = tmp67(tmp71, obj12);
      }
      const items28 = [tmp67Result, ,];
      if (hasStickerResults) {
        hasStickerResults = hasNonStickerResults;
      }
      if (hasStickerResults) {
        const obj19 = { style: tmp56Result.sectionDivider };
        hasStickerResults = tmp69(tmp4(tmp2[57]), obj19);
      }
      items28[1] = hasStickerResults;
      if (hasNonStickerResults) {
        const obj20 = { style: items29, children: setting1(Text2, obj22) };
        items29 = [tmp56Result.sectionTitle];
        const obj21 = { height: scaledTextLineHeight };
        items29[1] = obj21;
        obj22 = { variant: tmp6, children: format(ksAVYt, obj23) };
        Text2 = tmp(tmp2[55]).Text;
        const intl2 = tmp(tmp2[56]).intl;
        format = intl2.format;
        let _HermesInternal = HermesInternal;
        let str2 = "";
        obj23 = { prefix: "" + memo + query };
        ksAVYt = tmp(tmp2[56]).t.ksAVYt;
        hasNonStickerResults = tmp69(tmp68, obj20);
      }
      const obj24 = { children: items28 };
      items28[2] = hasNonStickerResults;
      tmp67Result3 = tmp67(tmp71, obj24);
    }
    items25[2] = tmp67Result3;
    let tmp69Result6 = autocompleteType === tmp72.GAME_MENTIONS;
    if (tmp69Result6) {
      const obj25 = {
        onLayout(nativeEvent) {
          return _undefined(nativeEvent.nativeEvent.layout.height);
        },
        children: setting1(tmp4(tmp2[58]), {}),
      };
      tmp69Result6 = tmp69(tmp68, obj25);
    }
    items25[3] = tmp69Result6;
    let tmp69Result7 = autocompleteType === tmp72.TIMESTAMPS;
    if (tmp69Result7) {
      const obj26 = {
        onLayout(nativeEvent) {
          return _undefined2(nativeEvent.nativeEvent.layout.height);
        },
        children: setting1(tmp4(tmp2[30]), {}),
      };
      tmp69Result7 = tmp69(tmp68, obj26);
    }
    const obj27 = { children: items25 };
    items25[4] = tmp69Result7;
    const obj28 = {
      style: items22,
      keyExtractor(arg0, arg1) {
        return String(arg1);
      },
      data: nonStickerResults,
      renderItem: callback5,
      ItemSeparatorComponent: tmp(tmp2[36]).getItemSeparator,
      getItemLayout: tmp(tmp2[36]).getItemLayout,
      onContentSizeChange(arg0, arg1) {
        return closure_43(arg1);
      },
    };
    items25[5] = setting1(chatInputRef, obj28);
    tmp67Result4 = tmp67(tmp71, obj27);
  }
  items30 = [setting1(View, obj9)];
  let tmp69Result8 = null != activeCommand && !commandsDisabled;
  if (tmp69Result8) {
    const obj29 = { style: memo5, children: setting1(tmp4(tmp2[59]), obj30) };
    obj30 = {
      command: activeCommand,
      section: activeSection,
      guildId: channel.guild_id,
      onPressOption: callback3,
      currentOption: activeOption,
      optionStates,
    };
    tmp69Result8 = tmp69(tmp68, obj29);
  }
  items30[1] = tmp69Result8;
  const obj31 = { style: tmp56Result.autocompletePositionRelative, children: anchor(commandsDisabled, obj8) };
  return setting1(commandsDisabled, obj31);
});
forwardRefResult.displayName = "AutocompleteWrapper";
const memoResult = react.memo(forwardRefResult);
let result = size.fileFinishedImporting("modules/autocompleter/native/AutocompleteWrapper.tsx");

export default memoResult;
