// === Module 14889: CustomTypingIndicatorEditScreen ===

// Module 14889 (CustomTypingIndicatorEditScreen)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "mergeGuildAvatar" /* 1923 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

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
  const isTryItOut = params.isTryItOut;
  let tmp2Result = tmp2(tmp3[14]);
  const items = [closure_8];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = isTryItOut(tmp3[15]);
  let result = obj4.canUsePremiumProfileCustomization(stateFromStores);
  analyticsLocations = isTryItOut(tmp3[16])().analyticsLocations;
  tmp2Result = tmp2(tmp3[17]);
  const entryPoint = tmp2Result.useCustomTypingIndicatorConfig("CustomTypingIndicatorEditScreen").entryPoint;
  let tmp8 = !result;
  if (!result) {
    tmp8 = !isTryItOut;
  }
  first = first(first1.useState(nativeStackNavigation(tmp3[18]).useCurrentCustomTypingIndicatorConfig(isTryItOut)), 1)[0];
  const tmp10 = first(first1.useState(() => {
    if (obj.hasCustomTypingIndicatorEmojis(first.emojis)) {
      let emojis = first.emojis;
    } else {
      const _Array = Array;
      emojis = Array(nativeStackNavigation(analyticsLocations[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null);
      const ArrayResult = Array(nativeStackNavigation(analyticsLocations[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    }
    return emojis;
  }), 2);
  first1 = tmp10[0];
  closure_6 = tmp10[1];
  const tmp12 = first(first1.useState(first.typingSuggestion), 2);
  const first2 = tmp12[0];
  closure_8 = tmp12[1];
  const tmp14 = first(first1.useState(first.animation), 2);
  const first3 = tmp14[0];
  closure_10 = tmp14[1];
  const items1 = [first1];
  const memo = first1.useMemo(() => first1.filter((arg0) => null != arg0), items1);
  const tmp16 = memo.length === nativeStackNavigation(tmp3[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  closure_12 = tmp16;
  const items2 = [tmp16, memo, first2, first3];
  const memo1 = first1.useMemo(() => ({ emojis: closure_12 ? memo : [], typingSuggestion: first2, animation: first3 }), items2);
  const tmp18 = isTryItOut(tmp3[20])(memo1, first);
  callback = tmp19;
  const items3 = [first2];
  callback = first1.useCallback((arg0, arg1) => {
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
  const callback1 = first1.useCallback(() => {
    let obj = isTryItOut(analyticsLocations[21]);
    obj = { initialValue: first2, onChange: closure_8 };
    obj.openLazy(nativeStackNavigation(analyticsLocations[23])(analyticsLocations[22], analyticsLocations.paths), "CustomTypingIndicatorTypingSuggestionPickerSheet", obj);
  }, items3);
  const callback2 = first1.useCallback(() => {
    let obj = isTryItOut(analyticsLocations[21]);
    obj = { emojis: memo, initialAnimation: first3, onChange: closure_10 };
    obj.openLazy(nativeStackNavigation(analyticsLocations[23])(analyticsLocations[24], analyticsLocations.paths), "CustomTypingIndicatorAnimationPickerSheet", obj);
  }, items4);
  closure_15 = first1.useRef(null);
  const callback3 = first1.useCallback(() => {
    if (ref.current == null) {
      tmp.current = nativeStackNavigation(analyticsLocations[18]).getSurpriseMeEmojiPool();
      const obj = nativeStackNavigation(analyticsLocations[18]);
    }
    callback(nativeStackNavigation(analyticsLocations[18]).pickRandomCustomTypingIndicatorEmojis(ref.current));
    const obj2 = nativeStackNavigation(analyticsLocations[18]);
    currentUser(nativeStackNavigation(analyticsLocations[18]).getRandomCustomTypingIndicatorSuggestion());
    const obj3 = nativeStackNavigation(analyticsLocations[18]);
    lib(nativeStackNavigation(analyticsLocations[18]).getRandomCustomTypingIndicatorAnimation());
    const obj4 = nativeStackNavigation(analyticsLocations[18]);
    isTryItOut(analyticsLocations[25]).track(first3.TYPING_INDICATOR_STYLE_SURPRISE_ME);
  }, []);
  const callback4 = first1.useCallback(() => {
    callback(Array(nativeStackNavigation(analyticsLocations[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null));
    currentUser(nativeStackNavigation(analyticsLocations[9]).TypingSuggestion.UNSPECIFIED);
    lib(nativeStackNavigation(analyticsLocations[9]).TypingIndicatorAnimation.UNSPECIFIED);
    const ArrayResult = Array(nativeStackNavigation(analyticsLocations[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    isTryItOut(analyticsLocations[25]).track(first3.TYPING_INDICATOR_STYLE_REMOVED);
  }, []);
  const tmp2Result1 = nativeStackNavigation(tmp3[18]);
  [tmp26, closure_16] = first(first1.useState(false), 2);
  closure_17 = first1.useRef(false);
  const items5 = [!tmp18, memo1, isTryItOut, entryPoint, nativeStackNavigation, memo, first3, first2];
  let callback5 = first1.useCallback(entryPoint(function*() {
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
            if (closure_1_14) {
              if (!closure_1_17.current) {
                let tmp34 = closure_1_13;
                if (tmp33(closure_1_13, closure_1_0(closure_1_2[19]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                  tmp34 = null;
                }
                if (closure_1_1) {
                  const result = closure_1_0(closure_1_2[26]).setTryItOutCustomTypingIndicatorStyle(tmp34);
                  const obj10 = closure_1_0(closure_1_2[26]);
                } else if ("profile" === c3) {
                  obj1 = { customTypingIndicatorStyle: null };
                  obj1[0] = tmp34;
                  closure_1_0(closure_1_2[27]).setPendingChanges(obj1);
                  const obj8 = closure_1_0(closure_1_2[27]);
                } else {
                  closure_1_17.current = true;
                  closure_1_16(true);
                  let obj4 = closure_1_0(closure_1_2[28]);
                  const obj2 = { typingIndicatorStyle: null };
                  obj2[0] = tmp34;
                  c3 = 1;
                  c4 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = obj4.saveProfileAndAccountChanges(obj2);
                  return obj3;
                }
                tmp33 = closure_1_1(closure_1_2[20]);
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
          closure_17.current = false;
          callback(false);
          ok = undefined;
          if (ok != null) {
            ok = ok.ok;
          }
          if (!ok) {
            firstFieldErrorMessage = null;
            if (null != ok) {
              const aPIError = new closure_1_0(closure_1_2[29]).APIError(ok);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
            }
            obj1 = closure_1_0(closure_1_2[30]);
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
        obj6[0] = closure_1_11.map((name) => name.name);
        obj6[1] = closure_1_0(closure_1_2[9]).TypingIndicatorAnimation[closure_1_9];
        obj6[2] = closure_1_0(closure_1_2[9]).TypingSuggestion[closure_1_7];
        obj6[3] = closure_1_11.filter((id) => null != id.id).length;
        closure_1_1(closure_1_2[25]).track(closure_1_9.TYPING_INDICATOR_STYLE_APPLIED, obj6);
        if (closure_1_0.isFocused()) {
          closure_1_0.goBack();
        }
        const obj11 = closure_1_1(closure_1_2[25]);
      } catch (tmp66) {
        c4 = tmp;
        throw tmp66;
      }
    }
  }), items5);
  const items6 = [analyticsLocations];
  obj = { style: tmp.screen, children: null };
  const container = tmp.container;
  const callback6 = first1.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations };
    obj = { section: lib.SETTINGS_TYPING_INDICATOR };
    isTryItOut(analyticsLocations[31])(obj);
  }, items6);
  if (tmp18) {
    obj = container;
  } else {
    obj = {};
    const merged = Object.assign(container);
    obj.paddingBottom = 90;
  }
  obj1 = { contentContainerStyle: obj, children: null };
  let obj2 = { style: tmp.previewContainer, children: null };
  let tmp35Result = null != stateFromStores;
  if (tmp35Result) {
    let obj3 = { username: null, config: null, justifyCenter: true };
    let tmp6Result = tmp6(tmp3[32]);
    tmp6Result = tmp6(tmp3[33]);
    obj3[0] = tmp6Result.getName(null, null, stateFromStores);
    obj3[1] = memo1;
    tmp35Result = tmp35(tmp6Result, obj3);
  }
  obj2[1] = tmp35Result;
  const items7 = [closure_12(first2, obj2), , , ];
  obj4 = { style: tmp.section, children: null };
  let obj5 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  let intl = tmp2(tmp3[10]).intl;
  obj5[3] = intl.string(isTryItOut(tmp3[11])["l8CZ7+"]);
  const items8 = [closure_12(nativeStackNavigation(tmp3[34]).Text, obj5), closure_12(isTryItOut(tmp3[35]), { emojis: first1, onChange: callback }), ];
  let obj6 = { label: null, arrow: true, disabled: null, trailing: null, onPress: null };
  const intl2 = tmp2(tmp3[10]).intl;
  obj6[0] = intl2.string(isTryItOut(tmp3[11]).iVKTbA);
  obj6[2] = !tmp16;
  if (nativeStackNavigation(tmp3[9]).TypingIndicatorAnimation.PULSE === first3) {
    const intl5 = tmp2(tmp3[10]).intl;
    let stringResult = intl5.string(tmp6(tmp3[11])["gyL/ce"]);
  } else if (tmp2(tmp3[9]).TypingIndicatorAnimation.RING === first3) {
    const intl4 = tmp2(tmp3[10]).intl;
    stringResult = intl4.string(tmp6(tmp3[11]).EgekTm);
  } else if (tmp2(tmp3[9]).TypingIndicatorAnimation.WAVE === first3) {
    const intl3 = tmp2(tmp3[10]).intl;
    stringResult = intl3.string(tmp6(tmp3[11])["8t5EiI"]);
  } else if (tmp2(tmp3[9]).TypingIndicatorAnimation.UNSPECIFIED === first3) {
    const intl13 = tmp2(tmp3[10]).intl;
    stringResult = intl13.string(tmp2(tmp3[10]).t.PoWNfe);
  }
  const obj7 = { hasIcons: false, children: null };
  obj6[3] = closure_12(nativeStackNavigation(tmp3[37]).TableRow.TrailingText, { text: stringResult });
  obj6[4] = callback2;
  obj7[1] = closure_12(nativeStackNavigation(tmp3[37]).TableRow, obj6);
  items8[2] = closure_12(nativeStackNavigation(tmp3[36]).TableRowGroup, obj7);
  obj4[1] = items8;
  items7[1] = memo1(first2, obj4);
  let obj8 = { style: tmp.section, children: null };
  const obj9 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  const intl6 = tmp2(tmp3[10]).intl;
  obj9[3] = intl6.string(isTryItOut(tmp3[11]).BGCQqw);
  const items9 = [closure_12(nativeStackNavigation(tmp3[34]).Text, obj9), , ];
  let obj10 = { hasIcons: false, children: null };
  let obj11 = { label: null, arrow: true, trailing: null, onPress: null };
  const intl7 = tmp2(tmp3[10]).intl;
  obj11[0] = intl7.string(isTryItOut(tmp3[11])["X+ijyw"]);
  const obj12 = { text: null };
  const intl8 = tmp2(tmp3[10]).intl;
  const tmp25 = first(first1.useState(false), 2);
  const tmp31 = closure_6;
  obj12[0] = intl8.string(nativeStackNavigation(tmp3[18]).getCustomTypingIndicatorSuggestionMessage(first2));
  obj11[2] = closure_12(nativeStackNavigation(tmp3[37]).TableRow.TrailingText, obj12);
  obj11[3] = callback1;
  obj10[1] = closure_12(nativeStackNavigation(tmp3[37]).TableRow, obj11);
  items9[1] = closure_12(nativeStackNavigation(tmp3[36]).TableRowGroup, obj10);
  const obj13 = { style: tmp.description, variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children: null };
  const intl9 = tmp2(tmp3[10]).intl;
  const obj14 = { helpCenterUrl: null };
  const tmp2Result2 = nativeStackNavigation(tmp3[18]);
  obj14[0] = isTryItOut(tmp3[38]).getArticleURL(memo.CUSTOM_TYPING_INDICATOR);
  obj13[4] = intl9.format(isTryItOut(tmp3[11]).k6c2yP, obj14);
  items9[2] = closure_12(nativeStackNavigation(tmp3[34]).Text, obj13);
  obj8[1] = items9;
  items7[2] = memo1(first2, obj8);
  const obj15 = { spacing: 8, children: null };
  const obj16 = { variant: "secondary", size: "lg", icon: closure_12(nativeStackNavigation(tmp3[41]).DiceIcon, {}), text: null, onPress: null };
  const intl10 = tmp2(tmp3[10]).intl;
  obj16[3] = intl10.string(isTryItOut(tmp3[11]).q4045h);
  obj16[4] = callback3;
  const items10 = [closure_12(nativeStackNavigation(tmp3[40]).Button, obj16), ];
  const obj17 = { variant: "secondary", size: "lg", icon: closure_12(nativeStackNavigation(tmp3[42]).DenyIcon, {}), text: null, onPress: null };
  const intl11 = tmp2(tmp3[10]).intl;
  obj17[3] = intl11.string(isTryItOut(tmp3[11])["UnIf+S"]);
  obj17[4] = callback4;
  items10[1] = closure_12(nativeStackNavigation(tmp3[40]).Button, obj17);
  obj15[1] = items10;
  items7[3] = memo1(nativeStackNavigation(tmp3[39]).Stack, obj15);
  obj1[1] = items7;
  const items11 = [memo1(tmp31, obj1), ];
  const obj18 = { visible: !tmp18, disabled: tmp26, loading: tmp26, text: null, onPress: null, renderButton: null };
  const tmp6Result1 = isTryItOut(tmp3[38]);
  const intl12 = tmp2(tmp3[10]).intl;
  const string = intl12.string;
  if (tmp8) {
    let stringResult1 = string(tmp2(tmp3[10]).t.pj0XBN);
  } else {
    stringResult1 = string(tmp6(tmp3[11])["6ZxPAQ"]);
  }
  obj18[3] = stringResult1;
  if (tmp8) {
    callback5 = callback6;
  }
  obj18[4] = callback5;
  let fn;
  if (tmp8) {
    fn = (arg0) => {
      ({ text, onPress } = arg0);
      return callback2(isTryItOut(analyticsLocations[44]), { text, onPress });
    };
  }
  obj18[5] = fn;
  items11[1] = closure_12(isTryItOut(tmp3[43]), obj18);
  obj[1] = items11;
  return memo1(first2, obj);
};