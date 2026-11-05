// === Module 17623: CustomTypingIndicatorEditScreen ===

// Module 17623 (CustomTypingIndicatorEditScreen)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import user from "user" /* 1393 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1407 */;
import Link from "Link" /* 1500 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7465 */;
import openPremiumModalDefault from "openPremiumModal" /* 10092 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 13964 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function CustomTypingIndicatorEditScreenContent(mode) {
  mode = mode.mode;
  let analyticsLocations;
  let enabled;
  let first;
  let first1;
  closure_6 = undefined;
  let first2;
  let onChange;
  let first3;
  let onChange2;
  let memo;
  closure_12 = undefined;
  let memo1;
  closure_14 = undefined;
  c16 = undefined;
  closure_17 = undefined;
  let tmp = closure_14();
  const tmp3 = analyticsLocations;
  const nativeStackNavigation = mode(analyticsLocations[14]).useNativeStackNavigation();
  let obj = mode(analyticsLocations[14]);
  items = [onChange];
  const stateFromStores = mode(analyticsLocations[15]).useStateFromStores(items, () => onChange.getCurrentUser());
  let obj2 = mode(analyticsLocations[15]);
  let result = nativeStackNavigation(analyticsLocations[16]).canUsePremiumProfileCustomization(stateFromStores);
  let obj3 = nativeStackNavigation(analyticsLocations[16]);
  analyticsLocations = nativeStackNavigation(analyticsLocations[13])(nativeStackNavigation(analyticsLocations[17]).CUSTOM_TYPING_INDICATOR_EDITOR).analyticsLocations;
  let tmp10 = !result;
  if (!result) {
    tmp10 = !tmp5;
  }
  const tmp9 = nativeStackNavigation(analyticsLocations[13]);
  enabled = mode(tmp3[18]).useCustomTypingIndicatorNewPresetsConfig("CustomTypingIndicatorEditScreen").enabled;
  const items1 = [analyticsLocations];
  const effect = first1.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_EDIT_SCREEN_OPENED, { location_stack: analyticsLocations });
  }, items1);
  const tmp2Result = mode(tmp3[18]);
  first = first(first1.useState(mode(tmp3[20]).useCurrentCustomTypingIndicatorConfig(tmp5)), 1)[0];
  const tmp13 = first(first1.useState(() => {
    if (obj.hasCustomTypingIndicatorEmojis(first.emojis)) {
      let emojis = first.emojis;
    } else {
      const _Array = Array;
      emojis = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null);
      const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    }
    return emojis;
  }), 2);
  first1 = tmp13[0];
  closure_6 = tmp13[1];
  const tmp15 = first(first1.useState(first.typingSuggestion), 2);
  first2 = tmp15[0];
  onChange = tmp15[1];
  const tmp17 = first(first1.useState(first.animation), 2);
  first3 = tmp17[0];
  onChange2 = tmp17[1];
  const items2 = [first1];
  memo = first1.useMemo(() => first1.filter((item) => null != item), items2);
  const tmp19 = memo.length === mode(tmp3[21]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  closure_12 = tmp19;
  const items3 = [tmp19, memo, first2, first3];
  memo1 = first1.useMemo(() => ({ emojis: closure_12 ? memo : [], typingSuggestion: first2, animation: first3 }), items3);
  const tmp21 = nativeStackNavigation(tmp3[22])(memo1, first);
  closure_14 = tmp22;
  const items4 = [first2, enabled];
  const callback = first1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_6((arr) => arr.map((item, index) => {
      if (index === closure_1_0) {
        let tmp = closure_1_1;
      } else {
        tmp = item;
      }
      return tmp;
    }));
  }, []);
  const items5 = [memo, first3];
  const callback1 = first1.useCallback(() => {
    const obj2 = { initialValue: first2, presets: null, onChange: null };
    const obj = ActionSheetActionCreatorsDefault;
    const tmp = asyncRequireImpl(17625, dependencyMap.paths);
    obj2.presets = CustomTypingIndicatorUtils.getCustomTypingIndicatorSuggestionPresets(enabled);
    obj2.onChange = onChange;
    obj.openLazy(tmp, "CustomTypingIndicatorTypingSuggestionPickerSheet", obj2);
  }, items4);
  const callback2 = first1.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17626, dependencyMap.paths), "CustomTypingIndicatorAnimationPickerSheet", { emojis: memo, initialAnimation: first3, onChange: onChange2 });
  }, items5);
  first1.useRef(null);
  const items6 = [analyticsLocations, enabled];
  const items7 = [analyticsLocations];
  const callback3 = first1.useCallback(() => {
    if (ref.current == null) {
      ref.current = CustomTypingIndicatorUtils.getSurpriseMeEmojiPool();
    }
    closure_6(CustomTypingIndicatorUtils.pickRandomCustomTypingIndicatorEmojis(ref.current));
    onChange(CustomTypingIndicatorUtils.getRandomCustomTypingIndicatorSuggestion(enabled));
    onChange2(CustomTypingIndicatorUtils.getRandomCustomTypingIndicatorAnimation());
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_STYLE_SURPRISE_ME, { location_stack: analyticsLocations });
    const obj6 = { location_stack: analyticsLocations };
  }, items6);
  const callback4 = first1.useCallback(() => {
    closure_6(Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null));
    onChange(user.TypingSuggestion.UNSPECIFIED);
    onChange2(user.TypingIndicatorAnimation.UNSPECIFIED);
    const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_STYLE_REMOVED, { location_stack: analyticsLocations });
  }, items7);
  const tmp2Result3 = mode(tmp3[20]);
  [tmp29, c16] = first(first1.useState(false), 2);
  closure_17 = first1.useRef(false);
  const items8 = [!tmp21, memo1, mode, nativeStackNavigation, analyticsLocations];
  let callback5 = first1.useCallback(enabled(function*() {
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
            if (closure_14) {
              if (!ref.current) {
                let tmp37 = null;
                if (!tmp33(memo1, mode(tmp2[21]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                  tmp37 = memo1;
                }
                if ("try_it_out" === mode) {
                  const result = mode(tmp2[27]).setTryItOutCustomTypingIndicatorStyle(tmp37);
                  const obj10 = mode(tmp2[27]);
                } else if ("profile_pending" === tmp38) {
                  const obj4 = { customTypingIndicatorStyle: tmp37 };
                  mode(tmp2[28]).setPendingChanges(obj4);
                  const obj8 = mode(tmp2[28]);
                } else {
                  ref.current = true;
                  _undefined(true);
                  const obj6 = { typingIndicatorStyle: tmp37 };
                  c3 = 1;
                  c4 = 1;
                  const obj7 = { value: mode(tmp2[29]).saveProfileAndAccountChanges(obj6), done: false };
                  return obj7;
                }
                tmp33 = v0(tmp2[22]);
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
          closure_130_17.current = false;
          closure_130_16(false);
          let ok;
          if (closure_129_0 != null) {
            ok = closure_129_0.ok;
          }
          if (!ok) {
            let firstFieldErrorMessage = null;
            if (null != closure_129_0) {
              const aPIError = new mode(tmp2[30]).APIError(closure_129_0);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
            }
            closure_129_1 = firstFieldErrorMessage;
            mode = closure_129_1;
            if (closure_129_1 == null) {
              const intl = mode(tmp2[10]).intl;
              mode = intl.string(mode(tmp2[10]).t["84MExs"]);
            }
            const result1 = mode(tmp2[31]).showGenericProfileUpdateFailureToast(mode);
            c4 = 3;
            const obj12 = { value: undefined, done: true };
            return obj12;
          }
        }
        const obj14 = {};
        const obj11 = v0(tmp2[19]);
        const merged = Object.assign(mode(tmp2[32]).getTypingIndicatorStyleAnalytics(closure_130_13));
        obj14.location_stack = closure_130_2;
        obj11.track(constants.TYPING_INDICATOR_STYLE_APPLIED, obj14);
        if (closure_130_1.isFocused()) {
          closure_130_1.goBack();
        }
        const obj13 = mode(tmp2[32]);
      } catch (tmp65) {
        c4 = tmp;
        throw tmp65;
      }
    }
  }), items8);
  const items9 = [analyticsLocations];
  let obj4 = { style: tmp.screen, children: null };
  const container = tmp.container;
  const callback6 = first1.useCallback(() => {
    const obj = { analyticsLocation: { section: constants2.SETTINGS_TYPING_INDICATOR }, analyticsLocations };
    openPremiumModalDefault(obj);
  }, items9);
  if (tmp21) {
    let obj5 = container;
  } else {
    obj5 = {};
    let merged = Object.assign(container);
    obj5.paddingBottom = 90;
  }
  let obj6 = { contentContainerStyle: obj5, children: null };
  let obj7 = { style: tmp.previewContainer, children: null };
  let tmp38Result = null != stateFromStores;
  if (tmp38Result) {
    let obj8 = { username: null, config: null, justifyCenter: true };
    const tmp7Result = tmp7(tmp3[34]);
    obj8.username = tmp7(tmp3[35]).getName(null, null, stateFromStores);
    obj8.config = memo1;
    tmp38Result = tmp38(tmp7Result, obj8);
    const tmp7Result4 = tmp7(tmp3[35]);
  }
  obj7.children = tmp38Result;
  const items10 = [closure_12(first2, obj7), , , ];
  let obj9 = { style: tmp.section, children: null };
  let obj10 = { accessibilityRole: "header", variant: "body-sm/semibold", color: "text-default", children: null };
  let intl = tmp2(tmp3[10]).intl;
  obj10.children = intl.string(nativeStackNavigation(tmp3[11])["l8CZ7+"]);
  const items11 = [closure_12(mode(tmp3[36]).Text, obj10), closure_12(nativeStackNavigation(tmp3[37]), { emojis: first1, onChange: callback }), ];
  let obj11 = { label: null, arrow: true, disabled: null, trailing: null, onPress: null };
  const intl2 = tmp2(tmp3[10]).intl;
  obj11.label = intl2.string(nativeStackNavigation(tmp3[11]).iVKTbA);
  obj11.disabled = !tmp19;
  if (mode(tmp3[9]).TypingIndicatorAnimation.PULSE === first3) {
    const intl5 = tmp2(tmp3[10]).intl;
    let stringResult = intl5.string(tmp7(tmp3[11])["gyL/ce"]);
  } else if (tmp2(tmp3[9]).TypingIndicatorAnimation.RING === first3) {
    const intl4 = tmp2(tmp3[10]).intl;
    stringResult = intl4.string(tmp7(tmp3[11]).EgekTm);
  } else if (tmp2(tmp3[9]).TypingIndicatorAnimation.WAVE === first3) {
    const intl3 = tmp2(tmp3[10]).intl;
    stringResult = intl3.string(tmp7(tmp3[11])["8t5EiI"]);
  } else if (tmp2(tmp3[9]).TypingIndicatorAnimation.UNSPECIFIED === first3) {
    const intl13 = tmp2(tmp3[10]).intl;
    stringResult = intl13.string(tmp2(tmp3[10]).t.PoWNfe);
  }
  let obj12 = { hasIcons: false, children: null };
  obj11.trailing = closure_12(mode(tmp3[39]).TableRow.TrailingText, { text: stringResult });
  obj11.onPress = callback2;
  obj12.children = closure_12(mode(tmp3[39]).TableRow, obj11);
  items11[2] = closure_12(mode(tmp3[38]).TableRowGroup, obj12);
  obj9.children = items11;
  items10[1] = memo1(first2, obj9);
  let obj13 = { style: tmp.section, children: null };
  let obj14 = { accessibilityRole: "header", variant: "body-sm/semibold", color: "text-default", children: null };
  const intl6 = tmp2(tmp3[10]).intl;
  obj14.children = intl6.string(nativeStackNavigation(tmp3[11]).BGCQqw);
  const items12 = [closure_12(mode(tmp3[36]).Text, obj14), , ];
  const obj15 = { hasIcons: false, children: null };
  const obj16 = { label: null, arrow: true, trailing: null, onPress: null };
  const intl7 = tmp2(tmp3[10]).intl;
  obj16.label = intl7.string(nativeStackNavigation(tmp3[11])["X+ijyw"]);
  const obj17 = { text: null };
  const intl8 = tmp2(tmp3[10]).intl;
  const tmp28 = first(first1.useState(false), 2);
  const tmp34 = closure_6;
  obj17.text = intl8.string(mode(tmp3[20]).getCustomTypingIndicatorSuggestionMessage(first2));
  obj16.trailing = closure_12(mode(tmp3[39]).TableRow.TrailingText, obj17);
  obj16.onPress = callback1;
  obj15.children = closure_12(mode(tmp3[39]).TableRow, obj16);
  items12[1] = closure_12(mode(tmp3[38]).TableRowGroup, obj15);
  const obj18 = { style: tmp.description, variant: "body-xs/normal", color: "text-muted", includeFontPadding: true, children: null };
  const intl9 = tmp2(tmp3[10]).intl;
  const obj19 = { helpCenterUrl: null };
  const tmp2Result4 = mode(tmp3[20]);
  obj19.helpCenterUrl = nativeStackNavigation(tmp3[40]).getArticleURL(memo.CUSTOM_TYPING_INDICATOR);
  obj18.children = intl9.format(nativeStackNavigation(tmp3[11]).k6c2yP, obj19);
  items12[2] = closure_12(mode(tmp3[36]).Text, obj18);
  obj13.children = items12;
  items10[2] = memo1(first2, obj13);
  const obj20 = { spacing: 8, children: null };
  const obj21 = { variant: "secondary", size: "lg", icon: closure_12(mode(tmp3[43]).DiceIcon, {}), text: null, onPress: null };
  const intl10 = tmp2(tmp3[10]).intl;
  obj21.text = intl10.string(nativeStackNavigation(tmp3[11]).q4045h);
  obj21.onPress = callback3;
  const items13 = [closure_12(mode(tmp3[42]).Button, obj21), ];
  const obj22 = { variant: "secondary", size: "lg", icon: closure_12(mode(tmp3[44]).DenyIcon, {}), text: null, onPress: null };
  const intl11 = tmp2(tmp3[10]).intl;
  obj22.text = intl11.string(nativeStackNavigation(tmp3[11])["UnIf+S"]);
  obj22.onPress = callback4;
  items13[1] = closure_12(mode(tmp3[42]).Button, obj22);
  obj20.children = items13;
  items10[3] = memo1(mode(tmp3[41]).Stack, obj20);
  obj6.children = items10;
  const items14 = [memo1(tmp34, obj6), ];
  const obj23 = { visible: !tmp21, disabled: tmp29, loading: tmp29, text: null, onPress: null, renderButton: null };
  const tmp7Result5 = nativeStackNavigation(tmp3[40]);
  const intl12 = tmp2(tmp3[10]).intl;
  const string = intl12.string;
  if (tmp10) {
    let stringResult1 = string(tmp2(tmp3[10]).t.pj0XBN);
  } else {
    stringResult1 = string(tmp7(tmp3[11])["6ZxPAQ"]);
  }
  obj23.text = stringResult1;
  if (tmp10) {
    callback5 = callback6;
  }
  obj23.onPress = callback5;
  let fn;
  if (tmp10) {
    fn = (arg0) => {
      ({ text, onPress } = arg0);
      return closure_12(nativeStackNavigation(analyticsLocations[46]), { text, onPress });
    };
  }
  obj23.renderButton = fn;
  items14[1] = closure_12(nativeStackNavigation(tmp3[45]), obj23);
  obj4.children = items14;
  return memo1(first2, obj4);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticEvents: closure_9, AnalyticsSections: closure_10, HelpdeskArticles: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5143);
let obj2 = { screen: { flex: 1 }, container: { padding: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_24 }, previewContainer: null, section: null, description: null };
let obj3 = { padding: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_24 };
obj2.previewContainer = { height: 140, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8 };
let obj4 = { height: 140, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.section = { rowGap: nativeDefault.space.PX_8 };
let obj5 = { rowGap: nativeDefault.space.PX_8 };
obj2.description = { marginTop: nativeDefault.space.PX_4 };
let closure_14 = createStyles.createStyles(obj2);
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
  return application_id(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: application_id(CustomTypingIndicatorEditScreenContent, { mode }) });
};