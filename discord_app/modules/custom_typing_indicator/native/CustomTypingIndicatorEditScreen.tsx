// === Module 15184: CustomTypingIndicatorEditScreen ===

// Module 15184 (CustomTypingIndicatorEditScreen)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: c9, AnalyticsSections: c10, HelpdeskArticles: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { screen: { flex: 1 }, container: null, previewContainer: null, section: null, description: null };
createCacheKey = { padding: ThemesDefault.space.PX_16, rowGap: ThemesDefault.space.PX_24 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { height: 140, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_8 };
let obj1 = { height: 140, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[3] = { rowGap: ThemesDefault.space.PX_8 };
let obj2 = { rowGap: ThemesDefault.space.PX_8 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_4 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: ThemesDefault.space.PX_4 };
let result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx");

export default function CustomTypingIndicatorEditScreen() {
  let tmp = callback();
  const tmp3 = analyticsLocations;
  let obj = nativeStackNavigation(analyticsLocations[12]);
  nativeStackNavigation = obj.useNativeStackNavigation();
  obj1 = nativeStackNavigation(analyticsLocations[13]);
  let params = obj1.useRoute().params;
  if (params == null) {
    params = {};
  }
  const mode = params.mode;
  let tmp2Result = tmp2(tmp3[14]);
  const items = [first3];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => first3.getCurrentUser());
  let obj4 = mode(tmp3[15]);
  let result = obj4.canUsePremiumProfileCustomization(stateFromStores);
  analyticsLocations = mode(tmp3[16])().analyticsLocations;
  let tmp9 = !result;
  if (!result) {
    tmp9 = !tmp5;
  }
  tmp2Result = tmp2(tmp3[17]);
  const first = first1(React.useState(tmp2Result.useCurrentCustomTypingIndicatorConfig(tmp5)), 1)[0];
  const tmp11 = first1(React.useState(() => {
    if (obj.hasCustomTypingIndicatorEmojis(first.emojis)) {
      let emojis = first.emojis;
    } else {
      const _Array = Array;
      emojis = Array(nativeStackNavigation(analyticsLocations[18]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null);
      const ArrayResult = Array(nativeStackNavigation(analyticsLocations[18]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    }
    return emojis;
  }), 2);
  first1 = tmp11[0];
  React = tmp11[1];
  const tmp13 = first1(React.useState(first.typingSuggestion), 2);
  const first2 = tmp13[0];
  closure_7 = tmp13[1];
  const tmp15 = first1(React.useState(first.animation), 2);
  first3 = tmp15[0];
  closure_9 = tmp15[1];
  const items1 = [first1];
  const memo = React.useMemo(() => first1.filter((arg0) => null != arg0), items1);
  const tmp17 = memo.length === nativeStackNavigation(tmp3[18]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  const constants = tmp17;
  const items2 = [tmp17, memo, first2, first3];
  const memo1 = React.useMemo(() => ({ emojis: closure_11 ? memo : [], typingSuggestion: first2, animation: first3 }), items2);
  const tmp19 = mode(tmp3[19])(memo1, first);
  closure_13 = tmp20;
  const items3 = [first2];
  callback = React.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    callback((arr) => arr.map((arg0, arg1) => {
      if (arg1 === closure_0) {
        let tmp = closure_1;
      } else {
        tmp = arg0;
      }
      return tmp;
    }));
  }, []);
  const items4 = [memo, first3];
  const callback1 = React.useCallback(() => {
    let obj = mode(analyticsLocations[20]);
    obj = { initialValue: first2, onChange: closure_7 };
    obj.openLazy(nativeStackNavigation(analyticsLocations[22])(analyticsLocations[21], analyticsLocations.paths), "CustomTypingIndicatorTypingSuggestionPickerSheet", obj);
  }, items3);
  const callback2 = React.useCallback(() => {
    let obj = mode(analyticsLocations[20]);
    obj = { emojis: memo, initialAnimation: first3, onChange: closure_9 };
    obj.openLazy(nativeStackNavigation(analyticsLocations[22])(analyticsLocations[23], analyticsLocations.paths), "CustomTypingIndicatorAnimationPickerSheet", obj);
  }, items4);
  callback = React.useRef(null);
  const callback3 = React.useCallback(() => {
    if (ref.current == null) {
      tmp.current = nativeStackNavigation(analyticsLocations[17]).getSurpriseMeEmojiPool();
      const obj = nativeStackNavigation(analyticsLocations[17]);
    }
    callback(nativeStackNavigation(analyticsLocations[17]).pickRandomCustomTypingIndicatorEmojis(ref.current));
    const obj2 = nativeStackNavigation(analyticsLocations[17]);
    callback2(nativeStackNavigation(analyticsLocations[17]).getRandomCustomTypingIndicatorSuggestion());
    const obj3 = nativeStackNavigation(analyticsLocations[17]);
    lib(nativeStackNavigation(analyticsLocations[17]).getRandomCustomTypingIndicatorAnimation());
    const obj4 = nativeStackNavigation(analyticsLocations[17]);
    mode(analyticsLocations[24]).track(lib.TYPING_INDICATOR_STYLE_SURPRISE_ME);
  }, []);
  const callback4 = React.useCallback(() => {
    callback(Array(nativeStackNavigation(analyticsLocations[18]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null));
    callback2(nativeStackNavigation(analyticsLocations[9]).TypingSuggestion.UNSPECIFIED);
    lib(nativeStackNavigation(analyticsLocations[9]).TypingIndicatorAnimation.UNSPECIFIED);
    const ArrayResult = Array(nativeStackNavigation(analyticsLocations[18]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    mode(analyticsLocations[24]).track(lib.TYPING_INDICATOR_STYLE_REMOVED);
  }, []);
  [tmp27, closure_15] = first1(React.useState(false), 2);
  closure_16 = React.useRef(false);
  const items5 = [!tmp19, memo1, mode, nativeStackNavigation, memo, first3, first2];
  let callback5 = React.useCallback(first(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp2;
            let firstFieldErrorMessage = 0;
            let ok;
            firstFieldErrorMessage = undefined;
            if (closure_1_13) {
              if (!closure_1_16.current) {
                let tmp34 = closure_1_12;
                if (tmp33(closure_1_12, closure_1_0(closure_1_2[18]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                  tmp34 = null;
                }
                if ("try_it_out" === closure_1_1) {
                  const result = closure_1_0(closure_1_2[25]).setTryItOutCustomTypingIndicatorStyle(tmp34);
                  const obj10 = closure_1_0(closure_1_2[25]);
                } else if ("profile_pending" === tmp37) {
                  obj1 = { customTypingIndicatorStyle: null };
                  obj1[0] = tmp34;
                  closure_1_0(closure_1_2[26]).setPendingChanges(obj1);
                  const obj8 = closure_1_0(closure_1_2[26]);
                } else {
                  closure_1_16.current = true;
                  closure_1_15(true);
                  let obj4 = closure_1_0(closure_1_2[27]);
                  const obj2 = { typingIndicatorStyle: null };
                  obj2[0] = tmp34;
                  c3 = 1;
                  c4 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = obj4.saveProfileAndAccountChanges(obj2);
                  return obj3;
                }
                tmp33 = closure_1_1(closure_1_2[19]);
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          ok = arg1;
          closure_16.current = false;
          callback(false);
          ok = undefined;
          if (ok != null) {
            ok = ok.ok;
          }
          if (!ok) {
            firstFieldErrorMessage = null;
            if (null != ok) {
              const aPIError = new closure_1_0(closure_1_2[28]).APIError(ok);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
            }
            obj1 = closure_1_0(closure_1_2[29]);
            ok = firstFieldErrorMessage;
            if (firstFieldErrorMessage == null) {
              const intl = closure_1_0(closure_1_2[10]).intl;
              ok = intl.string(closure_1_0(closure_1_2[10]).t["84MExs"]);
            }
            const result1 = obj1.showGenericProfileUpdateFailureToast(ok);
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = undefined;
            return obj5;
          }
        }
        const obj6 = { emoji_names: null, animation_name: null, typing_suggestion: null, custom_emoji_count: null };
        obj6[0] = closure_1_10.map((name) => name.name);
        obj6[1] = closure_1_0(closure_1_2[9]).TypingIndicatorAnimation[closure_1_8];
        obj6[2] = closure_1_0(closure_1_2[9]).TypingSuggestion[closure_1_6];
        obj6[3] = closure_1_10.filter((id) => null != id.id).length;
        closure_1_1(closure_1_2[24]).track(closure_1_9.TYPING_INDICATOR_STYLE_APPLIED, obj6);
        if (closure_1_0.isFocused()) {
          closure_1_0.goBack();
        }
        const obj11 = closure_1_1(closure_1_2[24]);
      } catch (tmp65) {
        c4 = tmp;
        throw tmp65;
      }
    }
  }), items5);
  const items6 = [analyticsLocations];
  obj = { style: tmp.screen, children: null };
  const container = tmp.container;
  const callback6 = React.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations };
    obj = { section: memo.SETTINGS_TYPING_INDICATOR };
    mode(analyticsLocations[30])(obj);
  }, items6);
  if (tmp19) {
    obj = container;
  } else {
    obj = {};
    const merged = Object.assign(container);
    obj.paddingBottom = 90;
  }
  obj1 = { contentContainerStyle: obj, children: null };
  let obj2 = { style: tmp.previewContainer, children: null };
  let tmp36Result = null != stateFromStores;
  if (tmp36Result) {
    let obj3 = { username: null, config: null, justifyCenter: true };
    let tmp7Result = tmp7(tmp3[31]);
    tmp7Result = tmp7(tmp3[32]);
    obj3[0] = tmp7Result.getName(null, null, stateFromStores);
    obj3[1] = memo1;
    tmp36Result = tmp36(tmp7Result, obj3);
  }
  obj2[1] = tmp36Result;
  const items7 = [memo1(closure_7, obj2), , , ];
  obj4 = { style: tmp.section, children: null };
  let obj5 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  let intl = tmp2(tmp3[10]).intl;
  obj5[3] = intl.string(mode(tmp3[11])["l8CZ7+"]);
  const items8 = [memo1(nativeStackNavigation(tmp3[33]).Text, obj5), memo1(mode(tmp3[34]), { emojis: first1, onChange: callback }), ];
  let obj6 = { label: null, arrow: true, disabled: null, trailing: null, onPress: null };
  const intl2 = tmp2(tmp3[10]).intl;
  obj6[0] = intl2.string(mode(tmp3[11]).iVKTbA);
  obj6[2] = !tmp17;
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
  const obj7 = { hasIcons: false, children: null };
  obj6[3] = memo1(nativeStackNavigation(tmp3[36]).TableRow.TrailingText, { text: stringResult });
  obj6[4] = callback2;
  obj7[1] = memo1(nativeStackNavigation(tmp3[36]).TableRow, obj6);
  items8[2] = memo1(nativeStackNavigation(tmp3[35]).TableRowGroup, obj7);
  obj4[1] = items8;
  items7[1] = closure_13(closure_7, obj4);
  let obj8 = { style: tmp.section, children: null };
  const obj9 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  const intl6 = tmp2(tmp3[10]).intl;
  obj9[3] = intl6.string(mode(tmp3[11]).BGCQqw);
  const items9 = [memo1(nativeStackNavigation(tmp3[33]).Text, obj9), , ];
  let obj10 = { hasIcons: false, children: null };
  let obj11 = { label: null, arrow: true, trailing: null, onPress: null };
  const intl7 = tmp2(tmp3[10]).intl;
  obj11[0] = intl7.string(mode(tmp3[11])["X+ijyw"]);
  const obj12 = { text: null };
  const intl8 = tmp2(tmp3[10]).intl;
  const tmp26 = first1(React.useState(false), 2);
  const tmp32 = first2;
  obj12[0] = intl8.string(nativeStackNavigation(tmp3[17]).getCustomTypingIndicatorSuggestionMessage(first2));
  obj11[2] = memo1(nativeStackNavigation(tmp3[36]).TableRow.TrailingText, obj12);
  obj11[3] = callback1;
  obj10[1] = memo1(nativeStackNavigation(tmp3[36]).TableRow, obj11);
  items9[1] = memo1(nativeStackNavigation(tmp3[35]).TableRowGroup, obj10);
  const obj13 = { style: tmp.description, variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children: null };
  const intl9 = tmp2(tmp3[10]).intl;
  const obj14 = { helpCenterUrl: null };
  const tmp2Result1 = nativeStackNavigation(tmp3[17]);
  obj14[0] = mode(tmp3[37]).getArticleURL(constants.CUSTOM_TYPING_INDICATOR);
  obj13[4] = intl9.format(mode(tmp3[11]).k6c2yP, obj14);
  items9[2] = memo1(nativeStackNavigation(tmp3[33]).Text, obj13);
  obj8[1] = items9;
  items7[2] = closure_13(closure_7, obj8);
  const obj15 = { spacing: 8, children: null };
  const obj16 = { variant: "secondary", size: "lg", icon: memo1(nativeStackNavigation(tmp3[40]).DiceIcon, {}), text: null, onPress: null };
  const intl10 = tmp2(tmp3[10]).intl;
  obj16[3] = intl10.string(mode(tmp3[11]).q4045h);
  obj16[4] = callback3;
  const items10 = [memo1(nativeStackNavigation(tmp3[39]).Button, obj16), ];
  const obj17 = { variant: "secondary", size: "lg", icon: memo1(nativeStackNavigation(tmp3[41]).DenyIcon, {}), text: null, onPress: null };
  const intl11 = tmp2(tmp3[10]).intl;
  obj17[3] = intl11.string(mode(tmp3[11])["UnIf+S"]);
  obj17[4] = callback4;
  items10[1] = memo1(nativeStackNavigation(tmp3[39]).Button, obj17);
  obj15[1] = items10;
  items7[3] = closure_13(nativeStackNavigation(tmp3[38]).Stack, obj15);
  obj1[1] = items7;
  const items11 = [closure_13(tmp32, obj1), ];
  const obj18 = { visible: !tmp19, disabled: tmp27, loading: tmp27, text: null, onPress: null, renderButton: null };
  const tmp7Result1 = mode(tmp3[37]);
  const intl12 = tmp2(tmp3[10]).intl;
  const string = intl12.string;
  if (tmp9) {
    let stringResult1 = string(tmp2(tmp3[10]).t.pj0XBN);
  } else {
    stringResult1 = string(tmp7(tmp3[11])["6ZxPAQ"]);
  }
  obj18[3] = stringResult1;
  if (tmp9) {
    callback5 = callback6;
  }
  obj18[4] = callback5;
  let fn;
  if (tmp9) {
    fn = (arg0) => {
      ({ text, onPress } = arg0);
      return memo1(mode(analyticsLocations[43]), { text, onPress });
    };
  }
  obj18[5] = fn;
  items11[1] = memo1(mode(tmp3[42]), obj18);
  obj[1] = items11;
  return closure_13(closure_7, obj);
};