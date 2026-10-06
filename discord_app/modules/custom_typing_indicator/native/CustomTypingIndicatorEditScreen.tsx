// === Module 15194: CustomTypingIndicatorEditScreen ===

// Module 15194 (CustomTypingIndicatorEditScreen)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import user from "user" /* 1385 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1398 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import openPremiumModalDefault from "openPremiumModal" /* 8943 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 11600 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let c3, c4;

let c10;
let c9;
let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ AnalyticEvents: c9, AnalyticsSections: c10, HelpdeskArticles: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { screen: { flex: 1 }, container: obj2, previewContainer: obj3, section: obj4, description: obj5 };
obj2 = { padding: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { height: 140, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { rowGap: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_4 };
let closure_14 = createStyles(obj);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx");

export default function CustomTypingIndicatorEditScreen() {
  let TableRow2;
  let TrailingText;
  let TrailingText2;
  let closure_16;
  let first;
  let first1;
  let fn;
  let format;
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl6;
  let intl7;
  let items10;
  let items11;
  let items12;
  let items8;
  let items9;
  let k6c2yP;
  let nativeStackNavigation;
  let obj16;
  let obj17;
  let obj19;
  let obj4;
  let onChange;
  let source;
  let string;
  let string2Result;
  let stringResult;
  let tmp28;
  let tmp2Result4;
  let tmp37Result;
  let tmp7Result4;
  let tmp7Result5;
  let tmp = closure_14();
  const tmp3 = source;
  let obj = nativeStackNavigation(source[12]);
  nativeStackNavigation = obj.useNativeStackNavigation();
  let obj2 = nativeStackNavigation(source[13]);
  let params = obj2.useRoute().params;
  if (params == null) {
    params = {};
  }
  const mode = params.mode;
  source = params.source;
  const items = [onChange];
  const tmp2Result = nativeStackNavigation(tmp3[14]);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => onChange.getCurrentUser());
  let obj5 = mode(tmp3[15]);
  let result = obj5.canUsePremiumProfileCustomization(stateFromStores);
  const analyticsLocations = mode(tmp3[16])().analyticsLocations;
  const items1 = [source];
  const effect = first1.useEffect(() => {
    let str = source;
    const track = AnalyticsUtilsDefault.track;
    const TYPING_INDICATOR_EDIT_SCREEN_OPENED = first3.TYPING_INDICATOR_EDIT_SCREEN_OPENED;
    AnalyticsUtilsDefault;
    if (source == null) {
      str = "default";
    }
    track(TYPING_INDICATOR_EDIT_SCREEN_OPENED, { source: str });
  }, items1);
  const tmp2Result3 = nativeStackNavigation(tmp3[18]);
  first = first(first1.useState(tmp2Result3.useCurrentCustomTypingIndicatorConfig(tmp5)), 1)[0];
  const tmp12 = first(first1.useState(() => {
    let emojis;
    const obj = CustomTypingIndicatorTypes;
    if (obj.hasCustomTypingIndicatorEmojis(first.emojis)) {
      emojis = first.emojis;
    } else {
      const _Array = Array;
      const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
      emojis = ArrayResult.fill(null);
    }
    return emojis;
  }), 2);
  first1 = tmp12[0];
  let closure_6 = tmp12[1];
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let tmp = closure_6((arr) => arr.map((item, index) => {
      let tmp;
      if (index === closure_1_0) {
        tmp = closure_1_1;
      } else {
        tmp = item;
      }
      return tmp;
    }));
  }, []);
  const items5 = [memo, first3];
  const callback1 = first1.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { initialValue: first2, onChange };
    obj.openLazy(asyncRequire(15195, dependencyMap.paths), "CustomTypingIndicatorTypingSuggestionPickerSheet", obj2);
  }, items4);
  const callback2 = first1.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { emojis: memo, initialAnimation: first3, onChange: onChange2 };
    obj.openLazy(asyncRequire(15196, dependencyMap.paths), "CustomTypingIndicatorAnimationPickerSheet", obj2);
  }, items5);
  const ref = first1.useRef(null);
  const callback3 = first1.useCallback(() => {
    if (ref.current == null) {
      const obj = CustomTypingIndicatorUtils;
      ref.current = obj.getSurpriseMeEmojiPool();
    }
    const obj2 = CustomTypingIndicatorUtils;
    closure_6(obj2.pickRandomCustomTypingIndicatorEmojis(ref.current));
    const obj3 = CustomTypingIndicatorUtils;
    onChange(obj3.getRandomCustomTypingIndicatorSuggestion());
    const obj4 = CustomTypingIndicatorUtils;
    onChange2(obj4.getRandomCustomTypingIndicatorAnimation());
    const obj5 = AnalyticsUtilsDefault;
    obj5.track(first3.TYPING_INDICATOR_STYLE_SURPRISE_ME);
  }, []);
  const callback4 = first1.useCallback(() => {
    const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    closure_6(ArrayResult.fill(null));
    onChange(user.TypingSuggestion.UNSPECIFIED);
    onChange2(user.TypingIndicatorAnimation.UNSPECIFIED);
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(first3.TYPING_INDICATOR_STYLE_REMOVED);
  }, []);
  [tmp28, closure_16] = first(first1.useState(false), 2);
  first(first1.useState(false), 2);
  let closure_17 = first1.useRef(false);
  const items6 = [tmp21, memo1, mode, nativeStackNavigation, memo, first3, first2];
  let callback5 = first1.useCallback(analyticsLocations(function*() {
    let closure_0;
    let closure_2;
    let obj4;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let v0;
        let firstFieldErrorMessage;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            source = tmp;
            v0 = 0;
            nativeStackNavigation = undefined;
            firstFieldErrorMessage = undefined;
            if (closure_14) {
              if (!ref.current) {
                let tmp32 = memo1;
                const tmp31 = v0(source[20]);
                if (tmp31(memo1, nativeStackNavigation(source[19]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                  tmp32 = null;
                }
                if ("try_it_out" === mode) {
                  const obj9 = nativeStackNavigation(source[25]);
                  const result = obj9.setTryItOutCustomTypingIndicatorStyle(tmp32);
                } else if ("profile_pending" === tmp35) {
                  const obj3 = { customTypingIndicatorStyle: tmp32 };
                  const obj7 = nativeStackNavigation(source[26]);
                  obj7.setPendingChanges(obj3);
                } else {
                  ref.current = true;
                  closure_16(true);
                  const obj5 = { typingIndicatorStyle: tmp32 };
                  c3 = 1;
                  c4 = 1;
                  const obj6 = { value: obj4.saveProfileAndAccountChanges(obj5), done: false };
                  obj4 = nativeStackNavigation(source[27]);
                  return obj6;
                }
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
          const obj8 = { value, done: true };
          return obj8;
        } else {
          nativeStackNavigation = value;
          closure_130_17.current = false;
          closure_130_16(false);
          let ok;
          if (nativeStackNavigation != null) {
            ok = nativeStackNavigation.ok;
          }
          if (!ok) {
            firstFieldErrorMessage = null;
            if (null != nativeStackNavigation) {
              const self = this;
              const self2 = this;
              const aPIError = new nativeStackNavigation(source[28]).APIError(nativeStackNavigation);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
            }
            const tmp19 = nativeStackNavigation(source[29]);
            nativeStackNavigation = firstFieldErrorMessage;
            const showGenericProfileUpdateFailureToast = tmp19.showGenericProfileUpdateFailureToast;
            if (firstFieldErrorMessage == null) {
              const intl = nativeStackNavigation(source[10]).intl;
              nativeStackNavigation = intl.string(nativeStackNavigation(source[10]).t["84MExs"]);
            }
            const result1 = showGenericProfileUpdateFailureToast(nativeStackNavigation);
            c4 = 3;
            const obj10 = { value: undefined, done: true };
            return obj10;
          }
        }
        const obj11 = { emoji_names: closure_130_11.map((name) => name.name), animation_name: nativeStackNavigation(source[9]).TypingIndicatorAnimation[closure_130_9], typing_suggestion: nativeStackNavigation(source[9]).TypingSuggestion[closure_130_7], custom_emoji_count: closure_130_11.filter((id) => null != id.id).length };
        const track = v0(source[17]).track;
        const TYPING_INDICATOR_STYLE_APPLIED = constants.TYPING_INDICATOR_STYLE_APPLIED;
        const tmp50 = v0(source[17]);
        track(TYPING_INDICATOR_STYLE_APPLIED, obj11);
        if (closure_130_0.isFocused()) {
          closure_130_0.goBack();
        }
      } catch (tmp64) {
        c4 = 3;
        throw tmp64;
      }
    }
  }), items6);
  const items7 = [analyticsLocations];
  let tmp31 = memo1;
  let tmp32 = first2;
  let obj3 = { style: tmp.screen, children: items12 };
  const container = tmp.container;
  const callback6 = first1.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations };
    obj2 = { section: onChange2.SETTINGS_TYPING_INDICATOR };
    openPremiumModalDefault(obj);
  }, items7);
  const tmp33 = closure_6;
  if (tmp20) {
    obj4 = container;
  } else {
    obj4 = { paddingBottom: 90 };
    const tmp35 = container;
    const merged = Object.assign(container);
  }
  let obj6 = { contentContainerStyle: obj4, children: items8 };
  let obj7 = { style: tmp.previewContainer, children: tmp37Result };
  tmp37Result = null != stateFromStores;
  if (tmp37Result) {
    let obj8 = { username: tmp7Result4.getName(null, null, stateFromStores), config: memo1, justifyCenter: true };
    const tmp7Result = mode(tmp3[31]);
    tmp7Result4 = mode(tmp3[32]);
    tmp37Result = tmp37(tmp7Result, obj8);
  }
  items8 = [closure_12(tmp32, obj7), , , ];
  let obj9 = { style: tmp.section, children: items9 };
  let obj10 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: intl.string(tmp7(tmp3[11])["l8CZ7+"]) };
  const Text = tmp2(tmp3[33]).Text;
  intl = tmp2(tmp3[10]).intl;
  items9 = [closure_12(Text, obj10), closure_12(tmp7(tmp3[34]), { emojis: first1, onChange: callback }), ];
  const TableRowGroup = tmp2(tmp3[35]).TableRowGroup;
  let obj11 = { label: intl2.string(tmp7(tmp3[11]).iVKTbA), arrow: true, disabled: !tmp18, trailing: closure_12(TrailingText, { text: stringResult }), onPress: callback2 };
  const TableRow = tmp2(tmp3[36]).TableRow;
  intl2 = tmp2(tmp3[10]).intl;
  TrailingText = tmp2(tmp3[36]).TableRow.TrailingText;
  if (nativeStackNavigation(tmp3[9]).TypingIndicatorAnimation.PULSE === first3) {
    const intl5 = tmp2(tmp3[10]).intl;
    stringResult = intl5.string(tmp7(tmp3[11])["gyL/ce"]);
  } else if (nativeStackNavigation(tmp3[9]).TypingIndicatorAnimation.RING === first3) {
    const intl4 = tmp2(tmp3[10]).intl;
    stringResult = intl4.string(tmp7(tmp3[11]).EgekTm);
  } else if (nativeStackNavigation(tmp3[9]).TypingIndicatorAnimation.WAVE === first3) {
    const intl3 = tmp2(tmp3[10]).intl;
    stringResult = intl3.string(tmp7(tmp3[11])["8t5EiI"]);
  } else if (nativeStackNavigation(tmp3[9]).TypingIndicatorAnimation.UNSPECIFIED === first3) {
    const intl13 = tmp2(tmp3[10]).intl;
    stringResult = intl13.string(tmp2(tmp3[10]).t.PoWNfe);
  }
  const obj12 = { hasIcons: false, children: closure_12(TableRow, obj11) };
  items9[2] = closure_12(TableRowGroup, obj12);
  items8[1] = tmp31(tmp32, obj9);
  const obj13 = { style: tmp.section, children: items10 };
  const obj14 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: intl6.string(mode(tmp3[11]).BGCQqw) };
  const Text2 = tmp2(tmp3[33]).Text;
  intl6 = tmp2(tmp3[10]).intl;
  items10 = [closure_12(Text2, obj14), , ];
  const obj15 = { hasIcons: false, children: closure_12(TableRow2, obj16) };
  const TableRowGroup2 = tmp2(tmp3[35]).TableRowGroup;
  obj16 = { label: intl7.string(mode(tmp3[11])["X+ijyw"]), arrow: true, trailing: closure_12(TrailingText2, obj17), onPress: callback1 };
  TableRow2 = tmp2(tmp3[36]).TableRow;
  intl7 = tmp2(tmp3[10]).intl;
  obj17 = { text: string(tmp2Result4.getCustomTypingIndicatorSuggestionMessage(first2)) };
  TrailingText2 = tmp2(tmp3[36]).TableRow.TrailingText;
  const intl8 = tmp2(tmp3[10]).intl;
  string = intl8.string;
  tmp2Result4 = nativeStackNavigation(tmp3[18]);
  items10[1] = closure_12(TableRowGroup2, obj15);
  const obj18 = { style: tmp.description, variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children: format(k6c2yP, obj19) };
  const Text3 = tmp2(tmp3[33]).Text;
  const intl9 = tmp2(tmp3[10]).intl;
  format = intl9.format;
  obj19 = { helpCenterUrl: tmp7Result5.getArticleURL(memo.CUSTOM_TYPING_INDICATOR) };
  k6c2yP = tmp7(tmp3[11]).k6c2yP;
  tmp7Result5 = mode(tmp3[37]);
  items10[2] = closure_12(Text3, obj18);
  items8[2] = tmp31(tmp32, obj13);
  const obj20 = { spacing: 8, children: items11 };
  const Stack = tmp2(tmp3[38]).Stack;
  const obj21 = { variant: "secondary", size: "lg", icon: closure_12(nativeStackNavigation(tmp3[40]).DiceIcon, {}), text: intl10.string(mode(tmp3[11]).q4045h), onPress: callback3 };
  const Button = tmp2(tmp3[39]).Button;
  intl10 = tmp2(tmp3[10]).intl;
  items11 = [closure_12(Button, obj21), ];
  const obj22 = { variant: "secondary", size: "lg", icon: closure_12(nativeStackNavigation(tmp3[41]).DenyIcon, {}), text: intl11.string(mode(tmp3[11])["UnIf+S"]), onPress: callback4 };
  const Button2 = tmp2(tmp3[39]).Button;
  intl11 = tmp2(tmp3[10]).intl;
  items11[1] = closure_12(Button2, obj22);
  items8[3] = tmp31(Stack, obj20);
  items12 = [tmp31(tmp33, obj6), ];
  const obj23 = { visible: !tmp20, disabled: tmp28, loading: tmp28, text: string2Result, onPress: callback5, renderButton: fn };
  const tmp7Result6 = mode(tmp3[42]);
  const intl12 = tmp2(tmp3[10]).intl;
  const string2 = intl12.string;
  if (!result && "try_it_out" !== mode) {
    string2Result = string2(tmp2(tmp3[10]).t.pj0XBN);
  } else {
    string2Result = string2(tmp7(tmp3[11])["6ZxPAQ"]);
  }
  if (!result && "try_it_out" !== mode) {
    callback5 = callback6;
  }
  fn = undefined;
  if (!result && "try_it_out" !== mode) {
    fn = (arg0) => {
      let onPress;
      let text;
      ({ text, onPress } = arg0);
      return closure_12(mode(source[43]), { text, onPress });
    };
  }
  items12[1] = closure_12(tmp7Result6, obj23);
  return tmp31(tmp32, obj3);
};