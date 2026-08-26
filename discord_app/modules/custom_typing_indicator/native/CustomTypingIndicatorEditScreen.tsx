// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: c9, AnalyticsSections: c10, HelpdeskArticles: unpackModuleId, UserSettingsSections: closure_12 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { screen: { flex: 1 }, container: null, previewContainer: null, section: null, description: null };
createCacheKey = { padding: ThemesDefault.space.PX_16, rowGap: ThemesDefault.space.PX_24 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { height: 200, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_8 };
let obj1 = { height: 200, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[3] = { rowGap: ThemesDefault.space.PX_8 };
let obj2 = { rowGap: ThemesDefault.space.PX_8 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_4 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: ThemesDefault.space.PX_4 };
let result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx");

export default function CustomTypingIndicatorEditScreen() {
  let tmp = callback();
  const tmp3 = analyticsLocations;
  let obj = nativeStackNavigation(analyticsLocations[13]);
  nativeStackNavigation = obj.useNativeStackNavigation();
  obj1 = nativeStackNavigation(analyticsLocations[14]);
  let params = obj1.useRoute().params;
  if (params == null) {
    params = {};
  }
  const isTryItOut = params.isTryItOut;
  let tmp2Result = tmp2(tmp3[15]);
  const items = [closure_8];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => currentUser.getCurrentUser());
  tmp2Result = tmp2(tmp3[16]);
  const isPremiumSubscriber = tmp2Result.useIsPremiumSubscriber(memo1.TIER_2);
  analyticsLocations = isTryItOut(tmp3[17])().analyticsLocations;
  const entryPoint = nativeStackNavigation(tmp3[18]).useCustomTypingIndicatorConfig("CustomTypingIndicatorEditScreen").entryPoint;
  let tmp8 = !isPremiumSubscriber;
  if (!isPremiumSubscriber) {
    let tmp9 = true === params.isDeepLink;
    if (!tmp9) {
      tmp9 = "profile" !== entryPoint;
    }
    tmp8 = tmp9;
  }
  const tmp2Result1 = nativeStackNavigation(tmp3[18]);
  first = first(first1.useState(nativeStackNavigation(tmp3[19]).useCurrentCustomTypingIndicatorConfig(isTryItOut)), 1)[0];
  const tmp11 = first(first1.useState(() => {
    if (obj.hasCustomTypingIndicatorEmojis(first.emojis)) {
      let emojis = first.emojis;
    } else {
      const _Array = Array;
      emojis = Array(nativeStackNavigation(analyticsLocations[20]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null);
      const ArrayResult = Array(nativeStackNavigation(analyticsLocations[20]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    }
    return emojis;
  }), 2);
  first1 = tmp11[0];
  closure_6 = tmp11[1];
  const tmp13 = first(first1.useState(first.typingSuggestion), 2);
  const first2 = tmp13[0];
  closure_8 = tmp13[1];
  const tmp15 = first(first1.useState(first.animation), 2);
  const first3 = tmp15[0];
  closure_10 = tmp15[1];
  const items1 = [first1];
  const memo = first1.useMemo(() => first1.filter((arg0) => null != arg0), items1);
  const tmp17 = memo.length === nativeStackNavigation(tmp3[20]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  closure_12 = tmp17;
  const items2 = [tmp17, memo, first2, first3];
  memo1 = first1.useMemo(() => ({ emojis: closure_12 ? memo : [], typingSuggestion: first2, animation: first3 }), items2);
  const tmp19 = isTryItOut(tmp3[21])(memo1, first);
  closure_14 = tmp20;
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
    let obj = isTryItOut(analyticsLocations[22]);
    obj = { initialValue: first2, onChange: closure_8 };
    obj.openLazy(nativeStackNavigation(analyticsLocations[24])(analyticsLocations[23], analyticsLocations.paths), "CustomTypingIndicatorTypingSuggestionPickerSheet", obj);
  }, items3);
  const callback2 = first1.useCallback(() => {
    let obj = isTryItOut(analyticsLocations[22]);
    obj = { emojis: memo, initialAnimation: first3, onChange: closure_10 };
    obj.openLazy(nativeStackNavigation(analyticsLocations[24])(analyticsLocations[25], analyticsLocations.paths), "CustomTypingIndicatorAnimationPickerSheet", obj);
  }, items4);
  closure_15 = first1.useRef(null);
  const callback3 = first1.useCallback(() => {
    if (ref.current == null) {
      tmp.current = nativeStackNavigation(analyticsLocations[19]).getSurpriseMeEmojiPool();
      const obj = nativeStackNavigation(analyticsLocations[19]);
    }
    callback(nativeStackNavigation(analyticsLocations[19]).pickRandomCustomTypingIndicatorEmojis(ref.current));
    const obj2 = nativeStackNavigation(analyticsLocations[19]);
    currentUser(nativeStackNavigation(analyticsLocations[19]).getRandomCustomTypingIndicatorSuggestion());
    const obj3 = nativeStackNavigation(analyticsLocations[19]);
    lib(nativeStackNavigation(analyticsLocations[19]).getRandomCustomTypingIndicatorAnimation());
    const obj4 = nativeStackNavigation(analyticsLocations[19]);
    isTryItOut(analyticsLocations[26]).track(first3.TYPING_INDICATOR_STYLE_SURPRISE_ME);
  }, []);
  const callback4 = first1.useCallback(() => {
    callback(Array(nativeStackNavigation(analyticsLocations[20]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null));
    currentUser(nativeStackNavigation(analyticsLocations[10]).TypingSuggestion.UNSPECIFIED);
    lib(nativeStackNavigation(analyticsLocations[10]).TypingIndicatorAnimation.UNSPECIFIED);
    const ArrayResult = Array(nativeStackNavigation(analyticsLocations[20]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    isTryItOut(analyticsLocations[26]).track(first3.TYPING_INDICATOR_STYLE_REMOVED);
  }, []);
  const tmp2Result2 = nativeStackNavigation(tmp3[19]);
  [tmp27, closure_16] = first(first1.useState(false), 2);
  closure_17 = first1.useRef(false);
  const items5 = [!tmp19, memo1, isTryItOut, entryPoint, nativeStackNavigation, memo, first3, first2];
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
                if (tmp33(closure_1_13, closure_1_0(closure_1_2[20]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                  tmp34 = null;
                }
                if (closure_1_1) {
                  const result = closure_1_0(closure_1_2[27]).setTryItOutCustomTypingIndicatorStyle(tmp34);
                  const obj10 = closure_1_0(closure_1_2[27]);
                } else if ("profile" === c3) {
                  obj1 = { customTypingIndicatorStyle: null };
                  obj1[0] = tmp34;
                  closure_1_0(closure_1_2[28]).setPendingChanges(obj1);
                  const obj8 = closure_1_0(closure_1_2[28]);
                } else {
                  closure_1_17.current = true;
                  closure_1_16(true);
                  let obj4 = closure_1_0(closure_1_2[29]);
                  const obj2 = { typingIndicatorStyle: null };
                  obj2[0] = tmp34;
                  c3 = 1;
                  c4 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = obj4.saveProfileAndAccountChanges(obj2);
                  return obj3;
                }
                tmp33 = closure_1_1(closure_1_2[21]);
              }
            }
            c4 = 3;
            closure_1_0.popTo(closure_1_12.OVERVIEW);
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
              const aPIError = new closure_1_0(closure_1_2[30]).APIError(ok);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
            }
            obj1 = closure_1_0(closure_1_2[31]);
            ok = firstFieldErrorMessage;
            if (firstFieldErrorMessage == null) {
              const intl = closure_1_0(closure_1_2[11]).intl;
              ok = intl.string(closure_1_0(closure_1_2[11]).t["84MExs"]);
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
        obj6[1] = closure_1_0(closure_1_2[10]).TypingIndicatorAnimation[closure_1_9];
        obj6[2] = closure_1_0(closure_1_2[10]).TypingSuggestion[closure_1_7];
        obj6[3] = closure_1_11.filter((id) => null != id.id).length;
        closure_1_1(closure_1_2[26]).track(closure_1_9.TYPING_INDICATOR_STYLE_APPLIED, obj6);
        if (closure_1_0.isFocused()) {
          if (closure_1_1) {
            closure_1_0.popTo(closure_1_12.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
          } else if ("settings" !== c3) {
            closure_1_0.popTo(closure_1_12.PROFILE_CUSTOMIZATION);
          }
        }
        const obj11 = closure_1_1(closure_1_2[26]);
      } catch (tmp75) {
        c4 = tmp;
        throw tmp75;
      }
    }
  }), items5);
  const items6 = [analyticsLocations];
  obj = { style: tmp.screen, children: null };
  const container = tmp.container;
  const callback6 = first1.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations };
    obj = { section: lib.SETTINGS_TYPING_INDICATOR };
    isTryItOut(analyticsLocations[32])(obj);
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
    let tmp7Result = tmp7(tmp3[33]);
    tmp7Result = tmp7(tmp3[34]);
    obj3[0] = tmp7Result.getName(null, null, stateFromStores);
    obj3[1] = memo1;
    tmp36Result = tmp36(tmp7Result, obj3);
  }
  obj2[1] = tmp36Result;
  const items7 = [closure_14(first2, obj2), , , ];
  let obj4 = { style: tmp.section, children: null };
  let obj5 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  let intl = tmp2(tmp3[11]).intl;
  obj5[3] = intl.string(isTryItOut(tmp3[12])["l8CZ7+"]);
  const items8 = [closure_14(nativeStackNavigation(tmp3[35]).Text, obj5), closure_14(isTryItOut(tmp3[36]), { emojis: first1, onChange: callback }), ];
  let obj6 = { label: null, arrow: true, disabled: null, trailing: null, onPress: null };
  const intl2 = tmp2(tmp3[11]).intl;
  obj6[0] = intl2.string(isTryItOut(tmp3[12]).iVKTbA);
  obj6[2] = !tmp17;
  if (nativeStackNavigation(tmp3[10]).TypingIndicatorAnimation.PULSE === first3) {
    const intl5 = tmp2(tmp3[11]).intl;
    let stringResult = intl5.string(tmp7(tmp3[12])["gyL/ce"]);
  } else if (tmp2(tmp3[10]).TypingIndicatorAnimation.RING === first3) {
    const intl4 = tmp2(tmp3[11]).intl;
    stringResult = intl4.string(tmp7(tmp3[12]).EgekTm);
  } else if (tmp2(tmp3[10]).TypingIndicatorAnimation.WAVE === first3) {
    const intl3 = tmp2(tmp3[11]).intl;
    stringResult = intl3.string(tmp7(tmp3[12])["8t5EiI"]);
  } else if (tmp2(tmp3[10]).TypingIndicatorAnimation.UNSPECIFIED === first3) {
    const intl13 = tmp2(tmp3[11]).intl;
    stringResult = intl13.string(tmp2(tmp3[11]).t.PoWNfe);
  }
  const obj7 = { hasIcons: false, children: null };
  obj6[3] = closure_14(nativeStackNavigation(tmp3[38]).TableRow.TrailingText, { text: stringResult });
  obj6[4] = callback2;
  obj7[1] = closure_14(nativeStackNavigation(tmp3[38]).TableRow, obj6);
  items8[2] = closure_14(nativeStackNavigation(tmp3[37]).TableRowGroup, obj7);
  obj4[1] = items8;
  items7[1] = closure_15(first2, obj4);
  let obj8 = { style: tmp.section, children: null };
  const obj9 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  const intl6 = tmp2(tmp3[11]).intl;
  obj9[3] = intl6.string(isTryItOut(tmp3[12]).BGCQqw);
  const items9 = [closure_14(nativeStackNavigation(tmp3[35]).Text, obj9), , ];
  let obj10 = { hasIcons: false, children: null };
  let obj11 = { label: null, arrow: true, trailing: null, onPress: null };
  const intl7 = tmp2(tmp3[11]).intl;
  obj11[0] = intl7.string(isTryItOut(tmp3[12])["X+ijyw"]);
  const obj12 = { text: null };
  const intl8 = tmp2(tmp3[11]).intl;
  const tmp26 = first(first1.useState(false), 2);
  const tmp32 = closure_6;
  obj12[0] = intl8.string(nativeStackNavigation(tmp3[19]).getCustomTypingIndicatorSuggestionMessage(first2));
  obj11[2] = closure_14(nativeStackNavigation(tmp3[38]).TableRow.TrailingText, obj12);
  obj11[3] = callback1;
  obj10[1] = closure_14(nativeStackNavigation(tmp3[38]).TableRow, obj11);
  items9[1] = closure_14(nativeStackNavigation(tmp3[37]).TableRowGroup, obj10);
  const obj13 = { style: tmp.description, variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children: null };
  const intl9 = tmp2(tmp3[11]).intl;
  const obj14 = { helpCenterUrl: null };
  const tmp2Result3 = nativeStackNavigation(tmp3[19]);
  obj14[0] = isTryItOut(tmp3[39]).getArticleURL(memo.CUSTOM_TYPING_INDICATOR);
  obj13[4] = intl9.format(isTryItOut(tmp3[12]).k6c2yP, obj14);
  items9[2] = closure_14(nativeStackNavigation(tmp3[35]).Text, obj13);
  obj8[1] = items9;
  items7[2] = closure_15(first2, obj8);
  const obj15 = { spacing: 8, children: null };
  const obj16 = { variant: "secondary", size: "lg", icon: closure_14(nativeStackNavigation(tmp3[42]).DiceIcon, {}), text: null, onPress: null };
  const intl10 = tmp2(tmp3[11]).intl;
  obj16[3] = intl10.string(isTryItOut(tmp3[12]).q4045h);
  obj16[4] = callback3;
  const items10 = [closure_14(nativeStackNavigation(tmp3[41]).Button, obj16), ];
  const obj17 = { variant: "secondary", size: "lg", icon: closure_14(nativeStackNavigation(tmp3[43]).DenyIcon, {}), text: null, onPress: null };
  const intl11 = tmp2(tmp3[11]).intl;
  obj17[3] = intl11.string(isTryItOut(tmp3[12])["UnIf+S"]);
  obj17[4] = callback4;
  items10[1] = closure_14(nativeStackNavigation(tmp3[41]).Button, obj17);
  obj15[1] = items10;
  items7[3] = closure_15(nativeStackNavigation(tmp3[40]).Stack, obj15);
  obj1[1] = items7;
  const items11 = [closure_15(tmp32, obj1), ];
  const obj18 = { visible: !tmp19, disabled: tmp27, loading: tmp27, text: null, onPress: null, renderButton: null };
  const tmp7Result1 = isTryItOut(tmp3[39]);
  const intl12 = tmp2(tmp3[11]).intl;
  const string = intl12.string;
  if (tmp8) {
    let stringResult1 = string(tmp2(tmp3[11]).t.pj0XBN);
  } else {
    stringResult1 = string(tmp7(tmp3[12])["6ZxPAQ"]);
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
      return callback2(isTryItOut(analyticsLocations[45]), { text, onPress });
    };
  }
  obj18[5] = fn;
  items11[1] = closure_14(isTryItOut(tmp3[44]), obj18);
  obj[1] = items11;
  return closure_15(first2, obj);
};