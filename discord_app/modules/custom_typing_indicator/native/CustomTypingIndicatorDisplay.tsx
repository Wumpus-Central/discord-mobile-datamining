// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorDisplay.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CustomTypingIndicatorGlyphDefault from "CustomTypingIndicatorGlyph.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const util = PressableOpacity(1126);
const Text_Text = PressableOpacity(4886);
const Stack_Stack = PressableOpacity(5593);
const Pressables = PressableOpacity(5909);
const CustomTypingIndicatorUtils = PressableOpacity(11587);
require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4890);
let closure_5 = createStyles.createStyles(() => ({ text: { flexShrink: 1 }, pressable: { flex: 1 } }));
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDisplay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let PressableOpacity = require;
      let PX_8 = dependencyMap;
      const cResult = c.c(19);
      ({ config, username, showEmojis, showName, emojiSize, justifyCenter, onPress } = arg0);
      let num = 14;
      if (undefined !== emojiSize) {
        num = emojiSize;
      }
      let pressable = closure_5();
      if (cResult[0] === config.typingSuggestion) {
        if (cResult[1] === tmp3) {
          if (cResult[2] === username) {
            let str = "flex-start";
            if (tmp4) {
              str = "center";
            }
            if (cResult[4] === config) {
              if (cResult[5] === num) {
                if (cResult[6] === tmp2) {
                  let tmp9 = cResult[7];
                }
                if (cResult[8] === pressable.text) {
                  if (cResult[9] === tmp5) {
                    let tmp13 = cResult[10];
                  }
                  if (cResult[11] === str) {
                    if (cResult[12] === tmp9) {
                      if (cResult[13] === tmp13) {
                        let tmp16 = cResult[14];
                      }
                      if (null == onPress) {
                        return tmp16;
                      } else {
                        if (cResult[15] === tmp16) {
                          if (cResult[16] === onPress) {
                          }
                        }
                        PressableOpacity = Pressables.PressableOpacity;
                        const obj2 = {
                          style: pressable.pressable,
                          hitSlop: null,
                          onPress: null,
                          accessibilityRole: "button",
                          children: null,
                        };
                        PX_8 = nativeDefault.space.PX_8;
                        obj2.hitSlop = PX_8;
                        obj2.onPress = onPress;
                        obj2.children = tmp16;
                        const tmp24 = React3(PressableOpacity, obj2);
                        cResult[15] = tmp16;
                        cResult[16] = onPress;
                        pressable = pressable.pressable;
                        cResult[17] = pressable;
                        cResult[18] = tmp24;
                      }
                    }
                  }
                  const obj3 = { direction: "horizontal", spacing: 8, align: "center", justify: str, children: null };
                  const items = [tmp9, tmp13];
                  obj3.children = items;
                  const tmp18 = React4(Stack_Stack.Stack, obj3);
                  cResult[11] = str;
                  cResult[12] = tmp9;
                  cResult[13] = tmp13;
                  cResult[14] = tmp18;
                  tmp16 = tmp18;
                }
                const obj4 = {
                  style: pressable.text,
                  variant: "text-xs/medium",
                  color: "interactive-text-default",
                  lineClamp: 1,
                  maxFontSizeMultiplier: 2,
                  includeFontPadding: true,
                  ellipsizeMode: "tail",
                  children: tmp5,
                };
                const tmp15 = React3(Text_Text.Text, obj4);
                cResult[8] = pressable.text;
                cResult[9] = tmp5;
                cResult[10] = tmp15;
                tmp13 = tmp15;
              }
            }
            let tmp10 = null;
            if (tmp2) {
              const obj5 = { config, size: num };
              tmp10 = React3(CustomTypingIndicatorGlyphDefault, obj5);
            }
            cResult[4] = config;
            cResult[5] = num;
            cResult[6] = tmp2;
            cResult[7] = tmp10;
            tmp9 = tmp10;
          }
        }
      }
      if (!(undefined === showName || showName)) {
        const intl = util.intl;
        let stringResult = intl.string(
          CustomTypingIndicatorUtils.getCustomTypingIndicatorSuggestionMessage(config.typingSuggestion),
        );
        cResult[0] = config.typingSuggestion;
        cResult[1] = tmp3;
        cResult[2] = username;
        cResult[3] = stringResult;
        const PressableOpacityResult = CustomTypingIndicatorUtils;
      }
      const intl2 = util.intl;
      tmp4 = undefined !== justifyCenter && justifyCenter;
      stringResult = intl2.format(
        CustomTypingIndicatorUtils.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion),
        { name: username },
      );
      const PressableOpacityResult1 = CustomTypingIndicatorUtils;
    }
  : (showName) => {
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
          let formatResult = intl2.format(
            CustomTypingIndicatorUtils.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion),
            obj3,
          );
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
        const items = [tmp10];
        const obj6 = {
          style: tmp.text,
          variant: "text-xs/medium",
          color: "interactive-text-default",
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          includeFontPadding: true,
          ellipsizeMode: "tail",
          children: formatResult,
        };
        items[1] = React3(Text_Text.Text, obj6);
        obj4.children = items;
        const tmp8Result = React4(Stack_Stack.Stack, obj4);
        let tmp13Result = tmp8Result;
        if (null != onPress) {
          const obj7 = {
            style: tmp.pressable,
            hitSlop: nativeDefault.space.PX_8,
            onPress,
            accessibilityRole: "button",
            children: tmp8Result,
          };
          tmp13Result = React3(Pressables.PressableOpacity, obj7);
        }
        return tmp13Result;
      }
      const intl = util.intl;
      formatResult = intl.string(
        CustomTypingIndicatorUtils.getCustomTypingIndicatorSuggestionMessage(config.typingSuggestion),
      );
    };
