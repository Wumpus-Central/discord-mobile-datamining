// === Module 15453: CustomTypingIndicatorEditScreen ===

// Module 15453 (CustomTypingIndicatorEditScreen)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import user from "user" /* 1380 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1393 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import openPremiumModalDefault from "openPremiumModal" /* 9524 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 12105 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsSections: c10, HelpdeskArticles: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4639);
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
  let tmp = closure_14();
  const tmp3 = source;
  nativeStackNavigation = nativeStackNavigation(source[12]).useNativeStackNavigation();
  let obj = nativeStackNavigation(source[12]);
  let params = nativeStackNavigation(source[13]).useRoute().params;
  if (params == null) {
    params = {};
  }
  const mode = params.mode;
  source = params.source;
  let obj2 = nativeStackNavigation(source[13]);
  const items = [onChange];
  const stateFromStores = nativeStackNavigation(tmp3[14]).useStateFromStores(items, () => onChange.getCurrentUser());
  const tmp2Result = nativeStackNavigation(tmp3[14]);
  let result = mode(tmp3[15]).canUsePremiumProfileCustomization(stateFromStores);
  const analyticsLocations = mode(tmp3[16])().analyticsLocations;
  let tmp9 = !result;
  if (!result) {
    tmp9 = !tmp5;
  }
  const items1 = [source];
  const effect = first1.useEffect(() => {
    let str = source;
    if (source == null) {
      str = "default";
    }
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_EDIT_SCREEN_OPENED, { source: str });
  }, items1);
  let obj5 = mode(tmp3[15]);
  first = first(first1.useState(nativeStackNavigation(tmp3[18]).useCurrentCustomTypingIndicatorConfig(tmp5)), 1)[0];
  const tmp12 = first(first1.useState(() => {
    if (obj.hasCustomTypingIndicatorEmojis(first.emojis)) {
      let emojis = first.emojis;
    } else {
      const _Array = Array;
      emojis = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null);
      const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    }
    return emojis;
  }), 2);
  first1 = tmp12[0];
  closure_6 = tmp12[1];
  const tmp14 = first(first1.useState(first.typingSuggestion), 2);
  const first2 = tmp14[0];
  onChange = tmp14[1];
  const tmp16 = first(first1.useState(first.animation), 2);
  const first3 = tmp16[0];
  const onChange2 = tmp16[1];
  const items2 = [first1];
  const memo = first1.useMemo(() => first1.filter((item) => null != item), items2);
  const tmp18 = memo.length === nativeStackNavigation(tmp3[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  closure_12 = tmp18;
  const items3 = [tmp18, memo, first2, first3];
  const memo1 = first1.useMemo(() => ({ emojis: closure_12 ? memo : [], typingSuggestion: first2, animation: first3 }), items3);
  const tmp20 = mode(tmp3[20])(memo1, first);
  closure_14 = tmp21;
  const items4 = [first2];
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15454, dependencyMap.paths), "CustomTypingIndicatorTypingSuggestionPickerSheet", { initialValue: first2, onChange });
  }, items4);
  const callback2 = first1.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15455, dependencyMap.paths), "CustomTypingIndicatorAnimationPickerSheet", { emojis: memo, initialAnimation: first3, onChange: onChange2 });
  }, items5);
  first1.useRef(null);
  const callback3 = first1.useCallback(() => {
    if (ref.current == null) {
      ref.current = CustomTypingIndicatorUtils.getSurpriseMeEmojiPool();
    }
    closure_6(CustomTypingIndicatorUtils.pickRandomCustomTypingIndicatorEmojis(ref.current));
    onChange(CustomTypingIndicatorUtils.getRandomCustomTypingIndicatorSuggestion());
    onChange2(CustomTypingIndicatorUtils.getRandomCustomTypingIndicatorAnimation());
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_STYLE_SURPRISE_ME);
  }, []);
  const callback4 = first1.useCallback(() => {
    closure_6(Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null));
    onChange(user.TypingSuggestion.UNSPECIFIED);
    onChange2(user.TypingIndicatorAnimation.UNSPECIFIED);
    const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    AnalyticsUtilsDefault.track(constants.TYPING_INDICATOR_STYLE_REMOVED);
  }, []);
  const tmp2Result3 = nativeStackNavigation(tmp3[18]);
  [tmp28, closure_16] = first(first1.useState(false), 2);
  closure_17 = first1.useRef(false);
  const items6 = [!tmp20, memo1, mode, nativeStackNavigation, memo, first3, first2];
  let callback5 = first1.useCallback(analyticsLocations(function*() {
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
                let tmp34 = memo1;
                if (tmp33(memo1, nativeStackNavigation(tmp2[19]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                  tmp34 = null;
                }
                if ("try_it_out" === mode) {
                  const result = nativeStackNavigation(tmp2[25]).setTryItOutCustomTypingIndicatorStyle(tmp34);
                  const obj10 = nativeStackNavigation(tmp2[25]);
                } else if ("profile_pending" === tmp37) {
                  const obj4 = { customTypingIndicatorStyle: tmp34 };
                  nativeStackNavigation(tmp2[26]).setPendingChanges(obj4);
                  const obj8 = nativeStackNavigation(tmp2[26]);
                } else {
                  ref.current = true;
                  value2(true);
                  const obj6 = { typingIndicatorStyle: tmp34 };
                  c3 = 1;
                  c4 = 1;
                  const obj7 = { value: nativeStackNavigation(tmp2[27]).saveProfileAndAccountChanges(obj6), done: false };
                  return obj7;
                }
                tmp33 = v0(tmp2[20]);
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
              const aPIError = new nativeStackNavigation(tmp2[28]).APIError(closure_129_0);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
            }
            closure_129_1 = firstFieldErrorMessage;
            nativeStackNavigation = closure_129_1;
            if (closure_129_1 == null) {
              const intl = nativeStackNavigation(tmp2[10]).intl;
              nativeStackNavigation = intl.string(nativeStackNavigation(tmp2[10]).t["84MExs"]);
            }
            const result1 = nativeStackNavigation(tmp2[29]).showGenericProfileUpdateFailureToast(nativeStackNavigation);
            c4 = 3;
            const obj12 = { value: undefined, done: true };
            return obj12;
          }
        }
        const obj13 = { emoji_names: closure_130_11.map((name) => name.name), animation_name: nativeStackNavigation(tmp2[9]).TypingIndicatorAnimation[closure_130_9], typing_suggestion: nativeStackNavigation(tmp2[9]).TypingSuggestion[closure_130_7], custom_emoji_count: closure_130_11.filter((id) => null != id.id).length };
        v0(tmp2[17]).track(constants.TYPING_INDICATOR_STYLE_APPLIED, obj13);
        if (closure_130_0.isFocused()) {
          closure_130_0.goBack();
        }
        const obj11 = v0(tmp2[17]);
      } catch (tmp65) {
        c4 = tmp;
        throw tmp65;
      }
    }
  }), items6);
  const items7 = [analyticsLocations];
  let obj3 = { style: tmp.screen, children: null };
  const container = tmp.container;
  const callback6 = first1.useCallback(() => {
    const obj = { analyticsLocation: { section: constants2.SETTINGS_TYPING_INDICATOR }, analyticsLocations };
    openPremiumModalDefault(obj);
  }, items7);
  if (tmp20) {
    let obj4 = container;
  } else {
    obj4 = {};
    const merged = Object.assign(container);
    obj4.paddingBottom = 90;
  }
  let obj6 = { contentContainerStyle: obj4, children: null };
  let obj7 = { style: tmp.previewContainer, children: null };
  let tmp37Result = null != stateFromStores;
  if (tmp37Result) {
    let obj8 = { username: null, config: null, justifyCenter: true };
    const tmp7Result = tmp7(tmp3[31]);
    obj8.username = tmp7(tmp3[32]).getName(null, null, stateFromStores);
    obj8.config = memo1;
    tmp37Result = tmp37(tmp7Result, obj8);
    const tmp7Result4 = tmp7(tmp3[32]);
  }
  obj7.children = tmp37Result;
  const items8 = [closure_12(first2, obj7), , , ];
  let obj9 = { style: tmp.section, children: null };
  let obj10 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  let intl = tmp2(tmp3[10]).intl;
  obj10.children = intl.string(mode(tmp3[11])["l8CZ7+"]);
  const items9 = [closure_12(nativeStackNavigation(tmp3[33]).Text, obj10), closure_12(mode(tmp3[34]), { emojis: first1, onChange: callback }), ];
  let obj11 = { label: null, arrow: true, disabled: null, trailing: null, onPress: null };
  const intl2 = tmp2(tmp3[10]).intl;
  obj11.label = intl2.string(mode(tmp3[11]).iVKTbA);
  obj11.disabled = !tmp18;
  if (nativeStackNavigation(tmp3[9]).TypingIndicatorAnimation.PULSE === first3) {
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
  obj11.trailing = closure_12(nativeStackNavigation(tmp3[36]).TableRow.TrailingText, { text: stringResult });
  obj11.onPress = callback2;
  obj12.children = closure_12(nativeStackNavigation(tmp3[36]).TableRow, obj11);
  items9[2] = closure_12(nativeStackNavigation(tmp3[35]).TableRowGroup, obj12);
  obj9.children = items9;
  items8[1] = memo1(first2, obj9);
  let obj13 = { style: tmp.section, children: null };
  const obj14 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  const intl6 = tmp2(tmp3[10]).intl;
  obj14.children = intl6.string(mode(tmp3[11]).BGCQqw);
  const items10 = [closure_12(nativeStackNavigation(tmp3[33]).Text, obj14), , ];
  const obj15 = { hasIcons: false, children: null };
  const obj16 = { label: null, arrow: true, trailing: null, onPress: null };
  const intl7 = tmp2(tmp3[10]).intl;
  obj16.label = intl7.string(mode(tmp3[11])["X+ijyw"]);
  const obj17 = { text: null };
  const intl8 = tmp2(tmp3[10]).intl;
  const tmp27 = first(first1.useState(false), 2);
  let tmp33 = closure_6;
  obj17.text = intl8.string(nativeStackNavigation(tmp3[18]).getCustomTypingIndicatorSuggestionMessage(first2));
  obj16.trailing = closure_12(nativeStackNavigation(tmp3[36]).TableRow.TrailingText, obj17);
  obj16.onPress = callback1;
  obj15.children = closure_12(nativeStackNavigation(tmp3[36]).TableRow, obj16);
  items10[1] = closure_12(nativeStackNavigation(tmp3[35]).TableRowGroup, obj15);
  const obj18 = { style: tmp.description, variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children: null };
  const intl9 = tmp2(tmp3[10]).intl;
  const obj19 = { helpCenterUrl: null };
  const tmp2Result4 = nativeStackNavigation(tmp3[18]);
  obj19.helpCenterUrl = mode(tmp3[37]).getArticleURL(memo.CUSTOM_TYPING_INDICATOR);
  obj18.children = intl9.format(mode(tmp3[11]).k6c2yP, obj19);
  items10[2] = closure_12(nativeStackNavigation(tmp3[33]).Text, obj18);
  obj13.children = items10;
  items8[2] = memo1(first2, obj13);
  const obj20 = { spacing: 8, children: null };
  const obj21 = { variant: "secondary", size: "lg", icon: closure_12(nativeStackNavigation(tmp3[40]).DiceIcon, {}), text: null, onPress: null };
  const intl10 = tmp2(tmp3[10]).intl;
  obj21.text = intl10.string(mode(tmp3[11]).q4045h);
  obj21.onPress = callback3;
  const items11 = [closure_12(nativeStackNavigation(tmp3[39]).Button, obj21), ];
  const obj22 = { variant: "secondary", size: "lg", icon: closure_12(nativeStackNavigation(tmp3[41]).DenyIcon, {}), text: null, onPress: null };
  const intl11 = tmp2(tmp3[10]).intl;
  obj22.text = intl11.string(mode(tmp3[11])["UnIf+S"]);
  obj22.onPress = callback4;
  items11[1] = closure_12(nativeStackNavigation(tmp3[39]).Button, obj22);
  obj20.children = items11;
  items8[3] = memo1(nativeStackNavigation(tmp3[38]).Stack, obj20);
  obj6.children = items8;
  const items12 = [memo1(tmp33, obj6), ];
  const obj23 = { visible: !tmp20, disabled: tmp28, loading: tmp28, text: null, onPress: null, renderButton: null };
  const tmp7Result5 = mode(tmp3[37]);
  const intl12 = tmp2(tmp3[10]).intl;
  const string = intl12.string;
  if (tmp9) {
    let stringResult1 = string(tmp2(tmp3[10]).t.pj0XBN);
  } else {
    stringResult1 = string(tmp7(tmp3[11])["6ZxPAQ"]);
  }
  obj23.text = stringResult1;
  if (tmp9) {
    callback5 = callback6;
  }
  obj23.onPress = callback5;
  let fn;
  if (tmp9) {
    fn = (arg0) => {
      ({ text, onPress } = arg0);
      return closure_12(mode(source[43]), { text, onPress });
    };
  }
  obj23.renderButton = fn;
  items12[1] = closure_12(mode(tmp3[42]), obj23);
  obj3.children = items12;
  return memo1(first2, obj3);
};