// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: c9, AnalyticsSections: c10, HelpdeskArticles: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { screen: { flex: 1 }, container: null, previewContainer: null, section: null, description: null };
createCacheKey = { padding: ThemesDefault.space.PX_16, rowGap: ThemesDefault.space.PX_24 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = {
  height: 140,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: ThemesDefault.space.PX_8,
};
let obj1 = {
  height: 140,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: ThemesDefault.space.PX_8,
};
createCacheKey[3] = { rowGap: ThemesDefault.space.PX_8 };
let obj2 = { rowGap: ThemesDefault.space.PX_8 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_4 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: ThemesDefault.space.PX_4 };
let result = require("set").fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx",
);

export default function CustomTypingIndicatorEditScreen() {
  let tmp = callback();
  const tmp3 = source;
  let obj = nativeStackNavigation(source[12]);
  nativeStackNavigation = obj.useNativeStackNavigation();
  obj1 = nativeStackNavigation(source[13]);
  let params = obj1.useRoute().params;
  if (params == null) {
    params = {};
  }
  const mode = params.mode;
  source = params.source;
  let tmp2Result = tmp2(tmp3[14]);
  const items = [closure_8];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = mode(tmp3[15]);
  let result = obj4.canUsePremiumProfileCustomization(stateFromStores);
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
    mode(source[17]).track(first3.TYPING_INDICATOR_EDIT_SCREEN_OPENED, { source: str });
  }, items1);
  tmp2Result = tmp2(tmp3[18]);
  first = first(first1.useState(tmp2Result.useCurrentCustomTypingIndicatorConfig(tmp5)), 1)[0];
  const tmp12 = first(
    first1.useState(() => {
      if (obj.hasCustomTypingIndicatorEmojis(first.emojis)) {
        let emojis = first.emojis;
      } else {
        const _Array = Array;
        emojis = Array(nativeStackNavigation(source[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null);
        const ArrayResult = Array(nativeStackNavigation(source[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
      }
      return emojis;
    }),
    2,
  );
  first1 = tmp12[0];
  closure_6 = tmp12[1];
  const tmp14 = first(first1.useState(first.typingSuggestion), 2);
  const first2 = tmp14[0];
  closure_8 = tmp14[1];
  const tmp16 = first(first1.useState(first.animation), 2);
  const first3 = tmp16[0];
  closure_10 = tmp16[1];
  const items2 = [first1];
  const memo = first1.useMemo(() => first1.filter((arg0) => null != arg0), items2);
  const tmp18 = memo.length === nativeStackNavigation(tmp3[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  closure_12 = tmp18;
  const items3 = [tmp18, memo, first2, first3];
  const memo1 = first1.useMemo(
    () => ({ emojis: closure_12 ? memo : [], typingSuggestion: first2, animation: first3 }),
    items3,
  );
  const tmp20 = mode(tmp3[20])(memo1, first);
  callback = tmp21;
  const items4 = [first2];
  callback = first1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    callback((arr) =>
      arr.map((arg0, arg1) => {
        if (arg1 === closure_0) {
          let tmp = closure_1;
        } else {
          tmp = arg0;
        }
        return tmp;
      }),
    );
  }, []);
  const items5 = [memo, first3];
  const callback1 = first1.useCallback(() => {
    let obj = mode(source[21]);
    obj = { initialValue: first2, onChange: closure_8 };
    obj.openLazy(
      nativeStackNavigation(source[23])(source[22], source.paths),
      "CustomTypingIndicatorTypingSuggestionPickerSheet",
      obj,
    );
  }, items4);
  const callback2 = first1.useCallback(() => {
    let obj = mode(source[21]);
    obj = { emojis: memo, initialAnimation: first3, onChange: closure_10 };
    obj.openLazy(
      nativeStackNavigation(source[23])(source[24], source.paths),
      "CustomTypingIndicatorAnimationPickerSheet",
      obj,
    );
  }, items5);
  closure_15 = first1.useRef(null);
  const callback3 = first1.useCallback(() => {
    if (ref.current == null) {
      tmp.current = nativeStackNavigation(source[18]).getSurpriseMeEmojiPool();
      const obj = nativeStackNavigation(source[18]);
    }
    callback(nativeStackNavigation(source[18]).pickRandomCustomTypingIndicatorEmojis(ref.current));
    const obj2 = nativeStackNavigation(source[18]);
    currentUser(nativeStackNavigation(source[18]).getRandomCustomTypingIndicatorSuggestion());
    const obj3 = nativeStackNavigation(source[18]);
    lib(nativeStackNavigation(source[18]).getRandomCustomTypingIndicatorAnimation());
    const obj4 = nativeStackNavigation(source[18]);
    mode(source[17]).track(first3.TYPING_INDICATOR_STYLE_SURPRISE_ME);
  }, []);
  const callback4 = first1.useCallback(() => {
    callback(Array(nativeStackNavigation(source[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null));
    currentUser(nativeStackNavigation(source[9]).TypingSuggestion.UNSPECIFIED);
    lib(nativeStackNavigation(source[9]).TypingIndicatorAnimation.UNSPECIFIED);
    const ArrayResult = Array(nativeStackNavigation(source[19]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    mode(source[17]).track(first3.TYPING_INDICATOR_STYLE_REMOVED);
  }, []);
  [tmp28, closure_16] = first(first1.useState(false), 2);
  closure_17 = first1.useRef(false);
  const items6 = [!tmp20, memo1, mode, nativeStackNavigation, memo, first3, first2];
  let callback5 = first1.useCallback(
    analyticsLocations(function* () {
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
                  if ("try_it_out" === closure_1_1) {
                    const result = closure_1_0(closure_1_2[25]).setTryItOutCustomTypingIndicatorStyle(tmp34);
                    const obj10 = closure_1_0(closure_1_2[25]);
                  } else if ("profile_pending" === tmp37) {
                    obj1 = { customTypingIndicatorStyle: null };
                    obj1[0] = tmp34;
                    closure_1_0(closure_1_2[26]).setPendingChanges(obj1);
                    const obj8 = closure_1_0(closure_1_2[26]);
                  } else {
                    closure_1_17.current = true;
                    closure_1_16(true);
                    let obj4 = closure_1_0(closure_1_2[27]);
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
          obj6[0] = closure_1_11.map((name) => name.name);
          obj6[1] = closure_1_0(closure_1_2[9]).TypingIndicatorAnimation[closure_1_9];
          obj6[2] = closure_1_0(closure_1_2[9]).TypingSuggestion[closure_1_7];
          obj6[3] = closure_1_11.filter((id) => null != id.id).length;
          closure_1_1(closure_1_2[17]).track(closure_1_9.TYPING_INDICATOR_STYLE_APPLIED, obj6);
          if (closure_1_0.isFocused()) {
            closure_1_0.goBack();
          }
          const obj11 = closure_1_1(closure_1_2[17]);
        } catch (tmp65) {
          c4 = tmp;
          throw tmp65;
        }
      }
    }),
    items6,
  );
  const items7 = [analyticsLocations];
  obj = { style: tmp.screen, children: null };
  const container = tmp.container;
  const callback6 = first1.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations };
    obj = { section: lib.SETTINGS_TYPING_INDICATOR };
    mode(source[30])(obj);
  }, items7);
  if (tmp20) {
    obj = container;
  } else {
    obj = {};
    const merged = Object.assign(container);
    obj.paddingBottom = 90;
  }
  obj1 = { contentContainerStyle: obj, children: null };
  let obj2 = { style: tmp.previewContainer, children: null };
  let tmp37Result = null != stateFromStores;
  if (tmp37Result) {
    let obj3 = { username: null, config: null, justifyCenter: true };
    let tmp7Result = tmp7(tmp3[31]);
    tmp7Result = tmp7(tmp3[32]);
    obj3[0] = tmp7Result.getName(null, null, stateFromStores);
    obj3[1] = memo1;
    tmp37Result = tmp37(tmp7Result, obj3);
  }
  obj2[1] = tmp37Result;
  const items8 = [closure_12(first2, obj2), , ,];
  obj4 = { style: tmp.section, children: null };
  let obj5 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  let intl = tmp2(tmp3[10]).intl;
  obj5[3] = intl.string(mode(tmp3[11])["l8CZ7+"]);
  const items9 = [
    closure_12(nativeStackNavigation(tmp3[33]).Text, obj5),
    closure_12(mode(tmp3[34]), { emojis: first1, onChange: callback }),
  ];
  let obj6 = { label: null, arrow: true, disabled: null, trailing: null, onPress: null };
  const intl2 = tmp2(tmp3[10]).intl;
  obj6[0] = intl2.string(mode(tmp3[11]).iVKTbA);
  obj6[2] = !tmp18;
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
  obj6[3] = closure_12(nativeStackNavigation(tmp3[36]).TableRow.TrailingText, { text: stringResult });
  obj6[4] = callback2;
  obj7[1] = closure_12(nativeStackNavigation(tmp3[36]).TableRow, obj6);
  items9[2] = closure_12(nativeStackNavigation(tmp3[35]).TableRowGroup, obj7);
  obj4[1] = items9;
  items8[1] = memo1(first2, obj4);
  let obj8 = { style: tmp.section, children: null };
  const obj9 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  const intl6 = tmp2(tmp3[10]).intl;
  obj9[3] = intl6.string(mode(tmp3[11]).BGCQqw);
  const items10 = [closure_12(nativeStackNavigation(tmp3[33]).Text, obj9), ,];
  let obj10 = { hasIcons: false, children: null };
  let obj11 = { label: null, arrow: true, trailing: null, onPress: null };
  const intl7 = tmp2(tmp3[10]).intl;
  obj11[0] = intl7.string(mode(tmp3[11])["X+ijyw"]);
  const obj12 = { text: null };
  const intl8 = tmp2(tmp3[10]).intl;
  const tmp27 = first(first1.useState(false), 2);
  let tmp33 = closure_6;
  obj12[0] = intl8.string(nativeStackNavigation(tmp3[18]).getCustomTypingIndicatorSuggestionMessage(first2));
  obj11[2] = closure_12(nativeStackNavigation(tmp3[36]).TableRow.TrailingText, obj12);
  obj11[3] = callback1;
  obj10[1] = closure_12(nativeStackNavigation(tmp3[36]).TableRow, obj11);
  items10[1] = closure_12(nativeStackNavigation(tmp3[35]).TableRowGroup, obj10);
  const obj13 = {
    style: tmp.description,
    variant: "text-xs/normal",
    color: "text-muted",
    includeFontPadding: true,
    children: null,
  };
  const intl9 = tmp2(tmp3[10]).intl;
  const obj14 = { helpCenterUrl: null };
  const tmp2Result1 = nativeStackNavigation(tmp3[18]);
  obj14[0] = mode(tmp3[37]).getArticleURL(memo.CUSTOM_TYPING_INDICATOR);
  obj13[4] = intl9.format(mode(tmp3[11]).k6c2yP, obj14);
  items10[2] = closure_12(nativeStackNavigation(tmp3[33]).Text, obj13);
  obj8[1] = items10;
  items8[2] = memo1(first2, obj8);
  const obj15 = { spacing: 8, children: null };
  const obj16 = {
    variant: "secondary",
    size: "lg",
    icon: closure_12(nativeStackNavigation(tmp3[40]).DiceIcon, {}),
    text: null,
    onPress: null,
  };
  const intl10 = tmp2(tmp3[10]).intl;
  obj16[3] = intl10.string(mode(tmp3[11]).q4045h);
  obj16[4] = callback3;
  const items11 = [closure_12(nativeStackNavigation(tmp3[39]).Button, obj16)];
  const obj17 = {
    variant: "secondary",
    size: "lg",
    icon: closure_12(nativeStackNavigation(tmp3[41]).DenyIcon, {}),
    text: null,
    onPress: null,
  };
  const intl11 = tmp2(tmp3[10]).intl;
  obj17[3] = intl11.string(mode(tmp3[11])["UnIf+S"]);
  obj17[4] = callback4;
  items11[1] = closure_12(nativeStackNavigation(tmp3[39]).Button, obj17);
  obj15[1] = items11;
  items8[3] = memo1(nativeStackNavigation(tmp3[38]).Stack, obj15);
  obj1[1] = items8;
  const items12 = [memo1(tmp33, obj1)];
  const obj18 = { visible: !tmp20, disabled: tmp28, loading: tmp28, text: null, onPress: null, renderButton: null };
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
      return callback2(mode(source[43]), { text, onPress });
    };
  }
  obj18[5] = fn;
  items12[1] = closure_12(mode(tmp3[42]), obj18);
  obj[1] = items12;
  return memo1(first2, obj);
}
