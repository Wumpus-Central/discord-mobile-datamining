// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import CustomTypingIndicatorTypes from "../CustomTypingIndicatorTypes.tsx";
import Link from "../../../../_runtime/01500_Link.js";
import asyncRequireImpl from "../../../../_runtime/02118_asyncRequireImpl.js";
import UserSettingsProtoActionCreators from "../../user_settings/UserSettingsProtoActionCreators.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import CustomTypingIndicatorUtils from "../CustomTypingIndicatorUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function CustomTypingIndicatorEditScreenContent(mode) {
  mode = mode.mode;
  let analyticsLocations;
  let enabled;
  _slicedToArray = undefined;
  noop = undefined;
  let callback;
  let first;
  first1 = undefined;
  closure_9 = undefined;
  first2 = undefined;
  constants3 = undefined;
  first3 = undefined;
  onChange2 = undefined;
  let memo;
  closure_15 = undefined;
  let memo1;
  closure_17 = undefined;
  c19 = undefined;
  closure_20 = undefined;
  let tmp = closure_15();
  let tmp3 = analyticsLocations;
  const nativeStackNavigation = mode(analyticsLocations[16]).useNativeStackNavigation();
  let obj = mode(analyticsLocations[16]);
  items = [first1];
  const stateFromStores = mode(analyticsLocations[17]).useStateFromStores(items, () => first1.getCurrentUser());
  let obj2 = mode(analyticsLocations[17]);
  let result = nativeStackNavigation(analyticsLocations[18]).canUsePremiumProfileCustomization(stateFromStores);
  let obj3 = nativeStackNavigation(analyticsLocations[18]);
  analyticsLocations = nativeStackNavigation(analyticsLocations[15])(
    nativeStackNavigation(analyticsLocations[19]).CUSTOM_TYPING_INDICATOR_EDITOR,
  ).analyticsLocations;
  let tmp10 = !result;
  if (!result) {
    tmp10 = !tmp5;
  }
  const tmp9 = nativeStackNavigation(analyticsLocations[15]);
  enabled = mode(tmp3[20]).useCustomTypingIndicatorNewPresetsConfig("CustomTypingIndicatorEditScreen").enabled;
  const tmp2Result = mode(tmp3[20]);
  const tmp11 = _slicedToArray(mode(tmp3[21]).useSelectedDismissibleContent(enabled ? memo1 : closure_17), 2);
  _slicedToArray = tmp12;
  let tmp42Result2 =
    tmp11[0] === tmp2(tmp3[10]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_STYLING_BADGE;
  noop = tmp42Result2;
  const items1 = [tmp11[1]];
  callback = noop.useCallback(() => {
    closure_4(ContentDismissActionType.TAKE_ACTION);
    UserSettingsProtoActionCreators.addDismissedContent(
      dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_SETTINGS_BADGE,
    );
  }, items1);
  const items2 = [analyticsLocations];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_EDIT_SCREEN_OPENED, { location_stack: analyticsLocations });
  }, items2);
  const tmp2Result4 = mode(tmp3[21]);
  first = _slicedToArray(noop.useState(mode(tmp3[24]).useCurrentCustomTypingIndicatorConfig(tmp5)), 1)[0];
  [first1, closure_9] = noop.useState(() => {
    if (obj.hasCustomTypingIndicatorEmojis(first.emojis)) {
      let emojis = first.emojis;
    } else {
      const _Array = Array;
      emojis = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null);
      const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    }
    return emojis;
  });
  [first2, constants3] = noop.useState(first.typingSuggestion);
  [first3, onChange2] = noop.useState(first.animation);
  const items3 = [first1];
  memo = noop.useMemo(() => first1.filter((item) => null != item), items3);
  const tmp23 = memo.length === mode(tmp3[25]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  closure_15 = tmp23;
  const items4 = [tmp23, memo, first2, first3];
  memo1 = noop.useMemo(() => ({ emojis: closure_15 ? memo : [], typingSuggestion: first2, animation: first3 }), items4);
  const tmp25 = nativeStackNavigation(tmp3[26])(memo1, first);
  closure_17 = tmp26;
  const items5 = [first2, enabled, tmp42Result2, callback];
  const callback1 = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_9((arr) =>
      arr.map((item, index) => {
        if (index === closure_1_0) {
          let tmp = closure_1_1;
        } else {
          tmp = item;
        }
        return tmp;
      }),
    );
  }, []);
  const items6 = [memo, first3];
  const callback2 = noop.useCallback(() => {
    const obj2 = { initialValue: first2, presets: null, onChange: null, highlightedPresets: null, onDismiss: null };
    const obj = ActionSheetActionCreatorsDefault;
    const tmp3 = asyncRequireImpl(17867, dependencyMap.paths);
    obj2.presets = CustomTypingIndicatorUtils.getCustomTypingIndicatorSuggestionPresets(enabled);
    obj2.onChange = onChange;
    let prop;
    if (closure_5) {
      prop = CustomTypingIndicatorUtils.NEW_TYPING_SUGGESTION_PRESETS;
    }
    obj2.highlightedPresets = prop;
    let tmp6;
    if (closure_5) {
      tmp6 = callback;
    }
    obj2.onDismiss = tmp6;
    obj.openLazy(tmp3, "CustomTypingIndicatorTypingSuggestionPickerSheet", obj2);
  }, items5);
  const callback3 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(17868, dependencyMap.paths),
      "CustomTypingIndicatorAnimationPickerSheet",
      { emojis: memo, initialAnimation: first3, onChange: onChange2 },
    );
  }, items6);
  noop.useRef(null);
  const items7 = [analyticsLocations, enabled];
  const items8 = [analyticsLocations];
  const callback4 = noop.useCallback(() => {
    if (ref.current == null) {
      ref.current = CustomTypingIndicatorUtils.getSurpriseMeEmojiPool();
    }
    closure_9(CustomTypingIndicatorUtils.pickRandomCustomTypingIndicatorEmojis(ref.current));
    onChange(CustomTypingIndicatorUtils.getRandomCustomTypingIndicatorSuggestion(enabled));
    onChange2(CustomTypingIndicatorUtils.getRandomCustomTypingIndicatorAnimation());
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_STYLE_SURPRISE_ME, { location_stack: analyticsLocations });
    const obj6 = { location_stack: analyticsLocations };
  }, items7);
  const callback5 = noop.useCallback(() => {
    closure_9(Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null));
    onChange(user.TypingSuggestion.UNSPECIFIED);
    onChange2(user.TypingIndicatorAnimation.UNSPECIFIED);
    const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_STYLE_REMOVED, { location_stack: analyticsLocations });
  }, items8);
  const tmp2Result5 = mode(tmp3[24]);
  [tmp33, c19] = noop.useState(false);
  closure_20 = noop.useRef(false);
  const items9 = [!tmp25, memo1, mode, nativeStackNavigation, analyticsLocations];
  let callback6 = noop.useCallback(
    enabled(function* () {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const v0 = 0;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              if (closure_17) {
                if (!ref.current) {
                  let tmp37 = null;
                  if (!tmp33(memo1, mode(tmp2[25]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                    tmp37 = memo1;
                  }
                  if ("try_it_out" === mode) {
                    const result = mode(tmp2[31]).setTryItOutCustomTypingIndicatorStyle(tmp37);
                    const obj10 = mode(tmp2[31]);
                  } else if ("profile_pending" === tmp38) {
                    const obj4 = { customTypingIndicatorStyle: tmp37 };
                    mode(tmp2[32]).setPendingChanges(obj4);
                    const obj8 = mode(tmp2[32]);
                  } else {
                    ref.current = true;
                    _undefined(true);
                    const obj6 = { typingIndicatorStyle: tmp37 };
                    c3 = 1;
                    c4 = 1;
                    const obj7 = { value: mode(tmp2[33]).saveProfileAndAccountChanges(obj6), done: false };
                    return obj7;
                  }
                  tmp33 = v0(tmp2[26]);
                }
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_129_0 = value;
            closure_130_20.current = false;
            closure_130_19(false);
            let ok;
            if (closure_129_0 != null) {
              ok = closure_129_0.ok;
            }
            if (!ok) {
              let firstFieldErrorMessage = null;
              if (null != closure_129_0) {
                const aPIError = new mode(tmp2[34]).APIError(closure_129_0);
                firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
              }
              closure_129_1 = firstFieldErrorMessage;
              mode = closure_129_1;
              if (closure_129_1 == null) {
                const intl = mode(tmp2[12]).intl;
                mode = intl.string(mode(tmp2[12]).t["84MExs"]);
              }
              const result1 = mode(tmp2[35]).showGenericProfileUpdateFailureToast(mode);
              c4 = 3;
              const obj12 = { value: undefined, done: true };
              return obj12;
            }
          }
          const obj14 = {};
          const obj11 = v0(tmp2[23]);
          const merged = Object.assign(mode(tmp2[36]).getTypingIndicatorStyleAnalytics(closure_130_16));
          obj14.location_stack = closure_130_2;
          obj11.track(constants.TYPING_INDICATOR_STYLE_APPLIED, obj14);
          if (closure_130_1.isFocused()) {
            closure_130_1.goBack();
          }
          const obj13 = mode(tmp2[36]);
        } catch (tmp65) {
          c4 = tmp;
          throw tmp65;
        }
      }
    }),
    items9,
  );
  const items10 = [analyticsLocations];
  let obj4 = { style: tmp.screen, children: null };
  const container = tmp.container;
  const callback7 = noop.useCallback(() => {
    const obj = { analyticsLocation: { section: constants2.SETTINGS_TYPING_INDICATOR }, analyticsLocations };
    openPremiumModalDefault(obj);
  }, items10);
  if (tmp25) {
    let obj5 = container;
  } else {
    obj5 = {};
    let merged = Object.assign(container);
    obj5.paddingBottom = 90;
  }
  let obj6 = { contentContainerStyle: obj5, children: null };
  let obj7 = { style: tmp.previewContainer, children: null };
  let tmp42Result = null != stateFromStores;
  if (tmp42Result) {
    let obj8 = { username: null, config: null, justifyCenter: true };
    const tmp7Result = tmp7(tmp3[38]);
    obj8.username = tmp7(tmp3[39]).getName(null, null, stateFromStores);
    obj8.config = memo1;
    tmp42Result = tmp42(tmp7Result, obj8);
    const tmp7Result4 = tmp7(tmp3[39]);
  }
  obj7.children = tmp42Result;
  const items11 = [onChange2(first, obj7), , ,];
  let obj9 = { style: tmp.section, children: null };
  let obj10 = { accessibilityRole: "header", variant: "body-sm/semibold", color: "text-default", children: null };
  let intl = tmp2(tmp3[12]).intl;
  obj10.children = intl.string(nativeStackNavigation(tmp3[13])["l8CZ7+"]);
  const items12 = [
    onChange2(mode(tmp3[40]).Text, obj10),
    onChange2(nativeStackNavigation(tmp3[41]), { emojis: first1, onChange: callback1 }),
  ];
  let obj11 = { label: null, arrow: true, disabled: null, trailing: null, onPress: null };
  const intl2 = tmp2(tmp3[12]).intl;
  obj11.label = intl2.string(nativeStackNavigation(tmp3[13]).iVKTbA);
  obj11.disabled = !tmp23;
  if (mode(tmp3[11]).TypingIndicatorAnimation.PULSE === first3) {
    const intl5 = tmp2(tmp3[12]).intl;
    let stringResult = intl5.string(tmp7(tmp3[13])["gyL/ce"]);
  } else if (tmp2(tmp3[11]).TypingIndicatorAnimation.RING === first3) {
    const intl4 = tmp2(tmp3[12]).intl;
    stringResult = intl4.string(tmp7(tmp3[13]).EgekTm);
  } else if (tmp2(tmp3[11]).TypingIndicatorAnimation.WAVE === first3) {
    const intl3 = tmp2(tmp3[12]).intl;
    stringResult = intl3.string(tmp7(tmp3[13])["8t5EiI"]);
  } else if (tmp2(tmp3[11]).TypingIndicatorAnimation.UNSPECIFIED === first3) {
    const intl14 = tmp2(tmp3[12]).intl;
    stringResult = intl14.string(tmp2(tmp3[12]).t.PoWNfe);
  }
  let obj12 = { hasIcons: false, children: null };
  obj11.trailing = onChange2(mode(tmp3[43]).TableRow.TrailingText, { text: stringResult });
  obj11.onPress = callback3;
  obj12.children = onChange2(mode(tmp3[43]).TableRow, obj11);
  items12[2] = onChange2(mode(tmp3[42]).TableRowGroup, obj12);
  obj9.children = items12;
  items11[1] = memo(first, obj9);
  let obj13 = { style: tmp.section, children: null };
  let obj14 = { style: tmp.sectionHeader, children: null };
  const obj15 = { accessibilityRole: "header", variant: "body-sm/semibold", color: "text-default", children: null };
  const intl6 = tmp2(tmp3[12]).intl;
  obj15.children = intl6.string(nativeStackNavigation(tmp3[13]).BGCQqw);
  const items13 = [onChange2(mode(tmp3[40]).Text, obj15)];
  if (tmp42Result2) {
    const obj16 = { variant: "body-sm/semibold", color: "text-brand", children: null };
    const intl7 = tmp2(tmp3[12]).intl;
    const obj17 = { count: tmp2(tmp3[24]).NEW_TYPING_SUGGESTION_PRESETS.length };
    obj16.children = intl7
      .formatToPlainString(tmp2(tmp3[12]).t.uL4ClK, obj17)
      .toLocaleUpperCase(tmp2(tmp3[12]).intl.currentLocale);
    tmp42Result2 = tmp42(tmp2(tmp3[40]).Text, obj16);
    const formatToPlainStringResult = intl7.formatToPlainString(tmp2(tmp3[12]).t.uL4ClK, obj17);
  }
  items13[1] = tmp42Result2;
  obj14.children = items13;
  const items14 = [memo(first, obj14), ,];
  const obj18 = { hasIcons: false, children: null };
  const obj19 = { label: null, arrow: true, trailing: null, onPress: null };
  const intl8 = tmp2(tmp3[12]).intl;
  obj19.label = intl8.string(nativeStackNavigation(tmp3[13])["X+ijyw"]);
  const obj20 = { text: null };
  const intl9 = tmp2(tmp3[12]).intl;
  const tmp32 = _slicedToArray(noop.useState(false), 2);
  const tmp38 = callback;
  obj20.text = intl9.string(mode(tmp3[24]).getCustomTypingIndicatorSuggestionMessage(first2));
  obj19.trailing = onChange2(mode(tmp3[43]).TableRow.TrailingText, obj20);
  obj19.onPress = callback2;
  obj18.children = onChange2(mode(tmp3[43]).TableRow, obj19);
  items14[1] = onChange2(mode(tmp3[42]).TableRowGroup, obj18);
  const obj21 = {
    style: tmp.description,
    variant: "body-xs/normal",
    color: "text-muted",
    includeFontPadding: true,
    children: null,
  };
  const intl10 = tmp2(tmp3[12]).intl;
  const obj22 = { helpCenterUrl: null };
  const tmp2Result6 = mode(tmp3[24]);
  obj22.helpCenterUrl = nativeStackNavigation(tmp3[44]).getArticleURL(constants3.CUSTOM_TYPING_INDICATOR);
  obj21.children = intl10.format(nativeStackNavigation(tmp3[13]).k6c2yP, obj22);
  items14[2] = onChange2(mode(tmp3[40]).Text, obj21);
  obj13.children = items14;
  items11[2] = memo(first, obj13);
  const obj23 = { spacing: 8, children: null };
  const obj24 = {
    variant: "secondary",
    size: "lg",
    icon: onChange2(mode(tmp3[47]).DiceIcon, {}),
    text: null,
    onPress: null,
  };
  const intl11 = tmp2(tmp3[12]).intl;
  obj24.text = intl11.string(nativeStackNavigation(tmp3[13]).q4045h);
  obj24.onPress = callback4;
  const items15 = [onChange2(mode(tmp3[46]).Button, obj24)];
  const obj25 = {
    variant: "secondary",
    size: "lg",
    icon: onChange2(mode(tmp3[48]).DenyIcon, {}),
    text: null,
    onPress: null,
  };
  const intl12 = tmp2(tmp3[12]).intl;
  obj25.text = intl12.string(nativeStackNavigation(tmp3[13])["UnIf+S"]);
  obj25.onPress = callback5;
  items15[1] = onChange2(mode(tmp3[46]).Button, obj25);
  obj23.children = items15;
  items11[3] = memo(mode(tmp3[45]).Stack, obj23);
  obj6.children = items11;
  const items16 = [memo(tmp38, obj6)];
  const obj26 = { visible: !tmp25, disabled: tmp33, loading: tmp33, text: null, onPress: null, renderButton: null };
  const tmp7Result5 = nativeStackNavigation(tmp3[44]);
  const intl13 = tmp2(tmp3[12]).intl;
  const string = intl13.string;
  if (tmp10) {
    let stringResult1 = string(tmp2(tmp3[12]).t.pj0XBN);
  } else {
    stringResult1 = string(tmp7(tmp3[13])["6ZxPAQ"]);
  }
  obj26.text = stringResult1;
  if (tmp10) {
    callback6 = callback7;
  }
  obj26.onPress = callback6;
  let fn;
  if (tmp10) {
    fn = (arg0) => {
      ({ text, onPress } = arg0);
      return onChange2(nativeStackNavigation(analyticsLocations[50]), { text, onPress });
    };
  }
  obj26.renderButton = fn;
  items16[1] = onChange2(nativeStackNavigation(tmp3[49]), obj26);
  obj4.children = items16;
  return memo(first, obj4);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticEvents: closure_9, AnalyticsSections: closure_10, HelpdeskArticles: closure_11 } = Constants);
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  screen: { flex: 1 },
  container: { padding: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_24 },
  previewContainer: null,
  section: null,
  sectionHeader: null,
  description: null,
};
let obj3 = { padding: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_24 };
obj2.previewContainer = {
  height: 140,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
};
let obj4 = {
  height: 140,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj2.section = { rowGap: nativeDefault.space.PX_8 };
obj2.sectionHeader = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
let obj5 = { rowGap: nativeDefault.space.PX_8 };
obj2.description = { marginTop: nativeDefault.space.PX_4 };
let closure_15 = createStyles.createStyles(obj2);
let items = [fn(5076).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_STYLING_BADGE];
let closure_17 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx");

export default function CustomTypingIndicatorEditScreen() {
  let params = Link.useRoute().params;
  if (params == null) {
    params = {};
  }
  ({ analyticsLocations, mode } = params);
  const locationStackFromLocationContext = useAnalyticsLocations.useLocationStackFromLocationContext();
  if (analyticsLocations == null) {
    analyticsLocations = locationStackFromLocationContext;
  }
  const tmpResult = useAnalyticsLocations;
  return state(useAnalyticsLocations.AnalyticsLocationProvider, {
    value: analyticsLocations,
    children: state(CustomTypingIndicatorEditScreenContent, { mode }),
  });
}
