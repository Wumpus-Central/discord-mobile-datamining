// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorDisplay.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../intl/CustomTypingIndicator.messages.js";
import Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import items2 from "../CustomTypingIndicatorUtils.tsx";
import CustomTypingIndicatorGlyphDefault from "CustomTypingIndicatorGlyph.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles(() => ({ text: { flexShrink: 1 } }));
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
    num = 16;
  }
  ({ justifyCenter, textEmojiLineHeight, bypassReducedMotionCheck } = showName);
  if (justifyCenter === undefined) {
    justifyCenter = false;
  }
  const onPressGlyph = showName.onPressGlyph;
  if (flag) {
    if (null != username) {
      const intl2 = getSystemLocale.intl;
      obj1 = items2;
      let obj = { name: null };
      obj[0] = username;
      let formatResult = intl2.format(obj1.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion), obj);
      let tmp5 = require;
    }
    obj = { config: null, size: null, textEmojiLineHeight: null, bypassReducedMotionCheck: null };
    obj[0] = config;
    obj[1] = num;
    obj[2] = textEmojiLineHeight;
    obj[3] = bypassReducedMotionCheck;
    const tmp10 = callback(CustomTypingIndicatorGlyphDefault, obj);
    let str = "flex-start";
    if (justifyCenter) {
      str = "center";
    }
    obj1 = { direction: "horizontal", spacing: 8, align: "center", justify: null, children: null };
    obj1[3] = str;
    if (showEmojis) {
      let tmp8Result = tmp10;
      if (null != onPressGlyph) {
        const obj2 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
        obj2[0] = onPressGlyph;
        const intl3 = getSystemLocale.intl;
        obj2[2] = intl3.string(messagesProxyDefault.BstttJ);
        obj2[3] = tmp10;
        tmp8Result = tmp8(PressableBase.PressableOpacity, obj2);
      }
      showEmojis = tmp8Result;
    }
    const items = [showEmojis, ];
    const obj3 = { style: null, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, maxFontSizeMultiplier: 2, ellipsizeMode: "tail", children: null };
    obj3[0] = tmp.text;
    obj3[6] = formatResult;
    items[1] = callback(Text.Text, obj3);
    obj1[4] = items;
    return closure_4(Stack.Stack, obj1);
  }
  const intl = getSystemLocale.intl;
  obj = items2;
  formatResult = intl.string(obj.getCustomTypingIndicatorSuggestionMessage(config.typingSuggestion));
  tmp5 = require;
};