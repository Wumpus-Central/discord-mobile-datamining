// === Module 15456: CustomTypingIndicatorEditScreen ===

// Module 15456 (CustomTypingIndicatorEditScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import user from "user" /* 1397 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1410 */;
import Link from "Link" /* 1503 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6841 */;
import openPremiumModalDefault from "openPremiumModal" /* 9328 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 11659 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
function CustomTypingIndicatorEditScreenContent(mode) {
  mode = mode.mode;
  let analyticsLocations;
  let first;
  let first1;
  noop = undefined;
  let first2;
  let onChange;
  let first3;
  let onChange2;
  let memo;
  constants3 = undefined;
  let memo1;
  closure_13 = undefined;
  let ref;
  c15 = undefined;
  closure_16 = undefined;
  let tmp = ref();
  const tmp3 = analyticsLocations;
  const nativeStackNavigation = mode(analyticsLocations[16]).useNativeStackNavigation();
  let obj = mode(analyticsLocations[16]);
  const items = [first3];
  const stateFromStores = mode(analyticsLocations[17]).useStateFromStores(items, () => first3.getCurrentUser());
  let obj2 = mode(analyticsLocations[17]);
  let result = nativeStackNavigation(analyticsLocations[18]).canUsePremiumProfileCustomization(stateFromStores);
  let obj3 = nativeStackNavigation(analyticsLocations[18]);
  analyticsLocations = nativeStackNavigation(analyticsLocations[15])(nativeStackNavigation(analyticsLocations[19]).CUSTOM_TYPING_INDICATOR_EDITOR).analyticsLocations;
  let tmp10 = !result;
  if (!result) {
    tmp10 = !tmp5;
  }
  const items1 = [analyticsLocations];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_EDIT_SCREEN_OPENED, { location_stack: analyticsLocations });
  }, items1);
  const tmp9 = nativeStackNavigation(analyticsLocations[15]);
  first = first1(noop.useState(mode(tmp3[21]).useCurrentCustomTypingIndicatorConfig(tmp5)), 1)[0];
  const tmp13 = first1(noop.useState(() => {
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
  noop = tmp13[1];
  const tmp15 = first1(noop.useState(first.typingSuggestion), 2);
  first2 = tmp15[0];
  onChange = tmp15[1];
  const tmp17 = first1(noop.useState(first.animation), 2);
  first3 = tmp17[0];
  onChange2 = tmp17[1];
  const items2 = [first1];
  memo = noop.useMemo(() => first1.filter((item) => null != item), items2);
  const tmp19 = memo.length === mode(tmp3[22]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  constants3 = tmp19;
  const items3 = [tmp19, memo, first2, first3];
  memo1 = noop.useMemo(() => ({ emojis: closure_11 ? memo : [], typingSuggestion: first2, animation: first3 }), items3);
  const tmp21 = nativeStackNavigation(tmp3[23])(memo1, first);
  closure_13 = tmp22;
  const items4 = [first2];
  const callback = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_5((arr) => arr.map((item, index) => {
      if (index === closure_1_0) {
        let tmp = closure_1_1;
      } else {
        tmp = item;
      }
      return tmp;
    }));
  }, []);
  const items5 = [memo, first3];
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15457, dependencyMap.paths), "CustomTypingIndicatorTypingSuggestionPickerSheet", { initialValue: first2, onChange });
  }, items4);
  const callback2 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15458, dependencyMap.paths), "CustomTypingIndicatorAnimationPickerSheet", { emojis: memo, initialAnimation: first3, onChange: onChange2 });
  }, items5);
  ref = noop.useRef(null);
  const items6 = [analyticsLocations];
  const items7 = [analyticsLocations];
  const callback3 = noop.useCallback(() => {
    if (ref.current == null) {
      ref.current = CustomTypingIndicatorUtils.getSurpriseMeEmojiPool();
    }
    closure_5(CustomTypingIndicatorUtils.pickRandomCustomTypingIndicatorEmojis(ref.current));
    onChange(CustomTypingIndicatorUtils.getRandomCustomTypingIndicatorSuggestion());
    onChange2(CustomTypingIndicatorUtils.getRandomCustomTypingIndicatorAnimation());
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_STYLE_SURPRISE_ME, { location_stack: analyticsLocations });
    const obj6 = { location_stack: analyticsLocations };
  }, items6);
  const callback4 = noop.useCallback(() => {
    closure_5(Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null));
    onChange(user.TypingSuggestion.UNSPECIFIED);
    onChange2(user.TypingIndicatorAnimation.UNSPECIFIED);
    const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_STYLE_REMOVED, { location_stack: analyticsLocations });
  }, items7);
  const tmp2Result = mode(tmp3[21]);
  [tmp29, c15] = first1(noop.useState(false), 2);
  closure_16 = noop.useRef(false);
  const items8 = [!tmp21, memo1, mode, nativeStackNavigation, analyticsLocations];
  let callback5 = noop.useCallback(first(function*() {
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
        return { value: "IconComponent", done: null };
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
            if (closure_13) {
              if (!ref.current) {
                let tmp37 = null;
                if (!tmp33(memo1, mode(tmp2[22]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                  tmp37 = memo1;
                }
                if ("try_it_out" === mode) {
                  const result = mode(tmp2[28]).setTryItOutCustomTypingIndicatorStyle(tmp37);
                  const obj10 = mode(tmp2[28]);
                } else if ("profile_pending" === tmp38) {
                  const obj4 = { customTypingIndicatorStyle: tmp37 };
                  mode(tmp2[29]).setPendingChanges(obj4);
                  const obj8 = mode(tmp2[29]);
                } else {
                  ref.current = true;
                  _undefined(true);
                  const obj6 = { typingIndicatorStyle: tmp37 };
                  c3 = 1;
                  c4 = 1;
                  const obj7 = { value: mode(tmp2[30]).saveProfileAndAccountChanges(obj6), done: false };
                  return obj7;
                }
                tmp33 = v0(tmp2[23]);
              }
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
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
          closure_130_16.current = false;
          closure_130_15(false);
          let ok;
          if (closure_129_0 != null) {
            ok = closure_129_0.ok;
          }
          if (!ok) {
            let firstFieldErrorMessage = null;
            if (null != closure_129_0) {
              const aPIError = new mode(tmp2[31]).APIError(closure_129_0);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
            }
            closure_129_1 = firstFieldErrorMessage;
            mode = closure_129_1;
            if (closure_129_1 == null) {
              const intl = mode(tmp2[10]).intl;
              mode = intl.string(mode(tmp2[10]).t["84MExs"]);
            }
            const result1 = mode(tmp2[32]).showGenericProfileUpdateFailureToast(mode);
            c4 = 3;
            const obj12 = { value: undefined, done: true };
            return obj12;
          }
        }
        const obj14 = {};
        const obj11 = v0(tmp2[20]);
        const merged = Object.assign(mode(tmp2[33]).getTypingIndicatorStyleAnalytics(closure_130_12));
        obj14.location_stack = closure_130_2;
        obj11.track(constants.TYPING_INDICATOR_STYLE_APPLIED, obj14);
        if (closure_130_1.isFocused()) {
          closure_130_1.goBack();
        }
        const obj13 = mode(tmp2[33]);
      } catch (tmp65) {
        c4 = tmp;
        throw tmp65;
      }
    }
  }), items8);
  const items9 = [analyticsLocations];
  let obj4 = { style: tmp.screen, children: null };
  const container = tmp.container;
  const callback6 = noop.useCallback(() => {
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
    const tmp7Result = tmp7(tmp3[35]);
    obj8.username = tmp7(tmp3[36]).getName(null, null, stateFromStores);
    obj8.config = memo1;
    tmp38Result = tmp38(tmp7Result, obj8);
    const tmp7Result4 = tmp7(tmp3[36]);
  }
  obj7.children = tmp38Result;
  const items10 = [memo1(onChange, obj7), , , ];
  let obj9 = { style: tmp.section, children: null };
  let obj10 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  let intl = tmp2(tmp3[10]).intl;
  obj10.children = intl.string(nativeStackNavigation(tmp3[11])["l8CZ7+"]);
  const items11 = [memo1(mode(tmp3[37]).Text, obj10), memo1(nativeStackNavigation(tmp3[38]), { emojis: first1, onChange: callback }), ];
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
  obj11.trailing = memo1(mode(tmp3[40]).TableRow.TrailingText, { text: stringResult });
  obj11.onPress = callback2;
  obj12.children = memo1(mode(tmp3[40]).TableRow, obj11);
  items11[2] = memo1(mode(tmp3[39]).TableRowGroup, obj12);
  obj9.children = items11;
  items10[1] = closure_13(onChange, obj9);
  let obj13 = { style: tmp.section, children: null };
  let obj14 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  const intl6 = tmp2(tmp3[10]).intl;
  obj14.children = intl6.string(nativeStackNavigation(tmp3[11]).BGCQqw);
  const items12 = [memo1(mode(tmp3[37]).Text, obj14), , ];
  const obj15 = { hasIcons: false, children: null };
  const obj16 = { label: null, arrow: true, trailing: null, onPress: null };
  const intl7 = tmp2(tmp3[10]).intl;
  obj16.label = intl7.string(nativeStackNavigation(tmp3[11])["X+ijyw"]);
  const obj17 = { text: null };
  const intl8 = tmp2(tmp3[10]).intl;
  const tmp28 = first1(noop.useState(false), 2);
  const tmp34 = first2;
  obj17.text = intl8.string(mode(tmp3[21]).getCustomTypingIndicatorSuggestionMessage(first2));
  obj16.trailing = memo1(mode(tmp3[40]).TableRow.TrailingText, obj17);
  obj16.onPress = callback1;
  obj15.children = memo1(mode(tmp3[40]).TableRow, obj16);
  items12[1] = memo1(mode(tmp3[39]).TableRowGroup, obj15);
  const obj18 = { style: tmp.description, variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children: null };
  const intl9 = tmp2(tmp3[10]).intl;
  const obj19 = { helpCenterUrl: null };
  const tmp2Result2 = mode(tmp3[21]);
  obj19.helpCenterUrl = nativeStackNavigation(tmp3[41]).getArticleURL(constants3.CUSTOM_TYPING_INDICATOR);
  obj18.children = intl9.format(nativeStackNavigation(tmp3[11]).k6c2yP, obj19);
  items12[2] = memo1(mode(tmp3[37]).Text, obj18);
  obj13.children = items12;
  items10[2] = closure_13(onChange, obj13);
  const obj20 = { spacing: 8, children: null };
  const obj21 = { variant: "secondary", size: "lg", icon: memo1(mode(tmp3[44]).DiceIcon, {}), text: null, onPress: null };
  const intl10 = tmp2(tmp3[10]).intl;
  obj21.text = intl10.string(nativeStackNavigation(tmp3[11]).q4045h);
  obj21.onPress = callback3;
  const items13 = [memo1(mode(tmp3[43]).Button, obj21), ];
  const obj22 = { variant: "secondary", size: "lg", icon: memo1(mode(tmp3[45]).DenyIcon, {}), text: null, onPress: null };
  const intl11 = tmp2(tmp3[10]).intl;
  obj22.text = intl11.string(nativeStackNavigation(tmp3[11])["UnIf+S"]);
  obj22.onPress = callback4;
  items13[1] = memo1(mode(tmp3[43]).Button, obj22);
  obj20.children = items13;
  items10[3] = closure_13(mode(tmp3[42]).Stack, obj20);
  obj6.children = items10;
  const items14 = [closure_13(tmp34, obj6), ];
  const obj23 = { visible: !tmp21, disabled: tmp29, loading: tmp29, text: null, onPress: null, renderButton: null };
  const tmp7Result5 = nativeStackNavigation(tmp3[41]);
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
      return memo1(nativeStackNavigation(analyticsLocations[47]), { text, onPress });
    };
  }
  obj23.renderButton = fn;
  items14[1] = memo1(nativeStackNavigation(tmp3[46]), obj23);
  obj4.children = items14;
  return closure_13(onChange, obj4);
}
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_9, AnalyticsSections: c10, HelpdeskArticles: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { screen: { flex: 1 }, container: { padding: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_24 }, previewContainer: null, section: null, description: null };
let obj3 = { padding: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_24 };
obj2.previewContainer = { height: 140, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8 };
let obj4 = { height: 140, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.section = { rowGap: nativeDefault.space.PX_8 };
let obj5 = { rowGap: nativeDefault.space.PX_8 };
obj2.description = { marginTop: nativeDefault.space.PX_4 };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { marginTop: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CustomTypingIndicatorEditScreen() {
  const cResult = c.c(7);
  const route = Link.useRoute();
  if (cResult[0] !== route.params) {
    let params = route.params;
    if (params == null) {
      params = {};
    }
    cResult[0] = route.params;
    cResult[1] = params;
    let tmp5 = params;
  } else {
    tmp5 = cResult[1];
  }
  ({ mode, analyticsLocations } = tmp5);
  if (analyticsLocations == null) {
    analyticsLocations = tmpResult.useLocationStackFromLocationContext();
  }
  if (cResult[2] !== mode) {
    const obj3 = { mode };
    const tmp10 = __initData(CustomTypingIndicatorEditScreenContent, obj3);
    cResult[2] = mode;
    cResult[3] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === analyticsLocations) {
    if (cResult[5] === tmp7) {
      let tmp11 = cResult[6];
    }
    return tmp11;
  }
  const tmp12 = __initData(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: tmp7 });
  cResult[4] = analyticsLocations;
  cResult[5] = tmp7;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  tmpResult = useAnalyticsLocations;
}) : (function CustomTypingIndicatorEditScreen() {
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
  return __initData(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: __initData(CustomTypingIndicatorEditScreenContent, { mode }) });
});