// === Module 14706: CustomTypingIndicatorEditScreen ===

// Module 14706 (CustomTypingIndicatorEditScreen)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import { HELP_CENTER_LINK } from "SubscriptionStatusTypes" /* 4053 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ container: { padding: 16, rowGap: 24 }, previewContainer: { height: 200, display: "flex", alignItems: "center", justifyContent: "center" }, section: { rowGap: 8 }, description: { marginTop: 4 } });
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx");

export default function CustomTypingIndicatorEditScreen() {
  let tmp = callback();
  let obj = nativeStackNavigation(1500);
  nativeStackNavigation = obj.useNativeStackNavigation();
  obj1 = nativeStackNavigation(589);
  const items = [memo];
  const stateFromStores = obj1.useStateFromStores(items, () => memo.getCurrentUser());
  let obj2 = React;
  const tmp6 = first1(React.useState(() => Array(nativeStackNavigation(lib[7]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null)), 2);
  const first = tmp6[0];
  dependencyMap = tmp6[1];
  const tmp8 = first1(React.useState(nativeStackNavigation(14707).CustomTypingIndicatorSuggestion.DEFAULT), 2);
  first1 = tmp8[0];
  React = tmp8[1];
  const tmp10 = first1(React.useState(null), 2);
  const first2 = tmp10[0];
  closure_6 = tmp10[1];
  const items1 = [first];
  memo = React.useMemo(() => first.filter((arg0) => null != arg0), items1);
  const tmp12 = memo.length === nativeStackNavigation(14707).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  closure_8 = tmp12;
  const items2 = [tmp12, memo, first1, first2];
  const memo1 = obj2.useMemo(() => ({ emojis: closure_8 ? memo : [], typingSuggestion: first1, animation: first2 }), items2);
  const items3 = [first1];
  callback = obj2.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    lib((arr) => arr.map((arg0, arg1) => {
      if (arg1 === closure_0) {
        let tmp = closure_1;
      } else {
        tmp = arg0;
      }
      return tmp;
    }));
  }, []);
  const items4 = [memo, first2];
  const callback1 = obj2.useCallback(() => {
    let obj = first(lib[12]);
    obj = { initialValue: first1, onChange: closure_4 };
    obj.openLazy(nativeStackNavigation(lib[14])(lib[13], lib.paths), "CustomTypingIndicatorTypingSuggestionPickerSheet", obj);
  }, items3);
  const callback2 = obj2.useCallback(() => {
    let obj = first(lib[12]);
    obj = { emojis: memo, initialAnimation: first2, onChange: closure_6 };
    obj.openLazy(nativeStackNavigation(lib[14])(lib[15], lib.paths), "CustomTypingIndicatorAnimationPickerSheet", obj);
  }, items4);
  const callback3 = obj2.useCallback(() => {
    const randomCustomTypingIndicatorConfig = nativeStackNavigation(lib[16]).getRandomCustomTypingIndicatorConfig();
    lib(randomCustomTypingIndicatorConfig.emojis);
    callback(randomCustomTypingIndicatorConfig.typingSuggestion);
    callback2(randomCustomTypingIndicatorConfig.animation);
  }, []);
  const items5 = [nativeStackNavigation];
  const callback4 = obj2.useCallback(() => {
    lib(Array(nativeStackNavigation(lib[7]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT).fill(null));
    callback(nativeStackNavigation(lib[7]).CustomTypingIndicatorSuggestion.DEFAULT);
    callback2(null);
  }, []);
  obj = { contentContainerStyle: tmp.container, children: null };
  obj = { style: tmp.previewContainer, children: null };
  let tmp23Result = null != stateFromStores;
  const callback5 = obj2.useCallback(() => {
    nativeStackNavigation.goBack();
  }, items5);
  if (tmp23Result) {
    obj1 = { username: null, config: null };
    let obj6 = first(4796);
    obj1[0] = obj6.getName(null, null, stateFromStores);
    obj1[1] = memo1;
    tmp23Result = tmp23(first(14713), obj1);
    const tmp27 = first(14713);
  }
  obj[1] = tmp23Result;
  const items6 = [closure_9(closure_6, obj), , , ];
  obj2 = { style: tmp.section, children: null };
  const obj3 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = tmp2(1236).intl;
  obj3[3] = intl.string(first(3403)["l8CZ7+"]);
  const items7 = [closure_9(nativeStackNavigation(4734).Text, obj3), closure_9(first(14714), { emojis: first, onChange: callback }), ];
  const obj4 = { label: null, arrow: true, disabled: null, trailing: null, onPress: null };
  const intl2 = tmp2(1236).intl;
  obj4[0] = intl2.string(first(3403).iVKTbA);
  obj4[2] = !tmp12;
  if (nativeStackNavigation(14707).CustomTypingIndicatorAnimation.PULSE === first2) {
    const intl5 = tmp2(1236).intl;
    let stringResult = intl5.string(tmp28(3403)["gyL/ce"]);
  } else if (tmp2(14707).CustomTypingIndicatorAnimation.RING === first2) {
    const intl4 = tmp2(1236).intl;
    stringResult = intl4.string(tmp28(3403).EgekTm);
  } else if (tmp2(14707).CustomTypingIndicatorAnimation.WAVE === first2) {
    const intl3 = tmp2(1236).intl;
    stringResult = intl3.string(tmp28(3403)["8t5EiI"]);
  } else if (null === first2) {
    const intl13 = tmp2(1236).intl;
    stringResult = intl13.string(tmp2(1236).t.PoWNfe);
  }
  const obj5 = { hasIcons: false, children: null };
  obj4[3] = closure_9(nativeStackNavigation(6291).TableRow.TrailingText, { text: stringResult });
  obj4[4] = callback2;
  obj5[1] = closure_9(nativeStackNavigation(6291).TableRow, obj4);
  items7[2] = closure_9(nativeStackNavigation(6286).TableRowGroup, obj5);
  obj2[1] = items7;
  items6[1] = closure_10(closure_6, obj2);
  obj6 = { style: tmp.section, children: null };
  const obj7 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: null };
  const intl6 = tmp2(1236).intl;
  obj7[3] = intl6.string(first(3403).BGCQqw);
  const items8 = [closure_9(nativeStackNavigation(4734).Text, obj7), , ];
  const obj8 = { hasIcons: false, children: null };
  const obj9 = { label: null, arrow: true, trailing: null, onPress: null };
  const intl7 = tmp2(1236).intl;
  obj9[0] = intl7.string(first(3403)["X+ijyw"]);
  const obj10 = { text: null };
  const intl8 = tmp2(1236).intl;
  obj10[0] = intl8.string(nativeStackNavigation(14709).getCustomTypingIndicatorSuggestionMessage(first1));
  obj9[2] = closure_9(nativeStackNavigation(6291).TableRow.TrailingText, obj10);
  obj9[3] = callback1;
  obj8[1] = closure_9(nativeStackNavigation(6291).TableRow, obj9);
  items8[1] = closure_9(nativeStackNavigation(6286).TableRowGroup, obj8);
  const obj11 = { style: tmp.description, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl9 = tmp2(1236).intl;
  obj11[3] = intl9.format(first(3403).k6c2yP, { helpCenterUrl: closure_8 });
  items8[2] = closure_9(nativeStackNavigation(4734).Text, obj11);
  obj6[1] = items8;
  items6[2] = closure_10(closure_6, obj6);
  const obj13 = { spacing: 8, children: null };
  const obj14 = { variant: "secondary", icon: closure_9(nativeStackNavigation(9235).DiceIcon, {}), text: null, onPress: null };
  const intl10 = tmp2(1236).intl;
  obj14[2] = intl10.string(first(3403).q4045h);
  obj14[3] = callback3;
  const items9 = [closure_9(nativeStackNavigation(4745).Button, obj14), , ];
  const obj15 = { variant: "secondary", icon: closure_9(nativeStackNavigation(10598).DenyIcon, {}), text: null, onPress: null };
  const intl11 = tmp2(1236).intl;
  obj15[2] = intl11.string(first(3403)["UnIf+S"]);
  obj15[3] = callback4;
  items9[1] = closure_9(nativeStackNavigation(4745).Button, obj15);
  const obj16 = { disabled: !(0 === memo.length || tmp12), text: null, onPress: null };
  const intl12 = tmp2(1236).intl;
  obj16[1] = intl12.string(first(3403)["6ZxPAQ"]);
  obj16[2] = callback5;
  items9[2] = closure_9(nativeStackNavigation(4745).Button, obj16);
  obj13[1] = items9;
  items6[3] = closure_10(nativeStackNavigation(4733).Stack, obj13);
  obj[1] = items6;
  return closure_10(first2, obj);
};