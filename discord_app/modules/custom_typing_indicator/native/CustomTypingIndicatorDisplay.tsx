// === Module 11594: CustomTypingIndicatorDisplay ===

// Module 11594 (CustomTypingIndicatorDisplay)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import Pressables from "Pressables" /* 5909 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 11587 */;
import CustomTypingIndicatorGlyphDefault from "CustomTypingIndicatorGlyph" /* 11595 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles(() => ({ text: { flexShrink: 1 }, pressable: { flex: 1 } }));
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let config;
  let emojiSize;
  let items;
  let justifyCenter;
  let onPress;
  let showEmojis;
  let showName;
  let tmp8;
  let username;
  const obj = react2;
  const cResult = obj.c(19);
  ({ config, username, showEmojis, showName, emojiSize, justifyCenter, onPress } = arg0);
  let num = 14;
  if (undefined !== emojiSize) {
    num = emojiSize;
  }
  const tmp6 = undefined !== justifyCenter && justifyCenter;
  const tmp7 = closure_5();
  if (cResult[0] === config.typingSuggestion) {
    if (cResult[1] === (undefined === showName || showName)) {
      if (cResult[2] === username) {
        tmp8 = cResult[3];
      }
      let str = "flex-start";
      if (tmp6) {
        str = "center";
      }
      if (cResult[4] === config) {
        if (cResult[5] === num) {
          let tmp11;
          if (cResult[6] === (undefined === showEmojis || showEmojis)) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp7.text) {
            let tmp15;
            if (cResult[9] === tmp8) {
              tmp15 = cResult[10];
            }
            if (cResult[11] === str) {
              if (cResult[12] === tmp11) {
                let tmp18;
                if (cResult[13] === tmp15) {
                  tmp18 = cResult[14];
                }
                let tmp22 = tmp18;
                if (null != onPress) {
                  if (cResult[15] === tmp18) {
                    if (cResult[16] === onPress) {
                      let tmp23;
                      if (cResult[17] === tmp7.pressable) {
                        tmp23 = cResult[18];
                      }
                      tmp22 = tmp23;
                    }
                  }
                  const obj2 = { style: tmp7.pressable, hitSlop: nativeDefault.space.PX_8, onPress, accessibilityRole: "button", children: tmp18 };
                  const PressableOpacity = Pressables.PressableOpacity;
                  const tmp26 = _false(PressableOpacity, obj2);
                  cResult[15] = tmp18;
                  cResult[16] = onPress;
                  cResult[17] = tmp7.pressable;
                  cResult[18] = tmp26;
                  tmp23 = tmp26;
                }
                return tmp22;
              }
            }
            const obj3 = { direction: "horizontal", spacing: 8, align: "center", justify: str, children: items };
            items = [tmp11, tmp15];
            const tmp20 = React3(Stack_Stack.Stack, obj3);
            cResult[11] = str;
            cResult[12] = tmp11;
            cResult[13] = tmp15;
            cResult[14] = tmp20;
            tmp18 = tmp20;
          }
          const obj4 = { style: tmp7.text, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, maxFontSizeMultiplier: 2, includeFontPadding: true, ellipsizeMode: "tail", children: tmp8 };
          const tmp17 = _false(Text_Text.Text, obj4);
          cResult[8] = tmp7.text;
          cResult[9] = tmp8;
          cResult[10] = tmp17;
          tmp15 = tmp17;
        }
      }
      let tmp12 = null;
      if (undefined === showEmojis || showEmojis) {
        const obj5 = { config, size: num };
        tmp12 = _false(CustomTypingIndicatorGlyphDefault, obj5);
      }
      cResult[4] = config;
      cResult[5] = num;
      cResult[6] = undefined === showEmojis || showEmojis;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    }
  }
  if (undefined === showName || showName) {
    let formatResult;
    if (null != username) {
      const intl2 = intl3.intl;
      const format = intl2.format;
      const obj6 = { name: username };
      const tmpResult = CustomTypingIndicatorUtils;
      formatResult = format(tmpResult.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion), obj6);
    }
    cResult[0] = config.typingSuggestion;
    cResult[1] = undefined === showName || showName;
    cResult[2] = username;
    cResult[3] = formatResult;
    tmp8 = formatResult;
  }
  const intl = intl3.intl;
  const string = intl.string;
  const tmpResult2 = CustomTypingIndicatorUtils;
  formatResult = string(tmpResult2.getCustomTypingIndicatorSuggestionMessage(config.typingSuggestion));
}) : ((showName) => {
  let config;
  let items;
  let showEmojis;
  let username;
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
    let formatResult;
    if (null != username) {
      const intl2 = intl3.intl;
      const format = intl2.format;
      const obj3 = { name: username };
      const obj2 = CustomTypingIndicatorUtils;
      formatResult = format(obj2.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion), obj3);
    }
    let str = "flex-start";
    const Stack = Stack_Stack.Stack;
    if (flag2) {
      str = "center";
    }
    let tmp10 = null;
    const obj4 = { direction: "horizontal", spacing: 8, align: "center", justify: str, children: items };
    if (showEmojis) {
      const obj5 = { config, size: num };
      tmp10 = _false(CustomTypingIndicatorGlyphDefault, obj5);
    }
    items = [tmp10, ];
    const obj6 = { style: tmp.text, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, maxFontSizeMultiplier: 2, includeFontPadding: true, ellipsizeMode: "tail", children: formatResult };
    items[1] = _false(Text_Text.Text, obj6);
    const tmp8Result = React3(Stack, obj4);
    let tmp13Result = tmp8Result;
    if (null != onPress) {
      const obj7 = { style: tmp.pressable, hitSlop: nativeDefault.space.PX_8, onPress, accessibilityRole: "button", children: tmp8Result };
      const PressableOpacity = Pressables.PressableOpacity;
      tmp13Result = _false(PressableOpacity, obj7);
    }
    return tmp13Result;
  }
  const intl = intl3.intl;
  const string = intl.string;
  const obj = CustomTypingIndicatorUtils;
  formatResult = string(obj.getCustomTypingIndicatorSuggestionMessage(config.typingSuggestion));
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDisplay.tsx");

export default tmp4;