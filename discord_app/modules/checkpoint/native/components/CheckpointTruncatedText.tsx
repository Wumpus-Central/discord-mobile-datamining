// === Module 12842: CheckpointTruncatedText ===

// Module 12842 (CheckpointTruncatedText)
import Text_Text from "Text/Text" /* 5603 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5694 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const measure = StyleSheet.create({ measure: { position: "absolute", left: 0, right: 0, opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointTruncatedText.tsx");

export default function CheckpointTruncatedText(text) {
  text = text.text;
  require = text;
  const guildId = text.guildId;
  ({ variant, style } = text);
  dependencyMap = undefined;
  [tmp2, c2] = noop.useState(false);
  items = [text, guildId];
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.lines.length > 1);
  }, []);
  const obj = { style: measure.measure, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const callback1 = noop.useCallback(() => {
    ToastActionCreatorsDefault.open("CHECKPOINT_TRUNCATED_TEXT_" + guildId, { text });
  }, items);
  obj.children = closure_6(Text_Text.Text, { variant, style, onTextLayout: callback, children: text });
  const items1 = [closure_6(closure_5, obj), ];
  const obj2 = { variant, style, lineClamp: 1, ellipsizeMode: "tail", accessibilityRole: "text", onPress: null, children: null };
  let tmp8;
  if (tmp2) {
    tmp8 = callback1;
  }
  const obj3 = { children: null };
  obj2.onPress = tmp8;
  obj2.children = text;
  items1[1] = closure_6(Text_Text.Text, obj2);
  obj3.children = items1;
  return closure_7(closure_5, obj3);
};