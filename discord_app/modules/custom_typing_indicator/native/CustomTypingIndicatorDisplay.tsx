// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorDisplay.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import items2 from "../CustomTypingIndicatorUtils.tsx";
import CustomTypingIndicatorGlyphDefault from "CustomTypingIndicatorGlyph.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles(() => ({ text: { flexShrink: 1 }, pressable: { flex: 1 } }));
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDisplay.tsx");

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
  const tmp = callback2();
  if (flag) {
    if (null != username) {
      const intl2 = getSystemLocale.intl;
      obj1 = items2;
      let obj = { name: null };
      obj[0] = username;
      let formatResult = intl2.format(obj1.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion), obj);
      let tmp3 = require;
    }
    let str = "flex-start";
    if (flag2) {
      str = "center";
    }
    obj = { direction: "horizontal", spacing: 8, align: "center", justify: null, children: null };
    obj[3] = str;
    let tmp10 = null;
    if (showEmojis) {
      obj1 = { config: null, size: null };
      obj1[0] = config;
      obj1[1] = num;
      tmp10 = callback(CustomTypingIndicatorGlyphDefault, obj1);
    }
    const items = [tmp10, ];
    const obj2 = { style: null, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, maxFontSizeMultiplier: 2, includeFontPadding: true, ellipsizeMode: "tail", children: null };
    obj2[0] = tmp.text;
    obj2[7] = formatResult;
    items[1] = callback(Text.Text, obj2);
    obj[4] = items;
    const tmp8Result = closure_4(Stack.Stack, obj);
    let tmp13Result = tmp8Result;
    if (null != onPress) {
      const obj3 = { style: null, hitSlop: null, onPress: null, accessibilityRole: "button", children: null };
      obj3[0] = tmp.pressable;
      obj3[1] = ThemesDefault.space.PX_8;
      obj3[2] = onPress;
      obj3[4] = tmp8Result;
      tmp13Result = callback(PressableBase.PressableOpacity, obj3);
    }
    return tmp13Result;
  }
  tmp3 = require;
  const intl = getSystemLocale.intl;
  obj = items2;
  formatResult = intl.string(obj.getCustomTypingIndicatorSuggestionMessage(config.typingSuggestion));
};