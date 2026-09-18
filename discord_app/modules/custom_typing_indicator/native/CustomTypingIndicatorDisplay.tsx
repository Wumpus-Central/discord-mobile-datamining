// === Module 12222: CustomTypingIndicatorDisplay ===

// Module 12222 (CustomTypingIndicatorDisplay)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 12213 */;
import CustomTypingIndicatorGlyphDefault from "CustomTypingIndicatorGlyph" /* 12223 */;
import noop from "module_19" /* 19 */;

const Text_Text = tmp3(4718);
const Stack_Stack = tmp3(5142);
const Pressables = tmp3(5292);
require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4722);
let closure_5 = createStyles.createStyles(() => ({ text: { flexShrink: 1 }, pressable: { flex: 1 } }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDisplay.tsx");

export default function CustomTypingIndicatorDisplay(showName) {
  ({ config, username, showEmojis } = showName);
  if (showEmojis === undefined) {
    showEmojis = true;
  }
  let flag = showName.showName;
  if (flag === undefined) {
    flag = true;
  }
  let num = showName.emojiSize;
  if (num === undefined) {
    num = 14;
  }
  let flag2 = showName.justifyCenter;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = showName.onPress;
  const tmp = closure_5();
  if (flag) {
    if (null != username) {
      const intl2 = util.intl;
      const obj3 = { name: username };
      let formatResult = intl2.format(CustomTypingIndicatorUtils.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion), obj3);
    }
    let str = "flex-start";
    if (flag2) {
      str = "center";
    }
    const obj4 = { direction: "horizontal", spacing: 8, align: "center", justify: str, children: null };
    let tmp10 = null;
    if (showEmojis) {
      const obj5 = { config, size: num };
      tmp10 = React3(CustomTypingIndicatorGlyphDefault, obj5);
    }
    const items = [tmp10, ];
    const obj6 = { style: tmp.text, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, maxFontSizeMultiplier: 2, includeFontPadding: true, ellipsizeMode: "tail", children: formatResult };
    items[1] = React3(Text_Text.Text, obj6);
    obj4.children = items;
    const tmp8Result = React4(Stack_Stack.Stack, obj4);
    let tmp13Result = tmp8Result;
    if (null != onPress) {
      const obj7 = { style: tmp.pressable, hitSlop: nativeDefault.space.PX_8, onPress, accessibilityRole: "button", children: tmp8Result };
      tmp13Result = React3(Pressables.PressableOpacity, obj7);
    }
    return tmp13Result;
  }
  const intl = util.intl;
  formatResult = intl.string(CustomTypingIndicatorUtils.getCustomTypingIndicatorSuggestionMessage(config.typingSuggestion));
};