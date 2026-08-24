// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";
import { HELP_CENTER_LINK } from "../../premium/premium_group/PremiumGroupConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_8, AnalyticsSections: c9, UserSettingsSections: c10 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles({ screen: { flex: 1 }, container: { padding: 16, rowGap: 24 }, previewContainer: { height: 200, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: 8 }, section: { rowGap: 8 }, description: { marginTop: 4 } });
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx");

export default function CustomTypingIndicatorEditScreen() {
  let tmp = callback();
  const tmp3 = entryPoint;
  let obj = nativeStackNavigation(entryPoint[12]);
  nativeStackNavigation = obj.useNativeStackNavigation();
  obj1 = nativeStackNavigation(entryPoint[13]);
  const items = [first2];
  const stateFromStores = obj1.useStateFromStores(items, () => first2.getCurrentUser());
  let obj2 = nativeStackNavigation(entryPoint[14]);
  const isPremiumSubscriber = obj2.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  analyticsLocations = analyticsLocations(entryPoint[15])().analyticsLocations;
  let obj3 = nativeStackNavigation(entryPoint[16]);
  entryPoint = obj3.useCustomTypingIndicatorConfig("CustomTypingIndicatorEditScreen").entryPoint;
  let obj4 = React;
  const tmp9 = first(React.useState(() => Array(nativeStackNavigation(entryPoint[17]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null)), 2);
  first = tmp9[0];
  React = tmp9[1];
  const tmp11 = first(React.useState(nativeStackNavigation(tmp3[9]).TypingSuggestion.UNSPECIFIED), 2);
  const first1 = tmp11[0];
  closure_6 = tmp11[1];
  const tmp13 = first(React.useState(nativeStackNavigation(tmp3[9]).TypingIndicatorAnimation.UNSPECIFIED), 2);
  first2 = tmp13[0];
  closure_8 = tmp13[1];
  const items1 = [first];
  const memo = React.useMemo(() => first.filter((arg0) => null != arg0), items1);
  const tmp15 = memo.length === nativeStackNavigation(tmp3[17]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  closure_10 = tmp15;
  const tmp17 = memo.length > 0 || first1 !== nativeStackNavigation(tmp3[9]).TypingSuggestion.UNSPECIFIED || first2 !== nativeStackNavigation(tmp3[9]).TypingIndicatorAnimation.UNSPECIFIED;
  const items2 = [tmp15, memo, first1, first2];
  const memo1 = obj4.useMemo(() => ({ emojis: closure_10 ? memo : [], typingSuggestion: first1, animation: first2 }), items2);
  const items3 = [first1];
  callback = obj4.useCallback((arg0, arg1) => {
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
  const items4 = [memo, first2];
  const callback1 = obj4.useCallback(() => {
    let obj = analyticsLocations(entryPoint[18]);
    obj = { initialValue: first1, onChange: closure_6 };
    obj.openLazy(nativeStackNavigation(entryPoint[20])(entryPoint[19], entryPoint.paths), "CustomTypingIndicatorTypingSuggestionPickerSheet", obj);
  }, items3);
  const callback2 = obj4.useCallback(() => {
    let obj = analyticsLocations(entryPoint[18]);
    obj = { emojis: memo, initialAnimation: first2, onChange: closure_8 };
    obj.openLazy(nativeStackNavigation(entryPoint[20])(entryPoint[21], entryPoint.paths), "CustomTypingIndicatorAnimationPickerSheet", obj);
  }, items4);
  PremiumTypes = obj4.useRef(null);
  const callback3 = obj4.useCallback(() => {
    if (ref.current == null) {
      tmp.current = nativeStackNavigation(entryPoint[22]).getSurpriseMeEmojiPool();
      const obj = nativeStackNavigation(entryPoint[22]);
    }
    callback(nativeStackNavigation(entryPoint[22]).pickRandomCustomTypingIndicatorEmojis(ref.current));
    const obj2 = nativeStackNavigation(entryPoint[22]);
    callback2(nativeStackNavigation(entryPoint[22]).getRandomCustomTypingIndicatorSuggestion());
    const obj3 = nativeStackNavigation(entryPoint[22]);
    lib(nativeStackNavigation(entryPoint[22]).getRandomCustomTypingIndicatorAnimation());
    const obj4 = nativeStackNavigation(entryPoint[22]);
    analyticsLocations(entryPoint[23]).track(lib.TYPING_INDICATOR_STYLE_SURPRISE_ME);
  }, []);
  const items5 = [nativeStackNavigation, memo, first2, first1, entryPoint];
  const callback4 = obj4.useCallback(() => {
    callback(Array(nativeStackNavigation(entryPoint[17]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null));
    callback2(nativeStackNavigation(entryPoint[9]).TypingSuggestion.UNSPECIFIED);
    lib(nativeStackNavigation(entryPoint[9]).TypingIndicatorAnimation.UNSPECIFIED);
    const ArrayResult = Array(nativeStackNavigation(entryPoint[17]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    analyticsLocations(entryPoint[23]).track(lib.TYPING_INDICATOR_STYLE_REMOVED);
  }, []);
  let callback5 = obj4.useCallback(() => {
    let obj = analyticsLocations(entryPoint[23]);
    obj = { emoji_names: memo.map((name) => name.name), animation_name: nativeStackNavigation(entryPoint[9]).TypingIndicatorAnimation[first2], typing_suggestion: nativeStackNavigation(entryPoint[9]).TypingSuggestion[first1], custom_emoji_count: memo.filter((id) => null != id.id).length };
    obj.track(lib.TYPING_INDICATOR_STYLE_APPLIED, obj);
    if ("settings" === entryPoint) {
      nativeStackNavigation.navigate(constants.OVERVIEW);
    } else {
      nativeStackNavigation.navigate(constants.PROFILE_CUSTOMIZATION);
    }
  }, items5);
  const items6 = [analyticsLocations];
  obj = { style: tmp.screen, children: null };
  const container = tmp.container;
  const callback6 = obj4.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations };
    obj = { section: memo.SETTINGS_TYPING_INDICATOR };
    analyticsLocations(entryPoint[24])(obj);
  }, items6);
  if (tmp17) {
    obj = {};
    const merged = Object.assign(container);
    obj.paddingBottom = 90;
    let tmp29 = obj;
  } else {
    tmp29 = container;
  }
  obj1 = { contentContainerStyle: tmp29, children: null };
  obj2 = { style: tmp.previewContainer, children: null };
  let tmp33Result = null != stateFromStores;
  if (tmp33Result) {
    obj3 = { username: null, config: null, justifyCenter: true, bypassReducedMotionCheck: true };
    let tmp7Result = tmp7(tmp3[25]);
    tmp7Result = tmp7(tmp3[26]);
    obj3[0] = tmp7Result.getName(null, null, stateFromStores);
    obj3[1] = memo1;
    tmp33Result = tmp33(tmp7Result, obj3);
  }
  obj2[1] = tmp33Result;
  const items7 = [closure_13(closure_6, obj2), , , ];
  obj4 = { style: tmp.section, children: null };
  const obj5 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = tmp2(tmp3[10]).intl;
  obj5[3] = intl.string(analyticsLocations(tmp3[11])["l8CZ7+"]);
  const items8 = [closure_13(nativeStackNavigation(tmp3[27]).Text, obj5), closure_13(analyticsLocations(tmp3[28]), { emojis: first, onChange: callback }), ];
  const obj6 = { label: null, arrow: true, disabled: null, trailing: null, onPress: null };
  const intl2 = tmp2(tmp3[10]).intl;
  obj6[0] = intl2.string(analyticsLocations(tmp3[11]).iVKTbA);
  obj6[2] = !tmp15;
  if (nativeStackNavigation(tmp3[9]).TypingIndicatorAnimation.PULSE === first2) {
    const intl5 = tmp2(tmp3[10]).intl;
    let stringResult = intl5.string(tmp7(tmp3[11])["gyL/ce"]);
  } else if (tmp2(tmp3[9]).TypingIndicatorAnimation.RING === first2) {
    const intl4 = tmp2(tmp3[10]).intl;
    stringResult = intl4.string(tmp7(tmp3[11]).EgekTm);
  } else if (tmp2(tmp3[9]).TypingIndicatorAnimation.WAVE === first2) {
    const intl3 = tmp2(tmp3[10]).intl;
    stringResult = intl3.string(tmp7(tmp3[11])["8t5EiI"]);
  } else if (tmp2(tmp3[9]).TypingIndicatorAnimation.UNSPECIFIED === first2) {
    const intl13 = tmp2(tmp3[10]).intl;
    stringResult = intl13.string(tmp2(tmp3[10]).t.PoWNfe);
  }
  const obj7 = { hasIcons: false, children: null };
  obj6[3] = closure_13(nativeStackNavigation(tmp3[30]).TableRow.TrailingText, { text: stringResult });
  obj6[4] = callback2;
  obj7[1] = closure_13(nativeStackNavigation(tmp3[30]).TableRow, obj6);
  items8[2] = closure_13(nativeStackNavigation(tmp3[29]).TableRowGroup, obj7);
  obj4[1] = items8;
  items7[1] = closure_14(closure_6, obj4);
  const obj8 = { style: tmp.section, children: null };
  const obj9 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  const intl6 = tmp2(tmp3[10]).intl;
  obj9[3] = intl6.string(analyticsLocations(tmp3[11]).BGCQqw);
  const items9 = [closure_13(nativeStackNavigation(tmp3[27]).Text, obj9), , ];
  const obj10 = { hasIcons: false, children: null };
  const obj11 = { label: null, arrow: true, trailing: null, onPress: null };
  const intl7 = tmp2(tmp3[10]).intl;
  obj11[0] = intl7.string(analyticsLocations(tmp3[11])["X+ijyw"]);
  const obj12 = { text: null };
  const intl8 = tmp2(tmp3[10]).intl;
  obj12[0] = intl8.string(nativeStackNavigation(tmp3[22]).getCustomTypingIndicatorSuggestionMessage(first1));
  obj11[2] = closure_13(nativeStackNavigation(tmp3[30]).TableRow.TrailingText, obj12);
  obj11[3] = callback1;
  obj10[1] = closure_13(nativeStackNavigation(tmp3[30]).TableRow, obj11);
  items9[1] = closure_13(nativeStackNavigation(tmp3[29]).TableRowGroup, obj10);
  const obj13 = { style: tmp.description, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl9 = tmp2(tmp3[10]).intl;
  obj13[3] = intl9.format(analyticsLocations(tmp3[11]).k6c2yP, { helpCenterUrl: HELP_CENTER_LINK });
  items9[2] = closure_13(nativeStackNavigation(tmp3[27]).Text, obj13);
  obj8[1] = items9;
  items7[2] = closure_14(closure_6, obj8);
  const obj15 = { spacing: 8, children: null };
  const obj16 = { variant: "secondary", size: "lg", icon: closure_13(nativeStackNavigation(tmp3[33]).DiceIcon, {}), text: null, onPress: null };
  const intl10 = tmp2(tmp3[10]).intl;
  obj16[3] = intl10.string(analyticsLocations(tmp3[11]).q4045h);
  obj16[4] = callback3;
  const items10 = [closure_13(nativeStackNavigation(tmp3[32]).Button, obj16), ];
  const obj17 = { variant: "secondary", size: "lg", icon: closure_13(nativeStackNavigation(tmp3[34]).DenyIcon, {}), text: null, onPress: null };
  const intl11 = tmp2(tmp3[10]).intl;
  obj17[3] = intl11.string(analyticsLocations(tmp3[11])["UnIf+S"]);
  obj17[4] = callback4;
  items10[1] = closure_13(nativeStackNavigation(tmp3[32]).Button, obj17);
  obj15[1] = items10;
  items7[3] = closure_14(nativeStackNavigation(tmp3[31]).Stack, obj15);
  obj1[1] = items7;
  const items11 = [closure_14(first1, obj1), ];
  const obj18 = { visible: tmp17, disabled: !(0 === memo.length || tmp15), text: null, onPress: null, renderButton: null };
  const obj14 = { helpCenterUrl: HELP_CENTER_LINK };
  const tmp16 = 0 === memo.length || tmp15;
  const tmp28 = first1;
  const tmp2Result = nativeStackNavigation(tmp3[22]);
  const intl12 = tmp2(tmp3[10]).intl;
  const string = intl12.string;
  if ("settings" === entryPoint && !isPremiumSubscriber) {
    let stringResult1 = string(tmp2(tmp3[10]).t.pj0XBN);
  } else {
    stringResult1 = string(tmp7(tmp3[11])["6ZxPAQ"]);
  }
  obj18[2] = stringResult1;
  if ("settings" === entryPoint && !isPremiumSubscriber) {
    callback5 = callback6;
  }
  obj18[3] = callback5;
  let fn;
  if ("settings" === entryPoint && !isPremiumSubscriber) {
    fn = (arg0) => {
      ({ text, onPress } = arg0);
      return callback3(analyticsLocations(entryPoint[36]), { text, onPress });
    };
  }
  obj18[4] = fn;
  items11[1] = closure_13(analyticsLocations(tmp3[35]), obj18);
  obj[1] = items11;
  return closure_14(closure_6, obj);
};