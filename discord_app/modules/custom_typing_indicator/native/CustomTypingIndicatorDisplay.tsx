// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorDisplay.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CustomTypingIndicatorUtils from "../CustomTypingIndicatorUtils.tsx";
import CustomTypingIndicatorGlyphDefault from "CustomTypingIndicatorGlyph.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const Text_Text = tmp3(4556);
const Stack_Stack = tmp3(4973);
const Pressables = tmp3(5123);
require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
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
      let obj1 = CustomTypingIndicatorUtils;
      let obj = { name: username };
      let formatResult = intl2.format(
        obj1.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion),
        obj,
      );
    }
    let str = "flex-start";
    if (flag2) {
      str = "center";
    }
    obj = { direction: "horizontal", spacing: 8, align: "center", justify: str, children: null };
    let tmp10 = null;
    if (showEmojis) {
      obj1 = { config, size: num };
      tmp10 = React3(CustomTypingIndicatorGlyphDefault, obj1);
    }
    const items = [tmp10];
    const obj2 = {
      style: tmp.text,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      lineClamp: 1,
      maxFontSizeMultiplier: 2,
      includeFontPadding: true,
      ellipsizeMode: "tail",
      children: formatResult,
    };
    items[1] = React3(Text_Text.Text, obj2);
    obj.children = items;
    const tmp8Result = React4(Stack_Stack.Stack, obj);
    let tmp13Result = tmp8Result;
    if (null != onPress) {
      const obj3 = {
        style: tmp.pressable,
        hitSlop: nativeDefault.space.PX_8,
        onPress,
        accessibilityRole: "button",
        children: tmp8Result,
      };
      tmp13Result = React3(Pressables.PressableOpacity, obj3);
    }
    return tmp13Result;
  }
  const intl = util.intl;
  obj = CustomTypingIndicatorUtils;
  formatResult = intl.string(obj.getCustomTypingIndicatorSuggestionMessage(config.typingSuggestion));
}
